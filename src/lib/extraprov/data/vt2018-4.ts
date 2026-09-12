// Högskoleprovet 14 april 2018, provpass 4 (kvantitativt, version 1).
// Uppgifterna är hämtade från UHR:s publicerade prov på studera.nu.
import { tex, figur, KVA_ALTERNATIV, NOG_ALTERNATIV } from '../types.js';
import type { ExtraPass } from '../types.js';

const B = '/extraprov/vt2018/';
const graf = (bokstav: string) => `<img src="${B}p4-xyz8${bokstav}.webp" alt="Graf ${bokstav.toUpperCase()}" data-fadein style="max-width:150px;width:100%;vertical-align:middle;" />`;

const DTK1 = 'Förlossningar efter IVF-behandling: stapeldiagram över antalet förlossningar i Sverige 2011 bland kvinnor 20 till 46 år där befruktning skett med IVF (skala 0 till 120), samt punkter för andelen av de startade behandlingscyklerna som ledde till förlossning i respektive ålder (procent, skala 0 till 100). Antal förlossningar per ålder: 20 år 2, 21 år 0, 22 år 5, 23 år 8, 24 år 18, 25 år 22, 26 år 23, 27 år 42, 28 år 50, 29 år 58, 30 år 98, 31 år 94, 32 år 95, 33 år 118, 34 år 105, 35 år 102, 36 år 95, 37 år 102, 38 år 88, 39 år 71, 40 år 48, 41 år 21, 42 år 16, 43 år 2, 44 år 3, 45 år 1, 46 år 0. Andel förlossningar per startad cykel: 20 år 60 procent, 21 år 0, 22 år 28, 23 år 27, 24 år 34, 25 år 27, 26 år 27, 27 år 31, 28 år 29, 29 år 26, 30 år 33, 31 år 31, 32 år 28, 33 år 28, 34 år 27, 35 år 24, 36 år 22, 37 år 21, 38 år 18, 39 år 17, 40 år 17, 41 år 10, 42 år 10, 43 år 0, 44 år 11, 45 år 1 och 46 år 0.';
const DTK2 = 'Myntstatistik: tabell över antalet 50-öringar, 1-kronor, 5-kronor och 10-kronor som präglats med årtalen 2000 till 2013. 2000: 33 060 252, 107 191 187, 3 851 326, 8 520 983. 2001: 30 120 532, 23 905 454, 6 001 481, 4 171 757. 2002: 32 019 578, 62 436 783, 13 054 800, 12 025 624. 2003: 32 074 768, 54 178 242, 11 063 204, 13 824 632. 2004: 25 958 649, 42 060 252, 6 732 730, 9 045 581. 2005: 25 024 203, 21 469 169, 4 372 783, 13 205 261. 2006: 30 000 000, inga, inga, 4 531 150. 2007: 50 000 000, 30 751 250, 628 000, 15 200 000. 2008: 35 000 000, 60 510 000, 12 000 000, 12 000 000. 2009: 20 000 000, 40 020 000, 10 000 000, 3 400 000. 2010 och 2011: inga mynt. 2012: 20 000 000 1-kronor. 2013: 5 000 000 1-kronor.';
const DTK3 = 'Berggrunden kring Voxnadalen: geologisk karta med norr uppåt och skala 5 km. Tätorter: Loos (nordväst, med Loos koboltgruva strax intill), Hamra (väster), Lillskog (norr, något öster om mitten), Voxna (söder), Edsbyn (sydost). Sjöar: Dåasen, Loossjön, Storhamrasjön, Mansjön (i mitten), Storöjungen, Finnsjön (sydväst), Storsjön. Kartan är indelad i fyra lika stora fält av ett kors i mitten. Bergarter: dalagranit (snedstreckat, stora områden i sydväst och nordväst), porfyrisk granit (ringar, längst i väster), migmatitgranit (streckmönster, det stora stråket genom mitten från norr till söder samt fält i väster), äldre granitoider (vitt, östra delen), gabbro–kvartsdiorit (små mörka fläckar), mafisk metavulkanit/Loosgrönsten (mörkgrått, stråket vid Loos), metaryolit (prickigt, vid Loos, Lillskog och i sydväst), kvartsit (ljusgrått), migmatitomvandlat metasediment (böjt streckmönster, kring Mansjön, Hamra och i sydväst) och metaargillit. Regionala deformationszoner ritas som långa linjer, bland annat en som börjar 1 km från Edsbyn och går mot nordväst. Grafitgruva vid Kringeltjärnen. Provtagningspunkter för radiometrisk åldersbestämning markerade med stjärnor.';
const DTK4 = 'Egendomsbrott: fyra linjediagram över antalet anmälda fall 2002 till 2011. Cykelstölder (skala 0 till 100 000): cirka 82 000 (2002), 78 000 (2003), 72 000 (2004), 68 000 (2005), 66 000 (2006), 66 000 (2007), 67 000 (2008), 66 000 (2009), 63 000 (2010) och 68 000 (2011). Bilbrott, alltså bilstölder och stölder ur och från bilar (skala 0 till 250 000): cirka 205 000 (2002), 190 000 (2003), 175 000 (2004), 160 000 (2005), 145 000 (2006), 130 000 (2007), 115 000 (2008), 100 000 (2009), 92 000 (2010) och 85 000 (2011). Skadegörelse (skala 0 till 250 000): cirka 150 000 (2002), 145 000 (2003), 155 000 (2004), 155 000 (2005), 155 000 (2006), 175 000 (2007), 190 000 (2008), 210 000 (2009), 165 000 (2010) och 170 000 (2011). Bostadsinbrott (skala 0 till 25 000): cirka 17 000 (2002), 16 500 (2003), 17 500 (2004), 16 500 (2005), 14 000 (2006), 16 000 (2007), 18 000 (2008), 22 000 (2009), 20 000 (2010) och 24 000 (2011).';

export const pass: ExtraPass = {
  id: 'vt2018-4',
  tillfalle: 'vt2018',
  passNr: 4,
  kind: 'kvant',
  name: 'Provpass 4 (kvantitativt)',
  timeMinutes: 55,
  extendedMinutes: 80,
  normering: [[0, 0.0], [20, 0.1], [22, 0.2], [24, 0.3], [26, 0.4], [28, 0.5], [31, 0.6], [34, 0.7], [37, 0.8], [41, 0.9], [45, 1.0], [48, 1.1], [52, 1.2], [55, 1.3], [58, 1.4], [61, 1.5], [64, 1.6], [67, 1.7], [70, 1.8], [72, 1.9], [74, 2.0]],
  subTests: [
    {
      id: 'xyz', name: 'XYZ – Matematisk problemlösning', shortName: 'XYZ', type: 'xyz',
      questions: [
        { num: 1, text: `<b>Vad är ${tex('\\frac{5}{2} - \\frac{8}{5}')}?</b>`, options: ['−0,3', '0,9', '1,2', '1,7'], correct: 1, category: 'aritmetik' },
        { num: 2, text: '12, <i>a</i>, 17, 13 och 20 är fem positiva heltal som har medelvärdet 16. <b>Vad är <i>a</i>?</b>', options: ['16', '18', '20', '22'], correct: 1, category: 'statistik' },
        { num: 3, text: '<b>Vilket uttryck motsvarar ett heltal?</b>', options: [tex('\\left(\\sqrt{7} + \\sqrt{7}\\right)^2'), tex('7\\sqrt{7}'), tex('\\sqrt{7} + \\sqrt{7}'), tex('\\sqrt{7} + \\sqrt{\\frac{7}{7}}')], correct: 0, category: 'aritmetik' },
        { num: 4, text: `<b>Hur stor är arean av fyrhörningen?</b>${figur(B + 'p4-xyz4.webp', 'En drakformad fyrhörning med en lodrät diagonal och en vågrät diagonal som skär varandra i rät vinkel. Den lodräta diagonalen är 30 cm ovanför och 70 cm nedanför skärningspunkten. Den vågräta diagonalen är 60 cm.', 320)}`, options: ['1500 cm<sup>2</sup>', '3000 cm<sup>2</sup>', '4500 cm<sup>2</sup>', '6000 cm<sup>2</sup>'], correct: 1, category: 'geometri' },
        { num: 5, text: `<b>Vilket av svarsalternativen är lika med uttrycket ${tex('2(-r + 3s)')}?</b>`, options: [tex('3s - r + 2'), tex('-2r + 3s'), tex('2(s - r) + s'), tex('-6\\left(\\frac{r}{3} - s\\right)')], correct: 3, category: 'algebra' },
        { num: 6, text: `Linjen ${tex('y = 5x + 10')} skär <i>x</i>-axeln i punkten ${tex('(x_1, 0)')} och <i>y</i>-axeln i punkten ${tex('(0, y_1)')}.<br><b>Vad är ${tex('x_1 + y_1')}?</b>`, options: ['5', '6', '8', '15'], correct: 2, category: 'funktioner' },
        { num: 7, text: `${tex('\\dfrac{\\frac{3}{2}}{\\frac{6}{x}} = 2')}<br><br><b>Vad är <i>x</i>?</b>`, options: ['4', '6', '8', '9'], correct: 2, category: 'algebra' },
        { num: 8, text: `<b>Vilken av graferna nedan representerar funktionen ${tex('f(x) = \\frac{x}{2} + 2')}?</b>`, options: [graf('a'), graf('b'), graf('c'), graf('d')], correct: 3, category: 'funktioner' },
        { num: 9, text: 'Vid ett möte skakade alla hand med varandra en gång. Det blev totalt 15 handskakningar. <b>Hur många personer deltog i mötet?</b>', options: ['5', '6', '7', '8'], correct: 1, category: 'aritmetik' },
        { num: 10, text: `En rektangel är indelad i 15 mindre rektanglar. De mindre rektanglarna har alla samma area. <b>Hur stor är arean av den skuggade delen av rektangeln?</b>${figur(B + 'p4-xyz10.webp', 'En rektangel med höjden x och bredden y, indelad i 3 rader och 5 kolumner av lika stora små rektanglar. De 6 små rektanglarna längst ner till höger (2 rader gånger 3 kolumner) är skuggade.', 300)}${tex('x = 1')} cm<br>${tex('y = \\frac{7}{5}')} cm`, options: [`${tex('\\frac{6}{15}')} cm<sup>2</sup>`, `${tex('\\frac{14}{15}')} cm<sup>2</sup>`, `${tex('\\frac{14}{25}')} cm<sup>2</sup>`, `${tex('\\frac{21}{25}')} cm<sup>2</sup>`], correct: 2, category: 'geometri' },
        { num: 11, text: `${tex('p > 0')}<br>${tex('p \\neq r')}<br>${tex('r = \\frac{k + p}{k} - 1')}<br><br><b>Vad är <i>k</i>?</b>`, options: [tex('k = 1'), tex('k = \\frac{p - 1}{r - 1}'), tex('k = \\frac{p}{r + 2}'), tex('k = \\frac{p}{r}')], correct: 3, category: 'algebra' },
        { num: 12, text: `<b>Vilket svarsalternativ har samma värde som ${tex('5^{-2} - (-2)^{-1}')}?</b>`, options: [tex('\\frac{27}{50}'), tex('7^{-3}'), tex('\\frac{2}{27}'), '27'], correct: 0, category: 'aritmetik' },
      ],
    },
    {
      id: 'kva', name: 'KVA – Kvantitativa jämförelser', shortName: 'KVA', type: 'kva',
      questions: [
        { num: 13, text: 'De tre vinklarna i en triangel är <i>u</i>, <i>v</i> och <i>w</i>.', q1: tex('u + v'), q2: '<i>w</i>', options: KVA_ALTERNATIV, correct: 3, category: 'geometri' },
        { num: 14, text: tex('30 < 3x - 6 < 63'), q1: '<i>x</i>', q2: '10', options: KVA_ALTERNATIV, correct: 0, category: 'algebra' },
        { num: 15, text: 'En affär har 75 % rabatt på byxor och 70 % rabatt på tröjor. Ordinarie pris för de röda byxorna är 299 kr. Ordinarie pris för den gula tröjan är 199 kr.', q1: 'Det rabatterade priset för de röda byxorna', q2: 'Det rabatterade priset för den gula tröjan', options: KVA_ALTERNATIV, correct: 0, category: 'procent' },
        { num: 16, text: tex('x^3 < 0'), q1: tex('x^7'), q2: tex('3x^4'), options: KVA_ALTERNATIV, correct: 1, category: 'algebra' },
        { num: 17, text: 'Samuel har en påse med endast röda, gröna och blå enfärgade kulor. 2/5 av kulorna är röda och 3/10 av kulorna är gröna. Samuel plockar slumpmässigt upp en kula ur påsen.', q1: 'Sannolikheten att kulan är blå', q2: 'Sannolikheten att kulan är röd', options: KVA_ALTERNATIV, correct: 1, category: 'sannolikhet' },
        { num: 18, text: figur(B + 'p4-kva18.webp', 'Två koordinatsystem med rutnät. Det vänstra visar linjen y = f(x), som stiger svagt och går genom (0, 2,5) och (10, 5); på y-axeln är 5 markerat och på x-axeln 10. Det högra visar linjen y = g(x), som stiger brantare genom origo och (5, 10); på y-axeln är 10 markerat och på x-axeln 5.', 460), q1: tex('f(4)'), q2: tex('g(3)'), options: KVA_ALTERNATIV, correct: 1, category: 'funktioner' },
        { num: 19, text: `Radien i cirkeln C är <i>x</i>. Höjden i triangeln T är ${tex('2x')} och basen är ${tex('3x')}.${figur(B + 'p4-kva19.webp', 'En cirkel C med radien x och en triangel T med höjden 2x och basen 3x.', 400)}`, q1: 'Arean av cirkeln C', q2: 'Arean av triangeln T', options: KVA_ALTERNATIV, correct: 0, category: 'geometri' },
        { num: 20, text: '', q1: tex('\\frac{5}{3} - \\frac{3}{2}'), q2: tex('\\frac{1}{7} + \\frac{1}{42}'), options: KVA_ALTERNATIV, correct: 2, category: 'aritmetik' },
        { num: 21, text: tex('x > 0'), q1: tex('\\frac{7x}{8}'), q2: '88 % av <i>x</i>', options: KVA_ALTERNATIV, correct: 1, category: 'procent' },
        { num: 22, text: tex('\\sqrt{5} \\cdot \\sqrt{9} = 45^x'), q1: '0,5', q2: '<i>x</i>', options: KVA_ALTERNATIV, correct: 2, category: 'algebra' },
      ],
    },
    {
      id: 'nog', name: 'NOG – Kvantitativa resonemang', shortName: 'NOG', type: 'nog',
      questions: [
        { num: 23, text: 'Två löpare springer ett antal varv runt samma motionsslinga. Båda löparna startar samtidigt från samma plats. De springer åt samma håll, var och en med sin egen konstanta hastighet. <b>Efter hur lång tid blir den långsammare löparen varvad av den snabbare löparen?</b>', s1: 'Slingan är 800 meter lång och det tar den långsammare löparen 6 minuter att springa ett varv runt slingan.', s2: 'Efter 9 minuter har den långsammare löparen sprungit ett och ett halvt varv runt slingan, vilket är 1200 meter. Samtidigt har den snabbare löparen sprungit 2000 meter.', options: NOG_ALTERNATIV, correct: 1, category: 'aritmetik' },
        { num: 24, text: 'I en låda finns det fyra olika sorters spik: nubb, kopparspik, pappspik och dyckert. <b>Hur många spikar finns det i lådan?</b>', s1: 'I lådan finns det 24 kopparspikar, vilket är 50 procent mer än antalet dyckertar.', s2: 'Dyckert och kopparspik utgör tillsammans 50 procent av antalet spikar i lådan.', options: NOG_ALTERNATIV, correct: 2, category: 'procent' },
        { num: 25, text: '<b>Vad är 15 procent av <i>y</i>?</b>', s1: '<i>y</i> är 60 procent av 900.', s2: '5 procent av <i>y</i> är 27.', options: NOG_ALTERNATIV, correct: 3, category: 'procent' },
        { num: 26, text: 'Var och en av Mimmis tröjor är antingen färgglad eller svart. Varje tröja är dessutom antingen långärmad eller kortärmad. Mimmi har 14 långärmade tröjor. <b>Hur många tröjor har Mimmi?</b>', s1: 'Hälften av de färgglada tröjorna är långärmade.', s2: 'Sex av de svarta tröjorna är inte långärmade.', options: NOG_ALTERNATIV, correct: 4, category: 'logik' },
        { num: 27, text: 'Tre enfärgade klossar – en röd, en grön och en blå – är staplade på varandra. <b>Vilken färg har den översta klossen?</b>', s1: 'Den blå klossen är inte underst. Den gröna klossen är inte överst.', s2: 'Den röda klossen är inte i mitten. Den blå klossen är under den röda klossen.', options: NOG_ALTERNATIV, correct: 1, category: 'logik' },
        { num: 28, text: '<b>Bland talen 28, 32, 42, 56, 72, 78 väljs ett ut, vilket?</b>', s1: 'Talet är jämnt delbart med 3.', s2: 'Talet är en heltalsmultipel av 4.', options: NOG_ALTERNATIV, correct: 2, category: 'aritmetik' },
      ],
    },
    {
      id: 'dtk', name: 'DTK – Diagram, tabeller och kartor', shortName: 'DTK', type: 'dtk',
      questions: [
        { num: 29, text: '<b>För vilken ålder gällde att det skedde 20 förlossningar och att andelen förlossningar per startad behandlingscykel var 10 procent?</b>', options: ['25 år', '26 år', '41 år', '42 år'], correct: 2, diagram: B + 'p4-dtk1.webp', diagramAlt: DTK1, category: 'diagram' },
        { num: 30, text: '<b>Hur många fler förlossningar skedde bland kvinnor 33–35 år än bland kvinnor 36–38 år?</b>', options: ['20', '25', '35', '40'], correct: 3, diagram: B + 'p4-dtk1.webp', diagramAlt: DTK1, category: 'diagram' },
        { num: 31, text: '<b>Hur stor var skillnaden avseende andelen förlossningar per startad behandlingscykel om man jämför 30-åringar med 40-åringar?</b>', options: ['16 procentenheter', '20 procentenheter', '32 procentenheter', '42 procentenheter'], correct: 0, diagram: B + 'p4-dtk1.webp', diagramAlt: DTK1, category: 'diagram' },
        { num: 32, text: '<b>Med vilket av följande årtal har cirka 100 miljoner mynt präglats?</b>', options: ['2000', '2003', '2007', '2009'], correct: 2, diagram: B + 'p4-dtk2.webp', diagramAlt: DTK2, category: 'tabell' },
        { num: 33, text: '<b>Vilket svarsförslag anger proportionen mellan antalet 50-öringar, 1-kronor, 5-kronor och 10-kronor som har präglats med årtalet 2008?</b>', options: ['2:5:1:1', '3:5:1:1', '3:5:2:2', '3:6:2:2'], correct: 1, diagram: B + 'p4-dtk2.webp', diagramAlt: DTK2, category: 'tabell' },
        { num: 34, text: 'Bestäm det årtal som flest mynt har präglats med. <b>Hur stor andel av mynten med detta årtal utgörs av 1-kronor?</b>', options: ['50 procent', '60 procent', '70 procent', '80 procent'], correct: 2, diagram: B + 'p4-dtk2.webp', diagramAlt: DTK2, category: 'tabell' },
        { num: 35, text: '<b>Vad av följande finns 2,5 mil i sydvästlig riktning från Mansjön?</b>', options: ['Porfyrisk granit', 'Kvartsit', 'Migmatitomvandlat metasediment', 'Finnsjön'], correct: 3, diagram: B + 'p4-dtk3.webp', diagramAlt: DTK3, category: 'karta' },
        { num: 36, text: 'Kartan är indelad i fyra lika stora fält, som efter väderstrecken kan benämnas nordväst, nordost, sydost och sydväst. <b>Vilken bergart förekommer i samtliga fält utom det nordöstra?</b>', options: ['Migmatitgranit', 'Metaryolit', 'Dalagranit', 'Migmatitomvandlat metasediment'], correct: 0, diagram: B + 'p4-dtk3.webp', diagramAlt: DTK3, category: 'karta' },
        { num: 37, text: 'Utgå från den nordligaste änden av den regionala deformationszon som i söder börjar 1 kilometer från tätorten Edsbyn. Fortsätt till närmast belägna plats med migmatitgranit. Gå därifrån vidare till närmaste tätort. <b>Hur långt är det mellan den tätorten och Loos koboltgruva?</b>', options: ['15 km', '45 km', '55 km', '75 km'], correct: 1, diagram: B + 'p4-dtk3.webp', diagramAlt: DTK3, category: 'karta' },
        { num: 38, text: '<b>Hur många cykelstölder anmäldes sammanlagt åren 2006–2009?</b>', options: ['200 000', '230 000', '270 000', '300 000'], correct: 2, diagram: B + 'p4-dtk4.webp', diagramAlt: DTK4, category: 'diagram' },
        { num: 39, text: '<b>Hur stor var den procentuella minskningen av antalet anmälda bilbrott om man jämför den redovisade periodens första och sista år?</b>', options: ['40 procent', '50 procent', '60 procent', '70 procent'], correct: 2, diagram: B + 'p4-dtk4.webp', diagramAlt: DTK4, category: 'diagram' },
        { num: 40, text: '<b>Hur stort var antalet anmälda fall av skadegörelse i genomsnitt per år för den redovisade perioden?</b>', options: ['155 000', '165 000', '175 000', '185 000'], correct: 1, diagram: B + 'p4-dtk4.webp', diagramAlt: DTK4, category: 'diagram' },
      ],
    },
  ],
};
