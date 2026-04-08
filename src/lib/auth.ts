import { randomBytes } from 'crypto';
import bcrypt from 'bcryptjs';
import pool from './db.js';

export interface User {
  id: number;
  name: string;
  email: string;
  google_id?: string;
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
    SELECT u.id, u.name, u.email, u.google_id, u.created_at
    FROM sessions s JOIN users u ON s.user_id = u.id
    WHERE s.token = $1 AND s.expires_at > NOW()
  `, [token]);
  return rows[0];
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
