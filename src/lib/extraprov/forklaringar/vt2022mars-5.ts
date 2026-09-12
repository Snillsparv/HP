// Textförklaringar till högskoleprovet 12 mars 2022, provpass 5 (kvantitativt).
import { tex } from '../types.js';

export const forklaringar: Record<number, string> = {
  // XYZ
  1: `<p>Multiplicera ut högerledet: ${tex('x - 7 = 3x + 3')}.</p>
<p>${tex('-10 = 2x')} ger ${tex('x = -5')}.</p>
<p>Svar A.</p>`,

  2: `<p>Den övre linjen bildar tillsammans med basen och den lodräta sidan en rätvinklig triangel där vinkeln vid det högra hörnet är ${tex('20^\\circ + 10^\\circ = 30^\\circ')}. Då är ${tex('x = 180^\\circ - 90^\\circ - 30^\\circ = 60^\\circ')}.</p>
<p>Den nedre linjen bildar en rätvinklig triangel med vinkeln 20° vid det högra hörnet, så ${tex('y = 180^\\circ - 90^\\circ - 20^\\circ = 70^\\circ')}.</p>
<p>${tex('x + y = 130^\\circ')}. Svar C.</p>`,

  3: `<p>${tex('8^2 = 64')} och ${tex('4^2 = 16')}. Medelvärdet är ${tex('\\frac{64 + 16}{2} = 40')}.</p>
<p>${tex('2^3 \\cdot 5 = 8 \\cdot 5 = 40')}.</p>
<p>Svar C.</p>`,

  4: `<p>${tex('f(1) = 3 - 1 = 2')}.</p>
<p>${tex('g(1) = -2 \\cdot 2 + 4 = 0')}.</p>
<p>Svar A.</p>`,

  5: `<p>Täljaren: ${tex('\\frac{2}{5} - \\frac{1}{4} = \\frac{8}{20} - \\frac{5}{20} = \\frac{3}{20}')}. Nämnaren: ${tex('\\frac{1}{3} + \\frac{1}{6} = \\frac{1}{2}')}.</p>
<p>${tex('\\frac{3}{20} \\div \\frac{1}{2} = \\frac{3}{20} \\cdot 2 = \\frac{3}{10}')}.</p>
<p>Svar B.</p>`,

  6: `<p>${tex('\\sqrt{51} + \\sqrt{51} = 2\\sqrt{51}')}, och ${tex('(2\\sqrt{51})^2 = 4 \\cdot 51 = 204')}, ett heltal.</p>
<p>De andra alternativen innehåller kvar en faktor ${tex('\\sqrt{51}')}, som inte är ett heltal.</p>
<p>Svar D.</p>`,

  7: `<p>${tex('f(1) = a \\cdot 3 = 3')} ger ${tex('a = 1')}.</p>
<p>${tex('f(0) = 1 \\cdot 3^0 = 1')}.</p>
<p>Svar C.</p>`,

  8: `<p>Nämnaren: ${tex('(x^2 y z^2)^2 = x^4 y^2 z^4')}.</p>
<p>${tex('\\frac{x^4 y^2 z^3}{x^4 y^2 z^4} = \\frac{1}{z}')}.</p>
<p>Svar D.</p>`,

  9: `<p>${tex('0{,}6x = 0{,}4y')} ger ${tex('y = \\frac{0{,}6}{0{,}4}x = 1{,}5x')}.</p>
<p><i>y</i> är alltså 150 % av <i>x</i>.</p>
<p>Svar D.</p>`,

  10: `<p>Sidan är ${tex('\\sqrt{100} = 10')} cm. Diagonalen är ${tex('\\sqrt{10^2 + 10^2} = \\sqrt{200} \\approx 14{,}1')} cm.</p>
<p>Svar C.</p>`,

  11: `<p>Bryt ut <i>z</i>: ${tex('xz + yz = z(x + y) = 5 \\cdot 5 = 25')}.</p>
<p>${tex('\\sqrt{25} = 5')}.</p>
<p>Svar B.</p>`,

  12: `<p>Para ihop talen: 1 med 2, 3 med 4, 5 med 6 och så vidare. Varje udda tal är 1 mindre än sitt jämna par.</p>
<p>Med 30 par blir ${tex('u - j = -30')}.</p>
<p>Svar A.</p>`,

  // KVA
  13: `<p>${tex('\\frac{707}{70} = 10{,}1')} och ${tex('\\frac{808}{80} = 10{,}1')}.</p>
<p>Svar C.</p>`,

  14: `<p>AB: från (0, 0) till (4, 3) är ${tex('\\sqrt{16 + 9} = 5')}. BC: från (4, 3) till (8, 0) är också 5. Tillsammans 10.</p>
<p>AD: från (0, 0) till (8, 1) är ${tex('\\sqrt{64 + 1} = \\sqrt{65} \\approx 8{,}1')}.</p>
<p>I är större. Svar A.</p>`,

  15: `<p>Cylinderns volym är ${tex('\\pi r^2 h')}. Kvantitet I: ${tex('\\pi \\cdot 2^2 \\cdot 5 = 20\\pi')}. Kvantitet II: ${tex('\\pi \\cdot 5^2 \\cdot 2 = 50\\pi')}.</p>
<p>II är större. Svar B.</p>`,

  16: `<p>${tex('\\frac{x}{3} = \\frac{1}{3} + \\frac{1}{5} + \\frac{1}{5} = \\frac{1}{3} + \\frac{2}{5} = \\frac{11}{15}')}.</p>
<p>${tex('x = \\frac{33}{15} = 2{,}2')}, som är större än 2.</p>
<p>Svar A.</p>`,

  17: `<p>Eftersom <i>p</i> är positivt kan vi dela båda kvantiteterna med <i>p</i> och jämföra ${tex('p^2')} med 42.</p>
<p>${tex('3 < p < 5')} ger ${tex('9 < p^2 < 25')}, alltid mindre än 42. II är större.</p>
<p>Svar B.</p>`,

  18: `<p>Kvantitet I: ${tex('\\frac{5}{9} \\cdot \\frac{4}{8} = \\frac{20}{72}')}.</p>
<p>Kvantitet II: ${tex('\\frac{5}{9} \\cdot \\frac{4}{8} = \\frac{20}{72}')} (efter en röd kula finns 4 röda kvar av 8).</p>
<p>Svar C.</p>`,

  19: `<p>${tex('36 = 6^2')}, så ${tex('36^{\\frac{1}{3}} = 6^{\\frac{2}{3}}')}.</p>
<p>Då är ${tex('2x = \\frac{2}{3}')} och ${tex('x = \\frac{1}{3}')}, som är mindre än ${tex('\\frac{2}{5}')}.</p>
<p>Svar B.</p>`,

  20: `<p>Fem på varandra följande heltal med summan 15 är 1, 2, 3, 4, 5 (medelvärdet 3 är det mittersta talet).</p>
<p>Skillnaden mellan största och minsta är ${tex('5 - 1 = 4')}, mindre än 5.</p>
<p>Svar B.</p>`,

  21: `<p>Pröva olika värden. ${tex('n = 1')}: ${tex('10^1 = 10')} och ${tex('1^{10} = 1')}, I är större. ${tex('n = -1')}: ${tex('10^{-1} = 0{,}1')} och ${tex('(-1)^{10} = 1')}, II är större.</p>
<p>Informationen är otillräcklig. Svar D.</p>`,

  22: `<p>Arean är ${tex('(x + a)(x - a) = x^2 - a^2')}.</p>
<p>Med ${tex('a = 0')} är arean ${tex('x^2')}. Med ${tex('a > 0')} är arean ${tex('x^2 - a^2')}, som är mindre. I är större.</p>
<p>Svar A.</p>`,

  // NOG
  23: `<p>Kalla antalet äpplen <i>n</i>.</p>
<p>(1) ${tex('2 = \\frac{n + 2}{12}')} ger ${tex('n + 2 = 24')} och ${tex('n = 22')}. Räcker.</p>
<p>(2) Två äpplen är ${tex('\\frac{1}{11}')} av antalet, så ${tex('n = 22')}. Räcker.</p>
<p>Var för sig räcker. Svar D.</p>`,

  24: `<p>(1) Vinnaren fick 56 % och förloraren 44 %. Ger bara andelar. Räcker inte.</p>
<p>(2) Skillnaden är 1 200 röster, men andelarna är okända. Räcker inte.</p>
<p>Tillsammans: skillnaden ${tex('56 - 44 = 12')} procentenheter motsvarar 1 200 röster, så totalen är ${tex('\\frac{1\\,200}{0{,}12} = 10\\,000')} röster.</p>
<p>Svar C.</p>`,

  25: `<p>(1) Benjamin är äldre än Alexandra och Julia är äldre än Sebastian. Yngst är Alexandra eller Sebastian. Räcker inte.</p>
<p>(2) Sebastian 5 år, Benjamin 12 år. Inget om Alexandra och Julia. Räcker inte.</p>
<p>Tillsammans: Julia är 10 år, Benjamin 12 och Sebastian 5, men Alexandra kan vara både 3 år (yngst) och 8 år (då är Sebastian yngst). Räcker inte ens tillsammans.</p>
<p>Svar E.</p>`,

  26: `<p>(1) Det finns många sätt att para ihop nycklar och lås så att ingen nyckel har sitt eget nummer, till exempel 1–2, 2–1, 3–4, 4–3 eller 1–2, 2–3, 3–4, 4–1. Räcker inte.</p>
<p>(2) Summan av alla nyckel- och låsnummer är ${tex('2(1 + 2 + 3 + 4) = 20')}. Om varje av de fyra paren har samma summa måste den vara ${tex('20/4 = 5')}: nyckel 1 passar i lås 4, nyckel 2 i lås 3, nyckel 3 i lås 2 och nyckel 4 i lås 1. Räcker.</p>
<p>Svar B.</p>`,

  27: `<p>(1) Hela pizzan har arean ${tex('6 \\cdot 96\\pi = 576\\pi')}, så ${tex('r^2 = 576')} och ${tex('r = 24')} cm. Omkretsen är ${tex('2\\pi \\cdot 24 = 48\\pi')} cm. Räcker.</p>
<p>(2) Sex cirkelbågar om ${tex('8\\pi')} cm ger hela omkretsen ${tex('48\\pi')} cm. Räcker.</p>
<p>Var för sig räcker. Svar D.</p>`,

  28: `<p>(1) Antalet före Bo har minskat med 55, men vi vet inte hur många som stod före honom från början. Räcker inte.</p>
<p>(2) När Bo ställde sig sist stod ingen efter honom. Nu står 36 personer efter honom. Av de 100 i kön är alltså ${tex('100 - 36 - 1 = 63')} före Bo. Räcker.</p>
<p>Svar B.</p>`,

  // DTK: Kvinnor och män i näringslivet
  29: `<p>I hela riket är 29 procent av cheferna kvinnor. Länen med större andel: Gotland (35), Uppsala (35), Stockholm (34), Kronoberg (32), Halland (30) och Västerbotten (30). Östergötland har exakt 29 och räknas inte.</p>
<p>Det är 6 län. Svar B.</p>`,

  30: `<p>Gävleborgs län: män är 64 procent av samtliga anställda och 80 procent av cheferna.</p>
<p>${tex('80 - 64 = 16')} procentenheter.</p>
<p>Svar D.</p>`,

  31: `<p>Jämnast könsfördelning bland samtliga anställda har Stockholms län med 44 procent kvinnor och 56 procent män.</p>
<p>Bland cheferna i Stockholm är 34 procent kvinnor och 66 procent män, ungefär 1 : 2.</p>
<p>Svar B.</p>`,

  // DTK: Hushållens storlek
  32: `<p>Andelen hushåll med 3 personer (svarta fältet) är cirka 14 procent 1920, 17 procent 1930, 25 procent 1945, 23 procent 1950, 19 procent 1970 och 15 procent 1980.</p>
<p>Förändringarna: 1920–1930 cirka 3, 1930–1945 cirka 8, 1945–1950 cirka 2 och 1970–1980 cirka 4 procentenheter. Störst är 1930–1945.</p>
<p>Svar B.</p>`,

  33: `<p>1980 går fältet för 2 personer från cirka 33 till 64 procent, alltså cirka 31 procent av hushållen.</p>
<p>${tex('0{,}31 \\cdot 3\\,498\\,000 \\approx 1\\,080\\,000')}, närmast 1 100 000.</p>
<p>Svar A.</p>`,

  34: `<p>1910 var andelen enpersonshushåll cirka 6 procent, och 1990 cirka 40 procent. Skillnaden är cirka 34 procentenheter, närmast 33.</p>
<p>De andra alternativen: 2 personer ökade från cirka 9 till 31 procent (22 procentenheter), 4 personer från 14 till 12 (2), och 5+ personer minskade från 59 till 5 (54).</p>
<p>Svar D.</p>`,

  // DTK: Store mosse
  35: `<p>Fågeltornet vid Gungflyet ligger vid Kävsjöns sydvästra strand. Det andra fågeltornet ligger vid Kävsjö, alldeles norr om sjön, en aning österut.</p>
<p>Riktningen är nordnordostlig.</p>
<p>Svar D.</p>`,

  36: `<p>Området med tillträdesförbud är markerat med tjock streckad linje runt Kävsjön. Skalan visar att 5 km motsvarar drygt 2 cm på kartan i original.</p>
<p>Området är ungefär 3 km brett och 3,5 km högt men oregelbundet, så arean är ungefär 7 km<sup>2</sup>.</p>
<p>Svar B.</p>`,

  37: `<p>Den sydligaste parkeringen ligger vid Herrestadssjön. Vandringsleden (prickad linje) går därifrån norrut över Store mosse förbi Blådöpet och Lövö, vidare mot Kävsjön och fram till järnvägen.</p>
<p>Mät med skalstrecket (5 km): sträckan motsvarar drygt två skalstreck, alltså cirka 11 km.</p>
<p>Svar C.</p>`,

  // DTK: Förskrivning av antibiotika
  38: `<p>År 2013 var förskrivningen av nitrofurantoin cirka 46 och av fluorokinoloner cirka 20 per tusen kvinnor.</p>
<p>Nitrofurantoin är alltså ${tex('\\frac{46}{66} \\approx 70')} procent, och cirkeldiagram A har ett mörkt fält på ungefär 70 procent.</p>
<p>Svar A.</p>`,

  39: `<p>År 2003: pivmecillinam cirka 36, fluorokinoloner cirka 47, trimetoprim cirka 47 och nitrofurantoin cirka 13. Totalt cirka 143.</p>
<p>${tex('\\frac{36}{143} \\approx 0{,}25')}, alltså 25 procent.</p>
<p>Svar A.</p>`,

  40: `<p>År 2011: pivmecillinam cirka 67, nitrofurantoin cirka 43, fluorokinoloner cirka 21 och trimetoprim cirka 15 per tusen kvinnor. Summan är cirka 146 per tusen.</p>
<p>${tex('146 \\cdot 3\\,500 \\approx 511\\,000')}.</p>
<p>Svar C.</p>`,
};
