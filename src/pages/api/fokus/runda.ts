import type { APIRoute } from 'astro';
import { getSessionFromCookies } from '../../../lib/auth.js';
import { bank, DELPROV, finnsTyp, typNamn, DELPROV_NAMN, type BankFraga } from '../../../lib/fokus/fragebank.js';
import { valjRunda, type Lage } from '../../../lib/fokus/urval.js';
import { hamtaHandelser, seddaNyligen, attRepetera } from '../../../lib/fokus/historik.js';
import { beraknaStyrkor } from '../../../lib/fokus/styrka.js';

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: { 'Content-Type': 'application/json' } });

/** Frågan som klienten får: utan facit och förklaring, de hämtas vid svar. */
function tillKlient(q: BankFraga) {
  const { correct, explanation, videoId, lasText, index, ...rest } = q;
  void correct; void explanation; void videoId; void index;
  return { ...rest, antalAlternativ: q.options.length, lasText: lasText ? { title: lasText.title, html: lasText.html } : undefined };
}

/** GET /api/fokus/runda?lage=delprov&val=xyz, lage=typ&val=xyz:algebra eller lage=svagheter.
 * Fungerar utan konto (då utan historik), med gästkonto eller inloggad. */
export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  const lage = url.searchParams.get('lage') as Lage | null;
  const val = url.searchParams.get('val') || undefined;
  const antal = Math.min(20, Math.max(1, Number(url.searchParams.get('antal') || 10)));
  if (!lage || !['delprov', 'typ', 'svagheter'].includes(lage)) return json({ error: 'okant_lage' }, 400);
  if (lage === 'delprov' && !DELPROV.includes(val as any)) return json({ error: 'okant_delprov' }, 400);
  if (lage === 'typ' && (!val || !finnsTyp(val))) return json({ error: 'okand_typ' }, 400);

  const user = await getSessionFromCookies(request.headers.get('cookie'));
  const handelser = user ? await hamtaHandelser(user.id) : [];
  const styrkor = beraknaStyrkor(handelser);
  if (lage === 'svagheter' && styrkor.size === 0) return json({ error: 'ingen_historik' }, 400);

  // Poolen är extramaterialet. Huvudmaterialet HT 2021 sparas till stegen på
  // Träna-sidan så att proven där inte förbrukas i förväg.
  const pool = bank.filter(q => q.kalla === 'extra');
  const enheter = valjRunda({
    lage, val, pool, antal,
    sedda: seddaNyligen(handelser),
    attRepetera: attRepetera(handelser),
    styrkor,
  });
  if (!enheter.length) return json({ error: 'tomt_urval' }, 400);

  const rubrik = lage === 'delprov' ? `${DELPROV_NAMN[val as keyof typeof DELPROV_NAMN]}`
    : lage === 'typ' ? typNamn(val!)
    : 'Mina svagheter';
  return json({
    lage, val, rubrik,
    enheter: enheter.map(e => ({ grupp: e.grupp, fragor: e.fragor.map(tillKlient) })),
    antalFragor: enheter.reduce((n, e) => n + e.fragor.length, 0),
  });
};
