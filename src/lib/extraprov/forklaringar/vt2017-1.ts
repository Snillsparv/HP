// Textförklaringar till högskoleprovet 1 april 2017, provpass 1 (kvantitativt).
import { tex } from '../types.js';

export const forklaringar: Record<number, string> = {
  // XYZ
  1: `<p>${tex('\\frac{5{,}1}{1{,}7} = 3')} och ${tex('\\frac{10^8}{10^4} = 10^4')}, så kvoten är ${tex('3 \\cdot 10^4')}.</p>
<p>Svar C.</p>`,

  2: `<p>Den totala energin är ${tex('13{,}5 + 46{,}5 + 120 = 180')} kcal. Andelen från fett är ${tex('\\frac{13{,}5}{180} = 0{,}075')}, alltså 7,5 %.</p>
<p>Svar A.</p>`,

  3: `<p>AB och CD är parallella och lika långa, och BD = 6 m, så även AC = 6 m. Sträckan AB är hypotenusan i en rätvinklig triangel med kateterna 6 och 8, alltså 10 m. Detsamma gäller CD. Totalt ${tex('10 + 8 + 10 + 8 = 36')} m.</p>
<p>Svar C.</p>`,

  4: `<p>${tex('3x - 15 = 21 - 5x')} ger ${tex('8x = 36')}, alltså ${tex('x = 4{,}5')}.</p>
<p>Svar D.</p>`,

  5: `<p>Arean är ${tex('(1 + a)(a - 1) = (a + 1)(a - 1) = a^2 - 1')} enligt konjugatregeln.</p>
<p>Svar B.</p>`,

  6: `<p>Grafen ska skära x-axeln i −8 och 4 och ligga ovanför x-axeln däremellan (y = 3,5 i x = −1). Det är en parabel som öppnar sig nedåt, graf D. Graf B ligger under x-axeln mellan nollställena, och A och C är räta linjer som inte kan ha två nollställen.</p>
<p>Svar D.</p>`,

  7: `<p>${tex('2x - 4y - x^2 - 3xy + 3xy - 3y^2')}. Termerna ${tex('-3xy')} och ${tex('3xy')} tar ut varandra, kvar blir ${tex('-x^2 - 3y^2 + 2x - 4y')}.</p>
<p>Svar B.</p>`,

  8: `<p>${tex('0{,}5 \\cdot 0{,}5 = 0{,}25')}, så ${tex('\\sqrt{0{,}25} = 0{,}5')}.</p>
<p>Svar C.</p>`,

  9: `<p>Den nya funktionen är ${tex('a \\cdot f(x) = akx + am')}. Eftersom ${tex('0 < a < 1')} är ${tex('|am| < |m|')}, så skärningen med y-axeln hamnar närmare origo, och ${tex('|ak| < |k|')}, så lutningen blir mindre brant.</p>
<p>Svar A.</p>`,

  10: `<p>Primtalen mellan 27 och 36 är 29 och 31. Medelvärdet är ${tex('\\frac{29 + 31}{2} = 30')}.</p>
<p>Svar B.</p>`,

  11: `<p>Sannolikheten att inte slå en sexa i ett kast är ${tex('\\frac{5}{6}')}. För två kast: ${tex('\\frac{5}{6} \\cdot \\frac{5}{6} = \\frac{25}{36}')}.</p>
<p>Svar B.</p>`,

  12: `<p>${tex('x^m \\cdot x^n = x^{m + n}')} och ${tex('\\left(x^m\\right)^n = x^{mn}')}, så det krävs att ${tex('m + n = mn')}. Med ${tex('m = n = 2')} blir båda 4. I A är ${tex('m + n = 2{,}5')} men ${tex('mn = 1')}, i B är summan 2 och produkten 1, och i C är summan 0 och produkten ${tex('-\\frac{1}{4}')}.</p>
<p>Svar D.</p>`,

  // KVA
  13: `<p>Mia: ${tex('\\frac{x}{y/2} = \\frac{2x}{y}')} km/h. Pia: ${tex('\\frac{2x}{y}')} km/h. Hastigheterna är lika.</p>
<p>Svar C.</p>`,

  14: `<p>${tex('(x + 1)^2 + (x - 1)^2 = x^2 + 2x + 1 + x^2 - 2x + 1 = 2x^2 + 2')}, vilket är mindre än ${tex('2x^2 + 4')}.</p>
<p>Svar A.</p>`,

  15: `<p>Arean är ${tex('\\frac{4x \\cdot 3x}{2} = 6x^2')} m², men värdet på ${tex('x')} är okänt. Med ${tex('x = 1')} är arean 6, med ${tex('x = 2')} är den 24.</p>
<p>Svar D.</p>`,

  16: `<p>${tex('7\\sqrt{35} = \\sqrt{49 \\cdot 35} = \\sqrt{1715}')} och ${tex('6\\sqrt{50} = \\sqrt{36 \\cdot 50} = \\sqrt{1800}')}. II är större.</p>
<p>Svar B.</p>`,

  17: `<p>Talen är 1 och 10 (medelvärde 5,5) eller 2 och 5 (medelvärde 3,5). Båda är större än ${tex('\\frac{10}{3} \\approx 3{,}33')}.</p>
<p>Svar A.</p>`,

  18: `<p>${tex('2x - y - 3 = y')} ger ${tex('2x = 2y + 3')}, alltså ${tex('x = y + 1{,}5')}. I är alltid större.</p>
<p>Svar A.</p>`,

  19: `<p>${tex('47^2 = 2209')}, vilket är ett större än 2208.</p>
<p>Svar B.</p>`,

  20: `<p>${tex('f(10) = 1000 - 1000 = 0')} och ${tex('f(0) = 0')}. Lika.</p>
<p>Svar C.</p>`,

  21: `<p>Höjden är tre diametrar, ${tex('h = 3d')}. Omkretsen av en cirkel är ${tex('\\pi d \\approx 3{,}14d')}, vilket är större.</p>
<p>Svar B.</p>`,

  22: `<p>I: ${tex('1 + x = -0{,}1')} ger ${tex('x = -1{,}1')}. II: ${tex('-0{,}1 = y + 1')} ger ${tex('y = -1{,}1')}. Lika.</p>
<p>Svar C.</p>`,

  // NOG
  23: `<p>(1): tre minuter är 1/4 av den avsatta tiden, så tiden är 12 minuter. (2): tre minuter är 25 procent av tiden, alltså återigen 12 minuter. Var för sig räcker.</p>
<p>Svar D.</p>`,

  24: `<p>Priserna i ordning är 110, p2, p3, p4 och 180. (1) ger p3 = 135 men inget om p4. (2) ger ${tex('p_3 + p_4 = 310')} men inte p4 ensamt. Tillsammans: ${tex('p_4 = 175')}, så de två dyraste kostar ${tex('175 + 180 = 355')} kr.</p>
<p>Svar C.</p>`,

  25: `<p>(1): man kan ta upp 11 svampar utan att få en kantarell, så det finns 11 champinjoner och 19 kantareller. (2): 19 svampar kan tas utan champinjon, så det finns 19 kantareller. Var för sig räcker.</p>
<p>Svar D.</p>`,

  26: `<p>(1): en likbent rätvinklig triangel har vinklarna 45°, 45° och 90°. (2): en vinkel på 45° ger många möjligheter för de andra två. Endast (1) räcker.</p>
<p>Svar A.</p>`,

  27: `<p>(1): 36 plagg varav 16 tröjor ger 20 skjortor totalt. (2) säger bara hur många av Markus egna plagg som är skjortor, inte hur många skjortor som tvättats totalt. Endast (1) räcker.</p>
<p>Svar A.</p>`,

  28: `<p>(1) tillåter 394 och 934. (2) tillåter 349, 394 och 934. Tillsammans återstår 394 och 934, så talet är inte bestämt.</p>
<p>Svar E.</p>`,

  // DTK
  29: `<p>Nötö hade 1973 fler kvinnor (10) än män (8), och antalet bofasta minskade från 82 (1954) till 9 (2004). Vänö och Lökholm hade fler män än kvinnor 1973, och Aspö minskade från 18 till 9, exakt hälften.</p>
<p>Svar A.</p>`,

  30: `<p>Staten ägde cirka 2 procent 1974 och cirka 22 procent 2004, en ökning med ungefär 20 procentenheter av 9 200 hektar, alltså cirka 1 800 hektar.</p>
<p>Svar C.</p>`,

  31: `<p>Lika många eller fler familjer 2004 än 1954: Stenskär (2 till 3), Rockelholm, Byskär, Brännskär och Helsingholm (1 till 1) samt Tunnhamn (1 till 2). Det är sex öar.</p>
<p>Svar D.</p>`,

  32: `<p>Inom transport arbetade cirka 3 200 män (4 500 minus 1 300 kvinnor) och inom hotell och restaurang cirka 1 800 män (6 200 minus 4 400). Skillnaden är ungefär 1 400.</p>
<p>Svar A.</p>`,

  33: `<p>Samhällsvetenskapsprogrammet hade cirka 16 300 kvinnor och 10 000 män, alltså cirka 26 300 elever. Männens andel är ${tex('\\frac{10\\,000}{26\\,300} \\approx 0{,}38')}, ungefär två femtedelar.</p>
<p>Svar B.</p>`,

  34: `<p>Färre än 3 000 avgångselever hade energiprogrammet, hantverksprogrammet, industriprogrammet, International Baccalaureate, livsmedelsprogrammet, naturbruksprogrammet och specialutformat program, alltså sju utbildningar.</p>
<p>Svar C.</p>`,

  35: `<p>Stuga 1 ligger på 200 meter och stuga 7 på 550 meter, en skillnad på 350 meter. De andra paren skiljer 300, 450 respektive 300 meter.</p>
<p>Svar A.</p>`,

  36: `<p>Över 600 meter ligger stugorna 8 (300 övernattningar), 9 (200), 10 (50) och 11 (100). Skillnaden mellan störst och minst är ${tex('300 - 50 = 250')}.</p>
<p>Svar C.</p>`,

  37: `<p>A: 5 + 5 + 5 = 15 km. B: 5 + 5 + 10 = 20 km. C: 10 + 5 + 5 = 20 km. D: 10 (2 till 4) + 10 (4 till 6) + 5 (6 till 7) = 25 km.</p>
<p>Svar D.</p>`,

  38: `<p>2005: växthusgaser utomlands cirka 49 miljoner ton och kväveoxider utomlands cirka 112 tusen ton. 2004 var kväveoxiderna under 100, och 2006 och 2007 var växthusgaserna över 50.</p>
<p>Svar B.</p>`,

  39: `<p>De totala utsläppen av kväveoxider 2004 till 2008 var cirka 222, 220, 225, 228 och 213 tusen ton, sammanlagt ungefär 1 100 tusen ton, alltså 1,1 miljoner ton.</p>
<p>Svar B.</p>`,

  40: `<p>2008 var de totala utsläppen cirka 98 miljoner ton, varav cirka 58 utomlands och cirka 40 i Sverige. ${tex('\\frac{40}{98} \\approx 0{,}4')}, alltså 2/5.</p>
<p>Svar A.</p>`,
};
