// Din hjärnkarta i webbläsaren: mäter etiketterna och ritar om kartan i
// containerns bredd, låter hörnen glida från före till nu i rättningen och
// öppnar arket per delprov som ett bottenark (<dialog>). Händelserna
// delegeras från dokumentet, så att kartor som läggs in senare (rättningen)
// fungerar utan egen koppling. Importeras av Hjarnkarta.astro och rättningens
// skript; drar bara in den rena vyn, ingen frågedata.
import {
  arkHTML, formOpt, formSVG, kartGeometri, ritaKarta, slutVarden, foreVarden, toppSVG,
  type BlockOpt, type HjarnkartaData, type Matt,
} from './hjarnkarta-vy.js';

interface Karta {
  el: HTMLElement;
  data: HjarnkartaData;
  opt: BlockOpt;
  bredd: number;
}

const kartor = new WeakMap<HTMLElement, Karta>();
let installerad = false;
let dialog: HTMLDialogElement | null = null;

const lugn = () => typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Mäter etiketterna i en osynlig behållare i samma typsnitt som kartan. */
function mattare(behallare: HTMLElement): { matt: Matt; stad: () => void } {
  const ruta = document.createElement('div');
  ruta.setAttribute('aria-hidden', 'true');
  ruta.style.cssText = 'position:absolute;left:0;top:0;visibility:hidden;pointer-events:none;width:0;height:0;overflow:visible';
  behallare.appendChild(ruta);
  const cache = new Map<string, [number, number]>();
  return {
    matt: (html) => {
      const c = cache.get(html);
      if (c) return c;
      ruta.innerHTML = html;
      const e = ruta.firstElementChild as HTMLElement;
      const r: [number, number] = [Math.ceil(e.offsetWidth), Math.ceil(e.offsetHeight)];
      cache.set(html, r);
      return r;
    },
    stad: () => ruta.remove(),
  };
}

/** Ritar om kartan i containerns bredd med uppmätta etiketter. */
function anpassa(k: Karta, forsta: boolean) {
  const gammal = k.el.querySelector<HTMLElement>(':scope > .hk-karta');
  if (!gammal) return;
  const bredd = Math.round(gammal.getBoundingClientRect().width);
  if (!bredd || (!forsta && Math.abs(bredd - k.bredd) < 2)) return;
  k.bredd = bredd;
  const m = mattare(k.el);
  try {
    const html = ritaKarta(k.data, {
      storlek: k.opt.storlek, id: k.opt.id, fore: k.opt.fore, bredd, matt: m.matt,
      // Bara första ritningen växer fram; efter en storleksändring står kartan still.
      stilla: !forsta,
    });
    const mall = document.createElement('template');
    mall.innerHTML = html;
    const ny = mall.content.firstElementChild as HTMLElement;
    // Första gången sker bytet innan tillväxten hunnit synas.
    gammal.replaceWith(ny);
  } finally {
    m.stad();
  }
}

/** Hörnen glider från före till nu på 650 ms (rättningen). */
function glid(k: Karta) {
  const karta = k.el.querySelector<HTMLElement>(':scope > .hk-karta.hk-glid');
  if (!karta || lugn()) return;
  const formG = karta.querySelector<SVGGElement>('.hk-form');
  const toppG = karta.querySelector<SVGGElement>('.hk-topp');
  if (!formG || !toppG) return;
  const m = mattare(k.el);
  const opt = { storlek: k.opt.storlek, id: k.opt.id, fore: k.opt.fore, bredd: k.bredd, matt: m.matt };
  const g = kartGeometri(k.data, opt);
  m.stad();
  const fo = formOpt(k.data, opt);
  const slut = slutVarden(k.data);
  const start = foreVarden(k.data);
  const t0 = performance.now();
  const kurva = (t: number) => 1 - Math.pow(1 - t, 3);
  const steg = (nu: number) => {
    const t = Math.min(1, (nu - t0) / 650);
    const vals = start.map((s, i) => s + (slut[i] - s) * kurva(t));
    formG.innerHTML = formSVG(g, k.data.axlar, vals, fo);
    toppG.innerHTML = toppSVG(g, k.data.axlar, vals, fo);
    if (t < 1) requestAnimationFrame(steg);
  };
  requestAnimationFrame(steg);
}

function initiera(el: HTMLElement) {
  if (kartor.has(el)) return;
  const skript = el.querySelector<HTMLScriptElement>(':scope > script[data-hk-data]');
  if (!skript) return;
  let data: HjarnkartaData;
  let opt: BlockOpt;
  try {
    data = JSON.parse(skript.textContent || '{}');
    opt = JSON.parse(el.dataset.hkOpt || '{}');
  } catch {
    return;
  }
  const k: Karta = { el, data, opt, bredd: 0 };
  kartor.set(el, k);
  anpassa(k, true);
  glid(k);
  if (typeof ResizeObserver === 'function') {
    let vantar = false;
    new ResizeObserver(() => {
      if (vantar) return;
      vantar = true;
      requestAnimationFrame(() => { vantar = false; anpassa(k, false); });
    }).observe(el);
  }
}

// ---------- Arket ----------

function hamtaDialog(): HTMLDialogElement {
  if (dialog && document.body.contains(dialog)) return dialog;
  dialog = document.createElement('dialog');
  dialog.className = 'hk-ark';
  dialog.setAttribute('aria-labelledby', 'hk-ark-rubrik');
  document.body.appendChild(dialog);
  // Escape: stäng med samma animation som ✕.
  dialog.addEventListener('cancel', e => { e.preventDefault(); stang(); });
  // Tryck utanför: klicket landar på själva dialogen (dimman), inte innehållet.
  dialog.addEventListener('click', e => {
    if (e.target === dialog) stang();
    else if ((e.target as Element).closest('[data-hk-stang]')) stang();
  });
  dialog.addEventListener('close', () => document.documentElement.classList.remove('hk-last'));
  return dialog;
}

function oppna(k: Karta, dp: string) {
  const d = hamtaDialog();
  d.innerHTML = arkHTML(k.data, dp, { fran: k.opt.fran });
  d.classList.remove('hk-stanger');
  if (typeof d.showModal === 'function') d.showModal();
  else d.setAttribute('open', '');
  document.documentElement.classList.add('hk-last');
  d.querySelector<HTMLElement>('.hk-ark-inne')?.scrollTo(0, 0);
  d.querySelector<HTMLElement>('[data-hk-stang]')?.focus({ preventScroll: true });
}

function stang() {
  const d = dialog;
  if (!d || !d.open || d.classList.contains('hk-stanger')) return;
  const klart = () => { d.classList.remove('hk-stanger'); d.close(); };
  if (lugn()) { klart(); return; }
  d.classList.add('hk-stanger');
  let gjort = false;
  const en = () => { if (!gjort) { gjort = true; klart(); } };
  d.addEventListener('animationend', en, { once: true });
  setTimeout(en, 260);
}

function installera() {
  if (installerad) return;
  installerad = true;
  document.addEventListener('click', e => {
    const knapp = (e.target as Element | null)?.closest?.<HTMLElement>('.hk-etk[data-dp]');
    if (!knapp) return;
    const rot = knapp.closest<HTMLElement>('[data-hk]');
    if (!rot) return;
    initiera(rot);
    const k = kartor.get(rot);
    if (!k) return;
    e.preventDefault();
    oppna(k, knapp.dataset.dp!);
  });
}

/** Startar alla hjärnkartor under rot som inte redan startats. Anropas igen
 * när rättningen lagt in en karta. */
export function startaHjarnkartor(rot: ParentNode = document) {
  if (typeof document === 'undefined') return;
  installera();
  rot.querySelectorAll<HTMLElement>('[data-hk]').forEach(initiera);
}

/** Stänger arket om det är öppet. */
export function stangArk() {
  stang();
}
