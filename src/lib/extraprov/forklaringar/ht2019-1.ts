// Textförklaringar till högskoleprovet 20 oktober 2019, provpass 1 (kvantitativt).
import { tex } from '../types.js';

export const forklaringar: Record<number, string> = {
  // XYZ
  1: `<p>${tex('5{,}3 \\cdot 10^3 = 5\\,300')} och ${tex('4{,}7 \\cdot 10^2 = 470')}.</p>
<p>${tex('5\\,300 - 470 = 4\\,830 = 4{,}83 \\cdot 10^3')}.</p>
<p>Svar A.</p>`,

  2: `<p>40 % av <i>x</i> är ${tex('0{,}4x = \\frac{2x}{5}')}, som är ett heltal när <i>x</i> är delbart med 5.</p>
<p>40 % av 5 är 2. För 3, 4 och 6 blir det 1,2, 1,6 och 2,4.</p>
<p>Svar C.</p>`,

  3: `<p>Dela upp figuren i kvadraten från (0, 0) till (2, 2) med arean 4, triangeln till vänster om <i>y</i>-axeln ovanför <i>x</i>-axeln med hörnen (−2, 0), (0, 2) och (0, 0), arean ${tex('\\frac{2 \\cdot 2}{2} = 2')}, och triangeln under <i>x</i>-axeln med hörnen (−2, 0), (2, 0) och (0, −2), arean ${tex('\\frac{4 \\cdot 2}{2} = 4')}.</p>
<p>${tex('4 + 2 + 4 = 10')} areaenheter.</p>
<p>Svar D.</p>`,

  4: `<p>${tex('157 + 158 = 315')}, som slutar på 5 och är delbart med 5.</p>
<p>${tex('3^5 = 243')}, ${tex('\\frac{185}{5} = 37')} och ${tex('5^0 + 5^1 + 5^2 = 1 + 5 + 25 = 31')} är inte delbara med 5.</p>
<p>Svar A.</p>`,

  5: `<p>${tex('5x - 5 = 2x + 4')} ger ${tex('3x = 9')}, alltså ${tex('x = 3')}.</p>
<p>Svar D.</p>`,

  6: `<p>Yttervinklarna 130° och 117° ger innervinklarna ${tex('180^\\circ - 130^\\circ = 50^\\circ')} och ${tex('180^\\circ - 117^\\circ = 63^\\circ')}.</p>
<p>${tex('v = 180^\\circ - 50^\\circ - 63^\\circ = 67^\\circ')}.</p>
<p>Svar C.</p>`,

  7: `<p>${tex('A = \\frac{bh}{2}')} ger ${tex('2A = bh')} och ${tex('h = \\frac{2A}{b}')}.</p>
<p>Svar B.</p>`,

  8: `<p>Graf A: lutningen 1 och skärningen 2, produkten 2. Graf B går genom origo, ${tex('m = 0')}, produkten 0. Graf C är vågrät, ${tex('k = 0')}, produkten 0. Graf D: lutningen −1 och skärningen 2, produkten −2.</p>
<p>Svar A.</p>`,

  9: `<p>Arean av A är ${tex('\\pi \\cdot 3^2 = 9\\pi')}, så arean av B är ${tex('4 \\cdot 9\\pi = 36\\pi')}.</p>
<p>${tex('\\pi r^2 = 36\\pi')} ger ${tex('r = 6')} cm. (Fyra gånger så stor area betyder dubbelt så stor radie.)</p>
<p>Svar B.</p>`,

  10: `<p>Det finns ${tex('93 - 60 = 33')} jämna tal, och hälften av dem är 16,5, så hon måste stryka minst 17 jämna tal.</p>
<p>I värsta fall stryker hon alla 60 udda tal först. Då behövs ${tex('60 + 17 = 77')} strykningar.</p>
<p>Svar D.</p>`,

  11: `<p>${tex('\\sqrt{32xy^2} = \\sqrt{16 \\cdot 2x \\cdot y^2} = 4y\\sqrt{2x}')}.</p>
<p>Svar B.</p>`,

  12: `<p>${tex('x + y + z = 3 \\cdot 15 = 45')} och ${tex('y + z + 14 = 3 \\cdot 17 = 51')}, så ${tex('y + z = 37')}.</p>
<p>${tex('x = 45 - 37 = 8')}.</p>
<p>Svar B.</p>`,

  // KVA
  13: `<p>${tex('10^0 = 1')}, så ${tex('5{,}7 \\cdot 10^0 = 5{,}7')}.</p>
<p>Svar C.</p>`,

  14: `<p>${tex('\\frac{1}{2} + \\frac{1}{3} + \\frac{1}{4} = \\frac{6}{12} + \\frac{4}{12} + \\frac{3}{12} = \\frac{13}{12} = 1 + \\frac{1}{12}')}.</p>
<p>${tex('\\frac{1}{12} > \\frac{1}{13}')}, så I är större.</p>
<p>Svar A.</p>`,

  15: `<p>Triangeln med sidorna 3, 4 och 5 cm är rätvinklig (${tex('3^2 + 4^2 = 5^2')}), så dess största vinkel är 90°.</p>
<p>Den liksidiga triangeln har alla vinklar 60°.</p>
<p>Svar A.</p>`,

  16: `<p>I: ${tex('4a + 4 - 4a + 4 = 8')}.</p>
<p>II: ${tex('4a - 4 + 4 - 4a = 0')}.</p>
<p>Svar A.</p>`,

  17: `<p>Konens volym är ${tex('\\frac{\\pi r^2 h}{3}')}, så det räcker att jämföra ${tex('r^2 h')}.</p>
<p>I: ${tex('3^2 \\cdot 4 = 36')}. II: ${tex('4^2 \\cdot 3 = 48')}.</p>
<p>Svar B.</p>`,

  18: `<p>${tex('4^x')} är en produkt av fyror och därför alltid jämnt för ${tex('x \\geq 1')}.</p>
<p>Sannolikheten är 1, större än 0,5.</p>
<p>Svar A.</p>`,

  19: `<p>${tex('\\sqrt{27} \\approx 5{,}2')} och ${tex('\\sqrt{23} \\approx 4{,}8')}, summan ungefär 10.</p>
<p>${tex('\\sqrt{50} \\approx 7{,}1')}.</p>
<p>Svar A.</p>`,

  20: `<p>Linjen A har lutningen ${tex('\\frac{3 - 1}{5 - 1} = \\frac{1}{2}')} och ekvationen ${tex('y = \\frac{x}{2} + \\frac{1}{2}')}, så I är 0,5.</p>
<p>Linjen B har lutningen −2, men den kan ligga var som helst i koordinatsystemet. Dess skärning med <i>y</i>-axeln kan inte avgöras.</p>
<p>Svar D.</p>`,

  21: `<p>${tex('x = 0{,}75y = \\frac{3y}{4}')}, så ${tex('\\frac{2x}{3} = \\frac{2}{3} \\cdot \\frac{3y}{4} = \\frac{y}{2}')}.</p>
<p>Svar C.</p>`,

  22: `<p>Den första raden ger ${tex('2p + l = 5s')} (ta bort 5 sudd från båda sidor). Den andra raden ger ${tex('4p + 2l = 10s')}, vilket är samma samband gånger 2.</p>
<p>Vi vet alltså bara att 2 pennor och 1 linjal tillsammans kostar lika mycket som 5 sudd, inte hur kostnaden fördelas.</p>
<p>Svar D.</p>`,

  // NOG
  23: `<p>(1): vit är 3, så röd och grön ligger intill varandra på platserna 1 och 2 eller 4 och 5, och blå och svart på de andra två. Röd kan vara 1, 2, 4 eller 5.</p>
<p>(2): svart är 5 och grön har lägre nummer än röd, men flera möjligheter finns.</p>
<p>Tillsammans: svart är 5, blå intill svart är 4, röd och grön är 1 och 2, och grön är lägre, så röd är 2.</p>
<p>Svar C.</p>`,

  24: `<p>(1): ${tex('b = -3')} ger ${tex('a < -3')}, men <i>c</i> och <i>d</i> kan vara till exempel −2 och −1 eller 5 och 10.</p>
<p>(2): ${tex('d = 3')} ger inte heller något om de andra talen.</p>
<p>Tillsammans: ${tex('-3 < c < 3')}, så <i>c</i> ligger närmare 0 än både <i>b</i> och <i>d</i>, och <i>a</i> är mindre än −3.</p>
<p>Svar C.</p>`,

  25: `<p>(1): ${tex('y + z = 36')} och ${tex('x + w = 60')}, så summan är 96 och medelvärdet 24. Tillräcklig.</p>
<p>(2): skillnaden mellan summorna säger inget om deras storlek.</p>
<p>Svar A.</p>`,

  26: `<p>I en parallellogram är motstående vinklar lika och närliggande vinklar summerar till 180°.</p>
<p>(1): ${tex('A = 180^\\circ - 116^\\circ = 64^\\circ')}. (2): ${tex('A = C = 64^\\circ')}. Båda räcker.</p>
<p>Svar D.</p>`,

  27: `<p>(1): ${tex('\\frac{x}{400} = \\frac{300}{300} = 1')} ger ${tex('x = 400')}.</p>
<p>(2): ${tex('x = \\frac{4y}{3}')} insatt i ${tex('x + y = 700')} ger ${tex('\\frac{7y}{3} = 700')}, ${tex('y = 300')} och ${tex('x = 400')}.</p>
<p>Svar D.</p>`,

  28: `<p>(1): ${tex('x + 0 = x')} och ${tex('x - 0 = x')} gäller båda, så tecknet kan vara addition eller subtraktion.</p>
<p>(2): ${tex('x - x = 0')} för alla <i>x</i>, men ${tex('x + x = 2x')}, ${tex('x \\cdot x = x^2')} och ${tex('x / x = 1')}. Bara subtraktion fungerar.</p>
<p>Svar B.</p>`,

  // DTK
  29: `<p>Fritidsaktiviteter: ungefär ${tex('2\\,700 + 3\\,300 + 4\\,000 = 10\\,000')} tusen kronor.</p>
<p>Kläder och skor ger ungefär 13 400, majblommepengar till skolan ungefär 14 500 och till barn ungefär 18 000.</p>
<p>Svar D.</p>`,

  30: `<p>2014: bidrag till enskilda barn (den grå delen) ungefär 21 000 av totalt ungefär 35 000 tusen kronor.</p>
<p>${tex('\\frac{21\\,000}{35\\,000} = 0{,}6')}, alltså 60 procent till enskilda barn och 40 procent till grupper.</p>
<p>Svar B.</p>`,

  31: `<p>Sommarlov 2014: ungefär 5 300 tusen kronor av de ungefär 21 000 som gick till enskilda barn.</p>
<p>${tex('\\frac{5\\,300}{21\\,000} \\approx 0{,}25')}.</p>
<p>Svar B.</p>`,

  32: `<p>Jämför punkterna för 1991 och 1992 kurva för kurva i kvicksilverdiagrammet (Väderöarna redovisas först från 1995).</p>
<p>Tre av de fem kurvorna ligger lägre 1992 än 1991, de andra två ligger högre.</p>
<p>Svar C.</p>`,

  33: `<p>1997: Harufjärden ungefär 1,1, Ängskärsklubb 2,2, Landsort 2,6, Utlängtan 1,7, Fladen 0,5 och Väderöarna 0,3.</p>
<p>Summan är ungefär 8,4, och ${tex('8{,}4 / 6 = 1{,}4')}.</p>
<p>Svar B.</p>`,

  34: `<p>Utlängtan låg på ungefär 1,5 år 2004 och 2005, men på 2,2 år 1992 och 2,6 år 1998.</p>
<p>Karlskrona låg på ungefär 20 år 2005 men på ungefär 25 år 2004.</p>
<p>Svar D.</p>`,

  35: `<p>Huvud och hals: ${tex('\\frac{620}{745} \\approx 0{,}83')}, ungefär 85 procent.</p>
<p>Plastiska: ${tex('\\frac{582}{635} \\approx 0{,}92')}, ungefär 90 procent.</p>
<p>Svar B.</p>`,

  36: `<p>Befolkningen kan beräknas som antalet läkare gånger invånare per läkare: ${tex('1\\,131 \\cdot 4\\,542 \\approx 5\\,100\\,000')}.</p>
<p>Kurgästerna var 23 903, och ${tex('\\frac{23\\,903}{5\\,100\\,000} \\approx 0{,}005')}, alltså 0,5 procent.</p>
<p>Svar A.</p>`,

  37: `<p>Öron: 573 operationer, varav 511 goda (89 %), 17 mindre goda (3 %), 8 dåliga (1 %), 22 dödliga (4 %) och 15 ovissa (3 %).</p>
<p>Ben har 6 procent mindre goda, ledgångar 92 procent goda och kärl- och nervsystem 96 procent goda.</p>
<p>Svar D.</p>`,

  38: `<p>2 000 hushåll är en mellanstor kvadrat. En sådan med mittpunkten vid 410 finns bara i Kommun Norra: symbol III, utflyttade till ej angränsande kommun.</p>
<p>Svar A.</p>`,

  39: `<p>Jämför symbolerna IV och V med symbol I i varje diagram.</p>
<p>I Kommun Norra (ungefär 385 och 365 mot 400) och Kommun Södra (ungefär 290 och 275 mot 300) ligger de inflyttade lägre. I Östra och Västra ligger de på samma nivå eller högre.</p>
<p>Svar B.</p>`,

  40: `<p>Kommun Norra: år 0 fanns 10 000 hushåll (stor cirkel). Utflyttade: 1 000 (II) och 2 000 (III). Inflyttade: 3 000 (IV) och 2 000 (V).</p>
<p>${tex('10\\,000 - 1\\,000 - 2\\,000 + 3\\,000 + 2\\,000 = 12\\,000')}.</p>
<p>Svar C.</p>`,
};
