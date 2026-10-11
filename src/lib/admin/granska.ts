// Bygger korten till adminsidan /admin/granska: uppgifter med facit och förklaring.
import { bank, type BankFraga } from '../fokus/fragebank.js';
import { allaPass, provtillfallen, testId as extraTestId } from '../extraprov/register.js';
import { resultDetailHTML, dtkDiagramHTML, type Delprov } from '../fragor/render.js';

export const DELPROV_VAL = ['xyz', 'kva', 'nog', 'dtk', 'ord', 'las', 'mek', 'elf'];

export interface GranskaKort { nr: number; kalla: string; lank: string; html: string }

/** Deterministisk slump (mulberry32), så att samma seed ger samma urval. */
function slump(s: number) {
  return () => {
    s |= 0; s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const passFor = new Map(allaPass.map(p => [extraTestId(p), p]));
const tillfalleNamn = new Map(provtillfallen.map(t => [t.id, t.name]));
const HUVUD_NAMN: Record<string, string> = {
  'kvant-ht2021': 'Kvantitativt prov 1', 'verbal-ht2021': 'Verbalt prov 1',
  'kvant2-ht2021': 'Kvantitativt prov 2', 'verbal2-ht2021': 'Verbalt prov 2',
};

function kalla(q: BankFraga): { text: string; lank: string } {
  if (q.kalla === 'ht2021') {
    return { text: `Huvudtestet HT 2021 · ${HUVUD_NAMN[q.testId] || q.testId} · ${q.shortName} uppgift ${q.num}`, lank: `/prov/${q.testId}` };
  }
  const p = passFor.get(q.testId);
  const namn = p ? `${tillfalleNamn.get(p.tillfalle) || p.tillfalle} · provpass ${p.passNr}` : q.testId;
  return { text: `${namn} · ${q.shortName} uppgift ${q.num}`, lank: p ? `/extra/${p.id}` : '/extra' };
}

function kortFor(q: BankFraga, i: number): GranskaKort {
  const st: Delprov = { id: q.delprov, shortName: q.shortName, type: q.delprov, texts: q.lasText ? [q.lasText] : undefined };
  const fq = q.lasText ? { ...q, textIndex: 0 } : q;
  let las = '';
  if (q.delprov === 'las') {
    if (q.lasText) {
      las = `<details class="gr-las"><summary>Visa texten: ${q.lasText.title}</summary><div class="gr-las-body">${q.lasText.html}</div></details>`;
    } else if (q.images?.length) {
      const bilder = q.images.map(src => `<img src="${src}" alt="${q.textTitle || 'Text'}" class="las-text-img dtk-diagram-img" loading="lazy" data-fadein />`).join('');
      las = `<details class="gr-las"><summary>Visa texten: ${q.textTitle || 'Texten'}</summary>${bilder}</details>`;
    }
  }
  const k = kalla(q);
  return { nr: i + 1, kalla: k.text, lank: k.lank, html: dtkDiagramHTML(fq, st) + las + resultDetailHTML(fq, st, null) };
}

/** Huvudtestets uppgifter som har textförklaring i stället för video. */
export function nyaHuvudtest(): GranskaKort[] {
  return bank.filter(q => q.kalla === 'ht2021' && q.explanation && !q.videoId).map(kortFor);
}

/** Slumpat urval ur extraproven, eventuellt bara ett delprov. */
export function urvalExtra(seed: number, antal: number, delprov = ''): { kort: GranskaKort[]; totalt: number } {
  const pool = bank.filter(q => q.kalla === 'extra' && (!delprov || q.delprov === delprov));
  const r = slump(seed);
  const kopia = pool.slice();
  for (let i = kopia.length - 1; i > 0; i--) {
    const j = Math.floor(r() * (i + 1));
    [kopia[i], kopia[j]] = [kopia[j], kopia[i]];
  }
  return { kort: kopia.slice(0, antal).map(kortFor), totalt: pool.length };
}
