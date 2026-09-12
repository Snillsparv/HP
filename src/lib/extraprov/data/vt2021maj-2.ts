// Högskoleprovet 8 maj 2021, provpass 2 (kvantitativt).
// Uppgifterna är hämtade från UHR:s publicerade prov på studera.nu.
import { tex, figur, KVA_ALTERNATIV, NOG_ALTERNATIV } from '../types.js';
import type { ExtraPass } from '../types.js';

const B = '/extraprov/vt2021maj/';
const graf = (bokstav: string) => `<img src="${B}p2-xyz2${bokstav}.webp" alt="Graf ${bokstav.toUpperCase()}" data-fadein style="max-width:170px;width:100%;vertical-align:middle;" />`;

const DTK1 = 'Födelsetal i EU-länder: två spridningsdiagram över sambandet mellan födelsetal och genomsnittligt antal utbildningsår för kvinnor 25 till 34 år respektive andel barn under tre år i barnomsorg, för vissa EU-länder 2005, med den kritiska nivån 1,5 markerad';
const DTK2 = 'Sveriges vanligaste efternamn: tabell över de 100 vanligaste efternamnen i Sverige 2012 med plats, namn och antal personer';
const DTK3 = 'Förändringar av antalet jordbruksföretag i Sverige: stapeldiagram över den procentuella förändringen från 2003 till 2005, 2005 till 2007 och 2007 till 2010 inom elva driftsinriktningar samt totalt, med antalet företag 2010 inom parentes';
const DTK4 = 'Materialförbrukning: ytdiagram över materialförbrukningen i Sverige 2000 till 2012 i ton per capita uppdelad på biomassa, metaller, icke-metalliska mineraler, fossila bränslen och övriga produkter, samt indexdiagram över materialförbrukning, befolkning, BNP per capita och materialintensitet 2000 till 2012 med index 100 år 2000';

export const pass: ExtraPass = {
  id: 'vt2021maj-2',
  tillfalle: 'vt2021maj',
  passNr: 2,
  kind: 'kvant',
  name: 'Provpass 2 (kvantitativt)',
  timeMinutes: 55,
  extendedMinutes: 80,
  normering: [[0, 0.0], [19, 0.1], [21, 0.2], [24, 0.3], [26, 0.4], [29, 0.5], [32, 0.6], [35, 0.7], [38, 0.8], [43, 0.9], [47, 1.0], [51, 1.1], [55, 1.2], [58, 1.3], [61, 1.4], [65, 1.5], [68, 1.6], [70, 1.7], [72, 1.8], [74, 1.9], [76, 2.0]],
  subTests: [
    {
      id: 'xyz', name: 'XYZ – Matematisk problemlösning', shortName: 'XYZ', type: 'xyz',
      questions: [
        { num: 1, text: `<b>Vilket värde har <i>x</i> om ${tex('\\frac{x}{3} + \\frac{1}{4} = \\frac{11}{12}')}?</b>`, options: ['2', tex('\\frac{5}{2}'), tex('\\frac{9}{4}'), '11'], correct: 0, category: 'algebra' },
        { num: 2, text: `${tex('f(x) = \\frac{3}{2}x - 2')}<br><br><b>Vilken av graferna nedan representerar funktionen <i>f</i>?</b>`, options: [graf('a'), graf('b'), graf('c'), graf('d')], correct: 3, category: 'funktioner' },
        { num: 3, text: `<b>Vilket heltal är närmast ${tex('\\sqrt{65} + \\sqrt{35}')}?</b>`, options: ['10', '12', '14', '16'], correct: 2, category: 'aritmetik' },
        { num: 4, text: `<b>Vilket svarsalternativ motsvarar ${tex('\\dfrac{\\frac{3}{5}}{2 - \\frac{11}{10}}')}?</b>`, options: [tex('-\\frac{2}{3}'), tex('-\\frac{3}{50}'), tex('\\frac{27}{50}'), tex('\\frac{2}{3}')], correct: 3, category: 'aritmetik' },
        { num: 5, text: `<b>Hur stor är vinkeln <i>x</i>?</b>${figur(B + 'p2-xyz5.webp', 'En stor spetsig triangel med vinkeln 20° i vänstra hörnet och 60° i högra hörnet. Från en punkt på den övre sidan, där vinkeln 130° är markerad mot sidan, går en linje ner till en punkt på basen. Från samma punkt på basen går en linje upp till toppen, där vinkeln 70° är markerad mellan linjen och den högra sidan. Vinkeln x ligger vid punkten på basen, mellan de två linjerna.', 460)}`, options: ['80°', '90°', '100°', '110°'], correct: 2, category: 'geometri' },
        { num: 6, text: `<b>Vilket svarsalternativ motsvarar ${tex('x^2 + x - 12')}?</b>`, options: [tex('(x - 3)(x - 4)'), tex('(x - 3)(x + 4)'), tex('(x + 3)(x - 4)'), tex('(x + 3)(x + 4)')], correct: 1, category: 'algebra' },
        { num: 7, text: `${tex('x > 0')}<br><br><b>Vad är ${tex('\\left(x^2\\right)^{\\frac{5}{7}}')}?</b>`, options: [tex('x^{\\frac{5}{14}}'), tex('x^{\\frac{10}{7}}'), tex('x^{\\frac{10}{14}}'), tex('x^{\\frac{25}{49}}')], correct: 1, category: 'algebra' },
        { num: 8, text: '<b>Vilket är det största primtalet som är mindre än 100?</b>', options: ['91', '93', '97', '99'], correct: 2, category: 'aritmetik' },
        { num: 9, text: `Linjerna som ges av ${tex('y = -2x + 2')} och ${tex('y = 2x + 4')} skär varandra i en punkt. <b>Vilken <i>x</i>-koordinat har punkten?</b>`, options: ['−2', '−1', tex('-\\frac{1}{2}'), '0'], correct: 2, category: 'funktioner' },
        { num: 10, text: 'Det finns två kvadrater, en gul och en röd. Sidan i den gula kvadraten är 6 cm längre än sidan i den röda kvadraten. Den gula kvadratens area är 48 cm<sup>2</sup> större än den röda kvadratens area. <b>Hur stor area har den röda kvadraten?</b>', options: ['1 cm<sup>2</sup>', '16 cm<sup>2</sup>', '25 cm<sup>2</sup>', '36 cm<sup>2</sup>'], correct: 0, category: 'geometri' },
        { num: 11, text: 'Medelvikten av fyra lådor är 5,5 kg och medianvikten är 5 kg. <b>Vad är den lägsta möjliga vikten för den tyngsta lådan?</b>', options: ['5,5 kg', '6 kg', '6,5 kg', '7 kg'], correct: 3, category: 'statistik' },
        { num: 12, text: 'En bil kör med hastigheten <i>x</i> m/s. <b>Vilket svarsalternativ motsvarar denna hastighet uttryckt i km/h?</b>', options: [tex('\\frac{x}{6}'), tex('9x'), tex('\\frac{18x}{5}'), tex('36x')], correct: 2, category: 'enheter' },
      ],
    },
    {
      id: 'kva', name: 'KVA – Kvantitativa jämförelser', shortName: 'KVA', type: 'kva',
      questions: [
        { num: 13, text: `${tex('x > -7')}<br>${tex('y > 7')}`, q1: '<i>x</i>', q2: '<i>y</i>', options: KVA_ALTERNATIV, correct: 3, category: 'algebra' },
        { num: 14, text: '', q1: '1 m<sup>3</sup>', q2: '999 dm<sup>3</sup>', options: KVA_ALTERNATIV, correct: 0, category: 'enheter' },
        { num: 15, text: 'På en arbetsplats finns det 80 anställda, varav 60 arbetar i verkstaden och 20 arbetar på kontoret. 30 av de anställda cyklar till arbetet.', q1: 'Antalet anställda som både arbetar i verkstaden och cyklar till arbetet', q2: '20', options: KVA_ALTERNATIV, correct: 3, category: 'logik' },
        { num: 16, text: `Rektangeln och triangeln i figuren har lika stor omkrets.${figur(B + 'p2-kva16.webp', 'En rektangel med sidorna x och 10 cm, och en liksidig triangel med sidan x cm.', 460)}`, q1: '<i>x</i>', q2: '15', options: KVA_ALTERNATIV, correct: 0, category: 'geometri' },
        { num: 17, text: tex('x > 0'), q1: 'En fjärdedel av en femtedel av <i>x</i>', q2: 'En femtedel av en fjärdedel av <i>x</i>', options: KVA_ALTERNATIV, correct: 2, category: 'aritmetik' },
        { num: 18, text: tex('f(x) = 3 \\cdot 2^x'), q1: tex('4 \\cdot f(2)'), q2: tex('f(4)'), options: KVA_ALTERNATIV, correct: 2, category: 'funktioner' },
        { num: 19, text: tex('x > 0'), q1: tex('\\frac{1}{x + 1} - \\frac{1}{x}'), q2: tex('\\frac{1}{x} - \\frac{1}{x + 1}'), options: KVA_ALTERNATIV, correct: 1, category: 'algebra' },
        { num: 20, text: '', q1: 'Sannolikheten att slumpmässigt plocka upp en blå kula ur en påse som endast innehåller enfärgade kulor: 5 blå och 15 vita', q2: 'Sannolikheten att slumpmässigt plocka upp en röd kula ur en påse som endast innehåller enfärgade kulor: 4 röda och 14 vita', options: KVA_ALTERNATIV, correct: 0, category: 'sannolikhet' },
        { num: 21, text: figur(B + 'p2-kva21.webp', 'En skuggad fyrhörning med den övre sidan x, den högra sidan x (räta vinklar i båda ändar) och den nedre sidan 2x. Under den nedre sidan hänger en rätvinklig triangel med kateterna 8 cm och 6 cm, vars hypotenusa är fyrhörningens nedre sida.', 300), q1: 'Arean av den skuggade ytan', q2: '38 cm<sup>2</sup>', options: KVA_ALTERNATIV, correct: 1, category: 'geometri' },
        { num: 22, text: `${tex('x^2 y^3 > 0')}<br>${tex('xy < 0')}`, q1: '<i>x</i>', q2: '<i>y</i>', options: KVA_ALTERNATIV, correct: 1, category: 'algebra' },
      ],
    },
    {
      id: 'nog', name: 'NOG – Kvantitativa resonemang', shortName: 'NOG', type: 'nog',
      questions: [
        { num: 23, text: 'De tre vännerna Albert, Felix och Oskar är alla olika långa. <b>Hur lång är Albert?</b>', s1: 'Oskar är 5 cm längre än Felix. Felix är 13 cm kortare än Albert.', s2: 'Medelvärdet av vännernas längder är 181 cm. Både Oskar och Felix är kortare än 181 cm.', options: NOG_ALTERNATIV, correct: 2, category: 'algebra' },
        { num: 24, text: '<b>Vilket värde har <i>x</i>?</b>', s1: '4 % av <i>x</i> är 15 % av 400.', s2: `${tex('3x + 5y = 4\\,000')}<br>${tex('y = -100')}`, options: NOG_ALTERNATIV, correct: 3, category: 'algebra' },
        { num: 25, text: 'På ett bord ligger fem läroböcker på rad: en biologibok, en engelskabok, en fysikbok, en kemibok och en matematikbok. Böckerna är numrerade 1–5 från vänster till höger. <b>Vilket nummer har matematikboken?</b>', s1: 'Kemiboken ligger intill både matematikboken och fysikboken. Kemiboken har nummer 2. Matematikboken har inte nummer 3.', s2: 'Engelskaboken ligger intill biologiboken. Biologiboken ligger intill fysikboken.', options: NOG_ALTERNATIV, correct: 0, category: 'logik' },
        { num: 26, text: '<b>Vilket värde har <i>xyz</i>?</b>', s1: tex('xy = 1'), s2: tex('yz = 1'), options: NOG_ALTERNATIV, correct: 4, category: 'algebra' },
        { num: 27, text: 'Ella, Sophie och Ylva bor på varsin våning i ett trevåningshus. <b>Vem bor på vilken våning?</b>', s1: 'Ylva bor minst en våning under Sophie. Sophie bor minst en våning över Ella.', s2: 'Ellas och Ylvas våningar angränsar till varandra. Sophie bor på översta våningen.', options: NOG_ALTERNATIV, correct: 4, category: 'logik' },
        { num: 28, text: 'Anton och Bert startar samtidigt och springer mot varandra längs med samma raka väg, var och en med sin egen konstanta hastighet. När de startar är de 3 km från varandra. <b>Hur långt har Bert sprungit när de möts?</b>', s1: 'Bert springer 50 % snabbare än Anton.', s2: 'Antons hastighet är 8 km/h och de möts efter 9 minuter.', options: NOG_ALTERNATIV, correct: 3, category: 'aritmetik' },
      ],
    },
    {
      id: 'dtk', name: 'DTK – Diagram, tabeller och kartor', shortName: 'DTK', type: 'dtk',
      questions: [
        { num: 29, text: '<b>Hur stor andel av de redovisade EU-länderna låg under den kritiska nivån vad avser födelsetal?</b>', options: ['35 procent', '45 procent', '55 procent', '65 procent'], correct: 1, diagram: B + 'p2-dtk1.webp', diagramAlt: DTK1, category: 'diagram' },
        { num: 30, text: '<b>Hur stor var skillnaden i andel barn under tre år i barnomsorg mellan landet med den största andelen och landet med den näst största andelen?</b>', options: ['20 procentenheter', '40 procentenheter', '60 procentenheter', '80 procentenheter'], correct: 0, diagram: B + 'p2-dtk1.webp', diagramAlt: DTK1, category: 'diagram' },
        { num: 31, text: '<b>För hur många av de redovisade EU-länderna gällde att födelsetalet var lägre än 1,4 och att kvinnor i åldern 25–34 år hade minst 12 års utbildning?</b>', options: ['4', '5', '6', '7'], correct: 1, diagram: B + 'p2-dtk1.webp', diagramAlt: DTK1, category: 'diagram' },
        { num: 32, text: '<b>Hur många personer sammanlagt hade något av de fem vanligaste efternamnen?</b>', options: ['726 267', '904 367', '1 045 141', '1 205 341'], correct: 2, diagram: B + 'p2-dtk2.webp', diagramAlt: DTK2, category: 'tabell' },
        { num: 33, text: 'Föreställ dig att alla som hade namnen Sandström, Nordin, Lund och Ström bytte namn till Bengtsson. <b>På vilken plats bland vanliga efternamn skulle då Bengtsson ha hamnat?</b>', options: ['12', '13', '14', '15'], correct: 0, diagram: B + 'p2-dtk2.webp', diagramAlt: DTK2, category: 'tabell' },
        { num: 34, text: '<b>Vilket namnpar avses?</b><br><br>Förhållandet mellan antalet personer med de två efternamnen var 1:2 och de som hade efternamnen var sammanlagt färre än de som hade efternamnet Jansson.', options: ['Viklund och Axelsson', 'Berg och Hansson', 'Hansen och Jakobsson', 'Martinsson och Pettersson'], correct: 0, diagram: B + 'p2-dtk2.webp', diagramAlt: DTK2, category: 'tabell' },
        { num: 35, text: '<b>Inom hur många av de redovisade driftsinriktningarna hade antalet företag ökat under någon av de tre perioderna?</b>', options: ['2', '3', '5', '6'], correct: 1, diagram: B + 'p2-dtk3.webp', diagramAlt: DTK3, category: 'diagram' },
        { num: 36, text: 'Studera hur antalet företag med driftsinriktningen Spannmål förändrades procentuellt under de tre perioderna. <b>Hur stor var skillnaden mellan den största procentuella förändringen och den minsta procentuella förändringen?</b>', options: ['2 procentenheter', '4 procentenheter', '6 procentenheter', '8 procentenheter'], correct: 3, diagram: B + 'p2-dtk3.webp', diagramAlt: DTK3, category: 'diagram' },
        { num: 37, text: '<b>Vilket svarsförslag beskriver bäst förändringen av det totala antalet jordbruksföretag i Sverige?</b>', options: ['Från 2003 till 2005 ökade antalet med 2 procent.', 'Från 2003 till 2005 minskade antalet med 6 procent.', 'Från 2005 till 2007 ökade antalet med 6 procent.', 'Från 2005 till 2007 minskade antalet med 2 procent.'], correct: 3, diagram: B + 'p2-dtk3.webp', diagramAlt: DTK3, category: 'diagram' },
        { num: 38, text: '<b>Vilket år skilde sig materialförbrukningen respektive materialintensiteten som mest från den år 2000?</b>', options: ['Materialförbrukning 2007, materialintensitet 2005', 'Materialförbrukning 2007, materialintensitet 2009', 'Materialförbrukning 2012, materialintensitet 2005', 'Materialförbrukning 2012, materialintensitet 2009'], correct: 3, diagram: B + 'p2-dtk4.webp', diagramAlt: DTK4, category: 'diagram' },
        { num: 39, text: '<b>Hur stor var förbrukningen av biomassa jämfört med förbrukningen av fossila bränslen 2007?</b>', options: ['Sex gånger så stor', 'Fyra gånger så stor', 'Tre gånger så stor', 'Dubbelt så stor'], correct: 2, diagram: B + 'p2-dtk4.webp', diagramAlt: DTK4, category: 'diagram' },
        { num: 40, text: 'År 2000 uppgick den totala svenska materialförbrukningen till cirka 180 miljoner ton. <b>Hur stor var materialförbrukningen 2008?</b>', options: ['170 miljoner ton', '190 miljoner ton', '205 miljoner ton', '215 miljoner ton'], correct: 2, diagram: B + 'p2-dtk4.webp', diagramAlt: DTK4, category: 'diagram' },
      ],
    },
  ],
};
