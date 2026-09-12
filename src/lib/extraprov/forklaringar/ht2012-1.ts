// Textförklaringar till högskoleprovet 27 oktober 2012, provpass 1 (kvantitativt).
import { tex } from '../types.js';

export const forklaringar: Record<number, string> = {
  // XYZ
  1: `<p>Talet kan skrivas ${tex('x = 8k + 2')}. Då är ${tex('x + 9 = 8k + 11 = 8(k + 1) + 3')}, så resten vid division med 8 blir 3.</p>
<p>Svar C.</p>`,

  2: `<p>Förhållandet 3:2 ger fem lika delar, och ${tex('30 / 5 = 6')} personer per del. Kvinnorna utgör två delar: ${tex('2 \\cdot 6 = 12')}.</p>
<p>Svar C.</p>`,

  3: `<p>Med ${tex('x = 3')} är ${tex('x^3 = 27')} och ${tex('x^2 = 9')}. Uttrycket blir ${tex('27 \\cdot (27 - 9) = 27 \\cdot 18 = 486')}.</p>
<p>Svar C.</p>`,

  4: `<p>Dividera båda leden med <i>a</i>: ${tex('b - 1 = \\dfrac{c}{a}')}. Lägg till 1: ${tex('b = \\dfrac{c}{a} + 1')}.</p>
<p>Svar A.</p>`,

  5: `<p>Volymen minskar med 6 liter per timme från startvärdet 19, så ${tex('L = -6t + 19')}. Kontroll: ${tex('t = 3')} ger ${tex('-18 + 19 = 1')}, vilket stämmer med tabellen.</p>
<p>Svar C.</p>`,

  6: `<p>Räkna delarna var för sig: ${tex('\\dfrac{2/3}{3/4} = \\dfrac{2}{3} \\cdot \\dfrac{4}{3} = \\dfrac{8}{9}')} och ${tex('\\dfrac{4}{5} \\cdot \\dfrac{5}{6} = \\dfrac{4}{6} = \\dfrac{2}{3}')}. Sedan ${tex('\\dfrac{1}{2} + \\dfrac{8}{9} - \\dfrac{2}{3} = \\dfrac{9}{18} + \\dfrac{16}{18} - \\dfrac{12}{18} = \\dfrac{13}{18}')}.</p>
<p>Svar B.</p>`,

  7: `<p>Om sidan blir tre gånger så lång blir volymen ${tex('3^3 = 27')} gånger så stor. Kuben K<sub>2</sub> rymmer alltså 27 kuber K<sub>1</sub>.</p>
<p>Svar D.</p>`,

  8: `<p>${tex('\\dfrac{3}{8} = 0{,}375')}. Medelvärdet är ${tex('\\dfrac{0{,}375 + 0{,}065}{2} = \\dfrac{0{,}44}{2} = 0{,}22')}.</p>
<p>Svar B.</p>`,

  9: `<p>${tex('\\dfrac{1}{2} + \\dfrac{1}{3} = \\dfrac{3}{6} + \\dfrac{2}{6} = \\dfrac{5}{6}')}. Om ${tex('\\dfrac{1}{x} = \\dfrac{5}{6}')} är ${tex('x = \\dfrac{6}{5}')}.</p>
<p>Svar B.</p>`,

  10: `<p>BC är hypotenusan. Pythagoras sats ger den andra kateten ${tex('AC = \\sqrt{y^2 - x^2}')}. Arean är kateterna multiplicerade och delade med två: ${tex('\\dfrac{x\\sqrt{y^2 - x^2}}{2}')} cm<sup>2</sup>.</p>
<p>Svar C.</p>`,

  11: `<p>Eftersom ${tex('\\dfrac{1}{12} < \\dfrac{1}{11}')} är A, ${tex('\\dfrac{1}{12} - \\dfrac{1}{11}')}, negativt. B är samma differens med omvänt tecken och alltså positivt, C är ${tex('\\dfrac{11}{12}')} och D är ${tex('\\dfrac{1}{132}')}, båda positiva. Det enda negativa alternativet är minst.</p>
<p>Svar A.</p>`,

  12: `<p>Sätt in ${tex('b = 3/c')} i ${tex('a = 2/b')}: ${tex('a = \\dfrac{2}{3/c} = \\dfrac{2c}{3}')}, alltså ${tex('c = \\dfrac{3a}{2}')}. Då är ${tex('6c = 6 \\cdot \\dfrac{3a}{2} = 9a')}.</p>
<p>Svar B.</p>`,

  // KVA
  13: `<p>Om ${tex('x < y')} är ${tex('-x > -y')}, och därmed ${tex('4 - x > 4 - y')}. Kvantitet I är större.</p>
<p>Svar A.</p>`,

  14: `<p>Produkten är noll, så ett av talen är 0. Är talen 0, 1, 2 så är ${tex('z = 2 > 0')}; är de −2, −1, 0 så är ${tex('z = 0')}, lika med kvantitet I. Olika fall ger olika resultat.</p>
<p>Svar D.</p>`,

  15: `<p>Om den stora cirkeln har radien <i>r</i> har de små radien ${tex('r/2')}. De två små cirklarna har tillsammans arean ${tex('2 \\cdot \\pi \\left(\\dfrac{r}{2}\\right)^2 = \\dfrac{\\pi r^2}{2}')}, alltså halva stora cirkelns area. Det skuggade området är den andra halvan. Kvantiteterna är lika.</p>
<p>Svar C.</p>`,

  16: `<p>Kalla de lika bitarna <i>a</i> och den kortare <i>b</i>: ${tex('3a + b = 10')} med ${tex('0 < b < a')}. Är <i>b</i> nästan noll blir <i>a</i> nästan ${tex('10/3 \\approx 3{,}33')}; är <i>b</i> nästan lika med <i>a</i> blir ${tex('4a \\approx 10')}, det vill säga ${tex('a \\approx 2{,}5')}. Längden kan alltså vara både under och över 3 meter.</p>
<p>Svar D.</p>`,

  17: `<p>${tex('b = 3c')} ger ${tex('a = 2b = 6c')}. Summan ${tex('a + b + c = 6c + 3c + c = 10c')}, lika med kvantitet II.</p>
<p>Svar C.</p>`,

  18: `<p>${tex('x = 0{,}8 \\cdot 60 = 48')} och ${tex('y = \\dfrac{35}{0{,}7} = 50')}. Kvantitet II är större.</p>
<p>Svar B.</p>`,

  19: `<p>${tex('g(4) = 4 - 16 = -12')} och ${tex('g(-4) = 4 - 16 = -12')}, eftersom ${tex('(-4)^2 = 16')}. Kvantiteterna är lika.</p>
<p>Svar C.</p>`,

  20: `<p>Arean 36 cm<sup>2</sup> ger sidan 6 cm i kvadraten. Triangeln CDE är liksidig med sidan DC = 6 cm, så CE = ED = 6 cm. Femhörningens omkrets är AB + BC + CE + ED + DA = ${tex('5 \\cdot 6 = 30')} cm, lika med kvantitet II.</p>
<p>Svar C.</p>`,

  21: `<p>${tex('mn = \\dfrac{3x}{4} \\cdot \\dfrac{4x}{3} = \\dfrac{12x^2}{12} = x^2')}. Kvantiteterna är lika.</p>
<p>Svar C.</p>`,

  22: `<p>Summan av talen är ${tex('5 \\cdot 12 = 60')} och det mittersta talet är 15. För att det största talet ska bli så stort som möjligt görs de övriga så små som möjligt: 1 och 2 under medianen och 16 strax över den. Största talet blir ${tex('60 - 1 - 2 - 15 - 16 = 26')}, vilket är mindre än 27.</p>
<p>Svar B.</p>`,

  // NOG
  23: `<p>(1) ger att röd ligger norr om blå och grön söder om blå. Då måste röd ligga i norr och grön i söder, medan blå och gul delar på öster och väster i okänd ordning. Otillräckligt. (2) placerar blå i öster och säger att röd inte ligger i söder och ligger norr om grön, men röd kan ligga i norr eller väster. Otillräckligt. Tillsammans: blå i öster, röd i norr, grön i söder och gul i väster.</p>
<p>Svar C.</p>`,

  24: `<p>(1) Utgiften blir ${tex('0{,}9^n')} av den ursprungliga efter <i>n</i> månader. ${tex('0{,}9^6 \\approx 0{,}53')} och ${tex('0{,}9^7 \\approx 0{,}48')}, så efter 7 månader har den halverats. Tillräckligt. (2) säger bara att utgiften var 400 kr från början, inget om hur snabbt den minskar. Otillräckligt.</p>
<p>Svar A.</p>`,

  25: `<p>(1) Byter man en person mot en som är 10 år äldre ökar åldersumman med 10 och medelåldern med ${tex('10/n')} år, men antalet personer <i>n</i> är okänt. (2) ger ${tex('n = 5')} men inget om åldrarna. Tillsammans: ${tex('30 + 10/5 = 32')} år.</p>
<p>Svar C.</p>`,

  26: `<p>(1) ger att Arvid och Elin tillsammans är 24 år, men inte fördelningen. (2) säger inte vilken kusin eller vilka åldrar. Tillsammans finns två möjligheter: Arvid är dubbelt så gammal som Moa, alltså 12 år, och Elin 12 år; eller Arvid är dubbelt så gammal som Elin, så ${tex('3 \\cdot \\text{Elin} = 24')} och Elin är 8 år. Frågan kan inte avgöras.</p>
<p>Svar E.</p>`,

  27: `<p>(1) I en liksidig triangel är alla vinklar 60°, så ${tex('x = 20°')}. Triangeln som bildas av A, B och den högra linjens fotpunkt har vinklarna 60° vid A och ${tex('2x = 40°')} vid B, så ${tex('y = 180° - 60° - 40° = 80°')}. Tillräckligt. (2) Alla sidor 6 cm betyder också att triangeln är liksidig, samma beräkning. Tillräckligt.</p>
<p>Svar D.</p>`,

  28: `<p>(1) ger ${tex('S = \\dfrac{\\ddot{A}}{2} - 50')}, och kvoten Ä/S beror då på hur många fåglar det finns. Otillräckligt. (2) ger ${tex('S = \\dfrac{3}{11}\\ddot{A}')}, så ${tex('\\dfrac{\\ddot{A}}{S} = \\dfrac{11}{3}')}. Tillräckligt.</p>
<p>Svar B.</p>`,

  // DTK
  29: `<p>I cirkeldiagrammet för 2000/01 är Götalands vita sektor ungefär en tredjedel av cirkeln, från klockan åtta till klockan tolv. En tredjedel av 60,2 miljoner kubikmeter är cirka 20 miljoner.</p>
<p>Svar A.</p>`,

  30: `<p>1995 var slutavverkningen ungefär 37 miljoner kubikmeter och gallringen ungefär 18 miljoner. Summan är cirka 55 miljoner.</p>
<p>Svar C.</p>`,

  31: `<p>Norrlands andel är Norra och Södra Norrland tillsammans, de två sektorerna närmast efter klockan tolv. De når till ungefär klockan fyra 1980/81 (cirka 36 procent), klockan fem 1985/86 och 1990/91 (cirka 40 procent) men bara till strax före klockan fyra 2000/01 (cirka 33 procent). Andelen var minst 2000/01.</p>
<p>Svar D.</p>`,

  32: `<p>Gymnasial utbildning totalt: ${tex('1\\,655\\,490 + 1\\,281\\,905 = 2\\,937\\,395')}. Eftergymnasial utbildning (kortare än 3 år och minst 3 år): ${tex('845\\,694 + 1\\,029\\,113 = 1\\,874\\,807')}. Skillnaden är ${tex('1\\,062\\,588')}.</p>
<p>Svar B.</p>`,

  33: `<p>Den största åldersgruppen är 35–44 år med 1 274 179 personer. Högre än gymnasial utbildning är eftergymnasial och forskarutbildning: ${tex('207\\,719 + 231\\,166 + 15\\,251 = 454\\,136')}, vilket är ${tex('454\\,136 / 1\\,274\\,179 \\approx 0{,}36')}, alltså cirka 35 procent.</p>
<p>Svar C.</p>`,

  34: `<p>Den största förändringen mellan två år är från 1905 till 1906, då antalet fackföreningsmedlemmar ökade från ungefär 105 000 till ungefär 180 000, alltså med cirka 75 000. Övriga förändringar är mindre, till exempel från 1918 till 1919 med cirka 66 000.</p>
<p>Svar C.</p>`,

  35: `<p>Antalet fackföreningsmedlemmar i Ådalen var som störst 1908 och 1918 med cirka 1 900 och som minst 1910 med cirka 600. Skillnaden är ungefär 1 300.</p>
<p>Svar B.</p>`,

  36: `<p>De grå staplarna (fackföreningsmedlemmar) är lägst 1905, cirka 105 000, något lägre än 1911. De svarta staplarna (LO-anslutna) är lägst 1911, cirka 80 000. De vita staplarna (SAP) är lägst 1910, cirka 55 000.</p>
<p>Svar B.</p>`,

  37: `<p>Läs av kurvan för registrerade sammanträden mot den högra axeln: ungefär 385, 540, 115, 80, 120, 185, 125, 65, 105, 210 och 235 för åren 1908 till 1918. Summan är cirka 2 200, och delat på 11 år blir det ungefär 200 per år.</p>
<p>Svar B.</p>`,

  38: `<p>För kvinnor 30–34 år är kolumnerna under "Mannen yngre" 62, 38, 24, 15, 9, 6, 4, 2, 1 och 1, summa 162 av 1 000 par. Det är cirka 16 procent.</p>
<p>Svar A.</p>`,

  39: `<p>Att kvinnan är minst tio år yngre är samma sak som att mannen är minst tio år äldre, första kolumnen. Att hon är minst tio år äldre är sista kolumnen. Kvoterna: 50–54 år ${tex('88/12 \\approx 7')}, 45–49 år ${tex('82/11 \\approx 7{,}5')}, 40–44 år ${tex('63/7 = 9')}, 35–39 år ${tex('49/4 \\approx 12')}. Bara den sista är över tio.</p>
<p>Svar D.</p>`,

  40: `<p>För kvinnor 65–69 år: mannen ett år äldre 93, lika gamla 78 och mannen ett år yngre 73. Summan 244 av 1 000 par är ungefär en fjärdedel.</p>
<p>Svar B.</p>`,
};
