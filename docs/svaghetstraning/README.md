# Fokuserad träning på svagheter

Status 2026-09-17: MVP:n är byggd och driftsatt på `/trana/fokus`. Det här
dokumentet beskriver uppdraget, vad som finns, hur det hänger ihop och vad
som är nästa steg. Designen i sin helhet finns i `design.md`, kartläggningen
av koden i `kartlaggning.md`, och driftdetaljer (filer, databas, test,
parametrar) i `docs/OVERLAMNING.md`.

## Uppdraget (Jonas)

"Nästa steg är att man ska kunna välja att träna på uppgifter av en viss typ.
Dels varje delprov för sig (så slumpas uppgifterna bland alla som finns) men
även mer specifikt. Det bästa vore att om man har fel på en viss uppgift så kan
man sedan få träna på fler uppgifter av just den typen. Jag vill ha det ultimata
och smartaste träningsverktyget som gör det så lätt som möjligt att fokusera
specifikt på sina svagheter."

## Hur det togs fram

1. Kartläggning av koden i fyra delar (`kartlaggning.md`).
2. Fyra oberoende designförslag med olika utgångspunkt (inlärningsvetenskap,
   enkelhet, ingenjörsmässig pragmatik, motivation), tre domare, en syntes
   och tre kritiska granskningar, via `workflow-designa.js` i Claude Code.
   Resultatet är `design.md`.
3. Bygget skedde parallellt med designarbetet: grunden (frågebank,
   styrkemodell, urval, API) först, sedan gränssnittet, och till sist de
   ändringar domarna och granskarna var eniga om.

## Vad som finns (MVP)

Designen i `design.md` är byggd i sin helhet, med två små avvikelser som
står under "Avvikelser från designen" nedan.

### Ingången: en primär knapp på `/trana/fokus`

- **Träna på mina svagheter** när det finns underlag (minst tre typer med
  fyra effektiva svar). Rundan har hinkar: återbesök av typer med gamla fel,
  fem uppgifter från de tre typer som ger mest att hämta, en orörd typ att
  utforska, en blandning ur samma delprov och sist en kontroll av en typ som
  brukar sitta. Varje uppgift säger varför den kom.
- **Fortsätt med NOG** (det delprov som ger mest att hämta) före gaten.
- **Snabbkoll, cirka tio minuter** utan historik: 18 uppgifter över alla
  delprov, kvitto per delprov och de typer som gick fel som knappar.

Under knappen: styrkekartan (mest att hämta först, gröna och osäkra sist),
sju delprovschips och alla uppgiftstyper hopfällda.

### Lägena

| Läge | Vad | Nås från |
|---|---|---|
| svagheter | hinkarna ovan | primära knappen, bannern på Träna, profilen |
| delprov | slump inom ett delprov | chips, "Fortsätt med", ORD och LÄS från rättningen |
| typ | sju av typen plus tre ur samma delprov med annan kategori | chips, kartan, knappen i rättningen |
| kategori | en matematisk kategori över XYZ, KVA och NOG | knappen i rättningen för små typer ("Fler om sannolikhet (40 uppgifter)") |
| snabbkoll | fast blandning på 18 | primära knappen utan historik |

En runda är omkring tio uppgifter utan timer, med rättning och
textförklaring direkt efter varje svar och "Vet inte, visa svaret" som
utväg. DTK-diagram och LÄS-texter hålls ihop. Efter fel utanför typläget
finns "Mer av det här nästa runda", som gör typen till den första i nästa
svaghetsrunda. Efter två typrundor i rad på samma typ blir "Kör tio till"
blandat.

### Kvittot

Antal rätt, tonrad, tid mot ungefärlig provtid, styrkan före och efter per
typ (förändring visas från tre punkter, annars "oförändrat"; osäkra typer
får "N svar till så får du en siffra"), högst två knappar (Kör tio till,
och Tillbaka till rättningen när rundan startades från ett prov, annars
Byt till den typ som gick sämst), genomgångar för den svagaste typen
(strategisidan och matterepetitionens avsnitt), och alla uppgifter med
förklaring igen. Efter en ORD-runda är ordträningen den primära knappen.

### Ingången från ett fel svar

Varje fel fråga i rättningen av extraproven och HT 2021-proven har knappen
"Fler som den här: XYZ algebra" (för små typer "Fler om sannolikhet (40
uppgifter)", för ORD och LÄS "Fler ORD-uppgifter"), som startar rundan
direkt. Kvittot leder tillbaka till rättningen. Analysblocket efter provet
har en knapp till samma läge. Provlöparna skapar en gästsession vid
"Starta provet" så att resultatet räknas även utan konto, och svar som ges
efter tiden sparas som händelser.

### Uppgiftstyper

- Stabilt fråge-id `test_id#num`, t.ex. `extra-ht2012-1#17`, `kvant-ht2021#5`.
- Kvantitativa: `delprov:kategori` ur fältet `category`. MEK: `mek:1`,
  `mek:2`, `mek:3` efter antal luckor (chips, men en typ i rangordningen).
  ORD och LÄS: bara delprovet.
- Typer med färre än 20 uppgifter (`MINSTA_TYP`) slås ihop till
  "XYZ övrigt" i modellen och på kartan.
- Poolen är extramaterialet. HT 2021 sparas till stegen på Träna-sidan men
  räknas in i styrkan.

### Svaghetsmodellen

Styrka per typ = viktad andel rätt över alla svar på typen (prov och
rundor), där det i:te senaste svaret väger 0,5^(i/20) gånger 0,5^(dagar/90),
rundsvar och övertidssvar väger 0,7 mot tidsatta provsvar, frågor på samma
diagram eller text samma dag räknas som högst två, samma fråga inom en
månad väger hälften och inom ett dygn inte alls (oavsett källa), och
obesvarade frågor i ett inlämnat prov räknas som fel med halv vikt. Priorn
är delprovsstyrkan (pseudoantal 4), som i sin tur har Beta(2, 2). Under fyra
effektiva svar visas "för lite data" och typen rangordnas inte.

Mest att hämta = typens ungefärliga antal uppgifter i ett provpass (ORD och
LÄS halverade tills de har undertyper) gånger avståndet till målnivån, 85
procent (75 för NOG och MEK med tre luckor), plus ett litet oviktat påslag
för osäkerhet.

### Data

- `question_events`: en rad per besvarad uppgift i träningen (med läge,
  rund-id och position). Provsvaren ligger kvar i `test_results` och
  räknas om till händelser vid läsning (`src/lib/fokus/historik.ts`),
  typen hämtas alltid ur banken. `fokus_rundor`: en rad per startad runda.
- Gäster får en osynlig gästsession vid första rundan eller provet; vid
  registrering behålls raden, vid inloggning på befintligt konto flyttas
  provresultat, händelser och rundor med.

### Avvikelser från designen

- Kvittot visar tid mot provtempo även i typläget (designen skriver bara
  "temporaden" utan undantag, så det är snarare ett förtydligande).
- Snabbkollens kvitto listar felade typer som chips under delprovsraderna;
  designen har dem som knappar i löptext.

## Nästa steg

Se Leveransplan, steg 2 och 3, i `design.md`. De viktigaste:

- `undertyper.json` med ORD ord eller uttryck och LÄS kort eller lång text,
  som chips.
- Import av gamla `hp-results` och `hp-fokus-lokal` för svar som inte kunde
  sparas.
- Egen streak för fokusträningen, regeln "se genomgången först", ankare på
  strategisidorna och rekommendationsrutan i analysblocket.
- Första utvärderingen på verklig data (`fokus_rundor`, `question_events`
  med läge och position): andel rätt per typ i nästa provpass, före mot
  efter träning.

## Öppna frågor till Jonas

Se sista avsnittet i `design.md` (sex frågor). Standardval tills han svarat:
HT 2021 hålls utanför poolen, egen streak i steg 2, NOG i HT 2021 taggas
inte om, målnivå 75 procent för NOG och treluckor, ingen uppskattad
normerad poäng, ingen egen menypunkt.
