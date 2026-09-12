// Register över extramaterialet: alla importerade provpass och deras
// textförklaringar. Nya pass läggs till genom att lägga en datafil i data/
// (och förklaringar i forklaringar/), ingen annan kod behöver ändras.
import type { ExtraPass, Provtillfalle, ExtraFraga } from './types.js';

export const provtillfallen: Provtillfalle[] = [
  { id: 'ht2025', name: 'Hösten 2025', date: '2025-10-19', source: 'https://www.studera.nu/hogskoleprov/fpn/provfragor-facit-och-normering-hosten-2025/' },
  { id: 'vt2025', name: 'Våren 2025', date: '2025-04-05', source: 'https://www.studera.nu/hogskoleprov/fpn/provfragor-och-facit-varen-2025/' },
  { id: 'ht2024', name: 'Hösten 2024', date: '2024-10-20', source: 'https://www.studera.nu/hogskoleprov/fpn/provfragor-och-facit-hosten-2024/' },
  { id: 'vt2024', name: 'Våren 2024', date: '2024-04-13', source: 'https://www.studera.nu/hogskoleprov/fpn/provfragor-och-facit-varen-2024/' },
  { id: 'ht2023', name: 'Hösten 2023', date: '2023-10-22', source: 'https://www.studera.nu/hogskoleprov/fpn/provfragor-och-facit-hosten-2023/' },
  { id: 'vt2023', name: 'Våren 2023', date: '2023-03-25', source: 'https://www.studera.nu/hogskoleprov/fpn/provfragor-och-facit-varen-2023/' },
  { id: 'ht2022', name: 'Hösten 2022', date: '2022-10-23', source: 'https://www.studera.nu/hogskoleprov/fpn/provfragor-och-facit-hosten-2022-23-okt/' },
  { id: 'vt2022maj', name: 'Våren 2022 (7 maj)', date: '2022-05-07', source: 'https://www.studera.nu/hogskoleprov/fpn/provfragor-och-facit-varen-2022-7-maj/' },
  { id: 'vt2022mars', name: 'Våren 2022 (12 mars)', date: '2022-03-12', source: 'https://www.studera.nu/hogskoleprov/fpn/provfragor-och-facit-varen-2022-12-mars/' },
  { id: 'vt2021maj', name: 'Våren 2021 (8 maj)', date: '2021-05-08', source: 'https://www.studera.nu/hogskoleprov/fpn/provfragor-och-facit-varen-2021-8-maj/' },
  { id: 'vt2021mars', name: 'Våren 2021 (13 mars)', date: '2021-03-13', source: 'https://www.studera.nu/hogskoleprov/fpn/provfragor-och-facit-varen-2021-13-mars/' },
  { id: 'ht2020', name: 'Hösten 2020', date: '2020-10-25', source: 'https://www.studera.nu/hogskoleprov/fpn/provfragor-och-facit-hosten-2020/' },
  { id: 'ht2019', name: 'Hösten 2019', date: '2019-10-20', source: 'https://www.studera.nu/hogskoleprov/fpn/provfragor-och-facit-hosten-2019/' },
];

const dataModuler = import.meta.glob<{ pass: ExtraPass }>('./data/*.ts', { eager: true });
const forklaringsModuler = import.meta.glob<{ forklaringar: Record<number, string> }>('./forklaringar/*.ts', { eager: true });

function forklaringarFor(id: string): Record<number, string> {
  for (const [vag, mod] of Object.entries(forklaringsModuler)) {
    if (vag.endsWith(`/${id}.ts`)) return mod.forklaringar;
  }
  return {};
}

/** Alla pass med förklaringarna inlagda på frågorna. */
export const allaPass: ExtraPass[] = Object.values(dataModuler)
  .map(mod => {
    const p = mod.pass;
    const fk = forklaringarFor(p.id);
    return {
      ...p,
      subTests: p.subTests.map(st => ({
        ...st,
        questions: st.questions.map((q): ExtraFraga => (fk[q.num] ? { ...q, explanation: fk[q.num] } : q)),
      })),
    };
  })
  .sort((a, b) => a.tillfalle.localeCompare(b.tillfalle) || a.passNr - b.passNr);

export function hamtaPass(id: string): ExtraPass | undefined {
  return allaPass.find(p => p.id === id);
}

export function antalFragor(p: ExtraPass): number {
  return p.subTests.reduce((n, st) => n + st.questions.length, 0);
}

export function antalForklarade(p: ExtraPass): number {
  return p.subTests.reduce((n, st) => n + st.questions.filter(q => q.explanation).length, 0);
}

/** test_id som resultatet sparas under. */
export function testId(p: ExtraPass): string {
  return `extra-${p.id}`;
}

/** Provtillfällena nyast först, med sina pass i ordning. */
export function tillfallenMedPass(): { tillfalle: Provtillfalle; pass: ExtraPass[] }[] {
  return [...provtillfallen]
    .sort((a, b) => b.date.localeCompare(a.date))
    .map(t => ({ tillfalle: t, pass: allaPass.filter(p => p.tillfalle === t.id) }))
    .filter(t => t.pass.length > 0);
}

/** Normerad poäng från passets egen tabell. Tabellen gäller hela delen om 80
 * uppgifter, så råpoängen skalas upp precis som för HT 2021-proven. */
export function normeradPoang(p: ExtraPass, score: number, total: number): number {
  const skalad = Math.round(score * 80 / total);
  let resultat = 0;
  for (const [lagsta, norm] of p.normering) {
    if (skalad >= lagsta) resultat = norm;
    else break;
  }
  return resultat;
}
