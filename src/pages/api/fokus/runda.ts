import type { APIRoute } from 'astro';
import { randomUUID } from 'crypto';
import { getSessionFromCookies } from '../../../lib/auth.js';
import pool from '../../../lib/db.js';
import { bank, DELPROV, finnsTyp, finnsKategori, typNamn, typVikter, matcharTyp, matcharKategori, antalForVal, allaTyper, DELPROV_NAMN, type BankFraga } from '../../../lib/fokus/fragebank.js';
import { valjRunda, type Lage } from '../../../lib/fokus/urval.js';
import { hamtaHandelser, seddaNyligen, attRepetera, senastSedd, senastPerTyp, forStyrka, harProvresultat } from '../../../lib/fokus/historik.js';
import { beraknaTypStyrkor, beraknaDelprovStyrkor, svagasteTyper, antalSakraTyper, delprovAttFortsattaMed, MINSTA_SAKRA_TYPER, type Styrka } from '../../../lib/fokus/styrka.js';
import { ANTAL_PER_PASS, rangTyp } from '../../../lib/fokus/typer.js';

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: { 'Content-Type': 'application/json' } });

/** Frågan som klienten får: utan facit och förklaring, de hämtas vid svar. */
function tillKlient(q: BankFraga) {
  const { correct, explanation, videoId, lasText, index, ...rest } = q;
  void correct; void explanation; void videoId; void index;
  return { ...rest, antalAlternativ: q.options.length, lasText: lasText ? { title: lasText.title, html: lasText.html } : undefined };
}

const tillStyrka = (s: Styrka | undefined) => s ? { typ: s.typ, styrka: s.styrka, antal: s.antal, effektivt: s.effektivt, osaker: s.osaker } : null;

const KATEGORI_NAMN: Record<string, string> = {
  algebra: 'algebra', aritmetik: 'aritmetik', geometri: 'geometri', funktioner: 'funktioner och grafer', procent: 'procent',
  sannolikhet: 'sannolikhet', statistik: 'statistik', enheter: 'enheter', logik: 'logiskt resonemang',
};

/** GET /api/fokus/runda?lage=delprov|typ|kategori|svagheter|snabbkoll&val=&antal=&fran=&forst=
 * Fungerar utan konto (då utan historik), med gästkonto eller inloggad. */
export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  const lage = url.searchParams.get('lage') as Lage | null;
  // val används bara i lägena delprov, typ och kategori; för övriga speglas aldrig indata.
  const val = lage === 'delprov' || lage === 'typ' || lage === 'kategori' ? (url.searchParams.get('val') || undefined) : undefined;
  const antalIn = Number.parseInt(url.searchParams.get('antal') ?? '', 10);
  const antal = Number.isFinite(antalIn) ? Math.min(20, Math.max(1, antalIn)) : 10;
  const franIn = url.searchParams.get('fran') || '';
  const fran = /^[a-z0-9-]{1,40}$/.test(franIn) ? franIn : null;
  const forstIn = url.searchParams.get('forst') || '';
  const forst = /^[a-z0-9:]{1,40}$/.test(forstIn) && finnsTyp(forstIn) ? rangTyp(forstIn) : null;
  if (!lage || !['delprov', 'typ', 'kategori', 'svagheter', 'snabbkoll'].includes(lage)) return json({ error: 'okant_lage' }, 400);
  if (lage === 'delprov' && !DELPROV.includes(val as any)) return json({ error: 'okant_delprov' }, 400);
  if (lage === 'typ' && (!val || !finnsTyp(val))) return json({ error: 'okand_typ' }, 400);
  if (lage === 'kategori' && (!val || !finnsKategori(val))) return json({ error: 'okand_typ' }, 400);

  const user = await getSessionFromCookies(request.headers.get('cookie'));
  const handelser = user ? await hamtaHandelser(user.id) : [];
  const rakneBara = forStyrka(handelser);
  const styrkor = beraknaTypStyrkor(rakneBara);
  const vikter = typVikter();
  let svaga = svagasteTyper(styrkor, 3, vikter);
  if (forst && styrkor.has(forst)) svaga = [styrkor.get(forst)!, ...svaga.filter(s => s.typ !== forst)].slice(0, 3);
  if (lage === 'svagheter' && (antalSakraTyper(styrkor) < MINSTA_SAKRA_TYPER || svaga.length === 0)) {
    const fortsatt = delprovAttFortsattaMed(beraknaDelprovStyrkor(rakneBara), ANTAL_PER_PASS);
    return json({ error: 'ingen_historik', fortsatt: fortsatt?.delprov || null }, 400);
  }

  // Poolen är extramaterialet. Huvudmaterialet HT 2021 sparas till stegen på
  // Träna-sidan så att proven där inte förbrukas i förväg.
  const pool_ = bank.filter(q => q.kalla === 'extra');
  const sedda = seddaNyligen(handelser);
  const enheter = valjRunda({
    lage, val, pool: pool_, antal,
    sedda,
    senastSedd: senastSedd(handelser),
    attRepetera: attRepetera(handelser),
    styrkor,
    svaga,
    vikter,
    allaTyper: [...new Set(allaTyper(['extra']).map(t => rangTyp(t.typ)))],
    senastPerTyp: senastPerTyp(handelser),
    matchar: matcharTyp,
    matcharKategori,
  });
  if (!enheter.length) return json({ error: 'tomt_urval' }, 400);

  const antalFragor = enheter.reduce((n, e) => n + e.fragor.length, 0);
  const rubrik = lage === 'delprov' ? `${DELPROV_NAMN[val as keyof typeof DELPROV_NAMN]}`
    : lage === 'typ' ? typNamn(val!)
    : lage === 'kategori' ? `Om ${KATEGORI_NAMN[val!] || val}`
    : lage === 'snabbkoll' ? 'Snabbkoll'
    : 'Mina svagheter';
  // Styrkan före rundan för typerna som ingår, så att kvittot kan visa hur den flyttade sig.
  const typerIRundan = [...new Set(enheter.flatMap(e => e.fragor.map(q => rangTyp(q.typ))))];
  const styrkorFore: Record<string, ReturnType<typeof tillStyrka>> = {};
  for (const t of typerIRundan) styrkorFore[t] = tillStyrka(styrkor.get(t));
  // Hur många av valets uppgifter användaren redan sett.
  const sett = (lage === 'delprov' || lage === 'typ' || lage === 'kategori') && val
    ? { antal: pool_.filter(q => sedda.has(q.id) && (lage === 'delprov' ? q.delprov === val : lage === 'kategori' ? matcharKategori(q, val) : matcharTyp(q, val))).length, av: antalForVal(lage, val) }
    : null;

  // Rundan bokförs så att verktyget kan utvärderas.
  const rundaId = randomUUID();
  if (user) {
    await pool.query(
      'INSERT INTO fokus_rundor (id, user_id, lage, val, fran, antal) VALUES ($1, $2, $3, $4, $5, $6)',
      [rundaId, user.id, lage, val || null, fran, antalFragor]
    ).catch(() => {});
  }
  const franFinns = !!(user && fran && await harProvresultat(user.id, fran));

  return json({
    lage, val, rubrik, rundaId, fran, franFinns,
    enheter: enheter.map(e => ({ grupp: e.grupp, skal: e.skal || null, fragor: e.fragor.map(tillKlient) })),
    antalFragor,
    styrkorFore,
    sett,
    nastaSvaga: svaga.map(s => s.typ),
  });
};
