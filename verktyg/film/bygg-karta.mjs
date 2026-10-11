// Bygger sajtens egen ritkod för hjärnkartan (src/lib/fokus/hjarnkarta-vy.ts)
// till ett skript som filmen kan ladda: window.HK.ritaKarta, formSVG, ...
//   node verktyg/film/bygg-karta.mjs
import * as esbuild from 'esbuild';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const HERE = dirname(fileURLToPath(import.meta.url));
await esbuild.build({
  entryPoints: [join(HERE, '../../src/lib/fokus/hjarnkarta-vy.ts')],
  bundle: true, format: 'iife', globalName: 'HK', platform: 'browser',
  outfile: join(HERE, 'hjarnkarta-vy.js'), logLevel: 'error',
  banner: { js: '// Genererad av bygg-karta.mjs ur src/lib/fokus/hjarnkarta-vy.ts. Ändra inte för hand.' },
});
console.log('hjarnkarta-vy.js byggd');

// Kartdatan från den lokala servern (fångad av fanga.mjs) blir data.js.
import { readFileSync, writeFileSync } from 'node:fs';
const fore = JSON.parse(readFileSync(join(HERE, 'bilder/karta-fore.json'), 'utf8'));
const efter = JSON.parse(readFileSync(join(HERE, 'bilder/karta-efter.json'), 'utf8'));
const mek = d => d.axlar.find(a => a.delprov === 'mek').styrka;
const data = { kartaFore: fore, kartaEfter: efter, mekFore: mek(fore), mekEfter: mek(efter) };
writeFileSync(join(HERE, 'data.js'), '// Genererad av bygg-karta.mjs ur bilder/karta-*.json.\nwindow.FILMDATA = ' + JSON.stringify(data) + ';\n');
console.log('data.js skriven: MEK', data.mekFore.toFixed(3), '->', data.mekEfter.toFixed(3), 'vinnare efter', efter.vinnare);
