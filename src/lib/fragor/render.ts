// Gemensam frågekomponent: renderar uppgifter från både extramaterialet
// (ExtraFraga) och huvudmaterialet HT 2021 (Question/VQuestion) som HTML-
// strängar, plus hjälparna runt dem (KaTeX, DTK-zoom, fade-in). Används av
// extraprovens provlöpare och av fokuserad träning. Stilarna ligger i
// src/styles/fragor.css.

export interface Fraga {
  num: number;
  text: string;
  options: string[];
  correct: number;
  explanation?: string;
  videoId?: string;
  category?: string;
  q1?: string;
  q2?: string;
  s1?: string;
  s2?: string;
  diagram?: string;
  diagramAlt?: string;
  rotate?: boolean;
  word?: string;
  textIndex?: number;
  images?: string[];
  textTitle?: string;
}

export interface Delprov {
  id: string;
  shortName: string;
  /** 'standard' används av HT 2021 för XYZ, extramaterialet använder 'xyz'. */
  type: string;
  texts?: { title: string; html: string }[];
}

export const LABELS = ['A', 'B', 'C', 'D', 'E'];

/** Laddar KaTeX från CDN en gång per sida. */
export function laddaKatex() {
  if (document.getElementById('katex-css')) return;
  const css = document.createElement('link');
  css.id = 'katex-css';
  css.rel = 'stylesheet';
  css.href = 'https://cdn.jsdelivr.net/npm/katex@0.16.21/dist/katex.min.css';
  document.head.appendChild(css);
  const js = document.createElement('script');
  js.src = 'https://cdn.jsdelivr.net/npm/katex@0.16.21/dist/katex.min.js';
  document.head.appendChild(js);
}

/** Renderar alla .tex-element som inte redan är renderade. */
export function renderTex() {
  const katex = (window as any).katex;
  if (typeof katex === 'undefined') { setTimeout(renderTex, 50); return; }
  document.querySelectorAll('.tex').forEach(el => {
    if (el.getAttribute('data-done')) return;
    katex.render(el.textContent || '', el, { throwOnError: false });
    el.setAttribute('data-done', '1');
  });
}

/** Frågetexten med KVA-par eller NOG-påståenden, utan svarsalternativ. */
export function questionBodyHTML(q: Fraga, st: Delprov): string {
  if (st.type === 'kva' && q.q1) {
    return `<div class="pq-question"><span class="pq-num">${q.num}.</span><span class="pq-text">
        ${q.text ? q.text + '<br><br>' : ''}
        <div class="kva-pair">
          <div class="kva-row"><span class="kva-label"><i>Kvantitet I:</i></span><span>${q.q1}</span></div>
          <div class="kva-row"><span class="kva-label"><i>Kvantitet II:</i></span><span>${q.q2}</span></div>
        </div>
      </span></div>`;
  }
  if (st.type === 'nog' && q.s1) {
    return `<div class="pq-question"><span class="pq-num">${q.num}.</span><span class="pq-text">${q.text}</span></div>
      <div class="nog-statements">
        <div class="nog-stmt"><span class="nog-stmt-num">(1)</span><span>${q.s1}</span></div>
        <div class="nog-stmt"><span class="nog-stmt-num">(2)</span><span>${q.s2}</span></div>
      </div>
      <div class="nog-header"><b>Tillräcklig information för lösningen erhålls</b></div>`;
  }
  return `<div class="pq-question"><span class="pq-num">${q.num}.</span><span class="pq-text">${q.text}</span></div>`;
}

/** LÄS-texten ovanför frågan: hopfällbar HTML-text (extramaterialet) eller
 * bilder (HT 2021). Tom sträng för andra delprov. */
export function lasTextHTML(q: Fraga, st: Delprov, open = true): string {
  if (st.type !== 'las') return '';
  if (q.textIndex !== undefined && st.texts) {
    const t = st.texts[q.textIndex];
    if (!t) return '';
    return `<div class="las-box ${open ? '' : 'las-box--closed'}">
        <button class="las-toggle" id="las-toggle" type="button"><span class="las-title">${t.title}</span><span class="las-toggle-hint">${open ? 'Dölj texten' : 'Visa texten'}</span></button>
        <div class="las-body" id="las-body">${t.html}</div>
      </div>`;
  }
  if (q.images && q.images.length) {
    return `<div class="las-text-section">
        <p class="las-text-label">${q.textTitle || 'Texten'}, klicka för att läsa</p>
        ${q.images.map(img => `<img src="${img}" alt="${q.textTitle || 'Text'}" class="las-text-img dtk-diagram-img" loading="lazy" data-fadein style="cursor:zoom-in;" />`).join('')}
      </div>`;
  }
  return '';
}

/** DTK-diagrammet ovanför frågekortet. */
export function dtkDiagramHTML(q: Fraga, st: Delprov): string {
  if (st.type !== 'dtk' || !q.diagram) return '';
  return `<div class="dtk-diagram"><img src="${q.diagram}" alt="${q.diagramAlt || ''}" class="dtk-diagram-img ${q.rotate ? 'dtk-rotated' : ''}" loading="lazy" data-fadein style="cursor:zoom-in;" /></div>`;
}

/** Rättningsdetaljen för en fråga: frågan, alternativen med rätt och fel
 * markerade, samt förklaring (text eller video). */
export function resultDetailHTML(q: Fraga, st: Delprov, chosen: number | null): string {
  let fraga = q.text || '';
  if (st.type === 'kva' && q.q1) {
    fraga += `<div class="kva-pair"><div class="kva-row"><span class="kva-label"><i>Kvantitet I:</i></span><span>${q.q1}</span></div><div class="kva-row"><span class="kva-label"><i>Kvantitet II:</i></span><span>${q.q2}</span></div></div>`;
  }
  if (st.type === 'nog' && q.s1) {
    fraga += `<div class="nog-statements"><div class="nog-stmt"><span class="nog-stmt-num">(1)</span><span>${q.s1}</span></div><div class="nog-stmt"><span class="nog-stmt-num">(2)</span><span>${q.s2}</span></div></div>`;
  }
  const text = st.type === 'las' && q.textIndex !== undefined && st.texts?.[q.textIndex]
    ? `<p class="pq-res-lasref">Till texten <i>${st.texts[q.textIndex].title}</i></p>`
    : st.type === 'las' && q.textTitle
      ? `<p class="pq-res-lasref">Till <i>${q.textTitle}</i></p>`
      : '';
  const diagram = st.type === 'dtk' && q.diagram
    ? `<p class="pq-res-lasref"><a href="${q.diagram}" target="_blank" rel="noopener">Öppna diagrammet i ny flik</a></p>` : '';
  return `<div class="pq-res-question">${text}${fraga}</div>
    <div class="pq-res-options">${q.options.map((opt, oi) => `<div class="pq-res-opt ${oi === q.correct ? 'pq-res-opt--correct' : ''} ${oi === chosen && oi !== q.correct ? 'pq-res-opt--wrong' : ''}">${LABELS[oi]}. ${opt}</div>`).join('')}</div>
    ${diagram}${forklaringHTML(q)}`;
}

/** Förklaringen till en fråga: textförklaring, annars video, annars platshållare. */
export function forklaringHTML(q: Fraga): string {
  if (q.explanation) return `<div class="pq-res-expl"><p class="pq-res-expl-label">Förklaring</p>${q.explanation}</div>`;
  if (q.videoId) return `<div class="pq-res-video" style="margin-top:1rem;"><p style="font-weight:600; font-size:0.85rem; color:var(--color-muted); margin-bottom:0.5rem;">Förklaring:</p><div class="video-embed"><iframe src="https://player.vimeo.com/video/${q.videoId}?dnt=1&title=0&byline=0&portrait=0" title="Förklaring uppgift ${q.num}" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen loading="lazy"></iframe></div></div>`;
  return '<div class="pq-res-expl pq-res-expl--saknas">Textförklaring till den här uppgiften kommer.</div>';
}

/** Klick på diagram och LÄS-bilder öppnar dem i helskärm. */
export function bindZoom(root: ParentNode) {
  root.querySelectorAll('.dtk-diagram-img').forEach(img => {
    img.addEventListener('click', () => {
      const src = (img as HTMLImageElement).src;
      const isRotated = img.classList.contains('dtk-rotated');
      const overlay = document.createElement('div');
      overlay.className = 'dtk-zoom-overlay';
      overlay.innerHTML = `<div class="dtk-zoom-inner"><img src="${src}" class="${isRotated ? 'dtk-zoom-rotated' : ''}" /></div>`;
      document.body.appendChild(overlay);
      let touchMoved = false;
      overlay.addEventListener('touchstart', () => { touchMoved = false; });
      overlay.addEventListener('touchmove', () => { touchMoved = true; });
      overlay.addEventListener('click', () => { if (!touchMoved) overlay.remove(); });
    });
  });
}

/** Tonar in bilder med data-fadein när de laddats. */
export function bindFadeIn(root: ParentNode) {
  root.querySelectorAll('img[data-fadein]').forEach(img => {
    const el = img as HTMLImageElement;
    if (el.complete && el.naturalHeight > 0) el.classList.add('loaded');
    else el.addEventListener('load', () => el.classList.add('loaded'));
  });
}

/** Fäller ihop och ut LÄS-texten. Returnerar nytt öppet-läge via callback. */
export function bindLasToggle(root: ParentNode, onToggle: (open: boolean) => void) {
  const btn = root.querySelector('#las-toggle');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const box = root.querySelector('.las-box');
    if (!box) return;
    const open = box.classList.contains('las-box--closed');
    box.classList.toggle('las-box--closed', !open);
    const hint = box.querySelector('.las-toggle-hint');
    if (hint) hint.textContent = open ? 'Dölj texten' : 'Visa texten';
    onToggle(open);
  });
}
