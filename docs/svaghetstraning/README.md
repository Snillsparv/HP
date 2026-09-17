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

### Tre lägen på `/trana/fokus`

1. **Mina svagheter**: verktyget väljer själv. 70 procent av rundan kommer
   från de tre typer där det finns mest att hämta, 30 procent blandas in från
   övriga typer med underlag, gamla fel återbesöks, och rundan avslutas med
   en uppgift från den starkaste typen. Knappen är grå tills det finns minst
   fem svar på någon typ.
2. **Ett delprov**: slumpade uppgifter ur alla 3 640 i extramaterialet för
   XYZ, KVA, NOG, DTK, ORD, LÄS eller MEK.
3. **En uppgiftstyp**: delprov plus kategori för de kvantitativa (t.ex. XYZ
   algebra, DTK tabeller), antal luckor för MEK. ORD och LÄS har bara sig
   själva än så länge.

En runda är omkring tio uppgifter utan tid, med rättning och textförklaring
direkt efter varje svar och "Vet inte, visa svaret" som utväg. DTK-diagram
och LÄS-texter hålls ihop (en DTK-runda blir tre till fyra diagram). Efter
rundan: resultat, rätt per typ, "Kör tio till", genomgångar för den typ som
gick sämst (strategisidan och matterepetitionens avsnitt), och alla
uppgifter med förklaring igen.

### Ingången från ett fel svar

Varje fel fråga i rättningen av extraproven och HT 2021-proven har knappen
"Träna fler av den här typen", som startar en runda på just den typen utan
mellansida. Analysblocket efter provet länkar också dit, och profilen visar
styrkekartan med de typer där det finns mest att hämta.

### Uppgiftstyper

- Stabilt fråge-id `test_id#num`, t.ex. `extra-ht2012-1#17`, `kvant-ht2021#5`.
- Kvantitativa: `delprov:kategori` ur fältet `category` (algebra, aritmetik,
  geometri, funktioner, procent, sannolikhet, statistik, enheter, logik;
  DTK diagram, tabell, karta). MEK: `mek:1`, `mek:2`, `mek:3` efter antal
  luckor. ORD och LÄS: bara delprovet.
- Poolen är extramaterialet. HT 2021 sparas till stegen på Träna-sidan men
  räknas in i styrkan.

### Svaghetsmodellen

Styrka per typ = viktad andel rätt över alla svar på typen (prov och rundor),
där det i:te senaste svaret väger 0,5^(i/10), med prior Beta(2, 2) räknad
mot summan av vikterna (så att en lång historik aldrig ser säkrare ut än de
senaste cirka femton svaren). Under fem svar visas "för lite data". Samma
fråga igen inom ett dygn sparas som omförsök och räknas inte.

"Mest att hämta" = typens ungefärliga antal uppgifter i ett provpass gånger
avståndet till 85 procent, plus ett litet påslag för osäkerhet. Det gör att
DTK diagram (12 uppgifter per pass) går före XYZ enheter (under en) vid
samma svaghet.

### Data

- `question_events`: en rad per besvarad uppgift i träningen. Provsvaren
  ligger kvar i `test_results` och räknas om till händelser vid läsning
  (`src/lib/fokus/historik.ts`), så ingen backfyllning behövs.
- Gäster får en osynlig gästsession vid första rundan; vid registrering
  behålls raden, vid inloggning på befintligt konto flyttas provresultat
  och händelser med.

## Nästa steg

Se avsnittet Leveransplan i `design.md`. De viktigaste:

- Finare verbala typer (ORD ord eller uttryck, LÄS kort eller lång text och
  frågetyp där regex träffar, DTK diagramtyp ur `diagramAlt`), härledda av
  ett skript och committade som data.
- Snabbdiagnos vid kallstart (tolv kvantitativa och tio verbala uppgifter,
  rättning efter sista frågan) så att "Mina svagheter" fungerar för nya
  användare.
- Övertidssvar i proven som händelser, tid per fråga som temposignal.
- Gemensam streak med ordträningen.

## Öppna frågor till Jonas

Se sista avsnittet i `design.md`. Standardval tills han svarat: HT 2021 hålls
utanför poolen, rättning direkt efter varje fråga, grov verbal typ.
