// Styrkekartan: rader per uppgiftstyp för profilen och träningssidan.
import type { Styrka } from './styrka.js';
import { styrkeNiva, MINSTA_ANTAL } from './styrka.js';
import type { TypInfo } from './fragebank.js';

export interface KartaRad {
  typ: string;
  namn: string;
  pct: number;
  antal: number;
  osaker: boolean;
  farg: string;
  niva: string;
  /** Text som visas till höger om stapeln. */
  varde: string;
}

export const NIVA_FARG: Record<string, string> = { gron: '#22c55e', bla: '#3b82f6', gul: '#f59e0b', rod: '#ef4444', gra: '#cbd5e1' };

/** Rader för typer med minst ett svar, svagast först och osäkra sist. */
export function byggKarta(styrkor: Map<string, Styrka>, typer: TypInfo[]): KartaRad[] {
  return typer
    .map(t => ({ t, s: styrkor.get(t.typ) }))
    .filter((x): x is { t: TypInfo; s: Styrka } => !!x.s)
    .map(({ t, s }) => {
      const niva = styrkeNiva(s);
      const pct = Math.round(s.styrka * 100);
      return {
        typ: t.typ,
        namn: t.namn,
        pct,
        antal: s.antal,
        osaker: s.osaker,
        farg: NIVA_FARG[niva],
        niva,
        varde: s.osaker ? `för lite data (${s.antal} av ${MINSTA_ANTAL} svar)` : `${pct} %`,
      };
    })
    .sort((a, b) => (a.osaker === b.osaker ? a.pct - b.pct : a.osaker ? 1 : -1));
}
