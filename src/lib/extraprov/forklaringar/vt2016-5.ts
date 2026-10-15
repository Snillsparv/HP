// Textförklaringar till högskoleprovet 9 april 2016, provpass 5 (kvantitativt).
import { tex } from '../types.js';

export const forklaringar: Record<number, string> = {
  // XYZ
  1: `<p>Förenkla vänsterledet: ${tex('\\frac{6}{6 + 2} = \\frac{6}{8} = \\frac{3}{4}')}. Högerledet är ${tex('\\frac{x}{6 - 2} = \\frac{x}{4}')}.</p>
<p>${tex('\\frac{x}{4} = \\frac{3}{4}')} ger ${tex('x = 3')}.</p>
<p>Svar C.</p>`,

  2: `<p>Barnen betalade 50 kr var och gav tillsammans 2 750 kr, så antalet barn var ${tex('\\frac{2\\,750}{50} = 55')}.</p>
<p>Resten av de 150 betalande besökarna var vuxna: ${tex('150 - 55 = 95')}. Vuxenpriset 90 kr behövs alltså inte.</p>
<p>Svar A.</p>`,

  3: `<p>I ${tex('y = -x + C')} är lutningen ${tex('-1')}, så linjen lutar nedåt. Det utesluter B och D.</p>
<p>Linjen skär y-axeln där ${tex('x = 0')}, alltså i ${tex('y = C')}. Eftersom C är negativt ska skärningen ligga nedanför origo. Av de två nedåtlutande graferna gäller det bara C (i A skär linjen y-axeln ovanför origo).</p>
<p>Svar C.</p>`,

  4: `<p>Lägg ihop koefficienterna för varje variabel i de fyra uttrycken:</p>
<p><i>a</i>: ${tex('4 + 2 + 4 - 6 = 4')}<br><i>b</i>: ${tex('3 - 5 + 3 + 5 = 6')}<br><i>c</i>: ${tex('2 + 4 - 6 + 4 = 4')}<br><i>d</i>: ${tex('1 + 3 + 5 - 7 = 2')}</p>
<p>Summan är ${tex('4a + 6b + 4c + 2d')}, och hälften av den är ${tex('2a + 3b + 2c + d')}. Se upp med tecknet i ${tex('-6a')} i det sista uttrycket: räknar du det som ${tex('+6a')} blir summan ${tex('16a')} i stället för ${tex('4a')}, och då hamnar du på alternativ B.</p>
<p>Svar D.</p>`,

  5: `<p>Diagonalen AC delar fyrhörningen i två rätvinkliga trianglar. I en rätvinklig triangel är arean kateterna gånger varandra delat med 2.</p>
<p>Den vita triangeln ABC: ${tex('\\frac{4 \\cdot 3}{2} = 6')} cm². Den skuggade triangeln ACD: ${tex('\\frac{2 \\cdot \\sqrt{21}}{2} = \\sqrt{21}')} cm².</p>
<p>Hela fyrhörningen har arean ${tex('6 + \\sqrt{21}')} cm², så den skuggade andelen är ${tex('\\frac{\\sqrt{21}}{6 + \\sqrt{21}}')}. (Figuren går ihop: ${tex('3^2 + 4^2 = 25')} och ${tex('2^2 + (\\sqrt{21})^2 = 25')}, så AC är 5 cm i båda trianglarna.)</p>
<p>Svar C.</p>`,

  6: `<p>Eftersom <i>n</i> är jämnt är ${tex('n - 1')} udda, och ett udda tal gånger 3 är udda. Alltså är ${tex('3(n - 1)')} udda.</p>
<p>De andra fungerar inte: ${tex('3n')} är jämnt, så ${tex('3n - 2')} är jämnt. ${tex('n^2')} är jämnt. ${tex('n/3')} behöver inte ens vara ett heltal.</p>
<p>Testa gärna med ${tex('n = 2')}: ${tex('3n - 2 = 4')}, ${tex('3(n - 1) = 3')}, ${tex('n^2 = 4')} och ${tex('n/3 = \\frac{2}{3}')}.</p>
<p>Svar B.</p>`,

  7: `<p>Varje snitt tvärs över hela kakan ökar antalet remsor i den riktningen med 1. Åtta snitt på längden ger alltså 9 remsor, och fem snitt på bredden delar varje remsa i 6 bitar.</p>
<p>Antalet bitar blir ${tex('9 \\cdot 6 = 54')}. Fällan är att räkna ${tex('8 \\cdot 5 = 40')}.</p>
<p>Svar D.</p>`,

  8: `<p>Skriv alla tal som sextondelar: ${tex('\\frac{16}{16} - \\frac{8}{16} - \\frac{4}{16} - \\frac{2}{16} - \\frac{1}{16} = \\frac{16 - 15}{16} = \\frac{1}{16}')}.</p>
<p>Svar C.</p>`,

  9: `<p>Den blå knappen hamnar med samma sannolikhet först, i mitten eller sist. De tre möjliga raderna är blå-grön-grön, grön-blå-grön och grön-grön-blå.</p>
<p>Den första och den sista knappen är gröna bara när den blå ligger i mitten, alltså i ett av tre lika sannolika fall: ${tex('\\frac{1}{3} = \\frac{2}{6}')}.</p>
<p>Svar B.</p>`,

  10: `<p>${tex('x = 0{,}8 \\cdot 160 = 128')}.</p>
<p>${tex('0{,}8y = 160')} ger ${tex('y = \\frac{160}{0{,}8} = 200')}.</p>
<p>${tex('\\frac{100x}{y} = \\frac{100 \\cdot 128}{200} = \\frac{12\\,800}{200} = 64')}.</p>
<p>Svar A.</p>`,

  11: `<p>Skriv om termerna så att alla blir potenser av 3 med samma exponent:</p>
<p>${tex('\\frac{3^{52}}{9} = \\frac{3^{52}}{3^2} = 3^{50}')} och ${tex('27 \\cdot 3^{47} = 3^3 \\cdot 3^{47} = 3^{50}')}.</p>
<p>Summan blir ${tex('3^{50} + 3^{50} + 3^{50} = 3 \\cdot 3^{50} = 3^{51}')}.</p>
<p>Svar C.</p>`,

  12: `<p>Diagonalen delar kvadraten i två rätvinkliga trianglar med kateterna <i>a</i> och <i>a</i> och hypotenusan <i>d</i>. Pythagoras sats ger ${tex('d^2 = a^2 + a^2 = 2a^2')}.</p>
<p>Alltså är ${tex('d = \\sqrt{2a^2} = a\\sqrt{2}')}.</p>
<p>Svar D.</p>`,

  // KVA
  13: `<p>${tex('\\frac{108}{12} = 9')}, så kvantitet I är ${tex('\\sqrt{9} = 3')}. Det är mindre än 4.</p>
<p>Svar B.</p>`,

  14: `<p>Vinkelsumman i en triangel är 180°. Om alla tre vinklarna vore högst 50° skulle summan bli högst 150°, vilket är för lite.</p>
<p>Den största vinkeln måste alltså vara minst ${tex('\\frac{180^\\circ}{3} = 60^\\circ')}, och det är mer än 50°.</p>
<p>Svar A.</p>`,

  15: `<p>Eftersom <i>x</i> är positivt kan du dela båda kvantiteterna med <i>x</i> utan att ändra vilken som är störst. Då jämför du <i>x</i> med 8.</p>
<p>${tex('x < 5 < 8')}, så ${tex('x^2 < 8x')} för alla tillåtna <i>x</i>. Exempel: ${tex('x = 4')} ger ${tex('16')} mot ${tex('32')}.</p>
<p>Svar B.</p>`,

  16: `<p>När två svarta kulor redan är dragna finns ${tex('12 - 2 = 10')} svarta, 10 röda och 8 blå kulor kvar, totalt 28.</p>
<p>Sannolikheten för svart är ${tex('\\frac{10}{28}')} och för röd också ${tex('\\frac{10}{28}')}. De är lika stora.</p>
<p>Svar C.</p>`,

  17: `<p>${tex('49^{\\frac{1}{2}} = \\sqrt{49} = 7 = 7^1')}. Ekvationen blir ${tex('7^1 = 7^{2x}')}, så exponenterna är lika: ${tex('2x = 1')}, alltså ${tex('x = \\frac{1}{2}')}.</p>
<p>${tex('\\frac{1}{2} < 2')}, så kvantitet II är större.</p>
<p>Svar B.</p>`,

  18: `<p>Faktorisera: ${tex('f(a) = a - a^3 = a(1 - a^2) = a(1 - a)(1 + a)')}. Det är 0 när någon av faktorerna är 0.</p>
<p>Det ger tre möjliga värden: ${tex('a = -1')}, ${tex('a = 0')} eller ${tex('a = 1')}. Kvantitet I kan alltså vara mindre än, lika med eller större än 0.</p>
<p>Svar D.</p>`,

  19: `<p>Multiplicera in: ${tex('-9x - 9 = -11x + 11')}. Addera ${tex('11x + 9')} till båda leden: ${tex('2x = 20')}, alltså ${tex('x = 10')}.</p>
<p>10 är större än 0.</p>
<p>Svar A.</p>`,

  20: `<p>Kalla Davids nuvarande ålder <i>D</i> och Eriks nuvarande ålder <i>E</i>. Om 20 år är Erik ${tex('E + 20')} år, så ${tex('E + 20 = 4D')}.</p>
<p>Eriks ålder kan inte vara negativ, så ${tex('4D = E + 20 \\geq 20')}, vilket ger ${tex('D \\geq 5')}. David är alltså minst 5 år, vilket är mer än 4 år.</p>
<p>Svar A.</p>`,

  21: `<p>Kvantitet I har formen ${tex('a^2 - 2ab + b^2 = (a - b)^2')} med ${tex('a = 200')} och ${tex('b = 300')}.</p>
<p>Den är alltså ${tex('(200 - 300)^2 = (-100)^2 = 10\\,000')}. Kvantitet II är ${tex('101^2 = 10\\,201')}, som är större.</p>
<p>Svar B.</p>`,

  22: `<p>Dra diagonalen från hörnet med vinkeln <i>a</i> till hörnet med vinkeln <i>b</i>. Den delar fyrhörningen i två rätvinkliga trianglar, och diagonalen är hypotenusa i båda.</p>
<p>I triangeln med den räta vinkeln nere till vänster är kateterna <i>x</i> och <i>y</i>, så diagonalen i kvadrat är ${tex('x^2 + y^2')}. I triangeln med den räta vinkeln uppe till höger är kateterna <i>z</i> och <i>w</i>, så diagonalen i kvadrat är också ${tex('z^2 + w^2')}.</p>
<p>Alltså är ${tex('x^2 + y^2 = z^2 + w^2')}. Uppgifterna om vinklarna <i>a</i> och <i>b</i> behövs inte.</p>
<p>Svar C.</p>`,

  // NOG
  23: `<p>(1): Tiken och de två svarta valparna är 3 hundar, och de utgör 1/3 av alla hundar. Det finns alltså ${tex('3 \\cdot 3 = 9')} hundar, varav ${tex('9 - 1 = 8')} valpar. (1) räcker.</p>
<p>(2): Att 75 procent av valparna är gula säger bara något om fördelningen, inte om antalet. Det kan till exempel finnas 4, 8 eller 12 valpar. (2) räcker inte.</p>
<p>Svar A.</p>`,

  24: `<p>Bågen är en fjärdedel av cirkelns omkrets, ${tex('\\frac{2\\pi r}{4}')}, så du behöver radien <i>r</i>.</p>
<p>(1): DE är lika lång som AF (motstående sidor i rektangeln). Men radien är AE, rektangelns diagonal, och den beror också på hur lång AD är. (1) räcker inte. (2): CF är 8 cm, men AF är okänd, så AC går inte att räkna ut. (2) räcker inte.</p>
<p>Tillsammans: AF = DE = 5 cm, så radien är ${tex('AC = AF + FC = 5 + 8 = 13')} cm. Bågen är ${tex('\\frac{2\\pi \\cdot 13}{4} = \\frac{13\\pi}{2}')} cm.</p>
<p>Svar C.</p>`,

  25: `<p>Index 100 år 2008 motsvarar 27 650 000 invånare. Om du vet indextalet för år 2000 kan du räkna ut antalet invånare.</p>
<p>(1): Index 65 betyder 65 procent av befolkningen 2008: ${tex('0{,}65 \\cdot 27\\,650\\,000 = 17\\,972\\,500')}. (1) räcker.</p>
<p>(2): Ett indextal som är 35 procent lägre än 100 är 65, alltså samma upplysning som i (1). (2) räcker också.</p>
<p>Svar D.</p>`,

  26: `<p>(1): Av de 10 kvinnorna dricker ${tex('\\frac{1}{5} \\cdot 10 = 2')} kaffe och minst 6 choklad, så högst 2 kvinnor dricker te. Om de 7 männen vet du ingenting. (1) räcker inte.</p>
<p>(2): Eftersom 2/7 av männen ska vara ett heltal är antalet män 7 eller 14. Med 14 män skulle 4 män dricka te, och då skulle ${tex('3 \\cdot 4 = 12')} kvinnor dricka choklad, men det finns bara 3 kvinnor. Alltså finns 7 män, varav 2 dricker te, och ${tex('3 \\cdot 2 = 6')} av de 10 kvinnorna dricker choklad. Hur de övriga 4 kvinnorna fördelar sig på kaffe och te vet du inte. (2) räcker inte.</p>
<p>Tillsammans: 2 kvinnor dricker kaffe och 6 choklad, så ${tex('10 - 2 - 6 = 2')} kvinnor dricker te. Med de 2 männen blir det ${tex('2 + 2 = 4')} personer som dricker te.</p>
<p>Svar C.</p>`,

  27: `<p>Summan av de fyra talen är ${tex('4 \\cdot 69 = 276')}.</p>
<p>(1): ${tex('a + b + c = 3 \\cdot 69 = 207')}, så ${tex('d = 276 - 207 = 69')}. Men <i>a</i>, <i>b</i> och <i>c</i> kan till exempel vara 68, 69 och 70, eller alla 69. (1) räcker inte.</p>
<p>(2): "Minst två" kan betyda två, tre eller fyra. (2) räcker inte.</p>
<p>Tillsammans: talen 68, 69, 70, 69 (två 69:or) och 69, 69, 69, 69 (fyra 69:or) uppfyller båda påståendena. Antalet går inte att bestämma.</p>
<p>Svar E.</p>`,

  28: `<p>(1): Det gröna talet ska vara större än summan av de två andra. Det fungerar bara för 4, eftersom ${tex('4 > 1 + 2')}, medan ${tex('2 < 1 + 4')} och ${tex('1 < 2 + 4')}. Den gröna lappen har alltså 4, men talet 2 kan stå på den röda eller den blå lappen. (1) räcker inte.</p>
<p>(2): En av lapparna med jämnt tal (2 eller 4) är varken röd eller grön, alltså blå. Den blå lappen har därmed 2 eller 4. Eftersom den blå ska ha ett mindre tal än den gröna kan den inte ha 4, det största talet. Den blå lappen har 2. (2) räcker.</p>
<p>Svar B.</p>`,

  // DTK
  29: `<p>Titta i kolumnen Summa längst till höger och leta efter värden över 5 000.</p>
<p>Det är Kamrater (9 040), Skolan (7 517), Rädsla/oro (6 265) och Mobbning/kränkande behandling (5 093). Närmast efter kommer Familjekonflikter med 4 659, som är under 5 000. Det blir fyra områden.</p>
<p>Svar C.</p>`,

  30: `<p>Läs av raden Ensamhet: flickor 3 237, pojkar 862 och ej framkommit 29, summa 4 128.</p>
<p>Flickornas andel är ${tex('\\frac{3\\,237}{4\\,128} \\approx 0{,}78')}, pojkarnas ${tex('\\frac{862}{4\\,128} \\approx 0{,}21')} och ej framkommit ${tex('\\frac{29}{4\\,128} \\approx 0{,}007')}, alltså under 1 procent.</p>
<p>Leta efter cirkeln där pojkarnas prickiga sektor är ungefär en femtedel och den svarta sektorn är mycket smal. Det är A. I B är den prickiga sektorn för liten, och i C och D är den för stor.</p>
<p>Svar A.</p>`,

  31: `<p>Börja i tabellen: av svarsförslagen hade 1995 (59 389), 1996 (60 599) och 1999 (66 374) färre än 70 000 outhyrda lägenheter, medan 1998 hade 72 977. Då är 1998 uteslutet.</p>
<p>Jämför sedan i stapeldiagrammet den vita delen (utrymd) med den ljusgrå (under reparation eller ombyggnad). 1995: cirka 4 procent vitt mot 11 procent ljusgrått. 1996: cirka 7 mot 12 procent. 1999: cirka 8 mot 7 procent, alltså ungefär lika.</p>
<p>Svar D.</p>`,

  32: `<p>Den ljusgrå delen av stapeln (under reparation eller ombyggnad) är störst 1990. Där slutar den svarta delen vid cirka 22 procent och den ljusgrå vid cirka 92 procent, så andelen är ungefär ${tex('92 - 22 = 70')} procent.</p>
<p>Enligt tabellen fanns 16 022 outhyrda lägenheter 1990. ${tex('0{,}70 \\cdot 16\\,022 \\approx 11\\,200')}.</p>
<p>Svar D.</p>`,

  33: `<p>Tabellen ger 54 315 outhyrda lägenheter 1983 och 35 977 år 2003. Läs av andelarna i stapeldiagrammet och räkna om till antal.</p>
<p>1983: under reparation cirka 22 procent (den ljusgrå delen går från cirka 73 till 95 procent), alltså ${tex('0{,}22 \\cdot 54\\,315 \\approx 12\\,000')}. Utrymd var bara cirka 5 procent, ungefär 2 700.</p>
<p>2003: under reparation cirka 17 procent, ungefär 6 100, och utrymd cirka 10 procent, ungefär 3 600.</p>
<p>Svar B.</p>`,

  34: `<p>Titta på det övre diagrammet (havskräfta) och linjen för 100 ton. 1980 var fångsten cirka 74 ton, alltså under 100. Från 1981 (cirka 132 ton) till 1988 (cirka 130 ton) ligger alla punkter över 100 ton. 1989 föll fångsten till cirka 85 ton.</p>
<p>Åren är alltså 1981 till 1988.</p>
<p>Svar C.</p>`,

  35: `<p>1974 är den första punkten i diagrammet för havskräfta: cirka 39 ton. I hummerdiagrammet ligger 1974 knappt halvvägs mellan strecken för 1970 och 1980, och där var fångsten cirka 5 ton.</p>
<p>${tex('\\frac{39}{5} \\approx 8')}, så fångsten av havskräfta var ungefär åtta gånger så stor.</p>
<p>Svar D.</p>`,

  36: `<p>Leta efter den brantaste uppåtgående sträckan mellan två punkter i havskräftdiagrammet. Den största ökningen var från 1981 (cirka 132 ton) till 1982 (cirka 195 ton): ${tex('195 - 132 = 63')} ton, alltså cirka 65 ton.</p>
<p>Året innan, från 1980 till 1981, ökade fångsten från cirka 74 till 132 ton, knappt 60 ton. Övriga ökningar är mindre.</p>
<p>Svar B.</p>`,

  37: `<p>Titta på vindrosen Temperatur (°C). Punkten längst ut ligger vid västsydväst, cirka 13 °C (punkten vid västnordväst ligger strax innanför, cirka 12,5 °C). Punkten närmast mitten ligger vid nordnordost, cirka 4,5 °C.</p>
<p>Skillnaden är ungefär ${tex('13 - 4{,}5 = 8{,}5')} °C. Närmast av svarsförslagen är 9 °C.</p>
<p>Svar C.</p>`,

  38: `<p>I vindrosen Vindriktning (%) ligger punkten längst ut vid sydsydväst, cirka 12 procent. Det är den vanligaste vindriktningen.</p>
<p>I vindrosen Solinstrålning (W/m²) ligger punkten för sydsydväst vid cirka 120 W/m², knappt halvvägs mellan ringarna för 100 och 150. Närmast av svarsförslagen är 125 W/m².</p>
<p>Svar B.</p>`,

  39: `<p>Kontrollera påstående för påstående i vindrosorna:</p>
<p>A: Vindhastigheten var cirka 3,1 m/s vid nordost och cirka 4,5 m/s vid sydväst. Fel.<br>B: Temperaturen var cirka 11 °C vid sydsydväst och cirka 13 °C vid västsydväst. Fel.<br>C: Solinstrålningen var cirka 130 W/m² vid norr och cirka 85 W/m² vid ost. Fel.<br>D: Lufttrycket var cirka 1 011,5 hPa vid västsydväst och cirka 1 014,5 hPa vid nordnordost, alltså lägre. Rätt.</p>
<p>Svar D.</p>`,

  40: `<p>Pröva svarsförslagen mot de tre villkoren (vindriktning 6 till 10 procent, vindhastighet över 3,0 m/s och nederbörd under 100 mm).</p>
<p>Nordnordost: cirka 8 procent, men vindhastigheten var bara cirka 2,8 m/s. Väst: vinden blåste därifrån bara cirka 4 till 5 procent av tiden. Sydsydost: cirka 7 procent och 4,0 m/s, men nederbörden var cirka 150 mm.</p>
<p>Nordost: cirka 8 procent av tiden, en vindhastighet strax över ringen för 3,0 m/s (cirka 3,1 m/s) och nederbörd under 100 mm (cirka 80 mm). Alla villkor stämmer.</p>
<p>Svar B.</p>`,
};
