// Shared question data for HT 2021 quantitative subtests — Provpass 4 (Kvantitativ 2)
export const tex = (latex: string) => `<span class="tex">${latex}</span>`;

const stdKvaOpts = [
  'I är större än II',
  'II är större än I',
  'I är lika med II',
  'informationen är otillräcklig'
];

const stdNogOpts = [
  'i (1) men ej i (2)',
  'i (2) men ej i (1)',
  'i (1) tillsammans med (2)',
  'i (1) och (2) var för sig',
  'ej genom de båda påståendena'
];

export interface Question {
  num: number;
  text: string;
  options: string[];
  correct: number;
  category?: string;
  q1?: string;
  q2?: string;
  s1?: string;
  s2?: string;
  diagram?: string;
  diagramAlt?: string;
  rotate?: boolean;
}

export interface SubTest {
  id: string;
  name: string;
  shortName: string;
  type: 'standard' | 'kva' | 'nog' | 'dtk';
  timeMinutes: number;
  questions: Question[];
}

export const subTests: SubTest[] = [
  {
    id: 'xyz2', name: 'XYZ — Matematisk problemlösning', shortName: 'XYZ',
    type: 'standard', timeMinutes: 12,
    questions: [
      { num: 1, text: `${tex('2x + 9 = x - 7')}<br><br><b>Vilket värde har <i>x</i>?</b>`, options: ['−16', tex('-\\frac{2}{3}'), tex('\\frac{2}{3}'), '16'], correct: 0, category: 'algebra' },
      { num: 2, text: `<b>Vad är</b> ${tex('\\frac{1}{8} + \\frac{3}{4} + \\frac{1}{2}')} ?`, options: [tex('\\frac{13}{12}'), tex('\\frac{9}{8}'), tex('\\frac{11}{8}'), tex('\\frac{5}{14}')], correct: 2, category: 'aritmetik' },
      { num: 3, text: '<b>Vilket värde har <i>x</i>?</b><div style="text-align:center;margin:1.2rem 0;"><img src="/prov-xyz2-q3.png" alt="Figur med mått" data-fadein style="max-width:340px;" /></div>', options: [tex('\\frac{7}{3}'), '3', '3,5', tex('\\sqrt{13}')], correct: 1, category: 'geometri' },
      { num: 4, text: `Grafen till funktionen <i>f</i> är en rät linje som går genom origo, och ${tex('f(8) = -6')}.<br><br><b>Vilket svarsalternativ anger <i>f</i>(<i>x</i>)?</b>`, options: [tex('f(x) = 8x - 6'), tex('f(x) = -6x + 8'), tex('f(x) = -\\frac{4}{3}x'), tex('f(x) = -\\frac{3}{4}x')], correct: 3, category: 'funktioner' },
      { num: 5, text: '<b>Vilket är det ursprungliga priset på en vara om en rabatt på 8 procent gör varan 640 kronor billigare?</b>', options: ['5 120 kronor', '7 360 kronor', '7 680 kronor', '8 000 kronor'], correct: 3, category: 'procent' },
      { num: 6, text: 'Ida målar ett plank med konstant hastighet. Efter 4,5 timmar har hon målat 3/7 av planket. <b>Hur lång tid tar det för Ida att måla resten av planket?</b>', options: ['5 timmar', '5,5 timmar', '6 timmar', '6,5 timmar'], correct: 2, category: 'aritmetik' },
      { num: 7, text: `<div style="text-align:center;margin:0 0 1rem;"><img src="/prov-xyz2-q7.png" alt="Grafer f(x) och g(x)" data-fadein style="max-width:380px;" /></div>${tex('h(x) = f(x) + g(x)')}<br><br><b>Vilket svarsalternativ visar grafen till funktionen <i>h</i>, där <i>y</i> = <i>h</i>(<i>x</i>)?</b>`, options: ['<img src="/prov-xyz2-q7a.png" alt="A" style="max-width:140px;" />', '<img src="/prov-xyz2-q7b.png" alt="B" style="max-width:140px;" />', '<img src="/prov-xyz2-q7c.png" alt="C" style="max-width:140px;" />', '<img src="/prov-xyz2-q7d.png" alt="D" style="max-width:140px;" />'], correct: 3, category: 'funktioner' },
      { num: 8, text: `${tex('x = -3')}<br>${tex('y = -2')}<br>${tex('z = -1')}<br><br><b>Vilket svarsalternativ har det minsta värdet?</b>`, options: [tex('x^2 y z^2'), tex('x^2 y^2 z'), tex('x y^2 z^2'), tex('x y^3 z')], correct: 1, category: 'algebra' },
      { num: 9, text: '<b>Vilket svarsalternativ är med säkerhet lika med medelvärdet av de fem talen 14, 11, 13, <i>x</i> och 22?</b>', options: [tex('\\frac{15 + x}{2}'), tex('\\frac{60}{5} + x'), tex('60 + x'), tex('12 + \\frac{x}{5}')], correct: 3, category: 'aritmetik' },
      { num: 10, text: `<b>För vilket värde på <i>x</i> gäller att två tredjedelar av <i>x</i> är lika med</b> ${tex('\\frac{4}{7}')} ?`, options: [tex('x = \\frac{2}{3} \\cdot \\frac{4}{7}'), tex('x = \\frac{2}{3} \\cdot \\frac{7}{4}'), tex('x = \\frac{3}{2} \\cdot \\frac{4}{7}'), tex('x = \\frac{3}{2} \\cdot \\frac{7}{4}')], correct: 2, category: 'algebra' },
      { num: 11, text: `En cylinder har volymen 63 liter och diametern 4 dm. <b>Vilket svarsalternativ är närmast cylinderns höjd?</b>`, options: ['4 dm', '5 dm', '10 dm', '16 dm'], correct: 1, category: 'geometri' },
      { num: 12, text: `${tex('8 \\cdot 2^m = 4^0')}<br><br><b>Vad är <i>m</i>?</b>`, options: ['−3', '−2', '−1', '0'], correct: 0, category: 'algebra' },
    ]
  },
  {
    id: 'kva2', name: 'KVA — Kvantitativa jämförelser', shortName: 'KVA',
    type: 'kva', timeMinutes: 10,
    questions: [
      { num: 13, text: tex('3\\left(\\frac{2}{x} - \\frac{1}{6}\\right) = \\frac{3}{2}'), q1: '<i>x</i>', q2: tex('\\frac{1}{3}'), options: stdKvaOpts, correct: 0, category: 'algebra' },
      { num: 14, text: 'M är cirkelns medelpunkt.<div style="text-align:center;margin:1rem 0;"><img src="/prov-kva2-q14.png" alt="Cirkel med vinkel 250°" data-fadein style="max-width:300px;" /></div>', q1: '<i>v</i>', q2: '30°', options: stdKvaOpts, correct: 0, category: 'geometri' },
      { num: 15, text: 'En grupp med enbart kvinnor och män består av totalt 100 personer. Var och en av personerna är antingen högerhänt eller vänsterhänt. 75 % av kvinnorna är högerhänta. 12 kvinnor är vänsterhänta.', q1: 'Antalet kvinnor i gruppen', q2: 'Antalet män i gruppen', options: stdKvaOpts, correct: 1, category: 'procent' },
      { num: 16, text: '', q1: tex('\\sqrt{23}'), q2: tex('\\sqrt{9} + \\sqrt{5}'), options: stdKvaOpts, correct: 1, category: 'aritmetik' },
      { num: 17, text: `${tex('y > 0')}<br>${tex('\\frac{x}{y} = 5')}`, q1: '<i>y</i>', q2: '20 procent av <i>x</i>', options: stdKvaOpts, correct: 2, category: 'procent' },
      { num: 18, text: `Linjen L<sub>1</sub> har ekvationen ${tex('y = 3x - 1')}<br>Linjen L<sub>2</sub> har ekvationen ${tex('y = 5x + 3')}`, q1: 'x-koordinaten för skärningspunkten mellan L<sub>1</sub> och L<sub>2</sub>', q2: '0', options: stdKvaOpts, correct: 1, category: 'funktioner' },
      { num: 19, text: 'Linjerna L<sub>1</sub> och L<sub>2</sub> är parallella.<div style="text-align:center;margin:1rem 0;"><img src="/prov-kva2-q19.png" alt="Parallella linjer med trianglar" data-fadein style="max-width:340px;" /></div>', q1: 'Arean av triangeln ACE', q2: 'Arean av triangeln ABD', options: stdKvaOpts, correct: 3, category: 'geometri' },
      { num: 20, text: `<i>x</i> och <i>y</i> är två på varandra följande positiva heltal sådana att ${tex('y^2 - x^2 = 9')}.`, q1: '<i>y</i>', q2: '6', options: stdKvaOpts, correct: 1, category: 'algebra' },
      { num: 21, text: 'I Minnas smyckeskrin finns det halsband, armband och ringar. Armbanden är dubbelt så många som ringarna. Halsbanden är 3 fler än ringarna och 2 färre än armbanden.', q1: 'Antalet halsband i Minnas smyckeskrin', q2: '8', options: stdKvaOpts, correct: 2, category: 'algebra' },
      { num: 22, text: 'En mätserie består av tio mätvärden. Vart och ett av mätvärdena är ett heltal mellan 1 och 50. Mätseriens median är 25.', q1: 'Mätseriens median om det största mätvärdet tas bort', q2: '25', options: stdKvaOpts, correct: 3, category: 'aritmetik' },
    ]
  },
  {
    id: 'nog2', name: 'NOG — Kvantitativa resonemang', shortName: 'NOG',
    type: 'nog', timeMinutes: 10,
    questions: [
      { num: 23, text: '<b>Vad är medelvärdet av <i>x</i>, <i>y</i>, <i>z</i> och <i>w</i>?</b>', s1: 'Medelvärdet av <i>x</i> och <i>z</i> är 83.', s2: 'Medelvärdet av <i>y</i> och <i>w</i> är 91.', options: stdNogOpts, correct: 2, category: 'logik' },
      { num: 24, text: 'Tre koppar, en vit, en svart och en röd, är staplade på varandra. <b>Vilken färg har den översta koppen?</b>', s1: 'Den röda koppen är längre ner än den svarta koppen. Den vita koppen är längre ner än den röda koppen.', s2: 'Den vita och den svarta koppen är längst ifrån varandra.', options: stdNogOpts, correct: 0, category: 'logik' },
      { num: 25, text: 'En eftermiddag samlar Robin och Anton grankottar och tallkottar. De hittar sammanlagt 83 kottar. <b>Hur många tallkottar hittar Robin?</b>', s1: 'Robin och Anton hittar sammanlagt 59 tallkottar.', s2: 'Robin hittar totalt 33 kottar.', options: stdNogOpts, correct: 4, category: 'logik' },
      { num: 26, text: 'Aron har fyra bollar: en vit, en gul, en röd och en svart. <b>Vilken av bollarna studsar bäst?</b>', s1: 'Den gula bollen studsar bättre än både den svarta och den vita. Den röda bollen studsar bättre än den vita.', s2: 'Den vita bollen studsar sämre än den svarta. Den svarta bollen studsar sämre än den gula. Den röda bollen studsar bättre än den gula.', options: stdNogOpts, correct: 1, category: 'logik' },
      { num: 27, text: `<i>n</i> är ett heltal. <b>Är <i>n</i> ett jämnt tal?</b>`, s1: `${tex('3n + 2')} är ett jämnt tal.`, s2: `${tex('n^2 + 3')} är ett udda tal.`, options: stdNogOpts, correct: 3, category: 'logik' },
      { num: 28, text: `I en burk ligger 10 enfärgade kulor: 3 röda och 7 gröna. Fler kulor, endast röda och gröna, läggs i burken så att förhållandet mellan röda och gröna kulor blir 1:2. <b>Hur många röda kulor läggs i burken?</b>`, s1: '5 kulor läggs i burken.', s2: `Antalet röda kulor som läggs i burken är ${tex('\\frac{2}{3}')} av antalet gröna kulor som läggs i burken.`, options: stdNogOpts, correct: 3, category: 'logik' },
    ]
  },
  {
    id: 'dtk2', name: 'DTK — Diagram, tabeller och kartor', shortName: 'DTK',
    type: 'dtk', timeMinutes: 23,
    questions: [
      { num: 29, text: '<b>För hur många elever gällde att de fick betyget F i matematik eller att det saknades betygsunderlag i detta ämne?</b>', options: ['7 000', '8 000', '9 000', '10 000'], correct: 2, diagram: '/prov-dtk2-slutbetyg.png', diagramAlt: 'Slutbetyg i årskurs 9', rotate: false, category: 'tabell' },
      { num: 30, text: '<b>För vilket av de redovisade språken inom moderna språk (elevens val) var skillnaden mellan antalet flickor och antalet pojkar som minst?</b>', options: ['Tyska', 'Franska', 'Spanska', 'Övriga'], correct: 0, diagram: '/prov-dtk2-slutbetyg.png', diagramAlt: 'Slutbetyg i årskurs 9', rotate: false, category: 'tabell' },
      { num: 31, text: '<b>Hur stor var arealen skyddat fjäll 2009 jämfört med 100 år tidigare?</b>', options: ['Dubbelt så stor', 'Fyra gånger så stor', 'Åtta gånger så stor', 'Tolv gånger så stor'], correct: 2, diagram: '/prov-dtk2-skyddadnatur.png', diagramAlt: 'Skyddad natur', rotate: false, category: 'diagram' },
      { num: 32, text: 'Studera de nytillkomna arealerna skyddad natur under den redovisade perioden. <b>Vilket år var de fyra största naturtyperna rangordnade enligt nedan, där naturtypen med störst nytillkommen areal redovisas först?</b><br><br>Fjäll – Sötvatten – Skog – Myr', options: ['1998', '2000', '2001', '2002'], correct: 0, diagram: '/prov-dtk2-skyddadnatur.png', diagramAlt: 'Skyddad natur', rotate: false, category: 'diagram' },
      { num: 33, text: '<b>Hur stor areal skyddad natur 2004 utgjordes av sötvatten och hav?</b>', options: ['900 000 hektar', '1 600 000 hektar', '2 400 000 hektar', '5 900 000 hektar'], correct: 1, diagram: '/prov-dtk2-skyddadnatur.png', diagramAlt: 'Skyddad natur', rotate: false, category: 'diagram' },
      { num: 34, text: '<b>Hur långt skulle det vara att gå längs strandkanten ett varv runt Munkholmen, om man börjar och slutar där ön övergår i en smal sträng ut i Mälaren?</b>', options: ['1,3 km', '1,6 km', '1,9 km', '2,3 km'], correct: 2, diagram: '/prov-dtk2-vasteras.png', diagramAlt: 'Medeltida Västerås', rotate: false, category: 'karta' },
      { num: 35, text: '<b>Vart leder vägbeskrivningen?</b><br><br>Utgå från Helgeandshuset och följ vägen mellan västra och södra kvarteren 250 meter. Välj därefter den av vägarna i nordostlig riktning som ligger längst söderut och fortsätt efter denna väg 450 meter. Ta sedan vägen i nordnordostlig riktning och följ den 500 meter.', options: ['Backarna', 'Typpilskvarnen', 'S:a Ursulas kapell', 'S:t Olofs kapell'], correct: 3, diagram: '/prov-dtk2-vasteras.png', diagramAlt: 'Medeltida Västerås', rotate: false, category: 'karta' },
      { num: 36, text: '<b>Hur stort är det triangelformade område som avgränsas av Långgatan (östra), Tjuvagatan och vägen längs Gropen?</b>', options: ['40 000 m²', '55 000 m²', '65 000 m²', '80 000 m²'], correct: 0, diagram: '/prov-dtk2-vasteras.png', diagramAlt: 'Medeltida Västerås', rotate: false, category: 'karta' },
      { num: 37, text: 'Studera kommunernas kostnader för hemtjänst och hemsjukvård per beviljad person. <b>Vilken var den största skillnad som noterades mellan kommuner inom ett och samma län?</b>', options: ['150 000 kronor', '240 000 kronor', '315 000 kronor', '390 000 kronor'], correct: 2, diagram: '/prov-dtk2-vardomsorg.png', diagramAlt: 'Vård och omsorg för äldre', rotate: false, category: 'diagram' },
      { num: 38, text: '<b>Vilket län skilde sig mest från riket som helhet vad avser hemtjänstens och hemsjukvårdens genomsnittliga andel av kostnaden för vård och omsorg för äldre?</b>', options: ['Gotland', 'Jämtland', 'Västerbotten', 'Västra Götaland'], correct: 1, diagram: '/prov-dtk2-vardomsorg.png', diagramAlt: 'Vård och omsorg för äldre', rotate: false, category: 'diagram' },
      { num: 39, text: 'Avläs den största andel av kostnaden för vård och omsorg för äldre som en enskild kommun använde till hemtjänst och hemsjukvård. <b>Hur långt från riksgenomsnittet låg denna andel?</b>', options: ['10 procentenheter', '15 procentenheter', '20 procentenheter', '50 procentenheter'], correct: 2, diagram: '/prov-dtk2-vardomsorg.png', diagramAlt: 'Vård och omsorg för äldre', rotate: false, category: 'diagram' },
      { num: 40, text: '<b>På vilket av följande sätt utmärker sig Blekinge och Halland bland länen i det redovisade materialet?</b>', options: ['Mindre kostnadsandel till vård och omsorg för äldre.', 'Mindre kostnad för hemtjänst och hemsjukvård per beviljad person.', 'Större överensstämmelse mellan genomsnittet för länet och genomsnittet för riket.', 'Liten variation mellan länets kommuner.'], correct: 3, diagram: '/prov-dtk2-vardomsorg.png', diagramAlt: 'Vård och omsorg för äldre', rotate: false, category: 'diagram' },
    ]
  }
];
