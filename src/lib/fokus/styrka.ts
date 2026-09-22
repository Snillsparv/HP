// Svaghetsmodellen: styrka per uppgiftstyp räknad ur användarens svar, där
// nya svar väger mer än gamla. Rena funktioner utan databas, så att samma
// modell kan köras på servern och testas fristående. Se
// docs/svaghetstraning/design.md, avsnitt 4.

export interface Handelse {
  questionId: string;
  delprov: string;
  typ: string;
  correct: boolean;
  /** 'prov' för tidsatta provsvar, 'runda' för träningsrundor och övertidssvar. */
  kalla?: 'prov' | 'runda';
  /** Fråga som hör ihop med andra (samma diagram eller text). */
  grupp?: string | null;
  /** Obesvarad fråga i ett inlämnat prov: räknas som fel med halv vikt. */
  obesvarad?: boolean;
  /** Svar utan tidspress (övertid i proven). */
  utanTid?: boolean;
  /** Omförsök på en nyligen besvarad fråga: sparas men räknas inte i styrkan. */
  omforsok?: boolean;
  /** Frågan besvarades även tidigare inom en månad: räknas med halv vikt. */
  repetition?: boolean;
  createdAt: Date;
}

export interface Styrka {
  typ: string;
  delprov: string;
  /** Skattad andel rätt 0 till 1, med prior. */
  styrka: number;
  /** Antal svar som ligger bakom skattningen. */
  antal: number;
  /** Effektivt antal: summan av vikterna, högst omkring 29 hur lång historiken än är. */
  effektivt: number;
  /** Antal rätt (oviktat). */
  ratt: number;
  /** Under MINSTA_ANTAL effektiva svar visas "för lite data" och typen rangordnas inte. */
  osaker: boolean;
  senast: Date | null;
}

/** Halveringstid i antal svar: det tjugonde senaste svaret väger hälften av det senaste. */
export const HALVERINGSTID = 20;
/** Halveringstid i dagar: ett svar från i våras väger hälften i höst, så att
 * gamla prov inte färgar kartan för alltid. */
export const HALVERINGSTID_DAGAR = 90;
/** Rundsvar och övertidssvar väger mindre än tidsatta provsvar. */
export const KALLVIKT_RUNDA = 0.7;
/** Frågor i samma grupp (diagram, text) vid samma tillfälle räknas som högst så många svar. */
export const GRUPPTAK = 2;
/** Prior Beta(2, 2) på delprovsnivå: två fel av två visas som omkring 33 procent, inte 0. */
export const PRIOR_A = 2;
export const PRIOR_B = 2;
/** Pseudoantal för typens prior, centrerad på delprovsstyrkan. */
export const PRIOR_TYP = 4;
/** Lägre effektivt antal än så här ger "för lite data". */
export const MINSTA_ANTAL = 4;
/** Antal svar i text: under så här många är det råantalet som är litet. */
export const MINSTA_SVAR_TEXT = 4;
/** Minst så många typer med underlag innan "Mina svagheter" öppnas. */
export const MINSTA_SAKRA_TYPER = 3;

/** Styrka som räknas som "sitter": över den finns lite att hämta. */
export const MAL_STYRKA = 0.85;
/** Lägre mål för det som är svårt för alla. */
export const MAL_STYRKA_SVART = 0.75;

export function malFor(typ: string): number {
  return typ.startsWith('nog') || typ === 'mek:3' ? MAL_STYRKA_SVART : MAL_STYRKA;
}

/** Vikt för det i:te senaste svaret (0 = senast) som gavs för ett antal dagar sedan. */
export function vikt(i: number, dagar = 0): number {
  return Math.pow(0.5, i / HALVERINGSTID) * Math.pow(0.5, Math.max(0, dagar) / HALVERINGSTID_DAGAR);
}

/** Faktor för källa, repetition och obesvarad fråga. */
function faktor(h: Handelse): number {
  let f = h.kalla === 'runda' || h.utanTid ? KALLVIKT_RUNDA : 1;
  if (h.repetition) f *= 0.5;
  if (h.obesvarad) f *= 0.5;
  return f;
}

/** Nyckel för grupptaket: samma grupp samma dag räknas som ett tillfälle. */
function tillfalle(h: Handelse): string | null {
  if (!h.grupp) return null;
  return `${h.grupp}|${h.createdAt.toISOString().slice(0, 10)}`;
}

interface Alternativ {
  nu?: Date;
  /** Prior per typ (t.ex. delprovsstyrkan), annars Beta(2, 2). */
  prior?: Map<string, number>;
  priorAntal?: number;
}

/** Styrka per typ. Händelserna behöver inte vara sorterade. Med prior per
 * typ centreras skattningen där (delprovsstyrkan), annars på 50 procent. */
export function beraknaStyrkor(handelser: Handelse[], alt: Alternativ | Date = {}): Map<string, Styrka> {
  const a: Alternativ = alt instanceof Date ? { nu: alt } : alt;
  const nu = a.nu ?? new Date();
  const perTyp = new Map<string, Handelse[]>();
  for (const h of handelser) {
    if (h.omforsok) continue;
    const lista = perTyp.get(h.typ) || [];
    lista.push(h);
    perTyp.set(h.typ, lista);
  }
  const resultat = new Map<string, Styrka>();
  for (const [typ, lista] of perTyp) {
    lista.sort((x, y) => y.createdAt.getTime() - x.createdAt.getTime());
    // Grupptak: frågor på samma diagram eller text vid samma tillfälle.
    const perTillfalle = new Map<string, number>();
    for (const h of lista) { const t = tillfalle(h); if (t) perTillfalle.set(t, (perTillfalle.get(t) || 0) + 1); }
    let viktadRatt = 0;
    let viktadSumma = 0;
    let ratt = 0;
    // Svar med samma tidsstämpel (ett helt provpass) får samma vikt: mitten
    // av gruppens platser, så att frågornas ordning i passet inte spelar roll.
    let i = 0;
    while (i < lista.length) {
      let j = i;
      while (j + 1 < lista.length && lista[j + 1].createdAt.getTime() === lista[i].createdAt.getTime()) j++;
      const dagar = (nu.getTime() - lista[i].createdAt.getTime()) / (24 * 3600 * 1000);
      const w = vikt((i + j) / 2, dagar);
      for (let k = i; k <= j; k++) {
        const h = lista[k];
        const t = tillfalle(h);
        const tak = t ? Math.min(1, GRUPPTAK / (perTillfalle.get(t) || 1)) : 1;
        const wk = w * faktor(h) * tak;
        viktadSumma += wk;
        if (h.correct) { viktadRatt += wk; ratt++; }
      }
      i = j + 1;
    }
    const prior = a.prior?.get(typ);
    const styrka = prior === undefined
      ? (viktadRatt + PRIOR_A) / (viktadSumma + PRIOR_A + PRIOR_B)
      : (viktadRatt + (a.priorAntal ?? PRIOR_TYP) * prior) / (viktadSumma + (a.priorAntal ?? PRIOR_TYP));
    resultat.set(typ, {
      typ,
      delprov: lista[0].delprov,
      styrka,
      antal: lista.length,
      effektivt: viktadSumma,
      ratt,
      osaker: viktadSumma < MINSTA_ANTAL,
      senast: lista[0].createdAt,
    });
  }
  return resultat;
}

/** Styrka per delprov, samma modell men grupperat grövre, prior Beta(2, 2). */
export function beraknaDelprovStyrkor(handelser: Handelse[], nu = new Date()): Map<string, Styrka> {
  const grov = handelser.map(h => ({ ...h, typ: h.delprov }));
  return beraknaStyrkor(grov, { nu });
}

/** Styrka per typ med priorn centrerad på användarens delprovsstyrka, så att
 * en ny undertyp startar där användaren ligger i delprovet. */
export function beraknaTypStyrkor(handelser: Handelse[], nu = new Date()): Map<string, Styrka> {
  const delprov = beraknaDelprovStyrkor(handelser, nu);
  const prior = new Map<string, number>();
  for (const h of handelser) {
    const s = delprov.get(h.delprov);
    if (s && !prior.has(h.typ)) prior.set(h.typ, s.styrka);
  }
  return beraknaStyrkor(handelser, { nu, prior });
}

/** Hur mycket det finns att hämta i en typ: hur vanlig typen är i provet
 * gånger avståndet till målnivån, plus ett litet oviktat påslag för
 * osäkerhet så att typer med få svar går före vid lika avstånd. vikt är
 * typens ungefärliga antal uppgifter i ett provpass. Osäkra typer och typer
 * som redan sitter ger 0. */
export function prioritet(s: Styrka, vikt: number): number {
  const mal = malFor(s.typ);
  if (s.osaker || s.styrka >= mal) return 0;
  return vikt * (mal - s.styrka) + 0.05 / Math.sqrt(s.effektivt + 1);
}

/** De typer där det finns mest poäng att hämta, bland typer med underlag.
 * Utan vikter (alla lika) blir det i praktiken de svagaste. */
export function svagasteTyper(styrkor: Map<string, Styrka>, antal = 3, vikter?: Map<string, number>): Styrka[] {
  return [...styrkor.values()]
    .map(s => ({ s, p: prioritet(s, vikter?.get(s.typ) ?? 1) }))
    .filter(x => x.p > 0)
    .sort((a, b) => b.p - a.p)
    .slice(0, antal)
    .map(x => x.s);
}

/** Antal typer med tillräckligt underlag för att rangordnas. */
export function antalSakraTyper(styrkor: Map<string, Styrka>): number {
  return [...styrkor.values()].filter(s => !s.osaker).length;
}

/** Delprovet att fortsätta med före gaten: säkert på delprovsnivå och med
 * störst antal uppgifter per pass gånger avståndet till målet. */
export function delprovAttFortsattaMed(delprovStyrkor: Map<string, Styrka>, antalPerPass: Record<string, number>): Styrka | undefined {
  return [...delprovStyrkor.values()]
    .filter(s => !s.osaker)
    .map(s => ({ s, p: (antalPerPass[s.delprov] || 1) * Math.max(0, malFor(s.typ) - s.styrka) }))
    .filter(x => x.p > 0)
    .sort((a, b) => b.p - a.p)[0]?.s;
}

/** Den starkaste typen med tillräckligt underlag, för att avsluta en runda på ett bra sätt. */
export function starkasteTyp(styrkor: Map<string, Styrka>): Styrka | undefined {
  return [...styrkor.values()].filter(s => !s.osaker).sort((a, b) => b.styrka - a.styrka)[0];
}

export type Niva = 'gra' | 'rod' | 'gul' | 'bla' | 'gron';

/** Färgnivå för en styrka: samma trösklar som analysens staplar, räknat på
 * den avrundade procenten som visas. */
export function styrkeNiva(s: Styrka | undefined): Niva {
  if (!s || s.osaker) return 'gra';
  const pct = Math.round(s.styrka * 100);
  if (pct >= 80) return 'gron';
  if (pct >= 60) return 'bla';
  if (pct >= 40) return 'gul';
  return 'rod';
}

/** Textetikett för nivån, för skärmläsare och kvitton. */
export const NIVA_TEXT: Record<Niva, string> = { gra: 'för lite data', rod: 'svag', gul: 'på väg', bla: 'bra', gron: 'sitter' };

/** Hur många rundsvar till innan typen får en siffra. */
export function svarTillSiffra(s: Styrka | undefined): number {
  const eff = s?.effektivt ?? 0;
  return Math.max(1, Math.ceil((MINSTA_ANTAL - eff) / KALLVIKT_RUNDA));
}
