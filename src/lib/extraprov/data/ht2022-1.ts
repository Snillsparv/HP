// Högskoleprovet 23 oktober 2022, provpass 1 (kvantitativt).
// Uppgifterna är hämtade från UHR:s publicerade prov på studera.nu.
import { tex, figur, KVA_ALTERNATIV, NOG_ALTERNATIV } from '../types.js';
import type { ExtraPass } from '../types.js';

const B = '/extraprov/ht2022/';
const graf = (bokstav: string) => `<img src="${B}p1-xyz4${bokstav}.webp" alt="Graf ${bokstav.toUpperCase()}" data-fadein style="max-width:170px;width:100%;vertical-align:middle;" />`;

const DTK1 = 'Försäljning av livsmedel och drycker: tabell över försäljningsvärdet per capita i kronor för olika varugrupper åren 2000, 2003, 2004, 2005, 2006 och 2007, samt cirkeldiagram över försäljningsvärdets procentuella fördelning på varugrupper 2007';
const DTK2 = 'Luftföroreningar: fyra stapeldiagram över halten av svaveldioxid, kvävedioxid, partiklar och bensen i luft i en svensk medeltätort i förhållande till miljömålen, i mikrogram per kubikmeter';
const DTK3 = 'Småländska bruk under stormaktstiden: karta över Småland med masugnsbruk, stångjärnshammarbruk, glasbruk och pappersbruk som grundades 1611 till 1718, med nutida orter och skalstreck';
const DTK4 = 'Sjukskrivningar inom olika yrkesgrupper: två linjediagram över antalet ersatta sjukskrivningsdagar i genomsnitt per anställd kvinna respektive man i olika yrkesgrupper 2002 till 2010';

export const pass: ExtraPass = {
  id: 'ht2022-1',
  tillfalle: 'ht2022',
  passNr: 1,
  kind: 'kvant',
  name: 'Provpass 1 (kvantitativt)',
  timeMinutes: 55,
  extendedMinutes: 80,
  normering: [[0, 0.0], [20, 0.1], [22, 0.2], [24, 0.3], [26, 0.4], [28, 0.5], [31, 0.6], [34, 0.7], [38, 0.8], [42, 0.9], [46, 1.0], [50, 1.1], [54, 1.2], [58, 1.3], [61, 1.4], [64, 1.5], [67, 1.6], [70, 1.7], [73, 1.8], [75, 1.9], [77, 2.0]],
  subTests: [
    {
      id: 'xyz', name: 'XYZ – Matematisk problemlösning', shortName: 'XYZ', type: 'xyz',
      questions: [
        { num: 1, text: `<b>Vilket svarsalternativ motsvarar uttrycket ${tex('(4 - 3)(x + 2y)')}?</b>`, options: [tex('1 + x + 2y'), tex('4 - 3x + 2y'), tex('x + 2y'), tex('4x - 6y')], correct: 2, category: 'algebra' },
        { num: 2, text: `<b>Vad är ${tex('3^3 - 2^3')}?</b>`, options: ['1', '3', '6', '19'], correct: 3, category: 'aritmetik' },
        { num: 3, text: `${tex('0{,}4x + 0{,}2 = 0{,}6x + 1{,}8')}<br><br><b>Vilket värde har <i>x</i>?</b>`, options: ['−10', '−8', '1,6', '2'], correct: 1, category: 'algebra' },
        { num: 4, text: `<b>Vilket svarsalternativ visar linjen ${tex('y = 3x - 2')}?</b>`, options: [graf('a'), graf('b'), graf('c'), graf('d')], correct: 2, category: 'funktioner' },
        { num: 5, text: 'I burk A finns det 50 enfärgade kulor: 10 svarta och 40 vita. I burk B finns det 90 kulor. Sannolikheten är 2/3 att en slumpmässigt plockad kula ur burk B är svart. Kulorna i burk A och burk B hälls över i en tom påse. <b>Vad är sannolikheten att en slumpmässigt plockad kula ur påsen är svart?</b>', options: [tex('\\frac{2}{7}'), tex('\\frac{1}{2}'), tex('\\frac{7}{10}'), tex('\\frac{5}{7}')], correct: 1, category: 'sannolikhet' },
        { num: 6, text: `${tex('f(x) = 5(x^3 + x) - 10(x^2 + 1)')}<br><br><b>Vilket svarsalternativ är lika med ${tex('f(2)')}?</b>`, options: ['0', '3', '20', '100'], correct: 0, category: 'funktioner' },
        { num: 7, text: `Triangeln ABE är likformig med triangeln CDE. <b>Hur lång är AE?</b>${figur(B + 'p1-xyz7.webp', 'Två trianglar ABE och CDE som möts i punkten E. AB är 50 cm, DC är 30 cm och EC är 36 cm. Vinklarna vid A och C är markerade lika, liksom vinklarna vid B och D.', 420)}`, options: ['56 cm', '60 cm', '64 cm', '68 cm'], correct: 1, category: 'geometri' },
        { num: 8, text: 'Albert står i en kö. Antalet personer som står före honom i kön är tre gånger så stort som antalet personer som står efter honom i kön. <b>Vilket svarsalternativ kan vara det totala antalet personer i kön?</b>', options: ['26', '27', '28', '29'], correct: 3, category: 'aritmetik' },
        { num: 9, text: `<b>Vilket svarsalternativ motsvarar uttrycket ${tex('(x + 7)^2 - (x - 7)^2')}?</b>`, options: [tex('28x'), tex('49x'), tex('x^2'), tex('x^2 - 7x + 49')], correct: 0, category: 'algebra' },
        { num: 10, text: `Två cirklar är placerade i en rektangel så att cirklarna tangerar varandra. Var och en av cirklarna tangerar dessutom tre av rektangelns sidor, enligt figuren. Cirklarnas sammanlagda area är ${tex('18\\pi')} cm<sup>2</sup>. <b>Hur stor area har rektangeln?</b>${figur(B + 'p1-xyz10.webp', 'Rektangel med två lika stora cirklar sida vid sida som tangerar varandra och rektangelns sidor', 220)}`, options: ['72 cm<sup>2</sup>', '108 cm<sup>2</sup>', '144 cm<sup>2</sup>', '162 cm<sup>2</sup>'], correct: 0, category: 'geometri' },
        { num: 11, text: `${tex('\\frac{1}{x} = -\\frac{2}{3}')}<br><br><b>Vad är ${tex('x^3')}?</b>`, options: [tex('-\\frac{27}{8}'), tex('-\\frac{8}{27}'), tex('\\frac{8}{27}'), tex('\\frac{27}{8}')], correct: 0, category: 'algebra' },
        { num: 12, text: `${tex('x = \\frac{\\pi}{\\sqrt{2}}')}<br><br><b>I vilket intervall ligger <i>x</i>?</b>`, options: [tex('x < 1'), tex('1 \\leq x < 1{,}5'), tex('1{,}5 \\leq x < 2'), tex('x \\geq 2')], correct: 3, category: 'aritmetik' },
      ],
    },
    {
      id: 'kva', name: 'KVA – Kvantitativa jämförelser', shortName: 'KVA', type: 'kva',
      questions: [
        { num: 13, text: tex('\\frac{8}{10} = \\frac{x}{16}'), q1: '<i>x</i>', q2: '10', options: KVA_ALTERNATIV, correct: 0, category: 'algebra' },
        { num: 14, text: 'Almas ålder är hälften av Ellas och Lenas sammanlagda ålder.', q1: 'Almas ålder', q2: 'Ellas ålder', options: KVA_ALTERNATIV, correct: 3, category: 'algebra' },
        { num: 15, text: '', q1: '30 procent av 40', q2: '40 procent av 30', options: KVA_ALTERNATIV, correct: 2, category: 'procent' },
        { num: 16, text: '', q1: 'Medelvärdet av mätserien 1, 3, 7', q2: 'Medelvärdet av mätserien 1, 1, 3, 7, 7', options: KVA_ALTERNATIV, correct: 1, category: 'statistik' },
        { num: 17, text: `Linjerna L<sub>1</sub> och L<sub>2</sub> är parallella.${figur(B + 'p1-kva17.webp', 'Två parallella linjer L1 och L2 skärs av två andra linjer som korsar varandra mellan dem. Vinkeln x ligger vid L1, vinkeln y vid L2 och vinkeln z där de två linjerna korsar varandra.', 420)}`, q1: '<i>x</i> + <i>y</i> + <i>z</i>', q2: '180°', options: KVA_ALTERNATIV, correct: 2, category: 'geometri' },
        { num: 18, text: `${tex('x \\neq 0')}<br>${tex('x^2 = -5x')}`, q1: '<i>x</i>', q2: '0', options: KVA_ALTERNATIV, correct: 1, category: 'algebra' },
        { num: 19, text: 'Arean av en rektangel är 50 cm<sup>2</sup>. Rektangelns bredd är 5 cm.', q1: 'Längden av rektangelns diagonal', q2: '11 cm', options: KVA_ALTERNATIV, correct: 0, category: 'geometri' },
        { num: 20, text: '', q1: tex('\\frac{3^2}{7^2}'), q2: tex('\\frac{7^{-2}}{3^{-2}}'), options: KVA_ALTERNATIV, correct: 2, category: 'aritmetik' },
        { num: 21, text: 'Linjen L går genom punkten (−10, −1) och har positiv lutning.', q1: '<i>y</i>-koordinaten för den punkt där L skär <i>y</i>-axeln', q2: '0', options: KVA_ALTERNATIV, correct: 3, category: 'funktioner' },
        { num: 22, text: `${tex('y \\neq 0')}<br>${tex('\\frac{2x}{3y} = 7')}`, q1: '<i>y</i>', q2: tex('\\frac{2}{21}x'), options: KVA_ALTERNATIV, correct: 2, category: 'algebra' },
      ],
    },
    {
      id: 'nog', name: 'NOG – Kvantitativa resonemang', shortName: 'NOG', type: 'nog',
      questions: [
        { num: 23, text: 'Julia och August har plockat varsin bukett blommor. Buketterna innehåller endast prästkragar och blåklockor. <b>Hur många blåklockor har August i sin bukett?</b>', s1: 'I Julias bukett finns det 10 prästkragar och 14 blåklockor. August har plockat en blomma mer än Julia.', s2: `${tex('\\frac{3}{5}')} av blommorna i Augusts bukett är blåklockor.`, options: NOG_ALTERNATIV, correct: 2, category: 'aritmetik' },
        { num: 24, text: 'I en ask finns det endast enfärgade kulor: svarta och röda. <b>Hur många fler svarta än röda kulor finns det i asken?</b>', s1: 'Sammanlagt finns det 30 kulor i asken.', s2: 'Det finns 18 svarta kulor i asken. Antalet röda kulor är 2/3 av antalet svarta kulor.', options: NOG_ALTERNATIV, correct: 1, category: 'aritmetik' },
        { num: 25, text: 'Familjerna Andersson, Berg, Cedergren och Dahlman bor i varsin lägenhet i ett trevåningshus. En av familjerna bor på första våningen, två på andra våningen och en på tredje våningen. <b>Vilken familj bor på tredje våningen?</b>', s1: 'Familjen Cedergren bor nedanför familjen Andersson.', s2: 'Familjen Berg bor nedanför familjen Dahlman.', options: NOG_ALTERNATIV, correct: 4, category: 'logik' },
        { num: 26, text: 'Frida och Jan ska gifta sig. Till festmiddagen ska alla 100 gäster ha varsin vikt servett. Frida och Jan viker själva alla servetter. De arbetar utan avbrott, var och en med sin egen konstanta hastighet. De viker lika många servetter var och blir färdiga samtidigt. <b>Vilken tid börjar Frida vika servetter?</b>', s1: 'Klockan 10.25 börjar Jan vika servetter. Det tar honom 40 minuter att vika alla sina 50 servetter.', s2: 'När Jan börjar vika servetter har Frida precis vikt färdigt 10 servetter.', options: NOG_ALTERNATIV, correct: 2, category: 'aritmetik' },
        { num: 27, text: '<b>Är <i>x</i> ett heltal?</b>', s1: tex('y = 2x'), s2: '<i>y</i> är ett heltal.', options: NOG_ALTERNATIV, correct: 4, category: 'aritmetik' },
        { num: 28, text: 'De fem bokstäverna A, B, C, D och E är skrivna på rad på ett papper. <b>I vilken ordning från vänster till höger är bokstäverna skrivna?</b>', s1: 'D står längst till vänster. B står intill både C och E. A står längst till höger.', s2: 'Varken D eller E står längst till höger. C står intill både A och B. B står intill både C och E.', options: NOG_ALTERNATIV, correct: 1, category: 'logik' },
      ],
    },
    {
      id: 'dtk', name: 'DTK – Diagram, tabeller och kartor', shortName: 'DTK', type: 'dtk',
      questions: [
        { num: 29, text: '<b>Hur stor andel av försäljningsvärdet av livsmedel och drycker 2007 utgjordes av Vin inklusive cider?</b>', options: ['4 procent', '7 procent', '10 procent', '14 procent'], correct: 1, diagram: B + 'p1-dtk1.webp', diagramAlt: DTK1, category: 'tabell' },
        { num: 30, text: '<b>Vilket år var skillnaden i försäljningsvärde mellan varugrupperna Alkoholfria drycker och Alkoholhaltiga drycker som störst respektive som minst, räknat i kronor per capita?</b>', options: ['2000 respektive 2005', '2000 respektive 2006', '2003 respektive 2005', '2003 respektive 2006'], correct: 3, diagram: B + 'p1-dtk1.webp', diagramAlt: DTK1, category: 'tabell' },
        { num: 31, text: '<b>Vilket svarsförslag anger varugrupper som tillsammans utgjorde närmare hälften av försäljningsvärdet av livsmedel och drycker 2007?</b>', options: ['Bröd och spannmål – kött – mjölk, ost och ägg', 'Bröd och spannmål – mjölk, ost och ägg – frukt – grönsaker', 'Kött – fisk – oljor och fetter – frukt – grönsaker', 'Kött – frukt – grönsaker – sötsaker – läsk, juice etc.'], correct: 3, diagram: B + 'p1-dtk1.webp', diagramAlt: DTK1, category: 'diagram' },
        { num: 32, text: '<b>Hur stort var försäljningsvärdet per capita och månad 2004 för varugruppen Bröd och övriga spannmålsprodukter?</b>', options: ['180 kronor', '203 kronor', '224 kronor', '243 kronor'], correct: 1, diagram: B + 'p1-dtk1.webp', diagramAlt: DTK1, category: 'tabell' },
        { num: 33, text: '<b>Hur stor var den totala mängden partiklar i 20 m<sup>3</sup> luft i en svensk medeltätort 2007?</b>', options: ['30 µg', '150 µg', '300 µg', '400 µg'], correct: 2, diagram: B + 'p1-dtk2.webp', diagramAlt: DTK2, category: 'diagram' },
        { num: 34, text: '<b>Hur mycket högre än miljömålet var bensenhalten i luft det år då halten var som högst?</b>', options: ['120 procent högre', '240 procent högre', '330 procent högre', '410 procent högre'], correct: 2, diagram: B + 'p1-dtk2.webp', diagramAlt: DTK2, category: 'diagram' },
        { num: 35, text: '<b>Hur långt var det mellan det ostligast belägna stångjärnshammarbruket och det västligast belägna pappersbruket?</b>', options: ['110 km', '135 km', '200 km', '215 km'], correct: 2, diagram: B + 'p1-dtk3.webp', diagramAlt: DTK3, category: 'karta' },
        { num: 36, text: 'Lokalisera den punkt som ligger mitt emellan Jönköping och Vimmerby. <b>Vilken typ av bruk låg 90 km söder om denna punkt?</b>', options: ['Masugnsbruk', 'Stångjärnshammarbruk', 'Glasbruk', 'Pappersbruk'], correct: 3, diagram: B + 'p1-dtk3.webp', diagramAlt: DTK3, category: 'karta' },
        { num: 37, text: '<b>Vilken av följande orter hade det längsta avståndet till närmaste glasbruk?</b>', options: ['Jönköping', 'Eksjö', 'Vimmerby', 'Västervik'], correct: 0, diagram: B + 'p1-dtk3.webp', diagramAlt: DTK3, category: 'karta' },
        { num: 38, text: '<b>Hur stor var skillnaden 2002 mellan yrkesgruppen med störst respektive minst antal ersatta sjukskrivningsdagar per anställd man?</b>', options: ['13 dagar', '15 dagar', '17 dagar', '19 dagar'], correct: 1, diagram: B + 'p1-dtk4.webp', diagramAlt: DTK4, category: 'diagram' },
        { num: 39, text: 'Studera antalet ersatta sjukskrivningsdagar per anställd kvinna respektive man i yrkesgruppen Service-, omsorgs- och försäljningsarbete 2007. <b>Hur många var sjukskrivningsdagarna per anställd kvinna jämfört med per anställd man?</b>', options: ['Dubbelt så många', 'Tre gånger så många', 'Hälften så många', 'En tredjedel så många'], correct: 0, diagram: B + 'p1-dtk4.webp', diagramAlt: DTK4, category: 'diagram' },
        { num: 40, text: 'Identifiera det år då de ersatta sjukskrivningsdagarna per anställd kvinna i yrkesgruppen Hantverksarbete inom byggverksamhet och tillverkning förändrades som mest i antal jämfört med året innan. <b>Hur stor var denna förändring procentuellt sett?</b>', options: ['15 procent', '20 procent', '25 procent', '30 procent'], correct: 2, diagram: B + 'p1-dtk4.webp', diagramAlt: DTK4, category: 'diagram' },
      ],
    },
  ],
};
