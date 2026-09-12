// Textförklaringar till högskoleprovet 19 oktober 2025, provpass 1 (kvantitativt).
import { tex } from '../types.js';

export const forklaringar: Record<number, string> = {
  1: `<p>Flytta över ${tex('\\frac{1}{4}')} till högerledet: ${tex('x = \\frac{1}{8} - \\frac{1}{4}')}.</p>
<p>Skriv bråken med samma nämnare: ${tex('\\frac{1}{4} = \\frac{2}{8}')}, så ${tex('x = \\frac{1}{8} - \\frac{2}{8} = -\\frac{1}{8}')}.</p>
<p>Kontroll: ${tex('-\\frac{1}{8} + \\frac{2}{8} = \\frac{1}{8}')}. Svar B.</p>`,

  2: `<p>Titta på triangeln som bildas av L<sub>2</sub> och de två sneda linjerna. Vinkeln 102° ligger utanför triangeln, så vinkeln inuti triangeln vid samma punkt är 180° − 102° = 78°. Den andra vinkeln vid L<sub>2</sub> är 37°.</p>
<p>Vinkelsumman i en triangel är 180°, så vinkeln i triangelns topp (där de sneda linjerna korsar varandra) är 180° − 37° − 78° = 65°.</p>
<p>Vinkeln <i>v</i> sitter vid samma korsning men på andra sidan om den ena linjen, så <i>v</i> och 65° bildar tillsammans en rak vinkel: <i>v</i> = 180° − 65° = 115°. Att linjerna är parallella behövs egentligen bara för att man ska kunna göra samma resonemang uppe vid L<sub>1</sub>. Svar B.</p>`,

  3: `<p>Multiplicera varje term i den första parentesen med varje term i den andra:</p>
<p>${tex('3x \\cdot x = 3x^2')}, ${tex('3x \\cdot (-y) = -3xy')}, ${tex('y \\cdot x = xy')} och ${tex('y \\cdot (-y) = -y^2')}.</p>
<p>Lägg ihop: ${tex('3x^2 - 3xy + xy - y^2 = 3x^2 - 2xy - y^2')}. Svar A.</p>`,

  4: `<p>Räkna först ut ${tex('f(3) = 4 \\cdot 3 + 1 = 13')}.</p>
<p>Sedan ${tex('g(3) = 2 \\cdot f(3) - 1 = 2 \\cdot 13 - 1 = 25')}. Svar D.</p>`,

  5: `<p>Det skuggade området är ett parallelltrapets: två parallella sidor (1 cm upptill och 4 cm nedtill) och höjden 2 cm (rektangelns höjd).</p>
<p>Arean av ett parallelltrapets är medelvärdet av de parallella sidorna gånger höjden: ${tex('\\frac{1 + 4}{2} \\cdot 2 = 5')} cm².</p>
<p>Ett annat sätt: hela rektangeln är 4 · 2 = 8 cm². De två vita trianglarna har tillsammans basen 4 − 1 = 3 cm och höjden 2 cm, alltså arean ${tex('\\frac{3 \\cdot 2}{2} = 3')} cm². Kvar blir 8 − 3 = 5 cm². Svar C.</p>`,

  6: `<p>45 % är samma sak som ${tex('\\frac{45}{100} = \\frac{9}{20}')}.</p>
<p>${tex('\\frac{9}{20} \\cdot \\frac{2}{9} = \\frac{18}{180} = \\frac{1}{10}')}. Nian förkortas bort direkt, så det blir ${tex('\\frac{2}{20} = \\frac{1}{10}')}. Svar B.</p>`,

  7: `<p>Gör om sträckan till meter: 18 km = 18 000 m.</p>
<p>Tid = sträcka / hastighet = ${tex('\\frac{18\\,000}{20} = 900')} sekunder.</p>
<p>900 sekunder är 900/60 = 15 minuter. Svar A.</p>`,

  8: `<p>Linjen skär <i>y</i>-axeln i (0, −4), så den ena kateten i triangeln (längs <i>y</i>-axeln) är 4 längdenheter. Kalla avståndet från origo till skärningspunkten med <i>x</i>-axeln för <i>a</i>. Då är triangelns area ${tex('\\frac{4 \\cdot a}{2} = 2a')}.</p>
<p>Arean ska vara 2, så ${tex('2a = 2')} och ${tex('a = 1')}.</p>
<p>Eftersom <i>k</i> är negativt lutar linjen nedåt åt höger. Den går genom (0, −4) och måste alltså stiga åt vänster för att nå <i>x</i>-axeln, så skärningspunkten ligger på den negativa sidan: (−1, 0). Kontroll: linjen ${tex('y = -4x - 4')} har ${tex('k = -4')} och ger ${tex('y = 0')} när ${tex('x = -1')}. Svar B.</p>`,

  9: `<p>Skriv båda bråken med den gemensamma nämnaren <i>ab</i>: ${tex('\\frac{b}{a} = \\frac{b \\cdot b}{a \\cdot b} = \\frac{b^2}{ab}')} och ${tex('\\frac{1}{b} = \\frac{a}{ab}')}.</p>
<p>Summan blir ${tex('\\frac{b^2 + a}{ab}')}. Svar D.</p>
<p>Alternativ A är ett vanligt fel: man kan inte lägga ihop täljarna rakt av när nämnarna är olika.</p>`,

  10: `<p>Förenkla inuti rottecknet först. ${tex('\\frac{4\\,100}{200} = 20{,}5')}, så uttrycket är ${tex('\\sqrt{44 \\cdot 20{,}5} = \\sqrt{902}')}.</p>
<p>Eftersom ${tex('30^2 = 900')} är ${tex('\\sqrt{902}')} bara lite mer än 30. Svar C.</p>`,

  11: `<p>Talet <i>x</i> är större än 40 precis när tiotalssiffran är 4, 5 eller 6. (Om tiotalssiffran är 4 är talet minst 41, eftersom en tärning inte kan visa 0. Talet 40 kan alltså inte bildas.)</p>
<p>Tre av tärningens sex sidor duger, så sannolikheten är ${tex('\\frac{3}{6} = \\frac{1}{2}')}. Det andra kastet spelar ingen roll. Svar C.</p>`,

  12: `<p>Negativ exponent betyder "ett genom": ${tex('3^{-1} = \\frac{1}{3}')} och ${tex('3^{-2} = \\frac{1}{9}')}.</p>
<p>${tex('2 \\cdot \\frac{1}{3} + 3 \\cdot \\frac{1}{9} = \\frac{2}{3} + \\frac{3}{9} = \\frac{2}{3} + \\frac{1}{3} = 1')}. Svar D.</p>`,

  13: `<p>Kvantitet I: ${tex('\\sqrt{16} = 4')}, och 25 % av 4 är 1.</p>
<p>Kvantitet II: ${tex('\\sqrt{4} = 2')}.</p>
<p>2 är större än 1, så II är större än I. Svar B.</p>`,

  14: `<p>Kvantitet I: ${tex('f(-2) = -\\frac{-2}{2} + 5 = 1 + 5 = 6')}.</p>
<p>Kvantitet II: ${tex('g(14) = \\frac{14}{2} - 1 = 7 - 1 = 6')}.</p>
<p>De är lika. Svar C.</p>`,

  15: `<p>Vi vet att Lisbeth är äldre än Sara, och att Eva är äldre än Camilla som är äldre än Sara. Båda är alltså äldre än Sara, men ingenting kopplar ihop Lisbeths ålder med Evas.</p>
<p>Lisbeth kan vara både äldre och yngre än Eva utan att något av påståendena bryts. Informationen räcker inte. Svar D.</p>`,

  16: `<p>Första ekvationen: ${tex('2 = \\frac{194}{x}')} ger ${tex('x = \\frac{194}{2} = 97')}.</p>
<p>Andra ekvationen: ${tex('3 = 100 - y')} ger ${tex('y = 97')}.</p>
<p>Kvantiteterna är lika. Svar C.</p>`,

  17: `<p>Jämför genom att ta skillnaden: II − I = ${tex('(3x - 2y) - (x - y) = 2x - y')}.</p>
<p>Vi vet bara att <i>y</i> är positivt, ingenting om <i>x</i>. Tecknet på ${tex('2x - y')} kan därför bli vad som helst. Exempel: med ${tex('x = 0')} och ${tex('y = 1')} är I = −1 och II = −2 (I störst), men med ${tex('x = 5')} och ${tex('y = 1')} är I = 4 och II = 13 (II störst).</p>
<p>Informationen är otillräcklig. Svar D.</p>`,

  18: `<p>Lägg ihop bråken i kvantitet I med den gemensamma nämnaren 70: ${tex('\\frac{35}{70} + \\frac{28}{70} + \\frac{30}{70} = \\frac{93}{70}')}.</p>
<p>Jämför med kvantitet II: ${tex('\\frac{93}{71}')}. Täljarna är lika, men I har mindre nämnare, och samma täljare delat med ett mindre tal ger ett större bråk. I är alltså större. Svar A.</p>`,

  19: `<p>Kvoten mellan en cirkels omkrets och dess diameter är alltid ${tex('\\pi \\approx 3{,}14')}. Det är själva definitionen av pi.</p>
<p>Kvantitet II: ${tex('2\\sqrt{2} \\approx 2 \\cdot 1{,}41 = 2{,}83')}. Man kan också se att ${tex('2\\sqrt{2} = \\sqrt{8}')}, som är mindre än ${tex('\\sqrt{9} = 3')}.</p>
<p>I är större. Svar A.</p>`,

  20: `<p>Titta på tecknen. Jämna potenser blir alltid positiva och udda potenser behåller basens tecken.</p>
<p>Kvantitet I: ${tex('x^3')} är positivt (eftersom <i>x</i> &gt; 0) och ${tex('y^4')} är positivt (jämn potens). Produkten är positiv.</p>
<p>Kvantitet II: ${tex('x^4')} är positivt men ${tex('y^3')} är negativt (udda potens av ett negativt tal). Produkten är negativ.</p>
<p>Ett positivt tal är alltid större än ett negativt. Svar A.</p>`,

  21: `<p>Om <i>x</i> vore 5 skulle triangeln ha sidorna 3, 4 och 5, och då gäller Pythagoras sats (${tex('3^2 + 4^2 = 5^2')}), vilket betyder att vinkeln mellan sidorna 3 och 4, alltså <i>y</i>, skulle vara exakt 90°.</p>
<p>Nu är <i>x</i> mindre än 5. Sidan mittemot <i>y</i> är alltså kortare än i det rätvinkliga fallet, och en kortare motstående sida betyder en mindre vinkel. Därför är <i>y</i> mindre än 90°. Svar B.</p>`,

  22: `<p>Dela upp 42 i primtalsfaktorer: ${tex('42 = 2 \\cdot 3 \\cdot 7')}. Eftersom primtalsfaktoriseringen är entydig måste de tre primtalen vara 2, 3 och 7.</p>
<p>Medianen är det mittersta talet i storleksordning, alltså 3. Kvantiteterna är lika. Svar C.</p>`,

  23: `<p>Vi vill veta antalet hårda paket.</p>
<p>(1) säger att 18 paket är mönstrade, så 7 är enfärgade. Men det säger ingenting om hur många som är hårda. Räcker inte.</p>
<p>(2) säger att bland de enfärgade är 5 hårda och 2 mjuka. Det säger ingenting om de mönstrade paketen. Räcker inte.</p>
<p>Tillsammans: vi vet att de 7 enfärgade är 5 hårda och 2 mjuka, och att 18 är mönstrade, men fortfarande ingenting om hur många av de 18 mönstrade som är hårda. Svar E.</p>`,

  24: `<p>För att veta vem som vann behöver vi kunna jämföra deras tider.</p>
<p>(1) ger Sarahs medelhastighet, vilket ger hennes tid: ${tex('\\frac{100}{1{,}91} \\approx 52{,}4')} sekunder. Men vi vet inget om Therese. Räcker inte.</p>
<p>(2) ger Thereses tid, 50,6 sekunder, men inget om Sarah. Räcker inte.</p>
<p>Tillsammans: Sarah cirka 52,4 s och Therese 50,6 s, så Therese vann. Svar C.</p>`,

  25: `<p>(1): ${tex('\\frac{x + y}{2} + 3 = 10')} ger ${tex('\\frac{x + y}{2} = 7')}, alltså ${tex('x + y = 14')}. Frågan är besvarad direkt, utan att vi behöver veta <i>x</i> och <i>y</i> var för sig.</p>
<p>(2): ${tex('y = 6x')} ger bara ett samband, ${tex('x + y = 7x')}, som kan vara vad som helst. Räcker inte.</p>
<p>Svar A.</p>`,

  26: `<p>Tre av fem fick medalj, alltså två blev utan.</p>
<p>(1): Ellen blev utan, och minst en av Bosse och Danne fick medalj. Då kan medaljörerna vara Anki, Bosse, Danne (Anki ja) eller Bosse, Cissi, Danne (Anki nej). Räcker inte.</p>
<p>(2): Minst en av Anki och Cissi fick medalj, och minst en av Bosse och Ellen blev utan. Medaljörerna kan vara Anki, Bosse, Cissi (Anki ja) eller Bosse, Cissi, Danne (Anki nej). Räcker inte.</p>
<p>Tillsammans: Ellen är utan, så tre av Anki, Bosse, Cissi och Danne fick medalj. Både Anki, Bosse, Danne och Bosse, Cissi, Danne uppfyller alla villkoren, så vi vet fortfarande inte om Anki fick medalj. Svar E.</p>`,

  27: `<p>(1): Varken Göran eller Roger är kassör, alltså är Stig kassör. Stig är inte sekreterare, vilket vi redan visste. Sekreteraren är Göran eller Roger, men vi kan inte avgöra vem. Räcker inte.</p>
<p>(2): Varken Göran eller Stig är ordförande, alltså är Roger ordförande. Stig är kassör. Då återstår bara sekreterarposten åt Göran. Räcker ensamt.</p>
<p>Svar B.</p>`,

  28: `<p>Kalla antalet äpplen i påse B för <i>b</i>. Då har påse A ${tex('2b')} äpplen, och tillsammans har de ${tex('3b')}.</p>
<p>(1): Efter att 10 tagits bort från vardera påse gäller ${tex('2b - 10 = 3(b - 10)')}, alltså ${tex('2b - 10 = 3b - 30')} och ${tex('b = 20')}. Totalt 60 äpplen. Räcker.</p>
<p>(2): ${tex('2b = b + 20')} ger ${tex('b = 20')}. Totalt 60. Räcker.</p>
<p>Båda påståendena räcker var för sig. Svar D.</p>`,

  29: `<p>Läs av kolumnen Garantipension. Totalt (kvinnor och män) är 663 126 personer, och antalet kvinnor är 522 720.</p>
<p>${tex('\\frac{522\\,720}{663\\,126} \\approx 0{,}79')}, alltså ungefär 80 procent. Ett snabbt överslag: 520 av 660 är knappt 4/5. Svar C.</p>`,

  30: `<p>Läs av kolumnen Tilläggspension på raderna Halvt uttag och En fjärdedels uttag, för kvinnor respektive män.</p>
<p>Män: 1 800 + 867 = 2 667. Kvinnor: 1 631 + 685 = 2 316.</p>
<p>Skillnaden är 2 667 − 2 316 = 351. Svar B.</p>`,

  31: `<p>Förhållandet 2:5 betyder att antalet med inkomstpension ska vara 2/5 = 0,4 av antalet med premiepension. Använd raderna för kvinnor och män tillsammans.</p>
<p>Helt uttag: 1 609 321 mot 1 478 256, ungefär lika många. Tre fjärdedels uttag: 2 577 mot 1 890, inkomstpension fler. Halvt uttag: 5 310 mot 4 255, inkomstpension fler. En fjärdedels uttag: 2 777 mot 6 997, och ${tex('\\frac{2\\,777}{6\\,997} \\approx 0{,}40')}.</p>
<p>Bara en fjärdedels uttag stämmer. Svar D.</p>`,

  32: `<p>Vi söker en stapel där varje äldre åldersgrupp är större än den närmast yngre, alltså där segmenten växer nedifrån och upp: −29 år minst, sedan 30–39, 40–49, 50–59 och 60– störst.</p>
<p>Det stämmer för Företags- och konsulttjänster med män som företagsledare: cirka 2 000, 8 000, 16 000, 17 000 och 22 000. I de andra alternativen bryts mönstret. För kvinnor i samma bransch är 60– mindre än 50–59, för Handel med kvinnor är 60– mindre än 50–59, och för Bygg med män är 60– mindre än 50–59.</p>
<p>Svar A.</p>`,

  33: `<p>Jämför staplarna Kvinnor och Män inom varje bransch. Bara inom Personliga och kulturella tjänster är kvinnornas stapel högre (cirka 31 000 mot cirka 19 000).</p>
<p>Totalt i branschen: 31 000 + 19 000 = 50 000. Svar B.</p>`,

  34: `<p>Stapeln för Handel med män som företagsledare når ungefär 48 000. En åttondel av det är 6 000.</p>
<p>Läs av segmenten i stapeln: −29 år cirka 2 000, 30–39 år cirka 6 000, 40–49 år cirka 13 000, 50–59 år cirka 14 000 och 60– år cirka 13 000.</p>
<p>Det är gruppen 30–39 år som utgör en åttondel. Svar C.</p>`,

  35: `<p>Skalstrecket i kartans nedre högra hörn motsvarar 50 km, så 100 km är två sådana sträckor. Mät från mitten av Stockholms stora cirkel.</p>
<p>Inom 100 km ligger Uppsala, Enköping, Strängnäs, Torshälla, Eskilstuna och Västerås, alltså sex städer. Köping, Arboga, Örebro, Hedemora och Falun ligger längre bort.</p>
<p>Svar A.</p>`,

  36: `<p>Jämför cirklarnas storlek med skalcirklarna i kartans nedre vänstra hörn (750, 1 500 och 2 500 tunnor).</p>
<p>Västerås har en av de stora cirklarna, ungefär 2 500 tunnor. Örebros cirkel är liten, ungefär 750 tunnor.</p>
<p>Skillnaden är cirka 2 500 − 750 = 1 750 tunnor. Svar C.</p>`,

  37: `<p>Enligt kartans text importerade Stockholm 22 400 tunnor om året. Uppskatta hur mycket som fördes vidare till de andra städerna genom att lägga ihop deras cirklar: två stora på cirka 2 500 (Västerås och Hedemora), några på cirka 1 500 (Uppsala, Köping, Arboga, Falun) och några mindre på 500 till 750 (Enköping, Strängnäs, Eskilstuna, Torshälla, Örebro). Det blir ungefär 9 000 till 10 000 tunnor.</p>
<p>Andelen som stannade i Stockholm blir då ${tex('\\frac{22\\,400}{22\\,400 + 9\\,600} \\approx 0{,}70')}, alltså cirka 70 procent. Svar C.</p>`,

  38: `<p>Följ linjen för 2016 (den tunna streckade linjen). Den 22 mars var antalet tranor ungefär 5 000, och den 25 mars ungefär 15 000.</p>
<p>Antalet har tredubblats, vilket är en ökning med 200 procent (från 1 till 3 delar är en ökning med 2 delar). Svar B.</p>`,

  39: `<p>Följ linjen för 2010 (den tjocka grå linjen). Den 26 mars var antalet ungefär 3 500 tranor. Tre gånger så många är cirka 10 500.</p>
<p>Linjen når 10 500 omkring den 30 mars, alltså efter fyra dagar. Svar B.</p>`,

  40: `<p>Det högsta värdet i hela diagrammet är toppen på 2012 års linje (ringarna) omkring den 3 april, ungefär 27 500 tranor.</p>
<p>Tre år tidigare är 2009 (den grå streckade linjen), som den 3 april låg på ungefär 16 000.</p>
<p>Skillnaden är cirka 27 500 − 16 000 = 11 500. Svar D.</p>`,
};
