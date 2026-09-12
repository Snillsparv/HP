// Textförklaringar till högskoleprovet 26 oktober 2013, provpass 3 (kvantitativt).
import { tex } from '../types.js';

export const forklaringar: Record<number, string> = {
  // XYZ
  1: `<p>Multiplikationen först: ${tex('\\frac{1}{2} \\cdot \\frac{1}{3} = \\frac{1}{6}')}. Sedan ${tex('1 + \\frac{1}{6} = \\frac{7}{6}')}.</p>
<p>Svar B.</p>`,

  2: `<p>Förbrukningen per kilometer är densamma: ${tex('\\frac{19}{350}')} liter per km ska vara lika med ${tex('\\frac{L}{1710}')}.</p>
<p>Svar A.</p>`,

  3: `<p>${tex('b')} måste dela både 22 och 26, så ${tex('b = 1')} eller ${tex('b = 2')}. Med ${tex('b = 2')} är ${tex('a = 11')} och ${tex('c = 13')}, och summan är ${tex('11 + 2 + 13 = 26')}. Med ${tex('b = 1')} blir summan ${tex('22 + 1 + 26 = 49')}, som inte finns bland alternativen.</p>
<p>Svar C.</p>`,

  4: `<p>${tex('0{,}06x = 0{,}05y')} ger ${tex('6x = 5y')}, alltså ${tex('x = \\frac{5}{6}y')}. Eftersom talen är positiva är ${tex('x < y')}.</p>
<p>Svar B.</p>`,

  5: `<p>${tex('\\frac{27x}{1\\,200} = 81')} ger ${tex('27x = 97\\,200')}, alltså ${tex('x = 3\\,600')}.</p>
<p>Svar C.</p>`,

  6: `<p>Kvartscirkeln med radien 10 cm har arean ${tex('\\frac{\\pi \\cdot 10^2}{4} = 25\\pi')} cm². Triangeln ACD har arean ${tex('\\frac{10 \\cdot 10}{2} = 50')} cm². Det skuggade området är kvartscirkeln minus triangeln: ${tex('25\\pi - 50')} cm².</p>
<p>Svar B.</p>`,

  7: `<p>Primtalen mellan 40 och 50 är 41, 43 och 47. Talen 42, 44, 45, 46, 48 och 49 är delbara med 2, 3 eller 7.</p>
<p>Svar B.</p>`,

  8: `<p>Halveras längd, bredd och höjd blir volymen ${tex('\\frac{1}{2} \\cdot \\frac{1}{2} \\cdot \\frac{1}{2} = \\frac{1}{8}')} av den ursprungliga: ${tex('\\frac{12}{8} = 1{,}5')} dm³.</p>
<p>Svar A.</p>`,

  9: `<p>${tex('\\frac{7}{8} - \\frac{3}{4} = \\frac{7}{8} - \\frac{6}{8} = \\frac{1}{8}')}, och hälften av det är ${tex('\\frac{1}{16}')}.</p>
<p>Svar A.</p>`,

  10: `<p>Dela upp bråket: ${tex('\\frac{1 - x}{xy} = \\frac{1}{xy} - \\frac{x}{xy} = \\frac{1}{xy} - \\frac{1}{y}')}.</p>
<p>Svar D.</p>`,

  11: `<p>Päronen är ${tex('\\frac{x}{3}')} och bananerna ${tex('\\frac{x}{27}')}. Totalt ${tex('x + \\frac{x}{3} + \\frac{x}{27} = \\frac{27x + 9x + x}{27} = \\frac{37}{27}x')}.</p>
<p>Svar D.</p>`,

  12: `<p>60 % kunde minst ett av språken. ${tex('47 + 43 - 60 = 30')} procent kunde båda.</p>
<p>Svar C.</p>`,

  // KVA
  13: `<p>${tex('69 \\cdot 116 = 8\\,004')} och ${tex('68 \\cdot 117 = 7\\,956')}. Eller: ${tex('69 \\cdot 116 = 68 \\cdot 116 + 116')} medan ${tex('68 \\cdot 117 = 68 \\cdot 116 + 68')}. I är större.</p>
<p>Svar A.</p>`,

  14: `<p>Villkoret betyder ${tex('xy = zw')}, men det säger inget om ${tex('xw')} jämfört med ${tex('yz')}. Med ${tex('x = 10, y = 20, z = 20, w = 10')} är I ${tex('= 100')} och II ${tex('= 400')}; byts <i>x</i> och <i>z</i> blir det tvärtom. Det går inte att avgöra.</p>
<p>Svar D.</p>`,

  15: `<p>DP är en radie, och DB är också en radie eftersom B ligger på cirkeln. DB och AC är kvadratens båda diagonaler och lika långa, så ${tex('DP = DB = AC')}. Lika.</p>
<p>Svar C.</p>`,

  16: `<p>Om ${tex('x = 1')} är ${tex('y = -1')} och I är större; om ${tex('x = -1')} är ${tex('y = 1')} och II är större. Det går inte att avgöra.</p>
<p>Svar D.</p>`,

  17: `<p>L<sub>1</sub> går genom (10, 100), så ${tex('k_1 = \\frac{100}{10} = 10')}. L<sub>2</sub> går genom (5, 100), så ${tex('k_2 = \\frac{100}{5} = 20')}. II är större.</p>
<p>Svar B.</p>`,

  18: `<p>En udda potens av ett negativt tal är negativ, en jämn potens är positiv. ${tex('(-10)^{11}')} är negativt och ${tex('(-11)^{10}')} positivt. II är större.</p>
<p>Svar B.</p>`,

  19: `<p>Kvadratens omkrets är 12 cm. Rektangelns längsta sida är mer än 9 cm men mindre än 18 cm, till exempel 10 cm (10 gånger 8) eller 15 cm (15 gånger 3). Det går inte att avgöra.</p>
<p>Svar D.</p>`,

  20: `<p>Samma summa kan bildas av olika många tal: ${tex('5 = 2 + 3 = 1 + 1 + 3')}. Det går inte att avgöra.</p>
<p>Svar D.</p>`,

  21: `<p>Eftersom talen följer på varandra är ${tex('d = a + 3')}. ${tex('a = -2d = -2(a + 3)')} ger ${tex('3a = -6')}, alltså ${tex('a = -2')} och ${tex('b = -1')}, som är mindre än 0. II är större.</p>
<p>Svar B.</p>`,

  22: `<p>${tex('x(1 - x) > 0')} betyder att <i>x</i> och ${tex('1 - x')} har samma tecken, alltså ${tex('0 < x < 1')}. För sådana tal är ${tex('x^2 < x')}. I är större.</p>
<p>Svar A.</p>`,

  // NOG
  23: `<p>(1): två män har hatt, men kvinnorna är okända. (2): om en man med hatt går av är kvinnorna med hatt fyra gånger så många som de återstående männen med hatt, men antalet är okänt. Tillsammans: 2 män med hatt, och efter att en gått av finns 1 kvar, så ${tex('4 \\cdot 1 = 4')} kvinnor har hatt. Totalt ${tex('2 + 4 = 6')} personer.</p>
<p>Svar C.</p>`,

  24: `<p>(1): fem får och 1/8 grisar, men hönsen är okända. (2): 25 % höns, men inga antal. Tillsammans: fåren utgör ${tex('1 - \\frac{1}{8} - \\frac{1}{4} = \\frac{5}{8}')} av djuren, så ${tex('5 = \\frac{5}{8} \\cdot n')} ger ${tex('n = 8')} djur.</p>
<p>Svar C.</p>`,

  25: `<p>Yttervinkeln <i>d</i> är alltid lika med ${tex('a + b')}, så (2) ger ingen ny information. (1) ger bara ett samband mellan <i>b</i> och <i>c</i>: ${tex('a + b + \\frac{b}{4} = 180°')} har många lösningar. Inte heller tillsammans räcker uppgifterna.</p>
<p>Svar E.</p>`,

  26: `<p>(1): Anna är 24 år äldre än Karin, alltid. (2): 2014 är Anna dubbelt så gammal. Tillsammans: ${tex('K + 24 = 2K')} ger ${tex('K = 24')} år 2014, så Karin var 11 år 2001. Var för sig räcker uppgifterna inte.</p>
<p>Svar C.</p>`,

  27: `<p>Hastigheterna tillsammans är ${tex('234 / 2 = 117')} km/h. (1): ${tex('g + (g + 27) = 117')} ger ${tex('g = 45')} och ${tex('r = 72')}. (2): ${tex('g + 1{,}6g = 117')} ger ${tex('g = 45')} och ${tex('r = 72')}. Var för sig räcker.</p>
<p>Svar D.</p>`,

  28: `<p>(2): byxorna är blå och står i ett ytterstånd, bredvid det mittersta ståndet med tröjor, så tröjorna är svarta och strumporna vita. (1) säger bara att tröjorna är svarta eller blå. Endast (2) räcker.</p>
<p>Svar B.</p>`,

  // DTK
  29: `<p>2003 stod kompletterande uppgift för cirka 5 procent av besluten (den vita delen av stapeln) och cirka 9 till 10 procent av totalbeloppet. Tillstånd/anmälan stod för 15 respektive 40 procent, miljörapport 7 respektive 4 och övrigt 11 respektive 11.</p>
<p>Svar C.</p>`,

  30: `<p>2004: 8,0 miljoner kronor fördelat på 1 078 beslut. ${tex('\\frac{8\\,000\\,000}{1\\,078} \\approx 7\\,400')} kronor.</p>
<p>Svar A.</p>`,

  31: `<p>Kommunerna stod för 85 procent 2004. ${tex('0{,}85 \\cdot 1\\,276 \\approx 1\\,085')}.</p>
<p>Svar C.</p>`,

  32: `<p>Media: 913 tjänstgörande lärare, varav 356 med pedagogisk högskoleexamen. ${tex('\\frac{356}{913} \\approx 0{,}39')}.</p>
<p>Svar B.</p>`,

  33: `<p>Minst skillnad: matematik/NO-ämnen år 4–9 med 3 738 kvinnor och 3 871 män av 7 609, alltså 49 mot 51 procent. Störst skillnad: textilslöjd med 3 219 kvinnor och 26 män, alltså 99 mot 1 procent. Idrott och hälsa (44 mot 56) och musik (52 mot 48) har större skillnad än matematik/NO, och lågstadielärare (97 mot 3) och hem- och konsumentkunskap (96 mot 4) mindre än textilslöjd.</p>
<p>Svar A.</p>`,

  34: `<p>Totalt inklusive helt tjänstlediga: naturbruk 884 mot handel/kontor 696, skillnad 188. Alternativ A: el/tele 992 mot bygg/anläggning 760 är 232 fler. C: drift/underhåll 74 är fler än process 27. D: verkstad/industri 593 är fler än hantverk 375.</p>
<p>Svar B.</p>`,

  35: `<p>Asklager VI ligger djupare än 1 meter i Áslákstunga (cirka 2,1 m), Stöng (1,3), Sölmundarholt (1,95), Skarfanestorfa (1,3) och Gamla Næfurholt (1,6), alltså fem lokaler. I Karlsstadir och Hagi ligger det strax under 1 meter (cirka 0,95 respektive 0,9 m).</p>
<p>Svar B.</p>`,

  36: `<p>I Hagi ligger lagren I till V ytligare än 50 cm och VI vid cirka 90 cm. I Skarfanestorfa ligger V vid cirka 85 cm, medan IV ligger vid cirka 70 cm. Det enda lager som uppfyller båda villkoren är V.</p>
<p>Svar B.</p>`,

  37: `<p>Asklager VII ligger djupast i Áslákstunga, cirka 2,5 meter, och ytligast i Skallakot, cirka 0,6 meter. Skillnaden är cirka 1,9 meter.</p>
<p>Svar C.</p>`,

  38: `<p>Störst var summan 1943: cirka 11 100 ransoneringsbrott, 5 500 stölder och 2 800 snatterier, tillsammans cirka 19 400.</p>
<p>Svar D.</p>`,

  39: `<p>Från 1941 till 1942 ökade ransoneringsbrotten från cirka 2 100 till cirka 6 500, det vill säga med ungefär 210 procent. Övriga ökningar var betydligt mindre (till exempel cirka 70 procent 1942 till 1943).</p>
<p>Svar C.</p>`,

  40: `<p>Tredje kvartalet 1947 var köttransonen cirka 72 gram per dag, andra kvartalet 1942 cirka 24 gram. Skillnaden är cirka 48 gram per dag, alltså ${tex('7 \\cdot 48 \\approx 340')} gram per vecka.</p>
<p>Svar D.</p>`,
};
