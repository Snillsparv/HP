// Results analysis for HP test completion

interface AnalysisQuestion {
  num: number;
  correct: number;
  subTest: { id: string; shortName: string };
  category?: string;
}

interface SubtestResult {
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

export function analyzeResults(
  questions: AnalysisQuestion[],
  answers: (number | null)[]
): { weakAreas: string[]; summaryHTML: string } {
  // 1. Count correct/incorrect per subtest
  const subtestMap = new Map<string, SubtestResult>();
  const categoryMap = new Map<string, CategoryResult>();

  // Math subtests where we track categories
  const mathSubtests = new Set(['xyz', 'xyz2', 'kva', 'kva2']);
  // DTK subtests where we track categories
  const dtkSubtests = new Set(['dtk', 'dtk2']);

  questions.forEach((q, i) => {
    const stId = q.subTest.id;
    const shortName = q.subTest.shortName;
    const isCorrect = answers[i] === q.correct;

    // Per-subtest tracking
    if (!subtestMap.has(stId)) {
      subtestMap.set(stId, { shortName, correct: 0, total: 0, rate: 0 });
    }
    const st = subtestMap.get(stId)!;
    st.total++;
    if (isCorrect) st.correct++;

    // Per-category tracking (math subtests: XYZ, KVA; and DTK)
    if ((mathSubtests.has(stId) || dtkSubtests.has(stId)) && q.category) {
      const catKey = `${shortName}:${q.category}`;
      if (!categoryMap.has(catKey)) {
        categoryMap.set(catKey, { category: q.category, correct: 0, total: 0, rate: 0, subTest: shortName });
      }
      const cat = categoryMap.get(catKey)!;
      cat.total++;
      if (isCorrect) cat.correct++;
    }
  });

  // Calculate rates
  for (const st of subtestMap.values()) {
    st.rate = st.total > 0 ? st.correct / st.total : 0;
  }
  for (const cat of categoryMap.values()) {
    cat.rate = cat.total > 0 ? cat.correct / cat.total : 0;
  }

  // 2. Find weakest areas
  const weakAreas: string[] = [];
  const subtestResults = Array.from(subtestMap.values());
  const categoryResults = Array.from(categoryMap.values());

  // Sort subtests by rate (ascending = weakest first)
  const sortedSubtests = [...subtestResults].sort((a, b) => a.rate - b.rate);

  // Sort categories by rate (ascending)
  const sortedCategories = [...categoryResults]
    .filter(c => c.total >= 2) // Only consider categories with at least 2 questions
    .sort((a, b) => a.rate - b.rate);

  // Weakest subtest
  if (sortedSubtests.length > 0 && sortedSubtests[0].rate < 0.7) {
    weakAreas.push(sortedSubtests[0].shortName);
  }

  // Weakest categories
  for (const cat of sortedCategories) {
    if (cat.rate < 0.5 && weakAreas.length < 3) {
      weakAreas.push(`${cat.subTest} - ${cat.category}`);
    }
  }

  // 3. Build summary HTML
  const bestSubtest = [...subtestResults].sort((a, b) => b.rate - a.rate)[0];
  const worstSubtest = sortedSubtests[0];

  let summaryParts: string[] = [];

  if (bestSubtest) {
    summaryParts.push(`Din starkaste del var <strong>${bestSubtest.shortName}</strong> (${bestSubtest.correct}/${bestSubtest.total}).`);
  }

  if (worstSubtest && worstSubtest !== bestSubtest) {
    let worstDetail = `Du hade mest problem med <strong>${worstSubtest.shortName}</strong> (${worstSubtest.correct}/${worstSubtest.total})`;

    // Find weakest category within the worst subtest
    const worstSubCats = sortedCategories.filter(c => c.subTest === worstSubtest.shortName);
    if (worstSubCats.length > 0 && worstSubCats[0].rate < 0.5) {
      const weakCat = worstSubCats[0];
      worstDetail += `, särskilt inom <strong>${weakCat.category}</strong> (${weakCat.correct}/${weakCat.total})`;
    }
    worstDetail += '.';
    summaryParts.push(worstDetail);
  }

  // Add specific advice based on weak areas
  if (sortedCategories.length > 0 && sortedCategories[0].rate < 0.5) {
    const weakestCat = sortedCategories[0];
    summaryParts.push(`Fokusera på <strong>${weakestCat.category}</strong>-uppgifter för att höja dig!`);
  } else if (worstSubtest && worstSubtest.rate < 0.7) {
    summaryParts.push(`Träna mer på <strong>${worstSubtest.shortName}</strong> för att höja ditt resultat!`);
  } else {
    summaryParts.push('Bra jobbat! Fortsätt träna för att bli ännu bättre.');
  }

  // Build category breakdown table for math/DTK subtests
  let categoryTableHTML = '';
  const relevantCats = categoryResults.filter(c => c.total > 0);
  if (relevantCats.length > 0) {
    // Group by subtest
    const catsBySubtest = new Map<string, CategoryResult[]>();
    for (const cat of relevantCats) {
      if (!catsBySubtest.has(cat.subTest)) catsBySubtest.set(cat.subTest, []);
      catsBySubtest.get(cat.subTest)!.push(cat);
    }

    let tableRows = '';
    for (const [stName, cats] of catsBySubtest) {
      const sortedCats = cats.sort((a, b) => b.total - a.total);
      for (const cat of sortedCats) {
        const pct = Math.round(cat.rate * 100);
        const barColor = pct >= 70 ? '#22c55e' : pct >= 40 ? '#f59e0b' : '#ef4444';
        tableRows += `
          <tr>
            <td style="padding:0.35rem 0.6rem; font-size:0.88rem;">${stName}</td>
            <td style="padding:0.35rem 0.6rem; font-size:0.88rem;">${cat.category}</td>
            <td style="padding:0.35rem 0.6rem; font-size:0.88rem; text-align:center;">${cat.correct}/${cat.total}</td>
            <td style="padding:0.35rem 0.6rem; width:100px;">
              <div style="background:#f1f5f9; border-radius:4px; height:8px; overflow:hidden;">
                <div style="background:${barColor}; height:100%; width:${pct}%; border-radius:4px;"></div>
              </div>
            </td>
          </tr>`;
      }
    }

    categoryTableHTML = `
      <div style="margin-top:1rem;">
        <p style="font-weight:600; font-size:0.9rem; margin-bottom:0.5rem;">Resultat per kategori</p>
        <table style="width:100%; border-collapse:collapse;">
          <thead>
            <tr style="border-bottom:1px solid var(--color-border);">
              <th style="padding:0.35rem 0.6rem; text-align:left; font-size:0.8rem; color:var(--color-muted); font-weight:600;">Del</th>
              <th style="padding:0.35rem 0.6rem; text-align:left; font-size:0.8rem; color:var(--color-muted); font-weight:600;">Kategori</th>
              <th style="padding:0.35rem 0.6rem; text-align:center; font-size:0.8rem; color:var(--color-muted); font-weight:600;">Rätt</th>
              <th style="padding:0.35rem 0.6rem; font-size:0.8rem; color:var(--color-muted); font-weight:600;"></th>
            </tr>
          </thead>
          <tbody>${tableRows}</tbody>
        </table>
      </div>`;
  }

  const summaryHTML = `
    <div class="pq-analysis" style="background:var(--color-surface); border:1px solid var(--color-border); border-radius:var(--radius); padding:1.5rem; margin:1.5rem 0;">
      <h3 style="margin:0 0 0.8rem; font-size:1.05rem;">Analys</h3>
      <p style="line-height:1.7; margin:0 0 0.5rem;">${summaryParts.join(' ')}</p>
      ${categoryTableHTML}
    </div>`;

  return { weakAreas, summaryHTML };
}
