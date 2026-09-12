// Textförklaringar till högskoleprovet 21 oktober 2017, provpass 3 (kvantitativt).
import { tex } from '../types.js';

export const forklaringar: Record<number, string> = {
  // XYZ
  1: `<p>Eftersom ${tex('x < y < 10')} och talen är positiva heltal kan ${tex('y')} som mest vara 9, så ${tex('x')} kan vara 1, 2, 3, 4, 5, 6, 7 eller 8. Det är 8 olika värden.</p>
<p>Svar C.</p>`,

  2: `<p>Medelvärdet är ${tex('\\frac{\\frac{1}{2} + \\frac{1}{6}}{2} = \\frac{\\frac{3}{6} + \\frac{1}{6}}{2} = \\frac{4}{6} \\cdot \\frac{1}{2} = \\frac{1}{3}')}.</p>
<p>Svar A.</p>`,

  3: `<p>Kalle blandar ${tex('\\frac{25}{9}')} drinkar per minut och Jakob ${tex('\\frac{25}{18}')}. Tillsammans blandar de ${tex('\\frac{50}{18} + \\frac{25}{18} = \\frac{75}{18}')} drinkar per minut, så 75 drinkar tar ${tex('75 \\cdot \\frac{18}{75} = 18')} minuter.</p>
<p>Svar C.</p>`,

  4: `<p>Kvadraternas sidor är ${tex('\\sqrt{25} = 5')} cm och ${tex('\\sqrt{64} = 8')} cm. Triangelns area är ${tex('\\frac{5 \\cdot 8}{2} = 20')} cm².</p>
<p>Svar B.</p>`,

  5: `<p>Vid potens av potens multipliceras exponenterna: ${tex('\\left(x^3\\right)^2 = x^{3 \\cdot 2} = x^6')}.</p>
<p>Svar B.</p>`,

  6: `<p>${tex('35x + 60 = 47x - 24')} ger ${tex('84 = 12x')}, alltså ${tex('x = 7')}.</p>
<p>Svar D.</p>`,

  7: `<p>En kubikmeter är 1 000 liter, så ${tex('4{,}7 \\cdot 10^2')} m³ är ${tex('4{,}7 \\cdot 10^2 \\cdot 10^3 = 4{,}7 \\cdot 10^5')} liter.</p>
<p>Svar A.</p>`,

  8: `<p>Två räta linjer skär inte varandra bara om de är parallella, det vill säga har samma lutning. Linjen ${tex('y = 2x + 3')} har lutningen 2, så ${tex('k = 2')}.</p>
<p>Svar D.</p>`,

  9: `<p>Täljaren är ${tex('2 \\cdot \\frac{1}{3} = \\frac{2}{3}')} och nämnaren ${tex('4 \\cdot \\frac{5}{6} = \\frac{20}{6} = \\frac{10}{3}')}. Kvoten blir ${tex('\\frac{2}{3} \\cdot \\frac{3}{10} = \\frac{2}{10} = \\frac{1}{5}')}.</p>
<p>Svar A.</p>`,

  10: `<p>Utveckla kvadraterna: ${tex('(a + b)^2 = a^2 + 2ab + b^2')} och ${tex('(a - b)^2 = a^2 - 2ab + b^2')}. Skillnaden är ${tex('4ab = 25 - 121 = -96')}, så ${tex('ab = -24')}.</p>
<p>Svar B.</p>`,

  11: `<p>Konjugatregeln ger ${tex('\\left(\\frac{x}{4}\\right)^2 - \\left(\\frac{1}{2}\\right)^2 = \\frac{x^2}{16} - \\frac{1}{4}')}. Bryt ut ${tex('\\frac{1}{4}')}: ${tex('\\frac{1}{4}\\left(\\frac{x^2}{4} - 1\\right)')}.</p>
<p>Svar D.</p>`,

  12: `<p>Eftersom DE är parallell med AC är vinkeln DEB lika med vinkeln ACB, alltså ${tex('x')}. Triangeln BDE är likbent med DE = BD, så vinkeln vid B är också ${tex('x')}. Vinkelsumman i triangeln BDE ger ${tex('y + 2x = 180°')}, alltså ${tex('x = 90° - \\frac{y}{2}')}.</p>
<p>Svar C.</p>`,

  // KVA
  13: `<p>I: ${tex('4 \\cdot 6 - 5 \\cdot 3 = 24 - 15 = 9')}. II: ${tex('4 \\cdot 1 \\cdot 3 = 12')}. II är större.</p>
<p>Svar B.</p>`,

  14: `<p>Sannolikheten att vinstfältet är ett av Evas fyra fält är ${tex('\\frac{4}{20} = \\frac{1}{5}')}, vilket är mindre än ${tex('\\frac{1}{4}')}.</p>
<p>Svar B.</p>`,

  15: `<p>Cylinderns volym är ${tex('\\pi r^2 h = \\pi \\cdot 3^2 \\cdot 3 = 27\\pi')} cm³, vilket är mindre än ${tex('30\\pi')} cm³.</p>
<p>Svar B.</p>`,

  16: `<p>${tex('\\sqrt{(x + 3)^2} = |x + 3|')}, och eftersom ${tex('x \\geq 0')} är ${tex('x + 3')} positivt. Kvantiteterna är lika.</p>
<p>Svar C.</p>`,

  17: `<p>${tex('\\sqrt{8} \\approx 2{,}83')} och ${tex('\\sqrt{27} \\approx 5{,}20')}, så I är ungefär 8,03. II är ${tex('5\\sqrt{2} \\approx 7{,}07')}. I är större.</p>
<p>Svar A.</p>`,

  18: `<p>Multiplicera med 3: ${tex('x - y < 93')}. Det säger bara att ${tex('x')} är mindre än ${tex('y + 93')}, så ${tex('x')} kan vara både större och mindre än ${tex('y')}.</p>
<p>Svar D.</p>`,

  19: `<p>ABCE är ABCD minus triangeln AED. Eftersom E är mittpunkt på CD har triangeln AED hälften så stor area som triangeln ACD. Hur stor del av ABCD som triangeln ACD utgör beror på fyrhörningens form, så jämförelsen går inte att avgöra.</p>
<p>Svar D.</p>`,

  20: `<p>Låt Rut vara ${tex('r')} år. Julia är ${tex('r + 5')}. För tre år sedan: ${tex('r + 2 = 2(r - 3)')}, vilket ger ${tex('r = 8')}. Kvantiteterna är lika.</p>
<p>Svar C.</p>`,

  21: `<p>${tex('x^2 = y^2')} betyder att ${tex('x = y')} eller ${tex('x = -y')}. Om till exempel ${tex('x = 2')} kan ${tex('y')} vara både 2 och −2.</p>
<p>Svar D.</p>`,

  22: `<p>${tex('3x + 2 = 0')} ger ${tex('x = -\\frac{2}{3}')}. ${tex('2z + 3 = 0')} ger ${tex('z = -\\frac{3}{2}')}. Eftersom ${tex('-\\frac{2}{3} > -\\frac{3}{2}')} är I större.</p>
<p>Svar A.</p>`,

  // NOG
  23: `<p>Hushållsosten kostar ${tex('\\frac{19{,}52}{0{,}488} = 40')} kr/kg. (1) ger då prästosten 89 kr/kg, och (2) säger det direkt. I båda fallen kostar 488 g prästost ${tex('0{,}488 \\cdot 89 \\approx 43{,}43')} kr. Var för sig räcker.</p>
<p>Svar D.</p>`,

  24: `<p>Alarmen ringer samtidigt igen efter minsta gemensamma multipeln av intervallen. Med bara (1) eller bara (2) saknas det tredje intervallet. Tillsammans: 3 h, 0,5 h och 2,5 h ger 15 timmar, alltså klockan 09.00 nästa dag.</p>
<p>Svar C.</p>`,

  25: `<p>(1) gäller alla rektanglar (omkretsen ökar alltid med 20 cm) och ger ingen information. (2) ger höjden 6 cm och basen 4,5 cm, så den nya kvoten blir ${tex('\\frac{11}{9{,}5}')}. (2) räcker ensamt.</p>
<p>Svar B.</p>`,

  26: `<p>(1) ger 15, 24, 33, 42, 51 eller 60. (2) ger många tal (14, 21, 28 ...). Tillsammans: det enda talet med siffersumma 6 som är delbart med 7 är 42.</p>
<p>Svar C.</p>`,

  27: `<p>(1) säger bara något om F, A och D. (2): B och E väger var för sig mer än A, D och F tillsammans, alltså mer än var och en av dem, och mer än C som väger mindre än A, D och F tillsammans. B och E är de två tyngsta. (2) räcker ensamt.</p>
<p>Svar B.</p>`,

  28: `<p>${tex('x')}, ${tex('y')} och ${tex('z')} är tre olika tal bland 1, 2, 3 och 4. (1): produkten är delbar med 6 för {1, 2, 3}, {1, 3, 4} och {2, 3, 4}. (2): två primtal finns i {1, 2, 3} och {2, 3, 4}. Även tillsammans återstår två möjligheter med olika medelvärden.</p>
<p>Svar E.</p>`,

  // DTK
  29: `<p>Övriga hybrider: 2 976 av 6 277 i riket fanns i Stockholms län, cirka 47 procent. Diesel ger 17 procent, el 31 procent och etanolhybrid/E85 40 procent.</p>
<p>Svar D.</p>`,

  30: `<p>Nacka hade 37 569 bilar, varav 33 907 bensinbilar. Övriga 3 662 bilar är ungefär 10 procent, alltså en av tio.</p>
<p>Svar A.</p>`,

  31: `<p>Flest bilar hade Stockholm, Solna, Nacka, Södertälje och Huddinge. Bensinbilar: ${tex('250\\,536 + 38\\,158 + 33\\,907 + 31\\,454 + 31\\,229 = 385\\,284')}.</p>
<p>Svar B.</p>`,

  32: `<p>1932 användes cirka 2 125 000 hektar i slättbygderna och cirka 480 000 hektar i Norra Sverige. Skillnaden är ungefär 1 650 000 hektar.</p>
<p>Svar B.</p>`,

  33: `<p>Foderväxter över 1 500 000 hektar utesluter 1920. Övrig spannmål över 1 000 000 hektar utesluter 1950. År 1930 var rågen större än vetet, men 1940 låg vetet på cirka 330 000 hektar och rågen på cirka 200 000.</p>
<p>Svar C.</p>`,

  34: `<p>I skogs- och dalbygderna upptog råg cirka 150 000 hektar 1919 och cirka 50 000 hektar 1951, en minskning med 100 000 hektar. Vete ökade, övrig spannmål var ungefär oförändrad och foderväxter minskade bara marginellt.</p>
<p>Svar B.</p>`,

  35: `<p>Minst 60 procent kvinnor betyder under linjen 40/60. Av grupperna där ligger åtta till vänster om 40 procent: bank/ekonomitjänstemän, sekreterare, affärsbiträden, sjuksköterskor, städare, köksbiträden, sjukvårdsbiträden och daghem/hemvårdare. Diagrammet har 23 grupper, och ${tex('\\frac{8}{23} \\approx 35')} procent.</p>
<p>Svar A.</p>`,

  36: `<p>Cirkelns area visar antalet arbetande. Handlare/inköpare och lärare har lika stora cirklar. I de andra paren är cirklarna olika stora.</p>
<p>Svar C.</p>`,

  37: `<p>Jämnast könsfördelning (50/50) har personliga tjänster och samhällsvetare/humanister. De ligger på cirka 77 respektive 22 procent, en skillnad på ungefär 55 procentenheter.</p>
<p>Svar C.</p>`,

  38: `<p>1992: cirka 8 700 vårdades för sår på magsäck/tolvfingertarm, cirka 15 600 för smärtor i luftstrupe och bröstkorg, och gallstenssjukdom ökade från cirka 11 800 till 13 900. År 1993 förändrades gallstenssjukdomen bara marginellt, och 1991 och 1994 klarar inte alla villkor.</p>
<p>Svar B.</p>`,

  39: `<p>Yrsel 1990 till 1999: cirka 6 900, 7 300, 7 900, 8 300, 9 000, 9 500, 9 800, 8 600, 10 000 och 10 000, totalt ungefär 87 000. Närmast är 85 000.</p>
<p>Svar B.</p>`,

  40: `<p>Från 1987 till 2003: sår minskade cirka 3 300, ljumskbråck minskade cirka 10 900, smärtor i luftstrupe och bröstkorg ökade från cirka 12 700 till 28 200 (cirka 15 500) och smärtor i buk och bäcken minskade cirka 1 500.</p>
<p>Svar C.</p>`,
};
