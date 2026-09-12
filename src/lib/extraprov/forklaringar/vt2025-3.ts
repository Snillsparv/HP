// Textförklaringar till högskoleprovet 5 april 2025, provpass 3 (kvantitativt).
import { tex } from '../types.js';

export const forklaringar: Record<number, string> = {
  1: `<p>Samla <i>x</i>-termerna på ena sidan och talen på den andra. Dra bort ${tex('4x')} från båda leden: ${tex('16 = 2x - 8')}. Lägg till 8: ${tex('24 = 2x')}, så ${tex('x = 12')}.</p>
<p>Kontroll: ${tex('4 \\cdot 12 + 16 = 64')} och ${tex('6 \\cdot 12 - 8 = 64')}. Svar D.</p>`,

  2: `<p>Gör om alla mått till centimeter innan du multiplicerar: 2 meter = 200 cm, 2 decimeter = 20 cm och 2 millimeter = 0,2 cm.</p>
<p>Volymen är ${tex('200 \\cdot 20 \\cdot 0{,}2 = 800')} cm³. Svar C.</p>`,

  3: `<p>Skriv 27 som en potens av 3: ${tex('27 = 3^3')}. Då är ${tex('3^{2x} = 3^3')}, och när baserna är lika måste exponenterna vara lika: ${tex('2x = 3')}.</p>
<p>Alltså ${tex('x = \\frac{3}{2}')}. Svar B.</p>`,

  4: `<p>Arne är 7 år äldre än Bertil, så ${tex('x = y + 7')}. Tillsammans är de 33 år: ${tex('x + y = 33')}.</p>
<p>Sätt in: ${tex('(y + 7) + y = 33')} ger ${tex('2y = 26')} och ${tex('y = 13')}. Då är ${tex('x = 20')}.</p>
<p>Produkten är ${tex('20 \\cdot 13 = 260')}. Svar C.</p>`,

  5: `<p>Att dela med ett bråk är samma sak som att multiplicera med det omvända bråket: ${tex('\\frac{6}{25} \\cdot \\frac{5}{36}')}.</p>
<p>Förkorta innan du multiplicerar: 6 och 36 ger ${tex('\\frac{1}{6}')}, 5 och 25 ger ${tex('\\frac{1}{5}')}. Kvar blir ${tex('\\frac{1}{6} \\cdot \\frac{1}{5} = \\frac{1}{30}')}. Svar A.</p>`,

  6: `<p>${tex('x(x + 1)')} är produkten av två heltal som följer på varandra. Testa alternativen: ${tex('6 \\cdot 7 = 42')}.</p>
<p>De andra går inte: 37 är ett primtal, 54 ligger mellan ${tex('6 \\cdot 7 = 42')} och ${tex('7 \\cdot 8 = 56')}, och 81 ligger mellan ${tex('8 \\cdot 9 = 72')} och ${tex('9 \\cdot 10 = 90')}. Svar B.</p>`,

  7: `<p>Sätt in ${tex('x = a')} i varje alternativ och se om resultatet blir <i>a</i> oavsett vad <i>a</i> är.</p>
<p>B: ${tex('f(a) = 2a - a = a')}. Det stämmer alltid.</p>
<p>A: ${tex('\\frac{a}{a} + a = 1 + a')}, som inte är <i>a</i>. C: ${tex('a \\cdot a = a^2')}, som bara är <i>a</i> om ${tex('a = 1')}. D: ${tex('-a^2 + a^3')}, som bara blir <i>a</i> för vissa värden på <i>a</i>. Svar B.</p>`,

  8: `<p>Dela talen och tiopotenserna var för sig: ${tex('\\frac{2{,}1}{3} = 0{,}7')} och ${tex('\\frac{10^6}{10^4} = 10^2 = 100')}.</p>
<p>${tex('0{,}7 \\cdot 100 = 70')}. Svar B.</p>`,

  9: `<p>Skriv om ekvationen på formen ${tex('y = kx + m')}: ${tex('y = -2x + 2')}. Linjen skär <i>y</i>-axeln i 2 och lutar nedåt (två steg ner för varje steg åt höger). Den skär <i>x</i>-axeln där ${tex('0 = -2x + 2')}, alltså i ${tex('x = 1')}.</p>
<p>Alternativ C visar en linje som går genom (0, 2) och (1, 0) och lutar nedåt. A och B lutar uppåt, och D skär <i>x</i>-axeln på fel sida. Svar C.</p>`,

  10: `<p>Bråken har samma nämnare, så täljarna kan läggas ihop direkt: ${tex('\\frac{(a + b) + (b - a)}{b} = \\frac{2b}{b} = 2')}.</p>
<p><i>a</i> försvinner helt, och kvoten är alltid 2 (eftersom ${tex('b \\neq 0')}). Svar C.</p>`,

  11: `<p>Medianen i 3, 5, 6, 6, 8 är det mittersta talet, 6. Med sex tal blir medianen medelvärdet av det tredje och fjärde talet i storleksordning.</p>
<p>Om det nya talet är 6 eller större blir de två mittersta talen 6 och 6, alltså medianen 6. Om det nya talet är mindre än 6 blir de två mittersta 5 och 6, alltså medianen 5,5. Medianen kan alltså aldrig bli större än 6, oavsett vilket tal som läggs till.</p>
<p>Sannolikheten är 0. Svar A.</p>`,

  12: `<p>De tre cirklarna har tillsammans arean ${tex('3 \\cdot \\pi \\cdot 1^2 = 3\\pi')} cm². Det som saknas i det skuggade området är de tre cirkelsektorerna inuti triangeln.</p>
<p>Sektorernas vinklar är triangelns tre vinklar, och de har summan 180°. Tre sektorer med sammanlagt 180° är en halv cirkel, alltså ${tex('\\frac{\\pi}{2} = 0{,}5\\pi')} cm².</p>
<p>Skuggad area: ${tex('3\\pi - 0{,}5\\pi = 2{,}5\\pi')} cm². Svar C.</p>`,

  13: `<p>Kvantitet I: ${tex('0{,}04 \\cdot 40 = 1{,}6')}.</p>
<p>Kvantitet II: ${tex('0{,}05 \\cdot 35 = 1{,}75')}.</p>
<p>II är större. Svar B.</p>`,

  14: `<p>Båda villkoren jämför med <i>y</i>: <i>x</i> är större än <i>y</i> och <i>z</i> är större än <i>y</i>. Men inget säger hur <i>x</i> och <i>z</i> förhåller sig till varandra.</p>
<p>Exempel: ${tex('y = 0')}, ${tex('x = 1')}, ${tex('z = 2')} ger II störst, medan ${tex('x = 2')}, ${tex('z = 1')} ger I störst. Informationen är otillräcklig. Svar D.</p>`,

  15: `<p>Riktningskoefficienten är förändringen i <i>y</i> delat med förändringen i <i>x</i>.</p>
<p>Kvantitet I: från (0, 0) till (−1, −3) är ${tex('\\frac{-3 - 0}{-1 - 0} = \\frac{-3}{-1} = 3')}.</p>
<p>Kvantitet II: från (0, 0) till (1, 3) är ${tex('\\frac{3}{1} = 3')}.</p>
<p>Det är faktiskt samma linje. Kvantiteterna är lika. Svar C.</p>`,

  16: `<p>Ur ${tex('x - y = \\frac{1}{3}')} får vi ${tex('y = x - \\frac{1}{3} = -\\frac{1}{3} - \\frac{1}{3} = -\\frac{2}{3}')}.</p>
<p>Kvantitet II: ${tex('2x = 2 \\cdot \\left(-\\frac{1}{3}\\right) = -\\frac{2}{3}')}.</p>
<p>Kvantiteterna är lika. Svar C.</p>`,

  17: `<p>I triangeln ABC är hypotenusan ${tex('\\sqrt{5}')} cm och den ena kateten 2 cm. Pythagoras sats ger den andra kateten: ${tex('AC^2 = (\\sqrt{5})^2 - 2^2 = 5 - 4 = 1')}, så AC = 1 cm. Arean är ${tex('\\frac{2 \\cdot 1}{2} = 1')} cm².</p>
<p>Kvadraten med sidan 1 cm har också arean 1 cm². Kvantiteterna är lika. Svar C.</p>`,

  18: `<p>Vi vet ingenting om <i>y</i>. Om ${tex('y = 0')} är båda kvantiteterna 0 och lika. Om ${tex('x = y = 1')} är båda 1. Men med ${tex('x = 1')} och ${tex('y = 2')} är I = 2 och II = 4, och med ${tex('x = 2')} och ${tex('y = 1')} är I = ${tex('\\frac{1}{4}')} och II = ${tex('\\frac{1}{2}')}, medan ${tex('x = 1')} och ${tex('y = -1')} ger I = −1 och II = 1.</p>
<p>Förhållandet kan alltså bli olika. Informationen är otillräcklig. Svar D.</p>`,

  19: `<p>Medelvärdet är summan delat med tre. Uppskatta bråken: ${tex('\\frac{5}{7} \\approx 0{,}71')}, ${tex('\\frac{5}{2} = 2{,}5')} och ${tex('\\frac{5}{6} \\approx 0{,}83')}. Summan är ungefär 4,05, och delat med 3 blir det ungefär 1,35.</p>
<p>Ett snabbare sätt: enbart ${tex('\\frac{5}{2} = 2{,}5')} bidrar med mer än 0,83 till medelvärdet, och de två andra talen är positiva, så medelvärdet är säkert större än 1. Svar A.</p>`,

  20: `<p>Tid = sträcka delat med hastighet.</p>
<p>Adam: ${tex('\\frac{45}{27} = \\frac{5}{3} \\approx 1{,}67')} timmar. David: ${tex('\\frac{40}{25} = 1{,}6')} timmar.</p>
<p>Adams tur tog längre tid. Svar A.</p>`,

  21: `<p>Eftersom DE är parallell med AB är vinkeln vid E (40°) lika med vinkeln vid B, alltså ${tex('y = 40°')} (likbelägna vinklar).</p>
<p>Vinkeln 85° vid D ligger utanför den lilla triangeln CDE, så vinkeln CDE är 180° − 85° = 95°. I triangeln CDE är då ${tex('x = 180° - 95° - 40° = 45°')}.</p>
<p>45° är större än 40°, så I är större. Svar A.</p>`,

  22: `<p>Kvot 1 och rest 1 betyder att ${tex('x = 1 \\cdot y + 1 = y + 1')}. Exempel: 7 delat med 6 ger kvoten 1 och resten 1.</p>
<p><i>x</i> är alltså alltid ett steg större än <i>y</i>. Svar A.</p>`,

  23: `<p>(1): Barncykeln står till vänster om damcykeln, och herrcykeln står i mitten. Då måste barncykeln stå längst till vänster och damcykeln längst till höger. Räcker.</p>
<p>(2): Barncykeln står längst till vänster, och herrcykeln står till vänster om damcykeln. Ordningen blir barncykel, herrcykel, damcykel, så damcykeln står längst till höger. Räcker.</p>
<p>Båda räcker var för sig. Svar D.</p>`,

  24: `<p>Hastighet är sträcka delat med tid, så vi behöver kunna jämföra både sträckor och tider.</p>
<p>(1): Mia går fem minuter tidigare och kommer fram tio minuter tidigare. Mias promenad tar alltså fem minuter kortare tid än Nellies. Men vi vet inget om hur långt de går. Räcker inte.</p>
<p>(2): Nellie har längre väg, men vi vet inget om tiderna. Räcker inte.</p>
<p>Tillsammans: Nellie går längre och tar längre tid på sig. Det går ihop både med att Nellie går fortare (mycket längre väg) och med att hon går långsammare (bara lite längre väg). Svar E.</p>`,

  25: `<p>(1): Skorna kommer före vantarna, och mössan är inte sist. Flera ordningar är möjliga. Räcker inte.</p>
<p>(2): Jackan först, och skorna före mössan. Vantarna kan komma nästan var som helst. Räcker inte.</p>
<p>Tillsammans: Jackan först. Skorna kommer före både vantarna och mössan, så skorna är tvåa. Mössan får inte vara sist, alltså kommer mössan trea och vantarna sist. Ordningen är jacka, skor, mössa, vantar. Svar C.</p>`,

  26: `<p>Villkoret ${tex('\\frac{x}{y} = 5')} betyder att ${tex('x = 5y')}, så ${tex('x - y = 4y')}. Det räcker att få reda på <i>y</i>.</p>
<p>(1): ${tex('5y + y = 24')} ger ${tex('y = 4')}, och ${tex('x - y = 16')}. Räcker.</p>
<p>(2): ${tex('5y \\cdot y = 80')} ger ${tex('y^2 = 16')}, och eftersom <i>y</i> är positivt är ${tex('y = 4')}. Återigen ${tex('x - y = 16')}. Räcker.</p>
<p>Svar D.</p>`,

  27: `<p>(1): Vi får veta hur många böcker Camilla har (73 − 21 = 52) och att det finns 30 pärmar totalt, men inte hur pärmarna fördelas mellan de två bokhyllorna. Räcker inte.</p>
<p>(2): Kalla Camillas pärmar för <i>p</i>. Böckerna är då ${tex('p + 39')}, och ${tex('p + (p + 39) = 65')} ger ${tex('2p = 26')} och ${tex('p = 13')}. Räcker ensamt.</p>
<p>Svar B.</p>`,

  28: `<p>Kalla antalet akrobater för <i>a</i>. Antalet clowner är då ${tex('0{,}6a')}.</p>
<p>(1): Dubbelt så många clowner är ${tex('1{,}2a')} och hälften så många akrobater är ${tex('0{,}5a')}. Skillnaden 7 ger ${tex('1{,}2a - 0{,}5a = 7')}, alltså ${tex('0{,}7a = 7')} och ${tex('a = 10')}. Räcker.</p>
<p>(2): ${tex('a - 0{,}6a = 4')} ger ${tex('0{,}4a = 4')} och ${tex('a = 10')}. Räcker.</p>
<p>Båda räcker var för sig. Svar D.</p>`,

  29: `<p>Räkna ut förändringen för de fyra alternativen: Skidsportanläggningar 3 588 − 3 140 = 448, Sporthallar med mera 3 702 − 3 688 = 14, Sportklubbar 2 045 − 1 711 = 334, Tävlingsstall 2 182 − 2 103 = 79.</p>
<p>Minst förändring hade Sporthallar, idrottsplatser och andra sportanläggningar. Svar B.</p>`,

  30: `<p>Spel- och vadhållningsföretag omsatte 24 790 miljoner kronor 2019, av totalt 77 461 miljoner.</p>
<p>${tex('\\frac{24\\,790}{77\\,461} \\approx 0{,}32')}, alltså ungefär en tredjedel. Svar C.</p>`,

  31: `<p>Artistisk verksamhet minskade från 4 817 till 3 439, alltså med 1 378 miljoner. Litterärt och konstnärligt skapande minskade från 4 941 till 4 792, alltså med 149 miljoner.</p>
<p>Skillnaden mellan minskningarna är 1 378 − 149 = 1 229 miljoner kronor. Svar A.</p>`,

  32: `<p>Läs av stapeln för 1997. De två största segmenten är Storö-Bockö (från cirka 8 000 till cirka 10 400, alltså cirka 2 400) och Svenska Högarna (från cirka 1 700 till cirka 3 800, alltså cirka 2 100).</p>
<p>Tillsammans ungefär 4 500 ejdrar. Svar B.</p>`,

  33: `<p>Jämför segmenten för 1999 och 2000 för de fyra platserna. Nåttaröfladen, Svenska Högarna och Söderarm är alla mindre eller ungefär lika stora år 2000. Bullerö (snedstreckat) är däremot tydligt större år 2000, ungefär 900 mot ungefär 400 året innan.</p>
<p>Svar B.</p>`,

  34: `<p>År 1997 räknades ungefär 13 100 ejdrar och år 2015 ungefär 1 900. Minskningen är cirka 11 200.</p>
<p>Bland alternativen är det 2003 som har en stapel på ungefär 11 200. År 2001 var det cirka 12 300, år 2005 cirka 10 300 och år 2007 cirka 9 000. Svar B.</p>`,

  35: `<p>Antalet provdeltagare står under varje cirkel. De som är 20 år eller yngre finns i grupperna −18 och 19–20: 12 858 + 11 340 = 24 198.</p>
<p>Totalt antal: 12 858 + 11 340 + 5 720 + 4 337 + 3 285 + 2 127 + 661 + 242 + 18 = 40 588.</p>
<p>${tex('\\frac{24\\,198}{40\\,588} \\approx 0{,}60')}, alltså 60 procent. Svar C.</p>`,

  36: `<p>Högst poäng hade gruppen 66+ med ungefär 120 råpoäng och 1,32 normerat. Lägst hade gruppen 21–22 med ungefär 88 råpoäng och 0,83 normerat.</p>
<p>Skillnaden är cirka 120 − 88 = 32 råpoäng och 1,32 − 0,83 = 0,49 normerade poäng. Svar D.</p>`,

  37: `<p>Cirklarnas storlek och antalen under dem visar att antalet provdeltagare blir mindre för varje äldre åldersgrupp, från 12 858 i den yngsta gruppen till 18 i den äldsta. Alternativ D stämmer.</p>
<p>A och C är fel eftersom poängen först sjunker (från −18 till 21–22) innan den stiger. B är fel eftersom fördelningen är mycket ojämn. Svar D.</p>`,

  38: `<p>Läs av de fem linjerna för 1990 i det övre diagrammet: familje- och partnervåld cirka 28, spontanbråk cirka 43, kriminella konflikter cirka 5, rån och inbrott cirka 7 och sexuellt våld cirka 2.</p>
<p>Summan är ungefär 85. Svar B.</p>`,

  39: `<p>I cirkeldiagrammet är mord drygt hälften (cirka 55 procent), dråp ungefär en tredjedel (cirka 30 procent) och vållande till annans död en liten del (cirka 10 procent).</p>
<p>Titta i det nedre diagrammet efter ett år där mord ligger runt 55 procent, dråp runt 30 och vållande runt 10. Det stämmer för 1992. År 1995 och 1996 är dråp bara cirka 15 procent, och 2003 är mord cirka 65 procent. Svar A.</p>`,

  40: `<p>Läs av 2000 i det övre diagrammet: familje- och partnervåld cirka 27, spontanbråk cirka 21, kriminella konflikter cirka 13, rån och inbrott cirka 7 och sexuellt våld cirka 1. Totalt ungefär 69 fall.</p>
<p>Spontanbråkens andel är ${tex('\\frac{21}{69} \\approx 0{,}30')}, alltså 30 procent. Svar B.</p>`,
};
