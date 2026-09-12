// Textförklaringar till högskoleprovet 13 april 2024, provpass 2 (kvantitativt).
import { tex } from '../types.js';

export const forklaringar: Record<number, string> = {
  1: `<p>Kvadraten har arean 16 cm², så sidan är 4 cm. Triangeln har samma bas som kvadratens översida, 4 cm, och arean 6 cm²: ${tex('\\frac{4h}{2} = 6')} ger höjden ${tex('h = 3')} cm.</p>
<p>${tex('x = 4 + 3 = 7')} cm. Svar B.</p>`,

  2: `<p>Sätt in ${tex('y = -2')}: ${tex('2x + 3x \\cdot (-2) - 4 \\cdot (-2) = 10')}, alltså ${tex('2x - 6x + 8 = 10')}.</p>
<p>Det ger ${tex('-4x = 2')} och ${tex('x = -\\frac{1}{2}')}. Svar D.</p>`,

  3: `<p>Funktionen ${tex('f(x) = \\frac{x}{2} - 1')} har riktningskoefficienten ${tex('\\frac{1}{2}')}, så linjen lutar svagt uppåt: ett halvt steg upp för varje steg åt höger. Den skär <i>y</i>-axeln i −1 och <i>x</i>-axeln i 2.</p>
<p>Alternativ D visar en flack linje uppåt genom (0, −1) och (2, 0). A och B lutar nedåt, och C lutar uppåt men mycket brantare. Svar D.</p>`,

  4: `<p>${tex('0{,}6x = 39')} ger ${tex('x = \\frac{39}{0{,}6} = 65')}.</p>
<p>Kontroll: ${tex('0{,}6 \\cdot 65 = 39')}. Svar B.</p>`,

  5: `<p>Multiplicera in: ${tex('ab + ac - ab - bc + bc - ac')}.</p>
<p>Varje term tar ut en annan: ${tex('ab - ab')}, ${tex('ac - ac')} och ${tex('bc - bc')}. Kvar blir 0. Svar A.</p>`,

  6: `<p>I den stora triangeln ABC är vinkeln vid A ${tex('180° - 90° - 65° = 25°')}.</p>
<p>Titta sedan på den lilla triangeln med hörn i A, B och punkten på AC. Där är vinklarna 25°, 123° och <i>x</i>: ${tex('x = 180° - 25° - 123° = 32°')}. Svar B.</p>`,

  7: `<p>Bestäm tecknen. ${tex('a^2')} är positivt och <i>b</i> negativt, så ${tex('a^2 b')} är negativt. <i>a</i> är positivt och ${tex('b^3')} negativt (en negativ bas upphöjd till udda tal), så ${tex('ab^3')} är negativt.</p>
<p>Både <i>x</i>- och <i>y</i>-koordinaten är negativa, alltså tredje kvadranten, där R ligger. Svar C.</p>`,

  8: `<p>Sidorna passar precis: ${tex('\\frac{50}{5} = 10')}, ${tex('\\frac{54}{6} = 9')} och ${tex('\\frac{72}{9} = 8')}. Klossarna fyller alltså lådan helt om de vänds rätt.</p>
<p>${tex('10 \\cdot 9 \\cdot 8 = 720')} klossar. Samma sak med volymer: ${tex('\\frac{194\\,400}{270} = 720')}. Svar D.</p>`,

  9: `<p>Bryt ut ${tex('3y')} ur parentesen: ${tex('3xy + 15y = 3y(x + 5)')}. Täljaren blir ${tex('2xy \\cdot 3y(x + 5) = 6xy^2(x + 5)')}.</p>
<p>Dela med nämnaren ${tex('6xy^2')}: kvar blir ${tex('x + 5')}. Svar A.</p>`,

  10: `<p>Skriv 12 som en produkt av tre olika positiva heltal i växande ordning: ${tex('1 \\cdot 2 \\cdot 6')} eller ${tex('1 \\cdot 3 \\cdot 4')}.</p>
<p>${tex('z - x')} blir ${tex('6 - 1 = 5')} respektive ${tex('4 - 1 = 3')}. Det största möjliga värdet är 5. Svar C.</p>`,

  11: `<p>För att låda A ska ha kvar en röd och en vit måste Laila ta en röd ur A. Sannolikheten är ${tex('\\frac{2}{3}')}. För att låda B ska ha kvar en röd och en vit måste hon ta en vit ur B, sannolikhet ${tex('\\frac{2}{3}')}.</p>
<p>Då får låda C automatiskt en röd och en vit. Sannolikheten är ${tex('\\frac{2}{3} \\cdot \\frac{2}{3} = \\frac{4}{9}')}. Svar D.</p>`,

  12: `<p>Två lika termer: ${tex('2^5 + 2^5 = 2 \\cdot 2^5 = 2^6')}.</p>
<p>Multiplicerat med 2 blir det ${tex('2 \\cdot 2^6 = 2^7')}. Svar B.</p>`,

  13: `<p>Sätt in ${tex('y = 0')}: ${tex('x - 5 = 5')}, alltså ${tex('x = 10')}.</p>
<p>10 är större än 0. Svar A.</p>`,

  14: `<p>Jämna tal efter 15: 16, 18, 20, ... Det nionde är ${tex('16 + 2 \\cdot 8 = 32')}. Udda tal efter 18: 19, 21, 23, ... Det sjunde är ${tex('19 + 2 \\cdot 6 = 31')}.</p>
<p>${tex('J - U = 32 - 31 = 1')}, som är större än 0. Svar A.</p>`,

  15: `<p>Medelvärdet är ${tex('\\frac{1}{2}\\left(\\frac{1}{10} + \\frac{2}{10}\\right) = \\frac{1}{2} \\cdot \\frac{3}{10} = \\frac{3}{20} = 0{,}15')}.</p>
<p>${tex('\\frac{1}{7} \\approx 0{,}143')}, som är mindre. Svar A.</p>`,

  16: `<p>Både <i>a</i> och <i>b</i> är negativa, så kvoten ${tex('\\frac{a}{b}')} är positiv. Men hur stor den är beror på talen.</p>
<p>${tex('a = -1')}, ${tex('b = -1')} ger 1. ${tex('a = -1')}, ${tex('b = -2')} ger ${tex('\\frac{1}{2}')}. ${tex('a = -2')}, ${tex('b = -1')} ger 2. Informationen är otillräcklig. Svar D.</p>`,

  17: `<p>Femhörningen har fem lika sidor, var och en ${tex('\\frac{75}{5} = 15')} cm. AB och ED är sidor, tillsammans 30 cm.</p>
<p>BE är en diagonal, som alltid är längre än en sida i en regelbunden femhörning. Summan är därför större än ${tex('30 + 15 = 45')} cm. Svar A.</p>`,

  18: `<p>Kvantitet I är större än 500, och kvantitet II är mindre än 600. De kan alltså överlappa.</p>
<p>Exempel: 1 100 ger I = 550, och 700 ger II = 525, så I är störst. Men 790 ger II = 592,5, och då är II störst. Informationen är otillräcklig. Svar D.</p>`,

  19: `<p>${tex('\\frac{x}{3} = 1 - \\frac{3}{2} = -\\frac{1}{2}')}, så ${tex('x = -\\frac{3}{2} = -1{,}5')}.</p>
<p>${tex('-\\frac{1}{6} \\approx -0{,}17')} är större än −1,5. Svar B.</p>`,

  20: `<p>Riktningskoefficienten för L<sub>1</sub> är ${tex('\\frac{2 - 3}{1 - (-1)} = \\frac{-1}{2} = -\\frac{1}{2}')}.</p>
<p>För vinkelräta linjer är produkten av riktningskoefficienterna −1, så L<sub>2</sub> har riktningskoefficienten 2. Svar B.</p>`,

  21: `<p>Triangeln har omkretsen ${tex('3 + 4 + 5 = 12')} cm och arean ${tex('\\frac{3 \\cdot 4}{2} = 6')} cm² (kateterna är 3 och 4).</p>
<p>Kvadraten med omkretsen 12 cm har sidan 3 cm och arean 9 cm². Svar B.</p>`,

  22: `<p>Faktorisera. Kvantitet I: ${tex('(x^4 + 1)(x^3 - x) = (x^4 + 1) \\cdot x(x^2 - 1)')}. Kvantitet II: ${tex('(x^5 + x)(x^2 - 1) = x(x^4 + 1)(x^2 - 1)')}.</p>
<p>Det är samma tre faktorer, så uttrycken är lika för alla <i>x</i>. Svar C.</p>`,

  23: `<p>(1): <i>x</i> kan vara 3, 4, 5 och så vidare. Räcker inte. (2): <i>x</i> kan vara 4, 3, 2 och så vidare. Räcker inte.</p>
<p>Tillsammans: <i>x</i> är 3 eller 4, fortfarande två möjligheter. Svar E.</p>`,

  24: `<p>(1): De två mindre böckerna har tillsammans ${tex('792 - 348 = 444')} sidor, men vi vet inte hur de fördelas. Räcker inte.</p>
<p>(2): Medelvärdet är lika med den mellersta boken, men inga antal ges. Räcker inte.</p>
<p>Tillsammans: medelvärdet är ${tex('\\frac{792}{3} = 264')}, så den mellersta boken har 264 sidor och den minsta ${tex('792 - 348 - 264 = 180')}. Svar C.</p>`,

  25: `<p>(1): Pärlorna finns i den blå eller den grå asken, och limstiftet inte i den röda. Limstiftet kan ligga i blå, grå eller svart. Räcker inte.</p>
<p>(2): Paljetterna finns i den svarta, och limstiftet i den blå eller den grå. Räcker inte.</p>
<p>Tillsammans: limstiftet och pärlorna finns i den blå och den grå asken, men vi vet inte vilken som har vad. Svar E.</p>`,

  26: `<p>(1): Rundan är lika lång varje gång, så den lägsta hastigheten hör ihop med den längsta tiden: 15 km/h i 20 minuter (en tredjedels timme) ger 5 km. Den högsta hastigheten hör ihop med den kortaste tiden: 25 km/h i 12 minuter (0,2 timmar) ger också 5 km. Räcker.</p>
<p>(2): 75 minuter är 1,25 timmar, och med 20 km/h blir det 25 km på fem rundor, alltså 5 km per runda. Räcker.</p>
<p>Svar D.</p>`,

  27: `<p>(1): Vi vet inte hur många små röda och stora gröna monster det finns. Räcker inte.</p>
<p>(2): 12 stora, varav 9 röda och 3 gröna, men de 36 små har okänd färg. Räcker inte.</p>
<p>Tillsammans: Av de 36 små är 13 gröna, så 23 är röda. Röda totalt: ${tex('23 + 9 = 32')}. Svar C.</p>`,

  28: `<p>(1): Den svarta sitter på plats 2 eller 3, och den gröna mitt emellan den svarta och den vita. Möjliga ordningar: röd, svart, grön, vit (vit längst till höger) eller vit, grön, svart, röd (röd längst till höger). Räcker inte.</p>
<p>(2): Den röda sitter på plats 1. Efter bytet ska den vita sitta mellan den röda och den gröna, alltså på plats 2 med den gröna på plats 3. Då satt den svarta på plats 2 före bytet, och den vita på plats 4. Ordningen är röd, svart, grön, vit. Räcker.</p>
<p>Svar B.</p>`,

  29: `<p>Storstäder har cirka 500 000 ankomster och cirka 1,5 minuters försening. Kommuner i tätbefolkad region har också cirka 500 000 ankomster och cirka 1,5 minuter.</p>
<p>I de andra paren skiljer sig antingen antalet ankomster (B och D) eller båda måtten tydligt. Svar A.</p>`,

  30: `<p>Förortskommuner till storstäder har cirka 600 000 tågankomster, och Förortskommuner till större städer cirka 300 000.</p>
<p>Det är ungefär dubbelt så många. Svar C.</p>`,

  31: `<p>Kommuner i glesbefolkad region hade cirka 80 000 tågankomster (0,08 miljoner) och en genomsnittlig försening på cirka 4,2 minuter.</p>
<p>${tex('80\\,000 \\cdot 4{,}2 \\approx 340\\,000')} minuter. Närmast är 330 000. Svar B.</p>`,

  32: `<p>Summorna för 2012: opererande 15 016, invärtesmedicinska 11 483 och barnmedicinska 3 008.</p>
<p>Dela med 3 008: ${tex('15\\,016 : 11\\,483 : 3\\,008 \\approx 5 : 3{,}8 : 1')}, alltså ungefär 5:4:1. Svar B.</p>`,

  33: `<p>Invärtesmedicin 2011: störst är Internmedicin 5 603, Kardiologi 1 388 och Geriatrik 1 143 (Lungsjukdomar har bara 532). Tillsammans 8 134.</p>
<p>${tex('\\frac{8\\,134}{11\\,099} \\approx 0{,}73')}, alltså ungefär 75 procent. Svar C.</p>`,

  34: `<p>Antalet 65 år eller äldre är totalen minus "Därav < 65 år". 2010: Kirurgi ${tex('3\\,046 - 2\\,029 = 1\\,017')}, Ortopedi ${tex('2\\,008 - 1\\,587 = 421')}, Anestesi ${tex('2\\,683 - 2\\,209 = 474')}, Obstetrik ${tex('2\\,305 - 1\\,602 = 703')}.</p>
<p>Flest hade Kirurgi. Svar A.</p>`,

  35: `<p>Inom Västerort flyttade 19 173 personer. Pilen från Söderort till Västerort visar 3 167.</p>
<p>${tex('\\frac{19\\,173}{3\\,167} \\approx 6')}. Svar C.</p>`,

  36: `<p>Inom Stockholms kommun flyttade 104 665 personer. Till kommunen kom ${tex('16\\,483 + 20\\,587 + 32\\,668 = 69\\,738')} från andra länder, övriga Sverige och övriga länet.</p>
<p>${tex('104\\,665 - 69\\,738 = 34\\,927')}. Svar A.</p>`,

  37: `<p>Till Söderort: 3 148 från Västerort, 7 986 från Inre staden och 24 799 utifrån, tillsammans 35 933. Från Söderort: 3 167 till Västerort, 6 406 till Inre staden och 23 832 ut, tillsammans 33 405.</p>
<p>${tex('35\\,933 - 33\\,405 = +2\\,528')}. Svar D.</p>`,

  38: `<p>Titta i det nedre diagrammet. Får och lamm ökade från cirka 14 procent till cirka 22 procent, alltså cirka 8 procentenheter. Nötkreatur ökade från cirka 9,5 till cirka 14 procent, och svin och kyckling ändrades knappt alls.</p>
<p>Svar B.</p>`,

  39: `<p>År 2014: svin cirka 4 000 ton, får och lamm cirka 1 150, kyckling cirka 350 och nötkreatur cirka 19 000. Totalt cirka 24 500 ton.</p>
<p>${tex('\\frac{4\\,000}{24\\,500} \\approx 0{,}16')}, ungefär en sjättedel. Svar A.</p>`,

  40: `<p>År 2012 slaktades cirka 1 000 ton ekologiska får och lamm (övre diagrammet), och det var cirka 20 procent av den totala slakten av får och lamm (nedre diagrammet).</p>
<p>${tex('\\frac{1\\,000}{0{,}2} = 5\\,000')} ton. Svar D.</p>`,
};
