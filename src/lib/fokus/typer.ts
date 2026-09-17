// Uppgiftstyper för fokuserad träning: rena funktioner utan frågedata, så
// att de kan användas både på servern (frågebanken) och i webbläsaren
// (knappen "Träna fler av den här typen" i rättningen).
import type { DelprovTyp } from '../extraprov/types.js';
import type { Fraga } from '../fragor/render.js';

export const DELPROV: DelprovTyp[] = ['xyz', 'kva', 'nog', 'dtk', 'ord', 'las', 'mek'];

export const DELPROV_NAMN: Record<DelprovTyp, string> = {
  xyz: 'XYZ',
  kva: 'KVA',
  nog: 'NOG',
  dtk: 'DTK',
  ord: 'ORD',
  las: 'LÄS',
  mek: 'MEK',
};

export const DELPROV_LANGT: Record<DelprovTyp, string> = {
  xyz: 'Matematisk problemlösning',
  kva: 'Kvantitativa jämförelser',
  nog: 'Kvantitativa resonemang',
  dtk: 'Diagram, tabeller och kartor',
  ord: 'Ordförståelse',
  las: 'Läsförståelse',
  mek: 'Meningskomplettering',
};

const KATEGORI_NAMN: Record<string, string> = {
  algebra: 'algebra',
  geometri: 'geometri',
  procent: 'procent',
  sannolikhet: 'sannolikhet',
  funktioner: 'funktioner och grafer',
  aritmetik: 'aritmetik',
  statistik: 'statistik',
  enheter: 'enheter',
  logik: 'logiskt resonemang',
  diagram: 'diagram',
  tabell: 'tabeller',
  karta: 'kartor',
};

export function frageId(testId: string, num: number): string {
  return `${testId}#${num}`;
}

/** Delprovstyp för ett delprov i huvudmaterialet: 'xyz2' blir 'xyz', 'standard' blir 'xyz'. */
export function normaliseraDelprov(id: string): DelprovTyp {
  const bas = id.replace(/2$/, '');
  if (DELPROV.includes(bas as DelprovTyp)) return bas as DelprovTyp;
  throw new Error(`Okänt delprov: ${id}`);
}

/** Antal luckor i en MEK-mening. */
export function antalLuckor(text: string): number {
  return (text.match(/_{3,}/g) || []).length;
}

/** Uppgiftstypen för en fråga: delprov plus kategori för de kvantitativa,
 * antal luckor för MEK, bara delprovet för ORD och LÄS. */
export function typFor(delprov: DelprovTyp, q: Fraga): string {
  if (delprov === 'mek') {
    const n = antalLuckor(q.text);
    return n >= 1 && n <= 3 ? `mek:${n}` : 'mek';
  }
  if (delprov === 'ord' || delprov === 'las') return delprov;
  return q.category ? `${delprov}:${q.category}` : delprov;
}

/** Läsbart namn på en typ, t.ex. "XYZ algebra" eller "MEK med två luckor". */
export function typNamn(typ: string): string {
  const [dp, rest] = typ.split(':');
  const namn = DELPROV_NAMN[dp as DelprovTyp] || dp.toUpperCase();
  if (!rest) return namn;
  if (dp === 'mek') {
    const ord: Record<string, string> = { '1': 'en lucka', '2': 'två luckor', '3': 'tre luckor' };
    return `${namn} med ${ord[rest] || rest + ' luckor'}`;
  }
  return `${namn} ${KATEGORI_NAMN[rest] || rest}`;
}

/** Delprovet en typ hör till. */
export function delprovForTyp(typ: string): DelprovTyp | null {
  const dp = typ.split(':')[0];
  return DELPROV.includes(dp as DelprovTyp) ? (dp as DelprovTyp) : null;
}
