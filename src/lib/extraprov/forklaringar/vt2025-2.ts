// Textförklaringar till högskoleprovet 5 april 2025, provpass 2 (verbalt).

export const forklaringar: Record<number, string> = {
  // ORD
  1: `<p><b>Basal</b> betyder <b>grundläggande</b>. Ordet kommer från <i>bas</i>, det som något vilar på (latinets <i>basis</i>, grund). Basala behov är de mest grundläggande behoven.</p>
<p>Svar D.</p>`,

  2: `<p>En <b>defekt</b> är ett fel eller en <b>brist</b>, något som saknas eller inte fungerar som det ska. Ordet kommer från latinets <i>deficere</i>, fattas.</p>
<p>Svar B.</p>`,

  3: `<p><b>Länsa</b> betyder att <b>tömma</b>. Ursprungligen tömmer man en båt på vatten (läns = torr i botten), men man kan också länsa kylskåpet på mat eller ett konto på pengar.</p>
<p>Svar D.</p>`,

  4: `<p><b>Gensvar</b> är ett svar tillbaka, en reaktion på något man sagt eller gjort, alltså <b>respons</b>. Förleden <i>gen-</i> betyder åter eller emot, som i genmäle och gengåva.</p>
<p>Svar E.</p>`,

  5: `<p><b>Kontroversiell</b> betyder <b>omtvistad</b>, något som väcker strid och delade meningar. Grundordet är kontrovers, en tvist eller strid (latinets <i>contra</i>, emot, och <i>vertere</i>, vända).</p>
<p>Svar C.</p>`,

  6: `<p><b>Eskapader</b> är vilda upptåg eller <b>äventyr</b>, ofta lite förbjudna. Ordet kommer från franskans <i>escapade</i>, som hänger ihop med engelskans <i>escape</i>: att smita iväg från det ordnade livet.</p>
<p>Svar D.</p>`,

  7: `<p>Att <b>förfoga över</b> något är att ha det till sitt förfogande, att kunna använda det som man vill. Det närmaste alternativet är helt enkelt <b>ha</b>.</p>
<p>Svar A.</p>`,

  8: `<p><b>Diger</b> betyder <b>stor</b>, omfattande: ett digert arbete, en diger lunta. Digerdöden var "den stora döden".</p>
<p>Svar B.</p>`,

  9: `<p><b>Aversion</b> betyder <b>motvilja</b>, en stark olust inför något. Ordet kommer från latinets <i>avertere</i>, vända bort: man vänder sig bort från det man har aversion mot.</p>
<p>Svar E.</p>`,

  10: `<p><b>Fåfängt</b> betyder förgäves, utan resultat, alltså <b>resultatlöst</b>. "Han sökte fåfängt efter nycklarna." Grundbetydelsen i fåfäng är tom och innehållslös, samma tanke som i substantivet fåfänga.</p>
<p>Svar C.</p>`,

  // LÄS: Behandling av tremor
  11: `<p>Textens huvudpoäng är att ett gammalt ingrepp, talamotomi, nu har utförts på ett nytt sätt: med ultraljud i stället för kirurgi, alltså ickeinvasivt. Rubriken "Talamotomi på nytt sätt" fångar just det. Svar C.</p>
<p>A är för allmän och missar det nya. B säger inget om vad som är nytt. D handlar bara om biverkningarna, som är en mindre del av texten.</p>`,

  12: `<p>I sista stycket skriver författaren att "en uppenbar begränsning är att man inte gjort en blindad studie med behandlings- och kontrollgrupper, vilket gör det svårt att utvärdera hur stor placebokomponenten är". Det är studiens utformning som gör effekterna osäkra, alternativ D.</p>
<p>A, B och C nämns inte som brister i texten.</p>`,

  // LÄS: Bankerna
  13: `<p>Enligt texten bygger Baselreglerna på att bankernas kapitalkrav beror på hur riskfyllda lånen är, och det avgörande är därför riskbedömningen. Problemet är att bankerna själva får räkna på riskerna med "interna modeller" som matas med naiva antaganden, vilket ledde till att "bankerna har blåst oss alla". Reglerna möjliggör alltså missvisande riskbedömningar, alternativ B.</p>
<p>A är fel, reglerna tar tvärtom hänsyn till risken. C är fel, banker med högre risk ska ha mer kapital. D beskriver hur systemet fungerar, inte svagheten.</p>`,

  14: `<p>Författaren skriver att bankerna under en falsk förevändning har ökat sina marginaler på bolån dramatiskt, att avkastningen är "så hög som 25 procent" och att "det är faktiskt ganska provocerande". Han tycker alltså att bankerna tjänar orimligt mycket på bolånen, alternativ D.</p>
<p>A nämns inte. B är tvärtemot textens poäng. C handlar om risk, vilket inte är kritiken mot bolånen.</p>`,

  15: `<p>I sista stycket räknar författaren upp hur politiker och bankfolk byter plats med varandra och avslutar: "Om inte Sverige hade haft en så naiv syn på korruption hade säkert någon reagerat. Det börjar faktiskt bli lite olustigt." Relationen antyds vara osund och i vissa avseenden korrupt, alternativ B.</p>
<p>A och C har inget stöd. D går för långt: texten talar om karriärbyten och vänskapsband, inte om mutor.</p>`,

  16: `<p>Texten är full av spydigheter: riskmodeller jämförs med korvmaskiner, bankerna har "blåst oss alla" och "haft ganska roligt åt hur lätt det var", deras argument kallas "snömos" och citaten parodieras ("Hela skiten kan rasa"). Tonen är syrligt sarkastisk, alternativ A.</p>
<p>Texten är varken självkritisk, formellt saklig eller uppgiven.</p>`,

  // LÄS: Den flygande arketypen
  17: `<p>Psykologen säger att hon med ängeln "äntligen kan placera det änglalika utanför dig själv". Om ängeln är det goda som placerats utanför henne, skulle en djävul på samma sätt vara ett sätt att placera det onda utanför sig, alltså skapa distans till det onda inom sig. Alternativ B.</p>
<p>A, C och D missar kopplingen till psykologens kommentar, som frågan uttryckligen utgår från.</p>`,

  18: `<p>Formuleringen anspelar på "en ros är en ros är en ros", som betyder att en sak bara är det den är. Genom att vända på den säger författaren att en ängel är mycket mer än en pappersfigur: "något så häpnadsväckande som en flygande arketyp. Med makt över sinnet". Ängeln är tungt lastad med symbolisk betydelse, alternativ D.</p>
<p>A och C förminskar ängeln, tvärtemot textens poäng. B handlar om existens, inte om betydelse.</p>`,

  19: `<p>Författaren skriver att de gamla gudarna steg ner på jorden för att handla, och att när de ersattes av den ende Guden sände han i stället änglarna, "hjälpredor som griper in i handlingen. Så som en gång Afrodite, Jupiter, Ull, Oden." Änglarna har alltså tagit över gudarnas funktion, och därför är det ingen slump att ängeln ser ut som Venus. Alternativ C.</p>
<p>A och B har inget stöd. D är lockande eftersom Venus är kärleksgudinna, men texten resonerar om funktion, inte om kärlek.</p>`,

  20: `<p>Författaren beskriver "ögonblick av nåd" när ett träd bara är ett träd, utan att man registrerar eller bedömer, och säger att hon kanske köpte ängeln "i nåt aldrig erkänt hopp om upplevelser bortom tiden i insomnandets ögonblick när sinnet är vidöppet och saknar ord". Det hon längtar efter är ordlösa erfarenheter, alternativ A.</p>
<p>B, C och D nämns inte som något hon längtar efter. Tvärtom är hon skeptisk till beskrivningar och ställningstaganden.</p>`,

  // MEK
  21: `<p>Meningen räknar upp sätt att motverka dopaminbristen: kompensera för bristen, förbättra verkan eller <b>bromsa nedbrytningen</b> av dopamin. Alla tre ökar mängden verksamt dopamin. Svar B.</p>
<p>A, C och D skulle tvärtom minska dopaminet, vilket är motsatsen till behandlingens syfte.</p>`,

  22: `<p>En smal, kilometerlång ravin med åttio meter höga klippor är en <b>spektakulär</b> väg, och en ravin <b>kantas</b> av klippor. Svar B.</p>
<p>"Reguljära" och "temporära" passar inte som beskrivning av en turistväg, "sedimentära" är en geologisk term, och "angörs" används om båtar som lägger till.</p>`,

  23: `<p>En ny spis representerade ett <b>betydande</b> ekonomiskt värde. Inköpet förde dessutom med sig <b>merkostnader</b>, eftersom trefotsgrytorna måste ersättas av nya <b>kärl</b> (grytor och kastruller är kärl). Svar C.</p>
<p>"Verktyg" (A) och "metoder" (B) kan inte ersätta grytor, och "moderniteter" och "rutiner" (D) passar inte in i resonemanget om kostnader.</p>`,

  24: `<p>Häggen finns överallt upp till trädgränsen, men förekommer bara här och där, <b>sporadiskt</b>, som buske ännu högre upp. Svar D.</p>
<p>"Successivt" beskriver ett förlopp, "exemplariskt" betyder föredömligt och "vegetativt" handlar om förökningssätt.</p>`,

  25: `<p>Att "allmänheten vill ha högre straff" är en <b>sanning med modifikation</b>, alltså något som delvis stämmer men behöver nyanseras. Skälet är att åsikterna är så spridda att det inte går att hitta någon <b>enhetlig</b> linje. Svar A.</p>
<p>"Förskönande omskrivning" (B) och "självuppfyllande profetia" (C) beskriver andra saker, och "besvärande omständighet" (D) passar inte in i resonemanget om vad påståendet är för slags påstående.</p>`,

  26: `<p>Människan som både kvinna och man, eller varken kvinna eller man, är två former av <b>androgyni</b> (av grekiskans <i>anér</i>, man, och <i>gyné</i>, kvinna). Svar A.</p>
<p>"Matriarkat" är kvinnostyre, "analogi" är en likhet och "misogyni" är kvinnohat.</p>`,

  27: `<p>Ett parlament <b>antar</b> ett förslag. För en förening som länge drivit frågan är ett sådant beslut en framgång, en <b>fjäder i hatten</b>. Svar C.</p>
<p>"Spik i kistan" (A) och "lök på laxen" (B) är negativa uttryck, och "dans på rosor" (D) beskriver en bekymmersfri tillvaro, inte en enskild framgång.</p>`,

  28: `<p>Kortsiktiga lokala prognoser kan inte direkt <b>härledas</b> ur ett större vädersammanhang, även om det finns en ömsesidig påverkan mellan det <b>lokala</b> och det <b>globala</b>. Motsatsparet lokalt och globalt knyter an till "lokala prognoser" och "större vädersammanhang". Svar B.</p>
<p>"Uteslutas ur" (A) ger fel betydelse, och paren i C och D (potentiell/aktuell, förfluten/framtida) hör inte ihop med resonemanget om lokalt och stort.</p>`,

  29: `<p>Information på nätet <b>fragmentiseras</b>, splittras upp i småbitar. Motsatsen är att helt gå upp i en annan värld, och det är <b>romanen</b> med sin "obrutna handling" som kan träna koncentrationsförmågan. Svar A.</p>
<p>"Samtalet" (B), "prosan" (C) och "skriften" (D) passar sämre ihop med "den obrutna handlingen", och "punkteras", "demoraliseras" och "rekonstrueras" beskriver inte vad som händer med information på nätet.</p>`,

  30: `<p>Yrken som förr sågs som strikt <b>förbehållna</b> människan, alltså reserverade för människor, kan nu digitaliseras. Svar D.</p>
<p>"Angelägna", "underordnade" och "gällande" ger ingen rimlig betydelse tillsammans med "människan".</p>`,
};
