// Högskoleprovet 25 oktober 2020, provpass 5 (kvantitativt).
// Uppgifterna är hämtade från UHR:s publicerade prov på studera.nu.
import { tex, figur, KVA_ALTERNATIV, NOG_ALTERNATIV } from '../types.js';
import type { ExtraPass } from '../types.js';

const B = '/extraprov/ht2020/';

const DTK1 = 'Adopterade barn födda under 1970-talet: två linjediagram. Det första visar antalet adopterade barn per födelseår 1970 till 1979, totalt samt flickor och pojkar. Det andra visar antalet per födelseår för de sex vanligaste födelseländerna Sydkorea, Indien, Thailand, Chile, Sri Lanka och Colombia.';
const DTK2 = 'Miljöskyddskostnader för industrin i Sverige: tre stapeldiagram för åren 2002 till 2012 i miljoner kronor. Det första visar industrins totala utgifter för miljöskydd uppdelade på investeringar och löpande kostnader, det andra miljöskyddsinvesteringarna uppdelade på områdena luft, vatten, avfall och övrigt, och det tredje de löpande kostnaderna uppdelade på samma områden.';
const DTK3 = 'Fartygsfynd kring Riddarholmskanalen: karta över området kring Riddarholmskanalen i Stockholm med 26 numrerade fartygsfynd, Gråmunkebron, Tottska husets grund, strandlinjen omkring år 1300, norrpil och skalstreck 0 till 100 meter, samt en tabell med längd, bredd och datering för vissa av båtarna.';
const DTK4 = 'Teater och dans i siffror: fem tabeller för åren 1997 till 2005 över nationella institutioner, regionala och lokala institutioner, övriga institutioner, fria teatergrupper och fria dansgrupper: antalet institutioner och grupper, antalet besök, antalet föreställningar, antalet årsverken samt intäkter i tusen kronor i 2005 års priser.';

export const pass: ExtraPass = {
  id: 'ht2020-5',
  tillfalle: 'ht2020',
  passNr: 5,
  kind: 'kvant',
  name: 'Provpass 5 (kvantitativt)',
  timeMinutes: 55,
  extendedMinutes: 80,
  normering: [[0, 0.0], [18, 0.1], [21, 0.2], [23, 0.3], [26, 0.4], [28, 0.5], [32, 0.6], [35, 0.7], [38, 0.8], [42, 0.9], [46, 1.0], [49, 1.1], [54, 1.2], [57, 1.3], [61, 1.4], [64, 1.5], [67, 1.6], [70, 1.7], [72, 1.8], [74, 1.9], [76, 2.0]],
  subTests: [
    {
      id: 'xyz', name: 'XYZ – Matematisk problemlösning', shortName: 'XYZ', type: 'xyz',
      questions: [
        { num: 1, text: `<b>Vilket svarsalternativ motsvarar uttrycket ${tex('3(2x + 5) + 2(7 - 3x)')}?</b>`, options: ['29', tex('17 - x'), tex('3x + 19'), tex('12x + 29')], correct: 0, category: 'algebra' },
        { num: 2, text: `I koordinatsystemet är grafen till funktionen ${tex('f(x)')} inritad. <b>För vilka värden på <i>x</i> är ${tex('f(x)')} positiv?</b>${figur(B + 'p5-xyz2.webp', 'Ett koordinatsystem med rutnät, 2 och 4 markerade på båda axlarna. Grafen y = f(x) är en parabel med toppen i ungefär (3, 4). Den skär x-axeln i x = 1 och x = 5 och går ner under x-axeln utanför dessa punkter.', 400)}`, options: [tex('x > 0'), tex('0 < x < 4'), tex('x > 1'), tex('1 < x < 5')], correct: 3, category: 'funktioner' },
        { num: 3, text: 'Arean av en cirkel är 27 cm<sup>2</sup>. <b>Vilket av svarsalternativen är det bästa närmevärdet för längden av cirkelns radie?</b>', options: ['1,5 cm', '3 cm', '6 cm', '9 cm'], correct: 1, category: 'geometri' },
        { num: 4, text: 'Om <i>a</i> % av <i>x</i> är <i>y</i>, <b>hur mycket är 2<i>a</i> % av 0,5<i>x</i>?</b>', options: ['0,5<i>y</i>', '<i>y</i>', '2<i>y</i>', '4<i>y</i>'], correct: 1, category: 'procent' },
        { num: 5, text: 'En mätserie består av 5 mätvärden. <b>Vilket av svarsalternativen är med säkerhet korrekt?</b>', options: ['Om mätseriens medelvärde är ett heltal, så är alla mätvärdena heltal.', 'Om mätseriens median är ett heltal, så är alla mätvärdena heltal.', 'Om alla mätvärdena är heltal, så är mätseriens medelvärde ett heltal.', 'Om alla mätvärdena är heltal, så är mätseriens median ett heltal.'], correct: 3, category: 'statistik' },
        { num: 6, text: `<i>a</i> och <i>b</i> är positiva tal.<br><br><b>Vilket svarsalternativ är lösningen till ekvationen ${tex('ax + bx = 1')}?</b>`, options: [tex('x = 1 - (a + b)'), tex('x = \\frac{1}{ab}'), tex('x = a + b'), tex('x = \\frac{1}{a + b}')], correct: 3, category: 'algebra' },
        { num: 7, text: 'Jaana gör ett halsband med enfärgade pärlor i sju olika färger. Hon använder lika många pärlor av varje färg. <b>Vilket svarsalternativ är ett möjligt antal pärlor i det färdiga halsbandet?</b>', options: ['241', '245', '247', '249'], correct: 1, category: 'aritmetik' },
        { num: 8, text: '<b>Vilket svarsalternativ är störst?</b>', options: [tex('\\frac{10^2 \\cdot 10^{-5}}{10^{-3}}'), tex('\\frac{10^{-3} \\cdot 10^{-5}}{10^2}'), tex('\\frac{10^2 \\cdot 10^{-3}}{10^{-5}}'), tex('\\frac{10^{-5}}{10^2 \\cdot 10^{-3}}')], correct: 2, category: 'aritmetik' },
        { num: 9, text: 'Arean av en kvadrat med sidlängden 10 cm är dubbelt så stor som arean av en kvadrat med sidlängden <i>x</i> cm. <b>Vilket värde har <i>x</i>?</b>', options: [tex('\\sqrt{10}'), tex('\\sqrt{20}'), tex('\\sqrt{25}'), tex('\\sqrt{50}')], correct: 3, category: 'geometri' },
        { num: 10, text: `<b>Vad är ${tex('\\frac{7}{20} - \\frac{3}{2} \\cdot \\frac{1}{5}')}?</b>`, options: [tex('-\\frac{23}{100}'), tex('\\frac{1}{20}'), tex('\\frac{3}{10}'), tex('\\frac{4}{10}')], correct: 1, category: 'aritmetik' },
        { num: 11, text: `${tex('f(x) = \\frac{x}{4} - \\frac{3}{2}')}<br><br><b>Vilka koordinater har den punkt där grafen till ${tex('f(x)')} skär <i>x</i>-axeln?</b>`, options: [tex('\\left(0,\\ -\\frac{3}{2}\\right)'), tex('(0,\\ 6)'), tex('\\left(-\\frac{3}{2},\\ 0\\right)'), tex('(6,\\ 0)')], correct: 3, category: 'funktioner' },
        { num: 12, text: `<b>Vilket svarsalternativ är ett möjligt värde på <i>a</i> om ${tex('a^{-2} = 16')}?</b>`, options: ['−4', tex('\\frac{1}{256}'), tex('\\frac{1}{4}'), '256'], correct: 2, category: 'algebra' },
      ],
    },
    {
      id: 'kva', name: 'KVA – Kvantitativa jämförelser', shortName: 'KVA', type: 'kva',
      questions: [
        { num: 13, text: '<i>x</i>, <i>y</i> och <i>z</i> är positiva tal.<br><i>x</i> procent av <i>y</i> är lika med 73.<br><i>x</i> procent av <i>z</i> är lika med 37.', q1: '<i>y</i>', q2: '<i>z</i>', options: KVA_ALTERNATIV, correct: 0, category: 'procent' },
        { num: 14, text: 'T är en triangel.', q1: 'Omkretsen av T dividerad med 3', q2: 'Medelvärdet av sidlängderna för T', options: KVA_ALTERNATIV, correct: 2, category: 'geometri' },
        { num: 15, text: '', q1: tex('\\dfrac{\\frac{1}{6}}{\\frac{6}{1}}'), q2: tex('\\dfrac{\\frac{6}{1}}{\\frac{1}{6}}'), options: KVA_ALTERNATIV, correct: 1, category: 'aritmetik' },
        { num: 16, text: 'Albin är dubbelt så gammal som Edvin och Levi är tillsammans.', q1: 'Albins ålder', q2: 'Tre gånger Edvins ålder', options: KVA_ALTERNATIV, correct: 3, category: 'algebra' },
        { num: 17, text: `${tex('x > 1')}<br>${tex('x^{y + 1} = 1')}`, q1: '<i>y</i>', q2: '0', options: KVA_ALTERNATIV, correct: 1, category: 'algebra' },
        { num: 18, text: 'Kvadraterna K<sub>1</sub> och K<sub>2</sub> överlappar varandra så att 25 procent av arean av K<sub>1</sub> täcks av K<sub>2</sub> medan 20 procent av arean av K<sub>2</sub> täcks av K<sub>1</sub>.', q1: 'Arean av K<sub>1</sub>', q2: 'Arean av K<sub>2</sub>', options: KVA_ALTERNATIV, correct: 1, category: 'procent' },
        { num: 19, text: '', q1: tex('3{,}13(\\pi + 3{,}15)'), q2: tex('3{,}15(3{,}13 + \\pi)'), options: KVA_ALTERNATIV, correct: 1, category: 'aritmetik' },
        { num: 20, text: `${tex('x \\neq 0')}<br>${tex('y \\neq 0')}<br>${tex('x + y = 0')}`, q1: tex('x^2 + y^2'), q2: tex('x^2 + y^2 + 2xy'), options: KVA_ALTERNATIV, correct: 0, category: 'algebra' },
        { num: 21, text: `Grafen till funktionen <i>f</i> är en rät linje genom origo.<br>${tex('a > 0')}`, q1: tex('f(a)'), q2: tex('f(-a)'), options: KVA_ALTERNATIV, correct: 3, category: 'funktioner' },
        { num: 22, text: 'En mätserie består av värdena −5, <i>x</i>, <i>y</i>, 3. Seriens medelvärde är −1.', q1: '<i>x</i> + <i>y</i>', q2: '−1', options: KVA_ALTERNATIV, correct: 1, category: 'statistik' },
      ],
    },
    {
      id: 'nog', name: 'NOG – Kvantitativa resonemang', shortName: 'NOG', type: 'nog',
      questions: [
        { num: 23, text: 'Kalle har gjort en snögubbe som endast består av tre snöbollar, vilka representerar huvud, mage och ben. Mage-snöbollen väger 20 kg. <b>Hur mycket väger hela Kalles snögubbe?</b>', s1: 'Ben-snöbollen väger 7 gånger så mycket som huvud-snöbollen.', s2: 'Huvud-snöbollen väger 1/4 av vad mage-snöbollen väger.', options: NOG_ALTERNATIV, correct: 2, category: 'aritmetik' },
        { num: 24, text: `Ett kalkylblad består av två kolumner och två rader. Det står ett tal i var och en av de fyra cellerna. <b>Vad är summan av de fyra talen?</b>${figur(B + 'p5-nog24.webp', 'Ett kalkylblad med kolumnerna A och B och raderna 1 och 2, alltså cellerna A1, B1, A2 och B2.', 220)}`, s1: 'Summan av talen i cellerna på rad 1 är 30. Talet i cell B2 är 23.', s2: 'Summan av talen i cellerna A2 och B1 är 36. Talet i cell A1 är 13.', options: NOG_ALTERNATIV, correct: 2, category: 'algebra' },
        { num: 25, text: '<b>Vilket av talen <i>x</i>, <i>y</i>, <i>z</i> och <i>w</i> är störst?</b>', s1: tex('x + z > y + w'), s2: `${tex('x > z')}<br>${tex('y > w')}`, options: NOG_ALTERNATIV, correct: 4, category: 'logik' },
        { num: 26, text: 'En röd, en blå, en vit och en grå kloss är staplade ovanpå varandra. Det finns ingen kloss mellan den röda och den vita klossen. <b>Vilken färg har klossen som ligger överst?</b>', s1: 'Varken den röda eller den vita klossen ligger överst. Den blå klossen ligger längre ner än den grå klossen.', s2: 'Varken den röda eller den vita klossen ligger längst ner. Den blå klossen angränsar till den röda klossen.', options: NOG_ALTERNATIV, correct: 0, category: 'logik' },
        { num: 27, text: `<b>Vilka koordinater har punkten A?</b>${figur(B + 'p5-nog27.webp', 'Ett koordinatsystem med en triangel ABC. B har koordinaterna (4, 3) och C har koordinaterna (4, −2), så BC är lodrät. Vinkeln vid B är rät, och A ligger till vänster om y-axeln på samma höjd som B.', 400)}`, s1: 'Triangelns area är 30 areaenheter.', s2: 'Sträckan AC är 13 längdenheter.', options: NOG_ALTERNATIV, correct: 3, category: 'geometri' },
        { num: 28, text: '<i>x</i> är ett positivt heltal. <b>Vad är <i>x</i>?</b>', s1: tex('x^4 = \\sqrt{x}'), s2: tex('\\frac{k}{x} = k,\\ k \\neq 0'), options: NOG_ALTERNATIV, correct: 3, category: 'algebra' },
      ],
    },
    {
      id: 'dtk', name: 'DTK – Diagram, tabeller och kartor', shortName: 'DTK', type: 'dtk',
      questions: [
        { num: 29, text: '<b>Vilket födelseland avses?</b><br><br>För minst ett av de redovisade födelseåren var detta det vanligaste födelselandet bland de adopterade barnen. Av de adopterade barnen från detta land föddes fler 1979 än 1977.', options: ['Indien', 'Sri Lanka', 'Sydkorea', 'Thailand'], correct: 0, diagram: B + 'p5-dtk1.webp', diagramAlt: DTK1, category: 'diagram' },
        { num: 30, text: '<b>Hur många av de adopterade barnen föddes under perioden 1975–1979?</b>', options: ['1 300', '3 300', '5 500', '6 500'], correct: 3, diagram: B + 'p5-dtk1.webp', diagramAlt: DTK1, category: 'diagram' },
        { num: 31, text: '<b>Hur stor andel av industrins totala utgifter för miljöskydd 2011 utgjordes av löpande kostnader?</b>', options: ['45 procent', '50 procent', '60 procent', '65 procent'], correct: 2, diagram: B + 'p5-dtk2.webp', diagramAlt: DTK2, category: 'diagram' },
        { num: 32, text: '<b>Inom vilket miljöområde gjordes miljöskyddsinvesteringar för i genomsnitt 1 900 miljoner kronor per år under den redovisade perioden?</b>', options: ['Övrigt', 'Avfall', 'Vatten', 'Luft'], correct: 3, diagram: B + 'p5-dtk2.webp', diagramAlt: DTK2, category: 'diagram' },
        { num: 33, text: '<b>Vilket av följande år såg storleksordningen för de olika miljöområdenas löpande kostnader ut enligt följande: Luft < Vatten < Avfall < Övrigt?</b>', options: ['2003', '2005', '2007', '2009'], correct: 2, diagram: B + 'p5-dtk2.webp', diagramAlt: DTK2, category: 'diagram' },
        { num: 34, text: '<b>För hur många av de redovisade åren gäller att industrins miljöskyddsinvesteringar var mindre än 4 000 miljoner kronor samtidigt som de löpande kostnaderna för miljöskydd var större än 6 000 miljoner kronor?</b>', options: ['3', '4', '6', '7'], correct: 0, diagram: B + 'p5-dtk2.webp', diagramAlt: DTK2, category: 'diagram' },
        { num: 35, text: '<b>Vilket fartygsfynd avses?</b><br><br>Båten var bredare än 3 meter och längre än 17 meter. Båten hittades cirka 55 meter från strandlinjen vid Gråmunkebrons östra fäste.', options: ['Båt 19', 'Båt 17', 'Båt 7', 'Båt 2'], correct: 1, diagram: B + 'p5-dtk3.webp', diagramAlt: DTK3, category: 'karta' },
        { num: 36, text: 'Området mellan de markerade strandlinjerna kallades år 1300 Gråmunkesund. <b>Hur brett var sundet där det var som smalast?</b>', options: ['50 meter', '70 meter', '80 meter', '90 meter'], correct: 2, diagram: B + 'p5-dtk3.webp', diagramAlt: DTK3, category: 'karta' },
        { num: 37, text: '<b>Hur många fartygsfynd gjordes inom en radie av 50 meter från den nordligaste punkten på Tottska husets grund?</b>', options: ['8', '10', '12', '14'], correct: 1, diagram: B + 'p5-dtk3.webp', diagramAlt: DTK3, category: 'karta' },
        { num: 38, text: '<b>Vilket år såg samtliga fem typer av institutioner och grupper sina intäkter öka jämfört med föregående år?</b>', options: ['1998', '2000', '2002', '2004'], correct: 0, diagram: B + 'p5-dtk4.webp', diagramAlt: DTK4, category: 'tabell' },
        { num: 39, text: '<b>Hur många besökare per föreställning hade de fria teatergrupperna det år då de gav som flest föreställningar?</b>', options: ['83', '90', '122', '150'], correct: 0, diagram: B + 'p5-dtk4.webp', diagramAlt: DTK4, category: 'tabell' },
        { num: 40, text: `Cirkeldiagrammet nedan illustrerar hur en totalsumma för år 2003 var fördelad procentuellt på de fem typerna av institutioner och grupper. <b>Vilken totalsumma avses?</b>${figur(B + 'p5-dtk40.webp', 'Ett cirkeldiagram utan etiketter med fem sektorer: en på ungefär en fjärdedel, en på ungefär tre femtedelar, en på ungefär en tiondel och två mycket smala sektorer.', 220)}`, options: ['Antalet institutioner och grupper', 'Antalet besök', 'Antalet årsverken', 'Intäkter'], correct: 2, diagram: B + 'p5-dtk4.webp', diagramAlt: DTK4, category: 'tabell' },
      ],
    },
  ],
};
