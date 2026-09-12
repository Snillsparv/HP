// Högskoleprovet 20 oktober 2024, provpass 4 (kvantitativt).
// Uppgifterna är hämtade från UHR:s publicerade prov på studera.nu.
import { tex, figur, KVA_ALTERNATIV, NOG_ALTERNATIV } from '../types.js';
import type { ExtraPass } from '../types.js';

const B = '/extraprov/ht2024/';

const DTK1 = 'Bidrag till friluftsorganisationer: tabell över beviljade statliga organisationsbidrag 2005 till 2015 per organisation, i tusental kronor, samt summa ansökt och andel beviljat';
const DTK2 = 'Sollerö socken på 1700-talet: karta över den nordöstra delen av socknen med byar, fäbodar, vägar, stigar och båtleder samt skala i kilometer';
const DTK3 = 'Konsumtion av drycker 1960 till 2016: tre linjediagram över konsumtionen i liter per person och år av mjölksorter, läskedrycker och öl samt starköl, vin och spritdrycker';
const DTK4 = 'Bilars koldioxidutsläpp 2008: stapeldiagram över genomsnittliga utsläpp i gram per km för nyregistrerade bensin- och dieselbilar respektive samtliga nyregistrerade bilar per län, med spann för kommunerna, samt cirkeldiagram över drivmedel';

export const pass: ExtraPass = {
  id: 'ht2024-4',
  tillfalle: 'ht2024',
  passNr: 4,
  kind: 'kvant',
  name: 'Provpass 4 (kvantitativt)',
  timeMinutes: 55,
  extendedMinutes: 80,
  normering: [[0, 0.0], [17, 0.1], [19, 0.2], [21, 0.3], [23, 0.4], [25, 0.5], [28, 0.6], [31, 0.7], [35, 0.8], [39, 0.9], [43, 1.0], [46, 1.1], [50, 1.2], [54, 1.3], [57, 1.4], [61, 1.5], [64, 1.6], [67, 1.7], [70, 1.8], [72, 1.9], [74, 2.0]],
  subTests: [
    {
      id: 'xyz', name: 'XYZ – Matematisk problemlösning', shortName: 'XYZ', type: 'xyz',
      questions: [
        { num: 1, text: 'Medelvärdet av de fem talen 1, 2, 5, 7 och <i>x</i> är 7. <b>Vad är <i>x</i>?</b>', options: ['13', '14', '18', '20'], correct: 3, category: 'statistik' },
        { num: 2, text: 'Elsa samlar på klistermärken. Hon börjar med 10 klistermärken och utökar sin samling med tre klistermärken varje dag. <i>K</i> är antalet klistermärken som Elsa har, och <i>t</i> är antalet dagar som gått sedan hon började samla. <b>Vilket svarsalternativ anger <i>K</i> som en funktion av <i>t</i>?</b>', options: [tex('K(t) = 3t + 10'), tex('K(t) = 3(t + 10)'), tex('K(t) = 10t + 3'), tex('K(t) = 10(t + 3)')], correct: 0, category: 'funktioner' },
        { num: 3, text: `<b>Vilket värde har uttrycket ${tex('\\dfrac{\\frac{2}{x}}{\\frac{1}{x} + \\frac{x}{x - 1}}')} om ${tex('x = 2')}?</b>`, options: ['−2', tex('\\frac{2}{5}'), '1', tex('\\frac{5}{2}')], correct: 1, category: 'algebra' },
        { num: 4, text: `${tex('a + 2b = b')}<br><br><b>Vilket svarsalternativ motsvarar ${tex('a - b')}?</b>`, options: ['0', '−<i>b</i>', '−2<i>b</i>', '−3<i>b</i>'], correct: 2, category: 'algebra' },
        { num: 5, text: `Ett tåg startar från någon av stationerna P, Q, R eller S. När tåget stannar vid station T har det färdats i 6 timmar med medelhastigheten 90 km/h. <b>Från vilken station startade tåget?</b>${figur(B + 'p4-xyz5.webp', 'Järnvägsnät där linjerna från P och Q går ihop, fortsätter via T och delar sig mot R och S. Avstånd i km: P 245 och Q 155 till förgreningen, 295 vidare till T, 260 från T till nästa förgrening, därifrån 270 till R och 300 till S', 520)}`, options: ['P', 'Q', 'R', 'S'], correct: 0, category: 'aritmetik' },
        { num: 6, text: `<b>Vilket av svarsalternativen är en punkt som ligger mellan de båda linjerna ${tex('y = x + 2')} och ${tex('y = x - 2')}?</b>`, options: ['(3, −3)', '(3, 0)', '(0, −3)', '(3, 3)'], correct: 3, category: 'funktioner' },
        { num: 7, text: 'En kvadrat har lika stor area som en cirkel med radien 2 cm. <b>Vilken sidlängd har kvadraten?</b>', options: [`${tex('\\sqrt{2\\pi}')} cm`, `${tex('2\\sqrt{\\pi}')} cm`, `${tex('\\pi\\sqrt{2}')} cm`, `${tex('2\\pi')} cm`], correct: 1, category: 'geometri' },
        { num: 8, text: `<b>Vilket av svarsalternativen är lika med uttrycket ${tex('xy + x(b - y) + y(a - x) + (a - x)(b - y)')}?</b>`, options: [tex('ab'), tex('xy + ay + bx'), tex('ab + xy'), tex('ab + bx + ay - 2xy')], correct: 0, category: 'algebra' },
        { num: 9, text: `<b>Vilket svarsalternativ är lika med uttrycket ${tex('10 \\cdot \\frac{3 - x}{15} + \\frac{5x}{3}')}?</b>`, options: [tex('\\frac{10 + 8x}{5}'), tex('2 - x'), tex('2 + x'), tex('2 + 8x')], correct: 2, category: 'algebra' },
        { num: 10, text: `<b>Vilket svarsalternativ är lika med ${tex('\\left(2\\sqrt{3} + 3\\sqrt{3}\\right)\\left(4\\sqrt{3} - \\sqrt{3}\\right)')}?</b>`, options: ['15', tex('15\\sqrt{3}'), '45', '135'], correct: 2, category: 'aritmetik' },
        { num: 11, text: `${figur(B + 'p4-xyz11.webp', 'Två rätvinkliga trianglar: en likbent med kateterna x och x, vars hypotenusa är den ena kateten i en annan rätvinklig triangel med den andra kateten x och hypotenusan roten ur 3', 260)}<b>Vilket värde har <i>x</i>?</b>`, options: ['1', tex('\\frac{2}{\\sqrt{3}}'), tex('\\sqrt{\\frac{3}{2}}'), tex('\\sqrt{2}')], correct: 0, category: 'geometri' },
        { num: 12, text: `<b>Vilket svarsalternativ är lika med 20 procent av ${tex('10^{10}')}?</b>`, options: [tex('2^{10}'), tex('2 \\cdot 10^9'), tex('10^2'), tex('20^9')], correct: 1, category: 'procent' },
      ],
    },
    {
      id: 'kva', name: 'KVA – Kvantitativa jämförelser', shortName: 'KVA', type: 'kva',
      questions: [
        { num: 13, text: '', q1: tex('\\frac{1}{2} - \\frac{1}{3}'), q2: tex('\\frac{2}{3} - \\frac{1}{2}'), options: KVA_ALTERNATIV, correct: 2, category: 'aritmetik' },
        { num: 14, text: '', q1: 'Höjden i en triangel med basen 5 cm och arean 20 cm²', q2: 'Höjden i en rektangel med basen 2 cm och arean 17 cm²', options: KVA_ALTERNATIV, correct: 1, category: 'geometri' },
        { num: 15, text: tex('x + 2{,}8 = 5x - 6'), q1: '<i>x</i>', q2: '2', options: KVA_ALTERNATIV, correct: 0, category: 'algebra' },
        { num: 16, text: '', q1: '125 % av 4', q2: '80 % av 6', options: KVA_ALTERNATIV, correct: 0, category: 'procent' },
        { num: 17, text: tex('f(x) = x^2 + 2x - 2'), q1: tex('f(-2)'), q2: tex('f(0)'), options: KVA_ALTERNATIV, correct: 2, category: 'funktioner' },
        { num: 18, text: tex('\\left(47^{\\frac{x}{2}}\\right)^{\\frac{2}{3}} = 47^{\\frac{y}{3}}'), q1: '<i>x</i>', q2: '<i>y</i>', options: KVA_ALTERNATIV, correct: 2, category: 'algebra' },
        { num: 19, text: figur(B + 'p4-kva19.webp', 'Två trianglar med gemensam översida: en yttre triangel med vinkeln 100° i nedersta hörnet och en inre med vinkeln 120°. Vid översidans ändpunkter är vinkeln x i den inre triangeln och vinkeln y mellan trianglarnas sidor', 360), q1: '<i>x</i>', q2: '<i>y</i>', options: KVA_ALTERNATIV, correct: 0, category: 'geometri' },
        { num: 20, text: tex('a \\neq b'), q1: tex('\\frac{(a - b)^2}{a - b}'), q2: tex('\\frac{(b - a)^2}{-(a - b)}'), options: KVA_ALTERNATIV, correct: 3, category: 'algebra' },
        { num: 21, text: 'Karin kör bil med en hastighet som ligger mellan 80 km/h och 100 km/h.', q1: 'Den tid det tar för Karin att köra 120 km', q2: '85 minuter', options: KVA_ALTERNATIV, correct: 3, category: 'aritmetik' },
        { num: 22, text: 'Medelvärdet av <i>x</i> och <i>y</i> är lika med 1.<br>Medelvärdet av <i>x</i> och 4 är lika med <i>y</i>.', q1: '<i>x</i>', q2: '0', options: KVA_ALTERNATIV, correct: 2, category: 'algebra' },
      ],
    },
    {
      id: 'nog', name: 'NOG – Kvantitativa resonemang', shortName: 'NOG', type: 'nog',
      questions: [
        { num: 23, text: 'Edvin har tre enfärgade kulor – en röd, en svart och en vit – som alla är olika stora. <b>Vilken färg har den största kulan?</b>', s1: 'Den vita kulan är mindre än den röda. Den svarta kulan är varken störst eller minst.', s2: 'Den svarta kulan är mindre än den röda. Den vita kulan är minst.', options: NOG_ALTERNATIV, correct: 3, category: 'logik' },
        { num: 24, text: 'Mario köper en halsduk, en jacka och en mössa. <b>Hur mycket kostar Marios jacka?</b>', s1: 'Halsduken kostar en tiondel av vad jackan kostar. Mössan kostar 120 kronor, vilket är 150 procent av vad halsduken kostar.', s2: 'Halsduken och mössan kostar tillsammans en fjärdedel av vad jackan kostar.', options: NOG_ALTERNATIV, correct: 0, category: 'procent' },
        { num: 25, text: 'Tina har 2 285 böcker: romaner och faktaböcker. Var och en av böckerna står antingen i en bokhylla eller ligger i en låda i förrådet. <b>Hur många av Tinas romaner står i en bokhylla?</b>', s1: 'Tina har 1 121 romaner. 2 253 böcker står i en bokhylla.', s2: 'Tina har 1 164 faktaböcker. 32 böcker ligger i en låda i förrådet.', options: NOG_ALTERNATIV, correct: 4, category: 'logik' },
        { num: 26, text: 'Agnes cyklar 2 km längre än Eva. <b>Hur långt cyklar Agnes?</b>', s1: 'Agnes och Eva cyklar med samma medelhastighet.', s2: `Agnes cyklar i 20 minuter. Eva cyklar ${tex('\\frac{3}{5}')} av tiden som Agnes cyklar.`, options: NOG_ALTERNATIV, correct: 2, category: 'aritmetik' },
        { num: 27, text: '<i>x</i>, <i>y</i> och <i>z</i> är tre udda heltal. Talen är olika och skillnaden mellan det största och det minsta talet är 4. <b>Vad är summan av de tre talen?</b>', s1: tex('x = 19'), s2: tex('z = 21'), options: NOG_ALTERNATIV, correct: 4, category: 'aritmetik' },
        { num: 28, text: 'Lars har tre enfärgade askar: en grön, en rosa och en vit. I en av askarna ligger det en guldring. De andra askarna är tomma. <b>I vilken ask ligger guldringen?</b>', s1: 'Ringen ligger antingen i den gröna eller i den rosa asken. Av den rosa och den vita asken är det bara en som är tom.', s2: 'Av den gröna och den vita asken är det minst en som är tom. Av den gröna och den rosa asken är det högst en som är tom.', options: NOG_ALTERNATIV, correct: 0, category: 'logik' },
      ],
    },
    {
      id: 'dtk', name: 'DTK – Diagram, tabeller och kartor', shortName: 'DTK', type: 'dtk',
      questions: [
        { num: 29, text: '<b>Hur mycket fick Riksförbundet Hälsofrämjandet i bidrag sammanlagt under den redovisade perioden?</b>', options: ['3 016 tkr', '3 120 tkr', '3 280 tkr', '3 386 tkr'], correct: 2, diagram: B + 'p4-dtk1.webp', diagramAlt: DTK1, category: 'tabell' },
        { num: 30, text: '<b>Hur stor andel av de beviljade bidragen 2015 gick till Friluftsfrämjandet?</b>', options: ['35 procent', '40 procent', '45 procent', '50 procent'], correct: 2, diagram: B + 'p4-dtk1.webp', diagramAlt: DTK1, category: 'tabell' },
        { num: 31, text: '<b>För hur många av de redovisade åren gällde att summan av de beviljade bidragen hade ökat jämfört med närmast föregående år?</b>', options: ['4', '5', '6', '7'], correct: 2, diagram: B + 'p4-dtk1.webp', diagramAlt: DTK1, category: 'tabell' },
        { num: 32, text: 'Utgå från Flenberget i närheten av Flenarna. <b>Hur många fäbodar fanns inom en radie av 5 km, mätt från mittpunkten av Flenberget?</b>', options: ['8', '9', '10', '12'], correct: 0, diagram: B + 'p4-dtk2.webp', diagramAlt: DTK2, category: 'karta' },
        { num: 33, text: 'Mora, Nusnäs och N. Vika utgör hörnen i ett triangelformat område. <b>Hur stort är detta område?</b>', options: ['23 km²', '45 km²', '67 km²', '90 km²'], correct: 0, diagram: B + 'p4-dtk2.webp', diagramAlt: DTK2, category: 'karta' },
        { num: 34, text: '<b>Hur lång var den kortaste vägen från fäboden i Oratjärn/Berg till fäboden i Björka om man höll sig till ridstigar och buförsvägar?</b>', options: ['10 km', '13 km', '15 km', '18 km'], correct: 3, diagram: B + 'p4-dtk2.webp', diagramAlt: DTK2, category: 'karta' },
        { num: 35, text: '<b>Hur stor var konsumtionen av läskedrycker och mineralvatten 2010 jämfört med 1965?</b>', options: ['Dubbelt så stor', 'Tre gånger så stor', 'Fyra gånger så stor', 'Fem gånger så stor'], correct: 1, diagram: B + 'p4-dtk3.webp', diagramAlt: DTK3, category: 'diagram' },
        { num: 36, text: '<b>Vilket år konsumerades ungefär lika mycket starköl som vin medan konsumtionen av spritdrycker var hälften så stor som vinkonsumtionen?</b>', options: ['1968', '1972', '1978', '1985'], correct: 3, diagram: B + 'p4-dtk3.webp', diagramAlt: DTK3, category: 'diagram' },
        { num: 37, text: '<b>För vilken av mjölkdryckerna förändrades konsumtionen med 80 procent om man jämför det sista registrerade året med det första?</b>', options: ['Gårdsförsäljning av mjölk', 'Lättmjölk samt minimjölk', 'Mellanmjölk', 'Standardmjölk'], correct: 3, diagram: B + 'p4-dtk3.webp', diagramAlt: DTK3, category: 'diagram' },
        { num: 38, text: 'Studera Kalmar län med avseende på samtliga nyregistrerade bilars genomsnittliga koldioxidutsläpp. <b>Hur mycket större var utsläppet i den kommun där det var som störst jämfört med den kommun där det var som minst?</b>', options: ['12 g/km', '15 g/km', '22 g/km', '41 g/km'], correct: 2, diagram: B + 'p4-dtk4.webp', diagramAlt: DTK4, category: 'diagram' },
        { num: 39, text: '<b>Vilket av nedanstående län uppfyller följande kriterier?</b><br>Skillnaden mellan det genomsnittliga koldioxidutsläppet från samtliga nyregistrerade bilar och det genomsnittliga koldioxidutsläppet från nyregistrerade bensin- och dieselbilar var mindre än 20 g/km. I den kommun i länet som hade det högsta genomsnittliga utsläppsvärdet per nyregistrerad bensin- och dieselbil låg värdet över 175 g/km.', options: ['Uppsala län', 'Östergötlands län', 'Södermanlands län', 'Hallands län'], correct: 3, diagram: B + 'p4-dtk4.webp', diagramAlt: DTK4, category: 'diagram' },
        { num: 40, text: 'Anta att samtliga nyregistrerade bilar kör en kilometer. <b>Hur stort blir det totala koldioxidutsläppet?</b>', options: ['31 ton', '38 ton', '43 ton', '81 ton'], correct: 1, diagram: B + 'p4-dtk4.webp', diagramAlt: DTK4, category: 'diagram' },
      ],
    },
  ],
};
