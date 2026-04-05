import db from './db.js';

export interface Thread {
  id: number;
  user_id: number;
  user_name: string;
  category: string;
  title: string;
  body: string;
  created_at: string;
  reply_count: number;
}

export interface Reply {
  id: number;
  thread_id: number;
  user_id: number;
  user_name: string;
  body: string;
  created_at: string;
}

export function getThreads(category?: string): Thread[] {
  if (category) {
    return db.prepare(`
      SELECT t.*, u.name as user_name,
        (SELECT COUNT(*) FROM replies r WHERE r.thread_id = t.id) as reply_count
      FROM threads t JOIN users u ON t.user_id = u.id
      WHERE t.category = ?
      ORDER BY t.created_at DESC
    `).all(category) as Thread[];
  }
  return db.prepare(`
    SELECT t.*, u.name as user_name,
      (SELECT COUNT(*) FROM replies r WHERE r.thread_id = t.id) as reply_count
    FROM threads t JOIN users u ON t.user_id = u.id
    ORDER BY t.created_at DESC
  `).all() as Thread[];
}

export function getThread(id: number): Thread | undefined {
  return db.prepare(`
    SELECT t.*, u.name as user_name,
      (SELECT COUNT(*) FROM replies r WHERE r.thread_id = t.id) as reply_count
    FROM threads t JOIN users u ON t.user_id = u.id
    WHERE t.id = ?
  `).get(id) as Thread | undefined;
}

export function createThread(userId: number, category: string, title: string, body: string): number {
  const result = db.prepare('INSERT INTO threads (user_id, category, title, body) VALUES (?, ?, ?, ?)').run(userId, category, title, body);
  return result.lastInsertRowid as number;
}

export function getReplies(threadId: number): Reply[] {
  return db.prepare(`
    SELECT r.*, u.name as user_name
    FROM replies r JOIN users u ON r.user_id = u.id
    WHERE r.thread_id = ?
    ORDER BY r.created_at ASC
  `).all(threadId) as Reply[];
}

export function createReply(threadId: number, userId: number, body: string): number {
  const result = db.prepare('INSERT INTO replies (thread_id, user_id, body) VALUES (?, ?, ?)').run(threadId, userId, body);
  return result.lastInsertRowid as number;
}
