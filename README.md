# Rose Practice Solutions homepage redesign

A proposed homepage for rosepracticesolutions.com, built October 2026 (round 2).

- **Live preview:** https://decoy-dev.github.io/rose-site-redesign/. It is `noindex` and canonicalised to the real site. GitHub Actions redeploys `site/` on every push to `main` (`.github/workflows/pages.yml`).
- **Locally:** open `site/index.html` in a browser; it runs with no build step or server.
- **Quick look:** watch `shots/final-r2/tour-1440.mp4`, a scroll through the page with every animation running.

It keeps the live site's system: Instrument Serif and Plus Jakarta Sans, the nine-colour palette, rose only in italics, no eyebrows and no gradients. It also reuses the live class names and conventions (`btn`, `chip`, `screen`, `serp`, `feed`, `status`, `[data-loop]`, `html.motion-paused`, `[data-motion-toggle]`), so sections can be moved into `site.css` and `site.js` one at a time. What changes is the order of the page, the amount of copy, the people on it, the motion and the hero letter.

Two deliberate breaks from her guideline, both at Chris's request: section headers are centred, and the page has passive looping motion instead of only "restrained" motion.

## What changed and why

| | Live | Redesign |
|---|---|---|
| Words a visitor reads (excluding mock-up cards) | 1,097 | 571 |
| Words above the fold at 1440px | 153 | ~90 |
| Photos of people | 0 | the five founders, in the hero, the team section and the closing form (placeholders, see below) |
| Page length at 1440px | 7,821px | 7,378px |

Measured with `bun tools/words.mjs <url|file> 1440`.

**Flow.** The page now follows the order of ReadyCloud's landing pages: promise, proof, what you get, how it works, who does it, price, objections, the ask.

1. **Hero.** One promise: *More consults booked, by people you'll actually know.* Under it are a one-line lede and the public price, "Plans from $2,000 a month", as an underlined link to the pricing section. Then comes the email capture, kept as requested: a cream-outlined field beside a cream button. Five founder faces sit next to "A founder replies within one business day". On the right is the founders' letter, cut from 80 words to 31.
2. **Proof strip.** Four claims the site already makes: 30+ years, 5 founders, 1 signed report a month, 100% yours.
3. **One plan, judged by consults *booked*.** Websites and SEO, then Google and Meta ads, as alternating rows with their product cards. Patient follow-up gets its own panel: *We bring in the leads. Then we call them.*
4. **What happens after you say *yes*.** Four steps beside the signed monthly report. This replaces the "What changes for your practice" grid and the four commitments, which repeated the services.
5. **The team.** Five portraits, moved from second-to-last and from role circles with no faces.
6. **Pricing.** The three tiers and the terms. Public pricing is one of the strongest things they have, and the live homepage never mentioned it.
7. **FAQ.** Four questions, with shorter answers.
8. **Closing.** *Tended, not templated.*, the email form again, and the faces of the founders who will reply.

Cut or merged: the hero letter's three paragraphs, the add-on carousel (now one line), the ortho/dental statement (now an FAQ), "What changes for your practice", "Marketing that earns its keep", the 30+ years orbit diagram (now in the proof strip), and the four commitments (folded into the steps, proof strip and team).

## Round 2: motion, contrast, fidelity

Chris's notes on the first draft asked for four things:
- more passive and looping motion across the page
- higher-contrast CTAs
- higher-fidelity, animated graphics
- centred section headers

He also asked for something more fun and distinct, with a value prop that can't be missed. The plan came from a design-advisor pass. The page took more motion than the advisor suggested, because Chris asked for it to be consistent.

**One motion language, "every change, signed."** Every work sample replays its job in three beats: **place** (the work lands), **mark** (it is signed with a name, a role and the Rose stamp pressed on), **rest** (it holds, finished). The stamp is the bloom inside a double ring in deep-rose ink (`assets/img/stamp-signed.svg`). It ties the samples to the hero letter and to the brand idea that every piece of work carries the name of whoever did it.

| Sample | Loop (about 8 to 10s, on screen only) |
|---|---|
| Websites and SEO | The search box clears and types "braces for adults near me". This month's local page lands over last month's, which slides back, and the page is signed by `[Name] · Web and SEO`. |
| Google and Meta ads | A "New consult" card arrives. A band traces it down the source ledger to Search ads, the source lights up, and it is signed by `[Name] · Paid media`. The old chart's unequal bars implied results, so the ledger replaces them. |
| Patient follow-up | New → Called (a ring pulses on the call) → Consult booked. The appointment lands in the schedule, signed by `[Name] · Patient follow-up`. |
| Monthly report | A band walks to each signed change, and the stamp is pressed on each one. |
| Hero and closing faces | The five founders step forward one at a time: one of them will reply. |
| Team | The portraits breathe very slowly (18s, out of step with each other). They hold still on hover. |
| Pricing | The stamp is pressed onto the agreement once, as it arrives. |
| Every work sample | It settles 16px into place the first time it reaches the screen, always at full opacity. |

**Motion rules:**
- **Timing:** placements and settles use ease-out-quint at 600ms, the stamp press is 440ms, and ambient cycles use a sine ease.
- **Loops:**
  - Each loop is built the first time it reaches the screen.
  - It runs only while on screen and while the tab is visible.
  - It starts and ends on its finished state, so a repeat never jumps.
  - Only transform, opacity and colour change.
- **Pausing:**
  - A pause/play control sits in the header (icon) and the footer (text), as WCAG 2.2.2 requires.
  - Pausing jumps every sample to its finished, signed state and skips the letter delivery.
  - The choice is remembered on the device (`localStorage` key `rose-motion`, as on the live site).
  - Reduced motion shows the finished page with no controls.
  - `bun tools/motion-check.mjs site/index.html` proves all of this.

**CTAs.** These are the advisor's contrast numbers.

| Tier | Treatment | Contrast |
|---|---|---|
| Primary (header, closing) | Forest fill, cream label | 8.7:1 |
| Hero primary | Cream fill, forest label | 8.7:1 |
| Secondary (every "See…", "How follow-up works", "Meet the founders", "See what's in the plan") | Cream fill, 2px forest outline, forest label | 8.7:1 |
| Inline links | Text colour, always underlined | 13.78:1 on cream, 8.7:1 on forest |

Primary buttons wash to ink on hover; the hero and secondary buttons wash to sage mist (7.55:1). The faint sage text links of round 1 are gone.

**Other changes:**
- Centred headers on services, how it works, team, pricing, FAQ and closing. How it works now has its header above both columns. The team header is no longer split.
- The follow-up price chip sits under its heading instead of above it.
- On phones, the proof strip is compact rows.
- A 55px horizontal overflow on phones, caused by the SEO card, is fixed.
- The footer no longer repeats "Tended, not templated." under the closing section.

## The hero letter

The delivery now plays once per load on screens wider than 900px, and only when motion is allowed. It lasts about 2.9s and can be watched in `shots/final/hero-delivery.mp4`.

1. **Drop.** The envelope falls from close to the camera: large, tilted and out of focus. Focus follows height, so it sharpens as it falls, while a wide, faint shadow converges into a tight one.
2. **Landing.** It lands with a short frictional slide.
3. **Tear.** After a beat, a tear strip peels off left to right in six hinged segments that share one irregular torn edge, then flicks away.
4. **Pull apart.** The letter and envelope separate: the letter moves up and slightly off the table, and the envelope moves down until it clears. The envelope is then tossed off the right of the panel.
5. **Rest.** The letter is set down at -1.5°.

The paper is a scanned-fibre texture with cockle, edge wear, light falloff and a flattened dog-ear crease baked into `site/assets/img/paper-letter.webp`. The type is multiplied into the grain. The envelope uses the same stock, deepened toward sage, with a perforated stamp of the bloom.

The motion and material spec came from a design-advisor pass and was then pushed further toward realism, as you asked.

The intro is built to fail safe:
- With reduced motion, without JavaScript, on phones, or if GSAP fails to load, the letter is simply there. A 2.5s fallback in `<head>` covers a script that never arrives.
- The envelope, strip and shadows are `aria-hidden`. They're built by `home.js` and removed when the delivery ends, so the resting state is the no-script state.
- Only transform, opacity and one filter animate.

The paper, envelope stock, envelope stamp and the "signed" stamp all come from `python3 tools/bake_paper.py`, which uses `generated/paper.webp` and the logo as sources. To change the crease, the tint or the light, edit and rerun that script; don't add CSS gradients.

## Before launch

- [ ] **Replace every placeholder photo.** All five founder portraits are AI-generated stand-ins: every `img[data-placeholder]` and every file named `assets/img/founders/placeholder-*`. The live AI policy says "No generated patients or generated smiles" and the design guideline says real people only, so these must not ship.
- [ ] **Fill in `[Role]` for Jules, Brandon and Charlotte, and the fifth founder's `[Name]` and `[Role]`.** Kate Rose is labelled CEO. The sample cards' sign-offs (`[Name] · Web and SEO` and so on) can carry real names once roles are confirmed.
- [ ] **Confirm the claims carried over from the live site:** 30+ years, one business day, the pricing, and 90 days then month to month.
- [ ] **Keep `site.js`'s real form handler.** The forms here use the same markup and `action="/api/book-a-call"`, but `home.js` only validates them and shows the thank-you note, so nothing is sent from this preview.
- [ ] **Make links root-relative.** They point at the live site so the preview works on its own.

## Design-check status

`node ~/Projects/rose-design-system/design-system/check/rose-design-check.mjs site` reports 3 blocks, all `shadow-from-scale`, all on the hero letter. The token shadows are tuned for cream surfaces and vanish on forest, so the letter and envelope use ink at a higher strength (`--shadow-on-strong`). That is the one deliberate exception. Either bless it in `rules.json` for `.note-shade` and `.env-shadow--contact`, or swap in `--shadow-3` and accept a flatter letter. Everything else passes, with 0 warnings.

## Files

- `site/`: the redesign (`index.html`, `assets/home.css`, `assets/home.js`, plus the live `tokens.css`, fonts, logos, motifs and `vendor/gsap.min.js`).
- `context/` and `source/` (not in git; kept on the working machine only): dated session notes, and a mirror of the live homepage's code for reference.
- `generated/`: the raw image-model outputs: the portraits and the paper scan.
- `shots/`:
  - screenshots of the live site and of each round of the redesign
  - `final/`: round 1
  - `final-r2/`: round 2 stills plus `tour-1440.mp4`
  - `r2/loops/`: each loop recorded, with contact sheets
  - `states/`: the fallback states
- `tools/` (Bun + puppeteer-core with the installed Chrome; `bun install` once inside `tools/`), plus `bake_paper.py`, `sheet.py` and `vsheet.py` (Python with Pillow and NumPy; `vsheet.py` also needs ffmpeg):
  - `shoot.mjs <file|url> <out.png> [width] [full|fold]`: full-page or fold screenshot. `STILL=1` emulates reduced motion, so every sample is shown finished.
  - `record.mjs <file|url> <out.webm> [ms] [width] [crop]`: video of the page load.
  - `record-section.mjs <file|url> <selector> <out.webm> [ms]`: video of one looping section.
  - `tour.mjs <file|url> <out.webm> [width] [secondsPerScreen]`: a slow scroll through the whole page.
  - `vsheet.py <video> <out.png> [every_s] [cols] [thumb_w] [crop]`: contact sheet of a video.
  - `filmstrip.mjs` + `sheet.py`: frame contact sheets of an animation.
  - `zoom.mjs`: a 2x crop.
  - `states.mjs <file> <outdir>`: the hero with reduced motion, without JavaScript and with GSAP blocked.
  - `interact.mjs`: smoke test for form errors and success, envelope cleanup and the mobile menu.
  - `motion-check.mjs <file>`: loops run on screen, pause to their finished state, the choice survives a reload, and reduced motion is static.
  - `overflow.mjs`: lists anything wider than a 390px viewport.
  - `words.mjs <file|url> [width]`: prose and above-the-fold word counts.
