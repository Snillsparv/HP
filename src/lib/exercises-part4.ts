// Part 4: Heltal + Funktioner + Huvudräkning
import type { Category } from './exercises.js';
const T = (latex: string) => `<span class="tex">${latex}</span>`;

export const part4: Category[] = [
  {
    id: 'heltal', name: 'Heltal & negativa tal',
    exercises: [
      { q: 'Vad är (−3) · (−4)?', options: ['−12', '12', '−7', '7'], correct: 1, explanation: 'Minus gånger minus = plus. (−3) · (−4) = 12. Tänk: "negativ gånger negativ ger positivt".' },
      { q: 'Vad är −5 − (−3)?', options: ['−8', '−2', '2', '8'], correct: 1, explanation: 'Minus minus = plus! −5 − (−3) = −5 + 3 = −2. Tänk att du tar bort en skuld.' },
      { q: 'Vilket tal är jämnt: 17, 24, 31, 43?', options: ['17', '24', '31', '43'], correct: 1, explanation: 'Jämna tal är delbara med 2 (slutar på 0, 2, 4, 6 eller 8). 24 slutar på 4, så det är jämnt.' },
      { q: 'Vad är |−7|?', options: ['−7', '7', '0', '1/7'], correct: 1, explanation: 'Absolutbeloppet |x| ger alltid ett positivt tal (eller 0). Det är avståndet till 0 på tallinjen. |−7| = 7.' },
      { q: 'Vad är (−2)³?', options: ['8', '−8', '6', '−6'], correct: 1, explanation: '(−2)³ = (−2) · (−2) · (−2). Först: (−2) · (−2) = 4. Sedan: 4 · (−2) = −8. Udda exponent → negativt resultat.' },
      { q: 'Ordna från minst till störst: −3, 1, −7, 4, 0', options: ['−7, −3, 0, 1, 4', '−3, −7, 0, 1, 4', '0, 1, −3, 4, −7', '4, 1, 0, −3, −7'], correct: 0, explanation: 'På tallinjen: ju längre till vänster, desto mindre. −7 < −3 < 0 < 1 < 4.' },
      { q: 'Vad är −10 / (−2)?', options: ['−5', '5', '−20', '20'], correct: 1, explanation: 'Minus delat med minus = plus. −10 / (−2) = 5.' },
      { q: 'Är −4 ett heltal?', options: ['Ja', 'Nej'], correct: 0, explanation: 'Ja! Heltal inkluderar positiva, negativa och noll: ..., −2, −1, 0, 1, 2, ... Alla utan decimaler.' },
      { q: 'Vad är summan av alla heltal från −3 till 3?', options: ['0', '3', '6', '−3'], correct: 0, explanation: '−3 + (−2) + (−1) + 0 + 1 + 2 + 3 = 0. De negativa och positiva tar ut varandra!' },
      { q: 'Vad är (−1)¹⁰⁰?', options: ['1', '−1', '100', '−100'], correct: 0, explanation: '(−1) upphöjt i ett jämnt tal ger alltid 1. (−1)¹⁰⁰ = 1. Hade det varit (−1)¹⁰¹ hade svaret blivit −1.' },
    ]
  },
  {
    id: 'funktioner', name: 'Funktioner',
    exercises: [
      { q: 'f(x) = 2x + 3. Vad är f(4)?', options: ['8', '11', '14', '7'], correct: 1, explanation: 'Sätt in x = 4: f(4) = 2 · 4 + 3 = 8 + 3 = 11. Funktionsvärdet beräknas genom att ersätta x med det givna talet.' },
      { q: 'En linje har k = 3 och m = −1. Vilken punkt ligger på linjen?', options: ['(0, −1)', '(0, 3)', '(1, 1)', '(−1, 0)'], correct: 0, explanation: 'Linjen: y = 3x − 1. Vid x = 0: y = 3 · 0 − 1 = −1. Alltså (0, −1). m-värdet är alltid y-värdet där linjen skär y-axeln!' },
      { q: 'Var skär y = 2x − 4 x-axeln?', options: ['x = −2', 'x = 2', 'x = 4', 'x = −4'], correct: 1, explanation: 'X-axeln har y = 0. Sätt in: 0 = 2x − 4. Lös: 2x = 4, x = 2.' },
      { q: 'Vad är lutningen (k) för linjen y = −3x + 7?', options: ['7', '−3', '3', '−7'], correct: 1, explanation: 'I y = kx + m är k lutningen och m skärningspunkten med y-axeln. Här: k = −3 (negativt = linjen lutar nedåt).' },
      { q: 'f(x) = x² − 1. Vad är f(−3)?', options: ['8', '−10', '10', '−8'], correct: 0, explanation: 'f(−3) = (−3)² − 1 = 9 − 1 = 8. Kom ihåg: (−3)² = 9 (minus gånger minus = plus).' },
      { q: 'Två linjer: y = 2x + 1 och y = −x + 7. Var skär de?', options: ['(2, 5)', '(3, 4)', '(1, 3)', '(4, 3)'], correct: 0, explanation: 'Sätt lika: 2x + 1 = −x + 7. Lös: 3x = 6, x = 2. Sätt in: y = 2 · 2 + 1 = 5. Skärpunkt: (2, 5).' },
      { q: 'En linje går genom (0, 2) och (3, 8). Vad är k?', options: ['2', '3', '6', '10'], correct: 0, explanation: `k = förändring i y / förändring i x = ${T('\\frac{8-2}{3-0} = \\frac{6}{3} = 2')}.` },
      { q: 'Om f(x) = 5x, vad är f(a + 1)?', options: ['5a + 1', '5a + 5', '5a', '6a'], correct: 1, explanation: 'Ersätt x med (a + 1): f(a + 1) = 5(a + 1) = 5a + 5.' },
      { q: 'Vilken linje är parallell med y = 4x − 2?', options: ['y = 4x + 5', 'y = −4x + 5', 'y = 2x − 4', 'y = x + 4'], correct: 0, explanation: 'Parallella linjer har samma lutning (k-värde). y = 4x − 2 har k = 4. Bara y = 4x + 5 har också k = 4.' },
      { q: 'Var skär y = 3x + 6 y-axeln?', options: ['(0, 6)', '(0, 3)', '(6, 0)', '(−2, 0)'], correct: 0, explanation: 'Y-axeln skärs där x = 0: y = 3 · 0 + 6 = 6. Punkten är (0, 6). m-värdet (6) ger alltid y-axelskärningen!' },
    ]
  },
  {
    id: 'huvudrakning', name: 'Huvudräkning & uppskattning',
    exercises: [
      { q: 'Uppskatta 498 · 21.', options: ['Ca 5 000', 'Ca 10 000', 'Ca 15 000', 'Ca 20 000'], correct: 1, explanation: 'Avrunda: 498 ≈ 500 och 21 ≈ 20. 500 · 20 = 10 000. Det exakta svaret (10 458) ligger nära.' },
      { q: `Förenkla bråket ${T('\\frac{24}{36}')}.`, options: [T('\\frac{2}{3}'), T('\\frac{4}{6}'), T('\\frac{3}{4}'), T('\\frac{12}{18}')], correct: 0, explanation: `Hitta den största gemensamma delaren. Både 24 och 36 delas med 12: ${T('\\frac{24 \\div 12}{36 \\div 12} = \\frac{2}{3}')}.` },
      { q: `Vad är ungefär ${T('\\sqrt{90}')}?`, options: ['Ca 8', 'Ca 9', 'Ca 9,5', 'Ca 10'], correct: 2, explanation: `Tänk: ${T('9^2 = 81')} och ${T('10^2 = 100')}. 90 ligger nära mitten, lite närmare 81. Alltså ≈ 9,5.` },
      { q: `Förläng ${T('\\frac{3}{5}')} till tjugondelar.`, options: [T('\\frac{12}{20}'), T('\\frac{6}{20}'), T('\\frac{15}{20}'), T('\\frac{9}{20}')], correct: 0, explanation: `5 · 4 = 20, så multiplicera även täljaren med 4: 3 · 4 = 12. Alltså ${T('\\frac{12}{20}')}.` },
      { q: 'Uppskatta 7,8 · 4,2.', options: ['Ca 24', 'Ca 32', 'Ca 36', 'Ca 40'], correct: 1, explanation: 'Avrunda: 8 · 4 = 32. Det exakta svaret är 32,76 — nära!' },
      { q: 'Vad är 25% av 480 i huvudet?', options: ['96', '120', '144', '240'], correct: 1, explanation: '25% = en fjärdedel. 480 / 4 = 120. Snabbt och enkelt!' },
      { q: `Uppskatta ${T('\\frac{198}{4}')}.`, options: ['Ca 40', 'Ca 50', 'Ca 60', 'Ca 70'], correct: 1, explanation: '198 ≈ 200. 200/4 = 50. Exakt: 49,5.' },
      { q: 'Vad är 15 · 12 i huvudet?', options: ['150', '170', '180', '200'], correct: 2, explanation: 'Trick: 15 · 12 = 15 · 10 + 15 · 2 = 150 + 30 = 180. Dela upp i enklare delar!' },
      { q: 'Uppskatta 0,48 · 200.', options: ['Ca 50', 'Ca 100', 'Ca 150', 'Ca 200'], correct: 1, explanation: '0,48 ≈ 0,5 = hälften. Hälften av 200 = 100. Exakt: 96.' },
      { q: `Är ${T('\\frac{5}{8}')} mer eller mindre än ${T('\\frac{2}{3}')}?`, options: ['Mindre', 'Mer', 'Lika', 'Kan inte avgöras'], correct: 0, explanation: `Gemensam nämnare 24: ${T('\\frac{5}{8} = \\frac{15}{24}')} och ${T('\\frac{2}{3} = \\frac{16}{24}')}. 15 < 16, alltså ${T('\\frac{5}{8} < \\frac{2}{3}')}.` },
    ]
  },
];
