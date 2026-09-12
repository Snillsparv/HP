// Högskoleprovet 25 oktober 2020, provpass 3 (kvantitativt).
// Uppgifterna är hämtade från UHR:s publicerade prov på studera.nu.
import { tex, figur, KVA_ALTERNATIV, NOG_ALTERNATIV } from '../types.js';
import type { ExtraPass } from '../types.js';

const B = '/extraprov/ht2020/';

const DTK1 = 'Folkskollärarföreningen 1880–1909: stapeldiagram över antalet medlemmar i Sveriges allmänna folkskollärarförening varje år 1880 till 1909, med y-axeln graderad från 500 till 12 500.';
const DTK2 = 'Transplantationer: tabell över antalet transplantationer i Sverige varje år 2000 till 2014 av njure (totalt och från levande donator), bukspottkörtel, cellöar, lever (totalt och från levande donator), hjärta, lungor, hjärta och lunga, tarm samt totalt.';
const DTK3 = 'Tillväxt i regioner 1995–2005: spridningsdiagram där varje punkt är en av 72 arbetsmarknadsregioner, med genomsnittlig årlig tillväxt i regional inkomst på x-axeln (0,015 till 0,045) och i befolkning på y-axeln (−0,020 till 0,010). Riksgenomsnitten är markerade med räta linjer, regionerna är indelade i tre grupper med ellipser, och några regioner är namngivna: Stockholm, Göteborg, Halmstad, Strömstad, Tranås, Avesta, Dorotea, Vilhelmina, Haparanda, Överkalix och Filipstad.';
const DTK4 = 'Norrländskt lantarbete på 1930-talet: fem diagram, ett för vart och ett av Norrbottens, Västernorrlands, Västerbottens, Gävleborgs och Jämtlands län, som visar hur hemmansägarnas arbetstid under året fördelades procentuellt på jordbruksarbete, övrigt arbete, vägarbete, flottningsarbete och skogsarbete. Horisontella band överst anger för olika landskap och områden när temperaturen låg under noll, sista snön, vårbrukets början, vårsådd, höskörd, potatisplockning och första snön.';

export const pass: ExtraPass = {
  id: 'ht2020-3',
  tillfalle: 'ht2020',
  passNr: 3,
  kind: 'kvant',
  name: 'Provpass 3 (kvantitativt)',
  timeMinutes: 55,
  extendedMinutes: 80,
  normering: [[0, 0.0], [18, 0.1], [21, 0.2], [23, 0.3], [26, 0.4], [28, 0.5], [32, 0.6], [35, 0.7], [38, 0.8], [42, 0.9], [46, 1.0], [49, 1.1], [54, 1.2], [57, 1.3], [61, 1.4], [64, 1.5], [67, 1.6], [70, 1.7], [72, 1.8], [74, 1.9], [76, 2.0]],
  subTests: [
    {
      id: 'xyz', name: 'XYZ – Matematisk problemlösning', shortName: 'XYZ', type: 'xyz',
      questions: [
        { num: 1, text: `<b>Vilket värde har <i>x</i> om ${tex('5x + 66 = \\frac{y}{2}')} och ${tex('y = 12x')}?</b>`, options: ['6', '33', '66', tex('\\frac{132}{7}')], correct: 2, category: 'algebra' },
        { num: 2, text: '6 likadana maskiner kan sammanlagt producera 150 enheter per minut. <b>Hur många enheter kan 10 sådana maskiner producera på 4 minuter?</b>', options: ['360', '1 000', '6 000', '36 000'], correct: 1, category: 'aritmetik' },
        { num: 3, text: `${figur(B + 'p3-xyz3.webp', 'Två vågräta parallella linjer L1 (överst) och L2 skärs av en sned linje som går från övre vänster till nedre höger. Vid L1 är vinkeln 3x markerad ovanför linjen, till vänster om den sneda linjen. Vid L2 är vinkeln 6y markerad ovanför linjen, till höger om den sneda linjen.', 380)}L<sub>1</sub> och L<sub>2</sub> är parallella linjer. <b>Vad är 1,5<i>x</i> + 3<i>y</i>?</b>`, options: ['45°', '90°', '135°', '180°'], correct: 1, category: 'geometri' },
        { num: 4, text: `${tex('f(x) = 3x + 1')}<br><br><b>Vilket svarsalternativ motsvarar ${tex('f\\left(\\frac{1}{3}\\right)')}?</b>`, options: [tex('\\frac{1}{3}'), tex('\\frac{2}{3}'), tex('\\frac{4}{3}'), tex('\\frac{6}{3}')], correct: 3, category: 'funktioner' },
        { num: 5, text: `${tex('a \\neq 0')}<br><br><b>Vilket svarsalternativ motsvarar med säkerhet ${tex('\\frac{a - b}{a} + \\frac{b}{a}')}?</b>`, options: [tex('\\frac{1}{2}'), '1', '<i>b</i>', '<i>a</i>'], correct: 1, category: 'algebra' },
        { num: 6, text: 'En triangel med basen 4 cm har lika stor area som en kvadrat med sidan 6 cm. <b>Hur stor är triangelns höjd?</b>', options: ['3 cm', '6 cm', '9 cm', '18 cm'], correct: 3, category: 'geometri' },
        { num: 7, text: `${figur(B + 'p3-xyz7.webp', 'Ett koordinatsystem med rutnät där 1 är markerat på båda axlarna. En brant fallande rät linje går genom punkten (0, 3) på y-axeln och punkten (1, 0) på x-axeln.', 320)}<b>Vilket svarsalternativ motsvarar linjen i figuren?</b>`, options: [tex('y = -3x + 1'), tex('y = 3x + 1'), tex('y = -3x + 3'), tex('y = 3x + 3')], correct: 2, category: 'funktioner' },
        { num: 8, text: 'Medelvärdet av <i>x</i> och 6<i>x</i> är lika med <i>y</i>. <b>Vad är <i>x</i>?</b>', options: [tex('\\frac{7y}{2}'), tex('\\frac{2y}{7}'), tex('\\frac{xy}{7}'), tex('\\frac{6x}{7y}')], correct: 1, category: 'algebra' },
        { num: 9, text: `${tex('x > 0')}<br><br><b>Hur många procent av <i>x</i> är ${tex('\\frac{3x}{30} + \\frac{4x}{40}')}?</b>`, options: ['7', '10', '20', '24'], correct: 2, category: 'procent' },
        { num: 10, text: `<b>Vad är ${tex('(2^4 + 1)(2^2 + 1)(2^2 - 1)')}?</b>`, options: [tex('2^8 - 1'), tex('2^8 + 1'), tex('2^{16} - 1'), tex('2^{16} + 1')], correct: 0, category: 'algebra' },
        { num: 11, text: `${tex('x < 0')}<br><br><b>Vilket värde har <i>x</i> om ${tex('(x - 7)^2 = 144')}?</b>`, options: ['−19', '−12', '−7', '−5'], correct: 3, category: 'algebra' },
        { num: 12, text: `<b>Vad är ${tex('1^{-1} + 1^0 + 1^1')}?</b>`, options: ['0', '1', '2', '3'], correct: 3, category: 'aritmetik' },
      ],
    },
    {
      id: 'kva', name: 'KVA – Kvantitativa jämförelser', shortName: 'KVA', type: 'kva',
      questions: [
        { num: 13, text: '', q1: tex('\\frac{3}{7} + \\frac{5}{8}'), q2: '1', options: KVA_ALTERNATIV, correct: 0, category: 'aritmetik' },
        { num: 14, text: 'Tre vanliga sexsidiga tärningar kastas slumpmässigt en gång.', q1: 'Sannolikheten att få tre femmor', q2: 'Sannolikheten att summan av det tärningarna visar är 15', options: KVA_ALTERNATIV, correct: 1, category: 'sannolikhet' },
        { num: 15, text: `Fyrhörningen ABCE är en rektangel.<br>D är mittpunkten på sträckan CE.${figur(B + 'p3-kva15.webp', 'En rektangel med hörnen E uppe till vänster, C uppe till höger, B nere till höger och A nere till vänster. Bredden AB är 4 cm och höjden BC är 2 cm. D är mittpunkten på den övre sidan EC, och sträckor går från D till A och från D till B. Vinkeln v ligger vid D mellan de två sträckorna.', 400)}`, q1: '<i>v</i>', q2: '90°', options: KVA_ALTERNATIV, correct: 2, category: 'geometri' },
        { num: 16, text: tex('-7(x + 3) = 21'), q1: '<i>x</i>', q2: '0', options: KVA_ALTERNATIV, correct: 1, category: 'algebra' },
        { num: 17, text: '3 teskedar motsvarar 1 matsked.<br>5 kryddmått motsvarar 1 tesked.', q1: '8 kryddmått och 1 matsked', q2: '2 teskedar och 10 kryddmått', options: KVA_ALTERNATIV, correct: 0, category: 'enheter' },
        { num: 18, text: tex('x < y < z'), q1: tex('\\frac{x + z}{2}'), q2: tex('\\frac{x + y + z}{3}'), options: KVA_ALTERNATIV, correct: 3, category: 'statistik' },
        { num: 19, text: `Omkretsen av en cirkel är ${tex('25\\pi')} cm.`, q1: 'Cirkelns radie', q2: '10 cm', options: KVA_ALTERNATIV, correct: 0, category: 'geometri' },
        { num: 20, text: '', q1: tex('27^{\\frac{1}{3}}'), q2: '9', options: KVA_ALTERNATIV, correct: 1, category: 'aritmetik' },
        { num: 21, text: `Punkterna (<i>a</i>, <i>b</i>) och (<i>c</i>, <i>d</i>) är inritade i koordinatsystemet nedan.${figur(B + 'p3-kva21.webp', 'Ett koordinatsystem. Punkten (a, b) ligger strax under x-axeln, till vänster om y-axeln. Punkten (c, d) ligger till höger om y-axeln, längre under x-axeln.', 300)}`, q1: '<i>ab</i>', q2: '<i>cd</i>', options: KVA_ALTERNATIV, correct: 0, category: 'funktioner' },
        { num: 22, text: tex('x > 0'), q1: tex('\\frac{x}{2}'), q2: tex('\\left(\\frac{x}{4}\\right)^2'), options: KVA_ALTERNATIV, correct: 3, category: 'algebra' },
      ],
    },
    {
      id: 'nog', name: 'NOG – Kvantitativa resonemang', shortName: 'NOG', type: 'nog',
      questions: [
        { num: 23, text: 'Alvar, Benjamin, Cecilia, Dessi och Elina är vänner. <b>Vem av dem är äldst?</b>', s1: 'Alvar är äldre än Benjamin, men yngre än Cecilia.', s2: 'Dessi är äldre än Elina, men yngre än Benjamin.', options: NOG_ALTERNATIV, correct: 2, category: 'logik' },
        { num: 24, text: 'I en park finns endast tre sorters träd: almar, ekar och lönnar. <b>Hur stor andel av träden i parken är ekar?</b>', s1: 'Ekarna och almarna utgör tillsammans 50 % av träden i parken.', s2: 'Ekarna och lönnarna utgör tillsammans 70 % av träden i parken.', options: NOG_ALTERNATIV, correct: 2, category: 'procent' },
        { num: 25, text: 'På ett papper står det skrivet sju negativa tal. <b>Vad är medianen av talen?</b>', s1: 'Medelvärdet av de tre minsta talen är −45.', s2: 'Medelvärdet av de tre största talen är −15.', options: NOG_ALTERNATIV, correct: 4, category: 'statistik' },
        { num: 26, text: 'Lisa och Thea ska låna en film av Karin. Karin har 40 olika filmer. <b>Hur många av Karins filmer har varken Lisa eller Thea sett tidigare?</b>', s1: 'Lisa har sett 25 av filmerna. Thea har sett alla utom 10 av filmerna.', s2: '25 av filmerna som Thea har sett har även Lisa sett.', options: NOG_ALTERNATIV, correct: 2, category: 'logik' },
        { num: 27, text: 'Viktor och Tomas simmar längder i en 25-metersbassäng. De startar samtidigt från samma ände av bassängen, och simmar var och en med sin egen konstanta hastighet. <b>Hur långt har Viktor simmat när han för första gången kommer tillbaka till startpunkten samtidigt som Tomas?</b>', s1: 'Viktor simmar en längd på 36 sekunder och Tomas simmar en längd på 45 sekunder.', s2: 'Viktor simmar 25 % snabbare än Tomas.', options: NOG_ALTERNATIV, correct: 3, category: 'aritmetik' },
        { num: 28, text: '<i>m</i> och <i>n</i> är två olika positiva heltal. <b>Är <i>m</i> > <i>n</i>?</b>', s1: '<i>n</i> är jämnt delbart med 30 men inte med 4. <i>m</i> är jämnt delbart med 60.', s2: 'Både <i>m</i> och <i>n</i> är jämnt delbara med 13.', options: NOG_ALTERNATIV, correct: 4, category: 'aritmetik' },
      ],
    },
    {
      id: 'dtk', name: 'DTK – Diagram, tabeller och kartor', shortName: 'DTK', type: 'dtk',
      questions: [
        { num: 29, text: '<b>Vilka två år hade antalet medlemmar minskat jämfört med närmast föregående år?</b>', options: ['1885 och 1886', '1885 och 1896', '1886 och 1896', '1886 och 1897'], correct: 3, diagram: B + 'p3-dtk1.webp', diagramAlt: DTK1, category: 'diagram' },
        { num: 30, text: '<b>Med hur många procent hade medlemsantalet ökat om man jämför 1905 med 1892?</b>', options: ['100 procent', '150 procent', '200 procent', '250 procent'], correct: 1, diagram: B + 'p3-dtk1.webp', diagramAlt: DTK1, category: 'diagram' },
        { num: 31, text: '<b>Hur stor andel av njurtransplantationerna 2012 gjordes från en levande donator?</b>', options: ['1/3', '2/5', '2/3', '3/4'], correct: 1, diagram: B + 'p3-dtk2.webp', diagramAlt: DTK2, category: 'tabell' },
        { num: 32, text: 'Studera hur antalet transplantationer förändrades från 2001 till 2009. <b>För vilket av följande organ var förändringen störst, procentuellt sett?</b>', options: ['Bukspottskörtel', 'Lever (totalt)', 'Hjärta', 'Lungor'], correct: 3, diagram: B + 'p3-dtk2.webp', diagramAlt: DTK2, category: 'tabell' },
        { num: 33, text: '<b>Hur många transplantationer gjordes i genomsnitt per år under perioden 2005–2010?</b>', options: ['612', '622', '637', '657'], correct: 2, diagram: B + 'p3-dtk2.webp', diagramAlt: DTK2, category: 'tabell' },
        { num: 34, text: '<b>För vilket år gällde att fler än 170 av transplantationerna gjordes från levande donatorer samt att antalet tarmtransplantationer var större än året innan?</b>', options: ['2014', '2011', '2005', '2004'], correct: 1, diagram: B + 'p3-dtk2.webp', diagramAlt: DTK2, category: 'tabell' },
        { num: 35, text: '<b>Hur många av regionerna hade en befolkningstillväxt som var högre än riksgenomsnittet och en inkomsttillväxt som var lägre än riksgenomsnittet?</b>', options: ['2', '4', '6', '10'], correct: 0, diagram: B + 'p3-dtk3.webp', diagramAlt: DTK3, category: 'diagram' },
        { num: 36, text: '<b>Hur stor var skillnaden i befolkningstillväxt mellan regionen med den högsta och regionen med den lägsta genomsnittliga årliga befolkningstillväxten?</b>', options: ['0,0135', '0,0235', '0,0270', '0,0310'], correct: 2, diagram: B + 'p3-dtk3.webp', diagramAlt: DTK3, category: 'diagram' },
        { num: 37, text: '<b>Hur stor andel av de 72 regionerna fanns i den av de tre grupperna som hade lägst tillväxt, vad gäller både befolkning och inkomst?</b>', options: ['20 procent', '30 procent', '45 procent', '55 procent'], correct: 2, diagram: B + 'p3-dtk3.webp', diagramAlt: DTK3, category: 'diagram' },
        { num: 38, text: '<b>I vilket län utgjorde jordbruksarbete mer än hälften av arbetstiden under mer än nio månader av arbetsåret?</b>', options: ['Norrbottens län', 'Västerbottens län', 'Gävleborgs län', 'Jämtlands län'], correct: 2, diagram: B + 'p3-dtk4.webp', diagramAlt: DTK4, category: 'diagram' },
        { num: 39, text: 'Identifiera det landskap/område som hade det längsta tidsintervallet mellan höskördens avslutning och den första snön. <b>Hur långt var detta tidsintervall?</b>', options: ['2 månader', '3 månader', '4 månader', '5 månader'], correct: 1, diagram: B + 'p3-dtk4.webp', diagramAlt: DTK4, category: 'diagram' },
        { num: 40, text: 'Identifiera det län där skogsarbete utgjorde fyra procent av arbetstiden vid tidpunkten för vårsådden. <b>Hur stor andel av arbetstiden utgjordes vid samma tidpunkt av jordbruksarbete?</b>', options: ['25 procent', '40 procent', '60 procent', '75 procent'], correct: 3, diagram: B + 'p3-dtk4.webp', diagramAlt: DTK4, category: 'diagram' },
      ],
    },
  ],
};
