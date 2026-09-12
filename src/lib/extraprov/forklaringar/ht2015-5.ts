// Textförklaringar till högskoleprovet 24 oktober 2015, provpass 5 (kvantitativt).
import { tex } from '../types.js';

export const forklaringar: Record<number, string> = {
  // XYZ
  1: `<p>${tex('5x + 30 = 6x + 30')} ger ${tex('x = 0')}.</p>
<p>Svar A.</p>`,

  2: `<p>Alla potenser av 5 slutar på 5: ${tex('5, 25, 125, 625, \\dots')} Entalssiffran är 5.</p>
<p>Svar C.</p>`,

  3: `<p>${tex('0{,}4 - 0{,}25 = 0{,}15 = \\frac{15}{100} = \\frac{3}{20}')}.</p>
<p>Svar D.</p>`,

  4: `<p>${tex('g')} har lutningen −1, så en vinkelrät linje har lutningen 1. Grafen går genom (0, 4), så ${tex('f(x) = x + 4')}.</p>
<p>Svar A.</p>`,

  5: `<p>Vid multiplikation av potenser med samma bas adderas exponenterna: ${tex('x^{k+1} \\cdot x^k = x^{2k+1}')}.</p>
<p>Svar B.</p>`,

  6: `<p>Figuren är en rektangel med arean ${tex('xy = 36')}, alltså ${tex('\\frac{36}{x} = y')}. A, B och D gäller bara om rektangeln är en kvadrat med sidan 6, vilket inte är säkert.</p>
<p>Svar C.</p>`,

  7: `<p>${tex('8 - 15x + 9 - 4x - 2 + 9x = -10x + 15')}.</p>
<p>Svar A.</p>`,

  8: `<p>Den lilla pumpen fyller ${tex('\\frac{1}{60}')} av tanken per minut och den stora ${tex('\\frac{4}{60}')}. Tillsammans ${tex('\\frac{5}{60} = \\frac{1}{12}')} per minut, så det tar 12 minuter.</p>
<p>Svar C.</p>`,

  9: `<p>384 miljoner meter är ${tex('384 \\cdot 10^6')} m = 384 Mm = 0,384 Gm, eftersom 1 Gm = 1 000 Mm.</p>
<p>Svar D.</p>`,

  10: `<p>${tex('10 \\cdot 180 + 165x = 175(10 + x)')} ger ${tex('1\\,800 + 165x = 1\\,750 + 175x')}, alltså ${tex('50 = 10x')} och ${tex('x = 5')}.</p>
<p>Svar B.</p>`,

  11: `<p>Delarna 3, 4 och 5 är tillsammans 12, och vinkelsumman är 180°. Den största vinkeln är ${tex('\\frac{5}{12} \\cdot 180° = 75°')}.</p>
<p>Svar B.</p>`,

  12: `<p>${tex('a^2 = 1 - \\frac{1}{16} = \\frac{15}{16}')}, så ${tex('a = \\sqrt{\\frac{15}{16}}')}.</p>
<p>Svar A.</p>`,

  // KVA
  13: `<p>I: ${tex('24 - 15 = 9')}. II: ${tex('3 \\cdot (6 - 5) = 3')}. I är större.</p>
<p>Svar A.</p>`,

  14: `<p>Höjden mot hypotenusan delar den stora triangeln i två mindre trianglar som är likformiga med den. Vinkeln ${tex('x')} i den övre lilla triangeln är ${tex('90° - ')}toppvinkeln, precis som ${tex('y')} i den stora triangeln. Alltså ${tex('x = y')}.</p>
<p>Svar C.</p>`,

  15: `<p>${tex('7^{-8} = \\frac{1}{7^8}')} och ${tex('7^{-16} = \\frac{1}{7^{16}}')}. Den senare har större nämnare och är mindre. I är större.</p>
<p>Svar A.</p>`,

  16: `<p>Om ${tex('x = 0')} är kvantiteterna lika. Om ${tex('x = 1')} och ${tex('k = -1')} är I större, och om ${tex('x = -1')} och ${tex('k = -1')} är II större. Det går inte att avgöra.</p>
<p>Svar D.</p>`,

  17: `<p>I: ${tex('\\pi \\cdot 3^2 \\cdot 4 = 36\\pi')}. II: ${tex('\\pi \\cdot 4^2 \\cdot 3 = 48\\pi')}. II är större.</p>
<p>Svar B.</p>`,

  18: `<p>Med ${tex('x = 3y')}: I ${tex('= 9y - y = 8y')} och II ${tex('= 6y + 2y = 8y')}. Lika.</p>
<p>Svar C.</p>`,

  19: `<p>I: ${tex('2^2 + 2^2 = 8')}. II: ${tex('0^2 + 3^2 = 9')}. II är större.</p>
<p>Svar B.</p>`,

  20: `<p>Medianen av fyra tal är medelvärdet av de två mittersta: ${tex('\\frac{x + 7}{2} = \\frac{y + 8}{2}')} ger ${tex('x = y + 1')}, så ${tex('x')} är större.</p>
<p>Svar A.</p>`,

  21: `<p>${tex('5 - x < 2')} ger ${tex('x > 3')} och ${tex('y - 3 > 1')} ger ${tex('y > 4')}. Både ${tex('x = 100, y = 5')} och ${tex('x = 4, y = 5')} är möjliga, så det går inte att avgöra.</p>
<p>Svar D.</p>`,

  22: `<p>Varje par av linjer kan ge en skärningspunkt. Med 8 linjer finns ${tex('\\frac{8 \\cdot 7}{2} = 28')} par, alltså högst 28 skärningspunkter, fler än 24.</p>
<p>Svar A.</p>`,

  // NOG
  23: `<p>(1): 75 procent svarta betyder 25 procent vita, sannolikheten är ${tex('\\frac{1}{4}')}. (2): tre gånger så många svarta betyder att en fjärdedel är vita, samma sannolikhet. Var för sig räcker.</p>
<p>Svar D.</p>`,

  24: `<p>(1) handlar bara om hur lärarna fördelar sig. (2) säger att fysiker och jurister är lika många, men inte hur många lärarna är. Tillsammans: ${tex('2f + l = 29')} där lärarna ${tex('l')} kan vara till exempel 5, 7 eller 9, så andelen fysiker går inte att bestämma.</p>
<p>Svar E.</p>`,

  25: `<p>Ekvationen ger ${tex('x = 2z - y + 17')}. (1): ${tex('x = 2(4 + y) - y + 17 = y + 25')}, inte bestämt. (2): ${tex('x = 2z + 12')}, inte bestämt. Tillsammans: ${tex('z = 9')} och ${tex('y = 5')} ger ${tex('x = 18 - 5 + 17 = 30')}.</p>
<p>Svar C.</p>`,

  26: `<p>(1): den verkliga medelhastigheten var 30 eller 34 km/h, vilket ger två olika tider. (2): ${tex('\\frac{60}{40} + \\frac{60}{24} = 1{,}5 + 2{,}5 = 4')} timmar. Endast (2) räcker.</p>
<p>Svar B.</p>`,

  27: `<p>(2) ger 7 taxar och 24 pudlar men inget om schäfrarna. (1) ger bara olikheter. Tillsammans: ${tex('24 - 15 = 9')} pudlar kvar ska vara färre än ${tex('s - 2')} schäfrar, så ${tex('s > 11')}. Det finns många möjliga värden.</p>
<p>Svar E.</p>`,

  28: `<p>(1): röd först och blå sist, men de två mittersta kan ligga i två ordningar. (2): den vita båten ligger intill både en röd och en grön båt och kan därför inte ligga först eller sist, så den första båten är röd. Då måste ordningen vara röd, vit, grön, blå. Endast (2) räcker.</p>
<p>Svar B.</p>`,

  // DTK
  29: `<p>2003 var den totala ammoniakavgången cirka 46 500 ton, och stallgödsel lagring stod för cirka 15 500 ton (stapeln går från 9 till 24,5). ${tex('\\frac{15{,}5}{46{,}5} \\approx 0{,}33')}, en tredjedel.</p>
<p>Svar B.</p>`,

  30: `<p>Den lägsta slamstapeln är 2004 (cirka 30 mg) och den lägsta fosforgödselstapeln 2005 (cirka 5,5 mg).</p>
<p>Svar B.</p>`,

  31: `<p>Stallventilation låg på cirka 10, 9, 10 och 9,5 tusen ton, tillsammans cirka 38 500 ton. Betesdrift var cirka 4 000 ton per år, lagring cirka 15 000 och spridning cirka 16 000.</p>
<p>Svar D.</p>`,

  32: `<p>På land i Kalmarsund: ${tex('6\\,946 - 1\\,578 = 5\\,368')}.</p>
<p>Svar C.</p>`,

  33: `<p>Över havet i Kalmarsund observerades dammfladdermus 5 gånger 2005 och 44 gånger 2006, nästan nio gånger så många. Trollfladdermus ökade från 3 till 81, stor fladdermus från 47 till 214 och gråskimlig från 6 till 25.</p>
<p>Svar A.</p>`,

  34: `<p>Radarobservationer av stor fladdermus: ${tex('425 + 2\\,564 = 2\\,989')} av totalt 4 607. ${tex('\\frac{2\\,989}{4\\,607} \\approx 0{,}65')}.</p>
<p>Svar B.</p>`,

  35: `<p>1970: Mikael cirka 2 300, Lars cirka 1 900, Johan cirka 1 700, och Karl, Marcus och Oskar tillsammans några hundra. Summan är cirka 6 300, närmast 6 500.</p>
<p>Svar C.</p>`,

  36: `<p>Vanligast 1960 var Eva med cirka 3 000. ${tex('\\frac{49\\,000}{3\\,000} \\approx 16')}, alltså en av sexton.</p>
<p>Svar A.</p>`,

  37: `<p>1980 fick cirka 2 300 pojkar namnet Johan och cirka 650 namnet Lars. ${tex('\\frac{2\\,300}{650} \\approx 3{,}5')}.</p>
<p>Svar B.</p>`,

  38: `<p>I väst–ostprofilen sträcker sig lagret av förmultnande grästorvor (v-tecken) från cirka +11 i öster till cirka −9 i väster, alltså ungefär 20 meter.</p>
<p>Svar D.</p>`,

  39: `<p>I nord–sydprofilen ligger punkten 7 meter norr om nollpunkten mellan +5 och +10. På nivån −100 cm är det där mullblandad sand (små snedstreck), under grästorven och ovanför lagret med förmultnande grästorvor.</p>
<p>Svar B.</p>`,

  40: `<p>Ytterkonturen sträcker sig cirka 30 meter i väst–ostlig riktning och cirka 28 meter i nord–sydlig riktning, men formen är kantig snarare än rund. Ungefär som en romb med diagonalerna 30 och 28 meter: ${tex('\\frac{30 \\cdot 28}{2} = 420')} m², något mer med de utbuktande sidorna, alltså cirka 450 m².</p>
<p>Svar C.</p>`,
};
