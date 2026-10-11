// Genererad av bygg-karta.mjs ur src/lib/fokus/hjarnkarta-vy.ts. Ändra inte för hand.
var HK = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // src/lib/fokus/hjarnkarta-vy.ts
  var hjarnkarta_vy_exports = {};
  __export(hjarnkarta_vy_exports, {
    HALVA: () => HALVA,
    NARA_MALET: () => NARA_MALET,
    RMAX: () => RMAX,
    SAKER_PROCENT: () => SAKER_PROCENT,
    STANDARDBREDD: () => STANDARDBREDD,
    arkHTML: () => arkHTML,
    blockHTML: () => blockHTML,
    dataJSON: () => dataJSON,
    deltaSynlig: () => deltaSynlig,
    esc: () => esc,
    etikettHTML: () => etikettHTML,
    forandringHTML: () => forandringHTML,
    foreVarden: () => foreVarden,
    forklaringHTML: () => forklaringHTML,
    formOpt: () => formOpt,
    formSVG: () => formSVG,
    kallstartHTML: () => kallstartHTML,
    kartGeometri: () => kartGeometri,
    lista: () => lista,
    medFran: () => medFran,
    miniKartaSVG: () => miniKartaSVG,
    nFor: () => nFor,
    potText: () => potText,
    ritaKarta: () => ritaKarta,
    slutVarden: () => slutVarden,
    tomData: () => tomData,
    tomHarnast: () => tomHarnast,
    toppSVG: () => toppSVG,
    tranaHarnastHTML: () => tranaHarnastHTML,
    visadProcent: () => visadProcent
  });

  // src/lib/fokus/typer.ts
  var DELPROV = ["xyz", "kva", "nog", "dtk", "ord", "las", "mek"];
  var DELPROV_NAMN = {
    xyz: "XYZ",
    kva: "KVA",
    nog: "NOG",
    dtk: "DTK",
    ord: "ORD",
    las: "L\xC4S",
    mek: "MEK"
  };
  var DELPROV_LANGT = {
    xyz: "Matematisk probleml\xF6sning",
    kva: "Kvantitativa j\xE4mf\xF6relser",
    nog: "Kvantitativa resonemang",
    dtk: "Diagram, tabeller och kartor",
    ord: "Ordf\xF6rst\xE5else",
    las: "L\xE4sf\xF6rst\xE5else",
    mek: "Meningskomplettering"
  };

  // src/lib/fokus/hjarnkarta-vy.ts
  var HALVA = { xyz: "kvant", kva: "kvant", nog: "kvant", dtk: "kvant", ord: "verbal", las: "verbal", mek: "verbal" };
  var SAKER_PROCENT = 15;
  var NARA_MALET = 0.08;
  function esc(s) {
    return String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  }
  function visadProcent(v, eff) {
    return eff < SAKER_PROCENT ? Math.round(v * 20) * 5 : Math.round(v * 100);
  }
  function nFor(pott) {
    return Math.round(pott - 0.01);
  }
  function potText(n) {
    return n < 1 ? "n\xE4ra m\xE5let" : `ca +${n} r\xE4tt att h\xE4mta`;
  }
  function deltaSynlig(v, fore, se, forvantad = 0) {
    if (!(se > 0)) return null;
    const d = v - fore;
    const dp = Math.round(d * 100);
    const z = d - forvantad;
    return Math.abs(z) > 2 * se && Math.sign(z) === Math.sign(d) && Math.abs(dp) >= 4 ? dp : null;
  }
  function medFran(href, fran) {
    if (!fran || !href.startsWith("/trana/fokus?")) return href;
    return `${href}&fran=${encodeURIComponent(fran)}`;
  }
  function lista(namn) {
    if (namn.length <= 1) return namn.join("");
    return `${namn.slice(0, -1).join(", ")} och ${namn[namn.length - 1]}`;
  }
  var NBSP = "\xA0";
  function tomHarnast() {
    return {
      lage: "tom",
      delprov: null,
      typ: null,
      n: -1,
      pottText: "",
      rubrik: "",
      underrubrik: "",
      fet: "Kartan \xE4r tom \xE4n s\xE5 l\xE4nge.",
      mening: "Ge mig ett provpass s\xE5 ritar jag in var dina r\xE4tt finns.",
      knapp: "V\xE4lj ett provpass \u2192",
      knappUnder: "",
      href: "/extra#forsta-pass",
      lank: { text: "eller en snabbkoll, cirka tio minuter", href: "/trana/fokus?lage=snabbkoll" },
      gra: null,
      halva: null
    };
  }
  function tomData() {
    return {
      tom: true,
      antalSvar: 0,
      axlar: DELPROV.map((dp) => ({
        delprov: dp,
        namn: DELPROV_NAMN[dp],
        langt: DELPROV_LANGT[dp],
        del: HALVA[dp],
        styrka: 0.5,
        effektivt: 0,
        antal: 0,
        ratt: 0,
        osaker: true,
        mal: dp === "nog" ? 0.75 : dp === "mek" ? 0.83 : 0.85,
        pott: 0,
        n: 0,
        visadPct: 50,
        trana: { lage: "delprov", typ: null, kort: null, knapp: `Testa 5 ${DELPROV_NAMN[dp]}\u2011uppgifter \u2192`, under: "f\xF6rklaring efter varje svar", href: `/trana/fokus?lage=delprov&val=${dp}&antal=5` }
      })),
      vinnare: null,
      harnast: tomHarnast(),
      typer: {}
    };
  }
  var N = 7;
  var vinkel = (i) => i * 2 * Math.PI / N;
  var f = (n) => (Math.round(n * 10) / 10).toString();
  var P = (pts) => pts.map((p) => `${f(p[0])},${f(p[1])}`).join(" ");
  var RMAX = { kompakt: 74, full: 88 };
  var R_TVA = 62;
  var R_MIN = 34;
  var R_DELTA = 50;
  var STANDARDBREDD = { kompakt: 350, full: 350 };
  var FARG = {
    kvant: { linje: "#ea580c", fyll: "#fb923c" },
    verbal: { linje: "#2563eb", fyll: "#60a5fa" }
  };
  function teckenBredd(c) {
    if (c === " " || c === NBSP) return 0.3;
    if (c === "%") return 0.9;
    if (c === "\u203A") return 0.42;
    if (c === "?") return 0.58;
    if (c === "\u2191" || c === "\u2193") return 0.72;
    if (/[0-9]/.test(c)) return 0.64;
    if (/[A-ZÅÄÖ]/.test(c)) return 0.74;
    return 0.6;
  }
  function textBredd(s, px = 13) {
    let w = 0;
    for (const c of s) w += teckenBredd(c) * px;
    return w;
  }
  function visaFore(data, opt) {
    return opt.fore !== false && !!data.forandring?.foreKontur && data.axlar.some((a) => a.fore !== void 0);
  }
  function deltaHTML(a, fore) {
    if (!fore || a.osaker || a.delta === null || a.delta === void 0) return { html: "", text: "" };
    const d = a.delta;
    return d > 0 ? { html: ` <span class="hk-upp">\u2191${d}</span>`, text: ` \u2191${d}` } : { html: ` <span class="hk-ned">\u2193${-d}</span>`, text: ` \u2193${-d}` };
  }
  function procentText(a) {
    return a.osaker ? "f\xF6r lite data" : `${a.visadPct} procent`;
  }
  function etikettHTML(a, tva, vinnare, fore, stil = "") {
    const d = deltaHTML(a, fore);
    const kl = ["hk-etk", a.osaker ? "hk-gra" : `hk-${a.del}`, tva ? "hk-tva" : "", vinnare ? "hk-vinnare" : ""].filter(Boolean).join(" ");
    const varde = a.osaker ? "?" : `${a.visadPct}&nbsp;%`;
    const inre = tva ? `<span class="hk-r1"><b>${esc(a.namn)}</b>${d.html}</span><span>${varde} <i>\u203A</i></span>` : `<b>${esc(a.namn)}</b><span>${varde}${d.html}</span><i>\u203A</i>`;
    const aria = `${a.namn}, ${procentText(a)}${d.text ? `, ${a.delta > 0 ? "upp" : "ner"} ${Math.abs(a.delta)} sedan passet` : ""}. Visa uppgiftstyperna.`;
    return `<button type="button" class="${kl}" data-dp="${a.delprov}"${stil ? ` style="${stil}"` : ""} aria-label="${esc(aria)}">${inre}</button>`;
  }
  function uppskattaEtikett(a, tva, fore) {
    const d = deltaHTML(a, fore);
    const namn = textBredd(a.namn);
    const varde = a.osaker ? textBredd("?") : textBredd(`${a.visadPct}${NBSP}%`);
    const delta = textBredd(d.text);
    const kant = a.osaker ? 3 : 2;
    if (tva) return [Math.ceil(Math.max(namn + delta, varde + textBredd(" \u203A")) + 16 + kant), a.osaker ? 43 : 42];
    return [Math.ceil(namn + varde + delta + textBredd("\u203A") + 8 + 17 + kant), a.osaker ? 26 : 25];
  }
  function raknaR(W, box, Rmax) {
    let r = Rmax;
    for (let i = 0; i < N; i++) {
      const sn = Math.abs(Math.sin(vinkel(i)));
      if (sn >= 0.3) r = Math.min(r, (W / 2 - box[i][0] - 2) / sn - 10);
    }
    return Math.floor(r);
  }
  function kartGeometri(data, opt) {
    const W = Math.max(200, Math.round(opt.bredd ?? STANDARDBREDD[opt.storlek]));
    const Rmax = W >= 560 ? Math.round(RMAX[opt.storlek] * 1.25) : RMAX[opt.storlek];
    let medDelta = visaFore(data, opt);
    const storlekar = (allaTva2) => {
      const tva2 = data.axlar.map((_, i) => allaTva2 || Math.abs(Math.cos(vinkel(i))) < 0.5);
      const box2 = data.axlar.map((a, i) => opt.matt ? opt.matt(etikettHTML(a, tva2[i], data.vinnare === a.delprov, medDelta), i, tva2[i]) : uppskattaEtikett(a, tva2[i], medDelta));
      return { box: box2, tva: tva2 };
    };
    const matt = () => {
      let tva2 = false;
      let st = storlekar(false);
      let r = raknaR(W, st.box, Rmax);
      if (r < R_TVA) {
        tva2 = true;
        st = storlekar(true);
        r = raknaR(W, st.box, Rmax);
      }
      return { ...st, R: r, allaTva: tva2 };
    };
    let m = matt();
    if (medDelta && m.R < R_DELTA) {
      medDelta = false;
      m = matt();
    }
    const { box, tva, allaTva } = m;
    const R = Math.max(R_MIN, m.R);
    const D = R + 10;
    const CX = W / 2;
    const sned = Math.max(box[1][1], box[N - 1][1]);
    const krock = box[0][0] / 2 + 4 > D * Math.sin(vinkel(1));
    const Dtopp = krock ? Math.max(D, D * Math.cos(vinkel(1)) + sned + 4) : D;
    const CY = Dtopp + box[0][1] + 4;
    let H = 0;
    const etk = data.axlar.map((_, i) => {
      const sin = Math.sin(vinkel(i)), cos = Math.cos(vinkel(i));
      const tx = Math.abs(sin) < 0.3 ? "-50%" : sin > 0 ? "0" : "-100%";
      const ty = cos > 0.5 ? "-100%" : cos < -0.5 ? "0" : "-50%";
      const y = i === 0 ? CY - Dtopp : CY - D * cos;
      H = Math.max(H, y + (cos < -0.5 ? box[i][1] : cos > 0.5 ? 0 : box[i][1] / 2));
      return { x: D * sin, y, tx, ty, w: box[i][0], h: box[i][1], tva: tva[i] };
    });
    return { W, H: Math.ceil(H + 4), CX, CY, R, D, etk, allaTva, medDelta };
  }
  function punktFn(g) {
    return (i, v) => [g.CX + g.R * v * Math.sin(vinkel(i)), g.CY - g.R * v * Math.cos(vinkel(i))];
  }
  function horn(g, vals, kand) {
    const pt = punktFn(g);
    const pts = [];
    for (let i = 0; i < N; i++) {
      if (kand(i)) {
        pts.push(pt(i, vals[i]));
        continue;
      }
      if (kand((i + N - 1) % N)) pts.push([g.CX, g.CY]);
    }
    return pts;
  }
  function formSVG(g, axlar, vals, o) {
    const pt = punktFn(g);
    const kand = (i) => !axlar[i].osaker;
    const id = o.id;
    const ut = [];
    const halvDim = (del) => !!o.pass && !axlar.some((a) => a.del === del && o.pass.includes(a.delprov));
    axlar.forEach((a, i) => {
      if (!a.osaker || !(a.antal > 0)) return;
      const se = 1.5 * Math.sqrt(a.styrka * (1 - a.styrka) / (a.effektivt + 4));
      const [x1, y1] = pt(i, Math.max(0.04, a.styrka - se)), [x2, y2] = pt(i, Math.min(1, a.styrka + se));
      ut.push(`<line x1="${f(x1)}" y1="${f(y1)}" x2="${f(x2)}" y2="${f(y2)}" stroke="#cbd5e1" stroke-width="9" stroke-linecap="round"/>`);
      ut.push(`<line x1="${f(x1)}" y1="${f(y1)}" x2="${f(x2)}" y2="${f(y2)}" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="2 3"/>`);
    });
    axlar.forEach((a, i) => {
      const fo = (i + N - 1) % N, ef = (i + 1) % N;
      if (!a.osaker || !(a.antal > 0) || !kand(fo) || !kand(ef)) return;
      const p1 = pt(fo, vals[fo]), p2 = pt(i, a.styrka), p3 = pt(ef, vals[ef]);
      ut.push(`<polygon points="${P([[g.CX, g.CY], p1, p2, p3])}" fill="url(#${id}rand)"/>`);
      ut.push(`<polyline points="${P([p1, p2, p3])}" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/>`);
    });
    const pts = horn(g, vals, kand);
    const antalKanda = axlar.filter((a) => !a.osaker).length;
    const fpts = o.foreVals ? horn(g, o.foreVals, (i) => !axlar[i].osakerFore && axlar[i].fore !== void 0) : null;
    if (antalKanda >= 1 && pts.length >= 3) {
      const poly = P(pts);
      const op = (del) => halvDim(del) ? 0.22 : 0.42;
      ut.push(`<polygon points="${poly}" fill="${FARG.kvant.fyll}" fill-opacity="${op("kvant")}" clip-path="url(#${id}cq)"/>`);
      ut.push(`<polygon points="${poly}" fill="${FARG.verbal.fyll}" fill-opacity="${op("verbal")}" clip-path="url(#${id}cv)"/>`);
      if (fpts && fpts.length >= 3) {
        const fpoly = P(fpts);
        ut.push(`<mask id="${id}mv"><rect x="-50" y="-50" width="4000" height="4000" fill="black"/><polygon points="${poly}" fill="white"/><polygon points="${fpoly}" fill="black"/></mask>`);
        ut.push(`<mask id="${id}mk"><rect x="-50" y="-50" width="4000" height="4000" fill="black"/><polygon points="${fpoly}" fill="white"/><polygon points="${poly}" fill="black"/></mask>`);
        ut.push(`<polygon points="${poly}" fill="#86efac" fill-opacity=".9" mask="url(#${id}mv)"/>`);
        ut.push(`<polygon points="${fpoly}" fill="url(#${id}krymp)" mask="url(#${id}mk)"/>`);
      }
      axlar.forEach((a, i) => {
        if (a.osaker) return;
        const p = pt(i, vals[i]);
        ut.push(`<line x1="${f(g.CX)}" y1="${f(g.CY)}" x2="${f(p[0])}" y2="${f(p[1])}" stroke="#fff" stroke-width="1.6" stroke-opacity=".9"/>`);
      });
      const d = [];
      for (let i = 0; i < N; i++) {
        const j = (i + 1) % N;
        if (kand(i) && kand(j)) {
          const a = pt(i, vals[i]), b = pt(j, vals[j]);
          d.push(`M${f(a[0])},${f(a[1])}L${f(b[0])},${f(b[1])}`);
        }
      }
      if (d.length) {
        ut.push(`<path d="${d.join("")}" stroke="${FARG.kvant.linje}" stroke-width="2.3" fill="none" stroke-linejoin="round" stroke-linecap="round" clip-path="url(#${id}cq)" opacity="${halvDim("kvant") ? 0.45 : 1}"/>`);
        ut.push(`<path d="${d.join("")}" stroke="${FARG.verbal.linje}" stroke-width="2.3" fill="none" stroke-linejoin="round" stroke-linecap="round" clip-path="url(#${id}cv)" opacity="${halvDim("verbal") ? 0.45 : 1}"/>`);
      }
    }
    if (fpts && fpts.length >= 3 && o.foreVals) {
      ut.push(`<polygon class="hk-fore" points="${P(fpts)}" fill="none" stroke="#475569" stroke-width="1.8" stroke-dasharray="1.5 3.2" stroke-linecap="round"/>`);
      axlar.forEach((a, i) => {
        if (a.osaker || a.osakerFore || a.fore === void 0 || Math.abs(a.styrka - a.fore) < 0.03) return;
        const p = pt(i, o.foreVals[i]);
        ut.push(`<circle cx="${f(p[0])}" cy="${f(p[1])}" r="3" fill="#fff" stroke="#475569" stroke-width="1.6"/>`);
      });
    }
    return ut.join("");
  }
  function toppSVG(g, axlar, vals, o) {
    const pt = punktFn(g);
    const langs = (i2, px) => [g.CX + px * Math.sin(vinkel(i2)), g.CY - px * Math.cos(vinkel(i2))];
    const dim = (a) => !!o.pass && !o.pass.includes(a.delprov) && o.vinnare !== a.delprov;
    const ut = [];
    const i = o.vinnare ? axlar.findIndex((a) => a.delprov === o.vinnare) : -1;
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
      else ut.push(`<circle class="hk-punkt" data-dp="${a.delprov}" cx="${f(p[0])}" cy="${f(p[1])}" r="3.8" fill="#fff" stroke="${FARG[a.del].linje}" stroke-width="2"${dim(a) ? ' opacity=".45"' : ""}/>`);
    });
    return ut.join("");
  }
  function slutVarden(data) {
    return data.axlar.map((a) => a.styrka);
  }
  function foreVarden(data) {
    return data.axlar.map((a) => a.fore !== void 0 && !a.osakerFore ? a.fore : a.styrka);
  }
  function formOpt(data, opt) {
    const fore = visaFore(data, opt);
    return {
      id: opt.id || "hk",
      vinnare: data.vinnare,
      foreVals: fore ? foreVarden(data) : null,
      pass: fore && data.pass ? data.pass.delprov : null
    };
  }
  function ariaKarta(data) {
    const delar = data.axlar.map((a) => `${a.namn} ${procentText(a)}`).join(", ");
    const vinn = data.vinnare ? `. Mest att h\xE4mta: ${DELPROV_NAMN[data.vinnare]}` : "";
    return `Din hj\xE4rnkarta: ${delar}${vinn}.`;
  }
  function ritaKarta(data, opt) {
    const g = kartGeometri(data, opt);
    const fo = formOpt(data, opt);
    const id = fo.id;
    const pt = punktFn(g);
    const fore = visaFore(data, opt);
    const kil = (fran, till) => {
      const p = [[g.CX, g.CY]];
      for (let k = 0; k <= 24; k++) {
        const a = fran + (till - fran) * k / 24;
        p.push([g.CX + 1e3 * Math.sin(a), g.CY - 1e3 * Math.cos(a)]);
      }
      return P(p);
    };
    const hept = (v) => P(data.axlar.map((_, i) => pt(i, v)));
    const s = [];
    s.push(`<svg class="hk-svg" width="${g.W}" height="${g.H}" viewBox="0 0 ${g.W} ${g.H}" style="margin-left:${f(-g.W / 2)}px" role="img" aria-label="${esc(ariaKarta(data))}">`);
    s.push(`<defs><clipPath id="${id}cq"><polygon points="${kil(-Math.PI / 7, Math.PI)}"/></clipPath>`);
    s.push(`<clipPath id="${id}cv"><polygon points="${kil(Math.PI, 2 * Math.PI - Math.PI / 7)}"/></clipPath>`);
    s.push(`<pattern id="${id}rand" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="5" height="5" fill="#f1f5f9"/><rect width="1.6" height="5" fill="#cbd5e1"/></pattern>`);
    s.push(`<pattern id="${id}krymp" width="4" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="4" height="4" fill="#f1f5f9"/><rect width="1.5" height="4" fill="#94a3b8"/></pattern></defs>`);
    s.push(`<polygon points="${hept(1)}" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2"/>`);
    s.push(`<polygon points="${hept(0.5)}" fill="none" stroke="#eef2f6" stroke-width="1"/>`);
    data.axlar.forEach((a, i) => {
      const p = pt(i, 1);
      s.push(`<line x1="${f(g.CX)}" y1="${f(g.CY)}" x2="${f(p[0])}" y2="${f(p[1])}" stroke="#e2e8f0" stroke-width="1"${a.osaker ? ' stroke-dasharray="3 3"' : ""}/>`);
    });
    const vals = slutVarden(data);
    const origo = `transform-origin:${f(g.CX)}px ${f(g.CY)}px`;
    s.push(`<g class="hk-form" style="${origo}">${formSVG(g, data.axlar, vals, fo)}</g>`);
    s.push(`<polygon class="hk-malring" points="${P(data.axlar.map((a, i) => pt(i, a.mal)))}" fill="none" stroke="#334155" stroke-opacity=".6" stroke-width="1.3" stroke-dasharray="4 3.5"/>`);
    const m = pt(0, data.axlar[0].mal);
    s.push(`<text x="${f(m[0] + 6)}" y="${f(m[1] + 4)}" font-size="11" font-weight="600" fill="#475569" stroke="#fff" stroke-width="3" paint-order="stroke" font-family="Segoe UI, system-ui, -apple-system, sans-serif">m\xE5l</text>`);
    s.push(`<g class="hk-topp" style="${origo}">${toppSVG(g, data.axlar, vals, fo)}</g>`);
    s.push(`</svg>`);
    const etk = data.axlar.map((a, i) => {
      const e = g.etk[i];
      const stil = `left:calc(50% + ${f(e.x)}px);top:${f(e.y)}px;transform:translate(${e.tx},${e.ty})`;
      return etikettHTML(a, e.tva, data.vinnare === a.delprov, fore && g.medDelta, stil);
    }).join("");
    const kl = ["hk-karta", `hk-${opt.storlek}`, fore ? "hk-glid" : opt.stilla ? "" : "hk-vax"].filter(Boolean).join(" ");
    return `<div class="${kl}" data-hk-w="${g.W}" style="height:${g.H}px">${s.join("")}${etk}</div>`;
  }
  function forklaringHTML() {
    return `<div class="hk-forklaring" aria-hidden="true"><span><svg width="22" height="6"><line x1="1" y1="3" x2="21" y2="3" stroke="#475569" stroke-width="1.8" stroke-dasharray="1.5 3" stroke-linecap="round"/></svg>f\xF6re passet</span><span><i class="hk-ruta hk-ruta-vaxte"></i>v\xE4xte</span><span><i class="hk-ruta hk-ruta-krympte"></i>krympte</span></div>`;
  }
  function miniKartaSVG(storlek = 56, data, id = "hkmini") {
    const c = storlek / 2, r = storlek / 2 - 3;
    const pt = (i, v) => [c + r * v * Math.sin(vinkel(i)), c - r * v * Math.cos(vinkel(i))];
    const hept = (v) => P(Array.from({ length: N }, (_, i) => pt(i, v)));
    const ekrar = Array.from({ length: N }, (_, i) => {
      const p = pt(i, 1);
      return `<line x1="${c}" y1="${c}" x2="${f(p[0])}" y2="${f(p[1])}" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="2 2"/>`;
    }).join("");
    let form = "";
    let mal = hept(0.84);
    if (data && !data.tom) {
      const kil = (fran, till) => {
        const p = [[c, c]];
        for (let k = 0; k <= 12; k++) {
          const a = fran + (till - fran) * k / 12;
          p.push([c + 100 * Math.sin(a), c - 100 * Math.cos(a)]);
        }
        return P(p);
      };
      const poly = P(data.axlar.map((a, i) => pt(i, a.osaker ? 0 : a.styrka)));
      mal = P(data.axlar.map((a, i) => pt(i, a.mal)));
      const vi = data.axlar.findIndex((a) => a.delprov === data.vinnare);
      const vp = vi >= 0 ? pt(vi, data.axlar[vi].styrka) : null;
      form = `<defs><clipPath id="${id}cq"><polygon points="${kil(-Math.PI / 7, Math.PI)}"/></clipPath><clipPath id="${id}cv"><polygon points="${kil(Math.PI, 2 * Math.PI - Math.PI / 7)}"/></clipPath></defs><polygon points="${poly}" fill="${FARG.kvant.fyll}" fill-opacity=".5" stroke="${FARG.kvant.linje}" stroke-width="1.4" stroke-linejoin="round" clip-path="url(#${id}cq)"/><polygon points="${poly}" fill="${FARG.verbal.fyll}" fill-opacity=".5" stroke="${FARG.verbal.linje}" stroke-width="1.4" stroke-linejoin="round" clip-path="url(#${id}cv)"/>` + (vp ? `<circle cx="${f(vp[0])}" cy="${f(vp[1])}" r="3.2" fill="#f59e0b" stroke="#92400e" stroke-width="1.2"/>` : "");
    }
    return `<svg class="hk-mini" width="${storlek}" height="${storlek}" viewBox="0 0 ${storlek} ${storlek}" aria-hidden="true"><polygon points="${hept(1)}" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2"/>${ekrar}${form}<polygon points="${mal}" fill="none" stroke="#334155" stroke-opacity=".45" stroke-width="1" stroke-dasharray="3 2.5"/></svg>`;
  }
  function forandringHTML(data) {
    const fo = data.forandring;
    if (!fo) return "";
    return `<p class="hk-mening">${fo.fet ? `<b>${esc(fo.fet)}</b>` : ""}${esc(fo.text)}</p>`;
  }
  function urProvetHTML(u, fran) {
    return `<a class="hk-urprov" href="${esc(medFran(u.href, fran))}"><span class="hk-urprov-text"><small>Ur det h\xE4r provet</small><b>${esc(u.rubrik)}</b> <span class="hk-tagg">${esc(u.tagg)}</span><span class="hk-urprov-under">${esc(u.text)}</span></span><span class="hk-chev" aria-hidden="true">\u203A</span></a>`;
  }
  function tranaHarnastHTML(data, opt = {}) {
    const h = data.harnast;
    if (h.lage === "tom") return "";
    const fran = opt.fran;
    const ut = [`<div class="hk-harnast">`];
    ut.push(`<div class="hk-harnast-topp"><span class="hk-overrad">Tr\xE4na h\xE4rn\xE4st</span>${h.pottText ? `<span class="hk-pott">${esc(h.pottText)}</span>` : ""}</div>`);
    if (h.rubrik) ut.push(`<h3 class="hk-rubrik">${esc(h.rubrik)}${h.underrubrik ? ` <span>${esc(h.underrubrik)}</span>` : ""}</h3>`);
    ut.push(`<p class="hk-text">${h.fet ? `<b>${esc(h.fet)}</b> ` : ""}${esc(h.mening)}</p>`);
    ut.push(`<a class="hk-knapp" href="${esc(medFran(h.href, fran))}">${esc(h.knapp)}${h.knappUnder ? `<small>${esc(h.knappUnder)}</small>` : ""}</a>`);
    if (h.lank) ut.push(`<a class="hk-lank" href="${esc(medFran(h.lank.href, fran))}">${esc(h.lank.text)}</a>`);
    if (h.gra) ut.push(`<div class="hk-gra-rad"><i class="hk-randruta" aria-hidden="true"></i><span>${esc(h.gra.text)}</span><a href="${esc(medFran(h.gra.href, fran))}">${esc(h.gra.lank)}</a></div>`);
    if (h.halva) ut.push(`<p class="hk-halva"><b>${esc(h.halva.fet)}</b> ${esc(h.halva.text)} <a href="${esc(h.halva.href)}">${esc(h.halva.lank)}</a></p>`);
    if (data.urProvet) ut.push(urProvetHTML(data.urProvet, fran));
    ut.push(`</div>`);
    return ut.join("");
  }
  function kallstartHTML(data, opt) {
    if (opt.variant === "rad") {
      return `<a class="hk-kallrad" href="#forsta-pass">${miniKartaSVG(56)}<span class="hk-kallrad-text"><b>Rita din hj\xE4rnkarta</b><span>G\xF6r ett provpass nedan s\xE5 ritar jag in halva kartan.</span></span><span class="hk-chev" aria-hidden="true">\u203A</span></a><a class="hk-kallrad-lank" href="/trana/fokus?lage=snabbkoll">eller en snabbkoll p\xE5 tio minuter</a>`;
    }
    const h = data.harnast.lage === "tom" ? data.harnast : tomHarnast();
    const tom = data.tom ? data : { ...tomData() };
    return ritaKarta(tom, { storlek: "full", id: opt.id, bredd: opt.bredd, matt: opt.matt, stilla: true }) + `<div class="hk-kallstart"><p class="hk-text"><b>${esc(h.fet)}</b> ${esc(h.mening)}</p><a class="hk-knapp" href="${esc(h.href)}">${esc(h.knapp)}</a>` + (h.lank ? `<a class="hk-lank" href="${esc(h.lank.href)}">${esc(h.lank.text)}</a>` : "") + `</div>`;
  }
  function sparHTML(a, tunn) {
    const kl = `hk-spar${tunn ? " hk-tunn" : ""}${a.osaker ? " hk-osaker" : ""}`;
    if (a.osaker) return `<div class="${kl}" aria-hidden="true"></div>`;
    const p = Math.max(0, Math.min(100, a.visadPct));
    const m = Math.round(a.mal * 100);
    const kvar = m > p ? `<i class="hk-kvar" style="left:${p}%;width:${m - p}%"></i>` : "";
    return `<div class="${kl}" aria-hidden="true"><i class="hk-fyll" style="width:${p}%"></i>${kvar}<i class="hk-malstreck" style="left:${m}%"></i></div>`;
  }
  var SA_RAKNAR = "Antal uppgifter per provpass g\xE5nger avst\xE5ndet till m\xE5let blir ungef\xE4r hur m\xE5nga fler r\xE4tt du f\xE5r n\xE4r du n\xE5r dit. Procenten \xE4r din niv\xE5 just nu: nya svar v\xE4ger mest, och med f\xE5 svar drar jag mot mitten.";
  function arkHTML(data, dp, opt = {}) {
    const a = data.axlar.find((x) => x.delprov === dp);
    if (!a) return "";
    const fran = opt.fran;
    const halva = a.del === "kvant" ? "Kvantitativt" : "Verbalt";
    const ut = [];
    ut.push(`<div class="hk-ark-inne hk-ark-${a.del}">`);
    ut.push(`<div class="hk-handtag" aria-hidden="true"></div>`);
    ut.push(`<div class="hk-ark-topp"><div><span class="hk-pill hk-pill-${a.del}">${halva}</span><h2 id="hk-ark-rubrik">${esc(a.namn)}</h2><p>${esc(a.langt)}</p></div><button type="button" class="hk-stang" data-hk-stang aria-label="St\xE4ng">\u2715</button></div>`);
    const malPct = Math.round(a.mal * 100);
    if (a.osaker) {
      ut.push(`<div class="hk-ark-tal"><b>?</b><span>f\xF6r lite data \xB7 m\xE5let ${malPct}&nbsp;%</span></div>`);
      ut.push(sparHTML(a, false));
      const pass = a.del === "kvant" ? "Ett kvantitativt provpass" : "Ett verbalt provpass";
      const text = a.antal > 0 ? `${a.namn} \xE4r gr\xE5: ${a.antal} svar hittills. ${pass} g\xF6r den skarp.` : `Inga svar p\xE5 ${a.namn} \xE4n. ${pass} ritar in den.`;
      ut.push(`<p class="hk-ark-not">${esc(text)}</p>`);
    } else {
      ut.push(`<div class="hk-ark-tal"><b>${a.visadPct}&nbsp;%</b><span>din niv\xE5 just nu \xB7 m\xE5let ${malPct}&nbsp;%</span></div>`);
      ut.push(sparHTML(a, false));
      ut.push(`<div class="hk-spar-under"><span>Byggt p\xE5 ${a.antal} svar</span><b class="${a.n < 1 ? "hk-nara" : ""}">${esc(potText(a.n))}</b></div>`);
    }
    const rader = data.typer?.[dp] || [];
    if (rader.length) {
      const sakraPott = rader.filter((t) => !t.osaker && t.pott >= 0.5).sort((x, y) => y.pott - x.pott);
      const knappTyp = a.trana.lage === "typ" ? a.trana.typ : null;
      const iKnapp = knappTyp ? sakraPott.findIndex((t) => t.typ === knappTyp) : -1;
      if (iKnapp > 0) sakraPott.unshift(...sakraPott.splice(iKnapp, 1));
      const sakraUtan = rader.filter((t) => !t.osaker && t.pott < 0.5).sort((x, y) => y.pott - x.pott || x.styrka - y.styrka);
      const ordning = (t) => rader.indexOf(t);
      const andelFel = (t) => (t.antal - t.ratt) / t.antal;
      const osakra = rader.filter((t) => t.osaker && t.antal > 0).sort((x, y) => (dp === "mek" ? 0 : andelFel(y) - andelFel(x)) || ordning(x) - ordning(y));
      const utanSvar = rader.filter((t) => t.osaker && !(t.antal > 0));
      const spridd = !sakraPott.length && sakraUtan.length > 0 && !a.osaker && a.n >= 1;
      const sub = spridd ? "Luckan \xE4r spridd: ingen typ ger 1 r\xE4tt per pass f\xF6r sig. Tryck p\xE5 en rad f\xF6r tio uppgifter." : !sakraPott.length && !sakraUtan.length ? "F\xF6r f\xE5 svar per typ \xE4n. Tryck p\xE5 en rad f\xF6r fem uppgifter." : "Mest att h\xE4mta \xF6verst. Tryck p\xE5 en rad f\xF6r tio uppgifter.";
      ut.push(`<h3>Var tappar du r\xE4tt?</h3><p class="hk-ark-sub">${esc(sub)}</p>`);
      ut.push(`<div class="hk-typer">`);
      const sorterade = [...sakraPott, ...sakraUtan, ...osakra];
      sorterade.forEach((t, k) => {
        const topp = k === 0 && !t.osaker && t.pott >= 0.5;
        let under = "";
        if (t.osaker) under = `<span class="hk-typ-sub">${t.ratt} r\xE4tt av ${t.antal} hittills \xB7 <u>Testa 5 \u203A</u></span>`;
        else if (topp) under = `<span class="hk-typ-sub"><b>${esc(potText(t.n))}</b> per pass</span>`;
        else if (t.pott < 0.5) {
          under = t.mal - t.styrka < NARA_MALET ? `<span class="hk-typ-sub"><span class="hk-nara">n\xE4ra m\xE5let</span></span>` : `<span class="hk-typ-sub">under 1 r\xE4tt per pass</span>`;
        }
        const varde = t.osaker ? "" : `<span class="hk-typ-varde">${t.visadPct}&nbsp;%</span>`;
        const aria = t.osaker ? `${t.namn}, ${t.ratt} r\xE4tt av ${t.antal} hittills, f\xF6r lite data. Testa 5 uppgifter.` : `${t.namn}, ${t.visadPct} procent. Tio uppgifter.`;
        ut.push(`<a class="hk-typ" href="${esc(medFran(t.href, fran))}" aria-label="${esc(aria)}"><span class="hk-typ-kropp"><span class="hk-typ-rad"><span class="hk-typ-namn">${esc(t.namn)}${topp ? "<small>Mest att h\xE4mta</small>" : ""}</span>${varde}</span>${sparHTML(t, true)}${under}</span><span class="hk-chev" aria-hidden="true">\u203A</span></a>`);
      });
      if (utanSvar.length) {
        ut.push(`<div class="hk-typ-tom"><span><b>Inga svar \xE4n:</b> ${esc(lista(utanSvar.map((t) => t.namn)))}</span></div>`);
      }
      ut.push(`</div>`);
      if (a.trana.lage === "typ") ut.push(`<a class="hk-lank" href="${esc(medFran(`/trana/fokus?lage=delprov&val=${a.delprov}`, fran))}">eller 10 blandade ${esc(a.namn)}\u2011uppgifter</a>`);
    }
    ut.push(`<details class="hk-rakna"><summary>S\xE5 r\xE4knar jag</summary><p>${esc(SA_RAKNAR)}</p></details>`);
    ut.push(`<div class="hk-ark-fot"><a class="hk-knapp" href="${esc(medFran(a.trana.href, fran))}">${esc(a.trana.knapp)}<small>${esc(a.trana.under)}</small></a></div>`);
    ut.push(`</div>`);
    return ut.join("");
  }
  function dataJSON(data) {
    return JSON.stringify(data).replace(/</g, "\\u003c").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
  }
  function blockHTML(data, opt) {
    const id = opt.id || "hk";
    const o = { storlek: opt.storlek, fran: opt.fran ?? null, id, fore: opt.fore };
    const ut = [`<div class="hk hk-block-${opt.storlek}${data.tom ? "" : " hk-med-karta"}" data-hk data-hk-opt="${esc(JSON.stringify(o))}">`];
    if (data.tom) {
      ut.push(kallstartHTML(data, { variant: opt.storlek === "kompakt" ? "rad" : "tom", id, bredd: opt.bredd }));
    } else {
      const fore = visaFore(data, opt);
      if (fore || opt.fore !== false && data.forandring) ut.push(forandringHTML(data));
      ut.push(ritaKarta(data, { storlek: opt.storlek, id, bredd: opt.bredd, fore: opt.fore }));
      if (fore) ut.push(forklaringHTML());
      ut.push(tranaHarnastHTML(data, { fran: opt.fran }));
    }
    ut.push(`<script type="application/json" data-hk-data>${dataJSON(data)}<\/script></div>`);
    return ut.join("");
  }
  return __toCommonJS(hjarnkarta_vy_exports);
})();
