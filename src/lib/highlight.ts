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
  return [...out].sort((a, b) => b.length - a.length);
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
  // Ordlistan markerar ibland andra betydelser med suffix, t.ex. "ordination (2)" eller "kuse 2"
  const wordL = word.toLowerCase().replace(/\s*\(?\d+\)?\s*$/, '').trim();
  const tokens = tokenize(sentence);
  const parts = wordL.split(/\s+/);

  // Flerordsuttryck: matcha konsekutiva tokens (sista delen får vara böjd)
  if (parts.length > 1) {
    for (let i = 0; i < tokens.length; i++) {
      const p0 = parts[0];
      const t0 = tokens[i].text.toLowerCase();
      if (!t0.startsWith(p0.slice(0, Math.max(4, p0.length - 1))) && !(t0.length >= 2 && p0.startsWith(t0))) continue;
      let j = i, ok = true, last = i;
      for (const p of parts) {
        const key = p.slice(0, Math.max(3, p.length - 2));
        const tl = j < tokens.length ? tokens[j].text.toLowerCase() : '';
        // tl kan också vara en kortare böjning av frasdelen (vara -> var)
        if (j < tokens.length && (tl.startsWith(key) || tl.includes(key) || (tl.length >= 2 && p.startsWith(tl)))) { last = j; j++; }
        else { ok = false; break; }
      }
      if (ok) return [tokens[i].start, tokens[last].end];
    }
    return null;
  }

  const st = stems(wordL);

  // 1. Exakt token
  for (const t of tokens) if (t.text.toLowerCase() === wordL) return [t.start, t.end];

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

  // 5. Korta ord (3 tecken, t.ex. mas -> masen): kräv EN unik token som
  // börjar med ordet och är högst tre tecken längre
  if (wordL.length === 3) {
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
