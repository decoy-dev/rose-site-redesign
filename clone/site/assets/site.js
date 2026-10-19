// Rose site v2: mobile menu, the pause-animations control, motion (GSAP), the questions accordion,
// looping sample graphics, campaign tracking fields, the hero email form and the contact form. No build step.
(() => {
  const root = document.documentElement;
  const params = new URLSearchParams(location.search);

  // ----- pause animations -----
  // WCAG 2.2.2: anything that moves on its own for more than five seconds can be paused. Every [data-motion-toggle]
  // button (the header's icon button and the footer's text button, on every page) flips html.motion-paused, which
  // stops the looping graphics (the [data-loop] sample graphics, the follow-up page's ringing call) in CSS, and every
  // button is relabelled together, so the header and footer never disagree. The header's icon swaps pause bars for a
  // play triangle in CSS. The choice is kept for the visit and the next ones on this device.
  // A button carries data-label-pause and data-label-play for its text (its [data-motion-text] child if it has one,
  // e.g. the icon button's .sr-only label); data-aria-pause/-play give a fuller name.
  const MOTION_KEY = 'rose-motion';
  const motionPaused = () => root.classList.contains('motion-paused');
  try { if (localStorage.getItem(MOTION_KEY) === 'paused') root.classList.add('motion-paused'); } catch { /* storage blocked */ }
  const motionButtons = document.querySelectorAll('[data-motion-toggle]');
  const showMotionState = () => {
    const paused = motionPaused();
    motionButtons.forEach((btn) => {
      const text = btn.querySelector('[data-motion-text]') || btn;
      text.textContent = paused ? btn.dataset.labelPlay : btn.dataset.labelPause;
      const aria = paused ? btn.dataset.ariaPlay : btn.dataset.ariaPause;
      if (aria) btn.setAttribute('aria-label', aria);
    });
  };
  motionButtons.forEach((btn) => btn.addEventListener('click', () => {
    root.classList.toggle('motion-paused');
    try { localStorage.setItem(MOTION_KEY, motionPaused() ? 'paused' : 'play'); } catch { /* storage blocked */ }
    showMotionState();
    root.dispatchEvent(new CustomEvent('rose:motion'));
  }));
  showMotionState();

  // ----- the homepage hero's opening and the hero letter -----
  // The opening runs in CSS (site.css, "the homepage hero's opening"), once per load. The letter's delivery (site.css,
  // "The hero letter") runs here with GSAP, once per load, only on screens wider than 900px with motion allowed and not
  // paused: the head script sets html.will-deliver only then and holds the letter invisible until it starts (2.5s at
  // most). About 2.9s, every beat on transform, opacity or one filter:
  //   0.00  the envelope drops in from close to the camera: large, tilted, out of focus. Focus follows height, so it
  //         sharpens as it falls, and a wide, faint shadow converges into a tight one under it
  //   0.75  contact: a short frictional slide, then it settles
  //   1.20  after a beat the tear strip peels left to right, one hinged segment at a time, and is flicked away
  //   1.60  letter and envelope are pulled apart: the letter up and a little off the table, the envelope down until it
  //         clears; at 2.10 the envelope is tossed off the right of the panel
  //   2.15  the letter is set down at its resting angle
  // The letter is the only content. The envelope, its strip and the shadows are aria-hidden, built here and removed at
  // the end, so the resting state is the no-script state. Switching on reduced motion or pausing animations mid-delivery
  // jumps to the end. .is-introduced switches the CSS opening off once the crescent has drawn out and the letter has
  // landed, or as soon as the visitor pauses or plays animations, so nothing replays in the same visit.
  const heroIntro = document.querySelector('[data-hero-intro]');
  if (heroIntro) {
    const stillMq = matchMedia('(prefers-reduced-motion: reduce)');
    let edgeDone = false;
    let letterDone = !root.classList.contains('will-deliver');
    const introduced = () => { if (edgeDone && letterDone) heroIntro.classList.add('is-introduced'); };
    heroIntro.addEventListener('animationend', (e) => {
      if (e.target === heroIntro && e.pseudoElement === '::after') { edgeDone = true; introduced(); }
    });
    root.addEventListener('rose:motion', () => heroIntro.classList.add('is-introduced'));

    const deliver = () => {
      const gsap = window.gsap;
      const stage = heroIntro.querySelector('.note-stage');
      clearTimeout(window.__deliverFallback);
      if (!root.classList.contains('will-deliver') || !gsap || !stage || stillMq.matches || root.classList.contains('motion-paused') || !stage.offsetWidth) {
        root.classList.remove('will-deliver');
        letterDone = true;
        introduced();
        return;
      }
      const rig = stage.querySelector('.note-rig');
      const sheet = rig.querySelector('.note-sheet');
      const shade = sheet.querySelector('.note-shade');

      // an envelope a little bigger than the letter, with a 22px tear strip along the top
      const W = sheet.offsetWidth;
      const H = sheet.offsetHeight;
      const PAD = { t: 14, r: 14, b: 16, l: 14 };
      const STRIP = 22;
      const envW = W + PAD.l + PAD.r;
      const envH = H + PAD.t + PAD.b;
      rig.style.setProperty('--env-inset', -PAD.t + 'px ' + -PAD.r + 'px ' + -PAD.b + 'px ' + -PAD.l + 'px');
      rig.style.setProperty('--env-w', envW + 'px');
      rig.style.setProperty('--env-h', envH + 'px');

      // one irregular torn edge (1 to 2px deep, 5 to 13px apart), shared by the envelope and its strip; seeded, so every
      // load tears the same way
      let seed = 20261015;
      const rand = () => { seed = (seed + 0x6D2B79F5) | 0; let t = Math.imul(seed ^ (seed >>> 15), 1 | seed); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
      const edge = [];
      for (let x = 0; x < envW; x += 5 + rand() * 8) edge.push([x, STRIP + (rand() * 2 - 1) * 1.6 + Math.sin(x / 37) * 0.6]);
      edge.push([envW, STRIP + (rand() * 2 - 1) * 1.2]);
      const yAt = (px) => {
        for (let i = 1; i < edge.length; i++) {
          if (edge[i][0] >= px) { const a = edge[i - 1]; const b = edge[i]; return a[1] + (b[1] - a[1]) * ((px - a[0]) / (b[0] - a[0] || 1)); }
        }
        return edge[edge.length - 1][1];
      };
      const pt = (p) => p[0].toFixed(1) + 'px ' + p[1].toFixed(1) + 'px';
      const el = (tag, cls, parent) => { const n = document.createElement(tag); if (cls) n.className = cls; if (parent) parent.appendChild(n); return n; };

      // the shadows sit under the letter; the envelope front and its strip sit over it
      const soft = el('div', 'env-shadow env-shadow--soft');
      const contact = el('div', 'env-shadow env-shadow--contact');
      const front = el('div', 'env-front');
      const paper = el('div', 'env-paper', front);
      paper.style.clipPath = 'polygon(' + edge.map(pt).join(',') + ',' + envW + 'px ' + envH + 'px,0px ' + envH + 'px)';
      const print = el('div', 'env-print', paper);
      print.innerHTML = '<span class="env-return"><img src="/assets/logo/rose-mark-tile-light.svg" alt="">Rose Practice Solutions</span><span class="env-stamp"></span><em>For your practice</em>';
      const fibre = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      fibre.setAttribute('class', 'env-fibre');
      fibre.setAttribute('viewBox', '0 0 ' + envW + ' 40');
      fibre.innerHTML = '<path d="M' + edge.map((p) => p[0].toFixed(1) + ' ' + (p[1] + 0.4).toFixed(1)).join(' L') + '"/>';
      front.appendChild(fibre);

      // the strip: six segments, each hinged at its lower right and nested, so a lift carries everything to its left
      const strip = el('div', 'env-strip');
      strip.style.cssText = 'left:' + -PAD.l + 'px;top:' + -PAD.t + 'px;width:' + envW + 'px;height:' + (STRIP + 4) + 'px;';
      const N = 6;
      const segW = envW / N;
      const segs = [];
      let parent = strip;
      let parentX = 0;
      for (let i = N - 1; i >= 0; i--) {
        const x0 = i * segW;
        const x1 = Math.min(envW, (i + 1) * segW + 1);
        const seg = el('div', 'env-seg-pivot', parent);
        seg.style.cssText = 'position:absolute;top:0;left:' + (x0 - parentX).toFixed(1) + 'px;width:' + (x1 - x0).toFixed(1) + 'px;height:' + (STRIP + 4) + 'px;transform-origin:100% ' + STRIP + 'px;';
        const face = el('div', 'env-seg', seg);
        face.style.cssText = 'left:0;width:100%;background-position:' + (-x0).toFixed(1) + 'px 0;';
        const pts = ['0px 0px', (x1 - x0).toFixed(1) + 'px 0px', (x1 - x0).toFixed(1) + 'px ' + (yAt(x1) + 1).toFixed(1) + 'px'];
        const local = edge.filter((p) => p[0] > x0 && p[0] < x1);
        for (let k = local.length - 1; k >= 0; k--) pts.push((local[k][0] - x0).toFixed(1) + 'px ' + (local[k][1] + 1).toFixed(1) + 'px');
        pts.push('0px ' + (yAt(x0) + 1).toFixed(1) + 'px');
        face.style.clipPath = 'polygon(' + pts.join(',') + ')';
        segs[i] = seg;
        parent = seg;
        parentX = x0;
      }
      [soft, contact, front, strip].forEach((n) => n.setAttribute('aria-hidden', 'true'));
      rig.insertBefore(contact, sheet);
      rig.insertBefore(soft, contact);
      rig.appendChild(front);
      rig.appendChild(strip);

      const envParts = [front, soft, contact];
      // a showpiece should slow on a long frame, never skip a beat: treat any frame over 100ms as 16ms while it plays
      gsap.ticker.lagSmoothing(100, 16);
      const finish = () => {
        [soft, contact, front, strip].forEach((n) => n.remove());
        gsap.set([rig, sheet, shade], { clearProps: 'all' });
        ['--env-inset', '--env-w', '--env-h'].forEach((p) => rig.style.removeProperty(p));
        gsap.ticker.lagSmoothing(500, 33);
        letterDone = true;
        introduced();
      };
      const tl = gsap.timeline({ delay: 0.12, onComplete: finish });

      // the start state, then the CSS hold comes off
      gsap.set(rig, { x: 96, y: -150, scale: 1.55, rotation: -9, filter: 'blur(12px)', opacity: 0, transformOrigin: '50% 50%', force3D: true });
      gsap.set(sheet, { rotation: 0 });
      gsap.set(shade, { opacity: 0 });
      gsap.set(soft, { x: 72, y: 124, scale: 1.35, opacity: 0.17 });
      gsap.set(segs, { transformPerspective: 500 });
      root.classList.remove('will-deliver');

      // 1. the drop: scale, position and blur share one ease, quadratic like a fall from rest
      tl.to(rig, { opacity: 1, duration: 0.12, ease: 'none' }, 0)
        .to(rig, { x: -8, y: -4, scale: 1.008, filter: 'blur(0px)', duration: 0.75, ease: 'power1.in' }, 0)
        .to(rig, { rotation: -2.4, duration: 0.75, ease: 'sine.inOut' }, 0)
        .to(soft, { x: 4, y: 8, scale: 1, opacity: 0, duration: 0.77, ease: 'power1.in' }, 0)
        .to(contact, { opacity: 1, duration: 0.28, ease: 'power2.out' }, 0.58)
        // 2. contact: a short frictional slide
        .to(rig, { x: 0, y: 0, scale: 1, rotation: -1, duration: 0.3, ease: 'power3.out' }, 0.75)
        // 3. the tear, after a beat
        .to(fibre, { opacity: 1, duration: 0.4, ease: 'none' }, 1.2);
      for (let s = 0; s < N; s++) tl.to(segs[s], { rotation: -9, rotationX: -28, y: -3, duration: 0.2, ease: 'power1.inOut' }, 1.2 + s * 0.05);
      tl.to(strip, { x: 170, y: -120, rotation: -30, duration: 0.42, ease: 'power2.in' }, 1.55)
        .to(strip, { opacity: 0, duration: 0.14, ease: 'none' }, 1.83)
        // 4. pulled apart: the letter up and a little off the table, the envelope down until it clears...
        .to(sheet, { y: -64, scale: 1.03, duration: 0.55, ease: 'power2.inOut' }, 1.6)
        .to(envParts, { y: H - 36, x: 6, duration: 0.55, ease: 'power2.inOut' }, 1.6)
        .to(shade, { opacity: 1, x: 8, y: 16, duration: 0.45, ease: 'power2.out' }, 1.7)
        .to(shade, { x: 0, y: 0, duration: 0.7, ease: 'power3.out' }, 2.15)
        // ...then the envelope is tossed off the right of the panel
        .to(envParts, { x: 560, y: H + 200, rotation: 32, duration: 0.45, ease: 'power2.in' }, 2.1)
        // 5. the letter is set down at its resting angle
        .to(sheet, { y: 0, scale: 1, rotation: -1.5, duration: 0.7, ease: 'power3.out' }, 2.15)
        .to(rig, { rotation: 0, duration: 0.7, ease: 'power3.out' }, 2.15);

      stillMq.addEventListener('change', () => { if (stillMq.matches) tl.progress(1); });
      root.addEventListener('rose:motion', () => { if (root.classList.contains('motion-paused')) tl.progress(1); });
    };

    // Wait for the type (the letter's height depends on it) and for both papers to be decoded, so the first frames of
    // the drop aren't spent decoding images; 1.2s at most, then it runs regardless.
    if (root.classList.contains('will-deliver')) {
      const decoded = (src) => { const img = new Image(); img.src = src; return img.decode ? img.decode().catch(() => {}) : Promise.resolve(); };
      const ready = Promise.all([document.fonts ? document.fonts.ready : Promise.resolve(), decoded('/assets/img/paper-letter.webp'), decoded('/assets/img/paper-envelope.webp')]);
      Promise.race([ready, new Promise((r) => setTimeout(r, 1200))]).then(deliver);
    }
  }

  // ----- mobile menu -----
  // The panel is a full-height sheet under the header. While it is open the icon is a
  // close mark, Tab stays inside the toggle and the panel, and closing hands focus back.
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('site-nav');
  if (toggle && nav) {
    const icon = toggle.querySelector('path');
    const ICON_MENU = 'M4 7h16M4 12h16M4 17h16';
    const ICON_CLOSE = 'M6 6l12 12M18 6L6 18';
    const isOpen = () => root.classList.contains('nav-open');
    const setOpen = (open, returnFocus) => {
      if (open === isOpen()) return;
      root.classList.toggle('nav-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      if (icon) icon.setAttribute('d', open ? ICON_CLOSE : ICON_MENU);
      if (!open && returnFocus) toggle.focus();
    };
    toggle.addEventListener('click', () => setOpen(!isOpen(), true));
    document.addEventListener('keydown', (e) => {
      if (!isOpen()) return;
      if (e.key === 'Escape') { setOpen(false, true); return; }
      if (e.key !== 'Tab') return;
      const stops = [toggle, ...nav.querySelectorAll('a[href], button')];
      const first = stops[0];
      const last = stops[stops.length - 1];
      if (!stops.includes(document.activeElement)) { e.preventDefault(); first.focus(); }
      else if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    });
    // a link to a spot on this page closes the sheet on its way
    nav.addEventListener('click', (e) => { if (e.target.closest('a')) setOpen(false, false); });
    matchMedia('(min-width: 769px)').addEventListener('change', (m) => { if (m.matches) setOpen(false, false); });
  }

  // ----- services submenu -----
  // Hover and keyboard focus open it in CSS. The button opens and shuts it for touch and for anyone who wants it to stay;
  // Escape shuts it and keeps focus on the button; a click elsewhere or focus leaving shuts it.
  document.querySelectorAll('.nav-item--sub').forEach((item) => {
    const btn = item.querySelector('.nav-sub-toggle');
    if (!btn) return;
    const set = (open) => { item.classList.toggle('is-open', open); btn.setAttribute('aria-expanded', String(open)); };
    btn.addEventListener('click', () => {
      const open = !item.classList.contains('is-open');
      item.classList.toggle('is-shut', !open);
      set(open);
    });
    item.addEventListener('keydown', (e) => {
      if (e.key !== 'Escape' || root.classList.contains('nav-open')) return;
      set(false);
      item.classList.add('is-shut');
      btn.focus();
    });
    item.addEventListener('pointerleave', () => item.classList.remove('is-shut'));
    item.addEventListener('focusout', (e) => { if (!item.contains(e.relatedTarget)) { set(false); item.classList.remove('is-shut'); } });
    document.addEventListener('click', (e) => { if (!item.contains(e.target)) set(false); });
  });

  // ----- header hairline -----
  // A forest hairline grows under the sticky header once the page has moved.
  const head = document.querySelector('.site-head');
  if (head) {
    const mark = () => head.classList.toggle('is-scrolled', scrollY > 8);
    addEventListener('scroll', mark, { passive: true });
    mark();
  }

  // ----- motion, with GSAP -----
  // GSAP core and ScrollTrigger are self-hosted in /assets/vendor and load, deferred, before this
  // file. Nothing is hidden in CSS waiting for them: if they are missing, or the visitor asks for
  // reduced motion, every block is simply in place. Durations come from the motion tokens; the
  // token easings map to their nearest GSAP ease (standard: power2.out, out: power1.out).
  //   .reveal, [data-anim="rise"]  a block fades up as it arrives (data-reveal-step delays it)
  //   section headlines (h2)       drift up line by line as they arrive, then their intro line fades in
  //   [data-anim="stagger"]        the children of a block arrive in turn
  //   [data-anim="count"]          a sample number counts up once
  //   [data-anim="draw"]           an SVG line draws in
  //   [data-anim="status"]         a status row steps from new to called to booked
  //   [data-play]                  a small sample plays its steps once (site.css), starting as it comes into view
  //   .foot-giant                  the footer's wordmark rises the last 12% into its crop, once, as it comes into view
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const gs = window.gsap;
  const ST = window.ScrollTrigger;
  const seconds = (name, fallback) => {
    const raw = getComputedStyle(root).getPropertyValue(name).trim();
    const n = parseFloat(raw);
    return Number.isFinite(n) ? (raw.endsWith('ms') ? n / 1000 : n) : fallback;
  };
  if (gs && ST) {
    gs.registerPlugin(ST);
    const SLOW = seconds('--dur-slow', 0.4);
    const STEP = seconds('--stagger-ring', 0.075);
    const REST = seconds('--rest-bloom', 0.6);
    const STANDARD = 'power2.out';
    const OUT = 'power1.out';
    gs.matchMedia().add('(prefers-reduced-motion: no-preference)', () => {
      // a block already on screen at load stays put, so nothing flashes
      const below = (el) => !ST.isInViewport(el);
      const arrive = (trigger) => ({ trigger, start: 'top 88%', once: true });
      // a block that carries a Sample label slides in but does not fade, so the label is never hidden
      const startAlpha = (el) => (el.matches('.chip--sample') || el.querySelector('.chip--sample') ? 1 : 0);

      // section headlines below the hero: each line drifts up and fades in, in turn, then the intro line under it.
      // The heading is split into lines only when it arrives, once the fonts are in, so the lines match what is on
      // screen and no trigger is ever created during a ScrollTrigger refresh. SplitText labels the heading for screen
      // readers while it is split and puts it back as it was when the lines land. A head-row or section-head that
      // holds one is not also risen as a block.
      const SPLIT = window.SplitText;
      const textHeads = [];
      if (SPLIT) {
        gs.registerPlugin(SPLIT);
        gs.utils.toArray('main h2').forEach((h) => {
          if (h.closest('.hero, [data-anim="none"]') || !below(h)) return;
          const holder = h.closest('.head-row, .section-head');
          const intro = holder ? holder.querySelector(':scope > p') : (h.nextElementSibling && h.nextElementSibling.matches('p') ? h.nextElementSibling : null);
          textHeads.push(holder || h);
          // inside a block that already rises (the closing panel), the lines wait for it
          const after = h.closest('.reveal:not(.head-row)') ? SLOW : 0;
          gs.set([h, intro].filter(Boolean), { autoAlpha: 0 });
          ST.create({
            ...arrive(h),
            onEnter: () => {
              // a heading's .sr-only clarifier (": orthodontic and dental marketing services…") is left out of the
              // lines (it is 1px and would make a line of its own) but stays in the aria-label SplitText sets from the
              // heading's full text while it is split, and the revert puts it back untouched
              const split = SPLIT.create(h, { type: 'lines', linesClass: 'text-line', ignore: '.sr-only' });
              gs.set(h, { autoAlpha: 1 });
              const tl = gs.timeline({ onComplete: () => split.revert() });
              tl.from(split.lines, { autoAlpha: 0, y: 24, duration: REST, ease: STANDARD, stagger: STEP * 2 }, after);
              if (intro) tl.fromTo(intro, { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: REST, ease: STANDARD, clearProps: 'transform' }, after + STEP * 3);
              // closing panel: "Tended," settles last. It animates inside this timeline, on the split copy, so the
              // revert puts back the untouched word. A separate tween would leave its hidden start state in the
              // markup that the revert restores, and the word would vanish once the lines landed.
              const word = h.closest('.closing-panel') && h.querySelector('em');
              if (word) tl.from(word, { autoAlpha: 0, y: 6, duration: REST, ease: OUT }, after + SLOW);
            },
          });
        });
      }

      gs.utils.toArray('.reveal, [data-anim="rise"]').forEach((el) => {
        if (el.closest('[data-anim="stagger"]') && !el.matches('[data-anim="stagger"]')) return;
        if (el.matches('[data-anim="stagger"]') || !below(el) || textHeads.includes(el)) return;
        gs.from(el, { autoAlpha: startAlpha(el), y: 16, duration: SLOW, ease: STANDARD, delay: (Number(el.dataset.revealStep) || 0) * STEP, scrollTrigger: arrive(el) });
      });

      gs.utils.toArray('[data-anim="stagger"]').forEach((group) => {
        const kids = Array.from(group.children).filter((kid) => kid.nodeType === 1);
        if (!kids.length || !below(group)) return;
        gs.from(kids, { autoAlpha: (i, kid) => startAlpha(kid), y: 16, duration: SLOW, ease: STANDARD, stagger: STEP * 1.6, scrollTrigger: arrive(group) });
      });

      gs.utils.toArray('[data-anim="count"]').forEach((el) => {
        const text = el.textContent.trim();
        if (!/^\d+$/.test(text) || !below(el)) return;
        const tally = { n: 0 };
        // hold the final width from the start so the row does not move while it counts
        el.style.minWidth = el.getBoundingClientRect().width + 'px';
        el.style.display = 'inline-block';
        gs.to(tally, { n: Number(text), duration: REST * 2, ease: OUT, snap: { n: 1 }, scrollTrigger: arrive(el), onStart: () => { el.textContent = '0'; }, onUpdate: () => { el.textContent = String(tally.n); }, onComplete: () => { el.textContent = text; } });
      });

      // started as the sample's top reaches the bottom of the screen, so its steps (hidden until their delay) draw in
      // while it scrolls into view and the finished picture never shows first
      gs.utils.toArray('[data-play]').forEach((el) => {
        if (!below(el)) return;
        ST.create({ trigger: el, start: 'top bottom', once: true, onEnter: () => el.classList.add('is-playing') });
      });

      gs.utils.toArray('[data-anim="draw"]').forEach((el) => {
        if (typeof el.getTotalLength !== 'function' || !below(el)) return;
        const length = el.getTotalLength();
        gs.fromTo(el, { strokeDasharray: length, strokeDashoffset: length }, { strokeDashoffset: 0, duration: REST * 2, ease: OUT, scrollTrigger: arrive(el.closest('svg') || el), onComplete: () => gs.set(el, { clearProps: 'strokeDasharray,strokeDashoffset' }) });
      });

      gs.utils.toArray('[data-anim="status"]').forEach((row) => {
        const steps = Array.from(row.children);
        if (steps.length < 2 || !below(row)) return;
        gs.from(steps, { autoAlpha: 0, x: -8, duration: SLOW, ease: STANDARD, stagger: REST * 0.6, scrollTrigger: arrive(row) });
      });

      // the older .pipeline line (inside a forest band) draws once as it arrives
      gs.utils.toArray('.pipeline-line--ours').forEach((el) => {
        if (!below(el)) return;
        gs.from(el, { scaleX: 0, transformOrigin: 'left center', duration: REST, ease: STANDARD, scrollTrigger: arrive(el) });
      });


      // ----- graphics that play their own small story, once, as they arrive -----
      // Each behaviour runs on its component class, so every page gets it with no extra markup;
      // data-anim="lead|serp|ad|lp|call|schedule|report|feed|cadence" does the same on custom markup,
      // and data-anim="none" on a graphic (or a parent) switches it off. Containers only move:
      // they never fade, so a Sample chip stays visible from the first frame to the last.
      const MED = seconds('--dur-med', 0.25);
      const quiet = (el) => el.closest('[data-anim="none"]');
      const parts = (root, sel) => Array.from(root.querySelectorAll(sel)).filter((el) => !el.matches('.chip--sample') && !el.querySelector('.chip--sample'));
      const fadeUp = (tl, targets, at, each) => { if (targets.length) tl.from(targets, { autoAlpha: 0, y: 8, duration: SLOW, ease: STANDARD, stagger: each == null ? STEP * 2 : each }, at); return tl; };
      const statusSteps = (tl, root, at) => { const row = root.querySelector('.status'); if (row && row.dataset.anim === 'status') return; const steps = root.querySelectorAll('.status-step'); if (steps.length > 1) tl.from(steps, { autoAlpha: 0, x: -8, duration: SLOW, ease: STANDARD, stagger: REST * 0.6 }, at); };
      const host = (el) => { el.classList.add('anim-host'); return el; };
      const mark = (el, cls) => { const s = document.createElement('span'); s.className = cls; s.setAttribute('aria-hidden', 'true'); host(el).appendChild(s); return s; };

      const BEHAVIOURS = {
        // the card drops in, the dot pulses once, the source writes in, the status steps along
        lead(el, tl) {
          if (!el.matches('.reveal, [data-anim]') && !(el.parentElement && el.parentElement.matches('[data-anim="stagger"]'))) tl.from(el, { y: 16, duration: SLOW, ease: STANDARD }, 0);
          const dot = el.querySelector('.lead-dot');
          if (dot) tl.fromTo(dot, { scale: 1 }, { scale: 1.9, duration: MED, ease: OUT, yoyo: true, repeat: 1 }, SLOW * 0.5);
          fadeUp(tl, parts(el, '.lead-name, .lead-want, .lead-source > *, .moment-card-sub'), SLOW * 0.6, STEP);
          statusSteps(tl, el, '>-0.1');
        },
        // the query writes into the bar, the results arrive in order, the practice's own result is ringed last
        serp(el, tl) {
          const query = el.querySelector('.serp-query span');
          if (query) tl.fromTo(query, { clipPath: 'inset(0 100% 0 0)' }, { clipPath: 'inset(0 0% 0 0)', duration: REST * 1.5, ease: 'steps(14)' }, 0);
          fadeUp(tl, parts(el, '.serp-local, .serp-result, .skeleton'), query ? REST * 1.2 : 0, STEP * 3);
          const own = el.querySelector('.serp-result');
          if (own) tl.add(() => own.classList.add('is-ringed'), '>+0.1').from(own, { outlineColor: 'rgba(63, 75, 57, 0)', duration: SLOW }, '<');
        },
        // the keyword underlines itself, then a soft ripple lands on the headline where a click would
        ad(el, tl) {
          fadeUp(tl, parts(el, '.ad-tag, .ad-url, .ad-title, .ad-text, .ad-links'), 0, STEP);
          const key = (el.parentElement || el).querySelector('.keyword-line .chip:not(.chip--sample)');
          if (key) tl.from(mark(key, 'anim-underline'), { scaleX: 0, duration: REST, ease: STANDARD }, '>');
          const title = el.querySelector('.ad-title');
          if (title) tl.fromTo(mark(title, 'anim-ripple'), { scale: 0.4, autoAlpha: 0.7 }, { scale: 2.2, autoAlpha: 0, duration: REST * 1.4, ease: OUT, immediateRender: false }, '>-0.1');
        },
        // the page fills in: headline, photo, fields in order, and the button presses once
        lp(el, tl) {
          fadeUp(tl, parts(el, '.lp-copy > *, .lp-photo'), 0, STEP * 2);
          fadeUp(tl, parts(el, '.lp-field'), '>-0.1', STEP * 2);
          const button = el.querySelector('.lp-button');
          if (button) tl.from(button, { autoAlpha: 0, duration: SLOW, ease: OUT }, '>-0.1').to(button, { scale: 0.96, duration: MED * 0.6, ease: OUT, yoyo: true, repeat: 1 }, '>+0.2');
        },
        // a call rings and connects; a thread's messages arrive in turn
        call(el, tl) {
          const bubbles = parts(el, '.thread-call, .bubble, .thread-meta--out');
          const timer = el.querySelector('.call-timer');
          if (el.matches('.call') && timer) {
            const rest = timer.textContent;
            const said = { n: 0 };
            // the line written in the markup is the longest, so its box is held while the shorter ones show
            const hold = (on) => { const box = on ? timer.getBoundingClientRect() : null; timer.style.minWidth = on ? box.width + 'px' : ''; timer.style.minHeight = on ? box.height + 'px' : ''; };
            tl.add(() => hold(true), 0)
              .to(said, { n: 3, duration: 3, ease: 'none', snap: { n: 1 }, onUpdate: () => { timer.textContent = '0:0' + said.n + ' \u00b7 Ringing'; } }, 0)
              .add(() => { timer.textContent = '0:04 \u00b7 Connected'; })
              .add(() => { timer.textContent = rest; hold(false); }, '+=2.4');
          }
          if (el.matches('.call')) fadeUp(tl, parts(el, '.call-name'), 0);
          if (bubbles.length) fadeUp(tl, bubbles, el.matches('.call') ? REST * 2.5 : 0, REST * 0.9);
          statusSteps(tl, el.parentElement || el, '>');
        },
        // open slots sit still; the booked slot slides into its row and settles
        schedule(el, tl) {
          const slot = el.querySelector('.schedule-row--booked .schedule-slot');
          if (slot) tl.from(slot, { y: -10, autoAlpha: 0, duration: REST, ease: STANDARD }, 0.15);
          statusSteps(tl, el.parentElement || el, '>');
        },
        // numbers count up, the line draws, bars grow from the baseline, "what we're changing" arrives last
        // (the number beside a report line names a lead, so it arrives with its line and does not count)
        report(el, tl) {
          el.querySelectorAll('.stat-num').forEach((num) => {
            const text = num.textContent.trim();
            if (!/^\d+$/.test(text) || num.dataset.anim === 'count') return;
            const tally = { n: 0 };
            num.style.minWidth = num.getBoundingClientRect().width + 'px';
            num.style.display = 'inline-block';
            tl.to(tally, { n: Number(text), duration: REST * 2, ease: OUT, snap: { n: 1 }, onUpdate: () => { num.textContent = String(tally.n); }, onComplete: () => { num.textContent = text; } }, 0);
          });
          el.querySelectorAll('.chart-line:not([data-anim])').forEach((line) => {
            const length = line.getTotalLength();
            tl.fromTo(line, { strokeDasharray: length, strokeDashoffset: length }, { strokeDashoffset: 0, duration: REST * 2, ease: OUT }, 0.1);
          });
          const bars = el.querySelectorAll('.chart-bar');
          if (bars.length) tl.from(bars, { scaleY: 0, transformOrigin: '50% 100%', duration: REST, ease: STANDARD, stagger: STEP * 2 }, 0.1);
          const dot = el.querySelector('.chart-dot');
          if (dot) tl.from(dot, { scale: 0, transformOrigin: '50% 50%', duration: MED, ease: OUT }, REST * 2);
          fadeUp(tl, parts(el, '.chart-labels > *'), REST * 0.6, STEP);
          fadeUp(tl, parts(el, '.report-line > *, .didnt-work'), '>-0.2', REST * 0.35);
        },
        // items arrive one by one
        feed(el, tl) {
          const items = parts(el, ':scope > li, :scope > [role="listitem"]');
          items.forEach((item, i) => {
            const at = i * REST * 0.7;
            tl.from(item, { autoAlpha: 0, y: 8, duration: SLOW, ease: STANDARD }, at);
            const avatar = item.querySelector('.avatar');
            if (avatar) tl.from(avatar, { scale: 0.6, duration: SLOW, ease: STANDARD }, at);
            const word = item.querySelector('.signed-change em');
            if (word) tl.fromTo(word, { clipPath: 'inset(0 100% 0 0)' }, { clipPath: 'inset(0 0% 0 0)', duration: REST, ease: OUT }, at + SLOW * 0.6);
          });
        },
        // the line draws between the dots, and each dot fills as it is reached
        cadence(el, tl) {
          Array.from(el.querySelectorAll('.cadence-step')).forEach((step, i) => {
            const at = i * REST * 0.8;
            const dot = step.querySelector('.cadence-dot');
            if (dot) tl.from(dot, { scale: 0.3, autoAlpha: 0, duration: MED, ease: OUT }, at);
            tl.from(parts(step, '.cadence-when, .cadence-what'), { autoAlpha: 0, duration: SLOW, ease: OUT }, at);
            tl.fromTo(step, { '--cad-p': 0 }, { '--cad-p': 1, duration: REST * 0.8, ease: 'none' }, at + MED * 0.5);
          });
        },
        // a stage card's pieces arrive one after another: a search writes itself in, the cards follow,
        // the raised card travels furthest, and an ad's keyword underlines itself before a click lands
        moment(el, tl) {
          const query = el.querySelector(':scope > .serp-query span');
          if (query) tl.fromTo(query, { clipPath: 'inset(0 100% 0 0)' }, { clipPath: 'inset(0 0% 0 0)', duration: REST * 1.5, ease: 'steps(14)' }, 0);
          const kids = parts(el, ':scope > *').filter((kid) => !kid.matches('.serp-query') && !kid.matches(NESTED) && !kid.querySelector(NESTED));
          kids.forEach((kid, i) => {
            const far = kid.matches('.moment-card--raised');
            tl.from(kid, { autoAlpha: 0, y: far ? 20 : 8, duration: far ? REST : SLOW, ease: STANDARD }, (query ? REST * 1.2 : 0) + i * REST * 0.5);
          });
          const key = el.querySelector('.keyword-line .chip:not(.chip--sample)');
          if (key) {
            tl.from(mark(key, 'anim-underline'), { scaleX: 0, duration: REST, ease: STANDARD }, '>');
            const title = el.querySelector('.moment-card--raised .moment-card-title');
            if (title) tl.fromTo(mark(title, 'anim-ripple'), { scale: 0.4, autoAlpha: 0.7 }, { scale: 2.2, autoAlpha: 0, duration: REST * 1.4, ease: OUT, immediateRender: false }, '>-0.1');
          }
        },
      };
      const AUTO = { lead: '.lead-card, .screen > .lead-head', serp: '.serp', ad: '.ad-card', lp: '.lp-thumb', call: '.call, .thread', schedule: '.schedule', report: '.report-panel, .report-chart', feed: '.feed', cadence: '.cadence', moment: '.beat-screen > .moment' };
      // graphics that play their own behaviour, so a stage card leaves them alone
      const NESTED = Object.keys(AUTO).filter((name) => name !== 'moment').map((name) => AUTO[name]).join(', ');
      // which node a behaviour runs on, or null when another behaviour already owns it
      const owner = (name, el) => {
        if (name === 'lead' && el.matches('.lead-head')) return el.parentElement;
        if (name === 'report' && el.matches('.report-chart') && el.closest('.report-panel')) return null;
        if (name === 'moment' && el.matches('.thread')) return null;
        return el;
      };
      const played = new WeakSet();
      Object.keys(BEHAVIOURS).forEach((name) => {
        gs.utils.toArray('[data-anim="' + name + '"], ' + AUTO[name]).forEach((el) => {
          const node = owner(name, el);
          if (!node || played.has(node) || quiet(node)) return;
          played.add(node);
          const tl = gs.timeline({ paused: true });
          BEHAVIOURS[name](node, tl);
          ST.create({ trigger: node, start: 'top 82%', once: true, onEnter: () => tl.play() });
        });
      });

      // a signature writes in, left to right (not the hero letter's: the letter arrives signed)
      gs.utils.toArray('.signature').forEach((sig) => {
        if (quiet(sig) || sig.closest('.site-foot, .note-letter')) return;
        gs.fromTo(sig, { clipPath: 'inset(-20% 100% -20% 0)' }, { clipPath: 'inset(-20% -5% -20% 0)', duration: REST * 1.4, ease: OUT, scrollTrigger: { trigger: sig, start: 'top 88%', once: true } });
      });

      // the footer's wordmark rises the last stretch into its crop as it comes into view (site.css "footer")
      const giant = document.querySelector('.foot-giant');
      if (giant) gs.from(giant, { yPercent: 12, duration: REST * 1.4, ease: 'power3.out', scrollTrigger: { trigger: giant, start: 'top 75%', once: true } });

      // the numeral on a numbered card counts up to its number as the card arrives
      gs.utils.toArray('.commit-num, .step-num').forEach((num) => {
        const text = num.textContent.trim();
        if (!/^\d+$/.test(text) || Number(text) < 1 || quiet(num)) return;
        const tally = { n: 0 };
        gs.to(tally, { n: Number(text), duration: REST + Number(text) * STEP, ease: 'none', snap: { n: 1 }, scrollTrigger: { trigger: num, start: 'top 88%', once: true }, onUpdate: () => { num.textContent = String(tally.n).padStart(text.length, '0'); }, onComplete: () => { num.textContent = text; } });
      });

      // page arrival: the plain pieces of a hero figure come in one after another (its "Sample." caption stays put), and the italic word settles into its colour
      // (not on the homepage, whose hero opening writes its italic word in from site.css)
      gs.utils.toArray('.hero .hero-figure > .moment > *').forEach((el, i) => {
        gs.from(el, { autoAlpha: 0, y: 12, duration: SLOW, ease: STANDARD, delay: 0.25 + i * STEP * 2 });
      });

      const heroWord = document.querySelector(':not([data-hero-intro]) > .hero h1 em');
      if (heroWord) gs.from(heroWord, { color: getComputedStyle(heroWord.parentElement).color, duration: REST * 1.5, ease: OUT, delay: 0.4 });

      return () => { document.querySelectorAll('.anim-underline, .anim-ripple').forEach((el) => el.remove()); document.querySelectorAll('.is-ringed').forEach((el) => el.classList.remove('is-ringed')); };
    });
    // fonts and late images can move things; measure again once they are in
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => ST.refresh());
  }

  // ----- questions accordion -----
  // Native details and summary do the work. This only adds the motion: the answer opens by
  // height and opacity (--dur-med, --ease-out) and closes the same way (--ease-exit), and
  // the open attribute comes off when the close has finished. Under reduced motion, or
  // without Element.animate, the browser's own instant toggle is left alone.
  const faqItems = document.querySelectorAll('.faq-item');
  if (faqItems.length && 'animate' in Element.prototype) {
    const token = (name, fallback) => getComputedStyle(root).getPropertyValue(name).trim() || fallback;
    const running = new WeakMap();
    faqItems.forEach((item) => {
      const summary = item.querySelector('.faq-q');
      const answer = item.querySelector('.faq-a');
      if (!summary || !answer) return;
      summary.addEventListener('click', (e) => {
        if (reduceMotion.matches) return;
        e.preventDefault();
        const duration = parseFloat(token('--dur-med', '250ms')) || 250;
        const closing = item.open && !item.classList.contains('is-closing');
        const from = running.has(item) ? answer.getBoundingClientRect().height : (closing ? answer.scrollHeight : 0);
        if (running.has(item)) running.get(item).cancel();
        if (!closing) item.open = true;
        item.classList.toggle('is-closing', closing);
        const to = closing ? 0 : answer.scrollHeight;
        const anim = answer.animate(
          [{ height: from + 'px', opacity: closing ? 1 : 0 }, { height: to + 'px', opacity: closing ? 0 : 1 }],
          { duration, easing: closing ? token('--ease-exit', 'ease-in') : token('--ease-out', 'ease-out') }
        );
        running.set(item, anim);
        anim.onfinish = () => {
          running.delete(item);
          if (closing) { item.open = false; item.classList.remove('is-closing'); }
        };
        anim.oncancel = () => { if (running.get(item) === anim) running.delete(item); };
      });
    });
  }

  // ----- looping graphics and the founders ring -----
  // [data-loop] graphics loop in CSS (site.css, "Looping graphics"): .is-looping turns the loop on and .is-live
  // lets it run, only while the graphic is on screen. A [data-ring] founders ring arrives once, disc by disc in ring
  // order (CSS does the timing with --stagger-ring): .is-armed hides it until it comes on screen, then .is-in. The
  // homepage's talking ring ([data-ring-talk]) has its own introduction instead (see "the talking ring" below).
  // Under reduced motion the CSS runs none of it; without this script both stay still and complete.
  if ('IntersectionObserver' in window) {
    const loops = document.querySelectorAll('[data-loop]');
    if (loops.length) {
      const onScreen = new IntersectionObserver((entries) => {
        entries.forEach((entry) => entry.target.classList.toggle('is-live', entry.isIntersecting));
      }, { threshold: 0.2 });
      loops.forEach((el) => { el.classList.add('is-looping'); onScreen.observe(el); });
    }
    const rings = reduceMotion.matches ? [] : document.querySelectorAll('[data-ring]:not([data-ring-talk])');
    if (rings.length) {
      const arrived = new IntersectionObserver((entries, watch) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-in');
          watch.unobserve(entry.target);
        });
      }, { rootMargin: '0px 0px -15% 0px' });
      rings.forEach((ring) => {
        // a ring already on screen at load stays as it is, so nothing flashes
        if (ring.getBoundingClientRect().top < innerHeight * 0.85) return;
        ring.classList.add('is-armed');
        arrived.observe(ring);
      });
    }
  }

  // ----- signed samples (homepage How we help: [data-sample="local-page|ads|follow"]; site.css "signed samples") -----
  // Each sample plays its job once, as it reaches the screen, in three beats: place (the work lands), mark (it is signed
  // by role and the Rose stamp is pressed on), rest (it stays, finished, until the page is reloaded). The static markup is
  // the finished state. Once the type has loaded, every sample still below the fold has its timeline built, which puts it
  // in its start state (the search field empty and its results a skeleton; the ads and the consult not yet placed; the
  // concierge's text and the booking not yet sent); a sample already on screen or scrolled past at load simply stays
  // finished, so nothing flashes. A timeline runs only while its sample is on screen (35%) and the tab is visible, and
  // holds where it is otherwise. Pausing animations, or turning on reduced motion, finishes every sample for good; under
  // reduced motion nothing is built. Only transform, opacity, colour and clip-path change; the Sample chip never fades.
  // Durations come from the motion tokens. [data-place] panels settle 16px into place the first time they reach the
  // screen (CSS does the motion).
  const signedEls = document.querySelectorAll('[data-sample]');
  if (signedEls.length && window.gsap && 'IntersectionObserver' in window) {
    const gsap = window.gsap;
    const token = (name) => getComputedStyle(root).getPropertyValue(name).trim();
    const sec = (name, fallback) => { const raw = token(name); const n = parseFloat(raw); return Number.isFinite(n) ? (raw.endsWith('ms') ? n / 1000 : n) : fallback; };
    const FAST = sec('--dur-fast', 0.15);
    const MED = sec('--dur-med', 0.25);
    const SLOW = sec('--dur-slow', 0.4);
    const REST = sec('--rest-bloom', 0.6);
    const clear = (hex) => { const n = parseInt(hex.replace('#', ''), 16); return 'rgba(' + (n >> 16) + ', ' + ((n >> 8) & 255) + ', ' + (n & 255) + ', 0)'; };
    const allowed = () => !reduceMotion.matches && !motionPaused();
    // the sign-off's mark fades and returns; its Sample chip stays put
    const signParts = (sign) => Array.from(sign.children).filter((n) => !n.matches('.chip--sample, .stamp'));
    // the stamp, pressed on: down fast and a touch past, then settled. Its resting tilt lives in CSS.
    const press = (tl, stamp, at) => {
      tl.fromTo(stamp, { autoAlpha: 0, scale: 1.7, rotation: -24 }, { autoAlpha: 0.9, scale: 0.93, rotation: 0, duration: MED, ease: 'power2.in', immediateRender: false }, at)
        .to(stamp, { scale: 1, duration: MED * 0.8, ease: 'power2.out' }, at + MED);
    };
    // a start state, set the moment the timeline is built (before it plays)
    const start = (tl, targets, vars) => tl.set(targets, { ...vars, immediateRender: true }, 0);
    const BUILD = {
      // Websites and SEO: the search box starts empty and the results wait as a skeleton. The query is typed into its
      // one text node (no per-letter spans), so the caret rides right after the typed text, at a typist's uneven pace
      // with a breath after "adults". A beat to read it, search is pressed, a forest line runs along the tabs while the
      // page loads, the skeleton gives way to the result, the note lands and its connector rises from it and reaches
      // across to the title, slowing as it arrives; it is signed and the panel stamp is pressed on.
      'local-page': (el) => {
        const field = el.querySelector('[data-type]');
        const text = field.firstChild;
        const query = text.data;
        // GSAP sets plain properties, not a text node's: this hands its sets straight to the node
        const typed = { get value() { return text.data; }, set value(v) { text.data = v; } };
        const caret = el.querySelector('.gsr-caret');
        const go = el.querySelector('[data-part="go"]');
        const load = el.querySelector('[data-part="load"]');
        const skeleton = el.querySelector('[data-part="skeleton"]');
        const found = el.querySelectorAll('.gsr-site, .gsr-title, .gsr-snippet');
        const link = el.querySelector('[data-part="link"]');
        const note = el.querySelector('[data-part="note"]');
        const marks = signParts(el.querySelector('[data-part="sign"]'));
        const stamp = el.closest('.service-row-visual').querySelector('.panel-stamp');
        const mist = token('--sage-mist');
        // the connector draws in two phases: up from the note (its left strip only), then out along the top to the title
        const armW = link.offsetWidth;
        const armH = link.offsetHeight;
        const hidden = 'inset(' + (armH + 8) + 'px ' + (armW - 14) + 'px -8px -8px)';
        const risen = 'inset(-8px ' + (armW - 14) + 'px -8px -8px)';
        const drawn = 'inset(-8px -8px -8px -8px)';
        const tl = gsap.timeline({ paused: true });
        start(tl, typed, { value: '' });
        start(tl, [caret, skeleton], { autoAlpha: 1 });
        start(tl, [...found, note, link, ...marks, stamp], { autoAlpha: 0 });
        // type: 70/90/60/110ms a letter in turn, 60ms a space, 180ms more after "adults"
        const pace = [0.07, 0.09, 0.06, 0.11];
        let t = REST;
        let n = 0;
        for (let i = 1; i <= query.length; i++) {
          tl.set(typed, { value: query.slice(0, i) }, t);
          t += query[i - 1] === ' ' ? 0.06 : pace[n++ % pace.length];
          if (query.slice(0, i).endsWith('adults')) t += 0.18;
        }
        // read it, press search; the page loads, the skeleton gives way to the result
        const sent = t + MED;
        tl.set(caret, { autoAlpha: 0 }, sent)
          .fromTo(go, { scale: 1, backgroundColor: clear(mist) }, { scale: 0.88, backgroundColor: mist, duration: FAST / 2, ease: 'power2.in', immediateRender: false }, sent)
          .to(go, { scale: 1, backgroundColor: clear(mist), duration: FAST / 2, ease: 'power2.out' }, sent + FAST / 2)
          .fromTo(load, { autoAlpha: 1, scaleX: 0 }, { scaleX: 1, duration: SLOW, ease: 'power2.out', immediateRender: false }, sent + FAST)
          .to(load, { autoAlpha: 0, duration: FAST }, sent + FAST + SLOW)
          .to(skeleton, { autoAlpha: 0, duration: FAST, ease: 'power2.in' }, sent + FAST + SLOW);
        const placed = sent + FAST * 2 + SLOW;
        tl.fromTo(found, { autoAlpha: 0, y: 10 }, { autoAlpha: 1, y: 0, duration: SLOW, ease: 'power2.out', stagger: 0.06, immediateRender: false }, placed)
          .fromTo(note, { autoAlpha: 0, y: 8 }, { autoAlpha: 1, y: 0, duration: MED, ease: 'power2.out', immediateRender: false }, placed + SLOW + 0.12);
        const reach = placed + SLOW + 0.12 + MED * 0.6;
        const reached = reach + 0.55 + 0.8;
        tl.fromTo(link, { autoAlpha: 1, clipPath: hidden }, { autoAlpha: 1, clipPath: risen, duration: 0.55, ease: 'sine.inOut', immediateRender: false }, reach)
          .to(link, { clipPath: drawn, duration: 0.8, ease: 'power3.out' }, reach + 0.55)
          .fromTo(marks, { autoAlpha: 0, y: 6 }, { autoAlpha: 1, y: 0, duration: MED, ease: 'power2.out', immediateRender: false }, reached - 0.1);
        press(tl, stamp, reached + MED * 0.6);
        return tl;
      },
      // Google and Meta ads: the two ads land, a booked consult lands under them, its line draws out of it to the ad it
      // came from (the Google ad) and that ad is tagged Source; it is signed and the panel stamp is pressed on.
      ads: (el) => {
        const ads = el.querySelectorAll('.ads-ad');
        const consult = el.querySelector('[data-part="consult"]');
        const marks = signParts(el.querySelector('[data-part="sign"]'));
        const stamp = el.closest('.service-row-visual').querySelector('.panel-stamp');
        const source = el.querySelector('.ads-source[data-src="google"]');
        const line = source.querySelector('.ads-link');
        const tag = source.querySelector('.ads-tag');
        const PLACE = SLOW + 0.1;
        const tl = gsap.timeline({ paused: true });
        start(tl, [...ads, consult, source, tag, ...marks, stamp], { autoAlpha: 0 });
        start(tl, line, { scaleY: 0 });
        const at = REST / 2;
        tl.fromTo(ads, { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0, duration: PLACE, ease: 'power3.out', stagger: 0.15, immediateRender: false }, at)
          .fromTo(consult, { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: PLACE, ease: 'power3.out', immediateRender: false }, at + 0.9);
        // the trace: the line grows out of the consult to the ad's edge, then the ad's tag lands on it
        const trace = at + 0.9 + PLACE + 0.3;
        tl.set(source, { autoAlpha: 1 }, trace)
          .fromTo(line, { scaleY: 0 }, { scaleY: 1, duration: SLOW, ease: 'power2.inOut', immediateRender: false }, trace)
          .fromTo(tag, { autoAlpha: 0, scale: 0.8 }, { autoAlpha: 1, scale: 1, duration: MED, ease: 'power2.out', immediateRender: false }, trace + SLOW - 0.05)
          .fromTo(marks, { autoAlpha: 0, y: 8 }, { autoAlpha: 1, y: 0, duration: SLOW, ease: 'power3.out', immediateRender: false }, trace + SLOW + MED + 0.2);
        press(tl, stamp, trace + SLOW + MED + 0.55);
        return tl;
      },
      // patient follow-up (the add-ons deck's first card): the call is noted, the concierge's text goes out, the
      // consultation is booked in the practice's software, and it is signed by Follow-up
      follow: (el) => {
        const call = el.querySelector('[data-part="call"] .deck-follow-icon');
        const msg = el.querySelector('[data-part="msg"]');
        const booked = el.querySelector('[data-part="booked"]');
        const sign = el.querySelector('[data-part="sign"]');
        const marks = signParts(sign);
        const stamp = sign.querySelector('.stamp');
        const at = REST / 2;
        const tl = gsap.timeline({ paused: true });
        start(tl, [msg, booked, ...marks, stamp], { autoAlpha: 0 });
        tl.to(call, { backgroundColor: token('--forest'), color: token('--cream'), duration: MED, ease: 'power2.out' }, at)
          .to(call, { backgroundColor: token('--sage-mist'), color: token('--forest'), duration: MED, ease: 'power2.out' }, at + 0.85)
          .fromTo(msg, { autoAlpha: 0, y: 8 }, { autoAlpha: 1, y: 0, duration: SLOW, ease: 'power2.out', immediateRender: false }, at + 0.85)
          .fromTo(booked, { autoAlpha: 0, y: 8 }, { autoAlpha: 1, y: 0, duration: SLOW, ease: 'power2.out', immediateRender: false }, at + 2.25)
          .fromTo(marks, { autoAlpha: 0, y: 8 }, { autoAlpha: 1, y: 0, duration: SLOW, ease: 'power3.out', immediateRender: false }, at + 2.65)
          .set(stamp, { y: 0 }, at + 2.65);
        press(tl, stamp, at + 2.85);
        return tl;
      },
    };
    const samples = Array.from(signedEls, (el) => ({ el, kind: el.dataset.sample, live: false, done: false, tl: null }));
    // finished for good: the timeline (if any) jumps to its end and the sample never plays again on this page load
    const finish = (s) => { s.done = true; if (s.tl) s.tl.pause().progress(1); };
    const sync = (s) => {
      if (s.done || !s.tl) return;
      if (!allowed()) { finish(s); return; } // paused by the visitor, or reduced motion turned on
      // on an add-ons deck card that isn't in front (its body is inert): a sample that has started finishes; one that
      // hasn't waits in its start state for its card to come forward
      if (s.el.closest('[inert]')) { if (s.tl.progress() > 0) finish(s); return; }
      if (s.live && !document.hidden) s.tl.play(); else s.tl.pause(); // off screen or tab hidden: hold where it is
    };
    const syncAll = () => samples.forEach(sync);
    // armed once the type has loaded, so the timelines measure the real layout
    const arm = () => {
      samples.forEach((s) => {
        if (!allowed() || s.el.getBoundingClientRect().top < innerHeight) { s.done = true; return; }
        s.tl = BUILD[s.kind](s.el);
        s.tl.eventCallback('onComplete', () => { s.done = true; });
      });
      syncAll();
    };
    const watch = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const s = samples.find((x) => x.el === entry.target);
        s.live = entry.isIntersecting;
        sync(s);
      });
    }, { threshold: 0.35 });
    samples.forEach((s) => watch.observe(s.el));
    // the add-ons deck sends rose:sync to a sample when its card comes forward or goes back
    samples.forEach((s) => s.el.addEventListener('rose:sync', () => sync(s)));
    document.addEventListener('visibilitychange', syncAll);
    root.addEventListener('rose:motion', syncAll);
    reduceMotion.addEventListener('change', syncAll);
    (document.fonts ? document.fonts.ready : Promise.resolve()).then(arm);
  }
  const places = reduceMotion.matches || !('IntersectionObserver' in window) ? [] : Array.from(document.querySelectorAll('[data-place]'));
  if (places.length) {
    const placer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-placed');
        placer.unobserve(entry.target);
      });
    }, { threshold: 0.15 });
    places.forEach((el) => {
      // a panel already on screen at load stays put, so nothing jumps
      if (el.getBoundingClientRect().top < innerHeight) return;
      el.classList.add('is-placing');
      placer.observe(el);
    });
  }

  // ----- the practice folder (homepage "What happens after you say yes", [data-folder]; site.css "the practice folder") -----
  // The markup is four native disclosures (details[name], the first open), so without this script every stage opens in
  // place. This rebuilds them as a folder: a tablist of stages (button.folder-tab: number, title and line, a short
  // title from data-short for narrow screens, and the progress line) beside one sheet holding every stage's panel in a
  // single grid cell (so the sheet keeps the tallest one's height and nothing moves when the stage changes). The
  // stage's title and line move from its summary to the top of its panel (shown below 1025px, kept for screen readers
  // above). Tabs: click or tap, Left/Right/Up/Down, Home and End; the selected tab is the one tab stop.
  // Motion, only with GSAP, while at least 35% of the folder is on screen and the tab is visible: the folder moves
  // from stage to stage on its own, 1 to 4 and round again. The outgoing scene fades (150ms), the incoming one's caption
  // fades in (250ms; the Sample chip stays put), and its surfaces are placed (500ms, power3.out, a little apart) and it
  // plays its one beat:
  //   1, the call: the call runs (its clock time-lapses to the end), Sales asks the three questions in turn as live
  //      captions (word by word, the speaking ring breathing), and each topic in Sales' notes is ticked as its question
  //      ends; then "Prepared by Sales".
  //   2, the site: the page scrolls down to its first-visit section and back up, the phone settles over the browser's
  //      corner, then the profile's "Updating hours" becomes "Hours updated" (ticked); signed, stamped.
  //   3, the ads: each campaign is switched on and goes from draft to in review to live, then call and conversion
  //      tracking is set up, line by line; signed, stamped.
  //   4, the report: the email lands, the report opens (unfolding from the top), each signed change appears and is
  //      stamped in turn, then what it brought in (and, wide, the consult it counts) and what's next.
  // On phones (and anywhere the scene is under 768px wide) the surfaces that stay out (the invitation, the browser,
  // the two ads, the consult) are simply not seen. It rests (--hold-lower-third) while the active stage's progress
  // line fills, then the next stage. The first stage, on first view, holds finished for --rest-bloom before its beat
  // replays. Off screen or in a hidden tab it holds where it is. A click, tap or key on a stage (or keyboard focus
  // arriving on one) stops the moving on for the rest of the visit: the chosen stage plays its beat once and rests.
  // Paused animations stop on the current stage, finished; a later play starts that stage again. Under reduced motion
  // nothing is built: stage 1, finished, and stages change at once. The static markup is every stage's finished
  // state, so stopping only ever clears what the timeline set (and puts the call's clock back).
  const folder = document.querySelector('[data-folder]');
  if (folder && folder.querySelector('details.folder-stage')) {
    const gsap = window.gsap;
    const stages = [...folder.querySelectorAll(':scope > details.folder-stage')];
    const rail = document.createElement('div');
    rail.className = 'folder-rail';
    rail.setAttribute('role', 'tablist');
    rail.setAttribute('aria-label', 'Stages after you say yes');
    const sheet = document.createElement('div');
    sheet.className = 'folder-sheet';
    const span = (cls, text) => { const s = document.createElement('span'); s.className = cls; if (text) s.textContent = text; return s; };
    const tabs = [];
    const bars = [];
    const panels = stages.map((stage, i) => {
      const summary = stage.querySelector('summary');
      const panel = stage.querySelector('.folder-panel');
      const title = summary.querySelector('.folder-title');
      const line = summary.querySelector('.folder-line');
      const id = 'folder-stage-' + (i + 1);
      const tab = document.createElement('button');
      tab.type = 'button';
      tab.className = 'folder-tab';
      tab.id = id + '-tab';
      tab.setAttribute('role', 'tab');
      tab.setAttribute('aria-controls', id);
      const text = span('folder-tab-text');
      text.append(span('folder-tab-title', title.textContent), span('folder-tab-line', line.textContent));
      const bar = span('folder-progress');
      bar.setAttribute('aria-hidden', 'true');
      tab.append(summary.querySelector('.folder-num'), text, span('folder-tab-short', stage.dataset.short || title.textContent), bar);
      const head = document.createElement('div');
      head.className = 'folder-panel-head';
      head.append(title, line);
      panel.prepend(head);
      panel.id = id;
      panel.setAttribute('role', 'tabpanel');
      panel.setAttribute('aria-labelledby', tab.id);
      panel.tabIndex = 0;
      tabs.push(tab);
      bars.push(bar);
      rail.append(tab);
      sheet.append(panel);
      return panel;
    });
    stages.forEach((stage) => stage.remove());
    folder.append(rail, sheet);
    folder.classList.add('is-folder');

    let index = 0;
    const mark = () => {
      tabs.forEach((tab, i) => {
        tab.setAttribute('aria-selected', String(i === index));
        tab.tabIndex = i === index ? 0 : -1;
      });
      panels.forEach((panel, i) => panel.classList.toggle('is-current', i === index));
    };
    mark();

    const token = (name) => getComputedStyle(root).getPropertyValue(name).trim();
    const FAST = seconds('--dur-fast', 0.15);
    const MED = seconds('--dur-med', 0.25);
    const SLOW = seconds('--dur-slow', 0.4);
    const REST = seconds('--rest-bloom', 0.6);
    const HOLD = seconds('--hold-lower-third', 4);
    const clear = (hex) => { const n = parseInt(hex.replace('#', ''), 16); return 'rgba(' + (n >> 16) + ', ' + ((n >> 8) & 255) + ', ' + (n & 255) + ', 0)'; };
    const motionOK = () => Boolean(gsap) && !reduceMotion.matches && !motionPaused() && !document.hidden;
    // the stamp, pressed on: the signed samples' press (down fast and a touch past, then settled; its tilt lives in CSS)
    const press = (tl, stamp, at) => {
      tl.fromTo(stamp, { autoAlpha: 0, scale: 1.7, rotation: -24 }, { autoAlpha: 0.9, scale: 0.93, rotation: 0, duration: MED, ease: 'power2.in', immediateRender: false }, at)
        .to(stamp, { scale: 1, duration: MED * 0.8, ease: 'power2.out' }, at + MED);
      return at + MED * 1.8;
    };
    const PLACE = 0.5;
    // a surface placed: in from a short way off (16px down unless told otherwise), power3.out
    const place = (tl, el, at, off) => { tl.fromTo(el, { autoAlpha: 0, x: 0, y: 16, ...off }, { autoAlpha: 1, x: 0, y: 0, duration: PLACE, ease: 'power3.out', immediateRender: false }, at); };
    // a tick drawn on
    const tick = (tl, path, at) => { const len = path.getTotalLength(); tl.fromTo(path, { strokeDasharray: len, strokeDashoffset: len }, { strokeDashoffset: 0, duration: MED, ease: 'power2.out', immediateRender: false }, at); };
    const undrawn = (paths) => [paths, { strokeDasharray: (i, p) => p.getTotalLength(), strokeDashoffset: (i, p) => p.getTotalLength() }];
    // a caption's words, each in its own span (the text stays the same)
    const words = (el) => {
      const list = el.textContent.trim().split(/\s+/);
      el.textContent = '';
      return list.map((word, i) => { const s = document.createElement('span'); s.textContent = word; el.append(s, i < list.length - 1 ? ' ' : ''); return s; });
    };
    const INK = token('--text-body');
    const MUTED = token('--text-muted');
    const FOREST = token('--forest');
    const SAGE = token('--fill-quiet');
    const CREAM = token('--surface-page');
    const INPUT = token('--border-input');
    // each scene's beat: what it hides or resets before the beat (from: set at once, or faded over FAST on first view),
    // the beat itself, which ends on the static markup's finished state and returns its end time, and anything a stop
    // has to put back that is not a style (reset)
    const BEATS = panels.map((panel) => {
      const q = (sel) => [...panel.querySelectorAll(sel)];
      const part = (name) => panel.querySelector('[data-part="' + name + '"]');
      const sign = part('sign');
      const stamp = panel.querySelector('.folder-stamp');
      const signIn = (tl, at) => { if (sign) tl.fromTo(sign, { autoAlpha: 0, y: 8 }, { autoAlpha: 1, y: 0, duration: MED, ease: 'power2.out', immediateRender: false }, at); return at + MED; };
      const kind = panel.querySelector('.folder-scene').dataset.stage;
      if (kind === 'call') {
        const invite = part('invite');
        const call = part('call');
        const notes = part('notes');
        const caps = q('[data-part="cap"]');
        const said = caps.map(words);
        const topics = q('[data-part="topic"]');
        const ticks = topics.map((t) => t.querySelector('path'));
        const names = topics.map((t) => t.querySelector('.folder-topic-name'));
        const ring = part('ring');
        const clock = part('clock');
        const told = clock.textContent;
        const length = told.split(':').reduce((m, s) => m * 60 + Number(s), 0);
        const show = (s) => { s = Math.round(s); clock.textContent = String(Math.floor(s / 60)).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0'); };
        const STEP = 1.35; // one question: its words, then its topic ticked
        return {
          from: [[[invite, call, notes, sign, ...caps], { autoAlpha: 0 }], undrawn(ticks), [names, { color: MUTED }]],
          reset: () => { clock.textContent = told; },
          play: (tl, at) => {
            place(tl, invite, at, { y: -12 });
            place(tl, call, at + 0.1);
            place(tl, notes, at + 0.25, { x: 16, y: 0 });
            const talk = at + PLACE + 0.2;
            const time = { s: 0 };
            tl.fromTo(time, { s: 0 }, { s: length, duration: STEP * caps.length, ease: 'power1.inOut', immediateRender: false, onUpdate: () => show(time.s) }, talk);
            caps.forEach((cap, i) => {
              const at2 = talk + i * STEP;
              if (i) tl.to(caps[i - 1], { autoAlpha: 0, duration: FAST, ease: 'power2.in' }, at2 - FAST);
              tl.set(cap, { autoAlpha: 1 }, at2)
                .fromTo(said[i], { autoAlpha: 0 }, { autoAlpha: 1, duration: FAST, stagger: 0.06, ease: 'none', immediateRender: false }, at2)
                .fromTo(ring, { scale: 1, autoAlpha: 1 }, { scale: 1.12, autoAlpha: 0.35, duration: 0.4, ease: 'sine.inOut', yoyo: true, repeat: 1, immediateRender: false }, at2);
              const covered = at2 + said[i].length * 0.06 + FAST;
              tick(tl, ticks[i], covered);
              tl.fromTo(names[i], { color: MUTED }, { color: INK, duration: MED, ease: 'power2.out', immediateRender: false }, covered);
            });
            return signIn(tl, talk + caps.length * STEP);
          },
        };
      }
      if (kind === 'site') {
        const browser = part('browser');
        const phone = part('phone');
        const profile = part('profile');
        const scroll = part('scroll');
        const update = part('update');
        const todo = part('update-todo');
        const done = todo.nextElementSibling;
        const mark = update.querySelector('path');
        return {
          from: [[[browser, phone, profile, sign, stamp, done], { autoAlpha: 0 }], [todo, { autoAlpha: 1 }], [update, { backgroundColor: CREAM, borderColor: INPUT, color: MUTED }], undrawn([mark])],
          play: (tl, at) => {
            let t = at;
            if (browser.offsetWidth) {
              // desktop: the browser and the profile, the page scrolled down and back while the phone settles on
              place(tl, browser, t);
              place(tl, profile, t + 0.15, { x: 16, y: 0 });
              tl.fromTo(scroll, { y: 0 }, { y: -170, duration: 1.1, ease: 'power2.inOut', immediateRender: false }, t + 0.7)
                .to(scroll, { y: 0, duration: 0.8, ease: 'power2.inOut' }, t + 2.3);
              place(tl, phone, t + 1.2, { y: 40 });
              t += 3.2;
            } else {
              place(tl, phone, t, { y: 24 });
              place(tl, profile, t + 0.2, { x: 16, y: 0 });
              t += PLACE + 0.6;
            }
            tl.fromTo(update, { backgroundColor: CREAM, borderColor: INPUT, color: MUTED }, { backgroundColor: FOREST, borderColor: FOREST, color: CREAM, duration: MED, ease: 'power2.out', immediateRender: false }, t)
              .to(todo, { autoAlpha: 0, duration: FAST, ease: 'power2.in' }, t)
              .fromTo(done, { autoAlpha: 0 }, { autoAlpha: 1, duration: MED, ease: 'power2.out', immediateRender: false }, t + FAST);
            tick(tl, mark, t + FAST);
            return press(tl, stamp, signIn(tl, t + MED + SLOW));
          },
        };
      }
      if (kind === 'ads') {
        const manager = part('manager');
        const owner = part('owner');
        const previews = q('[data-part="preview"]');
        const switches = q('[data-part="switch"]');
        const knobs = switches.map((s) => s.querySelector('span'));
        const statuses = q('[data-part="status"]');
        const dots = statuses.map((s) => s.querySelector('.folder-status-dot'));
        const state = (k) => statuses.map((s) => s.querySelector('[data-state="' + k + '"]'));
        const drafts = state('draft');
        const reviews = state('review');
        const lives = state('live');
        const tracked = q('[data-part="track"] .folder-track-state');
        const marks = tracked.map((s) => s.querySelector('path'));
        const SWITCH = 1.1; // one campaign: switched on, in review, live
        return {
          from: [[[manager, owner, ...previews, sign, stamp, ...tracked, ...reviews, ...lives], { autoAlpha: 0 }], [drafts, { autoAlpha: 1 }], [switches, { backgroundColor: SAGE }], [knobs, { x: 0 }], [dots, { backgroundColor: clear(FOREST), borderColor: MUTED }], [statuses, { color: MUTED }], undrawn(marks)],
          play: (tl, at) => {
            place(tl, manager, at);
            previews.forEach((p, i) => place(tl, p, at + 0.2 + i * 0.12, { x: 20, y: 0 }));
            place(tl, owner, at + 0.45, { y: -10 });
            const on = at + PLACE + 0.45;
            statuses.forEach((status, i) => {
              const c = on + i * SWITCH;
              const live = c + 0.8;
              tl.fromTo(switches[i], { backgroundColor: SAGE }, { backgroundColor: FOREST, duration: MED, ease: 'power2.out', immediateRender: false }, c)
                .fromTo(knobs[i], { x: 0 }, { x: 14, duration: MED, ease: 'power2.out', immediateRender: false }, c)
                .to(drafts[i], { autoAlpha: 0, duration: FAST, ease: 'power2.in' }, c + FAST)
                .fromTo(reviews[i], { autoAlpha: 0 }, { autoAlpha: 1, duration: MED, ease: 'power2.out', immediateRender: false }, c + 2 * FAST)
                .fromTo(dots[i], { backgroundColor: clear(FOREST), borderColor: MUTED }, { backgroundColor: SAGE, borderColor: SAGE, duration: MED, ease: 'power2.out', immediateRender: false }, c + 2 * FAST)
                .to(reviews[i], { autoAlpha: 0, duration: FAST, ease: 'power2.in' }, live)
                .fromTo(lives[i], { autoAlpha: 0 }, { autoAlpha: 1, duration: MED, ease: 'power2.out', immediateRender: false }, live + FAST)
                .fromTo(dots[i], { backgroundColor: SAGE, borderColor: SAGE }, { backgroundColor: FOREST, borderColor: FOREST, duration: MED, ease: 'power2.out', immediateRender: false }, live + FAST)
                .fromTo(status, { color: MUTED }, { color: FOREST, duration: MED, ease: 'power2.out', immediateRender: false }, live + FAST);
            });
            const track = on + statuses.length * SWITCH + 0.1;
            tracked.forEach((s, i) => {
              const t = track + i * 0.3;
              tl.fromTo(s, { autoAlpha: 0, x: -4 }, { autoAlpha: 1, x: 0, duration: MED, ease: 'power2.out', immediateRender: false }, t);
              tick(tl, marks[i], t + FAST);
            });
            return press(tl, stamp, signIn(tl, track + tracked.length * 0.3 + FAST));
          },
        };
      }
      // the report: the email lands, the report unfolds from its top, each change appears and is stamped, then what it
      // brought in (and, wide, one of the consults it counts slides in beside it) and what's next
      const mail = part('mail');
      const report = part('report');
      const consult = part('consult');
      const rows = q('[data-part="row"]');
      const rowStamps = rows.map((r) => r.querySelector('.folder-row-stamp'));
      const stats = [...part('stats').children];
      const next = part('next');
      return {
        from: [[[mail, report, consult, ...rows, ...rowStamps, ...stats, next], { autoAlpha: 0 }]],
        play: (tl, at) => {
          tl.fromTo(mail, { autoAlpha: 0, y: -20 }, { autoAlpha: 1, y: 0, duration: PLACE, ease: 'power3.out', immediateRender: false }, at);
          const open = at + PLACE + 0.3;
          tl.fromTo(report, { autoAlpha: 0, y: 16, clipPath: 'inset(0% 0% 100% 0% round 16px)' }, { autoAlpha: 1, y: 0, clipPath: 'inset(0% 0% 0% 0% round 16px)', duration: 0.6, ease: 'power3.out', immediateRender: false }, open)
            .set(report, { clearProps: 'clipPath' }, open + 0.6);
          let t = open + 0.6;
          rows.forEach((row, i) => {
            tl.fromTo(row, { autoAlpha: 0, y: 8 }, { autoAlpha: 1, y: 0, duration: MED, ease: 'power2.out', immediateRender: false }, t);
            t = press(tl, rowStamps[i], t + MED + FAST) + 0.2;
          });
          stats.forEach((s, i) => tl.fromTo(s, { autoAlpha: 0, y: 8 }, { autoAlpha: 1, y: 0, duration: MED, ease: 'power2.out', immediateRender: false }, t + i * 0.12));
          place(tl, consult, t + 0.2, { x: 20, y: 0 });
          t += stats.length * 0.12 + MED + 0.2;
          tl.fromTo(next, { autoAlpha: 0, x: -6 }, { autoAlpha: 1, x: 0, duration: MED, ease: 'power2.out', immediateRender: false }, t);
          return t + MED;
        },
      };
    });
    // what fades when the stage changes: the outgoing scene's surfaces, and the incoming one's caption and title (its
    // surfaces wait for the beat); the Sample chip stays put. Everything a timeline may touch, per panel, so a stop can
    // clear it all: every element outside the icons, and of the icons only the ticks' dashes (a full clear on an SVG
    // element would also rewrite its transform).
    const OUTGOING = '.folder-panel-head, .folder-scene-caption, .folder-canvas';
    const INCOMING = '.folder-panel-head, .folder-scene-caption';
    const moves = (panel, sel) => [...panel.querySelectorAll(sel)];
    const touched = panels.map((panel) => moves(panel, '*:not(svg *)'));
    const ticked = panels.map((panel) => moves(panel, '[data-part="topic"] path, [data-part="update"] path, .folder-track-state path'));
    const clean = (i) => {
      gsap.set(touched[i], { clearProps: 'all' });
      if (ticked[i].length) gsap.set(ticked[i], { clearProps: 'strokeDasharray,strokeDashoffset' });
      if (BEATS[i].reset) BEATS[i].reset();
    };

    let auto = true;
    let live = false;
    let fresh = true;
    let run = null;
    let swap = null;
    // back to the markup: every scene finished, no progress showing
    const settle = () => {
      if (run) run.kill();
      if (swap) swap.kill();
      run = null;
      swap = null;
      if (!gsap) return;
      panels.forEach((panel, i) => { panel.classList.remove('is-leaving'); clean(i); });
      gsap.set([...panels, ...bars], { clearProps: 'all' });
    };
    // one visit to the current stage: (on first view, hold it finished, then fade out what the beat brings back) the
    // beat; then, while it moves on its own, the rest with the progress line filling, and the next stage
    const visit = (first) => {
      const beat = BEATS[index];
      const tl = gsap.timeline({ paused: true });
      let at = 0;
      if (first) {
        at = REST;
        beat.from.forEach(([targets, vars]) => tl.to(targets, { ...vars, duration: FAST, ease: 'power2.in' }, at));
        at += FAST;
      } else {
        at = FAST + MED;
      }
      const end = beat.play(tl, at) + (auto ? HOLD : 0);
      if (auto) {
        tl.fromTo(bars[index], { autoAlpha: 1, scaleX: 0 }, { scaleX: 1, duration: end, ease: 'none', immediateRender: false }, 0)
          .call(() => go(index + 1, false), null, end);
      }
      run = tl;
      tl.play();
    };
    // change stage: the outgoing scene fades over FAST, the incoming one's caption and title over MED while its beat
    // places its surfaces; without motion, at once
    const go = (next, chosen) => {
      next = (next + panels.length) % panels.length;
      const from = index;
      if (chosen) auto = false;
      if (!motionOK()) {
        settle();
        index = next;
        mark();
        return;
      }
      if (run) run.kill();
      if (swap) swap.progress(1).kill();
      run = null;
      gsap.set(bars, { clearProps: 'all' });
      if (next !== from) {
        index = next;
        mark();
        const leaving = panels[from];
        const coming = panels[next];
        // the outgoing scene stays on top while it fades, then drops away to the incoming one
        leaving.classList.add('is-leaving');
        clean(next);
        BEATS[next].from.forEach(([targets, vars]) => gsap.set(targets, vars));
        const left = () => { leaving.classList.remove('is-leaving'); clean(from); };
        swap = gsap.timeline({ onComplete: () => { swap = null; } })
          .to(moves(leaving, OUTGOING), { autoAlpha: 0, duration: FAST, ease: 'power2.in' }, 0)
          .fromTo(moves(coming, INCOMING), { autoAlpha: 0, y: 8 }, { autoAlpha: 1, y: 0, duration: MED, ease: 'power2.out' }, FAST)
          .call(left, null, FAST);
        visit(false);
      } else {
        settle(); // the stage already showing, chosen: it stays, finished
      }
    };
    const sync = () => {
      if (live && motionOK()) {
        if (fresh) {
          fresh = false;
          if (auto) { settle(); visit(true); }
        } else if (run) run.resume();
        if (swap) swap.resume();
      } else if (!document.hidden && !motionOK()) {
        settle(); // paused by the visitor (or reduced motion switched on): this stage, finished; play starts it again
        fresh = true;
      } else {
        if (run) run.pause(); // off screen or tab hidden: hold where it is
        if (swap) swap.pause();
      }
    };

    // the visitor takes over: any click, tap or key on a stage (or keyboard focus arriving on one)
    const takeOver = () => {
      if (!auto) return;
      auto = false;
      if (run) { settle(); fresh = false; }
    };
    rail.addEventListener('pointerdown', (e) => { if (e.target.closest('.folder-tab')) takeOver(); });
    rail.addEventListener('focusin', (e) => { if (e.target.matches(':focus-visible')) takeOver(); });
    rail.addEventListener('click', (e) => {
      const tab = e.target.closest('.folder-tab');
      if (!tab) return;
      takeOver();
      go(tabs.indexOf(tab), true);
    });
    rail.addEventListener('keydown', (e) => {
      const keys = { ArrowRight: index + 1, ArrowDown: index + 1, ArrowLeft: index - 1, ArrowUp: index - 1, Home: 0, End: panels.length - 1 };
      takeOver();
      if (!(e.key in keys)) return;
      e.preventDefault();
      go(keys[e.key], true);
      tabs[index].focus();
    });

    if (gsap && 'IntersectionObserver' in window) {
      new IntersectionObserver(([entry]) => {
        live = entry.isIntersecting;
        sync();
      }, { threshold: 0.35 }).observe(folder);
      document.addEventListener('visibilitychange', sync);
      root.addEventListener('rose:motion', sync);
      reduceMotion.addEventListener('change', sync);
    }
  }

  // ----- the talking ring (homepage why-us band, [data-ring-talk]; site.css "the talking ring") -----
  // The discs arrive as links to /about#<id>. This turns them into toggle buttons in one toolbar (one tab stop; the
  // arrow keys, Home and End move round the ring in its clockwise order) and shows a founder in the ring's centre:
  //   - pointing at a disc (mouse or pen) shows that founder until the pointer leaves the ring;
  //   - keyboard focus on a disc shows that founder; it stays while focus is on the disc or on the centre's
  //     "More about ..." link, and the fact comes back when focus leaves the ring;
  //   - a click, tap, Enter or Space presses the disc (aria-pressed), so the founder stays after the pointer or focus
  //     leaves; pressing it again, or Escape, lets go. Phones have no hover, so a tap is the way in.
  // Precedence: pointer, then focus, then the pressed disc, then the fact. Each button is described by its founder's
  // line, so a screen reader hears what they do on focus. Its one-off introduction is at the end of this block.
  const talkRing = document.querySelector('[data-ring-talk]');
  if (talkRing) {
    const list = talkRing.querySelector('.founders-ring-list');
    const fact = talkRing.querySelector('.founders-ring-fact');
    const hint = talkRing.querySelector('.founders-ring-hint');
    const panels = new Map([...talkRing.querySelectorAll('[data-panel]')].map((p) => [p.dataset.panel, p]));
    const discs = [...talkRing.querySelectorAll('a.founder-link[data-founder]')].map((link, i) => {
      const id = link.dataset.founder;
      const button = document.createElement('button');
      button.type = 'button';
      button.className = link.className;
      button.dataset.founder = id;
      button.setAttribute('aria-pressed', 'false');
      button.setAttribute('aria-controls', `ring-${id}`);
      button.setAttribute('aria-describedby', `ring-${id}-did`);
      button.tabIndex = i === 0 ? 0 : -1;
      button.append(...link.childNodes);
      link.replaceWith(button);
      return button;
    });
    list.setAttribute('role', 'toolbar');
    list.querySelectorAll('li').forEach((li) => li.setAttribute('role', 'none'));
    panels.forEach((panel) => { panel.hidden = false; });
    if (hint) hint.hidden = false;
    talkRing.classList.add('is-talking');

    let pointed = null;
    let focused = null;
    let pressed = null;
    let hush = false;
    const render = () => {
      // a "More about ..." link with focus keeps its founder up, whatever the pointer does
      const held = document.activeElement?.closest('[data-panel]')?.dataset.panel ?? null;
      const shown = held ?? pointed ?? focused ?? pressed;
      fact.classList.toggle('is-shown', shown === null);
      panels.forEach((panel, id) => {
        panel.classList.toggle('is-shown', id === shown);
        // a panel on its way out leaves the tab order at once, not when its fade ends
        panel.inert = id !== shown;
      });
      discs.forEach((b) => {
        b.classList.toggle('is-speaking', b.dataset.founder === shown);
        b.setAttribute('aria-pressed', String(b.dataset.founder === pressed));
      });
    };

    discs.forEach((disc) => {
      const id = disc.dataset.founder;
      disc.addEventListener('pointerenter', (e) => {
        if (e.pointerType === 'touch') return;
        pointed = id;
        render();
      });
      disc.addEventListener('focus', () => {
        discs.forEach((b) => { b.tabIndex = b === disc ? 0 : -1; });
        // a click or tap focuses the button too; only keyboard focus previews, so a second tap can let go
        if (hush || !disc.matches(':focus-visible')) { hush = false; return; }
        focused = id;
        render();
      });
      disc.addEventListener('click', () => {
        pressed = pressed === id ? null : id;
        // letting go with the keyboard returns to the fact, rather than leaving the focus preview up
        if (pressed === null && focused === id) focused = null;
        render();
      });
    });
    talkRing.addEventListener('pointerleave', (e) => {
      if (e.pointerType === 'touch') return;
      pointed = null;
      render();
    });
    talkRing.addEventListener('focusin', render);
    talkRing.addEventListener('focusout', (e) => {
      if (talkRing.contains(e.relatedTarget)) return;
      focused = null;
      render();
    });
    list.addEventListener('keydown', (e) => {
      const at = discs.indexOf(document.activeElement);
      if (at < 0) return;
      const n = discs.length;
      let next = null;
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next = discs[(at + 1) % n];
      else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') next = discs[(at - 1 + n) % n];
      else if (e.key === 'Home') next = discs[0];
      else if (e.key === 'End') next = discs[n - 1];
      if (!next) return;
      e.preventDefault();
      next.focus();
    });
    talkRing.addEventListener('keydown', (e) => {
      if (e.key !== 'Escape') return;
      const held = document.activeElement?.closest('[data-panel]')?.dataset.panel ?? null;
      if (held === null && pressed === null && focused === null && pointed === null) return;
      // focus on a centre link goes back to its disc first, which then stays quiet
      if (held !== null) {
        hush = true;
        discs.find((b) => b.dataset.founder === held).focus();
      }
      pressed = null;
      focused = null;
      pointed = null;
      render();
    });
    render();

    // The introduction, once a page view. When the band is well into view (the ring's top above three quarters of the
    // way down the window, so about 40% of the band shows), the five
    // discs come out of the ring's centre one after another in ring order (--stagger-ring apart), each swinging
    // clockwise along an arc to its place as it grows from half size (--rest-bloom, --ease-standard); as each lands,
    // its crescent cuts in from the outer edge (--dur-med). Then the centre (the fact) rises 8px into view
    // (--dur-slow), and the speaking highlight goes once round the ring, each crescent filling sage for about 300ms in
    // turn, before it settles back on the fact. About 2.75s in all; it never loops. Pointing at, focusing, tapping or
    // typing in the ring, or the Pause animations control, ends it at once in its end state, and the ring works as
    // usual. Under reduced motion, with animations paused, without the Web Animations API, or when the ring is already
    // on screen when this runs, there is no introduction: the ring is simply there. Every animation is fill
    // "backwards" at most, so when one ends or is cancelled the ring's own CSS state is what shows.
    if (!reduceMotion.matches && !motionPaused() && 'IntersectionObserver' in window && 'animate' in Element.prototype
      && talkRing.getBoundingClientRect().top > innerHeight) {
      const token = (name, fallback) => getComputedStyle(root).getPropertyValue(name).trim() || fallback;
      const ms = (name, fallback) => {
        const v = token(name, '');
        return v ? parseFloat(v) * (v.endsWith('ms') ? 1 : 1000) : fallback;
      };
      const STAGGER = ms('--stagger-ring', 75);
      const TRAVEL = ms('--rest-bloom', 600);
      const FAST = ms('--dur-fast', 150);
      const MED = ms('--dur-med', 250);
      const SLOW = ms('--dur-slow', 400);
      const easeStandard = token('--ease-standard', 'ease');
      const easeOut = token('--ease-out', 'ease-out');
      const SWEEP = Math.PI / 4; // each disc swings through 45 degrees on its way out
      const items = discs.map((d) => d.closest('.founder'));
      const cuts = discs.map((d) => d.querySelector('.founder-art path'));
      const stage = talkRing.querySelector('.founders-ring-stage');
      let state = 'waiting';
      let anims = [];
      let watch = null;
      const end = () => {
        if (state === 'done') return;
        state = 'done';
        if (watch) watch.disconnect();
        anims.forEach((a) => a.cancel());
        anims = [];
        talkRing.classList.remove('is-waiting');
      };
      const play = () => {
        state = 'playing';
        talkRing.classList.remove('is-waiting');
        // In the ring the discs come from its centre and swing out along arcs. In the row of discs (phones, and
        // browsers without CSS trig) a shared centre would pile them on top of each other, so each rises 16px into
        // its own place instead.
        const inRing = getComputedStyle(items[0]).position === 'absolute';
        const from = talkRing.getBoundingClientRect();
        const ox = from.left + from.width / 2;
        const oy = from.top + from.height / 2;
        items.forEach((item, i) => {
          const box = item.getBoundingClientRect();
          const fx = box.left + box.width / 2;
          const fy = box.top + box.height / 2;
          const dist = Math.hypot(fx - ox, fy - oy);
          const angle = Math.atan2(fy - oy, fx - ox);
          const computed = getComputedStyle(item).transform;
          const placed = computed === 'none' ? '' : computed;
          const frames = [];
          for (let s = 0; s <= 8; s += 1) {
            const t = s / 8;
            const a = angle - SWEEP * (1 - t);
            const x = inRing ? ox + Math.cos(a) * dist * t - fx : 0;
            const y = inRing ? oy + Math.sin(a) * dist * t - fy : 16 * (1 - t);
            frames.push({ offset: t, opacity: Math.min(1, t / 0.35), transform: `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px) ${placed} scale(${0.5 + 0.5 * t})` });
          }
          const delay = i * STAGGER;
          anims.push(item.animate(frames, { duration: TRAVEL, delay, easing: easeStandard, fill: 'backwards' }));
          anims.push(cuts[i].animate([{ transform: 'scaleX(0)' }, { transform: 'scaleX(1)' }], { duration: MED, delay: delay + TRAVEL * 0.6, easing: easeOut, fill: 'backwards' }));
        });
        const landed = (items.length - 1) * STAGGER + TRAVEL;
        const rise = [{ opacity: 0, translate: '0 8px' }, { opacity: 1, translate: '0 0' }];
        anims.push(stage.animate(rise, { duration: SLOW, delay: landed, easing: easeOut, fill: 'backwards' }));
        if (hint && getComputedStyle(hint).display !== 'none') anims.push(hint.animate(rise, { duration: SLOW, delay: landed, easing: easeOut, fill: 'backwards' }));
        // the introduction: the highlight goes once round the ring, a step every three --stagger-ring
        const rest = getComputedStyle(cuts[0]).fill;
        const sage = token('--fill-quiet', rest);
        const round = landed + SLOW + FAST;
        cuts.forEach((cut, i) => {
          anims.push(cut.animate([{ fill: rest }, { fill: sage, offset: 0.25 }, { fill: sage, offset: 0.75 }, { fill: rest }], { duration: SLOW, delay: round + i * STAGGER * 3, easing: easeStandard }));
        });
        Promise.all(anims.map((a) => a.finished)).then(() => {
          if (state !== 'playing') return;
          state = 'done';
          anims = [];
        }, () => {});
      };
      talkRing.classList.add('is-waiting');
      watch = new IntersectionObserver((entries) => {
        if (state !== 'waiting' || !entries.some((e) => e.isIntersecting)) return;
        watch.disconnect();
        play();
      }, { rootMargin: '0px 0px -25% 0px' });
      watch.observe(talkRing);
      ['pointerdown', 'focusin', 'keydown'].forEach((type) => talkRing.addEventListener(type, end));
      // pointing at a disc ends a running introduction; a pointer that a scroll carries over the waiting (still empty)
      // ring does not
      discs.forEach((d) => d.addEventListener('pointerenter', () => { if (state === 'playing') end(); }));
      root.addEventListener('rose:motion', end);
      reduceMotion.addEventListener('change', end);
    }
  }

  // ----- the add-ons deck (homepage, "Beyond the core plan"; site.css "Beyond the core plan") -----
  // [data-deck] is a deck of six cards browsed by hand: the chosen card in front, the next two behind it. Choosing a
  // card sets data-slot on every card (0 in front, 1 and 2 behind, back out of sight, prev the one before) and site.css
  // moves them. The bodies of the cards not in front are inert; their rails (the named edges of the two behind) are
  // buttons. The named buttons (aria-current on the chosen one; Left/Right, Up/Down, Home and End move along them), the
  // rails, Previous and Next (both wrap) and a sideways swipe on the deck (48px or more, mostly sideways; vertical
  // scrolling is left alone) all choose a card, and the choice is announced politely: its name and "2 of 6". Nothing
  // advances on its own. The first time a card is chosen its sample plays its one action as the card comes forward
  // (.is-playing, site.css), then stays finished until the page is reloaded; follow-up's sample is a signed sample
  // instead, which plays once the first time its card is in front on screen ("signed samples", told by rose:sync). The
  // first time the deck is on screen with motion allowed, the rear cards fan out and settle (.is-nudging), once. Under
  // reduced motion or with animations paused the cards swap instantly and the samples stay finished.
  const deckRoot = document.querySelector('[data-deck]');
  if (deckRoot) {
    const stack = deckRoot.querySelector('.deck');
    const cards = Array.from(stack.querySelectorAll('.deck-card'));
    const picks = Array.from(deckRoot.querySelectorAll('.deck-pick'));
    const count = deckRoot.querySelector('[data-deck-count]');
    const say = deckRoot.querySelector('[data-deck-say]');
    const titles = cards.map((card) => card.querySelector('.deck-title'));
    const n = cards.length;
    let index = 0;
    const slotOf = (i) => {
      const d = (i - index + n) % n;
      return d < 3 ? String(d) : d === n - 1 ? 'prev' : 'back';
    };
    const render = () => {
      cards.forEach((card, i) => {
        card.dataset.slot = slotOf(i);
        card.querySelector('.deck-body').toggleAttribute('inert', i !== index);
        card.classList.remove('is-playing');
      });
      picks.forEach((pick, i) => (i === index ? pick.setAttribute('aria-current', 'true') : pick.removeAttribute('aria-current')));
      count.textContent = `${index + 1} of ${n}`;
      stack.querySelectorAll('[data-sample]').forEach((el) => el.dispatchEvent(new Event('rose:sync')));
    };
    // each card's sample plays once, the first time its card is chosen (follow-up, first in front, is a signed sample)
    const played = new Set([0]);
    const play = () => {
      if (reduceMotion.matches || motionPaused() || played.has(index)) return;
      played.add(index);
      cards[index].classList.add('is-playing');
    };
    const select = (next) => {
      next = (next + n) % n;
      if (next === index) return;
      index = next;
      render();
      say.textContent = `${titles[index].textContent.trim()}, ${index + 1} of ${n}`;
      play();
    };
    render();

    deckRoot.addEventListener('click', (e) => {
      const go = e.target.closest('[data-deck-go]');
      const step = e.target.closest('[data-deck-step]');
      if (go) {
        select(Number(go.dataset.deckGo));
        // a rail leaves with its card's move to the front: focus follows to that card's title
        if (go.matches('.deck-rail')) titles[index].focus({ preventScroll: true });
      } else if (step) select(index + Number(step.dataset.deckStep));
    });
    const KEYS = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 };
    deckRoot.querySelector('.deck-picks').addEventListener('keydown', (e) => {
      const at = picks.indexOf(e.target.closest('.deck-pick'));
      if (at < 0) return;
      let next;
      if (e.key in KEYS) next = (at + KEYS[e.key] + n) % n;
      else if (e.key === 'Home') next = 0;
      else if (e.key === 'End') next = n - 1;
      else return;
      e.preventDefault();
      select(next);
      picks[next].focus();
    });
    // swipe: touch and pen only, decided on release; touch-action: pan-y (site.css) keeps vertical scrolling native
    let touch = null;
    stack.addEventListener('pointerdown', (e) => {
      touch = e.pointerType === 'mouse' ? null : { id: e.pointerId, x: e.clientX, y: e.clientY };
    });
    stack.addEventListener('pointercancel', () => { touch = null; });
    stack.addEventListener('pointerup', (e) => {
      if (!touch || e.pointerId !== touch.id) return;
      const dx = e.clientX - touch.x;
      const dy = e.clientY - touch.y;
      touch = null;
      if (Math.abs(dx) >= 48 && Math.abs(dx) > Math.abs(dy) * 1.5) select(index + (dx < 0 ? 1 : -1));
    });
    // a paused or reduced visitor gets the finished sample at once
    const settle = () => { if (reduceMotion.matches || motionPaused()) cards.forEach((card) => card.classList.remove('is-playing')); };
    root.addEventListener('rose:motion', settle);
    reduceMotion.addEventListener('change', settle);
    // the nudge: once, the first time the deck is on screen with motion allowed
    if ('IntersectionObserver' in window) {
      const nudge = new IntersectionObserver(([entry]) => {
        if (!entry.isIntersecting || reduceMotion.matches || motionPaused() || document.hidden) return;
        nudge.disconnect();
        stack.classList.add('is-nudging');
        stack.addEventListener('animationend', (e) => { if (e.target.matches('.deck-card')) stack.classList.remove('is-nudging'); });
      }, { threshold: 0.35 });
      nudge.observe(stack);
    }
  }

  // ----- campaign tracking -----
  // Keeps the tags a visitor arrived with for the length of the visit, so a request
  // sent from /contact still says which ad or link brought them to the site.
  const TRACK = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'fbclid'];
  let track = {};
  try { track = JSON.parse(sessionStorage.getItem('rose_track') || '{}') || {}; } catch { track = {}; }
  TRACK.forEach((key) => {
    const value = params.get(key);
    if (value) track[key] = value.slice(0, 200);
  });
  if (!track.landing_page) track.landing_page = location.pathname;
  try { sessionStorage.setItem('rose_track', JSON.stringify(track)); } catch { /* private mode: this page's tags still apply */ }
  document.querySelectorAll('input[data-track]').forEach((input) => {
    input.value = track[input.name] || '';
  });

  // ----- analytics -----
  // Form events for Tag Manager. They carry where the form is and what kind of error it was, never what was typed.
  const pushEvent = (event, formLocation, extra) => {
    (window.dataLayer = window.dataLayer || []).push(Object.assign({ event, form_location: formLocation }, extra));
  };

  // ----- email capture (homepage hero and closing) -----
  // Every form[data-capture] saves the address straight away (POST /api/book-a-call with form=hero, so the API treats it
  // as an email-only lead), then swaps the form for its signed note (data-done names it) whose [data-capture-more] link
  // opens the full form with the address filled in. Errors and status live inside the form (.field-error,
  // .hero-capture-status), so ids stay unique per form. Without this script the plain post comes back to
  // /?sent=1#hero-sent or /?sent=0#hero-not-sent, which the CSS shows by :target in the hero.
  const CAPTURE_FAILED = 'That didn\'t go through. Please try again in a minute.';
  const captureCheck = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) || 'Enter a full email address, like name@practice.com.';
  document.querySelectorAll('form[data-capture]').forEach((capture) => {
    const where = capture.dataset.capture;
    const done = document.getElementById(capture.dataset.done);
    const input = capture.elements.email;
    const error = capture.querySelector('.field-error');
    const status = capture.querySelector('.hero-capture-status');
    const button = capture.querySelector('button[type="submit"]');
    if (!done || !input || !error || !status || !button) return;
    const more = done.querySelector('[data-capture-more]');
    const say = (message) => {
      if (message) {
        input.setAttribute('aria-invalid', 'true');
        error.textContent = message;
        error.hidden = false;
      } else {
        input.removeAttribute('aria-invalid');
        error.hidden = true;
      }
    };
    const finish = (email) => {
      if (more) more.href = email ? '/contact?email=' + encodeURIComponent(email) + '#book' : '/contact#book';
      capture.hidden = true;
      done.hidden = false;
      done.focus({ preventScroll: true });
      pushEvent('hero_email', where);
    };

    // the no-script round trip always comes back to the hero
    if (capture.id === 'hero-form') {
      if (params.get('sent') === '1') finish('');
      if (params.get('sent') === '0') { status.textContent = CAPTURE_FAILED; pushEvent('form_error', where, { error_type: 'server' }); }
    }

    input.addEventListener('blur', () => {
      if (input.getAttribute('aria-invalid') === 'true' && captureCheck(input.value) === true) say('');
    });

    capture.addEventListener('submit', async (e) => {
      e.preventDefault();
      const checked = captureCheck(input.value);
      if (checked !== true) {
        say(checked);
        status.textContent = '';
        input.focus();
        pushEvent('form_error', where, { error_type: 'validation' });
        return;
      }
      say('');
      const data = Object.fromEntries(new FormData(capture).entries());
      data.email = input.value.trim();
      // how long the page has been open, for the handler's bot check
      data.elapsed_ms = Math.round(performance.now());
      button.disabled = true;
      status.textContent = 'Sending.';
      try {
        const response = await fetch(capture.action, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(data),
        });
        const result = await response.json().catch(() => ({}));
        if (response.ok && result.ok) { status.textContent = ''; return finish(data.email); }
        if (result.error === 'fields') {
          const again = captureCheck(input.value);
          say(again === true ? 'Please check this and send it again.' : again);
          status.textContent = '';
          input.focus();
          pushEvent('form_error', where, { error_type: 'validation' });
        } else {
          status.textContent = CAPTURE_FAILED;
          pushEvent('form_error', where, { error_type: 'server' });
        }
      } catch {
        status.textContent = CAPTURE_FAILED;
        pushEvent('form_error', where, { error_type: 'network' });
      }
      button.disabled = false;
    });
  });

  // ----- contact form -----
  const form = document.getElementById('book-form');
  if (!form) return;

  // the homepage's email form links here with ?email=, so that field starts filled in
  const given = params.get('email');
  if (given && form.elements.email && !form.elements.email.value) form.elements.email.value = given.trim().slice(0, 254);

  const done = document.getElementById('book-done');
  const status = document.getElementById('book-status');
  const button = form.querySelector('button[type="submit"]');
  const FAILED = 'That didn\'t go through. Please try again in a minute.';

  const CHECKS = {
    name: (v) => v.trim().length >= 2 || 'Add your name so we know who to ask for.',
    practice: (v) => v.trim().length >= 2 || 'Add the name of your practice.',
    email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) || 'Enter a full email address, like name@practice.com.',
    // optional: empty passes, anything typed has to look like a phone number
    phone: (v) => v.trim() === '' || v.replace(/\D/g, '').length >= 10 || 'That number looks too short. Add the area code, or leave this empty.',
  };

  // field errors are announced when they appear
  form.querySelectorAll('.field-error').forEach((el) => el.setAttribute('role', 'alert'));

  const setError = (name, message) => {
    const input = form.elements[name];
    const error = document.getElementById('err-' + name);
    if (!input || !error) return;
    if (message) {
      input.setAttribute('aria-invalid', 'true');
      error.textContent = message;
      error.hidden = false;
    } else {
      input.removeAttribute('aria-invalid');
      error.hidden = true;
    }
  };

  const validate = () => {
    let first = null;
    Object.keys(CHECKS).forEach((name) => {
      const result = CHECKS[name](form.elements[name].value);
      setError(name, result === true ? '' : result);
      if (result !== true && !first) first = form.elements[name];
    });
    return first;
  };

  const finish = () => {
    form.hidden = true;
    done.hidden = false;
    done.focus();
    pushEvent('book_call_request', 'contact');
  };

  // The no-JS fallback lands back here with ?sent=1 or ?sent=0.
  if (params.get('sent') === '1') finish();
  if (params.get('sent') === '0') { status.textContent = FAILED; pushEvent('form_error', 'contact', { error_type: 'server' }); }

  Object.keys(CHECKS).forEach((name) => {
    form.elements[name].addEventListener('blur', (e) => {
      if (e.target.getAttribute('aria-invalid') !== 'true') return;
      const result = CHECKS[name](e.target.value);
      if (result === true) setError(name, '');
    });
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const firstBad = validate();
    if (firstBad) {
      status.textContent = '';
      firstBad.focus();
      pushEvent('form_error', 'contact', { error_type: 'validation' });
      return;
    }

    const data = Object.fromEntries(new FormData(form).entries());
    data.help = new FormData(form).getAll('help');
    // how long the page has been open, for the handler's bot check
    data.elapsed_ms = Math.round(performance.now());

    button.disabled = true;
    status.textContent = 'Sending your request.';
    try {
      const response = await fetch(form.action, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await response.json().catch(() => ({}));
      if (response.ok && result.ok) return finish();
      if (result.error === 'fields' && Array.isArray(result.fields)) {
        result.fields.forEach((name) => {
          if (!CHECKS[name]) return;
          const again = CHECKS[name](form.elements[name].value);
          setError(name, again === true ? 'Please check this and send it again.' : again);
        });
        status.textContent = 'Please check the marked fields and send it again.';
        pushEvent('form_error', 'contact', { error_type: 'validation' });
      } else {
        status.textContent = FAILED;
        pushEvent('form_error', 'contact', { error_type: 'server' });
      }
    } catch {
      status.textContent = FAILED;
      pushEvent('form_error', 'contact', { error_type: 'network' });
    }
    button.disabled = false;
  });
})();

// ----- button hover -----
// Tells each button where the pointer came in, so its wash blooms out from that point.
(() => {
  const place = (e) => {
    const btn = e.target.closest && e.target.closest('.btn');
    if (!btn) return;
    const r = btn.getBoundingClientRect();
    btn.style.setProperty('--bx', `${e.clientX - r.left}px`);
    btn.style.setProperty('--by', `${e.clientY - r.top}px`);
  };
  document.addEventListener('pointerover', place, { passive: true });
})();
