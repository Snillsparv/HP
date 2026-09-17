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
  lösningar. Kontroll av alla 26 prov mot facit-PDF:erna:
  `python3 verktyg/extraprov/kolla_facit_alla.py` (laddar ned facit till
  `~/.cache/hp-facit` vid behov, senast "ALLT OK" för 3 640 uppgifter).
- Övriga verktyg i `verktyg/extraprov/`: `validera-tex.mjs <filer>` (KaTeX),
  `testa-pass.mjs <passid...>` (Playwright mot lokal server på 4321:
  klickar igenom alla frågor, kollar bilder och förklaringar),
  `prep_prov.py <utkatalog> <provsida-url> [<normsida-url>]` (laddar ned PDF:er,
  renderar sidor, dumpar text, tolkar normering).
- Serien är komplett: HT 2012 till HT 2025 utom HT 2021 (sajtens
  huvudmaterial) och VT 2016 (UHR har ingen provfrågesida). Före HT 2012
  publicerar studera.nu bara normeringstabeller.

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
- Parametrar att vrida på: `RUNDA` (frågor per runda), `MAX_PER_PASS` och
  `SNABBKOLL` (snabbkollens sammansättning) i `urval.ts`; `HALVERINGSTID`
  (svar), `HALVERINGSTID_DAGAR`, `PRIOR_A`, `PRIOR_B`, `MINSTA_ANTAL`
  (effektiva svar för att visa procent), `MINSTA_SVAR_SVAGHETER` och
  `MAL_STYRKA` i `styrka.ts`; `SEDD_DAGAR`, `REPETERA_DAGAR` och
  `OMFORSOK_TIMMAR` i `historik.ts`; `MINSTA_TYP` (golvet för små typer) och
  `ANTAL_PER_PASS` (vikterna) i `fragebank.ts` och `typer.ts`. Poolen är
  extramaterialet; HT 2021 sparas till stegen (en rad i
  `src/pages/api/fokus/runda.ts`).
- Provlöparna skapar en gästsession vid "Starta provet" (som ordträningen)
  så att resultatet sparas på servern och räknas i träningen även utan
  konto. Gäster ser "Resultat sparat! Skapa ett gratis konto ..." i stället
  för "sparat i ditt konto".
