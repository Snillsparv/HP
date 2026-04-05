import { randomBytes } from 'crypto';
import bcrypt from 'bcryptjs';
import db from './db.js';

export interface User {
  id: number;
  name: string;
  email: string;
  google_id?: string;
  created_at: string;
}

export function createUser(name: string, email: string, password: string): User {
  const hash = bcrypt.hashSync(password, 10);
  const stmt = db.prepare('INSERT INTO users (name, email, password_hash) VALUES (?, ?, ?)');
  const result = stmt.run(name, email, hash);
  return { id: result.lastInsertRowid as number, name, email, created_at: new Date().toISOString() };
}

export function createGoogleUser(name: string, email: string, googleId: string): User {
  const stmt = db.prepare('INSERT INTO users (name, email, google_id) VALUES (?, ?, ?)');
  const result = stmt.run(name, email, googleId);
  return { id: result.lastInsertRowid as number, name, email, google_id: googleId, created_at: new Date().toISOString() };
}

export function findUserByEmail(email: string): (User & { password_hash?: string }) | undefined {
  return db.prepare('SELECT * FROM users WHERE email = ?').get(email) as any;
}

export function findUserByGoogleId(googleId: string): User | undefined {
  return db.prepare('SELECT * FROM users WHERE google_id = ?').get(googleId) as any;
}

export function findUserById(id: number): User | undefined {
  return db.prepare('SELECT id, name, email, google_id, created_at FROM users WHERE id = ?').get(id) as any;
}

export function verifyPassword(password: string, hash: string): boolean {
  return bcrypt.compareSync(password, hash);
}

export function createSession(userId: number): string {
  const token = randomBytes(32).toString('hex');
  const expires = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(); // 30 days
  db.prepare('INSERT INTO sessions (token, user_id, expires_at) VALUES (?, ?, ?)').run(token, userId, expires);
  return token;
}

export function getUserFromSession(token: string): User | undefined {
  const row = db.prepare(`
    SELECT u.id, u.name, u.email, u.google_id, u.created_at
    FROM sessions s JOIN users u ON s.user_id = u.id
    WHERE s.token = ? AND s.expires_at > datetime('now')
  `).get(token) as any;
  return row || undefined;
}

export function deleteSession(token: string) {
  db.prepare('DELETE FROM sessions WHERE token = ?').run(token);
}

export function getSessionFromCookies(cookieHeader: string | null): User | undefined {
  if (!cookieHeader) return undefined;
  const match = cookieHeader.match(/session=([a-f0-9]+)/);
  if (!match) return undefined;
  return getUserFromSession(match[1]);
}
