// Svamp-Bob-temat: svampar som flyger in från alla håll och skrattar.
(function () {
  const POSER = Array.from({ length: 12 }, (_, i) => `/svampbob/pose-${String(i + 1).padStart(2, '0')}.webp`);
  const FRAMES = ['/svampbob/frame1.webp', '/svampbob/frame2.webp'];
  const lager = document.getElementById('svampbob-lager');
  const knapp = document.getElementById('svampbob-ljud');
  const skratt = document.getElementById('svampbob-skratt');
  const hjalte = document.getElementById('hero-img');
  if (!lager || !knapp || !skratt) return;

  const reducera = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const latt = lager.getAttribute('data-latt') === '1';   // lugna varianten på övriga sidor
  let ljudPa = localStorage.getItem('svampbob-ljud') !== 'av';
  let ljudBlockerat = false;
  let senasteSkratt = 0;
  let antalSvampar = 0;
  const skrattande = new Set();

  // Förladda bilderna så att svamparna dyker upp direkt.
  [...POSER, ...FRAMES].forEach(src => { const im = new Image(); im.src = src; });

  function ritaKnapp() {
    knapp.textContent = ljudPa ? '🔊' : '🔇';
    knapp.classList.toggle('svampbob-pulsa', ljudPa && ljudBlockerat);
  }

  // Skrattet: max ett var 3:e sekund. Medan det spelas skrattar hjältesvampen
  // och alla flygande "skrattsvampar" genom att växla mellan de två bilderna.
  function skrattaNu(tvinga) {
    if (!ljudPa) return;
    const nu = Date.now();
    if (!tvinga && nu - senasteSkratt < 3000) return;
    senasteSkratt = nu;
    const ljud = skratt.cloneNode();
    ljud.volume = 0.8;
    const p = ljud.play();
    if (!p || !p.then) return;
    p.then(() => {
      ljudBlockerat = false; ritaKnapp();
      let bild = 0;
      const mun = setInterval(() => {
        bild = 1 - bild;
        if (hjalte) hjalte.src = FRAMES[bild];
        skrattande.forEach(el => { el.src = FRAMES[bild]; });
      }, 140);
      if (hjalte) hjalte.classList.add('svampbob-skrattar');
      skrattande.forEach(el => el.classList.add('svampbob-skrattar'));
      const stopp = () => {
        clearInterval(mun);
        if (hjalte) { hjalte.src = FRAMES[0]; hjalte.classList.remove('svampbob-skrattar'); }
        skrattande.forEach(el => { el.src = FRAMES[0]; el.classList.remove('svampbob-skrattar'); });
      };
      ljud.addEventListener('ended', stopp);
      setTimeout(stopp, 12000);
    }).catch(() => {
      // Webbläsaren kräver ett klick innan ljud får spelas: visa en pratbubbla
      // och skratta vid första tryck var som helst på sidan.
      ljudBlockerat = true; ritaKnapp();
      if (!document.getElementById('svampbob-hint')) {
        const hint = document.createElement('div');
        hint.id = 'svampbob-hint';
        hint.textContent = 'Tryck var som helst så skrattar jag! 🧽';
        document.body.appendChild(hint);
      }
      const vackt = () => { document.getElementById('svampbob-hint')?.remove(); skrattaNu(true); };
      ['pointerdown', 'keydown', 'touchstart'].forEach(ev => document.addEventListener(ev, vackt, { once: true, passive: true }));
    });
  }

  knapp.addEventListener('click', () => {
    ljudPa = !ljudPa;
    localStorage.setItem('svampbob-ljud', ljudPa ? 'pa' : 'av');
    ritaKnapp();
    if (ljudPa) skrattaNu(true);
  });
  ritaKnapp();

  const slump = (a, b) => a + Math.random() * (b - a);
  const valj = arr => arr[Math.floor(Math.random() * arr.length)];

  // En svamp flyger in från en slumpad kant, vinglar en stund och flyger ut igen.
  function spawna(skrattsvamp) {
    if (antalSvampar >= 7) return;
    const W = window.innerWidth, H = window.innerHeight;
    const storlek = Math.round(slump(Math.min(W, H) * 0.12, Math.min(W, H) * 0.26));
    const el = document.createElement('img');
    el.alt = '';
    el.width = storlek;
    el.style.width = storlek + 'px';
    el.src = valj(POSER);
    if (Math.random() < 0.5) el.style.transform = 'scaleX(-1)';

    const kant = valj(['topp', 'botten', 'vanster', 'hoger']);
    const mal = { x: slump(0.05, 0.75) * W, y: slump(0.08, 0.7) * H };
    const start = kant === 'topp' ? { x: mal.x, y: -storlek * 1.2 }
      : kant === 'botten' ? { x: mal.x, y: H + storlek * 0.2 }
      : kant === 'vanster' ? { x: -storlek * 1.2, y: mal.y }
      : { x: W + storlek * 0.2, y: mal.y };
    const utKant = valj(['topp', 'botten', 'vanster', 'hoger']);
    const slut = utKant === 'topp' ? { x: mal.x + slump(-200, 200), y: -storlek * 1.3 }
      : utKant === 'botten' ? { x: mal.x + slump(-200, 200), y: H + storlek * 0.3 }
      : utKant === 'vanster' ? { x: -storlek * 1.3, y: mal.y + slump(-150, 150) }
      : { x: W + storlek * 0.3, y: mal.y + slump(-150, 150) };

    const vrid = slump(-25, 25);
    lager.appendChild(el);
    antalSvampar++;
    const stanna = slump(2200, 4800);
    const inn = reducera ? 10 : slump(900, 1500);
    const ut = reducera ? 10 : slump(900, 1400);

    const bort = () => {
      el.remove();
      antalSvampar--;
    };
    const inAnim = el.animate([
      { translate: `${start.x}px ${start.y}px`, rotate: `${vrid * 2}deg`, opacity: 0.6 },
      { translate: `${mal.x}px ${mal.y}px`, rotate: `${vrid * 0.2}deg`, opacity: 1 },
    ], { duration: inn, easing: 'cubic-bezier(0.2, 0.9, 0.3, 1.15)', fill: 'forwards' });
    inAnim.onfinish = () => {
      el.classList.add('svampbob-wobbla');
      if (skrattsvamp) skrattaNu(false);
      setTimeout(() => {
        el.classList.remove('svampbob-wobbla');
        const utAnim = el.animate([
          { translate: `${mal.x}px ${mal.y}px`, rotate: '0deg', opacity: 1 },
          { translate: `${slut.x}px ${slut.y}px`, rotate: `${-vrid * 2}deg`, opacity: 0.5 },
        ], { duration: ut, easing: 'cubic-bezier(0.6, -0.2, 0.9, 0.4)', fill: 'forwards' });
        utAnim.onfinish = bort;
      }, stanna);
    };
    setTimeout(bort, inn + stanna + ut + 2000);
  }

  // Första vågen: skrattet drar igång direkt och svampar kommer från alla håll på en gång.
  function forstaVagen() {
    skrattaNu(true);
    for (let i = 0; i < 6; i++) setTimeout(() => spawna(false), i * 160);
  }

  // Sedan en jämn ström så länge fliken syns.
  function strom() {
    if (!document.hidden) spawna(Math.random() < 0.3);
    setTimeout(strom, slump(1600, 3600));
  }

  // Lugna varianten: en enstaka svamp då och då, och skratt bara via knappen.
  function lugnStrom() {
    if (!document.hidden && antalSvampar < 2) spawna(false);
    setTimeout(lugnStrom, slump(12000, 25000));
  }

  if (latt) {
    setTimeout(lugnStrom, slump(2000, 6000));
  } else {
    forstaVagen();
    setTimeout(strom, 3500);
  }
})();
