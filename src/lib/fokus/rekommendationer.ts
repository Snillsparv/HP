// Koppling från en uppgiftstyp till Jonas genomgångar: strategisidan för
// delprovet (med video) och matterepetitionens avsnitt för kategorin.
// Ren modul utan frågedata, går att använda i webbläsaren.
import { DELPROV_NAMN, delprovForTyp } from './typer.js';
import type { DelprovTyp } from '../extraprov/types.js';

export interface Resurs {
  namn: string;
  url: string;
}

export interface Rekommendation {
  strategi: Resurs;
  matte: Resurs[];
}

const STRATEGI_VIMEO: Record<DelprovTyp, string> = {
  xyz: '1181681156',
  kva: '1181679570',
  nog: '1181680376',
  dtk: '1181679102',
  ord: '1181680666',
  las: '1181679796',
  mek: '1181680021',
};

/** Matterepetitionens avsnitt (id i /ovningsuppgifter) med visningsnamn. */
const MATTE: Record<string, string> = {
  prioritering: 'Prioriteringsordning',
  brak: 'Bråkräkning',
  potenser: 'Potenser och rötter',
  ekvationer: 'Ekvationer och uttryck',
  procent: 'Procent',
  lagesmatt: 'Medelvärde och median',
  geometri: 'Geometri',
  rorelse: 'Rörelse',
  sannolikhet: 'Sannolikhet',
  funktioner: 'Funktioner och grafer',
  huvudrakning: 'Huvudräkning',
};

/** Frågekategori till matterepetitionens avsnitt, viktigast först. */
const KATEGORI_MATTE: Record<string, string[]> = {
  algebra: ['ekvationer', 'potenser', 'brak'],
  aritmetik: ['prioritering', 'brak', 'huvudrakning'],
  geometri: ['geometri'],
  procent: ['procent'],
  sannolikhet: ['sannolikhet'],
  funktioner: ['funktioner'],
  statistik: ['lagesmatt'],
  enheter: ['rorelse'],
  logik: [],
  diagram: ['procent', 'huvudrakning'],
  tabell: ['huvudrakning'],
  karta: [],
};

export function rekommendationFor(typ: string): Rekommendation | null {
  const dp = delprovForTyp(typ);
  if (!dp) return null;
  const kategori = typ.split(':')[1];
  const matte = (dp === 'mek' || dp === 'ord' || dp === 'las' ? [] : (KATEGORI_MATTE[kategori] || []))
    .map(id => ({ namn: MATTE[id], url: `/ovningsuppgifter#${id}` }));
  return {
    strategi: { namn: `Min strategi för ${DELPROV_NAMN[dp]}`, url: `/delprov/${dp}` },
    matte,
  };
}

export function strategiVimeo(dp: DelprovTyp): string {
  return STRATEGI_VIMEO[dp];
}
