// Textförklaringar till högskoleprovet 5 april 2014, provpass 4 (kvantitativt).
import { tex } from '../types.js';

export const forklaringar: Record<number, string> = {
  // XYZ
  1: `<p>Varje kvadrat har sidan ${tex('12 / 4 = 3')}. Rektangeln är fyra kvadrater lång och en hög, alltså 12 gånger 3, och omkretsen är ${tex('2(12 + 3) = 30')} längdenheter.</p>
<p>Svar B.</p>`,

  2: `<p>${tex('(x^2)^4 = x^8')} och ${tex('\\frac{x^8}{x^5} = x^3')}.</p>
<p>Svar C.</p>`,

  3: `<p>${tex('\\frac{5 + x}{2} = 8')} ger ${tex('x = 11')}, och ${tex('\\frac{3 + y}{2} = 4')} ger ${tex('y = 5')}. Medelvärdet av <i>x</i> och <i>y</i> är ${tex('\\frac{11 + 5}{2} = 8')}.</p>
<p>Svar D.</p>`,

  4: `<p>${tex('3a^2b + 2a^2b^2 - (a^2b^2 - ab^2) = 3a^2b + 2a^2b^2 - a^2b^2 + ab^2 = 3a^2b + a^2b^2 + ab^2')}.</p>
<p>Svar D.</p>`,

  5: `<p>A: ${tex('xz')} är negativt och ${tex('x^2')} positivt, så olikheten är fel. B: <i>x</i> och <i>y</i> har olika tecken och kan inte vara lika. C: ${tex('xz < 0 < yz')}. D: ${tex('\\frac{x}{y}')} är negativt och <i>z</i> positivt, så ${tex('z > \\frac{x}{y}')} gäller alltid.</p>
<p>Svar D.</p>`,

  6: `<p>${tex('0{,}8x = 140')} ger ${tex('x = \\frac{140}{0{,}8} = 175')}.</p>
<p>Svar C.</p>`,

  7: `<p>Multiplicera med <i>x</i>: ${tex('y - x = 1')}, alltså ${tex('x = y - 1')}.</p>
<p>Svar A.</p>`,

  8: `<p>Lutningen <i>k</i> ändras inte, bara skärningen med <i>y</i>-axeln flyttas från <i>m</i> till ${tex('-m')}. Linjen parallellförflyttas alltså uppåt.</p>
<p>Svar D.</p>`,

  9: `<p>${tex('\\frac{100}{10} - \\frac{100}{1000} = 10 - 0{,}1 = 9{,}9')}.</p>
<p>Svar C.</p>`,

  10: `<p>Funktionen har nollställena ${tex('x = 3')} och ${tex('x = -2')}, och eftersom ${tex('x^2')}-termen är positiv öppnar sig parabeln uppåt. Symmetrilinjen ligger mitt emellan nollställena, vid ${tex('x = 0{,}5')}, så minimipunkten ligger strax till höger om <i>y</i>-axeln och under <i>x</i>-axeln (${tex('y = -6')} för ${tex('x = 0')}). Det stämmer med graf B.</p>
<p>Svar B.</p>`,

  11: `<p>Avrunda: ${tex('\\frac{40 \\cdot 400 \\cdot 88}{40 \\cdot 8\\,800 \\cdot 2} = \\frac{400 \\cdot 88}{8\\,800 \\cdot 2} = \\frac{35\\,200}{17\\,600} = 2')}.</p>
<p>Svar A.</p>`,

  12: `<p>Radien är 1, så ${tex('MB = 1')} och ${tex('AM = AB = \\frac{1}{2}')}. Sträckan MC är också en radie, alltså 1. Pythagoras sats i triangeln AMC ger ${tex('AC = \\sqrt{1^2 - \\left(\\frac{1}{2}\\right)^2} = \\sqrt{\\frac{3}{4}} = \\frac{\\sqrt{3}}{2}')} cm.</p>
<p>Svar B.</p>`,

  // KVA
  13: `<p>${tex('4 < 2x - 2 < 8')} ger ${tex('6 < 2x < 10')}, alltså ${tex('3 < x < 5')}. Då är <i>x</i> alltid mindre än 6. II är större.</p>
<p>Svar B.</p>`,

  14: `<p>${tex('\\sqrt{11} \\approx 3{,}3')} medan ${tex('3 + \\sqrt{2} \\approx 4{,}4')}. II är större.</p>
<p>Svar B.</p>`,

  15: `<p>${tex('\\pi r^2 = 9\\pi')} ger radien 3 cm. Kvadratens sida är ${tex('\\sqrt{3} \\approx 1{,}7')} cm. I är större.</p>
<p>Svar A.</p>`,

  16: `<p>Eftersom ${tex('x > y')} är ${tex('y - x')} negativt och ${tex('x - y')} positivt. Nämnarna är positiva, så I är negativ och II positiv. II är större.</p>
<p>Svar B.</p>`,

  17: `<p>En kvadrat är aldrig negativ, så ${tex('y = x^2 \\geq 0 > -1')}. I är större.</p>
<p>Svar A.</p>`,

  18: `<p>Summa 10 eller mer: (4,6), (5,5), (6,4), (5,6), (6,5) och (6,6), alltså 6 av 36 utfall. Summa 4 eller mindre: (1,1), (1,2), (2,1), (1,3), (2,2) och (3,1), också 6 av 36. Lika.</p>
<p>Svar C.</p>`,

  19: `<p>Låt kvadraten ha sidan 2 med A = (0, 0), B = (2, 0), C = (2, 2) och D = (0, 2), så att E = (1, 2) och F = (2, 1). Linjen AF är ${tex('y = \\frac{x}{2}')} och linjen BE är ${tex('y = -2x + 4')}; de skär varandra i G = (1,6; 0,8). Triangeln ABG har basen 2 och höjden 0,8, alltså arean 0,8. Triangeln BCE har arean ${tex('\\frac{2 \\cdot 1}{2} = 1')}, och från den tas triangeln BFG bort, med basen BF = 1 och höjden ${tex('2 - 1{,}6 = 0{,}4')}, alltså arean 0,2. Fyrhörningen CEGF har arean ${tex('1 - 0{,}2 = 0{,}8')}. Lika.</p>
<p>Svar C.</p>`,

  20: `<p>II kan skrivas ${tex('\\frac{x(y + 3)}{3y}')}. Med ${tex('x = 3')} och ${tex('y = 1')} är I ${tex('= \\frac{3}{4}')} och II ${tex('= 4')}, men med ${tex('x = 3')} och ${tex('y = -1')} är I ${tex('= \\frac{3}{2}')} och II ${tex('= -2')}. Det går inte att avgöra.</p>
<p>Svar D.</p>`,

  21: `<p>A kör 48 km på ${tex('\\frac{4}{3}')} timme, alltså 36 km/h, och kör ${tex('36x')} km på <i>x</i> timmar. B kör 60 km på ${tex('\\frac{5}{6}')} timme, alltså 72 km/h, och kör ${tex('72 \\cdot 0{,}5x = 36x')} km. Lika.</p>
<p>Svar C.</p>`,

  22: `<p>${tex('y - x = 1')} ger ${tex('x = y - 1')} och ${tex('z - y = 1')} ger ${tex('z = y + 1')}. Då är ${tex('x + y + z = (y - 1) + y + (y + 1) = 3y')}. Lika.</p>
<p>Svar C.</p>`,

  // NOG
  23: `<p>Det finns 25 gröna karameller. (1) ger direkt ${tex('25 - 10 = 15')} sura gröna. (2) säger bara hur många som är sura totalt, inte hur de fördelar sig på färg. Endast (1) räcker.</p>
<p>Svar A.</p>`,

  24: `<p>Vinkeln <i>x</i> är yttervinkel till triangeln ADC, så ${tex('x = y + z')}. (1) ger bara <i>z</i> och (2) bara <i>y</i>, men tillsammans ger de ${tex('x = 26° + 88° = 114°')}.</p>
<p>Svar C.</p>`,

  25: `<p>(1): 14,4 km/h är 4 m/s, så den långsammare behöver 100 sekunder, men den snabbares tid är okänd. (2): den snabbare tar 80 sekunder, och den långsammare har då sprungit 320 meter, alltså 4 m/s, och behöver 100 sekunder. Skillnaden 20 sekunder följer av (2) ensam.</p>
<p>Svar B.</p>`,

  26: `<p>Kalla antalen <i>s</i>, <i>v</i> och <i>r</i>. (1): ${tex('\\frac{r}{s + r} = \\frac{1}{4}')} ger ${tex('s = 3r')}. (2): ${tex('\\frac{s}{s + v} = \\frac{6}{10}')} ger ${tex('v = \\frac{2s}{3}')}. Tillsammans: ${tex('s = 3r')} och ${tex('v = 2r')}, så sannolikheten för vit är ${tex('\\frac{2r}{3r + 2r + r} = \\frac{1}{3}')}. Var för sig räcker uppgifterna inte.</p>
<p>Svar C.</p>`,

  27: `<p>(1): Martin tar ut pengar och Anton öppnar inte sparkonto, så tvåan i kön, som öppnar sparkonto, är Hanna eller Sara. Vem som står först är okänt. (2): tvåan är en kvinna, men ettan kan vara vem som helst av de övriga. Tillsammans: tvåan är en kvinna, och ettan kan fortfarande vara Anton, Martin eller den andra kvinnan.</p>
<p>Svar E.</p>`,

  28: `<p>${tex('x - y > x + y')} är detsamma som ${tex('y < 0')}. (1): ${tex('16 - y > 20')} ger ${tex('y < -4')}, alltså negativt, så svaret är ja. (2): ${tex('y = -40')} är negativt, så svaret är ja. Var för sig räcker.</p>
<p>Svar D.</p>`,

  // DTK
  29: `<p>Mitten av juli (tillfälle 4): Västeråsfjärden har ingen skillnad (båda cirka 22,5), Svinnegarnsviken cirka 22,5 mot 10, Ekoln cirka 21,5 mot 11 och Skarven cirka 21,5 mot 10,5. Störst skillnad, cirka 12,5 grader, har Svinnegarnsviken.</p>
<p>Svar B.</p>`,

  30: `<p>Slutet av september (tillfälle 6) på det största djupet: Blacken och Granfjärden cirka 14 grader, Prästfjärden cirka 10,5, Skarven och S. Björkfjärden cirka 9, Ekoln och Görväln cirka 7.</p>
<p>Svar A.</p>`,

  31: `<p>Prästfjärden, 0,5 m mot 8 till 15 m: april 2 mot 2, maj cirka 9,5 mot 6,5, juli cirka 18,5 mot 18, augusti cirka 18 mot 14,5. Skillnaden var störst i mitten av augusti.</p>
<p>Svar D.</p>`,

  32: `<p>I det övre diagrammet ligger 1965 års kurva 0,5 km sydväst om centrum på cirka 6 kr/m² (toppen på cirka 22 ligger längre ut, vid 0,8 km). I det nedre diagrammet ligger kurvan 0,5 km sydost om centrum på cirka 14 till 15 kr/m². Skillnaden är cirka 9 kr/m².</p>
<p>Svar B.</p>`,

  33: `<p>Det högsta värdet 1965, cirka 22 kr/m², finns i sektorn sydväst, cirka 0,8 km från centrum. På kartan ligger både flerfamiljshus och villor i sydvästsektorn.</p>
<p>Svar C.</p>`,

  34: `<p>Stationsbyggnaden ligger vid järnvägen cirka 0,6 km rakt öster om centrum, strax söder om öst–västlinjen, alltså i sektorn sydost. I det nedre diagrammet är 1965 års värde 0,6 km sydost om centrum cirka 8 kr/m².</p>
<p>Svar B.</p>`,

  35: `<p>Fler än 160 titlar 2005 hade bilderböcker (cirka 437), mellanåldersböcker (cirka 288), ungdomsböcker (cirka 255) och faktaböcker (cirka 176); tecknade serier hade bara cirka 152. Av de fyra ökade bara mellanåldersböckerna 2006, till cirka 296.</p>
<p>Svar B.</p>`,

  36: `<p>Cirkeldiagrammet ger 17,5 procent japanska bland de 735 översatta förstaupplagorna 2006. ${tex('0{,}175 \\cdot 735 \\approx 129')}.</p>
<p>Svar C.</p>`,

  37: `<p>Stapeldiagrammet visar cirka 240 ungdomsböcker 2006. Av dem var ${tex('108 + 43 = 151')} översatta, så ${tex('240 - 151 \\approx 90')} hade svenska som originalspråk.</p>
<p>Svar A.</p>`,

  38: `<p>Flest vårdtillfällen hade 45–64 år (334 893). Flest vårdtillfällen per patient hade 75–84 år (1,88).</p>
<p>Svar B.</p>`,

  39: `<p>Somatisk vård 1 368 937 vårdtillfällen mot psykiatrisk vård 85 433. ${tex('\\frac{1\\,368\\,937}{85\\,433} \\approx 16')}.</p>
<p>Svar C.</p>`,

  40: `<p>65 år och äldre: ${tex('223\\,298 + 284\\,816 + 140\\,407 = 648\\,521')} vårdtillfällen av totalt 1 426 595, alltså ${tex('\\frac{648\\,521}{1\\,426\\,595} \\approx 0{,}45')}.</p>
<p>Svar C.</p>`,
};
