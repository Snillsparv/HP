import katex from 'katex';
import fs from 'node:fs';
const filer = process.argv.slice(2);
let n = 0, fel = 0;
for (const f of filer) {
  const src = fs.readFileSync(f, 'utf8');
  const re = /tex\('((?:[^'\\]|\\.)*)'\)/g;
  let m;
  while ((m = re.exec(src))) {
    const s = m[1].replace(/\\\\/g, '\\').replace(/\\'/g, "'");
    n++;
    try { katex.renderToString(s, { throwOnError: true, strict: 'warn' }); }
    catch (e) { fel++; console.log(`${f}: ${s}\n   ${e.message}`); }
  }
}
console.log(`${n} uttryck, ${fel} fel`);
