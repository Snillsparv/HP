export const meta = {
  name: 'designa-svaghetstraning',
  description: 'Kartlägg HPAkutens data och flöden, ta fram fyra oberoende designer för fokuserad träning på svagheter, bedöm, syntetisera och granska',
  phases: [
    { title: 'Kartlägg', detail: 'fyra parallella läsare över frågedata, träningsflöden, resultatdata och strategiinnehåll' },
    { title: 'Designa', detail: 'fyra oberoende designers med olika utgångspunkt' },
    { title: 'Bedöm', detail: 'tre domare poängsätter alla förslag' },
    { title: 'Syntes', detail: 'ett slutförslag byggt på vinnaren med de bästa idéerna från övriga' },
    { title: 'Granska', detail: 'tre kritiker med olika lins, sedan revidering' },
  ],
}

const REPO = '/home/user/HP'
const REGLER = `Skriv på svenska. Använd aldrig tankstreck (varken – eller —) i löptext; skriv om meningen eller använd komma, kolon eller punkt. Var konkret och håll dig till fakta du faktiskt sett i koden när du beskriver nuläget.`

// ---------- Fas 1: Kartlägg ----------
phase('Kartlägg')

const KARTA_SCHEMA = {
  type: 'object',
  properties: {
    sammanfattning: { type: 'string', description: 'Sammanfattning i markdown, 400 till 900 ord, med filnamn och radhänvisningar' },
    fakta: { type: 'array', items: { type: 'string' }, description: 'Punktlista med verifierade fakta (varje punkt med filnamn)' },
    luckor: { type: 'array', items: { type: 'string' }, description: 'Vad som saknas i data eller kod för att bygga fokuserad träning' },
    mojligheter: { type: 'array', items: { type: 'string' }, description: 'Konkreta möjligheter designen kan bygga vidare på' },
  },
  required: ['sammanfattning', 'fakta', 'luckor', 'mojligheter'],
}

const lasare = [
  {
    key: 'fragedata',
    prompt: `Du kartlägger frågedata och kategoritaxonomi i repot ${REPO} (Astro-sajt för högskoleprovsträning, hpakuten.se).
Läs: src/lib/extraprov/types.ts, src/lib/extraprov/register.ts, ett par datafiler under src/lib/extraprov/data/ (t.ex. ht2012-1.ts som är kvantitativt och ht2012-2.ts som är verbalt), samt huvudmaterialet src/lib/questions-ht2021.ts, questions-kvant2-ht2021.ts, questions-verbal-ht2021.ts, questions-verbal2-ht2021.ts. Räkna med grep hur många frågor som finns per delprov (XYZ, KVA, NOG, DTK, ORD, LÄS, MEK) och per kategori (fältet category) i extraprov-data och i huvudmaterialet. Notera vilka metadata som finns per fråga (category, figur, diagram, textIndex, q1/q2, s1/s2, options, explanation), hur DTK-frågor hänger ihop med ett gemensamt diagram och LÄS-frågor med en gemensam text, och att verbala frågor saknar finare kategori. Fundera på vilka finare undertyper som skulle gå att härleda automatiskt ur befintlig data (t.ex. antal luckor i MEK, ordklass, LÄS-frågans frågetyp, diagramtyp i DTK, om KVA-frågan innehåller figur) och vilka som skulle kräva manuell taggning. ${REGLER}`,
  },
  {
    key: 'floden',
    prompt: `Du kartlägger befintliga tränings- och provflöden i repot ${REPO} (Astro-sajt hpakuten.se). Läs: src/pages/trana.astro (stegen), src/pages/delprov/index.astro och ett par av src/pages/delprov/*.astro, src/pages/prov/kvant-ht2021.astro och src/pages/prov/xyz-ht2021.astro (provlöparna för huvudmaterialet), src/pages/extra/index.astro och src/pages/extra/[id].astro (extraprovens provlöpare med timer, rättning, förklaringar, övertid), src/pages/ovningsuppgifter.astro och src/pages/ovning.astro, src/lib/analysis.ts (analys av resultat per delprov och kategori, rekommendationer), src/lib/share-image.ts, src/layouts/Base.astro (navigering). Beskriv hur en fråga renderas (KVA-par, NOG-påståenden, DTK-diagram, LÄS-text), hur rättning och förklaringar visas, vilka UI-komponenter och stilar som går att återanvända, vad analysis.ts redan gör med kategorier, och hur navigeringen ser ut. Notera vad som är kod som kan brytas ut till en gemensam frågekomponent. ${REGLER}`,
  },
  {
    key: 'resultat',
    prompt: `Du kartlägger resultat- och användardata i repot ${REPO} (Astro-sajt hpakuten.se, Postgres). Läs: src/lib/db.ts (alla tabeller och migreringar), src/pages/api/test/results.ts (hur resultat sparas och hämtas, formatet på answers), src/pages/konto/profil.astro (vad profilen visar, hur bästa resultat räknas), src/lib/auth.ts (gästkonton, sessioner), src/pages/api/ordtraning.ts och tabellen word_progress i db.ts (Leitner-baserad repetition för ordträningen: intervall, lådor, streak, dagsaktivitet learn_activity), src/pages/ord.astro översiktligt, samt hur localStorage används i src/pages/extra/[id].astro (nycklarna hp-results och hp-progress). Svara på: vilken data finns redan som kan användas för att räkna ut en användares svagheter per delprov och kategori (svar per fråga finns som index-array per prov), hur en fråga kan identifieras stabilt över tid, vad som saknas (t.ex. per-fråga-händelser med tidsstämpel, tid per fråga), och vilka mönster från ordträningens repetitionsmotor som kan återanvändas för uppgiftsträning. ${REGLER}`,
  },
  {
    key: 'strategier',
    prompt: `Du kartlägger vilket strategi- och undervisningsinnehåll som finns i repot ${REPO} (Astro-sajt hpakuten.se, Jonas von Essens HP-träning). Läs: src/pages/delprov/*.astro (en sida per delprov XYZ, KVA, NOG, DTK, ORD, LÄS, MEK, ELF med strategier och videor), src/pages/snabbguiden.astro, src/pages/minnestekniker.astro, src/pages/ovningsuppgifter.astro och src/lib/exercises*.ts (matterepetition: vilka matteområden finns och hur de är strukturerade), samt src/pages/trana.astro. Sammanställ per delprov: vilka strategier och videor som finns, vilka matteområden matterepetitionen täcker och hur de skulle kunna kopplas till frågekategorierna (algebra, geometri, procent, sannolikhet, funktioner, aritmetik, statistik, enheter, logik, diagram, tabell, karta). Målet är att designen ska kunna föreslå rätt genomgång när en användare visar sig svag på en viss typ. Notera också tonläget i sajtens texter (du-tilltal, Jonas som avsändare) så att designen kan matcha det. ${REGLER}`,
  },
]

const kartor = await parallel(lasare.map(l => () =>
  agent(l.prompt, { label: `kartlägg:${l.key}`, phase: 'Kartlägg', schema: KARTA_SCHEMA })
    .then(r => (r && r.sammanfattning) ? ({ key: l.key, ...r }) : null)
))
const kartaText = kartor.filter(Boolean).map(k => `## Kartläggning: ${k.key}\n\n${k.sammanfattning}\n\n### Fakta\n${(k.fakta || []).map(f => '- ' + f).join('\n')}\n\n### Luckor\n${(k.luckor || []).map(f => '- ' + f).join('\n')}\n\n### Möjligheter\n${(k.mojligheter || []).map(f => '- ' + f).join('\n')}`).join('\n\n')
log(`Kartläggning klar: ${kartor.filter(Boolean).length} av 4 läsare`)

// ---------- Fas 2: Designa ----------
phase('Designa')

const UPPDRAG = `UPPDRAGET FRÅN JONAS (sajtens ägare): "Nästa steg är att man ska kunna välja att träna på uppgifter av en viss typ. Dels varje delprov för sig (så slumpas uppgifterna bland alla som finns) men även mer specifikt. Det bästa vore att om man har fel på en viss uppgift så kan man sedan få träna på fler uppgifter av just den typen. Jag vill ha det ultimata och smartaste träningsverktyget som gör det så lätt som möjligt att fokusera specifikt på sina svagheter."

Sajten har 26 tidigare högskoleprov som extramaterial (3 640 uppgifter med textförklaringar och facit) plus huvudmaterialet HT 2021 med videoförklaringar. Kvantitativa uppgifter har kategori (algebra, geometri, procent, sannolikhet, funktioner, aritmetik, statistik, enheter, logik, diagram, tabell, karta), verbala saknar finare kategori. Resultat sparas per prov med svar per fråga. Det finns en Leitner-baserad ordträning.`

const DESIGN_SCHEMA = {
  type: 'object',
  properties: {
    namn: { type: 'string', description: 'Kort namn på förslaget' },
    karnide: { type: 'string', description: 'Kärnidén i 3 till 6 meningar' },
    taxonomi: { type: 'string', description: 'Markdown: hur uppgifter typas per delprov (typer och undertyper), vad som härleds automatiskt, vad som taggas manuellt, hur det hanteras att verbala saknar kategori' },
    svaghetsmodell: { type: 'string', description: 'Markdown: hur svagheter räknas ut per typ (formel eller regler), kallstart, hur gamla resultat viktas, hur rätt-efter-fel hanteras, hur säkerhet i skattningen visas' },
    urval: { type: 'string', description: 'Markdown: algoritmen för att välja nästa uppgift (slump inom delprov, fokus på typ, blandning, undvika repetition av sedda uppgifter, DTK-grupper och LÄS-texter som hänger ihop, tidsgränser)' },
    floden: { type: 'string', description: 'Markdown: användarflöden steg för steg, inklusive vägen från ett fel svar i ett provresultat till träning på just den typen, ingångar från Träna-sidan, profilen och navigeringen' },
    skarmar: { type: 'string', description: 'Markdown: skärmar och komponenter med skisser i text, mobilanpassning, vad som visas under och efter en träningsrunda' },
    datamodell: { type: 'string', description: 'Markdown: nya eller ändrade tabeller, API-endpoints, localStorage för gäster, stabila fråge-id:n' },
    mvp: { type: 'string', description: 'Markdown: vad som byggs först (MVP), sedan steg 2 och 3, med uppskattad omfattning' },
    risker: { type: 'string', description: 'Markdown: risker och hur de hanteras' },
  },
  required: ['namn', 'karnide', 'taxonomi', 'svaghetsmodell', 'urval', 'floden', 'skarmar', 'datamodell', 'mvp', 'risker'],
}

const linser = [
  { key: 'inlarning', lins: 'INLÄRNINGSVETENSKAP OCH ADAPTIVITET FÖRST. Utgå från forskning om deliberate practice, spaced repetition, interleaving, mastery learning och felanalys. Prioritera att verktyget faktiskt gör användaren bättre snabbast, inte bara känns smart. Var explicit med algoritmer.' },
  { key: 'enkelhet', lins: 'ENKELHET OCH UX FÖRST. Utgå från att användaren är en stressad gymnasist på mobilen som har tio minuter. Målet är att det aldrig ska vara mer än ett tryck bort att träna på det man är dålig på. Minimera val, inställningar och sidor. Beskriv exakta knappar och texter i Jonas ton.' },
  { key: 'pragmatik', lins: 'INGENJÖRSMÄSSIG PRAGMATIK FÖRST. Utgå från befintlig kod, datamodell och provlöparen i src/pages/extra/[id].astro. Designa något som kan byggas i små leveranser och vara live inom några dagar, med minimal risk för befintliga flöden, men som ändå skalar till det fullständiga verktyget. Var konkret om vilka filer som ändras och vilka som återanvänds.' },
  { key: 'motivation', lins: 'MOTIVATION OCH LÅNGSIKTIGT ENGAGEMANG FÖRST. Utgå från vad som får en användare att komma tillbaka varje dag fram till provdagen: synliga framsteg per typ, mål kopplade till normerad poäng, streaks och dagsrutin som ordträningen redan har, men utan att bli barnsligt. Designen ska göra svagheter till något roligt att beta av.' },
]

const designer = await parallel(linser.map((l, i) => () =>
  agent(`${UPPDRAG}

Du är designer ${i + 1} av fyra oberoende designers. Din utgångspunkt: ${l.lins}

Här är kartläggningen av nuläget i koden (gjord av andra agenter, med filhänvisningar). Du får själv läsa filer i ${REPO} för att kontrollera detaljer.

${kartaText}

Ta fram ett komplett, genomtänkt designförslag för "fokuserad träning på svagheter" enligt schemat. Kraven från Jonas ska uppfyllas: träna slumpat per delprov, träna specifikt per uppgiftstyp, och från ett fel svar kunna gå direkt till fler uppgifter av samma typ. Var konkret: algoritmer med formler eller pseudokod, exakta flöden, knapptexter, datamodell. Tänk på begränsningarna: DTK-frågor delar diagram, LÄS-frågor delar text, verbala saknar finare kategori, ELF saknas helt, gäster utan konto har bara localStorage, KaTeX-formler och figurer i frågorna. ${REGLER}`,
    { label: `design:${l.key}`, phase: 'Designa', schema: DESIGN_SCHEMA, effort: 'high' })
    .then(d => d && ({ key: l.key, ...d }))
))
const giltiga = designer.filter(Boolean)
log(`${giltiga.length} designförslag klara`)

function designTillText(d) {
  return `# Förslag "${d.namn}" (lins: ${d.key})\n\n## Kärnidé\n${d.karnide}\n\n## Taxonomi\n${d.taxonomi}\n\n## Svaghetsmodell\n${d.svaghetsmodell}\n\n## Urval av nästa uppgift\n${d.urval}\n\n## Flöden\n${d.floden}\n\n## Skärmar\n${d.skarmar}\n\n## Datamodell och API\n${d.datamodell}\n\n## MVP och steg\n${d.mvp}\n\n## Risker\n${d.risker}`
}
const allaDesigner = giltiga.map(designTillText).join('\n\n---\n\n')

// ---------- Fas 3: Bedöm ----------
phase('Bedöm')

const BEDOMNING_SCHEMA = {
  type: 'object',
  properties: {
    poang: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          namn: { type: 'string' },
          fokusPaSvagheter: { type: 'number', description: '1 till 10: hur lätt blir det att fokusera på sina svagheter' },
          smarthet: { type: 'number', description: '1 till 10: hur pedagogiskt smart och adaptivt' },
          enkelhet: { type: 'number', description: '1 till 10: hur enkelt och tydligt för användaren, särskilt på mobil' },
          genomforbarhet: { type: 'number', description: '1 till 10: hur väl det passar befintlig kod och data och hur snabbt det kan byggas' },
          motivering: { type: 'string' },
        },
        required: ['namn', 'fokusPaSvagheter', 'smarthet', 'enkelhet', 'genomforbarhet', 'motivering'],
      },
    },
    vinnare: { type: 'string' },
    bastaIdeer: { type: 'array', items: { type: 'string' }, description: 'De bästa enskilda idéerna från förslag som inte vann, som bör ympas in i slutförslaget' },
    varningar: { type: 'array', items: { type: 'string' }, description: 'Saker som är dåliga idéer i något förslag och bör undvikas' },
  },
  required: ['poang', 'vinnare', 'bastaIdeer', 'varningar'],
}

const domarlinser = [
  'Du representerar användaren: en gymnasist som ska skriva högskoleprovet om sex veckor och vill höja sig från 1,2 till 1,6. Väg tyngst hur snabbt och tydligt hen kan hitta och träna på sina svagheter.',
  'Du är expert på lärande och testpsykometri. Väg tyngst om svaghetsmodellen och urvalet är sunda (för små stickprov, kallstart, interleaving kontra blockad övning, transfer till riktiga provet) och om designen undviker falsk precision.',
  'Du är teknisk ledare för sajten och känner koden. Läs gärna filer i ' + REPO + ' för att kontrollera påståenden. Väg tyngst genomförbarhet, återanvändning, risk för befintliga flöden och att MVP:n är verkligt liten men växer rätt.',
]

const bedomningar = await parallel(domarlinser.map((lins, i) => () =>
  agent(`${UPPDRAG}

${lins}

Här är ${giltiga.length} oberoende designförslag. Poängsätt varje förslag 1 till 10 på fyra kriterier med motivering, utse en vinnare, lista de bästa idéerna från övriga förslag som bör ympas in, och varna för dåliga idéer. ${REGLER}

${allaDesigner}`,
    { label: `domare:${i + 1}`, phase: 'Bedöm', schema: BEDOMNING_SCHEMA, effort: 'high' })
))
const domar = bedomningar.filter(Boolean)
const totals = {}
for (const b of domar) for (const p of b.poang) {
  totals[p.namn] = (totals[p.namn] || 0) + p.fokusPaSvagheter + p.smarthet + p.enkelhet + p.genomforbarhet
}
const rank = Object.entries(totals).sort((a, b) => b[1] - a[1])
log(`Bedömning klar. Rangordning: ${rank.map(([n, s]) => `${n} (${s})`).join(', ')}`)
const bedomningText = domar.map((b, i) => `## Domare ${i + 1}\nVinnare: ${b.vinnare}\n\n${b.poang.map(p => `- ${p.namn}: fokus ${p.fokusPaSvagheter}, smarthet ${p.smarthet}, enkelhet ${p.enkelhet}, genomförbarhet ${p.genomforbarhet}. ${p.motivering}`).join('\n')}\n\nBästa idéer att ympa in:\n${b.bastaIdeer.map(x => '- ' + x).join('\n')}\n\nVarningar:\n${b.varningar.map(x => '- ' + x).join('\n')}`).join('\n\n')

// ---------- Fas 4: Syntes ----------
phase('Syntes')

const SYNTESINSTRUKTION = `Skriv ett komplett designdokument i markdown på svenska (2 000 till 3 500 ord) med rubrikerna:
1. Sammanfattning (vad användaren får, i fem meningar)
2. Principer (5 till 7 designprinciper)
3. Uppgiftstyper: taxonomin per delprov, vad som härleds automatiskt ur data och vad som taggas, med ungefärligt antal uppgifter per typ där det är känt
4. Svaghetsmodellen: exakt hur styrka per typ räknas (formel eller pseudokod), kallstart, viktning över tid, hur osäkerhet visas
5. Urvalsalgoritmen: hur nästa uppgift väljs i de tre lägena (delprov slumpat, vald typ, fokus på svagheter), hur DTK-diagram och LÄS-texter grupperas, hur repetition av sedda uppgifter undviks
6. Flöden: steg för steg, inklusive "fel svar i provresultat, tryck, träna fler av samma typ", ingångar från Träna-sidan, profilen, extraproven och navigeringen
7. Skärmar och texter: varje skärm med innehåll och knapptexter i Jonas ton (du-tilltal), mobil först
8. Datamodell och API: tabeller, endpoints, localStorage för gäster, stabila fråge-id:n
9. Kopplingar till strategiinnehållet: hur svaga typer leder till rätt video eller matterepetition
10. Leveransplan: MVP (kan vara live på några dagar), steg 2, steg 3, med vad varje steg ger användaren
11. Öppna frågor till Jonas (max 5, bara sådant som verkligen kräver hans beslut)
Var konkret och beslutsam: välj, motivera kort, undvik "man skulle kunna". Använd tabeller där de hjälper.`

let syntes = await agent(`${UPPDRAG}

Du ska skriva slutförslaget. Rangordning efter tre domare (totalpoäng): ${rank.map(([n, s]) => `${n} ${s}`).join(', ')}. Bygg på vinnaren och ympa in de bästa idéerna från övriga enligt domarna, undvik det domarna varnat för. Du får läsa filer i ${REPO} för att kontrollera detaljer.

${SYNTESINSTRUKTION}
${REGLER}

# Kartläggning av nuläget
${kartaText}

# Designförslagen
${allaDesigner}

# Domarnas bedömningar
${bedomningText}`, { label: 'syntes', phase: 'Syntes', effort: 'high' })
log('Slutförslag skrivet, går till granskning')

// ---------- Fas 5: Granska ----------
phase('Granska')

const KRITIK_SCHEMA = {
  type: 'object',
  properties: {
    problem: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          allvar: { type: 'string', enum: ['hög', 'medel', 'låg'] },
          avsnitt: { type: 'string' },
          beskrivning: { type: 'string' },
          forslag: { type: 'string', description: 'Konkret ändring som löser problemet' },
        },
        required: ['allvar', 'avsnitt', 'beskrivning', 'forslag'],
      },
    },
    saknas: { type: 'array', items: { type: 'string' }, description: 'Saker uppdraget kräver som dokumentet inte täcker' },
  },
  required: ['problem', 'saknas'],
}

const kritiker = [
  { key: 'kod', lins: `Du är kritisk teknisk granskare. Läs koden i ${REPO} (särskilt src/pages/extra/[id].astro, src/lib/extraprov/types.ts, src/lib/extraprov/register.ts, src/lib/db.ts, src/pages/api/test/results.ts, src/lib/analysis.ts) och kontrollera varje påstående om nuläget och varje teknisk lösning i dokumentet. Hitta det som inte stämmer, inte går att bygga som beskrivet, eller skulle bryta befintliga flöden. Kontrollera särskilt stabila fråge-id:n, hur DTK-grupper och LÄS-texter hanteras, gäster utan konto, och att MVP:n verkligen är liten.` },
  { key: 'pedagogik', lins: `Du är kritisk granskare med expertis i lärande och psykometri. Hitta ställen där svaghetsmodellen ger falsk precision (för få svar per typ), där urvalet kan ge sämre lärande (för mycket blockad övning, ingen interleaving, ingen retention över tid), där typindelningen är för grov eller för fin för att vara användbar, och där kopplingen fel svar till träning riskerar att bara drilla samma sak. Föreslå konkreta förbättringar.` },
  { key: 'ux', lins: `Du är kritisk UX-granskare med fokus på mobil och på att verktyget ska vara löjligt enkelt. Hitta överflödiga val, oklara texter, för många skärmar, ställen där användaren inte förstår vad som händer eller varför just den här uppgiften kom, och ställen där flödet från fel svar till träning har mer än ett tryck. Kontrollera att texterna följer sajtens ton (du-tilltal, Jonas som avsändare, inga tankstreck).` },
]

const kritik = await parallel(kritiker.map(k => () =>
  agent(`${UPPDRAG}

${k.lins}

Granska designdokumentet nedan. Returnera problem med allvar, avsnitt, beskrivning och konkret förslag, samt en lista över vad som saknas. Var skoningslös men konkret. ${REGLER}

${syntes}`, { label: `kritik:${k.key}`, phase: 'Granska', schema: KRITIK_SCHEMA, effort: 'high' })
    .then(r => r && ({ key: k.key, ...r }))
))
const kritikGiltig = kritik.filter(Boolean)
const antalProblem = kritikGiltig.reduce((n, k) => n + k.problem.length, 0)
log(`Granskning klar: ${antalProblem} problem och ${kritikGiltig.reduce((n, k) => n + k.saknas.length, 0)} saknade punkter`)
const kritikText = kritikGiltig.map(k => `## Kritik: ${k.key}\n${k.problem.map(p => `- [${p.allvar}] ${p.avsnitt}: ${p.beskrivning} Förslag: ${p.forslag}`).join('\n')}\n\nSaknas:\n${k.saknas.map(s => '- ' + s).join('\n')}`).join('\n\n')

const slutlig = await agent(`${UPPDRAG}

Du reviderar designdokumentet utifrån tre granskares kritik. Åtgärda alla problem med allvar hög och medel, och de låga där det är billigt. Lägg till det som saknas. Behåll strukturen med de elva rubrikerna och håll dokumentet på 2 000 till 3 500 ord. Om du avvisar en kritikpunkt, gör det tyst genom att inte ändra; skriv inga kommentarer om granskningen i dokumentet. Du får läsa filer i ${REPO} för att kontrollera detaljer. Returnera hela det reviderade dokumentet i markdown. ${REGLER}

# Kritik
${kritikText}

# Dokumentet
${syntes}`, { label: 'revidering', phase: 'Granska', effort: 'high' })

return {
  rangordning: rank,
  designer: giltiga.map(d => ({ key: d.key, namn: d.namn, karnide: d.karnide })),
  domare: domar.map(b => ({ vinnare: b.vinnare, bastaIdeer: b.bastaIdeer, varningar: b.varningar })),
  kritikAntal: antalProblem,
  kartlaggning: kartaText,
  slutligDesign: slutlig,
}