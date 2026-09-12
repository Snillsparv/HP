// Högskoleprovet 20 oktober 2019, provpass 1 (kvantitativt, version 1).
// Uppgifterna är hämtade från UHR:s publicerade prov på studera.nu.
import { tex, figur, KVA_ALTERNATIV, NOG_ALTERNATIV } from '../types.js';
import type { ExtraPass } from '../types.js';

const B = '/extraprov/ht2019/';
const graf = (bokstav: string) => `<img src="${B}p1-xyz8${bokstav}.webp" alt="Graf ${bokstav.toUpperCase()}" data-fadein style="max-width:150px;width:100%;vertical-align:middle;" />`;

const DTK1 = 'Majblommans bidragsverksamhet: ett stapeldiagram över utbetalda bidrag från Majblommans lokalavdelningar 2010 till 2014 i tusental kronor, uppdelat på bidrag till enskilda barn och de fyra ändamålen för grupper av barn (majblommepengar till skolan, majblommepengar till barn, handkassa till skolsköterska/kurator och lokala barnaktiviteter), samt tre små stapeldiagram över bidragen 2012 till 2014 till de tre största ändamålen för enskilda barn: sommarlov, kläder och skor samt fritidsaktiviteter.';
const DTK2 = 'Tungmetaller i fisk: två linjediagram. Det första visar kadmiumhalten i lever från sill/strömming 1981 till 2005 i mikrogram per gram torrvikt på platserna Harufjärden, Ängskärsklubb, Landsort, Utlängtan, Fladen och Väderöarna (från 1995). Det andra visar kvicksilverhalten i muskel från sill/strömming 1980 till 2005 i nanogram per gram färskvikt på Harufjärden, Ängskärsklubb, Landsort, Karlskrona, Fladen och Väderöarna (från 1995).';
const DTK3 = 'Sjukvård i Sverige år 1900: tre tabeller. Den första visar per län antalet läkare, invånare per läkare, sjukhus, sjuksängar, invånare per sjuksäng, apotek, invånare per apotek, barnmorskor samt kvinnor 20 till 45 år per barnmorska, med totalt för riket. Den andra visar antalet operationer vid civila sjukhus 1900 per typ av operation, totalt och fördelat på utgången god, mindre god, dålig, dödlig och oviss. Den tredje visar antalet kurgäster vid hälsobrunnar och bad- och kallvattenkuranstalter 1900, män, kvinnor och totalt.';
const DTK4 = 'Ut- och inflyttning i fyra kommuner: fyra diagram, ett för var och en av Kommun Norra, Södra, Östra och Västra. Symbolernas storlek anger antalet hushåll (500 till 15 000) och deras placering på den lodräta skalan den genomsnittliga årsinkomsten i tusental kronor. Symbolerna är I hushåll år 0, II utflyttade till angränsande kommun, III utflyttade till ej angränsande kommun, IV inflyttade från angränsande kommun och V inflyttade från ej angränsande kommun, under år 1 till 5. Riksgenomsnittet per hushåll är en streckad linje.';

export const pass: ExtraPass = {
  id: 'ht2019-1',
  tillfalle: 'ht2019',
  passNr: 1,
  kind: 'kvant',
  name: 'Provpass 1 (kvantitativt)',
  timeMinutes: 55,
  extendedMinutes: 80,
  normering: [[0, 0.0], [18, 0.1], [21, 0.2], [23, 0.3], [25, 0.4], [27, 0.5], [30, 0.6], [34, 0.7], [37, 0.8], [41, 0.9], [45, 1.0], [48, 1.1], [52, 1.2], [55, 1.3], [58, 1.4], [61, 1.5], [64, 1.6], [67, 1.7], [69, 1.8], [72, 1.9], [74, 2.0]],
  subTests: [
    {
      id: 'xyz', name: 'XYZ – Matematisk problemlösning', shortName: 'XYZ', type: 'xyz',
      questions: [
        { num: 1, text: `<b>Vilket av svarsalternativen motsvarar ${tex('5{,}3 \\cdot 10^3 - 4{,}7 \\cdot 10^2')}?</b>`, options: [tex('4{,}83 \\cdot 10^3'), tex('6{,}0 \\cdot 10^2'), tex('4{,}83 \\cdot 10^2'), tex('6{,}0 \\cdot 10^1')], correct: 0, category: 'aritmetik' },
        { num: 2, text: '40 % av <i>x</i> är ett heltal. <b>Vilket av svarsalternativen är ett möjligt värde på <i>x</i>?</b>', options: ['3', '4', '5', '6'], correct: 2, category: 'procent' },
        { num: 3, text: `En femhörning är inritad i ett koordinatsystem som figuren visar. <b>Vilken area har femhörningen?</b>${figur(B + 'p1-xyz3.webp', 'Ett koordinatsystem med en femhörning med hörnen i (−2, 0), (0, 2), (2, 2), (2, 0) och (0, −2).', 340)}`, options: ['5 areaenheter', '6 areaenheter', '8 areaenheter', '10 areaenheter'], correct: 3, category: 'geometri' },
        { num: 4, text: '<b>Vilket svarsalternativ är jämnt delbart med 5?</b>', options: [tex('157 + 158'), tex('3^5'), tex('\\frac{185}{5}'), tex('5^0 + 5^1 + 5^2')], correct: 0, category: 'aritmetik' },
        { num: 5, text: `<b>Vilket värde har <i>x</i> om ${tex('5(x - 1) = 2(x + 2)')}?</b>`, options: [tex('-\\frac{1}{7}'), tex('\\frac{1}{7}'), '1', '3'], correct: 3, category: 'algebra' },
        { num: 6, text: `<b>Hur stor är vinkeln <i>v</i>?</b>${figur(B + 'p1-xyz6.webp', 'En triangel som står på en vågrät linje. Vid det vänstra hörnet är yttervinkeln mot linjen 130° och vid det högra hörnet 117°. Vinkeln v ligger i toppen.', 400)}`, options: ['50°', '63°', '67°', '77°'], correct: 2, category: 'geometri' },
        { num: 7, text: `För de positiva talen <i>A</i>, <i>b</i> och <i>h</i> gäller sambandet ${tex('A = \\frac{bh}{2}')}. <b>Vad är <i>h</i>?</b>`, options: [tex('h = 2Ab'), tex('h = \\frac{2A}{b}'), tex('h = \\frac{Ab}{2}'), tex('h = \\frac{b}{2A}')], correct: 1, category: 'algebra' },
        { num: 8, text: `Ekvationen för en rät linje kan skrivas ${tex('y = kx + m')}. <b>För vilken av nedanstående linjer är produkten ${tex('k \\cdot m')} störst?</b>`, options: [graf('a'), graf('b'), graf('c'), graf('d')], correct: 0, category: 'funktioner' },
        { num: 9, text: `Cirkeln A har radien 3 cm, och dess area är ${tex('\\frac{1}{4}')} av arean av cirkeln B. <b>Hur stor radie har cirkeln B?</b>${figur(B + 'p1-xyz9.webp', 'En mindre cirkel A med radien 3 cm markerad och en större cirkel B.', 400)}`, options: ['4 cm', '6 cm', '9 cm', '12 cm'], correct: 1, category: 'geometri' },
        { num: 10, text: 'Alma har skrivit 93 olika heltal på ett papper. 60 av dessa heltal är udda. Alma stryker slumpmässigt tal på pappret. <b>Hur många tal måste hon stryka för att vara säker på att ha strukit minst hälften av de jämna talen?</b>', options: ['17', '47', '63', '77'], correct: 3, category: 'logik' },
        { num: 11, text: `<i>x</i> och <i>y</i> är positiva tal.<br><b>Vilket svarsalternativ motsvarar ${tex('\\sqrt{32xy^2}')}?</b>`, options: [tex('2y\\sqrt{8xy}'), tex('4y\\sqrt{2x}'), tex('6y\\sqrt{x}'), tex('8y\\sqrt{x}')], correct: 1, category: 'algebra' },
        { num: 12, text: 'Medelvärdet av <i>x</i>, <i>y</i> och <i>z</i> är 15.<br>Medelvärdet av <i>y</i>, <i>z</i> och 14 är 17.<br><b>Vilket värde har <i>x</i>?</b>', options: ['6', '8', '10', '12'], correct: 1, category: 'statistik' },
      ],
    },
    {
      id: 'kva', name: 'KVA – Kvantitativa jämförelser', shortName: 'KVA', type: 'kva',
      questions: [
        { num: 13, text: '', q1: tex('5{,}7 \\cdot 10^0'), q2: '5,7', options: KVA_ALTERNATIV, correct: 2, category: 'aritmetik' },
        { num: 14, text: '', q1: tex('\\frac{1}{2} + \\frac{1}{3} + \\frac{1}{4}'), q2: tex('1 + \\frac{1}{13}'), options: KVA_ALTERNATIV, correct: 0, category: 'aritmetik' },
        { num: 15, text: '', q1: 'Den största vinkeln i en triangel med sidlängderna 3 cm, 4 cm och 5 cm', q2: 'Den största vinkeln i en triangel med sidlängderna 5 cm, 5 cm och 5 cm', options: KVA_ALTERNATIV, correct: 0, category: 'geometri' },
        { num: 16, text: '', q1: tex('4(a + 1) - 4(a - 1)'), q2: tex('4(a - 1) + 4(1 - a)'), options: KVA_ALTERNATIV, correct: 0, category: 'algebra' },
        { num: 17, text: '', q1: 'Volymen av en cirkulär kon där basytans radie är 3 cm och höjden är 4 cm', q2: 'Volymen av en cirkulär kon där basytans radie är 4 cm och höjden är 3 cm', options: KVA_ALTERNATIV, correct: 1, category: 'geometri' },
        { num: 18, text: `<i>x</i> är ett heltal sådant att ${tex('1 \\leq x \\leq 100\\,000')}.`, q1: `Sannolikheten att ${tex('4^x')} är ett jämnt tal`, q2: '0,5', options: KVA_ALTERNATIV, correct: 0, category: 'sannolikhet' },
        { num: 19, text: '', q1: tex('\\sqrt{27} + \\sqrt{23}'), q2: tex('\\sqrt{50}'), options: KVA_ALTERNATIV, correct: 0, category: 'aritmetik' },
        { num: 20, text: 'Linjen A går genom punkterna (1, 1) och (5, 3). Linjen B är vinkelrät mot linjen A.<br><br><i>Ett tomt koordinatsystem fanns i provhäftet och kunde användas för att lösa uppgiften.</i>', q1: '<i>y</i>-koordinaten för den punkt på linjen A där <i>x</i> = 0', q2: '<i>y</i>-koordinaten för den punkt på linjen B där <i>x</i> = 0', options: KVA_ALTERNATIV, correct: 3, category: 'funktioner' },
        { num: 21, text: '<i>x</i> är 75 % av <i>y</i>.', q1: tex('\\frac{y}{2}'), q2: tex('\\frac{2x}{3}'), options: KVA_ALTERNATIV, correct: 2, category: 'procent' },
        { num: 22, text: '2 pennor, 1 linjal och 5 sudd kostar lika mycket som 10 sudd.<br>4 pennor och 2 linjaler kostar lika mycket som 10 sudd.', q1: 'Kostnaden för 2 pennor', q2: 'Kostnaden för 1 linjal', options: KVA_ALTERNATIV, correct: 3, category: 'algebra' },
      ],
    },
    {
      id: 'nog', name: 'NOG – Kvantitativa resonemang', shortName: 'NOG', type: 'nog',
      questions: [
        { num: 23, text: 'På ett bord ligger det fem enfärgade lappar: en röd, en grön, en blå, en vit och en svart. Lapparna är numrerade 1–5 och ligger på rad i nummerordning. <b>Vilket nummer står det på den röda lappen?</b>', s1: 'På den vita lappen står det 3. Den gröna lappen ligger intill den röda lappen. Den blå lappen ligger intill den svarta lappen.', s2: 'På den svarta lappen står det 5. Numret på den gröna lappen är lägre än numret på den röda lappen.', options: NOG_ALTERNATIV, correct: 2, category: 'logik' },
        { num: 24, text: `För de fyra talen <i>a</i>, <i>b</i>, <i>c</i> och <i>d</i> gäller att ${tex('a < b < c < d')}.<br><b>Vilket av talen är närmast 0?</b>`, s1: tex('b = -3'), s2: tex('d = 3'), options: NOG_ALTERNATIV, correct: 2, category: 'logik' },
        { num: 25, text: '<b>Vad är medelvärdet av de fyra talen <i>x</i>, <i>y</i>, <i>z</i> och <i>w</i>?</b>', s1: 'Medelvärdet av <i>y</i> och <i>z</i> är 18. Medelvärdet av <i>x</i> och <i>w</i> är 30.', s2: tex('x + w - (y + z) = 24'), options: NOG_ALTERNATIV, correct: 0, category: 'statistik' },
        { num: 26, text: `Fyrhörningen ABCD är en parallellogram. <b>Hur stor är vinkeln A?</b>${figur(B + 'p1-nog26.webp', 'En parallellogram med hörnen A nere till vänster, B nere till höger, C uppe till höger och D uppe till vänster.', 320)}`, s1: 'Vinkeln B är 116°.', s2: 'Vinkeln C är 64°.', options: NOG_ALTERNATIV, correct: 3, category: 'geometri' },
        { num: 27, text: `${tex('\\frac{x}{400} = \\frac{y}{300}')}<br><br><b>Vilket värde har <i>x</i>?</b>`, s1: tex('y = 300'), s2: tex('x + y = 700'), options: NOG_ALTERNATIV, correct: 3, category: 'algebra' },
        { num: 28, text: 'Tecknet ◊ representerar ett av de fyra räknesätten: addition, subtraktion, multiplikation eller division. <b>Vilket räknesätt är det som ◊ representerar?</b>', s1: '<i>x</i> ◊ 0 = <i>x</i> för alla värden på <i>x</i>.', s2: '<i>x</i> ◊ <i>x</i> = 0 för alla värden på <i>x</i>.', options: NOG_ALTERNATIV, correct: 1, category: 'logik' },
      ],
    },
    {
      id: 'dtk', name: 'DTK – Diagram, tabeller och kartor', shortName: 'DTK', type: 'dtk',
      questions: [
        { num: 29, text: '<b>Till vilket av följande ändamål gick totalt 10 miljoner kronor åren 2012–2014?</b>', options: ['Majblommepengar till skolan', 'Majblommepengar till barn', 'Kläder och skor', 'Fritidsaktiviteter'], correct: 3, diagram: B + 'p1-dtk1.webp', diagramAlt: DTK1, category: 'diagram' },
        { num: 30, text: '<b>Vilket svarsförslag är korrekt vad gäller fördelningen av de utbetalda bidragen från Majblommans lokalavdelningar 2014?</b><br><br>Till enskilda barn respektive till grupper av barn:', options: ['50 procent respektive 50 procent', '60 procent respektive 40 procent', '70 procent respektive 30 procent', '80 procent respektive 20 procent'], correct: 1, diagram: B + 'p1-dtk1.webp', diagramAlt: DTK1, category: 'diagram' },
        { num: 31, text: '<b>Hur stor andel av de bidrag som totalt betalades ut till enskilda barn 2014 avsåg ändamålet sommarlov?</b>', options: ['15 procent', '25 procent', '35 procent', '40 procent'], correct: 1, diagram: B + 'p1-dtk1.webp', diagramAlt: DTK1, category: 'diagram' },
        { num: 32, text: '<b>På hur många av de redovisade platserna hade kvicksilverhalten i muskel från sill/strömming minskat 1992 jämfört med året innan?</b>', options: ['5', '4', '3', '2'], correct: 2, diagram: B + 'p1-dtk2.webp', diagramAlt: DTK2, category: 'diagram' },
        { num: 33, text: '<b>Vad var den genomsnittliga kadmiumhalten i lever från sill/strömming för de sex platserna 1997, förutsatt att torrvikten lever var lika stor vid samtliga platser?</b>', options: ['1,2 mikrogram/gram torrvikt', '1,4 mikrogram/gram torrvikt', '1,6 mikrogram/gram torrvikt', '1,8 mikrogram/gram torrvikt'], correct: 1, diagram: B + 'p1-dtk2.webp', diagramAlt: DTK2, category: 'diagram' },
        { num: 34, text: '<b>Vilket av följande år avses?</b><br><br>Kadmiumhalten i lever från sill/strömming i Utlängtan var 1,5 mikrogram per gram torrvikt, och kvicksilverhalten i muskel från sill/strömming i Karlskrona var 20 nanogram per gram färskvikt.', options: ['1992', '1998', '2004', '2005'], correct: 3, diagram: B + 'p1-dtk2.webp', diagramAlt: DTK2, category: 'diagram' },
        { num: 35, text: '<b>Hur stor andel av de huvud- och halsoperationer respektive plastiska operationer som utfördes 1900 hade god utgång?</b>', options: ['85 respektive 80 procent', '85 respektive 90 procent', '90 respektive 80 procent', '90 respektive 90 procent'], correct: 1, diagram: B + 'p1-dtk3.webp', diagramAlt: DTK3, category: 'tabell' },
        { num: 36, text: '<b>Hur stor andel av Sveriges befolkning utgjorde kurgäster vid hälsobrunnar, bad- och kallvattenkuranstalter år 1900?</b>', options: ['0,5 procent', '5 procent', '10 procent', '15 procent'], correct: 0, diagram: B + 'p1-dtk3.webp', diagramAlt: DTK3, category: 'tabell' },
        { num: 37, text: '<b>Vilken typ av operation hade följande fördelning vad avser operationens utgång?</b><br><br>God 89 procent, mindre god 3 procent, dålig 1 procent, dödlig 4 procent, oviss 3 procent.', options: ['Operation av ben', 'Operation av ledgångar, senor och senskidor', 'Operation av kärl- och nervsystem', 'Operation av öron'], correct: 3, diagram: B + 'p1-dtk3.webp', diagramAlt: DTK3, category: 'tabell' },
        { num: 38, text: '<b>Vilken grupp bestod av 2 000 hushåll med en genomsnittlig årsinkomst på 410 000 kronor?</b>', options: ['Hushållen som flyttade från Kommun Norra till ej angränsande kommun under år 1–5.', 'Hushållen som flyttade från Kommun Södra till ej angränsande kommun under år 1–5.', 'Hushållen som flyttade från Kommun Östra till angränsande kommun under år 1–5.', 'Hushållen som flyttade till Kommun Västra från ej angränsande kommun under år 1–5.'], correct: 0, diagram: B + 'p1-dtk4.webp', diagramAlt: DTK4, category: 'diagram' },
        { num: 39, text: '<b>För hur många av kommunerna gällde att de inflyttade hushållen hade lägre genomsnittlig årsinkomst än hushållen i kommunen hade år 0?</b>', options: ['1', '2', '3', '4'], correct: 1, diagram: B + 'p1-dtk4.webp', diagramAlt: DTK4, category: 'diagram' },
        { num: 40, text: '<b>Hur många hushåll bodde i kommun Norra år 5?</b>', options: ['7 000', '10 000', '12 000', '15 000'], correct: 2, diagram: B + 'p1-dtk4.webp', diagramAlt: DTK4, category: 'diagram' },
      ],
    },
  ],
};
