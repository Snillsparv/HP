// Textförklaringar till högskoleprovet 6 april 2013, provpass 4 (kvantitativt).
import { tex } from '../types.js';

export const forklaringar: Record<number, string> = {
  // XYZ
  1: `<p>I den stora triangeln är toppvinkeln ${tex('2x = 180° - 59° - 33° = 88°')}, så ${tex('x = 44°')}. I den vänstra lilla triangeln är vinkeln vid delningspunkten ${tex('180° - 59° - 44° = 77°')}, och <i>v</i> är dess grannvinkel: ${tex('180° - 77° = 103°')}.</p>
<p>Svar C.</p>`,

  2: `<p>Talen är 946, 947 och 948. ${tex('946 + 948 = 1\\,894')}.</p>
<p>Svar C.</p>`,

  3: `<p>Summan av två av talen är alltid större än vart och ett av dem, så talet till vänster måste vara större än båda till höger. Det gäller bara i B, där det största talet <i>x</i> är summan av två mindre. I A, C och D står ett mindre tal lika med en summa som innehåller ett större tal.</p>
<p>Svar B.</p>`,

  4: `<p>Korsmultiplicera: ${tex('3bx = 5ay')}, alltså ${tex('b = \\frac{5ay}{3x}')}.</p>
<p>Svar D.</p>`,

  5: `<p>Mittpunkten är medelvärdet av koordinaterna: ${tex('\\left(\\frac{-3 + 7}{2}, \\frac{-2 + 4}{2}\\right) = (2, 1)')}.</p>
<p>Svar A.</p>`,

  6: `<p>${tex('\\frac{4}{5} = 0{,}8')} (avstånd 0,2 från 1), ${tex('\\frac{5}{4} = 1{,}25')}, ${tex('\\frac{7}{9} \\approx 0{,}78')} och ${tex('\\frac{9}{7} \\approx 1{,}29')}.</p>
<p>Svar A.</p>`,

  7: `<p>Prova: ${tex('t = 4')} ger ${tex('3^4 = 81')}. (${tex('t = 3')} ger 8, ${tex('t = 6')} ger 15 625.)</p>
<p>Svar B.</p>`,

  8: `<p>${tex('55x - y = 150')} och ${tex('150x - y = 435')}. Skillnaden ger ${tex('95x = 285')}, alltså ${tex('x = 3')} och ${tex('y = 15')}. Kontroll: ${tex('435 \\cdot 3 - 15 = 1\\,290')}. Summan är 18.</p>
<p>Svar C.</p>`,

  9: `<p>${tex('x > x^2')} betyder ${tex('x(1 - x) > 0')}, vilket gäller när <i>x</i> och ${tex('1 - x')} båda är positiva, alltså ${tex('0 < x < 1')}. Till exempel ${tex('0{,}5 > 0{,}25')}.</p>
<p>Svar C.</p>`,

  10: `<p>Täljaren är ${tex('\\frac{1}{2} \\cdot \\frac{1}{2} \\cdot \\frac{3}{4} = \\frac{3}{16}')} och nämnaren ${tex('4 \\cdot \\frac{1}{2} = 2')}. ${tex('\\frac{3}{16} \\div 2 = \\frac{3}{32}')}.</p>
<p>Svar A.</p>`,

  11: `<p>${tex('x = \\sqrt{0{,}5} = \\sqrt{\\frac{1}{2}} = \\frac{1}{\\sqrt{2}}')}. Kontroll: ${tex('\\left(\\frac{1}{\\sqrt{2}}\\right)^2 = \\frac{1}{2}')}.</p>
<p>Svar D.</p>`,

  12: `<p>Den stora kvadraten har sidan ${tex('x + y')}. ${tex('(x + y)^2 - x^2 = x^2 + 2xy + y^2 - x^2 = 2xy + y^2')}.</p>
<p>Svar B.</p>`,

  // KVA
  13: `<p>${tex('(-2) \\cdot (-2) = 4')} och ${tex('(-2) + (-2) = -4')}. I är större.</p>
<p>Svar A.</p>`,

  14: `<p>Bea var för 2 år sedan två år yngre än idag, så Anna är idag ${tex('4 - 2 = 2')} år äldre än Bea. För 2 år sedan var Anna alltså lika gammal som Bea är idag. Lika.</p>
<p>Svar C.</p>`,

  15: `<p>Konjugatregeln: ${tex('(a + b)(a - b) = a^2 - b^2')}. Lika.</p>
<p>Svar C.</p>`,

  16: `<p>Triangeln är likbent, så höjden delar AC mitt itu. Pythagoras sats ger halva basen ${tex('\\sqrt{7^2 - 4^2} = \\sqrt{33} \\approx 5{,}7')}, så ${tex('AC \\approx 11{,}5')} cm, mindre än 12. II är större.</p>
<p>Svar B.</p>`,

  17: `<p>${tex('\\frac{1}{y}')} är negativt bara om <i>y</i> är negativt, alltså ${tex('y < 0')}. I är större.</p>
<p>Svar A.</p>`,

  18: `<p>${tex('f(a) - f(a + 1) = (3a + 1) - (3a + 4) = -3')}, som är mindre än 3. II är större.</p>
<p>Svar B.</p>`,

  19: `<p>I ${tex('= \\frac{4x + 5y + 2z + 132}{2}')} och II ${tex('= \\frac{4x + 5y + 2z + 145}{2}')}. Samma variabeltermer, men II har den större konstanten. II är större.</p>
<p>Svar B.</p>`,

  20: `<p>${tex('x + z = 180° - y')}. Med ${tex('x = 100°, y = 50°, z = 30°')} är I ${tex('= 130°')}, men med ${tex('x = 80°, y = 70°, z = 30°')} är I ${tex('= 110°')}. Det går inte att avgöra.</p>
<p>Svar D.</p>`,

  21: `<p>${tex('a = b + c')} med ${tex('c < 0')} betyder att <i>a</i> är <i>b</i> minus något positivt, så ${tex('a < b')}. II är större.</p>
<p>Svar B.</p>`,

  22: `<p>Med ${tex('n = 1, m = 3')}: I ${tex('= 2^3 = 8')}, II ${tex('= 3^2 = 9')}. Med ${tex('n = 3, m = 1')}: I ${tex('= 4')}, II ${tex('= 1')}. Det går inte att avgöra.</p>
<p>Svar D.</p>`,

  // NOG
  23: `<p>(1): vattnet är ${tex('\\frac{8}{9}')} av djupet, så djupet är ${tex('480 \\cdot \\frac{9}{8} = 540')} cm. (2): förhållandet 8 : 1 säger samma sak, ${tex('480 + 60 = 540')} cm. Var för sig räcker.</p>
<p>Svar D.</p>`,

  24: `<p>(2): ${tex('0{,}15 \\cdot 200 = 30')} ruttna frukter. (1) ger olika andelar för päron och äpplen, men antalet av varje sort är okänt. Endast (2) räcker.</p>
<p>Svar B.</p>`,

  25: `<p>(1): Karin och Elisabeth sitter mittemot varandra, Muhammed och Arne på de andra sidorna, men vem som sitter till vänster om Karin (vinnaren) beror på vilken sida Muhammed sitter på. (2): vinnaren sitter till höger om Elisabeth, men vem det är är okänt. Tillsammans: vinnaren sitter på en bestämd plats, men det kan fortfarande vara antingen Muhammed eller Arne som sitter där.</p>
<p>Svar E.</p>`,

  26: `<p>Kalla genvägen <i>g</i>; gångvägen är ${tex('2g')}. (1): ${tex('2g - g = 410')} ger ${tex('g = 410')} meter. (2): ${tex('g + 2g = 1\\,230')} ger ${tex('g = 410')} meter. Var för sig räcker.</p>
<p>Svar D.</p>`,

  27: `<p>Kalla antalet vänner <i>n</i> och priset <i>P</i>. (1): ${tex('140n + 40 = P')}. (2): ${tex('160n - 60 = P')}. Var för sig har de två okända, men tillsammans ger de ${tex('20n = 100')}, alltså ${tex('n = 5')} och ${tex('P = 740')} kr.</p>
<p>Svar C.</p>`,

  28: `<p>Kalla antalen <i>r</i>, <i>m</i> och <i>p</i>. (1): ${tex('r = m + p')}. (2): ${tex('p = 2m')} och ${tex('r - 100 = m')}. Var för sig räcker de inte, men tillsammans: ${tex('r = m + 2m = 3m')} och ${tex('r = m + 100')} ger ${tex('m = 50')} och ${tex('r = 150')}.</p>
<p>Svar C.</p>`,

  // DTK
  29: `<p>Kolumnen 3 rk i tabellen: ${tex('144 + 340 + 212 + 141 + 34 + 7 + 2 = 880')} tusen hushåll.</p>
<p>Svar D.</p>`,

  30: `<p>Tvåpersonshushållen ökade från 27 till 31 procent, alltså 4 procentenheter, och trepersonshushållen minskade från 22 till 17 procent, alltså 5 procentenheter.</p>
<p>Svar C.</p>`,

  31: `<p>1960 (den streckade kurvan): cirka ${tex('540\\,000 + 730\\,000 + 590\\,000 + 470\\,000 + 340\\,000 \\approx 2\\,670\\,000')}. Kontroll: tvåpersonshushållen, cirka 730 000, var 27 procent, vilket ger cirka 2,7 miljoner totalt.</p>
<p>Svar B.</p>`,

  32: `<p>Fempersonshushållen var ${tex('1 + 4 + 34 + 59 + 47 + 20 + 11 = 176')} tusen. Trångbodda (det vänstra fältet, 1–3 rk) var ${tex('1 + 4 + 34 = 39')} tusen. ${tex('\\frac{39}{176} \\approx 0{,}22')}.</p>
<p>Svar A.</p>`,

  33: `<p>Flickor: ${tex('58\\,539 - 54\\,397 = 4\\,142')}. Pojkar: ${tex('61\\,355 - 56\\,445 = 4\\,910')}.</p>
<p>Svar D.</p>`,

  34: `<p>Cirkeldiagrammet har G cirka en tredjedel, VG drygt 40 procent, MVG knappt 20 procent och en liten andel som ej nått målen. Det stämmer med engelska, receptiv förmåga: 31,7, 42,6, 18,3 och 7,5 procent. Svenska läsförståelse har 12,5 procent ej nått målen, svenska skriftlig 48,2 procent G och engelska muntlig bara 4,0 procent ej nått målen och 42,8 procent G.</p>
<p>Svar D.</p>`,

  35: `<p>Pojkar minus flickor, ej nått målen: svenska läsförståelse ${tex('16{,}6 - 8{,}4 = 8{,}2')}, svenska skriftlig ${tex('12{,}5 - 4{,}8 = 7{,}7')}, engelska receptiv ${tex('7{,}7 - 7{,}2 = 0{,}5')}, matematik ${tex('12{,}4 - 12{,}2 = 0{,}2')}. Störst för svenska läsförståelse, minst för matematik.</p>
<p>Svar B.</p>`,

  36: `<p>För 25,0–49,9 kor är kalvningsförlamning cirka 3,6 procent och acetonemi cirka 1,6 (skillnad 2), och förlossningshjälp cirka 0,6 (skillnad 1). För 0,0–24,9 är skillnaden mellan kalvningsförlamning och acetonemi bara cirka 1,4, och för större besättningar ligger acetonemi och förlossningshjälp nära varandra.</p>
<p>Svar A.</p>`,

  37: `<p>Svealand: de tre största månaderna är januari (cirka 12,5 procent), mars (cirka 11,5) och februari (cirka 10,4), tillsammans cirka 34 procent, alltså ungefär en tredjedel.</p>
<p>Svar D.</p>`,

  38: `<p>För 300 eller fler kor: mastit cirka 23 procent, övriga sjukdomar cirka 15 procent och kvarbliven efterbörd cirka 2 procent. Av 350 kor: ${tex('0{,}23 \\cdot 350 \\approx 81')}, ${tex('0{,}15 \\cdot 350 \\approx 53')} och ${tex('0{,}02 \\cdot 350 \\approx 8')}.</p>
<p>Svar D.</p>`,

  39: `<p>Badolyckorna minskade från 51 till 20, alltså med 31. ${tex('\\frac{31}{51} \\approx 0{,}6 = \\frac{3}{5}')}.</p>
<p>Svar C.</p>`,

  40: `<p>2002 var badolyckorna ${tex('\\frac{51}{51 + 33 + 20 + 1 + 44} = \\frac{51}{149} \\approx 34')} procent. 1995 omkom cirka 175 personer och 1996 cirka 112: ${tex('0{,}34 \\cdot 175 \\approx 60')} och ${tex('0{,}34 \\cdot 112 \\approx 38')}.</p>
<p>Svar A.</p>`,
};
