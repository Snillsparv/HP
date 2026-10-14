// Spamskyddet för forumet: kontroll av nya inlägg, logg över stoppade försök
// och städning av spam som hann postas innan filtret fanns.
import pool from './db.js';
import './alerts.js';
import { spamOrsak, SAKER_SPAM, SPAM_MEDDELANDE } from './forum-spamfilter.js';

const ADMIN_EMAIL = 'snillsparv@gmail.com';

await pool.query(`
  CREATE TABLE IF NOT EXISTS forum_spam_log (
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    ip TEXT,
    orsak TEXT NOT NULL,
    text TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
  );
  DELETE FROM forum_spam_log WHERE created_at < NOW() - INTERVAL '60 days';
`);

// Konton som inte gjort något annat på sajten än att skriva i forumet.
const UTAN_ANNAN_AKTIVITET = `
  NOT EXISTS (SELECT 1 FROM test_results x WHERE x.user_id = u.id)
  AND NOT EXISTS (SELECT 1 FROM question_events x WHERE x.user_id = u.id)
  AND NOT EXISTS (SELECT 1 FROM word_progress x WHERE x.user_id = u.id)
  AND NOT EXISTS (SELECT 1 FROM learn_activity x WHERE x.user_id = u.id)
`;

export function klientIp(request: Request): string {
  return (request.headers.get('x-forwarded-for') || '').split(',')[0].trim()
    || request.headers.get('x-real-ip') || '';
}

export async function loggaSpam(userId: number | null, ip: string, orsak: string, text: string) {
  await pool.query(
    'INSERT INTO forum_spam_log (user_id, ip, orsak, text) VALUES ($1, $2, $3, $4)',
    [userId, ip, orsak, text.slice(0, 600)]
  ).catch(() => {});
}

// Kontrollerar ett nytt inlägg innan det sparas. Returnerar null om det får
// publiceras, annars ett meddelande till skribenten. Ett helt nytt konto som
// skickar uppenbar spam raderas direkt (det loggas också ut), så att botens
// konto inte blir kvar.
export async function kontrolleraInlagg(
  userId: number, typ: 'trad' | 'svar', text: string, ip: string
): Promise<{ fel: string; raderat: boolean } | null> {
  const { rows: [u] } = await pool.query(
    `SELECT u.created_at > NOW() - INTERVAL '24 hours' AS ny, u.email,
       (SELECT COUNT(*) FROM threads t WHERE t.user_id = u.id AND t.created_at > NOW() - INTERVAL '1 hour')::int AS tradar_timme,
       (SELECT COUNT(*) FROM replies r WHERE r.user_id = u.id AND r.created_at > NOW() - INTERVAL '10 minutes')::int AS svar_10min,
       (${UTAN_ANNAN_AKTIVITET}
        AND NOT EXISTS (SELECT 1 FROM threads t WHERE t.user_id = u.id)
        AND NOT EXISTS (SELECT 1 FROM replies r WHERE r.user_id = u.id)) AS tomt
     FROM users u WHERE u.id = $1`,
    [userId]
  );
  if (!u) return { fel: 'Kontot finns inte.', raderat: false };
  if (u.email === ADMIN_EMAIL) return null;

  const orsak = spamOrsak(text, { nyttKonto: u.ny });
  if (orsak) {
    let raderat = false;
    if (SAKER_SPAM.includes(orsak) && u.ny && u.tomt) {
      await pool.query('DELETE FROM users WHERE id = $1', [userId]);
      raderat = true;
    }
    await loggaSpam(raderat ? null : userId, ip, raderat ? `${orsak} (kontot raderat)` : orsak, text);
    return { fel: SPAM_MEDDELANDE[orsak], raderat };
  }

  if (typ === 'trad' && u.tradar_timme >= 3) {
    await loggaSpam(userId, ip, 'tempo', text);
    return { fel: 'Du har startat flera trådar på kort tid. Vänta en stund och försök igen.', raderat: false };
  }
  if (typ === 'svar' && u.svar_10min >= 8) {
    await loggaSpam(userId, ip, 'tempo', text);
    return { fel: 'Du har skrivit många svar på kort tid. Vänta en stund och försök igen.', raderat: false };
  }
  // Nödbroms: om en våg av nya konton startar trådar (som filtret inte känner
  // igen) stoppas nya konton tillfälligt. Vanliga besökare märker inget,
  // eftersom forumet normalt får några få trådar i veckan.
  if (typ === 'trad' && u.ny) {
    const { rows: [v] } = await pool.query(
      `SELECT COUNT(*)::int AS n FROM threads t JOIN users u ON u.id = t.user_id
       WHERE t.created_at > NOW() - INTERVAL '1 hour' AND u.created_at > NOW() - INTERVAL '24 hours'`
    );
    if (v.n >= 5) {
      await loggaSpam(userId, ip, 'nodbroms', text);
      return { fel: 'Forumet tar emot ovanligt många nya trådar just nu. Försök igen om en stund.', raderat: false };
    }
  }
  return null;
}

// Spammet började i oktober 2026. Äldre inlägg rörs aldrig.
const SPAM_START = '2026-10-01';

// Tar bort inlägg som filtret säkert klassar som spam och konton som bara
// använts till spam. Samma regler som vid postning, så inget som släppts
// igenom av filtret tas bort i efterhand.
export async function stadaSpam(): Promise<{ tradar: number; svar: number; konton: number }> {
  const { rows: tradar } = await pool.query(
    'SELECT id, user_id, title, body FROM threads WHERE created_at >= $1', [SPAM_START]
  );
  const { rows: svar } = await pool.query(
    'SELECT id, user_id, body FROM replies WHERE created_at >= $1', [SPAM_START]
  );
  const arSpam = (text: string) => {
    const o = spamOrsak(text);
    return !!o && SAKER_SPAM.includes(o);
  };
  const spamTradar = tradar.filter(t => arSpam(`${t.title}\n${t.body}`));
  const spamSvar = svar.filter(r => arSpam(r.body));
  if (!spamTradar.length && !spamSvar.length) return { tradar: 0, svar: 0, konton: 0 };

  const skribenter = [...new Set([...spamTradar, ...spamSvar].map(p => p.user_id))];
  await pool.query('DELETE FROM threads WHERE id = ANY($1::int[])', [spamTradar.map(t => t.id)]);
  await pool.query('DELETE FROM replies WHERE id = ANY($1::int[])', [spamSvar.map(r => r.id)]);
  const { rowCount } = await pool.query(
    `DELETE FROM users u WHERE u.id = ANY($1::int[])
       AND u.email <> $2 AND u.created_at >= $3
       AND NOT EXISTS (SELECT 1 FROM threads t WHERE t.user_id = u.id)
       AND NOT EXISTS (SELECT 1 FROM replies r WHERE r.user_id = u.id)
       AND ${UTAN_ANNAN_AKTIVITET}`,
    [skribenter, ADMIN_EMAIL, SPAM_START]
  );
  const res = { tradar: spamTradar.length, svar: spamSvar.length, konton: rowCount || 0 };
  await pool.query(
    'INSERT INTO admin_alerts (type, message) VALUES ($1, $2)',
    ['forum-spam', `Spamstädning i forumet: ${res.tradar} trådar, ${res.svar} svar och ${res.konton} spamkonton togs bort.`]
  );
  console.log('Spamstädning i forumet:', res);
  return res;
}

// Körs när modulen laddas och en gång till en kvart senare, för att även få
// med det som postades via den gamla versionen medan den nya startade.
await stadaSpam().catch(e => console.error('Spamstädningen misslyckades', e));
setTimeout(() => { stadaSpam().catch(() => {}); }, 15 * 60 * 1000).unref?.();
