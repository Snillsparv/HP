// Högskoleprovet 8 maj 2021, provpass 5 (kvantitativt).
// Uppgifterna är hämtade från UHR:s publicerade prov på studera.nu.
import { tex, figur, KVA_ALTERNATIV, NOG_ALTERNATIV } from '../types.js';
import type { ExtraPass } from '../types.js';

const B = '/extraprov/vt2021maj/';

const DTK1 = 'Statliga medel till kulturverksamhet: tabell över statliga medel till kulturverksamhet i Sverige totalt samt per län 2006 till 2012, i tusental kronor och kronor per invånare i löpande priser';
const DTK2 = 'Månens faser och höjdlägen: diagram över månens fas i procent (tjock kurva, 0 procent nymåne och 100 procent fullmåne) och månens höjdläge i grader över eller under horisonten (tunn kurva) i Göteborg 21 augusti till 19 september 2015';
const DTK3 = 'Arbetsinkomst och anställningsform: två stapeldiagram över medianinkomsten för arbetare respektive tjänstemän efter kön och anställningsform 2002, 2005 och 2007, samt ett stapeldiagram över medianinkomsten för män och kvinnor efter ålder och anställningsform 2007';
const DTK4 = 'Hästskjutsar i Västerbottens län 1875: karta med gästgiverier markerade med cirklar vars storlek anger antalet hästskjutsar (50 till 1 300), landsvägar, vintervägar, färjor, länsgräns och skalstreck 0 till 50 km';

export const pass: ExtraPass = {
  id: 'vt2021maj-5',
  tillfalle: 'vt2021maj',
  passNr: 5,
  kind: 'kvant',
  name: 'Provpass 5 (kvantitativt)',
  timeMinutes: 55,
  extendedMinutes: 80,
  normering: [[0, 0.0], [19, 0.1], [21, 0.2], [24, 0.3], [26, 0.4], [29, 0.5], [32, 0.6], [35, 0.7], [38, 0.8], [43, 0.9], [47, 1.0], [51, 1.1], [55, 1.2], [58, 1.3], [61, 1.4], [65, 1.5], [68, 1.6], [70, 1.7], [72, 1.8], [74, 1.9], [76, 2.0]],
  subTests: [
    {
      id: 'xyz', name: 'XYZ – Matematisk problemlösning', shortName: 'XYZ', type: 'xyz',
      questions: [
        { num: 1, text: `${tex('4(x - 2) = -2(x + 4)')}<br><br><b>Vad är <i>x</i>?</b>`, options: ['0', '1', '2', '8'], correct: 0, category: 'algebra' },
        { num: 2, text: 'Talen 13, 14, 26 och <i>x</i> har medelvärdet 16. <b>Vilket värde har <i>x</i>?</b>', options: ['11', '13', '16', '17'], correct: 0, category: 'statistik' },
        { num: 3, text: `<b>Vad är ${tex('\\frac{1}{3}\\left(\\frac{1}{2} + \\frac{1}{6}\\right)')}?</b>`, options: [tex('\\frac{1}{6}'), tex('\\frac{2}{6}'), tex('\\frac{1}{9}'), tex('\\frac{2}{9}')], correct: 3, category: 'aritmetik' },
        { num: 4, text: `${tex('f(x) = 4x - 4')}<br>${tex('g(x) = -3f(x) - 12')}<br><br><b>Vilket värde har ${tex('g(2)')}?</b>`, options: ['−24', '−18', '−12', '0'], correct: 0, category: 'funktioner' },
        { num: 5, text: '40 % av <i>x</i> är 54. <b>Vilket värde har <i>x</i>?</b>', options: ['90', '125', '135', '216'], correct: 2, category: 'procent' },
        { num: 6, text: `<i>x</i>, <i>y</i>, <i>z</i> och <i>w</i> är fyra på varandra följande heltal sådana att ${tex('x < y < z < w')}. <b>Vad är ${tex('(z + w) - (x + y)')}?</b>`, options: ['−4', '−2', '2', '4'], correct: 3, category: 'aritmetik' },
        { num: 7, text: `${tex('a \\neq 0')}<br><br><b>Vilket svarsalternativ motsvarar uttrycket ${tex('\\frac{a^5 \\cdot a^{-3}}{a^{-8} \\cdot a^2}')}?</b>`, options: [tex('a^{-4}'), tex('a^{-2}'), tex('a^4'), tex('a^8')], correct: 3, category: 'algebra' },
        { num: 8, text: `${tex('\\frac{4}{x} = \\frac{5}{6}')}<br><br><b>Vad är <i>x</i>?</b>`, options: [tex('\\frac{4 \\cdot 6}{5}'), tex('\\frac{4 \\cdot 5}{6}'), tex('\\frac{6}{4 \\cdot 5}'), tex('\\frac{5}{4 \\cdot 6}')], correct: 0, category: 'algebra' },
        { num: 9, text: 'Innermåtten för en cylinderformad marmeladburk är sådana att höjden är 5 cm och radien är 2 cm. <b>Vilket är det minsta antalet sådana burkar som behövs för att rymma 0,6 liter marmelad?</b>', options: ['5', '10', '15', '20'], correct: 1, category: 'geometri' },
        { num: 10, text: `Två kvadrater och en triangel är placerade så att en sida i vardera kvadrat utgör en sida i triangeln, enligt figuren. <b>Vilken area har triangeln?</b>${figur(B + 'p5-xyz10.webp', 'En rätvinklig triangel med det räta hörnet nere till vänster. På den lodräta kateten sitter en kvadrat med arean 9 cm² och på hypotenusan en kvadrat med arean 25 cm².', 320)}`, options: ['6 cm<sup>2</sup>', '7,5 cm<sup>2</sup>', '12 cm<sup>2</sup>', '15 cm<sup>2</sup>'], correct: 0, category: 'geometri' },
        { num: 11, text: `<b>Vad är ${tex('\\sqrt{36 \\cdot 10^{36}}')}?</b>`, options: [tex('18 \\cdot 10^{18}'), tex('6 \\cdot 10^{18}'), tex('18 \\cdot 10^{6}'), tex('6 \\cdot 10^{6}')], correct: 1, category: 'aritmetik' },
        { num: 12, text: `${figur(B + 'p5-xyz12.webp', 'Koordinatsystem med linjen L som går genom origo och lutar uppåt åt höger.', 320)}L: ${tex('y = \\frac{1}{2}x')}<br><br>Linjen L delar koordinatsystemet i en övre och en undre halva.<br><b>Vilket svarsalternativ anger en punkt som ligger i den undre halvan?</b>`, options: ['(−23, 23)', '(23, 0)', '(−23, 0)', '(0, 23)'], correct: 1, category: 'funktioner' },
      ],
    },
    {
      id: 'kva', name: 'KVA – Kvantitativa jämförelser', shortName: 'KVA', type: 'kva',
      questions: [
        { num: 13, text: '', q1: '25 promille av 40 000', q2: '1 600', options: KVA_ALTERNATIV, correct: 1, category: 'procent' },
        { num: 14, text: 'En påse innehåller endast enfärgade kulor: röda och blå. Fyra kulor ska slumpmässigt plockas ur påsen, utan återläggning. Oavsett vilka fyra kulor som plockas ur påsen, så är minst en av de plockade kulorna röd.', q1: 'Antalet kulor i påsen', q2: '5', options: KVA_ALTERNATIV, correct: 3, category: 'logik' },
        { num: 15, text: '', q1: 'Två gånger arean av en kvadrat med sidan <i>x</i>', q2: 'Tre fjärdedelar av arean av en cirkel med radien <i>x</i>', options: KVA_ALTERNATIV, correct: 1, category: 'geometri' },
        { num: 16, text: tex('2y - 4x = 3'), q1: '<i>y</i>', q2: '1,5 + 2<i>x</i>', options: KVA_ALTERNATIV, correct: 2, category: 'algebra' },
        { num: 17, text: 'Medelvärdet av två tal är 35. Ett av talen är <i>x</i>.', q1: '<i>x</i>', q2: '70 − <i>x</i>', options: KVA_ALTERNATIV, correct: 3, category: 'statistik' },
        { num: 18, text: '', q1: tex('\\frac{3}{8} \\cdot \\frac{6}{11}'), q2: tex('\\dfrac{\\frac{3}{8}}{\\frac{11}{6}}'), options: KVA_ALTERNATIV, correct: 2, category: 'aritmetik' },
        { num: 19, text: '<i>x</i> är ett jämnt positivt heltal.', q1: tex('(-7)^x'), q2: tex('(-7)^{x+1}'), options: KVA_ALTERNATIV, correct: 0, category: 'algebra' },
        { num: 20, text: `Linjen L går genom origo.${figur(B + 'p5-kva20.webp', 'Koordinatsystem med linjen L som lutar nedåt genom origo. Punkten (−3, 3) är markerad på linjen uppe till vänster och punkten (x1, y1) nere till höger.', 320)}`, q1: tex('x_1 + y_1'), q2: '0', options: KVA_ALTERNATIV, correct: 2, category: 'funktioner' },
        { num: 21, text: 'Vinklarna i en triangel förhåller sig som 1:5:9.', q1: 'Triangelns minsta vinkel', q2: '15°', options: KVA_ALTERNATIV, correct: 1, category: 'geometri' },
        { num: 22, text: '', q1: `Den positiva lösningen till ekvationen ${tex('(x - 3)(x + 2) = 0')}`, q2: `Den positiva lösningen till ekvationen ${tex('(x + 3)(x - 2) = 0')}`, options: KVA_ALTERNATIV, correct: 0, category: 'algebra' },
      ],
    },
    {
      id: 'nog', name: 'NOG – Kvantitativa resonemang', shortName: 'NOG', type: 'nog',
      questions: [
        { num: 23, text: 'Allan, Billy, Cilla och Dolly är bjudna på halloweenfest. De är alla utklädda till olika saker. En av dem är utklädd till fladdermus, en till spöke, en till varulv och en till zombie. <b>Vad är Dolly utklädd till?</b>', s1: 'Cilla är utklädd till fladdermus. Det är Allan eller Billy som är utklädd till varulv.', s2: 'Det är Billy eller Dolly som är utklädd till zombie. Allan är utklädd till spöke.', options: NOG_ALTERNATIV, correct: 2, category: 'logik' },
        { num: 24, text: 'Eva har en låda med knappar. Var och en av knapparna har två eller fyra hål. Varje knapp är dessutom antingen vit eller svart. <b>Hur många knappar har Eva i lådan?</b>', s1: '15 av de vita knapparna har fyra hål. Det finns dubbelt så många vita som svarta knappar.', s2: 'Det finns hälften så många svarta knappar som vita knappar. Ingen av de svarta knapparna har två hål.', options: NOG_ALTERNATIV, correct: 4, category: 'logik' },
        { num: 25, text: 'I en damm finns det endast enfärgade näckrosor: vita och gula. <b>Hur många gula näckrosor finns det i dammen?</b>', s1: 'Det finns sammanlagt 50 näckrosor i dammen.', s2: 'Om hälften av de vita näckrosorna istället var gula, så skulle 86 procent av näckrosorna i dammen vara gula.', options: NOG_ALTERNATIV, correct: 2, category: 'procent' },
        { num: 26, text: `En kvadrat är indelad i fyra mindre kvadrater som figuren visar. Var och en av de mindre kvadraterna är färglagd i någon av färgerna blå, grön, gul eller röd. Ingen av kvadraterna har samma färg som någon av de andra kvadraterna. <b>Vilken kvadrat har vilken färg?</b>${figur(B + 'p5-nog26.webp', 'En kvadrat indelad i fyra lika stora mindre kvadrater i två rader och två kolumner.', 160)}`, s1: 'Kvadraten längst upp till vänster är röd. Den gula kvadratens vänstra sida ligger intill den blå kvadratens högra sida.', s2: 'Den röda kvadraten är rakt ovanför den blå kvadraten. Den gröna kvadraten är rakt ovanför den gula kvadraten.', options: NOG_ALTERNATIV, correct: 0, category: 'logik' },
        { num: 27, text: `<i>x</i> är ett positivt tal. <b>Är ${tex('x > 5')}?</b>`, s1: tex('x > \\sqrt{26}'), s2: tex('\\sqrt{x} > \\frac{5}{2}'), options: NOG_ALTERNATIV, correct: 3, category: 'algebra' },
        { num: 28, text: 'I ett sjusiffrigt tal gäller att siffran 1 förekommer fyra gånger och siffran 2 förekommer tre gånger. <b>Vilket är det sjusiffriga talet?</b>', s1: 'I talet förekommer aldrig siffran 1 två gånger i följd.', s2: 'I talet efterföljs alltid siffran 2 direkt av siffran 1.', options: NOG_ALTERNATIV, correct: 0, category: 'logik' },
      ],
    },
    {
      id: 'dtk', name: 'DTK – Diagram, tabeller och kartor', shortName: 'DTK', type: 'dtk',
      questions: [
        { num: 29, text: 'Studera de statliga medel som Stockholms län fick till kulturverksamhet 2006 respektive 2012. <b>Hur stort var beloppet per invånare 2012 jämfört med 2006?</b>', options: ['Tre gånger så stort', 'Fyra gånger så stort', 'Fem gånger så stort', 'Sex gånger så stort'], correct: 1, diagram: B + 'p5-dtk1.webp', diagramAlt: DTK1, category: 'tabell' },
        { num: 30, text: 'Jämför det län som 2007 fick mest statliga medel till kulturverksamhet med det län som fick minst. <b>Hur stor var skillnaden?</b>', options: ['319 537 000 kronor', '390 010 000 kronor', '396 535 000 kronor', '397 335 000 kronor'], correct: 3, diagram: B + 'p5-dtk1.webp', diagramAlt: DTK1, category: 'tabell' },
        { num: 31, text: '<b>Hur stor andel av de statliga medlen till kulturverksamhet 2009 gick till de tre storstadslänen Stockholms län, Skåne län och Västra Götalands län?</b>', options: ['40 procent', '50 procent', '60 procent', '70 procent'], correct: 2, diagram: B + 'p5-dtk1.webp', diagramAlt: DTK1, category: 'tabell' },
        { num: 32, text: '<b>Vilket av följande datum var månens fas närmast halvmåne?</b>', options: ['23 augusti', '29 augusti', '3 september', '7 september'], correct: 0, diagram: B + 'p5-dtk2.webp', diagramAlt: DTK2, category: 'diagram' },
        { num: 33, text: '<b>Hur stor var skillnaden i grader mellan månens högsta och lägsta läge under ett dygn?</b>', options: ['10 grader', '35 grader', '50 grader', '65 grader'], correct: 3, diagram: B + 'p5-dtk2.webp', diagramAlt: DTK2, category: 'diagram' },
        { num: 34, text: '<b>För vilket datum gällde att månens fas någon gång under dygnet var 65–70 procent och att månen som lägst stod cirka 20 grader under horisonten?</b>', options: ['25 augusti', '4 september', '10 september', '16 september'], correct: 1, diagram: B + 'p5-dtk2.webp', diagramAlt: DTK2, category: 'diagram' },
        { num: 35, text: '<b>I vilken åldersgrupp bland män respektive kvinnor var skillnaden i arbetsinkomst mellan tillsvidareanställda och tidsbegränsat anställda störst 2007, i kronor räknat?</b>', options: ['Män 20–29 år, kvinnor 20–29 år', 'Män 20–29 år, kvinnor 40–49 år', 'Män 50–64 år, kvinnor 20–29 år', 'Män 50–64 år, kvinnor 40–49 år'], correct: 2, diagram: B + 'p5-dtk3.webp', diagramAlt: DTK3, category: 'diagram' },
        { num: 36, text: '<b>I vilken grupp och vilket år noterades den största skillnaden i arbetsinkomst mellan tillsvidareanställda män och tidsbegränsat anställda män, i kronor räknat?</b>', options: ['Arbetare, 2007', 'Tjänstemän, 2002', 'Tjänstemän, 2005', 'Tjänstemän, 2007'], correct: 1, diagram: B + 'p5-dtk3.webp', diagramAlt: DTK3, category: 'diagram' },
        { num: 37, text: 'År 2007 var skillnaden i arbetsinkomst mellan tillsvidareanställda och tidsbegränsat anställda betydligt större bland män än bland kvinnor i alla åldersgrupper utom en. <b>Vilken?</b>', options: ['20–29-åringar', '30–39-åringar', '40–49-åringar', '50–64-åringar'], correct: 1, diagram: B + 'p5-dtk3.webp', diagramAlt: DTK3, category: 'diagram' },
        { num: 38, text: '<b>I vilken grupp ökade arbetsinkomsten mest från 2002 till 2007, i kronor räknat?</b>', options: ['Arbetare män, tillsvidareanställda', 'Arbetare män, tidsbegränsat anställda', 'Tjänstemän män, tillsvidareanställda', 'Tjänstemän män, tidsbegränsat anställda'], correct: 3, diagram: B + 'p5-dtk3.webp', diagramAlt: DTK3, category: 'diagram' },
        { num: 39, text: 'Jämför antalet hästskjutsar som utgick från Rödå med antalet som utgick från den ort varifrån det utgick flest hästskjutsar under året. <b>Hur stor var skillnaden?</b>', options: ['300', '500', '800', '1 000'], correct: 2, diagram: B + 'p5-dtk4.webp', diagramAlt: DTK4, category: 'karta' },
        { num: 40, text: '<b>På vilket avstånd (fågelvägen) och i vilken riktning från Norsjö ligger Dorotea?</b>', options: ['110 km i ostnordostlig riktning', '110 km i västsydvästlig riktning', '165 km i ostnordostlig riktning', '165 km i västsydvästlig riktning'], correct: 3, diagram: B + 'p5-dtk4.webp', diagramAlt: DTK4, category: 'karta' },
      ],
    },
  ],
};
