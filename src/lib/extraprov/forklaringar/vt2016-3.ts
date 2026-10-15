// Textförklaringar till högskoleprovet 9 april 2016, provpass 3 (kvantitativt).
import { tex } from '../types.js';

export const forklaringar: Record<number, string> = {
  // XYZ
  1: `<p>Gruppera termerna parvis så att varje par får en gemensam faktor: ${tex('ax + ay = a(x + y)')} och ${tex('bx + by = b(x + y)')}.</p>
<p>Då är ${tex('ax + by + bx + ay = a(x + y) + b(x + y) = (a + b)(x + y)')}.</p>
<p>Kontroll: multiplicerar du ut ${tex('(a + b)(x + y)')} får du ${tex('ax + ay + bx + by')}, alltså samma fyra termer. Svar A.</p>`,

  2: `<p>Kalla antalet flickor <i>f</i>. Pojkarna är dubbelt så många, alltså ${tex('2f')}, och klassen har ${tex('f + 2f = 3f')} elever.</p>
<p>Antalet elever måste därför vara delbart med 3. Det är 18 (${tex('3 \\cdot 6')}), 21 (${tex('3 \\cdot 7')}) och 33 (${tex('3 \\cdot 11')}), men inte 25.</p>
<p>Svar C.</p>`,

  3: `<p>Kalla de små rektanglarnas kortsida <i>a</i> och långsida <i>b</i>. Den liggande rektangeln överst är <i>b</i> bred, och de två stående rektanglarna under den är tillsammans ${tex('2a')} breda. Eftersom de är lika breda är ${tex('b = 2a')}.</p>
<p>Den sammansatta rektangelns höjd är den liggande rektangelns höjd plus den stående rektangelns höjd: ${tex('a + b = a + 2a = 3a = 30')}, så ${tex('a = 10')} cm och ${tex('b = 20')} cm.</p>
<p>Den stora rektangeln är alltså 20 cm bred och 30 cm hög, och arean är ${tex('20 \\cdot 30 = 600')} cm². (Eller: tre små rektanglar på ${tex('10 \\cdot 20 = 200')} cm² vardera.) Svar C.</p>`,

  4: `<p>Räkna i två steg. Först ${tex('1002^2 = 1002 \\cdot 1002 = 1\\,002\\,000 + 2\\,004 = 1\\,004\\,004')}.</p>
<p>Sedan ${tex('1\\,004\\,004 \\cdot 1002 = 1\\,004\\,004\\,000 + 2\\,008\\,008 = 1\\,006\\,012\\,008')}.</p>
<p>Snabbare kontroll: eftersom ${tex('2^3 = 8')} måste ${tex('1002^3')} sluta på siffran 8. Bara alternativ B gör det. Svar B.</p>`,

  5: `<p>Sätt uttrycken lika: ${tex('x^2 + 2x - 5 = x^2 - x + 1')}.</p>
<p>${tex('x^2')} finns på båda sidor och tar ut varandra: ${tex('2x - 5 = -x + 1')}, alltså ${tex('3x = 6')} och ${tex('x = 2')}.</p>
<p>Kontroll: ${tex('f(2) = 4 + 4 - 5 = 3')} och ${tex('g(2) = 4 - 2 + 1 = 3')}. Svar C.</p>`,

  6: `<p>När en potens upphöjs till en ny exponent multipliceras exponenterna: ${tex('(x^a)^b = x^{a \\cdot b}')}.</p>
<p>${tex('(x^6)^4 = x^{6 \\cdot 4} = x^{24}')}. (Att addera exponenterna, som i alternativ A, gäller bara när du multiplicerar två potenser: ${tex('x^6 \\cdot x^4 = x^{10}')}.) Svar B.</p>`,

  7: `<p>Multiplicera in i parenteserna: ${tex('-2(x - 5) = -2x + 10')} och ${tex('3(-x + 10) = -3x + 30')}.</p>
<p>Ekvationen blir ${tex('0 = -2x + 10 - 3x + 30 = -5x + 40')}, så ${tex('5x = 40')} och ${tex('x = 8')}.</p>
<p>Kontroll: ${tex('-2(8 - 5) + 3(-8 + 10) = -6 + 6 = 0')}. Svar D.</p>`,

  8: `<p>Erik fick 29 svar. Medianen är det mittersta svaret när svaren ordnas efter storlek, alltså svar nummer 15 (14 svar ligger under och 14 över).</p>
<p>Räkna personerna från vänster i diagrammet: 0 timmar 1 person (1 hittills), 1 timme 2 (3), 2 timmar 3 (6), 3 timmar 8 (14) och 4 timmar 7 (21).</p>
<p>De 14 första svaren är högst 3 timmar, och svar nummer 15 till 21 är 4 timmar. Medianen är 4 timmar. Svar C.</p>`,

  9: `<p>Räkna först ut nämnaren med gemensam nämnare 12: ${tex('\\frac{1}{3} - \\frac{3}{4} = \\frac{4}{12} - \\frac{9}{12} = -\\frac{5}{12}')}.</p>
<p>Att dela 1 med ett bråk är att vända på bråket: ${tex('\\dfrac{1}{-\\frac{5}{12}} = -\\frac{12}{5}')}. Svar D.</p>`,

  10: `<p>Både <i>x</i> och <i>y</i> är positiva, så <i>xy</i> är positivt.</p>
<p>Eftersom ${tex('y > 1')} blir <i>x</i> större när det multipliceras med <i>y</i>: ${tex('xy > x')}. Eftersom ${tex('x < 1')} blir <i>y</i> mindre när det multipliceras med <i>x</i>: ${tex('xy < y')}. Alltså gäller ${tex('x < xy < y')}.</p>
<p>A är fel eftersom ${tex('xy > x')}. B och C behöver inte stämma: med ${tex('x = 0{,}5')} och ${tex('y = 4')} är ${tex('xy = 2')}, som är större än 1. Svar D.</p>`,

  11: `<p>M är cirkelns medelpunkt och ligger på AB, så AB är en diameter och ${tex('AM = MB')} (båda är radier).</p>
<p>Trianglarna ACM och MCB har samma höjd, nämligen avståndet från C till AB, och lika långa baser AM och MB. Därför har de samma area, 5 cm².</p>
<p>Triangeln ABC är de två trianglarna tillsammans: ${tex('5 + 5 = 10')} cm². Svar B.</p>`,

  12: `<p>Försök skriva ${tex('x - y')} med hjälp av de två ekvationerna. Två gånger den första minus den andra ger ${tex('2(x + y) - (x + 3y) = 2x + 2y - x - 3y = x - y')}.</p>
<p>Alltså är ${tex('x - y = 2a - b')}.</p>
<p>Du kan också lösa ut variablerna: subtraktion ger ${tex('2y = b - a')}, alltså ${tex('y = \\frac{b - a}{2}')} och ${tex('x = a - y = \\frac{3a - b}{2}')}. Då är ${tex('x - y = \\frac{3a - b - b + a}{2} = \\frac{4a - 2b}{2} = 2a - b')}. Svar A.</p>`,

  // KVA
  13: `<p>Kalla kvadratens sida <i>s</i>. Triangeln ADE har basen ${tex('AD = s')}. Höjden från E mot AD är avståndet mellan de parallella sidorna BC och AD, alltså också <i>s</i>, var på BC punkten E än ligger.</p>
<p>Triangeln ADE har därför arean ${tex('\\frac{s \\cdot s}{2} = \\frac{s^2}{2}')}, precis halva kvadraten.</p>
<p>De två skuggade trianglarna ABE och CDE fyller resten av kvadraten, alltså också ${tex('\\frac{s^2}{2}')}. Kvantiteterna är lika. Svar C.</p>`,

  14: `<p>Kvantitet I: ${tex('\\frac{1}{3} + \\frac{5}{6} = \\frac{2}{6} + \\frac{5}{6} = \\frac{7}{6}')}.</p>
<p>Kvantitet II: ${tex('\\frac{4}{5} + \\frac{4}{10} = \\frac{8}{10} + \\frac{4}{10} = \\frac{12}{10} = \\frac{6}{5}')}.</p>
<p>Jämför med gemensam nämnare 30: ${tex('\\frac{7}{6} = \\frac{35}{30}')} och ${tex('\\frac{6}{5} = \\frac{36}{30}')}. II är större. Svar B.</p>`,

  15: `<p>Se ${tex('(a + b)')} som ett enda tal och använd konjugatregeln ${tex('(t + 2)(t - 2) = t^2 - 4')}.</p>
<p>Kvantitet I blir ${tex('(a + b)^2 - 4')}, medan kvantitet II är ${tex('(a + b)^2 + 4')}.</p>
<p>II är alltid 8 större än I, vilka värden <i>a</i> och <i>b</i> än har. Svar B.</p>`,

  16: `<p>Kvantitet I: 6,3 timmar är ${tex('6{,}3 \\cdot 60 = 378')} minuter.</p>
<p>Kvantitet II: ${tex('120\\pi')} minuter. Jämför ${tex('\\pi')} med ${tex('\\frac{378}{120} = 3{,}15')}. Eftersom ${tex('\\pi \\approx 3{,}14')} är mindre än 3,15 är ${tex('120\\pi \\approx 377')} minuter, lite mindre än 378.</p>
<p>I är större. Svar A.</p>`,

  17: `<p>Medelvärdet 9 för tre tal betyder att summan är ${tex('3 \\cdot 9 = 27')}. Ett av talen är 2, så de två andra har summan 25.</p>
<p>Hur summan 25 delas upp vet du inte. Är talen 12,5 och 12,5 är det största talet 12,5, mindre än 16. Är de 9 och 16 är det största lika med 16. Är de 0 och 25 är det största 25, större än 16.</p>
<p>Informationen är otillräcklig. Svar D.</p>`,

  18: `<p>Kvantitet II: ${tex('\\sqrt{9} = 3')}, och eftersom ${tex('3 = \\sqrt{3} \\cdot \\sqrt{3}')} är ${tex('\\frac{3}{\\sqrt{3}} = \\sqrt{3}')}. II är alltså ${tex('\\sqrt{3} + 2')}.</p>
<p>Kvantitet I: ${tex('2\\sqrt{3} = \\sqrt{3} + \\sqrt{3}')}.</p>
<p>Båda innehåller ${tex('\\sqrt{3}')}, så jämför det som är kvar: ${tex('\\sqrt{3} \\approx 1{,}73')} i I mot 2 i II. II är större. Svar B.</p>`,

  19: `<p>Kvantitet I: på <i>x</i>-axeln är ${tex('y = 0')}, så ${tex('2x + 1 = 0')} och ${tex('x = -\\frac{1}{2}')}.</p>
<p>Kvantitet II: på <i>y</i>-axeln är ${tex('x = 0')}, så ${tex('y = 2 \\cdot 0 + 1 = 1')}.</p>
<p>1 är större än ${tex('-\\frac{1}{2}')}. Svar B.</p>`,

  20: `<p>${tex('x = \\frac{312}{y}')}. Prova några värden på <i>y</i> som är mindre än 24:</p>
<p>${tex('y = 12')} ger ${tex('x = 26')}, större än 24. ${tex('y = 13')} ger ${tex('x = 24')}, lika med 24. ${tex('y = 20')} ger ${tex('x = 15{,}6')}, mindre än 24. Dessutom kan <i>y</i> vara negativt, och då är även <i>x</i> negativt.</p>
<p>Informationen är otillräcklig. Svar D.</p>`,

  21: `<p>Kvantitet I: en hel cirkel med radien 4 cm har arean ${tex('\\pi \\cdot 4^2 = 16\\pi')}, så halvcirkeln har ${tex('8\\pi \\approx 25{,}1')} cm².</p>
<p>Kvantitet II: ${tex('8 \\cdot 3 = 24')} cm².</p>
<p>Eftersom ${tex('\\pi > 3')} är ${tex('8\\pi > 24')}. I är större. Svar A.</p>`,

  22: `<p>Använd potenslagen ${tex('(x^a)^b = x^{a \\cdot b}')}: ${tex('\\left(x^y\\right)^{\\frac{1}{y}} = x^{y \\cdot \\frac{1}{y}} = x^1 = x')}.</p>
<p>Villkoren ${tex('x > 0')} och ${tex('y \\neq 0')} ser till att uttrycket är definierat och att lagen gäller. Kvantiteterna är lika. Svar C.</p>`,

  // NOG
  23: `<p>(1): På den första ugnen är 35 procent av ordinarie pris 595 kr, så ordinarie pris är ${tex('\\frac{595}{0{,}35} = 1\\,700')} kr. På den andra är 45 procent 945 kr, så ordinarie pris är ${tex('\\frac{945}{0{,}45} = 2\\,100')} kr. Skillnaden är 400 kr. (1) räcker.</p>
<p>(2): Du får bara ett samband mellan de två rabatterade priserna, men två okända ordinarie priser. Ordinarie priserna 1 700 kr och 2 100 kr ger 1 105 kr och 1 155 kr efter rabatt, alltså 50 kr i skillnad. Men 1 920 kr och 2 360 kr ger 1 248 kr och 1 298 kr efter rabatt, också 50 kr i skillnad, fast ordinarie priserna skiljer 440 kr. (2) räcker inte.</p>
<p>Svar A.</p>`,

  24: `<p>Vikterna väger tillsammans ${tex('1 + 2 + 3 + 4 + 5 + 6 = 21')} gram.</p>
<p>(1): Den första asken innehåller 3 och 6 eller 4 och 5. De övriga fyra vikterna kan sedan fördelas på flera sätt mellan andra och tredje asken. Räcker inte.</p>
<p>(2): Den andra asken innehåller 2 och 6 eller 3 och 5. Resten kan fördelas på flera sätt. Räcker inte.</p>
<p>Tillsammans: den tredje asken väger ${tex('21 - 9 - 8 = 4')} gram, och det enda paret med summan 4 är 1 och 3. Fördelningen 4 + 5, 2 + 6 och 1 + 3 visar att det går ihop. Svar C.</p>`,

  25: `<p>Kalla antalet personer i kön <i>n</i>.</p>
<p>(1): ${tex('n + 5 > 20')} ger ${tex('n > 15')}, alltså minst 16 personer. Det kan vara 16, 17 eller fler. Räcker inte.</p>
<p>(2): ${tex('n - 4 < 13')} ger ${tex('n < 17')}, alltså högst 16 personer. Räcker inte.</p>
<p>Tillsammans: minst 16 och högst 16, alltså exakt 16 personer. Svar C.</p>`,

  26: `<p>Kalla sträckan <i>s</i> meter och motorcykelns medelhastighet <i>v</i> m/s. Då är bilens ${tex('v + 10')} m/s.</p>
<p>(1) säger inget om hastigheterna och (2) inget om tiderna, så ingen av dem räcker ensam.</p>
<p>Tillsammans: ${tex('\\frac{s}{v} - \\frac{s}{v + 10} = 90')}. Det är en ekvation med två okända, <i>s</i> och <i>v</i>. Två exempel som båda uppfyller villkoren: motorcykeln 10 m/s och bilen 20 m/s på 1 800 m ger tiderna 180 s och 90 s. Motorcykeln 20 m/s och bilen 30 m/s på 5 400 m ger tiderna 270 s och 180 s. I båda fallen är skillnaden 90 s, men sträckorna är olika.</p>
<p>Svar E.</p>`,

  27: `<p>Frågan gäller ${tex('\\frac{x}{y} \\cdot 100')} procent, så du behöver kvoten ${tex('\\frac{x}{y}')}.</p>
<p>(1): Du vet <i>x</i>, men om <i>y</i> vet du bara att det är ett positivt tal mindre än ${tex('\\frac{3}{8}')}. Kvoten kan bli vad som helst över 1. Räcker inte.</p>
<p>(2): ${tex('\\frac{x}{y} = 12{,}5')}, så <i>x</i> är ${tex('12{,}5 \\cdot 100 = 1\\,250')} procent av <i>y</i>. Räcker.</p>
<p>Svar B.</p>`,

  28: `<p>Kalla Lisas ålder <i>L</i>. Då är Kalle ${tex('L + 24')} år.</p>
<p>(1): För två år sedan: ${tex('L + 22 = 4(L - 2) = 4L - 8')}, så ${tex('3L = 30')} och ${tex('L = 10')}. (Kontroll: för två år sedan var de 32 och 8.) Räcker.</p>
<p>(2): Om 14 år: ${tex('L + 38 = 2(L + 14) = 2L + 28')}, så ${tex('L = 10')}. (Kontroll: om 14 år är de 48 och 24.) Räcker.</p>
<p>Båda påståendena räcker var för sig. Svar D.</p>`,

  // DTK
  29: `<p>Läs av de svarta staplarna (2012) i diagrammen för hundar och katter och räkna ut skillnaden för varje hushållstyp:</p>
<p>Med barn: katter cirka 355 000, hundar cirka 250 000, skillnad cirka 105 000. Utan barn: ${tex('815\\,000 - 535\\,000 = 280\\,000')}. En vuxen: ${tex('205\\,000 - 130\\,000 = 75\\,000')}. Mer än en vuxen: ${tex('625\\,000 - 415\\,000 = 210\\,000')}.</p>
<p>Skillnaden är störst i hushåll utan barn. Svar B.</p>`,

  30: `<p>I det nedersta diagrammet är den ljusgrå stapeln för Fågel (2006) cirka 82 000 hushåll.</p>
<p>Hälften av hushållen, 41 000, har två fåglar och hälften har en: ${tex('41\\,000 \\cdot 2 + 41\\,000 \\cdot 1 = 123\\,000')} fåglar. (Samma sak som ${tex('82\\,000 \\cdot 1{,}5')}.)</p>
<p>Närmast är 125 000. Svar B.</p>`,

  31: `<p>Använd staplarna för Totalt 2012 (svarta): cirka 1 175 000 katter och cirka 790 000 hundar.</p>
<p>${tex('\\frac{1\\,175\\,000}{790\\,000} \\approx 1{,}49')}, alltså ungefär 1,5 katter per hund. Svar C.</p>`,

  32: `<p>Gå till raden 1984/85. Bruttobiljettintäkterna för visade utländska filmer är 381 715 163 kr, och för visade svenska filmer (kolumnen Visade under Svenska filmer) 105 015 302 kr.</p>
<p>${tex('381\\,715\\,163 - 105\\,015\\,302 = 276\\,699\\,861')}, ungefär 276 700 000 kr.</p>
<p>Använder du i stället kolumnen för premiärvisade svenska filmer (98 245 982 kr) hamnar du på alternativ D, men frågan gäller de visade filmerna. Svar C.</p>`,

  33: `<p>Gå till raden 1966/67. Antalet visade svenska filmer (kolumnen Sv under Antal visade filmer) är 248, och antalet besök på visade svenska filmer är 6 281 470.</p>
<p>${tex('\\frac{6\\,281\\,470}{248} \\approx 25\\,300')} besök per film. Svar C.</p>`,

  34: `<p>Kontrollera de tre villkoren för varje alternativ. Det totala antalet besök är besöken på utländska plus svenska visade filmer.</p>
<p>1978/79: ${tex('17{,}8 + 3{,}5 \\approx 21{,}3')} miljoner besök, för många.</p>
<p>1983/84: ${tex('12{,}1 + 2{,}2 \\approx 14{,}3')} miljoner besök, färre än 15 miljoner. De premiärvisade svenska filmerna hade 1 672 290 besök, färre än 2 miljoner. De premiärvisade utländska filmerna var 231, fler än 200. Alla villkor stämmer.</p>
<p>1987/88 faller på att de premiärvisade svenska filmerna hade 2 432 304 besök, och 1992/93 på att de premiärvisade utländska filmerna bara var 185. Svar B.</p>`,

  35: `<p>Använd det vänstra diagrammet och jämför värdena 1995 och 2010 för varje kategori:</p>
<p>Lektorer från cirka 4 900 till 7 150, en ökning med cirka 2 250. Adjunkter från cirka 4 600 till 5 800, cirka 1 200. Annan forskande och undervisande personal från cirka 2 550 till 5 550, cirka 3 000. Professorer från cirka 2 000 till 4 550, cirka 2 550.</p>
<p>Störst förändring har Annan forskande och undervisande personal. Svar C.</p>`,

  36: `<p>I det vänstra diagrammet är adjunkterna den streckade linjen märkt Adjunkter och lektorerna den heldragna linjen märkt Lektorer. Adjunkterna ligger över lektorerna ungefär från 1999 till 2005.</p>
<p>1998 är adjunkterna cirka 5 400 och lektorerna cirka 5 650, alltså färre adjunkter. 1999 är adjunkterna cirka 5 900 och lektorerna cirka 5 650: fler adjunkter och under 6 000. 2003 och 2005 är adjunkterna fler än 6 000 (cirka 6 800 och 6 350).</p>
<p>Svar B.</p>`,

  37: `<p>Läs av det högra diagrammet för 2008: humanistisk-samhällsvetenskapligt cirka 9 500, medicinskt cirka 5 300, tekniskt cirka 4 700, naturvetenskapligt cirka 3 100 och SLU cirka 1 300. Totalt cirka 23 900.</p>
<p>Andelarna blir ungefär ${tex('\\frac{9\\,500}{23\\,900} \\approx 40')} procent, ${tex('\\frac{5\\,300}{23\\,900} \\approx 22')} procent, ${tex('\\frac{4\\,700}{23\\,900} \\approx 20')} procent, ${tex('\\frac{3\\,100}{23\\,900} \\approx 13')} procent och ${tex('\\frac{1\\,300}{23\\,900} \\approx 5')} procent.</p>
<p>Medicinskt och tekniskt ska alltså vara nästan lika stora och humanistisk-samhällsvetenskapligt ungefär 40 procent. I A är den grå delen för liten, i B är den svarta (tekniskt) för stor och i C är medicinskt dubbelt så stort som tekniskt. Diagram D stämmer. Svar D.</p>`,

  38: `<p>Vattenledningen är den streckade dubbellinjen. Den börjar vid den västra muren, går snett genom den västra korsgången och norra delen av Klostergård, viker av mot nordost och fortsätter rakt österut genom Parlatorium till den östra muren.</p>
<p>Ledningen sträcker sig alltså över nästan hela anläggningens bredd. Avståndet mellan västra och östra muren är ungefär 4,3 gånger skalstockens 10 m, cirka 43 m. Eftersom ledningen går lite snett och viker av blir den något längre, ungefär 4,5 skalstockslängder eller cirka 45 m.</p>
<p>65 m eller mer är alldeles för långt. Svar A.</p>`,

  39: `<p>Skalstocken är 10 m, så 26 m är 2,6 skalstockslängder. Utgå från mitten av Kapitelsal och gå rakt västerut.</p>
<p>Först kommer den östra korsgången, sedan Klostergård (med cirkeln i mitten cirka 16 m bort) och därefter den västra korsgången, cirka 21 till 24 m bort. Vid ungefär 26 m ligger Brunn.</p>
<p>Klostrets medeltida entré ligger flera meter längre söderut, inte rakt väster om kapitelsalen. Svar A.</p>`,

  40: `<p>Den äldsta kyrkan har svarta murar och de samtida tillbyggnaderna är korsrutade. Mät med skalstocken (10 m) och räkna med ytterväggarna:</p>
<p>Långhuset, den bredare västra delen av den svarta kyrkan, är cirka 6 m från väster till öster och cirka 7 m från norr till söder: ${tex('6 \\cdot 7 = 42')} m². Den smalare östra delen är cirka 3 m bred och 9,5 m lång: ${tex('3 \\cdot 9{,}5 \\approx 29')} m². Uppgiften säger att den östra väggen ska räknas som hel, så den delen blir en hel rektangel.</p>
<p>Tillbyggnaden längs långhusets västsida är cirka 3 gånger 7,5 m, ungefär 22 m². Byggnaden med det runda rummet söder om den östra delen är cirka 3 m från väster till öster och 2,5 m från norr till söder (${tex('3 \\cdot 2{,}5 = 7{,}5')} m²), plus en liten halvrund utbyggnad åt öster: ungefär 8 m².</p>
<p>Totalt ${tex('42 + 29 + 22 + 8 \\approx 100')} m². Även med grova avläsningar hamnar summan nära 100 m², långt från 50 och 140. Svar B.</p>`,
};
