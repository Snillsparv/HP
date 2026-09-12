// Textförklaringar till högskoleprovet 25 oktober 2014, provpass 5 (kvantitativt).
import { tex } from '../types.js';

export const forklaringar: Record<number, string> = {
  // XYZ
  1: `<p>Prova heltalen: ${tex('3^2 + 3 = 12')} (inte större än 12), ${tex('4^2 + 4 = 20')} (mellan 12 och 30) och ${tex('5^2 + 5 = 30')} (inte mindre än 30). Alltså ${tex('y = 4')}.</p>
<p>Svar C.</p>`,

  2: `<p>${tex('\\left(-\\frac{5}{2}\\right)^3 = -\\frac{5^3}{2^3} = -\\frac{125}{8}')}. Udda potens av ett negativt tal är negativ.</p>
<p>Svar C.</p>`,

  3: `<p>${tex('f(-3) = \\frac{-18 + 5}{-6 + k} = \\frac{-13}{k - 6} = 1')} ger ${tex('k - 6 = -13')}, alltså ${tex('k = -7')}.</p>
<p>Svar B.</p>`,

  4: `<p>Bågen ${tex('\\frac{2\\pi}{3}')} är en tredjedel av omkretsen ${tex('2\\pi')}, så sektorn är en tredjedel av 360°, alltså 120°.</p>
<p>Svar C.</p>`,

  5: `<p>${tex('3{,}6^2 = 12{,}96')}, mycket nära 13, medan ${tex('3{,}4^2 = 11{,}56')} och ${tex('3{,}8^2 = 14{,}44')}.</p>
<p>Svar C.</p>`,

  6: `<p>Korsmultiplikation: ${tex('16(2x + 3) = 22(3x - 4)')} ger ${tex('32x + 48 = 66x - 88')}, alltså ${tex('34x = 136')} och ${tex('x = 4')}.</p>
<p>Svar D.</p>`,

  7: `<p>Eftersom ${tex('x < 1 < y')} är täljaren mindre än nämnaren i ${tex('\\frac{x}{y}')}, som därför alltid är mindre än 1. ${tex('xy')} kan vara större än 1 (till exempel 0,9 gånger 10), ${tex('y - x')} likaså, och ${tex('\\frac{y}{x^2}')} är alltid större än 1.</p>
<p>Svar A.</p>`,

  8: `<p>Efter tillägget finns ${tex('r + 5')} röda bollar av totalt ${tex('r + b + 12')}. Sannolikheten är ${tex('\\frac{r + 5}{r + b + 12}')}.</p>
<p>Svar D.</p>`,

  9: `<p>Den lodräta linjen bildar 130° med AC på C-sidan, alltså 50° på A-sidan. I den lilla rätvinkliga triangeln till vänster är vinkeln vid A då ${tex('180° - 90° - 50° = 40°')}. Yttervinkeln ${tex('z = 180° - 40° = 140°')}, och i triangeln ABC är ${tex('x = 180° - 90° - 40° = 50°')}. Summan är 190°.</p>
<p>Svar D.</p>`,

  10: `<p>Täljaren blir ${tex('1 + 1 + 1 + 1 = 4')} och nämnaren ${tex('-1 - 1 = -2')}. Kvoten är ${tex('-2')}.</p>
<p>Svar A.</p>`,

  11: `<p>Bilar som är kombi eller har dragkula: ${tex('45 + 35 - 25 = 55')}. Återstår ${tex('75 - 55 = 20')} bilar som varken är kombi eller har dragkula.</p>
<p>Svar B.</p>`,

  12: `<p>${tex('3x \\cdot 5y = \\frac{30z}{2w}')} ger ${tex('15xy = \\frac{15z}{w}')}, alltså ${tex('xy = \\frac{z}{w}')} eller ${tex('xyw = z')}.</p>
<p>Svar B.</p>`,

  // KVA
  13: `<p>Kedjan ${tex('m < y < z < n')} visar att ${tex('n')} är större än ${tex('m')}.</p>
<p>Svar B.</p>`,

  14: `<p>${tex('\\frac{355}{113} \\approx 3{,}14')}, vilket är mer än 3,1 (eftersom ${tex('3{,}1 \\cdot 113 = 350{,}3 < 355')}). I är större.</p>
<p>Svar A.</p>`,

  15: `<p>Diagonalen delar rektangeln i två rätvinkliga trianglar där diagonalen är hypotenusa. Summan av de två sidorna är alltid större än hypotenusan, så ${tex('AB + BC > 9')} och omkretsen ${tex('2(AB + BC) > 18')} cm. I är större.</p>
<p>Svar A.</p>`,

  16: `<p>${tex('x > -3')} och ${tex('y < 10')}. Till exempel ${tex('x = 0, y = 5')} ger II större, medan ${tex('x = 20, y = 5')} ger I större. Det går inte att avgöra.</p>
<p>Svar D.</p>`,

  17: `<p>A tjänar ${tex('10xy')} kronor. B jobbar ${tex('1{,}2x')} timmar per dag för ${tex('0{,}9y')} kronor per timme och tjänar ${tex('10 \\cdot 1{,}2x \\cdot 0{,}9y = 10{,}8xy')} kronor. II är större.</p>
<p>Svar B.</p>`,

  18: `<p>${tex('49 + x - 2 = 1')} ger ${tex('x = -46')}. Då är ${tex('x^2 + x - 2 = 2\\,116 - 46 - 2 = 2\\,068')}, som är större än 0. I är större.</p>
<p>Svar A.</p>`,

  19: `<p>L<sub>1</sub>: ${tex('-\\frac{1}{6}y = -\\frac{1}{3}x + \\frac{1}{2}')} ger ${tex('y = 2x - 3')}, lutning 2. L<sub>2</sub>: ${tex('y = 3x + 18')}, lutning 3. II är större.</p>
<p>Svar B.</p>`,

  20: `<p>Lika areor: ${tex('(a + 2)b = a(b + 3)')} ger ${tex('ab + 2b = ab + 3a')}, alltså ${tex('2b = 3a')} och ${tex('a = \\frac{2b}{3}')}. Eftersom sidorna är positiva är ${tex('a < b')}. II är större.</p>
<p>Svar B.</p>`,

  21: `<p>${tex('\\sqrt{0{,}16} = 0{,}4')}, så ${tex('\\frac{0{,}4}{0{,}4} = 1')} och ${tex('\\sqrt{10 - 1} = \\sqrt{9} = 3')}. Lika.</p>
<p>Svar C.</p>`,

  22: `<p>I är ${tex('\\frac{x - y - z}{3}')} och II är ${tex('\\frac{-x + y + z}{3}')}, alltså motsatta tal. Vilket som är störst beror på tecknet hos ${tex('x - y - z')}: med ${tex('x = 10, y = 1, z = 3')} är I störst, med ${tex('x = 4, y = 6, z = 8')} är II störst. Det går inte att avgöra.</p>
<p>Svar D.</p>`,

  // NOG
  23: `<p>(1): de åtta borttagna var blå eller gröna, men fördelningen är okänd. (2): fyra var blå, men de andra fyra kan vara röda eller gröna. Tillsammans: fyra blå och fyra gröna togs bort, så ${tex('6 - 4 = 2')} gröna finns kvar.</p>
<p>Svar C.</p>`,

  24: `<p>(1): tre lika sidor betyder att trianglarna är kongruenta och därmed likformiga. (2): tre lika vinklar är just definitionen av likformighet. Var för sig räcker.</p>
<p>Svar D.</p>`,

  25: `<p>Även tillsammans säger uppgifterna bara att minst ${tex('38 + 36 - 70 = 4')} cyklar är både svarta och har korg. Det exakta antalet kan vara allt från 4 till 36.</p>
<p>Svar E.</p>`,

  26: `<p>(1): ${tex('y + 3 + y = 55')} ger ${tex('y = 26')} och ${tex('x = 29')}, så ${tex('xy')} är bestämt. (2): både 26 och 29 samt 27 och 28 har samma tiotalssiffra och summan 55, men olika produkter. Endast (1) räcker.</p>
<p>Svar A.</p>`,

  27: `<p>Tillsammans ger uppgifterna att Albin bor 200 meter från Bengt och Kent 600 meter från Bengt, men de kan bo på samma eller olika sidor om Bengt. Avståndet är 400 eller 800 meter.</p>
<p>Svar E.</p>`,

  28: `<p>(1) ger hastigheten men inte sträckan. (2): dubbla hastigheten halverar tiden, så resan tog ${tex('2 \\cdot 55 = 110')} minuter. Endast (2) räcker.</p>
<p>Svar B.</p>`,

  // DTK
  29: `<p>1998 hade cirka 34 procent Internet i hushållet. ${tex('0{,}34 \\cdot 6\\,300\\,000 \\approx 2\\,100\\,000')}.</p>
<p>Svar A.</p>`,

  30: `<p>Datorkurvan steg brantast från 1997 till 1998, från cirka 50 till cirka 63 procent, alltså 13 procentenheter. Övriga år var ökningen högst cirka 7 procentenheter.</p>
<p>Svar B.</p>`,

  31: `<p>Kvinnor 2005: cirka 245 per 100 000 i åldern 15–24 år och cirka 105 i åldern 25–44 år. Skillnaden är cirka 140.</p>
<p>Svar B.</p>`,

  32: `<p>2003 var männen 5–14 år cirka 215 per 100 000 och kvinnorna 45–64 år cirka 105. År 2001 var männen i den gruppen under 200, 2004 nådde de bara precis upp till 200, och 2006 var kvinnorna 45–64 år under 100.</p>
<p>Svar B.</p>`,

  33: `<p>Den högsta stapeln ligger på 2002 för åldersgrupperna 25–44, 45–64, 65–74, 75–84 och 85 år och äldre, alltså fem grupper. För 0–4 år var toppen 2001, för 5–14 år 2007 och för 15–24 år 2003.</p>
<p>Svar B.</p>`,

  34: `<p>85 år och äldre: cirka 230 per 100 000 år 1999 mot cirka 155 år 2008, en skillnad på cirka 75. För 0–4 år är skillnaden cirka 35, för 25–44 år cirka 30 och för 75–84 år cirka 40.</p>
<p>Svar D.</p>`,

  35: `<p>Vinterresan till Nederkalix (december till januari) når till cirka 7 mil från Luleå, medan sommarresorna (juni och september) når till cirka 10 mil. Sommarvägen var alltså cirka 3 mil längre.</p>
<p>Svar A.</p>`,

  36: `<p>Den svarta rektangeln vid Jokkmokk i slutet av januari täcker ungefär fyra dagar av månadens 31.</p>
<p>Svar A.</p>`,

  37: `<p>Marknadsbesöket i Gällivare var i början av februari, och det sista marknadsbesöket under sjöfartssäsongen var i Nederkalix i början av september. Det är cirka 7 månader.</p>
<p>Svar C.</p>`,

  38: `<p>1969 var samhällsstoff den största andelen inom övrigt material, 23,1 procent. Inom rec-1 var litteratur störst (14,6), inom rec-2 humanistiskt (9,7) och av totalen var samhällsstoff (30,7) större än litteratur (20,0).</p>
<p>Svar C.</p>`,

  39: `<p>rec-1 1969: litteratur 14,6, konst 3,2 och musik 2,5 procent, tillsammans 20,3 procent av 1 194 artiklar. ${tex('0{,}203 \\cdot 1\\,194 \\approx 242')}.</p>
<p>Svar B.</p>`,

  40: `<p>Aftonbladet hade 281 artiklar 1969 mot 227 år 1965, 54,2 procent på kultursidan 1960 och 7,8 procent på ledarsidan 1969. Göteborgs-Posten hade inget på ledarsidan 1969, Sydsvenska Dagbladet hade bara 29,7 procent på kultursidan 1960, och Göteborgs-Tidningen hade färre artiklar 1969 än 1965.</p>
<p>Svar C.</p>`,
};
