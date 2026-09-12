// Högskoleprovet 20 oktober 2024, provpass 1 (kvantitativt).
// Uppgifterna är hämtade från UHR:s publicerade prov på studera.nu.
import { tex, figur, KVA_ALTERNATIV, NOG_ALTERNATIV } from '../types.js';
import type { ExtraPass } from '../types.js';

const B = '/extraprov/ht2024/';
const graf = (bokstav: string) => `<img src="${B}p1-xyz6${bokstav}.webp" alt="Graf ${bokstav.toUpperCase()}" data-fadein style="max-width:170px;width:100%;vertical-align:middle;" />`;

const DTK1 = 'Havsbottenfaunan vid Gotlands ostkust: stapeldiagram över artsammansättningen i procent åren 1920, 1977, 1982, 1987 och 2007';
const DTK2 = 'Elever i förskoleklass: tabeller över antalet elever och skolenheter per läsår 2006/07 till 2014/15, uppdelat efter ålder, huvudman och kön';
const DTK3 = 'Förändringar på arbetsmarknaden inom OECD: punktdiagram över förändringen 1995 till 2015 av andelen sysselsatta inom låg-, mellan- och högkvalificerade yrken i olika länder, procentenheter';
const DTK4 = 'Vårdbidrag: linjediagram över antalet barn i olika åldrar med vårdbidrag i december 2016, pojkar och flickor, samt ytdiagram över nybeviljade vårdbidrag 2003 till 2016 fördelade på diagnosgrupp';

export const pass: ExtraPass = {
  id: 'ht2024-1',
  tillfalle: 'ht2024',
  passNr: 1,
  kind: 'kvant',
  name: 'Provpass 1 (kvantitativt)',
  timeMinutes: 55,
  extendedMinutes: 80,
  normering: [[0, 0.0], [17, 0.1], [19, 0.2], [21, 0.3], [23, 0.4], [25, 0.5], [28, 0.6], [31, 0.7], [35, 0.8], [39, 0.9], [43, 1.0], [46, 1.1], [50, 1.2], [54, 1.3], [57, 1.4], [61, 1.5], [64, 1.6], [67, 1.7], [70, 1.8], [72, 1.9], [74, 2.0]],
  subTests: [
    {
      id: 'xyz', name: 'XYZ – Matematisk problemlösning', shortName: 'XYZ', type: 'xyz',
      questions: [
        { num: 1, text: `${tex('12x - 54 = 6x + 18')}<br><br><b>Vad är <i>x</i>?</b>`, options: ['−6', '−2', '4', '12'], correct: 3, category: 'algebra' },
        { num: 2, text: `${tex('\\sqrt{3}\\,x = 6')}<br><br><b>Vilket värde har <i>x</i>?</b>`, options: [tex('\\sqrt{2}'), tex('3\\sqrt{2}'), tex('2\\sqrt{3}'), '4'], correct: 2, category: 'algebra' },
        { num: 3, text: `${tex('x > 0')}<br><br><b>Hur många procent av <i>x</i> är ${tex('\\frac{x}{15} + \\frac{x}{30}')}?</b>`, options: ['4,5', '10', '15', '22,5'], correct: 1, category: 'procent' },
        { num: 4, text: `${figur(B + 'p1-xyz4.webp', 'Tre linjer som skär varandra i samma punkt, med vinklarna 3x + 30°, x + 10° och 2x + 20° markerade', 300)}Tre linjer skär varandra i samma punkt. <b>Vad är <i>x</i>?</b>`, options: ['15°', '20°', '25°', '30°'], correct: 1, category: 'geometri' },
        { num: 5, text: '<b>Vilket svarsalternativ är korrekt?</b>', options: [tex('\\frac{3}{4} < \\frac{7}{8} < \\frac{25}{32}'), tex('\\frac{3}{4} < \\frac{13}{16} < \\frac{25}{32}'), tex('\\frac{3}{4} < \\frac{7}{8} < \\frac{13}{16}'), tex('\\frac{3}{4} < \\frac{25}{32} < \\frac{13}{16}')], correct: 3, category: 'aritmetik' },
        { num: 6, text: `${tex('f(x) = 2x - 4')}<br>${tex('g(x) = -\\frac{1}{2} \\cdot f(x)')}<br><br><b>Vilket svarsalternativ visar grafen till funktionen <i>g</i>?</b>`, options: [graf('a'), graf('b'), graf('c'), graf('d')], correct: 3, category: 'funktioner' },
        { num: 7, text: `En kvadrat har sidan <i>s</i> cm och diagonalen <i>d</i> cm. <b>Om ${tex('2s^2 + d^2 = 64')}, vilket värde har då <i>s</i>?</b>`, options: ['2', '4', '8', '16'], correct: 1, category: 'geometri' },
        { num: 8, text: `<b>Vilket svarsalternativ motsvarar ${tex('\\frac{3(x + y) - 5(y - x)}{2}')}?</b>`, options: [tex('x - 2y'), tex('4x - 4y'), tex('4x - y'), tex('8x - 2y')], correct: 2, category: 'algebra' },
        { num: 9, text: `${tex('x - y = 7')}<br><br><b>Vilket av svarsalternativen är med säkerhet korrekt?</b>`, options: ['Om <i>x</i> är negativt, så är <i>y</i> negativt.', 'Om <i>x</i> är positivt, så är <i>y</i> positivt.', 'Om <i>y</i> är negativt, så är <i>x</i> positivt.', 'Om <i>y</i> är positivt, så är <i>x</i> negativt.'], correct: 0, category: 'algebra' },
        { num: 10, text: `Punkten (<i>a</i>, 2<i>a</i>) ligger på linjen som ges av ekvationen ${tex('y = 3x - 60')}. <b>Vilket värde har <i>a</i>?</b>`, options: ['12', '15', '30', '60'], correct: 3, category: 'funktioner' },
        { num: 11, text: 'Ritva har sex bollar som hon fördelar slumpmässigt i tre tomma lådor. <b>Hur stor är sannolikheten att exakt en låda innehåller ett udda antal bollar när Ritva är klar?</b>', options: ['0', tex('\\frac{1}{3}'), tex('\\frac{2}{3}'), '1'], correct: 0, category: 'sannolikhet' },
        { num: 12, text: `<b>Vilken av följande produkter är lika med ${tex('8^x')}, för något heltal <i>x</i>?</b>`, options: ['16 · 16', '16 · 32', '32 · 32', '32 · 64'], correct: 1, category: 'aritmetik' },
      ],
    },
    {
      id: 'kva', name: 'KVA – Kvantitativa jämförelser', shortName: 'KVA', type: 'kva',
      questions: [
        { num: 13, text: '', q1: tex('\\sqrt{5} + 1'), q2: tex('\\sqrt{6}'), options: KVA_ALTERNATIV, correct: 0, category: 'aritmetik' },
        { num: 14, text: tex('\\frac{x}{4} + \\frac{1}{2} = \\frac{5}{8}'), q1: '<i>x</i>', q2: '2', options: KVA_ALTERNATIV, correct: 1, category: 'algebra' },
        { num: 15, text: tex('0 < x < y'), q1: tex('x + 2y'), q2: tex('2x + y'), options: KVA_ALTERNATIV, correct: 0, category: 'algebra' },
        { num: 16, text: '', q1: tex('\\left(\\frac{3}{5} - \\frac{4}{7}\\right) \\cdot 32'), q2: '1', options: KVA_ALTERNATIV, correct: 1, category: 'aritmetik' },
        { num: 17, text: 'Kalle har <i>x</i> kulor och Pelle har <i>y</i> kulor. Olle har inga kulor.<br>Kalle ger hälften av sina kulor till Olle. Pelle ger också hälften av sina kulor till Olle.', q1: 'Det sammanlagda antalet kulor som Olle får av Kalle och Pelle', q2: 'Medelvärdet av antalet kulor som Kalle och Pelle hade innan de gav kulor till Olle', options: KVA_ALTERNATIV, correct: 2, category: 'algebra' },
        { num: 18, text: figur(B + 'p1-kva18.webp', 'Fyrhörning med hörnen D, A, B och C, räta vinklar vid A och B, samt diagonalen DC', 320), q1: tex('(AD)^2 + (AC)^2'), q2: tex('(BD)^2 + (BC)^2'), options: KVA_ALTERNATIV, correct: 2, category: 'geometri' },
        { num: 19, text: `Linjen L ges av ekvationen ${tex('y = -\\frac{x}{2} + 4')}.`, q1: '<i>x</i>-koordinaten för den punkt där L skär <i>x</i>-axeln', q2: '<i>y</i>-koordinaten för den punkt där L skär <i>y</i>-axeln', options: KVA_ALTERNATIV, correct: 0, category: 'funktioner' },
        { num: 20, text: 'En mätserie består av sex positiva heltal. De fyra största mätvärdena är större än 12. De fyra minsta mätvärdena är mindre än 15.', q1: 'Mätseriens median', q2: '13,5', options: KVA_ALTERNATIV, correct: 3, category: 'statistik' },
        { num: 21, text: `Fyrhörningen ABCD är en rektangel där AB är diametern i en halvcirkel och AD = <i>r</i>/2, där <i>r</i> är cirkelns radie.${figur(B + 'p1-kva21.webp', 'Halvcirkel med diametern AB och rektangeln ABCD inuti, där sidan AD är kortare än radien', 360)}`, q1: 'Halvcirkelns area', q2: 'Rektangelns area multiplicerad med 1,5', options: KVA_ALTERNATIV, correct: 0, category: 'geometri' },
        { num: 22, text: tex('\\frac{x}{y} = -1'), q1: '<i>x</i> − <i>y</i>', q2: '0', options: KVA_ALTERNATIV, correct: 3, category: 'algebra' },
      ],
    },
    {
      id: 'nog', name: 'NOG – Kvantitativa resonemang', shortName: 'NOG', type: 'nog',
      questions: [
        { num: 23, text: 'Eskil samlar på kylskåpsmagneter. <b>Hur många kylskåpsmagneter har Eskil?</b>', s1: 'Om Eskil fick 25 procent fler kylskåpsmagneter, så skulle han ha 100 kylskåpsmagneter.', s2: 'En femtedel av Eskils samling utgör 20 procent av hans kylskåpsmagneter.', options: NOG_ALTERNATIV, correct: 0, category: 'procent' },
        { num: 24, text: 'Pernilla har bakat sammanlagt 80 bullar: kanelbullar och vaniljbullar. Hon har lagt några bullar i skafferiet och resten av bullarna i frysen. <b>Hur många vaniljbullar har Pernilla lagt i frysen?</b>', s1: 'Pernilla har lagt 20 kanelbullar och 10 vaniljbullar i skafferiet.', s2: 'Tre fjärdedelar av bullarna som Pernilla har bakat är kanelbullar.', options: NOG_ALTERNATIV, correct: 2, category: 'aritmetik' },
        { num: 25, text: `${figur(B + 'p1-nog25.webp', 'Triangel ABC med vinkeln u vid A, v vid B och w vid C', 300)}ABC är en triangel. <b>Hur stor är vinkeln <i>u</i>?</b>`, s1: tex('u + v = 93°'), s2: tex('u + w = 123°'), options: NOG_ALTERNATIV, correct: 2, category: 'geometri' },
        { num: 26, text: 'En grupp består av fyra flickor och en pojke. Deras medellängd är 172 cm. <b>Hur lång är pojken?</b>', s1: 'Flickornas medellängd är 170 cm.', s2: 'Pojken är 5 cm längre än den längsta flickan.', options: NOG_ALTERNATIV, correct: 0, category: 'statistik' },
        { num: 27, text: 'Tre termosar – en vit, en svart och en grå – står på ett bord. En av termosarna innehåller kaffe, en innehåller te och en innehåller varm choklad. <b>Vilken dryck finns i den vita termosen?</b>', s1: 'Kaffet finns i den svarta eller den vita termosen. Den varma chokladen finns inte i den vita termosen.', s2: 'Kaffet finns inte i den svarta termosen. I den grå termosen finns det te.', options: NOG_ALTERNATIV, correct: 1, category: 'logik' },
        { num: 28, text: '<b>Vilket är det positiva heltalet <i>x</i>?</b>', s1: tex('50 < x < 75'), s2: '<i>x</i> är jämnt delbart med 8, men inte med 3.', options: NOG_ALTERNATIV, correct: 4, category: 'aritmetik' },
      ],
    },
    {
      id: 'dtk', name: 'DTK – Diagram, tabeller och kartor', shortName: 'DTK', type: 'dtk',
      questions: [
        { num: 29, text: '<b>Hur stor andel av havsbottenfaunan utgjorde fåborstmasken 1982?</b>', options: ['1/3', '1/4', '1/5', '2/5'], correct: 0, diagram: B + 'p1-dtk1.webp', diagramAlt: DTK1, category: 'diagram' },
        { num: 30, text: '<b>Vilket år var skillnaden som minst, i procentenheter räknat, mellan arten som utgjorde störst andel och arten som utgjorde näst störst andel av havsbottenfaunan?</b>', options: ['1920', '1982', '1987', '2007'], correct: 3, diagram: B + 'p1-dtk1.webp', diagramAlt: DTK1, category: 'diagram' },
        { num: 31, text: 'Studera förändringarna mellan de redovisade åren vad gäller förekomsten av sandborstmask. <b>Vilket svarsförslag beskriver bäst hur artens andel av havsbottenfaunan förändrades mellan de olika åren?</b>', options: ['Mellan 1920 och 1977 ökade andelen med 60 procentenheter.', 'Mellan 1977 och 1982 minskade andelen med 45 procentenheter.', 'Mellan 1982 och 1987 minskade andelen med 20 procentenheter.', 'Mellan 1987 och 2007 ökade andelen med 35 procentenheter.'], correct: 3, diagram: B + 'p1-dtk1.webp', diagramAlt: DTK1, category: 'diagram' },
        { num: 32, text: 'Studera de olika inriktningarna inom förskoleklasser som drevs i fristående regi läsåret 2014/15. <b>För vilken inriktning gällde att drygt hälften av eleverna var 6 år och knappt hälften av dem var 5 år?</b>', options: ['Allmän', 'Konfessionell', 'Waldorf', 'Internationell'], correct: 3, diagram: B + 'p1-dtk2.webp', diagramAlt: DTK2, category: 'tabell' },
        { num: 33, text: '<b>Hur stor andel av eleverna i de förskoleklasser som drevs i statlig regi var pojkar?</b>', options: ['42 procent', '52 procent', '72 procent', '82 procent'], correct: 2, diagram: B + 'p1-dtk2.webp', diagramAlt: DTK2, category: 'tabell' },
        { num: 34, text: 'Läsåret 2007/08 var det genomsnittliga antalet elever i förskoleklass 24 per skolenhet. <b>Hur många fler var eleverna per skolenhet läsåret 2013/14?</b>', options: ['2', '4', '6', '8'], correct: 2, diagram: B + 'p1-dtk2.webp', diagramAlt: DTK2, category: 'tabell' },
        { num: 35, text: '<b>I vilket land förändrades andelen sysselsatta inom lågkvalificerade yrken minst?</b>', options: ['Schweiz', 'Irland', 'Japan', 'Ungern'], correct: 0, diagram: B + 'p1-dtk3.webp', diagramAlt: DTK3, category: 'diagram' },
        { num: 36, text: '<b>För hur många av länderna gällde både att andelen sysselsatta inom högkvalificerade yrken hade förändrats mindre än 5 procentenheter och att andelen sysselsatta inom mellankvalificerade yrken hade förändrats mindre än 10 procentenheter?</b>', options: ['4', '5', '6', '7'], correct: 1, diagram: B + 'p1-dtk3.webp', diagramAlt: DTK3, category: 'diagram' },
        { num: 37, text: '<b>Vilket svarsförslag anger de länder som var mest lika OECD-genomsnittet vad gäller förändringen av andelen sysselsatta inom mellan-, låg- respektive högkvalificerade yrken?</b>', options: ['Mellan: Finland, låg: Tyskland, hög: Nederländerna', 'Mellan: Finland, låg: Kanada, hög: Ungern', 'Mellan: Italien, låg: Tyskland, hög: Ungern', 'Mellan: Italien, låg: Kanada, hög: Nederländerna'], correct: 1, diagram: B + 'p1-dtk3.webp', diagramAlt: DTK3, category: 'diagram' },
        { num: 38, text: 'Studera de nybeviljade vårdbidragen för flickor med avseende på fördelningen på diagnosgrupper. <b>Vilket år uppgick den andel som fått vårdbidrag på grund av psykiska sjukdomar för första gången till 50 procent?</b>', options: ['2009', '2010', '2011', '2012'], correct: 2, diagram: B + 'p1-dtk4.webp', diagramAlt: DTK4, category: 'diagram' },
        { num: 39, text: '<b>Sammanlagt hur många av vårdbidragen som betalades ut i december 2016 gällde barn i åldrarna 5–10 år?</b>', options: ['14 000', '20 000', '24 000', '30 000'], correct: 1, diagram: B + 'p1-dtk4.webp', diagramAlt: DTK4, category: 'diagram' },
        { num: 40, text: '<b>Vilken diagnosgrupp stod för en tiondel av de nybeviljade vårdbidragen till pojkar 2008?</b>', options: ['Endokrina systemets sjukdomar m.m.', 'Sjukdomar i nervsystemet', 'Medfödda missbildningar m.m.', 'Övriga sjukdomar'], correct: 0, diagram: B + 'p1-dtk4.webp', diagramAlt: DTK4, category: 'diagram' },
      ],
    },
  ],
};
