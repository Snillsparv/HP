import pool from './db.js';

await pool.query(`
  CREATE TABLE IF NOT EXISTS admin_alerts (
    id SERIAL PRIMARY KEY,
    type TEXT NOT NULL,
    message TEXT NOT NULL,
    seen BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ DEFAULT NOW()
  );
`);

const WATCH_PATTERNS = ['otto', 'seipel'];

export async function checkNewUser(name: string, email: string) {
  const lower = `${name} ${email}`.toLowerCase();
  const matched = WATCH_PATTERNS.filter(p => lower.includes(p));
  if (matched.length === 0) return;

  await pool.query(
    'INSERT INTO admin_alerts (type, message) VALUES ($1, $2)',
    ['watched-user', `Bevakad registrering: ${name} (${email}) — matchade: ${matched.join(', ')}`]
  );
}
