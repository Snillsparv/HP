// Textförklaringar till högskoleprovet 12 mars 2022, provpass 3 (kvantitativt).
import { tex } from '../types.js';

export const forklaringar: Record<number, string> = {
  // XYZ
  1: `<p>Räkna inifrån och ut: ${tex('7 - 2 = 5')}, ${tex('6 \\cdot 5 = 30')}, ${tex('30 + 5 = 35')} och ${tex('4 \\cdot 35 = 140')}.</p>
<p>Svar B.</p>`,

  2: `<p>Sätt in ${tex('x = 2')}: ${tex('f(2) = \\frac{4 + 7}{6 + c} = \\frac{11}{6 + c}')}.</p>
<p>Det ska vara lika med 1, så ${tex('6 + c = 11')} och ${tex('c = 5')}.</p>
<p>Svar B.</p>`,

  3: `<p>Skriv alla bråk med nämnaren 32: ${tex('\\frac{1}{4} = \\frac{8}{32}')}, ${tex('\\frac{2}{16} = \\frac{4}{32}')}.</p>
<p>${tex('\\frac{8}{32} + \\frac{4}{32} + \\frac{3}{32} = \\frac{15}{32}')}.</p>
<p>Svar C.</p>`,

  4: `<p>Multiplicera ut parenteserna: ${tex('(3x - 3y)(y - x) = 3xy - 3x^2 - 3y^2 + 3xy')}.</p>
<p>Samla termerna: ${tex('6xy - 3x^2 - 3y^2')}.</p>
<p>Svar D.</p>`,

  5: `<p>Den sneda sidan är hypotenusan i en rätvinklig triangel. Dess vågräta katet är ${tex('10 - 4 = 6')} cm (hela bottensidan minus den övre sidan) och dess lodräta katet är ${tex('8 - 4 = 4')} cm (högra sidan minus vänstra sidan).</p>
<p>${tex('x = \\sqrt{6^2 + 4^2} = \\sqrt{36 + 16} = \\sqrt{52}')}.</p>
<p>Svar D.</p>`,

  6: `<p>${tex('2^{25}')} innehåller bara primfaktorn 2. Det är därför delbart med alla tvåpotenser upp till ${tex('2^{25}')}, men inte med tal som innehåller andra primfaktorer.</p>
<p>${tex('16 = 2^4')} fungerar. 24 innehåller faktorn 3, och 25 och 50 innehåller faktorn 5.</p>
<p>Svar A.</p>`,

  7: `<p>Riktningskoefficienten är ${tex('k = \\frac{1 - 4}{3 - 2} = -3')}, så ${tex('f(x) = -3x + m')}.</p>
<p>${tex('f(2) = -6 + m = 4')} ger ${tex('m = 10')}, alltså ${tex('f(x) = -3x + 10')}. Kontroll: ${tex('f(3) = -9 + 10 = 1')}.</p>
<p>Svar D.</p>`,

  8: `<p>Multiplicera hela ekvationen med 12: ${tex('4x + 3x = 12x - 24')}.</p>
<p>${tex('7x = 12x - 24')} ger ${tex('5x = 24')} och ${tex('x = \\frac{24}{5}')}.</p>
<p>Svar D.</p>`,

  9: `<p>Kalla priset <i>p</i>. Kupong 1 ger priset ${tex('0{,}9p')}, kupong 2 ger ${tex('0{,}92p - 40')}.</p>
<p>${tex('0{,}9p = 0{,}92p - 40')} ger ${tex('0{,}02p = 40')} och ${tex('p = 2\\,000')} kr.</p>
<p>Svar C.</p>`,

  10: `<p>En negativ exponent betyder "ett genom": ${tex('10^{-2x} = \\frac{1}{10^{2x}} = \\frac{1}{36}')}.</p>
<p>Svar B.</p>`,

  11: `<p>Eftersom kulan läggs tillbaka är dragningarna oberoende. Om <i>s</i> är sannolikheten för svart gäller ${tex('s^2 = \\frac{16}{49}')}, så ${tex('s = \\frac{4}{7}')}.</p>
<p>Sannolikheten för röd är ${tex('1 - \\frac{4}{7} = \\frac{3}{7}')}.</p>
<p>Svar A.</p>`,

  12: `<p>Hela skivan har arean ${tex('\\pi \\cdot 24^2 = 576\\pi')} cm<sup>2</sup>.</p>
<p>Den delas i ${tex('4 \\cdot 3 \\cdot 2 = 24')} lika stora bitar, så varje bit är ${tex('\\frac{576\\pi}{24} = 24\\pi')} cm<sup>2</sup>.</p>
<p>Svar B.</p>`,

  // KVA
  13: `<p>Rektangelns omkrets: ${tex('2(x + 3x) = 8x')}. Triangelns omkrets: ${tex('4x + 2x + 3x = 9x')}.</p>
<p>Eftersom <i>x</i> är en positiv längd är II större. Svar B.</p>`,

  14: `<p>L<sub>1</sub> lutar nedåt, så dess riktningskoefficient är negativ. L<sub>2</sub> lutar uppåt, så dess riktningskoefficient är positiv.</p>
<p>Ett positivt tal är alltid större än ett negativt. Svar B.</p>`,

  15: `<p>${tex('\\frac{24}{6} = 4')} och ${tex('\\frac{3}{12} \\cdot 16 = \\frac{48}{12} = 4')}.</p>
<p>Svar C.</p>`,

  16: `<p>Medelvärdet av 1, 1, 5, 5 är ${tex('\\frac{12}{4} = 3')}.</p>
<p>Medelvärdet av 2, 4, 8, 10 är ${tex('\\frac{24}{4} = 6')}, och hälften av det är 3.</p>
<p>Svar C.</p>`,

  17: `<p>Kvantitet I: ${tex('\\left(\\frac{2}{\\sqrt{3}}\\right)^2 = \\frac{4}{3} \\approx 1{,}33')}.</p>
<p>Kvantitet II: ${tex('\\sqrt{\\frac{16}{\\pi^2}} = \\frac{4}{\\pi} \\approx 1{,}27')}.</p>
<p>I är större. Svar A.</p>`,

  18: `<p>I en kvadrat är alla sidor lika långa, så ${tex('\\frac{x}{8} = \\frac{3x}{y}')}.</p>
<p>Korsmultiplicera: ${tex('xy = 24x')}. Eftersom sidan ${tex('x/8')} är positiv är ${tex('x \\neq 0')}, och vi kan dela med <i>x</i>: ${tex('y = 24')}, som är större än 8.</p>
<p>Svar A.</p>`,

  19: `<p>Anna och Clara har tillsammans ${tex('66 - 19 = 47')} karameller. Clara har mer än ${tex('66/3 = 22')}, alltså minst 23.</p>
<p>Då har Anna högst 24. Hon kan ha exakt 24 (om Clara har 23) men också färre. Informationen är otillräcklig.</p>
<p>Svar D.</p>`,

  20: `<p>Kvantitet I: ${tex('\\frac{x^2}{2x} - \\frac{2x}{4} = \\frac{x}{2} - \\frac{x}{2} = 0')}.</p>
<p>Kvantitet II: ${tex('\\frac{2x}{x} - \\frac{x}{2x} = 2 - \\frac{1}{2} = \\frac{3}{2}')}.</p>
<p>II är större. Svar B.</p>`,

  21: `<p>Pröva olika värden. ${tex('x = 1')}: ${tex('\\sqrt{1} = 1')} och ${tex('\\frac{1}{2}')}, så I är större. ${tex('x = 16')}: ${tex('\\sqrt{16} = 4')} och ${tex('\\frac{16}{2} = 8')}, så II är större.</p>
<p>Informationen är otillräcklig. Svar D.</p>`,

  22: `<p>Peter: 2 timmar är ${tex('7\\,200')} sekunder, och ${tex('5 \\cdot 7\\,200 = 36\\,000')} m = 36 km.</p>
<p>Mattias: ${tex('3 \\cdot 12 = 36')} km.</p>
<p>Svar C.</p>`,

  // NOG
  23: `<p>(1) Daniel hoppar inte från 5 meter, så det är Gabriel eller Mikael. Räcker inte.</p>
<p>(2) Gabriel hoppar lägre än Mikael, så Gabriel hoppar inte från 5 meter. Det är Daniel eller Mikael. Räcker inte.</p>
<p>Tillsammans: varken Daniel eller Gabriel, alltså Mikael.</p>
<p>Svar C.</p>`,

  24: `<p>Kalla antalet motorcyklar <i>m</i> och bilar <i>b</i>, med ${tex('m + b = 176')}.</p>
<p>(1) ${tex('m + 16 = 2b')}. Med ${tex('b = 176 - m')} blir det ${tex('m + 16 = 352 - 2m')}, så ${tex('3m = 336')} och ${tex('m = 112')}. Räcker.</p>
<p>(2) ${tex('b + x = m + 10')} innehåller det okända talet <i>x</i>. Räcker inte.</p>
<p>Svar A.</p>`,

  25: `<p>(1) En tredjedel tar 2 timmar, så hela staketet tar ${tex('3 \\cdot 2 = 6')} timmar. Räcker.</p>
<p>(2) Med dubbel fart tar 2/3 av staketet 2 timmar. I normal fart tar 2/3 alltså 4 timmar, och hela staketet 6 timmar. Räcker.</p>
<p>Var för sig räcker. Svar D.</p>`,

  26: `<p>(1) Ursprungspriset säger inget om hur stor höjningen var. Räcker inte.</p>
<p>(2) Efter sänkningen är priset 80 %, och efter höjningen ${tex('0{,}8 \\cdot 1{,}25 = 1{,}0')}, alltså 100 % av ursprungspriset. Den totala förändringen är 0 procent. Räcker.</p>
<p>Svar B.</p>`,

  27: `<p>Vi vet inte hur många av de 12 blocken som är A4 respektive A5. Antalet rutade block beror på fördelningen.</p>
<p>Med 4 A4-block och 8 A5-block blir det ${tex('1 + 4 = 5')} rutade block. Med 8 A4-block och 4 A5-block blir det ${tex('2 + 2 = 4')}. Inte ens tillsammans räcker påståendena.</p>
<p>Svar E.</p>`,

  28: `<p>(1) ${tex('x - y > x + y')} ger ${tex('-y > y')}, alltså ${tex('y < 0')}. Det säger inget om <i>x</i>: med ${tex('x = -5, y = -1')} är ${tex('x < y')}, men med ${tex('x = 0, y = -1')} är ${tex('x > y')}. Räcker inte.</p>
<p>(2) ${tex('x > 0')} säger inget om <i>y</i>. Räcker inte.</p>
<p>Tillsammans: ${tex('x > 0 > y')}, alltså ${tex('x > y')}. Ja.</p>
<p>Svar C.</p>`,

  // DTK: Gråsälsjakten
  29: `<p>Läs av staplarna för 2008: 24 (0–3 år), 39 (4–10 år), 28 (11–15 år), 10 (16–20 år) och 7 (över 20 år).</p>
<p>${tex('24 + 39 + 28 + 10 + 7 = 108')}.</p>
<p>Svar C.</p>`,

  30: `<p>Gå igenom år för år. 11–15 år (vita staplar) över 10 gäller 2002 (15), 2005 (13), 2006 (14), 2008 (28), 2009 (15) och 2010 (12). 2003 är exakt 10 och räknas inte.</p>
<p>Av dessa år är 16–20 år (prickiga staplar) under 5 bara 2002 (3) och 2009 (3). 2005, 2006, 2008 och 2010 har 8 eller fler.</p>
<p>Svar A.</p>`,

  31: `<p>2011: 17 + 23 + 8 + 8 + 4 = 60 sälar totalt. 11 år eller äldre är de tre sista grupperna: ${tex('8 + 8 + 4 = 20')}.</p>
<p>${tex('\\frac{20}{60} = \\frac{1}{3}')}.</p>
<p>Svar B.</p>`,

  // DTK: Nystartade företag
  32: `<p>Summera de två branscherna per kvartal 2014: kv 1: ${tex('462 + 887 = 1\\,349')}, kv 2: ${tex('427 + 890 = 1\\,317')}, kv 3: ${tex('419 + 866 = 1\\,285')}, kv 4: ${tex('417 + 915 = 1\\,332')}.</p>
<p>Minst var tredje kvartalet.</p>
<p>Svar C.</p>`,

  33: `<p>Flest företag startades första kvartalet 2012 (20 117). Det kvartalet hade åtta av de tjugo branschkategorierna fler än 1 000 nystartade företag: Bygg, Handel, Programmering, Finans, Juridisk konsultverksamhet, Uthyrning, Kultur och Andra serviceföretag.</p>
<p>${tex('\\frac{8}{20} = \\frac{2}{5}')}.</p>
<p>Svar D.</p>`,

  34: `<p>Tillverkning och dylikt: 680 företag fjärde kvartalet 2012 och 1 002 fjärde kvartalet 2014.</p>
<p>${tex('\\frac{1\\,002}{680} \\approx 1{,}47')}, alltså en ökning med cirka 47 procent, närmast 45 procent.</p>
<p>Svar B.</p>`,

  // DTK: Svensk film
  35: `<p>I spridningsdiagrammet: dra en vågrät linje vid 100 000 (publiktal) och en lodrät vid 3,50 (recensionsindex). Uppe till höger om båda linjerna ligger bara tre punkter.</p>
<p>Svar A.</p>`,

  36: `<p>2007 var antalet besök 3,22 miljoner och antalet premiärsatta långfilmer 29.</p>
<p>${tex('\\frac{3\\,220\\,000}{29} \\approx 111\\,000')}.</p>
<p>Svar C.</p>`,

  37: `<p>De tre högsta noteringarna för premiärsatta långfilmer: 2005 (46), 2006 (42) och 2000 (37). För besök: 2000 (4,37), 2001 (4,25) och 2004 (3,87).</p>
<p>Bara år 2000 finns i båda listorna.</p>
<p>Svar A.</p>`,

  38: `<p>Andelen spelfilmer är lägst 2008: 21 av 36 långfilmer, ${tex('\\frac{21}{36} \\approx 0{,}58')}, alltså cirka 60 procent. 1998 är andelen 12 av 20, exakt 60 procent, och övriga år ligger den över 70 procent.</p>
<p>Svar B.</p>`,

  39: `<p>Gruppen 35–44 år är den vita sektorn. Den är minst hos specialistsjuksköterskorna, ungefär en sjättedel av cirkeln.</p>
<p>${tex('\\frac{48\\,862}{6} \\approx 8\\,100')}, närmast 8 000.</p>
<p>Svar D.</p>`,

  40: `<p>Gruppen 45–54 år (grå sektor) är ungefär 30 procent hos både specialistsjuksköterskorna och specialistläkarna.</p>
<p>${tex('0{,}3 \\cdot 48\\,862 \\approx 14\\,700')} respektive ${tex('0{,}3 \\cdot 24\\,929 \\approx 7\\,500')}. Specialistsjuksköterskorna är ungefär dubbelt så många.</p>
<p>Svar C.</p>`,
};
