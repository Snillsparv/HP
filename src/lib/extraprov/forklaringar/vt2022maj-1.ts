// Textförklaringar till högskoleprovet 7 maj 2022, provpass 1 (kvantitativt).
import { tex } from '../types.js';

export const forklaringar: Record<number, string> = {
  // XYZ
  1: `<p>Multiplicera ut båda leden: ${tex('15 - 5x = 8 + 2x')}.</p>
<p>Samla <i>x</i>-termerna: ${tex('15 - 8 = 2x + 5x')}, alltså ${tex('7 = 7x')} och ${tex('x = 1')}.</p>
<p>Svar B.</p>`,

  2: `<p>Läs av två punkter på linjen: den skär <i>y</i>-axeln i (0, −1) och <i>x</i>-axeln i (3, 0).</p>
<p>Riktningskoefficienten är förändringen i <i>y</i> delat med förändringen i <i>x</i>: ${tex('k = \\frac{0 - (-1)}{3 - 0} = \\frac{1}{3}')}.</p>
<p>Svar B.</p>`,

  3: `<p>Räkna först produkten: ${tex('\\frac{4}{9} \\cdot \\frac{1}{3} = \\frac{4}{27}')}.</p>
<p>Skriv allt med nämnaren 27: ${tex('\\frac{4}{27} - \\frac{9}{27} + \\frac{12}{27} = \\frac{7}{27}')}.</p>
<p>Svar B.</p>`,

  4: `<p>Den stora rätvinkliga triangeln har kateterna 1 + 3 = 4 cm (från M till det räta hörnet) och 3 cm.</p>
<p>Hypotenusan blir ${tex('\\sqrt{4^2 + 3^2} = \\sqrt{25} = 5')} cm. Den går från M, och den första centimetern ligger inne i cirkeln (radien). Alltså är ${tex('x = 5 - 1 = 4')} cm.</p>
<p>Svar B.</p>`,

  5: `<p>${tex('\\sqrt{4} = 2')}, så ${tex('x = \\sqrt{2} \\approx 1{,}41')}.</p>
<p>Det ligger i intervallet ${tex('1{,}2 < x \\leq 1{,}6')}.</p>
<p>Svar A.</p>`,

  6: `<p>Summan: ${tex('\\frac{1}{3} + \\frac{1}{5} = \\frac{5}{15} + \\frac{3}{15} = \\frac{8}{15}')}.</p>
<p>Medelvärdet är hälften av summan: ${tex('\\frac{8}{15} \\cdot \\frac{1}{2} = \\frac{4}{15}')}.</p>
<p>Svar D.</p>`,

  7: `<p>Rektangelns area: ${tex('x \\cdot \\frac{3x}{4} = \\frac{3x^2}{4}')} cm<sup>2</sup>.</p>
<p>Kvadratens sida är roten ur arean: ${tex('\\sqrt{\\frac{3x^2}{4}} = \\frac{\\sqrt{3}\\,x}{2}')} cm.</p>
<p>Svar C.</p>`,

  8: `<p>Dividera den första ekvationen med den andra: ${tex('\\frac{xy^2}{xy} = \\frac{18}{3}')}, alltså ${tex('y = 6')}.</p>
<p>Då ger ${tex('xy = 3')} att ${tex('x = \\frac{3}{6} = \\frac{1}{2}')}.</p>
<p>Svar A.</p>`,

  9: `<p>${tex('5^0 = 1')} och ${tex('5^{-2} = \\frac{1}{25}')}, så ${tex('5 \\cdot 1 \\cdot \\frac{1}{25} = \\frac{1}{5} = 0{,}2')}.</p>
<p>Uttrycket blir ${tex('0{,}2 + 5 = 5{,}2')}.</p>
<p>Svar B.</p>`,

  10: `<p>Att dela med ${tex('\\frac{1}{x}')} är samma sak som att multiplicera med <i>x</i>: ${tex('\\frac{x - 3}{x} \\cdot x = x - 3')}.</p>
<p>Lägg till 3: ${tex('x - 3 + 3 = x')}.</p>
<p>Svar C.</p>`,

  11: `<p>Sätt in punkterna i ekvationen. För (−2, 0): ${tex('y = \\frac{2}{3} \\cdot (-2) + \\frac{4}{3} = -\\frac{4}{3} + \\frac{4}{3} = 0')}. Stämmer.</p>
<p>De andra stämmer inte: (0, 1) ger ${tex('y = \\frac{4}{3}')}, (2, 3) ger ${tex('y = \\frac{8}{3}')} och (3, 3) ger ${tex('y = \\frac{10}{3}')}.</p>
<p>Svar A.</p>`,

  12: `<p>Oscars hastighet är ${tex('\\frac{y}{11}')} meter per sekund.</p>
<p>Tiden för <i>x</i> meter är sträckan delat med hastigheten: ${tex('\\frac{x}{y/11} = \\frac{11x}{y}')} sekunder.</p>
<p>Svar C.</p>`,

  // KVA
  13: `<p>Kvantitet I: ${tex('0{,}04 \\cdot 200 = 8')}. Kvantitet II: ${tex('\\frac{20}{4} = 5')}.</p>
<p>I är större. Svar A.</p>`,

  14: `<p>De fyra linjerna bildar en fyrhörning, och <i>x</i>, <i>y</i>, <i>z</i> och <i>w</i> är dess yttervinklar, en vid varje hörn.</p>
<p>Yttervinklarna i en månghörning summerar alltid till 360°: varje yttervinkel är 180° minus innervinkeln, och innervinklarna i en fyrhörning är tillsammans 360°, så ${tex('4 \\cdot 180^\\circ - 360^\\circ = 360^\\circ')}.</p>
<p>Svar C.</p>`,

  15: `<p>Kvantitet I: ${tex('f(2) - f(5) = (10 - 6) - (10 - 15) = 4 - (-5) = 9')}.</p>
<p>Kvantitet II: ${tex('f(0) - f(4) = 10 - (10 - 12) = 10 - (-2) = 12')}.</p>
<p>II är större. Svar B.</p>`,

  16: `<p>Skriv med nämnaren 30: ${tex('\\frac{6}{30} + \\frac{3}{30} + \\frac{2}{30} = \\frac{11}{30}')}.</p>
<p>${tex('\\frac{1}{3} = \\frac{10}{30}')}, så I är större. Svar A.</p>`,

  17: `<p>Korsmultiplicera: ${tex('12x \\cdot x = 3 \\cdot 16')}, alltså ${tex('12x^2 = 48')} och ${tex('x^2 = 4')}.</p>
<p>Då är ${tex('x = 2')} eller ${tex('x = -2')}. Båda är mindre än 4, så II är större oavsett vilket.</p>
<p>Svar B.</p>`,

  18: `<p>Figuren är en rektangel 7 × 5 cm där ett hörn är urklippt. Omkretsen ändras inte av urklippet: de två små sidorna vid D är precis lika långa som de bitar som saknas av rektangelns högra och övre sida.</p>
<p>Omkretsen är därför ${tex('2 \\cdot (7 + 5) = 24')} cm, lika med kvantitet II.</p>
<p>Svar C.</p>`,

  19: `<p>Eftersom ${tex('x \\neq 0')} är ${tex('x^2')} positivt. Kvantitet II är ${tex('x^2')} multiplicerat med <i>y</i>, där ${tex('y < 1')}.</p>
<p>Att multiplicera ett positivt tal med något mindre än 1 ger ett mindre tal, så ${tex('x^2 y < x^2')}. I är större.</p>
<p>Svar A.</p>`,

  20: `<p>Kalla antalet röda kulor <i>r</i>. Då finns ${tex('5r')} svarta och ${tex('6r')} kulor totalt.</p>
<p>Sannolikheten för röd är ${tex('\\frac{r}{6r} = \\frac{1}{6}')}, vilket är mindre än ${tex('\\frac{1}{5}')}. II är större.</p>
<p>Svar B.</p>`,

  21: `<p>Heltalen mellan 16 och 25 är 17, 18, 19, 20, 21, 22, 23 och 24.</p>
<p><i>x</i> får inte vara delbart med 3 eller 5, vilket utesluter 18, 20, 21 och 24. Kvar: 17, 19, 22, 23, alltså 4 tal.</p>
<p><i>y</i> ska vara jämnt: 18, 20, 22, 24, alltså 4 tal. Lika många.</p>
<p>Svar C.</p>`,

  22: `<p>${tex('\\sqrt{5} \\cdot \\sqrt{9} = \\sqrt{45}')}, och en kvadratrot är samma sak som upphöjt till 0,5: ${tex('\\sqrt{45} = 45^{0{,}5}')}.</p>
<p>Alltså är ${tex('x = 0{,}5')}, lika med II.</p>
<p>Svar C.</p>`,

  // NOG
  23: `<p>(1) 10 vita och hälften så många röda, alltså 5. Skillnaden är 5. Räcker.</p>
<p>(2) 5 röda och dubbelt så många vita, alltså 10. Skillnaden är 5. Räcker.</p>
<p>Var för sig räcker. Svar D.</p>`,

  24: `<p>(1) Fanny är inte först, och Betty kommer efter Polly, så Betty är inte heller först. Då måste Polly rymma först. Räcker.</p>
<p>(2) Polly är före både Fanny och Betty, alltså först. Räcker.</p>
<p>Var för sig räcker. Svar D.</p>`,

  25: `<p>(1) Starttiden är känd men inte antalet skjortor. Räcker inte.</p>
<p>(2) Vi vet när två tredjedelar är klara men inte när han började. Räcker inte.</p>
<p>Tillsammans: från 17.00 till 18.10 är 70 minuter, och det är två tredjedelar av tiden. Hela tiden är ${tex('70 \\cdot \\frac{3}{2} = 105')} minuter, så han är klar 18.45.</p>
<p>Svar C.</p>`,

  26: `<p>(1) Medelvärdet av 3<i>x</i> och 3<i>y</i> är ${tex('\\frac{3x + 3y}{2} = 3 \\cdot \\frac{x + y}{2} = 147')}, så medelvärdet av <i>x</i> och <i>y</i> är ${tex('\\frac{147}{3} = 49 < 50')}. Räcker.</p>
<p>(2) ${tex('x + y > 50')} betyder bara att medelvärdet är större än 25. Det kan vara både mindre och större än 50. Räcker inte.</p>
<p>Svar A.</p>`,

  27: `<p>Varje boll är antingen röd med kryss, grön med kryss eller märkt med en stjärna (röd eller grön). Sannolikheterna för dessa tre grupper summerar till 100 %.</p>
<p>(1) ger bara grön med kryss (20 %), (2) ger bara stjärna (40 %). Var för sig räcker inte.</p>
<p>Tillsammans: röd med kryss är ${tex('100 - 20 - 40 = 40')} %.</p>
<p>Svar C.</p>`,

  28: `<p>(1) Annas lön ligger närmare 30 000 kr än Bertils. Anna kan ha 29 000 och Bertil 26 000 (Anna högst), men Anna kan också ha 31 000 och Bertil 40 000 (Bertil högst). Räcker inte.</p>
<p>(2) Båda tjänar mer än 25 000 kr. Den som ligger närmast 25 000 har alltså den lägsta lönen, så Bertil har högst lön. Räcker.</p>
<p>Svar B.</p>`,

  // DTK: Dopingprov
  29: `<p>Stapeln för 2004 når strax över 4 000 prov, och stapeln för 2012 ligger på omkring 3 650.</p>
<p>Skillnaden är ungefär 400 prov.</p>
<p>Svar A.</p>`,

  30: `<p>I diagrammet över förbunden 2013: fotboll ungefär 130 kvinnor + 250 män = 380 prov, ishockey ungefär 10 + 250 = 260 prov. Tillsammans cirka 640.</p>
<p>Stapeln för 2013 visar totalt cirka 3 400 prov. ${tex('\\frac{640}{3400} \\approx 0{,}19')}, alltså närmast 20 procent.</p>
<p>Svar C.</p>`,

  31: `<p>Kurvan för bestraffade fall ligger på ungefär 37 fall 2011.</p>
<p>Cirkeldiagrammet visar att AAS och andra anabola substanser utgör ungefär 40 procent av fallen. ${tex('0{,}4 \\cdot 37 \\approx 15')}.</p>
<p>Svar B.</p>`,

  // DTK: Saltsjöfisket
  32: `<p>Torsk 1935: 344 + 4 627 + 6 620 = 11 591 ton. Torsk 1945: 1 673 + 11 235 + 8 388 = 21 296 ton.</p>
<p>Skillnaden är ${tex('21\\,296 - 11\\,591 = 9\\,705')} ton, alltså cirka 9 700 ton.</p>
<p>Svar C.</p>`,

  33: `<p>Kurvan ligger nästan stilla 1920 till 1940 och stiger sedan kraftigt 1945 och ännu mer 1950.</p>
<p>Kristianstads län har just det mönstret: 1 909, 1 753, 1 568, 2 129 och 1 962 ton 1920 till 1940, sedan 5 069 ton 1945 och 7 987 ton 1950. De andra länens siffror är betydligt större och rör sig annorlunda.</p>
<p>Svar D.</p>`,

  34: `<p>Västkusten 1955: skarpsill 8 273 + kolja 7 173 + makrill 11 584 = 27 030 ton.</p>
<p>Svar B.</p>`,

  // DTK: I och utanför arbetsmarknaden
  35: `<p>Varje individs år läses nedifrån och upp: linjen går uppåt lika många dagar som individen tillbringar i en kategori och viker sedan av i sidled till nästa kategori.</p>
<p>Individ 4 startar i kolumnen Privat arbetsgivare och går rakt upp till nästan 365 dagar innan linjen viker av till Arbetslös. Individ 3 lämnar privat arbetsgivare efter ungefär 250 dagar, och individ 6 och 10 kommer dit först efter cirka 50 respektive 140 dagar.</p>
<p>Svar B.</p>`,

  36: `<p>Var individerna befann sig vid årets slut framgår av siffrorna högst upp i diagrammet.</p>
<p>Individ 6 och 10 slutar hos privat arbetsgivare, individ 7 och 3 i kommunal tjänst och individ 9 hos landsting eller stat. Det är 5 personer i arbete. Individ 5 och 1 är i AMS-åtgärder, individ 2 och 4 är arbetslösa och individ 8 står utanför arbetsmarknaden.</p>
<p>Svar C.</p>`,

  37: `<p>Individ 1 startar hos privat arbetsgivare och linjen går rakt upp till omkring 220 dagar. Sedan viker den av till kategorin övrigt under I AMS-åtgärder, där resten av året tillbringas.</p>
<p>${tex('\\frac{220}{365} \\approx 0{,}6 = \\frac{3}{5}')}.</p>
<p>Svar D.</p>`,

  // DTK: Bilstöld
  38: `<p>Pröva alternativen. Mars: 5 försök av 12 anmälningar är 42 procent, men bara 7 fullbordade stölder. Juni: 3 av 7 är 43 procent, men bara 4 fullbordade. September: 2 av 14 är bara 14 procent.</p>
<p>April: 7 försök av 18 anmälningar är 39 procent, och 11 fullbordade stölder är fler än tio. Båda villkoren uppfylls.</p>
<p>Svar B.</p>`,

  39: `<p>Fullbordade bilstölder: juni 4, juli 14, augusti 14.</p>
<p>${tex('4 + 14 + 14 = 32')}.</p>
<p>Svar C.</p>`,

  40: `<p>Räkna andelen fullbordade av totalen för varje period. Februari–mars: ${tex('\\frac{8 + 7}{10 + 12} = \\frac{15}{22} \\approx 68')} %. Mars–april: ${tex('\\frac{7 + 11}{12 + 18} = \\frac{18}{30} = 60')} %. April–maj: ${tex('\\frac{11 + 13}{18 + 16} = \\frac{24}{34} \\approx 71')} %. Maj–juni: ${tex('\\frac{13 + 4}{16 + 7} = \\frac{17}{23} \\approx 74')} %.</p>
<p>Två tredjedelar är cirka 67 procent, och bara mars–april ligger under.</p>
<p>Svar B.</p>`,
};
