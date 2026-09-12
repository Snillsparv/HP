// Högskoleprovet 22 oktober 2023, provpass 4 (kvantitativt).
// Uppgifterna är hämtade från UHR:s publicerade prov på studera.nu.
import { tex, figur, KVA_ALTERNATIV, NOG_ALTERNATIV } from '../types.js';
import type { ExtraPass } from '../types.js';

const B = '/extraprov/ht2023/';

const DTK1 = 'Samebyar och renägare: tabell över antalet samebyar, renskötselgrupper, renägare (totalt, män och kvinnor) och renar 2016 per län och typ av sameby, samt för hela riket 1995 till 2016';
const DTK2 = 'Hyra, avgift och insats för nybyggda trerumslägenheter 2013: stapeldiagram över genomsnittlig årsavgift i bostadsrätt och årshyra i hyresrätt i kronor per kvadratmeter samt genomsnittlig insats i tusental kronor, för tre storstadsregioner och för kommuner med fler respektive färre än 75 000 invånare';
const DTK3 = 'Järnvägsnätet i Uppsalaområdet: karta över järnvägsnätet med tidsavstånd, turtäthet och antal stationsuppehåll vintern 1952/1953, med numrerade stationer och skala i kilometer';
const DTK4 = 'Tillförd och använd energi i Sverige 1970 till 2017: ytdiagram över total energitillförsel uppdelad efter energikälla och total energianvändning uppdelad efter användningsområde, terawattimmar';
const LISTA = figur(B + 'p4-dtk3lista.webp', 'Stationsförteckning med namnen på stationerna 1 till 62 på kartan', 480);

export const pass: ExtraPass = {
  id: 'ht2023-4',
  tillfalle: 'ht2023',
  passNr: 4,
  kind: 'kvant',
  name: 'Provpass 4 (kvantitativt)',
  timeMinutes: 55,
  extendedMinutes: 80,
  normering: [[0, 0.0], [17, 0.1], [19, 0.2], [21, 0.3], [23, 0.4], [26, 0.5], [30, 0.6], [34, 0.7], [37, 0.8], [41, 0.9], [45, 1.0], [49, 1.1], [53, 1.2], [58, 1.3], [62, 1.4], [65, 1.5], [68, 1.6], [70, 1.7], [72, 1.8], [74, 1.9], [76, 2.0]],
  subTests: [
    {
      id: 'xyz', name: 'XYZ – Matematisk problemlösning', shortName: 'XYZ', type: 'xyz',
      questions: [
        { num: 1, text: `<b>Vilket svarsalternativ motsvarar uttrycket ${tex('\\frac{2(x + 4)}{2} + 8')}?</b>`, options: [tex('x + 10'), tex('x + 12'), tex('x + 16'), tex('2x + 10')], correct: 1, category: 'algebra' },
        { num: 2, text: `${figur(B + 'p4-xyz2.webp', 'Två parallella linjer L1 och L2 korsas av två linjer som skär varandra mellan dem. Vid L1 är vinkeln 131° markerad, vid L2 vinkeln 113°, och vinkeln v ligger vid skärningspunkten', 380)}L<sub>1</sub> och L<sub>2</sub> är parallella linjer. <b>Hur stor är vinkeln <i>v</i>?</b>`, options: ['49°', '61°', '64°', '67°'], correct: 2, category: 'geometri' },
        { num: 3, text: `${tex('3(x - 4) = 2(x + 2)')}<br><br><b>Vad är <i>x</i>?</b>`, options: ['−8', '−2', '6', '16'], correct: 3, category: 'algebra' },
        { num: 4, text: 'Medelvärdet av fyra på varandra följande heltal är 4,5. <b>Vad är medianen?</b>', options: ['4', '4,5', '5', '5,5'], correct: 1, category: 'statistik' },
        { num: 5, text: `Linjerna ${tex('y = kx + 3')} och ${tex('y = 2x - 1')} skär varandra när ${tex('x = 1')}. <b>Vilket värde har <i>k</i>?</b>`, options: ['−2', '−1', '1', '2'], correct: 0, category: 'funktioner' },
        { num: 6, text: 'En bil körde 1 000 meter på 50 sekunder. <b>Vilken medelhastighet hade bilen?</b>', options: ['70 km/h', '72 km/h', '74 km/h', '76 km/h'], correct: 1, category: 'enheter' },
        { num: 7, text: `<b>Vilket svarsalternativ är lika med ${tex('\\dfrac{1}{\\frac{2}{5} - \\frac{5}{6}}')}?</b>`, options: [tex('-\\frac{30}{13}'), tex('-\\frac{11}{3}'), tex('\\frac{1}{3}'), tex('\\frac{13}{10}')], correct: 0, category: 'aritmetik' },
        { num: 8, text: `${figur(B + 'p4-xyz8.webp', 'Två rätvinkliga trianglar: ABD med rät vinkel vid A, AB = 4 cm och AD = 3 cm, samt BDC med rät vinkel vid D och DC = 12 cm', 240)}<b>Hur lång är sträckan BC?</b>`, options: ['13 cm', '14 cm', '15 cm', '16 cm'], correct: 0, category: 'geometri' },
        { num: 9, text: `${tex('x - y = 0')}<br><br><b>Vilket svarsalternativ är med säkerhet lika med <i>xy</i>?</b>`, options: ['0', '1', '<i>x</i>', tex('y^2')], correct: 3, category: 'algebra' },
        { num: 10, text: `<i>n</i> är ett heltal sådant att ${tex('x^n < 0')} då <i>x</i> är ett negativt tal.<br><b>Vilket svarsalternativ är med säkerhet korrekt?</b>`, options: ['<i>n</i> är ett negativt tal.', '<i>n</i> är ett positivt tal.', '<i>n</i> är ett udda tal.', '<i>n</i> är ett jämnt tal.'], correct: 2, category: 'aritmetik' },
        { num: 11, text: 'En myra förflyttar sig i ett koordinatsystem. Myran startar i origo. Den rör sig först 5 längdenheter i <i>x</i>-axelns positiva riktning och därefter 6 längdenheter i <i>y</i>-axelns positiva riktning. Slutligen rör sig myran 3 längdenheter i <i>x</i>-axelns positiva riktning. <b>Hur långt från origo ligger myrans slutpunkt?</b>', options: ['8 längdenheter', '10 längdenheter', '12 längdenheter', '14 längdenheter'], correct: 1, category: 'geometri' },
        { num: 12, text: `<b>Vilket svarsalternativ är lika med ${tex('\\sqrt{12} + \\sqrt{48}')}?</b>`, options: ['10', '11', tex('6\\sqrt{3}'), tex('\\sqrt{60}')], correct: 2, category: 'aritmetik' },
      ],
    },
    {
      id: 'kva', name: 'KVA – Kvantitativa jämförelser', shortName: 'KVA', type: 'kva',
      questions: [
        { num: 13, text: tex('x > 0'), q1: tex('\\sqrt{x} \\cdot \\sqrt{x}'), q2: '<i>x</i>', options: KVA_ALTERNATIV, correct: 2, category: 'algebra' },
        { num: 14, text: 'Två vanliga sexsidiga tärningar kastas slumpmässigt en gång.', q1: 'Sannolikheten att få en fyra och en femma', q2: 'Sannolikheten att få summan 3', options: KVA_ALTERNATIV, correct: 2, category: 'sannolikhet' },
        { num: 15, text: '', q1: tex('\\frac{5}{13} - \\frac{4}{15}'), q2: tex('\\frac{4}{15} - \\frac{5}{13}'), options: KVA_ALTERNATIV, correct: 0, category: 'aritmetik' },
        { num: 16, text: `L är en rät linje.${figur(B + 'p4-kva16.webp', 'Fyra strålar från en punkt på linjen L delar vinkeln ovanför linjen i vinklarna x, x, y och y', 400)}`, q1: '<i>x</i> + <i>y</i>', q2: '90°', options: KVA_ALTERNATIV, correct: 2, category: 'geometri' },
        { num: 17, text: `${tex('x > 0')}<br>${tex('y > 0')}<br>${tex('z > 0')}<br><br>${tex('x^2 + y^2 = z^2')}`, q1: '<i>y</i>', q2: '<i>z</i>', options: KVA_ALTERNATIV, correct: 1, category: 'algebra' },
        { num: 18, text: 'Det ordinarie priset på en vara är 20 % lägre i butik A än i butik B.', q1: 'Priset på varan i butik A om de sänker priset med 5 %', q2: 'Priset på varan i butik B om de sänker priset med 25 %', options: KVA_ALTERNATIV, correct: 0, category: 'procent' },
        { num: 19, text: '', q1: 'Arean av en cirkel med radien 5 cm', q2: '75 cm²', options: KVA_ALTERNATIV, correct: 0, category: 'geometri' },
        { num: 20, text: `${tex('z > 1')}<br><br>${tex('xy = z')}`, q1: '<i>x</i>', q2: '<i>z</i>/<i>y</i>', options: KVA_ALTERNATIV, correct: 2, category: 'algebra' },
        { num: 21, text: 'Linjen L<sub>1</sub> går genom punkterna (2, 1) och (−3, 7).<br>Linjen L<sub>2</sub> är vinkelrät mot L<sub>1</sub>.', q1: 'Riktningskoefficienten för linjen L<sub>1</sub>', q2: 'Riktningskoefficienten för linjen L<sub>2</sub>', options: KVA_ALTERNATIV, correct: 1, category: 'funktioner' },
        { num: 22, text: '', q1: tex('2 \\cdot 10^x'), q2: tex('(2 \\cdot 10)^x'), options: KVA_ALTERNATIV, correct: 3, category: 'algebra' },
      ],
    },
    {
      id: 'nog', name: 'NOG – Kvantitativa resonemang', shortName: 'NOG', type: 'nog',
      questions: [
        { num: 23, text: 'I en klass går det 30 elever. <b>Hur många av eleverna spelar både fotboll och innebandy?</b>', s1: '20 av eleverna spelar fotboll.', s2: '10 av eleverna spelar innebandy.', options: NOG_ALTERNATIV, correct: 4, category: 'logik' },
        { num: 24, text: '<b>Går linjen L genom punkten (5, 5)?</b>', s1: 'Linjen L går genom punkten (4, 6).', s2: 'Linjen L går genom punkten (6, 4).', options: NOG_ALTERNATIV, correct: 2, category: 'funktioner' },
        { num: 25, text: 'Maria tänker på ett heltal. <b>Är talet jämnt delbart med 5?</b>', s1: 'Talet är jämnt delbart med 100.', s2: 'Talet är jämnt delbart med 15.', options: NOG_ALTERNATIV, correct: 3, category: 'aritmetik' },
        { num: 26, text: 'En al, en björk och en rönn växer intill varandra. <b>Vilket av träden är högst?</b>', s1: 'Alen är högre än björken. Rönnen är inte högst.', s2: 'Både alen och björken är högre än rönnen.', options: NOG_ALTERNATIV, correct: 0, category: 'logik' },
        { num: 27, text: 'En affär har 100 tröjor. Varje tröja är antingen långärmad eller kortärmad. Varje tröja är dessutom antingen i barnstorlek eller i vuxenstorlek. Affären har 10 långärmade tröjor i barnstorlek. <b>Hur många kortärmade tröjor i vuxenstorlek har affären?</b>', s1: '25 procent av tröjorna i barnstorlek är långärmade.', s2: '20 procent av de långärmade tröjorna är i barnstorlek.', options: NOG_ALTERNATIV, correct: 2, category: 'procent' },
        { num: 28, text: `För de två talen <i>x</i> och <i>y</i> gäller att ${tex('x = 2y')}. <b>Vad är <i>y</i>?</b>`, s1: 'Ett av talen är 7.', s2: tex('x + y = 21'), options: NOG_ALTERNATIV, correct: 1, category: 'algebra' },
      ],
    },
    {
      id: 'dtk', name: 'DTK – Diagram, tabeller och kartor', shortName: 'DTK', type: 'dtk',
      questions: [
        { num: 29, text: '<b>För vilken typ av sameby i Norrbottens län gällde 2016 att antalet renar per renägare var mindre än 30 och att mer än var tredje renägare var kvinna?</b>', options: ['N:a fjällsamebyar', 'S:a fjällsamebyar', 'Skogssamebyar', 'Koncessionssamebyar'], correct: 2, diagram: B + 'p4-dtk1.webp', diagramAlt: DTK1, category: 'tabell' },
        { num: 30, text: '<b>Med hur mycket hade antalet kvinnor som var renägare ökat 2016 jämfört med 1995?</b>', options: ['10 procent', '15 procent', '20 procent', '25 procent'], correct: 1, diagram: B + 'p4-dtk1.webp', diagramAlt: DTK1, category: 'tabell' },
        { num: 31, text: 'Jämför samebyar i Västerbottens län med fjällsamebyar i Jämtlands län med avseende på antalet renar och antalet samebyar 2016. <b>Hur stor var skillnaden i antalet renar per sameby?</b>', options: ['300', '1 200', '2 900', '4 100'], correct: 2, diagram: B + 'p4-dtk1.webp', diagramAlt: DTK1, category: 'tabell' },
        { num: 32, text: '<b>För vilken av följande kategorier gällde att det skilde mindre än 1 000 kr/m² mellan årsavgiften i bostadsrätt och årshyran i hyresrätt samt att den genomsnittliga insatsen var högre än 1,5 miljoner kr?</b>', options: ['Stor-Stockholm', 'Stor-Göteborg', 'Kommuner med >75 000 invånare', 'Kommuner med <75 000 invånare'], correct: 2, diagram: B + 'p4-dtk2.webp', diagramAlt: DTK2, category: 'diagram' },
        { num: 33, text: 'Jämför kommuner som hade fler än 75 000 invånare med kommuner som hade färre än 75 000 invånare. <b>Vilket svarsförslag är korrekt?</b>', options: ['Större kommuner hade högre årsavgift för bostadsrätt än mindre kommuner.', 'Mindre kommuner hade lägre årshyra för hyresrätt än större kommuner.', 'Mindre kommuner hade högre insats per bostadsrättslägenhet än större kommuner.', 'Större kommuner låg högre än mindre kommuner vad gäller såväl årsavgift som årshyra och insats.'], correct: 1, diagram: B + 'p4-dtk2.webp', diagramAlt: DTK2, category: 'diagram' },
        { num: 34, text: 'I hela landet var insatsen för en bostadsrättslägenhet i genomsnitt 2 616 000 kr. <b>Hur hög var den genomsnittliga insatsen i kommuner med färre än 75 000 invånare jämfört med landets genomsnitt?</b>', options: ['Dubbelt så hög', 'Tre fjärdedelar så hög', 'En tredjedel så hög', 'Hälften så hög'], correct: 3, diagram: B + 'p4-dtk2.webp', diagramAlt: DTK2, category: 'diagram' },
        { num: 35, text: `<b>Vilken av följande orter låg mer än en halvtimmes tågresa från Uppsala?</b>${LISTA}`, options: ['Brunna (station 11)', 'Marielund (station 30)', 'Vattholma (station 18)', 'Örsundsbro (station 8)'], correct: 3, diagram: B + 'p4-dtk3.webp', diagramAlt: DTK3, category: 'karta' },
        { num: 36, text: `<b>Vilket svarsförslag anger två stationer som passerades på en tågresa mellan Uppsala och Hallstavik?</b>${LISTA}`, options: ['Faringe och Rimbo', 'Faringe och Gimo', 'Hargshamn och Rimbo', 'Hargshamn och Gimo'], correct: 0, diagram: B + 'p4-dtk3.webp', diagramAlt: DTK3, category: 'karta' },
        { num: 37, text: `<b>Vilket svarsförslag anger medelhastigheten för en tågresa från Tierp till Knypplan (station 20)?</b>${LISTA}`, options: ['20 km/h', '40 km/h', '60 km/h', '80 km/h'], correct: 1, diagram: B + 'p4-dtk3.webp', diagramAlt: DTK3, category: 'karta' },
        { num: 38, text: '<b>Med hur mycket ökade den totala energianvändningen om man jämför den redovisade periodens första och sista år?</b>', options: ['30 procent', '40 procent', '50 procent', '60 procent'], correct: 0, diagram: B + 'p4-dtk4.webp', diagramAlt: DTK4, category: 'diagram' },
        { num: 39, text: '<b>Vilket användningsområde stod för 15 procent av den totala energianvändningen 1984?</b>', options: ['Bostäder och service m.m.', 'Förluster i kärnkraften', 'Industri', 'Inrikes transporter'], correct: 3, diagram: B + 'p4-dtk4.webp', diagramAlt: DTK4, category: 'diagram' },
        { num: 40, text: 'Jämför energitillförseln från kärnbränsle 2010 med energiförlusterna i kärnkraften samma år. <b>Hur stor var skillnaden?</b>', options: ['60 TWh', '90 TWh', '110 TWh', '140 TWh'], correct: 0, diagram: B + 'p4-dtk4.webp', diagramAlt: DTK4, category: 'diagram' },
      ],
    },
  ],
};
