// Textförklaringar till högskoleprovet 7 maj 2022, provpass 4 (kvantitativt).
import { tex } from '../types.js';

export const forklaringar: Record<number, string> = {
  // XYZ
  1: `<p>Multiplicera talen och tiopotenserna var för sig: ${tex('1{,}7 \\cdot 3{,}3 = 5{,}61')} och ${tex('10^5 \\cdot 10^3 = 10^8')}.</p>
<p>Produkten är ${tex('5{,}61 \\cdot 10^8')}.</p>
<p>Svar B.</p>`,

  2: `<p>Medelvärdet av <i>y</i> och 1 är 5, så ${tex('y + 1 = 10')} och ${tex('y = 9')}.</p>
<p>Medelvärdet av <i>x</i> och <i>y</i> är 3, så ${tex('x + 9 = 6')} och ${tex('x = -3')}.</p>
<p>Svar B.</p>`,

  3: `<p>En potens av en potens: multiplicera exponenterna. ${tex('(x^7)^{y+2} = x^{7(y+2)} = x^{7y+14}')}.</p>
<p>Svar C.</p>`,

  4: `<p>${tex('f(x) = \\frac{x}{2} - 1')} är en rät linje med positiv lutning ${tex('\\frac{1}{2}')} som skär <i>y</i>-axeln i −1 och <i>x</i>-axeln i 2.</p>
<p>Graf A och B lutar nedåt och graf D skär <i>y</i>-axeln under −1 med brantare lutning. Graf C stiger svagt och skär axlarna i −1 och 2.</p>
<p>Svar C.</p>`,

  5: `<p>Korsmultiplicera: ${tex('6x \\cdot 2b = 3a \\cdot y')}, alltså ${tex('12bx = 3ay')}.</p>
<p>Lös ut <i>b</i>: ${tex('b = \\frac{3ay}{12x} = \\frac{ay}{4x}')}.</p>
<p>Svar B.</p>`,

  6: `<p>Yttervinkeln 140° ger att triangelns högra basvinkel är ${tex('180^\\circ - 140^\\circ = 40^\\circ')}.</p>
<p>Den högra deltriangeln är rätvinklig: ${tex('5x + 40^\\circ + 90^\\circ = 180^\\circ')}, så ${tex('x = 10^\\circ')} och ${tex('4x = 40^\\circ')}.</p>
<p>I den vänstra deltriangeln är basvinkeln ${tex('180^\\circ - 90^\\circ - 40^\\circ = 50^\\circ')}, och yttervinkeln <i>v</i> är ${tex('180^\\circ - 50^\\circ = 130^\\circ')}.</p>
<p>Svar A.</p>`,

  7: `<p>Högerledet är ${tex('2 + x')}. Ekvationen blir ${tex('\\frac{x^2}{y} + 2 = 2 + x')}, alltså ${tex('\\frac{x^2}{y} = x')}.</p>
<p>Multiplicera med <i>y</i>: ${tex('x^2 = xy')}. Eftersom ${tex('x \\neq 0')} kan vi dela med <i>x</i>: ${tex('x = y')}.</p>
<p>Svar C.</p>`,

  8: `<p>Idag är pojkarnas sammanlagda ålder lika med flickans. Om tre år har var och en av de tre pojkarna blivit 3 år äldre, så deras summa ökar med 9 år. Flickan blir 3 år äldre.</p>
<p>Differensen blir ${tex('9 - 3 = 6')} år.</p>
<p>Svar C.</p>`,

  9: `<p>${tex('\\frac{14{,}4}{36} = 0{,}4')}, alltså 40 procent.</p>
<p>Svar B.</p>`,

  10: `<p>Sätt in ${tex('x = a')} och ${tex('y = a')}: ${tex('a = \\frac{1}{2}a + 2')}.</p>
<p>Då är ${tex('\\frac{1}{2}a = 2')} och ${tex('a = 4')}.</p>
<p>Svar D.</p>`,

  11: `<p>Kvadraterna har sidan 5 cm, så kvartscirklarna har radien 5 cm.</p>
<p>Underkanten är ${tex('5 + 5 + 5 + 5 = 20')} cm (en radie, två kvadratsidor, en radie). Kvadraternas överkant är ${tex('5 + 5 = 10')} cm. De två kvartscirkelbågarna är tillsammans en halv cirkel: ${tex('\\frac{2\\pi \\cdot 5}{2} = 5\\pi')} cm.</p>
<p>Omkretsen är ${tex('20 + 10 + 5\\pi = 30 + 5\\pi')} cm.</p>
<p>Svar A.</p>`,

  12: `<p>Utveckla kvadraterna: ${tex('(x + y)^2 - (x - y)^2 = (x^2 + 2xy + y^2) - (x^2 - 2xy + y^2) = 4xy')}.</p>
<p>Med ${tex('xy = 1')} blir värdet 4.</p>
<p>Svar D.</p>`,

  // KVA
  13: `<p>${tex('80\\,000')} cm = 800 m = 0,8 km, vilket är mindre än 8 km.</p>
<p>Svar B.</p>`,

  14: `<p>${tex('\\frac{1}{5} - \\frac{5}{20} = \\frac{4}{20} - \\frac{5}{20} = -\\frac{1}{20}')}, som är mindre än 0.</p>
<p>Svar B.</p>`,

  15: `<p>De kända talen i storleksordning är 2, 3, 4, 7. Medianen är det mittersta av de fem talen och beror på <i>a</i>.</p>
<p>Om ${tex('a \\leq 3')} blir serien till exempel 1, 2, 3, 4, 7 med medianen 3. Om ${tex('a \\geq 4')} blir den till exempel 2, 3, 4, 5, 7 med medianen 4. Informationen är otillräcklig.</p>
<p>Svar D.</p>`,

  16: `<p>Multiplicera ut: ${tex('-21 + 14x = 21')}, alltså ${tex('14x = 42')} och ${tex('x = 3')}.</p>
<p>I är lika med II. Svar C.</p>`,

  17: `<p>Triangelolikheten säger bara att den tredje sidan måste vara kortare än 17 cm. Den kan vara 15 cm, men lika gärna 10 cm eller 16 cm.</p>
<p>Svar D.</p>`,

  18: `<p>Lös ut <i>x</i>: ${tex('x = y + \\frac{3}{5} - \\frac{1}{2} = y + \\frac{1}{10}')}.</p>
<p><i>x</i> är alltid en tiondel större än <i>y</i>. Svar A.</p>`,

  19: `<p>Skillnaden mellan kvantiteterna är ${tex('(x + y) - (x - y) = 2y')}. Vilken som är störst beror alltså på tecknet hos <i>y</i>.</p>
<p>Med ${tex('x = 1, y = 2')} är I större (3 mot −1). Med ${tex('x = -3, y = -1')} är II större (−4 mot −2). Informationen är otillräcklig.</p>
<p>Svar D.</p>`,

  20: `<p>Kvantitet I: ${tex('\\pi \\cdot 20^2 + \\pi \\cdot 5^2 = 400\\pi + 25\\pi = 425\\pi')}.</p>
<p>Kvantitet II: ${tex('\\pi \\cdot 10^2 + \\pi \\cdot 15^2 = 100\\pi + 225\\pi = 325\\pi')}.</p>
<p>I är större. Svar A.</p>`,

  21: `<p>${tex('m_1')} och ${tex('m_2')} är linjernas skärningar med <i>y</i>-axeln. L<sub>1</sub> skär <i>y</i>-axeln under origo (vid ungefär −2) och L<sub>2</sub> ovanför origo (vid ungefär 2).</p>
<p>Då är ${tex('m_1')} negativt och ${tex('m_2')} positivt, så ${tex('m_1 - m_2')} är negativt, alltså mindre än 0.</p>
<p>Svar B.</p>`,

  22: `<p>${tex('21 = 3 \\cdot 7')}, primtalsfaktorernas summa är ${tex('3 + 7 = 10')}.</p>
<p>${tex('30 = 2 \\cdot 3 \\cdot 5')}, summan är ${tex('2 + 3 + 5 = 10')}.</p>
<p>Svar C.</p>`,

  // NOG
  23: `<p>(1) Alma är längre än Freja. Säger inget om Elsa.</p>
<p>(2) Freja är kortare än Elsa. Säger inget om Alma.</p>
<p>Tillsammans: både Alma och Elsa är längre än Freja, men vi vet inte vem av dem som är längst. Räcker inte ens tillsammans.</p>
<p>Svar E.</p>`,

  24: `<p>(1) En tredjedel av pennorna är röda. Ger bara andelen, inte antalet. Räcker inte.</p>
<p>(2) 20 svarta pennor. Antalet röda är okänt. Räcker inte.</p>
<p>Tillsammans: de svarta utgör två tredjedelar, så ${tex('\\frac{2}{3}')} av totalen är 20 och totalen är 30 pennor.</p>
<p>Svar C.</p>`,

  25: `<p>(1) Det enda talet mellan 50 och 60 som är delbart med 7 är 56. Räcker.</p>
<p>(2) Det enda talet mellan 50 och 60 som är delbart med 8 är 56. Räcker.</p>
<p>Var för sig räcker. Svar D.</p>`,

  26: `<p>(1) Vanilj är ${tex('\\frac{1}{8}')}, så choklad och jordgubb är tillsammans ${tex('\\frac{7}{8}')} av kulorna, vilket är 140. Då säljs ${tex('140 \\cdot \\frac{8}{7} = 160')} kulor. Räcker.</p>
<p>(2) 80 chokladkulor säger inget om de andra smakerna. Räcker inte.</p>
<p>Svar A.</p>`,

  27: `<p>(1) ${tex('x < y < z')}: <i>x</i> kan vara −5 men också 1. Räcker inte.</p>
<p>(2) ${tex('xy > xz')} ger ${tex('x(y - z) > 0')}. Om vi inte vet tecknet hos ${tex('y - z')} vet vi inte tecknet hos <i>x</i>. Räcker inte.</p>
<p>Tillsammans: av (1) är ${tex('y - z < 0')}, och för att ${tex('x(y - z)')} ska vara positivt måste då ${tex('x < 0')}. Ja.</p>
<p>Svar C.</p>`,

  28: `<p>(1) Sidan i K är större än radien i C. Med sidan 2 och radien 1 är K = 4 större än C ≈ 3,14, men med sidan 1,1 och radien 1 är C större. Räcker inte.</p>
<p>(2) Om cirkelns diameter är lika med kvadratens diagonal ryms hela kvadraten inne i cirkeln (kvadraten är inskriven i cirkeln). Då har C alltid större area än K. Räcker.</p>
<p>Svar B.</p>`,

  // DTK: Föräldrapenning
  29: `<p>Flest mottagare har åldersgruppen 35–39 år med 223 465 personer, varav 119 518 kvinnor och 103 947 män.</p>
<p>${tex('\\frac{119\\,518}{223\\,465} \\approx 0{,}53')}, alltså cirka 53 procent kvinnor och 47 procent män. Det cirkeldiagram där det mörka fältet (kvinnor) är bara lite större än hälften är A.</p>
<p>Svar A.</p>`,

  30: `<p>Totalt togs 50 777 667 nettodagar ut för 660 567 barn.</p>
<p>${tex('\\frac{50\\,777\\,667}{660\\,567} \\approx 77')} dagar per barn.</p>
<p>Svar D.</p>`,

  31: `<p>Flest nettodagar togs ut av gruppen 30–34 år: 15 585 678 dagar.</p>
<p>${tex('\\frac{15\\,585\\,678}{50\\,777\\,667} \\approx 0{,}31')}, alltså cirka 30 procent.</p>
<p>Svar B.</p>`,

  // DTK: Språkprov
  32: `<p>Grammatikdelen är de vita rutorna. Läs av hur många minuter den sträcker sig över för varje elev.</p>
<p>Elev 1: från cirka 55 till 90 minuter, alltså 35 minuter. Elev 8: från cirka 48 till 75, 27 minuter. Elev 10: från cirka 65 till 89, 24 minuter. Elev 14: från cirka 90 till 120, 30 minuter.</p>
<p>Svar C.</p>`,

  33: `<p>Dra en lodrät linje vid 30 minuter. Nästan alla elever är då fortfarande i läsförståelsedelen, och man räknar rutorna från vänster fram till linjen.</p>
<p>För de flesta elever, till exempel elev 9, 12, 14 och 17, går linjen genom den fjärde rutan. Några snabbare elever har hunnit längre, men uppgift 4 är vanligast.</p>
<p>Svar A.</p>`,

  34: `<p>Tre elever har färre än 30 rutor: elev 3 (som slutade efter fyra grammatikuppgifter), elev 9 (som bara hann tre lucktexter innan tiden tog slut) och elev 20 (som slutade efter tre lucktexter).</p>
<p>Deras läsförståelsedel tog cirka 57, 78 respektive 35 minuter. ${tex('\\frac{57 + 78 + 35}{3} \\approx 57')}, alltså närmast 55 minuter.</p>
<p>Svar C.</p>`,

  // DTK: Karlsöarna
  35: `<p>Skalan visar att 500 meter är ungefär 2,8 cm på kartan i original. Från fyren längs strandkanten österut förbi Millsnabb till Norderhamn är det knappt 800 meter.</p>
<p>Körvägen (den prickade linjen) går först söderut från fyren, sedan österut genom Smaldal och slutligen norrut längs Norderhamnsberget till Norderhamn, sammanlagt ungefär 2 000 meter.</p>
<p>Skillnaden är ungefär 1 200 meter.</p>
<p>Svar B.</p>`,

  36: `<p>Rauken vid Stalen ligger i sydväst på Lilla Karlsö och Helveteshålet i nordost, så riktningen är nordostlig.</p>
<p>Mät avståndet mot skalan: sträckan är drygt två skalstreck om 500 meter, alltså omkring 1 050 meter.</p>
<p>Svar D.</p>`,

  37: `<p>Rita en cirkel med radien 500 meter (ett helt skalstreck) runt röset vid Hesselby läde och räkna grottsymbolerna.</p>
<p>Inom cirkeln ligger Lilla Förvar alldeles intill, de två grottorna strax norr därom på Norderhamnsberget samt Stora Förvar och Hästkliv på Austerberget. Jungfruhålet ligger strax utanför.</p>
<p>Svar C.</p>`,

  // DTK: Lastbilstransporter
  38: `<p>Svenska lastbilars godsvikt 2004 var 318,5 miljoner ton (index 100). 350 miljoner ton motsvarar index ${tex('\\frac{350}{318{,}5} \\approx 110')}.</p>
<p>Kurvan för svenska lastbilars godsvikt ligger på cirka 111 år 2007. 2006 är den 105, 2009 cirka 103 och 2012 cirka 91.</p>
<p>Svar B.</p>`,

  39: `<p>Utländska lastbilar 2012: index cirka 142 av 461 miljoner km, ${tex('1{,}42 \\cdot 461 \\approx 655')} miljoner km.</p>
<p>Svenska lastbilar 2012: index cirka 100 av 2 227 miljoner km, alltså cirka 2 227 miljoner km.</p>
<p>Totalt ${tex('655 + 2\\,227 \\approx 2\\,900')} miljoner km, det vill säga 2,9 miljarder km.</p>
<p>Svar C.</p>`,

  40: `<p>Den ljusa delen av staplarna är trafikarbete utan last. Norge cirka 28, Danmark cirka 10 och Finland cirka 15 miljoner km.</p>
<p>${tex('28 + 10 + 15 \\approx 53')}, alltså närmast 50 miljoner km.</p>
<p>Svar A.</p>`,
};
