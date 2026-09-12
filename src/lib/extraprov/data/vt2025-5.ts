// Högskoleprovet 5 april 2025, provpass 5 (kvantitativt).
// Uppgifterna är hämtade från UHR:s publicerade prov på studera.nu.
import { tex, figur, KVA_ALTERNATIV, NOG_ALTERNATIV } from '../types.js';
import type { ExtraPass } from '../types.js';

const B = '/extraprov/vt2025/';
const triangel = (bokstav: string) => `<img src="${B}p5-xyz9${bokstav}.webp" alt="Triangel ${bokstav.toUpperCase()}" data-fadein style="max-width:200px;width:100%;vertical-align:middle;" />`;

export const pass: ExtraPass = {
  id: 'vt2025-5',
  tillfalle: 'vt2025',
  passNr: 5,
  kind: 'kvant',
  name: 'Provpass 5 (kvantitativt)',
  timeMinutes: 55,
  extendedMinutes: 80,
  normering: [[0, 0.0], [18, 0.1], [21, 0.2], [23, 0.3], [25, 0.4], [28, 0.5], [31, 0.6], [35, 0.7], [38, 0.8], [41, 0.9], [45, 1.0], [48, 1.1], [52, 1.2], [56, 1.3], [60, 1.4], [63, 1.5], [66, 1.6], [69, 1.7], [71, 1.8], [73, 1.9], [75, 2.0]],
  subTests: [
    {
      id: 'xyz', name: 'XYZ – Matematisk problemlösning', shortName: 'XYZ', type: 'xyz',
      questions: [
        { num: 1, text: `<b>Vilket svarsalternativ motsvarar ${tex('(x + 4)(2x + 8)')}?</b>`, options: [tex('2(x + 4)'), tex('3(x + 4)'), tex('2(x + 4)^2'), tex('2(x^2 + 16)')], correct: 2, category: 'algebra' },
        { num: 2, text: '<i>a</i> är ett positivt jämnt heltal.<br><i>b</i> är ett positivt udda heltal.<br><br><b>Vilket svarsalternativ är ett jämnt heltal?</b>', options: [tex('ab'), tex('a - b'), tex('a + b'), tex('ab + b^2')], correct: 0, category: 'aritmetik' },
        { num: 3, text: 'Medelvärdet av de fyra talen 2<i>x</i>, 3<i>x</i>, 5<i>x</i> och 8<i>x</i> är 45. <b>Vad är <i>x</i>?</b>', options: ['5', '10', '15', '20'], correct: 1, category: 'statistik' },
        { num: 4, text: `<b>Vad är 4 % av ${tex('\\frac{5}{4}')}?</b>`, options: ['0,01', '0,02', '0,05', '0,06'], correct: 2, category: 'procent' },
        { num: 5, text: `${tex('f(x) = -4x + 7')}<br><br><b>För vilket värde på <i>x</i> gäller att ${tex('f(x) = -9')}?</b>`, options: ['−4', tex('-\\frac{1}{2}'), tex('\\frac{1}{2}'), '4'], correct: 3, category: 'funktioner' },
        { num: 6, text: `<b>Hur stor är arean av sexhörningen ABCDEF?</b>${figur(B + 'p5-xyz6.webp', 'Sexhörning ABCDEF: en rektangel ABCF med sidorna 10 och 7 cm med ett parallelltrapets ovanpå med toppsidan ED = 6 cm och höjden 5 cm', 240)}`, options: ['100 cm²', '105 cm²', '110 cm²', '115 cm²'], correct: 2, category: 'geometri' },
        { num: 7, text: 'Under en rea i en butik sänktes det ordinarie priset på en vara med 30 procent. En vecka senare gav butiken 50 procent rabatt på reapriset. Varan kostade därefter 70 kronor. <b>Vilket var varans ordinarie pris?</b>', options: ['175 kronor', '182 kronor', '200 kronor', '350 kronor'], correct: 2, category: 'procent' },
        { num: 8, text: `${tex('f(x) = 2x + 3')}<br><br><b>Vilket svarsalternativ motsvarar ${tex('f(2x + 3)')}?</b>`, options: ['1', tex('2x + 6'), tex('4x + 6'), tex('4x + 9')], correct: 3, category: 'funktioner' },
        { num: 9, text: '<b>Vilket svarsalternativ visar en rätvinklig triangel?</b> (mått i cm)', options: [triangel('a'), triangel('b'), triangel('c'), triangel('d')], correct: 0, category: 'geometri' },
        { num: 10, text: 'Erik kör i 30 minuter med medelhastigheten 30 km/h och därefter i 60 minuter med medelhastigheten 60 km/h. <b>Vilken är hans medelhastighet för hela resan?</b>', options: ['37,5 km/h', '45 km/h', '50 km/h', '52,5 km/h'], correct: 2, category: 'aritmetik' },
        { num: 11, text: 'Summan av <i>x</i> och <i>y</i> är 100, och <i>y</i> är 200 mer än <i>x</i>. <b>Vad är <i>x</i>?</b>', options: ['−100', '−50', '100', '150'], correct: 1, category: 'algebra' },
        { num: 12, text: `<b>Vilket svarsalternativ är lika med ${tex('\\sqrt{\\sqrt{9} \\cdot \\sqrt{36}}')}?</b>`, options: ['3', tex('3\\sqrt{2}'), '6', tex('3\\sqrt{6}')], correct: 1, category: 'aritmetik' },
      ],
    },
    {
      id: 'kva', name: 'KVA – Kvantitativa jämförelser', shortName: 'KVA', type: 'kva',
      questions: [
        { num: 13, text: `${tex('x > 0')}<br>${tex('y > 0')}`, q1: tex('(x - y)^2'), q2: tex('(x + y)^2'), options: KVA_ALTERNATIV, correct: 1, category: 'algebra' },
        { num: 14, text: '<i>x</i> är ett positivt heltal.', q1: tex('\\frac{4 \\cdot 6 \\cdot 8}{8 \\cdot x}'), q2: tex('\\frac{2 \\cdot 3 \\cdot 4}{x}'), options: KVA_ALTERNATIV, correct: 2, category: 'aritmetik' },
        { num: 15, text: '', q1: 'Längden av hypotenusan i en rätvinklig triangel där kateterna är 6 cm respektive 8 cm', q2: 'Längden av hypotenusan i en rätvinklig triangel där båda kateterna är 7 cm', options: KVA_ALTERNATIV, correct: 0, category: 'geometri' },
        { num: 16, text: '', q1: tex('\\sqrt{10^8}'), q2: tex('10^{\\sqrt{8}}'), options: KVA_ALTERNATIV, correct: 0, category: 'aritmetik' },
        { num: 17, text: 'I det tresiffriga talet <i>x</i> är entalssiffran dubbelt så stor som tiotalssiffran och fyra gånger så stor som hundratalssiffran.', q1: 'Entalssiffran i talet <i>x</i>', q2: '6', options: KVA_ALTERNATIV, correct: 3, category: 'aritmetik' },
        { num: 18, text: '', q1: `Den positiva lösningen till ekvationen ${tex('(x - 3)(x + 2) = 0')}`, q2: '2', options: KVA_ALTERNATIV, correct: 0, category: 'algebra' },
        { num: 19, text: `${figur(B + 'p5-kva19.webp', 'Rektangel ABCD med sträckorna AQ och PC, vinkeln v vid Q på sidan DC och vinkeln w vid P på sidan AB', 320)}Fyrhörningen ABCD är en rektangel. Sträckan DQ är längre än sträckan BP.`, q1: '<i>v</i>', q2: '<i>w</i>', options: KVA_ALTERNATIV, correct: 1, category: 'geometri' },
        { num: 20, text: tex('2x + 1 = 2\\left(x + \\frac{1}{2}\\right)'), q1: '<i>x</i>', q2: tex('-\\frac{1}{2}'), options: KVA_ALTERNATIV, correct: 3, category: 'algebra' },
        { num: 21, text: `${tex('y \\neq 0')}<br><br>För räkneoperationen ◇ gäller att ${tex('x \\diamond y = \\frac{x}{y}')}.`, q1: tex('(1 \\diamond 2) \\diamond 3'), q2: tex('\\frac{1}{3}'), options: KVA_ALTERNATIV, correct: 1, category: 'aritmetik' },
        { num: 22, text: 'Sidorna på ett mynt benämns krona och klave. Myntet kastas slumpmässigt tre gånger.', q1: 'Sannolikheten att få klave minst en gång', q2: tex('\\frac{2}{3}'), options: KVA_ALTERNATIV, correct: 0, category: 'sannolikhet' },
      ],
    },
    {
      id: 'nog', name: 'NOG – Kvantitativa resonemang', shortName: 'NOG', type: 'nog',
      questions: [
        { num: 23, text: 'På ett fat ligger det melonskivor och vindruvor. <b>Hur många fler vindruvor än melonskivor ligger det på fatet?</b>', s1: 'Det ligger dubbelt så många vindruvor som melonskivor på fatet.', s2: 'Det ligger sammanlagt 57 melonskivor och vindruvor på fatet.', options: NOG_ALTERNATIV, correct: 2, category: 'algebra' },
        { num: 24, text: 'Alexandra, Björn och Charlotte befinner sig på olika platser i en lägenhet. En av dem är i hallen, en är i köket och en är i vardagsrummet. <b>Var är Charlotte?</b>', s1: 'Alexandra är i köket. Björn är inte i hallen.', s2: 'Charlotte är inte i köket. Björn är i vardagsrummet.', options: NOG_ALTERNATIV, correct: 3, category: 'logik' },
        { num: 25, text: '<i>x</i> är ett positivt heltal. <b>Vilket värde har <i>x</i>?</b>', s1: 'Skillnaden mellan 50 % av <i>x</i> och 30 % av <i>x</i> är 22.', s2: '<i>x</i> är jämnt delbart med både 10 och 11.', options: NOG_ALTERNATIV, correct: 0, category: 'procent' },
        { num: 26, text: 'På ett barnkalas med 27 barn äter varje barn varsin korv med bröd. Till korven finns det senap och ketchup som valfria tillbehör. <b>Hur många barn har ketchup på korven?</b>', s1: 'Av de barn som har senap på korven är det 60 procent som också har ketchup på korven. 1/9 av barnen har både senap och ketchup på korven.', s2: '5 av barnen har senap på korven. 15 av barnen har varken senap eller ketchup på korven.', options: NOG_ALTERNATIV, correct: 2, category: 'logik' },
        { num: 27, text: `${figur(B + 'p5-nog27.webp', 'Triangel ABC med vinkeln x vid A, vinkeln z vid C och den yttre vinkeln y vid B', 300)}<b>Är AB &gt; BC?</b>`, s1: tex('x = z = 60°'), s2: tex('x = 180° - y'), options: NOG_ALTERNATIV, correct: 0, category: 'geometri' },
        { num: 28, text: 'Två tal togs bort från mätserien −10, −8, 0, 6, 7. <b>Vilka två tal togs bort?</b>', s1: 'Medianen förblev densamma.', s2: 'Medelvärdet ändrades.', options: NOG_ALTERNATIV, correct: 4, category: 'statistik' },
      ],
    },
    {
      id: 'dtk', name: 'DTK – Diagram, tabeller och kartor', shortName: 'DTK', type: 'dtk',
      questions: [
        { num: 29, text: '<b>Hur många kvinnor var anställda inom yrket övriga maskinoperatörer och montörer?</b>', options: ['3 335', '5 303', '6 939', '7 429'], correct: 3, diagram: B + 'p5-dtk1.webp', diagramAlt: 'De vanligaste yrkena bland kvinnor och män 2011: tabeller över antal anställda kvinnor respektive män och totalt per yrke', category: 'tabell' },
        { num: 30, text: '<b>Inom vilket av följande yrken var andelen anställda män som störst?</b>', options: ['Vårdbiträden, personliga assistenter m.fl.', 'Försäljare, fackhandel', 'Övrig kontorspersonal', 'Kockar och kokerskor'], correct: 3, diagram: B + 'p5-dtk1.webp', diagramAlt: 'De vanligaste yrkena bland kvinnor och män 2011: tabeller över antal anställda kvinnor respektive män och totalt per yrke', category: 'tabell' },
        { num: 31, text: '<b>Hur stor var andelen anställda kvinnor inom yrket datatekniker?</b>', options: ['1/3', '1/4', '1/5', '1/6'], correct: 2, diagram: B + 'p5-dtk1.webp', diagramAlt: 'De vanligaste yrkena bland kvinnor och män 2011: tabeller över antal anställda kvinnor respektive män och totalt per yrke', category: 'tabell' },
        { num: 32, text: 'Åldersgruppen 5–9 år bestod 2017 av ungefär 610 000 invånare. <b>Hur många i åldersgruppen smittades av salmonella i Sverige respektive utomlands?</b>', options: ['15 respektive 25', '30 respektive 45', '45 respektive 75', '75 respektive 125'], correct: 2, diagram: B + 'p5-dtk2.webp', diagramAlt: 'Svenskar smittade av salmonella: stapeldiagram över antalet fall per 100 000 invånare i olika åldersgrupper 2017, i Sverige respektive utomlands', category: 'diagram' },
        { num: 33, text: 'Av alla rapporterade salmonellafall 2017 avsåg 35 procent smittade i Sverige och 65 procent smittade utomlands. <b>Vilken av följande åldersgrupper ligger närmast detta förhållande?</b>', options: ['25–29 år', '30–39 år', '40–49 år', '50–59 år'], correct: 0, diagram: B + 'p5-dtk2.webp', diagramAlt: 'Svenskar smittade av salmonella: stapeldiagram över antalet fall per 100 000 invånare i olika åldersgrupper 2017, i Sverige respektive utomlands', category: 'diagram' },
        { num: 34, text: '<b>Vilken information är, tillsammans med den som ges i diagrammet, tillräcklig för att avgöra hur många invånare som smittades av salmonella utomlands 2017?</b>', options: ['Antalet invånare som reste utomlands 2017.', 'Antalet invånare som smittades av salmonella i Sverige 2017.', 'Antalet invånare i var och en av de redovisade åldersgrupperna 2017.', 'Antalet invånare i någon av de redovisade åldersgrupperna som smittades av salmonella utomlands 2017.'], correct: 2, diagram: B + 'p5-dtk2.webp', diagramAlt: 'Svenskar smittade av salmonella: stapeldiagram över antalet fall per 100 000 invånare i olika åldersgrupper 2017, i Sverige respektive utomlands', category: 'diagram' },
        { num: 35, text: '<b>I vilken riktning från Norrbys äldsta kända bytomt ligger Edebys äldsta kända bytomt?</b>', options: ['Nordvästlig riktning', 'Nordostlig riktning', 'Sydvästlig riktning', 'Sydostlig riktning'], correct: 3, diagram: B + 'p5-dtk3.webp', diagramAlt: 'Arkeologiska undersökningar i Lovö socken: karta över Lovön med bytomter, gravfält, stigar, ägogränser och fornlämningar', category: 'karta' },
        { num: 36, text: '<b>Hur lång är den kortaste stigen som går från fornborgen till kyrkan?</b>', options: ['2,0 km', '2,5 km', '3,0 km', '3,5 km'], correct: 1, diagram: B + 'p5-dtk3.webp', diagramAlt: 'Arkeologiska undersökningar i Lovö socken: karta över Lovön med bytomter, gravfält, stigar, ägogränser och fornlämningar', category: 'karta' },
        { num: 37, text: '<b>Hur stor area har det område på Lovön som ligger innanför Edebys gårdsägogräns?</b>', options: ['2,4 km²', '3,9 km²', '4,9 km²', '5,4 km²'], correct: 0, diagram: B + 'p5-dtk3.webp', diagramAlt: 'Arkeologiska undersökningar i Lovö socken: karta över Lovön med bytomter, gravfält, stigar, ägogränser och fornlämningar', category: 'karta' },
        { num: 38, text: '<b>Vilket svarsförslag anger förhållandet mellan antalet mätvärden som är högre än referensvärdet och antalet mätvärden som är lägre än referensvärdet under hela den redovisade perioden?</b>', options: ['1:2', '2:1', '1:3', '3:1'], correct: 0, diagram: B + 'p5-dtk4.webp', diagramAlt: 'Ozonskiktets tjocklek över Sverige: linjediagram över årsmedelvärdet 1988 till 2018 i Dobsonenheter samt referensvärdet', category: 'diagram' },
        { num: 39, text: '<b>Vad var medelvärdet för ozonskiktets tjocklek från och med 1995 till och med 2000?</b>', options: ['324 DU', '327 DU', '330 DU', '333 DU'], correct: 1, diagram: B + 'p5-dtk4.webp', diagramAlt: 'Ozonskiktets tjocklek över Sverige: linjediagram över årsmedelvärdet 1988 till 2018 i Dobsonenheter samt referensvärdet', category: 'diagram' },
        { num: 40, text: '<b>Mellan vilka två på varandra följande år var den procentuella förändringen av ozonskiktets tjocklek störst?</b>', options: ['1991 och 1992', '1993 och 1994', '1997 och 1998', '2010 och 2011'], correct: 1, diagram: B + 'p5-dtk4.webp', diagramAlt: 'Ozonskiktets tjocklek över Sverige: linjediagram över årsmedelvärdet 1988 till 2018 i Dobsonenheter samt referensvärdet', category: 'diagram' },
      ],
    },
  ],
};
