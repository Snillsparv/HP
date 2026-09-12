// Högskoleprovet 25 mars 2023, provpass 4 (kvantitativt).
// Uppgifterna är hämtade från UHR:s publicerade prov på studera.nu.
import { tex, figur, KVA_ALTERNATIV, NOG_ALTERNATIV } from '../types.js';
import type { ExtraPass } from '../types.js';

const B = '/extraprov/vt2023/';

const DTK1 = 'Vräkningar i Sverige: stapeldiagram över antalet ansökningar om avhysning och antalet verkställda avhysningar per år 1982 till 2014 samt kurva över verkställighetsgraden i procent';
const DTK2 = 'Berggrund, malm och mineraler i Jämtlands län: karta över länets berggrund med teckenförklaring samt karta över fyndplatser för malmer, mineraler och bergarter markerade med symboler';
const DTK3 = 'Regionala kostnader för kultur: tabell över regionernas och landstingens kostnader för kultur 2015 i tusental kronor, uppdelade på teater, dans, musik, bild och form, museer, bibliotek, film och medier, folkbildning, stipendier, allmänna kulturutgifter och totalt, per region samt riket totalt';
const DTK4 = 'Arbetskraften i Sverige: två ytdiagram över hur kvinnor respektive män i åldern 20 till 64 år fördelades efter arbetskraftstillhörighet 1970 till 2013, i procent: heltid, lång deltid, kort deltid, arbetslösa och ej i arbetskraften';

export const pass: ExtraPass = {
  id: 'vt2023-4',
  tillfalle: 'vt2023',
  passNr: 4,
  kind: 'kvant',
  name: 'Provpass 4 (kvantitativt)',
  timeMinutes: 55,
  extendedMinutes: 80,
  normering: [[0, 0.0], [17, 0.1], [20, 0.2], [22, 0.3], [24, 0.4], [27, 0.5], [30, 0.6], [35, 0.7], [38, 0.8], [42, 0.9], [46, 1.0], [50, 1.1], [54, 1.2], [59, 1.3], [63, 1.4], [66, 1.5], [69, 1.6], [71, 1.7], [73, 1.8], [75, 1.9], [77, 2.0]],
  subTests: [
    {
      id: 'xyz', name: 'XYZ – Matematisk problemlösning', shortName: 'XYZ', type: 'xyz',
      questions: [
        { num: 1, text: `${tex('5(x - 4) = 2(8 + x)')}<br><br><b>Vad är <i>x</i>?</b>`, options: [tex('\\frac{4}{3}'), '5', tex('\\frac{36}{7}'), '12'], correct: 3, category: 'algebra' },
        { num: 2, text: `Sixten har en påse med enfärgade kulor i fem olika färger: blå, grön, röd, svart och vit. Antalet kulor av varje färg visas i tabellen:${figur(B + 'p4-xyz2.webp', 'Tabell: blå 50, grön 63, röd 36, svart 56, vit 45', 110)}<b>En av färgerna förekommer på exakt 18 % av kulorna, vilken?</b>`, options: ['grön', 'röd', 'svart', 'vit'], correct: 3, category: 'procent' },
        { num: 3, text: `<b>Vilket svarsalternativ motsvarar uttrycket ${tex('x^2 - 6x + 5')}?</b>`, options: [tex('(x - 2)(x - 3)'), tex('(x - 1)(x - 5)'), tex('(x + 3)(x - 2)'), tex('(x + 5)(x - 1)')], correct: 1, category: 'algebra' },
        { num: 4, text: `ABCDE är en regelbunden femhörning med vinkelsumman 540°.<br><b>Hur stor är vinkeln <i>x</i>?</b>${figur(B + 'p4-xyz4.webp', 'Regelbunden femhörning ABCDE där sidorna BA och DE har förlängts tills de möts i en spets till vänster, där vinkeln x finns', 380)}`, options: ['36°', '45°', '54°', '72°'], correct: 0, category: 'geometri' },
        { num: 5, text: `<b>Vad är ${tex('\\left(\\frac{1}{2} + \\frac{2}{5}\\right)\\left(\\frac{1}{2} - \\frac{2}{5}\\right)')}?</b>`, options: [tex('\\frac{1}{7}'), tex('\\frac{1}{10}'), tex('\\frac{3}{100}'), tex('\\frac{9}{100}')], correct: 3, category: 'aritmetik' },
        { num: 6, text: `${tex('xy + k = k')}<br>${tex('y \\neq 0')}<br><br><b>Vilket svarsalternativ är med säkerhet korrekt?</b>`, options: [tex('x > y'), tex('x = 0'), tex('x - y = 0'), tex('xy = -1')], correct: 1, category: 'algebra' },
        { num: 7, text: `<b>Vilket svarsalternativ ligger närmast värdet av <i>x</i>?</b>${figur(B + 'p4-xyz7.webp', 'Rätvinklig triangel med kateterna 7 cm och 11 cm och hypotenusan x', 300)}`, options: ['13', '14', '17', '18'], correct: 0, category: 'geometri' },
        { num: 8, text: '<b>Vilket svarsalternativ är en ekvation för en linje som går genom punkten (5, 13)?</b>', options: [tex('y = -5x + 12'), tex('y = -3x + 25'), tex('y = 3x - 2'), tex('y = 5x - 13')], correct: 2, category: 'funktioner' },
        { num: 9, text: `För de tre positiva heltalen <i>x</i>, <i>y</i> och <i>z</i> gäller att ${tex('x < y < z')}. Medelvärdet av talen är 7 och medianen är 9. <b>Vilket är det största möjliga värdet på <i>x</i>?</b>`, options: ['1', '2', '3', '4'], correct: 1, category: 'statistik' },
        { num: 10, text: 'Eva har en tunna som är fylld till en femtedel med vatten. Eva vattnar sin trädgård och fyller sin vattenkanna från tunnan. Vattenkannan rymmer 5 liter och då Eva vattnar använder hon tre fulla kannor. När Eva har vattnat klart är tunnan fylld till en åttondel. <b>Vilken volym har tunnan?</b>', options: ['45 liter', '120 liter', '200 liter', '225 liter'], correct: 2, category: 'algebra' },
        { num: 11, text: `${tex('f(x) = \\frac{x}{5} - 1')}<br><br>${tex('g(x) = 5 \\cdot f(x) + 4')}<br><br><b>Vad är ${tex('g(2)')}?</b>`, options: ['1', '3', '5', '14'], correct: 0, category: 'funktioner' },
        { num: 12, text: `<b>Vilket svarsalternativ är lika med ${tex('2^2(5 + 7)^2')}?</b>`, options: [tex('24^2'), tex('10^2 + 14^2'), tex('24^4'), tex('10^4 + 14^4')], correct: 0, category: 'aritmetik' },
      ],
    },
    {
      id: 'kva', name: 'KVA – Kvantitativa jämförelser', shortName: 'KVA', type: 'kva',
      questions: [
        { num: 13, text: tex('f(x) = 83 - 9x'), q1: `Värdet av <i>x</i> då ${tex('f(x)')} är lika med noll`, q2: '9,5', options: KVA_ALTERNATIV, correct: 1, category: 'funktioner' },
        { num: 14, text: '', q1: tex('\\frac{1}{2} \\cdot \\frac{3}{4}'), q2: tex('\\dfrac{\\;\\frac{1}{2}\\;}{\\frac{3}{4}}'), options: KVA_ALTERNATIV, correct: 1, category: 'aritmetik' },
        { num: 15, text: 'Hampus har sju mynt. Vart och ett av mynten är antingen en femkrona eller en tiokrona. Hampus vill köpa en leksak som kostar 105 kronor. För att kunna köpa leksaken lånar han mellanskillnaden av sin mamma.', q1: 'Beloppet som Hampus lånar av sin mamma', q2: '60 kronor', options: KVA_ALTERNATIV, correct: 3, category: 'aritmetik' },
        { num: 16, text: '', q1: tex('\\frac{3x - 1}{4}'), q2: tex('0{,}75x - 0{,}25'), options: KVA_ALTERNATIV, correct: 2, category: 'algebra' },
        { num: 17, text: 'En vanlig sexsidig tärning kastas slumpmässigt fem gånger.', q1: 'Medianen av de fem utfallen', q2: 'Det näst största värdet av de fem utfallen', options: KVA_ALTERNATIV, correct: 3, category: 'statistik' },
        { num: 18, text: tex('x > 4'), q1: tex('\\sqrt{x}'), q2: tex('\\frac{x}{2}'), options: KVA_ALTERNATIV, correct: 1, category: 'algebra' },
        { num: 19, text: '', q1: '75 % av arean av en cirkel med radien 4 cm', q2: 'Arean av en cirkel med radien 3 cm', options: KVA_ALTERNATIV, correct: 0, category: 'geometri' },
        { num: 20, text: tex('2^{x - 1} = 32'), q1: '<i>x</i>', q2: tex('5 \\cdot x^0'), options: KVA_ALTERNATIV, correct: 0, category: 'algebra' },
        { num: 21, text: '<i>x</i> är 75 procent av 80.<br>8 är <i>y</i> procent av 12.', q1: '<i>x</i>', q2: '<i>y</i>', options: KVA_ALTERNATIV, correct: 1, category: 'procent' },
        { num: 22, text: figur(B + 'p4-kva22.webp', 'Två rätvinkliga trianglar: den första med kateterna 3x och 3x och hypotenusan y, den andra med kateterna 2x och 4x och hypotenusan z', 360), q1: '<i>y</i>', q2: '<i>z</i>', options: KVA_ALTERNATIV, correct: 1, category: 'geometri' },
      ],
    },
    {
      id: 'nog', name: 'NOG – Kvantitativa resonemang', shortName: 'NOG', type: 'nog',
      questions: [
        { num: 23, text: 'På en badplats finns det 70 personer: barn och vuxna. Var och en av personerna på badplatsen är antingen i vattnet eller på land. <b>Hur många barn är i vattnet?</b>', s1: 'Antalet barn på land är lika med antalet vuxna i vattnet.', s2: 'Antalet vuxna på badplatsen är lika med antalet personer på land.', options: NOG_ALTERNATIV, correct: 4, category: 'logik' },
        { num: 24, text: 'En antilop, en giraff och en zebra står på rad vid ett vattenhål. <b>Vilket av de tre djuren står i mitten?</b>', s1: 'Både giraffen och antilopen står till vänster om zebran.', s2: 'Både zebran och antilopen står till höger om giraffen.', options: NOG_ALTERNATIV, correct: 2, category: 'logik' },
        { num: 25, text: `I en klass finns det <i>x</i> elever, där ${tex('25 < x < 60')}. <b>Hur många elever finns det i klassen?</b>`, s1: 'Om eleverna delas in i grupper om 5 blir det 4 elever över.', s2: 'Eleverna kan delas in i grupper om 9.', options: NOG_ALTERNATIV, correct: 2, category: 'aritmetik' },
        { num: 26, text: 'Tre skattkistor är märkta A, B respektive C. En av kistorna är tom, en innehåller en liten skatt och en innehåller en stor skatt. <b>I vilken kista finns den stora skatten?</b>', s1: 'Kista B är inte tom. Den stora skatten finns inte i kista A.', s2: 'Kista C är tom. Den lilla skatten finns inte i kista B.', options: NOG_ALTERNATIV, correct: 1, category: 'logik' },
        { num: 27, text: '<b>Hur många syskon har Alice?</b>', s1: 'Alice har dubbelt så många systrar som bröder.', s2: 'Om Alice hade haft 3 syskon färre så skulle hon ha haft hälften så många syskon som hon verkligen har.', options: NOG_ALTERNATIV, correct: 1, category: 'algebra' },
        { num: 28, text: '<b>Vad är medelvärdet av <i>a</i> och <i>b</i>?</b>', s1: `Medelvärdet av ${tex('(a + 5)')} och ${tex('(b + 9)')} är lika med 10,5.`, s2: `Medelvärdet av <i>a</i>, ${tex('(b - 1)')} och 3 är lika med 3.`, options: NOG_ALTERNATIV, correct: 3, category: 'statistik' },
      ],
    },
    {
      id: 'dtk', name: 'DTK – Diagram, tabeller och kartor', shortName: 'DTK', type: 'dtk',
      questions: [
        { num: 29, text: '<b>Hur såg förhållandet ut 2010 mellan antalet ansökningar om avhysning och antalet verkställda avhysningar?</b>', options: ['2:1', '3:1', '4:1', '5:1'], correct: 1, diagram: B + 'p4-dtk1.webp', diagramAlt: DTK1, category: 'diagram' },
        { num: 30, text: '<b>Under vilken av nedanstående perioder gällde för varje år att ansökningarna om avhysning var färre än 15 000 och att verkställighetsgraden låg i intervallet 35–40 procent?</b>', options: ['1989–1992', '1993–1997', '2000–2005', '2008–2014'], correct: 2, diagram: B + 'p4-dtk1.webp', diagramAlt: DTK1, category: 'diagram' },
        { num: 31, text: 'År 2014 var det 234 av de verkställda avhysningarna som berörde barn. <b>Hur stor andel av det totala antalet verkställda avhysningar 2014 berörde barn?</b>', options: ['1/5', '1/6', '1/10', '1/20'], correct: 2, diagram: B + 'p4-dtk1.webp', diagramAlt: DTK1, category: 'diagram' },
        { num: 32, text: '<b>Med hur många procent ökade antalet ansökningar om avhysning från 1992 till 1993?</b>', options: ['45 procent', '55 procent', '65 procent', '75 procent'], correct: 1, diagram: B + 'p4-dtk1.webp', diagramAlt: DTK1, category: 'diagram' },
        { num: 33, text: '<b>Vilken berggrund finns där Berge ligger?</b>', options: ['Dala-sandsten', 'Magmabergarter', 'Revsundsgraniter', 'Kambro-Silur-avlagringar'], correct: 3, diagram: B + 'p4-dtk2.webp', diagramAlt: DTK2, category: 'karta' },
        { num: 34, text: '<b>Hur långt är det fågelvägen mellan den sydligast och den nordligast belägna platsen med talk?</b>', options: ['150 km', '190 km', '220 km', '250 km'], correct: 1, diagram: B + 'p4-dtk2.webp', diagramAlt: DTK2, category: 'karta' },
        { num: 35, text: '<b>Hur stor area har det sydligast belägna området med urbergets yngsta graniter?</b>', options: ['2 300 km<sup>2</sup>', '4 300 km<sup>2</sup>', '6 300 km<sup>2</sup>', '8 300 km<sup>2</sup>'], correct: 1, diagram: B + 'p4-dtk2.webp', diagramAlt: DTK2, category: 'karta' },
        { num: 36, text: '<b>Hur stor andel av de regionala kostnaderna för kultur i riket totalt utgjordes av kostnader för teater, dans och musik?</b>', options: ['1/8', '2/8', '3/8', '4/8'], correct: 2, diagram: B + 'p4-dtk3.webp', diagramAlt: DTK3, category: 'tabell' },
        { num: 37, text: '<b>För vilket kulturområde gällde både att Stockholms utgifter var hälften av Västra Götalands och att Blekinges utgifter var en fjärdedel av Västerbottens?</b>', options: ['Dans', 'Bild och form', 'Bibliotek', 'Film och medier'], correct: 1, diagram: B + 'p4-dtk3.webp', diagramAlt: DTK3, category: 'tabell' },
        { num: 38, text: '<b>Vilken av följande grupper hade ökat sin andel med 10 procentenheter om man jämför år 2000 med 1980?</b>', options: ['Kvinnor som arbetade heltid', 'Kvinnor som ej var i arbetskraften', 'Män som arbetade heltid', 'Män som ej var i arbetskraften'], correct: 0, diagram: B + 'p4-dtk4.webp', diagramAlt: DTK4, category: 'diagram' },
        { num: 39, text: 'År 2013 fanns det 2,7 miljoner kvinnor och 2,8 miljoner män i åldern 20–64 år i Sverige. <b>Hur stor andel av samtliga 20–64-åringar var heltidsarbetande?</b>', options: ['45 procent', '55 procent', '65 procent', '75 procent'], correct: 2, diagram: B + 'p4-dtk4.webp', diagramAlt: DTK4, category: 'diagram' },
        { num: 40, text: '<b>Hur stor var andelen arbetslösa män året då den var som störst jämfört med året då den var som minst?</b>', options: ['Dubbelt så stor', 'Tre gånger så stor', 'Fem gånger så stor', 'Åtta gånger så stor'], correct: 3, diagram: B + 'p4-dtk4.webp', diagramAlt: DTK4, category: 'diagram' },
      ],
    },
  ],
};
