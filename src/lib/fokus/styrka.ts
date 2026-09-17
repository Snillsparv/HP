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
  createdAt: Date;
}

export interface Styrka {
  typ: string;
  delprov: string;
  /** Skattad andel rätt 0 till 1, med prior. */
  styrka: number;
  /** Antal svar som ligger bakom skattningen. */
  antal: number;
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
    // Den viktade andelen skalas till det faktiska antalet svar, så att
    // priorn betyder mest när svaren är få.
    const n = lista.length;
    const effektivRatt = viktadSumma > 0 ? (viktadRatt / viktadSumma) * n : 0;
    const styrka = (effektivRatt + PRIOR_A) / (n + PRIOR_A + PRIOR_B);
    resultat.set(typ, {
      typ,
      delprov: lista[0].delprov,
      styrka,
      antal: n,
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

/** De svagaste typerna med tillräckligt underlag, svagast först. */
export function svagasteTyper(styrkor: Map<string, Styrka>, antal = 3): Styrka[] {
  return [...styrkor.values()]
    .filter(s => !s.osaker)
    .sort((a, b) => a.styrka - b.styrka)
    .slice(0, antal);
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
