// Fetmarkerar det aktuella ordet i en exempelmening. Ordet kan förekomma böjt
// (annektera -> annekterade), i sammansättning (mogul -> fastighetsmogulen)
// eller som flerordsuttryck (grå eminens). Returnerar HTML-säker sträng där
// den matchande delen är omsluten av <strong>.

function escapeHtml(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function stems(word: string): string[] {
  const w = word.toLowerCase();
  const out = new Set<string>([w]);
  for (const suf of ['era', 'a', 'n', 't', 'er', 'ar', 'or']) {
    if (w.endsWith(suf) && w.length - suf.length >= 3) out.add(w.slice(0, w.length - suf.length));
  }
  // e-bortfall i böjning: amper -> ampra, vacker -> vackra
  if (w.endsWith('er') && w.length >= 5) out.add(w.slice(0, w.length - 2) + 'r');
  // neutrum av adjektiv på -d: blid -> blitt, god -> gott
  if (w.endsWith('d') && w.length >= 3) out.add(w.slice(0, w.length - 1) + 'tt');
  return [...out].sort((a, b) => b.length - a.length);
}

// Starka och oregelbundna verb som ofta inleder uttryck (hålla streck -> höll
// streck). Gäller även sammansättningar: vinnlägga sig -> vinnlade sig.
const VERB_FORMS: Record<string, string[]> = {
  vara: ['är', 'var', 'varit', 'vore'],
  bli: ['blir', 'blev', 'blivit', 'blitt'],
  gå: ['går', 'gick', 'gått'],
  ta: ['tar', 'tog', 'tagit', 'tas', 'togs', 'tagits'],
  hålla: ['håller', 'höll', 'hållit', 'hålls', 'hölls'],
  falla: ['faller', 'föll', 'fallit'],
  sticka: ['sticker', 'stack', 'stuckit'],
  låta: ['låter', 'lät', 'låtit'],
  ligga: ['ligger', 'låg', 'legat'],
  göra: ['gör', 'gjorde', 'gjort', 'görs', 'gjordes'],
  sätta: ['sätter', 'satte', 'satt', 'sätts', 'sattes'],
  lägga: ['lägger', 'lade', 'la', 'lagt', 'läggs', 'lades', 'lagts'],
  komma: ['kommer', 'kom', 'kommit'],
  få: ['får', 'fick', 'fått'],
  ge: ['ger', 'gav', 'gett', 'givit', 'ges', 'gavs'],
  se: ['ser', 'såg', 'sett'],
  stå: ['står', 'stod', 'stått'],
  slå: ['slår', 'slog', 'slagit', 'slås', 'slogs'],
  dra: ['drar', 'drog', 'dragit'],
  bära: ['bär', 'bar', 'burit'],
  gjuta: ['gjuter', 'göt', 'gjutit', 'göts'],
  vinna: ['vinner', 'vann', 'vunnit', 'vanns'],
  driva: ['driver', 'drev', 'drivit', 'drivs', 'drevs'],
  leva: ['lever', 'levde', 'levt'],
  röna: ['röner', 'rönte', 'rönt'],
  hysa: ['hyser', 'hyste', 'hyst'],
  yvas: ['yvs', 'yvdes', 'yvts'],
  idas: ['ids', 'iddes', 'idats'],
  nännas: ['nänns', 'nändes', 'nänts'],
};

function isVerbForm(part: string, token: string): boolean {
  for (const [inf, forms] of Object.entries(VERB_FORMS)) {
    if (part === inf && forms.includes(token)) return true;
    if (part.endsWith(inf) && part.length - inf.length >= 2) {
      const pre = part.slice(0, part.length - inf.length);
      if (token.startsWith(pre) && forms.includes(token.slice(pre.length))) return true;
    }
  }
  return false;
}

// "ta någon till nåder" -> "togs ministern till nåder": platshållare matchar
// vilket ord som helst
function isPlaceholder(part: string): boolean {
  return part === 'någon' || part === 'något' || part === 'någons' || part === 'sig';
}

function commonPrefix(a: string, b: string): number {
  let n = 0;
  const m = Math.min(a.length, b.length);
  while (n < m && a[n] === b[n]) n++;
  return n;
}

interface Tok { start: number; end: number; text: string }

function tokenize(sentence: string): Tok[] {
  const tokens: Tok[] = [];
  const re = /[A-Za-zÀ-ÿ'’-]+/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(sentence)) !== null) {
    tokens.push({ start: m.index, end: m.index + m[0].length, text: m[0] });
  }
  return tokens;
}

function findSpan(sentence: string, word: string): [number, number] | null {
  // Ordlistan markerar ibland andra betydelser med suffix, t.ex. "ordination (2)",
  // "kuse 2" eller "lejd (s.)". Inledande "att"/"inte" i uttryck matchas inte
  // heller ("att vara black" -> "var black", "inte skräda orden" -> "skrädde inte orden").
  const wordL = word.toLowerCase()
    .replace(/\s*\([^)]*\)\s*$/, '')
    .replace(/\s*\d+\s*$/, '')
    .replace(/^(att|inte)\s+/, '')
    .trim();
  const tokens = tokenize(sentence);
  const parts = wordL.split(/\s+/);

  // Flerordsuttryck: matcha tokens i ordning. Delarna får vara böjda (även
  // starka verb: hålla -> höll), enstaka ord får skjutas in (snöade HAN in på)
  // och platshållare som "någon" matchar vilket ord som helst.
  if (parts.length > 1) {
    const partMatches = (p: string, tl: string): boolean => {
      const key = p.slice(0, Math.max(3, p.length - 2));
      return tl.startsWith(key) || tl.includes(key) || (tl.length >= 2 && p.startsWith(tl)) || isVerbForm(p, tl);
    };
    for (let i = 0; i < tokens.length; i++) {
      const p0 = parts[0];
      const t0 = tokens[i].text.toLowerCase();
      if (!t0.startsWith(p0.slice(0, Math.max(4, p0.length - 1))) && !(t0.length >= 2 && p0.startsWith(t0)) && !isVerbForm(p0, t0)) continue;
      let j = i + 1, ok = true, last = i;
      for (let k = 1; k < parts.length; k++) {
        const p = parts[k];
        let found = false;
        // upp till två inskjutna ord tillåts före varje frasdel; efter en
        // platshållare fyra, eftersom den kan stå för en hel nominalfras
        // ("gav sin gamle affärspartner på båten")
        const maxSkip = isPlaceholder(parts[k - 1]) ? 4 : 2;
        for (let skip = 0; skip <= maxSkip && j + skip < tokens.length; skip++) {
          const tl = tokens[j + skip].text.toLowerCase();
          if (isPlaceholder(p) || partMatches(p, tl)) { last = j + skip; j = j + skip + 1; found = true; break; }
        }
        if (!found) { ok = false; break; }
      }
      if (ok) return [tokens[i].start, tokens[last].end];
    }
    return null;
  }

  const st = stems(wordL);

  // 1. Exakt token eller oregelbunden verbform (ingjuta -> ingöt, hysa -> hyste)
  for (const t of tokens) if (t.text.toLowerCase() === wordL) return [t.start, t.end];
  for (const t of tokens) if (isVerbForm(wordL, t.text.toLowerCase())) return [t.start, t.end];

  // 2. Token som börjar med en stam (längsta stam vinner)
  let best: { start: number; end: number; len: number } | null = null;
  for (const t of tokens) {
    const tl = t.text.toLowerCase();
    for (const stem of st) {
      if (stem.length >= 4 && tl.startsWith(stem)) {
        if (!best || stem.length > best.len) best = { start: t.start, end: t.end, len: stem.length };
        break;
      }
    }
  }
  if (best) return [best.start, best.end];

  // 3. Sammansättning: stammen finns inuti en token
  for (const t of tokens) {
    const tl = t.text.toLowerCase();
    for (const stem of st) if (stem.length >= 4 && tl.includes(stem)) return [t.start, t.end];
  }

  // 4. Fallback: unik längsta gemensamma prefix (>= 4 tecken)
  const scored = tokens
    .map(t => ({ p: commonPrefix(t.text.toLowerCase(), wordL), start: t.start, end: t.end }))
    .filter(x => x.p >= 4)
    .sort((a, b) => b.p - a.p);
  if (scored.length && (scored.length === 1 || scored[0].p > scored[1].p)) {
    return [scored[0].start, scored[0].end];
  }

  // 5. Korta ord (2-3 tecken, t.ex. mas -> masen, ok -> oket): kräv EN unik
  // token som börjar med ordet och är högst tre tecken längre
  if (wordL.length === 2 || wordL.length === 3) {
    const cands = tokens.filter(t => {
      const tl = t.text.toLowerCase();
      return tl.startsWith(wordL) && tl.length <= wordL.length + 3;
    });
    if (cands.length === 1) return [cands[0].start, cands[0].end];
  }

  return null;
}

export function highlightWord(text: string, word: string): string {
  if (!text) return '';
  if (!word) return escapeHtml(text);
  const span = findSpan(text, word);
  if (!span) return escapeHtml(text);
  const [s, e] = span;
  return escapeHtml(text.slice(0, s)) + '<strong>' + escapeHtml(text.slice(s, e)) + '</strong>' + escapeHtml(text.slice(e));
}
