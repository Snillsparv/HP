// Din hjärnkarta, vyn: rena funktioner som gör HTML och SVG av kartdatan
// från hjarnkarta.ts. Används både av Astro-komponenterna på servern och av
// rättningens skript i webbläsaren, så modulen får INTE importera frågebanken
// eller någon frågedata, bara typer och rena hjälpare.
//
// Kartan ritas i pixlar: etiketterna är HTML-knappar med fast storlek och
// radien räknas ur deras bredd, så att kartan krymper i stället för texten.
import type { DelprovTyp } from '../extraprov/types.js';
import { DELPROV, DELPROV_NAMN, DELPROV_LANGT } from './typer.js';

export type Halva = 'kvant' | 'verbal';

/** Knappen för ett delprov: hela delprovet eller en typ i det. */
export interface Trana {
  lage: 'delprov' | 'typ';
  typ: string | null;
  /** Typens korta namn i löptext, t.ex. "geometri" eller "två luckor". */
  kort: string | null;
  knapp: string;
  under: string;
  href: string;
}

export interface KartAxel {
  delprov: DelprovTyp;
  namn: string;
  langt: string;
  del: Halva;
  /** Skattad andel rätt 0 till 1, med prior. */
  styrka: number;
  /** Effektivt antal svar efter vikter, grupptak och tidsförfall. */
  effektivt: number;
  /** Antal svar (oviktat). */
  antal: number;
  ratt: number;
  /** eff < 4: ingen punkt, aldrig pilen. */
  osaker: boolean;
  mal: number;
  /** ANTAL_PER_PASS · max(0, mål − styrka). */
  pott: number;
  /** round(pott − 0,01): talet som visas. */
  n: number;
  /** Procenten som visas: femsteg när eff < 15. */
  visadPct: number;
  trana: Trana;
  /** Före passet (bara i rättningen). */
  fore?: number;
  effFore?: number;
  osakerFore?: boolean;
  /** Säker förändring i procentenheter, annars null. */
  delta?: number | null;
}

export interface KartTyp {
  typ: string;
  /** "Geometri", "Två luckor". */
  namn: string;
  /** "geometri", "två luckor". */
  kort: string;
  styrka: number;
  effektivt: number;
  antal: number;
  /** Antal rätt (oviktat). */
  ratt: number;
  osaker: boolean;
  visadPct: number;
  mal: number;
  /** Ungefärligt antal uppgifter av typen i ett provpass. */
  perPass: number;
  pott: number;
  n: number;
  href: string;
}

export interface Harnast {
  lage: 'delprov' | 'typ' | 'pass' | 'tom';
  delprov: DelprovTyp | null;
  typ: string | null;
  /** Talet i pillen, -1 när det inte finns något. */
  n: number;
  pottText: string;
  rubrik: string;
  underrubrik: string;
  /** Fet inledning av meningen, kan vara tom. */
  fet: string;
  mening: string;
  knapp: string;
  knappUnder: string;
  href: string;
  lank: { text: string; href: string } | null;
  gra: { text: string; lank: string; href: string } | null;
  halva: { fet: string; text: string; lank: string; href: string } | null;
}

export interface UrProvet {
  rubrik: string;
  tagg: string;
  text: string;
  href: string;
}

export interface Forandring {
  fet: string;
  text: string;
  /** Rita formen före passet som prickad kontur. */
  foreKontur: boolean;
}

export interface HjarnkartaData {
  /** Inga svar alls. */
  tom: boolean;
  antalSvar: number;
  axlar: KartAxel[];
  /** Delprovet med pilen, null när inget säkert delprov finns. */
  vinnare: DelprovTyp | null;
  harnast: Harnast;
  /** Raderna i arket per delprov (tomt för ORD och LÄS). */
  typer: Record<string, KartTyp[]>;
  pass?: { testId: string; delprov: DelprovTyp[] } | null;
  forandring?: Forandring | null;
  urProvet?: UrProvet | null;
}

// ---------- Rena hjälpare, delas med servern ----------

export const HALVA: Record<DelprovTyp, Halva> = { xyz: 'kvant', kva: 'kvant', nog: 'kvant', dtk: 'kvant', ord: 'verbal', las: 'verbal', mek: 'verbal' };
export const SAKER_PROCENT = 15;
/** En säker typ utan pott står som "nära målet" bara så här nära målet. */
export const NARA_MALET = 0.08;

export function esc(s: unknown): string {
  return String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]!));
}

/** Procenten som visas: i femsteg (58 blir 60) tills effektivt antal är minst 15. */
export function visadProcent(v: number, eff: number): number {
  return eff < SAKER_PROCENT ? Math.round(v * 20) * 5 : Math.round(v * 100);
}

/** Talet ur potten: en exakt halva avrundas nedåt, vi lovar hellre för lite. */
export function nFor(pott: number): number {
  return Math.round(pott - 0.01);
}

export function potText(n: number): string {
  return n < 1 ? 'nära målet' : `ca +${n} rätt att hämta`;
}

/** Förändringen i procentenheter om den är säker, annars null: minst 4
 * enheter och mer än två standardfel från det som väntas när nivån är
 * oförändrad. se och forvantad räknas ur svarens vikter före och efter
 * (forandringsOsakerhet i styrka.ts), så att halveringen och grupptaket
 * kommer med. */
export function deltaSynlig(v: number, fore: number, se: number, forvantad = 0): number | null {
  if (!(se > 0)) return null;
  const d = v - fore;
  const dp = Math.round(d * 100);
  const z = d - forvantad;
  return Math.abs(z) > 2 * se && Math.sign(z) === Math.sign(d) && Math.abs(dp) >= 4 ? dp : null;
}

/** Lägger till &fran=<testId> på länkar till träningen. */
export function medFran(href: string, fran?: string | null): string {
  if (!fran || !href.startsWith('/trana/fokus?')) return href;
  return `${href}&fran=${encodeURIComponent(fran)}`;
}

/** "XYZ, KVA, NOG och DTK" */
export function lista(namn: string[]): string {
  if (namn.length <= 1) return namn.join('');
  return `${namn.slice(0, -1).join(', ')} och ${namn[namn.length - 1]}`;
}

const NBSP = ' ';

/** Kallstartens texter när det inte finns några svar alls. */
export function tomHarnast(): Harnast {
  return {
    lage: 'tom', delprov: null, typ: null, n: -1, pottText: '',
    rubrik: '', underrubrik: '',
    fet: 'Kartan är tom än så länge.',
    mening: 'Ge mig ett provpass så ritar jag in var dina rätt finns.',
    knapp: 'Välj ett provpass →', knappUnder: '', href: '/extra#forsta-pass',
    lank: { text: 'eller en snabbkoll, cirka tio minuter', href: '/trana/fokus?lage=snabbkoll' },
    gra: null, halva: null,
  };
}

/** Karta utan svar, t.ex. för gäster utan session ({ tom: true } från API:t). */
export function tomData(): HjarnkartaData {
  return {
    tom: true,
    antalSvar: 0,
    axlar: DELPROV.map(dp => ({
      delprov: dp, namn: DELPROV_NAMN[dp], langt: DELPROV_LANGT[dp], del: HALVA[dp],
      styrka: 0.5, effektivt: 0, antal: 0, ratt: 0, osaker: true, mal: dp === 'nog' ? 0.75 : dp === 'mek' ? 0.83 : 0.85,
      pott: 0, n: 0, visadPct: 50,
      trana: { lage: 'delprov', typ: null, kort: null, knapp: `Testa 5 ${DELPROV_NAMN[dp]}‑uppgifter →`, under: 'förklaring efter varje svar', href: `/trana/fokus?lage=delprov&val=${dp}&antal=5` },
    })),
    vinnare: null,
    harnast: tomHarnast(),
    typer: {},
  };
}

// ---------- Geometri ----------

const N = 7;
const vinkel = (i: number) => (i * 2 * Math.PI) / N;
const f = (n: number) => (Math.round(n * 10) / 10).toString();
const P = (pts: number[][]) => pts.map(p => `${f(p[0])},${f(p[1])}`).join(' ');

export const RMAX = { kompakt: 74, full: 88 } as const;
/** Under den här radien blir alla etiketter tvåradiga. */
const R_TVA = 62;
const R_MIN = 34;
/** Under den här radien stryks förändringssiffrorna ur etiketterna. */
const R_DELTA = 50;
/** Bredd som servern ritar för innan webbläsaren mätt containern (400 px telefon). */
export const STANDARDBREDD = { kompakt: 350, full: 350 } as const;

const FARG = {
  kvant: { linje: '#ea580c', fyll: '#fb923c' },
  verbal: { linje: '#2563eb', fyll: '#60a5fa' },
};

// Teckenbredd som andel av teckenstorleken, för 13 px i vikt 700 till 800.
// Hellre för brett än för smalt: en för bred etikett ger en lite mindre karta,
// en för smal kan överlappa. Webbläsaren mäter de riktiga bredderna.
function teckenBredd(c: string): number {
  if (c === ' ' || c === NBSP) return 0.3;
  if (c === '%') return 0.9;
  if (c === '›') return 0.42;
  if (c === '?') return 0.58;
  if (c === '↑' || c === '↓') return 0.72;
  if (/[0-9]/.test(c)) return 0.64;
  if (/[A-ZÅÄÖ]/.test(c)) return 0.74;
  return 0.6;
}
function textBredd(s: string, px = 13): number {
  let w = 0;
  for (const c of s) w += teckenBredd(c) * px;
  return w;
}

export type Matt = (html: string, i: number, tva: boolean) => [number, number];

interface EtikettLage { x: number; y: number; tx: string; ty: string; w: number; h: number; tva: boolean }

export interface Geometri {
  W: number; H: number; CX: number; CY: number; R: number; D: number;
  etk: EtikettLage[];
  allaTva: boolean;
  /** Förändringssiffrorna står i etiketterna (de tas bort när kartan annars blir för liten). */
  medDelta: boolean;
}

export interface KartOpt {
  storlek: 'kompakt' | 'full';
  /** Kartans bredd i px (containerns innerbredd plus 8 px per sida). */
  bredd?: number;
  /** Prefix för id:n i SVG:n, unikt per karta på sidan. */
  id?: string;
  /** Visa formen före passet, om datan har den. Standard: ja. */
  fore?: boolean;
  /** Mätfunktion för etiketterna (webbläsaren), annars uppskattning. */
  matt?: Matt;
  /** Ingen tillväxtanimation (t.ex. vid omritning efter storleksändring). */
  stilla?: boolean;
  fran?: string | null;
}

function visaFore(data: HjarnkartaData, opt: { fore?: boolean }): boolean {
  return opt.fore !== false && !!data.forandring?.foreKontur && data.axlar.some(a => a.fore !== undefined);
}

function deltaHTML(a: KartAxel, fore: boolean): { html: string; text: string } {
  if (!fore || a.osaker || a.delta === null || a.delta === undefined) return { html: '', text: '' };
  const d = a.delta;
  return d > 0
    ? { html: ` <span class="hk-upp">↑${d}</span>`, text: ` ↑${d}` }
    : { html: ` <span class="hk-ned">↓${-d}</span>`, text: ` ↓${-d}` };
}

function procentText(a: KartAxel): string {
  return a.osaker ? 'för lite data' : `${a.visadPct} procent`;
}

/** En etikett som HTML, utan position. */
export function etikettHTML(a: KartAxel, tva: boolean, vinnare: boolean, fore: boolean, stil = ''): string {
  const d = deltaHTML(a, fore);
  const kl = ['hk-etk', a.osaker ? 'hk-gra' : `hk-${a.del}`, tva ? 'hk-tva' : '', vinnare ? 'hk-vinnare' : ''].filter(Boolean).join(' ');
  // Tvåradig etikett: förändringen står på namnraden, så att etiketten
  // inte blir bredare än nödvändigt ("XYZ ↑12" över "58 % ›").
  const varde = a.osaker ? '?' : `${a.visadPct}&nbsp;%`;
  const inre = tva
    ? `<span class="hk-r1"><b>${esc(a.namn)}</b>${d.html}</span><span>${varde} <i>›</i></span>`
    : `<b>${esc(a.namn)}</b><span>${varde}${d.html}</span><i>›</i>`;
  const aria = `${a.namn}, ${procentText(a)}${d.text ? `, ${a.delta! > 0 ? 'upp' : 'ner'} ${Math.abs(a.delta!)} sedan passet` : ''}. Visa uppgiftstyperna.`;
  return `<button type="button" class="${kl}" data-dp="${a.delprov}"${stil ? ` style="${stil}"` : ''} aria-label="${esc(aria)}">${inre}</button>`;
}

function uppskattaEtikett(a: KartAxel, tva: boolean, fore: boolean): [number, number] {
  const d = deltaHTML(a, fore);
  const namn = textBredd(a.namn);
  const varde = a.osaker ? textBredd('?') : textBredd(`${a.visadPct}${NBSP}%`);
  const delta = textBredd(d.text);
  const kant = a.osaker ? 3 : 2;
  if (tva) return [Math.ceil(Math.max(namn + delta, varde + textBredd(' ›')) + 16 + kant), a.osaker ? 43 : 42];
  return [Math.ceil(namn + varde + delta + textBredd('›') + 8 + 17 + kant), a.osaker ? 26 : 25];
}

function raknaR(W: number, box: [number, number][], Rmax: number): number {
  let r: number = Rmax;
  for (let i = 0; i < N; i++) {
    const sn = Math.abs(Math.sin(vinkel(i)));
    if (sn >= 0.3) r = Math.min(r, (W / 2 - box[i][0] - 2) / sn - 10);
  }
  return Math.floor(r);
}

/** Kartans mått: radien ur etiketternas bredd, höjden ur etiketternas lägen. */
export function kartGeometri(data: HjarnkartaData, opt: KartOpt): Geometri {
  const W = Math.max(200, Math.round(opt.bredd ?? STANDARDBREDD[opt.storlek]));
  // I en bred container (datorn, en spalt) får kartan växa lite.
  const Rmax = W >= 560 ? Math.round(RMAX[opt.storlek] * 1.25) : RMAX[opt.storlek];
  let medDelta = visaFore(data, opt);
  const storlekar = (allaTva: boolean): { box: [number, number][]; tva: boolean[] } => {
    const tva = data.axlar.map((_, i) => allaTva || Math.abs(Math.cos(vinkel(i))) < 0.5);
    const box = data.axlar.map((a, i) => opt.matt
      ? opt.matt(etikettHTML(a, tva[i], data.vinnare === a.delprov, medDelta), i, tva[i])
      : uppskattaEtikett(a, tva[i], medDelta));
    return { box, tva };
  };
  const matt = () => {
    let tva = false;
    let st = storlekar(false);
    let r = raknaR(W, st.box, Rmax);
    if (r < R_TVA) {
      tva = true;
      st = storlekar(true);
      r = raknaR(W, st.box, Rmax);
    }
    return { ...st, R: r, allaTva: tva };
  };
  let m = matt();
  // Blir kartan för liten av siffrorna (smal telefon, flera ↑) stryks de:
  // grönt och randigt i formen och meningen ovanför visar ändå förändringen.
  if (medDelta && m.R < R_DELTA) {
    medDelta = false;
    m = matt();
  }
  const { box, tva, allaTva } = m;
  const R = Math.max(R_MIN, m.R);
  const D = R + 10;
  const CX = W / 2;
  // Den översta etiketten får inte krocka med KVA och MEK snett nedanför.
  // Räcker inte bredden flyttas den upp ovanför dem i stället.
  const sned = Math.max(box[1][1], box[N - 1][1]);
  const krock = box[0][0] / 2 + 4 > D * Math.sin(vinkel(1));
  const Dtopp = krock ? Math.max(D, D * Math.cos(vinkel(1)) + sned + 4) : D;
  const CY = Dtopp + box[0][1] + 4;
  let H = 0;
  const etk: EtikettLage[] = data.axlar.map((_, i) => {
    const sin = Math.sin(vinkel(i)), cos = Math.cos(vinkel(i));
    const tx = Math.abs(sin) < 0.3 ? '-50%' : sin > 0 ? '0' : '-100%';
    const ty = cos > 0.5 ? '-100%' : cos < -0.5 ? '0' : '-50%';
    const y = i === 0 ? CY - Dtopp : CY - D * cos;
    H = Math.max(H, y + (cos < -0.5 ? box[i][1] : cos > 0.5 ? 0 : box[i][1] / 2));
    return { x: D * sin, y, tx, ty, w: box[i][0], h: box[i][1], tva: tva[i] };
  });
  return { W, H: Math.ceil(H + 4), CX, CY, R, D, etk, allaTva, medDelta };
}

// ---------- Formen ----------

export interface FormOpt {
  id: string;
  vinnare: DelprovTyp | null;
  /** Värdena före passet, eller null. */
  foreVals: number[] | null;
  /** Delproven i passet: övriga tonas ner. */
  pass: DelprovTyp[] | null;
}

function punktFn(g: Geometri) {
  return (i: number, v: number) => [g.CX + g.R * v * Math.sin(vinkel(i)), g.CY - g.R * v * Math.cos(vinkel(i))];
}

/** Hörnen i formen: okända axlar (en eller flera i rad) ersätts av mitten. */
function horn(g: Geometri, vals: number[], kand: (i: number) => boolean): number[][] {
  const pt = punktFn(g);
  const pts: number[][] = [];
  for (let i = 0; i < N; i++) {
    if (kand(i)) { pts.push(pt(i, vals[i])); continue; }
    if (kand((i + N - 1) % N)) pts.push([g.CX, g.CY]);
  }
  return pts;
}

/** Formen, före-konturen, växte och krympte: allt som ligger under målringen. */
export function formSVG(g: Geometri, axlar: KartAxel[], vals: number[], o: FormOpt): string {
  const pt = punktFn(g);
  const kand = (i: number) => !axlar[i].osaker;
  const id = o.id;
  const ut: string[] = [];
  const halvDim = (del: Halva) => !!o.pass && !axlar.some(a => a.del === del && o.pass!.includes(a.delprov));

  // Grått band längs osäkra axlar som har svar: skattningen ± 1,5 standardfel.
  axlar.forEach((a, i) => {
    if (!a.osaker || !(a.antal > 0)) return;
    const se = 1.5 * Math.sqrt(a.styrka * (1 - a.styrka) / (a.effektivt + 4));
    const [x1, y1] = pt(i, Math.max(0.04, a.styrka - se)), [x2, y2] = pt(i, Math.min(1, a.styrka + se));
    ut.push(`<line x1="${f(x1)}" y1="${f(y1)}" x2="${f(x2)}" y2="${f(y2)}" stroke="#cbd5e1" stroke-width="9" stroke-linecap="round"/>`);
    ut.push(`<line x1="${f(x1)}" y1="${f(y1)}" x2="${f(x2)}" y2="${f(y2)}" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="2 3"/>`);
  });
  // En ensam osäker axel mellan två kända: randig kil, så att ytan läses som okänd.
  axlar.forEach((a, i) => {
    const fo = (i + N - 1) % N, ef = (i + 1) % N;
    if (!a.osaker || !(a.antal > 0) || !kand(fo) || !kand(ef)) return;
    const p1 = pt(fo, vals[fo]), p2 = pt(i, a.styrka), p3 = pt(ef, vals[ef]);
    ut.push(`<polygon points="${P([[g.CX, g.CY], p1, p2, p3])}" fill="url(#${id}rand)"/>`);
    ut.push(`<polyline points="${P([p1, p2, p3])}" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/>`);
  });

  const pts = horn(g, vals, kand);
  const antalKanda = axlar.filter(a => !a.osaker).length;
  const fpts = o.foreVals ? horn(g, o.foreVals, i => !axlar[i].osakerFore && axlar[i].fore !== undefined) : null;
  if (antalKanda >= 1 && pts.length >= 3) {
    const poly = P(pts);
    const op = (del: Halva) => (halvDim(del) ? 0.22 : 0.42);
    ut.push(`<polygon points="${poly}" fill="${FARG.kvant.fyll}" fill-opacity="${op('kvant')}" clip-path="url(#${id}cq)"/>`);
    ut.push(`<polygon points="${poly}" fill="${FARG.verbal.fyll}" fill-opacity="${op('verbal')}" clip-path="url(#${id}cv)"/>`);
    if (fpts && fpts.length >= 3) {
      const fpoly = P(fpts);
      ut.push(`<mask id="${id}mv"><rect x="-50" y="-50" width="4000" height="4000" fill="black"/><polygon points="${poly}" fill="white"/><polygon points="${fpoly}" fill="black"/></mask>`);
      ut.push(`<mask id="${id}mk"><rect x="-50" y="-50" width="4000" height="4000" fill="black"/><polygon points="${fpoly}" fill="white"/><polygon points="${poly}" fill="black"/></mask>`);
      ut.push(`<polygon points="${poly}" fill="#86efac" fill-opacity=".9" mask="url(#${id}mv)"/>`);
      ut.push(`<polygon points="${fpoly}" fill="url(#${id}krymp)" mask="url(#${id}mk)"/>`);
    }
    // Vita ekrar till varje känd punkt.
    axlar.forEach((a, i) => {
      if (a.osaker) return;
      const p = pt(i, vals[i]);
      ut.push(`<line x1="${f(g.CX)}" y1="${f(g.CY)}" x2="${f(p[0])}" y2="${f(p[1])}" stroke="#fff" stroke-width="1.6" stroke-opacity=".9"/>`);
    });
    // Kanterna mellan två kända punkter, klippta per halva.
    const d: string[] = [];
    for (let i = 0; i < N; i++) {
      const j = (i + 1) % N;
      if (kand(i) && kand(j)) {
        const a = pt(i, vals[i]), b = pt(j, vals[j]);
        d.push(`M${f(a[0])},${f(a[1])}L${f(b[0])},${f(b[1])}`);
      }
    }
    if (d.length) {
      ut.push(`<path d="${d.join('')}" stroke="${FARG.kvant.linje}" stroke-width="2.3" fill="none" stroke-linejoin="round" stroke-linecap="round" clip-path="url(#${id}cq)" opacity="${halvDim('kvant') ? 0.45 : 1}"/>`);
      ut.push(`<path d="${d.join('')}" stroke="${FARG.verbal.linje}" stroke-width="2.3" fill="none" stroke-linejoin="round" stroke-linecap="round" clip-path="url(#${id}cv)" opacity="${halvDim('verbal') ? 0.45 : 1}"/>`);
    }
  }
  if (fpts && fpts.length >= 3 && o.foreVals) {
    ut.push(`<polygon class="hk-fore" points="${P(fpts)}" fill="none" stroke="#475569" stroke-width="1.8" stroke-dasharray="1.5 3.2" stroke-linecap="round"/>`);
    axlar.forEach((a, i) => {
      if (a.osaker || a.osakerFore || a.fore === undefined || Math.abs(a.styrka - a.fore) < 0.03) return;
      const p = pt(i, o.foreVals![i]);
      ut.push(`<circle cx="${f(p[0])}" cy="${f(p[1])}" r="3" fill="#fff" stroke="#475569" stroke-width="1.6"/>`);
    });
  }
  return ut.join('');
}

/** Pilen, pulsringen och punkterna: ovanpå målringen. */
export function toppSVG(g: Geometri, axlar: KartAxel[], vals: number[], o: FormOpt): string {
  const pt = punktFn(g);
  const langs = (i: number, px: number) => [g.CX + px * Math.sin(vinkel(i)), g.CY - px * Math.cos(vinkel(i))];
  const dim = (a: KartAxel) => !!o.pass && !o.pass.includes(a.delprov) && o.vinnare !== a.delprov;
  const ut: string[] = [];
  const i = o.vinnare ? axlar.findIndex(a => a.delprov === o.vinnare) : -1;
  if (i >= 0 && !axlar[i].osaker) {
    const v = vals[i], mv = axlar[i].mal;
    if (mv - v >= 0.1) {
      const a = langs(i, g.R * v + 6), b = langs(i, g.R * mv - 8), spets = langs(i, g.R * mv + 1);
      const nx = Math.cos(vinkel(i)) * 6.5, ny = Math.sin(vinkel(i)) * 6.5;
      const tri = P([spets, [b[0] + nx, b[1] + ny], [b[0] - nx, b[1] - ny]]);
      ut.push(`<g class="hk-pil">`);
      ut.push(`<line x1="${f(a[0])}" y1="${f(a[1])}" x2="${f(b[0])}" y2="${f(b[1])}" stroke="#92400e" stroke-width="8" stroke-linecap="round"/>`);
      ut.push(`<polygon points="${tri}" fill="#92400e" stroke="#92400e" stroke-width="3" stroke-linejoin="round"/>`);
      ut.push(`<line x1="${f(a[0])}" y1="${f(a[1])}" x2="${f(b[0])}" y2="${f(b[1])}" stroke="#f59e0b" stroke-width="5" stroke-linecap="round"/>`);
      ut.push(`<polygon points="${tri}" fill="#f59e0b"/>`);
      ut.push(`</g>`);
    }
    const p = pt(i, v);
    ut.push(`<circle class="hk-puls" cx="${f(p[0])}" cy="${f(p[1])}" r="9" fill="none" stroke="#f59e0b" stroke-width="2.5"/>`);
  }
  axlar.forEach((a, k) => {
    if (a.osaker) return;
    const p = pt(k, vals[k]);
    if (k === i) ut.push(`<circle class="hk-vinnarpunkt" cx="${f(p[0])}" cy="${f(p[1])}" r="5.5" fill="#f59e0b" stroke="#92400e" stroke-width="1.6"/>`);
    else ut.push(`<circle class="hk-punkt" data-dp="${a.delprov}" cx="${f(p[0])}" cy="${f(p[1])}" r="3.8" fill="#fff" stroke="${FARG[a.del].linje}" stroke-width="2"${dim(a) ? ' opacity=".45"' : ''}/>`);
  });
  return ut.join('');
}

/** Värdena som formen ritas med: styrkan på kända axlar. */
export function slutVarden(data: HjarnkartaData): number[] {
  return data.axlar.map(a => a.styrka);
}
export function foreVarden(data: HjarnkartaData): number[] {
  return data.axlar.map(a => (a.fore !== undefined && !a.osakerFore ? a.fore : a.styrka));
}

export function formOpt(data: HjarnkartaData, opt: KartOpt): FormOpt {
  const fore = visaFore(data, opt);
  return {
    id: opt.id || 'hk',
    vinnare: data.vinnare,
    foreVals: fore ? foreVarden(data) : null,
    pass: fore && data.pass ? data.pass.delprov : null,
  };
}

function ariaKarta(data: HjarnkartaData): string {
  const delar = data.axlar.map(a => `${a.namn} ${procentText(a)}`).join(', ');
  const vinn = data.vinnare ? `. Mest att hämta: ${DELPROV_NAMN[data.vinnare]}` : '';
  return `Din hjärnkarta: ${delar}${vinn}.`;
}

/** Hela kartan: SVG med rutnät, form, målring och pil, plus etiketterna som knappar. */
export function ritaKarta(data: HjarnkartaData, opt: KartOpt): string {
  const g = kartGeometri(data, opt);
  const fo = formOpt(data, opt);
  const id = fo.id;
  const pt = punktFn(g);
  const fore = visaFore(data, opt);
  const kil = (fran: number, till: number) => {
    const p: number[][] = [[g.CX, g.CY]];
    for (let k = 0; k <= 24; k++) {
      const a = fran + ((till - fran) * k) / 24;
      p.push([g.CX + 1000 * Math.sin(a), g.CY - 1000 * Math.cos(a)]);
    }
    return P(p);
  };
  const hept = (v: number) => P(data.axlar.map((_, i) => pt(i, v)));
  const s: string[] = [];
  s.push(`<svg class="hk-svg" width="${g.W}" height="${g.H}" viewBox="0 0 ${g.W} ${g.H}" style="margin-left:${f(-g.W / 2)}px" role="img" aria-label="${esc(ariaKarta(data))}">`);
  s.push(`<defs><clipPath id="${id}cq"><polygon points="${kil(-Math.PI / 7, Math.PI)}"/></clipPath>`);
  s.push(`<clipPath id="${id}cv"><polygon points="${kil(Math.PI, 2 * Math.PI - Math.PI / 7)}"/></clipPath>`);
  s.push(`<pattern id="${id}rand" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="5" height="5" fill="#f1f5f9"/><rect width="1.6" height="5" fill="#cbd5e1"/></pattern>`);
  s.push(`<pattern id="${id}krymp" width="4" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="4" height="4" fill="#f1f5f9"/><rect width="1.5" height="4" fill="#94a3b8"/></pattern></defs>`);
  s.push(`<polygon points="${hept(1)}" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2"/>`);
  s.push(`<polygon points="${hept(0.5)}" fill="none" stroke="#eef2f6" stroke-width="1"/>`);
  data.axlar.forEach((a, i) => {
    const p = pt(i, 1);
    s.push(`<line x1="${f(g.CX)}" y1="${f(g.CY)}" x2="${f(p[0])}" y2="${f(p[1])}" stroke="#e2e8f0" stroke-width="1"${a.osaker ? ' stroke-dasharray="3 3"' : ''}/>`);
  });
  const vals = slutVarden(data);
  const origo = `transform-origin:${f(g.CX)}px ${f(g.CY)}px`;
  s.push(`<g class="hk-form" style="${origo}">${formSVG(g, data.axlar, vals, fo)}</g>`);
  // Målringen och ordet mål, ovanpå formen.
  s.push(`<polygon class="hk-malring" points="${P(data.axlar.map((a, i) => pt(i, a.mal)))}" fill="none" stroke="#334155" stroke-opacity=".6" stroke-width="1.3" stroke-dasharray="4 3.5"/>`);
  const m = pt(0, data.axlar[0].mal);
  s.push(`<text x="${f(m[0] + 6)}" y="${f(m[1] + 4)}" font-size="11" font-weight="600" fill="#475569" stroke="#fff" stroke-width="3" paint-order="stroke" font-family="Segoe UI, system-ui, -apple-system, sans-serif">mål</text>`);
  s.push(`<g class="hk-topp" style="${origo}">${toppSVG(g, data.axlar, vals, fo)}</g>`);
  s.push(`</svg>`);
  const etk = data.axlar.map((a, i) => {
    const e = g.etk[i];
    const stil = `left:calc(50% + ${f(e.x)}px);top:${f(e.y)}px;transform:translate(${e.tx},${e.ty})`;
    return etikettHTML(a, e.tva, data.vinnare === a.delprov, fore && g.medDelta, stil);
  }).join('');
  const kl = ['hk-karta', `hk-${opt.storlek}`, fore ? 'hk-glid' : opt.stilla ? '' : 'hk-vax'].filter(Boolean).join(' ');
  return `<div class="${kl}" data-hk-w="${g.W}" style="height:${g.H}px">${s.join('')}${etk}</div>`;
}

/** Förklaringen under en karta med före-kontur. */
export function forklaringHTML(): string {
  return `<div class="hk-forklaring" aria-hidden="true">`
    + `<span><svg width="22" height="6"><line x1="1" y1="3" x2="21" y2="3" stroke="#475569" stroke-width="1.8" stroke-dasharray="1.5 3" stroke-linecap="round"/></svg>före passet</span>`
    + `<span><i class="hk-ruta hk-ruta-vaxte"></i>växte</span>`
    + `<span><i class="hk-ruta hk-ruta-krympte"></i>krympte</span></div>`;
}

/** Liten karta utan etiketter. Utan data (kallstartsraden) är den grå; med
 * data (bannern på Träna-sidan) ritas formen i halvornas färger och
 * vinnaren som en gul punkt. */
export function miniKartaSVG(storlek = 56, data?: HjarnkartaData | null, id = 'hkmini'): string {
  const c = storlek / 2, r = storlek / 2 - 3;
  const pt = (i: number, v: number) => [c + r * v * Math.sin(vinkel(i)), c - r * v * Math.cos(vinkel(i))];
  const hept = (v: number) => P(Array.from({ length: N }, (_, i) => pt(i, v)));
  const ekrar = Array.from({ length: N }, (_, i) => { const p = pt(i, 1); return `<line x1="${c}" y1="${c}" x2="${f(p[0])}" y2="${f(p[1])}" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="2 2"/>`; }).join('');
  let form = '';
  let mal = hept(0.84);
  if (data && !data.tom) {
    const kil = (fran: number, till: number) => {
      const p: number[][] = [[c, c]];
      for (let k = 0; k <= 12; k++) { const a = fran + ((till - fran) * k) / 12; p.push([c + 100 * Math.sin(a), c - 100 * Math.cos(a)]); }
      return P(p);
    };
    const poly = P(data.axlar.map((a, i) => pt(i, a.osaker ? 0 : a.styrka)));
    mal = P(data.axlar.map((a, i) => pt(i, a.mal)));
    const vi = data.axlar.findIndex(a => a.delprov === data.vinnare);
    const vp = vi >= 0 ? pt(vi, data.axlar[vi].styrka) : null;
    form = `<defs><clipPath id="${id}cq"><polygon points="${kil(-Math.PI / 7, Math.PI)}"/></clipPath><clipPath id="${id}cv"><polygon points="${kil(Math.PI, 2 * Math.PI - Math.PI / 7)}"/></clipPath></defs>`
      + `<polygon points="${poly}" fill="${FARG.kvant.fyll}" fill-opacity=".5" stroke="${FARG.kvant.linje}" stroke-width="1.4" stroke-linejoin="round" clip-path="url(#${id}cq)"/>`
      + `<polygon points="${poly}" fill="${FARG.verbal.fyll}" fill-opacity=".5" stroke="${FARG.verbal.linje}" stroke-width="1.4" stroke-linejoin="round" clip-path="url(#${id}cv)"/>`
      + (vp ? `<circle cx="${f(vp[0])}" cy="${f(vp[1])}" r="3.2" fill="#f59e0b" stroke="#92400e" stroke-width="1.2"/>` : '');
  }
  return `<svg class="hk-mini" width="${storlek}" height="${storlek}" viewBox="0 0 ${storlek} ${storlek}" aria-hidden="true">`
    + `<polygon points="${hept(1)}" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2"/>${ekrar}${form}`
    + `<polygon points="${mal}" fill="none" stroke="#334155" stroke-opacity=".45" stroke-width="1" stroke-dasharray="3 2.5"/></svg>`;
}

// ---------- Texterna ----------

/** Meningen om hur passet flyttade kartan. */
export function forandringHTML(data: HjarnkartaData): string {
  const fo = data.forandring;
  if (!fo) return '';
  return `<p class="hk-mening">${fo.fet ? `<b>${esc(fo.fet)}</b>` : ''}${esc(fo.text)}</p>`;
}

function urProvetHTML(u: UrProvet, fran?: string | null): string {
  return `<a class="hk-urprov" href="${esc(medFran(u.href, fran))}"><span class="hk-urprov-text">`
    + `<small>Ur det här provet</small><b>${esc(u.rubrik)}</b> <span class="hk-tagg">${esc(u.tagg)}</span>`
    + `<span class="hk-urprov-under">${esc(u.text)}</span></span><span class="hk-chev" aria-hidden="true">›</span></a>`;
}

/** Kortet Träna härnäst under kartan. */
export function tranaHarnastHTML(data: HjarnkartaData, opt: { fran?: string | null } = {}): string {
  const h = data.harnast;
  if (h.lage === 'tom') return '';
  const fran = opt.fran;
  const ut: string[] = [`<div class="hk-harnast">`];
  ut.push(`<div class="hk-harnast-topp"><span class="hk-overrad">Träna härnäst</span>${h.pottText ? `<span class="hk-pott">${esc(h.pottText)}</span>` : ''}</div>`);
  if (h.rubrik) ut.push(`<h3 class="hk-rubrik">${esc(h.rubrik)}${h.underrubrik ? ` <span>${esc(h.underrubrik)}</span>` : ''}</h3>`);
  ut.push(`<p class="hk-text">${h.fet ? `<b>${esc(h.fet)}</b> ` : ''}${esc(h.mening)}</p>`);
  ut.push(`<a class="hk-knapp" href="${esc(medFran(h.href, fran))}">${esc(h.knapp)}${h.knappUnder ? `<small>${esc(h.knappUnder)}</small>` : ''}</a>`);
  if (h.lank) ut.push(`<a class="hk-lank" href="${esc(medFran(h.lank.href, fran))}">${esc(h.lank.text)}</a>`);
  if (h.gra) ut.push(`<div class="hk-gra-rad"><i class="hk-randruta" aria-hidden="true"></i><span>${esc(h.gra.text)}</span><a href="${esc(medFran(h.gra.href, fran))}">${esc(h.gra.lank)}</a></div>`);
  if (h.halva) ut.push(`<p class="hk-halva"><b>${esc(h.halva.fet)}</b> ${esc(h.halva.text)} <a href="${esc(h.halva.href)}">${esc(h.halva.lank)}</a></p>`);
  if (data.urProvet) ut.push(urProvetHTML(data.urProvet, fran));
  ut.push(`</div>`);
  return ut.join('');
}

/** Kallstart utan svar: 'rad' är den tunna raden på /extra, 'tom' den tomma
 * kartan på /trana/fokus och profilen. */
export function kallstartHTML(data: HjarnkartaData, opt: { variant: 'rad' | 'tom'; id?: string; bredd?: number; matt?: Matt }): string {
  if (opt.variant === 'rad') {
    return `<a class="hk-kallrad" href="#forsta-pass">${miniKartaSVG(56)}<span class="hk-kallrad-text"><b>Rita din hjärnkarta</b><span>Gör ett provpass nedan så ritar jag in halva kartan.</span></span><span class="hk-chev" aria-hidden="true">›</span></a>`
      + `<a class="hk-kallrad-lank" href="/trana/fokus?lage=snabbkoll">eller en snabbkoll på tio minuter</a>`;
  }
  const h = data.harnast.lage === 'tom' ? data.harnast : tomHarnast();
  const tom: HjarnkartaData = data.tom ? data : { ...tomData() };
  return ritaKarta(tom, { storlek: 'full', id: opt.id, bredd: opt.bredd, matt: opt.matt, stilla: true })
    + `<div class="hk-kallstart"><p class="hk-text"><b>${esc(h.fet)}</b> ${esc(h.mening)}</p>`
    + `<a class="hk-knapp" href="${esc(h.href)}">${esc(h.knapp)}</a>`
    + (h.lank ? `<a class="hk-lank" href="${esc(h.lank.href)}">${esc(h.lank.text)}</a>` : '')
    + `</div>`;
}

function sparHTML(a: { visadPct: number; mal: number; osaker: boolean }, tunn: boolean): string {
  const kl = `hk-spar${tunn ? ' hk-tunn' : ''}${a.osaker ? ' hk-osaker' : ''}`;
  if (a.osaker) return `<div class="${kl}" aria-hidden="true"></div>`;
  const p = Math.max(0, Math.min(100, a.visadPct));
  const m = Math.round(a.mal * 100);
  const kvar = m > p ? `<i class="hk-kvar" style="left:${p}%;width:${m - p}%"></i>` : '';
  return `<div class="${kl}" aria-hidden="true"><i class="hk-fyll" style="width:${p}%"></i>${kvar}<i class="hk-malstreck" style="left:${m}%"></i></div>`;
}

const SA_RAKNAR = 'Antal uppgifter per provpass gånger avståndet till målet blir ungefär hur många fler rätt du får när du når dit. Procenten är din nivå just nu: nya svar väger mest, och med få svar drar jag mot mitten.';

/** Innehållet i arket för ett delprov. */
export function arkHTML(data: HjarnkartaData, dp: string, opt: { fran?: string | null } = {}): string {
  const a = data.axlar.find(x => x.delprov === dp);
  if (!a) return '';
  const fran = opt.fran;
  const halva = a.del === 'kvant' ? 'Kvantitativt' : 'Verbalt';
  const ut: string[] = [];
  ut.push(`<div class="hk-ark-inne hk-ark-${a.del}">`);
  ut.push(`<div class="hk-handtag" aria-hidden="true"></div>`);
  ut.push(`<div class="hk-ark-topp"><div><span class="hk-pill hk-pill-${a.del}">${halva}</span><h2 id="hk-ark-rubrik">${esc(a.namn)}</h2><p>${esc(a.langt)}</p></div>`
    + `<button type="button" class="hk-stang" data-hk-stang aria-label="Stäng">✕</button></div>`);
  const malPct = Math.round(a.mal * 100);
  if (a.osaker) {
    ut.push(`<div class="hk-ark-tal"><b>?</b><span>för lite data · målet ${malPct}&nbsp;%</span></div>`);
    ut.push(sparHTML(a, false));
    const pass = a.del === 'kvant' ? 'Ett kvantitativt provpass' : 'Ett verbalt provpass';
    const text = a.antal > 0
      ? `${a.namn} är grå: ${a.antal} svar hittills. ${pass} gör den skarp.`
      : `Inga svar på ${a.namn} än. ${pass} ritar in den.`;
    ut.push(`<p class="hk-ark-not">${esc(text)}</p>`);
  } else {
    ut.push(`<div class="hk-ark-tal"><b>${a.visadPct}&nbsp;%</b><span>din nivå just nu · målet ${malPct}&nbsp;%</span></div>`);
    ut.push(sparHTML(a, false));
    ut.push(`<div class="hk-spar-under"><span>Byggt på ${a.antal} svar</span><b class="${a.n < 1 ? 'hk-nara' : ''}">${esc(potText(a.n))}</b></div>`);
  }
  const rader = data.typer?.[dp] || [];
  if (rader.length) {
    const sakraPott = rader.filter(t => !t.osaker && t.pott >= 0.5).sort((x, y) => y.pott - x.pott);
    // Knappen i botten tränar en typ med minst 8 svar. Samma typ står överst
    // med Mest att hämta, så att raden och knappen inte pekar åt olika håll.
    const knappTyp = a.trana.lage === 'typ' ? a.trana.typ : null;
    const iKnapp = knappTyp ? sakraPott.findIndex(t => t.typ === knappTyp) : -1;
    if (iKnapp > 0) sakraPott.unshift(...sakraPott.splice(iKnapp, 1));
    const sakraUtan = rader.filter(t => !t.osaker && t.pott < 0.5).sort((x, y) => y.pott - x.pott || x.styrka - y.styrka);
    // Osäkra rader med svar: störst andel fel först, så att riktningen syns.
    // MEK står alltid som en, två och tre luckor.
    const ordning = (t: KartTyp) => rader.indexOf(t);
    const andelFel = (t: KartTyp) => (t.antal - t.ratt) / t.antal;
    const osakra = rader.filter(t => t.osaker && t.antal > 0)
      .sort((x, y) => (dp === 'mek' ? 0 : andelFel(y) - andelFel(x)) || ordning(x) - ordning(y));
    const utanSvar = rader.filter(t => t.osaker && !(t.antal > 0));
    // Ingen typ ger en hel rätt för sig: toppens tal är spritt över typerna.
    const spridd = !sakraPott.length && sakraUtan.length > 0 && !a.osaker && a.n >= 1;
    const sub = spridd
      ? 'Luckan är spridd: ingen typ ger 1 rätt per pass för sig. Tryck på en rad för tio uppgifter.'
      : !sakraPott.length && !sakraUtan.length
        ? 'För få svar per typ än. Tryck på en rad för fem uppgifter.'
        : 'Mest att hämta överst. Tryck på en rad för tio uppgifter.';
    ut.push(`<h3>Var tappar du rätt?</h3><p class="hk-ark-sub">${esc(sub)}</p>`);
    ut.push(`<div class="hk-typer">`);
    const sorterade = [...sakraPott, ...sakraUtan, ...osakra];
    sorterade.forEach((t, k) => {
      const topp = k === 0 && !t.osaker && t.pott >= 0.5;
      let under = '';
      if (t.osaker) under = `<span class="hk-typ-sub">${t.ratt} rätt av ${t.antal} hittills · <u>Testa 5 ›</u></span>`;
      else if (topp) under = `<span class="hk-typ-sub"><b>${esc(potText(t.n))}</b> per pass</span>`;
      else if (t.pott < 0.5) {
        // "nära målet" bara när typen ligger nära målet; annars är den liten i passet.
        under = t.mal - t.styrka < NARA_MALET
          ? `<span class="hk-typ-sub"><span class="hk-nara">nära målet</span></span>`
          : `<span class="hk-typ-sub">under 1 rätt per pass</span>`;
      }
      const varde = t.osaker ? '' : `<span class="hk-typ-varde">${t.visadPct}&nbsp;%</span>`;
      const aria = t.osaker
        ? `${t.namn}, ${t.ratt} rätt av ${t.antal} hittills, för lite data. Testa 5 uppgifter.`
        : `${t.namn}, ${t.visadPct} procent. Tio uppgifter.`;
      ut.push(`<a class="hk-typ" href="${esc(medFran(t.href, fran))}" aria-label="${esc(aria)}"><span class="hk-typ-kropp">`
        + `<span class="hk-typ-rad"><span class="hk-typ-namn">${esc(t.namn)}${topp ? '<small>Mest att hämta</small>' : ''}</span>${varde}</span>`
        + `${sparHTML(t, true)}${under}</span><span class="hk-chev" aria-hidden="true">›</span></a>`);
    });
    if (utanSvar.length) {
      ut.push(`<div class="hk-typ-tom"><span><b>Inga svar än:</b> ${esc(lista(utanSvar.map(t => t.namn)))}</span></div>`);
    }
    ut.push(`</div>`);
    if (a.trana.lage === 'typ') ut.push(`<a class="hk-lank" href="${esc(medFran(`/trana/fokus?lage=delprov&val=${a.delprov}`, fran))}">eller 10 blandade ${esc(a.namn)}‑uppgifter</a>`);
  }
  ut.push(`<details class="hk-rakna"><summary>Så räknar jag</summary><p>${esc(SA_RAKNAR)}</p></details>`);
  ut.push(`<div class="hk-ark-fot"><a class="hk-knapp" href="${esc(medFran(a.trana.href, fran))}">${esc(a.trana.knapp)}<small>${esc(a.trana.under)}</small></a></div>`);
  ut.push(`</div>`);
  return ut.join('');
}

export interface BlockOpt {
  storlek: 'kompakt' | 'full';
  fran?: string | null;
  id?: string;
  bredd?: number;
  /** Visa före-konturen och meningen om passet (rättningen). Standard: ja om datan har dem. */
  fore?: boolean;
}

/** JSON som går att lägga i en <script type="application/json">. */
export function dataJSON(data: HjarnkartaData): string {
  return JSON.stringify(data).replace(/</g, '\\u003c').replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029');
}

/** Hela blocket: meningen om passet, kartan, förklaringen och Träna härnäst
 * (eller kallstarten), plus datan som JSON för arket. */
export function blockHTML(data: HjarnkartaData, opt: BlockOpt): string {
  const id = opt.id || 'hk';
  const o = { storlek: opt.storlek, fran: opt.fran ?? null, id, fore: opt.fore };
  const ut: string[] = [`<div class="hk hk-block-${opt.storlek}${data.tom ? '' : ' hk-med-karta'}" data-hk data-hk-opt="${esc(JSON.stringify(o))}">`];
  if (data.tom) {
    ut.push(kallstartHTML(data, { variant: opt.storlek === 'kompakt' ? 'rad' : 'tom', id, bredd: opt.bredd }));
  } else {
    const fore = visaFore(data, opt);
    if (fore || (opt.fore !== false && data.forandring)) ut.push(forandringHTML(data));
    ut.push(ritaKarta(data, { storlek: opt.storlek, id, bredd: opt.bredd, fore: opt.fore }));
    if (fore) ut.push(forklaringHTML());
    ut.push(tranaHarnastHTML(data, { fran: opt.fran }));
  }
  ut.push(`<script type="application/json" data-hk-data>${dataJSON(data)}</script></div>`);
  return ut.join('');
}
