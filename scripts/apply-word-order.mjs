// Lägger tillbaka en ordning exporterad från /admin/minnesord i seed-filen, så
// att kureringen finns i koden och överlever även om databasen byggs om.
//
//   node scripts/apply-word-order.mjs minnesord-ordning.json
//
// Infilen är en JSON-array med orden i önskad ordning (knappen "Exportera
// ordning" i granskningsvyn laddar ner exakt den filen). Ord som saknas i
// exporten behåller sin inbördes ordning och hamnar sist.

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const here = path.dirname(fileURLToPath(import.meta.url));
const SEED = path.join(here, '..', 'src', 'lib', 'minnesord-seed.json');

const orderFile = process.argv[2];
if (!orderFile) {
  console.error('Användning: node scripts/apply-word-order.mjs <minnesord-ordning.json>');
  process.exit(1);
}

const order = JSON.parse(fs.readFileSync(orderFile, 'utf8'));
if (!Array.isArray(order) || order.some(w => typeof w !== 'string')) {
  console.error('Fel: filen måste vara en JSON-array med ord.');
  process.exit(1);
}

const seed = JSON.parse(fs.readFileSync(SEED, 'utf8'));
const rank = new Map(order.map((w, i) => [w.toLowerCase(), i]));

const known = seed.filter(w => rank.has(w.word.toLowerCase()));
const unknown = seed.filter(w => !rank.has(w.word.toLowerCase()));
known.sort((a, b) => rank.get(a.word.toLowerCase()) - rank.get(b.word.toLowerCase()));

const missing = order.filter(w => !seed.some(s => s.word.toLowerCase() === w.toLowerCase()));
console.log(`ord i seed: ${seed.length} | i exporten: ${order.length}`);
console.log(`sorterade: ${known.length} | utan plats i exporten (hamnar sist): ${unknown.length}`);
if (missing.length) console.log(`fanns i exporten men inte i seed (ignoreras): ${missing.length}`);

const next = [...known, ...unknown];
if (next.length !== seed.length) {
  console.error('AVBRYTER: antalet ord ändrades, något är fel.');
  process.exit(1);
}

fs.writeFileSync(SEED, JSON.stringify(next));
console.log('Seed skriven. Första fem:', next.slice(0, 5).map(w => w.word).join(', '));
console.log('Kom ihåg: befintliga databaser behåller sin egen ordning, seed styr bara nya.');
