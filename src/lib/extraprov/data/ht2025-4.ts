// Högskoleprovet 19 oktober 2025, provpass 4 (kvantitativt).
// Uppgifterna är hämtade från UHR:s publicerade prov på studera.nu.
import { tex, figur, KVA_ALTERNATIV, NOG_ALTERNATIV } from '../types.js';
import type { ExtraPass } from '../types.js';

const B = '/extraprov/ht2025/';
const graf = (bokstav: string) => `<img src="${B}p4-xyz8${bokstav}.webp" alt="Graf ${bokstav.toUpperCase()}" data-fadein style="max-width:170px;width:100%;vertical-align:middle;" />`;

export const pass: ExtraPass = {
  id: 'ht2025-4',
  tillfalle: 'ht2025',
  passNr: 4,
  kind: 'kvant',
  name: 'Provpass 4 (kvantitativt)',
  timeMinutes: 55,
  extendedMinutes: 80,
  normering: [[0, 0.0], [17, 0.1], [19, 0.2], [21, 0.3], [23, 0.4], [25, 0.5], [28, 0.6], [32, 0.7], [36, 0.8], [40, 0.9], [44, 1.0], [48, 1.1], [52, 1.2], [56, 1.3], [59, 1.4], [63, 1.5], [67, 1.6], [70, 1.7], [72, 1.8], [74, 1.9], [76, 2.0]],
  subTests: [
    {
      id: 'xyz', name: 'XYZ – Matematisk problemlösning', shortName: 'XYZ', type: 'xyz',
      questions: [
        { num: 1, text: 'En vara kostar 250 kronor. <b>Hur mycket kostar varan om priset höjs med 12 procent?</b>', options: ['262 kronor', '268 kronor', '274 kronor', '280 kronor'], correct: 3, category: 'procent' },
        { num: 2, text: '<b>Vad är medelvärdet av de fem minsta heltalen som är större än 10?</b>', options: ['12', '12,5', '13', '13,5'], correct: 2, category: 'statistik' },
        { num: 3, text: `${tex('\\frac{x}{8} = \\frac{1}{3}')}<br><br><b>Vilket värde har <i>x</i>?</b>`, options: [tex('\\frac{1}{24}'), tex('\\frac{3}{8}'), tex('\\frac{8}{3}'), '24'], correct: 2, category: 'algebra' },
        { num: 4, text: `${tex('f(x) = 7x^2 - 7')}<br><br><b>För vilket av följande värden på <i>x</i> gäller att ${tex('f(x) = 7')}?</b>`, options: ['1', tex('\\sqrt{2}'), '2', tex('\\sqrt{7}')], correct: 1, category: 'funktioner' },
        { num: 5, text: `För rektangeln ABCD gäller att AB = 5 cm och BC = 7 cm. <b>Hur lång är sträckan PQ?</b>${figur(B + 'p4-xyz5.webp', 'Rektangel ABCD med punkten P på AD, 6 cm från D, och punkten Q på BC, 3 cm från B', 260)}`, options: [tex('\\sqrt{26}') + ' cm', tex('\\sqrt{29}') + ' cm', tex('\\sqrt{34}') + ' cm', tex('\\sqrt{45}') + ' cm'], correct: 1, category: 'geometri' },
        { num: 6, text: `${tex('3x \\cdot \\sqrt{2} = \\sqrt{72}')}<br><br><b>Vad är <i>x</i>?</b>`, options: ['2', '4', '6', '12'], correct: 0, category: 'algebra' },
        { num: 7, text: 'I början av ett experiment består en population av <i>n</i> bakterier. Efter en vecka har populationen fördubblats. Populationen fortsätter sedan att fördubblas varje vecka. <b>Hur många bakterier finns det i populationen efter tio veckor?</b>', options: [tex('2 \\cdot n^{10}'), tex('2 \\cdot 10^{n}'), tex('n \\cdot 2^{10}'), tex('n \\cdot 10^{2}')], correct: 2, category: 'algebra' },
        { num: 8, text: `${figur(B + 'p4-xyz8.webp', 'Koordinatsystem med graferna y = f(x) och y = g(x)', 220)}<b>Vilket svarsalternativ visar grafen till funktionen <i>h</i>, där ${tex('h(x) = f(x) + g(x)')}?</b>`, options: [graf('a'), graf('b'), graf('c'), graf('d')], correct: 3, category: 'funktioner' },
        { num: 9, text: `<b>Vad är ${tex('\\dfrac{\\frac{2}{7}}{\\frac{4}{9} - \\frac{3}{7}}')}?</b>`, options: [tex('\\frac{1}{7}'), tex('\\frac{4}{7}'), '14', '18'], correct: 3, category: 'aritmetik' },
        { num: 10, text: `En figur är konstruerad av sträckor och cirkelbågar. Cirkelbågarna är kvartscirklar.<br><b>Vilken omkrets har figuren?</b>${figur(B + 'p4-xyz10.webp', 'Korsformad figur med fyra kvartscirklar, indelad i rutor med sidan x', 320)}`, options: [tex('(3 + \\pi)\\,2x'), tex('(4 + 2\\pi)\\,x'), tex('\\left(12 - \\frac{\\pi}{2}\\right)x'), tex('(9 - \\pi)\\,x^2')], correct: 1, category: 'geometri' },
        { num: 11, text: `<b>Vilket svarsalternativ är lika med ${tex('\\left(2{,}5 \\cdot 10^{-11}\\right) \\cdot \\left(4 \\cdot 10^{-18}\\right)')}?</b>`, options: [tex('10^{-28}'), tex('10^{28}'), tex('10^{-30}'), tex('10^{30}')], correct: 0, category: 'aritmetik' },
        { num: 12, text: `${tex('xy \\neq -1')}<br><br><b>Vilket svarsalternativ motsvarar uttrycket ${tex('\\frac{x^2 y^2 + xy}{xy + 1}')}?</b>`, options: [tex('xy'), tex('xy + 1'), tex('x^2 y^2'), tex('x^2 y^2 + 1')], correct: 0, category: 'algebra' },
      ],
    },
    {
      id: 'kva', name: 'KVA – Kvantitativa jämförelser', shortName: 'KVA', type: 'kva',
      questions: [
        { num: 13, text: 'Erik, Johanna och Mikael fyller år på samma dag. När Erik var 14 år var Johanna 7 år. När Johanna var 10 år var Mikael 15 år.', q1: 'Eriks ålder när Mikael var 18 år', q2: '20 år', options: KVA_ALTERNATIV, correct: 2, category: 'logik' },
        { num: 14, text: tex('0 < a < 1'), q1: tex('\\frac{1}{a}'), q2: '<i>a</i>', options: KVA_ALTERNATIV, correct: 0, category: 'aritmetik' },
        { num: 15, text: '', q1: tex('\\frac{5}{4} - \\frac{4}{5}'), q2: tex('\\frac{4}{3} - \\frac{3}{4}'), options: KVA_ALTERNATIV, correct: 1, category: 'aritmetik' },
        { num: 16, text: `${figur(B + 'p4-kva16.webp', 'Två räta linjer L1 och L2 som båda skär y-axeln i samma punkt, L2 brantare än L1', 260)}L<sub>1</sub>: ${tex('y = a_1 x + 2')}<br>L<sub>2</sub>: ${tex('y = a_2 x + 2')}`, q1: tex('a_1'), q2: tex('a_2'), options: KVA_ALTERNATIV, correct: 1, category: 'funktioner' },
        { num: 17, text: tex('0 < x < y < 1'), q1: tex('xy'), q2: '<i>y</i>', options: KVA_ALTERNATIV, correct: 1, category: 'algebra' },
        { num: 18, text: `Fyrhörningen ABCE är en rektangel. Arean av triangeln ADE är <i>x</i> cm², arean av triangeln BCD är <i>y</i> cm² och arean av triangeln ABD är <i>z</i> cm².${figur(B + 'p4-kva18.webp', 'Rektangel ABCE med punkten D på sidan EC, indelad i tre trianglar med areorna x, y och z', 260)}`, q1: tex('\\frac{x + y}{z}'), q2: '1', options: KVA_ALTERNATIV, correct: 2, category: 'geometri' },
        { num: 19, text: `${tex('x > 0')}<br>${tex('y = 5x + 3')}<br>${tex('z = 2y - 10x')}`, q1: '<i>x</i>', q2: '<i>z</i>', options: KVA_ALTERNATIV, correct: 3, category: 'algebra' },
        { num: 20, text: '', q1: 'Medianen av tio tal med medelvärdet 0', q2: 'Medianen av tio tal med medelvärdet 100', options: KVA_ALTERNATIV, correct: 3, category: 'statistik' },
        { num: 21, text: 'Förhållandet mellan vinklarna i en triangel är 1:2:4.', q1: 'Triangelns största vinkel', q2: '90°', options: KVA_ALTERNATIV, correct: 0, category: 'geometri' },
        { num: 22, text: '', q1: tex('\\left(1 + \\frac{1}{2}\\right)\\left(1 - \\frac{1}{3}\\right)\\left(1 + \\frac{1}{4}\\right)\\left(1 - \\frac{1}{5}\\right)'), q2: '1', options: KVA_ALTERNATIV, correct: 2, category: 'aritmetik' },
      ],
    },
    {
      id: 'nog', name: 'NOG – Kvantitativa resonemang', shortName: 'NOG', type: 'nog',
      questions: [
        { num: 23, text: 'Astrid, Bella, Conny och Dylan har var sitt husdjur. En av dem har en hamster, en har en kanin, en har ett marsvin och en har en undulat. <b>Vem har vilket husdjur?</b>', s1: 'Dylan har ett marsvin. Kaninen är Bellas eller Connys.', s2: 'Conny har en undulat. Kaninen är Bellas eller Dylans.', options: NOG_ALTERNATIV, correct: 2, category: 'logik' },
        { num: 24, text: 'Johan samlar på studsbollar. <b>Hur många studsbollar har Johan i sin samling?</b>', s1: 'Fyra studsbollar motsvarar 20 % av antalet studsbollar i Johans samling.', s2: 'Det senaste tillskottet till Johans samling var fyra studsbollar, vilket gjorde att samlingen då växte med 25 %.', options: NOG_ALTERNATIV, correct: 3, category: 'procent' },
        { num: 25, text: `<b>Är linjerna L<sub>1</sub> och L<sub>2</sub> parallella?</b>${figur(B + 'p4-nog25.webp', 'Två linjer L1 och L2 skurna av en tredje linje, med vinklarna w vid L1 samt v och u vid L2', 300)}`, s1: tex('u + v + w = 180°'), s2: tex('v = w'), options: NOG_ALTERNATIV, correct: 1, category: 'geometri' },
        { num: 26, text: 'Malin har en sparbössa som innehåller ett antal mynt (enkronor och femkronor) och ett antal sedlar (femtiolappar och hundralappar). Det finns lika många enkronor som femkronor i sparbössan. <b>Hur många mynt har Malin i sparbössan?</b>', s1: 'Det sammanlagda värdet av mynten och sedlarna i sparbössan är 420 kronor. Värdet av sedlarna är 300 kronor.', s2: 'Det sammanlagda värdet av femkronorna och femtiolapparna i sparbössan är 200 kronor.', options: NOG_ALTERNATIV, correct: 0, category: 'algebra' },
        { num: 27, text: 'I ett radhusområde bor 45 familjer varav 14 har katt. <b>Hur många familjer i området har hund?</b>', s1: '10 familjer i området har katt, men inte hund.', s2: 'Antalet familjer i området som har både katt och hund är en sjättedel av antalet familjer i området som varken har katt eller hund.', options: NOG_ALTERNATIV, correct: 2, category: 'logik' },
        { num: 28, text: '<b>Vilket av talen <i>x</i>, <i>y</i> och <i>z</i> är störst?</b>', s1: tex('x = y + z'), s2: tex('x = -2y'), options: NOG_ALTERNATIV, correct: 4, category: 'algebra' },
      ],
    },
    {
      id: 'dtk', name: 'DTK – Diagram, tabeller och kartor', shortName: 'DTK', type: 'dtk',
      questions: [
        { num: 29, text: 'År 2013 var det totala värdet av Sveriges import 1 040 miljarder kronor. <b>Hur stor andel av detta värde avsåg den varugrupp som hade det största importvärdet?</b>', options: ['5 procent', '10 procent', '15 procent', '20 procent'], correct: 2, diagram: B + 'p4-dtk1.webp', diagramAlt: 'Sveriges utrikeshandel 2013 fördelad på varugrupper, export och import i miljarder kronor', category: 'diagram' },
        { num: 30, text: '<b>Hur mycket större var importvärdet än exportvärdet för de tre varugrupperna Mineraliska bränslen, Järn och metall samt Malm, metallskrot?</b>', options: ['23 miljarder kr', '38 miljarder kr', '69 miljarder kr', '99 miljarder kr'], correct: 0, diagram: B + 'p4-dtk1.webp', diagramAlt: 'Sveriges utrikeshandel 2013 fördelad på varugrupper, export och import i miljarder kronor', category: 'diagram' },
        { num: 31, text: '<b>För vilken av följande varugrupper var exportvärdet 60 procent av importvärdet?</b>', options: ['Elektrovaror, datorer', 'Övriga verkstadsprodukter', 'Tekovaror och skor', 'Livsmedel'], correct: 3, diagram: B + 'p4-dtk1.webp', diagramAlt: 'Sveriges utrikeshandel 2013 fördelad på varugrupper, export och import i miljarder kronor', category: 'diagram' },
        { num: 32, text: '<b>Hur stor var skillnaden i det totala antalet biografer i Norden om man jämför periodens första och sista år?</b>', options: ['75', '80', '85', '90'], correct: 2, diagram: B + 'p4-dtk2.webp', diagramAlt: 'Biografer i Norden: tabell över antalet biografer, biografsalonger och platser per land 2010 till 2016', category: 'tabell' },
        { num: 33, text: 'Identifiera det år då antalet biografer i Sverige var som störst. <b>Hur många platser fanns i genomsnitt per biograf i Sverige detta år?</b>', options: ['156', '170', '240', '266'], correct: 3, diagram: B + 'p4-dtk2.webp', diagramAlt: 'Biografer i Norden: tabell över antalet biografer, biografsalonger och platser per land 2010 till 2016', category: 'tabell' },
        { num: 34, text: '<b>Från vilken av följande orter går både normalspårig järnväg och smalspårig järnväg som i första hand bör breddas?</b>', options: ['Lidköping', 'Mariestad', 'Moholm', 'Vara'], correct: 2, diagram: B + 'p4-dtk3.webp', diagramAlt: 'Järnvägar i Västergötland 1950: karta över smalspårig och normalspårig järnväg med förslag till åtgärder', category: 'karta' },
        { num: 35, text: 'Du startar i Falköping och åker normalspårig järnväg i västsydvästlig riktning i 30 km. Därefter åker du vidare på normalspårig järnväg i nordlig och därefter västnordvästlig riktning i sammanlagt 40 km. <b>I vilken ort slutar vägbeskrivningen?</b>', options: ['Vänersborg', 'Karlsborg', 'Skara', 'Grästorp'], correct: 3, diagram: B + 'p4-dtk3.webp', diagramAlt: 'Järnvägar i Västergötland 1950: karta över smalspårig och normalspårig järnväg med förslag till åtgärder', category: 'karta' },
        { num: 36, text: 'En smalspårig järnväg mellan Trollhättan och Nossebro är föreslagen att nedläggas. <b>Hur mycket längre blir den kortaste resvägen mellan dessa två orter om de järnvägar som är föreslagna att nedläggas försvinner?</b>', options: ['35 km', '50 km', '70 km', '105 km'], correct: 0, diagram: B + 'p4-dtk3.webp', diagramAlt: 'Järnvägar i Västergötland 1950: karta över smalspårig och normalspårig järnväg med förslag till åtgärder', category: 'karta' },
        { num: 37, text: '<b>Hur stor area har området som avgränsas av järnvägssträckorna Stenstorp–Svensbro–Tidaholm–Vartofta–Falköping–Stenstorp?</b>', options: ['290 km²', '440 km²', '650 km²', '860 km²'], correct: 0, diagram: B + 'p4-dtk3.webp', diagramAlt: 'Järnvägar i Västergötland 1950: karta över smalspårig och normalspårig järnväg med förslag till åtgärder', category: 'karta' },
        { num: 38, text: 'Studera hur produktionsvärdet för frilandsodlad matlök och isbergssallat förändrades från 2014 till 2015. <b>Vilket svarsförslag beskriver förändringen korrekt?</b>', options: ['Matlök: minskning. Isbergssallat: minskning.', 'Matlök: minskning. Isbergssallat: ökning.', 'Matlök: ökning. Isbergssallat: minskning.', 'Matlök: ökning. Isbergssallat: ökning.'], correct: 0, diagram: B + 'p4-dtk4.webp', diagramAlt: 'Svensk trädgårdsodling: produktionsvärde 2004 till 2015 per kategori samt för enskilda grödor 2014 och 2015', category: 'diagram' },
        { num: 39, text: '<b>Vilken kategori stod för den största andelen av produktionsvärdet för växthusodlade grödor 2014?</b>', options: ['Gurka', 'Kryddväxter', 'Tulpaner (snitt)', 'Övriga kruk- och utplanteringsväxter'], correct: 1, diagram: B + 'p4-dtk4.webp', diagramAlt: 'Svensk trädgårdsodling: produktionsvärde 2004 till 2015 per kategori samt för enskilda grödor 2014 och 2015', category: 'diagram' },
        { num: 40, text: '<b>Vilket svarsförslag anger förhållandet mellan frilandsodlade och växthusodlade grödor vad avser produktionsvärdet 2009?</b>', options: ['1:2', '1:1', '3:2', '2:1'], correct: 1, diagram: B + 'p4-dtk4.webp', diagramAlt: 'Svensk trädgårdsodling: produktionsvärde 2004 till 2015 per kategori samt för enskilda grödor 2014 och 2015', category: 'diagram' },
      ],
    },
  ],
};
