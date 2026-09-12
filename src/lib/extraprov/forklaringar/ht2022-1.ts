// Textförklaringar till högskoleprovet 23 oktober 2022, provpass 1 (kvantitativt).
import { tex } from '../types.js';

export const forklaringar: Record<number, string> = {
  1: `<p>Räkna ut den första parentesen: ${tex('4 - 3 = 1')}.</p>
<p>${tex('1 \\cdot (x + 2y) = x + 2y')}. Svar C.</p>`,

  2: `<p>${tex('3^3 = 27')} och ${tex('2^3 = 8')}.</p>
<p>${tex('27 - 8 = 19')}. Svar D.</p>`,

  3: `<p>Samla <i>x</i> på ena sidan: ${tex('0{,}2 - 1{,}8 = 0{,}6x - 0{,}4x')}, alltså ${tex('-1{,}6 = 0{,}2x')}.</p>
<p>${tex('x = \\frac{-1{,}6}{0{,}2} = -8')}. Svar B.</p>`,

  4: `<p>Linjen ${tex('y = 3x - 2')} skär <i>y</i>-axeln i −2 och stiger brant: tre rutor upp för varje ruta åt höger.</p>
<p>A stiger för svagt, B och D lutar nedåt. C skär <i>y</i>-axeln under origo och stiger brant. Svar C.</p>`,

  5: `<p>Burk B har ${tex('\\frac{2}{3} \\cdot 90 = 60')} svarta kulor. Tillsammans med burk A blir det ${tex('10 + 60 = 70')} svarta kulor av totalt ${tex('50 + 90 = 140')}.</p>
<p>${tex('\\frac{70}{140} = \\frac{1}{2}')}. Svar B.</p>`,

  6: `<p>Sätt in ${tex('x = 2')}: ${tex('5(8 + 2) - 10(4 + 1) = 5 \\cdot 10 - 10 \\cdot 5')}.</p>
<p>${tex('50 - 50 = 0')}. Svar A.</p>`,

  7: `<p>Vinkelmarkeringarna visar att A motsvarar C, B motsvarar D och E motsvarar sig själv. Sidan AB (50 cm) motsvarar sidan CD (30 cm), så skalan är ${tex('\\frac{50}{30} = \\frac{5}{3}')}.</p>
<p>AE motsvarar CE (36 cm): ${tex('AE = 36 \\cdot \\frac{5}{3} = 60')} cm. Svar B.</p>`,

  8: `<p>Om <i>n</i> personer står efter Albert står ${tex('3n')} före honom. Totalt är de ${tex('3n + n + 1 = 4n + 1')} personer, alltså ett tal som är 1 mer än en multipel av 4.</p>
<p>${tex('29 = 4 \\cdot 7 + 1')}, medan 26, 27 och 28 inte kan skrivas så. Svar D.</p>`,

  9: `<p>${tex('(x + 7)^2 = x^2 + 14x + 49')} och ${tex('(x - 7)^2 = x^2 - 14x + 49')}.</p>
<p>Differensen är ${tex('14x - (-14x) = 28x')}. Svar A.</p>`,

  10: `<p>Cirklarna är lika stora, så varje cirkel har arean ${tex('9\\pi')}, vilket ger radien 3 cm. Rektangeln är två diametrar bred och en diameter hög: ${tex('12 \\times 6')} cm.</p>
<p>Arean är ${tex('12 \\cdot 6 = 72')} cm<sup>2</sup>. Svar A.</p>`,

  11: `<p>${tex('\\frac{1}{x} = -\\frac{2}{3}')} ger ${tex('x = -\\frac{3}{2}')}.</p>
<p>${tex('x^3 = \\left(-\\frac{3}{2}\\right)^3 = -\\frac{27}{8}')}. Svar A.</p>`,

  12: `<p>${tex('\\pi \\approx 3{,}14')} och ${tex('\\sqrt{2} \\approx 1{,}41')}.</p>
<p>${tex('\\frac{3{,}14}{1{,}41} \\approx 2{,}2')}, alltså ${tex('x \\geq 2')}. Svar D.</p>`,

  13: `<p>Korsmultiplicera: ${tex('10x = 128')}, så ${tex('x = 12{,}8')}.</p>
<p>Det är större än 10. Svar A.</p>`,

  14: `<p>Alma är hälften så gammal som Ella och Lena tillsammans. Om Ella är 10 och Lena 30 är Alma 20, äldre än Ella. Om Ella är 30 och Lena 10 är Alma 20, yngre än Ella.</p>
<p>Svar D.</p>`,

  15: `<p>I: ${tex('0{,}3 \\cdot 40 = 12')}.</p>
<p>II: ${tex('0{,}4 \\cdot 30 = 12')}. Svar C.</p>`,

  16: `<p>I: ${tex('\\frac{1 + 3 + 7}{3} = \\frac{11}{3} \\approx 3{,}67')}.</p>
<p>II: ${tex('\\frac{1 + 1 + 3 + 7 + 7}{5} = \\frac{19}{5} = 3{,}8')}. Svar B.</p>`,

  17: `<p>De två sneda linjerna bildar tillsammans med L<sub>2</sub> en triangel. Vinkeln vid L<sub>2</sub> och den branta linjen är lika med <i>x</i> (likbelägna vinklar, eftersom L<sub>1</sub> och L<sub>2</sub> är parallella). Vinkeln vid L<sub>2</sub> och den andra linjen är vertikalvinkel till <i>y</i>, alltså lika med <i>y</i>. Vinkeln i triangelns topp är <i>z</i>.</p>
<p>Vinkelsumman i en triangel är 180°, så ${tex('x + y + z = 180°')}. Svar C.</p>`,

  18: `<p>Dela båda leden med <i>x</i> (tillåtet eftersom ${tex('x \\neq 0')}): ${tex('x = -5')}.</p>
<p>−5 är mindre än 0. Svar B.</p>`,

  19: `<p>Längden är ${tex('\\frac{50}{5} = 10')} cm. Diagonalen är ${tex('\\sqrt{10^2 + 5^2} = \\sqrt{125}')}.</p>
<p>${tex('11^2 = 121 < 125')}, så diagonalen är längre än 11 cm. Svar A.</p>`,

  20: `<p>I: ${tex('\\frac{3^2}{7^2} = \\frac{9}{49}')}.</p>
<p>II: ${tex('\\frac{7^{-2}}{3^{-2}} = \\frac{3^2}{7^2} = \\frac{9}{49}')}, eftersom negativa exponenter byter plats mellan täljare och nämnare. Svar C.</p>`,

  21: `<p>Från punkten (−10, −1) går linjen 10 steg åt höger till <i>y</i>-axeln och stiger då ${tex('10k')}, där <i>k</i> är lutningen. Skärningen med <i>y</i>-axeln ligger vid ${tex('-1 + 10k')}.</p>
<p>Med ${tex('k = 1')} är det 9, med ${tex('k = 0{,}05')} är det −0,5. Tecknet beror på hur brant linjen är. Svar D.</p>`,

  22: `<p>${tex('\\frac{2x}{3y} = 7')} ger ${tex('2x = 21y')}.</p>
<p>${tex('y = \\frac{2x}{21} = \\frac{2}{21}x')}. Svar C.</p>`,

  23: `<p>(1): Julia har 24 blommor, så August har 25, men vi vet inte hur många som är blåklockor. Otillräckligt.</p>
<p>(2): 3/5 av Augusts blommor är blåklockor, men antalet blommor är okänt. Otillräckligt.</p>
<p>Tillsammans: ${tex('\\frac{3}{5} \\cdot 25 = 15')} blåklockor. Svar C.</p>`,

  24: `<p>(1): 30 kulor totalt säger inget om fördelningen. Otillräckligt.</p>
<p>(2): 18 svarta och ${tex('\\frac{2}{3} \\cdot 18 = 12')} röda, alltså 6 fler svarta. Tillräckligt. Svar B.</p>`,

  25: `<p>(1): Andersson bor ovanför Cedergren, men Andersson kan bo på andra eller tredje våningen. Otillräckligt.</p>
<p>(2): På samma sätt kan Dahlman bo på andra eller tredje våningen. Otillräckligt.</p>
<p>Tillsammans: Både Andersson på tredje (med Dahlman och Cedergren på andra, Berg på första) och Dahlman på tredje (med Andersson och Berg på andra, Cedergren på första) fungerar. Svar E.</p>`,

  26: `<p>Frida och Jan viker 50 servetter var och blir klara samtidigt.</p>
<p>(1): Jan är klar 11.05, så Frida är också klar 11.05, men hennes hastighet är okänd. Otillräckligt.</p>
<p>(2): Ingen tid alls. Otillräckligt.</p>
<p>Tillsammans: Från 10.25 till 11.05 viker Frida ${tex('50 - 10 = 40')} servetter på 40 minuter, alltså en per minut. De första 10 tog 10 minuter, så hon började 10.15. Svar C.</p>`,

  27: `<p>(1): ${tex('y = 2x')} säger inget om <i>x</i>. Otillräckligt.</p>
<p>(2): Att <i>y</i> är ett heltal säger inget om <i>x</i>. Otillräckligt.</p>
<p>Tillsammans: ${tex('x = \\frac{y}{2}')} är ett heltal om <i>y</i> är jämnt (${tex('y = 4')} ger 2) men inte om <i>y</i> är udda (${tex('y = 3')} ger 1,5). Svar E.</p>`,

  28: `<p>(1): D först och A sist, och B mitt emellan C och E: D C B E A eller D E B C A. Två möjligheter. Otillräckligt.</p>
<p>(2): C står intill både A och B, och B intill både C och E, alltså kedjan A C B E (eller spegelvänd) med D i en ände. Varken D eller E står längst till höger, så raden är D E B C A. Tillräckligt. Svar B.</p>`,

  29: `<p>Vin inklusive cider var 1 512 kronor av totalt 21 221 kronor 2007.</p>
<p>${tex('\\frac{1\\,512}{21\\,221} \\approx 0{,}07')}, alltså 7 procent. Svar B.</p>`,

  30: `<p>Skillnaden mellan alkoholhaltiga och alkoholfria drycker: 2000: ${tex('2\\,782 - 1\\,429 = 1\\,353')}. 2003: ${tex('3\\,095 - 1\\,593 = 1\\,502')}. 2004: ${tex('2\\,844 - 1\\,539 = 1\\,305')}. 2005: ${tex('2\\,873 - 1\\,598 = 1\\,275')}. 2006: ${tex('2\\,953 - 1\\,711 = 1\\,242')}. 2007: ${tex('3\\,082 - 1\\,803 = 1\\,279')}.</p>
<p>Störst 2003 och minst 2006. Svar D.</p>`,

  31: `<p>Lägg ihop procenttalen i cirkeldiagrammet. A: ${tex('13 + 15 + 13 = 41')}. B: ${tex('13 + 13 + 6 + 9 = 41')}. C: ${tex('15 + 5 + 2 + 6 + 9 = 37')}. D: ${tex('15 + 6 + 9 + 9 + 6 = 45')}.</p>
<p>Närmast hälften är D. Svar D.</p>`,

  32: `<p>Bröd och övriga spannmålsprodukter 2004: 2 439 kronor per capita och år.</p>
<p>${tex('\\frac{2\\,439}{12} \\approx 203')} kronor per månad. Svar B.</p>`,

  33: `<p>Partikelhalten 2007 var ungefär 15 µg/m<sup>3</sup>.</p>
<p>${tex('15 \\cdot 20 = 300')} µg. Svar C.</p>`,

  34: `<p>Bensenhalten var som högst 1993, ungefär 4,3 µg/m<sup>3</sup>, medan miljömålet är 1 µg/m<sup>3</sup>.</p>
<p>${tex('4{,}3 - 1 = 3{,}3')}, alltså 330 procent högre än miljömålet. Svar C.</p>`,

  35: `<p>Det ostligaste stångjärnshammarbruket (ring) ligger vid Ed och Överum nära Västervik. Det västligaste pappersbruket (romb) är Skeen i sydväst.</p>
<p>Avståndet mellan dem är ungefär fyra skalstreck om 50 km, alltså omkring 200 km. Svar C.</p>`,

  36: `<p>Punkten mitt emellan Jönköping och Vimmerby ligger strax öster om Eksjö. 90 km rakt söderut (knappt två skalstreck) hamnar man vid Kårestad, nordost om Växjö.</p>
<p>Kårestad har en romb, alltså pappersbruk. Svar D.</p>`,

  37: `<p>Glasbruken (halvcirklar) ligger alla i södra och östra Småland: Trestenshult, Midingsbråte, Bräken, Ålshult, Torne, Germundslycke och Tövehult.</p>
<p>Västervik har Tövehult alldeles intill, Vimmerby har omkring 60 km dit och Eksjö omkring 90 km till Bräken. Från Jönköping är det över 100 km till närmaste glasbruk. Svar A.</p>`,

  38: `<p>Män 2002: flest dagar hade Arbete utan krav på särskild yrkesutbildning, ungefär 19. Minst hade Militärt arbete, ungefär 3,5.</p>
<p>${tex('19 - 3{,}5 = 15{,}5')}, närmast 15 dagar. Svar B.</p>`,

  39: `<p>Service-, omsorgs- och försäljningsarbete (prickad linje) 2007: kvinnor ungefär 16 dagar, män ungefär 8 dagar.</p>
<p>Kvinnorna hade dubbelt så många. Svar A.</p>`,

  40: `<p>Hantverksarbete (streck-prick-linjen) för kvinnor: ungefär 24,5 (2002), 23,5 (2003), 21 (2004), 16 (2005), 14,5 (2006), 13 (2007), 11 (2008), 8,5 (2009) och 8 (2010). Den största förändringen är från 2004 till 2005, en minskning med ungefär 5 dagar.</p>
<p>${tex('\\frac{5}{21} \\approx 0{,}24')}, alltså ungefär 25 procent. Svar C.</p>`,
};
