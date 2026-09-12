// Gemensamma typer för extramaterialet: fler provpass från tidigare
// högskoleprov, med textförklaringar i stället för videor.

export type DelprovTyp = 'xyz' | 'kva' | 'nog' | 'dtk' | 'ord' | 'las' | 'mek';

export interface ExtraFraga {
  num: number;
  /** Frågetext som HTML. För ORD är det ordet i fetstil, för MEK meningen med luckor. */
  text: string;
  options: string[];
  correct: number;
  /** Textförklaring som HTML: varför rätt svar är rätt och gärna varför de andra inte är det. */
  explanation?: string;
  category?: string;
  // KVA
  q1?: string;
  q2?: string;
  // NOG
  s1?: string;
  s2?: string;
  // DTK
  diagram?: string;
  diagramAlt?: string;
  rotate?: boolean;
  // ORD
  word?: string;
  // LÄS: index i delprovets texts-lista
  textIndex?: number;
}

export interface LasText {
  title: string;
  html: string;
}

export interface ExtraDelprov {
  id: DelprovTyp;
  name: string;
  shortName: string;
  type: DelprovTyp;
  /** LÄS: texterna som frågorna hör till. */
  texts?: LasText[];
  questions: ExtraFraga[];
}

export interface ExtraPass {
  /** Används i adresser och som test_id (med prefixet extra-). */
  id: string;
  tillfalle: string;
  passNr: number;
  kind: 'kvant' | 'verbal';
  name: string;
  timeMinutes: number;
  extendedMinutes: number;
  /** Officiell normeringstabell för hela delen (80 uppgifter): [lägsta råpoäng, normerad]. */
  normering: [number, number][];
  subTests: ExtraDelprov[];
}

export interface Provtillfalle {
  id: string;
  name: string;
  date: string;
  /** Adressen hos UHR som materialet hämtats från. */
  source: string;
}

export const tex = (latex: string) => `<span class="tex">${latex}</span>`;

export const KVA_ALTERNATIV = [
  'I är större än II',
  'II är större än I',
  'I är lika med II',
  'informationen är otillräcklig',
];

export const NOG_ALTERNATIV = [
  'i (1) men ej i (2)',
  'i (2) men ej i (1)',
  'i (1) tillsammans med (2)',
  'i (1) och (2) var för sig',
  'ej genom de båda påståendena',
];

/** Figur i en uppgift, centrerad under texten. */
export const figur = (src: string, alt: string, width: number) =>
  `<div style="text-align:center;margin:1.2rem 0;"><img src="${src}" alt="${alt}" data-fadein style="max-width:${width}px;width:100%;" /></div>`;
