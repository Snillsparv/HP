// Styrkekartan: rader per uppgiftstyp för profilen och träningssidan.
import type { Styrka } from './styrka.js';
import { styrkeNiva, NIVA_TEXT, prioritet, MINSTA_SVAR_TEXT } from './styrka.js';
import type { TypInfo } from './fragebank.js';
import { typNamn } from './typer.js';

export interface KartaRad {
  typ: string;
  namn: string;
  pct: number;
  antal: number;
  osaker: boolean;
  farg: string;
  niva: string;
  nivaText: string;
  /** Text som visas till höger om stapeln. */
  varde: string;
  /** Poäng att hämta, för sorteringen. */
  prio: number;
  /** "mest att hämta" på de tre översta. */
  etikett: string;
}

export const NIVA_FARG: Record<string, string> = { gron: '#22c55e', bla: '#3b82f6', gul: '#f59e0b', rod: '#ef4444', gra: '#cbd5e1' };

const MANADER = ['januari', 'februari', 'mars', 'april', 'maj', 'juni', 'juli', 'augusti', 'september', 'oktober', 'november', 'december'];

/** Rader för typer med minst ett svar: mest att hämta först, gröna och osäkra
 * sist. De tre översta med poäng att hämta får etiketten "mest att hämta". */
export function byggKarta(styrkor: Map<string, Styrka>, typer: TypInfo[], vikter?: Map<string, number>, nu = new Date()): KartaRad[] {
  const namn = new Map(typer.map(t => [t.typ, t.namn]));
  const rader = [...styrkor.values()].map(s => {
    const niva = styrkeNiva(s);
    const pct = Math.round(s.styrka * 100);
    const prio = prioritet(s, vikter?.get(s.typ) ?? 1);
    let varde: string;
    if (!s.osaker) varde = `${pct} % (${s.antal} svar)`;
    else if (s.antal < MINSTA_SVAR_TEXT) varde = `för lite data (${s.antal} svar)`;
    else varde = `senast i ${s.senast ? MANADER[s.senast.getMonth()] : 'våras'}, var ${pct} %`;
    return {
      typ: s.typ,
      namn: namn.get(s.typ) || typNamn(s.typ),
      pct,
      antal: s.antal,
      osaker: s.osaker,
      farg: NIVA_FARG[niva],
      niva,
      nivaText: NIVA_TEXT[niva],
      varde,
      prio,
      etikett: '',
    };
  });
  rader.sort((a, b) => {
    const ka = a.osaker ? 2 : a.prio > 0 ? 0 : 1;
    const kb = b.osaker ? 2 : b.prio > 0 ? 0 : 1;
    return ka - kb || b.prio - a.prio || a.pct - b.pct;
  });
  rader.filter(r => r.prio > 0).slice(0, 3).forEach(r => { r.etikett = 'mest att hämta'; });
  void nu;
  return rader;
}
