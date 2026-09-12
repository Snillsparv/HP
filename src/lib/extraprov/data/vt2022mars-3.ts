// Högskoleprovet 12 mars 2022, provpass 3 (kvantitativt).
// Uppgifterna är hämtade från UHR:s publicerade prov på studera.nu.
import { tex, figur, KVA_ALTERNATIV, NOG_ALTERNATIV } from '../types.js';
import type { ExtraPass } from '../types.js';

const B = '/extraprov/vt2022mars/';

const DTK1 = 'Gråsälsjakten i Sverige: stapeldiagram över antalet fällda och undersökta gråsälar åren 2002 till 2011 uppdelat på åldersgrupperna 0 till 3 år, 4 till 10 år, 11 till 15 år, 16 till 20 år och över 20 år';
const DTK2 = 'Nystartade företag: tabell över antalet nystartade företag i Sverige per kvartal från första kvartalet 2012 till fjärde kvartalet 2014, uppdelat på tjugo branscher samt samtliga';
const DTK3 = 'Svensk film: linjediagram över antalet premiärsatta svenska långfilmer 1998 till 2008 samt därav spelfilmer och dokumentärfilmer, stolpdiagram över antalet besök på svenska filmer 1997 till 2008 i miljoner, samt spridningsdiagram över sambandet mellan publiktal (logaritmisk skala) och recensionsindex för svenska filmer med och utan konsulentstöd 2007 och 2008';
const DTK4 = 'Åldersfördelning bland vårdpersonal: fyra cirkeldiagram över åldersfördelningen 2009 bland sjuksköterskor totalt (102 294), specialistsjuksköterskor (48 862), läkare totalt (35 357) och specialistläkare (24 929), i grupperna under 35 år, 35 till 44 år, 45 till 54 år och över 54 år';

export const pass: ExtraPass = {
  id: 'vt2022mars-3',
  tillfalle: 'vt2022mars',
  passNr: 3,
  kind: 'kvant',
  name: 'Provpass 3 (kvantitativt)',
  timeMinutes: 55,
  extendedMinutes: 80,
  normering: [[0, 0.0], [17, 0.1], [20, 0.2], [22, 0.3], [25, 0.4], [28, 0.5], [31, 0.6], [35, 0.7], [39, 0.8], [42, 0.9], [45, 1.0], [49, 1.1], [53, 1.2], [57, 1.3], [61, 1.4], [64, 1.5], [67, 1.6], [69, 1.7], [72, 1.8], [74, 1.9], [76, 2.0]],
  subTests: [
    {
      id: 'xyz', name: 'XYZ – Matematisk problemlösning', shortName: 'XYZ', type: 'xyz',
      questions: [
        { num: 1, text: `<b>Vad är ${tex('4(6(7 - 2) + 5)')}?</b>`, options: ['125', '140', '165', '171'], correct: 1, category: 'aritmetik' },
        { num: 2, text: `${tex('f(x) = \\frac{2x + 7}{3x + c}')}<br><br><b>Vilket värde har konstanten <i>c</i> om ${tex('f(2) = 1')}?</b>`, options: [tex('\\frac{3}{2}'), '5', '6', '21'], correct: 1, category: 'funktioner' },
        { num: 3, text: `<b>Vilket svarsalternativ är lika med ${tex('\\frac{1}{4} + \\frac{2}{16} + \\frac{3}{32}')}?</b>`, options: [tex('\\frac{6}{32}'), tex('\\frac{11}{32}'), tex('\\frac{15}{32}'), tex('\\frac{6}{52}')], correct: 2, category: 'aritmetik' },
        { num: 4, text: `<b>Vilket av svarsalternativen motsvarar ${tex('(3x - 3y)(y - x)')}?</b>`, options: [tex('2x - 2y'), tex('2x - 3y^2'), tex('3(x^2 - y^2)'), tex('6xy - 3x^2 - 3y^2')], correct: 3, category: 'algebra' },
        { num: 5, text: `<b>Vilket värde har <i>x</i>?</b>${figur(B + 'p3-xyz5.webp', 'En femhörning med räta vinklar i tre hörn. Den vänstra sidan är 4 cm, bottensidan 10 cm, den högra sidan 8 cm och den övre sidan 4 cm. Den snedställda sidan x förbinder den vänstra sidans topp med den övre sidans vänstra ände.', 380)}`, options: ['7', '10', tex('\\sqrt{20}'), tex('\\sqrt{52}')], correct: 3, category: 'geometri' },
        { num: 6, text: `Talet ${tex('2^{25}')} är jämnt delbart med ett av svarsalternativen. <b>Vilket?</b>`, options: ['16', '24', '25', '50'], correct: 0, category: 'aritmetik' },
        { num: 7, text: `Grafen till funktionen <i>f</i> är en rät linje. Dessutom gäller att ${tex('f(2) = 4')} och ${tex('f(3) = 1')}. <b>Vilket svarsalternativ anger ${tex('f(x)')}?</b>`, options: [tex('f(x) = 3x + 7'), tex('f(x) = 3x + 10'), tex('f(x) = -3x + 7'), tex('f(x) = -3x + 10')], correct: 3, category: 'funktioner' },
        { num: 8, text: `${tex('\\frac{x}{3} + \\frac{x}{4} = x - 2')}<br><br><b>Vad är <i>x</i>?</b>`, options: [tex('\\frac{14}{5}'), tex('\\frac{24}{10}'), tex('\\frac{19}{4}'), tex('\\frac{24}{5}')], correct: 3, category: 'algebra' },
        { num: 9, text: 'Stina har två olika rabattkuponger som gäller i en viss butik. Den första kupongen ger 10 % rabatt. Den andra kupongen ger 8 % rabatt och sedan ett ytterligare avdrag på 40 kr. <b>Vid vilket ordinarie pris ger de två olika kupongerna samma rabatterade pris?</b>', options: ['400 kr', '500 kr', '2 000 kr', '4 000 kr'], correct: 2, category: 'procent' },
        { num: 10, text: `${tex('10^{2x} = 36')}<br><br><b>Vad är ${tex('10^{-2x}')}?</b>`, options: [tex('-\\frac{1}{36}'), tex('\\frac{1}{36}'), tex('\\frac{1}{6}'), tex('\\frac{100}{36}')], correct: 1, category: 'algebra' },
        { num: 11, text: 'I en låda finns det endast enfärgade röda och svarta kulor. Kalle plockar slumpmässigt kulor ur lådan, en i taget, och lägger tillbaka dem efter varje plockad kula. Sannolikheten att få två svarta kulor efter varandra är då 16/49. <b>Vad är sannolikheten att Kalle plockar en röd kula?</b>', options: ['3/7', '25/49', '5/7', '40/49'], correct: 0, category: 'sannolikhet' },
        { num: 12, text: 'En cirkelskiva med radien 24 cm delas först i fyra lika stora bitar. Varje bit delas därefter i tre lika stora bitar, vilka i sin tur slutligen delas i två lika stora bitar. <b>Vad är arean av en av bitarna efter den sista delningen?</b>', options: ['12π cm<sup>2</sup>', '24π cm<sup>2</sup>', '48π cm<sup>2</sup>', '64π cm<sup>2</sup>'], correct: 1, category: 'geometri' },
      ],
    },
    {
      id: 'kva', name: 'KVA – Kvantitativa jämförelser', shortName: 'KVA', type: 'kva',
      questions: [
        { num: 13, text: figur(B + 'p3-kva13.webp', 'En rektangel med sidorna x och 3x, och en triangel med sidorna 4x, 2x och 3x.', 460), q1: 'Rektangelns omkrets', q2: 'Triangelns omkrets', options: KVA_ALTERNATIV, correct: 1, category: 'geometri' },
        { num: 14, text: figur(B + 'p3-kva14.webp', 'Koordinatsystem med två linjer. L1 lutar brant nedåt och skär y-axeln ovanför origo. L2 lutar svagt uppåt och skär y-axeln under origo.', 320), q1: 'Riktningskoefficienten för linjen L<sub>1</sub>', q2: 'Riktningskoefficienten för linjen L<sub>2</sub>', options: KVA_ALTERNATIV, correct: 1, category: 'funktioner' },
        { num: 15, text: '', q1: tex('\\frac{24}{6}'), q2: tex('\\frac{3}{12} \\cdot 16'), options: KVA_ALTERNATIV, correct: 2, category: 'aritmetik' },
        { num: 16, text: '', q1: 'Medelvärdet av mätserien 1, 1, 5, 5', q2: 'Hälften av medelvärdet av mätserien 2, 4, 8, 10', options: KVA_ALTERNATIV, correct: 2, category: 'statistik' },
        { num: 17, text: '', q1: tex('\\left(\\frac{2}{\\sqrt{3}}\\right)^2'), q2: tex('\\sqrt{\\frac{16}{\\pi^2}}'), options: KVA_ALTERNATIV, correct: 0, category: 'aritmetik' },
        { num: 18, text: `Fyrhörningen ABCD är en kvadrat.${figur(B + 'p3-kva18.webp', 'Kvadraten ABCD där sidan BC är x/8 och sidan AB är 3x/y.', 240)}`, q1: '<i>y</i>', q2: '8', options: KVA_ALTERNATIV, correct: 0, category: 'algebra' },
        { num: 19, text: 'Anna, Beda och Clara har tillsammans 66 karameller. Beda har 19 karameller och Clara har mer än en tredjedel av karamellerna.', q1: 'Antalet karameller som Anna har', q2: '24', options: KVA_ALTERNATIV, correct: 3, category: 'aritmetik' },
        { num: 20, text: tex('x \\neq 0'), q1: tex('\\frac{x^2}{2x} - \\frac{2x}{4}'), q2: tex('\\frac{2x}{x} - \\frac{x}{2x}'), options: KVA_ALTERNATIV, correct: 1, category: 'algebra' },
        { num: 21, text: tex('x \\geq 0'), q1: tex('\\sqrt{x}'), q2: tex('\\frac{x}{2}'), options: KVA_ALTERNATIV, correct: 3, category: 'algebra' },
        { num: 22, text: 'Peter reser i 2 timmar med hastigheten 5 m/s.<br>Mattias reser i 3 timmar med hastigheten 12 km/h.', q1: 'Sträckan som Peter reser', q2: 'Sträckan som Mattias reser', options: KVA_ALTERNATIV, correct: 2, category: 'enheter' },
      ],
    },
    {
      id: 'nog', name: 'NOG – Kvantitativa resonemang', shortName: 'NOG', type: 'nog',
      questions: [
        { num: 23, text: 'Ett badhus har tre trampoliner på olika höjd: 1 meter, 3 meter och 5 meter. Daniel, Gabriel och Mikael hoppar från var sin trampolin. <b>Vem hoppar från 5 meter?</b>', s1: 'Daniel hoppar inte från 5 meter.', s2: 'Gabriel hoppar från en lägre höjd än Mikael.', options: NOG_ALTERNATIV, correct: 2, category: 'logik' },
        { num: 24, text: 'I ett garage parkeras endast två slags fordon: bilar och motorcyklar. Det finns 176 fordon i garaget. <b>Hur många av fordonen är motorcyklar?</b>', s1: 'Om ytterligare 16 motorcyklar parkeras i garaget så kommer det att vara dubbelt så många motorcyklar som bilar i garaget.', s2: 'Om ytterligare <i>x</i> bilar och 10 motorcyklar parkeras i garaget så kommer det att vara lika många bilar som motorcyklar i garaget.', options: NOG_ALTERNATIV, correct: 0, category: 'algebra' },
        { num: 25, text: 'Kent ska måla ett staket. Han arbetar utan rast och med konstant hastighet. <b>Hur lång tid tar det för honom att måla staketet?</b>', s1: 'Det tar Kent 2 timmar att måla 1/3 av staketet.', s2: 'Om Kent arbetade dubbelt så fort så skulle det ta honom 2 timmar att måla 2/3 av staketet.', options: NOG_ALTERNATIV, correct: 3, category: 'aritmetik' },
        { num: 26, text: 'Priset på en vara sänktes med 20 procent. Vid ett senare tillfälle gjordes en prishöjning. <b>Hur stor var den totala prisändringen i procent?</b>', s1: 'Varans ursprungspris var 755 kr.', s2: 'Prishöjningen var 25 procent.', options: NOG_ALTERNATIV, correct: 1, category: 'procent' },
        { num: 27, text: 'Arvid har 12 anteckningsblock för sitt skolarbete. Vart och ett av blocken har antingen rutade eller linjerade blad. Dessutom är vart och ett av blocken i antingen A4-format eller A5-format. <b>Hur många av Arvids anteckningsblock har rutade blad?</b>', s1: '1/4 av anteckningsblocken i A4-format har rutade blad.', s2: '1/2 av anteckningsblocken i A5-format har rutade blad.', options: NOG_ALTERNATIV, correct: 4, category: 'aritmetik' },
        { num: 28, text: `<b>Är ${tex('x > y')}?</b>`, s1: tex('x - y > x + y'), s2: tex('x > 0'), options: NOG_ALTERNATIV, correct: 2, category: 'algebra' },
      ],
    },
    {
      id: 'dtk', name: 'DTK – Diagram, tabeller och kartor', shortName: 'DTK', type: 'dtk',
      questions: [
        { num: 29, text: '<b>Hur många gråsälar fälldes och undersöktes 2008?</b>', options: ['71', '101', '108', '118'], correct: 2, diagram: B + 'p3-dtk1.webp', diagramAlt: DTK1, category: 'diagram' },
        { num: 30, text: '<b>För hur många av åren gällde att antalet fällda och undersökta gråsälar i åldersgruppen 11–15 år var större än tio, samtidigt som motsvarande antal i åldersgruppen 16–20 år var mindre än fem?</b>', options: ['2', '3', '5', '6'], correct: 0, diagram: B + 'p3-dtk1.webp', diagramAlt: DTK1, category: 'diagram' },
        { num: 31, text: '<b>Hur stor andel av gråsälarna som fälldes och undersöktes 2011 var 11 år eller äldre?</b>', options: ['1/2', '1/3', '1/4', '1/5'], correct: 1, diagram: B + 'p3-dtk1.webp', diagramAlt: DTK1, category: 'diagram' },
        { num: 32, text: 'Studera antalet nystartade företag inom branschen Förlag, radio, TV, film och telekommunikation samt branschen Programmering och informationstjänster de olika kvartalen 2014. <b>Vilket kvartal var det sammanlagda antalet nystartade företag inom dessa två branscher som minst?</b>', options: ['Första kvartalet', 'Andra kvartalet', 'Tredje kvartalet', 'Fjärde kvartalet'], correct: 2, diagram: B + 'p3-dtk2.webp', diagramAlt: DTK2, category: 'tabell' },
        { num: 33, text: 'Identifiera det kvartal då flest företag startades. <b>Hur stor andel av de redovisade branschkategorierna hade fler än 1 000 nystartade företag detta kvartal?</b>', options: ['1/3', '2/3', '3/4', '2/5'], correct: 3, diagram: B + 'p3-dtk2.webp', diagramAlt: DTK2, category: 'tabell' },
        { num: 34, text: 'Jämför antalet nystartade företag inom branschen Tillverkning och dylikt fjärde kvartalet 2012 och fjärde kvartalet 2014. <b>Med hur många procent hade antalet nystartade företag ökat?</b>', options: ['35 procent', '45 procent', '55 procent', '65 procent'], correct: 1, diagram: B + 'p3-dtk2.webp', diagramAlt: DTK2, category: 'tabell' },
        { num: 35, text: '<b>Hur många av de redovisade filmerna hade både ett publiktal om minst 100 000 och ett recensionsindex över 3,50?</b>', options: ['3', '8', '14', '17'], correct: 0, diagram: B + 'p3-dtk3.webp', diagramAlt: DTK3, category: 'diagram' },
        { num: 36, text: 'Anta att samtliga besök på svenska filmer gällde premiärsatta långfilmer. <b>Hur många besök hade en svensk långfilm i genomsnitt 2007?</b>', options: ['70 000', '90 000', '110 000', '140 000'], correct: 2, diagram: B + 'p3-dtk3.webp', diagramAlt: DTK3, category: 'diagram' },
        { num: 37, text: '<b>För vilket år gällde att både antalet premiärsatta svenska långfilmer och antalet besök på svenska filmer nådde en av sina tre högsta noteringar under den redovisade perioden?</b>', options: ['2000', '2001', '2004', '2005'], correct: 0, diagram: B + 'p3-dtk3.webp', diagramAlt: DTK3, category: 'diagram' },
        { num: 38, text: '<b>Hur stor var andelen spelfilmer av det totala antalet premiärsatta långfilmer det år då denna andel var som minst?</b>', options: ['50 procent', '60 procent', '70 procent', '80 procent'], correct: 1, diagram: B + 'p3-dtk3.webp', diagramAlt: DTK3, category: 'diagram' },
        { num: 39, text: 'Identifiera den av de fyra yrkesgrupperna där andelen 35–44-åringar var som minst. <b>Hur många individer motsvarade denna andel?</b>', options: ['3 000', '5 000', '6 000', '8 000'], correct: 3, diagram: B + 'p3-dtk4.webp', diagramAlt: DTK4, category: 'diagram' },
        { num: 40, text: '<b>Hur stort var antalet specialistsjuksköterskor i åldersgruppen 45–54 år jämfört med antalet specialistläkare i samma åldersgrupp?</b>', options: ['Hälften så stort', 'Lika stort', 'Dubbelt så stort', 'Tre gånger så stort'], correct: 2, diagram: B + 'p3-dtk4.webp', diagramAlt: DTK4, category: 'diagram' },
      ],
    },
  ],
};
