// Högskoleprovet 12 mars 2022, provpass 5 (kvantitativt).
// Uppgifterna är hämtade från UHR:s publicerade prov på studera.nu.
import { tex, figur, KVA_ALTERNATIV, NOG_ALTERNATIV } from '../types.js';
import type { ExtraPass } from '../types.js';

const B = '/extraprov/vt2022mars/';
const paj = (bokstav: string) => `<img src="${B}p5-dtk38${bokstav}.webp" alt="Cirkeldiagram ${bokstav.toUpperCase()}" data-fadein style="max-width:110px;width:100%;vertical-align:middle;" />`;

const DTK1 = 'Kvinnor och män i näringslivet: tabell över antalet chefer respektive samtliga anställda inom privat sektor 2012, uppdelat på kvinnor och män samt på län, med antal och könsfördelning i procent';
const DTK2 = 'Hushållens storlek under 1900-talet: staplat stapeldiagram över Sveriges hushåll procentuellt fördelade efter hushållsstorlek (1 person, 2 personer, 3 personer, 4 personer, 5 eller fler personer) åren 1910, 1920, 1930, 1945, 1950, 1960, 1970, 1980 och 1990';
const DTK3 = 'Store mosse nationalpark: karta över området kring Store mosse i västra Småland på 1970-talet med restsjöar, myr, reservatgräns, område med tillträdesförbud 1 mars till 30 september, vandringsleder, vägar, järnväg, fågeltorn, parkeringar och hus, samt skalstreck 0 till 5 km';
const DTK4 = 'Förskrivning av antibiotika: linjediagram över antalet förskrivningar per tusen kvinnor av pivmecillinam, nitrofurantoin, fluorokinoloner och trimetoprim för behandling av nedre urinvägsinfektioner hos kvinnor 18 till 79 år 2000 till 2015';

export const pass: ExtraPass = {
  id: 'vt2022mars-5',
  tillfalle: 'vt2022mars',
  passNr: 5,
  kind: 'kvant',
  name: 'Provpass 5 (kvantitativt)',
  timeMinutes: 55,
  extendedMinutes: 80,
  normering: [[0, 0.0], [17, 0.1], [20, 0.2], [22, 0.3], [25, 0.4], [28, 0.5], [31, 0.6], [35, 0.7], [39, 0.8], [42, 0.9], [45, 1.0], [49, 1.1], [53, 1.2], [57, 1.3], [61, 1.4], [64, 1.5], [67, 1.6], [69, 1.7], [72, 1.8], [74, 1.9], [76, 2.0]],
  subTests: [
    {
      id: 'xyz', name: 'XYZ – Matematisk problemlösning', shortName: 'XYZ', type: 'xyz',
      questions: [
        { num: 1, text: `${tex('x - 7 = 3(x + 1)')}<br><br><b>Vilket värde har <i>x</i>?</b>`, options: ['−5', '−4', '2', tex('\\frac{5}{2}')], correct: 0, category: 'algebra' },
        { num: 2, text: `${figur(B + 'p5-xyz2.webp', 'En rätvinklig triangel med det räta hörnet nere till vänster. Från det spetsiga hörnet till höger går två linjer till den lodräta vänstra sidan: den övre bildar vinkeln x med sidan högst upp, den nedre bildar vinkeln y. Vinkeln mellan de två linjerna är 10° och vinkeln mellan den nedre linjen och basen är 20°.', 420)}<b>Vad är <i>x</i> + <i>y</i>?</b>`, options: ['110°', '120°', '130°', '140°'], correct: 2, category: 'geometri' },
        { num: 3, text: `<b>Vad är medelvärdet av ${tex('8^2')} och ${tex('4^2')}?</b>`, options: [tex('2 \\cdot 4^2'), tex('6^2'), tex('2^3 \\cdot 5'), tex('2^2 \\cdot 12')], correct: 2, category: 'aritmetik' },
        { num: 4, text: `${tex('f(x) = 3x - 1')}<br>${tex('g(x) = -2f(x) + 4')}<br><br><b>Vilket svarsalternativ är lika med ${tex('g(1)')}?</b>`, options: ['0', '2', '4', '6'], correct: 0, category: 'funktioner' },
        { num: 5, text: `<b>Vad är ${tex('\\dfrac{\\frac{2}{5} - \\frac{1}{4}}{\\frac{1}{3} + \\frac{1}{6}}')}?</b>`, options: [tex('\\frac{2}{9}'), tex('\\frac{3}{10}'), tex('\\frac{9}{2}'), tex('\\frac{10}{3}')], correct: 1, category: 'aritmetik' },
        { num: 6, text: '<b>Vilket svarsalternativ är lika med ett heltal?</b>', options: [tex('51\\sqrt{51}'), tex('\\sqrt{51}\\left(\\sqrt{51} + 51\\right)'), tex('\\sqrt{51} + \\sqrt{51}'), tex('\\left(\\sqrt{51} + \\sqrt{51}\\right)^2')], correct: 3, category: 'aritmetik' },
        { num: 7, text: `${tex('f(x) = a \\cdot 3^x')}<br><br><b>Om <i>a</i> väljs så att ${tex('f(1) = 3')}, vilket värde har då ${tex('f(0)')}?</b>`, options: ['0', tex('\\frac{1}{3}'), '1', '3'], correct: 2, category: 'funktioner' },
        { num: 8, text: `${tex('xyz \\neq 0')}<br><br><b>Vilket svarsalternativ motsvarar ${tex('\\frac{x^4 y^2 z^3}{(x^2 y z^2)^2}')}?</b>`, options: [tex('\\frac{1}{yz}'), '1', tex('\\frac{1}{y}'), tex('\\frac{1}{z}')], correct: 3, category: 'algebra' },
        { num: 9, text: '60 % av <i>x</i> är lika med 40 % av <i>y</i>. <b>Hur många procent av <i>x</i> är <i>y</i>?</b>', options: ['20 %', '66 %', '100 %', '150 %'], correct: 3, category: 'procent' },
        { num: 10, text: 'Arean av en kvadrat är 100 cm<sup>2</sup>. <b>Vilket svarsalternativ är närmast längden av kvadratens diagonal?</b>', options: ['10 cm', '12 cm', '14 cm', '16 cm'], correct: 2, category: 'geometri' },
        { num: 11, text: `${tex('z = x + y = 5')}<br><br><b>Vad är ${tex('\\sqrt{xz + yz}')}?</b>`, options: [tex('\\sqrt{5}'), '5', tex('5\\sqrt{5}'), '25'], correct: 1, category: 'algebra' },
        { num: 12, text: 'Summan av de 30 första udda positiva heltalen är <i>u</i>. Summan av de 30 första jämna positiva heltalen är <i>j</i>. <b>Vad är <i>u</i> − <i>j</i>?</b>', options: ['−30', '−1', '0', '30'], correct: 0, category: 'aritmetik' },
      ],
    },
    {
      id: 'kva', name: 'KVA – Kvantitativa jämförelser', shortName: 'KVA', type: 'kva',
      questions: [
        { num: 13, text: '', q1: tex('\\frac{707}{70}'), q2: tex('\\frac{808}{80}'), options: KVA_ALTERNATIV, correct: 2, category: 'aritmetik' },
        { num: 14, text: 'De fyra punkterna A, B, C och D är placerade i samma koordinatsystem.<br>A = (0, 0)<br>B = (4, 3)<br>C = (8, 0)<br>D = (8, 1)', q1: 'Den sammanlagda längden av sträckorna AB och BC', q2: 'Längden av sträckan AD', options: KVA_ALTERNATIV, correct: 0, category: 'geometri' },
        { num: 15, text: '', q1: 'Volymen av en cylinder med höjden 5 cm och radien 2 cm', q2: 'Volymen av en cylinder med höjden 2 cm och radien 5 cm', options: KVA_ALTERNATIV, correct: 1, category: 'geometri' },
        { num: 16, text: tex('\\frac{x}{3} - \\frac{1}{5} = \\frac{1}{3} + \\frac{1}{5}'), q1: '<i>x</i>', q2: '2', options: KVA_ALTERNATIV, correct: 0, category: 'algebra' },
        { num: 17, text: tex('3 < p < 5'), q1: tex('p^3'), q2: tex('42p'), options: KVA_ALTERNATIV, correct: 1, category: 'algebra' },
        { num: 18, text: 'En påse innehåller endast 9 enfärgade kulor: 5 röda och 4 blå. Albin plockar slumpmässigt två kulor ur påsen. Han plockar dem en och en utan att lägga tillbaka dem.', q1: 'Sannolikheten att Albin först plockar en röd kula och sedan en blå kula', q2: 'Sannolikheten att Albin först plockar en röd kula och sedan ytterligare en röd kula', options: KVA_ALTERNATIV, correct: 2, category: 'sannolikhet' },
        { num: 19, text: tex('36^{\\frac{1}{3}} = 6^{2x}'), q1: '<i>x</i>', q2: tex('\\frac{2}{5}'), options: KVA_ALTERNATIV, correct: 1, category: 'algebra' },
        { num: 20, text: 'Summan av fem på varandra följande heltal är 15.', q1: 'Skillnaden mellan det största och det minsta talet', q2: '5', options: KVA_ALTERNATIV, correct: 1, category: 'aritmetik' },
        { num: 21, text: `<i>n</i> är ett heltal sådant att ${tex('-10 \\leq n \\leq 10')}.`, q1: tex('10^n'), q2: tex('n^{10}'), options: KVA_ALTERNATIV, correct: 3, category: 'algebra' },
        { num: 22, text: `R är en rektangel.<br>${tex('x > a')}${figur(B + 'p5-kva22.webp', 'Rektangeln R med basen x + a och höjden x − a.', 300)}`, q1: 'Arean av R om <i>a</i> = 0', q2: 'Arean av R om <i>a</i> > 0', options: KVA_ALTERNATIV, correct: 0, category: 'algebra' },
      ],
    },
    {
      id: 'nog', name: 'NOG – Kvantitativa resonemang', shortName: 'NOG', type: 'nog',
      questions: [
        { num: 23, text: 'Malin har en påse med äpplen. <b>Hur många äpplen finns det i påsen?</b>', s1: 'Om Malin lägger ner ytterligare två äpplen i påsen så utgör dessa två äpplen 1/12 av antalet äpplen i påsen.', s2: 'Om Malin plockar bort två äpplen ur påsen så minskar antalet äpplen i påsen med 1/11.', options: NOG_ALTERNATIV, correct: 3, category: 'aritmetik' },
        { num: 24, text: 'I ett val ställde två kandidater upp. Alla valsedlar var giltiga, och varje röst lades på någon av de två kandidaterna. <b>Hur många röster lades i valet?</b>', s1: 'Den kandidat som vann valet fick 56 % av rösterna.', s2: 'Den kandidat som vann valet fick 1 200 röster fler än den som förlorade.', options: NOG_ALTERNATIV, correct: 2, category: 'procent' },
        { num: 25, text: 'Alexandra, Benjamin, Julia och Sebastian är syskon. <b>Vilket av syskonen är yngst?</b>', s1: 'Benjamin är äldre än Alexandra. Julia är dubbelt så gammal som Sebastian.', s2: 'Sebastian är 5 år och Benjamin är 12 år.', options: NOG_ALTERNATIV, correct: 4, category: 'logik' },
        { num: 26, text: 'Fyra nycklar är numrerade 1, 2, 3, 4. Var och en av nycklarna passar i ett av fyra lås som också är numrerade 1, 2, 3, 4. <b>Vilken nyckel passar i vilket lås?</b>', s1: 'Ingen nyckel har samma nummer som det lås den passar i.', s2: 'Summan av låsets och nyckelns nummer är densamma för varje par av lås och passande nyckel.', options: NOG_ALTERNATIV, correct: 1, category: 'logik' },
        { num: 27, text: 'En cirkelformad pizza delas i sex likadana bitar i form av cirkelsektorer. <b>Hur stor är pizzans omkrets?</b>', s1: 'Arean av varje bit är 96π cm<sup>2</sup>.', s2: 'Cirkelbågen på varje bit är 8π cm.', options: NOG_ALTERNATIV, correct: 3, category: 'geometri' },
        { num: 28, text: 'Bo ställer sig sist i en kö för att åka berg- och dalbana. Efter 10 minuter står det 100 personer i kön. <b>Hur många personer står före Bo i kön vid denna tidpunkt?</b>', s1: 'Sedan Bo ställde sig i kön har antalet personer före honom i kön minskat med 55.', s2: 'Sedan Bo ställde sig i kön har antalet personer efter honom i kön ökat med 36.', options: NOG_ALTERNATIV, correct: 1, category: 'logik' },
      ],
    },
    {
      id: 'dtk', name: 'DTK – Diagram, tabeller och kartor', shortName: 'DTK', type: 'dtk',
      questions: [
        { num: 29, text: '<b>Hur många av länen hade en större andel kvinnliga chefer än riket som helhet?</b>', options: ['4', '6', '12', '14'], correct: 1, diagram: B + 'p5-dtk1.webp', diagramAlt: DTK1, category: 'tabell' },
        { num: 30, text: 'Studera Gävleborgs län. <b>Hur stor var skillnaden mellan andelen män bland samtliga anställda och andelen män bland chefer?</b>', options: ['8 procentenheter', '10 procentenheter', '13 procentenheter', '16 procentenheter'], correct: 3, diagram: B + 'p5-dtk1.webp', diagramAlt: DTK1, category: 'tabell' },
        { num: 31, text: 'Identifiera länet som hade den jämnaste könsfördelningen bland samtliga anställda. <b>Vilket var förhållandet kvinnor : män bland cheferna i detta län?</b>', options: ['1:1', '1:2', '1:3', '1:4'], correct: 1, diagram: B + 'p5-dtk1.webp', diagramAlt: DTK1, category: 'tabell' },
        { num: 32, text: 'Studera hur andelen hushåll med 3 personer har förändrats. <b>Mellan vilka av nedanstående år skedde den största förändringen, i procentenheter räknat?</b>', options: ['1920 och 1930', '1930 och 1945', '1945 och 1950', '1970 och 1980'], correct: 1, diagram: B + 'p5-dtk2.webp', diagramAlt: DTK2, category: 'diagram' },
        { num: 33, text: 'År 1980 fanns det cirka 3 498 000 hushåll i Sverige. <b>Hur många hade hushållsstorleken 2 personer?</b>', options: ['1 100 000', '1 400 000', '1 700 000', '2 300 000'], correct: 0, diagram: B + 'p5-dtk2.webp', diagramAlt: DTK2, category: 'diagram' },
        { num: 34, text: 'Jämför 1910 och 1990. <b>För vilken hushållsstorlek gällde att dess andel hade förändrats med 33 procentenheter?</b>', options: ['5+ personer', '4 personer', '2 personer', '1 person'], correct: 3, diagram: B + 'p5-dtk2.webp', diagramAlt: DTK2, category: 'diagram' },
        { num: 35, text: 'Utgå från fågeltornet som ligger vid Gungflyet. <b>I vilken riktning ligger det andra fågeltornet?</b>', options: ['Sydsydostlig riktning', 'Sydsydvästlig riktning', 'Nordnordvästlig riktning', 'Nordnordostlig riktning'], correct: 3, diagram: B + 'p5-dtk3.webp', diagramAlt: DTK3, category: 'karta' },
        { num: 36, text: '<b>Hur stort är området som har tillträdesförbud perioden mars–september?</b>', options: ['3 km<sup>2</sup>', '7 km<sup>2</sup>', '11 km<sup>2</sup>', '15 km<sup>2</sup>'], correct: 1, diagram: B + 'p5-dtk3.webp', diagramAlt: DTK3, category: 'karta' },
        { num: 37, text: 'Utgå från den sydligast belägna parkeringen i området. Följ vandringsleden norrut fram till järnvägen. <b>Hur lång är sträckan?</b>', options: ['6 km', '8 km', '11 km', '13 km'], correct: 2, diagram: B + 'p5-dtk3.webp', diagramAlt: DTK3, category: 'karta' },
        { num: 38, text: `<b>Vilket cirkeldiagram illustrerar förhållandet mellan antalet förskrivningar per tusen kvinnor av nitrofurantoin och fluorokinoloner år 2013?</b><br><br><img src="${B}p5-dtk38leg.webp" alt="Teckenförklaring: mörkt fält är nitrofurantoin, ljust fält är fluorokinoloner" data-fadein style="max-width:170px;width:100%;" />`, options: [paj('a'), paj('b'), paj('c'), paj('d')], correct: 0, diagram: B + 'p5-dtk4.webp', diagramAlt: DTK4, category: 'diagram' },
        { num: 39, text: '<b>Hur stor andel av de redovisade antibiotikaförskrivningarna per tusen kvinnor år 2003 avsåg pivmecillinam?</b>', options: ['25 procent', '35 procent', '50 procent', '75 procent'], correct: 0, diagram: B + 'p5-dtk4.webp', diagramAlt: DTK4, category: 'diagram' },
        { num: 40, text: 'År 2011 var antalet kvinnor i åldrarna 18–79 år cirka 3,5 miljoner. <b>Hur många förskrivningar gjordes totalt av de fyra redovisade antibiotikasorterna under detta år?</b>', options: ['145 000', '350 000', '510 000', '675 000'], correct: 2, diagram: B + 'p5-dtk4.webp', diagramAlt: DTK4, category: 'diagram' },
      ],
    },
  ],
};
