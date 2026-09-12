// Textförklaringar till högskoleprovet 5 april 2014, provpass 1 (kvantitativt).
import { tex } from '../types.js';

export const forklaringar: Record<number, string> = {
  // XYZ
  1: `<p>Täljaren är ${tex('9 \\cdot \\frac{1}{10} = \\frac{9}{10}')} och nämnaren ${tex('1 - \\frac{1}{10} = \\frac{9}{10}')}. Kvoten av två lika tal är 1.</p>
<p>Svar C.</p>`,

  2: `<p>Översta raden och högra kolumnen ska ha samma summa: ${tex('x + 13 = 13 + z')}, så ${tex('x = z')}. Översta raden och diagonalen från <i>x</i> till <i>z</i>: ${tex('x + 13 = x + z')}, så ${tex('z = 13')}. Översta och nedersta raden: ${tex('x + 13 = y + z')}, så ${tex('y = x = 13')}. Summan är ${tex('13 + 13 + 13 = 39')}.</p>
<p>Svar C.</p>`,

  3: `<p>När ${tex('1 < x \\leq 5')} är ${tex('-4 < 3x - 7 \\leq 8')}. Värdet ${tex('-4')} skulle kräva ${tex('x = 1')}, som inte ingår i intervallet, medan 2, 6 och 8 fås för ${tex('x = 3')}, ${tex('x = \\frac{13}{3}')} och ${tex('x = 5')}.</p>
<p>Svar A.</p>`,

  4: `<p>Triangeln är rätvinklig och likbent med kateterna <i>x</i>, så dess area är ${tex('\\frac{x \\cdot x}{2} = 0{,}5x^2')}. Cirkelns area är ${tex('\\pi y^2')}. Det skuggade området är triangeln minus cirkeln: ${tex('0{,}5x^2 - \\pi y^2')}.</p>
<p>Svar A.</p>`,

  5: `<p>${tex('\\left(10\\sqrt{5}\\right)^2 = 10^2 \\cdot \\left(\\sqrt{5}\\right)^2 = 100 \\cdot 5 = 500')}.</p>
<p>Svar C.</p>`,

  6: `<p>Dela varje term i täljaren med ${tex('2x')}: ${tex('\\frac{4x^5}{2x} = 2x^4')} och ${tex('\\frac{8x}{2x} = 4')}. Uttrycket är ${tex('2x^4 + 4')}.</p>
<p>Svar D.</p>`,

  7: `<p>${tex('-(-10 + 2x) = 10 - 2x')}. Ekvationen ${tex('10 - 2x = 2x + 4')} ger ${tex('6 = 4x')}, alltså ${tex('x = \\frac{3}{2}')}.</p>
<p>Svar D.</p>`,

  8: `<p>${tex('7 \\cdot 128 = 896')}, så ${tex('897 = 7 \\cdot 128 + 1')}. Resten är 1.</p>
<p>Svar B.</p>`,

  9: `<p>Skriv båda leden med basen 3: ${tex('81^{\\frac{1}{m}} = \\left(3^4\\right)^{\\frac{1}{m}} = 3^{\\frac{4}{m}}')} och ${tex('9^n = 3^{2n}')}. Då är ${tex('\\frac{4}{m} = 2n')}, alltså ${tex('mn = 2')}.</p>
<p>Svar B.</p>`,

  10: `<p>Triangeln ABE är liksidig, så ${tex('AE = AB = AD')} och triangeln ADE är likbent. Vinkeln DAE är ${tex('90° - 60° = 30°')}, så vinkeln AED är ${tex('\\frac{180° - 30°}{2} = 75°')}. På samma sätt är vinkeln BEC 75°. Runt E: ${tex('360° - 60° - 75° - 75° = 150°')}.</p>
<p>Svar C.</p>`,

  11: `<p>Medianen av åtta tal är medelvärdet av de två mittersta, som här måste vara ${tex('-2')} och ${tex('-1')}. Talen är ${tex('-5, -4, -3, -2, -1, 0, 1, 2')}, och det minsta är ${tex('-5')}.</p>
<p>Svar B.</p>`,

  12: `<p>Vänsterledet är ${tex('\\frac{x}{\\frac{2x}{3}} = \\frac{3x}{2x} = \\frac{3}{2}')}. Ekvationen ${tex('\\frac{3}{2} = 8 + 4x')} ger ${tex('4x = -\\frac{13}{2}')}, alltså ${tex('x = -\\frac{13}{8} \\approx -1{,}6')}, som ligger i intervallet ${tex('-2 \\leq x < -1')}.</p>
<p>Svar A.</p>`,

  // KVA
  13: `<p>Röd boll i låda 1 ger vit i låda 3, 4, 5 eller 6 (4 sätt), röd i låda 2 ger 3 sätt, röd i låda 3 ger 2 sätt och röd i låda 4 ger 1 sätt. Totalt ${tex('4 + 3 + 2 + 1 = 10')} sätt, vilket är färre än 12. II är större.</p>
<p>Svar B.</p>`,

  14: `<p>Punkterna har samma <i>y</i>-koordinat, så avståndet är skillnaden i <i>x</i>: ${tex('22 - (-4) = 26')} respektive ${tex('3 - (-21) = 24')}. I är större.</p>
<p>Svar A.</p>`,

  15: `<p>Att cirklarna skär varandra betyder bara att avståndet mellan medelpunkterna är mindre än summan av radierna och större än skillnaden. Med radierna 5 och 4 kan avståndet vara 2 (mindre än 5) eller 8 (större än 5). Det går inte att avgöra.</p>
<p>Svar D.</p>`,

  16: `<p>${tex('2^6 = 64')} och ${tex('\\frac{64}{8} = 8')}. Lika.</p>
<p>Svar C.</p>`,

  17: `<p>Sorterad serie: 1, 5, 5, 6, 8, så medianen är 5. Medelvärdet är ${tex('\\frac{25}{5} = 5')}. Lika.</p>
<p>Svar C.</p>`,

  18: `<p>${tex('(x + y)^2 = x^2 + 2xy + y^2')}, och ${tex('2xy > 0')} eftersom båda talen är positiva. II är större.</p>
<p>Svar B.</p>`,

  19: `<p>${tex('x - y = 2y - 3')}, som är positivt om ${tex('y > 1{,}5')} (till exempel ${tex('y = 2')} ger ${tex('x = 3')}) och negativt om ${tex('y < 1{,}5')} (${tex('y = 0')} ger ${tex('x = -3')}). Det går inte att avgöra.</p>
<p>Svar D.</p>`,

  20: `<p>I: ${tex('\\frac{x}{3} \\div 4 = \\frac{x}{12}')}. II: ${tex('\\frac{x}{4} \\div 3 = \\frac{x}{12}')}. Lika.</p>
<p>Svar C.</p>`,

  21: `<p>Sätt in ${tex('x = 2y')}: I ${tex('= 10y - y = 9y')} och II ${tex('= 4y + 4y = 8y')}. Eftersom ${tex('y')} är negativt är ${tex('9y < 8y')}. II är större.</p>
<p>Svar B.</p>`,

  22: `<p>Den största kvadratens sida är ${tex('\\sqrt{3\\,721} = 61')} m och ligger mot hypotenusan; den minstas sida är ${tex('\\sqrt{121} = 11')} m. Pythagoras sats ger den tredje sidan ${tex('\\sqrt{61^2 - 11^2} = \\sqrt{3\\,600} = 60')} m, vilket är mer än 59. I är större.</p>
<p>Svar A.</p>`,

  // NOG
  23: `<p>(1) ger att Sverige är störst, men minst kan vara Danmark, Finland eller Island. (2) säger inget om Norge och Island. Tillsammans: Sverige är störst, men minst är antingen Danmark eller Island, vilket inte går att avgöra.</p>
<p>Svar E.</p>`,

  24: `<p>(1) följer redan av att tröjorna väger ${tex('1\\,350 / 3 = 450')} gram var och säger inget om nystanen. (2): två nystan räcker till två tredjedelar av en tröja, alltså ${tex('\\frac{2}{3} \\cdot 450 = 300')} gram, så ett nystan väger 150 gram. Endast (2) räcker.</p>
<p>Svar B.</p>`,

  25: `<p>Kalla antalet rader <i>r</i> och antalet platser per rad <i>s</i>. (1): ${tex('s + r = 42')}. (2): ${tex('s = r - 10')}. Var för sig räcker de inte, men tillsammans ger de ${tex('2r - 10 = 42')}, alltså ${tex('r = 26')} och ${tex('s = 16')}.</p>
<p>Svar C.</p>`,

  26: `<p>(1) lämnar 27, 36 och 45. (2) lämnar 21, 27 och 45. Tillsammans återstår både 27 och 45, så talet är inte bestämt.</p>
<p>Svar E.</p>`,

  27: `<p>Kalla antalet cyklar med sadelskydd av varje sort <i>s</i>. (2) ger ${tex('6 - s')} herrcyklar och ${tex('4 - s')} damcyklar utan skydd, och (1) ger ${tex('6 - s = 2(4 - s)')}, alltså ${tex('s = 2')} och två damcyklar utan sadelskydd. Var för sig räcker uppgifterna inte.</p>
<p>Svar C.</p>`,

  28: `<p>(1): ${tex('b + d = 10')} ger ${tex('a + c = 10')} och därmed ${tex('e = 23 - 10 = 13')}. (2): ${tex('a + b = 4')} och ${tex('c + e = 20')} ger tillsammans med ${tex('a + c + e = 23')} att ${tex('a = 3')} och ${tex('b = 1')}, men <i>c</i> och <i>e</i> kan vara till exempel 5 och 15 eller 6 och 14. Endast (1) räcker.</p>
<p>Svar A.</p>`,

  // DTK
  29: `<p>Olovliga strejker 1990–1999: ${tex('112 + 11 + 9 + 7 + 3 + 19 + 5 + 6 + 7 + 2 = 181')}, vilket ger ${tex('18{,}1')} per år.</p>
<p>Svar D.</p>`,

  30: `<p>1968 var det 2 lovliga och 5 olovliga strejker. ${tex('\\frac{5}{7} \\approx 71')} procent.</p>
<p>Svar D.</p>`,

  31: `<p>Flest lockouter var det 1993 (8 stycken) med 17 369 anställda och 84 503 inställda arbetsdagar. ${tex('\\frac{84\\,503}{17\\,369} \\approx 4{,}9')}, alltså cirka 5 dagar per anställd.</p>
<p>Svar A.</p>`,

  32: `<p>Totalt antal arbetsinställelser: 1973 ökade från 44 till 48, 1979 från 166 till 207, 1980 minskade från 207 till 204, och 1985 minskade från 206 till 160. Den största förändringen, 46, var 1985.</p>
<p>Svar D.</p>`,

  33: `<p>2008 var den totala kostnaden cirka 82 000 kronor och undervisningen cirka 43 000 kronor per elev, alltså ungefär hälften.</p>
<p>Svar C.</p>`,

  34: `<p>Skillnaden var som störst läsåret 2007/08 med cirka 221 för flickor och cirka 198,5 för pojkar, alltså 22 till 23 poäng. Övriga år var skillnaden cirka 21 till 22.</p>
<p>Svar D.</p>`,

  35: `<p>Andelen var som störst läsåret 2008/09 med cirka 90 000 friskoleelever av totalt cirka 910 000, det vill säga cirka 10 procent.</p>
<p>Svar C.</p>`,

  36: `<p>Kalmar län 2004: Greyhound cirka 54, Oddset cirka 206, Stryktipset cirka 117 och Måltipset cirka 35 kronor per invånare, tillsammans cirka 412. Av totalt 2 070 kronor är det ${tex('\\frac{412}{2\\,070} \\approx 0{,}2 = \\frac{1}{5}')}.</p>
<p>Svar C.</p>`,

  37: `<p>Dalarna: Stryktipset cirka 113 och Måltipset cirka 45 kronor per invånare, tillsammans cirka 158. ${tex('158 \\cdot 270\\,771 \\approx 42\\,800\\,000')} kronor.</p>
<p>Svar B.</p>`,

  38: `<p>Höör ligger mitt i Skåne i område XIII. Fyra skalsteg om 10 km åt nordost hamnar norr om Kristianstad, i område XII Kristianstadsslättens norra övergångsbygd, som har rastret för Kristianstads läns mellanbygd i indelning A.</p>
<p>Svar A.</p>`,

  39: `<p>De två största svarta prickarna (ardenner) ligger vid Nöbbelöv nära Eslöv, cirka 45 hingstar, och vid Assmåsa, cirka 25 hingstar. Tillsammans cirka 70.</p>
<p>Svar B.</p>`,

  40: `<p>Område XIV sträcker sig cirka 90 km från Bjärehalvön i väster till Osby i öster och är cirka 30 km brett. ${tex('90 \\cdot 30 = 2\\,700')} km².</p>
<p>Svar C.</p>`,
};
