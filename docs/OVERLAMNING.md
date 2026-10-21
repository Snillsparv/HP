# Överlämning: så här har arbetet i repot bedrivits

Skrivet 2026-09-17 när Jonas pausade på grund av credits, så att Jessica (eller
någon annan) kan fortsätta från ett annat konto utan att tappa sammanhang.

## Sajten i korthet

- Astro med SSR, Postgres, driftsatt på Railway som bygger automatiskt när
  `main` uppdateras. Domän hpakuten.se.
- Databasen skapar sina tabeller själv vid start (`src/lib/db.ts`). Lokalt
  behövs `DATABASE_URL`, t.ex. `postgres://postgres:hp@localhost:5432/postgres`.
- Starta lokalt: `DATABASE_URL=... npx astro dev --port 4321 --host 127.0.0.1`.

## Arbetssätt

- Utvecklingen sker på en egen arbetsgren per session (Jonas:
  `claude/vocab-trainer-interface-g0knip`, Jessica: `claude/zen-pascal-jnj2ca`).
  Deploy = pusha grenen, sedan `git checkout main && git merge --ff-only
  <gren> && git push origin main`, tillbaka till grenen. Jonas laddar ibland
  upp filer direkt på GitHub ("Add files via upload"), så hämta `origin/main`
  och slå ihop innan deploy.
- Kontroll att en deploy är live: `curl -sL https://hpakuten.se/extra | grep
  "<något nytt>"`, bygget tar några minuter.
- Text på sajten: du-tilltal, Jonas som avsändare, aldrig tankstreck (– eller
  —) i text vi skriver själva. Originaltext från proven behåller sina
  tankstreck.
- Commit-meddelanden på svenska. Inga modellnamn i commits.

## Extraproven (Fler prov)

- Register: `src/lib/extraprov/register.ts` (lista `provtillfallen`, glob av
  `data/*.ts` och `forklaringar/*.ts`, `extraStatistik()` för antal).
- Data per pass: `src/lib/extraprov/data/<id>-<pass>.ts`. Kvantitativa pass är
  handskrivna (KaTeX via `tex()`, figurer via `figur()`, DTK-alt-texter med
  alla värden). Verbala pass byggs ur PDF med
  `verktyg/extraprov/extrahera_verbal.py` och `bygg_verbal_ts.py`.
- Förklaringar: `src/lib/extraprov/forklaringar/<id>-<pass>.ts`, en post per
  fråga, kvant slutar med `<p>Svar X.</p>`, LÄS slutar med "alternativ X."
- Bilder: `public/extraprov/<id>/*.webp`, klippta med
  `verktyg/extraprov/klipp_figurer.py`.
- Rätt svar kommer alltid från UHR:s officiella facit-PDF, aldrig från egna
  lösningar. Kontroll av alla 28 prov mot facit-PDF:erna:
  `python3 verktyg/extraprov/kolla_facit_alla.py` (laddar ned facit till
  `~/.cache/hp-facit` vid behov, senast "ALLT OK" för 3 920 uppgifter).
  Skriptet hittar även facit som heter `hp-25b.pdf` (HT 2025) och hoppar över
  ELF:s exempelfacit som ligger på vissa provsidor.
- Övriga verktyg i `verktyg/extraprov/`: `validera-tex.mjs <filer>` (KaTeX;
  katex finns inte i repots node_modules, installera det separat i en egen
  katalog och kör skriptet därifrån),
  `testa-pass.mjs <passid...>` (Playwright mot lokal server på 4321, eller
  mot sajten med `HP_BAS=https://www.hpakuten.se`: klickar igenom alla
  frågor, kollar bilder och förklaringar),
  `prep_prov.py <utkatalog> <provsida-url> [<normsida-url>]` (laddar ned PDF:er,
  renderar sidor, dumpar text, tolkar normering).
- Serien omfattar HT 2012 till VT 2026 utom HT 2021 (sajtens
  huvudmaterial). VT 2016 (provet 2016-04-09) har sin provsida utanför /fpn/:
  https://www.studera.nu/hogskoleprov/provfragor-hosten-2016/provfragor-varen-2016/.
  Nya prov ligger först på /hogskoleprov/resultat/resultat/senaste/, som byts
  ut vid nästa prov; sedan flyttar UHR dem till /hogskoleprov/fpn/ (VT 2026:
  provfragor-facit-och-normering-varen-20262/). Byt källänken i registret
  när provet har flyttat.
  Före HT 2012 publicerar studera.nu bara normeringstabeller.

## Svamp-Bob-temat (Otto)

- `src/lib/svampbob.ts` (konto och förhandsgranskning),
  `src/components/SvampBob.astro`, `public/svampbob/` (tema.css, tema.js,
  poser, skratt). Fullt tema på startsidan för kontot
  otto.oscar.seipel@gmail.com, lugn variant på övriga sidor via
  `src/layouts/Base.astro`. Förhandsgranskning: `/?svampbob=bikinibottom`
  (kaka i två timmar), `/?svampbob=av` stänger av.

## Uttalsverktyget

- Admin-sidan `/admin/uttal` väntar på att Jonas spelar in uttal. Nyckeln till
  ElevenLabs ligger utanför repot (på servern och i en lokal fil, inte i git);
  Jonas har rekommenderats att rotera den.

## Fokuserad träning på svagheter (/trana/fokus)

- Uppdrag, design och status: `docs/svaghetstraning/README.md` (designen i
  `design.md`, kartläggningen av koden i `kartlaggning.md`).
- Kod: `src/lib/fokus/` (frågebank med stabila id:n `test_id#num`, typer,
  styrkemodell, urval, historik, rekommendationer), `src/pages/api/fokus/`
  (`runda` ger frågor utan facit, `svar` rättar på servern och sparar
  händelsen), sidan `src/pages/trana/fokus.astro`, komponenten
  `src/components/Styrkekarta.astro`.
- Gemensam frågekomponent: `src/lib/fragor/render.ts` och
  `src/styles/fragor.css`, används av `/extra/[id]` och `/trana/fokus`.
- Databas: tabellen `question_events` (en rad per besvarad uppgift i
  träningen) skapas vid start i `src/lib/db.ts`. Provresultaten i
  `test_results` rörs inte utan räknas om till händelser i
  `src/lib/fokus/historik.ts`. Gäster får en osynlig gästsession vid första
  rundan (samma som ordträningen); vid inloggning på ett befintligt konto
  följer provresultat och händelser med (`migrateGuestToUser`).
- Ingångar: knappen "Träna fler av den här typen" på varje fel fråga i
  rättningen (extraproven och HT 2021-proven), länkar i analysblocket,
  styrkekartan på profilen, bannern på Träna-sidan.
- Test: `node verktyg/fokus/testa-modell.mjs` (modell, typer, urval utan
  databas) och `HP_SKARM_DIR=/tmp node verktyg/fokus/testa-fokus.mjs`
  (Playwright mot lokal server på 4321, mobilvy, hela flödet). Playwright
  finns globalt i webbmiljön; lokalt `npm i -D playwright` om det saknas.
- Parametrar att vrida på: `RUNDA` (frågor per runda), `TYP_ANDEL` (sju av
  tio i typläget), `MAX_PER_PASS`, `KONTROLL_DAGAR` och `SNABBKOLL`
  (snabbkollens sammansättning) i `urval.ts`; `HALVERINGSTID` (20 svar),
  `HALVERINGSTID_DAGAR` (90), `KALLVIKT_RUNDA` (0,7), `GRUPPTAK` (2),
  `PRIOR_A`, `PRIOR_B`, `PRIOR_TYP`, `MINSTA_ANTAL` (effektiva svar för att
  visa procent), `MINSTA_SAKRA_TYPER` (gaten för Mina svagheter),
  `MAL_STYRKA` och `MAL_STYRKA_SVART` i `styrka.ts`; `SEDD_DAGAR`,
  `REPETERA_DAGAR` och `OMFORSOK_TIMMAR` i `historik.ts`; `MINSTA_TYP`
  (golvet för små typer), `VIKT_UTAN_UNDERTYP` (ORD och LÄS) och
  `ANTAL_PER_PASS` (vikterna) i `fragebank.ts` och `typer.ts`. Poolen är
  extramaterialet; HT 2021 sparas till stegen (en rad i
  `src/pages/api/fokus/runda.ts`).
- Tabeller: `question_events` (händelser med `source` fokus, snabbkoll,
  overtid eller omforsok, plus `lage`, `runda_id`, `position`) och
  `fokus_rundor` (en rad per startad runda), båda skapas vid start.
- Provlöparna skapar en gästsession vid "Starta provet" (som ordträningen)
  så att resultatet sparas på servern och räknas i träningen även utan
  konto. Gäster ser "Resultat sparat! Skapa ett gratis konto ..." i stället
  för "sparat i ditt konto". Svar efter tiden ("Gör klart resten") postas
  till `/api/fokus/svar` med `lage: 'overtid'`.

## Idé från Jonas: stjärnmarkera uppgifter i provläget

Jonas vill kunna stjärnmarkera uppgifter under ett pass för att komma tillbaka
till dem om det finns tid över när alla 40 är gjorda, precis som man gör på
det riktiga provet. Skiss:

- En stjärnknapp bredvid uppgiftsnumret i provlöparen (`src/pages/extra/[id].astro`
  och HT 2021-proven i `src/pages/prov/*.astro`), tangentbord: `s`.
- Stjärnorna sparas i samma `hp-progress-<testId>` i localStorage som svaren,
  så de överlever "Fortsätt där du var".
- Prickraden längst ned (`.pq-dot`) och översikten (`.pq-ov-btn`) visar en
  liten stjärna på markerade uppgifter, och när användaren når sista frågan
  och trycker Nästa hoppar löparen till första stjärnmarkerade i stället för
  till fråga 1. Knappen "Rätta" visar "2 markerade kvar" som påminnelse.
- I rättningen listas stjärnmarkerade uppgifter först ("Uppgifter du ville
  titta mer på"), och de behåller markeringen så att de kan hittas i
  profilens granskningsläge (`?review=1`).
- Steg 2: låt stjärnorna bli en ingång till fokuserad träning på
  `/trana/fokus` ("Träna fler av den här typen").

## Huvudtestet (HT 2021): textförklaringar där video saknas

- Alla 140 svar i huvudtestet är kontrollerade mot UHR:s officiella facit (provpass 1, 2, 4 och 5, 24 oktober 2021). Inga avvikelser.
- 41 uppgifter saknar video: kvantitativt prov 2 (provpass 4) XYZ 8 och DTK 31 till 40, samt hela verbalt prov 2 (provpass 5). De har textförklaringar i `src/lib/forklaringar-ht2021.ts` (nyckel `delprov-nummer`, t.ex. `dtk2-31`).
- `questions-kvant2-ht2021.ts` och `questions-verbal2-ht2021.ts` lägger in texten som `explanation` på frågor utan `videoId`. Provsidornas genomgång visar video om den finns, annars texten. Fokuserad träning visar samma text via frågebanken.
- Spelar Jonas in en video senare räcker det att lägga till `videoId` på frågan: då visas videon i stället för texten.

## Spamskydd i forumet

- Bakgrund: från 10 oktober 2026 postade en bot omkring 1 800 engelska apotekstrådar med länkar, från ett nytt konto per tråd. Allt städades bort 14 oktober.
- Reglerna finns i `src/lib/forum-spamfilter.ts` (rena funktioner). Texten normaliseras först (osynliga tecken, accenter, kyrilliska look-alikes, "v1agra", "vi-agra", "BuyViagraOnline").
  - Varumärken för potensmedel stoppas alltid. Vanliga läkemedelsnamn (Strattera, propranolol, Zoloft ...) stoppas bara med en länk till en annan sajt (svenska vårdsajter som 1177.se och fass.se går bra) eller i engelsk text. Ord och fraser som "pharmacy", "casino", "payday" och "utan recept" stoppas bara med en länk. En svensk pluggare som nämner sin medicin eller citerar en ELF-text påverkas alltså inte.
  - "Okänd sajt" = inte .se, inte hpakuten.se och inte en känd pluggsajt (YouTube, Quizlet, Memrise, Reddit, Google Docs, Khan Academy, studera.nu m.fl., listan `KANDA_SAJTER`). Sajter där vem som helst kan lägga upp sidor (Google Docs, bloggar, `OPPNA_SAJTER`) ursäktar däremot inte spamord eller engelsk text.
  - Engelsk text med en länk till en okänd sajt stoppas, liksom länkmarkering (`<a href>`, `[url]`), länkar med användarnamn (`https://youtube.com@spam.com`) och domännamn skrivna för att inte se ut som länkar ("sajt .com", "sajt[.]com"). Engelsk text utan länk släpps igenom.
  - Konton som är nya i forumet (inget inlägg äldre än ett dygn och ingen annan aktivitet på sajten, eller kontot yngre än ett dygn) kan inte länka till okända sajter. Meddelandet visar vad som lästes som länk (ofta ett glömt mellanslag efter en punkt).
  - Användarnamn med länkar eller varumärken för potensmedel stoppas vid registrering. Vid Google-inloggning kortas för långa namn, och ett reklamnamn byts mot förnamnet (aldrig mot e-postadressen).
- `src/lib/forum-spam.ts` kontrollerar varje ny tråd och nytt svar. Ett stoppat inlägg får ett meddelande som säger vad som är fel, och texten finns kvar i formuläret (`src/lib/forum-utkast.ts`). Ett konto raderas direkt bara vid entydig spam (`arEntydigSpam`: spam tillsammans med en okänd länk) från ett konto yngre än ett dygn utan någon annan aktivitet; användaren får då ett meddelande och ser texten den skrev. Tempogränser: tre trådar per timme och åtta svar per tio minuter per konto. Nödbroms: när konton som är nya i forumet startat åtta trådar under en timme stoppas fler sådana trådar tillfälligt.
- Formulären för registrering, ny tråd och svar har dolda fält (`src/components/SpamSkydd.astro`): ett fält som bara botar fyller i, och tidpunkten då formuläret visades (tre sekunder för trådar, en sekund för svar).
- Städning (`stadaSpam`): rör bara inlägg från spamperioden (1 oktober till 14 oktober 2026 kl. 15.30) med en länk till en okänd sajt, skrivna av konton som skapades under perioden och inte av admin. Det som postats efter att filtret kom i drift bedöms aldrig om. Resultatet syns som ett meddelande på `/admin`.
- På `/admin` finns sektionen "Spamskydd i forumet" med de senaste stoppade försöken (inklusive namn och e-post på raderade konton). I en forumtråd har admin knappen "Radera kontot och allt det skrivit"; den vägrar för konton som också pluggat på sajten (de raderas via användarsökningen).
- Testa reglerna efter en ändring: `node --experimental-strip-types --no-warnings scripts/test-spamfilter.mjs` (exempel på riktiga inlägg som måste gå igenom och spam som måste stoppas).
- Ej gjort: begränsning av antal registreringar per IP-adress och signerad tidsstämpel i formulären. Behövs om en bot börjar registrera konton i förväg och låtsas plugga för att se etablerad ut.

## Hjärnkartan (spindeldiagram över delproven)

- Design: `docs/svaghetstraning/hjarnkarta.md`. Kod: `src/lib/fokus/hjarnkarta.ts`
  (data, regeln för Träna härnäst, före och efter ett pass, Ur det här provet,
  kallstart), `hjarnkarta-vy.ts` (ren rendering, används både på servern och i
  klienten, får inte importera frågedata), `hjarnkarta-klient.ts` (arket per
  delprov och animationerna), `src/components/Hjarnkarta.astro`,
  `src/styles/hjarnkarta.css` och `src/pages/api/fokus/karta.ts`
  (`?resultat=<id>` för före och efter i rättningen).
- Syns på /extra (kompakt kort med två spalter på dator), i rättningen efter
  varje extrapass (Så flyttade passet din karta, Träna härnäst, Ur det här
  provet), på /trana/fokus, på profilen och som banner på /trana.
- Regeln: delprov med minst 4 effektiva svar; pott = uppgifter per pass gånger
  avståndet till målet (85 %, NOG 75 %, MEK 83 %); störst pott vinner, och
  inom delprovet väljs en typ om den har minst 8 effektiva svar och ger minst
  0,5 rätt per pass. Förändringssiffror efter ett pass visas bara när de är
  säkra (osäkerheten räknas ur svarens vikter).
- Test: `node verktyg/fokus/testa-hjarnkarta.mjs` (enhetstester) och
  `testa-fokus.mjs` (Playwright, kopiera till en mapp där playwright kan
  importeras om det inte hittas från repot).
- Väntar: osäkerhetsspann på axlarna, hysteres för Träna härnäst, blandade
  rundor efter tre rundor på samma delprov, minikarta i kvittot efter en runda
  och samma kort i HT 2021-provens rättning (där finns analysblocket kvar, nu
  med delprovet i kategorinamnen).
