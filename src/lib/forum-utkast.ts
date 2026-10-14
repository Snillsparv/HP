// Klientkod: sparar det man skrivit i ett forumformulär när det skickas, och
// fyller i det igen om servern skickar tillbaka sidan med ett felmeddelande
// (t.ex. från spamfiltret), så att texten inte går förlorad.
const FALT = ['category', 'title', 'body'];

export function behallUtkast(form: HTMLFormElement | null, nyckel: string) {
  if (!form) return;
  const falt = (namn: string) => form.elements.namedItem(namn) as HTMLInputElement | null;
  try {
    const params = new URLSearchParams(location.search);
    if (params.has('fel') || params.has('error')) {
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
