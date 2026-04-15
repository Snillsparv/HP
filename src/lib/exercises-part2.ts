// Part 2: Olikheter + Rörelse
import type { Category } from './exercises.js';
const T = (latex: string) => `<span class="tex">${latex}</span>`;

export const part2: Category[] = [
  {
    id: 'olikheter', name: 'Olikheter',
    exercises: [
      { q: 'Lös 2x + 1 > 7.', options: ['x > 3', 'x > 4', 'x < 3', 'x > 6'], correct: 0, explanation: 'Steg 1: Subtrahera 1: 2x > 6. Steg 2: Dela med 2: x > 3. Olikheter löses precis som ekvationer!' },
      { q: 'Lös −3x < 12.', options: ['x < −4', 'x > −4', 'x < 4', 'x > 4'], correct: 1, explanation: 'Steg 1: Dela med −3. OBS! När man delar med ett negativt tal vänds olikhetstecknet: x > −4.' },
      { q: 'Om x > 2 och y < 0, vad gäller om xy?', options: ['xy > 0', 'xy < 0', 'xy = 0', 'Kan inte avgöras'], correct: 1, explanation: 'x är positivt (> 2) och y är negativt (< 0). Positivt gånger negativt = negativt, alltså xy < 0.' },
      { q: 'Lös 5 − x > 2.', options: ['x > 3', 'x < 3', 'x > 7', 'x < 7'], correct: 1, explanation: 'Flytta x: 5 − 2 > x, alltså 3 > x, dvs x < 3.' },
      { q: 'Vilka x uppfyller −1 < 2x + 3 < 9?', options: ['−2 < x < 3', '−1 < x < 3', '0 < x < 3', '−2 < x < 6'], correct: 0, explanation: 'Lös i två steg: −1 < 2x + 3 ger 2x > −4, x > −2. Och 2x + 3 < 9 ger 2x < 6, x < 3. Alltså −2 < x < 3.' },
      { q: `Lös ${T('\\frac{x}{2} \\geq 5')}.`, options: ['x ≥ 10', 'x ≥ 2,5', 'x ≤ 10', 'x > 10'], correct: 0, explanation: 'Multiplicera båda sidor med 2: x ≥ 10. Tecknet behålls eftersom vi multiplicerar med positivt tal.' },
      { q: 'Om a > b och b > 0, vad gäller?', options: ['a > 0', 'a < 0', 'a = b', 'Kan inte avgöras'], correct: 0, explanation: 'Om b > 0 och a > b, så måste a också vara positiv (och dessutom större än b). Alltså a > 0.' },
      { q: 'Lös 3(x − 1) ≤ 2x + 4.', options: ['x ≤ 7', 'x ≤ 1', 'x ≥ 7', 'x ≤ 5'], correct: 0, explanation: 'Utveckla: 3x − 3 ≤ 2x + 4. Flytta: 3x − 2x ≤ 4 + 3. Alltså x ≤ 7.' },
      { q: 'Vad händer med olikhetstecknet om man multiplicerar med −1?', options: ['Det vänds', 'Inget', 'Det försvinner', 'Det blir ='], correct: 0, explanation: 'Kom ihåg: vid multiplikation eller division med negativt tal VÄNDS olikhetstecknet. T.ex. −x > 3 blir x < −3.' },
      { q: 'Lös x² < 9.', options: ['−3 < x < 3', 'x < 3', 'x > −3', 'x < 9'], correct: 0, explanation: 'x² < 9 betyder att x ligger mellan −3 och 3: −3 < x < 3. Tänk: vilka tal i kvadrat ger mindre än 9?' },
    ]
  },
  {
    id: 'rorelse', name: 'Rörelse (svt)',
    exercises: [
      { q: 'En bil kör 90 km/h i 2 timmar. Hur långt?', options: ['45 km', '90 km', '180 km', '360 km'], correct: 2, explanation: 'Formeln: sträcka = hastighet · tid. s = 90 · 2 = 180 km.' },
      { q: 'Du springer 400 m på 80 sekunder. Vad är hastigheten?', options: ['3 m/s', '4 m/s', '5 m/s', '6 m/s'], correct: 2, explanation: 'Hastighet = sträcka / tid = 400/80 = 5 m/s.' },
      { q: 'En cyklist cyklar 15 km/h. Hur lång tid tar 45 km?', options: ['2 h', '2,5 h', '3 h', '3,5 h'], correct: 2, explanation: 'Tid = sträcka / hastighet = 45/15 = 3 timmar.' },
      { q: 'Omvandla 72 km/h till m/s.', options: ['7,2 m/s', '20 m/s', '72 m/s', '2 m/s'], correct: 1, explanation: 'Dela med 3,6: 72/3,6 = 20 m/s. Kom ihåg: km/h till m/s = dela med 3,6.' },
      { q: 'Två bilar kör mot varandra med 60 km/h vardera. Avståndet är 240 km. När möts de?', options: ['1 h', '2 h', '3 h', '4 h'], correct: 1, explanation: 'De närmar sig varandra med 60 + 60 = 120 km/h. Tid = 240/120 = 2 h.' },
      { q: 'En person går 5 km/h i 30 minuter. Hur långt?', options: ['1,5 km', '2,5 km', '5 km', '15 km'], correct: 1, explanation: '30 minuter = 0,5 timmar. Sträcka = 5 · 0,5 = 2,5 km.' },
      { q: 'En tågresenär åker 450 km på 3 timmar. Medelhastighet?', options: ['135 km/h', '150 km/h', '180 km/h', '200 km/h'], correct: 1, explanation: 'Medelhastighet = total sträcka / total tid = 450/3 = 150 km/h.' },
      { q: 'Du cyklar 12 km/h i 45 min. Hur långt?', options: ['6 km', '8 km', '9 km', '12 km'], correct: 2, explanation: '45 min = 0,75 h. Sträcka = 12 · 0,75 = 9 km.' },
      { q: 'En löpare springer 100 m på 12,5 s. Hastighet i m/s?', options: ['6 m/s', '8 m/s', '10 m/s', '12,5 m/s'], correct: 1, explanation: 'v = 100/12,5 = 8 m/s.' },
      { q: 'Omvandla 10 m/s till km/h.', options: ['27,8 km/h', '36 km/h', '100 km/h', '3,6 km/h'], correct: 1, explanation: 'Multiplicera med 3,6: 10 · 3,6 = 36 km/h. (Omvänt mot förut: m/s till km/h = gånger 3,6.)' },
    ]
  },
];
