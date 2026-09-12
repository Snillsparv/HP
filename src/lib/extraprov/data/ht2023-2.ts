// Högskoleprovet 22 oktober 2023, provpass 2 (kvantitativt).
// Uppgifterna är hämtade från UHR:s publicerade prov på studera.nu.
import { tex, figur, KVA_ALTERNATIV, NOG_ALTERNATIV } from '../types.js';
import type { ExtraPass } from '../types.js';

const B = '/extraprov/ht2023/';
const graf = (bokstav: string) => `<img src="${B}p2-xyz8${bokstav}.webp" alt="Graf ${bokstav.toUpperCase()}" data-fadein style="max-width:170px;width:100%;vertical-align:middle;" />`;
const cirkel = (bokstav: string) => `<img src="${B}p2-dtk33${bokstav}.webp" alt="Cirkeldiagram ${bokstav.toUpperCase()}" data-fadein style="max-width:130px;width:100%;vertical-align:middle;" />`;

const DTK1 = 'Den svenska lodjursstammen: stapeldiagram över antalet familjegrupper 2003/04 till 2013/14 samt antalet döda lodjur 2002/03 till 2013/14 uppdelat på licensjakt, skyddsjakt och övrig dödlighet';
const DTK2 = 'Yttre orsaker till vård: tabell över antalet patienter som 2013 vårdades i sluten vård på grund av 25 olika yttre orsaker, uppdelat på kvinnor, män och totalt';
const DTK3 = 'Kvävegödsling av skog: illustration av årsringar, stapeldiagram över arealen skog som gödslades årligen 2000 till 2010 i tusental hektar samt karta över den gödslade arealen 2010 per län';
const DTK4 = 'Åldrar bland barnaföderskor: linjediagram över medelåldern bland samtliga barnaföderskor, förstföderskor och omföderskor 1974 till 2014, samt åldersfördelningen i procent bland förstföderskor respektive omföderskor';

export const pass: ExtraPass = {
  id: 'ht2023-2',
  tillfalle: 'ht2023',
  passNr: 2,
  kind: 'kvant',
  name: 'Provpass 2 (kvantitativt)',
  timeMinutes: 55,
  extendedMinutes: 80,
  normering: [[0, 0.0], [17, 0.1], [19, 0.2], [21, 0.3], [23, 0.4], [26, 0.5], [30, 0.6], [34, 0.7], [37, 0.8], [41, 0.9], [45, 1.0], [49, 1.1], [53, 1.2], [58, 1.3], [62, 1.4], [65, 1.5], [68, 1.6], [70, 1.7], [72, 1.8], [74, 1.9], [76, 2.0]],
  subTests: [
    {
      id: 'xyz', name: 'XYZ – Matematisk problemlösning', shortName: 'XYZ', type: 'xyz',
      questions: [
        { num: 1, text: `<b>Vad är ${tex('\\frac{2}{3} + \\frac{4}{7} - \\frac{5}{21}')}?</b>`, options: [tex('-\\frac{1}{11}'), tex('\\frac{1}{7}'), '1', '3'], correct: 2, category: 'aritmetik' },
        { num: 2, text: '<b>Hur stor är den största vinkeln i en triangel där förhållandet mellan vinklarna är 1:2:6?</b>', options: ['60°', '90°', '120°', '135°'], correct: 2, category: 'geometri' },
        { num: 3, text: `${tex('x^3 + bx - 4 = 0')}<br><b>Om ${tex('x = -2')}, vad är då <i>b</i>?</b>`, options: ['−6', '−2', '0', '2'], correct: 0, category: 'algebra' },
        { num: 4, text: `${tex('f(x) = \\frac{3x}{4} - \\frac{1}{2}')}<br><br><b>För vilket värde på <i>x</i> gäller att ${tex('f(x) = 0')}?</b>`, options: [tex('\\frac{3}{8}'), tex('\\frac{2}{3}'), tex('\\frac{3}{2}'), tex('\\frac{8}{3}')], correct: 1, category: 'funktioner' },
        { num: 5, text: `${tex('x + \\frac{3}{5} = \\frac{5}{8}')}<br><br><b>Vad är <i>x</i>?</b>`, options: [tex('\\frac{2}{3}'), tex('\\frac{3}{8}'), tex('\\frac{2}{13}'), tex('\\frac{1}{40}')], correct: 3, category: 'aritmetik' },
        { num: 6, text: 'Medelvärdet av <i>x</i> och <i>y</i> är lika med 16.<br>Medelvärdet av 20 och <i>z</i> är lika med 30.<br><b>Vad är <i>x</i> + <i>y</i> + <i>z</i>?</b>', options: ['42', '56', '62', '72'], correct: 3, category: 'statistik' },
        { num: 7, text: `<b>Vilket svarsalternativ motsvarar uttrycket ${tex('-5x(7 - 3y)')}?</b>`, options: [tex('-35x - 3y'), tex('-(35x - 15)y'), tex('(15y - 35)x'), tex('15x(y + 7)')], correct: 2, category: 'algebra' },
        { num: 8, text: `Ekvationen för en rät linje kan skrivas ${tex('y = kx + m')}. <b>För vilken av nedanstående linjer är produkten ${tex('k \\cdot m')} störst?</b>`, options: [graf('a'), graf('b'), graf('c'), graf('d')], correct: 2, category: 'funktioner' },
        { num: 9, text: '10 % av <i>x</i> är lika med 8 % av <i>y</i>. <b>Om <i>x</i> är lika med 20, vad är då <i>y</i>?</b>', options: ['16', '18', '22', '25'], correct: 3, category: 'procent' },
        { num: 10, text: 'En rektangel har lika stor area som en kvadrat. Kvadratens sidlängd är <i>s</i>. Rektangelns korta sida är 0,7<i>s</i>. <b>Vilket svarsalternativ anger ett uttryck som är lika med rektangelns långa sida?</b>', options: [tex('s + 0{,}3'), tex('s + 0{,}7s'), tex('\\frac{s}{0{,}7}'), tex('1{,}3s')], correct: 2, category: 'geometri' },
        { num: 11, text: `<i>p</i> är ett primtal sådant att ${tex('4 < p < 10')}.<br><i>m</i> är ett positivt heltal sådant att ${tex('m < p')}.<br><b>Vilket svarsalternativ är med säkerhet korrekt?</b>`, options: [`${tex('\\frac{p}{m}')} är ett heltal`, `${tex('\\frac{36m}{p}')} är ett heltal`, `${tex('\\frac{m}{p}')} är ett heltal`, `${tex('\\frac{35m}{p}')} är ett heltal`], correct: 3, category: 'aritmetik' },
        { num: 12, text: 'Annica, Bianca och Cecilia är systrar. Vid tidpunkten T var systrarnas genomsnittliga ålder 24 år. Tre år efter T var Biancas och Cecilias genomsnittliga ålder 25 år.<br><b>Hur gammal var Annica tre år efter T?</b>', options: ['25 år', '27 år', '29 år', '31 år'], correct: 3, category: 'statistik' },
      ],
    },
    {
      id: 'kva', name: 'KVA – Kvantitativa jämförelser', shortName: 'KVA', type: 'kva',
      questions: [
        { num: 13, text: tex('x \\neq 0'), q1: tex('(2x)^2'), q2: tex('2x^2'), options: KVA_ALTERNATIV, correct: 0, category: 'algebra' },
        { num: 14, text: tex('f(x) = x^2 - 3x + 2'), q1: tex('f(-1)'), q2: tex('f(3)'), options: KVA_ALTERNATIV, correct: 0, category: 'funktioner' },
        { num: 15, text: '', q1: tex('\\frac{5^5}{5^3}'), q2: tex('\\frac{5^{28}}{5^{26}}'), options: KVA_ALTERNATIV, correct: 2, category: 'aritmetik' },
        { num: 16, text: '', q1: 'Arean av en rektangel med sidorna 6<i>x</i> cm respektive 0,5<i>x</i> cm', q2: 'Arean av en cirkel med radien <i>x</i> cm', options: KVA_ALTERNATIV, correct: 1, category: 'geometri' },
        { num: 17, text: '', q1: tex('3\\sqrt{6}'), q2: tex('6\\sqrt{3}'), options: KVA_ALTERNATIV, correct: 1, category: 'aritmetik' },
        { num: 18, text: `${tex('x^2 = 25')}<br>${tex('y = x - 2')}`, q1: '<i>y</i>', q2: tex('\\sqrt{16}'), options: KVA_ALTERNATIV, correct: 1, category: 'algebra' },
        { num: 19, text: 'För 6 år sedan var Elsas ålder en tredjedel av vad den är idag.', q1: 'Elsas ålder om 6 år', q2: '18 år', options: KVA_ALTERNATIV, correct: 1, category: 'algebra' },
        { num: 20, text: tex('\\frac{x}{y} = -1'), q1: '<i>x</i> + <i>y</i>', q2: '0', options: KVA_ALTERNATIV, correct: 2, category: 'algebra' },
        { num: 21, text: 'Produkten av två positiva heltal är 12.', q1: 'Medelvärdet av de två talen', q2: '4', options: KVA_ALTERNATIV, correct: 3, category: 'aritmetik' },
        { num: 22, text: 'Triangeln ABC är likbent.', q1: 'Summan av vinkeln A och vinkeln B', q2: '90°', options: KVA_ALTERNATIV, correct: 3, category: 'geometri' },
      ],
    },
    {
      id: 'nog', name: 'NOG – Kvantitativa resonemang', shortName: 'NOG', type: 'nog',
      questions: [
        { num: 23, text: 'På en biograf med tre salonger visas tre olika filmer, en i varje salong. Filmerna är ett drama, en komedi och en skräckfilm. <b>Vilken film visas i vilken salong?</b>', s1: 'Komedin visas inte i salong 2. Skräckfilmen visas i salong 1 eller salong 3.', s2: 'Komedin visas i salong 1. Skräckfilmen visas i salong 2 eller salong 3.', options: NOG_ALTERNATIV, correct: 2, category: 'logik' },
        { num: 24, text: 'Josefin har 85 julgranskulor. Var och en av kulorna är antingen röd eller guldfärgad. Dessutom är var och en av kulorna antingen stor eller liten. <b>Hur många stora röda julgranskulor har Josefin?</b>', s1: 'Fler än hälften av julgranskulorna är röda.<br>Fler än hälften av julgranskulorna är stora.', s2: 'Fem av de små julgranskulorna är röda.', options: NOG_ALTERNATIV, correct: 4, category: 'logik' },
        { num: 25, text: 'Kalle färdades från A till B. <b>Hur långt färdades Kalle?</b>', s1: 'Kalles medelhastighet var 15 km/h.', s2: 'Om Kalle hade färdats dubbelt så fort, så hade han varit framme vid B 7,5 minuter tidigare.', options: NOG_ALTERNATIV, correct: 2, category: 'aritmetik' },
        { num: 26, text: 'I en låda finns det 56 enfärgade kulor i tre olika färger: blå, grön och röd. <b>Hur många röda kulor finns det i lådan?</b>', s1: 'Förhållandet mellan antalet blå och antalet gröna kulor i lådan är 6:5.', s2: '3/7 av antalet kulor i lådan är blå. 5/14 av antalet kulor i lådan är gröna.', options: NOG_ALTERNATIV, correct: 1, category: 'aritmetik' },
        { num: 27, text: 'Ett femsiffrigt tal är skrivet på ett papper. <b>Vilket är det femsiffriga talet?</b>', s1: 'Den första siffran i talet är dubbelt så stor som den femte siffran. Summan av de två första siffrorna är 7. Den tredje siffran är 7.', s2: 'Den fjärde siffran i talet är dubbelt så stor som den första siffran.', options: NOG_ALTERNATIV, correct: 4, category: 'logik' },
        { num: 28, text: `Punkterna A, B, C och M ligger på en linje. Sträckan AC är 3 gånger så lång som sträckan AB. M är mittpunkten på sträckan AC. <b>Hur lång är sträckan BC?</b>${figur(B + 'p2-nog28.webp', 'Linje med punkterna A, B, M och C i den ordningen', 360)}`, s1: 'Sträckan CM är 6 längdenheter.', s2: 'Sträckan AB är 4 längdenheter.', options: NOG_ALTERNATIV, correct: 3, category: 'geometri' },
      ],
    },
    {
      id: 'dtk', name: 'DTK – Diagram, tabeller och kartor', shortName: 'DTK', type: 'dtk',
      questions: [
        { num: 29, text: 'Det totala antalet lodjur kan uppskattas genom att antalet familjegrupper multipliceras med 6. <b>Vilket var förhållandet vintern 2007/2008 mellan antalet döda lodjur och det totala antalet lodjur?</b>', options: ['1:17', '1:13', '1:6', '1:3'], correct: 1, diagram: B + 'p2-dtk1.webp', diagramAlt: DTK1, category: 'diagram' },
        { num: 30, text: '<b>Hur stor andel av antalet döda lodjur 2008/2009 hade dödats i jakt?</b>', options: ['55 procent', '65 procent', '75 procent', '85 procent'], correct: 2, diagram: B + 'p2-dtk1.webp', diagramAlt: DTK1, category: 'diagram' },
        { num: 31, text: 'Lodjur har i genomsnitt två ungar per familjegrupp. <b>Hur många individer innehöll familjegrupperna den vinter när antalet familjegrupper var som störst?</b>', options: ['580', '690', '870', '1 160'], correct: 2, diagram: B + 'p2-dtk1.webp', diagramAlt: DTK1, category: 'diagram' },
        { num: 32, text: 'Identifiera de tre yttre orsaker som ledde till vård av flest patienter. <b>Hur stor andel av de patienter som vårdades på grund av yttre orsak vårdades till följd av dessa tre?</b>', options: ['1/2', '3/5', '2/3', '3/4'], correct: 2, diagram: B + 'p2-dtk2.webp', diagramAlt: DTK2, category: 'tabell' },
        { num: 33, text: `<b>Vilket av cirkeldiagrammen nedan illustrerar könsfördelningen bland patienterna som vårdades till följd av Exponering för rök och öppen eld?</b>${figur(B + 'p2-dtk33leg.webp', 'Teckenförklaring: grå sektor är kvinnor, vit sektor är män', 140)}`, options: [cirkel('a'), cirkel('b'), cirkel('c'), cirkel('d')], correct: 0, diagram: B + 'p2-dtk2.webp', diagramAlt: DTK2, category: 'tabell' },
        { num: 34, text: 'Studera antalet patienter som vårdades på grund av de två yttre orsakerna Missöden som inträffat med patienter under kirurgisk och medicinsk vård och Missöden orsakade av medicinska instrument i diagnostiskt och terapeutiskt bruk. <b>Hur stor var skillnaden mellan det sammanlagda antalet kvinnor och det sammanlagda antalet män?</b>', options: ['508', '600', '718', '810'], correct: 1, diagram: B + 'p2-dtk2.webp', diagramAlt: DTK2, category: 'tabell' },
        { num: 35, text: 'Studera arealen skog som gödslades under den redovisade perioden. <b>Hur mycket större var den sammanlagda arealen skog som gödslades de tre sista åren jämfört med de tre första åren?</b>', options: ['125 000 hektar', '135 000 hektar', '145 000 hektar', '155 000 hektar'], correct: 1, diagram: B + 'p2-dtk3.webp', diagramAlt: DTK3, category: 'diagram' },
        { num: 36, text: '<b>Hur stor andel av den gödslade arealen skog i Sverige 2010 fanns i Norrbottens och Jämtlands län?</b>', options: ['1/3', '1/4', '1/5', '2/5'], correct: 0, diagram: B + 'p2-dtk3.webp', diagramAlt: DTK3, category: 'karta' },
        { num: 37, text: '<b>Hur stor var den sammanlagda arealen skog som gödslades söder om Jämtland och Västernorrland 2010?</b>', options: ['16 900 hektar', '26 300 hektar', '30 300 hektar', '54 000 hektar'], correct: 1, diagram: B + 'p2-dtk3.webp', diagramAlt: DTK3, category: 'karta' },
        { num: 38, text: '<b>Vilket år var medelåldern för förstföderskor 24,9 år och medelåldern för omföderskor 29,0 år?</b>', options: ['1980', '1985', '1990', '1995'], correct: 0, diagram: B + 'p2-dtk4.webp', diagramAlt: DTK4, category: 'diagram' },
        { num: 39, text: 'Identifiera andelen 30–34-åriga förstföderskor 1990. <b>Efter hur många år hade denna andel fördubblats?</b>', options: ['8 år', '9 år', '11 år', '14 år'], correct: 3, diagram: B + 'p2-dtk4.webp', diagramAlt: DTK4, category: 'diagram' },
        { num: 40, text: 'Studera åldersfördelningen bland omföderskor 2010. <b>Vilket svarsförslag anger hur åldersgruppernas andelar förhöll sig till varandra?</b>', options: ['−19 år < 35+ år < 20–24 år < 30–34 år < 25–29 år', '−19 år < 20–24 år < 35+ år < 25–29 år < 30–34 år', '−19 år < 20–24 år < 25–29 år < 30–34 år < 35+ år', '−19 år < 20–24 år < 25–29 år < 35+ år < 30–34 år'], correct: 3, diagram: B + 'p2-dtk4.webp', diagramAlt: DTK4, category: 'diagram' },
      ],
    },
  ],
};
