import { randomBytes } from 'crypto';
import bcrypt from 'bcryptjs';
import pool from './db.js';

export interface User {
  id: number;
  name: string;
  email: string;
  google_id?: string;
  avatar_color?: string;
  train_step?: number;
  is_guest?: boolean;
  created_at: string;
}

export async function createUser(name: string, email: string, password: string): Promise<User> {
  const hash = bcrypt.hashSync(password, 10);
  const { rows } = await pool.query(
    'INSERT INTO users (name, email, password_hash) VALUES ($1, $2, $3) RETURNING id, name, email, created_at',
    [name, email, hash]
  );
  return rows[0];
}

export async function createGoogleUser(name: string, email: string, googleId: string): Promise<User> {
  const { rows } = await pool.query(
    'INSERT INTO users (name, email, google_id) VALUES ($1, $2, $3) RETURNING id, name, email, google_id, created_at',
    [name, email, googleId]
  );
  return rows[0];
}

export async function findUserByEmail(email: string): Promise<(User & { password_hash?: string }) | undefined> {
  const { rows } = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
  return rows[0];
}

export async function findUserByGoogleId(googleId: string): Promise<User | undefined> {
  const { rows } = await pool.query('SELECT id, name, email, google_id, created_at FROM users WHERE google_id = $1', [googleId]);
  return rows[0];
}

export function verifyPassword(password: string, hash: string): boolean {
  return bcrypt.compareSync(password, hash);
}

export async function createSession(userId: number): Promise<string> {
  const token = randomBytes(32).toString('hex');
  const expires = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString();
  await pool.query('INSERT INTO sessions (token, user_id, expires_at) VALUES ($1, $2, $3)', [token, userId, expires]);
  return token;
}

export async function getUserFromSession(token: string): Promise<User | undefined> {
  const { rows } = await pool.query(`
    SELECT u.id, u.name, u.email, u.google_id, u.avatar_color, u.train_step, u.is_guest, u.created_at
    FROM sessions s JOIN users u ON s.user_id = u.id
    WHERE s.token = $1 AND s.expires_at > NOW()
  `, [token]);
  return rows[0];
}

// Osynligt gästkonto så att ordträningen kan användas utan registrering.
// Får en syntetisk e-post eftersom kolumnen är unik och obligatorisk.
export async function createGuestUser(): Promise<User> {
  const tag = randomBytes(12).toString('hex');
  const { rows } = await pool.query(
    `INSERT INTO users (name, email, is_guest) VALUES ('Gäst', $1, TRUE) RETURNING id, name, email, is_guest, created_at`,
    [`gast-${tag}@guest.hpakuten.se`]
  );
  return rows[0];
}

// Registrering medan man har en gästsession: gästen blir det riktiga kontot,
// så att ordframstegen följer med utan någon flytt av data.
export async function upgradeGuestToUser(guestId: number, name: string, email: string, password: string): Promise<User> {
  const hash = bcrypt.hashSync(password, 10);
  const { rows } = await pool.query(
    `UPDATE users SET name = $2, email = $3, password_hash = $4, is_guest = FALSE
     WHERE id = $1 AND is_guest RETURNING id, name, email, created_at`,
    [guestId, name, email, hash]
  );
  return rows[0];
}

export async function upgradeGuestToGoogleUser(guestId: number, name: string, email: string, googleId: string): Promise<User | undefined> {
  const { rows } = await pool.query(
    `UPDATE users SET name = $2, email = $3, google_id = $4, is_guest = FALSE
     WHERE id = $1 AND is_guest RETURNING id, name, email, google_id, created_at`,
    [guestId, name, email, googleId]
  );
  return rows[0];
}

// Inloggning på ett befintligt konto medan man har en gästsession: flytta
// över de ordframsteg som inte krockar och städa bort gästen.
export async function migrateGuestToUser(guestId: number, targetId: number) {
  if (guestId === targetId) return;
  await pool.query(
    `INSERT INTO word_progress (user_id, word_id, box, due_at, reps, lapses, created_at, updated_at)
     SELECT $2, word_id, box, due_at, reps, lapses, created_at, updated_at
     FROM word_progress WHERE user_id = $1
     ON CONFLICT (user_id, word_id) DO NOTHING`,
    [guestId, targetId]
  );
  await pool.query(
    `INSERT INTO learn_activity (user_id, day)
     SELECT $2, day FROM learn_activity WHERE user_id = $1
     ON CONFLICT DO NOTHING`,
    [guestId, targetId]
  );
  await pool.query(`DELETE FROM users WHERE id = $1 AND is_guest`, [guestId]);
}

export async function deleteSession(token: string) {
  await pool.query('DELETE FROM sessions WHERE token = $1', [token]);
}

export async function getSessionFromCookies(cookieHeader: string | null): Promise<User | undefined> {
  if (!cookieHeader) return undefined;
  const match = cookieHeader.match(/session=([a-f0-9]+)/);
  if (!match) return undefined;
  return getUserFromSession(match[1]);
}
