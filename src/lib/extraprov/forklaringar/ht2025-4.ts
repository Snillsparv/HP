// Textförklaringar till högskoleprovet 19 oktober 2025, provpass 4 (kvantitativt).
import { tex } from '../types.js';

export const forklaringar: Record<number, string> = {
  1: `<p>En höjning med 12 procent betyder att det nya priset är 112 procent av det gamla, alltså ${tex('250 \\cdot 1{,}12')}.</p>
<p>Räkna gärna i delar: 10 % av 250 är 25, och 2 % är 5. Höjningen är 25 + 5 = 30 kronor, så det nya priset är 280 kronor. Svar D.</p>`,

  2: `<p>De fem minsta heltalen som är större än 10 är 11, 12, 13, 14 och 15.</p>
<p>När talen ligger jämnt fördelade är medelvärdet det mittersta talet, alltså 13. Kontroll: ${tex('\\frac{11 + 12 + 13 + 14 + 15}{5} = \\frac{65}{5} = 13')}. Svar C.</p>`,

  3: `<p>Multiplicera båda leden med 8: ${tex('x = \\frac{8}{3}')}.</p>
<p>Kontroll: ${tex('\\frac{8}{3} \\cdot \\frac{1}{8} = \\frac{1}{3}')}. Svar C.</p>`,

  4: `<p>Sätt ${tex('f(x) = 7')}: ${tex('7x^2 - 7 = 7')} ger ${tex('7x^2 = 14')} och ${tex('x^2 = 2')}.</p>
<p>Alltså ${tex('x = \\sqrt{2}')} (eller ${tex('-\\sqrt{2}')}, men det finns inte bland alternativen). Svar B.</p>`,

  5: `<p>Rektangelns sidor är AB = 5 cm och BC = AD = 7 cm. P ligger på AD, 6 cm från D, alltså 7 − 6 = 1 cm ovanför A. Q ligger på BC, 3 cm ovanför B.</p>
<p>Sträckan PQ går alltså 5 cm i sidled (hela bredden) och 3 − 1 = 2 cm i höjdled. Pythagoras sats ger ${tex('PQ = \\sqrt{5^2 + 2^2} = \\sqrt{25 + 4} = \\sqrt{29}')} cm. Svar B.</p>`,

  6: `<p>Förenkla högerledet: ${tex('\\sqrt{72} = \\sqrt{36 \\cdot 2} = 6\\sqrt{2}')}.</p>
<p>Ekvationen blir ${tex('3x\\sqrt{2} = 6\\sqrt{2}')}. Dela båda leden med ${tex('\\sqrt{2}')}: ${tex('3x = 6')}, så ${tex('x = 2')}. Svar A.</p>`,

  7: `<p>Populationen fördubblas varje vecka. Efter en vecka finns ${tex('2n')} bakterier, efter två veckor ${tex('2 \\cdot 2n = 2^2 n')}, och så vidare.</p>
<p>Efter tio veckor har den fördubblats tio gånger: ${tex('n \\cdot 2^{10}')} bakterier. Svar C.</p>
<p>Alternativ A blandar ihop bas och exponent: det är antalet fördubblingar som ska stå i exponenten, inte startvärdet.</p>`,

  8: `<p>Läs av de två linjerna i figuren. Linjen ${tex('y = f(x)')} skär <i>y</i>-axeln i −1 och stiger ett steg per steg åt höger: ${tex('f(x) = x - 1')}. Linjen ${tex('y = g(x)')} skär också <i>y</i>-axeln i −1 men faller två steg per steg åt höger: ${tex('g(x) = -2x - 1')}.</p>
<p>Summan blir ${tex('h(x) = (x - 1) + (-2x - 1) = -x - 2')}: en linje som skär <i>y</i>-axeln i −2 och faller ett steg per steg. Den skär <i>x</i>-axeln i −2.</p>
<p>Det stämmer med alternativ D. Alternativ A har rätt skärning med <i>y</i>-axeln men för flack lutning, och B och C stiger i stället för att falla.</p>`,

  9: `<p>Räkna ut nämnaren först: ${tex('\\frac{4}{9} - \\frac{3}{7} = \\frac{28}{63} - \\frac{27}{63} = \\frac{1}{63}')}.</p>
<p>Att dela med ${tex('\\frac{1}{63}')} är samma sak som att multiplicera med 63: ${tex('\\frac{2}{7} \\cdot 63 = 2 \\cdot 9 = 18')}. Svar D.</p>`,

  10: `<p>Följ figurens kant. Den består av fyra raka sträckor (en i varje "arm": upptill, nedtill, till vänster och till höger), var och en med längden <i>x</i>. Tillsammans ${tex('4x')}.</p>
<p>Dessutom fyra kvartscirklar, alla med radien <i>x</i> (varje båge går över en ruta med sidan <i>x</i>). Fyra kvartscirklar är en hel cirkel med omkretsen ${tex('2\\pi x')}.</p>
<p>Omkretsen blir ${tex('4x + 2\\pi x = (4 + 2\\pi)\\,x')}. Svar B. Alternativ D är en area, inte en längd.</p>`,

  11: `<p>Multiplicera talen och tiopotenserna var för sig: ${tex('2{,}5 \\cdot 4 = 10')} och ${tex('10^{-11} \\cdot 10^{-18} = 10^{-29}')}.</p>
<p>Produkten är ${tex('10 \\cdot 10^{-29} = 10^{-28}')}. Svar A.</p>`,

  12: `<p>Bryt ut ${tex('xy')} ur täljaren: ${tex('x^2 y^2 + xy = xy\\,(xy + 1)')}.</p>
<p>Då kan ${tex('(xy + 1)')} förkortas bort mot nämnaren (det är tillåtet eftersom ${tex('xy \\neq -1')}, så nämnaren är inte noll). Kvar blir ${tex('xy')}. Svar A.</p>`,

  13: `<p>Åldersskillnader ändras aldrig. Erik är 14 − 7 = 7 år äldre än Johanna. Mikael är 15 − 10 = 5 år äldre än Johanna.</p>
<p>Alltså är Erik 7 − 5 = 2 år äldre än Mikael. När Mikael var 18 var Erik 20. Kvantiteterna är lika. Svar C.</p>`,

  14: `<p>När <i>a</i> ligger mellan 0 och 1 är ${tex('\\frac{1}{a}')} större än 1. Till exempel ger ${tex('a = \\frac{1}{2}')} att ${tex('\\frac{1}{a} = 2')}.</p>
<p>Kvantitet I är alltså alltid större än 1, medan kvantitet II alltid är mindre än 1. Svar A.</p>`,

  15: `<p>Kvantitet I: ${tex('\\frac{5}{4} - \\frac{4}{5} = \\frac{25}{20} - \\frac{16}{20} = \\frac{9}{20} = 0{,}45')}.</p>
<p>Kvantitet II: ${tex('\\frac{4}{3} - \\frac{3}{4} = \\frac{16}{12} - \\frac{9}{12} = \\frac{7}{12} \\approx 0{,}58')}.</p>
<p>II är större. Svar B.</p>`,

  16: `<p>Talen ${tex('a_1')} och ${tex('a_2')} är linjernas lutningar (riktningskoefficienter). Båda linjerna stiger åt höger, så båda lutningarna är positiva, och båda skär <i>y</i>-axeln i 2.</p>
<p>L<sub>2</sub> är brantare än L<sub>1</sub>, alltså stiger den mer för varje steg åt höger, och då är ${tex('a_2')} större än ${tex('a_1')}. Svar B.</p>`,

  17: `<p>Eftersom <i>x</i> ligger mellan 0 och 1 innebär multiplikationen med <i>x</i> att <i>y</i> krymper: ${tex('xy')} är en bråkdel av <i>y</i>. Exempel: ${tex('x = 0{,}5')} och ${tex('y = 0{,}8')} ger ${tex('xy = 0{,}4')}, som är mindre än 0,8.</p>
<p>Kvantitet II är större. Svar B.</p>`,

  18: `<p>Triangeln ABD har basen AB och höjden lika med rektangelns höjd (D ligger på motstående sida). Dess area är därför exakt hälften av rektangelns area, oavsett var på sidan EC punkten D ligger.</p>
<p>De två andra trianglarna, ADE och BCD, fyller tillsammans den andra halvan. Alltså är ${tex('x + y = z')}, och ${tex('\\frac{x + y}{z} = 1')}. Kvantiteterna är lika. Svar C.</p>`,

  19: `<p>Sätt in uttrycket för <i>y</i> i <i>z</i>: ${tex('z = 2(5x + 3) - 10x = 10x + 6 - 10x = 6')}. Kvantitet II är alltså alltid 6.</p>
<p>Om <i>x</i> vet vi bara att det är positivt. Det kan vara både mindre än 6 (till exempel 1) och större (till exempel 10). Informationen är otillräcklig. Svar D.</p>`,

  20: `<p>Medelvärdet säger ingenting säkert om medianen. Tio tal med medelvärdet 0 kan vara nio stycken −1 och ett tal 9 (median −1), eller nio stycken 9 och ett tal −81 (median 9). På samma sätt kan tio tal med medelvärdet 100 ha vilken median som helst.</p>
<p>Man kan alltså inte avgöra vilken median som är störst. Svar D.</p>`,

  21: `<p>Förhållandet 1:2:4 betyder att vinklarna kan skrivas ${tex('k')}, ${tex('2k')} och ${tex('4k')}. Vinkelsumman är 180°, så ${tex('7k = 180°')} och ${tex('k \\approx 25{,}7°')}.</p>
<p>Den största vinkeln är ${tex('4k = \\frac{4}{7} \\cdot 180° \\approx 102{,}9°')}, alltså mer än 90°. Svar A.</p>`,

  22: `<p>Räkna ut parenteserna: ${tex('\\frac{3}{2} \\cdot \\frac{2}{3} \\cdot \\frac{5}{4} \\cdot \\frac{4}{5}')}.</p>
<p>De två första faktorerna är varandras inverser och ger 1, likaså de två sista. Produkten är ${tex('1 \\cdot 1 = 1')}. Kvantiteterna är lika. Svar C.</p>`,

  23: `<p>Vi ska kunna para ihop alla fyra personer med varsitt djur.</p>
<p>(1): Dylan har marsvinet, och kaninen är Bellas eller Connys. Astrid har då hamstern eller undulaten, men det går inte att avgöra vem som har vad. Räcker inte.</p>
<p>(2): Conny har undulaten, och kaninen är Bellas eller Dylans. Inte heller här kan vi avgöra fördelningen. Räcker inte.</p>
<p>Tillsammans: Dylan har marsvin och Conny undulat. Kaninen måste då vara Bellas (det är den enda person som finns med i båda påståendena om kaninen). Astrid får hamstern. Svar C.</p>`,

  24: `<p>(1): Fyra bollar är 20 %, alltså en femtedel, av samlingen. Samlingen är 5 · 4 = 20 bollar. Räcker.</p>
<p>(2): De fyra senaste bollarna ökade samlingen med 25 %. Fyra bollar var alltså en fjärdedel av det tidigare antalet, som var 16. Nu är samlingen 16 + 4 = 20 bollar. Räcker.</p>
<p>Båda räcker var för sig. Svar D.</p>`,

  25: `<p>Vinklarna <i>u</i> och <i>v</i> är vertikalvinklar vid skärningen med L<sub>2</sub>, så ${tex('u = v')} gäller alltid. Linjerna är parallella precis om likbelägna vinklar är lika, alltså om ${tex('v = w')}.</p>
<p>(1): ${tex('u + v + w = 180°')} ger ${tex('2v + w = 180°')}. Det stämmer både för parallella linjer (${tex('v = w = 60°')}) och för icke-parallella (till exempel ${tex('v = 50°')}, ${tex('w = 80°')}). Räcker inte.</p>
<p>(2): ${tex('v = w')} betyder att de likbelägna vinklarna är lika, och då är linjerna parallella. Räcker ensamt.</p>
<p>Svar B.</p>`,

  26: `<p>Kalla antalet enkronor för <i>n</i>. Då finns också <i>n</i> femkronor, och myntens värde är ${tex('n + 5n = 6n')} kronor. Antalet mynt är ${tex('2n')}.</p>
<p>(1): Myntens värde är 420 − 300 = 120 kronor, så ${tex('6n = 120')} och ${tex('n = 20')}. Antalet mynt är 40. Räcker.</p>
<p>(2): Femkronorna och femtiolapparna är tillsammans värda 200 kronor, men vi vet inte hur det fördelar sig mellan mynt och sedlar. Räcker inte.</p>
<p>Svar A.</p>`,

  27: `<p>Dela in familjerna i fyra grupper: bara katt, både katt och hund, bara hund, och varken eller. Totalt 45, och katt (bara katt + båda) är 14.</p>
<p>(1): Bara katt är 10, så både katt och hund är 14 − 10 = 4. Men bara hund är okänt. Räcker inte.</p>
<p>(2): Båda = varken eller / 6. Utan fler siffror går det inte att räkna ut något antal. Räcker inte.</p>
<p>Tillsammans: båda = 4, så varken eller = 6 · 4 = 24. Då är bara hund = 45 − 10 − 4 − 24 = 7, och antalet med hund är 4 + 7 = 11. Svar C.</p>`,

  28: `<p>(1): ${tex('x = y + z')}. Om <i>y</i> och <i>z</i> är positiva är <i>x</i> störst, men om till exempel ${tex('y = 5')} och ${tex('z = -2')} är ${tex('x = 3')} och <i>y</i> störst. Räcker inte.</p>
<p>(2): ${tex('x = -2y')} säger inget om <i>z</i>. Räcker inte.</p>
<p>Tillsammans: ${tex('z = x - y = -2y - y = -3y')}. Om <i>y</i> är negativt är <i>x</i> och <i>z</i> positiva och <i>z</i> störst. Om <i>y</i> är positivt är <i>x</i> och <i>z</i> negativa och <i>y</i> störst. Det går inte att avgöra. Svar E.</p>`,

  29: `<p>Den längsta grå stapeln (import) är Elektrovaror, datorer med 158 miljarder kronor.</p>
<p>${tex('\\frac{158}{1\\,040} \\approx 0{,}15')}, alltså 15 procent. Svar C.</p>`,

  30: `<p>Import: Mineraliska bränslen 145, Järn och metall 78, Malm, metallskrot 13. Summa 236 miljarder.</p>
<p>Export: 84 + 101 + 28 = 213 miljarder.</p>
<p>Skillnaden är 236 − 213 = 23 miljarder kronor. Svar A.</p>`,

  31: `<p>Räkna export delat med import för varje alternativ. Elektrovaror, datorer: 126/158 ≈ 0,80. Övriga verkstadsprodukter: exporten (174) är större än importen (105). Tekovaror och skor: 16/37 ≈ 0,43. Livsmedel: 62/105 ≈ 0,59, alltså ungefär 60 procent.</p>
<p>Svar D.</p>`,

  32: `<p>Summera raden Biografer för 2010: 162 + 2 + 3 + 172 + 18 + 210 + 489 = 1 056. För 2016: 163 + 2 + 3 + 168 + 15 + 202 + 418 = 971.</p>
<p>Skillnaden är 1 056 − 971 = 85. Snabbare: bara Sverige (−71), Norge (−8), Finland (−4) och Island (−3) ändrades nämnvärt, och Danmark ökade med 1, vilket ger −85. Svar C.</p>`,

  33: `<p>Antalet biografer i Sverige var störst 2010, med 489 stycken. Samma år fanns 129 969 platser.</p>
<p>${tex('\\frac{129\\,969}{489} \\approx 266')} platser per biograf. Ett överslag: 130 000 / 500 = 260, och eftersom nämnaren egentligen är lite mindre blir kvoten lite större. Svar D.</p>`,

  34: `<p>Enligt teckenförklaringen är normalspårig järnväg ritad med tjock heldragen linje, och smalspårig järnväg som i första hand bör breddas med dubbel linje.</p>
<p>Vid Moholm går den tjocka normalspåriga banan (Skövde mot Gårdsjö) samtidigt som en dubbellinjerad bana går till Mariestad. Där finns alltså båda sorterna. Mariestad och Lidköping har bara smalspåriga banor, och från Vara går ingen dubbellinjerad bana. Svar C.</p>`,

  35: `<p>Använd skalan (50 km) och kompassrosen. Från Falköping går den normalspåriga banan i västsydvästlig riktning till Herrljunga, ungefär 30 km.</p>
<p>Från Herrljunga följer du normalspåret norrut till Håkantorp och sedan västnordväst till Grästorp. Det blir tillsammans ungefär 40 km. Vägbeskrivningen slutar i Grästorp. Svar D.</p>`,

  36: `<p>Den prickade banan Trollhättan–Nossebro (föreslagen att nedläggas) är ungefär 35 km lång enligt skalan.</p>
<p>Utan den blir kortaste vägen att åka Trollhättan–Vänersborg–Grästorp–Håkantorp på normalspåret och sedan Håkantorp–Vara–Tumleberg–Nossebro, sammanlagt ungefär 70 km. Resan blir alltså cirka 70 − 35 = 35 km längre. Svar A.</p>`,

  37: `<p>Området är ungefär en fyrhörning som är cirka 20 km bred (Falköping till Tidaholm) och cirka 20 km hög (Stenstorp till Vartofta). En rektangel på 20 gånger 20 km har arean 400 km², och eftersom hörnen är avskurna blir området något mindre, närmast 290 km².</p>
<p>De andra alternativen är för stora: 440 km² skulle kräva mer än hela rutan 20 gånger 20 km. Svar A.</p>`,

  38: `<p>Titta på staplarna för frilandsodlade köksväxter i det nedre diagrammet. Matlök var ungefär 100 miljoner kronor 2014 och något mindre 2015. Isbergssallat var ungefär 200 miljoner 2014 och omkring 150 miljoner 2015.</p>
<p>Båda minskade. Svar A.</p>`,

  39: `<p>Jämför segmenten för 2014 i diagrammet över växthusodlade grödor. Kryddväxter är det största segmentet, cirka 300 miljoner kronor. Gurka och tomat ligger runt 220 till 230 miljoner, tulpaner runt 270 och övriga kruk- och utplanteringsväxter runt 200.</p>
<p>Svar B.</p>`,

  40: `<p>I det övre diagrammet visar gränsen mellan mörkgrått och ljusgrått hur produktionsvärdet fördelas. År 2009 låg frilandsodlingen (mörkgrått) på ungefär 1,7 miljarder och totalen på ungefär 3,5 miljarder, så växthusodlingen var ungefär 1,8 miljarder.</p>
<p>Förhållandet är alltså ungefär 1:1. Svar B.</p>`,
};
