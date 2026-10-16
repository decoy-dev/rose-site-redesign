/* Rose Practice Solutions homepage, redesign proposal (round 2).
   1. menu  2. pause animations  3. placements  4. email capture (preview only)  5. the founders' letter delivery
   6. the work samples, on a loop: place, mark (signed), rest */
(function () {
  'use strict';
  var html = document.documentElement;
  var stillMq = window.matchMedia('(prefers-reduced-motion: reduce)');

  /* ---------- 1. menu ---------- */
  var navToggle = document.querySelector('.nav-toggle');
  if (navToggle) {
    navToggle.addEventListener('click', function () {
      var open = html.classList.toggle('nav-open');
      navToggle.setAttribute('aria-expanded', String(open));
    });
  }
  document.querySelectorAll('.nav-sub-toggle').forEach(function (btn) {
    var item = btn.closest('.nav-item');
    btn.addEventListener('click', function () {
      var open = item.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', String(open));
    });
    item.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && item.classList.contains('is-open')) {
        item.classList.remove('is-open');
        btn.setAttribute('aria-expanded', 'false');
        btn.focus();
      }
    });
  });

  /* ---------- 2. pause animations (WCAG 2.2.2, the live site's convention) ----------
     Every [data-motion-toggle] (header icon, footer text) flips html.motion-paused, which stops every loop and
     placement and shows each work sample finished. The choice is kept on this device ('rose-motion'), and the head
     script restores it before first paint. */
  var MOTION_KEY = 'rose-motion';
  function motionPaused() { return html.classList.contains('motion-paused'); }
  var motionButtons = document.querySelectorAll('[data-motion-toggle]');
  function showMotionState() {
    motionButtons.forEach(function (btn) {
      var text = btn.querySelector('[data-motion-text]') || btn;
      text.textContent = motionPaused() ? btn.dataset.labelPlay : btn.dataset.labelPause;
    });
  }
  motionButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      html.classList.toggle('motion-paused');
      try { localStorage.setItem(MOTION_KEY, motionPaused() ? 'paused' : 'play'); } catch (e) { /* storage blocked */ }
      showMotionState();
      html.dispatchEvent(new CustomEvent('rose:motion'));
    });
  });
  showMotionState();

  /* ---------- 3. placements ----------
     [data-place] blocks settle 16px into place the first time they reach the screen (CSS does the motion, at full
     opacity, so nothing waits on a scroll to be readable). */
  var places = document.querySelectorAll('[data-place]');
  if ('IntersectionObserver' in window) {
    var placer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add('is-placed'); placer.unobserve(entry.target); }
      });
    }, { threshold: 0.15 });
    places.forEach(function (el) { placer.observe(el); });
  } else {
    places.forEach(function (el) { el.classList.add('is-placed'); });
  }

  /* ---------- 4. email capture ----------
     Preview only: validates and shows the signed note without sending anything. On the live site keep
     site.js's hero handler (POST /api/book-a-call with form=hero|closing), which this markup matches. */
  var EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  [['hero-form', 'hero-done'], ['start-form', 'start-done']].forEach(function (pair) {
    var form = document.getElementById(pair[0]);
    var done = document.getElementById(pair[1]);
    if (!form || !done) return;
    var input = form.querySelector('input[type="email"]');
    var err = form.querySelector('.field-error');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var value = input.value.trim();
      if (!EMAIL.test(value)) {
        input.setAttribute('aria-invalid', 'true');
        err.textContent = value ? 'That email address looks incomplete. Please check it.' : 'Please enter your email address.';
        err.hidden = false;
        input.focus();
        return;
      }
      input.removeAttribute('aria-invalid');
      err.hidden = true;
      form.hidden = true;
      done.hidden = false;
      done.focus();
    });
    input.addEventListener('input', function () {
      if (input.getAttribute('aria-invalid') === 'true' && EMAIL.test(input.value.trim())) {
        input.removeAttribute('aria-invalid');
        err.hidden = true;
      }
    });
  });

  /* ---------- 5. the founders' letter ----------
     Once per load, screens wider than 900px, motion allowed. About 2.9s, every beat on transform, opacity or filter:
       0.00  the envelope drops in from close to the camera: large, tilted, out of focus. Focus follows height,
             so it sharpens as it falls; a wide, faint, far-offset shadow converges under it.
       0.75  contact. It slides a few px with friction and settles, sharp, on a tight shadow.
       1.20  (after a beat) the tear strip peels left to right, one hinged segment at a time, showing the
             torn fibre edge; the strip is flicked away up and to the right.
       1.60  letter and envelope are pulled apart: the letter up and slightly off the table (a touch larger,
             its shadow wider), the envelope down until it clears; at 2.10 the envelope is tossed off the right.
       2.15  the letter is set down at its resting angle.
     The letter is the only real content; everything else is aria-hidden, built here and removed at the end,
     so the resting state is exactly the no-script state. */
  function deliver() {
    var gsap = window.gsap;
    var stage = document.querySelector('.note-stage');
    var held = html.classList.contains('will-deliver');
    clearTimeout(window.__deliverFallback);
    if (!held || !gsap || !stage || stillMq.matches || !stage.offsetWidth) {
      html.classList.remove('will-deliver');
      return;
    }
    var rig = stage.querySelector('.note-rig');
    var sheet = rig.querySelector('.note-sheet');
    var shade = sheet.querySelector('.note-shade');

    // geometry: an envelope a little bigger than the letter, with a 22px tear strip along the top
    var W = sheet.offsetWidth, H = sheet.offsetHeight;
    var PAD = { t: 14, r: 14, b: 16, l: 14 };
    var STRIP = 22;
    var envW = W + PAD.l + PAD.r, envH = H + PAD.t + PAD.b;
    rig.style.setProperty('--env-inset', -PAD.t + 'px ' + -PAD.r + 'px ' + -PAD.b + 'px ' + -PAD.l + 'px');
    rig.style.setProperty('--env-w', envW + 'px');
    rig.style.setProperty('--env-h', envH + 'px');
    rig.style.setProperty('--strip-h', STRIP + 'px');

    // one irregular torn edge (1-2px amplitude, 5-13px spacing), shared by the envelope and its strip
    var seed = 20261015;
    function rand() { seed = (seed + 0x6D2B79F5) | 0; var t = Math.imul(seed ^ (seed >>> 15), 1 | seed); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }
    var edge = [];
    for (var x = 0; x < envW; x += 5 + rand() * 8) edge.push([x, STRIP + (rand() * 2 - 1) * 1.6 + Math.sin(x / 37) * .6]);
    edge.push([envW, STRIP + (rand() * 2 - 1) * 1.2]);
    function yAt(px) {
      for (var i = 1; i < edge.length; i++) {
        if (edge[i][0] >= px) { var a = edge[i - 1], b = edge[i]; return a[1] + (b[1] - a[1]) * ((px - a[0]) / (b[0] - a[0] || 1)); }
      }
      return edge[edge.length - 1][1];
    }
    function pt(p) { return p[0].toFixed(1) + 'px ' + p[1].toFixed(1) + 'px'; }

    function el(tag, cls, parent) { var n = document.createElement(tag); if (cls) n.className = cls; if (parent) parent.appendChild(n); return n; }

    // shadows sit under the letter; the envelope front and its strip sit over it
    var soft = el('div', 'env-shadow env-shadow--soft');
    var contact = el('div', 'env-shadow env-shadow--contact');
    var front = el('div', 'env-front');
    var paper = el('div', 'env-paper', front);
    paper.style.clipPath = 'polygon(' + edge.map(pt).join(',') + ',' + envW + 'px ' + envH + 'px,0px ' + envH + 'px)';
    var print = el('div', 'env-print', paper);
    print.innerHTML =
      '<span class="env-return"><img src="assets/logo/rose-mark.svg" alt="">Rose Practice Solutions</span>' +
      '<span class="env-stamp"></span>' +
      '<em>For your practice</em>';
    var fibre = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    fibre.setAttribute('class', 'env-fibre');
    fibre.setAttribute('viewBox', '0 0 ' + envW + ' 40');
    fibre.innerHTML = '<path d="M' + edge.map(function (p) { return p[0].toFixed(1) + ' ' + (p[1] + .4).toFixed(1); }).join(' L') + '"/>';
    front.appendChild(fibre);

    // the strip: six segments, each hinged at its lower right and nested so a lift carries everything to its left
    var strip = el('div', 'env-strip');
    strip.style.cssText = 'left:' + -PAD.l + 'px;top:' + -PAD.t + 'px;width:' + envW + 'px;height:' + (STRIP + 4) + 'px;';
    var N = 6, segW = envW / N, segs = [];
    var parent = strip, parentX = 0;
    for (var i = N - 1; i >= 0; i--) {
      var x0 = i * segW, x1 = Math.min(envW, (i + 1) * segW + 1);
      var seg = el('div', 'env-seg-pivot', parent);
      seg.style.cssText = 'position:absolute;top:0;left:' + (x0 - parentX).toFixed(1) + 'px;width:' + (x1 - x0).toFixed(1) + 'px;height:' + (STRIP + 4) + 'px;transform-origin:100% ' + STRIP + 'px;';
      var face = el('div', 'env-seg', seg);
      face.style.cssText = 'left:0;width:100%;background-position:' + (-x0).toFixed(1) + 'px 0;';
      var pts = ['0px 0px', (x1 - x0).toFixed(1) + 'px 0px'];
      var local = edge.filter(function (p) { return p[0] > x0 && p[0] < x1; });
      pts.push((x1 - x0).toFixed(1) + 'px ' + (yAt(x1) + 1).toFixed(1) + 'px');
      for (var k = local.length - 1; k >= 0; k--) pts.push((local[k][0] - x0).toFixed(1) + 'px ' + (local[k][1] + 1).toFixed(1) + 'px');
      pts.push('0px ' + (yAt(x0) + 1).toFixed(1) + 'px');
      face.style.clipPath = 'polygon(' + pts.join(',') + ')';
      segs[i] = seg;
      parent = seg; parentX = x0;
    }

    rig.insertBefore(contact, sheet);
    rig.insertBefore(soft, contact);
    rig.appendChild(front);
    rig.appendChild(strip);

    var envParts = [front, soft, contact];
    // a showpiece intro should pause on a slow frame, never skip a beat: treat any frame over 100ms as 16ms
    gsap.ticker.lagSmoothing(100, 16);
    var tl = gsap.timeline({ delay: 0.12, onComplete: finish });

    // start state, then release the CSS hold
    gsap.set(rig, { x: 96, y: -150, scale: 1.55, rotation: -9, filter: 'blur(12px)', opacity: 0, transformOrigin: '50% 50%', force3D: true });
    gsap.set(sheet, { rotation: 0 });
    gsap.set(shade, { opacity: 0 });
    gsap.set(soft, { x: 72, y: 124, scale: 1.35, opacity: 0.24 });
    gsap.set(segs, { transformPerspective: 500 });
    html.classList.remove('will-deliver');

    // 1. the drop. Focus follows height: scale, position and blur share one ease, quadratic like a fall from rest.
    tl.to(rig, { opacity: 1, duration: 0.12, ease: 'none' }, 0)
      .to(rig, { x: -8, y: -4, scale: 1.008, filter: 'blur(0px)', duration: 0.75, ease: 'power1.in' }, 0)
      .to(rig, { rotation: -2.4, duration: 0.75, ease: 'sine.inOut' }, 0)
      .to(soft, { x: 4, y: 8, scale: 1, opacity: 0, duration: 0.77, ease: 'power1.in' }, 0)
      .to(contact, { opacity: 1, duration: 0.28, ease: 'power2.out' }, 0.58)
    // 2. contact: a short frictional slide
      .to(rig, { x: 0, y: 0, scale: 1, rotation: -1, duration: 0.3, ease: 'power3.out' }, 0.75)
    // 3. the tear, after a beat
      .to(fibre, { opacity: 1, duration: 0.4, ease: 'none' }, 1.2);
    for (var s = 0; s < N; s++) {
      tl.to(segs[s], { rotation: -9, rotationX: -28, y: -3, duration: 0.2, ease: 'power1.inOut' }, 1.2 + s * 0.05);
    }
    tl.to(strip, { x: 170, y: -120, rotation: -30, duration: 0.42, ease: 'power2.in' }, 1.55)
      .to(strip, { opacity: 0, duration: 0.14, ease: 'none' }, 1.83)
    // 4. two hands pull them apart: the letter up and a little off the table, the envelope down until it clears...
      .to(sheet, { y: -64, scale: 1.03, duration: 0.55, ease: 'power2.inOut' }, 1.6)
      .to(envParts, { y: H - 36, x: 6, duration: 0.55, ease: 'power2.inOut' }, 1.6)
      .to(shade, { opacity: 1, x: 8, y: 16, duration: 0.45, ease: 'power2.out' }, 1.7)
      .to(shade, { x: 0, y: 0, duration: 0.7, ease: 'power3.out' }, 2.15)
    // ...then the envelope is tossed off the right of the panel
      .to(envParts, { x: 560, y: H + 200, rotation: 32, duration: 0.45, ease: 'power2.in' }, 2.1)
    // 5. the letter is set down at its resting angle
      .to(sheet, { y: 0, scale: 1, rotation: -1.5, duration: 0.7, ease: 'power3.out' }, 2.15)
      .to(rig, { rotation: 0, duration: 0.7, ease: 'power3.out' }, 2.15);

    function finish() {
      [soft, contact, front, strip].forEach(function (n) { n.remove(); });
      gsap.set([rig, sheet, shade], { clearProps: 'all' });
      ['--env-inset', '--env-w', '--env-h', '--strip-h'].forEach(function (p) { rig.style.removeProperty(p); });
      gsap.ticker.lagSmoothing(500, 33);
    }
    // a visitor who switches on reduced motion, or pauses animations, mid-delivery gets the resting state at once
    stillMq.addEventListener && stillMq.addEventListener('change', function () { if (stillMq.matches) tl.progress(1); });
    html.addEventListener('rose:motion', function () { if (motionPaused()) tl.progress(1); });
  }

  // Wait for the type (the letter's height depends on it) and for both paper textures to be decoded, so the
  // first frames of the drop aren't spent decoding images. 1.2s at most, then it runs regardless.
  function decoded(src) {
    var img = new Image();
    img.src = src;
    return img.decode ? img.decode().catch(function () {}) : Promise.resolve();
  }
  var ready = Promise.all([
    document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve(),
    decoded('assets/img/paper-letter.webp'),
    decoded('assets/img/paper-envelope.webp')
  ]);
  Promise.race([ready, new Promise(function (r) { setTimeout(r, 1200); })]).then(deliver);

  /* ---------- 6. the work samples, on a loop ----------
     Each [data-loop] sample replays its job in three beats: place (the work lands), mark (it is signed: the name
     and role, then the Rose stamp pressed on), rest (it holds, finished). The static markup IS the finished state,
     and every timeline starts and ends on it, so a repeat never jumps and a pause can always show it.
     A loop is built the first time it reaches the screen (so measurements use loaded fonts), runs only while on
     screen and the tab is visible, and stops on its finished state when the visitor pauses animations. Under
     prefers-reduced-motion nothing is built. Only transform, opacity and colour change. */
  var loops = [];
  function motionOK() { return !!window.gsap && !stillMq.matches && !motionPaused() && !document.hidden; }
  function syncLoop(loop) {
    if (loop.live && motionOK() && !loop.tl) loop.tl = BUILD[loop.kind] ? BUILD[loop.kind](loop.el) : null;
    if (!loop.tl) return;
    if (loop.live && motionOK()) {
      if (loop.fresh) { loop.fresh = false; loop.tl.restart(); } else loop.tl.resume();
    } else if (!document.hidden && !motionOK()) {
      loop.tl.pause().seek('rest');    // paused by the visitor: show it finished, and start over on play
      loop.fresh = true;
    } else {
      loop.tl.pause();                 // off screen or tab hidden: hold where it is
    }
  }
  function syncAll() { loops.forEach(syncLoop); }

  // the stamp, pressed on: down fast and a touch past, then settled (no bounce). Its resting tilt lives in CSS.
  function press(tl, stamp, at) {
    tl.fromTo(stamp, { autoAlpha: 0, scale: 1.7, rotation: -24 }, { autoAlpha: 0.9, scale: 0.93, rotation: 0, duration: 0.24, ease: 'power2.in', immediateRender: false }, at)
      .to(stamp, { scale: 1, duration: 0.2, ease: 'power2.out' }, at + 0.24);
  }
  function hold(tl, at, seconds) { tl.addLabel('rest', at).to({}, { duration: seconds }, 'rest'); }

  var BUILD = {
    // hero and closing: the five faces take turns stepping forward (one of us will reply)
    faces: function (el) {
      var items = el.querySelectorAll('li');
      var imgs = el.querySelectorAll('img');
      var rest = getComputedStyle(imgs[0]).borderTopColor;
      var lit = el.classList.contains('faces--light') ? '#3F4B39' : '#FBF8F2';
      var tl = gsap.timeline({ paused: true, repeat: -1 });
      items.forEach(function (li, i) {
        var at = i * 1.4;
        tl.set(li, { zIndex: 2 }, at)
          .to(li, { y: -6, scale: 1.08, duration: 0.45, ease: 'power3.out' }, at)
          .to(imgs[i], { borderColor: lit, duration: 0.3 }, at)
          .to(li, { y: 0, scale: 1, duration: 0.5, ease: 'power2.inOut' }, at + 1.1)
          .to(imgs[i], { borderColor: rest, duration: 0.4 }, at + 1.1)
          .set(li, { zIndex: 0 }, at + 1.6);
      });
      hold(tl, items.length * 1.4 + 0.3, 1.2);
      return tl;
    },

    // Websites and SEO: the query clears and types itself, this month's page lands over last month's, signed
    serp: function (el) {
      var type = el.querySelector('[data-type]');
      var chars = type.textContent.split('').map(function (c) {
        var s = document.createElement('span');
        s.textContent = c;
        return s;
      });
      type.textContent = '';
      chars.forEach(function (s) { type.appendChild(s); });
      var result = el.querySelector('[data-part="result"]');
      var sign = el.querySelector('[data-part="sign"]');
      var stamp = sign.querySelector('.stamp');
      var ghost = el.querySelector('.screen--ghost');
      gsap.set(ghost, { x: 14, y: -10, rotation: 2 });   // its resting place, so the loop starts and ends here
      var typed = 0.9 + chars.length * 0.055;
      var tl = gsap.timeline({ paused: true, repeat: -1 });
      tl.to([result, sign], { autoAlpha: 0, y: 8, duration: 0.35, ease: 'power2.in' }, 0)
        .to(chars.slice().reverse(), { autoAlpha: 0, duration: 0.01, stagger: 0.012 }, 0.3)
        .to(ghost, { x: 0, y: 0, rotation: 0, duration: 0.6, ease: 'power3.out' }, 0.3)
        .to(chars, { autoAlpha: 1, duration: 0.01, stagger: 0.055, ease: 'none' }, 0.9)
        .fromTo(result, { autoAlpha: 0, y: 14, scale: 0.98 }, { autoAlpha: 1, y: 0, scale: 1, duration: 0.6, ease: 'power3.out', immediateRender: false }, typed + 0.3)
        .to(ghost, { x: 14, y: -10, rotation: 2, duration: 0.6, ease: 'power3.out' }, typed + 0.3)
        .fromTo(sign, { autoAlpha: 0, y: 8 }, { autoAlpha: 1, y: 0, duration: 0.4, ease: 'power3.out', immediateRender: false }, typed + 0.9);
      press(tl, stamp, typed + 1.15);
      hold(tl, typed + 1.6, 4.2);
      return tl;
    },

    // Google and Meta ads: a consult arrives, the band traces it to its source row, the source lights, signed
    ledger: function (el) {
      var arrival = el.querySelector('[data-part="arrival"]');
      var hl = el.querySelector('[data-part="hl"]');
      var key = el.querySelector('li.is-key b');
      var sign = el.querySelector('[data-part="sign"]');
      var stamp = sign.querySelector('.stamp');
      var row = key.closest('li').offsetHeight;
      var tl = gsap.timeline({ paused: true, repeat: -1 });
      tl.to([arrival, sign, hl], { autoAlpha: 0, duration: 0.35, ease: 'power2.in' }, 0)
        .to(key, { backgroundColor: 'rgba(63, 75, 57, 0)', color: '#262A23', duration: 0.3 }, 0.1)
        .set(hl, { y: -row }, 0.4)
        .fromTo(arrival, { autoAlpha: 0, y: -14 }, { autoAlpha: 1, y: 0, duration: 0.55, ease: 'power3.out', immediateRender: false }, 0.8)
        .to(hl, { autoAlpha: 1, duration: 0.25 }, 1.5)
        .to(hl, { y: 0, duration: 0.45, ease: 'power3.out' }, 1.75)
        .to(key, { backgroundColor: '#3F4B39', color: '#FBF8F2', duration: 0.3 }, 2.1)
        .fromTo(sign, { autoAlpha: 0, y: 8 }, { autoAlpha: 1, y: 0, duration: 0.4, ease: 'power3.out', immediateRender: false }, 2.5);
      press(tl, stamp, 2.75);
      hold(tl, 3.2, 4.3);
      return tl;
    },

    // Follow-up: New, then the call goes out (the ring), then the consult lands in the schedule, signed
    followup: function (el) {
      var chips = Array.prototype.map.call(el.querySelectorAll('.status-step'), function (s) { return s.querySelector('.chip'); });
      var ring = el.querySelector('.ring');
      var slot = el.querySelector('[data-part="slot"]');
      var sign = el.querySelector('[data-part="sign"]');
      var stamp = sign.querySelector('.stamp');
      var S = {
        todo: { backgroundColor: 'rgba(251, 248, 242, 0)', color: '#56654E', borderColor: '#56654E' },
        done: { backgroundColor: '#E6EADF', color: '#3F4B39', borderColor: 'rgba(63, 75, 57, 0)' },
        now: { backgroundColor: '#3F4B39', color: '#FBF8F2', borderColor: '#3F4B39' }
      };
      var tl = gsap.timeline({ paused: true, repeat: -1 });
      function state(at, a, b, c) {
        [a, b, c].forEach(function (k, i) { tl.to(chips[i], Object.assign({ duration: 0.3, ease: 'power2.out' }, S[k]), at); });
      }
      tl.to([slot, sign], { autoAlpha: 0, y: 6, duration: 0.35, ease: 'power2.in' }, 0);
      state(0.35, 'now', 'todo', 'todo');
      state(1.2, 'done', 'now', 'todo');
      [1.3, 1.85].forEach(function (at) {
        tl.fromTo(ring, { autoAlpha: 0.8, scale: 0.6 }, { autoAlpha: 0, scale: 1.9, duration: 0.9, ease: 'power2.out', immediateRender: false }, at);
      });
      state(2.9, 'done', 'done', 'now');
      tl.fromTo(slot, { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: 0.55, ease: 'power3.out', immediateRender: false }, 3.0)
        .fromTo(sign, { autoAlpha: 0, y: 8 }, { autoAlpha: 1, y: 0, duration: 0.4, ease: 'power3.out', immediateRender: false }, 3.6);
      press(tl, stamp, 3.85);
      hold(tl, 4.3, 4.2);
      return tl;
    },

    // The monthly report: a band walks to each signed change and the stamp is pressed on it
    report: function (el) {
      var items = el.querySelectorAll('[data-item]');
      var stamps = el.querySelectorAll('.feed .stamp');
      var hl = el.querySelector('[data-part="hl"]');
      function box(li) { return { y: li.offsetTop, height: li.offsetHeight }; }
      var tl = gsap.timeline({ paused: true, repeat: -1 });
      tl.to(stamps, { autoAlpha: 0, duration: 0.3, ease: 'power2.in' }, 0)
        .set(hl, box(items[0]), 0.3)
        .to(hl, { autoAlpha: 1, duration: 0.35 }, 0.5);
      press(tl, stamps[0], 0.95);
      tl.to(hl, Object.assign({ duration: 0.5, ease: 'power3.out' }, box(items[1])), 2.6);
      press(tl, stamps[1], 3.1);
      tl.to(hl, { autoAlpha: 0, duration: 0.5 }, 3.8);
      hold(tl, 4.3, 4);
      return tl;
    }
  };

  document.querySelectorAll('[data-loop]').forEach(function (el) {
    loops.push({ el: el, kind: el.getAttribute('data-loop'), live: false, fresh: true, tl: null });
  });
  if ('IntersectionObserver' in window) {
    var onScreen = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var loop = loops.filter(function (l) { return l.el === entry.target; })[0];
        loop.live = entry.isIntersecting;
        entry.target.classList.toggle('is-live', entry.isIntersecting);
        syncLoop(loop);
      });
    }, { threshold: 0.35 });
    loops.forEach(function (l) { l.el.classList.add('is-looping'); onScreen.observe(l.el); });
  }
  document.addEventListener('visibilitychange', syncAll);
  html.addEventListener('rose:motion', syncAll);
  if (stillMq.addEventListener) stillMq.addEventListener('change', syncAll);
})();
