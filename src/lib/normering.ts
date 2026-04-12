// Normering tables from HT 2021 (2021-10-24)
// Maps minimum raw score (out of 80) to normered score

const KVANT_TABLE: [number, number][] = [
  [0, 0.0], [18, 0.1], [20, 0.2], [22, 0.3], [24, 0.4],
  [26, 0.5], [29, 0.6], [32, 0.7], [36, 0.8], [40, 0.9],
  [44, 1.0], [47, 1.1], [51, 1.2], [55, 1.3], [58, 1.4],
  [61, 1.5], [65, 1.6], [68, 1.7], [71, 1.8], [73, 1.9],
  [75, 2.0],
];

const VERBAL_TABLE: [number, number][] = [
  [0, 0.0], [20, 0.1], [23, 0.2], [25, 0.3], [29, 0.4],
  [32, 0.5], [35, 0.6], [39, 0.7], [42, 0.8], [46, 0.9],
  [49, 1.0], [53, 1.1], [56, 1.2], [59, 1.3], [62, 1.4],
  [65, 1.5], [68, 1.6], [71, 1.7], [73, 1.8], [75, 1.9],
  [77, 2.0],
];

// Full test = 80 questions per del (kvant or verbal)
// Our kvant tests have 40 questions (half of full 80)
// Our verbal tests have 30 questions (ORD+LÄS+MEK but no ELF, i.e. 30 out of 60 scored verbal questions)
// To estimate normering we scale up to the full 80-question equivalent

export function getNormering(score: number, total: number, type: 'kvant' | 'verbal'): number {
  // For verbal without ELF: the 30 questions represent 3/4 of the verbal part (60 of 80).
  // We scale to 80 by assuming proportional performance on ELF.
  const fullTotal = 80;
  const scaled = Math.round(score * fullTotal / total);
  const table = type === 'kvant' ? KVANT_TABLE : VERBAL_TABLE;

  let result = 0.0;
  for (const [minScore, normered] of table) {
    if (scaled >= minScore) {
      result = normered;
    } else {
      break;
    }
  }
  return result;
}
