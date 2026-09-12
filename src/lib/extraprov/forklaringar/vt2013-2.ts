// Textförklaringar till högskoleprovet 6 april 2013, provpass 2 (kvantitativt).
import { tex } from '../types.js';

export const forklaringar: Record<number, string> = {
  // XYZ
  1: `<p>Multiplikation och division först: ${tex('4 \\cdot 3 = 12')} och ${tex('20/10 = 2')}. Sedan ${tex('5 + 12 - 2 = 15')}.</p>
<p>Svar C.</p>`,

  2: `<p>Hela sträckan AD är ${tex('3 \\cdot 4 = 12')} längdenheter. B ligger 4 från A och G ligger ${tex('3 \\cdot 3 = 9')} från A, så ${tex('BG = 9 - 4 = 5')}.</p>
<p>Svar C.</p>`,

  3: `<p>Dra höjderna från D och C ned till AB. Mittstycket blir <i>x</i> långt, så de två små rätvinkliga trianglarna i ändarna har basen ${tex('\\frac{2x - x}{2} = \\frac{x}{2}')} och hypotenusan <i>x</i>. En sådan triangel har vinkeln 60° vid A. Vinkeln D är då ${tex('180° - 60° = 120°')}.</p>
<p>Svar B.</p>`,

  4: `<p>${tex('x^2 + x - 6 = (x + 3)(x - 2)')}, som är noll för ${tex('x = -3')} och ${tex('x = 2')}.</p>
<p>Svar C.</p>`,

  5: `<p>${tex('\\frac{4}{5} - \\frac{3}{4} = \\frac{16 - 15}{20} = \\frac{1}{20}')} och ${tex('\\frac{2}{3} + \\frac{1}{2} = \\frac{7}{6}')}. Summan ${tex('\\frac{1}{20} + \\frac{7}{6} = \\frac{3}{60} + \\frac{70}{60} = \\frac{73}{60}')}, som inte kan förkortas.</p>
<p>Svar C.</p>`,

  6: `<p>Sätt in: ${tex('\\frac{4(3 - z)}{3(7 + z)} = \\frac{1}{3}')} ger ${tex('12(3 - z) = 3(7 + z)')}, alltså ${tex('36 - 12z = 21 + 3z')} och ${tex('z = 1')}.</p>
<p>Svar A.</p>`,

  7: `<p>Idag är Lotta ${tex('28 + x')} år. För 12 år sedan var hon ${tex('28 + x - 12 = 16 + x')} år.</p>
<p>Svar A.</p>`,

  8: `<p>${tex('(3x - 1)2x = 6x^2 - 2x')} och ${tex('x(3x - 2) = 3x^2 - 2x')}. Skillnaden är ${tex('6x^2 - 2x - 3x^2 + 2x = 3x^2')}.</p>
<p>Svar A.</p>`,

  9: `<p>${tex('a - b = -1')}, ${tex('b - c = -1')} och ${tex('a - c = -2')}. ${tex('\\frac{-1}{-1} \\cdot (-2) = -2')}.</p>
<p>Svar A.</p>`,

  10: `<p>${tex('x - y = 0')} betyder ${tex('x = y')}, så ${tex('\\frac{x^n}{y^n} = 1')} oavsett <i>n</i>.</p>
<p>Svar C.</p>`,

  11: `<p>Medianen av 40 värden är medelvärdet av det 20:e och 21:a i storleksordning. Räknat nerifrån: 5 personer har 0 poäng, 17 har högst 1, 20 har högst 2 och 30 har högst 3. Det 20:e värdet är alltså 2 och det 21:a är 3, medianen ${tex('2{,}5')}.</p>
<p>Svar B.</p>`,

  12: `<p>Kvadratens area är 9 cm², så cirkelns area är ${tex('9 + 16 = 25')} cm². ${tex('\\pi r^2 = 25')} ger ${tex('r = \\frac{5}{\\sqrt{\\pi}}')} cm.</p>
<p>Svar B.</p>`,

  // KVA
  13: `<p>${tex('15 \\cdot 36 + 15 \\cdot 64 = 15(36 + 64) = 15 \\cdot 100 = 1\\,500')}, som är mindre än 1 501. II är större.</p>
<p>Svar B.</p>`,

  14: `<p>Diagonalen är hypotenusa i en rätvinklig triangel med rektangelns två sidor som kateter, och en hypotenusa är alltid kortare än summan av kateterna, som är halva omkretsen. II är större.</p>
<p>Svar B.</p>`,

  15: `<p>Gula: ${tex('1 - \\frac{1}{3} - \\frac{1}{6} = \\frac{1}{2}')}. Blå eller röda: ${tex('\\frac{1}{3} + \\frac{1}{6} = \\frac{1}{2}')}. Lika.</p>
<p>Svar C.</p>`,

  16: `<p>Halvera ekvationen: ${tex('4x + 2 = 5')}. II ${tex('= 8 - 2{,}5 = 5{,}5')}. II är större.</p>
<p>Svar B.</p>`,

  17: `<p>Båda avstånden är ${tex('\\sqrt{a^2 + b^2}')}. Lika.</p>
<p>Svar C.</p>`,

  18: `<p>I ${tex('= \\frac{1}{2x^2}')} och II ${tex('= \\frac{4}{x^2}')}. II är åtta gånger så stort. II är större.</p>
<p>Svar B.</p>`,

  19: `<p>Båda trianglarna har basen AB, och deras höjder är avståndet mellan de parallella linjerna. Areorna är lika, oavsett hur långt bort D ligger.</p>
<p>Svar C.</p>`,

  20: `<p>Med ${tex('k = 1, m = 2, n = 3')} är I ${tex('= \\frac{2}{3}')} och II ${tex('= \\frac{1}{2}')}, men med ${tex('k = 1, m = 2, n = 100')} är I ${tex('= 0{,}02')} och II ${tex('= 0{,}5')}. Det går inte att avgöra.</p>
<p>Svar D.</p>`,

  21: `<p>${tex('\\sqrt{\\sqrt{x}} = \\left(x^{\\frac{1}{2}}\\right)^{\\frac{1}{2}} = x^{\\frac{1}{4}}')}. Lika.</p>
<p>Svar C.</p>`,

  22: `<p>Dela med 5: ${tex('x + 2y = 54\\,116')}. <i>x</i> är störst när ${tex('y = 1')}: ${tex('x = 54\\,114')}. <i>y</i> är störst när <i>x</i> är så litet som möjligt (${tex('x = 2')}): ${tex('y = 27\\,057')}. I är större.</p>
<p>Svar A.</p>`,

  // NOG
  23: `<p>(1) ger medelåldern för alla barn och (2) hur många som är flickor, men ingen av dem säger något om hur åldrarna fördelar sig mellan flickor och pojkar. Inte ens tillsammans räcker uppgifterna.</p>
<p>Svar E.</p>`,

  24: `<p>Alla är tillbaka samtidigt när var och en har gått ett helt antal varv. (1) ger bara förhållandet mellan hastigheterna (2 : 3 : 4), men utan faktiska hastigheter kan tiden inte beräknas. (2): med 2, 3 och 4 km/h tar ett varv 12, 8 respektive 6 minuter, och de möts första gången efter 24 minuter (2, 3 respektive 4 varv). Endast (2) räcker.</p>
<p>Svar B.</p>`,

  25: `<p>(1): ${tex('\\frac{4}{7} \\cdot 210 = 120')} herrcyklar och 48 damcyklar ger ${tex('210 - 120 - 48 = 42')} barncyklar. (2): ${tex('48 + 120 = 168')} cyklar är 80 procent, så totalt 210 och 42 barncyklar. Var för sig räcker.</p>
<p>Svar D.</p>`,

  26: `<p>Katja och Fatima bor på samma våning och Olga på den andra. (2): Anna bor inte med Isabella och Katja, så Isabella och Katja (och därmed Fatima) bor uppe, Anna och Olga nere. Allt är bestämt. (1): om Katja och Fatima bor nere bor Olga uppe med Isabella, och Anna kan bo var som helst. Endast (2) räcker.</p>
<p>Svar B.</p>`,

  27: `<p>(1): bordets area är ${tex('\\pi \\cdot 20^2 = 400\\pi')} cm², så sannolikheten är ${tex('1 - \\frac{400}{400\\pi} = 1 - \\frac{1}{\\pi}')}. (2): en triangel med hypotenusan som diameter kan ha många olika areor, så andelen är okänd. Endast (1) räcker.</p>
<p>Svar A.</p>`,

  28: `<p>(1) ger bara ett förhållande och (2) bara en tillväxt per vecka. Tillsammans: 25 procent av förra veckans tjocklek är 1 cm, så isen var 4 cm förra veckan och är 5 cm nu.</p>
<p>Svar C.</p>`,

  // DTK
  29: `<p>Sulfatmassan (streck-prick-linjen) var som lägst i början av serien, 1911/15, med cirka 100 tusen ton om året.</p>
<p>Svar B.</p>`,

  30: `<p>1916/20 var papper och papp cirka 215 tusen ton mot sulfatmassans cirka 120, och den mekaniska massan hade minskat från cirka 155 till cirka 148. 1926/30 ökade mekanisk massa, 1936/40 och 1941/45 var sulfatmassan större än papper och papp.</p>
<p>Svar A.</p>`,

  31: `<p>Tackjärn (den nedre streckade linjen) var cirka 36 tusen ton 1876/80 och cirka 110 tusen ton 1906/10. ${tex('\\frac{110}{36} \\approx 3')}.</p>
<p>Svar D.</p>`,

  32: `<p>Endast öring finns i Storsnägden, Mellansnägden, Lillsnägden och Prästtjärnen. Endast abborre och öring finns i Stavretjärnen och Öppoms-Fäbodtjärnen. Med skalstocken är det cirka 3,5 km från Lillsnägden till Öppoms-Fäbodtjärnen.</p>
<p>Svar B.</p>`,

  33: `<p>11,5 km är drygt två skalstockslängder. Från Stavretjärnen i sydost hamnar man i västnordvästlig riktning vid Röjesjön, väster om Ljustorp, där det finns abborre, gädda, mört och öring. Prästtjärnen ligger bara cirka 9 km bort.</p>
<p>Svar A.</p>`,

  34: `<p>Gädda finns i Edsta-Fäbodsjön, Röjesjön, Burtjärnen, Ljustorpsån och Mjällån. Inom cirka 4,5 km från Ljustorp ligger Burtjärnen, Ljustorpsån och Mjällån; Röjesjön och Edsta-Fäbodsjön ligger längre bort.</p>
<p>Svar C.</p>`,

  35: `<p>1470 var inkomsterna cirka 37 mark: tionde 18,5 (50 procent), avrad 14,5 (39 procent), stockapenningar 1 (cirka 2 procent) och testamente 3 (cirka 8 procent). Övriga år stämmer inte, till exempel var tiondet över hälften 1477 och avraden bara en tredjedel 1478.</p>
<p>Svar A.</p>`,

  36: `<p>1478 var utgifterna cirka 37 mark, varav inventarier cirka 23, alltså drygt 60 procent. 1483 var utgifterna cirka 69 mark (stapeln är bruten), varav inventarier cirka 8, alltså drygt 10 procent.</p>
<p>Svar C.</p>`,

  37: `<p>Utgifterna 1470–72 var cirka ${tex('98 + 29{,}5 + 21{,}5 = 149')} mark (stapeln för 1470 når upp till 98 på den brutna skalan). Vaxet var cirka ${tex('12 + 17 + 14 = 43')} mark, alltså ${tex('\\frac{43}{149} \\approx 29')} procent.</p>
<p>Svar B.</p>`,

  38: `<p>15–24 år, opiater plus amfetamin, män plus kvinnor: 1999 ${tex('222 + 129 + 68 + 37 = 456')}, 2000 ${tex('266 + 145 + 33 + 37 = 481')}, 2001 ${tex('324 + 129 + 43 + 28 = 524')}, 2002 ${tex('248 + 119 + 30 + 41 = 438')}.</p>
<p>Svar C.</p>`,

  39: `<p>Opiater 2003: ${tex('1\\,622 + 706 = 2\\,328')} vårdtillfällen av totalt ${tex('9\\,409 + 5\\,213 = 14\\,622')}. ${tex('\\frac{2\\,328}{14\\,622} \\approx 0{,}16')}.</p>
<p>Svar B.</p>`,

  40: `<p>Opiater 1999: 778 kvinnor av ${tex('1\\,508 + 778 = 2\\,286')}. ${tex('\\frac{778}{2\\,286} \\approx 0{,}34 \\approx \\frac{1}{3}')}.</p>
<p>Svar A.</p>`,
};
