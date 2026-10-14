// Klientkod: sparar det man skrivit i ett forumformulär när det skickas, och
// fyller i det igen om servern skickar tillbaka sidan med ett felmeddelande
// (t.ex. från spamfiltret), så att texten inte går förlorad.
const FALT = ['category', 'title', 'body'];

// param: URL-parametern som servern använder för formulärets fel ('fel' för
// ny tråd, 'error' för svar). Andra fel på sidan fyller inte i utkastet.
export function behallUtkast(form: HTMLFormElement | null, nyckel: string, param: 'fel' | 'error') {
  if (!form) return;
  const falt = (namn: string) => form.elements.namedItem(namn) as HTMLInputElement | null;
  try {
    if (new URLSearchParams(location.search).has(param)) {
      const sparat = JSON.parse(sessionStorage.getItem(nyckel) || 'null');
      if (sparat) for (const n of FALT) {
        const el = falt(n);
        if (el && sparat[n]) el.value = sparat[n];
      }
    } else {
      sessionStorage.removeItem(nyckel);
    }
  } catch {}
  form.addEventListener('submit', () => {
    try {
      const data: Record<string, string> = {};
      for (const n of FALT) {
        const el = falt(n);
        if (el) data[n] = el.value;
      }
      sessionStorage.setItem(nyckel, JSON.stringify(data));
    } catch {}
  });
}

// När spamfiltret tagit bort ett konto är man utloggad och formuläret syns
// inte. Visa då det man skrev, så att det går att kopiera, och glöm det sedan.
export function visaRaderatUtkast() {
  try {
    if (!new URLSearchParams(location.search).has('raderat')) return;
    const ruta = document.querySelector('.tip-box.warning');
    for (const nyckel of Object.keys(sessionStorage).filter(k => k.startsWith('forumutkast:'))) {
      const d = JSON.parse(sessionStorage.getItem(nyckel) || 'null');
      sessionStorage.removeItem(nyckel);
      const text = [d?.title, d?.body].filter(Boolean).join('\n\n');
      if (!text || !ruta) continue;
      const p = document.createElement('p');
      p.textContent = 'Det här skrev du. Kopiera texten om du vill spara den.';
      const ta = document.createElement('textarea');
      ta.readOnly = true;
      ta.rows = 6;
      ta.value = text;
      ta.style.width = '100%';
      ruta.after(p, ta);
    }
  } catch {}
}
