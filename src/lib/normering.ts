// Normering tables from HT 2021 (2021-10-24)
// Maps minimum raw score (out of 80) to normered score

const KVANT_TABLE: [number, number][] = [
  [0, 0.0], [18, 0.1], [20, 0.2], [22, 0.3], [24, 0.4],
  [26, 0.5], [29, 0.6], [32, 0.7], [36, 0.8], [40, 0.9],
  [44, 1.0], [47, 1.1], [51, 1.2], [55, 1.3], [58, 1.4],
  [61, 1.5], [65, 1.6], [68, 1.7], [71, 1.8], [73, 1.9],
  [75, 2.0],
];

// Kvant 2 was harder (avg 19.2/40 vs 21.6/40 = ~5 points harder on 80-scale)
// Lower all thresholds by 5 to compensate
const KVANT2_TABLE: [number, number][] = [
  [0, 0.0], [13, 0.1], [15, 0.2], [17, 0.3], [19, 0.4],
  [21, 0.5], [24, 0.6], [27, 0.7], [31, 0.8], [35, 0.9],
  [39, 1.0], [42, 1.1], [46, 1.2], [50, 1.3], [53, 1.4],
  [56, 1.5], [60, 1.6], [63, 1.7], [66, 1.8], [68, 1.9],
  [70, 2.0],
];

const VERBAL_TABLE: [number, number][] = [
  [0, 0.0], [20, 0.1], [23, 0.2], [25, 0.3], [29, 0.4],
  [32, 0.5], [35, 0.6], [39, 0.7], [42, 0.8], [46, 0.9],
  [49, 1.0], [53, 1.1], [56, 1.2], [59, 1.3], [62, 1.4],
  [65, 1.5], [68, 1.6], [71, 1.7], [73, 1.8], [75, 1.9],
  [77, 2.0],
];

// Verbal 2 was harder (avg 10.6/30 vs 14.0/30 = ~9 points harder on 80-scale)
// Lower all thresholds by 9 to compensate
const VERBAL2_TABLE: [number, number][] = [
  [0, 0.0], [11, 0.1], [14, 0.2], [16, 0.3], [20, 0.4],
  [23, 0.5], [26, 0.6], [30, 0.7], [33, 0.8], [37, 0.9],
  [40, 1.0], [44, 1.1], [47, 1.2], [50, 1.3], [53, 1.4],
  [56, 1.5], [59, 1.6], [62, 1.7], [64, 1.8], [66, 1.9],
  [68, 2.0],
];

// Full test = 80 questions per del (kvant or verbal)
// Our kvant tests have 40 questions (half of full 80)
// Our verbal tests have 30 questions (ORD+LÄS+MEK but no ELF, i.e. 30 out of 60 scored verbal questions)
// To estimate normering we scale up to the full 80-question equivalent

export function getNormering(score: number, total: number, type: 'kvant' | 'verbal', isTest2: boolean = false): number {
  const fullTotal = 80;
  const scaled = Math.round(score * fullTotal / total);

  let table: [number, number][];
  if (type === 'kvant') {
    table = isTest2 ? KVANT2_TABLE : KVANT_TABLE;
  } else {
    table = isTest2 ? VERBAL2_TABLE : VERBAL_TABLE;
  }

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
