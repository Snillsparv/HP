// Högskoleprovet 13 april 2024, provpass 5 (kvantitativt).
// Uppgifterna är hämtade från UHR:s publicerade prov på studera.nu.
import { tex, figur, KVA_ALTERNATIV, NOG_ALTERNATIV } from '../types.js';
import type { ExtraPass } from '../types.js';

const B = '/extraprov/vt2024/';

const DTK1 = 'Resor med övernattning: ytdiagram över svenska befolkningens resor med övernattning 2010 till 2016, uppdelade på affärsresor och fritidsresor, utrikes och inrikes';
const DTK2 = 'Dödlighet hos kungsörnar: cirkeldiagram över dödsorsaker för 503 kungsörnar som inkom till Naturhistoriska riksmuseet 1993 till 2011, samt stapeldiagram över fyndmånad med känd respektive okänd dödsorsak';
const DTK3 = 'Förvärvsarbetande inom jordbruk, skogsbruk, jakt och fiske: tabell över antalet män och kvinnor per län 2015 och för hela riket 2010 till 2015, samt andelen av det totala antalet förvärvsarbetande';
const DTK4 = 'Gruddbo by 1915: karta över Flintkvarteret i Gruddbo by på Sollerön med gårdar, byggnader numrerade efter typ, vägar och skala i meter';
const LISTA = figur(B + 'p5-dtk4lista.webp', 'Förteckning över byggnadstypernas nummer på kartan, från 1 byggning till 49 brandbrunn', 520);

export const pass: ExtraPass = {
  id: 'vt2024-5',
  tillfalle: 'vt2024',
  passNr: 5,
  kind: 'kvant',
  name: 'Provpass 5 (kvantitativt)',
  timeMinutes: 55,
  extendedMinutes: 80,
  normering: [[0, 0.0], [18, 0.1], [20, 0.2], [22, 0.3], [24, 0.4], [27, 0.5], [29, 0.6], [33, 0.7], [36, 0.8], [40, 0.9], [44, 1.0], [47, 1.1], [51, 1.2], [55, 1.3], [58, 1.4], [61, 1.5], [65, 1.6], [68, 1.7], [70, 1.8], [72, 1.9], [75, 2.0]],
  subTests: [
    {
      id: 'xyz', name: 'XYZ – Matematisk problemlösning', shortName: 'XYZ', type: 'xyz',
      questions: [
        { num: 1, text: `${tex('4x + 13 = 8x - 31')}<br><br><b>Vad är <i>x</i>?</b>`, options: ['−4,5', '1,5', '4,5', '11'], correct: 3, category: 'algebra' },
        { num: 2, text: `<b>Vilken av punkterna ligger på linjen L?</b>${figur(B + 'p5-xyz2.webp', 'Koordinatsystem med linjen L, som lutar brant nedåt och skär x-axeln vid ungefär −1,5 och y-axeln vid −3', 300)}`, options: ['(−5, 1)', '(−3, −2)', '(1, −5)', '(3, −3)'], correct: 2, category: 'funktioner' },
        { num: 3, text: `<b>Vad är ${tex('\\frac{1}{3} - \\left(\\frac{1}{2} + \\frac{1}{6}\\right)')}?</b>`, options: [tex('-\\frac{2}{3}'), tex('-\\frac{1}{3}'), '0', tex('\\frac{1}{3}')], correct: 1, category: 'aritmetik' },
        { num: 4, text: 'Medelvärdet av 17, 21 och 44 är lika med medelvärdet av 63, 73 och <i>x</i>.<br><b>Vilket värde har <i>x</i>?</b>', options: ['−54', '−27', '0', '71'], correct: 0, category: 'statistik' },
        { num: 5, text: 'Vägen mellan Julias hem och Annas hem är 12 km lång. De startar hemifrån samtidigt för att mötas längs vägen. Julia springer med konstant hastighet och det tar henne 12 minuter att springa 2 km. Anna går med konstant hastighet och det tar henne 24 minuter att gå 2 km. <b>Hur lång tid tar det innan de möts?</b>', options: ['36 minuter', '42 minuter', '48 minuter', '72 minuter'], correct: 2, category: 'aritmetik' },
        { num: 6, text: '<b>Vilket av svarsalternativen är lika med 7?</b>', options: [tex('\\sqrt{29} + \\sqrt{20}'), tex('7^1 - 7^0'), tex('\\frac{14}{7} + \\frac{49}{14}'), tex('\\left(\\frac{7}{\\sqrt{7}}\\right)^2')], correct: 3, category: 'aritmetik' },
        { num: 7, text: `<b>Vilket svarsalternativ är lika med 18 procent av ${tex('\\frac{2}{5}')}?</b>`, options: [tex('\\frac{1}{45}'), tex('\\frac{4}{45}'), tex('\\frac{9}{125}'), tex('\\frac{9}{250}')], correct: 2, category: 'procent' },
        { num: 8, text: `A, B och C är tre av hörnen i en kvadrat med sidlängden 4 cm. Kvadratens fjärde hörn, M, är medelpunkten för en cirkel med radien 2 cm. <b>Hur stor är arean av det skuggade området i figuren?</b>${figur(B + 'p5-xyz8.webp', 'Kvadrat med hörnen A, B, C och M, där en cirkel med medelpunkt i M och radien 2 cm täcker en del av kvadraten. Den del av kvadraten som ligger utanför cirkeln är skuggad', 300)}`, options: [`${tex('\\left(12 + \\frac{\\pi}{2}\\right)')} cm²`, `${tex('\\left(12 + \\frac{\\pi}{4}\\right)')} cm²`, `${tex('\\left(16 - \\frac{\\pi}{2}\\right)')} cm²`, `${tex('(16 - \\pi)')} cm²`], correct: 3, category: 'geometri' },
        { num: 9, text: '<b>Vilket svarsalternativ är en ekvation för en linje som går genom punkten (3, 1)?</b>', options: [tex('y = -x + 4'), tex('y = x + 2'), tex('y = 2x + 1'), tex('y = 3x + 1')], correct: 0, category: 'funktioner' },
        { num: 10, text: `<i>a</i>, <i>b</i> och <i>c</i> är positiva tal sådana att ${tex('\\frac{a}{b} = \\frac{b}{c}')} och ${tex('c = 2a')}. <b>Vad är <i>b</i> uttryckt i <i>a</i>?</b>`, options: [tex('b = a\\sqrt{2}'), tex('b = \\frac{a}{\\sqrt{2}}'), tex('b = 2\\sqrt{a}'), tex('b = \\frac{\\sqrt{a}}{2}')], correct: 0, category: 'algebra' },
        { num: 11, text: `${tex('x \\cdot 10^4 - 2x \\cdot 10^3 = 3{,}2 \\cdot 10^4')}<br><br><b>Vilket värde har <i>x</i>?</b>`, options: ['4', '4,8', '5,6', '6,4'], correct: 0, category: 'algebra' },
        { num: 12, text: 'Kvadraterna K<sub>1</sub> och K<sub>2</sub> överlappar varandra så att 25 procent av arean av K<sub>1</sub> täcks av 20 procent av arean av K<sub>2</sub>. Kvadraten K<sub>1</sub> har sidlängden 2 cm. <b>Vilken sidlängd har K<sub>2</sub>?</b>', options: ['1,6 cm', `${tex('\\sqrt{3}')} cm`, `${tex('\\sqrt{5}')} cm`, '2,5 cm'], correct: 2, category: 'procent' },
      ],
    },
    {
      id: 'kva', name: 'KVA – Kvantitativa jämförelser', shortName: 'KVA', type: 'kva',
      questions: [
        { num: 13, text: tex('3x > y'), q1: '<i>x</i>', q2: '<i>y</i>', options: KVA_ALTERNATIV, correct: 3, category: 'algebra' },
        { num: 14, text: `H är en regelbunden sexhörning.${figur(B + 'p5-kva14.webp', 'Regelbunden sexhörning H där en triangel mellan tre av hörnen är vit och de tre återstående trianglarna vid kanterna är skuggade', 240)}`, q1: 'Andelen av H som är skuggad', q2: 'Andelen av H som inte är skuggad', options: KVA_ALTERNATIV, correct: 2, category: 'geometri' },
        { num: 15, text: tex('2(x - 4) = \\frac{1}{2}'), q1: '<i>x</i>', q2: '5', options: KVA_ALTERNATIV, correct: 1, category: 'algebra' },
        { num: 16, text: `${tex('f(x) = 4x + 8')}<br>${tex('g(x) = 2x + 4')}<br>${tex('a > 0')}`, q1: tex('f(a)'), q2: tex('g(2a)'), options: KVA_ALTERNATIV, correct: 0, category: 'funktioner' },
        { num: 17, text: 'En mätserie består av tio heltal mellan 1 och 50. Mätseriens median är 25.', q1: 'Mätseriens median om det största och det minsta mätvärdet tas bort', q2: '25', options: KVA_ALTERNATIV, correct: 2, category: 'statistik' },
        { num: 18, text: '', q1: tex('4 \\cdot 10^{-2}'), q2: tex('\\frac{1}{400}'), options: KVA_ALTERNATIV, correct: 0, category: 'aritmetik' },
        { num: 19, text: `${tex('-1 < x < 0')}<br>${tex('0 < y < 1')}`, q1: tex('\\frac{y}{x}'), q2: tex('\\frac{x}{y}'), options: KVA_ALTERNATIV, correct: 3, category: 'algebra' },
        { num: 20, text: `Fyrhörningen ABCD är en kvadrat. De två parallella linjerna L<sub>1</sub> och L<sub>2</sub> går genom punkten C respektive punkten A.${figur(B + 'p5-kva20.webp', 'Kvadrat ABCD lutad mellan två parallella linjer. L1 går genom C och bildar vinkeln 20° med sidan CD. L2 går genom A och bildar vinkeln x med sidan AD', 380)}`, q1: '20°', q2: tex('x - 50°'), options: KVA_ALTERNATIV, correct: 2, category: 'geometri' },
        { num: 21, text: tex('x < 0'), q1: tex('(x + 4)(x - 2)'), q2: tex('(x - 4)(x + 2)'), options: KVA_ALTERNATIV, correct: 1, category: 'algebra' },
        { num: 22, text: 'Priset på en vara stiger med 20 % per år.', q1: 'Den tid det tar tills priset har fördubblats', q2: '5 år', options: KVA_ALTERNATIV, correct: 1, category: 'procent' },
      ],
    },
    {
      id: 'nog', name: 'NOG – Kvantitativa resonemang', shortName: 'NOG', type: 'nog',
      questions: [
        { num: 23, text: 'En förmiddag besöker Roy ett apotek, ett bibliotek och en cykelhandlare. <b>I vilken ordning gör Roy sina besök?</b>', s1: 'När Roy går till apoteket har han inte varit på biblioteket ännu.', s2: 'Besöket hos cykelhandlaren är varken först eller sist.', options: NOG_ALTERNATIV, correct: 2, category: 'logik' },
        { num: 24, text: `${figur(B + 'p5-nog24.webp', 'Triangel med vinklarna u, v och w, där yttervinkeln vid v är 130°', 300)}<b>Hur stor är vinkeln <i>u</i>?</b>`, s1: tex('w = 65°'), s2: tex('v = 50°'), options: NOG_ALTERNATIV, correct: 0, category: 'geometri' },
        { num: 25, text: 'En tank innehåller endast olja. Tanken är fylld till 4/7 av sin volym. <b>Hur stor volym har tanken?</b>', s1: 'För att tanken ska bli helt full måste man fylla på ytterligare 1 200 liter olja.', s2: 'Om man tömmer ut 200 liter olja ur tanken så kommer den att vara fylld till hälften.', options: NOG_ALTERNATIV, correct: 3, category: 'aritmetik' },
        { num: 26, text: 'I en stadsdel ligger husen längs gator som går antingen i nord-sydlig eller i öst-västlig riktning. Varje hus ligger längs endast en gata. Vart och ett av husen har antingen ett jämnt eller ett udda nummer. <b>Hur många hus med udda nummer finns det i stadsdelen?</b>', s1: 'Det finns sammanlagt 150 hus med jämna nummer i stadsdelen. 40 procent av dem ligger längs gator som går i öst-västlig riktning.', s2: 'Två tredjedelar av husen med udda nummer ligger längs gator som går i nord-sydlig riktning. Längs gator som går i öst-västlig riktning finns det lika många hus med jämna nummer som med udda nummer.', options: NOG_ALTERNATIV, correct: 2, category: 'procent' },
        { num: 27, text: 'Anna och Berit leker med kulor. <b>Hur många kulor har Anna?</b>', s1: 'Om Anna hade ytterligare 100 kulor, så skulle hon ha tre gånger så många kulor som hon faktiskt har.', s2: 'Om Anna hade 25 kulor färre, så skulle Berit ha fyra gånger så många kulor som Anna.', options: NOG_ALTERNATIV, correct: 0, category: 'algebra' },
        { num: 28, text: '<b>Vilket av talen <i>x</i>, <i>y</i>, <i>z</i> och <i>w</i> är störst?</b>', s1: tex('x + y = w'), s2: tex('\\frac{x + y}{2} = z'), options: NOG_ALTERNATIV, correct: 4, category: 'algebra' },
      ],
    },
    {
      id: 'dtk', name: 'DTK – Diagram, tabeller och kartor', shortName: 'DTK', type: 'dtk',
      questions: [
        { num: 29, text: 'Studera kategorin Fritidsresor utrikes. <b>Vilket år var dess andel av det totala antalet resor som störst?</b>', options: ['2011', '2012', '2014', '2016'], correct: 3, diagram: B + 'p5-dtk1.webp', diagramAlt: DTK1, category: 'diagram' },
        { num: 30, text: 'Från 2012 till 2013 minskade det totala antalet resor. <b>Vilken var den enda kategori där antalet ökade mellan dessa år?</b>', options: ['Affärsresor utrikes', 'Fritidsresor utrikes', 'Affärsresor inrikes', 'Fritidsresor inrikes'], correct: 2, diagram: B + 'p5-dtk1.webp', diagramAlt: DTK1, category: 'diagram' },
        { num: 31, text: '<b>Hur fördelade sig antalet resor procentuellt på utrikesresor respektive inrikesresor 2016?</b>', options: ['Utrikes 25 %, inrikes 75 %', 'Utrikes 30 %, inrikes 70 %', 'Utrikes 35 %, inrikes 65 %', 'Utrikes 45 %, inrikes 55 %'], correct: 2, diagram: B + 'p5-dtk1.webp', diagramAlt: DTK1, category: 'diagram' },
        { num: 32, text: '<b>Vilka två dödsorsaker angavs för sammanlagt en femtedel av de kungsörnar som inkom till Naturhistoriska riksmuseet 1993–2011?</b>', options: ['Illegal jakt och El', 'Illegal jakt och Vindkraftverk', 'El och Vindkraftverk', 'Vindkraftverk och Annan olycka'], correct: 0, diagram: B + 'p5-dtk2.webp', diagramAlt: DTK2, category: 'diagram' },
        { num: 33, text: '<b>Vilket var förhållandet mellan antalet kungsörnar med okänd dödsorsak och antalet kungsörnar med känd dödsorsak bland örnarna som påträffades i månaden juni?</b>', options: ['1:2', '2:1', '5:8', '8:5'], correct: 3, diagram: B + 'p5-dtk2.webp', diagramAlt: DTK2, category: 'diagram' },
        { num: 34, text: '<b>För hur stor andel av de kungsörnar som inkom till Naturhistoriska riksmuseet 1993–2011 angavs fyndmånad?</b>', options: ['72 procent', '75 procent', '78 procent', '82 procent'], correct: 3, diagram: B + 'p5-dtk2.webp', diagramAlt: DTK2, category: 'diagram' },
        { num: 35, text: '<b>Hur stor andel av de som arbetade inom jordbruk, skogsbruk, jakt och fiske i Gävleborgs län 2015 fanns inom jordbruket?</b>', options: ['30 procent', '35 procent', '40 procent', '45 procent'], correct: 2, diagram: B + 'p5-dtk3.webp', diagramAlt: DTK3, category: 'tabell' },
        { num: 36, text: 'Identifiera det län som hade störst andel förvärvsarbetande inom jordbruk, skogsbruk, jakt och fiske av det totala antalet förvärvsarbetande i länet. <b>Hur många förvärvsarbetande fanns det totalt i detta län 2015?</b>', options: ['11 000', '27 000', '43 000', '62 000'], correct: 1, diagram: B + 'p5-dtk3.webp', diagramAlt: DTK3, category: 'tabell' },
        { num: 37, text: '<b>För vilket av följande län gällde år 2015 att var femte person som arbetade inom jordbruk, skogsbruk, jakt och fiske var kvinna?</b>', options: ['Stockholms län', 'Södermanlands län', 'Kalmar län', 'Skåne län'], correct: 2, diagram: B + 'p5-dtk3.webp', diagramAlt: DTK3, category: 'tabell' },
        { num: 38, text: `<b>Vilken av följande gårdar stämmer med beskrivningen?</b><br>Byggningen eller stugan låg norr om gårdsplanen. Söder om gårdsplanen fanns stall och stallslider.${LISTA}`, options: ['Kockgård', 'Stamgården, nordöstra', 'Ryssgård', 'Östra Flintgård'], correct: 0, diagram: B + 'p5-dtk4.webp', diagramAlt: DTK4, category: 'karta' },
        { num: 39, text: `Identifiera det torvhus, torkställning för torv som låg mellan den nordöstra Stamgården och Ryssgård, intill en stuga. <b>Vad fanns 40 meter rakt söder om detta torvhus?</b>${LISTA}`, options: ['Hemlighus och dyngskåle', 'Loft', 'Köksväxter', 'Vedlider och slipskåle'], correct: 1, diagram: B + 'p5-dtk4.webp', diagramAlt: DTK4, category: 'karta' },
        { num: 40, text: `Fähuset i Måsgård, fähuset i Ammagård samt det sydligast belägna fähuset i Jerkgård utgör hörnen i ett triangelformat område. <b>Hur stort är detta område?</b>${LISTA}`, options: ['4 500 m²', '6 500 m²', '10 500 m²', '13 000 m²'], correct: 1, diagram: B + 'p5-dtk4.webp', diagramAlt: DTK4, category: 'karta' },
      ],
    },
  ],
};
