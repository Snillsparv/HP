// Högskoleprovet 13 mars 2021, provpass 5 (kvantitativt).
// Uppgifterna är hämtade från UHR:s publicerade prov på studera.nu.
import { tex, figur, KVA_ALTERNATIV, NOG_ALTERNATIV } from '../types.js';
import type { ExtraPass } from '../types.js';

const B = '/extraprov/vt2021mars/';

const DTK1 = 'Faderskapsutredningar: tabell över antalet faderskapsutredningar i Sverige varje år 1990 till 2013 med kolumnerna fastställt genom bekräftelse, i procent av det totala antalet födslar, fastställt genom dom, utredning nedlagd samt utredning pågick den 31 december (totalt och därav överlämnade för rättslig prövning).';
const DTK2 = 'Gamla Uppsala by: karta över Gamla Uppsala by med gårdar och tillhörande åkermark omkring år 1640. Gårdarna Kungsgårdarna (B), Backegården (C), Prästgården (D), Lötegården (E), Klockargården (F), Myrby (G) och Kyrkbyn (A) är utmärkta, och åkermarkerna i Norra gärdet, Östra gärdet, Lilla gärdet och Stora gärdet är skrafferade efter vilken gård de tillhörde. Byängen och andra ängar, gärdsgårdar, ägogränser, diken och bygränsen är markerade, och kartan har norrpil och skalstreck 0 till 400 meter.';
const DTK3 = 'Upplevd trolighet för terroristattacker: liggande staplar för åren 2009 och 2011 till 2016 som visar hur stor andel i procent som svarat mycket troligt, ganska troligt, inte speciellt troligt, inte alls troligt respektive ingen åsikt på frågan hur troligt det är att en terroristattack inträffar i Sverige under de närmaste fem åren.';
const DTK4 = 'Koppar, bly och zink: ytdiagram över mängden koppar, bly respektive zink i ton som utvanns i Sverige 1950 till 2011, med koppar underst, bly i mitten och zink överst, y-axeln 0 till 450 000 ton och årtalen 1950, 1955, 1960 och så vidare till 2010 utskrivna.';

export const pass: ExtraPass = {
  id: 'vt2021mars-5',
  tillfalle: 'vt2021mars',
  passNr: 5,
  kind: 'kvant',
  name: 'Provpass 5 (kvantitativt)',
  timeMinutes: 55,
  extendedMinutes: 80,
  normering: [[0, 0.0], [18, 0.1], [20, 0.2], [22, 0.3], [25, 0.4], [28, 0.5], [32, 0.6], [35, 0.7], [39, 0.8], [43, 0.9], [46, 1.0], [50, 1.1], [54, 1.2], [58, 1.3], [62, 1.4], [65, 1.5], [68, 1.6], [70, 1.7], [72, 1.8], [74, 1.9], [76, 2.0]],
  subTests: [
    {
      id: 'xyz', name: 'XYZ – Matematisk problemlösning', shortName: 'XYZ', type: 'xyz',
      questions: [
        { num: 1, text: `<b>Vilket svarsalternativ är lika med uttrycket ${tex('a(a + a)')}?</b>`, options: [tex('3a'), tex('a^2 + a'), tex('2a^2'), tex('a^3')], correct: 2, category: 'algebra' },
        { num: 2, text: `<b>Hur stor är vinkeln <i>v</i>?</b>${figur(B + 'p5-xyz2.webp', 'En triangel med vinkeln v i det vänstra hörnet och 46° i det högra hörnet. Från toppen går en linje ner till en punkt på basen. Vinkeln vid toppen till vänster om linjen är 64°, och vinkeln vid punkten på basen till höger om linjen är 102°.', 460)}`, options: ['14°', '32°', '38°', '46°'], correct: 2, category: 'geometri' },
        { num: 3, text: 'Två butiker säljer äpplen. I butik A kostar äpplena 5 kr/st. I butik B är styckepriset 20 procent lägre än i butik A. <b>Hur många fler äpplen kan man köpa för 100 kr i butik B jämfört med i butik A?</b>', options: ['4', '5', '10', '20'], correct: 1, category: 'procent' },
        { num: 4, text: `Antag att ${tex('2(p + 150) = 400')}. <b>Vilket värde har uttrycket ${tex('4p - 200')}?</b>`, options: ['0', '300', '900', '1 200'], correct: 0, category: 'algebra' },
        { num: 5, text: `${tex('P = (-1;\\ 0)')}<br>${tex('M = (3;\\ 3)')}<br><br>M är mittpunkten på sträckan PQ. <b>Vilka koordinater har punkten Q?</b>`, options: ['(−5; −3)', '(1; 1,5)', '(5; 6)', '(7; 6)'], correct: 3, category: 'geometri' },
        { num: 6, text: '<b>Vilket svarsalternativ är störst?</b>', options: [tex('\\sqrt{50}'), tex('2\\sqrt{25}'), tex('5\\sqrt{10}'), tex('10\\sqrt{5}')], correct: 3, category: 'aritmetik' },
        { num: 7, text: `<b>Vilket värde har <i>x</i> om ${tex('\\frac{1}{x + 1} + \\frac{1}{x + 1} = 3')}?</b>`, options: [tex('-\\frac{2}{3}'), tex('-\\frac{1}{3}'), tex('\\frac{1}{3}'), tex('\\frac{2}{3}')], correct: 1, category: 'algebra' },
        { num: 8, text: `<b>Vad är ${tex('3 \\cdot 10^5 + 3 \\cdot 10^5')}?</b>`, options: [tex('6 \\cdot 10^5'), tex('3 \\cdot 10^6'), tex('3 \\cdot 10^{10}'), tex('6 \\cdot 10^{10}')], correct: 0, category: 'aritmetik' },
        { num: 9, text: `<b>Vad är medelvärdet av de tre talen ${tex('\\frac{1}{2}')}, ${tex('\\frac{1}{4}')} och ${tex('\\frac{1}{8}')}?</b>`, options: [tex('\\frac{1}{4}'), tex('\\frac{3}{8}'), tex('\\frac{1}{14}'), tex('\\frac{7}{24}')], correct: 3, category: 'statistik' },
        { num: 10, text: `${tex('f(x) = 8x + 1')}<br><br><b>Vad är ett möjligt värde på ${tex('f(x)')} om <i>x</i> är ett heltal?</b>`, options: ['−31', '−17', '15', '32'], correct: 0, category: 'funktioner' },
        { num: 11, text: `<b>Vilket svarsalternativ ligger närmast ${tex('\\frac{254}{13}')}?</b>`, options: ['18', '19', '20', '21'], correct: 2, category: 'aritmetik' },
        { num: 12, text: `<b>Hur lång är sträckan AE?</b>${figur(B + 'p5-xyz12.webp', 'En figur med måtten i cm. Från punkten A går en vågrät sträcka AB = 4 åt höger. Vid B är vinkeln rät och BC = 3 går uppåt. Vid C är vinkeln rät mot AC och CD = 3 går snett uppåt vänster. Vid D är vinkeln rät mot AD och DE = 3 går snett uppåt vänster. Sträckorna AC och AD är inritade, och den sökta sträckan AE går från A till E.', 340)}`, options: [`${tex('\\sqrt{43}')} cm`, `${tex('\\sqrt{45}')} cm`, '7 cm', '8 cm'], correct: 0, category: 'geometri' },
      ],
    },
    {
      id: 'kva', name: 'KVA – Kvantitativa jämförelser', shortName: 'KVA', type: 'kva',
      questions: [
        { num: 13, text: tex('a + 8 = b + 4'), q1: '<i>a</i>', q2: '<i>b</i>', options: KVA_ALTERNATIV, correct: 1, category: 'algebra' },
        { num: 14, text: 'Charlie har 8 eller 9 lådor med kritor. Varje låda innehåller 5, 6 eller 7 kritor.', q1: 'Antalet kritor som Charlie har', q2: '58', options: KVA_ALTERNATIV, correct: 3, category: 'aritmetik' },
        { num: 15, text: '', q1: tex('\\frac{4 - 3{,}14}{3}'), q2: tex('\\frac{1}{4}'), options: KVA_ALTERNATIV, correct: 0, category: 'aritmetik' },
        { num: 16, text: `Ekvationen för den räta linjen i figuren kan skrivas på formen ${tex('y = kx + m')}.${figur(B + 'p5-kva16.webp', 'Ett koordinatsystem med rutnät där 1 är markerat på båda axlarna. En rät linje går snett uppåt åt höger, skär y-axeln vid ungefär 2 och stiger ungefär ett steg för varje två steg åt höger.', 300)}`, q1: '<i>k</i>', q2: '2', options: KVA_ALTERNATIV, correct: 1, category: 'funktioner' },
        { num: 17, text: 'Oscar går <i>x</i> km på <i>y</i>/3 timmar.<br>Peter går 6<i>x</i> km på 2<i>y</i> timmar.', q1: 'Oscars medelhastighet', q2: 'Peters medelhastighet', options: KVA_ALTERNATIV, correct: 2, category: 'aritmetik' },
        { num: 18, text: `Trianglarna ABC och DEF är rätvinkliga.<br>${tex('x > y')}${figur(B + 'p5-kva18.webp', 'Två rätvinkliga trianglar. Triangeln ABC har den räta vinkeln vid B, hypotenusan AC = x och kateten AB = z. Triangeln DEF har den räta vinkeln vid E, hypotenusan DF = y och kateten DE = z.', 460)}`, q1: 'Arean av triangeln ABC', q2: 'Arean av triangeln DEF', options: KVA_ALTERNATIV, correct: 0, category: 'geometri' },
        { num: 19, text: 'Medelvärdet av de fyra talen 10, 15, 25 och <i>x</i> är 12.', q1: '<i>x</i>', q2: '0', options: KVA_ALTERNATIV, correct: 1, category: 'statistik' },
        { num: 20, text: `${tex('f(x) = 2x + \\frac{1}{5}')}<br>${tex('g(x) = \\frac{1}{2}x + 5')}`, q1: '<i>x</i>-värdet för den punkt där grafen till <i>f</i> skär <i>x</i>-axeln', q2: '<i>x</i>-värdet för den punkt där grafen till <i>g</i> skär <i>x</i>-axeln', options: KVA_ALTERNATIV, correct: 0, category: 'funktioner' },
        { num: 21, text: figur(B + 'p5-kva21.webp', 'En triangel med vinkeln x i toppen och vinkeln y i det nedre högra hörnet. Från det nedre vänstra hörnet går en tunn linje till en punkt på den högra sidan. Vinkeln mellan basen och linjen vid det nedre vänstra hörnet är 40°, och vinkeln vid punkten på den högra sidan, mellan linjen och sidans nedre del, är 95°.', 320), q1: '<i>x</i>', q2: '<i>y</i>', options: KVA_ALTERNATIV, correct: 3, category: 'geometri' },
        { num: 22, text: `<i>x</i> och <i>y</i> är positiva tal.<br><br>${tex('\\frac{1}{x} - \\frac{1}{y} = 1')}`, q1: '<i>x</i>', q2: '<i>y</i>', options: KVA_ALTERNATIV, correct: 1, category: 'algebra' },
      ],
    },
    {
      id: 'nog', name: 'NOG – Kvantitativa resonemang', shortName: 'NOG', type: 'nog',
      questions: [
        { num: 23, text: 'De fyra personerna Alf, Bea, Carl och Dinah bildar en kö. Var och en av dem har en enfärgad mössa och alla fyra mössorna har olika färg. <b>Vilken färg har mössan på personen som står sist i kön?</b>', s1: 'Alf har en gul mössa. Bea har en röd mössa. Carl står näst sist i kön.', s2: 'Carl har en svart mössa. Dinah har en vit mössa och står mellan Bea och Carl.', options: NOG_ALTERNATIV, correct: 2, category: 'logik' },
        { num: 24, text: '<b>Hur många års åldersskillnad är det mellan Frida och Martin?</b>', s1: 'Idag är Fridas ålder 3 gånger Martins ålder.', s2: 'Om 9 år är Frida dubbelt så gammal som Martin.', options: NOG_ALTERNATIV, correct: 2, category: 'algebra' },
        { num: 25, text: `För talen <i>x</i>, <i>y</i> och <i>z</i> gäller att ${tex('x = y - z')}. <b>Vilket värde har talet <i>x</i>?</b>`, s1: 'Om talet 1 subtraheras från 2/5 av talet <i>x</i> får man talet 5.', s2: 'Talet <i>y</i> är dubbelt så stort som talet <i>z</i>.', options: NOG_ALTERNATIV, correct: 0, category: 'algebra' },
        { num: 26, text: 'Anton, Bengt, Carolina och Daniella tävlar i friidrott i de olika grenarna höjdhopp, längdhopp, stavhopp och tresteg. Var och en tävlar endast i en gren och ingen av dem tävlar i samma gren som någon av de andra tre. <b>I vilken gren tävlar var och en?</b>', s1: 'När det är tävling i höjdhopp, längdhopp och tresteg är det Anton, Bengt och Daniella som deltar.', s2: 'När det är tävling i stavhopp och tresteg är det Daniella och Carolina som deltar.', options: NOG_ALTERNATIV, correct: 4, category: 'logik' },
        { num: 27, text: 'I en låda finns det endast tre sorters bestick: knivar, gafflar och skedar. Sammanlagt finns det 23 bestick i lådan. <b>Hur många knivar finns det i lådan?</b>', s1: 'Det finns hälften så många skedar som knivar. Det finns två gafflar färre än vad det finns knivar.', s2: 'Sammanlagt finns det 13 gafflar och skedar.', options: NOG_ALTERNATIV, correct: 3, category: 'algebra' },
        { num: 28, text: 'En mätserie består av fem heltal. <b>Vad är mätseriens median?</b>', s1: 'Det största talet i mätserien är 43 och det minsta är 16.', s2: 'I mätserien förekommer talet 20 tre gånger.', options: NOG_ALTERNATIV, correct: 1, category: 'statistik' },
      ],
    },
    {
      id: 'dtk', name: 'DTK – Diagram, tabeller och kartor', shortName: 'DTK', type: 'dtk',
      questions: [
        { num: 29, text: '<b>För hur stor andel av födslarna 2001 blev faderskapet inte fastställt genom bekräftelse?</b>', options: ['44 procent', '46 procent', '54 procent', '56 procent'], correct: 1, diagram: B + 'p5-dtk1.webp', diagramAlt: DTK1, category: 'tabell' },
        { num: 30, text: '<b>Hur många faderskapsutredningar lades ner i genomsnitt per år från och med 2005 till och med 2010?</b>', options: ['679', '789', '867', '947'], correct: 1, diagram: B + 'p5-dtk1.webp', diagramAlt: DTK1, category: 'tabell' },
        { num: 31, text: '<b>Hur många födslar skedde under 2013?</b>', options: ['94 000', '113 000', '174 000', '211 000'], correct: 1, diagram: B + 'p5-dtk1.webp', diagramAlt: DTK1, category: 'tabell' },
        { num: 32, text: '<b>I vilken riktning löpte diket över Byängen?</b>', options: ['Nordväst–sydostlig riktning', 'Nordväst–sydvästlig riktning', 'Nordost–sydostlig riktning', 'Nordost–sydvästlig riktning'], correct: 0, diagram: B + 'p5-dtk2.webp', diagramAlt: DTK2, category: 'karta' },
        { num: 33, text: '<b>Vilket svarsförslag anger gårdar som hade egen åkermark i både rak nordlig och rak ostlig riktning från respektive gård räknat?</b>', options: ['Backegården och Klockargården', 'Backegården och Prästgården', 'Kungsgårdarna och Klockargården', 'Kungsgårdarna och Prästgården'], correct: 3, diagram: B + 'p5-dtk2.webp', diagramAlt: DTK2, category: 'karta' },
        { num: 34, text: '<b>Hur stor area hade den av Prästgårdens åkermarker som låg längst söderut?</b>', options: ['2 000 m<sup>2</sup>', '3 000 m<sup>2</sup>', '20 000 m<sup>2</sup>', '30 000 m<sup>2</sup>'], correct: 2, diagram: B + 'p5-dtk2.webp', diagramAlt: DTK2, category: 'karta' },
        { num: 35, text: 'Studera andelen som såg det som mycket troligt eller ganska troligt att en terroristattack skulle inträffa i Sverige under de närmaste fem åren. <b>Hur förändrades denna andel från 2009 till 2016?</b>', options: ['Andelen ökade med 100 procent.', 'Andelen ökade med 150 procent.', 'Andelen ökade med 230 procent.', 'Andelen ökade med 350 procent.'], correct: 1, diagram: B + 'p5-dtk3.webp', diagramAlt: DTK3, category: 'diagram' },
        { num: 36, text: `<b>Vilket år motsvarar cirkeldiagrammet?</b>${figur(B + 'p5-dtk36.webp', 'Ett cirkeldiagram med fem sektorer i samma mönster som stapeldiagrammet: en liten sektor mycket troligt, en sektor på ungefär en fjärdedel ganska troligt, en sektor på nästan hälften inte speciellt troligt, en sektor på ungefär en sjättedel inte alls troligt och en mycket smal sektor ingen åsikt.', 260)}`, options: ['2011', '2012', '2013', '2014'], correct: 3, diagram: B + 'p5-dtk3.webp', diagramAlt: DTK3, category: 'diagram' },
        { num: 37, text: '<b>Vilken av de redovisade andelarna minskade fyra år i rad jämfört med närmast föregående år?</b>', options: ['Andelen som svarat Mycket troligt.', 'Andelen som svarat Ganska troligt.', 'Andelen som svarat Inte speciellt troligt.', 'Andelen som svarat Inte alls troligt.'], correct: 2, diagram: B + 'p5-dtk3.webp', diagramAlt: DTK3, category: 'diagram' },
        { num: 38, text: '<b>Vilket av följande år översteg mängden zink 150 000 ton?</b>', options: ['1965', '1970', '1975', '1980'], correct: 3, diagram: B + 'p5-dtk4.webp', diagramAlt: DTK4, category: 'diagram' },
        { num: 39, text: '<b>Hur stor andel av den sammanlagda mängden utvunnen koppar, bly och zink 1995 utgjordes av koppar?</b>', options: ['1/6', '1/5', '1/4', '1/3'], correct: 2, diagram: B + 'p5-dtk4.webp', diagramAlt: DTK4, category: 'diagram' },
        { num: 40, text: 'Utgå från de utskrivna årtalen i diagrammet. <b>För hur många av dem gällde att metallernas mängder hade förhållandet zink > koppar > bly?</b>', options: ['4', '6', '8', '10'], correct: 0, diagram: B + 'p5-dtk4.webp', diagramAlt: DTK4, category: 'diagram' },
      ],
    },
  ],
};
