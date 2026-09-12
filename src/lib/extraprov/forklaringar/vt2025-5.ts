// Textförklaringar till högskoleprovet 5 april 2025, provpass 5 (kvantitativt).
import { tex } from '../types.js';

export const forklaringar: Record<number, string> = {
  1: `<p>Bryt ut 2 ur den andra parentesen: ${tex('2x + 8 = 2(x + 4)')}.</p>
<p>Då blir uttrycket ${tex('(x + 4) \\cdot 2(x + 4) = 2(x + 4)^2')}. Svar C.</p>
<p>D är ett vanligt fel: ${tex('(x + 4)^2')} är inte ${tex('x^2 + 16')} utan ${tex('x^2 + 8x + 16')}.</p>`,

  2: `<p>Tänk på reglerna: jämnt gånger vad som helst blir jämnt, och jämnt plus udda blir udda.</p>
<p>A: ${tex('ab')} är jämnt eftersom <i>a</i> är jämnt. Det är svaret.</p>
<p>B och C: jämnt plus eller minus udda blir udda. D: ${tex('ab')} är jämnt och ${tex('b^2')} är udda (udda gånger udda), så summan är udda. Svar A.</p>`,

  3: `<p>Medelvärdet är summan delat med antalet: ${tex('\\frac{2x + 3x + 5x + 8x}{4} = \\frac{18x}{4} = 4{,}5x')}.</p>
<p>${tex('4{,}5x = 45')} ger ${tex('x = 10')}. Svar B.</p>`,

  4: `<p>4 % är 0,04, och ${tex('\\frac{5}{4} = 1{,}25')}.</p>
<p>${tex('0{,}04 \\cdot 1{,}25 = 0{,}05')}. Svar C.</p>`,

  5: `<p>Sätt ${tex('-4x + 7 = -9')}. Dra bort 7 från båda leden: ${tex('-4x = -16')}, så ${tex('x = 4')}.</p>
<p>Kontroll: ${tex('-4 \\cdot 4 + 7 = -9')}. Svar D.</p>`,

  6: `<p>Dela upp figuren i rektangeln ABCF och parallelltrapetset FCDE.</p>
<p>Rektangeln: ${tex('10 \\cdot 7 = 70')} cm². Trapetset har de parallella sidorna 10 cm (FC) och 6 cm (ED) och höjden 5 cm: ${tex('\\frac{10 + 6}{2} \\cdot 5 = 40')} cm².</p>
<p>Totalt 70 + 40 = 110 cm². Svar C.</p>`,

  7: `<p>Kalla det ordinarie priset för <i>p</i>. Efter 30 procents sänkning är priset ${tex('0{,}7p')}, och efter 50 procents rabatt på det ${tex('0{,}5 \\cdot 0{,}7p = 0{,}35p')}.</p>
<p>${tex('0{,}35p = 70')} ger ${tex('p = 200')} kronor. Svar C.</p>
<p>Alternativ D (350) är ett vanligt fel där man dubblar två gånger, men 30 procents sänkning motsvarar inte en halvering.</p>`,

  8: `<p>Sätt in ${tex('2x + 3')} i stället för <i>x</i> i funktionen: ${tex('f(2x + 3) = 2(2x + 3) + 3')}.</p>
<p>${tex('2(2x + 3) + 3 = 4x + 6 + 3 = 4x + 9')}. Svar D.</p>`,

  9: `<p>En triangel är rätvinklig precis när Pythagoras sats stämmer: kateterna i kvadrat ska tillsammans bli hypotenusan i kvadrat.</p>
<p>A: ${tex('5^2 + 12^2 = 25 + 144 = 169 = 13^2')}. Stämmer.</p>
<p>B: ${tex('25 + 121 = 146 \\neq 144')}. C: ${tex('9 + 16 = 25 \\neq 36')}. D: ${tex('4 + 36 = 40 \\neq 36')}. Svar A.</p>`,

  10: `<p>Medelhastighet är total sträcka delat med total tid, inte medelvärdet av hastigheterna.</p>
<p>Första delen: 30 km/h i en halvtimme är 15 km. Andra delen: 60 km/h i en timme är 60 km. Totalt 75 km på 1,5 timmar.</p>
<p>${tex('\\frac{75}{1{,}5} = 50')} km/h. Svar C.</p>`,

  11: `<p>Villkoren ger ${tex('x + y = 100')} och ${tex('y = x + 200')}.</p>
<p>Sätt in det andra i det första: ${tex('x + (x + 200) = 100')}, alltså ${tex('2x = -100')} och ${tex('x = -50')}. Då är ${tex('y = 150')}, och mycket riktigt är ${tex('-50 + 150 = 100')}. Svar B.</p>`,

  12: `<p>Räkna ut det inre först: ${tex('\\sqrt{9} = 3')} och ${tex('\\sqrt{36} = 6')}, så uttrycket är ${tex('\\sqrt{3 \\cdot 6} = \\sqrt{18}')}.</p>
<p>${tex('\\sqrt{18} = \\sqrt{9 \\cdot 2} = 3\\sqrt{2}')}. Svar B.</p>`,

  13: `<p>Utveckla kvadraterna: ${tex('(x - y)^2 = x^2 - 2xy + y^2')} och ${tex('(x + y)^2 = x^2 + 2xy + y^2')}.</p>
<p>Skillnaden är ${tex('4xy')}, som är positiv eftersom både <i>x</i> och <i>y</i> är positiva. II är alltså större. Svar B.</p>`,

  14: `<p>Förenkla kvantitet I: ${tex('\\frac{4 \\cdot 6 \\cdot 8}{8 \\cdot x} = \\frac{24}{x}')} (åttorna förkortas bort).</p>
<p>Kvantitet II: ${tex('\\frac{2 \\cdot 3 \\cdot 4}{x} = \\frac{24}{x}')}.</p>
<p>Kvantiteterna är lika. Svar C.</p>`,

  15: `<p>Pythagoras sats: kvantitet I är ${tex('\\sqrt{6^2 + 8^2} = \\sqrt{100} = 10')} cm.</p>
<p>Kvantitet II: ${tex('\\sqrt{7^2 + 7^2} = \\sqrt{98}')} cm, som är lite mindre än 10.</p>
<p>I är större. Svar A.</p>`,

  16: `<p>Kvantitet I: ${tex('\\sqrt{10^8} = 10^4 = 10\\,000')} (roten ur halverar exponenten).</p>
<p>Kvantitet II: ${tex('\\sqrt{8} \\approx 2{,}83')}, så ${tex('10^{\\sqrt{8}}')} ligger mellan ${tex('10^2 = 100')} och ${tex('10^3 = 1\\,000')}.</p>
<p>I är störst. Svar A.</p>`,

  17: `<p>Kalla hundratalssiffran för <i>h</i>. Då är entalssiffran ${tex('4h')} och tiotalssiffran ${tex('2h')}. Alla siffror måste vara högst 9, så ${tex('4h \\leq 9')} ger ${tex('h = 1')} eller ${tex('h = 2')}.</p>
<p>${tex('h = 1')} ger talet 124 med entalssiffran 4. ${tex('h = 2')} ger talet 248 med entalssiffran 8. Entalssiffran kan alltså vara både mindre och större än 6. Svar D.</p>`,

  18: `<p>En produkt är noll när någon av faktorerna är noll: ${tex('x - 3 = 0')} ger ${tex('x = 3')} och ${tex('x + 2 = 0')} ger ${tex('x = -2')}.</p>
<p>Den positiva lösningen är 3, som är större än 2. Svar A.</p>`,

  19: `<p>Titta på de två rätvinkliga trianglarna ADQ och PBC. De har lika långa kateter AD och BC (rektangelns kortsidor), men DQ är längre än BP.</p>
<p>I triangeln ADQ ligger vinkeln <i>v</i> mittemot AD, och den andra kateten DQ är lång, så <i>v</i> blir en liten vinkel. I triangeln PBC ligger <i>w</i> mittemot BC, och kateten BP är kortare, så <i>w</i> blir en större vinkel. (Med tangens: ${tex('\\tan v = \\frac{AD}{DQ}')} är mindre än ${tex('\\tan w = \\frac{BC}{BP}')}.)</p>
<p>II är större. Svar B.</p>`,

  20: `<p>Multiplicera in tvåan i högerledet: ${tex('2\\left(x + \\frac{1}{2}\\right) = 2x + 1')}. Ekvationen säger alltså ${tex('2x + 1 = 2x + 1')}, vilket gäller för alla <i>x</i>.</p>
<p>Ekvationen bestämmer inte <i>x</i>, så det går inte att jämföra med ${tex('-\\frac{1}{2}')}. Svar D.</p>`,

  21: `<p>Räkna inifrån och ut. ${tex('1 \\diamond 2 = \\frac{1}{2}')}. Sedan ${tex('\\frac{1}{2} \\diamond 3 = \\dfrac{\\frac{1}{2}}{3} = \\frac{1}{6}')}.</p>
<p>${tex('\\frac{1}{6}')} är mindre än ${tex('\\frac{1}{3}')}. Svar B.</p>`,

  22: `<p>Räkna på motsatsen: sannolikheten att inte få klave någon gång är sannolikheten för krona tre gånger i rad, ${tex('\\frac{1}{2} \\cdot \\frac{1}{2} \\cdot \\frac{1}{2} = \\frac{1}{8}')}.</p>
<p>Sannolikheten för minst en klave är då ${tex('1 - \\frac{1}{8} = \\frac{7}{8}')}, som är större än ${tex('\\frac{2}{3}')}. Svar A.</p>`,

  23: `<p>Kalla antalet melonskivor för <i>m</i> och vindruvor för <i>v</i>. Vi söker ${tex('v - m')}.</p>
<p>(1): ${tex('v = 2m')}, så skillnaden är <i>m</i>, som är okänd. Räcker inte.</p>
<p>(2): ${tex('m + v = 57')}, men fördelningen är okänd. Räcker inte.</p>
<p>Tillsammans: ${tex('m + 2m = 57')} ger ${tex('m = 19')} och ${tex('v = 38')}, alltså 19 fler vindruvor. Svar C.</p>`,

  24: `<p>(1): Alexandra är i köket, och Björn är inte i hallen. Då måste Björn vara i vardagsrummet, och Charlotte får hallen. Räcker.</p>
<p>(2): Björn är i vardagsrummet, och Charlotte är inte i köket. Då är Charlotte i hallen. Räcker.</p>
<p>Båda räcker var för sig. Svar D.</p>`,

  25: `<p>(1): ${tex('0{,}5x - 0{,}3x = 0{,}2x = 22')} ger ${tex('x = 110')}. Räcker.</p>
<p>(2): <i>x</i> ska vara delbart med både 10 och 11, alltså med 110. Det gäller för 110, 220, 330 och så vidare. Räcker inte.</p>
<p>Svar A.</p>`,

  26: `<p>(1): En niondel av 27 barn, alltså 3 barn, har både senap och ketchup. Dessa 3 är 60 procent av senapsbarnen, så 5 barn har senap. Men vi vet inget om dem som bara har ketchup. Räcker inte.</p>
<p>(2): 5 har senap och 15 har varken senap eller ketchup. Då har 27 − 15 = 12 barn senap eller ketchup eller båda. Men vi vet inte hur många som har både och. Räcker inte.</p>
<p>Tillsammans: 3 barn har både och, så 5 − 3 = 2 har bara senap. Av de 12 som har något tillbehör har alltså 12 − 2 = 10 ketchup. Svar C.</p>`,

  27: `<p>(1): Om ${tex('x = z = 60°')} är även den tredje vinkeln 60°, så triangeln är liksidig och AB = BC. Frågan kan besvaras (svaret är nej). Räcker.</p>
<p>(2): <i>y</i> är yttervinkeln vid B, så triangelns vinkel vid B är ${tex('180° - y')}. Påståendet säger att vinkeln vid A är lika stor som vinkeln vid B. Då är sidorna mittemot dessa vinklar lika långa, alltså BC = AC. Det säger inget om hur AB förhåller sig till BC. Räcker inte.</p>
<p>Svar A.</p>`,

  28: `<p>Medianen i −10, −8, 0, 6, 7 är 0 och medelvärdet är ${tex('\\frac{-5}{5} = -1')}.</p>
<p>(1): För att medianen ska förbli 0 måste ett tal tas bort på varje sida om 0, till exempel −10 och 7 eller −8 och 6. Flera möjligheter. Räcker inte.</p>
<p>(2): Medelvärdet ändras för nästan alla par. Räcker inte.</p>
<p>Tillsammans: paret −8 och 6 ger kvar −10, 0, 7 med medelvärdet −1, alltså oförändrat, så det paret är uteslutet. Men både −10 och 7 (kvar −8, 0, 6 med medelvärdet −2/3) och −10 och 6 (kvar −8, 0, 7 med medelvärdet −1/3) uppfyller båda villkoren. Det går inte att avgöra. Svar E.</p>`,

  29: `<p>Övriga maskinoperatörer och montörer finns i tabellen över mäns yrken: 22 183 män av totalt 29 612 anställda.</p>
<p>Antalet kvinnor är 29 612 − 22 183 = 7 429. Svar D.</p>`,

  30: `<p>Räkna ut männens andel i varje yrke.</p>
<p>Vårdbiträden: 27 675 av 149 708, cirka 18 procent. Försäljare, fackhandel: 40 736 av 106 099, cirka 38 procent. Övrig kontorspersonal: 21 144 av 86 422, cirka 24 procent. Kockar och kokerskor: kvinnorna är 18 764 av 35 326, så männen är 16 562, cirka 47 procent.</p>
<p>Störst andel män hade kockar och kokerskor. Svar D.</p>`,

  31: `<p>Datatekniker: 33 002 män av totalt 41 637. Kvinnorna är 41 637 − 33 002 = 8 635.</p>
<p>${tex('\\frac{8\\,635}{41\\,637} \\approx 0{,}21')}, alltså ungefär en femtedel. Svar C.</p>`,

  32: `<p>Läs av staplarna för 5–9 år: cirka 7,5 fall per 100 000 smittade i Sverige och cirka 12,5 per 100 000 smittade utomlands.</p>
<p>Med 610 000 invånare i gruppen blir det ${tex('6{,}1 \\cdot 7{,}5 \\approx 46')} smittade i Sverige och ${tex('6{,}1 \\cdot 12{,}5 \\approx 76')} smittade utomlands. Närmast är 45 respektive 75. Svar C.</p>`,

  33: `<p>Förhållandet 35 till 65 betyder att stapeln för Sverige ska vara ungefär hälften så hög som stapeln för utomlands (35/65 ≈ 0,54).</p>
<p>25–29 år: cirka 8 mot 14,5, kvot cirka 0,55. 30–39 år: cirka 7,5 mot 11, kvot cirka 0,68. 40–49 år: cirka 6 mot 16, kvot cirka 0,38. 50–59 år: cirka 7,5 mot 19, kvot cirka 0,39.</p>
<p>Närmast ligger 25–29 år. Svar A.</p>`,

  34: `<p>Diagrammet visar antalet fall per 100 000 invånare i varje åldersgrupp. För att räkna om det till antal personer behöver man veta hur många invånare varje åldersgrupp har, alltså alternativ C.</p>
<p>A saknar koppling till diagrammet, B handlar om smittade i Sverige, och D ger bara siffran för en enda grupp, vilket inte räcker för hela befolkningen. Svar C.</p>`,

  35: `<p>Symbolen för äldsta kända bytomt är en liten fyrkant. Norrbys bytomt ligger i kartans övre vänstra del och Edebys i den nedre högra delen.</p>
<p>Från Norrby ligger Edeby alltså åt sydost (norr är uppåt enligt kompasspilen). Svar D.</p>`,

  36: `<p>Fornborgen (RAÄ 20) ligger längst ner till vänster och kyrkan (korset) ligger mitt på ön, sydost om Berga. Följ de prickade stigarna den kortaste vägen och jämför med skalstrecket, där 1 km är ungefär 2,4 cm på kartan.</p>
<p>Den kortaste stigen är ungefär 2,5 km. Svar B.</p>`,

  37: `<p>Edebys gårdsägogräns är den streckade linjen runt Edeby i kartans nedre högra del. Området är ungefär 2 km brett och 1,5 km högt, men det är inte rektangulärt utan avsmalnande, så arean blir mindre än 3 km².</p>
<p>Uppskattningen landar på ungefär 2,4 km². Svar A.</p>`,

  38: `<p>Referensvärdet är den vågräta linjen vid ungefär 337 DU. Räkna punkterna: ovanför linjen ligger ungefär 10 år (till exempel 1991, 1994, 1998, 1999, 2001, 2009, 2010, 2013, 2015, 2018) och under linjen ungefär 21 år.</p>
<p>Förhållandet är ungefär 10 till 21, alltså 1:2. Svar A.</p>`,

  39: `<p>Läs av värdena: 1995 cirka 320, 1996 cirka 315, 1997 cirka 322, 1998 cirka 339, 1999 cirka 340 och 2000 cirka 323.</p>
<p>Summan är ungefär 1 959, och delat med 6 blir det ungefär 327 DU. Svar B.</p>`,

  40: `<p>Räkna ut förändringen för varje par. 1991 till 1992: cirka 341 till 320, en minskning med cirka 6 procent. 1993 till 1994: cirka 316 till 341, en ökning med cirka 8 procent. 1997 till 1998: cirka 322 till 339, en ökning med cirka 5 procent. 2010 till 2011: cirka 351 till 327, en minskning med cirka 7 procent.</p>
<p>Störst procentuell förändring var mellan 1993 och 1994. Svar B.</p>`,
};
