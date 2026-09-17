// Urval av uppgifter till en träningsrunda. Rena funktioner: banken och
// användarens historik skickas in, så att urvalet kan testas fristående.
import type { BankFraga } from './fragebank.js';
import type { Styrka } from './styrka.js';

export type Lage = 'delprov' | 'typ' | 'svagheter' | 'snabbkoll';

export type Skal = 'svag' | 'repetera' | 'blandning' | 'avslutning';

export interface Enhet {
  /** En fråga, eller flera som hör ihop (samma diagram eller text). */
  fragor: BankFraga[];
  grupp: string | null;
  /** Varför enheten valdes i Mina svagheter, så att rundan kan berätta det. */
  skal?: Skal;
}

export interface UrvalIn {
  lage: Lage;
  /** Delprov för läge delprov, typ för läge typ. */
  val?: string;
  /** Kandidatfrågor (redan filtrerade på källa). */
  pool: BankFraga[];
  /** Fråge-id som användaren sett nyligen och helst inte ska få igen. */
  sedda: Set<string>;
  /** När varje fråga sågs senast, så att utfyllnad tar de äldst sedda först. */
  senastSedd?: Map<string, Date>;
  /** Fråge-id som användaren haft fel på för ett tag sedan och kan få igen. */
  attRepetera: Set<string>;
  styrkor: Map<string, Styrka>;
  /** Typerna som "Mina svagheter" ska fokusera på (från svagasteTyper). Utan
   * lista tas de tre med lägst styrka. */
  svaga?: Styrka[];
  /** Antal frågor i rundan. */
  antal?: number;
  /** Fråge-id som inte får ingå (t.ex. de som redan är med i en pågående runda). */
  utom?: Set<string>;
  /** Stämmer frågan med ett typval? Standard är exakt typ; frågebanken kan
   * skicka in en matchare som även förstår "<delprov>:ovrigt". */
  matchar?: (q: BankFraga, val: string) => boolean;
  /** Slumpkälla 0 till 1, utbytbar i tester. */
  slump?: () => number;
}

/** Snabbkollen: en fast blandning över de vanligaste typerna, för den som
 * inte gjort något prov. Ett DTK-diagram räknas med alla sina frågor. */
export const SNABBKOLL: { typ: string; antal: number }[] = [
  { typ: 'xyz:algebra', antal: 1 },
  { typ: 'xyz:aritmetik', antal: 1 },
  { typ: 'xyz:geometri', antal: 1 },
  { typ: 'kva:algebra', antal: 1 },
  { typ: 'kva:aritmetik', antal: 1 },
  { typ: 'nog:logik', antal: 1 },
  { typ: 'dtk:diagram', antal: 1 },
  { typ: 'ord', antal: 2 },
  { typ: 'mek:1', antal: 1 },
  { typ: 'mek:2', antal: 1 },
];

/** Ungefärligt antal frågor i en runda. Enheter med flera frågor (ett
 * diagram, en text) räknas med alla sina frågor, så en DTK-runda blir tre
 * eller fyra diagram. */
export const RUNDA = 10;

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

function blanda<T>(lista: T[], slump: () => number): T[] {
  const a = [...lista];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(slump() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
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

/** Enheter (hela diagram och texter) där minst en fråga uppfyller villkoret.
 * Grupperingen görs före filtreringen så att ett diagram vars frågor har
 * olika kategori aldrig splittras. */
export function enheterDar(pool: BankFraga[], villkor: (q: BankFraga) => boolean): Enhet[] {
  return tillEnheter(pool).filter(e => e.fragor.some(villkor));
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

/** Väljer enheter till en runda. Returnerar tom lista om poolen är tom. */
export function valjRunda(inp: UrvalIn): Enhet[] {
  const antal = inp.antal ?? RUNDA;
  const slump = inp.slump ?? Math.random;
  const matchar = inp.matchar ?? ((q: BankFraga, v: string) => q.typ === v);
  const { lage, val, sedda, styrkor, senastSedd } = inp;
  const pool = inp.utom && inp.utom.size ? inp.pool.filter(q => !inp.utom!.has(q.id)) : inp.pool;

  if (lage === 'delprov' || lage === 'typ') {
    const enheter = enheterDar(pool, q => lage === 'delprov' ? q.delprov === val : matchar(q, val!));
    return taTillAntal(osedda(enheter, sedda, slump, senastSedd), antal);
  }

  if (lage === 'snabbkoll') {
    const valda: Enhet[] = [];
    const tagna = new Set<string>();
    for (const slot of SNABBKOLL) {
      const kandidater = osedda(enheterDar(pool, q => matchar(q, slot.typ)), sedda, slump, senastSedd)
        .filter(e => !e.fragor.some(q => tagna.has(q.id)));
      for (const e of kandidater.slice(0, slot.antal)) {
        valda.push(e);
        e.fragor.forEach(q => tagna.add(q.id));
      }
    }
    return blanda(valda, slump);
  }

  // Mina svagheter: 70 procent från de tre typer där det finns mest att
  // hämta, 30 procent blandat från övriga typer med underlag (interleaving),
  // plus återbesök av gamla fel. Rundan avslutas med en uppgift från den
  // starkaste typen.
  const svaga = inp.svaga ?? [...styrkor.values()].filter(s => !s.osaker).sort((a, b) => a.styrka - b.styrka).slice(0, 3);
  if (svaga.length === 0) return [];
  const svagaTyper = new Set(svaga.map(s => s.typ));
  const ovrigaTyper = new Set([...styrkor.values()].filter(s => !svagaTyper.has(s.typ)).map(s => s.typ));

  const antalRepetera = Math.min(2, Math.floor(antal * 0.2));
  const antalSvaga = Math.round((antal - antalRepetera) * 0.7);
  const antalOvriga = antal - antalRepetera - antalSvaga;

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

  // Återbesök: fel för minst tre dagar sedan (attRepetera), inte nyligen sedda.
  const repetera = enheterDar(pool, q => inp.attRepetera.has(q.id));
  ta(blanda(repetera, slump), antalRepetera, 'repetera');

  // Svagaste typerna, i tur och ordning så att alla tre får plats.
  const perSvag = svaga.map(s => osedda(enheterDar(pool, q => matchar(q, s.typ)), sedda, slump, senastSedd));
  let kvar = antalSvaga + (antalRepetera - valda.length);
  let varv = 0;
  while (kvar > 0 && varv < antal * 3) {
    let tagitNagon = false;
    for (const lista of perSvag) {
      if (kvar <= 0) break;
      // Hoppa över enheter som redan tagits (t.ex. via återbesöken) tills en går in.
      while (lista.length) {
        const fore = valda.length;
        ta(lista.splice(0, 1), 1, 'svag');
        if (valda.length > fore) { kvar--; tagitNagon = true; break; }
      }
    }
    if (!tagitNagon) break;
    varv++;
  }

  // Blandning från övriga typer (interleaving), annars från hela poolen.
  const ovriga = ovrigaTyper.size > 0 ? enheterDar(pool, q => [...ovrigaTyper].some(t => matchar(q, t))) : tillEnheter(pool);
  ta(osedda(ovriga, sedda, slump, senastSedd), Math.max(antalOvriga, antal - antalValda()), 'blandning');
  // Om övriga typer inte räckte, fyll på från de svaga.
  if (antalValda() < antal) for (const lista of perSvag) ta(lista, antal, 'svag');

  // Avsluta med en osedd, fristående uppgift från den starkaste typen
  // utanför de svaga (näst starkaste om den starkaste bara har grupper).
  const starka = [...styrkor.values()].filter(s => !s.osaker && !svagaTyper.has(s.typ) && !s.typ.endsWith(':ovrigt')).sort((a, b) => b.styrka - a.styrka);
  const blandade = blanda(valda, slump);
  for (const stark of starka) {
    const sist = osedda(tillEnheter(pool.filter(q => matchar(q, stark.typ) && !tagna.has(q.id) && q.grupp === null)), sedda, slump, senastSedd)[0];
    if (!sist) continue;
    // Om rundan är full byts en fristående uppgift från en svag typ ut; finns
    // ingen sådan läggs ingen avslutning till, så att antalet inte överskrids.
    if (antalValda() >= antal) {
      let i = -1;
      for (let k = blandade.length - 1; k >= 0; k--) {
        const e = blandade[k];
        if (e.fragor.length === 1 && [...svagaTyper].some(t => matchar(e.fragor[0], t))) { i = k; break; }
      }
      if (i < 0 || blandade.length < 2) break;
      blandade.splice(i, 1);
    }
    blandade.push({ ...sist, skal: 'avslutning' });
    break;
  }
  return blandade;
}
