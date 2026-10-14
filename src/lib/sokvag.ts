// En adress att skicka användaren vidare till efter t.ex. inloggning måste
// vara en sökväg på den egna sajten. "//sajt.se", "/\sajt.se" och sökvägar
// med tab eller radbrytning tolkar webbläsaren som en annan sajt.
export function arLokalSokvag(x: string): boolean {
  return /^\/(?![\/\\])[^\\\t\n\r]*$/.test(x);
}
