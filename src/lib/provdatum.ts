// Provdatum för högskoleprovet. Fastställda datum enligt UHR; listan fylls på
// när nya datum publiceras. Löper listan ut gissar vi på mitten av april
// respektive mitten av oktober och märker datumet som preliminärt.

export type Provdatum = { date: string; label: string; prel: boolean };

const KNOWN = ['2026-10-18', '2027-04-10', '2027-10-24'];

const MONTHS = ['januari', 'februari', 'mars', 'april', 'maj', 'juni',
  'juli', 'augusti', 'september', 'oktober', 'november', 'december'];

function label(iso: string, now: Date): string {
  const [y, m, d] = iso.split('-').map(Number);
  const text = `${d} ${MONTHS[m - 1]}`;
  return y === now.getFullYear() ? text : `${text} ${y}`;
}

// Ett prov på våren och ett på hösten. Efter det sista kända datumet
// fortsätter vi med uppskattningar i samma takt.
function estimate(afterYear: number, spring: boolean): string {
  return spring ? `${afterYear}-04-15` : `${afterYear}-10-15`;
}

export function upcomingExams(count = 2, now = new Date()): Provdatum[] {
  const today = now.toISOString().slice(0, 10);
  const out: Provdatum[] = KNOWN.filter(d => d >= today).map(d => ({ date: d, label: label(d, now), prel: false }));
  let year = Number((KNOWN[KNOWN.length - 1] || today).slice(0, 4));
  let spring = true;
  while (out.length < count) {
    year += spring ? 1 : 0;
    const d = estimate(year, spring);
    if (d >= today) out.push({ date: d, label: label(d, now), prel: true });
    spring = !spring;
  }
  return out.slice(0, count);
}
