// Högskoleprovet 23 oktober 2022, provpass 4 (kvantitativt).
// Uppgifterna är hämtade från UHR:s publicerade prov på studera.nu.
import { tex, figur, KVA_ALTERNATIV, NOG_ALTERNATIV } from '../types.js';
import type { ExtraPass } from '../types.js';

const B = '/extraprov/ht2022/';

const DTK1 = 'Digital utrustning och internetanvändning: linjediagram över andelen av befolkningen som hade tillgång till dator, internet, bredband, smart mobil och surfplatta 1995 till 2017, samt stapeldiagram över andelen barn i olika åldersgrupper som dagligen använde internet 2013 till 2017';
const DTK2 = 'Det svenska fårbeståndet: tabell över antalet får i Sverige i juni 2014 per län och produktionsområde, uppdelat på vuxna får (baggar och tackor), lamm och summa får';
const DTK3 = 'Skattepålagor i Västerbotten 1600 till 1619: diagram över de ordinarie skatterna (årliga räntan) och de olika extra ordinarie krigsskatterna år för år, i daler';
const DTK4 = 'Konsumtion i samband med turism: turismrelaterad konsumtion i Sverige 2005 i miljoner kronor, fördelad på resenärskategorier (svenska affärsresenärer, svenska fritidsresenärer och utländska besökare) och på konsumtionsområden med cirkeldiagram över delkategorier';

export const pass: ExtraPass = {
  id: 'ht2022-4',
  tillfalle: 'ht2022',
  passNr: 4,
  kind: 'kvant',
  name: 'Provpass 4 (kvantitativt)',
  timeMinutes: 55,
  extendedMinutes: 80,
  normering: [[0, 0.0], [20, 0.1], [22, 0.2], [24, 0.3], [26, 0.4], [28, 0.5], [31, 0.6], [34, 0.7], [38, 0.8], [42, 0.9], [46, 1.0], [50, 1.1], [54, 1.2], [58, 1.3], [61, 1.4], [64, 1.5], [67, 1.6], [70, 1.7], [73, 1.8], [75, 1.9], [77, 2.0]],
  subTests: [
    {
      id: 'xyz', name: 'XYZ – Matematisk problemlösning', shortName: 'XYZ', type: 'xyz',
      questions: [
        { num: 1, text: `<b>Vilket svarsalternativ är lika med ${tex('\\frac{1}{3} + \\frac{3}{4} + \\frac{5}{12}')}?</b>`, options: [tex('\\frac{9}{4}'), tex('\\frac{9}{6}'), tex('\\frac{9}{12}'), tex('\\frac{9}{19}')], correct: 1, category: 'aritmetik' },
        { num: 2, text: `L<sub>1</sub>: ${tex('y = 2x - 4')}<br>L<sub>2</sub>: ${tex('y = x - 1')}<br><br>Linjerna L<sub>1</sub> och L<sub>2</sub> skär varandra i punkten P. <b>Vilka koordinater har punkten P?</b>`, options: ['(−4, −1)', '(1, 0)', '(2, −4)', '(3, 2)'], correct: 3, category: 'funktioner' },
        { num: 3, text: `${tex('\\frac{45x}{7} = 5x + 10')}<br><br><b>Vad är <i>x</i>?</b>`, options: [tex('\\frac{7}{8}'), tex('\\frac{7}{4}'), '5', '7'], correct: 3, category: 'algebra' },
        { num: 4, text: '<b>Vad är 7 procent av 15?</b>', options: ['1', '1,05', '1,1', '1,15'], correct: 1, category: 'procent' },
        { num: 5, text: '<b>Vad är differensen mellan medianen och medelvärdet av de sex talen −1, 1, 2, 4, 5 och 7?</b>', options: ['0', '1', '2', '3'], correct: 0, category: 'statistik' },
        { num: 6, text: `${figur(B + 'p4-xyz6.webp', 'Två linjer korsar varandra. Till vänster bildar de en triangel med vinklarna 3x och 2x. Till höger skärs de av en tredje linje som bildar vinkeln 60° med den ena linjen och yttervinkeln 140° med den andra.', 380)}<b>Vad är 5<i>x</i>?</b>`, options: ['80°', '100°', '120°', '140°'], correct: 1, category: 'geometri' },
        { num: 7, text: `<b>Vilket svarsalternativ är en funktion som uppfyller att ${tex('f(1) > f(0)')}?</b>`, options: [tex('f(x) = 2'), tex('f(x) = x - 2'), tex('f(x) = x^2 - 2x + 1'), tex('f(x) = -2x + 2')], correct: 1, category: 'funktioner' },
        { num: 8, text: `<b>Vilket svarsalternativ motsvarar uttrycket ${tex('(a + b)(c + d)(e + f)')}?</b>`, options: [tex('ac + ad + bc + bd + e + f'), tex('ac + ad + bc + bd + ae + af + be + bf'), tex('ace + bdf'), tex('ace + acf + ade + adf + bce + bcf + bde + bdf')], correct: 3, category: 'algebra' },
        { num: 9, text: 'Arean av en cirkel är 27 cm<sup>2</sup>. <b>Vilket av svarsalternativen är det bästa närmevärdet för cirkelns diameter?</b>', options: ['1,5 cm', '4,5 cm', '6 cm', '9 cm'], correct: 2, category: 'geometri' },
        { num: 10, text: `<b>Vilket värde har <i>x</i> om ${tex('\\frac{1}{3} - x = \\frac{1}{2} - \\frac{1}{3}')}?</b>`, options: [tex('-\\frac{1}{2}'), tex('-\\frac{1}{6}'), tex('\\frac{1}{6}'), tex('\\frac{1}{2}')], correct: 2, category: 'aritmetik' },
        { num: 11, text: 'För en viss sorts garn gäller att ett nystan med 130 meter garn väger 50 gram. Emma använder 430 gram av garnet för att sticka en tröja. <b>Vilket svarsalternativ är ett uttryck för att beräkna hur många meter garn Emma använder till tröjan?</b>', options: [tex('\\frac{50}{130} \\cdot 430'), tex('\\frac{50}{430} \\cdot 130'), tex('\\frac{130}{50} \\cdot 430'), tex('\\frac{430}{130} \\cdot 50')], correct: 2, category: 'aritmetik' },
        { num: 12, text: `<b>Vilket svarsalternativ motsvarar ${tex('4 \\cdot 2^x')}?</b>`, options: [tex('2^{x + 2}'), tex('2^{2x}'), tex('4^{x - 1}'), tex('8^x')], correct: 0, category: 'algebra' },
      ],
    },
    {
      id: 'kva', name: 'KVA – Kvantitativa jämförelser', shortName: 'KVA', type: 'kva',
      questions: [
        { num: 13, text: tex('2(x + 3) = 3(x + 4)'), q1: '<i>x</i>', q2: '0', options: KVA_ALTERNATIV, correct: 1, category: 'algebra' },
        { num: 14, text: 'Två vanliga sexsidiga tärningar kastas slumpmässigt en gång.', q1: 'Sannolikheten att summan av det tärningarna visar är 10', q2: 'Sannolikheten att summan av det tärningarna visar är 4', options: KVA_ALTERNATIV, correct: 2, category: 'sannolikhet' },
        { num: 15, text: '', q1: tex('\\frac{5}{6} + \\frac{5}{6}'), q2: tex('\\frac{5}{6} \\cdot \\frac{5}{6}'), options: KVA_ALTERNATIV, correct: 0, category: 'aritmetik' },
        { num: 16, text: '', q1: 'Arean av en triangel med basen <i>b</i> och höjden <i>h</i><sub>1</sub>', q2: 'Arean av en triangel med basen <i>b</i> − 1 och höjden <i>h</i><sub>2</sub>', options: KVA_ALTERNATIV, correct: 3, category: 'geometri' },
        { num: 17, text: `De två linjerna L<sub>1</sub> och L<sub>2</sub> skär varandra i en rät vinkel.${figur(B + 'p4-kva17.webp', 'Koordinatsystem med linjen L1 som lutar brant nedåt och linjen L2 som lutar svagt uppåt, med en rät vinkel markerad där de skär varandra', 300)}`, q1: 'Riktningskoefficienten för L<sub>1</sub> multiplicerad med riktningskoefficienten för L<sub>2</sub>', q2: '1', options: KVA_ALTERNATIV, correct: 1, category: 'funktioner' },
        { num: 18, text: '', q1: 'En fjärdedel av arean av en cirkel med radien 1 cm', q2: 'Tre fjärdedelar av arean av en kvadrat med sidan 1 cm', options: KVA_ALTERNATIV, correct: 0, category: 'geometri' },
        { num: 19, text: '', q1: tex('\\sqrt{7} + \\sqrt{3}'), q2: tex('\\sqrt{10}'), options: KVA_ALTERNATIV, correct: 0, category: 'aritmetik' },
        { num: 20, text: `<i>x</i> och <i>y</i> är positiva heltal sådana att ${tex('xy = 36')}.`, q1: '<i>x</i> + <i>y</i>', q2: '18', options: KVA_ALTERNATIV, correct: 3, category: 'aritmetik' },
        { num: 21, text: '', q1: 'Antalet minuter som det tar att färdas 40 km med hastigheten 100 km/h', q2: 'Antalet minuter som det tar att färdas 40 km med hastigheten 40 m/s', options: KVA_ALTERNATIV, correct: 0, category: 'enheter' },
        { num: 22, text: `${tex('x > 2')}<br><br>${tex('\\frac{125}{\\sqrt{x - 2}} = 25')}`, q1: '<i>x</i> − 2', q2: '25', options: KVA_ALTERNATIV, correct: 2, category: 'algebra' },
      ],
    },
    {
      id: 'nog', name: 'NOG – Kvantitativa resonemang', shortName: 'NOG', type: 'nog',
      questions: [
        { num: 23, text: '<b>Vilken area har rektangeln R?</b>', s1: 'En sida i R är 7 cm.', s2: 'R har omkretsen 20 cm.', options: NOG_ALTERNATIV, correct: 2, category: 'geometri' },
        { num: 24, text: `<b>Är ${tex('x < 0')}?</b>`, s1: tex('4x = -8'), s2: tex('x^5 < 0'), options: NOG_ALTERNATIV, correct: 3, category: 'algebra' },
        { num: 25, text: 'På en skola finns de fyra klasserna 1A, 1B, 2A och 2B. <b>Hur många barn går i klass 1A?</b>', s1: 'I klasserna 1A och 1B går det sammanlagt 51 barn.<br>I klasserna 1A och 2A går det sammanlagt 53 barn.', s2: 'I klass 2B går det 24 barn. Det går 103 barn i de fyra klasserna tillsammans.', options: NOG_ALTERNATIV, correct: 2, category: 'algebra' },
        { num: 26, text: 'Glas A rymmer 80 % av det som ryms i glas B. <b>Hur mycket rymmer glas B?</b>', s1: 'När glas A är helt fyllt innehåller det 4/5 av det som ryms i glas B.', s2: 'Glas A innehåller 6 cl och är halvfullt. Glas B är fyllt till 75 %.', options: NOG_ALTERNATIV, correct: 1, category: 'procent' },
        { num: 27, text: 'En dag handlar Åke i en bokhandel, en klädaffär och en skoaffär. Han handlar för sammanlagt 1 600 kronor. <b>Hur mycket handlar Åke för i skoaffären?</b>', s1: 'I bokhandeln handlar Åke för en femtedel av det han handlar för i skoaffären.<br>I klädaffären handlar han för dubbelt så mycket som i bokhandeln.', s2: 'Det sammanlagda beloppet som Åke handlar för i bokhandeln och klädaffären är mer än hälften av vad han handlar för i skoaffären.', options: NOG_ALTERNATIV, correct: 0, category: 'algebra' },
        { num: 28, text: 'Emma, Marie och Petra är alla olika långa. Deras medianlängd är 173 cm. <b>Vem av dem är längst?</b>', s1: 'Emma är 173 cm lång. Det skiljer mindre än 10 cm i längd mellan Emma och den som är längst.', s2: 'Om Marie hade varit 5 cm kortare så skulle gruppens medianlängd ändå ha varit 173 cm.', options: NOG_ALTERNATIV, correct: 4, category: 'logik' },
      ],
    },
    {
      id: 'dtk', name: 'DTK – Diagram, tabeller och kartor', shortName: 'DTK', type: 'dtk',
      questions: [
        { num: 29, text: 'Studera hur andelen som hade tillgång till internet i hemmet förändrades under den redovisade perioden. <b>Hur stor var den största förändringen mellan två på varandra följande år?</b>', options: ['10 procentenheter', '15 procentenheter', '20 procentenheter', '25 procentenheter'], correct: 2, diagram: B + 'p4-dtk1.webp', diagramAlt: DTK1, category: 'diagram' },
        { num: 30, text: 'Anta att det i en skola 2016 fanns 250 elever som var i åldern 8–9 år. <b>Hur många av dessa skulle enligt statistiken ha använt internet dagligen?</b>', options: ['125', '150', '165', '195'], correct: 2, diagram: B + 'p4-dtk1.webp', diagramAlt: DTK1, category: 'diagram' },
        { num: 31, text: '<b>Vilket av svarsförslagen står för den minsta ökningen, i procentenheter räknat, om man jämför det första och det sista år då respektive kategori redovisas?</b>', options: ['Dator', 'Bredband', 'Smart mobil', 'Surfplatta'], correct: 2, diagram: B + 'p4-dtk1.webp', diagramAlt: DTK1, category: 'diagram' },
        { num: 32, text: '<b>Vilket var förhållandet mellan antalet får i Gotlands län och antalet får i Kronobergs län?</b>', options: ['2:1', '3:1', '3:2', '4:1'], correct: 3, diagram: B + 'p4-dtk2.webp', diagramAlt: DTK2, category: 'tabell' },
        { num: 33, text: 'Anta att de vuxna fåren i juni 2014 utgjordes av en tredjedel baggar och två tredjedelar tackor. <b>Hur många tackor fanns det i så fall vid denna tidpunkt?</b>', options: ['96 000', '192 000', '201 000', '393 000'], correct: 1, diagram: B + 'p4-dtk2.webp', diagramAlt: DTK2, category: 'tabell' },
        { num: 34, text: 'I juni 2014 fanns det i Sverige 8 951 jordbruksföretag som hade får. <b>Vilket var det genomsnittliga antalet får per jordbruksföretag vid denna tidpunkt?</b>', options: ['24', '32', '52', '66'], correct: 3, diagram: B + 'p4-dtk2.webp', diagramAlt: DTK2, category: 'tabell' },
        { num: 35, text: 'Identifiera det år då Västerbotten betalade både kostgärd och skjutsfärdspengar men inte månadspengar. <b>Vilken var den största extra ordinarie krigsskatten det året?</b>', options: ['Hjonelagspengar', 'Hjälppengar (Hjälppgr.)', 'Jämtlandspengar', 'Kostgärd'], correct: 0, diagram: B + 'p4-dtk3.webp', diagramAlt: DTK3, category: 'diagram' },
        { num: 36, text: 'Studera de extra ordinarie krigsskatterna under perioden 1600–1612. <b>Hur mycket större var dessa skatter det år då de var som störst jämfört med det år då de var som minst?</b>', options: ['5 100 daler', '6 200 daler', '8 700 daler', '11 200 daler'], correct: 1, diagram: B + 'p4-dtk3.webp', diagramAlt: DTK3, category: 'diagram' },
        { num: 37, text: '<b>För hur många av de redovisade åren gällde att de extra ordinarie krigsskatterna tillsammans utgjorde ett större belopp än de ordinarie skatterna?</b>', options: ['9', '11', '13', '15'], correct: 1, diagram: B + 'p4-dtk3.webp', diagramAlt: DTK3, category: 'diagram' },
        { num: 38, text: '<b>Vilka var de tre största delkategorierna i kronor räknat?</b>', options: ['Utemåltider – Boende – Övrig handel', 'Utemåltider – Boende – Kultur/rekreation/sport', 'Utemåltider – Övrig handel – Kultur/rekreation/sport', 'Boende – Övrig handel – Kultur/rekreation/sport'], correct: 0, diagram: B + 'p4-dtk4.webp', diagramAlt: DTK4, category: 'diagram' },
        { num: 39, text: '<b>Hur stort var det belopp som svenska resenärer spenderade på turismrelaterad konsumtion jämfört med det som utländska besökare spenderade?</b>', options: ['Hälften så stort', 'En tredjedel så stort', 'Tre gånger så stort', 'Dubbelt så stort'], correct: 3, diagram: B + 'p4-dtk4.webp', diagramAlt: DTK4, category: 'diagram' },
        { num: 40, text: 'Utländska besökare spenderade 15 710 miljoner kronor på utemåltider 2005. <b>Hur stor andel av de utländska besökarnas turismrelaterade konsumtion avsåg utemåltider?</b>', options: ['1/4', '1/3', '2/5', '1/2'], correct: 0, diagram: B + 'p4-dtk4.webp', diagramAlt: DTK4, category: 'diagram' },
      ],
    },
  ],
};
