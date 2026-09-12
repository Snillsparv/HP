// Svamp-Bob-temat: en personlig startsida för Jonas kusin Otto.
// Temat visas automatiskt när Ottos konto är inloggat. Jonas kan
// förhandsgranska det på /?svampbob=bikinibottom utan att logga in.

export const SVAMPBOB_EPOST = 'otto.oscar.seipel@gmail.com';
export const SVAMPBOB_FORHANDSGRANSKNING = 'bikinibottom';

type Anvandare = { email?: string | null } | null | undefined;

export function arSvampBob(user: Anvandare): boolean {
  return (user?.email ?? '').trim().toLowerCase() === SVAMPBOB_EPOST;
}

export function visaSvampBob(user: Anvandare, url: URL): boolean {
  return arSvampBob(user) || url.searchParams.get('svampbob') === SVAMPBOB_FORHANDSGRANSKNING;
}
