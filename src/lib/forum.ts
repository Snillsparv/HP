import pool from './db.js';

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

export async function getThreads(category?: string): Promise<Thread[]> {
  const base = `
    SELECT t.*, u.name as user_name,
      (SELECT COUNT(*) FROM replies r WHERE r.thread_id = t.id)::int as reply_count
    FROM threads t JOIN users u ON t.user_id = u.id
  `;
  if (category) {
    const { rows } = await pool.query(base + ' WHERE t.category = $1 ORDER BY t.created_at DESC', [category]);
    return rows;
  }
  const { rows } = await pool.query(base + ' ORDER BY t.created_at DESC');
  return rows;
}

export async function getThread(id: number): Promise<Thread | undefined> {
  const { rows } = await pool.query(`
    SELECT t.*, u.name as user_name,
      (SELECT COUNT(*) FROM replies r WHERE r.thread_id = t.id)::int as reply_count
    FROM threads t JOIN users u ON t.user_id = u.id
    WHERE t.id = $1
  `, [id]);
  return rows[0];
}

export async function createThread(userId: number, category: string, title: string, body: string): Promise<number> {
  const { rows } = await pool.query(
    'INSERT INTO threads (user_id, category, title, body) VALUES ($1, $2, $3, $4) RETURNING id',
    [userId, category, title, body]
  );
  return rows[0].id;
}

export async function getReplies(threadId: number): Promise<Reply[]> {
  const { rows } = await pool.query(`
    SELECT r.*, u.name as user_name
    FROM replies r JOIN users u ON r.user_id = u.id
    WHERE r.thread_id = $1
    ORDER BY r.created_at ASC
  `, [threadId]);
  return rows;
}

export async function createReply(threadId: number, userId: number, body: string): Promise<number> {
  const { rows } = await pool.query(
    'INSERT INTO replies (thread_id, user_id, body) VALUES ($1, $2, $3) RETURNING id',
    [threadId, userId, body]
  );
  return rows[0].id;
}
