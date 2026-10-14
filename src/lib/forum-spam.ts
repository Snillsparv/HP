// Spamskyddet för forumet: kontroll av nya inlägg, logg över stoppade försök
// och städning av spam som postades innan filtret fanns.
import pool from './db.js';
import './alerts.js';
import { spamOrsak, arEntydigSpam, namnArSpam, SPAM_MEDDELANDE, RADERAT_MEDDELANDE, STADA_SPAM } from './forum-spamfilter.js';

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

// Konton som inte gjort något annat på sajten än att (eventuellt) skriva i
// forumet: inga provresultat, ingen ordträning, ingen fokuserad träning.
const UTAN_ANNAN_AKTIVITET = `
  NOT EXISTS (SELECT 1 FROM test_results x WHERE x.user_id = u.id)
  AND NOT EXISTS (SELECT 1 FROM question_events x WHERE x.user_id = u.id)
  AND NOT EXISTS (SELECT 1 FROM fokus_rundor x WHERE x.user_id = u.id)
  AND NOT EXISTS (SELECT 1 FROM word_progress x WHERE x.user_id = u.id)
  AND NOT EXISTS (SELECT 1 FROM learn_activity x WHERE x.user_id = u.id)
`;

// Ny i forumet: har inget inlägg som är äldre än ett dygn.
const NY_I_FORUMET = (alias: string) => `
  NOT EXISTS (SELECT 1 FROM threads t2 WHERE t2.user_id = ${alias}.id AND t2.created_at < NOW() - INTERVAL '24 hours')
  AND NOT EXISTS (SELECT 1 FROM replies r2 WHERE r2.user_id = ${alias}.id AND r2.created_at < NOW() - INTERVAL '24 hours')
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
// skickar entydig spam (se arEntydigSpam) raderas direkt, så att botens konto
// inte blir kvar; i alla andra fall stoppas bara inlägget.
export async function kontrolleraInlagg(
  userId: number, typ: 'trad' | 'svar', text: string, ip: string
): Promise<{ fel: string; raderat: boolean } | null> {
  const { rows: [u] } = await pool.query(
    `SELECT u.name, u.email,
       u.created_at > NOW() - INTERVAL '24 hours' AS nytt_konto,
       (${NY_I_FORUMET('u')}) AS ny_i_forumet,
       (${UTAN_ANNAN_AKTIVITET}) AS utan_aktivitet,
       NOT EXISTS (SELECT 1 FROM threads t WHERE t.user_id = u.id)
         AND NOT EXISTS (SELECT 1 FROM replies r WHERE r.user_id = u.id) AS utan_inlagg,
       (SELECT COUNT(*) FROM threads t WHERE t.user_id = u.id AND t.created_at > NOW() - INTERVAL '1 hour')::int AS tradar_timme,
       (SELECT COUNT(*) FROM replies r WHERE r.user_id = u.id AND r.created_at > NOW() - INTERVAL '10 minutes')::int AS svar_10min
     FROM users u WHERE u.id = $1`,
    [userId]
  );
  if (!u) return { fel: 'Kontot finns inte.', raderat: false };
  if (u.email === ADMIN_EMAIL) return null;

  // Länkregeln gäller konton som är nya i forumet och inte gjort något annat
  // på sajten, så att ett konto som registrerats i förväg inte kommer runt den.
  const nyttKonto = u.nytt_konto || (u.ny_i_forumet && u.utan_aktivitet);

  if (namnArSpam(u.name, { kollaLangd: false })) {
    await loggaSpam(userId, ip, 'namn', `${u.name} <${u.email}>\n${text}`);
    return { fel: 'Ditt användarnamn ser ut som reklam, så inlägget publicerades inte.', raderat: false };
  }

  const orsak = spamOrsak(text, { nyttKonto });
  if (orsak) {
    if (arEntydigSpam(text) && u.nytt_konto && u.utan_aktivitet && u.utan_inlagg) {
      await pool.query('DELETE FROM users WHERE id = $1', [userId]);
      await loggaSpam(null, ip, `${orsak} (kontot raderat: ${u.name} <${u.email}>)`, text);
      return { fel: RADERAT_MEDDELANDE, raderat: true };
    }
    await loggaSpam(userId, ip, orsak, text);
    return { fel: SPAM_MEDDELANDE[orsak], raderat: false };
  }

  if (typ === 'trad' && u.tradar_timme >= 3) {
    await loggaSpam(userId, ip, 'tempo', text);
    return { fel: 'Du har startat flera trådar på kort tid. Vänta en stund och försök igen.', raderat: false };
  }
  if (typ === 'svar' && u.svar_10min >= 8) {
    await loggaSpam(userId, ip, 'tempo', text);
    return { fel: 'Du har skrivit många svar på kort tid. Vänta en stund och försök igen.', raderat: false };
  }
  // Nödbroms: om en våg av konton som är nya i forumet startar trådar (som
  // filtret inte känner igen) stoppas fler sådana trådar en stund. Forumet får
  // normalt några få trådar i veckan, och svar påverkas inte.
  if (typ === 'trad' && nyttKonto) {
    const { rows: [v] } = await pool.query(
      `SELECT COUNT(*)::int AS n FROM threads t JOIN users u ON u.id = t.user_id
       WHERE t.created_at > NOW() - INTERVAL '1 hour' AND u.email <> $1 AND ${NY_I_FORUMET('u')}`,
      [ADMIN_EMAIL]
    );
    if (v.n >= 8) {
      await loggaSpam(userId, ip, 'nodbroms', text);
      return { fel: 'Forumet tar emot ovanligt många nya trådar just nu. Försök igen om en stund.', raderat: false };
    }
  }
  return null;
}

// Spamperioden: botens första inlägg kom 10 oktober 2026, och filtret var i
// drift från 14 oktober kl. 13.30 (svensk tid 15.30). Bara inlägg från den
// perioden, av konton som skapades under den, städas. Allt som postats senare
// har redan gått igenom filtret och bedöms aldrig om, och admins inlägg rörs inte.
const SPAM_START = '2026-10-01T00:00:00Z';
const SPAM_SLUT = '2026-10-14T13:30:00Z';

export async function stadaSpam(): Promise<{ tradar: number; svar: number; foljdsvar: number; konton: number }> {
  const urval = (tabell: 'threads' | 'replies', kolumner: string) => pool.query(
    `SELECT ${kolumner} FROM ${tabell} p JOIN users u ON u.id = p.user_id
     WHERE p.created_at >= $1 AND p.created_at < $2 AND u.created_at >= $1 AND u.email <> $3`,
    [SPAM_START, SPAM_SLUT, ADMIN_EMAIL]
  );
  const { rows: tradar } = await urval('threads', 'p.id, p.user_id, p.title, p.body');
  const { rows: svar } = await urval('replies', 'p.id, p.user_id, p.body');
  const arSpam = (text: string) => {
    const o = spamOrsak(text);
    return !!o && STADA_SPAM.includes(o);
  };
  const tradIds = tradar.filter(t => arSpam(`${t.title}\n${t.body}`));
  const svarIds = svar.filter(r => arSpam(r.body));
  if (!tradIds.length && !svarIds.length) return { tradar: 0, svar: 0, foljdsvar: 0, konton: 0 };

  const skribenter = [...new Set([...tradIds, ...svarIds].map(p => p.user_id))];
  // Svar från andra i spamtrådarna försvinner med trådarna; räkna dem också.
  const { rows: [f] } = await pool.query(
    'SELECT COUNT(*)::int AS n FROM replies WHERE thread_id = ANY($1::int[]) AND NOT (id = ANY($2::int[]))',
    [tradIds.map(t => t.id), svarIds.map(r => r.id)]
  );
  await pool.query('DELETE FROM threads WHERE id = ANY($1::int[])', [tradIds.map(t => t.id)]);
  await pool.query('DELETE FROM replies WHERE id = ANY($1::int[])', [svarIds.map(r => r.id)]);
  const { rowCount } = await pool.query(
    `DELETE FROM users u WHERE u.id = ANY($1::int[])
       AND u.email <> $2 AND u.created_at >= $3
       AND NOT EXISTS (SELECT 1 FROM threads t WHERE t.user_id = u.id)
       AND NOT EXISTS (SELECT 1 FROM replies r WHERE r.user_id = u.id)
       AND ${UTAN_ANNAN_AKTIVITET}`,
    [skribenter, ADMIN_EMAIL, SPAM_START]
  );
  const res = { tradar: tradIds.length, svar: svarIds.length, foljdsvar: f.n, konton: rowCount || 0 };
  await pool.query(
    'INSERT INTO admin_alerts (type, message) VALUES ($1, $2)',
    ['forum-spam', `Spamstädning i forumet: ${res.tradar} trådar och ${res.svar} svar togs bort, ` +
      `plus ${res.foljdsvar} svar som andra skrivit i de trådarna. ${res.konton} konton som bara använts till spam raderades.`]
  );
  console.log('Spamstädning i forumet:', res);
  return res;
}

// Körs i bakgrunden när modulen laddas, och en gång till en kvart senare.
// Eftersom bara spamperioden städas gör den ingenting när den redan är städad.
stadaSpam().catch(e => console.error('Spamstädningen misslyckades', e));
setTimeout(() => { stadaSpam().catch(() => {}); }, 15 * 60 * 1000).unref?.();
