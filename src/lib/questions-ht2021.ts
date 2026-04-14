// Shared question data for HT 2021 quantitative subtests
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
  videoId?: string;
  category?: string;
  // KVA fields
  q1?: string;
  q2?: string;
  // NOG fields
  s1?: string;
  s2?: string;
  // DTK fields
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
    id: 'xyz', name: 'XYZ — Matematisk problemlösning', shortName: 'XYZ',
    type: 'standard', timeMinutes: 12,
    questions: [
      { num: 1, text: `<b>Vilket värde har <i>x</i></b> om ${tex('\\frac{1}{2} + \\frac{1}{3} + x = 1')}?`, options: [tex('\\frac{1}{6}'), tex('\\frac{1}{5}'), tex('\\frac{1}{4}'), tex('\\frac{1}{3}')], correct: 0, category: 'algebra', videoId: '1182714952' },
      { num: 2, text: 'En blombukett består av endast vita och röda rosor. Antalet röda rosor är tre gånger så stort som antalet vita rosor. <b>Vilket svarsalternativ kan motsvara antalet rosor i blombuketten?</b>', options: ['25', '26', '27', '28'], correct: 3, category: 'aritmetik', videoId: '1182715631' },
      { num: 3, text: '<b>Vad är</b> 5 + 3 · 5 − 4 + 8 · 2?', options: ['0', '16', '32', '88'], correct: 2, category: 'aritmetik', videoId: '1182716185' },
      { num: 4, text: `<b>Vilket svarsalternativ motsvarar ekvationen</b> ${tex('y = 4x - 5')}?`, options: [tex('x = y + \\frac{5}{4}'), tex('x = \\frac{y}{4} + 5'), tex('x = \\frac{5-y}{4}'), tex('x = \\frac{y+5}{4}')], correct: 3, category: 'algebra', videoId: '1182716827' },
      { num: 5, text: 'Fyra linjer skär varandra i samma punkt. <b>Vad är <i>x</i>?</b><div style="text-align:center;margin:1.2rem 0;"><img src="/prov-xyz1-5.png" alt="Vinklar" data-fadein style="max-width:280px;aspect-ratio:371/396;" /></div>', options: ['15°', '20°', '22,5°', '25°'], correct: 2, category: 'geometri', videoId: '1182716939' },
      { num: 6, text: '<b>Vilket svarsalternativ är lika med</b> 3<i>x</i>(2 − 5<i>y</i>)?', options: ['6<i>x</i> − 5<i>y</i>', '(6<i>x</i> − 15)<i>y</i>', '−5<i>x</i>(2 + 3<i>y</i>)', '−(15<i>y</i> − 6)<i>x</i>'], correct: 3, category: 'algebra', videoId: '1182718030' },
      { num: 7, text: '<b>Vilket svarsalternativ är ett intervall där <i>g</i>(<i>x</i>) &gt; <i>f</i>(<i>x</i>) för alla <i>x</i> i intervallet?</b><div style="text-align:center;margin:1.2rem 0;"><img src="/prov-xyz1-7.png" alt="Graf" data-fadein style="max-width:300px;aspect-ratio:335/300;" /></div>', options: ['<i>x</i> &gt; <i>a</i>', '<i>b</i> &lt; <i>x</i> &lt; <i>e</i>', '<i>c</i> &lt; <i>x</i> &lt; <i>e</i>', '<i>a</i> &lt; <i>x</i> &lt; <i>d</i>'], correct: 3, category: 'funktioner', videoId: '1182718336' },
      { num: 8, text: 'I en påse finns det 28 enfärgade kulor: 10 röda, 7 vita och 11 svarta. <b>Om man drar en kula slumpmässigt, hur stor är då sannolikheten att den inte är vit?</b>', options: [tex('\\frac{1}{3}'), tex('\\frac{1}{4}'), tex('\\frac{2}{3}'), tex('\\frac{3}{4}')], correct: 3, category: 'sannolikhet', videoId: '1182718722' },
      { num: 9, text: `<b>Vilket svarsalternativ är lika med</b> ${tex('\\frac{0{,}36}{3 \\cdot 0{,}024}')} ?`, options: ['0,05', '0,5', '5', '50'], correct: 2, category: 'aritmetik', videoId: '1182718994' },
      { num: 10, text: 'Rektangeln ABCD är sammansatt av 12 lika stora kvadrater. Area = 300 cm². <b>Hur lång är AB?</b><div style="text-align:center;margin:1.2rem 0;"><img src="/prov-xyz1-10.png" alt="Rektangel" data-fadein style="max-width:200px;aspect-ratio:372/160;" /></div>', options: [tex('\\sqrt{300}') + ' cm', '20 cm', tex('\\frac{4}{3}\\sqrt{300}') + ' cm', '25 cm'], correct: 1, category: 'geometri', videoId: '1182719341' },
      { num: 11, text: `${tex('5x^2 + 3x = 0')}<br><br><b>Vilket av svarsalternativen är ett möjligt värde på <i>x</i>?</b>`, options: [tex('-\\frac{3}{5}'), tex('\\sqrt{\\frac{3}{5}}'), tex('-\\frac{5}{3}'), tex('\\sqrt{\\frac{5}{3}}')], correct: 0, category: 'algebra', videoId: '1182719553' },
      { num: 12, text: 'En rektangel är inritad i ett koordinatsystem. <b>Vilken linje delar rektangeln i två lika stora delar?</b><div style="text-align:center;margin:1.2rem 0;"><img src="/prov-xyz1-12.png" alt="Koordinatsystem" data-fadein style="max-width:240px;aspect-ratio:301/345;" /></div>', options: ['<i>y</i> = −<i>x</i> + 6', '<i>y</i> = −<i>x</i> + 4', '<i>y</i> = <i>x</i> − 1', '<i>y</i> = <i>x</i> − 2'], correct: 2, category: 'funktioner', videoId: '1182719755' },
    ]
  },
  {
    id: 'kva', name: 'KVA — Kvantitativa jämförelser', shortName: 'KVA',
    type: 'kva', timeMinutes: 18,
    questions: [
      { num: 13, text: 'Medelvärdet av de tre talen <i>x</i>, <i>y</i> och <i>z</i> är 12. Summan av <i>y</i> och <i>z</i> är 30.', q1: '<i>x</i>', q2: '9', options: stdKvaOpts, correct: 1, category: 'aritmetik', videoId: '1182734977' },
      { num: 14, text: '', q1: tex('1 + \\frac{1}{4}'), q2: tex('\\frac{10}{8}'), options: stdKvaOpts, correct: 2, category: 'aritmetik', videoId: '1182735217' },
      { num: 15, text: `${tex('x > 0')}<br>${tex('y < 0')}<br>${tex('z > 0')}<br>${tex('w < 0')}`, q1: tex('x^2 + y^2'), q2: tex('z^2 + w^2'), options: stdKvaOpts, correct: 3, category: 'algebra', videoId: '1182735261' },
      { num: 16, text: '', q1: 'Arean av en rektangel med sidorna 12 cm och 25 cm', q2: 'Arean av en rätvinklig triangel med kateterna 8 cm och 64 cm', options: stdKvaOpts, correct: 0, category: 'geometri', videoId: '1182735282' },
      { num: 17, text: tex('2(2x + 4) = 2x + 4'), q1: tex('x'), q2: '0', options: stdKvaOpts, correct: 1, category: 'algebra', videoId: '1182736576' },
      { num: 18, text: tex('f(x) = x^2 - 2x - 3'), q1: tex('f(3)'), q2: tex('f(-1)'), options: stdKvaOpts, correct: 2, category: 'funktioner', videoId: '1182736871' },
      { num: 19, text: '', q1: '70 procent av 105', q2: '73', options: stdKvaOpts, correct: 0, category: 'procent', videoId: '1182736933' },
      { num: 20, text: '<i>F</i>(<i>n</i>) = summan av alla positiva heltal &lt; <i>n</i>.<br><i>G</i>(<i>n</i>) = summan av alla jämna positiva heltal &lt; <i>n</i>.', q1: '<i>F</i>(5)', q2: tex('\\frac{G(11)}{2}'), options: stdKvaOpts, correct: 1, category: 'aritmetik', videoId: '1182904536' },
      { num: 21, text: '', q1: 'Kvoten mellan en cirkels omkrets och dess diameter', q2: 'Kvoten mellan en kvadrats omkrets och dess sidlängd', options: stdKvaOpts, correct: 1, category: 'geometri', videoId: '1182905360' },
      { num: 22, text: tex('x > 1'), q1: tex('x^{7 + \\frac{2}{3}}'), q2: tex('\\left(x^{23}\\right)^{\\frac{1}{3}}'), options: stdKvaOpts, correct: 2, category: 'algebra', videoId: '1182905839' },
    ]
  },
  {
    id: 'nog', name: 'NOG — Kvantitativa resonemang', shortName: 'NOG',
    type: 'nog', timeMinutes: 12,
    questions: [
      { num: 23, text: 'I ett pennskrin finns det endast blyertspennor och tuschpennor. <b>Hur många tuschpennor finns det i pennskrinet?</b>', s1: 'Hälften av antalet tuschpennor är lika med en tredjedel av antalet blyertspennor.', s2: 'Det finns sammanlagt 15 pennor i pennskrinet.', options: stdNogOpts, correct: 2, category: 'logik', videoId: '1182906113' },
      { num: 24, text: '<i>x</i>, <i>y</i>, <i>z</i> och <i>w</i> är positiva tal. <b>Vilket av talen är störst?</b>', s1: tex('x + y = w'), s2: tex('\\frac{x + y}{2} = z'), options: stdNogOpts, correct: 2, category: 'logik', videoId: '1182908475' },
      { num: 25, text: 'Anna och Berit springer den kortaste vägen från sina respektive hem till mötesplatsen C. De startar samtidigt, och var och en springer med sin egen konstanta hastighet. <b>Vem springer fortast?</b>', s1: 'Berit anländer till C före Anna.', s2: 'C ligger närmare Annas hem än Berits.', options: stdNogOpts, correct: 2, category: 'logik', videoId: '1182909237' },
      { num: 26, text: 'I en låda finns det enfärgade kulor: vita, svarta och gula. <b>Hur många svarta kulor finns det i lådan?</b>', s1: 'I lådan finns det 100 vita kulor, vilket är en tredjedel av det sammanlagda antalet svarta och gula kulor.', s2: 'I lådan finns det 100 gula kulor, vilket är hälften så många som antalet svarta kulor.', options: stdNogOpts, correct: 1, category: 'logik', videoId: '1182909569' },
      { num: 27, text: `M är cirkelns medelpunkt. <b>Vilken radie har cirkeln?</b><div style="text-align:center;margin:1.2rem 0;"><img src="/prov-nog1-27.png" alt="Cirkel" data-fadein style="max-width:250px;aspect-ratio:226/177;" /></div>`, s1: `Längden av den markerade cirkelbågen AB är ${tex('\\pi')} cm.`, s2: `Längden av sträckan AB är ${tex('2\\sqrt{2}')} cm.`, options: stdNogOpts, correct: 3, category: 'logik', videoId: '1182910459' },
      { num: 28, text: '<i>x</i> och <i>y</i> är heltal. <b>Är <i>x</i> mindre än 25?</b>', s1: '<i>y</i> är mindre än 25.', s2: '<i>x</i> + <i>y</i> är mindre än 25.', options: stdNogOpts, correct: 4, category: 'logik', videoId: '1182911214' },
    ]
  },
  {
    id: 'dtk', name: 'DTK — Diagram, tabeller och kartor', shortName: 'DTK',
    type: 'dtk', timeMinutes: 18,
    questions: [
      { num: 29, text: '<b>För vilket år gällde att antalet betalningsförelägganden var större än 40 000 och att andelen män bland gäldenärerna var större än 55 procent?</b>', options: ['2007', '2009', '2012', '2014'], correct: 3, diagram: '/prov-dtk1-diagram1.png', diagramAlt: 'Betalningsförelägganden', rotate: true, category: 'diagram', videoId: '1182912267' },
      { num: 30, text: '<b>Hur stor var den procentuella ökningen av antalet betalningsförelägganden 2014 jämfört med 2007?</b>', options: ['45 procent', '125 procent', '155 procent', '215 procent'], correct: 1, diagram: '/prov-dtk1-diagram1.png', diagramAlt: 'Betalningsförelägganden', rotate: true, category: 'diagram', videoId: '1182912859' },
      { num: 31, text: '<b>Hur många av betalningsföreläggandena 2013 avsåg kvinnor?</b>', options: ['19 676', '22 136', '24 596', '27 056'], correct: 1, diagram: '/prov-dtk1-diagram1.png', diagramAlt: 'Betalningsförelägganden', rotate: true, category: 'diagram', videoId: '1182913429' },
      { num: 32, text: 'Identifiera den behandlingstyp som den största respektive näst största mängden avfall gick till. <b>Hur stor var skillnaden mellan dessa två behandlingstyper?</b>', options: ['1 130 000 ton', '1 222 000 ton', '1 352 000 ton', '1 444 000 ton'], correct: 1, diagram: '/prov-dtk1-diagram2.png', diagramAlt: 'Hushållsavfall', rotate: false, category: 'diagram', videoId: '1182913782' },
      { num: 33, text: '<b>Vilken av cirklarna visar hur hushållssektorns avfallstyp <i>Övrigt från återvinningscentral</i> fördelades på behandlingstyp?</b><div style="text-align:center;margin:1rem 0;"><img src="/prov-dtk1-33.png" alt="Cirkeldiagram" data-fadein style="max-width:450px;aspect-ratio:730/116;" /></div>', options: ['A', 'B', 'C', 'D'], correct: 3, diagram: '/prov-dtk1-diagram2.png', diagramAlt: 'Hushållsavfall', rotate: false, category: 'diagram', videoId: '1182914589' },
      { num: 34, text: '<b>Hur stor del av den totala mängden avfall gick till behandlingstypen <i>Energiåtervinning</i>?</b>', options: ['1/2', '3/5', '3/4', '4/5'], correct: 0, diagram: '/prov-dtk1-diagram2.png', diagramAlt: 'Hushållsavfall', rotate: false, category: 'diagram', videoId: '1182915329' },
      { num: 35, text: '<b>Hur stor andel av de omhändertagna eleverna 1967 var 15–16 år?</b>', options: ['1/6', '1/5', '1/4', '1/3'], correct: 2, diagram: '/prov-dtk1-diagram3.png', diagramAlt: 'Ungdomsvårdsskolor', rotate: true, category: 'tabell', videoId: '1182915752' },
      { num: 36, text: 'Studera orsaker till omhändertaganden av flickor. <b>För vilken orsak hade andelen förändrats mest från 1965 till 1968, i procentenheter räknat?</b>', options: ['Biltillgrepp', 'Andra egendomsbrott', 'Sexuell vanart', 'Alkoholmissbruk'], correct: 2, diagram: '/prov-dtk1-diagram3.png', diagramAlt: 'Ungdomsvårdsskolor', rotate: true, category: 'tabell', videoId: '1182915909' },
      { num: 37, text: '<b>Hur länge hade en flicka som skrevs ut från yrkesskola 1966 varit omhändertagen i genomsnitt?</b>', options: ['1 år och 10 månader', '2 år och 5 månader', '2 år och 7 månader', '2 år och 9 månader'], correct: 3, diagram: '/prov-dtk1-diagram3.png', diagramAlt: 'Ungdomsvårdsskolor', rotate: true, category: 'tabell', videoId: '1182916334' },
      { num: 38, text: 'Andelen pojkar som omhändertogs på grund av misshandel minskade med 8,8 procentenheter från 1966 till 1968. <b>Hur många pojkar motsvarade denna minskning?</b>', options: ['30', '100', '180', '250'], correct: 1, diagram: '/prov-dtk1-diagram3.png', diagramAlt: 'Ungdomsvårdsskolor', rotate: true, category: 'tabell', videoId: '1182916502' },
      { num: 39, text: '<b>Hur stor andel av det totala beståndet av medier fanns i storstadslänen Stockholm, Skåne och Västra Götaland?</b>', options: ['50 procent', '55 procent', '60 procent', '65 procent'], correct: 2, diagram: '/prov-dtk1-diagram4.png', diagramAlt: 'Biblioteksbestånd', rotate: true, category: 'diagram', videoId: '1182916621' },
      { num: 40, text: 'Jämför antalet medier på folkbibliotek i Jämtland och i Västerbotten. <b>Hur stor var skillnaden?</b>', options: ['545 000', '763 000', '925 000', '1 202 000'], correct: 0, diagram: '/prov-dtk1-diagram4.png', diagramAlt: 'Biblioteksbestånd', rotate: true, category: 'diagram', videoId: '1182917019' },
    ]
  }
];
