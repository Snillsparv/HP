// Urval av uppgifter till en träningsrunda. Rena funktioner: banken och
// användarens historik skickas in, så att urvalet kan testas fristående.
import type { BankFraga } from './fragebank.js';
import type { Styrka } from './styrka.js';

export type Lage = 'delprov' | 'typ' | 'svagheter';

export interface Enhet {
  /** En fråga, eller flera som hör ihop (samma diagram eller text). */
  fragor: BankFraga[];
  grupp: string | null;
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
  /** Antal enheter i rundan. */
  antal?: number;
  /** Slumpkälla 0 till 1, utbytbar i tester. */
  slump?: () => number;
}

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

/** Enheter där ingen fråga är nyligen sedd; om det blir för få, fyll på med
 * sedda, de som sågs längst tillbaka först. */
function osedda(enheter: Enhet[], sedda: Set<string>, behov: number, slump: () => number, senastSedd?: Map<string, Date>): Enhet[] {
  const fria = blanda(enheter.filter(e => !e.fragor.some(q => sedda.has(q.id))), slump);
  if (fria.length >= behov) return fria;
  const senast = (e: Enhet) => Math.max(...e.fragor.map(q => senastSedd?.get(q.id)?.getTime() ?? 0));
  const resten = blanda(enheter.filter(e => e.fragor.some(q => sedda.has(q.id))), slump)
    .sort((a, b) => senast(a) - senast(b));
  return [...fria, ...resten];
}

/** Väljer enheter till en runda. Returnerar tom lista om poolen är tom. */
export function valjRunda(inp: UrvalIn): Enhet[] {
  const antal = inp.antal ?? RUNDA;
  const slump = inp.slump ?? Math.random;
  const { lage, val, pool, sedda, styrkor, senastSedd } = inp;

  if (lage === 'delprov' || lage === 'typ') {
    const kandidater = pool.filter(q => lage === 'delprov' ? q.delprov === val : q.typ === val);
    return taTillAntal(osedda(tillEnheter(kandidater), sedda, antal, slump, senastSedd), antal);
  }

  // Mina svagheter: 70 procent från de tre svagaste typerna, 30 procent
  // blandat från övriga typer med underlag, plus återbesök av gamla fel.
  const svaga = [...styrkor.values()].filter(s => !s.osaker).sort((a, b) => a.styrka - b.styrka).slice(0, 3);
  if (svaga.length === 0) return [];
  const svagaTyper = new Set(svaga.map(s => s.typ));
  const ovrigaTyper = new Set([...styrkor.values()].filter(s => !svagaTyper.has(s.typ)).map(s => s.typ));

  const antalRepetera = Math.min(2, Math.floor(antal * 0.2));
  const antalSvaga = Math.round((antal - antalRepetera) * 0.7);
  const antalOvriga = antal - antalRepetera - antalSvaga;

  const valda: Enhet[] = [];
  const tagna = new Set<string>();
  const antalValda = () => valda.reduce((n, e) => n + e.fragor.length, 0);
  const ta = (enheter: Enhet[], n: number) => {
    for (const e of enheter) {
      if (antalValda() >= antal || n <= 0) break;
      if (e.fragor.some(q => tagna.has(q.id))) continue;
      valda.push(e);
      e.fragor.forEach(q => tagna.add(q.id));
      n--;
    }
  };

  // Återbesök: fel för minst tre dagar sedan (attRepetera), inte nyligen sedda.
  const repetera = tillEnheter(pool.filter(q => inp.attRepetera.has(q.id)));
  ta(blanda(repetera, slump), antalRepetera);

  // Svagaste typerna, i tur och ordning så att alla tre får plats.
  const perSvag = svaga.map(s => osedda(tillEnheter(pool.filter(q => q.typ === s.typ)), sedda, antal, slump, senastSedd));
  let kvar = antalSvaga + (antalRepetera - valda.length);
  let varv = 0;
  while (kvar > 0 && varv < antal * 3) {
    let tagitNagon = false;
    for (const lista of perSvag) {
      if (kvar <= 0) break;
      // Hoppa över enheter som redan tagits (t.ex. via återbesöken) tills en går in.
      while (lista.length) {
        const fore = valda.length;
        ta(lista.splice(0, 1), 1);
        if (valda.length > fore) { kvar--; tagitNagon = true; break; }
      }
    }
    if (!tagitNagon) break;
    varv++;
  }

  // Blandning från övriga typer (interleaving), annars från hela poolen.
  const ovriga = ovrigaTyper.size > 0 ? pool.filter(q => ovrigaTyper.has(q.typ)) : pool;
  ta(osedda(tillEnheter(ovriga), sedda, antal, slump, senastSedd), Math.max(antalOvriga, antal - antalValda()));
  // Om övriga typer inte räckte, fyll på från de svaga.
  if (antalValda() < antal) for (const lista of perSvag) ta(lista, antal);

  return blanda(valda, slump);
}
