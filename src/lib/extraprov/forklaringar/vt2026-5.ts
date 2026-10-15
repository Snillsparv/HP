// Textförklaringar till högskoleprovet 18 april 2026, provpass 5 (kvantitativt).
import { tex } from '../types.js';

export const forklaringar: Record<number, string> = {
  // XYZ
  1: `<p>Multiplicera in i parenteserna: ${tex('3x - 12 = 5x + 10')}.</p>
<p>Samla <i>x</i> på ena sidan och talen på den andra: ${tex('-12 - 10 = 5x - 3x')}, alltså ${tex('-22 = 2x')} och ${tex('x = -11')}.</p>
<p>Kontroll: ${tex('3(-11 - 4) = 3 \\cdot (-15) = -45')} och ${tex('5(-11 + 2) = 5 \\cdot (-9) = -45')}. Svar A.</p>`,

  2: `<p>Kolla varje steg för sig. I steg 1 multipliceras ${tex('-6')} in i parentesen. Då blir ${tex('-6 \\cdot x = -6x')} och ${tex('-6 \\cdot (-2) = +12')}, eftersom minus gånger minus blir plus. Rätt rad är alltså ${tex('-6x + 12 = 4x + 4')}, men Melvin skrev ${tex('-6x - 12')}.</p>
<p>Stegen efter det är korrekt räknade utifrån raden före: att lägga till 12 på båda sidor ger ${tex('-6x = 4x + 16')}, att dra bort ${tex('4x')} ger ${tex('-10x = 16')} och division med ${tex('-10')} ger ${tex('x = -1{,}6')}.</p>
<p>(Rätt lösning: ${tex('-6x + 12 = 4x + 4')} ger ${tex('8 = 10x')} och ${tex('x = 0{,}8')}.) Svar A.</p>`,

  3: `<p>Medelvärdet av två tal är summan delad med 2. Skriv bråken med den gemensamma nämnaren 14: ${tex('\\frac{1}{2} = \\frac{7}{14}')} och ${tex('\\frac{5}{7} = \\frac{10}{14}')}.</p>
<p>Summan är ${tex('\\frac{17}{14}')}, och hälften av den är ${tex('\\frac{17}{28}')}. Svar C.</p>`,

  4: `<p>En rät linje kan skrivas ${tex('y = kx + m')}, där <i>m</i> är <i>y</i>-värdet där linjen skär <i>y</i>-axeln. Linjen skär <i>y</i>-axeln i (0, −2), så ${tex('m = -2')}.</p>
<p>Linjen skär <i>x</i>-axeln i (3, 0). Från (0, −2) till (3, 0) går du 3 steg åt höger och 2 steg uppåt, så lutningen är ${tex('k = \\frac{2}{3}')}.</p>
<p>Ekvationen blir ${tex('y = \\frac{2}{3}x - 2')}. Svar A.</p>`,

  5: `<p>Räkna först ut täljaren: ${tex('\\frac{1}{4} + \\frac{1}{5} = \\frac{5}{20} + \\frac{4}{20} = \\frac{9}{20}')}.</p>
<p>Att dela med ${tex('\\frac{1}{6}')} är samma sak som att multiplicera med 6: ${tex('\\frac{9}{20} \\cdot 6 = \\frac{54}{20} = \\frac{27}{10}')}. Svar D.</p>`,

  6: `<p>De tre linjerna (den vågräta, L<sub>1</sub> och den nedåtlutande linjen) bildar en triangel.</p>
<p>Vinkeln 53° och triangelns vinkel där L<sub>1</sub> skär den vågräta linjen är vertikalvinklar, så triangelns vänstra vinkel är också 53°. Den övre vinkeln är 71°. Vinkelsumman i en triangel är 180°, så triangelns högra vinkel är ${tex('180^\\circ - 53^\\circ - 71^\\circ = 56^\\circ')}.</p>
<p>Vinkeln <i>v</i> ligger vid samma skärningspunkt men på motsatt sida, mellan den vågräta linjen åt höger och den nedåtlutande linjen nedåt. Den är alltså vertikalvinkel till triangelns högra vinkel och lika stor: ${tex('v = 56^\\circ')}. Att L<sub>1</sub> och L<sub>2</sub> är parallella behövs inte i den här lösningen. Svar B.</p>`,

  7: `<p>Räkna först utan decimaler: ${tex('8 \\cdot 3 = 24')}.</p>
<p>0,08 har två decimaler och 0,03 har två decimaler, så produkten ska ha 2 + 2 = 4 decimaler: 0,0024. Svar B.</p>`,

  8: `<p>Båda termerna innehåller ${tex('xy')}, och 28 och 20 har den största gemensamma faktorn 4. Bryt ut ${tex('4xy')}: ${tex('-28xyz = 4xy \\cdot (-7z)')} och ${tex('20xy = 4xy \\cdot 5')}.</p>
<p>Alltså är ${tex('-28xyz + 20xy = 4xy(5 - 7z)')}. Kontrollera gärna genom att multiplicera in igen. Alternativ B ger till exempel ${tex('-28xyz - 20xy')}, med fel tecken på den andra termen. Svar C.</p>`,

  9: `<p>Sätt in ${tex('x = 10')} och ${tex('m = 7')}: ${tex('f(10) = 10k + 7 = 3')}, så ${tex('10k = -4')} och ${tex('k = -0{,}4')}.</p>
<p>Då är ${tex('f(20) = -0{,}4 \\cdot 20 + 7 = -8 + 7 = -1')}.</p>
<p>Ett snabbare sätt: när <i>x</i> ökar från 0 till 10 minskar funktionsvärdet från 7 till 3, alltså med 4. När <i>x</i> ökar med ytterligare 10, från 10 till 20, minskar funktionsvärdet med 4 igen: ${tex('3 - 4 = -1')}. Svar B.</p>`,

  10: `<p>Kvadratens sida är FE + ED = 1 + 2 = 3 cm, så kvadratens area är 9 cm².</p>
<p>Triangeln ACE är det som blir kvar när du tar bort tre rätvinkliga trianglar från kvadraten:</p>
<p>AFE med kateterna 3 och 1: ${tex('\\frac{3 \\cdot 1}{2} = 1{,}5')} cm². EDC med kateterna 2 och 2: ${tex('\\frac{2 \\cdot 2}{2} = 2')} cm². ABC med kateterna 3 och 1: ${tex('\\frac{3 \\cdot 1}{2} = 1{,}5')} cm².</p>
<p>De tre trianglarna har tillsammans arean 5 cm², så triangeln ACE har arean 9 − 5 = 4 cm². Svar B.</p>`,

  11: `<p>Inne i parentesen står 4 stycken ${tex('3^4')} minus 1 stycken ${tex('3^4')}, vilket blir 3 stycken: ${tex('4 \\cdot 3^4 - 3^4 = 3 \\cdot 3^4 = 3^5')}.</p>
<p>Multiplicera med 3 utanför parentesen: ${tex('3 \\cdot 3^5 = 3^6')}. Svar D.</p>`,

  12: `<p>Bryt ut ${tex('ab')}: ${tex('a^2b - ab^2 = ab(a - b)')}. Uttrycket är positivt när de två faktorerna ${tex('ab')} och ${tex('a - b')} har samma tecken.</p>
<p>A: ${tex('a < 0')} och ${tex('b > 0')} gör ${tex('ab')} negativt, och ${tex('a - b')} är också negativt (ett negativt tal minus ett positivt). Negativt gånger negativt är positivt, alltid.</p>
<p>B: ${tex('ab')} är negativt men ${tex('a - b')} positivt, så uttrycket är negativt. C och D: ${tex('ab')} är positivt, men ${tex('a - b')} kan ha vilket tecken som helst (med ${tex('a = b')} blir uttrycket till och med 0). Svar A.</p>`,

  // KVA
  13: `<p>Om den ena tärningen visar en tvåa avgörs summan helt av den andra tärningen.</p>
<p>Kvantitet I: summan blir 3 bara om den andra tärningen visar en etta. Sannolikheten är ${tex('\\frac{1}{6}')}.</p>
<p>Kvantitet II: summan blir 7 bara om den andra tärningen visar en femma. Sannolikheten är också ${tex('\\frac{1}{6}')}.</p>
<p>(Om du i stället räknar med alla 11 utfall där minst en tärning visar en tvåa blir det 2 gynnsamma utfall i båda fallen, (1, 2) och (2, 1) mot (2, 5) och (5, 2), så kvantiteterna är lika även då.) Svar C.</p>`,

  14: `<p>Kvantitet I: ${tex('\\sqrt{27} = \\sqrt{9 \\cdot 3} = 3\\sqrt{3}')}, så ${tex('\\frac{1}{3} \\cdot 3\\sqrt{3} = \\sqrt{3} \\approx 1{,}73')}.</p>
<p>Kvantitet II: ${tex('3 = \\sqrt{9}')}, som är större än ${tex('\\sqrt{3}')}. Svar B.</p>`,

  15: `<p>Tid är sträcka delat med hastighet. Enligt figuren är sträckorna 30 km (A till B), 60 km (B till C) och 40 km (C till D).</p>
<p>Delarna A till B och C till D körs båda i 70 km/h och är tillsammans 30 + 40 = 70 km. De tar alltså ${tex('\\frac{70}{70} = 1')} timme. Delen B till C tar ${tex('\\frac{60}{90} = \\frac{2}{3}')} timme, alltså 40 minuter.</p>
<p>Hela resan tar 1 timme och 40 minuter, vilket är mindre än 2 timmar. Svar B.</p>`,

  16: `<p>150 procent av <i>x</i> är ${tex('1{,}5x')} och 50 procent av <i>y</i> är ${tex('0{,}5y')}. Villkoret blir ${tex('1{,}5x = 0{,}5y')}.</p>
<p>Multiplicera båda sidor med 2: ${tex('3x = y')}. Kvantiteterna är lika. Svar C.</p>`,

  17: `<p>${tex('-(2y)')} betyder "minus 2<i>y</i>", och det är precis samma sak som ${tex('-2y')}. Parentesen ändrar ingenting.</p>
<p>Kvantiteterna är lika för alla <i>y</i>, så upplysningen att <i>y</i> är negativt spelar ingen roll. Svar C.</p>`,

  18: `<p>Vinkelsumman i triangeln ger ${tex('x + y + z = 180^\\circ')}, alltså ${tex('x = 180^\\circ - y - z')}.</p>
<p>Jämför med kvantitet II genom att ta skillnaden: ${tex('x - (90^\\circ - y) = 180^\\circ - y - z - 90^\\circ + y = 90^\\circ - z')}.</p>
<p>Om <i>z</i> är mindre än 90° är I störst, och om <i>z</i> är större än 90° är II störst. Vi vet bara att <i>z</i> inte är 90°, och du kan inte lita på att figuren är skalenlig. Exempel: ${tex('x = y = 50^\\circ')} och ${tex('z = 80^\\circ')} ger I = 50° och II = 40°, medan ${tex('x = y = 30^\\circ')} och ${tex('z = 120^\\circ')} ger I = 30° och II = 60°. Svar D.</p>`,

  19: `<p>I skärningspunkten har linjerna samma <i>y</i>-värde, så sätt uttrycken lika.</p>
<p>Kvantitet I: L<sub>1</sub> och L<sub>3</sub> ger ${tex('2x + 1 = x')}, alltså ${tex('x = -1')}.</p>
<p>Kvantitet II: L<sub>2</sub> och L<sub>3</sub> ger ${tex('-x + 4 = x')}, alltså ${tex('2x = 4')} och ${tex('x = 2')}.</p>
<p>2 är större än −1. Svar B.</p>`,

  20: `<p>Kvantitet I: att dela med ${tex('\\frac{1}{x + 1}')} är samma sak som att multiplicera med ${tex('x + 1')}, så I är ${tex('x(x + 1)')}.</p>
<p>Kvantitet II: ${tex('\\frac{x + 1}{x} = 1 + \\frac{1}{x}')}. Eftersom ${tex('x \\geq 2')} är II högst ${tex('1 + \\frac{1}{2} = 1{,}5')}.</p>
<p>I är minst ${tex('2 \\cdot 3 = 6')} och blir bara större när <i>x</i> växer. Exempel: ${tex('x = 2')} ger I = 6 och II = 1,5. I är alltid störst. Svar A.</p>`,

  21: `<p>T är rätvinklig med kateterna 3 cm och 4 cm (hypotenusan är den längsta sidan, 5 cm). Arean är ${tex('\\frac{3 \\cdot 4}{2} = 6')} cm² och omkretsen är 3 + 4 + 5 = 12 cm.</p>
<p>Kvadraten K har också arean 6 cm², så dess sida är ${tex('\\sqrt{6}')} cm och omkretsen ${tex('4\\sqrt{6}')} cm.</p>
<p>Jämför: ${tex('4\\sqrt{6} = \\sqrt{16 \\cdot 6} = \\sqrt{96}')} och ${tex('12 = \\sqrt{144}')}. Alltså är ${tex('4\\sqrt{6} \\approx 9{,}8')} mindre än 12. Svar A.</p>`,

  22: `<p>Multiplicera båda sidor med <i>y</i> (som inte är 0): ${tex('x + 3y = 2y')}, alltså ${tex('x = -y')}.</p>
<p>Om <i>y</i> är positivt är <i>x</i> negativt och II störst. Om <i>y</i> är negativt är <i>x</i> positivt och I störst. Vi vet inte tecknet på <i>y</i>, till exempel ger ${tex('y = 1')} att ${tex('x = -1')}, medan ${tex('y = -1')} ger ${tex('x = 1')}. Svar D.</p>`,

  // NOG
  23: `<p>(1): Den tomma koppen står i mitten, men ordningen kan vara varm, tom, kall eller kall, tom, varm. Räcker inte.</p>
<p>(2): Den kalla koppen står längst till höger, och den varma står någonstans till vänster om den. Ordningen kan vara varm, tom, kall eller tom, varm, kall. Räcker inte.</p>
<p>Tillsammans: tom i mitten och kall längst till höger ger varm, tom, kall. Svar C.</p>`,

  24: `<p>(1): Fem nya tomtar skulle vara en ökning med 25 procent, alltså är 5 lika med 25 procent av antalet. Iris har ${tex('\\frac{5}{0{,}25} = 20')} tomtar. Räcker.</p>
<p>(2): ${tex('\\frac{7}{10}')} står i skåpet, så de sex på hyllan är ${tex('\\frac{3}{10}')} av samlingen. Då är en tiondel 2 tomtar och hela samlingen 20 tomtar. Räcker.</p>
<p>Båda påståendena räcker var för sig. Svar D.</p>`,

  25: `<p>(1): Det finns 400 askar, 250 stora och 150 små. 300 innehåller choklad, så 100 innehåller lakrits. Men vi vet inte hur lakritsaskarna fördelas på stora och små. Räcker inte.</p>
<p>(2): 100 små askar innehöll choklad och en fjärdedel av alla askar innehöll lakrits, men vi vet varken hur många askar det finns totalt eller hur många som är stora. Räcker inte.</p>
<p>Tillsammans: av de 150 små askarna innehöll 100 choklad, så 50 små askar innehöll lakrits. Totalt innehöll 100 askar lakrits (vilket också stämmer med en fjärdedel av 400). Då är 100 − 50 = 50 stora askar med lakrits. Svar C.</p>`,

  26: `<p>(1): Priset efter sänkningen var 350 kr, så det ordinarie priset var 350 + 150 = 500 kr. Sänkningen motsvarade ${tex('\\frac{150}{500} = 0{,}30')}, alltså 30 procent. Räcker.</p>
<p>(2): 25 procent av 600 kr är 150 kr, vilket bara upprepar att sänkningen är 150 kr. Påståendet säger ingenting om det verkliga ordinarie priset. Räcker inte.</p>
<p>Svar A.</p>`,

  27: `<p>(1): Med samma sträcka och fyra gånger så hög medelhastighet tar resan en fjärdedel så lång tid. Om en fjärdedel av tiden är två timmar är den verkliga tiden ${tex('4 \\cdot 2 = 8')} timmar. Räcker.</p>
<p>(2): Vi känner sträckan och förhållandet mellan hastigheterna, men inte någon faktisk hastighet. Med 100 km/h på första halvan och 50 km/h på andra tar resan 1 + 2 = 3 timmar, med 50 km/h och 25 km/h tar den 2 + 4 = 6 timmar. Räcker inte.</p>
<p>Svar A.</p>`,

  28: `<p>Mätserien har sju värden, så medianen är det fjärde värdet i storleksordning. De kända värdena är 1, 11, 19, 27 och 35.</p>
<p>(1): Medianen 13 finns inte bland de kända värdena, så <i>x</i> eller <i>y</i> måste vara 13. För att 13 ska hamna på fjärde plats måste det finnas tre värden som är högst 13, alltså 1, 11 och det andra okända talet. Det andra talet är därför högst 13. Både ${tex('x = 13')} och ${tex('y = 13')} är möjliga, så <i>y</i> kan till exempel vara 13 eller 5. Räcker inte.</p>
<p>(2): ${tex('x < y')} säger ingenting om vilket värde <i>y</i> har. Räcker inte.</p>
<p>Tillsammans: ett av talen är 13 och det andra är högst 13. Eftersom <i>y</i> är större än <i>x</i> måste det vara <i>y</i> som är 13. Svar C.</p>`,

  // DTK
  29: `<p>Läs av raden 2005 i tabellen: antal medlemmar 10 330 och andel som besvarat enkäten 45 procent.</p>
<p>${tex('0{,}45 \\cdot 10\\,330 \\approx 4\\,650')}. Svar B.</p>`,

  30: `<p>Läs av raden 2010 under Antal bisamhällen: 31 667 bisamhällen invintrades och därav var vinterförlusterna 7 850.</p>
<p>${tex('\\frac{7\\,850}{31\\,667} \\approx 0{,}25')}, alltså 25 procent. Överslag: en fjärdedel av 31 667 är ungefär 7 900. Svar D.</p>`,

  31: `<p>Använd kolumnen Beräknad total skörd av honung, eftersom den enligt fotnot 2 är uppräknad till samtliga medlemmar. Kolumnen Skörd av honung gäller bara dem som svarade på enkäten.</p>
<p>2016 var den beräknade totala skörden 2 294 tusen kg, alltså 2 294 000 kg, och antalet medlemmar var 12 026.</p>
<p>${tex('\\frac{2\\,294\\,000}{12\\,026} \\approx 191')} kg per medlem. Svar D.</p>`,

  32: `<p>Leta upp Sverige (i fetstil, fjärde landet från vänster). Sysselsättningsgraden var ungefär 91 procent för eftergymnasiala utbildningar, 88 procent för yrkesutbildningar och 82 procent för studieförberedande utbildningar.</p>
<p>Alla tre värdena är höga och skillnaden mellan dem är liten, så A och C stämmer inte. D stämmer inte heller, eftersom det lägsta värdet gäller studieförberedande utbildningar. Svar B.</p>`,

  33: `<p>Läs av de grå romberna (yrkesutbildningar). Tyskland ligger på ungefär 91 procent och Italien på ungefär 51 procent.</p>
<p>${tex('\\frac{91}{51} \\approx 1{,}8')}, och ${tex('9:5 = 1{,}8')}. De andra alternativen ger 1,4 (7:5), 2,5 (5:2) och 3 (3:1). Svar D.</p>`,

  34: `<p>Den vita romben för Totalt EU-28 (längst till vänster) ligger på ungefär 64 procent. Räkna de länder vars vita romb ligger lägre.</p>
<p>Det gäller Belgien (cirka 52), Rumänien (cirka 61), Bulgarien (cirka 62), Frankrike (cirka 51), Finland (cirka 61), Spanien (cirka 56), Cypern (cirka 55), Italien (cirka 38) och Grekland (cirka 36). Tyskland ligger strax över, på cirka 67, och länder utan vit romb räknas inte.</p>
<p>Det blir 9 länder. Svar C.</p>`,

  35: `<p>Folkspel är det svarta segmentet längst ned i staplarna. För 2016 är värdena ungefär 155 (kvartal 1), 135 (kvartal 2), 70 (kvartal 3) och 325 miljoner kronor (kvartal 4).</p>
<p>Helåret blir cirka 155 + 135 + 70 + 325 = 685 miljoner kronor, och ${tex('\\frac{325}{685} \\approx 0{,}47')}. Det närmaste alternativet är 45 procent. Svar A.</p>`,

  36: `<p>Svenska Postkodföreningen är det grå segmentet. Dess storlek är avståndet från det svarta segmentets överkant till det grås överkant.</p>
<p>Kvartal 1 2017: från cirka 140 till cirka 765, alltså ungefär 625 miljoner kronor. Kvartal 4 2016: från cirka 325 till cirka 665, alltså ungefär 340 miljoner kronor.</p>
<p>Skillnaden är cirka 625 − 340 = 285 miljoner kronor, närmast 280. Svar C.</p>`,

  37: `<p>Läs av hela staplarnas höjd för de fyra kvartalen 2017: ungefär 900, 840, 705 och 810 miljoner kronor. Tillsammans blir det cirka 3 255 miljoner kronor, alltså ungefär 3,3 miljarder kronor.</p>
<p>${tex('\\frac{3{,}3}{17{,}2} \\approx 0{,}19')}, alltså cirka 20 procent. Svar C.</p>`,

  38: `<p>Titta på den heldragna linjen i det nedre diagrammet (totalt antal barn i biståndshushåll). 1997 var antalet ungefär 247 000 och 2002 ungefär 148 000.</p>
<p>Minskningen är cirka 247 000 − 148 000 = 99 000, och ${tex('\\frac{99\\,000}{247\\,000} \\approx 0{,}40')}. Svar A.</p>`,

  39: `<p>I det övre diagrammet finns tre hushållstyper med barn. År 2010 var antalet ungefär 38 000 (kvinna, med barn), 28 500 (sambo, med barn) och 7 000 (man, med barn), alltså cirka 73 500 hushåll.</p>
<p>I det nedre diagrammet var det totala antalet barn i biståndshushåll 2010 ungefär 143 000.</p>
<p>${tex('\\frac{143\\,000}{73\\,500} \\approx 1{,}9')}, alltså ungefär 2 barn per hushåll. Svar B.</p>`,

  40: `<p>Det totala antalet hushåll är summan av alla sex linjerna i det övre diagrammet. Alla linjerna ligger som högst omkring 1994 till 1997, så summan är störst då.</p>
<p>Exempel 1996: man utan barn cirka 139 000, kvinna utan barn cirka 98 500, kvinna med barn cirka 60 500, sambo med barn cirka 58 500, sambo utan barn cirka 22 500 och man med barn cirka 7 500. Summan blir ungefär 386 500.</p>
<p>Det närmaste alternativet är 385 000. (145 000 är bara den högsta enskilda linjen och 250 000 är toppen för antalet barn i det nedre diagrammet.) Svar D.</p>`,
};
