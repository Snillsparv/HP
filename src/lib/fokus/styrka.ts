// Svaghetsmodellen: styrka per uppgiftstyp räknad ur användarens svar, där
// nya svar väger mer än gamla. Rena funktioner utan databas, så att samma
// modell kan köras på servern och testas fristående.

export interface Handelse {
  questionId: string;
  delprov: string;
  typ: string;
  correct: boolean;
  /** Svar utan tidspress räknas, men markeras (gäller övertid i proven). */
  utanTid?: boolean;
  /** Omförsök på en nyligen besvarad fråga: sparas men räknas inte i styrkan. */
  omforsok?: boolean;
  createdAt: Date;
}

export interface Styrka {
  typ: string;
  delprov: string;
  /** Skattad andel rätt 0 till 1, med prior. */
  styrka: number;
  /** Antal svar som ligger bakom skattningen. */
  antal: number;
  /** Effektivt antal: summan av vikterna, högst omkring 15 hur lång historiken än är. */
  effektivt: number;
  /** Antal rätt (oviktat). */
  ratt: number;
  /** Under MINSTA_ANTAL svar visas "för lite data". */
  osaker: boolean;
  senast: Date | null;
}

/** Halveringstid i antal svar: det tionde senaste svaret väger hälften av det senaste. */
export const HALVERINGSTID = 10;
/** Prior Beta(2, 2): två fel av två visas som 33 procent, inte 0. */
export const PRIOR_A = 2;
export const PRIOR_B = 2;
/** Färre svar än så här ger "för lite data". */
export const MINSTA_ANTAL = 5;

/** Vikt för det i:te senaste svaret (0 = senast). */
export function vikt(i: number): number {
  return Math.pow(0.5, i / HALVERINGSTID);
}

/** Styrka per typ. Händelserna behöver inte vara sorterade. */
export function beraknaStyrkor(handelser: Handelse[]): Map<string, Styrka> {
  const perTyp = new Map<string, Handelse[]>();
  for (const h of handelser) {
    const lista = perTyp.get(h.typ) || [];
    lista.push(h);
    perTyp.set(h.typ, lista);
  }
  const resultat = new Map<string, Styrka>();
  for (const [typ, lista] of perTyp) {
    lista.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
    let viktadRatt = 0;
    let viktadSumma = 0;
    let ratt = 0;
    lista.forEach((h, i) => {
      const w = vikt(i);
      viktadSumma += w;
      if (h.correct) { viktadRatt += w; ratt++; }
    });
    // Priorn räknas mot det effektiva antalet (summan av vikterna), så att
    // en lång historik inte ser säkrare ut än de senaste cirka femton svaren.
    const n = lista.length;
    const styrka = (viktadRatt + PRIOR_A) / (viktadSumma + PRIOR_A + PRIOR_B);
    resultat.set(typ, {
      typ,
      delprov: lista[0].delprov,
      styrka,
      antal: n,
      effektivt: viktadSumma,
      ratt,
      osaker: n < MINSTA_ANTAL,
      senast: lista[0].createdAt,
    });
  }
  return resultat;
}

/** Styrka per delprov, samma modell men grupperat grövre. */
export function beraknaDelprovStyrkor(handelser: Handelse[]): Map<string, Styrka> {
  const grov = handelser.map(h => ({ ...h, typ: h.delprov }));
  return beraknaStyrkor(grov);
}

/** Styrka som räknas som "sitter": över den finns lite att hämta. */
export const MAL_STYRKA = 0.85;

/** Hur mycket det finns att hämta i en typ: hur vanlig typen är i provet
 * gånger avståndet till målstyrkan, plus ett litet påslag för osäkerhet så
 * att typer med få svar inte försvinner helt. vikt är typens ungefärliga
 * antal uppgifter i ett provpass. */
export function prioritet(s: Styrka, vikt: number): number {
  return vikt * (Math.max(0, MAL_STYRKA - s.styrka) + 0.15 / Math.sqrt(s.effektivt + 1));
}

/** De typer där det finns mest poäng att hämta, med tillräckligt underlag.
 * Utan vikter (alla lika) blir det i praktiken de svagaste. */
export function svagasteTyper(styrkor: Map<string, Styrka>, antal = 3, vikter?: Map<string, number>): Styrka[] {
  return [...styrkor.values()]
    .filter(s => !s.osaker)
    .map(s => ({ s, p: prioritet(s, vikter?.get(s.typ) ?? 1) }))
    .filter(x => x.p > 0)
    .sort((a, b) => b.p - a.p)
    .slice(0, antal)
    .map(x => x.s);
}

/** Den starkaste typen med tillräckligt underlag, för att avsluta en runda på ett bra sätt. */
export function starkasteTyp(styrkor: Map<string, Styrka>): Styrka | undefined {
  return [...styrkor.values()].filter(s => !s.osaker).sort((a, b) => b.styrka - a.styrka)[0];
}

/** Färgnivå för en styrka: samma trösklar som analysens staplar. */
export function styrkeNiva(s: Styrka | undefined): 'gra' | 'rod' | 'gul' | 'bla' | 'gron' {
  if (!s || s.osaker) return 'gra';
  const pct = s.styrka * 100;
  if (pct >= 80) return 'gron';
  if (pct >= 60) return 'bla';
  if (pct >= 40) return 'gul';
  return 'rod';
}
