// Textförklaringar till högskoleprovet 18 april 2026, provpass 3 (kvantitativt).
import { tex } from '../types.js';

export const forklaringar: Record<number, string> = {
  // XYZ
  1: `<p>Multiplicera varje term i den första parentesen med varje term i den andra:</p>
<p>${tex('(x + 3)(x - 5) = x \\cdot x + x \\cdot (-5) + 3 \\cdot x + 3 \\cdot (-5) = x^2 - 5x + 3x - 15')}.</p>
<p>Slå ihop <i>x</i>-termerna: ${tex('-5x + 3x = -2x')}, så uttrycket blir ${tex('x^2 - 2x - 15')}. Svar C.</p>`,

  2: `<p>Sätt in ${tex('x = \\frac{5}{3}')} i funktionen: ${tex('f\\left(\\frac{5}{3}\\right) = \\frac{1}{5} \\cdot \\frac{5}{3} + \\frac{3}{5} = \\frac{1}{3} + \\frac{3}{5}')}.</p>
<p>Skriv bråken med den gemensamma nämnaren 15: ${tex('\\frac{5}{15} + \\frac{9}{15} = \\frac{14}{15}')}. Svar C.</p>`,

  3: `<p>En trubbig vinkel är större än 90°, och vinkelsumman i en triangel är alltid 180°.</p>
<p>Två trubbiga vinklar skulle tillsammans bli mer än 180°, vilket är omöjligt. En trubbig vinkel går däremot bra, till exempel en triangel med vinklarna 120°, 30° och 30°. Som mest kan triangeln alltså ha en trubbig vinkel. Svar B.</p>`,

  4: `<p>Dela upp lönen i fem lika stora delar. Nils sparar en del och spenderar resten, alltså fyra delar.</p>
<p>Kvoten mellan det han sparar och det han spenderar är ${tex('\\frac{1}{4}')}. Se upp med alternativ B: ${tex('\\frac{1}{5}')} är andelen av hela lönen som han sparar, inte kvoten mellan sparat och spenderat. Svar C.</p>`,

  5: `<p>Lös ut <i>x</i> genom att dela båda leden med ${tex('\\frac{8}{15}')}, vilket är samma sak som att multiplicera med ${tex('\\frac{15}{8}')}:</p>
<p>${tex('x = \\frac{2}{3} \\cdot \\frac{15}{8} = \\frac{30}{24} = \\frac{5}{4}')}.</p>
<p>Kontroll: ${tex('\\frac{8}{15} \\cdot \\frac{5}{4} = \\frac{40}{60} = \\frac{2}{3}')}. Svar B.</p>`,

  6: `<p>Efter de två första dragningarna finns 18 bollar kvar i lådan.</p>
<p>Numren som är större än 11 och mindre än 18 är 12, 13, 14, 15, 16 och 17, alltså sex stycken. Ingen av dem har dragits (bollarna 11 och 18 räknas inte), så alla sex finns kvar.</p>
<p>Sannolikheten blir ${tex('\\frac{6}{18} = \\frac{1}{3}')}. Svar A.</p>`,

  7: `<p>Utnyttja att ${tex('4 \\cdot 625 = 2\\,500')}. Eftersom ${tex('44 = 11 \\cdot 4')} blir</p>
<p>${tex('44 \\cdot 625 = 11 \\cdot 4 \\cdot 625 = 11 \\cdot 2\\,500 = 27\\,500')}.</p>
<p>Tiotalssiffran är den näst sista siffran, alltså 0. Svar A.</p>`,

  8: `<p>Skriv 8 som en potens av 2: ${tex('8 = 2^3')}, så ${tex('8^2 = (2^3)^2 = 2^6')}.</p>
<p>Vid multiplikation av potenser med samma bas adderas exponenterna: ${tex('2^3 \\cdot 2^6 = 2^{3 + 6} = 2^9')}. Alltså är ${tex('x = 9')}. Svar B.</p>`,

  9: `<p>Lös ut <i>y</i>: ${tex('2y = 2 - x')}, alltså ${tex('y = 1 - \\frac{x}{2}')}.</p>
<p>Linjen skär <i>y</i>-axeln i 1 (sätt ${tex('x = 0')}) och <i>x</i>-axeln i 2 (sätt ${tex('y = 0')}: ${tex('0 = 1 - \\frac{x}{2}')} ger ${tex('x = 2')}). Lutningen är ${tex('-\\frac{1}{2}')}, så linjen sjunker ett steg för varje två steg åt höger.</p>
<p>Det stämmer med graf B. Graf A skär <i>y</i>-axeln i 2, och graferna C och D lutar uppåt. Svar B.</p>`,

  10: `<p>Räkna inifrån: 50 % av 60 är 30.</p>
<p>150 % av 30 är ${tex('1{,}5 \\cdot 30 = 45')}. Du kan också räkna båda procentsatserna på en gång: ${tex('1{,}5 \\cdot 0{,}5 \\cdot 60 = 0{,}75 \\cdot 60 = 45')}. Svar A.</p>`,

  11: `<p>En cylinders volym är basytan gånger höjden: ${tex('V = \\pi r^2 h')}. Med ${tex('V = 16')} och ${tex('h = 1')} får du ${tex('\\pi r^2 = 16')}, alltså ${tex('r^2 = \\frac{16}{\\pi}')}.</p>
<p>Eftersom ${tex('\\pi \\approx 3{,}14')} är ${tex('r^2 \\approx \\frac{16}{3{,}14} \\approx 5{,}1')}, och då är ${tex('r \\approx \\sqrt{5{,}1} \\approx 2{,}26')} cm, vilket ligger mycket nära ${tex('\\sqrt{5} \\approx 2{,}24')}.</p>
<p>Jämför med de andra alternativen: radien 2 skulle ge ${tex('r^2 = 4')}, radien 4 ger ${tex('r^2 = 16')} och radien 5 ger ${tex('r^2 = 25')}. Inget av dem ligger lika nära 5,1. Svar D.</p>`,

  12: `<p>Skriv talen framför rottecknen som rötter: ${tex('2 = \\sqrt{4}')} och ${tex('3 = \\sqrt{9}')}. Då blir</p>
<p>${tex('\\frac{2\\sqrt{3}}{3\\sqrt{2}} = \\frac{\\sqrt{4} \\cdot \\sqrt{3}}{\\sqrt{9} \\cdot \\sqrt{2}} = \\frac{\\sqrt{12}}{\\sqrt{18}} = \\sqrt{\\frac{12}{18}} = \\sqrt{\\frac{2}{3}}')}.</p>
<p>Svar C.</p>`,

  // KVA
  13: `<p>Både <i>x</i> och 4 är positiva, och båda bråken har täljaren 1. Med en större nämnare blir bråket mindre.</p>
<p>Eftersom ${tex('x > 4')} är ${tex('\\frac{1}{x} < \\frac{1}{4}')}. Till exempel ger ${tex('x = 5')} att I är ${tex('\\frac{1}{5}')}, som är mindre än ${tex('\\frac{1}{4}')}.</p>
<p>II är större än I. Svar B.</p>`,

  14: `<p>Triangeln är rätvinklig vid A, så hypotenusan är BC. Pythagoras sats ger ${tex('BC^2 = 4^2 + 2^2 = 16 + 4 = 20')}, alltså ${tex('BC = \\sqrt{20}')} cm.</p>
<p>Kvantitet II är 5 cm, och ${tex('5 = \\sqrt{25}')}. Eftersom ${tex('\\sqrt{20} < \\sqrt{25}')} är hypotenusan kortare än 5 cm.</p>
<p>II är större än I. Svar B.</p>`,

  15: `<p>Ingen av kvantiteterna är ett bestämt tal, så pröva några exempel.</p>
<p>Om I är 77 776 och II är 66 668 är I störst. Om I är 66 667 och II är 88 886 är II störst.</p>
<p>Vilken kvantitet som är störst beror alltså på vilka tal man väljer. Informationen är otillräcklig. Svar D.</p>`,

  16: `<p>${tex('x^2 = 4')} betyder att ${tex('x = 2')} eller ${tex('x = -2')}. Pröva båda.</p>
<p>${tex('x = 2')}: I är ${tex('(-2)^4 = 16')} och II är ${tex('(-2)^5 = -32')}.</p>
<p>${tex('x = -2')}: I är ${tex('(-2)^0 = 1')} och II är ${tex('(-2)^1 = -2')}.</p>
<p>I båda fallen är exponenten i kvantitet I jämn, så I blir positivt, medan II är I gånger −2 och därför blir negativt. I är större än II. Svar A.</p>`,

  17: `<p>Dela upp medelvärdena. Kvantitet I är ${tex('\\frac{x + y}{2} = \\frac{x}{2} + \\frac{y}{2}')}. Kvantitet II är ${tex('\\frac{1}{2}\\left(2x + \\frac{y}{2}\\right) = x + \\frac{y}{4}')}.</p>
<p>Ta skillnaden: ${tex('\\text{II} - \\text{I} = \\frac{x}{2} - \\frac{y}{4}')}. II innehåller alltså mer av <i>x</i> men mindre av <i>y</i>, och tecknet på skillnaden beror på hur stora <i>x</i> och <i>y</i> är i förhållande till varandra.</p>
<p>Exempel: med ${tex('x = 2')} och ${tex('y = 2')} är I = 2 och II = ${tex('\\frac{4 + 1}{2} = 2{,}5')} (II störst). Med ${tex('x = 1')} och ${tex('y = 4')} är I = 2,5 och II = ${tex('\\frac{2 + 2}{2} = 2')} (I störst).</p>
<p>Informationen är otillräcklig. Svar D.</p>`,

  18: `<p>De ensiffriga jämna positiva heltalen är 2, 4, 6 och 8. Det finns precis fyra, så kvantitet I måste vara ${tex('2 + 4 + 6 + 8 = 20')}.</p>
<p>De ensiffriga udda positiva heltalen är 1, 3, 5, 7 och 9. Tre olika av dem kan ge summor från ${tex('1 + 3 + 5 = 9')} upp till ${tex('5 + 7 + 9 = 21')}.</p>
<p>Kvantitet II kan alltså vara både mindre än 20 (till exempel 9) och större än 20 (21). Informationen är otillräcklig. Svar D.</p>`,

  19: `<p>Kvantitet I: ${tex('\\frac{1}{3} - \\frac{1}{2} = \\frac{2}{6} - \\frac{3}{6} = -\\frac{1}{6}')}.</p>
<p>Kvantitet II: ${tex('\\frac{1}{2} \\cdot \\left(-\\frac{1}{3}\\right) = -\\frac{1}{6}')}.</p>
<p>Kvantiteterna är lika. Svar C.</p>`,

  20: `<p>Kvantitet I: omkretsen av en cirkel är ${tex('2\\pi r = 2\\pi \\cdot 5 = 10\\pi')} cm. Eftersom ${tex('\\pi \\approx 3{,}14')} är det ungefär 31,4 cm.</p>
<p>Kvantitet II: rektangelns omkrets är ${tex('2 \\cdot (5{,}5 + 10) = 2 \\cdot 15{,}5 = 31')} cm.</p>
<p>Eftersom ${tex('\\pi > 3{,}1')} är ${tex('10\\pi > 31')}. I är större än II. Svar A.</p>`,

  21: `<p><i>x</i> är negativt och <i>y</i> positivt, så båda kvoterna är negativa. Vilken som är störst beror på om <i>x</i> eller <i>y</i> ligger längst från 0.</p>
<p>Med ${tex('x = -\\frac{1}{2}')} och ${tex('y = \\frac{1}{4}')} är I ${tex('= -2')} och II ${tex('= -\\frac{1}{2}')}, så II är störst.</p>
<p>Med ${tex('x = -\\frac{1}{4}')} och ${tex('y = \\frac{1}{2}')} är I ${tex('= -\\frac{1}{2}')} och II ${tex('= -2')}, så I är störst. (Med ${tex('x = -\\frac{1}{2}')} och ${tex('y = \\frac{1}{2}')} blir de dessutom lika.)</p>
<p>Informationen är otillräcklig. Svar D.</p>`,

  22: `<p>${tex('f(a) = 0')} betyder att ${tex('ka + m = 0')}, alltså ${tex('k = -\\frac{m}{a}')}.</p>
<p>Både <i>m</i> och <i>a</i> är positiva, så ${tex('\\frac{m}{a}')} är positivt och <i>k</i> är negativt.</p>
<p>Du kan också tänka grafiskt: linjen skär <i>y</i>-axeln ovanför origo (${tex('m > 0')}) och <i>x</i>-axeln till höger om origo (${tex('a > 0')}). Då måste den luta nedåt, och en nedåtlutande linje har negativ riktningskoefficient. II är större än I. Svar B.</p>`,

  // NOG
  23: `<p>(1): Elbasen spelas av Jenny eller Lina, alltså inte av Susanne. Susanne spelar inte heller trummor, så Susanne spelar gitarr. Men vem av Jenny och Lina som spelar elbas och vem som spelar trummor går inte att avgöra. Räcker inte.</p>
<p>(2): Gitarren spelas av Susanne eller Lina, alltså inte av Jenny. Jenny spelar inte heller trummor, så Jenny spelar elbas. Men vem av Susanne och Lina som spelar gitarr och vem som spelar trummor går inte att avgöra. Räcker inte.</p>
<p>Tillsammans: enligt (1) spelar Susanne gitarr och enligt (2) spelar Jenny elbas. Då återstår trummorna åt Lina. Svar C.</p>`,

  24: `<p>Kalla antalet klasskamrater för <i>n</i>. Klassen har då ${tex('n + 1')} elever, eftersom Vilgot själv också går i klassen.</p>
<p>(1): Med tre klasskamrater till skulle klassen ha ${tex('n + 4')} elever, och det ska vara delbart med 5. Det gäller till exempel för ${tex('n = 1, 6, 11, 16, 21')} och så vidare. Räcker inte.</p>
<p>(2): <i>n</i> är udda, vilket ger oändligt många möjligheter. Räcker inte.</p>
<p>Tillsammans: de udda talen i listan från (1) är 1, 11, 21, 31 och så vidare. Det finns fortfarande flera möjligheter. Svar E.</p>`,

  25: `<p>(1): Salladshuvudet står på den nedersta hyllan, och mjölkpaketet står tillsammans med ketchupflaskan. Mjölkpaketet kan stå på vilken hylla som helst, till exempel den översta eller den mittersta. Räcker inte.</p>
<p>(2): Den översta hyllan är tom, så mjölkpaketet står på den mittersta eller den nedersta hyllan. Salladshuvudet står på hyllan under mjölkpaketet, och under den nedersta hyllan finns ingen hylla. Mjölkpaketet måste alltså stå på den mittersta hyllan. Räcker.</p>
<p>Svar B.</p>`,

  26: `<p>(1): <i>x</i> är delbart med 7. Mellan 20 och 60 ger det 21, 28, 35, 42, 49 och 56. Räcker inte.</p>
<p>(2): <i>x</i> ger resten 4 vid division med 5, alltså slutar <i>x</i> på 4 eller 9. Mellan 20 och 60 ger det 24, 29, 34, 39, 44, 49, 54 och 59. Räcker inte.</p>
<p>Tillsammans: det enda tal som finns i båda listorna är 49. Svar C.</p>`,

  27: `<p>(1): Pythagoras sats ger den längre kateten: ${tex('\\sqrt{4^2 - 2^2} = \\sqrt{12} = 2\\sqrt{3}')} cm. Arean är ${tex('\\frac{2 \\cdot 2\\sqrt{3}}{2} = 2\\sqrt{3}')} cm². Räcker.</p>
<p>(2): Triangeln har en rät vinkel och en vinkel på 60°, så den tredje vinkeln är 30°. Den kortare kateten ligger mittemot 30°-vinkeln och är därför hälften av hypotenusan, alltså 2 cm. Då är du i samma läge som i (1) och kan räkna ut arean. Räcker.</p>
<p>Båda påståendena räcker var för sig. Svar D.</p>`,

  28: `<p>(1): Av de 20 madrasserna som är 90 cm breda är 10 mjuka. Om de övriga 15 (120 cm breda) vet du inte hur många som är mjuka. Räcker inte.</p>
<p>(2): Varje madrass är antingen 90 eller 120 cm bred, så de hårda madrasserna är ${tex('10 + 6 = 16')} stycken. Då är ${tex('35 - 16 = 19')} madrasser mjuka. Räcker.</p>
<p>Svar B.</p>`,

  // DTK
  29: `<p>Titta på kvinnornas (Kv) staplar för Diskning, avdukning. Den grå stapeln för 1990 når cirka 24 minuter per dag och den svarta stapeln för 2010 cirka 15,5 minuter per dag.</p>
<p>Skillnaden är cirka ${tex('24 - 15{,}5 = 8{,}5')} minuter per dag. Diagrammet visar tid per dag, men frågan gäller en vecka: ${tex('8{,}5 \\cdot 7 \\approx 60')} minuter. Svar B.</p>`,

  30: `<p>Gör om veckotiden till minuter per dag, eftersom diagrammet visar tid per dag: 3 timmar och 30 minuter är 210 minuter, och ${tex('\\frac{210}{7} = 30')} minuter per dag.</p>
<p>Läs av alternativen: kvinnor Underhållsarbete 1990 cirka 20 minuter, män Omsorg om egna barn 1990 cirka 18 minuter, kvinnor Inköp av varor och tjänster 2000 cirka 30 minuter och män Resor i samband med hemarbete 2000 cirka 26 minuter.</p>
<p>Det är kvinnornas inköp år 2000 som motsvarar 30 minuter per dag. Svar C.</p>`,

  31: `<p>Jämför kvinnornas grå staplar (1990) med de svarta (2010) och räkna ut minskningen i procent av värdet 1990:</p>
<p>Matlagning: från 49 till 37,5, en minskning med 11,5, och ${tex('\\frac{11{,}5}{49} \\approx 23')} %.<br>
Städning av bostaden: från 40 till 31,5, och ${tex('\\frac{8{,}5}{40} \\approx 21')} %.<br>
Tvätt, strykning: från 22 till 13, och ${tex('\\frac{9}{22} \\approx 41')} %.<br>
Omsorg om egna barn: från 46,5 till 35,5, och ${tex('\\frac{11}{46{,}5} \\approx 24')} %.</p>
<p>Tvätt och strykning har nästan halverats, medan de andra minskat med ungefär en fjärdedel eller mindre. Svar C.</p>`,

  32: `<p>Läs av kolumnen Medelvårdtid. S:t Eriks sjukhus har 2,17 dagar och Skånes universitetssjukhus 6,71 dagar.</p>
<p>${tex('3 \\cdot 2{,}17 = 6{,}51')}, vilket ligger nära 6,71. Kvoten är ${tex('\\frac{2{,}17}{6{,}71} \\approx 0{,}32')}, alltså ungefär en tredjedel. Svar A.</p>`,

  33: `<p>Gå igenom kolumnen Medelålder i båda tabellhalvorna. Den högsta medelåldern har Sala lasarett, 80 år (närmast kommer Simrishamns sjukhus och Skånes universitetssjukhus med 78 år). Den lägsta har Sophiahemmet, 37 år (närmast kommer Artro center Löwenströmska med 38 år).</p>
<p>Skillnaden är ${tex('80 - 37 = 43')} år. Svar C.</p>`,

  34: `<p>Det sammanlagda antalet vårddagar är antalet vårdtillfällen gånger medelvårdtiden i dagar.</p>
<p>Kiruna sjukhus har 1 725 vårdtillfällen och medelvårdtiden 5,72 dagar: ${tex('1\\,725 \\cdot 5{,}72 \\approx 9\\,867')}, alltså ungefär 9 900. Ett snabbt överslag: ${tex('1\\,700 \\cdot 5{,}8 \\approx 9\\,900')}. Svar C.</p>`,

  35: `<p>Uttagsplatserna är de svarta prickarna. Kåseberga ligger vid kusten längst ned på kartan och Ö. Vemmerlöv uppe till höger. Norr är rakt uppåt.</p>
<p>Med hjälp av skalstocken (10 km) ser du att Ö. Vemmerlöv ligger ungefär 10 km öster om och drygt 20 km norr om Kåseberga. Förflyttningen är alltså ungefär dubbelt så lång norrut som österut, vilket ger en riktning cirka 25° från norr mot öster.</p>
<p>NNO ligger 22,5° från norr och ONO 67,5° från norr, så NNO passar bäst. Åt andra hållet, från Ö. Vemmerlöv till Kåseberga, blir riktningen SSV. Svar A.</p>`,

  36: `<p>Följ den grova streckade linjen (tilltänkt huvudvattenledning) och mät varje rak bit med skalstocken, där hela stocken är 10 km:</p>
<p>Löderup till Borrby längs Hörupsåsen: cirka 4,5 km.<br>
Borrby till Skillinge (först nordost, sedan österut): cirka 7,5 km.<br>
Skillinge snett nedåt åt sydväst längs kusten till brytpunkten: cirka 10 km.<br>
Därifrån snett uppåt åt nordväst: cirka 4,5 km.<br>
Till sist västerut till Ingelstorp: cirka 6 km.</p>
<p>Sammanlagt cirka ${tex('4{,}5 + 7{,}5 + 10 + 4{,}5 + 6 = 32{,}5')} km, alltså ungefär 33 km. Svar B.</p>`,

  37: `<p>De befintliga vattenverken är de svarta kvadraterna. Nybro ligger vid kusten till vänster, Borrby till höger vid Hörupsåsen och Bollerup ovanför, ungefär mitt emellan.</p>
<p>Använd sträckan Nybro till Borrby som bas. Med skalstocken blir den cirka 15 km (ungefär en och en halv skalstock). Höjden är det vinkelräta avståndet från Bollerup ned till den sträckan, cirka 5,5 km.</p>
<p>Arean är ungefär ${tex('\\frac{15 \\cdot 5{,}5}{2} \\approx 41')} km², vilket ligger närmast 40 km². De andra alternativen (20, 60 och 80 km²) ligger för långt ifrån. Svar B.</p>`,

  38: `<p>Gå till 63 år på den vågräta axeln. Hela ytan (befolkningen) når där cirka 112 000 och den mörka ytan (medlemmarna) cirka 73 000.</p>
<p>Andelen medlemmar är ${tex('\\frac{73\\,000}{112\\,000} \\approx 0{,}65')}, alltså cirka 65 %, och andelen icke medlemmar cirka 35 %.</p>
<p>I cirkeldiagram A täcker den mörka sektorn (medlemmar) ungefär två tredjedelar av cirkeln. Svar A.</p>`,

  39: `<p>Kontrollera varje ålder. Den ljusa ytans överkant visar antalet individer och den mörka ytans överkant antalet medlemmar.</p>
<p>9 år: cirka 118 000 individer, men bara cirka 64 000 medlemmar.<br>
24 år: cirka 142 000 individer, alltså fler än 120 000.<br>
42 år: cirka 133 000 individer, också fler än 120 000.<br>
69 år: cirka 118 000 individer och cirka 84 000 medlemmar.</p>
<p>Bara 69 år uppfyller båda villkoren. Svar D.</p>`,

  40: `<p>Antalet som inte var medlemmar är befolkningen minus medlemmarna, alltså höjden på den ljusa delen ovanför den mörka ytan.</p>
<p>39 år: cirka 122 000 individer och 67 000 medlemmar, alltså cirka 55 000 icke medlemmar.<br>
18 år: cirka 107 000 individer och 67 000 medlemmar, alltså cirka 40 000 icke medlemmar.</p>
<p>Skillnaden är cirka ${tex('55\\,000 - 40\\,000 = 15\\,000')}. Eftersom medlemmarna är ungefär lika många i båda åldrarna är skillnaden nästan samma som skillnaden i befolkning. Svar B.</p>`,
};
