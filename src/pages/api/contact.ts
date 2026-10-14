import type { APIRoute } from 'astro';
import pool from '../../lib/db.js';
import { formularFel } from '../../lib/forum-spamfilter.js';
import { loggaSpam, klientIp } from '../../lib/forum-spam.js';

// Tillbaka till sidan där formuläret skickades, med en bekräftelse eller ett
// fel vid formuläret längst ner (#kontakt).
function tillbaka(sida: string, status: 'tack' | 'fel' | 'falt') {
  const url = new URL(sida.startsWith('/') && !sida.startsWith('//') ? sida : '/', 'https://x');
  url.searchParams.delete('kontakt');
  url.searchParams.set('kontakt', status);
  return new Response(null, { status: 302, headers: { Location: `${url.pathname}${url.search}#kontakt` } });
}

export const POST: APIRoute = async ({ request }) => {
  let sida = '/';
  try {
    const form = await request.formData();
    sida = form.get('sida')?.toString() || '/';
    const name = form.get('name')?.toString().trim().slice(0, 100);
    const email = form.get('email')?.toString().trim().slice(0, 200);
    const message = form.get('message')?.toString().trim().slice(0, 5000);

    if (!name || !email || !message) {
      return tillbaka(sida, 'falt');
    }

    // Botar fyller i det dolda fältet eller skickar direkt; de får samma
    // bekräftelse som alla andra men meddelandet sparas inte. Saknas
    // tidsstämpeln (en sida som laddades före en uppdatering) får man försöka igen.
    const fel = formularFel(form, 2);
    if (fel === 'falla' || (fel === 'tid' && form.get('t'))) {
      await loggaSpam(null, klientIp(request), `kontakt: ${fel}`, `${name} <${email}>\n${message}`);
      return tillbaka(sida, 'tack');
    }
    if (fel) {
      return tillbaka(sida, 'fel');
    }

    // Samma meddelande två gånger (dubbelklick, eller att man inte såg att det
    // gick iväg) sparas bara en gång.
    const { rows: [dubblett] } = await pool.query(
      `SELECT 1 FROM contact_messages
       WHERE email = $1 AND message = $2 AND created_at > NOW() - INTERVAL '1 day' LIMIT 1`,
      [email, message]
    );
    if (!dubblett) {
      await pool.query(
        'INSERT INTO contact_messages (name, email, message) VALUES ($1, $2, $3)',
        [name, email, message]
      );
    }

    return tillbaka(sida, 'tack');
  } catch {
    return tillbaka(sida, 'fel');
  }
};
