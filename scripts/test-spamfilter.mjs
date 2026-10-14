// Testar forumets spamfilter (src/lib/forum-spamfilter.ts) mot exempel på
// riktiga inlägg som måste gå igenom och spam som måste stoppas.
// Kör: node --experimental-strip-types --no-warnings scripts/test-spamfilter.mjs
import { spamOrsak, arEntydigSpam, namnArSpam, namnArReklam } from '../src/lib/forum-spamfilter.ts';

let fel = 0;
const kolla = (ok, msg) => { if (!ok) { fel++; console.log('FEL', msg); } };

// [text, väntat för etablerat konto, väntat för nytt konto, raderas ett nytt konto?]
const SL = 'spamord_lank';
const fall = [
  // korta svar och medicin på svenska
  ['Strattera', null, null, false],
  ['Xanax lol', null, null, false],
  ['Concerta eller Strattera?', null, null, false],
  ['Propranolol mot provangest, nagon som testat?', null, null, false],
  ['Zoloft + HP = katastrof 💀', null, null, false],
  ['Jag tar zoloft mot ångest, någon som vet om det påverkar provet?', null, null, false],
  ['Propranolol hjälpte mig, läs på https://www.1177.se/behandling', null, null, false],
  ['Propranolol hjälpte mig mot nervositeten, läs https://www.healthline.com/health/propranolol', SL, SL, false],
  ['Propranolol funkar for mig. Info: https://www.healthline.com/health/propranolol-for-anxiety', SL, SL, false],
  ['Tar Strattera sedan i våras, läs om det på https://www.1177.se.', null, null, false],
  ['Propranolol? Kolla https://www.fass.se!', null, null, false],
  ['Lyrica mot ångest funkar för mig (läs mer på https://www.fass.se).', null, null, false],
  ['Min utredning gjordes på https://www.psykiatrispecialisten.se/adhd', null, null, false],
  // ELF och spel
  ['ELF 2024 text 2 sammanfattning\n"In the face of political impotence, many voters turned to local initiatives." Vad betyder impotence här?', null, null, false],
  ['Vad betyder "pharmacy" i engelska ord-delen? Är det apotek?', null, null, false],
  ['Lägger mer tid på Payday 2 än HP-plugg 💀', null, null, false],
  ['Payday 2 > HP', null, null, false],
  ['Payday 2 är kul men plugga på https://www.hpakuten.se.', null, null, false],
  ['Texten om Las Vegas och casinos var helt sjuk', null, null, false],
  ['ELF fraga 32: "What does the author suggest about the future of renewable energy in the region?" Varfor ar svaret C och inte A?', null, null, false],
  ['Kan nagon forklara denna? "It is the responsibility of the government to ensure that the citizens have access to clean water" https://docs.google.com/document/d/1AbCdEf/edit', null, null, false],
  ["Kan nagon forklara 'The author implies that the reform was doomed from the start'? https://prnt.sc/abc", null, null, false],
  ['ELF-fråga\nThe pharmacy industry has long been criticised for its pricing, and many patients cannot afford the treatment they need. Vad menas med sista meningen? Texten finns här: https://www.theatlantic.com/health/archive/2019/05/drug-prices/', null, null, false],
  ['Tips for ELF: las fragorna forst, sen texten. Funkar for mig, just testa!', null, null, false],
  ['ngl the ELF part was so hard this time, I only had time for like half of it', null, null, false],
  // länkdelning
  ['Bra appar: quizlet.com, memrise.com', null, null, false],
  ['Kolla reddit.com/r/sweden och reddit.com/r/hogskoleprovet', null, null, false],
  ['Tips: https://youtube.com/watch?v=abc123 https://youtube.com/watch?v=def456', null, null, false],
  ['Ordlistor\nKolla memrise.com/course/751065 och quizlet.com/sv/hp-ord', null, null, false],
  ['Kolla https://www.uhr.se/hogskoleprovet och https://www.studera.nu/ så hittar du allt om provet', null, null, false],
  ['https://community-courses.memrise.com/community/course/751065/hp-ultimat-8500-ord/', null, null, false],
  ['Jag pluggar ord på https://quizlet.com.', null, null, false],
  ['Markdown-van: [link](https://quizlet.com/se/123/hp-ord) har ar mina kort', null, null, false],
  ['Kolla [link](https://prnt.sc/abc)', null, null, false],
  ['Jag hittade en lista här https://ordlistan.example.org/hp som är bra', null, 'ny_lank', false],
  ['Hittade en bra pluggsida med regnljud: https://www.ambient-mixer.com/', null, 'ny_lank', false],
  ['Maila mig på lisa.h@gmail.com så skickar jag mina anteckningar', null, null, false],
  ['Jag fick inget mejl till min hotmail.com adress', null, null, false],
  ['Skrev det digitala provet.Info om resultatet kommer i november tydligen', null, null, false],
  ['Det gick bra.nu väntar jag på resultatet', null, null, false],
  ['Provet är i augusti.ca 2h per pass', null, null, false],
  ['Kan vi gora det imorgon?', null, null, false],
  ['Kolla hpakuten.se/ovningsuppgifter och https://www.hpakuten.se/minnestekniker', null, null, false],
  ['Is there any English version of the test? I found this on the uhr site but it is unclear: https://www.uhr.se/en/start/', null, null, false],
  ['NOG-uppgift 12 HT 2021, varför blir svaret D?', null, null, false],
  ['Tack!', null, null, false],
  // spam
  ['Köp viagra billigt här', 'spamord', 'spamord', false],
  ['Köp viagra billigt på https://cheap-meds.example.com/v', 'spamord', 'spamord', true],
  ['should you consider ozempic for weight loss', 'spamord', 'spamord', false],
  ['Köp ozempic billigt utan recept https://american-longevity.com/drug/ozempic/', SL, SL, false],
  ['Acheter ozempic en ligne sans ordonnance https://american-longevity.com/x https://wellnowuc.com/y', SL, SL, false],
  ['Now you can buy ozempic with ease. Visit american-longevity.health/ozempic for your order today. Mvh Björn', SL, SL, true],
  ['Bästa casinon utan svensk licens finns på casinoutanlicens.nu idag', null, null, false],
  ['Bästa casinon utan svensk licens finns på https://casinoutanlicens.nu idag', 'spamord', 'spamord', true],
  ['Casino utan svensk licens 2026, bästa listan: https://spelautanlicens.se', SL, SL, false],
  ['Köp Ozempic utan recept, diskret leverans: https://medsverige.blogg.se', SL, SL, false],
  ['Köpa tramadol online utan recept, diskret leverans: MedSverige.Net/tramadol', SL, SL, false],
  ['Best online pharmacy for weight loss, no prescription needed. Order today: https://docs.google.com/document/d/1xYz/edit', SL, SL, false],
  ['Buy ozempic here https://info@american-longevity.com/drug/ozempic/', SL, SL, true],
  ['Kolla https://www.youtube.com@rx-longevity.com/drug/ozempic', SL, SL, true],
  ['Nice site https://u@spam.xyz/x', 'lankkod', 'lankkod', true],
  ['Looking for a trusted online store? Visit Rx-Longevity.Com', 'engelska_lank', 'ny_lank', false],
  ['buy vi\u00ADagra online https://x-meds.com', 'spamord', 'spamord', true],
  ['buy vi\u0430gra online https://x-meds.com', 'spamord', 'spamord', true],
  ['buy vi-agra online https://x-meds.com', 'spamord', 'spamord', true],
  ['buy vi\u2011agra online https://x-meds.com', 'spamord', 'spamord', true],
  ['Buy v1agra online https://rx-cheap.com/x', 'spamord', 'spamord', true],
  ['BuyViagraOnline https://rx-cheap.com/x', 'spamord', 'spamord', true],
  ['viagra100mg cheap https://rx-cheap.com/x', 'spamord', 'spamord', true],
  ['Buy vi\u00E1gra online https://rx-cheap.com/x', 'spamord', 'spamord', true],
  ['Buy ozempic hxxps://rx-longevity.com/x', SL, SL, false],
  ['Cheap ozempic for you here bit.ly/abc123 order now', SL, SL, true],
  ['kolla bit.ly/abc123', null, 'ny_lank', false],
  ["To quantifying iatrogenic, nines meconium, many.\nhttps://aaqxidivhs.com/r/c4b2/1000/post-u - Utonovgal <a href='https://aaqxidivhs.com/r/c4b2/1000/post-a'>Likape</a>  https://aaqxidivhs.com/r/c4b2/1000/post-t", 'lankkod', 'lankkod', true],
  ['Gibberish words here https://a-spam.com/x and https://b-spam.com/y', null, 'ny_lank', false],
  ['Nice site https://spam.xyz', null, 'ny_lank', false],
  ['Kolla in apoteket-billigt.se/ozempic för bra priser. Mvh', SL, SL, false],
  ['Bra sidor: https://www.vocabulary.com, https://www.duolingo.com', null, null, false],
  ['Payday 2 for 15 kr https://store.steampowered.com/app/218620', null, null, false],
  ['Kolla https://www.paydaythegame.com', null, 'ny_lank', false],
  ['Kolla www.principrotokoll.se', null, null, false],
  ['[url]https://www.uhr.se[/url]', null, null, false],
  ['Kolla [link] https://www.canva.com/x', null, null, false],
  ['Under dot com-bubblan kraschade allt, och .com-eran tog slut', null, null, false],
  ['Melatonin finns utan recept, mer på https://www.1177.se/somn', null, null, false],
  ['Snabblån utan UC, pengarna på kontot direkt: https://lanutanuc.se', 'spamord', 'spamord', false],
  ['Köp Xanax utan recept, snabb leverans i hela Sverige. Beställ på https://xanaxsverige-leverans.se/bestall', 'spamord', 'spamord', false],
  ['how you can get flomax via the web , offering\nEnquiring if american-longevity .com/product/lowest-price-ozempic/  might relieve dizziness symptoms?\nHälsningar', SL, SL, true],
  ['Billig ozempic på rx-longevity[.]com/oz', SL, SL, true],
  ['Kolla rx-longevity[.]com/x', 'lankkod', 'lankkod', false],
  ['Buy v\u00EFagra online https://rx-cheap.com/x', 'spamord', 'spamord', true],
  ['Buy vi/agra online https://rx-cheap.com/x', 'spamord', 'spamord', true],
  ['Buy viagras online https://rx-cheap.com/x', 'spamord', 'spamord', true],
  ['kolla x.com/rxmeds', null, 'ny_lank', false],
  ['kolla _rx-longevity.com_', null, 'ny_lank', false],
];
for (const [t, ve, vn, ent] of fall) {
  const re = spamOrsak(t), rn = spamOrsak(t, { nyttKonto: true }), e = arEntydigSpam(t);
  kolla(re === ve && rn === vn && e === ent, `väntat ${ve}/${vn}/${ent}, fick ${re}/${rn}/${e}: ${JSON.stringify(t.slice(0, 100))}`);
}

// Namn: [namn, stoppas vid registrering, stoppas för befintligt konto]
for (const [n, reg, bef] of [
  ['Jonas von Essen', false, false], ['Lisa', false, false], ['Lyrica Andersson', false, false], ['payday_gamer', false, false],
  ['ozempistore65', false, false], ['Köp ozempic billigt american-longevity.com/drug/ozempic', true, false],
  ['Buy Viagra', true, true], ['x'.repeat(41), true, false], ['RxLongevity.Com', true, false], ['BUYMEDS.NET', true, false],
  ['buy-ozempic.com', true, true], ['https://x.com', true, true], ['anna.se', true, false],
]) {
  kolla(namnArSpam(n) === reg, `namnArSpam ${n}: väntat ${reg}`);
  kolla(namnArReklam(n) === bef, `namnArReklam ${n}: väntat ${bef}`);
}
console.log(fel ? `${fel} fel` : `Alla ${fall.length} fall och namnen OK`);
process.exit(fel ? 1 : 0);
