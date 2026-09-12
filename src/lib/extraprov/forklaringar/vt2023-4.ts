// Textförklaringar till högskoleprovet 25 mars 2023, provpass 4 (kvantitativt).
import { tex } from '../types.js';

export const forklaringar: Record<number, string> = {
  1: `<p>Multiplicera in: ${tex('5x - 20 = 16 + 2x')}.</p>
<p>${tex('3x = 36')} ger ${tex('x = 12')}. Svar D.</p>`,

  2: `<p>Totalt finns ${tex('50 + 63 + 36 + 56 + 45 = 250')} kulor.</p>
<p>18 % av 250 är ${tex('0{,}18 \\cdot 250 = 45')}, vilket är antalet vita kulor. Svar D.</p>`,

  3: `<p>Sök två tal med produkten 5 och summan −6: det är −1 och −5.</p>
<p>${tex('(x - 1)(x - 5) = x^2 - 5x - x + 5 = x^2 - 6x + 5')}. Svar B.</p>`,

  4: `<p>Varje vinkel i en regelbunden femhörning är ${tex('\\frac{540°}{5} = 108°')}. Sidorna BA och DE har förlängts till en triangel med hörnen A, E och spetsen till vänster.</p>
<p>Triangelns vinklar vid A och E är yttervinklar till femhörningen: ${tex('180° - 108° = 72°')} vardera. Då är ${tex('x = 180° - 72° - 72° = 36°')}. Svar A.</p>`,

  5: `<p>Konjugatregeln: ${tex('(a + b)(a - b) = a^2 - b^2')}, så uttrycket är ${tex('\\left(\\frac{1}{2}\\right)^2 - \\left(\\frac{2}{5}\\right)^2 = \\frac{1}{4} - \\frac{4}{25}')}.</p>
<p>Med nämnaren 100: ${tex('\\frac{25}{100} - \\frac{16}{100} = \\frac{9}{100}')}. Man kan också räkna ut parenteserna direkt: ${tex('\\frac{9}{10} \\cdot \\frac{1}{10} = \\frac{9}{100}')}. Svar D.</p>`,

  6: `<p>Dra bort <i>k</i> från båda leden: ${tex('xy = 0')}. En produkt är noll bara om någon faktor är noll.</p>
<p>Eftersom ${tex('y \\neq 0')} måste ${tex('x = 0')}. Svar B.</p>`,

  7: `<p>Pythagoras sats: ${tex('x^2 = 7^2 + 11^2 = 49 + 121 = 170')}.</p>
<p>${tex('13^2 = 169')}, så ${tex('x = \\sqrt{170} \\approx 13')}. Svar A.</p>`,

  8: `<p>Sätt in ${tex('x = 5')} och se vilken linje som ger ${tex('y = 13')}.</p>
<p>A: ${tex('-25 + 12 = -13')}. B: ${tex('-15 + 25 = 10')}. C: ${tex('15 - 2 = 13')}. D: ${tex('25 - 13 = 12')}. Svar C.</p>`,

  9: `<p>Medianen av tre tal är det mellersta, så ${tex('y = 9')}. Medelvärdet 7 ger summan ${tex('3 \\cdot 7 = 21')}, alltså ${tex('x + z = 12')}.</p>
<p>Eftersom ${tex('z > 9')} är ${tex('z \\geq 10')}, så ${tex('x \\leq 2')}. Talen 2, 9 och 10 fungerar. Svar B.</p>`,

  10: `<p>Kalla volymen <i>V</i>. Före: ${tex('\\frac{V}{5}')}. Tre kannor är 15 liter. Efter: ${tex('\\frac{V}{8}')}.</p>
<p>${tex('\\frac{V}{5} - 15 = \\frac{V}{8}')} ger ${tex('\\frac{V}{5} - \\frac{V}{8} = \\frac{3V}{40} = 15')}, så ${tex('V = 200')}. Svar C.</p>`,

  11: `<p>${tex('f(2) = \\frac{2}{5} - 1 = -\\frac{3}{5}')}.</p>
<p>${tex('g(2) = 5 \\cdot \\left(-\\frac{3}{5}\\right) + 4 = -3 + 4 = 1')}. Svar A.</p>`,

  12: `<p>Båda faktorerna är kvadrater, så ${tex('2^2(5 + 7)^2 = (2 \\cdot 12)^2 = 24^2')}.</p>
<p>Svar A.</p>`,

  13: `<p>${tex('83 - 9x = 0')} ger ${tex('x = \\frac{83}{9} \\approx 9{,}2')}.</p>
<p>Det är mindre än 9,5 (eftersom ${tex('9 \\cdot 9{,}5 = 85{,}5 > 83')}). Svar B.</p>`,

  14: `<p>I: ${tex('\\frac{1}{2} \\cdot \\frac{3}{4} = \\frac{3}{8}')}.</p>
<p>II: ${tex('\\frac{1}{2} \\div \\frac{3}{4} = \\frac{1}{2} \\cdot \\frac{4}{3} = \\frac{2}{3}')}. Med nämnaren 24: ${tex('\\frac{9}{24}')} mot ${tex('\\frac{16}{24}')}. Svar B.</p>`,

  15: `<p>Sju mynt är värda minst ${tex('7 \\cdot 5 = 35')} kronor och högst ${tex('7 \\cdot 10 = 70')} kronor, beroende på hur många som är tiokronor.</p>
<p>Hampus lånar alltså mellan 35 och 70 kronor. 60 kronor är möjligt (två tiokronor) men inte säkert. Svar D.</p>`,

  16: `<p>Dela upp bråket: ${tex('\\frac{3x - 1}{4} = \\frac{3x}{4} - \\frac{1}{4} = 0{,}75x - 0{,}25')}.</p>
<p>Svar C.</p>`,

  17: `<p>Ordna de fem utfallen i storleksordning. Medianen är det tredje värdet och det näst största är det fjärde, som alltid är minst lika stort.</p>
<p>Utfallen 1, 2, 4, 4, 6 ger lika (4 och 4), utfallen 1, 2, 3, 5, 6 ger II störst (3 och 5). Svar D.</p>`,

  18: `<p>Vid ${tex('x = 4')} är båda lika med 2, men för större <i>x</i> växer ${tex('\\frac{x}{2}')} snabbare än ${tex('\\sqrt{x}')}.</p>
<p>Till exempel ${tex('x = 9')}: ${tex('\\sqrt{9} = 3')} och ${tex('\\frac{9}{2} = 4{,}5')}. Eller ${tex('x = 16')}: 4 mot 8. Svar B.</p>`,

  19: `<p>I: ${tex('0{,}75 \\cdot \\pi \\cdot 4^2 = 0{,}75 \\cdot 16\\pi = 12\\pi')}.</p>
<p>II: ${tex('\\pi \\cdot 3^2 = 9\\pi')}. Svar A.</p>`,

  20: `<p>${tex('32 = 2^5')}, så ${tex('x - 1 = 5')} och ${tex('x = 6')}.</p>
<p>${tex('x^0 = 1')}, så II är ${tex('5 \\cdot 1 = 5')}. Svar A.</p>`,

  21: `<p>${tex('x = 0{,}75 \\cdot 80 = 60')}.</p>
<p>${tex('\\frac{8}{12} = \\frac{2}{3} \\approx 0{,}667')}, så ${tex('y \\approx 66{,}7')}. Svar B.</p>`,

  22: `<p>Pythagoras sats i båda trianglarna: ${tex('y^2 = (3x)^2 + (3x)^2 = 18x^2')} och ${tex('z^2 = (2x)^2 + (4x)^2 = 20x^2')}.</p>
<p>${tex('z^2 > y^2')}, så ${tex('z > y')}. Svar B.</p>`,

  23: `<p>Kalla grupperna barn i vattnet, barn på land, vuxna i vattnet och vuxna på land. (1) säger att barn på land = vuxna i vattnet.</p>
<p>(2) säger att vuxna i vattnet + vuxna på land = barn på land + vuxna på land, vilket också betyder barn på land = vuxna i vattnet. Båda påståendena ger samma enda samband, och det räcker inte för att bestämma antalet barn i vattnet (till exempel kan barnen på land vara 10 eller 20). Svar E.</p>`,

  24: `<p>(1): Zebran står längst till höger, men giraffen och antilopen kan stå i vilken ordning som helst. Otillräckligt.</p>
<p>(2): Giraffen står längst till vänster, men zebran och antilopen kan byta plats. Otillräckligt.</p>
<p>Tillsammans: giraffen längst till vänster och zebran längst till höger, så antilopen står i mitten. Svar C.</p>`,

  25: `<p>(1): 4 över vid grupper om 5 betyder att <i>x</i> slutar på 4 eller 9: 29, 34, 39, 44, 49, 54 eller 59. Otillräckligt.</p>
<p>(2): Delbart med 9: 27, 36, 45 eller 54. Otillräckligt.</p>
<p>Tillsammans: bara 54 finns i båda listorna. Svar C.</p>`,

  26: `<p>(1): Den stora skatten finns i B eller C. Om den finns i C är B den lilla skatten och A tom, vilket stämmer med att B inte är tom. Om den finns i B stämmer det också. Otillräckligt.</p>
<p>(2): C är tom, så skatterna finns i A och B. Den lilla finns inte i B, alltså finns den lilla i A och den stora i B. Tillräckligt. Svar B.</p>`,

  27: `<p>(1): Dubbelt så många systrar som bröder kan vara 2 systrar och 1 bror (3 syskon) eller 4 och 2 (6 syskon) och så vidare. Otillräckligt.</p>
<p>(2): Kalla antalet syskon <i>s</i>. ${tex('s - 3 = \\frac{s}{2}')} ger ${tex('\\frac{s}{2} = 3')} och ${tex('s = 6')}. Tillräckligt. Svar B.</p>`,

  28: `<p>(1): ${tex('\\frac{(a + 5) + (b + 9)}{2} = 10{,}5')} ger ${tex('a + b + 14 = 21')}, alltså ${tex('a + b = 7')} och medelvärdet ${tex('3{,}5')}. Tillräckligt.</p>
<p>(2): ${tex('\\frac{a + (b - 1) + 3}{3} = 3')} ger ${tex('a + b + 2 = 9')}, alltså ${tex('a + b = 7')} och medelvärdet ${tex('3{,}5')}. Tillräckligt. Svar D.</p>`,

  29: `<p>2010 var antalet ansökningar ungefär 9 800 (svart stapel) och antalet verkställda avhysningar ungefär 3 100 (grå stapel).</p>
<p>${tex('\\frac{9\\,800}{3\\,100} \\approx 3')}, alltså förhållandet 3:1. Svar B.</p>`,

  30: `<p>1989–1992: verkställighetsgraden låg på 40–43 procent, för högt. 1993–1997: ansökningarna var fler än 15 000. 2008–2014: graden låg på 30–32 procent, för lågt.</p>
<p>2000–2005: ansökningarna låg mellan ungefär 10 700 och 13 900 och graden mellan ungefär 36 och 38 procent. Svar C.</p>`,

  31: `<p>2014 verkställdes ungefär 2 200 avhysningar (grå stapel).</p>
<p>${tex('\\frac{234}{2\\,200} \\approx 0{,}11')}, alltså ungefär en tiondel. Svar C.</p>`,

  32: `<p>1992 var antalet ansökningar ungefär 13 800 och 1993 ungefär 21 600.</p>
<p>Ökningen är ungefär 7 800, och ${tex('\\frac{7\\,800}{13\\,800} \\approx 0{,}57')}, närmast 55 procent. Svar B.</p>`,

  33: `<p>Berge ligger på den högra kartan mitt i länet, öster om Åre och norr om Brunflo. Samma läge på den vänstra kartan är det stora fältet med vågräta streck i mitten av länet.</p>
<p>Enligt teckenförklaringen är vågräta streck Kambro-Silur-avlagringar. Svar D.</p>`,

  34: `<p>Talk markeras med en nedåtvänd triangel. Den sydligaste platsen är Handöl i sydväst och den nordligaste är Klumpfjället eller Muruhatten längst upp i nordväst.</p>
<p>Med skalstrecket (50 km) som mått är avståndet knappt fyra skalstreck, ungefär 190 km. Svar B.</p>`,

  35: `<p>Urbergets yngsta graniter har det rutiga mönstret (Rätans- och Ragunda-graniter). Det sydligaste området är det stora rutiga fältet längst ner på den vänstra kartan.</p>
<p>Fältet är ungefär 60 km brett och 70 km högt, alltså omkring ${tex('60 \\cdot 70 \\approx 4\\,200')} km<sup>2</sup>, närmast 4 300 km<sup>2</sup>. Svar B.</p>`,

  36: `<p>Delsumman för teater, dans och musik i riket är 1 499 079 tusen kronor av totalt 3 901 520.</p>
<p>${tex('\\frac{1\\,499\\,079}{3\\,901\\,520} \\approx 0{,}38')}, och ${tex('\\frac{3}{8} = 0{,}375')}. Svar C.</p>`,

  37: `<p>Bild och form: Stockholm 25 082 mot Västra Götaland 52 423, ungefär hälften. Blekinge 748 mot Västerbotten 3 113, ungefär en fjärdedel. Båda villkoren stämmer.</p>
<p>Dans: Stockholm har mer än Västra Götaland. Bibliotek: Stockholm är hälften av Västra Götaland, men Blekinge 2 246 är en tredjedel av Västerbotten 6 635. Film och medier: Stockholm 12 965 är långt under hälften av 91 887. Svar B.</p>`,

  38: `<p>Kvinnor som arbetade heltid: ungefär 39 procent 1980 och 49 procent 2000, en ökning med 10 procentenheter.</p>
<p>Kvinnor ej i arbetskraften minskade (från ungefär 25 till 18 procent), män som arbetade heltid minskade (från ungefär 85 till 76 procent) och män ej i arbetskraften ökade bara ett par procentenheter. Svar A.</p>`,

  39: `<p>2013 arbetade ungefär 53 procent av kvinnorna heltid: ${tex('0{,}53 \\cdot 2{,}7 \\approx 1{,}4')} miljoner. Av männen arbetade ungefär 73 procent heltid: ${tex('0{,}73 \\cdot 2{,}8 \\approx 2{,}0')} miljoner.</p>
<p>Tillsammans ungefär 3,4 miljoner av 5,5 miljoner, ${tex('\\frac{3{,}4}{5{,}5} \\approx 0{,}63')}, närmast 65 procent. Svar C.</p>`,

  40: `<p>Andelen arbetslösa män är det mörkgrå bandet. Som störst var det ungefär 8 procentenheter brett (1993–1994) och som minst ungefär 1 procentenhet (omkring 1990 och i början av 1970-talet).</p>
<p>${tex('\\frac{8}{1} = 8')}, alltså åtta gånger så stor. Svar D.</p>`,
};
