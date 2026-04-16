// Exercise data for /ovningsuppgifter
// Each category has 10 exercises with pedagogical explanations

const T = (latex: string) => `<span class="tex">${latex}</span>`;

export interface Exercise {
  q: string;
  options: string[];
  correct: number;
  explanation: string;
}

export interface Category {
  id: string;
  name: string;
  exercises: Exercise[];
}

export const categories: Category[] = [
  {
    id: 'brak', name: 'Bråk',
    exercises: [
      { q: `Vad är ${T('\\frac{1}{3} + \\frac{1}{6}')} ?`, options: [T('\\frac{1}{2}'), T('\\frac{2}{9}'), T('\\frac{1}{9}'), T('\\frac{2}{6}')], correct: 0, explanation: `Tänk så här: för att addera bråk behöver de ha samma nämnare. ${T('\\frac{1}{3} = \\frac{2}{6}')}, så vi får ${T('\\frac{2}{6} + \\frac{1}{6} = \\frac{3}{6} = \\frac{1}{2}')}.` },
      { q: `Vad är ${T('\\frac{2}{5} \\cdot \\frac{3}{4}')} ?`, options: [T('\\frac{5}{9}'), T('\\frac{6}{9}'), T('\\frac{3}{10}'), T('\\frac{2}{3}')], correct: 2, explanation: `Vid multiplikation av bråk multiplicerar vi täljare med täljare och nämnare med nämnare: ${T('\\frac{2 \\cdot 3}{5 \\cdot 4} = \\frac{6}{20}')}. Förenkla genom att dela båda med 2: ${T('\\frac{3}{10}')}.` },
      { q: `Vad är ${T('\\frac{3}{4} \\div \\frac{1}{2}')} ?`, options: [T('\\frac{3}{8}'), T('\\frac{3}{2}'), T('\\frac{1}{4}'), T('\\frac{1}{2}')], correct: 1, explanation: `Kom ihåg: division med ett bråk är samma sak som multiplikation med det omvända bråket. Vänd alltså ${T('\\frac{1}{2}')} till ${T('\\frac{2}{1}')} och multiplicera: ${T('\\frac{3}{4} \\cdot \\frac{2}{1} = \\frac{6}{4} = \\frac{3}{2}')}.` },
      { q: `Förenkla ${T('\\frac{0{,}6}{0{,}3}')}.`, options: ['0,2', '2', '0,5', '3'], correct: 1, explanation: `Tricket här är att multiplicera täljare och nämnare med 10 för att bli av med decimalerna: ${T('\\frac{0{,}6}{0{,}3} = \\frac{6}{3} = 2')}.` },
      { q: `Vad är ${T('\\frac{5}{8} - \\frac{1}{4}')} ?`, options: [T('\\frac{4}{4}'), T('\\frac{3}{8}'), T('\\frac{1}{2}'), T('\\frac{4}{8}')], correct: 1, explanation: `Steg 1: Gör om så att båda bråken har samma nämnare. ${T('\\frac{1}{4} = \\frac{2}{8}')}. Steg 2: Subtrahera täljarna: ${T('\\frac{5}{8} - \\frac{2}{8} = \\frac{3}{8}')}.` },
      { q: `Vad är ${T('\\frac{2}{3} + \\frac{3}{5}')} ?`, options: [T('\\frac{5}{8}'), T('\\frac{19}{15}'), T('\\frac{6}{15}'), T('\\frac{5}{15}')], correct: 1, explanation: `Minsta gemensamma nämnare för 3 och 5 är 15. ${T('\\frac{2}{3} = \\frac{10}{15}')} och ${T('\\frac{3}{5} = \\frac{9}{15}')}. Summan blir ${T('\\frac{10+9}{15} = \\frac{19}{15}')}.` },
      { q: `Förenkla ${T('\\frac{12}{18}')}.`, options: [T('\\frac{2}{3}'), T('\\frac{3}{4}'), T('\\frac{4}{6}'), T('\\frac{6}{9}')], correct: 0, explanation: `Hitta den största gemensamma delaren (SGD). Både 12 och 18 är delbara med 6: ${T('\\frac{12 \\div 6}{18 \\div 6} = \\frac{2}{3}')}.` },
      { q: `Vad är ${T('\\frac{7}{10} \\cdot \\frac{2}{3}')} ?`, options: [T('\\frac{14}{30}'), T('\\frac{9}{13}'), T('\\frac{7}{15}'), T('\\frac{14}{13}')], correct: 2, explanation: `Multiplicera rakt av: ${T('\\frac{7 \\cdot 2}{10 \\cdot 3} = \\frac{14}{30}')}. Förenkla genom att dela med 2: ${T('\\frac{7}{15}')}.` },
      { q: `Vad är ${T('\\frac{1}{2} + \\frac{1}{3} + \\frac{1}{6}')} ?`, options: ['1', T('\\frac{3}{6}'), T('\\frac{5}{6}'), T('\\frac{3}{11}')], correct: 0, explanation: `Gemensam nämnare är 6: ${T('\\frac{3}{6} + \\frac{2}{6} + \\frac{1}{6} = \\frac{6}{6} = 1')}. Det blir precis 1!` },
      { q: `Vad är ${T('5 \\div \\frac{1}{3}')} ?`, options: ['15', T('\\frac{5}{3}'), T('\\frac{1}{15}'), T('\\frac{3}{5}')], correct: 0, explanation: `Tänk så här: "Hur många tredjedelar ryms i 5?" Räkna: ${T('5 \\div \\frac{1}{3} = 5 \\cdot \\frac{3}{1} = 15')}. Det ryms 15 tredjedelar i 5.` },
    ]
  },
  {
    id: 'procent', name: 'Procent',
    exercises: [
      { q: 'Vad är 15% av 200?', options: ['25', '30', '35', '40'], correct: 1, explanation: 'Tänk så här: 15% betyder 15 hundradelar, alltså 0,15. Multiplicera: 0,15 · 200 = 30. Ett snabbt sätt: 10% av 200 = 20, 5% = 10, alltså 15% = 30.' },
      { q: 'En vara kostar 400 kr och sänks med 20%. Vad kostar den nu?', options: ['300 kr', '320 kr', '350 kr', '380 kr'], correct: 1, explanation: 'Steg 1: Räkna ut rabatten: 20% av 400 = 0,20 · 400 = 80 kr. Steg 2: Dra av: 400 − 80 = 320 kr. Eller snabbare: 400 · 0,80 = 320 kr (förändringsfaktorn för −20% är 0,80).' },
      { q: 'Andelen kvinnor ökade från 40% till 48%. Hur många procentenheter är ökningen?', options: ['8 procentenheter', '20%', '8%', '20 procentenheter'], correct: 0, explanation: 'Viktigt att skilja på procent och procentenheter! Skillnaden 48 − 40 = 8 <b>procentenheter</b>. Den procentuella ökningen däremot är (8/40) · 100 = 20%. På HP testas denna skillnad ofta!' },
      { q: 'En aktie går upp 50% och sedan ner 50%. Var är den nu jämfört med start?', options: ['Samma', 'Lägre', 'Högre', 'Beror på startpriset'], correct: 1, explanation: 'Många gissar "samma" men det stämmer inte! Tänk: 100 kr → +50% → 150 kr → −50% → 75 kr. Du har förlorat 25%. Tricket: procentuella förändringar utgår alltid från det <b>aktuella</b> värdet, inte det ursprungliga.' },
      { q: 'Vad är förändringsfaktorn för en ökning med 12%?', options: ['0,12', '1,12', '0,88', '12'], correct: 1, explanation: 'Förändringsfaktorn = 1 + andelen som decimal. 12% = 0,12, alltså 1 + 0,12 = 1,12. Vid minskning subtraherar du istället: −12% ger faktorn 0,88.' },
      { q: 'En befolkning ökar från 50 000 till 60 000. Hur stor är den procentuella ökningen?', options: ['10%', '15%', '20%', '25%'], correct: 2, explanation: 'Steg 1: Räkna ökningen: 60 000 − 50 000 = 10 000. Steg 2: Dela med ursprungsvärdet: 10 000/50 000 = 0,20 = 20%.' },
      { q: 'En vara höjs med 25% och kostar sedan 500 kr. Vad var originalpriset?', options: ['375 kr', '400 kr', '425 kr', '450 kr'], correct: 1, explanation: 'Tänk baklänges! Om priset höjdes 25% är förändringsfaktorn 1,25. Originalpriset · 1,25 = 500. Alltså: 500 / 1,25 = 400 kr.' },
      { q: 'Hur mycket är 200% av 45?', options: ['45', '90', '135', '225'], correct: 1, explanation: '200% = 2,00. Alltså 2 · 45 = 90. Kom ihåg: 100% = hela talet, 200% = dubbla.' },
      { q: 'Du köper en bok för 150 kr. Momsen är 6%. Hur mycket är momsen?', options: ['6 kr', '9 kr', '12 kr', '15 kr'], correct: 1, explanation: '6% av 150 = 0,06 · 150 = 9 kr. Snabbt sätt: 1% av 150 = 1,50, alltså 6% = 6 · 1,50 = 9 kr.' },
      { q: 'En butik ger 30% rabatt. Du betalar 350 kr. Vad var ordinarie pris?', options: ['455 kr', '500 kr', '525 kr', '550 kr'], correct: 1, explanation: 'Du betalade 70% av priset (100% − 30% = 70%). Alltså: pris · 0,70 = 350. Pris = 350 / 0,70 = 500 kr.' },
    ]
  },
  {
    id: 'ekvationer', name: 'Ekvationer',
    exercises: [
      { q: 'Lös 3x + 7 = 22.', options: ['x = 3', 'x = 5', 'x = 7', 'x = 15'], correct: 1, explanation: 'Steg 1: Flytta 7 till höger sida (byt tecken): 3x = 22 − 7 = 15. Steg 2: Dela båda sidor med 3: x = 15/3 = 5.' },
      { q: 'Förenkla 2(3x − 4) + x.', options: ['7x − 8', '6x − 4', '7x − 4', '5x − 8'], correct: 0, explanation: 'Steg 1: Multiplicera in 2 i parentesen: 2 · 3x = 6x och 2 · (−4) = −8, alltså 6x − 8. Steg 2: Lägg till x: 6x − 8 + x = 7x − 8.' },
      { q: `Lös ${T('\\frac{x}{4} = 3')}.`, options: ['x = 7', 'x = 12', 'x = 3/4', 'x = 0,75'], correct: 1, explanation: `Multiplicera båda sidor med 4 för att "befria" x: ${T('x = 3 \\cdot 4 = 12')}. Kontroll: 12/4 = 3 ✓` },
      { q: 'Lös 5x − 3 = 2x + 9.', options: ['x = 2', 'x = 3', 'x = 4', 'x = 6'], correct: 2, explanation: 'Steg 1: Samla x-termerna på vänster sida: 5x − 2x = 3x. Steg 2: Samla talen på höger sida: 9 + 3 = 12. Steg 3: 3x = 12, x = 4.' },
      { q: 'Vad är x om 2(x + 3) = x + 10?', options: ['x = 4', 'x = 7', 'x = 3', 'x = 5'], correct: 0, explanation: 'Steg 1: Multiplicera in parentesen: 2x + 6 = x + 10. Steg 2: Flytta x till vänster: 2x − x = x. Steg 3: Flytta 6 till höger: 10 − 6 = 4. Alltså x = 4.' },
      { q: `Förenkla ${T('4(2x + 3)')}.`, options: [T('8x + 3'), T('8x + 12'), T('6x + 7'), T('8x + 7')], correct: 1, explanation: `Multiplicera in 4 i parentesen: ${T('4 \\cdot 2x = 8x')} och ${T('4 \\cdot 3 = 12')}. Alltså ${T('8x + 12')}.` },
      { q: `Vad är x om ${T('\\frac{2x+1}{3} = 5')} ?`, options: ['x = 7', 'x = 8', 'x = 6', 'x = 14'], correct: 0, explanation: `Steg 1: Multiplicera båda sidor med 3: 2x + 1 = 15. Steg 2: Subtrahera 1: 2x = 14. Steg 3: Dela med 2: x = 7.` },
      { q: 'Lös 4(x − 2) = 3(x + 1).', options: ['x = 11', 'x = 5', 'x = 7', 'x = 9'], correct: 0, explanation: 'Steg 1: Utveckla: 4x − 8 = 3x + 3. Steg 2: Flytta x-termer till vänster: 4x − 3x = x. Steg 3: Flytta tal till höger: 3 + 8 = 11. Alltså x = 11.' },
      { q: 'Förenkla 3(2x + 1) − 2(x − 4).', options: ['4x + 11', '4x − 3', '8x + 11', '4x + 7'], correct: 0, explanation: 'Steg 1: 3 · 2x + 3 · 1 = 6x + 3. Steg 2: −2 · x + (−2)(−4) = −2x + 8. Var noga med tecknet! Steg 3: Kombinera: 6x − 2x + 3 + 8 = 4x + 11.' },
      { q: 'Om 3x + 2y = 16 och y = 2, vad är x?', options: ['x = 2', 'x = 4', 'x = 6', 'x = 8'], correct: 1, explanation: 'Sätt in y = 2: 3x + 2 · 2 = 16, alltså 3x + 4 = 16. Flytta 4: 3x = 12. Dela med 3: x = 4.' },
    ]
  },
  {
    id: 'lagesmatt', name: 'Lägesmått (median, medelvärde)',
    exercises: [
      { q: 'Vad är medelvärdet av 3, 7, 8, 10, 12?', options: ['7', '8', '9', '10'], correct: 1, explanation: 'Medelvärdet = summan delat med antal. Summa: 3+7+8+10+12 = 40. Antal: 5. Medelvärde: 40/5 = 8.' },
      { q: 'Vad är medianen av 4, 1, 9, 3, 7?', options: ['3', '4', '5', '7'], correct: 1, explanation: 'Steg 1: Sortera talen i storleksordning: 1, 3, 4, 7, 9. Steg 2: Medianen är det mittersta talet. Med 5 tal är det det tredje: 4.' },
      { q: 'Medelvärdet av 5 tal är 12. Vad är summan av talen?', options: ['50', '60', '70', '24'], correct: 1, explanation: 'Medelvärde = summa / antal. Omvänt: summa = medelvärde · antal = 12 · 5 = 60.' },
      { q: 'Vad är medianen av 2, 5, 8, 11?', options: ['5', '6,5', '7', '8'], correct: 1, explanation: 'Med ett jämnt antal tal (4 st) tar man medelvärdet av de två mittersta: (5 + 8) / 2 = 6,5.' },
      { q: 'Medelvärdet av 4, 6, x är 10. Vad är x?', options: ['15', '18', '20', '24'], correct: 2, explanation: 'Summan måste bli 10 · 3 = 30. Vi har 4 + 6 = 10. Alltså x = 30 − 10 = 20.' },
      { q: 'Vilket lägesmått påverkas mest av extremvärden?', options: ['Medianen', 'Medelvärdet', 'Typvärdet', 'Inget av dem'], correct: 1, explanation: 'Medelvärdet påverkas mest av extremvärden. Exempel: 1, 2, 3, 4, 100 har medelvärde 22 men median 3. Medianen är robust mot extremvärden.' },
      { q: 'Talen 5, 5, 8, 10, 12 har medianen:', options: ['5', '7', '8', '10'], correct: 2, explanation: 'Talen är redan sorterade. Med 5 tal är medianen det tredje: 8.' },
      { q: 'Medelvärdet av 10, 20, 30 är 20. Om vi lägger till 40, vad blir nya medelvärdet?', options: ['22,5', '25', '27,5', '30'], correct: 1, explanation: 'Ny summa: 10 + 20 + 30 + 40 = 100. Nytt antal: 4. Nytt medelvärde: 100/4 = 25.' },
      { q: 'Vad är medianen av 2, 8, 4, 6, 1, 9?', options: ['4', '5', '6', '7'], correct: 1, explanation: 'Sortera talen: 1, 2, 4, 6, 8, 9. Jämnt antal (6 st) → ta medelvärdet av de två mittersta: (4 + 6) / 2 = 5.' },
      { q: 'Kan medianen och medelvärdet vara samma tal?', options: ['Ja, alltid', 'Ja, ibland', 'Nej, aldrig', 'Bara med jämnt antal tal'], correct: 1, explanation: 'Ja, ibland! Exempel: 1, 3, 5 har medelvärde (1+3+5)/3 = 3 och median 3. Men det gäller inte alltid.' },
    ]
  },
  {
    id: 'geometri', name: 'Geometri',
    exercises: [
      { q: 'Två linjer skär varandra. En vinkel är 65°. Hur stor är den motstående vinkeln?', options: ['25°', '65°', '115°', '90°'], correct: 1, explanation: 'Motstående (vertikala) vinklar är alltid lika stora. Om en vinkel är 65° är den motstående också 65°. De intilliggande vinklarna blir 180° − 65° = 115°.' },
      { q: `Vad är arean av en cirkel med radie 3?`, options: [T('6\\pi'), T('9\\pi'), T('3\\pi'), T('12\\pi')], correct: 1, explanation: `Formeln för cirkelns area: ${T('A = \\pi r^2')}. Sätt in r = 3: ${T('A = \\pi \\cdot 3^2 = 9\\pi')}.` },
      { q: 'En rektangel har sidorna 5 cm och 8 cm. Vad är arean?', options: ['13 cm²', '26 cm²', '40 cm²', '80 cm²'], correct: 2, explanation: 'Rektangelns area = bas · höjd = 5 · 8 = 40 cm². Förväxla inte med omkretsen som är 2 · (5+8) = 26 cm.' },
      { q: 'Vinkelsumman i en triangel är?', options: ['90°', '180°', '270°', '360°'], correct: 1, explanation: 'Vinklarna i en triangel summerar alltid till exakt 180°. I en fyrsidig figur (fyrhörning) är summan 360°.' },
      { q: `En cylinder har radie 2 och höjd 5. Vad är volymen?`, options: [T('10\\pi'), T('20\\pi'), T('25\\pi'), T('40\\pi')], correct: 1, explanation: `Cylinderns volym = ${T('\\pi r^2 h = \\pi \\cdot 2^2 \\cdot 5 = \\pi \\cdot 4 \\cdot 5 = 20\\pi')}.` },
      { q: `Vad är omkretsen av en cirkel med diameter 10?`, options: [T('5\\pi'), T('10\\pi'), T('20\\pi'), T('100\\pi')], correct: 1, explanation: `Omkrets = ${T('\\pi \\cdot d = \\pi \\cdot 10 = 10\\pi')}. Alternativt: ${T('2\\pi r = 2\\pi \\cdot 5 = 10\\pi')}.` },
      { q: 'En triangel har basen 6 och höjden 4. Vad är arean?', options: ['10', '12', '24', '48'], correct: 1, explanation: `Triangelns area = ${T('\\frac{bas \\cdot höjd}{2} = \\frac{6 \\cdot 4}{2} = \\frac{24}{2} = 12')}.` },
      { q: 'En rätvinklig triangel har kateter 3 och 4. Hur lång är hypotenusan?', options: ['5', '6', '7', T('\\sqrt{7}')], correct: 0, explanation: `Pythagoras sats: ${T('c^2 = a^2 + b^2 = 3^2 + 4^2 = 9 + 16 = 25')}. Alltså ${T('c = \\sqrt{25} = 5')}. Tips: 3-4-5 är den vanligaste pythagorastrippeln!` },
      { q: 'En rätvinklig triangel har hypotenusan 13 och en katet 5. Den andra kateten?', options: ['8', '10', '12', T('\\sqrt{144}')], correct: 2, explanation: `Använd Pythagoras "baklänges": ${T('b^2 = c^2 - a^2 = 13^2 - 5^2 = 169 - 25 = 144')}. Alltså ${T('b = \\sqrt{144} = 12')}. 5-12-13 är en annan vanlig trippel!` },
      { q: 'En stege lutar mot en vägg. Stegen är 5 m och foten står 3 m från väggen. Hur högt når stegen?', options: ['2 m', '3 m', '4 m', T('\\sqrt{34}')+' m'], correct: 2, explanation: `Stegen, väggen och marken bildar en rätvinklig triangel. ${T('h^2 = 5^2 - 3^2 = 25 - 9 = 16')}, alltså ${T('h = 4')} m.` },
    ]
  },
  {
    id: 'trianglar', name: 'Trianglar & Pythagoras',
    exercises: [
      { q: 'En rätvinklig triangel har kateter 3 och 4. Hur lång är hypotenusan?', options: ['5', '6', '7', T('\\sqrt{7}')], correct: 0, explanation: `Pythagoras sats: ${T('c^2 = a^2 + b^2 = 3^2 + 4^2 = 9 + 16 = 25')}. Alltså ${T('c = \\sqrt{25} = 5')}. Tips: 3-4-5 är den vanligaste pythagorastrippeln!` },
      { q: 'En rätvinklig triangel har hypotenusan 13 och en katet 5. Den andra kateten?', options: ['8', '10', '12', T('\\sqrt{144}')], correct: 2, explanation: `Använd Pythagoras "baklänges": ${T('b^2 = c^2 - a^2 = 13^2 - 5^2 = 169 - 25 = 144')}. Alltså ${T('b = \\sqrt{144} = 12')}. 5-12-13 är en annan vanlig trippel!` },
      { q: `En rätvinklig triangel har kateterna 9 och 12. Hur lång är hypotenusan?`, options: ['15', '21', T('\\sqrt{200}'), '18'], correct: 0, explanation: `${T('c^2 = 9^2 + 12^2 = 81 + 144 = 225')}, alltså ${T('c = \\sqrt{225} = 15')}. 9-12-15 är trippeln 3-4-5 multiplicerad med 3.` },
      { q: `Vad är hypotenusan i en rätvinklig triangel med kateter 6 och 8?`, options: ['10', '12', '14', T('\\sqrt{100}')], correct: 0, explanation: `${T('c^2 = 6^2 + 8^2 = 36 + 64 = 100')}, alltså ${T('c = 10')}. 6-8-10 är dubbla 3-4-5-trippeln.` },
      { q: 'En stege lutar mot en vägg. Stegen är 5 m och foten står 3 m från väggen. Hur högt når stegen?', options: ['2 m', '3 m', '4 m', T('\\sqrt{34}')+' m'], correct: 2, explanation: `Stegen, väggen och marken bildar en rätvinklig triangel. ${T('h^2 = 5^2 - 3^2 = 25 - 9 = 16')}, alltså ${T('h = 4')} m.` },
      { q: 'Du går 8 m rakt österut och sedan 6 m rakt norrut. Hur långt är det fågelvägen tillbaka till startpunkten?', options: ['10 m', '14 m', '7 m', '12 m'], correct: 0, explanation: `Din väg bildar en rätvinklig triangel. Fågelvägen = hypotenusan: ${T('c^2 = 8^2 + 6^2 = 64 + 36 = 100')}, alltså ${T('c = 10')} m.` },
      { q: 'Vad är arean av en rätvinklig triangel med kateter 5 och 12?', options: ['17', '30', '60', '120'], correct: 1, explanation: `I en rätvinklig triangel är kateterna bas och höjd: ${T('A = \\frac{5 \\cdot 12}{2} = \\frac{60}{2} = 30')}.` },
      { q: `Är triangeln med sidor 7, 24, 25 rätvinklig?`, options: ['Ja', 'Nej'], correct: 0, explanation: `Kolla: ${T('7^2 + 24^2 = 49 + 576 = 625 = 25^2')} ✓ Ja! Pythagoras sats uppfylls, alltså är den rätvinklig.` },
      { q: 'En rätvinklig triangel har en katet 1 och hypotenusan 2. Vad är den andra kateten?', options: [T('\\sqrt{3}'), T('\\sqrt{5}'), '1', '3'], correct: 0, explanation: `${T('b^2 = 2^2 - 1^2 = 4 - 1 = 3')}, alltså ${T('b = \\sqrt{3}')}.` },
      { q: 'I en rätvinklig triangel är de två spetsiga vinklarna:', options: ['Summa = 90°', 'Summa = 180°', 'Lika stora', 'Summa = 270°'], correct: 0, explanation: 'En rätvinklig triangel har en vinkel på 90°. Eftersom vinkelsumman = 180°, måste de andra två vinklarna summera till 180° − 90° = 90°.' },
    ]
  },
  {
    id: 'potenser', name: 'Potenser & roten ur',
    exercises: [
      { q: `Vad är ${T('2^3 \\cdot 2^4')} ?`, options: [T('2^7'), T('2^{12}'), T('4^7'), T('4^{12}')], correct: 0, explanation: `Regel: vid multiplikation med samma bas adderar man exponenterna. ${T('2^3 \\cdot 2^4 = 2^{3+4} = 2^7 = 128')}.` },
      { q: `Förenkla ${T('(3^2)^3')}.`, options: [T('3^5'), T('3^6'), T('9^3'), T('3^8')], correct: 1, explanation: `Regel: potens av potens = multiplicera exponenterna. ${T('(3^2)^3 = 3^{2 \\cdot 3} = 3^6 = 729')}.` },
      { q: `Vad är ${T('\\sqrt{50}')} förenklat?`, options: [T('5\\sqrt{2}'), T('25\\sqrt{2}'), T('\\sqrt{25}'), T('10\\sqrt{5}')], correct: 0, explanation: `Dela upp talet under rottecknet: ${T('\\sqrt{50} = \\sqrt{25 \\cdot 2} = \\sqrt{25} \\cdot \\sqrt{2} = 5\\sqrt{2}')}.` },
      { q: `Vilket av dessa är samma sak som ${T('5^3')} ?`, options: [T('5 \\cdot 3'), T('5 + 5 + 5'), T('5 \\cdot 5 \\cdot 5'), T('3 \\cdot 3 \\cdot 3 \\cdot 3 \\cdot 3')], correct: 2, explanation: `${T('5^3')} betyder att man multiplicerar basen 5 med sig själv 3 gånger: ${T('5^3 = 5 \\cdot 5 \\cdot 5 = 125')}.` },
      { q: `Vad är ${T('25^{\\frac{1}{2}}')} ?`, options: ['5', '12,5', '50', T('\\frac{25}{2}')], correct: 0, explanation: `Upphöjt i ${T('\\frac{1}{2}')} är samma sak som kvadratroten: ${T('25^{\\frac{1}{2}} = \\sqrt{25} = 5')}.` },
      { q: `Förenkla ${T('\\frac{5^6}{5^4}')}.`, options: [T('5^2'), T('5^{10}'), T('1^2'), T('5^{24}')], correct: 0, explanation: `Vid division med samma bas subtraherar man exponenterna: ${T('\\frac{5^6}{5^4} = 5^{6-4} = 5^2 = 25')}.` },
      { q: `Vad är ${T('\\sqrt{12} \\cdot \\sqrt{3}')} ?`, options: ['6', T('\\sqrt{15}'), '9', T('2\\sqrt{6}')], correct: 0, explanation: `${T('\\sqrt{12} \\cdot \\sqrt{3} = \\sqrt{12 \\cdot 3} = \\sqrt{36} = 6')}.` },
      { q: `Vad är ${T('3^2 \\cdot 3^{-1}')} ?`, options: ['9', '3', '1', T('\\frac{1}{3}')], correct: 1, explanation: `Addera exponenterna: ${T('3^{2+(-1)} = 3^1 = 3')}.` },
      { q: `Förenkla ${T('(2 \\cdot 3)^2')}.`, options: ['12', '36', '10', '18'], correct: 1, explanation: `Potensen gäller hela produkten: ${T('(2 \\cdot 3)^2 = 6^2 = 36')}. Alternativt: ${T('2^2 \\cdot 3^2 = 4 \\cdot 9 = 36')}.` },
      { q: `Vad är ${T('\\sqrt{\\frac{9}{16}}')} ?`, options: [T('\\frac{3}{4}'), T('\\frac{9}{4}'), T('\\frac{3}{16}'), T('\\frac{81}{256}')], correct: 0, explanation: `Roten ur ett bråk: ta roten ur täljare och nämnare var för sig: ${T('\\sqrt{\\frac{9}{16}} = \\frac{\\sqrt{9}}{\\sqrt{16}} = \\frac{3}{4}')}.` },
    ]
  },
];
