// Högskoleprovet 13 april 2024, provpass 2 (kvantitativt).
// Uppgifterna är hämtade från UHR:s publicerade prov på studera.nu.
import { tex, figur, KVA_ALTERNATIV, NOG_ALTERNATIV } from '../types.js';
import type { ExtraPass } from '../types.js';

const B = '/extraprov/vt2024/';
const graf = (bokstav: string) => `<img src="${B}p2-xyz3${bokstav}.webp" alt="Graf ${bokstav.toUpperCase()}" data-fadein style="max-width:190px;width:100%;vertical-align:middle;" />`;

const DTK1 = 'Tågens ankomster och förseningar: stapeldiagram över antalet tågankomster i tusental och genomsnittlig försening i minuter per ankomst 2012, per kommungrupp';
const DTK2 = 'Specialistbevis för läkare: tabell över antalet specialistbevis inom opererande, invärtesmedicinska och barnmedicinska specialiteter 2009 till 2013, samt hur många som hörde till personer yngre än 65 år';
const DTK3 = 'Flyttmönster i Stockholm: figurer över antalet personer som flyttade till, från och inom Stockholms kommun 2015, samt mellan och inom Västerort, Inre staden och Söderort';
const DTK4 = 'Ekologisk animalieproduktion i Sverige: linjediagram över slakten av ekologiskt uppfödda svin, får och lamm, kyckling och nötkreatur 2009 till 2015 i ton, samt andelen ekologiskt av den totala slakten per djurslag';

export const pass: ExtraPass = {
  id: 'vt2024-2',
  tillfalle: 'vt2024',
  passNr: 2,
  kind: 'kvant',
  name: 'Provpass 2 (kvantitativt)',
  timeMinutes: 55,
  extendedMinutes: 80,
  normering: [[0, 0.0], [18, 0.1], [20, 0.2], [22, 0.3], [24, 0.4], [27, 0.5], [29, 0.6], [33, 0.7], [36, 0.8], [40, 0.9], [44, 1.0], [47, 1.1], [51, 1.2], [55, 1.3], [58, 1.4], [61, 1.5], [65, 1.6], [68, 1.7], [70, 1.8], [72, 1.9], [75, 2.0]],
  subTests: [
    {
      id: 'xyz', name: 'XYZ – Matematisk problemlösning', shortName: 'XYZ', type: 'xyz',
      questions: [
        { num: 1, text: `En rätvinklig triangel och en kvadrat är placerade enligt figuren. <b>Hur lång är sträckan <i>x</i>?</b>${figur(B + 'p2-xyz1.webp', 'Kvadrat med arean 16 cm² och ovanpå den en rätvinklig triangel med arean 6 cm². Sträckan x är den sammanlagda höjden', 240)}`, options: ['6 cm', '7 cm', '8 cm', '9 cm'], correct: 1, category: 'geometri' },
        { num: 2, text: `<i>x</i> och <i>y</i> uppfyller sambandet ${tex('2x + 3xy - 4y = 10')}. <b>Vilket värde har <i>x</i> om ${tex('y = -2')}?</b>`, options: ['−18', tex('-\\frac{9}{2}'), '−2', tex('-\\frac{1}{2}')], correct: 3, category: 'algebra' },
        { num: 3, text: `${tex('f(x) = \\frac{x}{2} - 1')}<br><br><b>Vilket svarsalternativ visar grafen till funktionen <i>f</i>?</b>`, options: [graf('a'), graf('b'), graf('c'), graf('d')], correct: 3, category: 'funktioner' },
        { num: 4, text: '60 % av <i>x</i> är 39. <b>Vad är <i>x</i>?</b>', options: ['60', '65', '72', '78'], correct: 1, category: 'procent' },
        { num: 5, text: `<b>Vilket svarsalternativ motsvarar ${tex('a(b + c) - b(a + c) + c(b - a)')}?</b>`, options: ['0', tex('ab - bc - ac'), tex('2(ab + ac + bc)'), tex('2c + bc - a')], correct: 0, category: 'algebra' },
        { num: 6, text: `<b>Hur stor är vinkeln <i>x</i>?</b>${figur(B + 'p2-xyz6.webp', 'Rätvinklig triangel ABC med rät vinkel vid B och vinkeln 65° vid C. Från B går en sträcka till en punkt på AC, där vinkeln mot A är 123°. Vinkeln x ligger vid B mellan sträckan och AB', 360)}`, options: ['25°', '32°', '57°', '58°'], correct: 1, category: 'geometri' },
        { num: 7, text: `${tex('a > 0')}<br>${tex('b < 0')}<br><br><b>Vilken av punkterna i koordinatsystemet nedan kan ha koordinaterna ${tex('(a^2 b,\\ ab^3)')}?</b>${figur(B + 'p2-xyz7.webp', 'Koordinatsystem med punkten P i första kvadranten, Q i andra, R i tredje och S i fjärde', 280)}`, options: ['P', 'Q', 'R', 'S'], correct: 2, category: 'algebra' },
        { num: 8, text: 'En stängd låda med innermåtten 50 cm × 54 cm × 72 cm innehåller klossar med måtten 5 cm × 6 cm × 9 cm. <b>Hur många klossar kan det som mest finnas i lådan?</b>', options: ['270', '500', '650', '720'], correct: 3, category: 'geometri' },
        { num: 9, text: `${tex('xy \\neq 0')}<br><br><b>Vilket svarsalternativ motsvarar ${tex('\\frac{2xy(3xy + 15y)}{6xy^2}')}?</b>`, options: [tex('x + 5'), tex('3x + 15'), tex('x + 15y'), tex('\\frac{2x^2y + 5}{2xy}')], correct: 0, category: 'algebra' },
        { num: 10, text: `För heltalen <i>x</i>, <i>y</i> och <i>z</i> gäller att ${tex('xyz = 12')} och att ${tex('0 < x < y < z')}.<br><b>Vilket är det största möjliga värdet på <i>z</i> − <i>x</i>?</b>`, options: ['1', '3', '5', '6'], correct: 2, category: 'aritmetik' },
        { num: 11, text: 'Laila har sex enfärgade kulor och tre lådor: A, B och C. I låda A finns det två röda och en vit kula. I låda B finns det en röd och två vita kulor. Låda C är tom. Laila plockar slumpmässigt en kula ur låda A och en kula ur låda B och lägger dem i låda C.<br><b>Hur stor är då sannolikheten att alla tre lådorna innehåller en röd och en vit kula?</b>', options: [tex('\\frac{1}{3}'), tex('\\frac{2}{3}'), tex('\\frac{1}{9}'), tex('\\frac{4}{9}')], correct: 3, category: 'sannolikhet' },
        { num: 12, text: `<b>Vilket svarsalternativ är lika med ${tex('2\\left(2^5 + 2^5\\right)')}?</b>`, options: [tex('2^6'), tex('2^7'), tex('2^{11}'), tex('2^{12}')], correct: 1, category: 'aritmetik' },
      ],
    },
    {
      id: 'kva', name: 'KVA – Kvantitativa jämförelser', shortName: 'KVA', type: 'kva',
      questions: [
        { num: 13, text: `${tex('x - 5 = y + 5')}<br>${tex('y = 0')}`, q1: '<i>x</i>', q2: '0', options: KVA_ALTERNATIV, correct: 0, category: 'algebra' },
        { num: 14, text: 'J är det nionde jämna talet efter 15 och U är det sjunde udda talet efter 18.', q1: 'J − U', q2: '0', options: KVA_ALTERNATIV, correct: 0, category: 'aritmetik' },
        { num: 15, text: '', q1: `Medelvärdet av ${tex('\\frac{1}{10}')} och ${tex('\\frac{1}{5}')}`, q2: tex('\\frac{1}{7}'), options: KVA_ALTERNATIV, correct: 0, category: 'statistik' },
        { num: 16, text: `${tex('a \\leq -1')}<br>${tex('b < 0')}`, q1: tex('\\frac{a}{b}'), q2: '1', options: KVA_ALTERNATIV, correct: 3, category: 'algebra' },
        { num: 17, text: `Omkretsen av den regelbundna femhörningen ABCDE är 75 cm.${figur(B + 'p2-kva17.webp', 'Regelbunden femhörning ABCDE med sträckorna AB, BE och ED markerade', 240)}`, q1: 'Den sammanlagda längden av de tre sträckorna AB, BE och ED', q2: '45 cm', options: KVA_ALTERNATIV, correct: 0, category: 'geometri' },
        { num: 18, text: '', q1: '50 procent av ett tal större än 1 000', q2: '75 procent av ett tal mindre än 800', options: KVA_ALTERNATIV, correct: 3, category: 'procent' },
        { num: 19, text: tex('\\frac{3}{2} + \\frac{x}{3} = 1'), q1: '<i>x</i>', q2: tex('-\\frac{1}{6}'), options: KVA_ALTERNATIV, correct: 1, category: 'algebra' },
        { num: 20, text: 'Linjen L<sub>1</sub> går genom punkterna (−1, 3) och (1, 2). Linjen L<sub>2</sub> är vinkelrät mot L<sub>1</sub> och går genom origo.', q1: 'Riktningskoefficienten för L<sub>1</sub>', q2: 'Riktningskoefficienten för L<sub>2</sub>', options: KVA_ALTERNATIV, correct: 1, category: 'funktioner' },
        { num: 21, text: 'Den rätvinkliga triangeln T har sidlängderna 3 cm, 4 cm och 5 cm.<br>T har samma omkrets som kvadraten K.', q1: 'Arean av T', q2: 'Arean av K', options: KVA_ALTERNATIV, correct: 1, category: 'geometri' },
        { num: 22, text: '', q1: tex('(x^4 + 1)(x^3 - x)'), q2: tex('(x^5 + x)(x^2 - 1)'), options: KVA_ALTERNATIV, correct: 2, category: 'algebra' },
      ],
    },
    {
      id: 'nog', name: 'NOG – Kvantitativa resonemang', shortName: 'NOG', type: 'nog',
      questions: [
        { num: 23, text: '<i>x</i> är ett heltal. <b>Vilket värde har <i>x</i>?</b>', s1: tex('x \\geq 3'), s2: tex('x \\leq 4'), options: NOG_ALTERNATIV, correct: 4, category: 'aritmetik' },
        { num: 24, text: 'Tre böcker ligger på ett bord. <b>Hur många sidor har boken med minst antal sidor?</b>', s1: 'De tre böckerna har sammanlagt 792 sidor. Boken med flest sidor har 348 sidor.', s2: 'Medelvärdet av antalet sidor i de tre böckerna är lika med antalet sidor i den bok som varken har störst eller minst antal sidor.', options: NOG_ALTERNATIV, correct: 2, category: 'statistik' },
        { num: 25, text: 'Eva har fyra askar: en röd, en blå, en svart och en grå. En av askarna innehåller pärlor, en knappar, en paljetter och en limstift. Ingen ask är tom. <b>I vilken ask har Eva limstift?</b>', s1: 'I den blå eller den grå asken finns det pärlor. Limstift finns inte i den röda asken.', s2: 'I den svarta asken finns det paljetter. Limstift finns i den blå eller den grå asken.', options: NOG_ALTERNATIV, correct: 4, category: 'logik' },
        { num: 26, text: 'Johan cyklar samma runda vid fem tillfällen. Hans medelhastighet varierar från gång till gång. <b>Hur lång är Johans cykelrunda?</b>', s1: 'Johans medelhastighet för en cykelrunda är som lägst 15 km/h och som högst 25 km/h. Cykelrundan tar som minst 12 minuter och som mest 20 minuter.', s2: 'Om man lägger ihop de fem cykelrundorna blir den sammanlagda tiden 75 minuter och medelhastigheten blir 20 km/h.', options: NOG_ALTERNATIV, correct: 3, category: 'aritmetik' },
        { num: 27, text: 'Nils spelar ett tv-spel där det finns stora och små monster. Vart och ett av monstren är antingen rött eller grönt. Nils besegrar sammanlagt 48 monster. <b>Hur många röda monster besegrar han?</b>', s1: 'Nils besegrar 13 små gröna monster och 9 stora röda monster.', s2: 'Av de 12 stora monster som Nils besegrar är tre fjärdedelar röda.', options: NOG_ALTERNATIV, correct: 2, category: 'aritmetik' },
        { num: 28, text: 'Fyra enfärgade brevlådor sitter på rad på en vägg. En är grön, en är röd, en är svart och en är vit. <b>Vilken färg har brevlådan längst till höger?</b>', s1: 'Den gröna brevlådan sitter mitt emellan den svarta och den vita. Den svarta brevlådan sitter varken längst till höger eller längst till vänster.', s2: 'Den röda brevlådan sitter längst till vänster. Om den svarta och den vita brevlådan skulle byta plats, så skulle den vita brevlådan hamna mitt emellan den röda och den gröna.', options: NOG_ALTERNATIV, correct: 1, category: 'logik' },
      ],
    },
    {
      id: 'dtk', name: 'DTK – Diagram, tabeller och kartor', shortName: 'DTK', type: 'dtk',
      questions: [
        { num: 29, text: '<b>Vilket av svarsförslagen anger de två kommungrupper som var mest lika varandra vad gäller antal tågankomster och genomsnittlig försening?</b>', options: ['Storstäder och Kommuner i tätbefolkad region', 'Förortskommuner till storstäder och Pendlingskommuner', 'Pendlingskommuner och Varuproducerande kommuner', 'Varuproducerande kommuner och Kommuner i tätbefolkad region'], correct: 0, diagram: B + 'p2-dtk1.webp', diagramAlt: DTK1, category: 'diagram' },
        { num: 30, text: '<b>Hur många tågankomster finns redovisade för Förortskommuner till storstäder jämfört med Förortskommuner till större städer?</b>', options: ['Hälften så många', 'Lika många', 'Dubbelt så många', 'Tre gånger så många'], correct: 2, diagram: B + 'p2-dtk1.webp', diagramAlt: DTK1, category: 'diagram' },
        { num: 31, text: '<b>Hur många minuter sammanlagt var de ankommande tågen försenade i Kommuner i glesbefolkad region?</b>', options: ['220 000 minuter', '330 000 minuter', '440 000 minuter', '550 000 minuter'], correct: 1, diagram: B + 'p2-dtk1.webp', diagramAlt: DTK1, category: 'diagram' },
        { num: 32, text: '<b>Vilket svarsförslag beskriver bäst förhållandet mellan opererande, invärtesmedicinska och barnmedicinska specialiteter vad gäller det totala antalet specialistbevis 2012?</b>', options: ['5:3:1', '5:4:1', '6:4:1', '6:5:1'], correct: 1, diagram: B + 'p2-dtk2.webp', diagramAlt: DTK2, category: 'tabell' },
        { num: 33, text: 'Identifiera de tre specialiteterna inom invärtesmedicin med flest utfärdade specialistbevis 2011. <b>Hur stor andel utgjorde dessa av det totala antalet specialistbevis inom invärtesmedicin samma år?</b>', options: ['55 procent', '65 procent', '75 procent', '85 procent'], correct: 2, diagram: B + 'p2-dtk2.webp', diagramAlt: DTK2, category: 'tabell' },
        { num: 34, text: '<b>Vilken opererande specialitet hade 2010 flest specialistbevis som hörde till personer som var 65 år eller äldre?</b>', options: ['Kirurgi', 'Ortopedi', 'Anestesi och intensivvård', 'Obstetrik och gynekologi'], correct: 0, diagram: B + 'p2-dtk2.webp', diagramAlt: DTK2, category: 'tabell' },
        { num: 35, text: '<b>Hur stort var antalet personer som flyttade inom Västerort jämfört med antalet som flyttade från Söderort till Västerort?</b>', options: ['Fyra gånger så stort', 'Fem gånger så stort', 'Sex gånger så stort', 'Sju gånger så stort'], correct: 2, diagram: B + 'p2-dtk3.webp', diagramAlt: DTK3, category: 'diagram' },
        { num: 36, text: '<b>Hur många fler flyttade inom Stockholms kommun än till Stockholms kommun?</b>', options: ['34 927', '35 619', '37 247', '42 074'], correct: 0, diagram: B + 'p2-dtk3.webp', diagramAlt: DTK3, category: 'diagram' },
        { num: 37, text: '<b>Vad blir flyttnettot om man räknar antalet personer som flyttade till Söderort och tar bort antalet som flyttade från Söderort?</b>', options: ['−2 168', '−967', '+1 561', '+2 528'], correct: 3, diagram: B + 'p2-dtk3.webp', diagramAlt: DTK3, category: 'diagram' },
        { num: 38, text: 'Studera de olika djurslagen med avseende på hur stor andel av den totala slakten som utgjordes av ekologiskt uppfödda djur. <b>Hur stor var den största noterade ökningen av denna andel om man jämför 2009 och 2015?</b>', options: ['5 procentenheter', '8 procentenheter', '55 procentenheter', '75 procentenheter'], correct: 1, diagram: B + 'p2-dtk4.webp', diagramAlt: DTK4, category: 'diagram' },
        { num: 39, text: '<b>Hur stor andel av slakten av de redovisade ekologiskt uppfödda djurslagen 2014 utgjorde slakten av svin?</b>', options: ['1/6', '1/4', '1/3', '2/5'], correct: 0, diagram: B + 'p2-dtk4.webp', diagramAlt: DTK4, category: 'diagram' },
        { num: 40, text: 'Slakten av ekologiskt uppfödda får och lamm utgör en mindre andel av den totala slakten av får och lamm. <b>Hur stor var den totala slakten av får och lamm 2012?</b>', options: ['1 000 ton', '2 000 ton', '4 000 ton', '5 000 ton'], correct: 3, diagram: B + 'p2-dtk4.webp', diagramAlt: DTK4, category: 'diagram' },
      ],
    },
  ],
};
