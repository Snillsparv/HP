// Textförklaringar till högskoleprovet 23 oktober 2022, provpass 4 (kvantitativt).
import { tex } from '../types.js';

export const forklaringar: Record<number, string> = {
  1: `<p>Gemensam nämnare 12: ${tex('\\frac{4}{12} + \\frac{9}{12} + \\frac{5}{12} = \\frac{18}{12}')}.</p>
<p>${tex('\\frac{18}{12} = \\frac{9}{6}')} (eller 1,5). Svar B.</p>`,

  2: `<p>I skärningspunkten är <i>y</i> lika för båda linjerna: ${tex('2x - 4 = x - 1')} ger ${tex('x = 3')}.</p>
<p>${tex('y = 3 - 1 = 2')}. Punkten är (3, 2). Svar D.</p>`,

  3: `<p>Multiplicera med 7: ${tex('45x = 35x + 70')}.</p>
<p>${tex('10x = 70')} ger ${tex('x = 7')}. Svar D.</p>`,

  4: `<p>${tex('0{,}07 \\cdot 15 = 1{,}05')}.</p>
<p>Svar B.</p>`,

  5: `<p>Medianen av sex tal är medelvärdet av de två mellersta: ${tex('\\frac{2 + 4}{2} = 3')}.</p>
<p>Medelvärdet: ${tex('\\frac{-1 + 1 + 2 + 4 + 5 + 7}{6} = \\frac{18}{6} = 3')}. Differensen är 0. Svar A.</p>`,

  6: `<p>Till höger bildar de två linjerna en triangel med den tredje linjen. Där är vinklarna 60° och ${tex('180° - 140° = 40°')}, så den tredje vinkeln, i korsningspunkten, är ${tex('180° - 60° - 40° = 80°')}.</p>
<p>Vertikalvinkeln i den vänstra triangeln är också 80°, så ${tex('3x + 2x + 80° = 180°')} ger ${tex('5x = 100°')}. Svar B.</p>`,

  7: `<p>Räkna ut ${tex('f(1)')} och ${tex('f(0)')}. A: 2 och 2, lika. B: −1 och −2, ${tex('f(1)')} är störst. C: 0 och 1. D: 0 och 2.</p>
<p>Bara B uppfyller ${tex('f(1) > f(0)')}. Svar B.</p>`,

  8: `<p>Multiplicera ut två parenteser först: ${tex('(a + b)(c + d) = ac + ad + bc + bd')}. Varje term ska sedan multipliceras med både <i>e</i> och <i>f</i>, vilket ger åtta termer.</p>
<p>${tex('ace + acf + ade + adf + bce + bcf + bde + bdf')}. Svar D.</p>`,

  9: `<p>${tex('\\pi r^2 = 27')} ger ${tex('r^2 \\approx 8{,}6')} och ${tex('r \\approx 2{,}9')} cm.</p>
<p>Diametern är ungefär 5,9 cm, närmast 6 cm. Svar C.</p>`,

  10: `<p>Högerledet är ${tex('\\frac{1}{2} - \\frac{1}{3} = \\frac{3}{6} - \\frac{2}{6} = \\frac{1}{6}')}.</p>
<p>${tex('x = \\frac{1}{3} - \\frac{1}{6} = \\frac{1}{6}')}. Svar C.</p>`,

  11: `<p>Ett gram garn är ${tex('\\frac{130}{50}')} meter långt.</p>
<p>430 gram är ${tex('\\frac{130}{50} \\cdot 430')} meter. Svar C.</p>`,

  12: `<p>${tex('4 = 2^2')}, så ${tex('4 \\cdot 2^x = 2^2 \\cdot 2^x = 2^{x + 2}')}.</p>
<p>Svar A.</p>`,

  13: `<p>${tex('2x + 6 = 3x + 12')} ger ${tex('-6 = x')}.</p>
<p>−6 är mindre än 0. Svar B.</p>`,

  14: `<p>Summan 10 fås på tre sätt: 4+6, 5+5 och 6+4. Summan 4 fås också på tre sätt: 1+3, 2+2 och 3+1.</p>
<p>Båda sannolikheterna är ${tex('\\frac{3}{36}')}. Svar C.</p>`,

  15: `<p>I: ${tex('\\frac{5}{6} + \\frac{5}{6} = \\frac{10}{6}')}, mer än 1.</p>
<p>II: ${tex('\\frac{5}{6} \\cdot \\frac{5}{6} = \\frac{25}{36}')}, mindre än 1. Svar A.</p>`,

  16: `<p>Areorna är ${tex('\\frac{b \\cdot h_1}{2}')} och ${tex('\\frac{(b - 1) \\cdot h_2}{2}')}. Basen är kortare i II, men höjderna är okända.</p>
<p>Med en stor höjd ${tex('h_2')} kan II bli större, med en liten höjd mindre. Svar D.</p>`,

  17: `<p>När två linjer är vinkelräta mot varandra är produkten av riktningskoefficienterna −1. I figuren lutar L<sub>1</sub> nedåt (negativ koefficient) och L<sub>2</sub> uppåt (positiv), så produkten är negativ.</p>
<p>−1 är mindre än 1. Svar B.</p>`,

  18: `<p>I: ${tex('\\frac{\\pi \\cdot 1^2}{4} = \\frac{\\pi}{4} \\approx 0{,}785')} cm<sup>2</sup>.</p>
<p>II: ${tex('\\frac{3}{4} \\cdot 1^2 = 0{,}75')} cm<sup>2</sup>. Svar A.</p>`,

  19: `<p>${tex('\\sqrt{7} \\approx 2{,}65')} och ${tex('\\sqrt{3} \\approx 1{,}73')}, summan ungefär 4,4.</p>
<p>${tex('\\sqrt{10} \\approx 3{,}16')}. Svar A.</p>`,

  20: `<p>Talparen med produkten 36: 1 och 36 (summa 37), 2 och 18 (summa 20), 3 och 12 (summa 15), 4 och 9 (summa 13), 6 och 6 (summa 12).</p>
<p>Summan kan vara både större och mindre än 18. Svar D.</p>`,

  21: `<p>I: 40 km med 100 km/h tar ${tex('0{,}4')} timmar, alltså 24 minuter.</p>
<p>II: 40 m/s är 144 km/h. 40 km tar ${tex('\\frac{40\\,000}{40} = 1\\,000')} sekunder, ungefär 16,7 minuter. Svar A.</p>`,

  22: `<p>${tex('\\frac{125}{\\sqrt{x - 2}} = 25')} ger ${tex('\\sqrt{x - 2} = 5')}.</p>
<p>Kvadrera: ${tex('x - 2 = 25')}. Svar C.</p>`,

  23: `<p>(1): En sida är 7 cm, men den andra är okänd. Otillräckligt.</p>
<p>(2): Omkretsen 20 cm ger att sidorna har summan 10, men inte vilka de är. Otillräckligt.</p>
<p>Tillsammans: sidorna är 7 och 3 cm, arean ${tex('7 \\cdot 3 = 21')} cm<sup>2</sup>. Svar C.</p>`,

  24: `<p>(1): ${tex('4x = -8')} ger ${tex('x = -2')}, som är mindre än 0. Tillräckligt.</p>
<p>(2): En udda potens är negativ bara om basen är negativ, så ${tex('x^5 < 0')} betyder ${tex('x < 0')}. Tillräckligt. Svar D.</p>`,

  25: `<p>(1): ${tex('1A + 1B = 51')} och ${tex('1A + 2A = 53')}, två ekvationer med tre okända. Otillräckligt.</p>
<p>(2): ${tex('2B = 24')} och totalt 103 ger ${tex('1A + 1B + 2A = 79')}. Otillräckligt.</p>
<p>Tillsammans: ${tex('(1A + 1B) + (1A + 2A) = 51 + 53 = 104')}, och ${tex('1A + 1B + 2A = 79')}, så ${tex('1A = 104 - 79 = 25')}. Svar C.</p>`,

  26: `<p>(1): 4/5 är samma sak som 80 %, alltså bara det som redan står i uppgiften. Otillräckligt.</p>
<p>(2): Glas A rymmer ${tex('2 \\cdot 6 = 12')} cl, och 12 cl är 80 % av det glas B rymmer: ${tex('\\frac{12}{0{,}8} = 15')} cl. Tillräckligt. Svar B.</p>`,

  27: `<p>(1): Kalla skoaffären <i>s</i>. Bokhandeln är ${tex('\\frac{s}{5}')} och klädaffären ${tex('\\frac{2s}{5}')}. ${tex('s + \\frac{s}{5} + \\frac{2s}{5} = \\frac{8s}{5} = 1\\,600')} ger ${tex('s = 1\\,000')}. Tillräckligt.</p>
<p>(2): Bara en olikhet, som tillåter många olika belopp. Otillräckligt. Svar A.</p>`,

  28: `<p>(1): Emma är 173 cm och alltså medianen (den mellersta). Den längsta är under 183 cm, men det kan vara Marie eller Petra. Otillräckligt.</p>
<p>(2): Om Marie vore medianen skulle medianen ändras när hon blev kortare. Marie är alltså kortast eller längst (minst 178 cm). Otillräckligt.</p>
<p>Tillsammans: Marie kan vara kortast (då är Petra längst) eller längst med en längd mellan 178 och 183 cm. Svar E.</p>`,

  29: `<p>Internetkurvan (tunn streckad) stiger brantast omkring millennieskiftet: från ungefär 13 procent 1998 till 32 procent 1999 och 51 procent 2000.</p>
<p>Den största förändringen mellan två år är ungefär 20 procentenheter. Svar C.</p>`,

  30: `<p>Stapeln för 8–9 år 2016 visar ungefär 66 procent.</p>
<p>${tex('0{,}66 \\cdot 250 = 165')}. Svar C.</p>`,

  31: `<p>Dator: från 25 till 92 procent, ungefär 67 procentenheter. Bredband: från 3 till 90, ungefär 87. Smart mobil: från 26 (2011) till 85 (2017), ungefär 59. Surfplatta: från 3 till 70, ungefär 67.</p>
<p>Minst ökning har smart mobil. Svar C.</p>`,

  32: `<p>Gotlands län hade 71 485 får och Kronobergs län 18 305.</p>
<p>${tex('\\frac{71\\,485}{18\\,305} \\approx 3{,}9')}, alltså ungefär 4:1. Svar D.</p>`,

  33: `<p>Antalet vuxna får i hela riket var 287 303.</p>
<p>${tex('\\frac{2}{3} \\cdot 287\\,303 \\approx 191\\,500')}, närmast 192 000. Svar B.</p>`,

  34: `<p>Totalt fanns 588 757 får.</p>
<p>${tex('\\frac{588\\,757}{8\\,951} \\approx 66')} får per företag. Svar D.</p>`,

  35: `<p>Kostgärd och skjutsfärdspengar utan månadspengar betalades 1609 (och 1611). Det året var extraskatterna skjutsfärdspengar, hjonelagspengar och kostgärd.</p>
<p>Hjonelagspengar var det överlägset största blocket, ungefär 6 000 daler. Svar A.</p>`,

  36: `<p>Extraskatterna är allt ovanför den årliga räntan (ungefär 6 100 daler till och med 1606, därefter ungefär 7 200). Störst var de 1606, då staplarna nådde 15 000 daler: ungefär ${tex('15\\,000 - 6\\,100 = 8\\,900')} daler.</p>
<p>Minst var de 1607, då staplarna nådde 10 200 daler: ungefär ${tex('10\\,200 - 7\\,200 = 3\\,000')} daler. Skillnaden är ungefär 5 900 daler, närmast 6 200. Svar B.</p>`,

  37: `<p>Extraskatterna överstiger de ordinarie när stapeln når över dubbla räntan, alltså över ungefär 12 200 daler till och med 1606 och över ungefär 14 400 daler därefter.</p>
<p>Det gäller 1606, 1609, 1610 och 1611 samt alla år 1613–1619, sammanlagt 11 år. Svar B.</p>`,

  38: `<p>Utemåltider och boende är vardera ungefär hälften av 57 032, alltså omkring 28 500 miljoner kronor. Övrig handel är drygt en tredjedel av 74 587, omkring 30 000. Kultur/rekreation/sport är bara 14 776 och luftfart ungefär hälften av 44 583.</p>
<p>De tre största är utemåltider, boende och övrig handel. Svar A.</p>`,

  39: `<p>Svenska resenärer: ${tex('41\\,075 + 87\\,610 = 128\\,685')} miljoner kronor. Utländska besökare: 62 293.</p>
<p>${tex('\\frac{128\\,685}{62\\,293} \\approx 2{,}1')}, alltså dubbelt så stort. Svar D.</p>`,

  40: `<p>${tex('\\frac{15\\,710}{62\\,293} \\approx 0{,}25')}.</p>
<p>Det är en fjärdedel. Svar A.</p>`,
};
