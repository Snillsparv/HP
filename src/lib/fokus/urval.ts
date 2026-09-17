// Urval av uppgifter till en träningsrunda. Rena funktioner: banken och
// användarens historik skickas in, så att urvalet kan testas fristående.
// Se docs/svaghetstraning/design.md, avsnitt 5.
import type { BankFraga } from './fragebank.js';
import type { Styrka } from './styrka.js';

export type Lage = 'delprov' | 'typ' | 'kategori' | 'svagheter' | 'snabbkoll';

export type Skal = 'svag' | 'repetera' | 'utforska' | 'blandning' | 'kontroll' | 'insprangt';

export interface Enhet {
  /** En fråga, eller flera som hör ihop (samma diagram eller text). */
  fragor: BankFraga[];
  grupp: string | null;
  /** Varför enheten valdes, så att rundan kan berätta det. */
  skal?: Skal;
}

export interface UrvalIn {
  lage: Lage;
  /** Delprov för läge delprov, typ för läge typ, kategori för läge kategori. */
  val?: string;
  /** Kandidatfrågor (redan filtrerade på källa). */
  pool: BankFraga[];
  /** Fråge-id som användaren sett nyligen och helst inte ska få igen. */
  sedda: Set<string>;
  /** När varje fråga sågs senast, så att utfyllnad tar de äldst sedda först. */
  senastSedd?: Map<string, Date>;
  /** Fråge-id som användaren haft fel på för ett tag sedan: deras typer besöks igen. */
  attRepetera: Set<string>;
  /** Styrka per rangordningstyp (typer under golvet som "<delprov>:ovrigt", MEK som mek). */
  styrkor: Map<string, Styrka>;
  /** Typerna som "Mina svagheter" ska fokusera på (från svagasteTyper). */
  svaga?: Styrka[];
  /** Vikter per typ, för hinken utforska (orörd typ med högst vikt). */
  vikter?: Map<string, number>;
  /** Alla typer i banken, för hinken utforska. */
  allaTyper?: string[];
  /** Senaste svaret per typ, för hinken kontroll. */
  senastPerTyp?: Map<string, Date>;
  /** Antal frågor i rundan. */
  antal?: number;
  /** Stämmer frågan med ett typval? Standard är exakt typ; frågebanken kan
   * skicka in en matchare som även förstår "<delprov>:ovrigt" och mek. */
  matchar?: (q: BankFraga, val: string) => boolean;
  /** Stämmer frågan med en kategori över delproven? */
  matcharKategori?: (q: BankFraga, kategori: string) => boolean;
  /** Slumpkälla 0 till 1, utbytbar i tester. */
  slump?: () => number;
  nu?: Date;
}

/** Ungefärligt antal frågor i en runda. Enheter med flera frågor (ett
 * diagram, en text) räknas med alla sina frågor, så en DTK-runda blir tre
 * eller fyra diagram. */
export const RUNDA = 10;
/** I läge typ: så många frågor av typen, resten ur samma delprov men annan kategori. */
export const TYP_ANDEL = 7;
/** Kontrollhinken: gröna typer vars senaste svar är äldre än så här många dagar. */
export const KONTROLL_DAGAR = 21;

/** Snabbkollen: en fast blandning över delproven för den som inte gjort
 * något prov. Diagram och text väljs på gruppstorlek två. 18 frågor. */
export const SNABBKOLL: { typ: string; antal: number; gruppStorlek?: number }[] = [
  { typ: 'xyz:algebra', antal: 1 },
  { typ: 'xyz:aritmetik', antal: 1 },
  { typ: 'xyz:geometri', antal: 1 },
  { typ: 'kva:algebra', antal: 1 },
  { typ: 'kva:aritmetik', antal: 1 },
  { typ: 'kva:geometri', antal: 1 },
  { typ: 'nog:logik', antal: 1 },
  { typ: 'nog:aritmetik', antal: 1 },
  { typ: 'dtk', antal: 1, gruppStorlek: 2 },
  { typ: 'ord', antal: 3 },
  { typ: 'mek:1', antal: 1 },
  { typ: 'mek:2', antal: 1 },
  { typ: 'mek:3', antal: 1 },
  { typ: 'las', antal: 1, gruppStorlek: 2 },
];

/** Tar enheter i ordning tills antalet frågor når målet. */
export function taTillAntal(enheter: Enhet[], antalFragor: number): Enhet[] {
  const valda: Enhet[] = [];
  let n = 0;
  for (const e of enheter) {
    if (n >= antalFragor) break;
    valda.push(e);
    n += e.fragor.length;
  }
  return valda;
}

/** Grupperar frågor till enheter: DTK-diagram och LÄS-texter hålls ihop. */
export function tillEnheter(fragor: BankFraga[]): Enhet[] {
  const enheter: Enhet[] = [];
  const perGrupp = new Map<string, Enhet>();
  for (const q of fragor) {
    if (!q.grupp) { enheter.push({ fragor: [q], grupp: null }); continue; }
    let e = perGrupp.get(q.grupp);
    if (!e) { e = { fragor: [], grupp: q.grupp }; perGrupp.set(q.grupp, e); enheter.push(e); }
    e.fragor.push(q);
  }
  return enheter;
}

/** Enheter (hela diagram och texter) där minst en fråga uppfyller villkoret.
 * Grupperingen görs före filtreringen så att ett diagram vars frågor har
 * olika kategori aldrig splittras. */
export function enheterDar(pool: BankFraga[], villkor: (q: BankFraga) => boolean): Enhet[] {
  return tillEnheter(pool).filter(e => e.fragor.some(villkor));
}

function blanda<T>(lista: T[], slump: () => number): T[] {
  const a = [...lista];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(slump() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Högst så många enheter från samma pass i en runda, så att ett pass inte
 * förbrukas i förtid. Enheter utöver det flyttas bakåt i ordningen. */
export const MAX_PER_PASS = 2;

function sprid(enheter: Enhet[]): Enhet[] {
  const antal = new Map<string, number>();
  const forst: Enhet[] = [];
  const senare: Enhet[] = [];
  for (const e of enheter) {
    const pass = e.fragor[0].testId;
    const n = antal.get(pass) || 0;
    if (n < MAX_PER_PASS) { forst.push(e); antal.set(pass, n + 1); } else senare.push(e);
  }
  return [...forst, ...senare];
}

/** Enheter där ingen fråga är nyligen sedd först (blandade, högst två per
 * pass främst), sedan de sedda med de som sågs längst tillbaka först. */
function osedda(enheter: Enhet[], sedda: Set<string>, slump: () => number, senastSedd?: Map<string, Date>): Enhet[] {
  const fria = sprid(blanda(enheter.filter(e => !e.fragor.some(q => sedda.has(q.id))), slump));
  const senast = (e: Enhet) => Math.max(...e.fragor.map(q => senastSedd?.get(q.id)?.getTime() ?? 0));
  const resten = sprid(blanda(enheter.filter(e => e.fragor.some(q => sedda.has(q.id))), slump)
    .sort((a, b) => senast(a) - senast(b)));
  return [...fria, ...resten];
}

/** Väljer enheter till en runda. Returnerar tom lista om poolen är tom. */
export function valjRunda(inp: UrvalIn): Enhet[] {
  const antal = inp.antal ?? RUNDA;
  const slump = inp.slump ?? Math.random;
  const nu = inp.nu ?? new Date();
  const matchar = inp.matchar ?? ((q: BankFraga, v: string) => q.typ === v);
  const matcharKategori = inp.matcharKategori ?? ((q: BankFraga, k: string) => ['xyz', 'kva', 'nog'].includes(q.delprov) && q.category === k);
  const { lage, val, pool, sedda, styrkor, senastSedd } = inp;
  const medSkal = (enheter: Enhet[], skal: Skal) => enheter.map(e => ({ ...e, skal }));

  if (lage === 'delprov') {
    return taTillAntal(osedda(enheterDar(pool, q => q.delprov === val), sedda, slump, senastSedd), antal);
  }

  if (lage === 'kategori') {
    return taTillAntal(osedda(enheterDar(pool, q => matcharKategori(q, val!)), sedda, slump, senastSedd), antal);
  }

  if (lage === 'typ') {
    // Sju av typen och tre ur samma delprov med annan kategori (interleaving),
    // på slumpade platser. ORD och LÄS är hela delprovet.
    const dp = val!.split(':')[0];
    const egna = osedda(enheterDar(pool, q => matchar(q, val!)), sedda, slump, senastSedd);
    const andra = osedda(enheterDar(pool, q => q.delprov === dp && !matchar(q, val!)), sedda, slump, senastSedd);
    if (!andra.length) return taTillAntal(egna, antal);
    const huvud = taTillAntal(egna, TYP_ANDEL);
    const antalHuvud = huvud.reduce((n, e) => n + e.fragor.length, 0);
    const tagna = new Set(huvud.flatMap(e => e.fragor.map(q => q.id)));
    const insprangt = taTillAntal(andra.filter(e => !e.fragor.some(q => tagna.has(q.id))), Math.max(1, antal - antalHuvud));
    return blanda([...huvud, ...medSkal(insprangt, 'insprangt')], slump);
  }

  if (lage === 'snabbkoll') {
    const valda: Enhet[] = [];
    const tagna = new Set<string>();
    for (const slot of SNABBKOLL) {
      const villkor = (q: BankFraga) => slot.typ === 'dtk' || slot.typ === 'las' ? q.delprov === slot.typ : matchar(q, slot.typ);
      const kandidater = osedda(enheterDar(pool, villkor), sedda, slump, senastSedd)
        .filter(e => !e.fragor.some(q => tagna.has(q.id)))
        .filter(e => !slot.gruppStorlek || e.fragor.length === slot.gruppStorlek);
      for (const e of kandidater.slice(0, slot.antal)) {
        valda.push(e);
        e.fragor.forEach(q => tagna.add(q.id));
      }
    }
    return blanda(valda, slump);
  }

  // Mina svagheter: hinkar med återbesök, de tre typer där det finns mest
  // att hämta, en orörd typ att utforska, en blandning ur samma delprov och
  // en kontroll av en grön typ, i den ordningen. Se design.md avsnitt 5.
  const svaga = inp.svaga ?? [...styrkor.values()].filter(s => !s.osaker).sort((a, b) => a.styrka - b.styrka).slice(0, 3);
  if (svaga.length === 0) return [];
  const svagaTyper = new Set(svaga.map(s => s.typ));

  const valda: Enhet[] = [];
  const tagna = new Set<string>();
  const tagnaGrupper = new Set<string>();
  const antalValda = () => valda.reduce((n, e) => n + e.fragor.length, 0);
  const ta = (enheter: Enhet[], n: number, skal: Skal) => {
    for (const e of enheter) {
      if (antalValda() >= antal || n <= 0) break;
      if (e.fragor.some(q => tagna.has(q.id)) || (e.grupp && tagnaGrupper.has(e.grupp))) continue;
      valda.push({ ...e, skal });
      e.fragor.forEach(q => tagna.add(q.id));
      if (e.grupp) tagnaGrupper.add(e.grupp);
      n--;
    }
  };
  const egnaTyper = (typ: string) => osedda(enheterDar(pool, q => matchar(q, typ)), sedda, slump, senastSedd);

  // 1. Återbesök: en annan osedd fråga av samma typ som ett fel för minst tre
  // dagar sedan; samma fråga bara om typen har färre än tre osedda.
  const repTyper = [...new Set(pool.filter(q => inp.attRepetera.has(q.id)).map(q => q.typ))];
  for (const typ of blanda(repTyper, slump).slice(0, 2)) {
    const kandidater = egnaTyper(typ);
    const osedd = kandidater.filter(e => !e.fragor.some(q => sedda.has(q.id) || inp.attRepetera.has(q.id)));
    ta(osedd.length >= 3 ? osedd : kandidater, 1, 'repetera');
  }

  // 2. Svaga typer: fem enheter växelvis från de tre typerna.
  const perSvag = svaga.map(s => egnaTyper(s.typ));
  let kvar = 5;
  let varv = 0;
  while (kvar > 0 && varv < antal * 3) {
    let tagitNagon = false;
    for (const lista of perSvag) {
      if (kvar <= 0) break;
      while (lista.length) {
        const fore = valda.length;
        ta(lista.splice(0, 1), 1, 'svag');
        if (valda.length > fore) { kvar--; tagitNagon = true; break; }
      }
    }
    if (!tagitNagon) break;
    varv++;
  }

  // 3. Utforska: den osäkra eller orörda typ i banken som har högst vikt.
  const rorda = new Set([...styrkor.values()].filter(s => !s.osaker).map(s => s.typ));
  const kandidatTyper = (inp.allaTyper || [...styrkor.keys()]).filter(t => !rorda.has(t) && !svagaTyper.has(t));
  const utforska = kandidatTyper.sort((a, b) => (inp.vikter?.get(b) ?? 0) - (inp.vikter?.get(a) ?? 0))[0];
  if (utforska) ta(egnaTyper(utforska), 1, 'utforska');

  // 4. Blandning: ur samma delprov som de svaga typerna men annan kategori,
  // annars ur hela poolen.
  const svagaDelprov = new Set(svaga.map(s => s.delprov));
  const blandPool = pool.filter(q => svagaDelprov.has(q.delprov) && ![...svagaTyper].some(t => matchar(q, t)));
  ta(osedda(tillEnheter(blandPool.length ? blandPool : pool), sedda, slump, senastSedd), 1, 'blandning');

  // Fyll på från de svaga om frågorna inte når målet.
  if (antalValda() < antal) for (const lista of perSvag) ta(lista, antal, 'svag');

  // 5. Kontroll, sist: en osedd fristående fråga ur den gröna typ vars senaste
  // svar är äldst (över tre veckor), annars ur starkaste typen i samma område
  // (kvantitativt eller verbalt) som svaga[0].
  const blandade = blanda(valda, slump);
  const gransKontroll = nu.getTime() - KONTROLL_DAGAR * 24 * 3600 * 1000;
  const grona = [...styrkor.values()].filter(s => !s.osaker && s.styrka >= 0.8 && !svagaTyper.has(s.typ))
    .map(s => ({ s, senast: inp.senastPerTyp?.get(s.typ)?.getTime() ?? 0 }))
    .filter(x => x.senast <= gransKontroll)
    .sort((a, b) => a.senast - b.senast)
    .map(x => x.s);
  const verbal = new Set(['ord', 'las', 'mek']);
  const omrade = (dp: string) => verbal.has(dp) ? 'verbal' : 'kvant';
  const starka = [...styrkor.values()]
    .filter(s => !s.osaker && !svagaTyper.has(s.typ) && omrade(s.delprov) === omrade(svaga[0].delprov))
    .sort((a, b) => b.styrka - a.styrka);
  for (const kontroll of [...grona, ...starka]) {
    const sist = osedda(tillEnheter(pool.filter(q => matchar(q, kontroll.typ) && !tagna.has(q.id) && q.grupp === null)), sedda, slump, senastSedd)[0];
    if (!sist) continue;
    if (antalValda() >= antal) {
      let i = -1;
      for (let k = blandade.length - 1; k >= 0; k--) {
        const e = blandade[k];
        if (e.fragor.length === 1 && e.skal === 'svag') { i = k; break; }
      }
      if (i < 0 || blandade.length < 2) break;
      blandade.splice(i, 1);
    }
    blandade.push({ ...sist, skal: 'kontroll' });
    break;
  }
  return blandade;
}
