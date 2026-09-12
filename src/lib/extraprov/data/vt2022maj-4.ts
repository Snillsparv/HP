// Högskoleprovet 7 maj 2022, provpass 4 (kvantitativt).
// Uppgifterna är hämtade från UHR:s publicerade prov på studera.nu.
import { tex, figur, KVA_ALTERNATIV, NOG_ALTERNATIV } from '../types.js';
import type { ExtraPass } from '../types.js';

const B = '/extraprov/vt2022maj/';
const graf = (bokstav: string) => `<img src="${B}p4-xyz4${bokstav}.webp" alt="Graf ${bokstav.toUpperCase()}" data-fadein style="max-width:170px;width:100%;vertical-align:middle;" />`;
const paj = (bokstav: string) => `<img src="${B}p4-dtk29${bokstav}.webp" alt="Cirkeldiagram ${bokstav.toUpperCase()}" data-fadein style="max-width:110px;width:100%;vertical-align:middle;" />`;

const DTK1 = 'Föräldrapenning: tabell över mottagare av föräldrapenning 2012 fördelade på åldersgrupper, med antal mottagare totalt samt kvinnor och män, antal barn och antal nettodagar totalt samt för kvinnor och män';
const DTK2 = 'Tidsanvändning vid ett språkprov: diagram över hur 20 elever fördelade sin tid på 30 uppgifter i tre delar, läsförståelse, grammatik och lucktexter, under ett prov på 150 minuter. Varje elevs rad visar hur många minuter varje besvarad uppgift tog.';
const DTK3 = 'Karlsöarna: kartor över Lilla Karlsö och Stora Karlsö med teckenförklaring för raukar, grottor, rösen, källor, trappor, körvägar, myrar och fyr, samt skalstreck 0 till 500 meter';
const DTK4 = 'Lastbilstransporter på svenska vägar: indexdiagram över utländska och svenska lastbilars trafikarbete 2004 till 2012, stapeldiagram över utländska lastbilars trafikarbete 2012 per land med och utan last, samt indexdiagram över transporterad godsvikt 2004 till 2012';

export const pass: ExtraPass = {
  id: 'vt2022maj-4',
  tillfalle: 'vt2022maj',
  passNr: 4,
  kind: 'kvant',
  name: 'Provpass 4 (kvantitativt)',
  timeMinutes: 55,
  extendedMinutes: 80,
  normering: [[0, 0.0], [18, 0.1], [21, 0.2], [23, 0.3], [25, 0.4], [27, 0.5], [29, 0.6], [32, 0.7], [36, 0.8], [40, 0.9], [43, 1.0], [47, 1.1], [51, 1.2], [54, 1.3], [58, 1.4], [61, 1.5], [64, 1.6], [67, 1.7], [70, 1.8], [72, 1.9], [74, 2.0]],
  subTests: [
    {
      id: 'xyz', name: 'XYZ – Matematisk problemlösning', shortName: 'XYZ', type: 'xyz',
      questions: [
        { num: 1, text: `<b>Vad är ${tex('(1{,}7 \\cdot 10^5) \\cdot (3{,}3 \\cdot 10^3)')}?</b>`, options: [tex('3{,}21 \\cdot 10^8'), tex('5{,}61 \\cdot 10^8'), tex('3{,}21 \\cdot 10^{15}'), tex('5{,}61 \\cdot 10^{15}')], correct: 1, category: 'aritmetik' },
        { num: 2, text: 'Medelvärdet av <i>x</i> och <i>y</i> är 3. Medelvärdet av <i>y</i> och 1 är 5. <b>Vilket värde har <i>x</i>?</b>', options: ['−5', '−3', '0', '15'], correct: 1, category: 'statistik' },
        { num: 3, text: `${tex('x > 1')}<br><br><b>Vilket svarsalternativ motsvarar ${tex('(x^7)^{y+2}')}?</b>`, options: [tex('x^{y+9}'), tex('x^{7y+2}'), tex('x^{7y+14}'), tex('x^{y+49}')], correct: 2, category: 'algebra' },
        { num: 4, text: `${tex('f(x) = \\frac{x}{2} - 1')}<br><br><b>Vilket svarsalternativ visar grafen till <i>f</i>?</b>`, options: [graf('a'), graf('b'), graf('c'), graf('d')], correct: 2, category: 'funktioner' },
        { num: 5, text: `${tex('a \\neq 0,\\; b \\neq 0,\\; x \\neq 0,\\; y \\neq 0')}<br><br><b>Vilket svarsalternativ är med säkerhet lika med <i>b</i> om ${tex('\\frac{6x}{y} = \\frac{3a}{2b}')}?</b>`, options: [tex('\\frac{y}{2}'), tex('\\frac{ay}{4x}'), tex('\\frac{4ay}{x}'), tex('\\frac{9ay}{x}')], correct: 1, category: 'algebra' },
        { num: 6, text: `<b>Hur stor är vinkeln <i>v</i>?</b>${figur(B + 'p4-xyz6.webp', 'En triangel står på en vågrät linje. Från toppen går en lodrät linje ner genom basen, med rät vinkel markerad. Toppvinkeln är delad i 4x till vänster och 5x till höger om den lodräta linjen. Vid det högra bashörnet är yttervinkeln 140°, och vid det vänstra bashörnet är yttervinkeln v.', 420)}`, options: ['130°', '145°', '150°', '160°'], correct: 0, category: 'geometri' },
        { num: 7, text: `${tex('x \\neq 0')}<br>${tex('y \\neq 0')}<br>${tex('\\frac{x^2}{y} + 2 = 2 - (-x)')}<br><br><b>Vilket svarsalternativ är med säkerhet korrekt?</b>`, options: [tex('x + y = 2'), tex('x < y'), tex('x = y'), tex('x > y')], correct: 2, category: 'algebra' },
        { num: 8, text: 'Kalle är pappa till tre pojkar och en flicka. Idag är pojkarnas sammanlagda ålder lika med flickans ålder. <b>Vad är differensen mellan pojkarnas sammanlagda ålder och flickans ålder om tre år?</b>', options: ['0 år', '3 år', '6 år', '9 år'], correct: 2, category: 'aritmetik' },
        { num: 9, text: '<b>Hur många procent är 14,4 av 36?</b>', options: ['35', '40', '45', '50'], correct: 1, category: 'procent' },
        { num: 10, text: `Punkten (<i>a</i>, <i>a</i>) ligger på linjen ${tex('y = \\frac{1}{2}x + 2')}. <b>Vilket värde har <i>a</i>?</b>`, options: ['0', tex('\\frac{1}{2}'), '2', '4'], correct: 3, category: 'funktioner' },
        { num: 11, text: `Ett geometriskt objekt kan delas upp i två kvadrater och två kvartscirklar, som figuren visar. <b>Vilken omkrets har objektet?</b>${figur(B + 'p4-xyz11.webp', 'En figur med rak underkant: i mitten två kvadrater sida vid sida, var och en med sidan 5 cm, och på varje sida en kvartscirkel med radien 5 cm som rundar av hörnen upptill.', 420)}`, options: ['(30 + 5π) cm', '(40 + 5π) cm', '(30 + 10π) cm', '(40 + 10π) cm'], correct: 0, category: 'geometri' },
        { num: 12, text: `${tex('xy = 1')}<br><br><b>Vilket värde har uttrycket ${tex('(x + y)^2 - (x - y)^2')}?</b>`, options: ['0', '1', '2', '4'], correct: 3, category: 'algebra' },
      ],
    },
    {
      id: 'kva', name: 'KVA – Kvantitativa jämförelser', shortName: 'KVA', type: 'kva',
      questions: [
        { num: 13, text: '', q1: '80 000 cm', q2: '8 km', options: KVA_ALTERNATIV, correct: 1, category: 'enheter' },
        { num: 14, text: '', q1: tex('\\frac{1}{5} - \\frac{5}{20}'), q2: '0', options: KVA_ALTERNATIV, correct: 1, category: 'aritmetik' },
        { num: 15, text: 'En mätserie består av de fem positiva heltalen 4, 2, <i>a</i>, 7 och 3.', q1: 'Mätseriens median', q2: '3', options: KVA_ALTERNATIV, correct: 3, category: 'statistik' },
        { num: 16, text: tex('-7(3 - 2x) = 21'), q1: '<i>x</i>', q2: '3', options: KVA_ALTERNATIV, correct: 2, category: 'algebra' },
        { num: 17, text: '', q1: 'Längden av den tredje sidan i en triangel där summan av de två andra sidorna är 17 cm', q2: '15 cm', options: KVA_ALTERNATIV, correct: 3, category: 'geometri' },
        { num: 18, text: tex('x + \\frac{1}{2} = y + \\frac{3}{5}'), q1: '<i>x</i>', q2: '<i>y</i>', options: KVA_ALTERNATIV, correct: 0, category: 'algebra' },
        { num: 19, text: tex('x < y'), q1: '<i>x</i> + <i>y</i>', q2: '<i>x</i> − <i>y</i>', options: KVA_ALTERNATIV, correct: 3, category: 'algebra' },
        { num: 20, text: 'Fyra cirklar har radierna 5 cm, 10 cm, 15 cm respektive 20 cm.', q1: 'Den sammanlagda arean av den största och den minsta cirkeln', q2: 'Den sammanlagda arean av de två mellanstora cirklarna', options: KVA_ALTERNATIV, correct: 0, category: 'geometri' },
        { num: 21, text: `L<sub>1</sub>: ${tex('y = k_1 x + m_1')}<br>L<sub>2</sub>: ${tex('y = k_2 x + m_2')}${figur(B + 'p4-kva21.webp', 'Koordinatsystem med två linjer som korsar varandra på x-axeln vid x = −2. L1 lutar nedåt och skär y-axeln under origo. L2 lutar uppåt och skär y-axeln ovanför origo.', 340)}`, q1: tex('m_1 - m_2'), q2: '0', options: KVA_ALTERNATIV, correct: 1, category: 'funktioner' },
        { num: 22, text: '', q1: 'Summan av primtalsfaktorerna i heltalet 21', q2: 'Summan av primtalsfaktorerna i heltalet 30', options: KVA_ALTERNATIV, correct: 2, category: 'aritmetik' },
      ],
    },
    {
      id: 'nog', name: 'NOG – Kvantitativa resonemang', shortName: 'NOG', type: 'nog',
      questions: [
        { num: 23, text: '<b>Är Alma längre än Elsa?</b>', s1: 'Alma är längre än Freja.', s2: 'Freja är kortare än Elsa.', options: NOG_ALTERNATIV, correct: 4, category: 'logik' },
        { num: 24, text: 'I ett pennställ finns det endast enfärgade svarta och röda pennor. <b>Hur många pennor finns det i pennstället?</b>', s1: 'Sannolikheten är 5/15 att en slumpmässigt plockad penna från pennstället är röd.', s2: 'Det finns 20 svarta pennor i pennstället.', options: NOG_ALTERNATIV, correct: 2, category: 'sannolikhet' },
        { num: 25, text: `${tex('50 < x < 60')}<br><br><b>Vad är <i>x</i>?</b>`, s1: '<i>x</i> är jämnt delbart med 7.', s2: '<i>x</i> är jämnt delbart med 8.', options: NOG_ALTERNATIV, correct: 3, category: 'aritmetik' },
        { num: 26, text: 'En kiosk säljer kulglass och har en dag endast tre olika smaker: choklad, jordgubb och vanilj. <b>Hur många kulor glass säljs under denna dag?</b>', s1: '1/8 av kulorna som säljs under dagen har vaniljsmak. Av smakerna choklad och jordgubb säljs det sammanlagt 140 kulor.', s2: 'Det säljs 80 kulor med smaken choklad under dagen.', options: NOG_ALTERNATIV, correct: 0, category: 'aritmetik' },
        { num: 27, text: `<b>Är ${tex('x < 0')}?</b>`, s1: tex('x < y < z'), s2: tex('xy > xz'), options: NOG_ALTERNATIV, correct: 2, category: 'algebra' },
        { num: 28, text: 'C är en cirkel och K är en kvadrat. <b>Har C större area än K?</b>', s1: 'Sidan i K är större än radien i C.', s2: 'Diametern i C är lika med diagonalen i K.', options: NOG_ALTERNATIV, correct: 1, category: 'geometri' },
      ],
    },
    {
      id: 'dtk', name: 'DTK – Diagram, tabeller och kartor', shortName: 'DTK', type: 'dtk',
      questions: [
        { num: 29, text: `Identifiera åldersgruppen med störst antal mottagare av föräldrapenning. <b>Vilket svarsförslag visar den procentuella fördelningen av kvinnor och män inom denna grupp?</b><br><br><img src="${B}p4-dtk29leg.webp" alt="Teckenförklaring: mörkt fält är kvinnor, ljust fält är män" data-fadein style="max-width:120px;width:100%;" />`, options: [paj('a'), paj('b'), paj('c'), paj('d')], correct: 0, diagram: B + 'p4-dtk1.webp', diagramAlt: DTK1, category: 'tabell' },
        { num: 30, text: '<b>Hur många föräldrapenningdagar togs ut i genomsnitt per barn under 2012?</b>', options: ['36', '55', '68', '77'], correct: 3, diagram: B + 'p4-dtk1.webp', diagramAlt: DTK1, category: 'tabell' },
        { num: 31, text: 'Identifiera den åldersgrupp som tog ut flest föräldrapenningdagar. <b>Hur stor andel av samtliga föräldrapenningdagar togs ut av föräldrar i denna grupp?</b>', options: ['20 procent', '30 procent', '40 procent', '50 procent'], correct: 1, diagram: B + 'p4-dtk1.webp', diagramAlt: DTK1, category: 'tabell' },
        { num: 32, text: '<b>Vilken av följande elever besvarade uppgifterna i grammatikdelen på kortast tid?</b>', options: ['Elev 1', 'Elev 8', 'Elev 10', 'Elev 14'], correct: 2, diagram: B + 'p4-dtk2.webp', diagramAlt: DTK2, category: 'diagram' },
        { num: 33, text: '<b>Vilken uppgift arbetade flest elever med när exakt 30 minuter av provtiden hade gått?</b>', options: ['Uppgift 4', 'Uppgift 5', 'Uppgift 6', 'Uppgift 7'], correct: 0, diagram: B + 'p4-dtk2.webp', diagramAlt: DTK2, category: 'diagram' },
        { num: 34, text: 'Studera provtiden för de tre elever som inte besvarade alla uppgifter i provet. <b>Hur lång tid använde de i genomsnitt till läsförståelsedelen?</b>', options: ['45 minuter', '50 minuter', '55 minuter', '65 minuter'], correct: 2, diagram: B + 'p4-dtk2.webp', diagramAlt: DTK2, category: 'diagram' },
        { num: 35, text: 'Från fyren på Stora Karlsö kan man gå nedför en trappa till stranden och följa strandkanten till Norderhamn. Från fyren går också en körväg till Norderhamn. <b>Hur mycket längre blir det att ta körvägen?</b>', options: ['800 meter', '1 200 meter', '1 700 meter', '2 000 meter'], correct: 1, diagram: B + 'p4-dtk3.webp', diagramAlt: DTK3, category: 'karta' },
        { num: 36, text: 'Studera kartan över Lilla Karlsö. <b>På vilket avstånd och i vilken riktning från rauken vid Stalen ligger Helveteshålet?</b>', options: ['630 meter i sydvästlig riktning', '630 meter i nordostlig riktning', '1 050 meter i sydvästlig riktning', '1 050 meter i nordostlig riktning'], correct: 3, diagram: B + 'p4-dtk3.webp', diagramAlt: DTK3, category: 'karta' },
        { num: 37, text: 'Vid Hesselby läde på Stora Karlsö finns ett järnåldersröse. <b>Hur många grottor ligger inom en radie av 500 meter från detta röse?</b>', options: ['3', '4', '5', '6'], correct: 2, diagram: B + 'p4-dtk3.webp', diagramAlt: DTK3, category: 'karta' },
        { num: 38, text: '<b>Vilket av följande år uppgick de svenska lastbilarnas transporterade godsvikt till omkring 350 miljoner ton?</b>', options: ['2006', '2007', '2009', '2012'], correct: 1, diagram: B + 'p4-dtk4.webp', diagramAlt: DTK4, category: 'diagram' },
        { num: 39, text: '<b>Hur omfattande var utländska och svenska lastbilars totala trafikarbete på svenska vägar 2012?</b>', options: ['2,5 miljarder km', '2,7 miljarder km', '2,9 miljarder km', '3,6 miljarder km'], correct: 2, diagram: B + 'p4-dtk4.webp', diagramAlt: DTK4, category: 'diagram' },
        { num: 40, text: '<b>Hur långt sammanlagt körde lastbilar från Norge, Danmark och Finland utan last på svenska vägar 2012?</b>', options: ['50 miljoner km', '70 miljoner km', '230 miljoner km', '280 miljoner km'], correct: 0, diagram: B + 'p4-dtk4.webp', diagramAlt: DTK4, category: 'diagram' },
      ],
    },
  ],
};
