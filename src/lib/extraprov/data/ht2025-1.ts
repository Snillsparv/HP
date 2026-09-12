// Högskoleprovet 19 oktober 2025, provpass 1 (kvantitativt).
// Uppgifterna är hämtade från UHR:s publicerade prov på studera.nu.
import { tex, figur, KVA_ALTERNATIV, NOG_ALTERNATIV } from '../types.js';
import type { ExtraPass } from '../types.js';

const B = '/extraprov/ht2025/';

export const pass: ExtraPass = {
  id: 'ht2025-1',
  tillfalle: 'ht2025',
  passNr: 1,
  kind: 'kvant',
  name: 'Provpass 1 (kvantitativt)',
  timeMinutes: 55,
  extendedMinutes: 80,
  normering: [[0, 0.0], [17, 0.1], [19, 0.2], [21, 0.3], [23, 0.4], [25, 0.5], [28, 0.6], [32, 0.7], [36, 0.8], [40, 0.9], [44, 1.0], [48, 1.1], [52, 1.2], [56, 1.3], [59, 1.4], [63, 1.5], [67, 1.6], [70, 1.7], [72, 1.8], [74, 1.9], [76, 2.0]],
  subTests: [
    {
      id: 'xyz', name: 'XYZ – Matematisk problemlösning', shortName: 'XYZ', type: 'xyz',
      questions: [
        { num: 1, text: `${tex('x + \\frac{1}{4} = \\frac{1}{8}')}<br><br><b>Vilket värde har <i>x</i>?</b>`, options: [tex('-\\frac{3}{8}'), tex('-\\frac{1}{8}'), tex('\\frac{1}{4}'), tex('\\frac{1}{2}')], correct: 1, category: 'algebra' },
        { num: 2, text: `${figur(B + 'p1-xyz2.webp', 'Två parallella linjer som skärs av två andra linjer', 300)}Linjerna L<sub>1</sub> och L<sub>2</sub> är parallella. <b>Hur stor är vinkeln <i>v</i>?</b>`, options: ['102°', '115°', '139°', '143°'], correct: 1, category: 'geometri' },
        { num: 3, text: `<b>Vilket svarsalternativ motsvarar uttrycket ${tex('(3x + y)(x - y)')}?</b>`, options: [tex('3x^2 - 2xy - y^2'), tex('3x^2 + xy - y^2'), tex('3x^2 - y^2'), tex('3x^2 + 2xy - y^2')], correct: 0, category: 'algebra' },
        { num: 4, text: `${tex('f(x) = 4x + 1')}<br>${tex('g(x) = 2 \\cdot f(x) - 1')}<br><br><b>Vad är <i>g</i>(3)?</b>`, options: ['5', '13', '24', '25'], correct: 3, category: 'funktioner' },
        { num: 5, text: `${figur(B + 'p1-xyz5.webp', 'Rektangel ABCD med ett skuggat parallelltrapets', 260)}Fyrhörningen ABCD är en rektangel. <b>Hur stor är arean av det skuggade området?</b>`, options: ['4 cm²', '4,5 cm²', '5 cm²', '5,5 cm²'], correct: 2, category: 'geometri' },
        { num: 6, text: `<b>Vad är 45 % av ${tex('\\frac{2}{9}')}?</b>`, options: [tex('\\frac{1}{9}'), tex('\\frac{1}{10}'), tex('\\frac{1}{11}'), tex('\\frac{1}{12}')], correct: 1, category: 'aritmetik' },
        { num: 7, text: `<b>Hur lång tid tar det att färdas 18 km med hastigheten 20 m/s?</b>`, options: ['15 minuter', '18 minuter', '36 minuter', '54 minuter'], correct: 0, category: 'aritmetik' },
        { num: 8, text: `För linjen L med ekvationen ${tex('y = kx + m')} gäller att <i>k</i> är negativt. Linjen L skär <i>y</i>-axeln i punkten (0, −4). Tillsammans med <i>x</i>-axeln och <i>y</i>-axeln avgränsar L en triangel med arean 2 areaenheter.<br><b>Vilket svarsalternativ anger skärningspunkten mellan linjen L och <i>x</i>-axeln?</b>`, options: [tex('\\left(-\\frac{1}{2},\\ 0\\right)'), '(−1, 0)', '(−2, 0)', '(−4, 0)'], correct: 1, category: 'funktioner' },
        { num: 9, text: `${tex('a \\neq 0')}<br>${tex('b \\neq 0')}<br><br><b>Vilket svarsalternativ motsvarar uttrycket ${tex('\\frac{b}{a} + \\frac{1}{b}')}?</b>`, options: [tex('\\frac{b + 1}{ab}'), tex('\\frac{b + 1}{a + b}'), tex('\\frac{1}{a}'), tex('\\frac{b^2 + a}{ab}')], correct: 3, category: 'algebra' },
        { num: 10, text: `<b>Vilket av följande svarsalternativ är närmast värdet av ${tex('\\sqrt{\\frac{44 \\cdot 4\\,100}{200}}')}?</b>`, options: ['10', '20', '30', '40'], correct: 2, category: 'aritmetik' },
        { num: 11, text: `Vera bildar ett tvåsiffrigt tal <i>x</i> genom att göra två slumpmässiga kast med en vanlig sexsidig tärning. Resultatet av det första kastet blir tiotalssiffran i <i>x</i>, och resultatet av det andra kastet blir entalssiffran i <i>x</i>. <b>Hur stor är sannolikheten att <i>x</i> är större än 40?</b>`, options: [tex('\\frac{1}{4}'), tex('\\frac{1}{3}'), tex('\\frac{1}{2}'), tex('\\frac{2}{3}')], correct: 2, category: 'sannolikhet' },
        { num: 12, text: `<b>Vad är ${tex('2 \\cdot 3^{-1} + 3 \\cdot 3^{-2}')}?</b>`, options: [tex('5 \\cdot 3^{-1}'), tex('\\frac{11}{54}'), tex('5 \\cdot 3^{-3}'), '1'], correct: 3, category: 'aritmetik' },
      ],
    },
    {
      id: 'kva', name: 'KVA – Kvantitativa jämförelser', shortName: 'KVA', type: 'kva',
      questions: [
        { num: 13, text: '', q1: `25 procent av ${tex('\\sqrt{16}')}`, q2: tex('\\sqrt{4}'), options: KVA_ALTERNATIV, correct: 1, category: 'aritmetik' },
        { num: 14, text: `${tex('f(x) = -\\frac{x}{2} + 5')}<br>${tex('g(x) = \\frac{x}{2} - 1')}`, q1: tex('f(-2)'), q2: tex('g(14)'), options: KVA_ALTERNATIV, correct: 2, category: 'funktioner' },
        { num: 15, text: 'Lisbeth är äldre än Sara.<br>Eva är äldre än Camilla.<br>Camilla är äldre än Sara.', q1: 'Lisbeths ålder', q2: 'Evas ålder', options: KVA_ALTERNATIV, correct: 3, category: 'logik' },
        { num: 16, text: `${tex('2 = \\frac{194}{x}')}<br>${tex('3 = 100 - y')}`, q1: '<i>x</i>', q2: '<i>y</i>', options: KVA_ALTERNATIV, correct: 2, category: 'algebra' },
        { num: 17, text: tex('y > 0'), q1: tex('x - y'), q2: tex('3x - 2y'), options: KVA_ALTERNATIV, correct: 3, category: 'algebra' },
        { num: 18, text: '', q1: tex('\\frac{1}{2} + \\frac{2}{5} + \\frac{3}{7}'), q2: tex('\\frac{93}{71}'), options: KVA_ALTERNATIV, correct: 0, category: 'aritmetik' },
        { num: 19, text: '', q1: 'Kvoten mellan omkretsen av en cirkel och cirkelns diameter', q2: tex('2\\sqrt{2}'), options: KVA_ALTERNATIV, correct: 0, category: 'geometri' },
        { num: 20, text: `${tex('x > 0')}<br>${tex('y < 0')}`, q1: tex('x^3 y^4'), q2: tex('x^4 y^3'), options: KVA_ALTERNATIV, correct: 0, category: 'algebra' },
        { num: 21, text: `${tex('x < 5')}${figur(B + 'p1-kva21.webp', 'Triangel med sidorna x cm, 3 cm och 4 cm och vinkeln y', 200)}`, q1: '<i>y</i>', q2: '90°', options: KVA_ALTERNATIV, correct: 1, category: 'geometri' },
        { num: 22, text: 'Produkten av tre primtal är 42.', q1: 'Medianen av de tre primtalen', q2: '3', options: KVA_ALTERNATIV, correct: 2, category: 'aritmetik' },
      ],
    },
    {
      id: 'nog', name: 'NOG – Kvantitativa resonemang', shortName: 'NOG', type: 'nog',
      questions: [
        { num: 23, text: 'I en julklappssäck finns det 25 paket: hårda och mjuka. Vart och ett av paketen är inslaget i antingen enfärgat eller mönstrat papper. <b>Hur många hårda paket finns det i säcken?</b>', s1: 'Det finns 18 paket som är inslagna i mönstrat papper.', s2: 'Av de paket som är inslagna i enfärgat papper är fem hårda och två mjuka.', options: NOG_ALTERNATIV, correct: 4, category: 'logik' },
        { num: 24, text: 'Sarah och Therese tävlade mot varandra i 100 meter frisim. <b>Vem av dem vann?</b>', s1: 'Sarahs medelhastighet var 1,91 m/s.', s2: 'Thereses tid var 50,6 sekunder.', options: NOG_ALTERNATIV, correct: 2, category: 'logik' },
        { num: 25, text: '<b>Vilket värde har <i>x</i> + <i>y</i>?</b>', s1: tex('\\frac{x + y}{2} + 3 = 10'), s2: tex('y = 6x'), options: NOG_ALTERNATIV, correct: 0, category: 'algebra' },
        { num: 26, text: 'Anki, Bosse, Cissi, Danne och Ellen var med i en tävling. Endast tre av dem fick medalj. <b>Fick Anki medalj?</b>', s1: 'Minst en av Bosse och Danne fick medalj. Ellen fick ingen medalj.', s2: 'Minst en av Anki och Cissi fick medalj. Minst en av Bosse och Ellen fick ingen medalj.', options: NOG_ALTERNATIV, correct: 4, category: 'logik' },
        { num: 27, text: 'Styrelsen i en förening ska välja en ordförande, en sekreterare och en kassör. Göran, Roger och Stig blir valda till de olika posterna. <b>Vem av dem väljs till sekreterare?</b>', s1: 'Varken Göran eller Roger väljs till kassör. Stig väljs inte till sekreterare.', s2: 'Varken Göran eller Stig väljs till ordförande. Stig väljs till kassör.', options: NOG_ALTERNATIV, correct: 1, category: 'logik' },
        { num: 28, text: 'Påse A innehåller dubbelt så många äpplen som påse B. <b>Hur många äpplen innehåller de båda påsarna tillsammans?</b>', s1: 'Om man tar bort 10 äpplen från vardera påse så innehåller påse A tre gånger så många äpplen som påse B.', s2: 'Påse A innehåller 20 fler äpplen än påse B.', options: NOG_ALTERNATIV, correct: 3, category: 'algebra' },
      ],
    },
    {
      id: 'dtk', name: 'DTK – Diagram, tabeller och kartor', shortName: 'DTK', type: 'dtk',
      questions: [
        { num: 29, text: '<b>Hur stor andel av pensionärerna med garantipension var kvinnor?</b>', options: ['60 procent', '70 procent', '80 procent', '90 procent'], correct: 2, diagram: B + 'p1-dtk1.webp', diagramAlt: 'Pensioner: tabell över antalet pensionärer i december 2017 efter kön, uttagsandel och typ av pension', category: 'tabell' },
        { num: 30, text: 'Studera antalet pensionärer med halvt respektive en fjärdedels uttag av tilläggspension. <b>Hur många fler var männen än kvinnorna sammanlagt i dessa två grupper?</b>', options: ['169', '351', '501', '729'], correct: 1, diagram: B + 'p1-dtk1.webp', diagramAlt: 'Pensioner: tabell över antalet pensionärer i december 2017 efter kön, uttagsandel och typ av pension', category: 'tabell' },
        { num: 31, text: '<b>För vilken uttagsandel var förhållandet mellan antalet pensionärer med inkomstpension och antalet pensionärer med premiepension 2:5?</b>', options: ['Helt uttag', 'Tre fjärdedels uttag', 'Halvt uttag', 'En fjärdedels uttag'], correct: 3, diagram: B + 'p1-dtk1.webp', diagramAlt: 'Pensioner: tabell över antalet pensionärer i december 2017 efter kön, uttagsandel och typ av pension', category: 'tabell' },
        { num: 32, text: '<b>Vilket svarsförslag anger en kategori där antalet företag per åldersgrupp ökade med företagsledarnas ålder?</b>', options: ['Företag inom Företags- och konsulttjänster med män som företagsledare', 'Företag inom Företags- och konsulttjänster med kvinnor som företagsledare', 'Företag inom Handel med kvinnor som företagsledare', 'Företag inom Bygg med män som företagsledare'], correct: 0, diagram: B + 'p1-dtk2.webp', diagramAlt: 'Företag och företagsledare: stapeldiagram över antalet företag i fem branscher 2016 efter företagsledarens kön och ålder', category: 'diagram' },
        { num: 33, text: 'Identifiera den bransch där antalet företag med kvinnor som företagsledare var större än antalet företag med män som företagsledare. <b>Hur många företag fanns det totalt i denna bransch?</b>', options: ['30 000', '50 000', '70 000', '95 000'], correct: 1, diagram: B + 'p1-dtk2.webp', diagramAlt: 'Företag och företagsledare: stapeldiagram över antalet företag i fem branscher 2016 efter företagsledarens kön och ålder', category: 'diagram' },
        { num: 34, text: 'Studera den stapel i branschen Handel som redovisar antalet företag med män som företagsledare. En åttondel av denna stapel utgörs av företag med en företagsledare i en viss åldersgrupp. <b>Vilken åldersgrupp?</b>', options: ['60– år', '50–59 år', '30–39 år', '–29 år'], correct: 2, diagram: B + 'p1-dtk2.webp', diagramAlt: 'Företag och företagsledare: stapeldiagram över antalet företag i fem branscher 2016 efter företagsledarens kön och ålder', category: 'diagram' },
        { num: 35, text: '<b>Hur många av städerna (exklusive Stockholm) med fiskimport från skärgården fanns inom en radie av 100 km från Stockholm, om man utgår från cirklarnas mittpunkter?</b>', options: ['6', '5', '4', '3'], correct: 0, diagram: B + 'p1-dtk3.webp', diagramAlt: 'Fiskimport från Stockholms skärgård på 1740-talet: karta med städernas import som cirklar', category: 'karta' },
        { num: 36, text: '<b>Hur stor var skillnaden mellan Västerås och Örebro vad gäller den årliga fiskimporten från skärgården?</b>', options: ['750 tunnor', '1 000 tunnor', '1 750 tunnor', '4 500 tunnor'], correct: 2, diagram: B + 'p1-dtk3.webp', diagramAlt: 'Fiskimport från Stockholms skärgård på 1740-talet: karta med städernas import som cirklar', category: 'karta' },
        { num: 37, text: '<b>Hur stor andel av fiskimporten från skärgården stannade i Stockholm?</b>', options: ['50 procent', '60 procent', '70 procent', '80 procent'], correct: 2, diagram: B + 'p1-dtk3.webp', diagramAlt: 'Fiskimport från Stockholms skärgård på 1740-talet: karta med städernas import som cirklar', category: 'karta' },
        { num: 38, text: '<b>Med hur mycket ökade antalet tranor, procentuellt sett, från den 22 mars till den 25 mars 2016?</b>', options: ['100 procent', '200 procent', '300 procent', '400 procent'], correct: 1, diagram: B + 'p1-dtk4.webp', diagramAlt: 'Trandansen vid Hornborgasjön: linjediagram över antalet räknade tranor 7 mars till 28 april 2009 till 2017', category: 'diagram' },
        { num: 39, text: 'Utgå från antalet tranor den 26 mars 2010. <b>Hur många dagar tog det till dess att antalet tranor var tre gånger så stort?</b>', options: ['2 dagar', '4 dagar', '6 dagar', '7 dagar'], correct: 1, diagram: B + 'p1-dtk4.webp', diagramAlt: 'Trandansen vid Hornborgasjön: linjediagram över antalet räknade tranor 7 mars till 28 april 2009 till 2017', category: 'diagram' },
        { num: 40, text: 'Identifiera den enskilda dag då antalet tranor var som störst. <b>Hur många fler var tranorna denna dag jämfört med samma datum tre år tidigare?</b>', options: ['8 500', '9 500', '10 500', '11 500'], correct: 3, diagram: B + 'p1-dtk4.webp', diagramAlt: 'Trandansen vid Hornborgasjön: linjediagram över antalet räknade tranor 7 mars till 28 april 2009 till 2017', category: 'diagram' },
      ],
    },
  ],
};
