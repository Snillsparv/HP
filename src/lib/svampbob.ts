// Svamp-Bob-temat: en personlig version av sajten för Jonas kusin Otto.
// Temat visas automatiskt när Ottos konto är inloggat: hela galenskapen på
// startsidan och en lugnare variant (mönster, svamplist, färger) på övriga
// sidor. Jonas kan förhandsgranska utan att logga in: /?svampbob=bikinibottom
// slår på förhandsgranskningen i två timmar (kaka), /?svampbob=av stänger av.

export const SVAMPBOB_EPOST = 'otto.oscar.seipel@gmail.com';
export const SVAMPBOB_NYCKEL = 'bikinibottom';
export const SVAMPBOB_KAKA = 'svampbob';

type Anvandare = { email?: string | null } | null | undefined;

export function arSvampBob(user: Anvandare): boolean {
  return (user?.email ?? '').trim().toLowerCase() === SVAMPBOB_EPOST;
}

function kakaSatt(cookieHeader: string | null | undefined): boolean {
  const m = (cookieHeader ?? '').match(/(?:^|;\s*)svampbob=([^;]+)/);
  return !!m && m[1] === SVAMPBOB_NYCKEL;
}

/** Ska temat visas för den här förfrågan? */
export function visaSvampBob(user: Anvandare, url: URL, cookieHeader?: string | null): boolean {
  if (arSvampBob(user)) return true;
  const param = url.searchParams.get('svampbob');
  if (param === 'av') return false;
  return param === SVAMPBOB_NYCKEL || kakaSatt(cookieHeader);
}

/** Set-Cookie-värde för att slå på eller av förhandsgranskningen, annars null. */
export function svampbobKaka(url: URL): string | null {
  const param = url.searchParams.get('svampbob');
  if (param === SVAMPBOB_NYCKEL) return `${SVAMPBOB_KAKA}=${SVAMPBOB_NYCKEL}; Path=/; Max-Age=7200; SameSite=Lax`;
  if (param === 'av') return `${SVAMPBOB_KAKA}=; Path=/; Max-Age=0; SameSite=Lax`;
  return null;
}
