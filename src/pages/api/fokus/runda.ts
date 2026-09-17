import type { APIRoute } from 'astro';
import { getSessionFromCookies } from '../../../lib/auth.js';
import { bank, DELPROV, finnsTyp, typNamn, typVikter, matcharTyp, antalForVal, DELPROV_NAMN, type BankFraga } from '../../../lib/fokus/fragebank.js';
import { valjRunda, type Lage } from '../../../lib/fokus/urval.js';
import { hamtaHandelser, seddaNyligen, attRepetera, senastSedd, forStyrka } from '../../../lib/fokus/historik.js';
import { beraknaStyrkor, svagasteTyper, MINSTA_SVAR_SVAGHETER, type Styrka } from '../../../lib/fokus/styrka.js';

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: { 'Content-Type': 'application/json' } });

/** Frågan som klienten får: utan facit och förklaring, de hämtas vid svar. */
function tillKlient(q: BankFraga) {
  const { correct, explanation, videoId, lasText, index, ...rest } = q;
  void correct; void explanation; void videoId; void index;
  return { ...rest, antalAlternativ: q.options.length, lasText: lasText ? { title: lasText.title, html: lasText.html } : undefined };
}

const tillStyrka = (s: Styrka | undefined) => s ? { styrka: s.styrka, antal: s.antal, effektivt: s.effektivt, osaker: s.osaker } : null;

/** GET /api/fokus/runda?lage=delprov&val=xyz, lage=typ&val=xyz:algebra, lage=svagheter
 * eller lage=snabbkoll. utom=id,id utesluter frågor (insprängning i en pågående runda).
 * Fungerar utan konto (då utan historik), med gästkonto eller inloggad. */
export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  const lage = url.searchParams.get('lage') as Lage | null;
  // val används bara i lägena delprov och typ; för övriga speglas aldrig indata.
  const val = lage === 'delprov' || lage === 'typ' ? (url.searchParams.get('val') || undefined) : undefined;
  const antalIn = Number.parseInt(url.searchParams.get('antal') ?? '', 10);
  const antal = Number.isFinite(antalIn) ? Math.min(20, Math.max(1, antalIn)) : 10;
  const utom = new Set((url.searchParams.get('utom') || '').split(',').filter(Boolean).slice(0, 200));
  if (!lage || !['delprov', 'typ', 'svagheter', 'snabbkoll'].includes(lage)) return json({ error: 'okant_lage' }, 400);
  if (lage === 'delprov' && !DELPROV.includes(val as any)) return json({ error: 'okant_delprov' }, 400);
  if (lage === 'typ' && (!val || !finnsTyp(val))) return json({ error: 'okand_typ' }, 400);

  const user = await getSessionFromCookies(request.headers.get('cookie'));
  const handelser = user ? await hamtaHandelser(user.id) : [];
  const rakneBara = forStyrka(handelser);
  const styrkor = beraknaStyrkor(rakneBara);
  const svaga = svagasteTyper(styrkor, 3, typVikter(), rakneBara.length >= MINSTA_SVAR_SVAGHETER);
  if (lage === 'svagheter' && (rakneBara.length < MINSTA_SVAR_SVAGHETER || svaga.length === 0)) return json({ error: 'ingen_historik' }, 400);

  // Poolen är extramaterialet. Huvudmaterialet HT 2021 sparas till stegen på
  // Träna-sidan så att proven där inte förbrukas i förväg.
  const pool = bank.filter(q => q.kalla === 'extra');
  const sedda = seddaNyligen(handelser);
  const enheter = valjRunda({
    lage, val, pool, antal, utom,
    sedda,
    senastSedd: senastSedd(handelser),
    attRepetera: attRepetera(handelser),
    styrkor,
    svaga,
    matchar: matcharTyp,
  });
  if (!enheter.length) return json({ error: 'tomt_urval' }, 400);

  const rubrik = lage === 'delprov' ? `${DELPROV_NAMN[val as keyof typeof DELPROV_NAMN]}`
    : lage === 'typ' ? typNamn(val!)
    : lage === 'snabbkoll' ? 'Snabbkoll'
    : 'Mina svagheter';
  // Styrkan före rundan för typerna som ingår, så att kvittot kan visa hur den flyttade sig.
  const typerIRundan = [...new Set(enheter.flatMap(e => e.fragor.map(q => q.typ)))];
  const styrkorFore: Record<string, ReturnType<typeof tillStyrka>> = {};
  for (const t of typerIRundan) styrkorFore[t] = tillStyrka(styrkor.get(t));
  // Hur många av typens eller delprovets uppgifter användaren redan sett.
  const sett = (lage === 'delprov' || lage === 'typ') && val
    ? { antal: pool.filter(q => sedda.has(q.id) && (lage === 'delprov' ? q.delprov === val : matcharTyp(q, val))).length, av: antalForVal(lage, val) }
    : null;
  return json({
    lage, val, rubrik,
    enheter: enheter.map(e => ({ grupp: e.grupp, skal: e.skal || null, fragor: e.fragor.map(tillKlient) })),
    antalFragor: enheter.reduce((n, e) => n + e.fragor.length, 0),
    styrkorFore,
    sett,
    nastaSvaga: svaga.map(s => s.typ),
  });
};
