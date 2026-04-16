// Results analysis for HP test completion

interface AnalysisQuestion {
  num: number;
  correct: number;
  subTest: { id: string; shortName: string };
  category?: string;
}

interface SubtestResult {
  id: string;
  shortName: string;
  correct: number;
  total: number;
  rate: number;
}

interface CategoryResult {
  category: string;
  correct: number;
  total: number;
  rate: number;
  subTest: string;
}

export interface YrkeInfo {
  score: number;
  label: string;
  image: string;
}

export const yrken: YrkeInfo[] = [
  { score: 0.5, label: 'teolog', image: '/yrken/0.5.webp' },
  { score: 0.6, label: 'förskollärare', image: '/yrken/0.6.webp' },
  { score: 0.7, label: 'kriminolog', image: '/yrken/0.7.webp' },
  { score: 0.8, label: 'sjuksköterska', image: '/yrken/0.8.webp' },
  { score: 0.9, label: 'grundskollärare', image: '/yrken/0.9.webp' },
  { score: 1.0, label: 'ekonom', image: '/yrken/1.0.webp' },
  { score: 1.1, label: 'logoped', image: '/yrken/1.1.webp' },
  { score: 1.2, label: 'jurist i Umeå', image: '/yrken/1.2.webp' },
  { score: 1.3, label: 'sjökapten', image: '/yrken/1.3.webp' },
  { score: 1.4, label: 'tandläkare', image: '/yrken/1.4.webp' },
  { score: 1.5, label: 'arkitekt', image: '/yrken/1.5.webp' },
  { score: 1.6, label: 'läkare i Umeå', image: '/yrken/1.6.webp' },
  { score: 1.7, label: 'psykolog', image: '/yrken/1.7.webp' },
  { score: 1.8, label: 'civilingenjör i teknisk fysik', image: '/yrken/1.8.webp' },
  { score: 1.9, label: 'student på Handels i Stockholm', image: '/yrken/1.9.webp' },
  { score: 2.0, label: 'vad du vill i hela Sverige', image: '/yrken/2.0.webp' },
];

export function getYrkeForScore(normered: number): YrkeInfo | null {
  const rounded = Math.min(2.0, Math.floor(normered * 10) / 10);
  if (rounded < 0.5) return null;
  return yrken.find(y => Math.abs(y.score - rounded) < 0.01) || null;
}

function getEducationExample(norm: number): string {
  const yrke = getYrkeForScore(norm);
  if (!yrke) return '';
  if (norm >= 2.0) return `Med den här poängen kan du bli ${yrke.label}!`;
  return `Med den här poängen kan du t.ex. bli ${yrke.label}!`;
}

function barColor(pct: number): string {
  if (pct >= 80) return '#22c55e';
  if (pct >= 60) return '#3b82f6';
  if (pct >= 40) return '#f59e0b';
  return '#ef4444';
}

function categoryLabel(cat: string): string {
  const labels: Record<string, string> = {
    algebra: 'Algebra',
    geometri: 'Geometri',
    procent: 'Procent',
    sannolikhet: 'Sannolikhet',
    funktioner: 'Funktioner & grafer',
    aritmetik: 'Aritmetik',
    enheter: 'Enheter',
    logik: 'Logiskt resonemang',
    diagram: 'Diagram',
    tabell: 'Tabell',
    karta: 'Karta',
  };
  return labels[cat] || cat;
}

export function analyzeResults(
  questions: AnalysisQuestion[],
  answers: (number | null)[],
  normered?: number
): { weakAreas: string[]; summaryHTML: string } {
  const subtestMap = new Map<string, SubtestResult>();
  const categoryMap = new Map<string, CategoryResult>();
  const trackCategories = new Set(['xyz', 'xyz2', 'kva', 'kva2', 'dtk', 'dtk2']);

  questions.forEach((q, i) => {
    const stId = q.subTest.id;
    const shortName = q.subTest.shortName;
    const isCorrect = answers[i] === q.correct;

    if (!subtestMap.has(stId)) {
      subtestMap.set(stId, { id: stId, shortName, correct: 0, total: 0, rate: 0 });
    }
    const st = subtestMap.get(stId)!;
    st.total++;
    if (isCorrect) st.correct++;

    if (trackCategories.has(stId) && q.category) {
      const catKey = `${shortName}:${q.category}`;
      if (!categoryMap.has(catKey)) {
        categoryMap.set(catKey, { category: q.category, correct: 0, total: 0, rate: 0, subTest: shortName });
      }
      const cat = categoryMap.get(catKey)!;
      cat.total++;
      if (isCorrect) cat.correct++;
    }
  });

  for (const st of subtestMap.values()) {
    st.rate = st.total > 0 ? st.correct / st.total : 0;
  }
  for (const cat of categoryMap.values()) {
    cat.rate = cat.total > 0 ? cat.correct / cat.total : 0;
  }

  const weakAreas: string[] = [];
  const subtestResults = Array.from(subtestMap.values());
  const categoryResults = Array.from(categoryMap.values());
  const sortedSubtests = [...subtestResults].sort((a, b) => a.rate - b.rate);
  const sortedCategories = [...categoryResults].filter(c => c.total >= 2).sort((a, b) => a.rate - b.rate);

  if (sortedSubtests.length > 0 && sortedSubtests[0].rate < 0.7) {
    weakAreas.push(sortedSubtests[0].shortName);
  }
  for (const cat of sortedCategories) {
    if (cat.rate < 0.5 && weakAreas.length < 3) {
      weakAreas.push(`${cat.subTest} — ${categoryLabel(cat.category)}`);
    }
  }

  // Summary text
  const bestSubtest = [...subtestResults].sort((a, b) => b.rate - a.rate)[0];
  const worstSubtest = sortedSubtests[0];
  let summaryParts: string[] = [];

  if (bestSubtest) {
    summaryParts.push(`Din starkaste del var <strong>${bestSubtest.shortName}</strong> (${bestSubtest.correct}/${bestSubtest.total}).`);
  }
  if (worstSubtest && worstSubtest !== bestSubtest) {
    let worstDetail = `Du hade mest problem med <strong>${worstSubtest.shortName}</strong> (${worstSubtest.correct}/${worstSubtest.total})`;
    const worstSubCats = sortedCategories.filter(c => c.subTest === worstSubtest.shortName);
    if (worstSubCats.length > 0 && worstSubCats[0].rate < 0.5) {
      worstDetail += `, särskilt inom <strong>${categoryLabel(worstSubCats[0].category)}</strong> (${worstSubCats[0].correct}/${worstSubCats[0].total})`;
    }
    worstDetail += '.';
    summaryParts.push(worstDetail);
  }

  if (sortedCategories.length > 0 && sortedCategories[0].rate < 0.5) {
    summaryParts.push(`Fokusera på <strong>${categoryLabel(sortedCategories[0].category)}</strong>-uppgifter för att höja dig!`);
  } else if (worstSubtest && worstSubtest.rate < 0.7) {
    summaryParts.push(`Träna mer på <strong>${worstSubtest.shortName}</strong> för att höja ditt resultat!`);
  } else {
    summaryParts.push('Bra jobbat! Fortsätt träna för att bli ännu bättre.');
  }

  // Add education example based on normered score
  if (normered !== undefined && normered >= 0.5) {
    const yrke = getYrkeForScore(normered);
    if (yrke) {
      summaryParts.push(`</p><div style="background:#eff6ff; border:1px solid #bfdbfe; border-radius:12px; padding:1rem; margin-top:0.8rem; color:#1e40af; font-size:0.95rem; display:flex; align-items:center; gap:1rem;"><img src="${yrke.image}" alt="${yrke.label}" style="width:80px; height:80px; border-radius:50%; object-fit:cover; flex-shrink:0; border:2px solid #bfdbfe;" /><div><strong>${normered.toFixed(1)}</strong> räcker t.ex. till att bli ${yrke.label}!</div></div><p style="margin:0;">`);
    }
  }

  // Build vertical bar chart — subtests
  let subtestBarsHTML = `<div class="analysis-vchart">` + subtestResults.map((st, i) => {
    const pct = Math.round(st.rate * 100);
    return `
      <div class="analysis-vchart-col">
        <div class="analysis-vchart-value">${st.correct}/${st.total}</div>
        <div class="analysis-vchart-track">
          <div class="analysis-vchart-fill" style="--target-height:${pct}%; background:${barColor(pct)}; animation-delay:${0.1 + i * 0.1}s;"></div>
        </div>
        <div class="analysis-vchart-label">${st.shortName}</div>
        <div class="analysis-vchart-pct">${pct}%</div>
      </div>`;
  }).join('') + `</div>`;

  // Build category bars (only for subtests with categories)
  let categoryBarsHTML = '';
  const relevantCats = categoryResults.filter(c => c.total > 0);
  if (relevantCats.length > 0) {
    const catsBySubtest = new Map<string, CategoryResult[]>();
    for (const cat of relevantCats) {
      if (!catsBySubtest.has(cat.subTest)) catsBySubtest.set(cat.subTest, []);
      catsBySubtest.get(cat.subTest)!.push(cat);
    }

    let catRows = '';
    for (const [stName, cats] of catsBySubtest) {
      const sorted = cats.sort((a, b) => b.rate - a.rate);
      for (const cat of sorted) {
        const pct = Math.round(cat.rate * 100);
        catRows += `
          <div class="analysis-bar-row analysis-bar-row--small">
            <div class="analysis-bar-label">${categoryLabel(cat.category)}</div>
            <div class="analysis-bar-track">
              <div class="analysis-bar-fill" style="--target-width:${pct}%; background:${barColor(pct)};">
                <span class="analysis-bar-value">${cat.correct}/${cat.total}</span>
              </div>
            </div>
            <div class="analysis-bar-pct">${pct}%</div>
          </div>`;
      }
    }

    categoryBarsHTML = `
      <div style="margin-top:1.5rem;">
        <p style="font-weight:700; font-size:0.9rem; margin-bottom:0.8rem; color:var(--color-muted);">Per kategori</p>
        ${catRows}
      </div>`;
  }

  const summaryHTML = `
    <div class="pq-analysis">
      <h3 style="margin:0 0 0.8rem; font-size:1.1rem;">Analys</h3>
      <p style="line-height:1.7; margin:0 0 1.2rem;">${summaryParts.join(' ')}</p>
      <p style="font-weight:700; font-size:0.9rem; margin-bottom:0.8rem; color:var(--color-muted);">Per delprov</p>
      ${subtestBarsHTML}
      ${categoryBarsHTML}
    </div>
    <style>
      .pq-analysis {
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        border-radius: var(--radius);
        padding: 1.5rem;
        margin: 1.5rem 0;
      }
      /* Vertical subtest chart */
      .analysis-vchart {
        display: flex;
        align-items: flex-end;
        gap: 0.6rem;
        height: 180px;
        margin-bottom: 0.5rem;
      }
      .analysis-vchart-col {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
      }
      .analysis-vchart-value {
        font-size: 0.75rem;
        font-weight: 700;
        color: var(--color-muted);
        margin-bottom: 0.3rem;
      }
      .analysis-vchart-track {
        flex: 1;
        width: 100%;
        max-width: 60px;
        background: #f1f5f9;
        border-radius: 6px;
        display: flex;
        align-items: flex-end;
        overflow: hidden;
      }
      .analysis-vchart-fill {
        width: 100%;
        border-radius: 6px;
        height: 0;
        animation: vbarAnalysis 0.8s ease-out forwards;
      }
      .analysis-vchart-label {
        font-size: 0.75rem;
        font-weight: 700;
        margin-top: 0.4rem;
      }
      .analysis-vchart-pct {
        font-size: 0.7rem;
        color: var(--color-muted);
        font-weight: 600;
      }
      @keyframes vbarAnalysis {
        from { height: 0; }
        to { height: var(--target-height); }
      }

      /* Horizontal category bars */
      .analysis-bar-row {
        display: flex;
        align-items: center;
        gap: 0.6rem;
        margin-bottom: 0.4rem;
      }
      .analysis-bar-row--small .analysis-bar-label {
        min-width: 120px;
        font-size: 0.82rem;
      }
      .analysis-bar-row--small .analysis-bar-pct {
        font-size: 0.78rem;
      }
      .analysis-bar-row--small .analysis-bar-fill {
        height: 22px;
        font-size: 0.75rem;
      }
      .analysis-bar-label {
        min-width: 50px;
        font-weight: 700;
        font-size: 0.88rem;
        flex-shrink: 0;
      }
      .analysis-bar-track {
        flex: 1;
        background: #f1f5f9;
        border-radius: 6px;
        height: 26px;
        overflow: hidden;
      }
      .analysis-bar-fill {
        height: 100%;
        border-radius: 6px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 0;
        animation: hbarAnalysis 0.8s ease-out forwards;
        animation-delay: 0.3s;
      }
      .analysis-bar-value {
        color: #fff;
        font-size: 0.78rem;
        font-weight: 700;
        text-shadow: 0 1px 2px rgba(0,0,0,0.2);
      }
      .analysis-bar-pct {
        min-width: 36px;
        text-align: right;
        font-weight: 700;
        font-size: 0.82rem;
        color: var(--color-muted);
        flex-shrink: 0;
      }
      @keyframes hbarAnalysis {
        from { width: 0; }
        to { width: var(--target-width); }
      }
    </style>`;

  return { weakAreas, summaryHTML };
}
