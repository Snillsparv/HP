// Part 3: Sannolikhet + Prioriteringsordning
import type { Category } from './exercises.js';
const T = (latex: string) => `<span class="tex">${latex}</span>`;

export const part3: Category[] = [
  {
    id: 'sannolikhet', name: 'Sannolikhet',
    exercises: [
      { q: 'Du kastar en tärning. Sannolikheten att få 6?', options: [T('\\frac{1}{3}'), T('\\frac{1}{6}'), T('\\frac{1}{2}'), T('\\frac{1}{12}')], correct: 1, explanation: `Sannolikhet = gynnsamma utfall / möjliga utfall. Det finns 1 sexa bland 6 sidor: ${T('\\frac{1}{6}')}.` },
      { q: 'I en påse finns 3 röda och 7 blå kulor. Sannolikheten att dra röd?', options: [T('\\frac{3}{7}'), T('\\frac{7}{10}'), T('\\frac{3}{10}'), T('\\frac{1}{3}')], correct: 2, explanation: `Totalt 3 + 7 = 10 kulor. Gynnsamma (röda) = 3. Sannolikhet = ${T('\\frac{3}{10}')}.` },
      { q: 'I en burk finns 4 röda, 6 blå och 2 gula kulor. Sannolikheten att dra en blå?', options: [T('\\frac{1}{2}'), T('\\frac{1}{3}'), T('\\frac{1}{4}'), T('\\frac{1}{6}')], correct: 0, explanation: `Totalt: 4 + 6 + 2 = 12 kulor. Blå: 6. Sannolikhet = ${T('\\frac{6}{12} = \\frac{1}{2}')}.` },
      { q: 'En påse innehåller 2 röda, 3 gröna och 5 vita bollar. Hur stor är sannolikheten att dra en grön boll?', options: [T('\\frac{3}{10}'), T('\\frac{3}{7}'), T('\\frac{1}{3}'), T('\\frac{2}{5}')], correct: 0, explanation: `Totalt: 2 + 3 + 5 = 10 bollar. Gröna: 3. Sannolikhet = gynnsamma / möjliga = ${T('\\frac{3}{10}')}.` },
      { q: 'Du drar ett kort ur en vanlig kortlek (52 kort). Sannolikheten för hjärter?', options: [T('\\frac{1}{4}'), T('\\frac{1}{13}'), T('\\frac{1}{52}'), T('\\frac{1}{2}')], correct: 0, explanation: `Det finns 13 hjärter av 52 kort: ${T('\\frac{13}{52} = \\frac{1}{4}')}. En fjärdedel av korten är hjärter.` },
      { q: 'I en klass med 30 elever har 12 glasögon. Hur stor är sannolikheten att en slumpmässigt vald elev har glasögon?', options: [T('\\frac{1}{3}'), T('\\frac{2}{5}'), T('\\frac{1}{2}'), T('\\frac{2}{3}')], correct: 1, explanation: `Sannolikhet = gynnsamma / möjliga = ${T('\\frac{12}{30}')}. Förenkla genom att dela med 6: ${T('\\frac{2}{5}')}.` },
      { q: 'I en klass med 20 elever är 8 flickor. Du väljer slumpmässigt 1 elev. Sannolikheten för pojke?', options: [T('\\frac{8}{20}'), T('\\frac{12}{20}'), T('\\frac{1}{2}'), T('\\frac{2}{5}')], correct: 1, explanation: `Pojkar: 20 − 8 = 12. Sannolikhet = ${T('\\frac{12}{20} = \\frac{3}{5}')}.` },
      { q: 'Du kastar en tärning. Sannolikheten för udda tal?', options: [T('\\frac{1}{3}'), T('\\frac{1}{2}'), T('\\frac{2}{3}'), T('\\frac{1}{6}')], correct: 1, explanation: `Udda tal på tärningen: 1, 3, 5 = 3 utfall av 6. ${T('\\frac{3}{6} = \\frac{1}{2}')}.` },
      { q: 'På ett lotteri finns 100 lotter varav 5 är vinstlotter. Hur stor är sannolikheten att vinna?', options: ['5%', '10%', '20%', '50%'], correct: 0, explanation: `Sannolikhet = gynnsamma / möjliga = ${T('\\frac{5}{100} = \\frac{1}{20}')} = 5%.` },
      { q: 'En tärning har 6 sidor (1–6). Hur stor är sannolikheten att slå ett tal större än 4?', options: [T('\\frac{1}{6}'), T('\\frac{1}{3}'), T('\\frac{1}{2}'), T('\\frac{2}{3}')], correct: 1, explanation: `Tal större än 4: det är 5 och 6, alltså 2 gynnsamma utfall av 6 möjliga. Sannolikhet = ${T('\\frac{2}{6} = \\frac{1}{3}')}.` },
    ]
  },
  {
    id: 'prioritering', name: 'Prioriteringsordning',
    exercises: [
      { q: 'Vad är 3 + 4 · 2?', options: ['14', '11', '10', '9'], correct: 1, explanation: 'Multiplikation går före addition! Först: 4 · 2 = 8. Sedan: 3 + 8 = 11.' },
      { q: 'Vad är (3 + 4) · 2?', options: ['11', '14', '10', '24'], correct: 1, explanation: 'Parenteser går först! (3 + 4) = 7, sedan 7 · 2 = 14.' },
      { q: 'Vad är 20 − 3 · 4 + 2?', options: ['10', '70', '8', '12'], correct: 0, explanation: 'Steg 1: Multiplikation: 3 · 4 = 12. Steg 2: Vänster till höger: 20 − 12 + 2 = 10.' },
      { q: 'Vad är 2 + 3²?', options: ['25', '11', '7', '10'], correct: 1, explanation: 'Potenser före addition! Först: 3² = 9. Sedan: 2 + 9 = 11.' },
      { q: 'Vad är 4 · (5 − 2) + 1?', options: ['13', '17', '12', '15'], correct: 0, explanation: 'Parentesen först: 5 − 2 = 3. Multiplikation: 4 · 3 = 12. Addition: 12 + 1 = 13.' },
      { q: 'Vad är 12 / 3 + 2 · 5?', options: ['14', '30', '24', '10'], correct: 0, explanation: 'Division och multiplikation har samma prioritet (vänster→höger). 12/3 = 4 och 2 · 5 = 10. Sedan: 4 + 10 = 14.' },
      { q: 'Vad är 2 · (3 + 4²)?', options: ['38', '50', '98', '14'], correct: 0, explanation: 'Inuti parentesen: potens först 4² = 16, sedan 3 + 16 = 19. Sist: 2 · 19 = 38.' },
      { q: 'Vad är 100 − 5 · 10 + 50?', options: ['100', '0', '1000', '150'], correct: 0, explanation: 'Multiplikation: 5 · 10 = 50. Sedan: 100 − 50 + 50 = 100.' },
      { q: 'Vad är −2²?', options: ['4', '−4', '0', '2'], correct: 1, explanation: 'OBS! −2² = −(2²) = −4. Det är potensen som räknas först, sedan minustecknet. Om det stod (−2)² hade svaret blivit 4.' },
      { q: 'Ordningen att räkna: 1) ___ 2) ___ 3) ___', options: ['Parenteser, potenser, ·÷ sedan +−', 'Potenser, parenteser, +−·÷', '+−, ·÷, potenser', 'Vänster till höger alltid'], correct: 0, explanation: 'Prioriteringsordningen: 1) Parenteser 2) Potenser 3) Multiplikation/Division 4) Addition/Subtraktion. Inom samma nivå: vänster till höger.' },
    ]
  },
];
