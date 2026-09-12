// Textförklaringar till högskoleprovet 25 oktober 2014, provpass 2 (kvantitativt).
import { tex } from '../types.js';

export const forklaringar: Record<number, string> = {
  // XYZ
  1: `<p>${tex('\\frac{1}{3} + \\frac{1}{4} = \\frac{4}{12} + \\frac{3}{12} = \\frac{7}{12}')}, så ${tex('x = 1 - \\frac{7}{12} = \\frac{5}{12}')}.</p>
<p>Svar B.</p>`,

  2: `<p>Ett tal som är delbart med både 6 och 9 är delbart med deras minsta gemensamma multipel, 18. Till exempel 18 självt är inte delbart med 15, 27 eller 72.</p>
<p>Svar B.</p>`,

  3: `<p>Vänsterledet har samma form som högerledet med ${tex('x + 1')} i stället för 17. Med ${tex('x + 1 = 17')}, alltså ${tex('x = 16')}, stämmer likheten.</p>
<p>Svar C.</p>`,

  4: `<p>Vinklarna ligger på var sin sida om L och är alternatvinklar vid parallella linjer, alltså lika stora: ${tex('3x - 45 = 5x - 105')} ger ${tex('2x = 60')} och ${tex('x = 30')}.</p>
<p>Svar C.</p>`,

  5: `<p>Uppgiften kräver ${tex('4 \\cdot 7 = 28')} maskindagar. På 4 dagar behövs ${tex('\\frac{28}{4} = 7')} maskiner, alltså 3 fler.</p>
<p>Svar B.</p>`,

  6: `<p>Punkterna sluttar nedåt åt höger, så lutningen är negativ. De skär y-axeln ovanför origo, så konstanttermen är positiv. Det ger ${tex('y = -x + 4')}.</p>
<p>Svar D.</p>`,

  7: `<p>${tex('2{,}1 \\cdot 3{,}9 = 8{,}19')} och ${tex('10^3 \\cdot 10^3 = 10^6')}.</p>
<p>Svar B.</p>`,

  8: `<p>${tex('(x + y)^2 - x^2 = x^2 + 2xy + y^2 - x^2 = 2xy + y^2')}.</p>
<p>Svar D.</p>`,

  9: `<p>Addera de tre ekvationerna: ${tex('2(x + y + z) = 30')}, så ${tex('x + y + z = 15')} och medelvärdet är ${tex('\\frac{15}{3} = 5')}.</p>
<p>Svar B.</p>`,

  10: `<p>${tex('156 = 4 \\cdot 39 = 2 \\cdot 2 \\cdot 3 \\cdot 13')}. De andra alternativen innehåller tal som inte är primtal (12, 52 och 39).</p>
<p>Svar C.</p>`,

  11: `<p>${tex('\\frac{5}{11}x = \\frac{45}{77}')} ger ${tex('x = \\frac{45}{77} \\cdot \\frac{11}{5} = \\frac{9}{7}')}. En tredjedel av det är ${tex('\\frac{3}{7}')}.</p>
<p>Svar A.</p>`,

  12: `<p>${tex('\\sqrt{32} = \\sqrt{16 \\cdot 2} = 4\\sqrt{2}')} och ${tex('\\sqrt{18} = \\sqrt{9 \\cdot 2} = 3\\sqrt{2}')}. Skillnaden är ${tex('\\sqrt{2}')}.</p>
<p>Svar A.</p>`,

  // KVA
  13: `<p>I: ${tex('\\frac{5}{9} \\approx 0{,}56')}. II: ${tex('\\frac{5}{11} \\approx 0{,}45')}. I är större.</p>
<p>Svar A.</p>`,

  14: `<p>${tex('(x^a)^b = x^{ab}')} och ${tex('(x^b)^a = x^{ba}')}, samma tal. Lika.</p>
<p>Svar C.</p>`,

  15: `<p>Skillnaden 15 000 invånare minskar med ${tex('1\\,000 + 1\\,500 = 2\\,500')} per år, så det tar ${tex('\\frac{15\\,000}{2\\,500} = 6')} år. I är större.</p>
<p>Svar A.</p>`,

  16: `<p>Yttervinkeln 150° vid A betyder att innervinkeln A är 30°. I en parallellogram är motstående vinklar lika, så ${tex('x = 30°')}. Vinkeln B är ${tex('180° - 30° = 150°')}, så yttervinkeln ${tex('6y = 30°')} och ${tex('y = 5°')}. I är större.</p>
<p>Svar A.</p>`,

  17: `<p>${tex('36^{\\frac{3}{2}} = \\left(\\sqrt{36}\\right)^3 = 6^3 = 216')}, mindre än 648. II är större.</p>
<p>Svar B.</p>`,

  18: `<p>Att L<sub>1</sub> lutar mer än L<sub>2</sub> säger inget om var linjerna skär y-axeln. Det går inte att avgöra.</p>
<p>Svar D.</p>`,

  19: `<p>${tex('x^2 - 15 = 0')} ger ${tex('x = \\sqrt{15} \\approx 3{,}87')}, vilket är mer än 3,5 (eftersom ${tex('3{,}5^2 = 12{,}25 < 15')}). I är större.</p>
<p>Svar A.</p>`,

  20: `<p>${tex('x + y + z = 180°')} och ${tex('x = y + z')} ger ${tex('2x = 180°')}, alltså ${tex('x = 90°')}. Då är ${tex('y + z = 90°')}, så ${tex('z')} är mindre än 90°. II är större.</p>
<p>Svar B.</p>`,

  21: `<p>Både ${tex('x')} och ${tex('y')} är negativa, så produkten är positiv och minst när beloppen är minst: ${tex('(-3) \\cdot (-2) = 6')}. Lika.</p>
<p>Svar C.</p>`,

  22: `<p>I: 0,1. II: ${tex('\\left(\\frac{35}{3{,}5}\\right)^{-1} = 10^{-1} = 0{,}1')}. Lika.</p>
<p>Svar C.</p>`,

  // NOG
  23: `<p>(1): 9 stenar är ${tex('\\frac{1}{9}')} av samlingen före, så den var ${tex('9 \\cdot 9 = 81')} stenar. (2): 9 stenar är ${tex('\\frac{1}{10}')} av samlingen efter, som då är 90, alltså 81 före. Var för sig räcker.</p>
<p>Svar D.</p>`,

  24: `<p>(1): ${tex('17 + 21 - 15 = 23')} elever har minst ett av föremålen, men de som saknar båda är okända. (2): 5 saknar båda, men de övriga är okända. Tillsammans: ${tex('23 + 5 = 28')} elever.</p>
<p>Svar C.</p>`,

  25: `<p>(1): en fjärdedel av hinken fylls på 1,5 timme, så den sista fjärdedelen är fylld kl 12.00. Räcker. (2) säger inget om hur fort hinken fylls. Endast (1) räcker.</p>
<p>Svar A.</p>`,

  26: `<p>(1) ger 40 ljushåriga barn och (2) ger 40 flickor, men hur många av flickorna som är ljushåriga går inte att avgöra ens med båda uppgifterna.</p>
<p>Svar E.</p>`,

  27: `<p>(1): det finns högst en svart boll, men antalet vita är okänt, så sannolikheten kan vara till exempel 1 eller ${tex('\\frac{9}{10}')}. (2): två tredjedelar av bollarna är vita, så sannolikheten är ${tex('\\frac{2}{3}')}. Endast (2) räcker.</p>
<p>Svar B.</p>`,

  28: `<p>Kalla Bengts ålder ${tex('b')}, så är Alice ${tex('b + 14')}. (1): ${tex('b + 24 = 2(b + 10)')} ger ${tex('b = 4')}. Räcker. (2) säger bara det som redan är känt, att åldersskillnaden är 14 år. Endast (1) räcker.</p>
<p>Svar A.</p>`,

  // DTK
  29: `<p>Totalskörden i hela riket: 48 600 (2003), 54 800 (2004), 45 200 (2005), 31 500 (2006) och 37 400 (2007). Från 2005 till 2006 minskade den med ${tex('\\frac{45\\,200 - 31\\,500}{45\\,200} \\approx 30')} procent, mer än de andra förändringarna (cirka 13, 18 och 19 procent).</p>
<p>Svar C.</p>`,

  30: `<p>Fem av de 21 länen hade minst 1 000 hektar: Uppsala, Skåne, Västra Götalands, Dalarnas och Gävleborgs. ${tex('\\frac{5}{21} \\approx 0{,}24')}, cirka 25 procent.</p>
<p>Svar B.</p>`,

  31: `<p>${tex('\\frac{15\\,510}{593} \\approx 26')} hektar per företag.</p>
<p>Svar A.</p>`,

  32: `<p>I Siljansringen vid Mora och Rättvik finns både sandsten från silur (ringmönstret i ringen) och prekambrisk Dalasandsten (inne i ringen).</p>
<p>Svar A.</p>`,

  33: `<p>Fältet med kambrisk sandsten längs kusten vid Kalmar är ungefär fem och en halv gånger så långt som skalstrecket för 20 km, alltså cirka 110 km.</p>
<p>Svar C.</p>`,

  34: `<p>Skalstrecket är 10 km. 18 km sydväst om Örebro, snett ned till vänster, ligger man mitt i det prickade fältet, som enligt teckenförklaringen är sandsten från kambrium.</p>
<p>Svar C.</p>`,

  35: `<p>1994 gick cirka 600 av totalt cirka 2 150 tusen kubikmeter till Tyskland, ungefär en fjärdedel. 2003 gick cirka 400 av cirka 3 900, ungefär en tiondel.</p>
<p>Svar D.</p>`,

  36: `<p>De fyra minsta namngivna mottagarna 2003 var Frankrike (cirka 70), Holland (cirka 350), Norge (cirka 370) och Tyskland (cirka 400) tusen kubikmeter. Tillsammans cirka 1 190 tusen kubikmeter, alltså ungefär 1 200 000 kubikmeter.</p>
<p>Svar D.</p>`,

  37: `<p>2002 exporterades cirka 3 960 tusen kubikmeter hyvlade trävaror. ${tex('\\frac{3{,}96}{16} \\approx 0{,}25')} av produktionen och ${tex('\\frac{3{,}96}{11{,}5} \\approx 0{,}34')} av exporten.</p>
<p>Svar B.</p>`,

  38: `<p>1997: lektorer cirka 5 100, adjunkter 4 650, annan personal 2 800, professorer 2 300, forskarassistenter 1 100 och gäst- och timlärare 200, totalt cirka 16 150. ${tex('\\frac{2\\,300}{16\\,150} \\approx 0{,}14')}, cirka 15 procent.</p>
<p>Svar B.</p>`,

  39: `<p>2007 var adjunkterna cirka 6 100 och forskarassistenterna cirka 900. ${tex('\\frac{6\\,100}{900} \\approx 6{,}8')}, ungefär sju gånger så många.</p>
<p>Svar D.</p>`,

  40: `<p>Gäst- och timlärarna ökade från cirka 200 till cirka 350, en ökning med cirka 75 procent. Lektorerna, adjunkterna och professorerna ökade med cirka 6, 5 respektive 10 procent.</p>
<p>Svar D.</p>`,
};
