# Changes to rosepracticesolutions.com, for Jules

Every change in this file was made to an exact copy of the live site, so each one can be applied to your source files the same way: same file, same lines, same before and after.

## Baseline

- **Copied from:** https://rosepracticesolutions.com on 2026-10-19 at 19:02 UTC. The homepage's `Last-Modified` was Mon, 19 Oct 2026 18:09:49 GMT, so the copy includes today's deploy.
- **What's in it:** all 17 pages, which are the 15 in `sitemap.xml` plus `/components` and `/404`, and every file they load: CSS, JS, fonts, logos, motifs, the paper and stamp images, icons, the 15 OG images, `robots.txt`, `sitemap.xml`, `llms.txt`, `site.webmanifest` and `.well-known/security.txt`. That's 67 files in `site/`.
- **Exact copy:** each file was saved byte for byte as served, then fetched again and compared by SHA-256, with no differences. `manifest.json` lists every URL with its file, ETag, Last-Modified and hash.
- **Same layout as the live URLs:** `/about` is `site/about.html`, `/services/paid-ads` is `site/services/paid-ads.html`, and `/` is `site/index.html`.
- **Not copied:** `/api/book-a-call`. It's a server function, so the copy's forms don't send anything.

If a file below has changed in your source since this date, check it against the **Before** block first. Every Before block is quoted exactly from the copy.

## How to use this file

There are fifteen changes, from three rounds of Chris's feedback. Change 12, the footer, is on every page. The rest are on the homepage (`index.html`, `assets/site.css`, `assets/site.js`) and its entries on `/components`.

You can apply them in either of two ways:
- **All at once:** apply `changes.patch`, next to this file, from your site's root with `git apply changes.patch`. Its paths start with `site/`, so use `git apply -p2` if your files sit at the repository root.
- **One at a time:** follow the changes below in order. Each one gives what changed and why, how it behaves on desktop and on phones, the files and line numbers it touches, the exact diff, and how to check it.

Some later changes rework earlier ones; for example, changes 10 and 13 rework the ads sample from change 6. If you apply them one at a time, apply every one, in order.

Line numbers in each diff refer to the files as they are after the changes above it. Every removed line is quoted exactly from the live site as of 2026-10-19 or from an earlier change here. If your source has moved on since then, match on the quoted text rather than the line numbers.

To see it running: run `bun tools/serve.mjs clone/site` from the project folder and open http://127.0.0.1:4173/. Analytics only load on the production domain; the chat widget does load locally.

## Decisions behind these changes

- **Brackets stay.** Chris chose to keep `[Your practice]`, `[your city]`, `[Name]`, `[Date]`, `[Time]`, `[Month]`, `[n]` and `[Hex]` rather than invent a practice, people or results. Each sample uses each bracket as few times as it can, and every sample keeps its Sample chip.
- **Your system, not a new one.**
  - Palette tokens only, with no Google or Meta blue and no gradients.
  - Rose only on `em`, `.signature` and the existing stamp artwork.
  - Your radii, your shadow scale, and your class and comment conventions.
- **Desktop and phone are designed separately**, not scaled.
  - The phone page is 9,271px tall at 390 (10,000px before).
  - The desktop page is 8,097px at 1440 (7,748px before). The extra is mostly the taller footer.
- **Samples loop, as they did before:** finished state, the job replays, it is signed and the stamp is pressed, it rests, it repeats.
  - They run only on screen.
  - They stop on their finished state when someone presses Pause animations.
  - They don't run at all under reduced motion.
- **Your design checker reports exactly what it reports on the live site:** 3 blocks for the hero letter's shadows, and 2 warnings on /services/patient-follow-up. No new findings.

## The changes

| # | Round | Change | Files |
|---|---|---|---|
| 1 | 3 | [Hero: the headline in three lines, the letter higher, the curve off the four claims](#1-hero-the-headline-in-three-lines-the-letter-higher-the-curve-off-the-four-claims) | `assets/site.css` |
| 2 | 3 | [Move the questions below the closing ask](#2-move-the-questions-below-the-closing-ask) | `assets/site.css`, `index.html` |
| 3 | 3 | [Fold "We work with orthodontic practices first" into the How we help intro](#3-fold-we-work-with-orthodontic-practices-first-into-the-how-we-help-intro) | `assets/site.css`, `components.html`, `index.html` |
| 4 | 3 | [Panel stamp: the signed stamp, large, on each service panel's outer corner](#4-panel-stamp-the-signed-stamp-large-on-each-service-panels-outer-corner) | `assets/site.css`, `index.html` |
| 5 | 3 | [Websites and SEO sample: a credible Google result, realistic typing, the note outside it](#5-websites-and-seo-sample-a-credible-google-result-realistic-typing-the-note-outside-it) | `assets/site.css`, `assets/site.js`, `components.html`, `index.html` |
| 6 | 3 | [Google and Meta ads sample: two real-format ads and a consult traced back to its ad](#6-google-and-meta-ads-sample-two-real-format-ads-and-a-consult-traced-back-to-its-ad) | `assets/site.css`, `assets/site.js`, `components.html`, `index.html` |
| 7 | 3 | [Beyond the core plan: a card deck you browse, with depth of field](#7-beyond-the-core-plan-a-card-deck-you-browse-with-depth-of-field) | `assets/site.css`, `assets/site.js`, `components.html`, `index.html` |
| 8 | 3 | [What happens after you say yes: the practice folder](#8-what-happens-after-you-say-yes-the-practice-folder) | `assets/site.css`, `assets/site.js`, `components.html`, `index.html` |
| 9 | 4 | [Websites and SEO: the callout's arm reaches the result more slowly](#9-websites-and-seo-the-callouts-arm-reaches-the-result-more-slowly) | `assets/site.js` |
| 10 | 4 | [Google and Meta ads: a shorter panel](#10-google-and-meta-ads-a-shorter-panel) | `assets/site.css` |
| 11 | 4 | [What happens after you say yes: four composed scenes](#11-what-happens-after-you-say-yes-four-composed-scenes) | `assets/site.css`, `assets/site.js`, `components.html`, `index.html` |
| 12 | 4 | [Footer: a product-style footer with the name large, cropped and faded](#12-footer-a-product-style-footer-with-the-name-large-cropped-and-faded) | `assets/site.css`, `assets/site.js`, all 17 HTML pages |
| 13 | 5 | [Google and Meta ads: rebuilt for clarity and breathing room](#13-google-and-meta-ads-rebuilt-for-clarity-and-breathing-room) | `assets/site.css`, `assets/site.js`, `components.html`, `index.html` |
| 14 | 5 | [Beyond the core plan: richer brand, video and website samples](#14-beyond-the-core-plan-richer-brand-video-and-website-samples) | `assets/site.css`, `components.html`, `index.html` |
| 15 | 5 | [What happens after you say yes: more room in the four scenes](#15-what-happens-after-you-say-yes-more-room-in-the-four-scenes) | `assets/site.css`, `components.html` |

## Round 3

### 1. Hero: the headline in three lines, the letter higher, the curve off the four claims

**What and why.** Chris asked for three things in the hero:
- **The headline in three lines.** At 1440px it ran to four, at 96px in a 625px column.
- **The letter higher.** It sat on the floor of its column, low beside the form.
- **The curved bottom edge further from the four claims under it.** The sage crescent nearly touched "1 report".

**Desktop (1025px and wider)**
- The copy column takes a little more of the row: `1.25fr` to `.75fr`, which is 710px of copy and 426px for the letter at 1440.
- The headline's size now follows the copy column through container query units: `clamp(36px, 11.6cqi, 84px)`. That is about 82px at 1440.
- The longest of the three lines, "practice, made by people", always fits, so it breaks as "Marketing for your / practice, made by people / you'll actually *know*." at every desktop width.
- The letter is centred on the copy (`align-content: center`) instead of resting at the bottom of its column. Its top is now level with the headline's second line.
- The hero's bottom padding is 30px shorter and the proof strip's top padding is 30px deeper. The disc edge and its crescent rise 30px, and the four claims stay where they were on the page.

**Phones and tablets (1024px and under)**
- The same headline rule gives three lines down to 360px: about 41px at 390, 37px at 360, up to 84px on tablets.
- The strip of the bloom window shown above the letter is cut to half the window's radius, so the letter sits closer to the form.
- The hero's foot is 16px shorter and the proof strip's top 16px deeper (24px plus 16px under 560px).

**Unchanged.** Copy, form, letter and the bloom window. The letter's delivery animation runs exactly as before; I recorded it after the change.

**Notes for you**
- 84px is a homepage-only step between Display L (64px) and Display XL (96px).
- `cqi` needs Safari 16 or Chrome 105 and later. An older browser drops the declaration and keeps `.display-xl`'s size, which is just the old four-line hero.

**Check:** at 1440 and at 390 the headline is three lines. The crescent's lowest point has clear space above "1 report".

**Files and lines** (after this change):

- `site/assets/site.css`: lines 755–788

<details>
<summary>Exact diff for change 1</summary>

```diff
diff --git a/site/assets/site.css b/site/assets/site.css
index 6fa4b0e..0f71fff 100644
--- a/site/assets/site.css
+++ b/site/assets/site.css
@@ -755,6 +755,34 @@ h1 em, h2 em, h3 em, .tagline em, .signed-change em { color: var(--accent-italic
   .js:not(.motion-paused) [data-hero-intro]:not(.is-introduced)::after { transform-origin: 60% 0; animation: hero-edge calc(var(--dur-slow) * 2) var(--ease-standard) calc(var(--rest-bloom) * 1.5) backwards; }
 }
 
+/* The homepage hero's layout ([data-hero-intro], homepage only). The headline holds three lines at every width: its size
+   follows the copy column (container query units on .hero-copy), so the longest of the three lines, "practice, made by
+   people", always fits: 84px at most (a step under Display XL's 96px), about 41px on a 390px phone, 37px at 360.
+   From 1025px the copy takes a little more of the row (1.25fr to .75fr, so the letter keeps 420px or more) and the letter
+   is centred on the copy instead of resting on the figure's floor. Stacked (1024px and under), the window's empty strip
+   above the letter is cut to half the window's radius, so the letter overlaps more of the bloom and arrives sooner.
+   At every width the disc edge and its sage crescent rise off the four claims: the hero's foot gets shorter and the
+   proof strip's top deeper by the same amount (30px on desktop, 16px stacked), so the claims stay where they were. */
+[data-hero-intro] .hero-copy { container-type: inline-size; }
+[data-hero-intro] .hero h1 { font-size: clamp(36px, 11.6cqi, 84px); }
+@media (min-width: 1025px) {
+  [data-hero-intro] .hero-panel { grid-template-columns: minmax(0, 1.25fr) minmax(0, .75fr); }
+  .arc--below[data-hero-intro] .hero-panel { padding-bottom: calc(clamp(56px, 7vw, 104px) + 3vw - 30px); }
+  [data-hero-intro] .hero-figure--window { align-content: center; }
+  [data-hero-intro] + .proof { padding-top: calc(var(--space-10) + 30px); }
+}
+@media (max-width: 1024px) {
+  [data-hero-intro] .hero-figure--window { padding-top: calc(var(--win-r) * .5); }
+  .arc--below[data-hero-intro] .hero-panel { padding-bottom: calc(clamp(56px, 7vw, 104px) + 3vw - 16px); }
+  [data-hero-intro] + .proof { padding-top: calc(var(--space-10) + 16px); }
+}
+@media (max-width: 768px) {
+  .arc--below[data-hero-intro] .hero-panel { padding-bottom: calc(var(--space-12) + 6vw - 16px); }
+}
+@media (max-width: 560px) {
+  [data-hero-intro] + .proof { padding-top: calc(var(--space-6) + 16px); }
+}
+
 /* A page hero without a product view: one column of copy. */
 .hero-panel--plain { grid-template-columns: minmax(0, 1fr); }
 .hero-panel--plain .hero-copy h1 { max-width: 16em; }
```

</details>

### 2. Move the questions below the closing ask

**What and why.** Chris asked for the FAQ to come after the closing email form, so a visitor who is ready meets the ask first and the questions are there for anyone still deciding.

**Markup.** The whole `section#questions` (its comment, the eight questions, "Something we haven't answered?") moves from before `section.closing` to after it, as the last thing in `<main>`. Nothing inside it changes, and the FAQPage JSON-LD in the head is untouched. The two section comments are renumbered.

**Footer corners.** The page now ends on the field-coloured questions band, so the footer's 28px rounded top corners would show the cream page behind them. A new rule, `main > #questions:last-child`, runs the field band 28px further down under the footer: a negative bottom margin and the same extra bottom padding.

**Check:** the order reads team band, then "*Tended,* not templated." with its form, then the questions, then the footer. The footer's top corners show field green, not cream.

**Files and lines** (after this change):

- `site/assets/site.css`: lines 2240–2248
- `site/index.html`: lines 619–670, 709–714

<details>
<summary>Exact diff for change 2</summary>

```diff
diff --git a/site/assets/site.css b/site/assets/site.css
index 0f71fff..453e93a 100644
--- a/site/assets/site.css
+++ b/site/assets/site.css
@@ -2240,6 +2240,9 @@ button.founder-link { padding: 0; border: 0; background: none; font: inherit; cu
 .faq { max-width: 840px; margin-inline: auto; border-top: var(--border-w) solid var(--border-quiet); }
 /* a questions section reads as one centred column: its head lines up with the accordion */
 .wrap:has(> .faq) > :is(.section-head, .head-row) { max-width: 840px; margin-inline: auto; }
+/* The homepage ends on its questions (field), so the band runs on under the footer's 28px top corners; otherwise the
+   corners would show the cream page behind them. */
+main > #questions:last-child { margin-bottom: calc(-1 * var(--radius-panel)); padding-bottom: calc(var(--section-gap) + var(--radius-panel)); }
 .faq-item { border-bottom: var(--border-w) solid var(--border-quiet); }
 
 .faq-q {
diff --git a/site/index.html b/site/index.html
index efbc152..ddcc6a6 100644
--- a/site/index.html
+++ b/site/index.html
@@ -619,10 +619,52 @@ height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
   </section>
   </div>
 
-  <!-- 6. Questions to ask any orthodontic marketing agency: the page's one question section, an accordion on native
-       details; the questions stay real headings. The FAQPage node in the head's JSON-LD @graph carries the same eight
-       questions and answers as plain text, word for word: change one, change both. No price question: pricing stays off
-       the homepage. -->
+  <!-- 6. Closing: a left-set forest panel, flat, with the tagline and the email capture again (the hero's form and behaviour,
+       site.js "email capture"). No motif: the header mark is this screen's one bloom. -->
+  <section class="closing">
+    <div class="wrap">
+      <div class="closing-panel on-strong reveal">
+        <div class="closing-copy">
+          <h2 class="display-xl"><em>Tended,</em> not templated.<span class="sr-only"> Get in touch with Rose Practice Solutions about your practice.</span></h2>
+          <p>See what we'd build for your practice.</p>
+          <!-- The same capture as the hero's: it posts form=hero, so the API treats it as an email-only lead, then offers the
+               full form. Without JavaScript the API sends the visitor back to the hero's notes (/?sent=1#hero-sent or
+               /?sent=0#hero-not-sent). -->
+          <form class="hero-capture" id="closing-form" action="/api/book-a-call" method="post" novalidate data-capture="closing" data-done="closing-done">
+            <input type="hidden" name="form" value="hero">
+            <label class="hero-capture-label" for="closing-email">Your email</label>
+            <div class="hero-capture-row">
+              <input class="input" id="closing-email" name="email" type="email" autocomplete="email" inputmode="email" required placeholder="name@practice.com" aria-describedby="err-closing-email closing-email-help">
+              <button class="btn btn--on-strong" type="submit">Get in touch <svg class="arrow" viewBox="0 0 22 12" aria-hidden="true" focusable="false"><path d="M1 6h19M15 1l5 5-5 5"/></svg></button>
+            </div>
+            <p class="field-error" id="err-closing-email" role="alert" hidden></p>
+            <p class="hero-capture-help" id="closing-email-help">One of our founders replies within one business day. We only use your email to reply about your practice. <a href="/privacy">Privacy</a></p>
+            <p class="hero-capture-status" id="closing-status" aria-live="polite"></p>
+            <div class="hp" aria-hidden="true"><label for="closing-fax">Fax</label><input id="closing-fax" name="fax" type="text" tabindex="-1" autocomplete="off"></div>
+            <input type="hidden" name="utm_source" data-track>
+            <input type="hidden" name="utm_medium" data-track>
+            <input type="hidden" name="utm_campaign" data-track>
+            <input type="hidden" name="utm_term" data-track>
+            <input type="hidden" name="utm_content" data-track>
+            <input type="hidden" name="gclid" data-track>
+            <input type="hidden" name="fbclid" data-track>
+            <input type="hidden" name="landing_page" data-track>
+          </form>
+          <div class="signed-note hero-done" id="closing-done" role="status" tabindex="-1" hidden>
+            <p class="hero-done-title">Thank you. Your email is with the team.</p>
+            <p>One of our founders replies within one business day.</p>
+            <a class="btn btn--secondary btn--small" href="/contact#book" data-capture-more>Tell us more about your practice <svg class="arrow" viewBox="0 0 22 12" aria-hidden="true" focusable="false"><path d="M1 6h19M15 1l5 5-5 5"/></svg></a>
+            <div class="hero-done-by"><em class="signature">The team</em><span>Rose Practice Solutions</span></div>
+          </div>
+        </div>
+      </div>
+    </div>
+  </section>
+
+  <!-- 7. Questions to ask any orthodontic marketing agency: the page's one question section, an accordion on native
+       details; the questions stay real headings. It comes after the closing ask, for anyone still deciding. The FAQPage
+       node in the head's JSON-LD @graph carries the same eight questions and answers as plain text, word for word: change
+       one, change both. No price question: pricing stays off the homepage. -->
   <section class="section section--alt" id="questions" aria-labelledby="questions-title">
     <div class="wrap">
       <div class="head-row">
@@ -667,48 +709,6 @@ height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
     </div>
   </section>
 
-  <!-- Closing: a left-set forest panel, flat, with the tagline and the email capture again (the hero's form and behaviour,
-       site.js "email capture"). No motif: the header mark is this screen's one bloom. -->
-  <section class="closing">
-    <div class="wrap">
-      <div class="closing-panel on-strong reveal">
-        <div class="closing-copy">
-          <h2 class="display-xl"><em>Tended,</em> not templated.<span class="sr-only"> Get in touch with Rose Practice Solutions about your practice.</span></h2>
-          <p>See what we'd build for your practice.</p>
-          <!-- The same capture as the hero's: it posts form=hero, so the API treats it as an email-only lead, then offers the
-               full form. Without JavaScript the API sends the visitor back to the hero's notes (/?sent=1#hero-sent or
-               /?sent=0#hero-not-sent). -->
-          <form class="hero-capture" id="closing-form" action="/api/book-a-call" method="post" novalidate data-capture="closing" data-done="closing-done">
-            <input type="hidden" name="form" value="hero">
-            <label class="hero-capture-label" for="closing-email">Your email</label>
-            <div class="hero-capture-row">
-              <input class="input" id="closing-email" name="email" type="email" autocomplete="email" inputmode="email" required placeholder="name@practice.com" aria-describedby="err-closing-email closing-email-help">
-              <button class="btn btn--on-strong" type="submit">Get in touch <svg class="arrow" viewBox="0 0 22 12" aria-hidden="true" focusable="false"><path d="M1 6h19M15 1l5 5-5 5"/></svg></button>
-            </div>
-            <p class="field-error" id="err-closing-email" role="alert" hidden></p>
-            <p class="hero-capture-help" id="closing-email-help">One of our founders replies within one business day. We only use your email to reply about your practice. <a href="/privacy">Privacy</a></p>
-            <p class="hero-capture-status" id="closing-status" aria-live="polite"></p>
-            <div class="hp" aria-hidden="true"><label for="closing-fax">Fax</label><input id="closing-fax" name="fax" type="text" tabindex="-1" autocomplete="off"></div>
-            <input type="hidden" name="utm_source" data-track>
-            <input type="hidden" name="utm_medium" data-track>
-            <input type="hidden" name="utm_campaign" data-track>
-            <input type="hidden" name="utm_term" data-track>
-            <input type="hidden" name="utm_content" data-track>
-            <input type="hidden" name="gclid" data-track>
-            <input type="hidden" name="fbclid" data-track>
-            <input type="hidden" name="landing_page" data-track>
-          </form>
-          <div class="signed-note hero-done" id="closing-done" role="status" tabindex="-1" hidden>
-            <p class="hero-done-title">Thank you. Your email is with the team.</p>
-            <p>One of our founders replies within one business day.</p>
-            <a class="btn btn--secondary btn--small" href="/contact#book" data-capture-more>Tell us more about your practice <svg class="arrow" viewBox="0 0 22 12" aria-hidden="true" focusable="false"><path d="M1 6h19M15 1l5 5-5 5"/></svg></a>
-            <div class="hero-done-by"><em class="signature">The team</em><span>Rose Practice Solutions</span></div>
-          </div>
-        </div>
-      </div>
-    </div>
-  </section>
-
 </main>
 
 <footer class="site-foot on-strong">
```

</details>

### 3. Fold "We work with orthodontic practices first" into the How we help intro

**What and why.** Chris felt the standalone serif statement under the service rows was "an afterthought" and "lost". It was too thin to carry a graphic of its own, and one would have broken the page's flow. Its sentence now opens the How we help intro, where it qualifies who the services are for before they're shown.

**Markup.**
- The intro under "How we help" becomes: "We work with [orthodontic practices](/orthodontic-marketing) first, and [dental practices](/dental-marketing) are welcome too." followed by your existing intro sentences, unchanged.
- The two links keep their pages and use `.inline-link`, so they get the site's running-text link line.
- The `.who-statement` block at the foot of `#what` is removed, together with its second line, "Marketing built for how each kind of practice brings in patients."

**CSS.**
- The `.who-statement` rules are retired.
- `.who-statement a` comes out of the two `:where(...)` link selectors, and out of the text-links comment.
- `.ref-item > .who-statement` comes out of the components-page stretch rule.

**Components page.** The `#demo-who` entry is removed, and the links entry no longer mentions `.who-statement`.

**Check:** both links work and carry the underline. Nothing sits between the "Beyond the core plan" deck and "What happens after you say yes".

**Files and lines** (after this change):

- `site/assets/site.css`: lines 523–529, 542–548, 554–560, 1603–1608, 2791–2797
- `site/components.html`: lines 424–430, 710–715
- `site/index.html`: lines 299–313, 511–516

<details>
<summary>Exact diff for change 3</summary>

```diff
diff --git a/site/assets/site.css b/site/assets/site.css
index 453e93a..cfda9fe 100644
--- a/site/assets/site.css
+++ b/site/assets/site.css
@@ -523,7 +523,7 @@ h1 em, h2 em, h3 em, .tagline em, .signed-change em { color: var(--accent-italic
 
 /* ---------- text links ---------- */
 /* One treatment for every link that sits in a sentence: .inline-link, links in running text (FAQ answers, Q&A, prose,
-   notes on the hero), the links in the who-we-work-with statement, and the footer. A link that stands on its own is
+   notes on the hero), and the footer. A link that stands on its own is
    a .btn.btn--secondary (see buttons), never a bare text link. At rest a link in running text keeps a 1px underline
    in label sage (cream at 60% on forest), so it never relies on colour alone (WCAG 1.4.1); the footer links have none.
    On hover and keyboard focus a 2px line in forest (cream on forest) draws in from the left over the rest underline
@@ -542,7 +542,7 @@ h1 em, h2 em, h3 em, .tagline em, .signed-change em { color: var(--accent-italic
 .on-strong { --link-line: var(--line-cream); --link-rest-color: var(--outline-on-strong); }
 .on-strong .on-light { --link-line: var(--line-forest); --link-rest-color: var(--text-muted); }
 
-:where(.inline-link, .faq-a a, .qa-item a, .prose a:not([class]), .who-statement a, .hero-note a, .hero-capture-help a, .hero-capture-status a, .foot-links a, .foot-contact a, .foot-legal a, .foot-legal .motion-toggle) {
+:where(.inline-link, .faq-a a, .qa-item a, .prose a:not([class]), .hero-note a, .hero-capture-help a, .hero-capture-status a, .foot-links a, .foot-contact a, .foot-legal a, .foot-legal .motion-toggle) {
   text-decoration-line: underline;
   text-decoration-color: var(--link-rest-color, var(--text-muted));
   text-decoration-thickness: 1px;
@@ -554,7 +554,7 @@ h1 em, h2 em, h3 em, .tagline em, .signed-change em { color: var(--accent-italic
   background-size: 0% 2px;
   transition: background-size var(--dur-med) var(--ease-standard);
 }
-:where(.inline-link, .faq-a a, .qa-item a, .prose a:not([class]), .who-statement a, .hero-note a, .hero-capture-help a, .hero-capture-status a, .foot-links a, .foot-contact a, .foot-legal a, .foot-legal .motion-toggle):is(:hover, :focus-visible) {
+:where(.inline-link, .faq-a a, .qa-item a, .prose a:not([class]), .hero-note a, .hero-capture-help a, .hero-capture-status a, .foot-links a, .foot-contact a, .foot-legal a, .foot-legal .motion-toggle):is(:hover, :focus-visible) {
   background-size: var(--link-span, 100%) 2px;
 }
 
@@ -1603,14 +1603,6 @@ h1 em, h2 em, h3 em, .tagline em, .signed-change em { color: var(--accent-italic
 .soon-name { font-family: var(--font-display); font-size: var(--text-h3); line-height: 1.2; }
 .soon-ask { margin-top: var(--space-4); }
 
-/* who we work with: one serif statement at the foot of How we help, with room of its own. The two kinds of practice are
-   links (the orthodontic one is the statement's one italic phrase; the dental one stays upright) with the site's link
-   line. Markup: .who-statement > h3.who-statement-text (a > em, a) + p */
-.who-statement { display: grid; justify-items: start; gap: var(--space-5); padding-top: var(--section-gap); }
-.who-statement-text { max-width: 21em; font-family: var(--font-display); font-size: var(--text-display-m); font-weight: 400; line-height: 1.15; text-wrap: balance; }
-.who-statement-text a { --link-offset: .14em; --link-y: calc(100% - .17em + 1.5px); color: inherit; }
-.who-statement p { max-width: 34em; font-size: var(--text-body-l); color: var(--text-muted); }
-
 @media (max-width: 1024px) {
   .run-row { grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); }
   .run-title { grid-column: 1 / -1; }
@@ -2799,7 +2791,7 @@ main > #questions:last-child { margin-bottom: calc(-1 * var(--radius-panel)); pa
 .ref-item { display: grid; gap: var(--space-4); justify-items: start; min-width: 0; }
 .ref-item--wide { grid-column: 1 / -1; }
 .ref-item > * { min-width: 0; }
-.ref-item > .band, .ref-item > .beat, .ref-item > .run-list, .ref-item > .qa, .ref-item > .commit-list, .ref-item > .ref-stage, .ref-item > .people, .ref-item > .commit-panel, .ref-item > .commit-grid, .ref-item > .team-ring, .ref-item > .beat-screen, .ref-item > .faq, .ref-item > .who-statement { justify-self: stretch; }
+.ref-item > .band, .ref-item > .beat, .ref-item > .run-list, .ref-item > .qa, .ref-item > .commit-list, .ref-item > .ref-stage, .ref-item > .people, .ref-item > .commit-panel, .ref-item > .commit-grid, .ref-item > .team-ring, .ref-item > .beat-screen, .ref-item > .faq { justify-self: stretch; }
 .ref-stage > * { justify-self: stretch; }
 .ref-stage > .cta-line { justify-self: stretch; margin-top: 0; }
 .ref-item > .person { width: 100%; max-width: 280px; }
diff --git a/site/components.html b/site/components.html
index 01c7c74..70635e6 100644
--- a/site/components.html
+++ b/site/components.html
@@ -424,7 +424,7 @@
         </div>
 
         <div class="ref-item ref-item--wide">
-          <p class="ref-name" id="demo-links">Links inside a sentence: .inline-link and every link in running text (.faq-a, .qa-item, .prose, .hero-note), the .who-statement links and the footer share one treatment. At rest a link in running text keeps a 1px label sage underline (cream at 60% on forest), so it never relies on colour alone; footer links have none. On hover and :focus-visible a 2px line in forest (cream on forest) draws in from the left over it (--dur-med, --ease-standard) and retracts on leave. Under reduced motion the line is simply there. A link that stands on its own is a .btn.btn--secondary, never a bare text link. Hover these to check.</p>
+          <p class="ref-name" id="demo-links">Links inside a sentence: .inline-link and every link in running text (.faq-a, .qa-item, .prose, .hero-note) and the footer share one treatment. At rest a link in running text keeps a 1px label sage underline (cream at 60% on forest), so it never relies on colour alone; footer links have none. On hover and :focus-visible a 2px line in forest (cream on forest) draws in from the left over it (--dur-med, --ease-standard) and retracts on leave. Under reduced motion the line is simply there. A link that stands on its own is a .btn.btn--secondary, never a bare text link. Hover these to check.</p>
           <div class="ref-stage">
             <p>Ad spend is separate. You pay Google and Meta directly. More on each part is on our <a class="inline-link" href="/pricing">pricing page</a> and in the <a class="inline-link" href="/services">services we run</a>.</p>
             <div class="band on-strong">
@@ -710,14 +710,6 @@
           </div>
         </div>
 
-        <div class="ref-item ref-item--wide">
-          <p class="ref-name" id="demo-who">.who-statement (who we work with, at the foot of the homepage's How we help, with a section gap of room above it): h3.who-statement-text in Instrument Serif at Display M, ink, whose two kinds of practice are links to their pages. "orthodontic practices" is the one italic phrase (a > em, deep rose); "dental practices" stays upright. The links take the site's link line, set for the serif. Then one Body L label sage line.</p>
-          <div class="who-statement">
-            <h3 class="who-statement-text">We work with <a href="/orthodontic-marketing"><em>orthodontic practices</em></a> first, and <a href="/dental-marketing">dental practices</a> are welcome too.</h3>
-            <p>Marketing built for how each kind of practice brings in patients.</p>
-          </div>
-        </div>
-
         <div class="ref-item ref-item--wide">
           <p class="ref-name" id="demo-loops">[data-loop="status"] on a .run-show .screen (with data-anim="none", so the one-shot behaviours leave it alone): a slow CSS loop, the chips stepping new, called, consult booked. Paused off screen, still under reduced motion. The homepage's signed samples (local-page, ledger, report) are GSAP loops, shown below.</p>
           <div class="ref-stage">
diff --git a/site/index.html b/site/index.html
index ddcc6a6..bba0bb7 100644
--- a/site/index.html
+++ b/site/index.html
@@ -299,15 +299,15 @@ height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
     </div>
   </section>
 
-  <!-- 3. How we help: the Core Marketing Plan as two alternating rows (.service-row), each beside its signed sample
-       (.vignette[data-loop], site.js "signed samples": the work lands, it is signed by role and the stamp is pressed on, it
-       rests). Then the add-ons and projects in "Beyond the core plan" (the add-ons cycle, the home of patient follow-up), and
-       who we work with as a serif statement at the foot (.who-statement). No step numbers. -->
+  <!-- 3. How we help: who we work with opens the intro (each kind of practice links to its page), then the Core Marketing
+       Plan as two alternating rows (.service-row), each beside its signed sample (.vignette[data-loop], site.js "signed
+       samples": the work lands, it is signed by role and the stamp is pressed on, it rests). Then the add-ons and projects
+       in "Beyond the core plan" (the home of patient follow-up). No step numbers. -->
   <section class="section" id="what" aria-labelledby="help-title">
     <div class="wrap">
       <div class="head-row reveal">
         <h2 class="display-l" id="help-title">How we help<span class="sr-only">: orthodontic and dental marketing services from Rose Practice Solutions</span></h2>
-        <p>Every client gets the Core Marketing Plan: websites and SEO, plus Google and Meta ads management, run by one team and judged by consults booked. Anything else is added one piece at a time.</p>
+        <p>We work with <a class="inline-link" href="/orthodontic-marketing">orthodontic practices</a> first, and <a class="inline-link" href="/dental-marketing">dental practices</a> are welcome too. Every client gets the Core Marketing Plan: websites and SEO, plus Google and Meta ads management, run by one team and judged by consults booked. Anything else is added one piece at a time.</p>
       </div>
       <div class="service-rows">
 
@@ -511,12 +511,6 @@ height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
         </article>
 
       </div>
-
-      <!-- Who we work with: one serif statement under the rows; each kind of practice links to its page -->
-      <div class="who-statement reveal">
-        <h3 class="who-statement-text">We work with <a href="/orthodontic-marketing"><em>orthodontic practices</em></a> first, and <a href="/dental-marketing">dental practices</a> are welcome too.</h3>
-        <p>Marketing built for how each kind of practice brings in patients.</p>
-      </div>
     </div>
   </section>
 
```

</details>

### 4. Panel stamp: the signed stamp, large, on each service panel's outer corner

**What and why.** Chris wanted the stamp "more prevalent": a larger stamp overprinted on the corner of the whole graphic rather than a small one inside the card, hugging the bottom corner nearest the edge of the window. The two service samples below (changes 5 and 6) are built around it.

**Markup.** Each `.service-row-visual` gets one more child after its `.vignette`: `<img class="stamp panel-stamp" src="/assets/img/stamp-signed.svg" alt="" width="112" height="112">`. It's decorative, so `alt` is empty.

**CSS** (new block "The panel stamp", right after `.signoff .stamp`):
- 112px, hanging 16px past the panel's bottom and outer edge.
- On the Websites and SEO row (panel on the right) it sits bottom right at your stamp's usual -10° tilt.
- On the flipped ads row (panel on the left) it sits bottom left at 8°.
- At 768px and under it's 80px, tucked 4px inside the gutter and hanging 12px below the panel.
- It inherits `.stamp`'s multiply blend and .9 opacity, so it reads as ink on both the panel and the page.

Each sample keeps that corner clear of text and presses the stamp on as its last beat.

**Check:** on desktop the stamp overprints the SEO panel's bottom-right corner and the ads panel's bottom-left corner. At 360 to 430 it stays inside the screen.

**Files and lines** (after this change):

- `site/assets/site.css`: lines 1703–1720
- `site/index.html`: lines 342–348, 375–381

<details>
<summary>Exact diff for change 4</summary>

```diff
diff --git a/site/assets/site.css b/site/assets/site.css
index cfda9fe..3f7520e 100644
--- a/site/assets/site.css
+++ b/site/assets/site.css
@@ -1703,6 +1703,18 @@ h1 em, h2 em, h3 em, .tagline em, .signed-change em { color: var(--accent-italic
 .signoff .chip--sample { margin-left: auto; }
 .stamp { width: 52px; height: 52px; mix-blend-mode: multiply; opacity: .9; rotate: -10deg; pointer-events: none; }
 .signoff .stamp { position: absolute; right: -14px; top: 50%; margin-top: -24px; }
+/* The panel stamp (homepage service rows): the same stamp, large, overprinted on the panel's outer bottom corner, the one
+   nearest the window's edge: bottom right when the panel sits right, bottom left on the flipped row. It hangs 16px past
+   the panel's edges, multiplies into the panel and the page, and never sits over text (each sample keeps that corner
+   clear). The sample's timeline presses it on as its last beat (site.js "signed samples"); at rest it is simply there.
+   On phones it is smaller and tucked inside the gutter, overhanging the bottom edge only.
+   Markup: .service-row-visual > .vignette + img.stamp.panel-stamp[alt=""] */
+.panel-stamp { position: absolute; right: -16px; bottom: -16px; z-index: 2; width: 112px; height: 112px; }
+.service-row--flip .panel-stamp { right: auto; left: -16px; rotate: 8deg; }
+@media (max-width: 768px) {
+  .panel-stamp { right: 4px; bottom: -12px; width: 80px; height: 80px; }
+  .service-row--flip .panel-stamp { left: 4px; }
+}
 
 /* Websites and SEO: the query types itself, this month's page lands over last month's, it is signed */
 .bar-dots { display: flex; gap: var(--space-2); }
diff --git a/site/index.html b/site/index.html
index bba0bb7..57d3074 100644
--- a/site/index.html
+++ b/site/index.html
@@ -342,6 +342,7 @@ height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
                 </div>
               </div>
             </div>
+            <img class="stamp panel-stamp" src="/assets/img/stamp-signed.svg" alt="" width="112" height="112">
           </div>
         </article>
 
@@ -374,6 +375,7 @@ height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
                 </div>
               </div>
             </div>
+            <img class="stamp panel-stamp" src="/assets/img/stamp-signed.svg" alt="" width="112" height="112">
           </div>
         </article>
 
```

</details>

### 5. Websites and SEO sample: a credible Google result, realistic typing, the note outside it

**What and why.** Chris's notes on the old sample:
- the typed query "flashes in place": the letters appeared while the caret sat at the end the whole time;
- the tilted card behind ("Last month · Clear aligners for teens") had no purpose and couldn't be read;
- the result didn't look like Google and was mostly brackets;
- "New this month" isn't something Google shows.

**The sample now**, inside `.service-row-visual--search > .vignette--search[data-loop="local-page"]`. It's an illustrative excerpt of a Google results page in your palette (`.screen.gsr`). There are no Google colours and no logo artwork:
- the address bar "google.com/search", on desktop only;
- "Google" set in plain Plus Jakarta;
- the search field "braces for adults near me", with a search button;
- All / Maps / Images, with All underlined in forest;
- one organic result:
  - a forest favicon disc with a line globe;
  - "[Your practice]" / "Practice website";
  - the title "Adult braces in [your city]" (forest, 20px; 18px on phones);
  - the snippet "Explore braces for adults, what to expect at your first visit, and how to request a consultation."

There's no local pack, no ratings and no competitors. A caption, "Illustrative search result", and the Sample chip sit on their own row at the top of the panel.

**The ghost card is gone**, with its CSS (`.screen--ghost`, `.screen--front`) and JS.

**"New this month" is now a note outside Google's UI** (`.gsr-note`): a cream note under the page, "New this month" / "A page answering adult patients' questions.", signed "Signed by *Web and SEO*". A thin forest connector (`.gsr-link`) runs from the note to a dot beside the result's title. The small stamp in the sign-off is gone; the panel stamp from change 4 replaces it.

**Motion** (site.js "signed samples", builder `'local-page'`):
1. The finished state holds for 600ms.
2. The note, connector, signature and panel stamp lift off.
3. The query is selected (a sage highlight), cleared, and typed into its one text node. There are no per-letter spans, so the caret sits right after the typed text and moves with it. The pace is uneven (70, 90, 60, 110ms per letter in turn, 60ms per space, with a pause after "adults").
4. A 250ms reading pause, then search is pressed and the caret goes.
5. A forest loading line runs along the tabs' rule while the result is absent.
6. The result places (400ms), and the note and connector return.
7. It is signed and the panel stamp is pressed.
8. It rests about 4.7s, then loops.

Every change is a tween or a zero-length set, so pausing always lands on the full query with no caret and everything shown. It runs only on screen with the tab visible, and not at all under reduced motion. The old blinking-caret keyframes and `.caret` rule are retired.

**Phones.** A container query on the panel (`seo-sample`, 430px wide or less) switches to a phone results page:
- no address bar;
- "Google" centred above a full-width field;
- 14px body text and an 18px title;
- the note narrowed so the 80px stamp corner stays clear;
- a 24px sign-off disc, so "Signed by Web and SEO" stays on one line at 360.

**Components page:** the local-page entry and its demo are updated, and the demo now includes the panel stamp.

**Check:** watch the sample. The caret should travel with the typing, the result should arrive after the search press, then the note, signature and stamp. Pause shows the full query and the finished page.

**Files and lines** (after this change):

- `site/assets/site.css`: lines 1716–1795, 1838–1843, 1846–1855
- `site/assets/site.js`: lines 669–732
- `site/components.html`: lines 756–790
- `site/index.html`: lines 318–346

<details>
<summary>Exact diff for change 5</summary>

```diff
diff --git a/site/assets/site.css b/site/assets/site.css
index 3f7520e..e4b55a5 100644
--- a/site/assets/site.css
+++ b/site/assets/site.css
@@ -1716,17 +1716,80 @@ h1 em, h2 em, h3 em, .tagline em, .signed-change em { color: var(--accent-italic
   .service-row--flip .panel-stamp { left: 4px; }
 }
 
-/* Websites and SEO: the query types itself, this month's page lands over last month's, it is signed */
+/* Websites and SEO: an excerpt of a Google results page in the palette (illustrative, not a screenshot), one organic
+   result, and outside the page a cream note pointing to it: new this month, signed by Web and SEO. The search runs
+   again: the query is selected, cleared and typed into its one text node with the caret right after it, search is
+   pressed, the page loads with no results, the result places, the note and its connector return, signed, and the panel
+   stamp is pressed on (site.js "signed samples", local-page). Static, it is the finished search: full query, the result,
+   the note, the signature, the stamp; no caret. When the panel is 430px or narrower inside (phones; a container query
+   on the panel) the address bar goes and the page stacks the way Google does on a phone. The panel's bottom-right
+   corner is kept clear for the panel stamp.
+   Markup: .service-row-visual--search > .vignette--search[data-loop=local-page] > .gsr-top (caption + Sample chip)
+   + .screen.gsr (.screen-bar + .gsr-page: .gsr-mark + .gsr-field (.gsr-q > span[data-type] + .gsr-caret; .gsr-go)
+   + .gsr-tabs (.gsr-load) + .gsr-result (.gsr-site + .gsr-title + .gsr-snippet + .gsr-link))
+   + .gsr-note (title + line + .signoff) ; then img.panel-stamp */
+.service-row-visual.service-row-visual--search { container-type: inline-size; container-name: seo-sample; padding: var(--space-4) var(--space-8) var(--space-8); }
+.vignette--search {
+  --gsr-pad: var(--space-6);        /* the page's inset */
+  --gsr-indent: 108px;              /* the wordmark column and its gap: results line up under the search field */
+  --gsr-reach: var(--space-6);      /* how far the connector runs out past the page's left edge */
+  --gsr-gap: var(--space-4);        /* page to note */
+  --gsr-title-mid: 49px;            /* the result title's first line, from the top of the result */
+  --gsr-note-mid: 22px;             /* the note's first line, from the top of the note */
+  max-width: 560px;
+  justify-items: stretch;
+}
+.gsr-top { display: flex; align-items: center; justify-content: space-between; gap: var(--space-3); margin-bottom: var(--space-2); }
+.gsr-caption { font-size: var(--text-caption); font-weight: 500; line-height: 1.4; color: var(--forest); }
+.vignette .screen.gsr { --screen-pad: var(--gsr-pad); max-width: none; }
 .bar-dots { display: flex; gap: var(--space-2); }
 .bar-dots i { width: 8px; height: 8px; border-radius: 50%; background: var(--fill-quiet); }
-.screen--front { z-index: 1; translate: -18px 30px; }
-.screen--ghost { position: absolute; z-index: 0; top: 34px; right: 40px; width: 280px; justify-items: end; gap: var(--space-2); padding: var(--space-4) var(--space-5) 120px; text-align: right; box-shadow: var(--shadow-1); rotate: 4deg; }
-.screen--ghost .serp-title { font-size: var(--text-body-s); }
-.vignette .serp-query .icon { width: 18px; height: 18px; }
-.caret { width: 1.5px; height: 1.2em; margin-left: calc(-1 * var(--space-2)); background: var(--forest); opacity: 0; }
-.vignette .serp-result { padding: var(--space-4); border-radius: var(--radius-input); background: var(--surface-panel); }
-.vignette .serp-url { display: flex; flex-wrap: wrap; align-items: center; gap: var(--space-2); }
-.chip--new { padding: 2px var(--space-2); background: var(--forest); color: var(--cream); font-size: var(--text-caption); }
+.gsr-page { display: grid; grid-template-columns: 88px minmax(0, 1fr); align-items: center; gap: var(--space-3) var(--space-5); }
+.gsr-mark { font-size: 22px; font-weight: 600; line-height: 1; letter-spacing: -.02em; color: var(--text-body); }
+.gsr-field { display: flex; align-items: center; gap: var(--space-2); min-width: 0; height: 40px; padding: 0 var(--space-1) 0 var(--space-4); border: var(--border-w) solid var(--border-input); border-radius: var(--radius-pill); background: var(--surface-page); }
+.gsr-q { flex: 1; min-width: 0; overflow: hidden; font-size: var(--text-body-s); line-height: 20px; white-space: pre; color: var(--text-body); }
+.gsr-caret { display: inline-block; width: 1.5px; height: 18px; margin-left: 1px; vertical-align: -4px; background: var(--forest); opacity: 0; }
+.gsr-go { display: grid; place-items: center; flex: none; width: 32px; height: 32px; border-radius: 50%; color: var(--forest); }
+.gsr-go .icon { width: 16px; height: 16px; }
+.gsr-tabs { position: relative; grid-column: 1 / -1; display: flex; gap: var(--space-6); padding-left: var(--gsr-indent); border-bottom: var(--border-w) solid var(--border-quiet); font-size: var(--text-label); font-weight: 500; line-height: 1.4; color: var(--text-muted); }
+.gsr-tabs > span { padding-bottom: var(--space-2); }
+.gsr-tabs .is-on { margin-bottom: -1px; border-bottom: var(--border-w-strong) solid var(--forest); font-weight: 600; color: var(--text-body); }
+/* the page loading: a forest line runs along the tabs' rule, then goes (set by site.js; never shown at rest) */
+.gsr-tabs .gsr-load { position: absolute; left: 0; right: 0; bottom: -1px; height: 2px; padding: 0; background: var(--forest); transform-origin: left center; opacity: 0; }
+.gsr-result { position: relative; grid-column: 2; display: grid; justify-items: start; gap: var(--space-1); margin-top: var(--space-1); }
+.gsr-site { display: flex; align-items: center; gap: var(--space-3); margin-bottom: var(--space-1); }
+.gsr-fav { display: grid; place-items: center; flex: none; width: 28px; height: 28px; border-radius: 50%; background: var(--forest); color: var(--cream); }
+.gsr-fav .icon { width: 16px; height: 16px; }
+.gsr-site-text { display: grid; }
+.gsr-name { font-size: var(--text-body-s); font-weight: 500; line-height: 16px; color: var(--text-body); }
+.gsr-crumb { font-size: var(--text-caption); line-height: 14px; color: var(--text-muted); }
+.gsr-title { font-size: 20px; line-height: 26px; color: var(--forest); }
+.gsr-snippet { font-size: var(--text-body-s); line-height: 21px; color: var(--text-body); }
+/* the connector: from the note, up past the page's left edge, then in to the result's title, ending on a dot. The
+   note covers its lower arm; site.js draws it from the note upward. */
+.gsr-link { position: absolute; top: var(--gsr-title-mid); bottom: calc(-1 * (var(--gsr-pad) + 1px + var(--gsr-gap) + var(--gsr-note-mid))); left: calc(-1 * (var(--gsr-indent) + var(--gsr-pad) + 1px + var(--gsr-reach))); width: calc(var(--gsr-indent) + var(--gsr-pad) + 1px + var(--gsr-reach) - var(--space-3)); border: 1.5px solid var(--forest); border-right: 0; border-radius: var(--radius-input) 0 0 var(--radius-input); pointer-events: none; }
+.gsr-link::after { content: ""; position: absolute; top: -4.25px; right: -4px; width: 7px; height: 7px; border-radius: 50%; background: var(--forest); }
+.gsr-note { position: relative; z-index: 1; display: grid; justify-items: start; gap: 2px; width: 100%; max-width: 360px; margin-top: var(--gsr-gap); padding: var(--space-3) var(--space-5) var(--space-4); border-radius: var(--radius-card); background: var(--surface-page); box-shadow: var(--shadow-2); }
+.gsr-note-title { font-size: var(--text-body-s); font-weight: 600; line-height: 20px; color: var(--text-body); }
+.gsr-note-line { font-size: var(--text-body-s); line-height: 21px; color: var(--text-muted); }
+.gsr-note .signoff { justify-self: stretch; margin-top: var(--space-3); padding-top: var(--space-3); padding-right: 0; }
+@media (max-width: 640px) {
+  .service-row-visual.service-row-visual--search { padding: var(--space-4); }
+}
+/* the phone page: by the panel's own content width, so a narrow panel never gets the desktop chrome (phones and the
+   narrowest tablets; the desktop row at 1025px is 441px wide inside) */
+@container seo-sample (max-width: 430px) {
+  .vignette--search { --gsr-pad: var(--space-4); --gsr-indent: 0px; --gsr-reach: var(--space-2); --gsr-title-mid: 48px; }
+  .gsr .screen-bar { display: none; }
+  .gsr-page { grid-template-columns: minmax(0, 1fr); }
+  .gsr-mark { justify-self: center; }
+  .gsr-tabs { gap: var(--space-5); }
+  .gsr-result { grid-column: 1; }
+  .gsr-title { font-size: 18px; line-height: 24px; }
+  .gsr-note { max-width: calc(100% - 64px); padding-inline: var(--space-3); }
+  .gsr-note .signoff { gap: var(--space-2); }
+  .gsr-note .signoff-disc.founder-art { width: 24px; height: 24px; }
+}
 
 /* Google and Meta ads: a consult arrives, a band traces it down the ledger to its source, the source lights, signed */
 .ledger { max-width: 440px; }
@@ -1775,8 +1838,6 @@ h1 em, h2 em, h3 em, .tagline em, .signed-change em { color: var(--accent-italic
 }
 @media (max-width: 640px) {
   .service-row-visual { min-height: 0; padding: var(--space-6) var(--space-4); border-radius: var(--radius-card); }
-  .screen--ghost { display: none; }
-  .screen--front { translate: none; }
   .vignette .screen { --screen-pad: var(--space-5); }
   .signoff .stamp { right: -8px; width: 44px; height: 44px; margin-top: -20px; }
   .yes-step { grid-template-columns: 52px minmax(0, 1fr); }
@@ -1785,12 +1846,10 @@ h1 em, h2 em, h3 em, .tagline em, .signed-change em { color: var(--accent-italic
 
 /* Placing: a sample panel settles 16px into place the first time it reaches the screen, always at full opacity, so
    nothing waits on a scroll to be readable. site.js adds .is-placing when it starts watching and .is-placed when the
-   panel arrives, so without the script nothing is offset. The search box's caret blinks while its query types. */
-@keyframes caret { 0% { opacity: 1; } 50% { opacity: 0; } }
+   panel arrives, so without the script nothing is offset. */
 @media (prefers-reduced-motion: no-preference) {
   .js:not(.motion-paused) [data-place].is-placing { transition: translate var(--rest-bloom) var(--ease-out); }
   .js:not(.motion-paused) [data-place].is-placing:not(.is-placed) { translate: 0 16px; }
-  .js:not(.motion-paused) [data-loop="local-page"].is-live .caret { animation: caret calc(var(--rest-bloom) * 2) steps(1) infinite; }
 }
 
 /* ---------- follow-up band: the line that keeps going past the lead ---------- */
diff --git a/site/assets/site.js b/site/assets/site.js
index cc85ab6..1a4a95b 100644
--- a/site/assets/site.js
+++ b/site/assets/site.js
@@ -669,29 +669,64 @@
     };
     const hold = (tl, at) => tl.addLabel('rest', at).to({}, { duration: HOLD }, 'rest');
     const BUILD = {
-      // the query clears and types itself, this month's page lands over last month's, which slides back, signed
+      // Websites and SEO: the search runs again. After the finished hold the note, its connector, its signature and the
+      // panel stamp lift off; the query is selected and cleared, then typed into its one text node (no per-letter spans),
+      // so the caret rides right after the typed text, at a typist's uneven pace with a breath after "adults". A beat to
+      // read it, search is pressed, the result clears while the page loads, the result places, the note returns and its
+      // connector draws up to the title, it is signed and the panel stamp is pressed on. Every change is a tween or a
+      // set (no callbacks), so a seek to 'rest' always lands on the full query with no caret.
       'local-page': (el) => {
-        const type = el.querySelector('[data-type]');
-        const chars = type.textContent.split('').map((c) => { const s = document.createElement('span'); s.textContent = c; return s; });
-        type.textContent = '';
-        chars.forEach((s) => type.appendChild(s));
+        const field = el.querySelector('[data-type]');
+        const text = field.firstChild;
+        const query = text.data;
+        // GSAP sets plain properties, not a text node's: this hands its sets straight to the node
+        const typed = { get value() { return text.data; }, set value(v) { text.data = v; } };
+        const caret = el.querySelector('.gsr-caret');
+        const go = el.querySelector('[data-part="go"]');
+        const load = el.querySelector('[data-part="load"]');
         const result = el.querySelector('[data-part="result"]');
-        const sign = el.querySelector('[data-part="sign"]');
-        const marks = signParts(sign);
-        const stamp = sign.querySelector('.stamp');
-        const ghost = el.querySelector('.screen--ghost');
-        const typed = 0.9 + chars.length * 0.055;
+        const link = el.querySelector('[data-part="link"]');
+        const note = el.querySelector('[data-part="note"]');
+        const marks = signParts(el.querySelector('[data-part="sign"]'));
+        const stamp = el.closest('.service-row-visual').querySelector('.panel-stamp');
+        const FAST = sec('--dur-fast', 0.15);
+        const fill = token('--fill-quiet');
+        const mist = token('--sage-mist');
+        const drawn = 'inset(-8px -8px -8px -8px)';
+        const undrawn = 'inset(' + (link.offsetHeight + 8) + 'px -8px -8px -8px)';
         const tl = gsap.timeline({ paused: true, repeat: -1 });
-        tl.to([result, ...marks, stamp], { autoAlpha: 0, y: 8, duration: SLOW, ease: 'power2.in' }, 0)
-          .to(chars.slice().reverse(), { autoAlpha: 0, duration: 0.01, stagger: 0.012 }, 0.3)
-          .to(ghost, { x: 14, y: 10, rotation: -2, duration: REST, ease: 'power3.out' }, 0.3)
-          .to(chars, { autoAlpha: 1, duration: 0.01, stagger: 0.055, ease: 'none' }, 0.9)
-          .fromTo(result, { autoAlpha: 0, y: 14, scale: 0.98 }, { autoAlpha: 1, y: 0, scale: 1, duration: REST, ease: 'power3.out', immediateRender: false }, typed + 0.3)
-          .to(ghost, { x: 0, y: 0, rotation: 0, duration: REST, ease: 'power3.out' }, typed + 0.3)
-          .fromTo(marks, { autoAlpha: 0, y: 8 }, { autoAlpha: 1, y: 0, duration: SLOW, ease: 'power3.out', immediateRender: false }, typed + 0.9)
-          .set(stamp, { y: 0 }, typed + 0.9);
-        press(tl, stamp, typed + 1.15);
-        hold(tl, typed + 1.6);
+        tl.to([note, link, stamp], { autoAlpha: 0, duration: FAST, ease: 'power2.in' }, REST)
+          .set(marks, { autoAlpha: 0 }, REST + FAST)
+          // select the query, then clear it; the caret waits at the start
+          .set(field, { backgroundColor: fill }, REST + 0.3)
+          .set(field, { backgroundColor: clear(fill) }, REST + 0.3 + FAST)
+          .set(typed, { value: '' }, REST + 0.3 + FAST)
+          .set(caret, { autoAlpha: 1 }, REST + 0.3 + FAST);
+        // type: 70/90/60/110ms a letter in turn, 60ms a space, 180ms more after "adults"
+        const pace = [0.07, 0.09, 0.06, 0.11];
+        let t = REST + 0.3 + FAST + 0.35;
+        let n = 0;
+        for (let i = 1; i <= query.length; i++) {
+          tl.set(typed, { value: query.slice(0, i) }, t);
+          t += query[i - 1] === ' ' ? 0.06 : pace[n++ % pace.length];
+          if (query.slice(0, i).endsWith('adults')) t += 0.18;
+        }
+        // read it, press search; the result clears, the page loads, the result places
+        const sent = t + MED;
+        tl.set(caret, { autoAlpha: 0 }, sent)
+          .fromTo(go, { scale: 1, backgroundColor: clear(mist) }, { scale: 0.88, backgroundColor: mist, duration: FAST / 2, ease: 'power2.in', immediateRender: false }, sent)
+          .to(go, { scale: 1, backgroundColor: clear(mist), duration: FAST / 2, ease: 'power2.out' }, sent + FAST / 2)
+          .to(result, { autoAlpha: 0, duration: FAST, ease: 'power2.in' }, sent + FAST)
+          .fromTo(load, { autoAlpha: 1, scaleX: 0 }, { scaleX: 1, duration: SLOW, ease: 'power2.out', immediateRender: false }, sent + FAST)
+          .to(load, { autoAlpha: 0, duration: FAST }, sent + FAST + SLOW);
+        const placed = sent + FAST * 2 + MED;
+        tl.fromTo(result, { autoAlpha: 0, y: 10 }, { autoAlpha: 1, y: 0, duration: SLOW, ease: 'power2.out', immediateRender: false }, placed)
+          // the note returns and its connector draws from it up to the title, then it is signed
+          .fromTo(note, { autoAlpha: 0, y: 8 }, { autoAlpha: 1, y: 0, duration: MED, ease: 'power2.out', immediateRender: false }, placed + SLOW)
+          .fromTo(link, { autoAlpha: 1, clipPath: undrawn }, { autoAlpha: 1, clipPath: drawn, duration: SLOW, ease: 'power2.out', immediateRender: false }, placed + SLOW)
+          .fromTo(marks, { autoAlpha: 0, y: 6 }, { autoAlpha: 1, y: 0, duration: MED, ease: 'power2.out', immediateRender: false }, placed + SLOW + MED);
+        press(tl, stamp, placed + SLOW * 2 + MED);
+        hold(tl, placed + SLOW * 2 + MED * 2.8);
         return tl;
       },
       // a consult arrives, the band traces it down the ledger to its source, the source lights, signed
diff --git a/site/components.html b/site/components.html
index 70635e6..e9c9be6 100644
--- a/site/components.html
+++ b/site/components.html
@@ -756,32 +756,35 @@
         </div>
 
         <div class="ref-item ref-item--wide">
-          <p class="ref-name" id="demo-vignettes">.service-row-visual &gt; .vignette[data-loop][data-anim="none"][role="img"] (the homepage's core service rows, .service-row and .service-row--flip). local-page: the search box clears and types "braces for adults near me" (the caret blinks), this month's page lands over last month's (.screen--ghost, hidden on phones), signed by Web and SEO, the stamp pressed on. ledger: a "New consult" card arrives, a band traces it down the source ledger to Search ads, the source lights, signed by Paid media. Each loop is about 8 to 10s, runs only on screen with the tab visible, starts and ends on the finished, signed state, jumps there when animations are paused and never runs under reduced motion.</p>
+          <p class="ref-name" id="demo-vignettes">.service-row-visual &gt; .vignette[data-loop][data-anim="none"][role="img"] (the homepage's core service rows, .service-row and .service-row--flip). local-page (.service-row-visual--search &gt; .vignette--search): an illustrative excerpt of a Google results page in the palette (.screen.gsr: the address bar on desktop only, "Google" in plain type, the search field, All, Maps and Images, one organic result), and outside it a cream note (.gsr-note: "New this month", its line, signed by Web and SEO) joined to the result's title by a forest connector (.gsr-link). Its loop: the note lifts off, the query is selected, cleared and typed into its one text node with the caret right after the typed text, search is pressed, the page loads with no result, the result places, the note and connector return, signed, and the panel stamp is pressed on. Under 640px the address bar goes and the page stacks as on a phone. ledger: a "New consult" card arrives, a band traces it down the source ledger to Search ads, the source lights, signed by Paid media. Each loop is about 8 to 10s, runs only on screen with the tab visible, starts and ends on the finished, signed state, jumps there when animations are paused and never runs under reduced motion.</p>
           <div class="cards">
-            <div class="service-row-visual">
-              <div class="vignette" data-loop="local-page" data-anim="none" role="img" aria-label="Sample: a search for braces for adults near me finds this month's new local page, braces for adults in [your city], signed by Web and SEO.">
-                <div class="screen screen--ghost">
-                  <span class="chip chip--page">Last month</span>
-                  <span class="serp-title">Clear aligners for teens</span>
-                </div>
-                <div class="screen screen--raised screen--front">
+            <div class="service-row-visual service-row-visual--search">
+              <div class="vignette vignette--search" data-loop="local-page" data-anim="none" role="img" aria-label="Sample, an illustrative search result: a Google search for braces for adults near me shows one result, [Your practice], Adult braces in [your city]. A note outside the page says it is new this month, a page answering adult patients' questions, signed by Web and SEO.">
+                <div class="gsr-top"><span class="gsr-caption">Illustrative search result</span><span class="chip chip--sample">Sample</span></div>
+                <div class="screen gsr">
                   <div class="screen-bar"><span class="bar-dots"><i></i><i></i><i></i></span><span class="screen-url">google.com/search</span></div>
-                  <div class="serp">
-                    <div class="serp-query"><svg class="icon" viewBox="0 0 20 20" focusable="false"><circle cx="9" cy="9" r="5.5"/><path d="m13.2 13.2 3.8 3.8"/></svg><span class="serp-typed" data-type>braces for adults near me</span><span class="caret"></span></div>
-                    <div class="serp-result" data-part="result">
-                      <span class="serp-url">[yourpractice].com › braces-for-adults-[your city] <span class="chip chip--new">New this month</span></span>
-                      <span class="serp-title">Braces for adults in [your city] | [your practice name]</span>
-                      <span class="serp-snippet">Written from your answers to the questions adult patients ask.</span>
+                  <div class="gsr-page">
+                    <span class="gsr-mark">Google</span>
+                    <div class="gsr-field"><span class="gsr-q"><span data-type>braces for adults near me</span><span class="gsr-caret"></span></span><span class="gsr-go" data-part="go"><svg class="icon" viewBox="0 0 20 20" focusable="false"><circle cx="9" cy="9" r="5.5"/><path d="m13.2 13.2 3.8 3.8"/></svg></span></div>
+                    <div class="gsr-tabs"><span class="is-on">All</span><span>Maps</span><span>Images</span><span class="gsr-load" data-part="load"></span></div>
+                    <div class="gsr-result" data-part="result">
+                      <div class="gsr-site"><span class="gsr-fav"><svg class="icon" viewBox="0 0 20 20" focusable="false"><circle cx="10" cy="10" r="7"/><ellipse cx="10" cy="10" rx="3" ry="7"/><path d="M3 10h14"/></svg></span><span class="gsr-site-text"><span class="gsr-name">[Your practice]</span><span class="gsr-crumb">Practice website</span></span></div>
+                      <span class="gsr-title">Adult braces in [your city]</span>
+                      <span class="gsr-snippet">Explore braces for adults, what to expect at your first visit, and how to request a consultation.</span>
+                      <span class="gsr-link" data-part="link"></span>
                     </div>
                   </div>
+                </div>
+                <div class="gsr-note" data-part="note">
+                  <span class="gsr-note-title">New this month</span>
+                  <span class="gsr-note-line">A page answering adult patients' questions.</span>
                   <div class="signoff" data-part="sign">
                     <svg class="signoff-disc founder-art" viewBox="-1 -1 2 2" focusable="false"><circle r="1"/><path d="M0.2621 -0.8819A0.92 0.92 0 1 0 0.2621 0.8819A0.8832 0.8832 0 1 1 0.2621 -0.8819Z"/></svg>
                     <span class="signoff-who">Signed by <em class="signature">Web and SEO</em></span>
-                    <span class="chip chip--sample">Sample</span>
-                    <img class="stamp" src="/assets/img/stamp-signed.svg" alt="" width="52" height="52">
                   </div>
                 </div>
               </div>
+              <img class="stamp panel-stamp" src="/assets/img/stamp-signed.svg" alt="" width="112" height="112">
             </div>
             <div class="service-row-visual">
               <div class="vignette" data-loop="ledger" data-anim="none" role="img" aria-label="Sample: consults booked by source, Maps, Search ads, Meta ads and Website, each [n]. A new consult is traced to Search ads, signed by Paid media.">
diff --git a/site/index.html b/site/index.html
index 57d3074..0220b10 100644
--- a/site/index.html
+++ b/site/index.html
@@ -318,27 +318,29 @@ height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
             <p>A site built from your practice, not a template, plus a new local page every month and your Google Business Profile kept current. You own the site, the domain and the content.</p>
             <a class="btn btn--secondary" href="/services/websites-and-seo">See websites and SEO <svg class="arrow" viewBox="0 0 22 12" aria-hidden="true" focusable="false"><path d="M1 6h19M15 1l5 5-5 5"/></svg></a>
           </div>
-          <div class="service-row-visual" data-place>
-            <div class="vignette" data-loop="local-page" data-anim="none" role="img" aria-label="Sample: a search for braces for adults near me finds this month's new local page, braces for adults in [your city], signed by Web and SEO.">
-              <div class="screen screen--ghost">
-                <span class="chip chip--page">Last month</span>
-                <span class="serp-title">Clear aligners for teens</span>
-              </div>
-              <div class="screen screen--raised screen--front">
+          <div class="service-row-visual service-row-visual--search" data-place>
+            <div class="vignette vignette--search" data-loop="local-page" data-anim="none" role="img" aria-label="Sample, an illustrative search result: a Google search for braces for adults near me shows one result, [Your practice], Adult braces in [your city]. A note outside the page says it is new this month, a page answering adult patients' questions, signed by Web and SEO.">
+              <div class="gsr-top"><span class="gsr-caption">Illustrative search result</span><span class="chip chip--sample">Sample</span></div>
+              <div class="screen gsr">
                 <div class="screen-bar"><span class="bar-dots"><i></i><i></i><i></i></span><span class="screen-url">google.com/search</span></div>
-                <div class="serp">
-                  <div class="serp-query"><svg class="icon" viewBox="0 0 20 20" focusable="false"><circle cx="9" cy="9" r="5.5"/><path d="m13.2 13.2 3.8 3.8"/></svg><span class="serp-typed" data-type>braces for adults near me</span><span class="caret"></span></div>
-                  <div class="serp-result" data-part="result">
-                    <span class="serp-url">[yourpractice].com › braces-for-adults-[your city] <span class="chip chip--new">New this month</span></span>
-                    <span class="serp-title">Braces for adults in [your city] | [your practice name]</span>
-                    <span class="serp-snippet">Written from your answers to the questions adult patients ask.</span>
+                <div class="gsr-page">
+                  <span class="gsr-mark">Google</span>
+                  <div class="gsr-field"><span class="gsr-q"><span data-type>braces for adults near me</span><span class="gsr-caret"></span></span><span class="gsr-go" data-part="go"><svg class="icon" viewBox="0 0 20 20" focusable="false"><circle cx="9" cy="9" r="5.5"/><path d="m13.2 13.2 3.8 3.8"/></svg></span></div>
+                  <div class="gsr-tabs"><span class="is-on">All</span><span>Maps</span><span>Images</span><span class="gsr-load" data-part="load"></span></div>
+                  <div class="gsr-result" data-part="result">
+                    <div class="gsr-site"><span class="gsr-fav"><svg class="icon" viewBox="0 0 20 20" focusable="false"><circle cx="10" cy="10" r="7"/><ellipse cx="10" cy="10" rx="3" ry="7"/><path d="M3 10h14"/></svg></span><span class="gsr-site-text"><span class="gsr-name">[Your practice]</span><span class="gsr-crumb">Practice website</span></span></div>
+                    <span class="gsr-title">Adult braces in [your city]</span>
+                    <span class="gsr-snippet">Explore braces for adults, what to expect at your first visit, and how to request a consultation.</span>
+                    <span class="gsr-link" data-part="link"></span>
                   </div>
                 </div>
+              </div>
+              <div class="gsr-note" data-part="note">
+                <span class="gsr-note-title">New this month</span>
+                <span class="gsr-note-line">A page answering adult patients' questions.</span>
                 <div class="signoff" data-part="sign">
                   <svg class="signoff-disc founder-art" viewBox="-1 -1 2 2" focusable="false"><circle r="1"/><path d="M0.2621 -0.8819A0.92 0.92 0 1 0 0.2621 0.8819A0.8832 0.8832 0 1 1 0.2621 -0.8819Z"/></svg>
                   <span class="signoff-who">Signed by <em class="signature">Web and SEO</em></span>
-                  <span class="chip chip--sample">Sample</span>
-                  <img class="stamp" src="/assets/img/stamp-signed.svg" alt="" width="52" height="52">
                 </div>
               </div>
             </div>
```

</details>

### 6. Google and Meta ads sample: two real-format ads and a consult traced back to its ad

**What and why.** Chris: the ledger ("Consults booked, by source" with `[n]` rows) was "half-baked" and didn't show the viewer anything. The sample now shows what the row's own copy promises: **your ads run on Google and on Meta, and every booked consult is traced back to the ad that brought it.**

**The sample** (`.service-row-visual--ads > .vignette.ads[data-loop="ads"]`)
- **Top row:** the caption "Illustrative ads and booking" and the Sample chip, matching the SEO panel.
- **Google search ad**, labelled "Google Search" outside its UI:
  - the search it answers, "orthodontist for adults";
  - Sponsored, and "[Your practice]" with a Call button (the call extension);
  - the headline "Adult braces | Request a consult", within Google's headline limits;
  - the description "Braces as an adult? See what treatment involves, then ask our team about a consultation.";
  - two sitelinks, "Your first visit" and "Braces or clear aligners".
- **Meta feed ad**, labelled "Meta":
  - "[Your practice]" / Sponsored;
  - the post "Considering braces as an adult? Start with a conversation about your options.";
  - a flat forest creative with cream serif "Your questions about adult braces, answered.";
  - "Adult braces" and Learn more;
  - no likes, comments or engagement.
- **The consult record** (`.ads-consult`):
  - Consult booked, [Time];
  - [Name], Adult braces;
  - Source / Campaign: "Google Search ad" / "Search: Adult braces", or "Meta feed ad" / "Meta: Adult braces";
  - signed "Signed by *Paid media*".
- A 2px forest wire (`.ads-wire`) joins the record to the ad it came from, and that ad gets a 2px forest edge.

**Brackets** are only [Your practice], [Name] and [Time]. There are no numbers.

**Motion** (site.js "signed samples", builder `ads`, which replaces `ledger`):
1. The finished state holds for 600ms.
2. The record's details and signature fade, the wire draws back and the panel stamp lifts.
3. The next consult places.
4. The wire draws from the record up to its ad, and that ad gets its forest edge.
5. It is signed and the panel stamp is pressed.
6. It rests 4s.

The first cycle traces to **Meta** and the next back to **Google**, about 14s for both. Google is the finished state, so pause, reduced motion and no JavaScript all show the Google trace. The signed-samples selector now watches `[data-loop="ads"]` instead of `ledger` and `report`.

**Narrow panels** (container query `ads-panel`, under 520px wide: phones, and desktop widths of about 1025 to 1150px):
- the ads stack, and the platform labels are dropped;
- the Google ad drops its search field and sitelinks, and its description is clamped to two lines;
- the Meta ad becomes a horizontal card with a small square creative;
- the wire runs down a lane on the left;
- the sign-off sits right, so the bottom-left stamp only covers an empty corner.

**Removed:** the `.ledger*` markup, CSS and JS, and the small sign-off stamp. No other page used them.

**Components page:** the motion list, the signed-samples entry and the ads demo are updated.

**Check:** watch two cycles. The wire should go to Meta, then back to Google. Pause shows the Google-traced finished state.

**Files and lines** (after this change):

- `site/assets/site.css`: lines 1618–1629, 1685–1691, 1791–1916
- `site/assets/site.js`: lines 641–647, 649–655, 729–779
- `site/components.html`: lines 113–119, 711–717, 756–762, 786–838
- `site/index.html`: lines 355–403

<details>
<summary>Exact diff for change 6</summary>

```diff
diff --git a/site/assets/site.css b/site/assets/site.css
index e4b55a5..2c361e2 100644
--- a/site/assets/site.css
+++ b/site/assets/site.css
@@ -1618,12 +1618,12 @@ h1 em, h2 em, h3 em, .tagline em, .signed-change em { color: var(--accent-italic
   .addon { grid-template-columns: minmax(0, 1fr); padding: var(--space-5) var(--space-4); }
 }
 
-/* ----- Looping graphics: [data-loop="status|compare"] (CSS) and [data-loop="local-page|ledger|report"] (GSAP) -----
+/* ----- Looping graphics: [data-loop="status|compare"] (CSS) and [data-loop="local-page|ads"] (GSAP) -----
    status and compare are slow CSS loops on a sample graphic. site.js adds .is-looping once it watches the graphic and
    .is-live while it is on screen; off screen the loop pauses. The first frame of every loop is the finished graphic, so
    a paused, still or script-less graphic is complete. Under prefers-reduced-motion none of it runs. Put data-anim="none"
    on the same element so the one-shot behaviours in site.js leave it alone. The homepage's signed samples
-   (local-page, ledger, report) are GSAP timelines in site.js ("signed samples"); see "signed samples" below. */
+   (local-page, ads) are GSAP timelines in site.js ("signed samples"); see "signed samples" below. */
 /* status chips: the loop opens on the finished row, then steps New, Called, Consult booked */
 @keyframes loop-status-new {
   0%, 30% { border-color: transparent; background-color: var(--surface-panel); color: var(--forest); }
@@ -1685,7 +1685,7 @@ h1 em, h2 em, h3 em, .tagline em, .signed-change em { color: var(--accent-italic
 /* the add-ons cycle follows the rows, on its own hairline */
 .run-list--beyond { margin-top: var(--space-24); }
 
-/* ---------- signed samples (homepage: the two service rows and the monthly report) ---------- */
+/* ---------- signed samples (homepage: the two service rows) ---------- */
 /* Every change, signed: each sample replays its job in three beats, place (the work lands), mark (it is signed by role
    and the Rose stamp is pressed on), rest (it holds, finished). The static markup is the finished, signed state.
    site.js ("signed samples") builds each timeline the first time it reaches the screen, plays it only while on screen
@@ -1791,20 +1791,126 @@ h1 em, h2 em, h3 em, .tagline em, .signed-change em { color: var(--accent-italic
   .gsr-note .signoff-disc.founder-art { width: 24px; height: 24px; }
 }
 
-/* Google and Meta ads: a consult arrives, a band traces it down the ledger to its source, the source lights, signed */
-.ledger { max-width: 440px; }
-.ledger-new { display: flex; align-items: center; gap: var(--space-3); padding: var(--space-3) var(--space-4); border: var(--border-w) solid var(--forest); border-radius: var(--radius-input); }
-.ledger-new b { font-weight: 600; }
-.ledger-new .lead-dot { flex: none; }
-.ledger-time { margin-left: auto; font-size: var(--text-label); font-weight: 600; color: var(--text-muted); }
-.ledger-body { position: relative; }
-.ledger-rows { position: relative; display: grid; }
-.ledger-rows li { display: flex; align-items: center; gap: var(--space-3); height: 44px; padding-inline: var(--space-3); font-weight: 500; }
-.ledger-rows .leader { flex: 1; height: 1px; border-top: var(--border-w) dotted var(--border-quiet); }
-.ledger-rows b { min-width: 3.2em; padding: 2px var(--space-2); border-radius: var(--radius-pill); font-weight: 600; text-align: center; font-variant-numeric: tabular-nums; }
-.ledger-rows li.is-key b { background: var(--forest); color: var(--cream); }
-/* the trace: a band over the source row (the second row) */
-.ledger-hl { position: absolute; left: 0; right: 0; top: 44px; height: 44px; border-radius: var(--radius-input); background: var(--surface-panel); }
+/* Google and Meta ads: the practice's ads on both platforms, and a booked consult traced back to the ad that brought it.
+   Two real-format ads side by side (a Google search ad with its Call button; a Meta feed post with a flat forest
+   creative and Learn more), and under them the consult record, signed by Paid media. A forest wire runs from the
+   record up to the ad it came from, and that ad gets a forest outline. Illustration only: the buttons do nothing.
+   Markup: .service-row-visual--ads > .vignette.ads[data-loop=ads] > .ads-top (caption + Sample chip) + .ads-slot ×2
+   (p.ads-label + .ads-ad[data-ad=google|meta] + span.ads-wire[data-wire] > i (the Meta slot also holds the Google
+   wire's pass, shown when stacked)) + .ads-consult[data-part=consult] (span.ads-wire--land, the head, the who,
+   dl.ads-consult-source whose dd holds one span[data-src] per ad, .signoff); then img.panel-stamp.
+   Each wire segment draws by --d (0 to 1) along its own axis, from the record end. Static and paused: traced to the
+   Google ad (its .is-source outline and wire; the Meta wire at --d 0, the Meta source text hidden). The loop traces
+   the next consult to the Meta ad, then back to Google (site.js "signed samples"). The bottom-left corner stays clear
+   for the panel stamp: the record and its sign-off start 128px in on desktop; stacked, the sign-off sits right. */
+/* the panel is the container (the ads stack whenever its inner width is under 520px: phones, and 1025-1150px). Its
+   top padding is small: the caption and Sample chip row sits there, as on the Websites and SEO panel. */
+.service-row-visual.service-row-visual--ads { container: ads-panel / inline-size; padding: var(--space-4) var(--space-8) var(--space-8); }
+/* its clear corner is the bottom left wherever the panel sits (the flipped row, and its reference on components.html) */
+.service-row-visual--ads .panel-stamp { right: auto; left: -16px; rotate: 8deg; }
+@media (max-width: 768px) {
+  .service-row-visual--ads .panel-stamp { left: 4px; }
+}
+@media (max-width: 640px) {
+  .service-row-visual.service-row-visual--ads { padding: var(--space-4) var(--space-4) var(--space-6); }
+}
+.ads { --ads-band: var(--space-6); grid-template-columns: repeat(2, minmax(0, 1fr)); justify-items: stretch; gap: var(--space-4); max-width: 600px; }
+.ads-top { grid-column: 1 / -1; display: flex; align-items: center; justify-content: space-between; gap: var(--space-3); }
+.ads-caption { font-size: var(--text-caption); font-weight: 500; line-height: 1.4; color: var(--forest); }
+.ads-slot { position: relative; display: grid; grid-template-rows: auto 1fr; gap: var(--space-2); min-width: 0; }
+/* the platform, outside its simulated UI: forest on sage mist, 7.55:1 */
+.ads-label { font-size: var(--text-label); font-weight: 600; line-height: 1.4; color: var(--forest); }
+.ads-ad { position: relative; display: grid; align-content: start; gap: var(--space-3); min-width: 0; padding: var(--space-4); border: var(--border-w) solid var(--border-quiet); border-radius: var(--radius-card); background: var(--surface-page); box-shadow: var(--shadow-2); font-size: var(--text-body-s); line-height: 1.5; }
+/* the ad a consult is traced to: a 2px forest edge over its hairline, shown by --src (0 to 1; site.js tweens it) */
+.ads-ad::after { content: ""; position: absolute; inset: -1px; border: var(--border-w-strong) solid var(--forest); border-radius: inherit; opacity: var(--src, 0); pointer-events: none; }
+.ads-ad.is-source { --src: 1; }
+/* who is advertising: the practice's mark (a plain forest disc; a globe on Google), its name, Sponsored */
+.ads-site { display: flex; align-items: center; gap: var(--space-3); min-width: 0; }
+.ads-mark { flex: none; display: grid; place-items: center; width: 32px; height: 32px; border-radius: 50%; background: var(--surface-strong); color: var(--text-on-strong); }
+.ads-mark .icon { width: 16px; height: 16px; }
+.ads-who { display: grid; min-width: 0; line-height: 1.3; }
+.ads-name { font-weight: 600; }
+.ads-sponsored { font-size: var(--text-caption); font-weight: 500; color: var(--text-muted); }
+.ads-google .ads-sponsored { order: -1; font-weight: 600; color: var(--text-body); }
+.ads-call { display: inline-flex; align-items: center; gap: var(--space-1); margin-left: auto; padding: var(--space-1) var(--space-3); border: var(--border-w) solid var(--border-input); border-radius: var(--radius-pill); color: var(--forest); font-size: var(--text-caption); font-weight: 600; line-height: 1.4; }
+.ads-call .icon { width: 14px; height: 14px; }
+.ads-google-title { font-size: var(--text-body-m); font-weight: 500; line-height: 1.35; color: var(--forest); }
+.ads-google-text { color: var(--text-muted); }
+/* the search it answers, and its sitelinks (desktop only: phones show the ad alone) */
+.ads-query { display: flex; align-items: center; gap: var(--space-2); margin-bottom: var(--space-1); padding: var(--space-2) var(--space-3); border: var(--border-w) solid var(--border-input); border-radius: var(--radius-pill); font-weight: 500; }
+.ads-query .icon { width: 16px; height: 16px; color: var(--text-muted); }
+.ads-sitelinks { display: grid; margin-top: var(--space-1); }
+.ads-sitelinks li { padding-block: var(--space-2); border-top: var(--border-w) solid var(--border-quiet); font-weight: 500; color: var(--forest); }
+.ads-meta { grid-template-rows: auto auto minmax(0, 1fr) auto; align-content: stretch; }
+.ads-meta-art { display: grid; align-content: end; align-self: stretch; min-height: 140px; margin-inline: calc(-1 * var(--space-4)); padding: var(--space-4); background: var(--surface-strong); color: var(--text-on-strong); font-family: var(--font-display); font-size: var(--text-h3); line-height: 1.1; text-wrap: balance; }
+.ads-meta-foot { display: flex; align-items: center; justify-content: space-between; gap: var(--space-2); margin: calc(-1 * var(--space-3)) calc(-1 * var(--space-4)) calc(-1 * var(--space-4)); padding: var(--space-3) var(--space-4); border-radius: 0 0 var(--radius-card) var(--radius-card); background: var(--surface-panel); }
+.ads-meta-headline { font-weight: 600; }
+.ads-meta-button { flex: none; padding: var(--space-1) var(--space-3); border-radius: var(--radius-input); background: var(--surface-page); font-size: var(--text-caption); font-weight: 600; line-height: 1.6; }
+/* the consult record: booked, who and for what, and where it came from */
+.ads-consult { position: relative; grid-column: 1 / -1; justify-self: end; display: grid; gap: var(--space-3); width: calc(100% - 128px); margin-top: var(--ads-band); padding: var(--space-4) var(--space-5); border: var(--border-w) solid var(--border-quiet); border-radius: var(--radius-card); background: var(--surface-page); box-shadow: var(--shadow-2); font-size: var(--text-body-s); line-height: 1.5; }
+.ads-consult-head { display: flex; align-items: center; gap: var(--space-2); font-weight: 600; }
+.ads-consult-head .lead-dot { flex: none; }
+.ads-consult-time { margin-left: auto; font-size: var(--text-label); color: var(--text-muted); font-variant-numeric: tabular-nums; }
+.ads-consult-who { display: flex; flex-wrap: wrap; align-items: baseline; gap: 0 var(--space-3); color: var(--text-muted); }
+.ads-consult-name { font-family: var(--font-display); font-size: var(--text-h3); line-height: 1.2; color: var(--text-body); }
+/* label sage on sage mist, 5.1:1 */
+.ads-consult-source { display: grid; grid-template-columns: auto minmax(0, 1fr); gap: var(--space-1) var(--space-4); padding: var(--space-3) var(--space-4); border-radius: var(--radius-input); background: var(--surface-panel); }
+.ads-consult-source dt { font-size: var(--text-label); font-weight: 600; line-height: 1.6; color: var(--text-muted); }
+.ads-consult-source dd { display: grid; font-weight: 600; }
+.ads-consult-source dd > span { grid-area: 1 / 1; }
+.ads-consult-source [data-src="meta"] { visibility: hidden; opacity: 0; }
+.ads-signoff { padding-right: 0; }
+/* the wire: 2px forest segments under each ad, meeting above the record's centre. The record's centre sits 72px past
+   the Google slot's right edge (it starts 128px in), which is 56px into the Meta slot. */
+.ads-wire { position: absolute; top: 100%; left: 0; right: 0; height: calc(var(--ads-band) / 2 + var(--space-2)); pointer-events: none; }
+.ads-wire i { position: absolute; background: var(--forest); }
+.ads-wire i:nth-child(1) { left: calc(50% - 1px); top: 0; width: 2px; height: 100%; scale: 1 var(--d, 1); transform-origin: 50% 100%; }
+.ads-wire i:nth-child(2) { top: calc(100% - 2px); height: 2px; scale: var(--d, 1) 1; }
+.ads-wire[data-wire="google"] i:nth-child(2) { left: calc(50% - 1px); width: calc(50% + 74px); transform-origin: 100% 50%; }
+.ads-wire[data-wire="meta"] i:nth-child(2) { left: 55px; width: calc(50% - 54px); transform-origin: 0 50%; }
+.ads-wire[data-wire="meta"] i { --d: 0; }
+.ads-wire--land { top: auto; bottom: 100%; height: calc(var(--ads-band) / 2 + var(--space-2) + 2px); }
+.ads-wire--land i:nth-child(2), .ads-wire--pass { display: none; }
+/* Narrow panels (phones, and 1025-1150px): the two ads stacked and compact (no platform labels: each reads as its
+   platform; the Meta post as a card with its creative a small square beside the post text, Google's and Meta's own
+   "See more" clamps on the copy), then the record. The wire runs in a 20px lane down the left: out of the record's
+   head, up past the Meta ad, into the head of the ad it came from. The record's sign-off sits right (no disc), clear
+   of the stamp on the bottom-left. */
+@container ads-panel (max-width: 519px) {
+  .ads { --ads-hook: 26px; grid-template-columns: minmax(0, 1fr); gap: var(--space-2); padding-left: var(--space-5); }
+  .ads-slot { gap: 0; }
+  .ads-label { display: none; }
+  .ads-ad { gap: var(--space-2); padding: var(--space-3); }
+  .ads-mark { width: 28px; height: 28px; }
+  .ads-query, .ads-sitelinks { display: none; }
+  .ads-google-text, .ads-meta-text { display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; overflow: hidden; }
+  .ads-meta { grid-template-columns: 96px minmax(0, 1fr); grid-template-rows: auto auto 1fr; align-content: start; gap: var(--space-1) var(--space-3); }
+  .ads-meta .ads-site { grid-column: 2; }
+  .ads-meta .ads-mark { display: none; }
+  .ads-meta-text { grid-column: 2; grid-row: 2; }
+  .ads-meta-art { grid-column: 1; grid-row: 1 / -1; aspect-ratio: auto; min-height: 0; margin: 0; padding: var(--space-2); border-radius: var(--radius-input); font-size: var(--text-body-s); line-height: 1.05; }
+  .ads-meta-foot { grid-column: 2; grid-row: 3; align-self: end; margin: 0; padding: 0; background: none; }
+  .ads-meta-headline { display: none; }
+  .ads-meta-button { background: var(--surface-panel); }
+  .ads-consult { width: auto; justify-self: stretch; gap: var(--space-2); margin-top: 0; padding: var(--space-3); }
+  .ads-consult-source { padding: 0; background: none; }
+  .ads-signoff { justify-content: flex-end; gap: var(--space-2); padding-top: var(--space-2); }
+  .ads-signoff .signoff-disc.founder-art { width: 24px; height: 24px; }
+  .ads .ads-wire { top: var(--ads-hook); bottom: calc(-1 * var(--space-2)); left: -11px; right: auto; width: 11px; height: auto; }
+  .ads .ads-wire i:nth-child(1) { left: 0; top: -1px; width: 100%; height: 2px; scale: var(--d, 1) 1; transform-origin: 0 50%; }
+  .ads .ads-wire i:nth-child(2) { left: 0; top: -1px; width: 2px; height: calc(100% + 1px); scale: 1 var(--d, 1); transform-origin: 50% 100%; }
+  .ads .ads-wire--pass { display: block; top: 0; width: 2px; }
+  .ads .ads-wire--pass i:nth-child(1) { top: 0; width: 2px; height: 100%; scale: 1 var(--d, 1); transform-origin: 50% 100%; }
+  .ads .ads-wire--land { top: -1px; bottom: auto; left: -12px; width: 12px; height: 24px; }
+  .ads .ads-wire--land i:nth-child(1) { top: 0; width: 2px; height: 100%; scale: 1 var(--d, 1); transform-origin: 50% 100%; }
+  .ads .ads-wire--land i:nth-child(2) { display: block; top: calc(100% - 1px); width: calc(100% + 1px); height: 2px; scale: var(--d, 1) 1; transform-origin: 100% 50%; }
+}
+/* stacked beside the copy (1025-1150px) the stamp is full size: lift the record clear of its 96px corner */
+@media (min-width: 769px) {
+  @container ads-panel (max-width: 519px) {
+    .ads { padding-bottom: var(--space-5); }
+  }
+}
 
 /* What happens after you say yes: four steps beside the signed monthly report (sticky beside the steps from 1025px).
    Markup: .after-yes > ol.yes-steps > li.yes-step (span.step-num + .yes-step-text (h3.h3 + p)) ×4
diff --git a/site/assets/site.js b/site/assets/site.js
index 1a4a95b..0a68bc7 100644
--- a/site/assets/site.js
+++ b/site/assets/site.js
@@ -641,7 +641,7 @@
     }
   }
 
-  // ----- signed samples (homepage: [data-loop="local-page|ledger|report"]; site.css "signed samples") -----
+  // ----- signed samples (homepage: [data-loop="local-page|ads"]; site.css "signed samples") -----
   // Each sample replays its job in three beats: place (the work lands), mark (it is signed by role and the Rose stamp is
   // pressed on), rest (it holds, finished). The static markup is the finished state, and every timeline starts and ends
   // on it, so a repeat never jumps and a pause can always show it. A timeline is built the first time its sample reaches
@@ -649,7 +649,7 @@
   // to its finished state ('rest') when the visitor pauses animations. Under reduced motion nothing is built. Only
   // transform, opacity and colour change; the Sample chip never fades. Durations come from the motion tokens.
   // [data-place] panels settle 16px into place the first time they reach the screen (CSS does the motion).
-  const signedEls = document.querySelectorAll('[data-loop="local-page"], [data-loop="ledger"], [data-loop="report"]');
+  const signedEls = document.querySelectorAll('[data-loop="local-page"], [data-loop="ads"]');
   if (signedEls.length && window.gsap && 'IntersectionObserver' in window) {
     const gsap = window.gsap;
     const token = (name) => getComputedStyle(root).getPropertyValue(name).trim();
@@ -729,27 +729,51 @@
         hold(tl, placed + SLOW * 2 + MED * 2.8);
         return tl;
       },
-      // a consult arrives, the band traces it down the ledger to its source, the source lights, signed
-      ledger: (el) => {
-        const arrival = el.querySelector('[data-part="arrival"]');
-        const hl = el.querySelector('[data-part="hl"]');
-        const key = el.querySelector('li.is-key b');
+      // the consult is traced back to the ad that brought it: the record clears and a new consult is placed, the wire
+      // draws from the record up to its ad, the ad is outlined, signed, the panel stamp pressed. Each cycle traces the
+      // other ad: the first to Meta, the second back to Google, which is the finished state ('rest') and the markup.
+      ads: (el) => {
+        const consult = el.querySelector('[data-part="consult"]');
+        const record = consult.querySelectorAll('.ads-consult-head, .ads-consult-who, .ads-consult-source');
         const sign = el.querySelector('[data-part="sign"]');
         const marks = signParts(sign);
-        const stamp = sign.querySelector('.stamp');
-        const row = key.closest('li').offsetHeight;
-        const forest = token('--forest');
+        const stamp = el.closest('.service-row-visual').querySelector('.panel-stamp');
+        const ad = (src) => el.querySelector('[data-ad="' + src + '"]');
+        const texts = (src) => el.querySelectorAll('[data-src="' + src + '"]');
+        const own = (wire) => Array.from(wire.children).reverse();
+        // a path's segments in drawing order, from the record end: the record's stub and rise, the pass beside the
+        // Meta ad (Google's, on phones), then the ad's own run and drop
+        const path = (src) => [
+          ...own(el.querySelector('[data-wire="land"]')),
+          ...(src === 'google' ? Array.from(el.querySelectorAll('.ads-wire--pass i')) : []),
+          ...own(el.querySelector('.ads-wire[data-wire="' + src + '"]:not(.ads-wire--pass)')),
+        ];
+        const shown = (seg) => seg.getClientRects().length > 0;
         const tl = gsap.timeline({ paused: true, repeat: -1 });
-        tl.to([arrival, hl, ...marks, stamp], { autoAlpha: 0, duration: SLOW, ease: 'power2.in' }, 0)
-          .to(key, { backgroundColor: clear(forest), color: token('--ink'), duration: MED }, 0.1)
-          .set(hl, { y: -row }, 0.4)
-          .fromTo(arrival, { autoAlpha: 0, y: -14 }, { autoAlpha: 1, y: 0, duration: REST, ease: 'power3.out', immediateRender: false }, 0.8)
-          .to(hl, { autoAlpha: 1, duration: MED }, 1.5)
-          .to(hl, { y: 0, duration: SLOW, ease: 'power3.out' }, 1.75)
-          .to(key, { backgroundColor: forest, color: token('--cream'), duration: MED }, 2.1)
-          .fromTo(marks, { autoAlpha: 0, y: 8 }, { autoAlpha: 1, y: 0, duration: SLOW, ease: 'power3.out', immediateRender: false }, 2.5);
-        press(tl, stamp, 2.75);
-        hold(tl, 3.2);
+        const cycle = (from, to, at) => {
+          tl.to([...record, ...marks], { autoAlpha: 0, y: 8, duration: SLOW, ease: 'power2.in' }, at)
+            .to(stamp, { autoAlpha: 0, duration: SLOW, ease: 'power2.in' }, at)
+            .fromTo(path(from), { '--d': 1 }, { '--d': 0, duration: MED, ease: 'power2.in', immediateRender: false }, at)
+            .fromTo(ad(from), { '--src': 1 }, { '--src': 0, duration: MED, immediateRender: false }, at)
+            .set(texts(from), { autoAlpha: 0 }, at + SLOW)
+            .set(texts(to), { autoAlpha: 1 }, at + SLOW)
+            .fromTo(record, { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: REST, ease: 'power3.out', stagger: 0.08, immediateRender: false }, at + 0.6);
+          // the wire draws over SLOW, split across the segments this layout shows (hidden ones are set at once)
+          const trace = at + 1.4;
+          const segs = path(to);
+          const step = SLOW / Math.max(1, segs.filter(shown).length);
+          let k = 0;
+          segs.forEach((seg) => {
+            const on = shown(seg);
+            tl.fromTo(seg, { '--d': 0 }, { '--d': 1, duration: on ? step : 0, ease: 'none', immediateRender: false }, on ? trace + step * k++ : trace);
+          });
+          tl.fromTo(ad(to), { '--src': 0 }, { '--src': 1, duration: MED, immediateRender: false }, trace + SLOW - 0.05)
+            .fromTo(marks, { autoAlpha: 0, y: 8 }, { autoAlpha: 1, y: 0, duration: SLOW, ease: 'power3.out', immediateRender: false }, trace + SLOW + MED);
+          press(tl, stamp, trace + SLOW + MED + 0.35);
+          return trace + SLOW + MED + 0.35 + MED * 1.8;
+        };
+        const first = cycle('google', 'meta', REST);
+        hold(tl, cycle('meta', 'google', first + HOLD + REST));
         return tl;
       },
       // the monthly report: a band walks to each signed change and the stamp is pressed on it
diff --git a/site/components.html b/site/components.html
index e9c9be6..a9d0c32 100644
--- a/site/components.html
+++ b/site/components.html
@@ -113,7 +113,7 @@
             <li><a class="inline-link" href="#demo-signature">signature</a>: writes in from left to right. Runs on <code>.signature</code>.</li>
             <li><a class="inline-link" href="#demo-hooks">rise, stagger, count, draw, status</a>: the five hooks a page builder adds by hand.</li>
             <li><a class="inline-link" href="#demo-loops">loops</a>: a slow CSS loop on a sample graphic, only while it is on screen: the status chips step from new to called to consult booked. Runs on <code>[data-loop="status"]</code>. Its first frame is the finished graphic; under reduced motion it does not run.</li>
-            <li><a class="inline-link" href="#demo-vignettes">signed samples</a>: GSAP loops of about 8 to 10s in three beats (place, mark, rest): the search types itself and this month's page lands, signed by Web and SEO (<code>[data-loop="local-page"]</code>); a consult is traced down the source ledger, signed by Paid media (<code>[data-loop="ledger"]</code>); a band walks to each signed change in the monthly report and its stamp is pressed on (<code>[data-loop="report"]</code>, see <a class="inline-link" href="#demo-after-yes">after you say yes</a>). Only on screen with the tab visible; paused animations jump each one to its finished, signed state; never under reduced motion. Their panels (<code>[data-place]</code>) settle 16px into place once, at full opacity.</li>
+            <li><a class="inline-link" href="#demo-vignettes">signed samples</a>: GSAP loops of about 8 to 10s in three beats (place, mark, rest): the query is typed into a Google search field with the caret riding after the text, search is pressed and one organic result loads; a "New this month" note outside the Google page points to it, signed by Web and SEO, and the panel stamp is pressed on (<code>[data-loop="local-page"]</code>); a booked consult is traced back to the Google or the Meta ad that brought it, the other ad each cycle, signed by Paid media, and the panel stamp is pressed on (<code>[data-loop="ads"]</code>). Only on screen with the tab visible; paused animations jump each one to its finished, signed state; never under reduced motion. Their panels (<code>[data-place]</code>) settle 16px into place once, at full opacity.</li>
             <li><a class="inline-link" href="#demo-compare">the comparison</a>: many leads arrive and most fade to a ring; fewer arrive and each is booked. Loops while on screen. Runs on <code>.compare[data-loop="compare"]</code>.</li>
             <li><a class="inline-link" href="#demo-ring">founders ring</a>: on About the five discs arrive once, in ring order, <code>--stagger-ring</code> apart, then the line at the centre. Runs on <code>.founders-ring[data-ring]</code>; under reduced motion or without JavaScript the ring is simply there. The homepage ring talks instead (<code>[data-ring-talk]</code>, see <a class="inline-link" href="#demo-forest-band">the forest band</a>): its centre crossfades, opacity only, to the founder you point at, focus or tap. Its one-off introduction, when the band is about 40% in view: the discs swing out of the centre along arcs in ring order, each crescent cutting in from the outer edge as it lands, the fact rises into view, then the sage highlight goes once round the ring and settles on the fact (about 2.75s, never loops; on phones each disc rises into its place in the row). Pointing, focusing, tapping or Pause animations end it at once; under reduced motion, with animations paused or without JavaScript the ring is simply there.</li>
             <li><a class="inline-link" href="#demo-faq">accordion</a>: the answer opens and closes by height and opacity, and the plus turns with it.</li>
@@ -711,7 +711,7 @@
         </div>
 
         <div class="ref-item ref-item--wide">
-          <p class="ref-name" id="demo-loops">[data-loop="status"] on a .run-show .screen (with data-anim="none", so the one-shot behaviours leave it alone): a slow CSS loop, the chips stepping new, called, consult booked. Paused off screen, still under reduced motion. The homepage's signed samples (local-page, ledger, report) are GSAP loops, shown below.</p>
+          <p class="ref-name" id="demo-loops">[data-loop="status"] on a .run-show .screen (with data-anim="none", so the one-shot behaviours leave it alone): a slow CSS loop, the chips stepping new, called, consult booked. Paused off screen, still under reduced motion. The homepage's signed samples (local-page, ads) are GSAP loops, shown below.</p>
           <div class="ref-stage">
           <div class="cards">
             <div class="screen" data-loop="status" data-anim="none" role="img" aria-label="Sample lead card: [Name], clear aligner consult. Status: consult booked.">
@@ -756,7 +756,7 @@
         </div>
 
         <div class="ref-item ref-item--wide">
-          <p class="ref-name" id="demo-vignettes">.service-row-visual &gt; .vignette[data-loop][data-anim="none"][role="img"] (the homepage's core service rows, .service-row and .service-row--flip). local-page (.service-row-visual--search &gt; .vignette--search): an illustrative excerpt of a Google results page in the palette (.screen.gsr: the address bar on desktop only, "Google" in plain type, the search field, All, Maps and Images, one organic result), and outside it a cream note (.gsr-note: "New this month", its line, signed by Web and SEO) joined to the result's title by a forest connector (.gsr-link). Its loop: the note lifts off, the query is selected, cleared and typed into its one text node with the caret right after the typed text, search is pressed, the page loads with no result, the result places, the note and connector return, signed, and the panel stamp is pressed on. Under 640px the address bar goes and the page stacks as on a phone. ledger: a "New consult" card arrives, a band traces it down the source ledger to Search ads, the source lights, signed by Paid media. Each loop is about 8 to 10s, runs only on screen with the tab visible, starts and ends on the finished, signed state, jumps there when animations are paused and never runs under reduced motion.</p>
+          <p class="ref-name" id="demo-vignettes">.service-row-visual &gt; .vignette[data-loop][data-anim="none"][role="img"] (the homepage's core service rows, .service-row and .service-row--flip). local-page (.service-row-visual--search &gt; .vignette--search): an illustrative excerpt of a Google results page in the palette (.screen.gsr: the address bar on desktop only, "Google" in plain type, the search field, All, Maps and Images, one organic result), and outside it a cream note (.gsr-note: "New this month", its line, signed by Web and SEO) joined to the result's title by a forest connector (.gsr-link). Its loop: the note lifts off, the query is selected, cleared and typed into its one text node with the caret right after the typed text, search is pressed, the page loads with no result, the result places, the note and connector return, signed, and the panel stamp is pressed on. Under 640px the address bar goes and the page stacks as on a phone. ads (.service-row-visual--ads &gt; .vignette.ads): a caption and the Sample chip on top; a Google search ad (the search above it, Sponsored, [Your practice] and a Call button, the headline, the description, two sitelinks) and a Meta feed post ([Your practice], Sponsored, the post text, a flat forest creative with cream serif text, Adult braces and Learn more), each labelled outside its UI; under them the consult record (.ads-consult: Consult booked, [Time], [Name], the enquiry, the source ad and campaign, signed by Paid media), joined to the ad it came from by a forest wire (.ads-wire) and that ad outlined in forest. Its loop: the record clears, the next consult is placed, the wire draws from the record up to its ad, the ad is outlined, it is signed and the panel stamp is pressed on; each cycle traces the other ad (Meta, then back to Google, the finished state). In panels under 520px wide the ads stack (the Meta post becomes a compact card with a small creative) and the wire runs down a lane on the left. The panel stamp sits bottom left. Each loop is about 8 to 10s, runs only on screen with the tab visible, starts and ends on the finished, signed state, jumps there when animations are paused and never runs under reduced motion.</p>
           <div class="cards">
             <div class="service-row-visual service-row-visual--search">
               <div class="vignette vignette--search" data-loop="local-page" data-anim="none" role="img" aria-label="Sample, an illustrative search result: a Google search for braces for adults near me shows one result, [Your practice], Adult braces in [your city]. A note outside the page says it is new this month, a page answering adult patients' questions, signed by Web and SEO.">
@@ -786,28 +786,53 @@
               </div>
               <img class="stamp panel-stamp" src="/assets/img/stamp-signed.svg" alt="" width="112" height="112">
             </div>
-            <div class="service-row-visual">
-              <div class="vignette" data-loop="ledger" data-anim="none" role="img" aria-label="Sample: consults booked by source, Maps, Search ads, Meta ads and Website, each [n]. A new consult is traced to Search ads, signed by Paid media.">
-                <div class="screen screen--raised ledger">
-                  <div class="screen-head"><span class="screen-title">Consults booked, by source</span></div>
-                  <div class="ledger-new" data-part="arrival"><span class="lead-dot"></span><span><b>New consult</b> traced to Search ads</span><span class="ledger-time">[Time]</span></div>
-                  <div class="ledger-body">
-                    <span class="ledger-hl" data-part="hl"></span>
-                    <ol class="ledger-rows">
-                      <li><span>Maps</span><span class="leader"></span><b>[n]</b></li>
-                      <li class="is-key"><span>Search ads</span><span class="leader"></span><b>[n]</b></li>
-                      <li><span>Meta ads</span><span class="leader"></span><b>[n]</b></li>
-                      <li><span>Website</span><span class="leader"></span><b>[n]</b></li>
-                    </ol>
+            <div class="service-row-visual service-row-visual--ads">
+              <div class="vignette ads" data-loop="ads" data-anim="none" role="img" aria-label="Sample: a Google search ad and a Meta feed ad for adult braces from [Your practice]. A consult booked by [Name] for adult braces is traced back to the Google search ad and its campaign, signed by Paid media.">
+                <div class="ads-top"><span class="ads-caption">Illustrative ads and booking</span><span class="chip chip--sample">Sample</span></div>
+                <div class="ads-slot">
+                  <p class="ads-label">Google Search</p>
+                  <div class="ads-ad ads-google is-source" data-ad="google">
+                    <p class="ads-query"><svg class="icon" viewBox="0 0 20 20" focusable="false"><circle cx="9" cy="9" r="5.5"/><path d="m13.2 13.2 3.8 3.8"/></svg>orthodontist for adults</p>
+                    <div class="ads-site">
+                      <span class="ads-mark"><svg class="icon" viewBox="0 0 20 20" focusable="false"><circle cx="10" cy="10" r="7"/><path d="M3 10h14M10 3c-3.5 4-3.5 10 0 14M10 3c3.5 4 3.5 10 0 14"/></svg></span>
+                      <span class="ads-who"><span class="ads-name">[Your practice]</span><span class="ads-sponsored">Sponsored</span></span>
+                      <span class="ads-call"><svg class="icon" viewBox="0 0 24 24" focusable="false"><path d="M6.5 4h3l1.5 4-2 1.5a11 11 0 0 0 5.5 5.5l1.5-2 4 1.5v3a2 2 0 0 1-2 2A15.5 15.5 0 0 1 4.5 6a2 2 0 0 1 2-2z"/></svg>Call</span>
+                    </div>
+                    <p class="ads-google-title">Adult braces | Request a consult</p>
+                    <p class="ads-google-text">Braces as an adult? See what treatment involves, then ask our team about a consultation.</p>
+                    <ul class="ads-sitelinks"><li>Your first visit</li><li>Braces or clear aligners</li></ul>
                   </div>
-                  <div class="signoff" data-part="sign">
+                  <span class="ads-wire" data-wire="google"><i></i><i></i></span>
+                </div>
+                <div class="ads-slot">
+                  <p class="ads-label">Meta</p>
+                  <div class="ads-ad ads-meta" data-ad="meta">
+                    <div class="ads-site">
+                      <span class="ads-mark"></span>
+                      <span class="ads-who"><span class="ads-name">[Your practice]</span><span class="ads-sponsored">Sponsored</span></span>
+                    </div>
+                    <p class="ads-meta-text">Considering braces as an adult? Start with a conversation about your options.</p>
+                    <p class="ads-meta-art">Your questions about adult braces, answered.</p>
+                    <div class="ads-meta-foot"><span class="ads-meta-headline">Adult braces</span><span class="ads-meta-button">Learn more</span></div>
+                  </div>
+                  <span class="ads-wire" data-wire="meta"><i></i><i></i></span>
+                  <span class="ads-wire ads-wire--pass" data-wire="google"><i></i></span>
+                </div>
+                <div class="ads-consult" data-part="consult">
+                  <span class="ads-wire ads-wire--land" data-wire="land"><i></i><i></i></span>
+                  <p class="ads-consult-head"><span class="lead-dot"></span>Consult booked<span class="ads-consult-time">[Time]</span></p>
+                  <p class="ads-consult-who"><span class="ads-consult-name">[Name]</span>Adult braces</p>
+                  <dl class="ads-consult-source">
+                    <dt>Source</dt><dd><span data-src="google">Google Search ad</span><span data-src="meta">Meta feed ad</span></dd>
+                    <dt>Campaign</dt><dd><span data-src="google">Search: Adult braces</span><span data-src="meta">Meta: Adult braces</span></dd>
+                  </dl>
+                  <div class="signoff ads-signoff" data-part="sign">
                     <svg class="signoff-disc founder-art" viewBox="-1 -1 2 2" focusable="false"><circle r="1"/><path d="M0.2621 -0.8819A0.92 0.92 0 1 0 0.2621 0.8819A0.8832 0.8832 0 1 1 0.2621 -0.8819Z"/></svg>
                     <span class="signoff-who">Signed by <em class="signature">Paid media</em></span>
-                    <span class="chip chip--sample">Sample</span>
-                    <img class="stamp" src="/assets/img/stamp-signed.svg" alt="" width="52" height="52">
                   </div>
                 </div>
               </div>
+              <img class="stamp panel-stamp" src="/assets/img/stamp-signed.svg" alt="" width="112" height="112">
             </div>
           </div>
         </div>
diff --git a/site/index.html b/site/index.html
index 0220b10..b374073 100644
--- a/site/index.html
+++ b/site/index.html
@@ -355,25 +355,49 @@ height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
             <p>Search and social campaigns with call and conversion tracking, optimized weekly, and each consult traced back to the ad that brought it.</p>
             <a class="btn btn--secondary" href="/services/paid-ads">See ads management <svg class="arrow" viewBox="0 0 22 12" aria-hidden="true" focusable="false"><path d="M1 6h19M15 1l5 5-5 5"/></svg></a>
           </div>
-          <div class="service-row-visual" data-place>
-            <div class="vignette" data-loop="ledger" data-anim="none" role="img" aria-label="Sample: consults booked by source, Maps, Search ads, Meta ads and Website, each [n]. A new consult is traced to Search ads, signed by Paid media.">
-              <div class="screen screen--raised ledger">
-                <div class="screen-head"><span class="screen-title">Consults booked, by source</span></div>
-                <div class="ledger-new" data-part="arrival"><span class="lead-dot"></span><span><b>New consult</b> traced to Search ads</span><span class="ledger-time">[Time]</span></div>
-                <div class="ledger-body">
-                  <span class="ledger-hl" data-part="hl"></span>
-                  <ol class="ledger-rows">
-                    <li><span>Maps</span><span class="leader"></span><b>[n]</b></li>
-                    <li class="is-key"><span>Search ads</span><span class="leader"></span><b>[n]</b></li>
-                    <li><span>Meta ads</span><span class="leader"></span><b>[n]</b></li>
-                    <li><span>Website</span><span class="leader"></span><b>[n]</b></li>
-                  </ol>
+          <div class="service-row-visual service-row-visual--ads" data-place>
+            <div class="vignette ads" data-loop="ads" data-anim="none" role="img" aria-label="Sample: a Google search ad and a Meta feed ad for adult braces from [Your practice]. A consult booked by [Name] for adult braces is traced back to the Google search ad and its campaign, signed by Paid media.">
+              <div class="ads-top"><span class="ads-caption">Illustrative ads and booking</span><span class="chip chip--sample">Sample</span></div>
+              <div class="ads-slot">
+                <p class="ads-label">Google Search</p>
+                <div class="ads-ad ads-google is-source" data-ad="google">
+                  <p class="ads-query"><svg class="icon" viewBox="0 0 20 20" focusable="false"><circle cx="9" cy="9" r="5.5"/><path d="m13.2 13.2 3.8 3.8"/></svg>orthodontist for adults</p>
+                  <div class="ads-site">
+                    <span class="ads-mark"><svg class="icon" viewBox="0 0 20 20" focusable="false"><circle cx="10" cy="10" r="7"/><path d="M3 10h14M10 3c-3.5 4-3.5 10 0 14M10 3c3.5 4 3.5 10 0 14"/></svg></span>
+                    <span class="ads-who"><span class="ads-name">[Your practice]</span><span class="ads-sponsored">Sponsored</span></span>
+                    <span class="ads-call"><svg class="icon" viewBox="0 0 24 24" focusable="false"><path d="M6.5 4h3l1.5 4-2 1.5a11 11 0 0 0 5.5 5.5l1.5-2 4 1.5v3a2 2 0 0 1-2 2A15.5 15.5 0 0 1 4.5 6a2 2 0 0 1 2-2z"/></svg>Call</span>
+                  </div>
+                  <p class="ads-google-title">Adult braces | Request a consult</p>
+                  <p class="ads-google-text">Braces as an adult? See what treatment involves, then ask our team about a consultation.</p>
+                  <ul class="ads-sitelinks"><li>Your first visit</li><li>Braces or clear aligners</li></ul>
                 </div>
-                <div class="signoff" data-part="sign">
+                <span class="ads-wire" data-wire="google"><i></i><i></i></span>
+              </div>
+              <div class="ads-slot">
+                <p class="ads-label">Meta</p>
+                <div class="ads-ad ads-meta" data-ad="meta">
+                  <div class="ads-site">
+                    <span class="ads-mark"></span>
+                    <span class="ads-who"><span class="ads-name">[Your practice]</span><span class="ads-sponsored">Sponsored</span></span>
+                  </div>
+                  <p class="ads-meta-text">Considering braces as an adult? Start with a conversation about your options.</p>
+                  <p class="ads-meta-art">Your questions about adult braces, answered.</p>
+                  <div class="ads-meta-foot"><span class="ads-meta-headline">Adult braces</span><span class="ads-meta-button">Learn more</span></div>
+                </div>
+                <span class="ads-wire" data-wire="meta"><i></i><i></i></span>
+                <span class="ads-wire ads-wire--pass" data-wire="google"><i></i></span>
+              </div>
+              <div class="ads-consult" data-part="consult">
+                <span class="ads-wire ads-wire--land" data-wire="land"><i></i><i></i></span>
+                <p class="ads-consult-head"><span class="lead-dot"></span>Consult booked<span class="ads-consult-time">[Time]</span></p>
+                <p class="ads-consult-who"><span class="ads-consult-name">[Name]</span>Adult braces</p>
+                <dl class="ads-consult-source">
+                  <dt>Source</dt><dd><span data-src="google">Google Search ad</span><span data-src="meta">Meta feed ad</span></dd>
+                  <dt>Campaign</dt><dd><span data-src="google">Search: Adult braces</span><span data-src="meta">Meta: Adult braces</span></dd>
+                </dl>
+                <div class="signoff ads-signoff" data-part="sign">
                   <svg class="signoff-disc founder-art" viewBox="-1 -1 2 2" focusable="false"><circle r="1"/><path d="M0.2621 -0.8819A0.92 0.92 0 1 0 0.2621 0.8819A0.8832 0.8832 0 1 1 0.2621 -0.8819Z"/></svg>
                   <span class="signoff-who">Signed by <em class="signature">Paid media</em></span>
-                  <span class="chip chip--sample">Sample</span>
-                  <img class="stamp" src="/assets/img/stamp-signed.svg" alt="" width="52" height="52">
                 </div>
               </div>
             </div>
```

</details>

### 7. Beyond the core plan: a card deck you browse, with depth of field

**What and why.** Chris felt the cycling sentence and dotted carousel were an afterthought that visitors wouldn't browse. He asked for a visual hint that there's more to explore: "a stack of cards offset to the side with some depth of field blur". Patient follow-up's sample also didn't show what the service does. The cycling line and dots are gone. The section is now a deck of cards that the visitor flips through.

**Desktop** (`div.beyond.reveal[data-deck]`, replacing `.run-list--beyond` / `article.run-row--beyond[data-cycle]`)
- **Left column:** the heading "Beyond the core plan", the line "Add follow-up, or ask us about a separate project.", and six named buttons, one per add-on, with "Coming soon" on the last two.
- **Right column:** the deck.
  - The chosen card is in front.
  - The next two real cards sit behind it, offset right and down, slightly smaller and turned 1° and 2°, so their edges show.
  - Their bodies are out of focus: `filter: blur(1.5px)` and `blur(3px)`.
  - Each exposed edge has an unblurred, clickable rail naming that card.
- **Under the deck:** Previous, "1 of 6", Next (both wrap), and "Ask about a project".
- Nothing advances on its own.
- The first time the deck comes on screen, the rear cards fan out about 12px and settle back once, as a hint that there's more.

**Phones** (under 768px)
- The named buttons and the native select are both gone.
- The rear cards peek out below the front card, and the next card's name is a 44px button on the peeking edge.
- Previous and Next are 44px, with the counter between them.
- A sideways swipe of 48px or more changes the card; vertical scrolling stays native (`touch-action: pan-y`).
- **Tablet** (768 to 1024): the named buttons wrap as a row of pills above the deck.

**Every card has a real sample** on a cream sheet, with the Sample chip in its header and its own `deck-*` classes. The `.mini-*` samples stay as they are for /services/add-ons.

| Card | Sample |
|---|---|
| **Patient follow-up** (first) | "[Name] Adult braces enquiry". A call note, "Called. Left a message.". The concierge's text, "Hi [Name], this is the patient concierge for [Your practice]. You asked about adult braces. When would be a good time to call?". A booking record, "Consultation booked / [Date] at [Time] / In your practice's patient management software". Signed by *Follow-up*, with a stamp. It loops as a signed sample while its card is in front. |
| **Brand and logo work** | "Brand application study": [Your practice] / Orthodontics, three swatches and an appointment card. "Prepared for discussion". |
| **Video and content** | "Title sequence study": three frames, a vertical title card and three clips. "Prepared for discussion". |
| **Website without the ads** | A small home page ([Your practice], its navigation, headline, line and "Request a consultation"). Signed by *Web and SEO*. |
| **Reputation management, Dental consulting** | "Discussion topics", marked "Illustrative only", with the questions to talk through. "For discussion with *Sales*". |

Patient follow-up's line is now "A patient concierge calls and texts your leads, then books into your patient management software. Our sales team confirms the fit." Brand and video are signed off "Prepared for discussion" rather than by a role, because no role is assigned to that work yet.

**Keyboard and screen readers**
- The named buttons carry `aria-current`. Arrow keys, Home and End move within them.
- A rail moves focus to the new card's title.
- The selected card is announced politely.
- The five cards that aren't in front are `inert`.

**States**
- Without JavaScript, the six cards read as a plain list.
- Under reduced motion or paused, cards swap instantly and every sample is finished.

**JS**
- site.js "the add-ons cycle" is replaced by "the add-ons deck".
- In "signed samples":
  - the selector gains `[data-loop="follow"]`;
  - there is a `follow:` builder;
  - `sync` rests a sample whose card is inert;
  - each sample listens for a `rose:sync` event.
- **Retired:** the cycle, the dots, `.mini-review`, `.mini-slot-key` and their keyframes. Only the old homepage cycle and the components page used them.

**Components page:** `#demo-beyond` is now the live deck, `#demo-mini` describes only /services/add-ons, and the button and run-row texts no longer mention the cycle.

**Check:**
- Click a name, a rail, Previous and Next, and use the arrow keys.
- At 390, swipe sideways and then scroll vertically.
- /services/add-ons is unchanged.

**Files and lines** (after this change):

- `site/assets/site.css`: lines 1464–1685, 1692–1726, 1732–1743, 1804–1809, 2059–2064, 2449–2455
- `site/assets/site.js`: lines 641–647, 649–655, 793–830, 840–847, 1083–1191
- `site/components.html`: lines 400–406, 507–513, 539–684, 697–702
- `site/index.html`: lines 407–552

<details>
<summary>Exact diff for change 7</summary>

```diff
diff --git a/site/assets/site.css b/site/assets/site.css
index 2c361e2..c8f0e6e 100644
--- a/site/assets/site.css
+++ b/site/assets/site.css
@@ -1464,55 +1464,222 @@ h1 em, h2 em, h3 em, .tagline em, .signed-change em { color: var(--accent-italic
 .run-text { display: grid; justify-items: start; gap: var(--space-3); }
 .run-show { display: grid; justify-items: end; }
 .run-show .screen { --screen-pad: var(--space-5); max-width: 400px; gap: var(--space-3); }
-/* The homepage's third row, "Beyond the core plan": the add-ons as one set. An animated line ("We can also take on
-   [phrase].") names one item at a time; site.js ("The add-ons cycle") slides the next phrase up into place while the slot
-   eases to its width, and swaps the descriptor box under it to the same item (a calm fade and lift). Patient follow-up
-   sits in a forest pill (cream on forest, 8.7:1) and holds twice as long. Under the box, previous and next buttons and
-   one dot per item jump to an item and keep it there until the row leaves the screen.
-   All six descriptors are in the page. With JavaScript they share one grid cell, so the box always has the tallest one's
-   height and nothing moves when they change, and only the current one is visible; without it they stack as a list and
-   the controls stay hidden. The markup's own state is patient follow-up, so under reduced motion, with animations paused
-   or without GSAP the line rests there and the controls swap instantly. The moving line is aria-hidden; the .sr-only
-   sentence before it says the same thing once. One cycle per page.
-   Markup: article.run-row.run-row--beyond[data-cycle][data-current=follow] > .run-title (h3)
-   + .cycle (p.sr-only + p.cycle-line[aria-hidden] (span.cycle-lead + span.cycle-tail > span.cycle-slot > span.cycle-phrase
-   [data-cycle-item] ×6, each ending on its full stop, the first .is-current with span.cycle-pill))
-   + .addons (.addon-box[aria-live=off] > article.addon[data-cycle-item] ×6, the first .is-active (.addon-text (.addon-head
-   (h4.addon-title + span.chip) + p + a.btn.btn--secondary.btn--small) + .addon-show > .screen[role=img], a Sample)
-   + .addon-bar (.addon-controls (button.addon-step[data-cycle-step=-1] + .addon-dots > button.addon-dot[data-cycle-go] ×6
-   + button.addon-step[data-cycle-step=1]) + a.btn.btn--secondary.btn--small)) */
-.run-row--beyond { grid-template-areas: "title cycle cycle" "title addons addons"; row-gap: var(--space-8); }
-.run-row--beyond > .run-title { grid-area: title; }
-.cycle { grid-area: cycle; display: grid; justify-items: start; gap: var(--space-4); min-width: 0; }
-.addons { grid-area: addons; display: grid; gap: var(--space-4); min-width: 0; }
-
-.cycle-line { width: 100%; font-family: var(--font-display); font-size: var(--text-h2); font-weight: 400; line-height: 1.45; color: var(--text-body); }
-.cycle-tail { white-space: nowrap; }
-.cycle-phrase:not(.is-current) { display: none; }
-.cycle-pill { display: inline-block; padding-inline: .32em; border-radius: var(--radius-pill); background: var(--surface-strong); color: var(--text-on-strong); }
-.cycle-phrase .chip { font-family: var(--font-text); vertical-align: .3em; }
-/* while it cycles (site.js adds .is-cycling): every phrase is stacked in the slot, whose width and height site.js sets
-   from the phrases, so the row never moves. .is-stacked puts the phrase on its own line when the line can't hold the
-   lead and the widest phrase together. */
-.is-cycling .cycle-slot { position: relative; display: inline-block; vertical-align: bottom; overflow: hidden; }
-.is-cycling .cycle-phrase { position: absolute; top: 0; left: 0; display: block; width: max-content; max-width: var(--cycle-max, none); white-space: normal; }
-.is-cycling .cycle-phrase:not(.is-current) { visibility: hidden; }
-.cycle-line.is-stacked .cycle-tail { display: block; }
-
-/* the descriptor box: a sage mist panel, the item's name, chip, line and link, and its sample */
-.addon-box { display: grid; gap: var(--space-4); }
-.addon { display: grid; grid-template-columns: minmax(0, 1.05fr) minmax(0, 1.15fr); align-items: start; align-content: start; gap: var(--space-6) var(--space-10); min-width: 0; padding: var(--space-6); border-radius: var(--radius-card); background: var(--surface-panel); }
-.js .addon-box { gap: 0; }
-.js .addon-box > .addon { grid-area: 1 / 1; }
-.js .addon:not(.is-active):not(.is-leaving) { visibility: hidden; }
-.addon.is-leaving { pointer-events: none; }
-.addon-text { display: grid; justify-items: start; align-content: start; gap: var(--space-3); }
-.addon-head { display: flex; flex-wrap: wrap; align-items: center; gap: var(--space-2) var(--space-3); }
-.addon-title { font-family: var(--font-display); font-size: var(--text-h2); font-weight: 400; line-height: 1.15; color: var(--text-body); }
-.addon .chip { background: var(--surface-page); }
-.addon .run-show .screen { border-color: var(--border-input); box-shadow: var(--shadow-3); }
-
-/* the small samples in the box and on the add-ons page: lighter than the core services' samples */
+/* ---------- Beyond the core plan: the add-ons deck (homepage How we help) ---------- */
+/* The add-ons as a deck of cards the visitor browses by hand. The heading, its line and six named buttons sit on the
+   left; the deck on the right: the chosen card in front (sage mist, shadow level 3), the next two behind it, each a
+   little smaller and shifted right and down, so their right edges show. Their bodies are out of focus (blur 1.5px and
+   3px; .75px and 1.5px on phones), never the card in front, and each shows a rail on its exposed edge, unblurred,
+   naming it: a real button that brings it forward. Previous and Next wrap around; "1 of 6" counts. Solid surfaces only,
+   no glass, and nothing advances on its own.
+   site.js ("the add-ons deck") sets data-slot on every card: 0 in front, 1 and 2 behind, back (out of sight behind
+   them) and prev (the one before, gone 24px to the left). The slots carry the motion: a card moves between them in
+   400ms, a card leaving fades in 150ms, and the one coming forward comes into focus in the last 150ms. The first time
+   the deck comes on screen the two rear cards fan out 12px and settle back (.is-nudging), once. Under reduced motion
+   or with animations paused every change is instant.
+   Each card's sample is a cream sheet with its Sample chip in the header. Follow-up's is a signed sample that loops
+   while its card is in front (site.js "signed samples", data-loop="follow"); the others replay one small action 600ms
+   after they are chosen (.is-playing, below). Every sample's markup is its finished state.
+   Tablet (768 to 1024): the named buttons wrap in a row above the deck. Phones (under 768): no named buttons; the rear
+   cards show under the card in front, the next one's name on its edge, and a sideways swipe on the deck chooses the
+   next or previous card. A card's copy sits beside its sample only where the card is 640px wide or more (a container
+   query), otherwise above it. Without JavaScript the six cards are a plain list and the buttons, rails and counter
+   stay hidden.
+   Markup: .beyond[data-deck] > .beyond-head (h3.beyond-title + p + .deck-picks[role=group] > button.deck-pick
+   [data-deck-go] ×6, the current one aria-current) + .deck-stage (.deck[data-anim=none] > article.deck-card[data-slot] ×6
+   (.deck-body (.deck-copy (.deck-head (h4.deck-title + span.chip) + p + a.btn) + .deck-sheet[role=img]) + button.deck-rail
+   [data-deck-go]) + .deck-bar (.deck-nav (button.deck-step + p.deck-count + button.deck-step) + a.btn) + p.sr-only
+   [aria-live=polite]) */
+.beyond { display: grid; grid-template-columns: 280px minmax(0, 1fr); align-items: start; gap: var(--space-8) var(--space-16); margin-top: var(--space-24); padding-top: var(--space-16); border-top: var(--border-w) solid var(--border-quiet); }
+.beyond-head { display: grid; justify-items: start; gap: var(--space-4); }
+.beyond-title { font-family: var(--font-display); font-size: var(--text-display-m); font-weight: 400; line-height: 1.1; text-wrap: balance; }
+.beyond-head > p { font-size: var(--text-body-l); color: var(--text-muted); text-wrap: pretty; }
+
+/* the named buttons: a hairline list, an open ring before each name, filled forest for the card in front */
+.deck-picks { display: none; }
+.js .deck-picks { display: grid; width: 100%; margin-top: var(--space-4); border-top: var(--border-w) solid var(--border-quiet); }
+.deck-pick { display: grid; grid-template-columns: 8px minmax(0, 1fr); align-items: center; justify-items: start; gap: var(--space-1) var(--space-3); min-height: 48px; padding: var(--space-2) var(--space-3); border: 0; border-bottom: var(--border-w) solid var(--border-quiet); background: transparent; color: var(--text-muted); font: inherit; font-size: var(--text-body-m); font-weight: 500; line-height: 1.35; text-align: left; cursor: pointer; transition: color var(--dur-fast) var(--ease-standard), background-color var(--dur-fast) var(--ease-standard); }
+.deck-pick::before { content: ""; width: 8px; height: 8px; border: var(--border-w) solid var(--border-input); border-radius: var(--radius-pill); }
+.deck-pick .chip { grid-column: 2; }
+.deck-pick:hover { color: var(--text-body); }
+.deck-pick[aria-current="true"] { color: var(--text-body); font-weight: 600; }
+.deck-pick[aria-current="true"]::before { border-color: var(--forest); background: var(--forest); }
+.deck-pick:focus-visible { outline: 2px solid var(--focus-ring); outline-offset: -2px; border-radius: var(--radius-input); }
+
+/* the cards: a plain list without JavaScript */
+.deck { display: grid; gap: var(--space-6); }
+.deck-card { position: relative; container-type: inline-size; border-radius: var(--radius-card); background: var(--surface-panel); }
+.deck-body { display: grid; grid-template-columns: minmax(0, 1fr); align-content: start; gap: var(--space-6); height: 100%; padding: var(--space-6); }
+@container (min-width: 640px) {
+  .deck-body { grid-template-columns: minmax(0, 1fr) 340px; gap: var(--space-8); }
+}
+.deck-copy { display: grid; justify-items: start; align-content: start; gap: var(--space-3); }
+.deck-head { display: flex; flex-wrap: wrap; align-items: center; gap: var(--space-2) var(--space-3); }
+.deck-title { font-family: var(--font-display); font-size: var(--text-h2); font-weight: 400; line-height: 1.15; }
+.deck-copy > p { text-wrap: pretty; }
+.deck-card .deck-head .chip { background: var(--surface-page); }
+
+/* the stack, with JavaScript: every card in one grid cell (the deck takes the tallest one's height), placed by its slot */
+.js .deck-stage { --peek: 48px; --near-y: 12px; --far-y: 24px; --near-blur: 1.5px; --far-blur: 3px; --fan-x: 12px; --fan-y: 0px; }
+.js .deck { gap: 0; padding: 0 calc(var(--peek) * 2) var(--far-y) 0; touch-action: pan-y; }
+.js .deck > .deck-card { grid-area: 1 / 1; transform-origin: 100% 50%; transition: transform var(--dur-slow) var(--ease-standard), opacity var(--dur-fast) var(--ease-standard), visibility 0s, box-shadow var(--dur-slow) var(--ease-standard); }
+.js .deck-card[data-slot="0"] { z-index: 3; box-shadow: var(--shadow-3); }
+.js .deck-card[data-slot="1"] { z-index: 2; box-shadow: var(--shadow-2); transform: translate(var(--peek), var(--near-y)) scale(.97) rotate(1deg); }
+.js .deck-card:is([data-slot="2"], [data-slot="back"]) { z-index: 1; box-shadow: var(--shadow-2); transform: translate(calc(var(--peek) * 2), var(--far-y)) scale(.94) rotate(2deg); }
+.js .deck-card:is([data-slot="back"], [data-slot="prev"]) { z-index: 0; opacity: 0; visibility: hidden; transition-delay: 0s, 0s, var(--dur-slow), 0s; }
+.js .deck-card[data-slot="prev"] { transform: translateX(-24px); transition-duration: var(--dur-fast); }
+.js .deck-body { transition: filter var(--dur-fast) var(--ease-standard); }
+.js .deck-card[data-slot="0"] .deck-body { transition-delay: var(--dur-med); }
+.js .deck-card[data-slot="1"] .deck-body { filter: blur(var(--near-blur)); }
+.js .deck-card:not([data-slot="0"], [data-slot="1"]) .deck-body { filter: blur(var(--far-blur)); }
+
+/* a rear card's rail: its exposed edge, a button naming it in a cream pill, never blurred */
+.deck-rail { display: none; }
+.js .deck-rail { position: absolute; top: 0; right: 0; bottom: 0; z-index: 1; display: grid; place-items: center; width: var(--peek); padding: 0; border: 0; border-radius: 0 var(--radius-card) var(--radius-card) 0; background: transparent; color: var(--forest); font: inherit; cursor: pointer; visibility: hidden; }
+.js .deck-card:is([data-slot="1"], [data-slot="2"]) .deck-rail { visibility: visible; }
+.deck-rail-name { max-height: calc(100% - var(--space-8)); overflow: hidden; padding: var(--space-3) var(--space-1); border-radius: var(--radius-pill); background: var(--surface-page); box-shadow: var(--shadow-1); font-size: var(--text-label); font-weight: 600; line-height: 1.4; white-space: nowrap; text-overflow: ellipsis; writing-mode: vertical-rl; transition: background-color var(--dur-fast) var(--ease-standard), color var(--dur-fast) var(--ease-standard); }
+.deck-rail:hover .deck-rail-name { background: var(--surface-strong); color: var(--text-on-strong); }
+.deck-rail:focus-visible { outline: none; }
+.deck-rail:focus-visible .deck-rail-name { outline: 2px solid var(--focus-ring); outline-offset: 2px; }
+
+/* Previous, the count and Next (shown only with JavaScript), and the project link, under the card in front */
+.deck-bar { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: var(--space-3) var(--space-6); margin-top: var(--space-6); }
+.js .deck-bar { margin-right: calc(var(--peek) * 2); }
+.deck-nav { display: none; }
+.js .deck-nav { display: flex; align-items: center; gap: var(--space-1); }
+.deck-count { min-width: 4.5em; font-size: var(--text-body-s); font-weight: 600; line-height: 1.4; color: var(--text-muted); text-align: center; font-variant-numeric: tabular-nums; }
+/* a 32px circle in a 44px target */
+.deck-step { position: relative; display: grid; place-items: center; width: 44px; height: 44px; padding: 0; border: 0; background: transparent; color: var(--forest); cursor: pointer; }
+.deck-step::before { content: ""; position: absolute; top: 6px; left: 6px; width: 32px; height: 32px; border: var(--border-w) solid var(--border-input); border-radius: var(--radius-pill); background: var(--surface-page); transition: background-color var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard); }
+.deck-step:hover::before { border-color: var(--border-strong); background: var(--surface-panel); }
+.deck-step .arrow { position: relative; width: 14px; height: 8px; }
+.deck-step[data-deck-step="-1"] .arrow { transform: scaleX(-1); }
+.deck-step:focus-visible { outline: none; }
+.deck-step:focus-visible::before { outline: 2px solid var(--focus-ring); outline-offset: 2px; }
+
+/* the samples: a cream sheet, its title and Sample chip on top, its attribution on its own line at the foot */
+.deck-sheet { display: grid; align-content: start; gap: var(--space-3); width: 100%; max-width: 460px; min-width: 0; padding: var(--space-5); border: var(--border-w) solid var(--border-quiet); border-radius: var(--radius-card); background: var(--surface-page); color: var(--text-body); font-size: var(--text-body-s); line-height: 1.5; box-shadow: var(--shadow-1); }
+.deck-sheet-head { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: var(--space-2) var(--space-3); padding-bottom: var(--space-3); border-bottom: var(--border-w) solid var(--border-quiet); }
+.deck-sheet-title { font-size: var(--text-label); font-weight: 600; line-height: 1.4; }
+.deck-chips { display: flex; flex-wrap: wrap; gap: var(--space-2); }
+.deck-by, .deck-sign { padding-top: var(--space-3); border-top: var(--border-w) solid var(--border-quiet); font-size: var(--text-label); font-weight: 600; line-height: 1.4; color: var(--text-muted); }
+.deck-sign { display: flex; align-items: center; justify-content: space-between; gap: var(--space-3); padding-top: var(--space-2); color: var(--text-body); }
+.deck-sheet .signature { display: inline; margin-left: var(--space-1); font-size: 1.6em; line-height: 1; }
+.deck-sign .stamp { flex: none; width: 48px; height: 48px; margin-block: calc(-1 * var(--space-2)) calc(-1 * var(--space-1)); }
+
+/* patient follow-up: the lead, the call note, the concierge's text, and the booking in the practice's software */
+.deck-follow-who { font-size: var(--text-caption); line-height: 1.4; color: var(--text-muted); }
+.deck-follow-who b { margin-right: var(--space-1); font-size: var(--text-label); font-weight: 600; color: var(--text-body); }
+.deck-follow-call { display: flex; align-items: center; gap: var(--space-2); font-weight: 500; }
+.deck-follow-icon { display: grid; place-items: center; flex: none; width: 28px; height: 28px; border-radius: var(--radius-pill); background: var(--surface-panel); color: var(--forest); }
+.deck-follow-icon .icon { width: 16px; height: 16px; }
+.deck-follow-msg { padding: var(--space-3) var(--space-4); border-radius: var(--radius-input); background: var(--surface-panel); }
+.deck-follow-booked { position: relative; display: grid; padding: var(--space-3) var(--space-4) var(--space-3) var(--space-6); border: var(--border-w) solid var(--border-quiet); border-radius: var(--radius-input); }
+.deck-follow-booked::before { content: ""; position: absolute; top: var(--space-3); bottom: var(--space-3); left: var(--space-3); width: var(--border-w-strong); border-radius: var(--radius-pill); background: var(--forest); }
+.deck-follow-booked b { font-weight: 600; }
+.deck-follow-booked small { font-size: var(--text-caption); line-height: 1.4; color: var(--text-muted); }
+
+/* brand: the practice's name set in the display face, three labelled colours, and an appointment card in them */
+.deck-brand-mark { display: grid; padding-block: var(--space-2); font-family: var(--font-display); line-height: 1.1; }
+.deck-brand-mark span:first-child { font-size: var(--text-h2); }
+.deck-brand-mark span + span { font-size: var(--text-h3); color: var(--text-muted); }
+.deck-swatches { display: flex; flex-wrap: wrap; gap: var(--space-4); font-size: var(--text-caption); font-weight: 500; line-height: 1.4; color: var(--text-muted); }
+.deck-swatches li { display: grid; justify-items: start; gap: var(--space-1); }
+.deck-swatch { display: block; width: 48px; height: 28px; border: var(--border-w) solid var(--border-quiet); border-radius: var(--radius-input); }
+.deck-swatch--forest { background: var(--forest); }
+.deck-swatch--cream { background: var(--cream); }
+.deck-swatch--sage { background: var(--sage); }
+.deck-appt { display: grid; justify-self: start; padding: var(--space-3) var(--space-4); border-radius: var(--radius-input); background: var(--surface-strong); color: var(--text-on-strong); }
+.deck-appt small { font-size: var(--text-caption); line-height: 1.4; color: var(--sage-mist); }
+.deck-appt span { font-family: var(--font-display); font-size: var(--text-h3); line-height: 1.2; }
+
+/* video: three frames beside the first one's title card, and the clips under them, the first one selected */
+.deck-video-board { display: grid; grid-template-columns: minmax(0, 1fr) 104px; align-items: start; gap: var(--space-4); }
+.deck-frames { display: grid; gap: var(--space-2); }
+.deck-frames li { padding: var(--space-2) var(--space-3); border: var(--border-w) solid var(--border-quiet); border-radius: var(--radius-input); font-size: var(--text-label); font-weight: 500; line-height: 1.4; color: var(--text-muted); }
+.deck-frames li.is-current { border-color: var(--border-strong); color: var(--text-body); font-weight: 600; }
+.deck-video-title { display: grid; align-items: end; aspect-ratio: 9 / 16; padding: var(--space-3); border-radius: var(--radius-input); background: var(--surface-strong); color: var(--text-on-strong); font-family: var(--font-display); font-size: 17px; line-height: 1.15; }
+.deck-video-title span { display: block; }
+.deck-clips { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: var(--space-1); }
+.deck-clips li { position: relative; padding: var(--space-2) var(--space-1); border-radius: var(--radius-input); background: var(--surface-panel); color: var(--forest); font-size: var(--text-caption); font-weight: 600; line-height: 1.4; text-align: center; }
+.deck-clips li.is-current::after { content: ""; position: absolute; inset: 0; border: var(--border-w-strong) solid var(--forest); border-radius: inherit; }
+
+/* a website without the ads: a real small home page, its button a picture of one */
+.deck-site-page { display: grid; justify-items: start; gap: var(--space-2); padding: var(--space-4); border: var(--border-w) solid var(--border-quiet); border-radius: var(--radius-input); }
+.deck-site-top { display: flex; flex-wrap: wrap; align-items: baseline; justify-content: space-between; gap: var(--space-1) var(--space-3); width: 100%; padding-bottom: var(--space-2); border-bottom: var(--border-w) solid var(--border-quiet); font-size: var(--text-caption); line-height: 1.4; color: var(--text-muted); }
+.deck-site-top b { font-family: var(--font-display); font-size: 17px; font-weight: 400; color: var(--text-body); }
+.deck-site-h { font-family: var(--font-display); font-size: 22px; line-height: 1.15; text-wrap: balance; }
+.deck-site-p { color: var(--text-muted); text-wrap: pretty; }
+.deck-site-btn { position: relative; margin-top: var(--space-1); padding: var(--space-1) var(--space-4); border-radius: var(--radius-pill); background: var(--surface-strong); color: var(--text-on-strong); font-size: var(--text-label); font-weight: 600; line-height: 1.6; }
+/* the button's emphasis ring: hidden at rest, it shows for a moment when the sample plays */
+.deck-site-btn::after { content: ""; position: absolute; inset: -5px; border: var(--border-w-strong) solid var(--forest); border-radius: inherit; opacity: 0; }
+
+/* coming soon: the questions a first conversation would cover, the first one ruled. Nothing ticked. */
+.deck-plan-title { font-family: var(--font-display); font-size: var(--text-h3); line-height: 1.2; }
+.deck-topics { display: grid; }
+.deck-topics li { position: relative; display: flex; align-items: center; gap: var(--space-2); padding-block: var(--space-2); border-bottom: var(--border-w) solid var(--border-quiet); }
+.deck-topics li.is-key::after { content: ""; position: absolute; right: 0; bottom: -1px; left: 0; height: var(--border-w-strong); border-radius: var(--radius-pill); background: var(--forest); transform-origin: 0 50%; }
+.deck-topics .icon { width: 18px; height: 18px; color: var(--text-muted); }
+.deck-topics-ask { color: var(--text-muted); font-weight: 500; }
+
+/* each sample's one action, 600ms after its card is chosen (site.js adds .is-playing). Each starts from a quiet state
+   and ends on the element's own style, so a sample that doesn't play is complete. */
+@keyframes deck-place { from { opacity: 0; translate: 0 6px; } }
+@keyframes deck-draw { from { clip-path: inset(0 100% 0 0); } to { clip-path: inset(0 0 0 0); } }
+@keyframes deck-rule { from { transform: scaleX(0); } }
+@keyframes deck-ring { 0%, 100% { opacity: 0; } 35%, 65% { opacity: 1; } }
+@keyframes deck-press { 0% { opacity: 0; scale: 1.7; } 60% { opacity: .9; scale: .93; } }
+@keyframes deck-fan { 50% { translate: calc(var(--fan-x) * var(--fan-n, 1)) calc(var(--fan-y) * var(--fan-n, 1)); } }
+@media (prefers-reduced-motion: no-preference) {
+  .js:not(.motion-paused) .deck-card.is-playing :is(.deck-swatch, .deck-appt, .deck-video-title span, .deck-site .deck-sign) { animation: deck-place var(--dur-slow) var(--ease-standard) backwards; }
+  .js:not(.motion-paused) .deck-card.is-playing .deck-swatches li:nth-child(2) .deck-swatch { animation-delay: var(--dur-fast); }
+  .js:not(.motion-paused) .deck-card.is-playing .deck-swatches li:nth-child(3) .deck-swatch { animation-delay: calc(var(--dur-fast) * 2); }
+  .js:not(.motion-paused) .deck-card.is-playing .deck-appt { animation-delay: calc(var(--dur-fast) * 2 + var(--dur-med)); }
+  .js:not(.motion-paused) .deck-card.is-playing .deck-clips li.is-current::after { animation: deck-draw var(--dur-slow) var(--ease-standard) backwards; }
+  .js:not(.motion-paused) .deck-card.is-playing .deck-video-title span { animation-duration: var(--dur-med); animation-delay: var(--dur-slow); }
+  .js:not(.motion-paused) .deck-card.is-playing .deck-site-btn::after { animation: deck-ring calc(var(--dur-med) * 3) var(--ease-standard); }
+  .js:not(.motion-paused) .deck-card.is-playing .deck-site .deck-sign { animation-delay: calc(var(--dur-med) * 3); }
+  .js:not(.motion-paused) .deck-card.is-playing .deck-site .stamp { animation: deck-press calc(var(--dur-med) * 1.8) var(--ease-standard) calc(var(--dur-med) * 3 + var(--dur-slow)) backwards; }
+  .js:not(.motion-paused) .deck-card.is-playing .deck-topics li.is-key::after { animation: deck-rule var(--dur-slow) var(--ease-standard) backwards; }
+  /* the nudge: the rear cards fan out and settle back, once */
+  .js:not(.motion-paused) .deck.is-nudging .deck-card:is([data-slot="1"], [data-slot="2"]) { animation: deck-fan var(--rest-bloom) var(--ease-standard) var(--dur-med); }
+  .js:not(.motion-paused) .deck.is-nudging .deck-card[data-slot="2"] { --fan-n: 2; }
+}
+@media (prefers-reduced-motion: reduce) {
+  .js .deck > .deck-card, .js .deck-body { transition: none; }
+}
+.motion-paused .deck > .deck-card, .motion-paused .deck-body { transition: none; }
+
+@media (max-width: 1024px) {
+  .beyond { grid-template-columns: minmax(0, 1fr); margin-top: var(--space-16); }
+  .deck-stage { width: 100%; max-width: 776px; }
+  .js .deck-picks { display: flex; flex-wrap: wrap; gap: var(--space-2); margin-top: var(--space-2); border-top: 0; }
+  .deck-pick { display: flex; align-items: center; gap: var(--space-2); min-height: 44px; padding: var(--space-2) var(--space-4); border: var(--border-w) solid var(--border-input); border-radius: var(--radius-pill); font-size: var(--text-body-s); }
+  .deck-pick::before { display: none; }
+  .deck-picks .deck-pick[aria-current="true"] { border-color: var(--border-strong); background: var(--surface-strong); color: var(--text-on-strong); }
+  .deck-pick:focus-visible { outline-offset: 2px; border-radius: var(--radius-pill); }
+}
+
+@media (max-width: 767px) {
+  .beyond { gap: var(--space-5); margin-top: var(--space-12); padding-top: var(--space-8); }
+  .deck-stage { max-width: 560px; }
+  .js .deck-picks { display: none; }
+  .js .deck-stage { --peek: 46px; --far-y: var(--space-3); --near-blur: .75px; --far-blur: 1.5px; --fan-x: 0px; --fan-y: 8px; }
+  .js .deck { padding: 0 0 calc(var(--peek) + var(--far-y)); }
+  .js .deck > .deck-card { transform-origin: 50% 100%; }
+  .js .deck-card[data-slot="1"] { transform: translateY(var(--peek)) scale(.96); }
+  .js .deck-card:is([data-slot="2"], [data-slot="back"]) { transform: translateY(calc(var(--peek) + var(--far-y))) scale(.92); }
+  .js .deck-bar { gap: var(--space-3) var(--space-2); margin-right: 0; margin-top: var(--space-3); }
+  .js .deck-nav { gap: 0; }
+  .deck-count { min-width: 3.5em; }
+  .deck-sign .stamp { width: 40px; height: 40px; }
+  .js .deck-rail { top: auto; left: 0; width: auto; height: var(--peek); place-items: center start; padding-inline: var(--space-4); border-radius: 0 0 var(--radius-card) var(--radius-card); }
+  .js .deck-card[data-slot="2"] .deck-rail { display: none; }
+  .deck-rail-name { max-width: 100%; max-height: none; padding: var(--space-1) var(--space-3); writing-mode: horizontal-tb; }
+  .deck-body { gap: var(--space-5); padding: var(--space-4); }
+  .deck-sheet { padding: var(--space-4); }
+}
+
+/* the add-ons page's small samples: lighter than the core services' samples */
 .mini-brand { display: flex; align-items: center; gap: var(--space-5); }
 .mini-logo { display: grid; place-items: center; flex: none; width: 76px; height: 76px; padding: var(--space-2); border-radius: var(--radius-input); background: var(--surface-strong); color: var(--text-on-strong); font-family: var(--font-display); font-size: var(--text-body-s); line-height: 1.15; text-align: center; }
 .mini-swatches { display: flex; gap: var(--space-2); }
@@ -1525,76 +1692,35 @@ h1 em, h2 em, h3 em, .tagline em, .signed-change em { color: var(--accent-italic
 .mini-video .icon { width: 44px; height: 44px; color: var(--forest); }
 /* the play mark's one soft ring: invisible at rest, it pulses once when the video sample plays */
 .mini-video::after { content: ""; position: absolute; top: 50%; left: 50%; width: 44px; height: 44px; margin: -22px 0 0 -22px; border: var(--border-w) solid var(--forest); border-radius: var(--radius-pill); opacity: 0; pointer-events: none; }
-.mini-review { display: grid; gap: var(--space-1); padding: var(--space-3) var(--space-4); border: var(--border-w) solid var(--border-quiet); border-radius: var(--radius-input); }
-.mini-review-name { font-weight: 600; }
-.mini-review-text { color: var(--text-muted); }
-/* the consult in the day's schedule, the one that matters */
-.schedule-slot.mini-slot-key { background: var(--surface-strong); color: var(--text-on-strong); font-weight: 600; }
-
-/* previous and next, and one dot per item (aria-current on the current one); shown only with JavaScript */
-.addon-bar { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: var(--space-2) var(--space-6); }
-.addon-controls { display: none; align-items: center; }
-.js .addon-controls { display: flex; }
-/* a 32px circle in a 44px target */
-.addon-step { position: relative; display: grid; place-items: center; width: 44px; height: 44px; padding: 0; border: 0; background: transparent; color: var(--forest); cursor: pointer; }
-.addon-step::before { content: ""; position: absolute; top: 6px; left: 6px; width: 32px; height: 32px; border: var(--border-w) solid var(--border-input); border-radius: var(--radius-pill); background: var(--surface-page); transition: background-color var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard); }
-.addon-step:hover::before { border-color: var(--border-strong); background: var(--surface-panel); }
-.addon-step .arrow { position: relative; width: 14px; height: 8px; }
-.addon-step[data-cycle-step="-1"] .arrow { transform: scaleX(-1); }
-.addon-dots { display: flex; }
-.addon-dot { display: grid; place-items: center; width: 28px; height: 44px; padding: 0; border: 0; background: transparent; cursor: pointer; }
-.addon-dot::before { content: ""; width: 10px; height: 10px; border: var(--border-w) solid var(--border-input); border-radius: var(--radius-pill); transition: width var(--dur-med) var(--ease-standard), background-color var(--dur-med) var(--ease-standard); }
-.addon-dot[aria-current="true"]::before { width: 20px; border-color: var(--border-strong); background: var(--surface-strong); }
-.addon-dot:hover::before { background: var(--surface-panel); }
-.addon-dot[aria-current="true"]:hover::before { background: var(--surface-strong); }
-.addon-dot:focus-visible { outline: 2px solid var(--focus-ring); outline-offset: -4px; border-radius: var(--radius-input); }
-.addon-step:focus-visible { outline: none; }
-.addon-step:focus-visible::before { outline: 2px solid var(--focus-ring); outline-offset: 2px; }
-
-/* Each sample plays once: in the homepage cycle when its item becomes current (site.js adds .is-playing to the .addon),
-   and on the add-ons page as a [data-play] sample comes into view (site.js adds .is-playing to it). Every keyframe starts
-   from a hidden or quiet state and ends on the element's own style, so a sample that doesn't play (reduced motion,
-   animations paused, no JavaScript) is simply complete. No loops. */
+
+/* Each sample on the add-ons page plays once, as it comes into view (site.js adds .is-playing to the [data-play]
+   sample). Every keyframe starts from a hidden or quiet state and ends on the element's own style, so a sample that
+   doesn't play (reduced motion, animations paused, no JavaScript) is simply complete. No loops. */
 @media (prefers-reduced-motion: no-preference) {
-  :is(.addon, [data-play]) { --play-at: .3s; --play-step: calc(var(--dur-med) + var(--stagger-ring)); }
-  .js:not(.motion-paused) :is(.addon, [data-play]).is-playing :is(.status-step .chip, .mini-logo, .mini-swatch, .screen-bar, .skeleton span, .mini-review-name, .mini-review-text, .schedule-row, .mini-video, .mini-video .icon, .mini-slot-key) { animation-duration: var(--dur-slow); animation-timing-function: var(--ease-standard); animation-fill-mode: backwards; animation-delay: var(--play-at); }
-  /* follow-up: New, Called, Consult booked light in turn */
-  .js:not(.motion-paused) :is(.addon, [data-play]).is-playing .status-step .chip { animation-name: play-light; }
-  .js:not(.motion-paused) :is(.addon, [data-play]).is-playing .status-step:nth-child(2) .chip { animation-delay: calc(var(--play-at) + var(--play-step)); }
-  .js:not(.motion-paused) :is(.addon, [data-play]).is-playing .status-step:nth-child(3) .chip { animation-delay: calc(var(--play-at) + var(--play-step) * 2); }
+  [data-play] { --play-at: .3s; --play-step: calc(var(--dur-med) + var(--stagger-ring)); }
+  .js:not(.motion-paused) [data-play].is-playing :is(.mini-logo, .mini-swatch, .screen-bar, .skeleton span, .mini-video, .mini-video .icon) { animation-duration: var(--dur-slow); animation-timing-function: var(--ease-standard); animation-fill-mode: backwards; animation-delay: var(--play-at); }
   /* brand: the tile settles, then the swatches pop in one after another */
-  .js:not(.motion-paused) :is(.addon, [data-play]).is-playing .mini-logo { animation-name: play-settle; }
-  .js:not(.motion-paused) :is(.addon, [data-play]).is-playing .mini-swatch { animation-name: play-pop; animation-timing-function: var(--ease-out); }
-  .js:not(.motion-paused) :is(.addon, [data-play]).is-playing .mini-swatch:nth-child(1) { animation-delay: calc(var(--play-at) + var(--play-step)); }
-  .js:not(.motion-paused) :is(.addon, [data-play]).is-playing .mini-swatch:nth-child(2) { animation-delay: calc(var(--play-at) + var(--play-step) * 1.5); }
-  .js:not(.motion-paused) :is(.addon, [data-play]).is-playing .mini-swatch:nth-child(3) { animation-delay: calc(var(--play-at) + var(--play-step) * 2); }
+  .js:not(.motion-paused) [data-play].is-playing .mini-logo { animation-name: play-settle; }
+  .js:not(.motion-paused) [data-play].is-playing .mini-swatch { animation-name: play-pop; animation-timing-function: var(--ease-out); }
+  .js:not(.motion-paused) [data-play].is-playing .mini-swatch:nth-child(1) { animation-delay: calc(var(--play-at) + var(--play-step)); }
+  .js:not(.motion-paused) [data-play].is-playing .mini-swatch:nth-child(2) { animation-delay: calc(var(--play-at) + var(--play-step) * 1.5); }
+  .js:not(.motion-paused) [data-play].is-playing .mini-swatch:nth-child(3) { animation-delay: calc(var(--play-at) + var(--play-step) * 2); }
   /* video: the frame fades in, the play mark grows from .9 and its ring pulses once */
-  .js:not(.motion-paused) :is(.addon, [data-play]).is-playing .mini-video { animation-name: play-fade; }
-  .js:not(.motion-paused) :is(.addon, [data-play]).is-playing .mini-video .icon { animation-name: play-grow; animation-delay: calc(var(--play-at) + var(--dur-med)); }
-  .js:not(.motion-paused) :is(.addon, [data-play]).is-playing .mini-video::after { animation-name: play-ring; animation-duration: var(--rest-bloom); animation-timing-function: var(--ease-out); animation-delay: calc(var(--play-at) + var(--dur-slow)); }
+  .js:not(.motion-paused) [data-play].is-playing .mini-video { animation-name: play-fade; }
+  .js:not(.motion-paused) [data-play].is-playing .mini-video .icon { animation-name: play-grow; animation-delay: calc(var(--play-at) + var(--dur-med)); }
+  .js:not(.motion-paused) [data-play].is-playing .mini-video::after { animation-name: play-ring; animation-duration: var(--rest-bloom); animation-timing-function: var(--ease-out); animation-delay: calc(var(--play-at) + var(--dur-slow)); }
   /* website: the browser bar, then the two lines draw in from the left */
-  .js:not(.motion-paused) :is(.addon, [data-play]).is-playing .screen-bar { animation-name: play-settle; }
-  .js:not(.motion-paused) :is(.addon, [data-play]).is-playing .skeleton span { animation-name: play-draw; }
-  .js:not(.motion-paused) :is(.addon, [data-play]).is-playing .skeleton span:nth-child(1) { animation-delay: calc(var(--play-at) + var(--play-step)); }
-  .js:not(.motion-paused) :is(.addon, [data-play]).is-playing .skeleton span:nth-child(2) { animation-delay: calc(var(--play-at) + var(--play-step) * 2); }
-  /* reputation: the name, then the review text draws in */
-  .js:not(.motion-paused) :is(.addon, [data-play]).is-playing .mini-review-name { animation-name: play-fade; }
-  .js:not(.motion-paused) :is(.addon, [data-play]).is-playing .mini-review-text { animation-name: play-draw; animation-duration: var(--rest-bloom); animation-delay: calc(var(--play-at) + var(--play-step)); }
-  /* consulting: the slots slide in in turn, and the consult settles last into forest */
-  .js:not(.motion-paused) :is(.addon, [data-play]).is-playing .schedule-row { animation-name: play-slide; }
-  .js:not(.motion-paused) :is(.addon, [data-play]).is-playing .schedule-row:nth-child(2) { animation-delay: calc(var(--play-at) + var(--play-step)); }
-  .js:not(.motion-paused) :is(.addon, [data-play]).is-playing .schedule-row:nth-child(3) { animation-delay: calc(var(--play-at) + var(--play-step) * 2); }
-  .js:not(.motion-paused) :is(.addon, [data-play]).is-playing .mini-slot-key { animation-name: play-key; animation-delay: calc(var(--play-at) + var(--play-step) * 3); }
-}
-@keyframes play-light { from { border-color: var(--border-input); background-color: transparent; color: var(--text-muted); transform: scale(.94); } }
+  .js:not(.motion-paused) [data-play].is-playing .screen-bar { animation-name: play-settle; }
+  .js:not(.motion-paused) [data-play].is-playing .skeleton span { animation-name: play-draw; }
+  .js:not(.motion-paused) [data-play].is-playing .skeleton span:nth-child(1) { animation-delay: calc(var(--play-at) + var(--play-step)); }
+  .js:not(.motion-paused) [data-play].is-playing .skeleton span:nth-child(2) { animation-delay: calc(var(--play-at) + var(--play-step) * 2); }
+}
 @keyframes play-settle { from { opacity: 0; transform: translateY(6px); } }
 @keyframes play-pop { from { opacity: 0; transform: scale(.6); } }
 @keyframes play-fade { from { opacity: 0; } }
 @keyframes play-grow { from { opacity: 0; transform: scale(.9); } }
 @keyframes play-ring { from { opacity: .5; transform: scale(1); } to { opacity: 0; transform: scale(1.7); } }
 @keyframes play-draw { from { clip-path: inset(0 100% 0 0); } to { clip-path: inset(0 0 0 0); } }
-@keyframes play-slide { from { opacity: 0; transform: translateX(-8px); } }
-@keyframes play-key { from { background-color: var(--surface-panel); color: var(--text-muted); } }
 
 /* the add-ons page's coming-soon names: hairline rows, the name in serif and its chip, no line and no link.
    Markup: ul.soon-list > li > span.soon-name + span.chip; then p.soon-ask > a.btn.btn--secondary */
@@ -1606,16 +1732,12 @@ h1 em, h2 em, h3 em, .tagline em, .signed-change em { color: var(--accent-italic
 @media (max-width: 1024px) {
   .run-row { grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); }
   .run-title { grid-column: 1 / -1; }
-  .run-row--beyond { grid-template-areas: "title title" "cycle cycle" "addons addons"; row-gap: var(--space-6); }
-  .addon { grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: var(--space-6) var(--space-8); }
 }
 
 @media (max-width: 768px) {
   .run-row { grid-template-columns: minmax(0, 1fr); padding-block: var(--space-8); }
   .run-show { justify-items: stretch; }
   .run-show .screen { max-width: none; }
-  .run-row--beyond { grid-template-areas: "title" "cycle" "addons"; }
-  .addon { grid-template-columns: minmax(0, 1fr); padding: var(--space-5) var(--space-4); }
 }
 
 /* ----- Looping graphics: [data-loop="status|compare"] (CSS) and [data-loop="local-page|ads"] (GSAP) -----
@@ -1682,8 +1804,6 @@ h1 em, h2 em, h3 em, .tagline em, .signed-change em { color: var(--accent-italic
 .service-row-copy { display: grid; justify-items: start; gap: var(--space-5); max-width: 30rem; }
 .service-row-copy p { font-size: var(--text-body-l); color: var(--text-muted); text-wrap: pretty; }
 .service-row-visual { position: relative; display: grid; grid-template-columns: minmax(0, 1fr); place-items: center; min-height: 420px; padding: var(--space-12) var(--space-8); border-radius: var(--radius-panel); background: var(--surface-panel); }
-/* the add-ons cycle follows the rows, on its own hairline */
-.run-list--beyond { margin-top: var(--space-24); }
 
 /* ---------- signed samples (homepage: the two service rows) ---------- */
 /* Every change, signed: each sample replays its job in three beats, place (the work lands), mark (it is signed by role
@@ -1939,7 +2059,6 @@ h1 em, h2 em, h3 em, .tagline em, .signed-change em { color: var(--accent-italic
   .service-row, .service-row--flip, .after-yes { grid-template-columns: minmax(0, 1fr); }
   .service-row--flip .service-row-copy { order: 0; }
   .service-rows { gap: var(--space-16); }
-  .run-list--beyond { margin-top: var(--space-16); }
   .after-yes-visual { position: static; }
 }
 @media (max-width: 640px) {
@@ -2330,7 +2449,7 @@ button.founder-link { padding: 0; border: 0; background: none; font: inherit; cu
 
 /* ---------- link rows ---------- */
 /* The services sold one at a time, and who we work with: hairline rows in a field band, each row a link.
-   The homepage lists the services once, in How we help's third row (.beyond-list); the services page uses these rows.
+   The homepage lists the services once, in How we help's add-ons deck (.beyond); the services page uses these rows.
    Markup: ul.link-rows > li > a.link-row > span.link-row-title + span.link-row-line + span.link-row-ask > svg.arrow */
 .link-rows { display: grid; border-top: var(--border-w) solid var(--border-quiet); }
 .link-rows > li { border-bottom: var(--border-w) solid var(--border-quiet); }
diff --git a/site/assets/site.js b/site/assets/site.js
index 0a68bc7..1638770 100644
--- a/site/assets/site.js
+++ b/site/assets/site.js
@@ -641,7 +641,7 @@
     }
   }
 
-  // ----- signed samples (homepage: [data-loop="local-page|ads"]; site.css "signed samples") -----
+  // ----- signed samples (homepage: [data-loop="local-page|ads|follow"]; site.css "signed samples") -----
   // Each sample replays its job in three beats: place (the work lands), mark (it is signed by role and the Rose stamp is
   // pressed on), rest (it holds, finished). The static markup is the finished state, and every timeline starts and ends
   // on it, so a repeat never jumps and a pause can always show it. A timeline is built the first time its sample reaches
@@ -649,7 +649,7 @@
   // to its finished state ('rest') when the visitor pauses animations. Under reduced motion nothing is built. Only
   // transform, opacity and colour change; the Sample chip never fades. Durations come from the motion tokens.
   // [data-place] panels settle 16px into place the first time they reach the screen (CSS does the motion).
-  const signedEls = document.querySelectorAll('[data-loop="local-page"], [data-loop="ads"]');
+  const signedEls = document.querySelectorAll('[data-loop="local-page"], [data-loop="ads"], [data-loop="follow"]');
   if (signedEls.length && window.gsap && 'IntersectionObserver' in window) {
     const gsap = window.gsap;
     const token = (name) => getComputedStyle(root).getPropertyValue(name).trim();
@@ -793,14 +793,38 @@
         hold(tl, 4.4);
         return tl;
       },
+      // patient follow-up (the add-ons deck's first card): the call is noted, the concierge's text goes out, the
+      // consultation is booked in the practice's software, and it is signed by Follow-up
+      follow: (el) => {
+        const call = el.querySelector('[data-part="call"] .deck-follow-icon');
+        const msg = el.querySelector('[data-part="msg"]');
+        const booked = el.querySelector('[data-part="booked"]');
+        const sign = el.querySelector('[data-part="sign"]');
+        const marks = signParts(sign);
+        const stamp = sign.querySelector('.stamp');
+        const tl = gsap.timeline({ paused: true, repeat: -1 });
+        tl.to([msg, booked, ...marks, stamp], { autoAlpha: 0, duration: MED * 0.6, ease: 'power2.in' }, REST)
+          .to(call, { backgroundColor: token('--forest'), color: token('--cream'), duration: MED, ease: 'power2.out' }, REST + 0.2)
+          .to(call, { backgroundColor: token('--sage-mist'), color: token('--forest'), duration: MED, ease: 'power2.out' }, REST * 2 + 0.45)
+          .fromTo(msg, { autoAlpha: 0, y: 8 }, { autoAlpha: 1, y: 0, duration: SLOW, ease: 'power2.out', immediateRender: false }, REST * 2 + 0.45)
+          .fromTo(booked, { autoAlpha: 0, y: 8 }, { autoAlpha: 1, y: 0, duration: SLOW, ease: 'power2.out', immediateRender: false }, REST * 2 + 1.85)
+          .fromTo(marks, { autoAlpha: 0, y: 8 }, { autoAlpha: 1, y: 0, duration: SLOW, ease: 'power3.out', immediateRender: false }, REST * 2 + 2.25)
+          .set(stamp, { y: 0 }, REST * 2 + 2.25);
+        press(tl, stamp, REST * 2 + 2.45);
+        hold(tl, REST * 2 + 2.9);
+        return tl;
+      },
     };
     const samples = Array.from(signedEls, (el) => ({ el, kind: el.dataset.loop, live: false, fresh: true, tl: null }));
     const sync = (s) => {
-      if (s.live && motionOK() && !s.tl) s.tl = BUILD[s.kind](s.el);
+      // a sample on an add-ons deck card that isn't in front (its body is inert) rests finished, like a paused one
+      const away = !!s.el.closest('[inert]');
+      const live = s.live && !away;
+      if (live && motionOK() && !s.tl) s.tl = BUILD[s.kind](s.el);
       if (!s.tl) return;
-      if (s.live && motionOK()) {
+      if (live && motionOK()) {
         if (s.fresh) { s.fresh = false; s.tl.restart(); } else s.tl.resume();
-      } else if (!document.hidden && !motionOK()) {
+      } else if (!document.hidden && (!motionOK() || away)) {
         s.tl.pause().seek('rest'); // paused by the visitor (or reduced motion switched on): show it finished, start over on play
         s.fresh = true;
       } else {
@@ -816,6 +840,8 @@
       });
     }, { threshold: 0.35 });
     samples.forEach((s) => watch.observe(s.el));
+    // the add-ons deck sends rose:sync to a sample when its card comes forward or goes back
+    samples.forEach((s) => s.el.addEventListener('rose:sync', () => sync(s)));
     document.addEventListener('visibilitychange', syncAll);
     root.addEventListener('rose:motion', syncAll);
     reduceMotion.addEventListener('change', syncAll);
@@ -1057,166 +1083,109 @@
     }
   }
 
-  // ----- the add-ons cycle (homepage, "Beyond the core plan") -----
-  // [data-cycle] names one add-on at a time in its line ("We can also take on [phrase]."): the phrase drifts up and
-  // fades, the next drifts up into place, and the slot eases to the new phrase's width (measured, so nothing else on the
-  // row moves). The descriptor box under it (.addon-box) swaps to the same item with a fade and a small lift; every
-  // descriptor sits in one grid cell, so the box keeps the tallest one's height. The item's sample then plays once
-  // (.is-playing; the steps are in site.css). Each phrase holds 2.4s, patient follow-up twice that. It cycles only with
-  // GSAP, only while the row is on screen, and pauses while the pointer or keyboard focus is inside the row. The
-  // previous and next buttons, the dots, and the Left and Right keys on any of them jump to an item; the cycle carries on
-  // 6s after the last jump, and the box is a polite live region until then (it is off while the line cycles on its
-  // own). Under reduced motion, with animations paused or without GSAP the line rests on patient follow-up, the markup's
-  // own state, the samples stay complete and the controls swap at once. One cycle per page.
-  const cycleRow = document.querySelector('[data-cycle]');
-  if (cycleRow && cycleRow.querySelector('.addon-box') && cycleRow.querySelector('.addon-controls')) {
-    const line = cycleRow.querySelector('.cycle-line');
-    const lead = line.querySelector('.cycle-lead');
-    const slot = line.querySelector('.cycle-slot');
-    const phrases = [...slot.querySelectorAll('.cycle-phrase')];
-    const keys = phrases.map((p) => p.dataset.cycleItem);
-    const box = cycleRow.querySelector('.addon-box');
-    const addons = keys.map((k) => box.querySelector(`.addon[data-cycle-item="${k}"]`));
-    const controls = cycleRow.querySelector('.addon-controls');
-    const dots = keys.map((k) => controls.querySelector(`.addon-dot[data-cycle-go="${k}"]`));
-    const HOLD = 2.4;
-    const RESUME = 6;
+  // ----- the add-ons deck (homepage, "Beyond the core plan"; site.css "Beyond the core plan") -----
+  // [data-deck] is a deck of six cards browsed by hand: the chosen card in front, the next two behind it. Choosing a
+  // card sets data-slot on every card (0 in front, 1 and 2 behind, back out of sight, prev the one before) and site.css
+  // moves them. The bodies of the cards not in front are inert; their rails (the named edges of the two behind) are
+  // buttons. The named buttons (aria-current on the chosen one; Left/Right, Up/Down, Home and End move along them), the
+  // rails, Previous and Next (both wrap) and a sideways swipe on the deck (48px or more, mostly sideways; vertical
+  // scrolling is left alone) all choose a card, and the choice is announced politely: its name and "2 of 6". Nothing
+  // advances on its own. 600ms after a card is chosen its sample replays its one action (.is-playing, site.css);
+  // follow-up's sample is a signed sample instead, which loops while its card is in front ("signed samples", told by
+  // rose:sync). The first time the deck is on screen with motion allowed, the rear cards fan out and settle (.is-nudging),
+  // once. Under reduced motion or with animations paused the cards swap instantly and the samples stay finished.
+  const deckRoot = document.querySelector('[data-deck]');
+  if (deckRoot) {
+    const stack = deckRoot.querySelector('.deck');
+    const cards = Array.from(stack.querySelectorAll('.deck-card'));
+    const picks = Array.from(deckRoot.querySelectorAll('.deck-pick'));
+    const count = deckRoot.querySelector('[data-deck-count]');
+    const say = deckRoot.querySelector('[data-deck-say]');
+    const titles = cards.map((card) => card.querySelector('.deck-title'));
+    const n = cards.length;
+    const HOLD_MS = 600;
     let index = 0;
-    let cycling = false;
-    let onScreen = !('IntersectionObserver' in window);
-    let hovered = false;
-    let focused = false;
-    // when the last jump from the controls happened (0: none since the line last moved on its own)
-    let jumpedAt = 0;
-    let timer = null;
-    let move = null;
-    const mark = () => {
-      cycleRow.dataset.current = keys[index];
-      dots.forEach((dot, i) => (i === index ? dot.setAttribute('aria-current', 'true') : dot.removeAttribute('aria-current')));
+    let playing = 0;
+    const slotOf = (i) => {
+      const d = (i - index + n) % n;
+      return d < 3 ? String(d) : d === n - 1 ? 'prev' : 'back';
     };
-    // the current item's sample plays once; the class comes off the others so the next visit plays it again
-    const play = () => {
-      addons.forEach((addon) => addon.classList.remove('is-playing'));
-      if (!cycling || !onScreen) return;
-      void addons[index].offsetWidth;
-      addons[index].classList.add('is-playing');
+    const render = () => {
+      cards.forEach((card, i) => {
+        card.dataset.slot = slotOf(i);
+        card.querySelector('.deck-body').toggleAttribute('inert', i !== index);
+        card.classList.remove('is-playing');
+      });
+      picks.forEach((pick, i) => (i === index ? pick.setAttribute('aria-current', 'true') : pick.removeAttribute('aria-current')));
+      count.textContent = `${index + 1} of ${n}`;
+      stack.querySelectorAll('[data-loop]').forEach((el) => el.dispatchEvent(new Event('rose:sync')));
     };
-    // the slot holds the tallest phrase and the current one's width; the phrase gets its own line only when the lead
-    // and the widest phrase don't fit side by side
-    const measure = () => {
-      if (!cycling) return;
-      line.classList.remove('is-stacked');
-      const room = line.clientWidth;
-      cycleRow.style.setProperty('--cycle-max', `${Math.floor(room)}px`);
-      const widest = Math.max(...phrases.map((p) => p.offsetWidth));
-      const space = parseFloat(getComputedStyle(line).fontSize) * 0.3;
-      line.classList.toggle('is-stacked', lead.getBoundingClientRect().width + space + widest > room);
-      slot.style.height = `${Math.max(...phrases.map((p) => p.offsetHeight))}px`;
-      slot.style.width = `${phrases[index].offsetWidth}px`;
+    // the chosen card's sample replays its one action after the shared 600ms hold
+    const play = () => {
+      clearTimeout(playing);
+      if (reduceMotion.matches || motionPaused()) return;
+      const card = cards[index];
+      playing = setTimeout(() => card.classList.add('is-playing'), HOLD_MS);
     };
-    const show = (next) => {
-      next = (next + keys.length) % keys.length;
+    const select = (next) => {
+      next = (next + n) % n;
       if (next === index) return;
-      if (move) move.progress(1).kill();
-      move = null;
-      const from = index;
       index = next;
-      phrases[from].classList.remove('is-current');
-      phrases[index].classList.add('is-current');
-      addons[from].classList.remove('is-active');
-      addons[index].classList.add('is-active');
-      mark();
-      play();
-      if (!cycling) return;
-      const leaving = addons[from];
-      leaving.classList.add('is-leaving');
-      move = gs.timeline({ onComplete: () => { leaving.classList.remove('is-leaving'); gs.set(addons, { clearProps: 'opacity,transform' }); } })
-        .to(phrases[from], { yPercent: -60, autoAlpha: 0, duration: 0.45, ease: 'power2.in' }, 0)
-        .to(slot, { width: phrases[index].offsetWidth, duration: 0.7, ease: 'power3.inOut' }, 0)
-        .fromTo(phrases[index], { yPercent: 60, autoAlpha: 0 }, { yPercent: 0, autoAlpha: 1, duration: 0.6, ease: 'power3.out' }, 0.2)
-        .to(leaving, { y: -8, opacity: 0, duration: 0.35, ease: 'power2.in' }, 0)
-        .fromTo(addons[index], { y: 12, opacity: 0 }, { y: 0, opacity: 1, duration: 0.55, ease: 'power2.out' }, 0.25);
-    };
-    const schedule = () => {
-      if (timer) timer.kill();
-      timer = null;
-      box.setAttribute('aria-live', cycling && !jumpedAt ? 'off' : 'polite');
-      if (!cycling || !onScreen || hovered || focused) return;
-      const wait = jumpedAt ? Math.max(0.2, RESUME - (performance.now() - jumpedAt) / 1000) : keys[index] === 'follow' ? HOLD * 2 : HOLD;
-      timer = gs.delayedCall(wait, () => { jumpedAt = 0; show(index + 1); schedule(); });
-    };
-    const start = () => {
-      if (cycling) return;
-      cycling = true;
-      cycleRow.classList.add('is-cycling');
-      gs.set(phrases, { autoAlpha: 0 });
-      gs.set(phrases[index], { autoAlpha: 1 });
-      measure();
+      render();
+      say.textContent = `${titles[index].textContent.trim()}, ${index + 1} of ${n}`;
       play();
-      schedule();
-    };
-    // back to the markup's own state: patient follow-up, still
-    const halt = () => {
-      if (timer) timer.kill();
-      if (move) move.progress(1).kill();
-      timer = null;
-      move = null;
-      cycling = false;
-      jumpedAt = 0;
-      show(0);
-      if (gs) gs.set([...phrases, ...addons], { clearProps: 'all' });
-      slot.removeAttribute('style');
-      cycleRow.style.removeProperty('--cycle-max');
-      line.classList.remove('is-stacked');
-      cycleRow.classList.remove('is-cycling');
-      schedule();
-    };
-    const sync = () => (gs && !reduceMotion.matches && !motionPaused() ? start() : halt());
-    root.addEventListener('rose:motion', sync);
-    reduceMotion.addEventListener('change', sync);
-    sync();
-    if (document.fonts) document.fonts.ready.then(measure);
-    let resizing = 0;
-    addEventListener('resize', () => {
-      cancelAnimationFrame(resizing);
-      resizing = requestAnimationFrame(measure);
-    });
-    if (!onScreen) {
-      new IntersectionObserver(([entry]) => {
-        const arrived = entry.isIntersecting && !onScreen;
-        onScreen = entry.isIntersecting;
-        if (!onScreen) jumpedAt = 0;
-        if (arrived) play();
-        schedule();
-      }, { threshold: 0.2 }).observe(cycleRow);
-    }
-    // a jump from the controls; the cycle carries on RESUME seconds after the last one
-    const jump = (next) => {
-      jumpedAt = performance.now();
-      show(next);
-      schedule();
     };
-    controls.addEventListener('click', (e) => {
-      const step = e.target.closest('[data-cycle-step]');
-      const dot = e.target.closest('[data-cycle-go]');
-      if (step) jump(index + Number(step.dataset.cycleStep));
-      else if (dot) jump(keys.indexOf(dot.dataset.cycleGo));
+    render();
+
+    deckRoot.addEventListener('click', (e) => {
+      const go = e.target.closest('[data-deck-go]');
+      const step = e.target.closest('[data-deck-step]');
+      if (go) {
+        select(Number(go.dataset.deckGo));
+        // a rail leaves with its card's move to the front: focus follows to that card's title
+        if (go.matches('.deck-rail')) titles[index].focus({ preventScroll: true });
+      } else if (step) select(index + Number(step.dataset.deckStep));
     });
-    controls.addEventListener('keydown', (e) => {
-      if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
+    const KEYS = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 };
+    deckRoot.querySelector('.deck-picks').addEventListener('keydown', (e) => {
+      const at = picks.indexOf(e.target.closest('.deck-pick'));
+      if (at < 0) return;
+      let next;
+      if (e.key in KEYS) next = (at + KEYS[e.key] + n) % n;
+      else if (e.key === 'Home') next = 0;
+      else if (e.key === 'End') next = n - 1;
+      else return;
       e.preventDefault();
-      jump(index + (e.key === 'ArrowRight' ? 1 : -1));
-      if (e.target.closest('.addon-dot')) dots[index].focus();
+      select(next);
+      picks[next].focus();
     });
-    cycleRow.addEventListener('pointerenter', () => { hovered = true; schedule(); });
-    cycleRow.addEventListener('pointerleave', () => { hovered = false; schedule(); });
-    // keyboard focus pauses it while it stays in the row; a mouse click on a control doesn't
-    cycleRow.addEventListener('focusin', (e) => { focused = e.target.matches(':focus-visible'); schedule(); });
-    cycleRow.addEventListener('focusout', (e) => {
-      if (cycleRow.contains(e.relatedTarget)) return;
-      focused = false;
-      schedule();
+    // swipe: touch and pen only, decided on release; touch-action: pan-y (site.css) keeps vertical scrolling native
+    let touch = null;
+    stack.addEventListener('pointerdown', (e) => {
+      touch = e.pointerType === 'mouse' ? null : { id: e.pointerId, x: e.clientX, y: e.clientY };
     });
+    stack.addEventListener('pointercancel', () => { touch = null; });
+    stack.addEventListener('pointerup', (e) => {
+      if (!touch || e.pointerId !== touch.id) return;
+      const dx = e.clientX - touch.x;
+      const dy = e.clientY - touch.y;
+      touch = null;
+      if (Math.abs(dx) >= 48 && Math.abs(dx) > Math.abs(dy) * 1.5) select(index + (dx < 0 ? 1 : -1));
+    });
+    // a paused or reduced visitor gets the finished sample at once
+    const settle = () => { if (reduceMotion.matches || motionPaused()) { clearTimeout(playing); cards.forEach((card) => card.classList.remove('is-playing')); } };
+    root.addEventListener('rose:motion', settle);
+    reduceMotion.addEventListener('change', settle);
+    // the nudge: once, the first time the deck is on screen with motion allowed
+    if ('IntersectionObserver' in window) {
+      const nudge = new IntersectionObserver(([entry]) => {
+        if (!entry.isIntersecting || reduceMotion.matches || motionPaused() || document.hidden) return;
+        nudge.disconnect();
+        stack.classList.add('is-nudging');
+        stack.addEventListener('animationend', (e) => { if (e.target.matches('.deck-card')) stack.classList.remove('is-nudging'); });
+      }, { threshold: 0.35 });
+      nudge.observe(stack);
+    }
   }
 
   // ----- campaign tracking -----
diff --git a/site/components.html b/site/components.html
index a9d0c32..fb91a24 100644
--- a/site/components.html
+++ b/site/components.html
@@ -400,7 +400,7 @@
         </div>
 
         <div class="ref-item ref-item--wide">
-          <p class="ref-name" id="demo-buttons">.btn, .btn--secondary, .btn--small, .chip and its variants. .btn--secondary (cream fill, 2px forest outline, forest label, the arrow; hover washes sage mist) replaces every standalone text link: "See…", "How it works", "Back to…", the cta-line's Get in touch. .btn--small where space is tight (cards, the cycle's descriptor box, the founders ring panel, .cta-line). On forest (.on-strong) it is transparent with a cream outline and label, and the wash is ink.</p>
+          <p class="ref-name" id="demo-buttons">.btn, .btn--secondary, .btn--small, .chip and its variants. .btn--secondary (cream fill, 2px forest outline, forest label, the arrow; hover washes sage mist) replaces every standalone text link: "See…", "How it works", "Back to…", the cta-line's Get in touch. .btn--small where space is tight (cards, the add-ons deck's cards, the founders ring panel, .cta-line). On forest (.on-strong) it is transparent with a cream outline and label, and the wash is ink.</p>
           <div class="ref-stage">
             <div class="actions">
               <a class="btn" href="/contact">Get in touch</a>
@@ -507,7 +507,7 @@
         </div>
 
         <div class="ref-item ref-item--wide">
-          <p class="ref-name" id="demo-run">.run-list and .run-row (a service, its line and a piece of the work). On the services and dental pages the row's number is the existing .step-num, first in .run-title; the homepage's How we help has no numbers (see .run-row--beyond below).</p>
+          <p class="ref-name" id="demo-run">.run-list and .run-row (a service, its line and a piece of the work). On the services and dental pages the row's number is the existing .step-num, first in .run-title; the homepage's How we help has no numbers and no run rows (see .beyond below).</p>
           <div class="run-list">
             <article class="run-row">
               <div class="run-title">
@@ -539,135 +539,146 @@
         </div>
 
         <div class="ref-item ref-item--wide">
-          <p class="ref-name" id="demo-beyond">.run-row.run-row--beyond[data-cycle] (the homepage's third How we help row, "Beyond the core plan"): the add-ons as one set. .cycle holds a p.sr-only sentence and an aria-hidden serif line, "We can also take on [phrase].", whose phrase cycles (site.js, GSAP): patient follow-up (in a forest pill, 4.8s), brand and logo work, video and content, a website without the ads, reputation management and dental consulting (each with a "Coming soon" chip), 2.4s each, sliding up while the slot eases to the new width. Under it, .addons: the .addon-box holds six article.addon descriptors in one grid cell, so it keeps the tallest one's height; the current one (.is-active) shows: a sage mist panel (card radius), h4.addon-title and its chip, one line (none for the coming-soon two), a text link, and a small Sample card that plays once each time its item comes up (.is-playing): the lead card's steps light in turn; the logo tile settles and the swatches pop in; the video frame fades in and its play mark grows with one ring pulse; the browser bar, then its lines draw in; the review name, then its text; the schedule slots slide in and the consult settles into forest. Then .addon-bar: .addon-controls (Previous add-on and Next add-on, a 32px circle in a 44px target; six .addon-dot buttons "Show ..." with aria-current; Left and Right keys move too) and "Ask about a project". A jump carries on cycling 6s after the last one; the box is aria-live polite until then and off while it cycles on its own. Pointer or keyboard focus in the row pauses it. Under reduced motion, with animations paused or without GSAP it rests on patient follow-up, the samples are complete and the controls swap at once; without JavaScript the six descriptors stack as a list. One cycle per page. Under the rows, the who-we-work-with statement.</p>
-          <div class="run-list">
-            <article class="run-row run-row--beyond" data-cycle data-current="follow">
-              <div class="run-title">
-                <h3>Beyond the core plan</h3>
-              </div>
-              <div class="cycle">
-                <p class="sr-only">We can also take on patient follow-up, brand and logo work, video and content, a website without the ads, and, coming soon, reputation management and dental consulting.</p>
-                <p class="cycle-line" aria-hidden="true"><span class="cycle-lead">We can also take on</span> <span class="cycle-tail"><span class="cycle-slot"><span class="cycle-phrase is-current" data-cycle-item="follow"><span class="cycle-pill">patient follow-up</span>.</span><span class="cycle-phrase" data-cycle-item="brand">brand and logo work.</span><span class="cycle-phrase" data-cycle-item="video">video and content.</span><span class="cycle-phrase" data-cycle-item="website">a website without the ads.</span><span class="cycle-phrase" data-cycle-item="reputation">reputation management. <span class="chip">Coming soon</span></span><span class="cycle-phrase" data-cycle-item="consulting">dental consulting. <span class="chip">Coming soon</span></span></span></span></p>
+          <p class="ref-name" id="demo-beyond">.beyond[data-deck] (the homepage's "Beyond the core plan", under the How we help rows, on its own hairline): the add-ons as a deck of cards browsed by hand, patient follow-up first. Left: h3.beyond-title, its line, and .deck-picks, six named buttons (aria-current on the chosen one; Left/Right, Up/Down, Home and End move along them; a wrapping row of pills on tablets; none on phones). Right: .deck, six article.deck-card in one grid cell, each a sage mist card with h4.deck-title, its chip, a line, a link and a real sample on a cream sheet (.deck-sheet, the Sample chip in its header, the attribution on its own line at the foot). site.js ("the add-ons deck") sets data-slot on every card: 0 in front (shadow level 3), 1 and 2 behind it, smaller and offset right and down (on phones, down), their bodies blurred 1.5px and 3px (.75px and 1.5px on phones) and inert, back and prev out of sight. Each rear card shows .deck-rail on its exposed edge: an unblurred button naming it (on phones only the next card's, along its bottom edge). Under the deck, .deck-bar: Previous add-on and Next add-on (a 32px circle in a 44px target; both wrap), "1 of 6", and "Ask about a project". A swipe of 48px or more, mostly sideways, on a phone chooses the next or previous card; vertical scrolling is left alone. The choice is announced politely (the name and "2 of 6"). Nothing advances on its own. Moves take 400ms; the card coming forward comes into focus in its last 150ms. The first time the deck is on screen the rear cards fan out 12px and settle back, once. Follow-up's sample (a call note, the concierge's text, the booking in the practice's software, signed by Follow-up with a small stamp) is a signed sample (data-loop="follow") that loops while its card is in front; the others replay one action 600ms after they are chosen: brand, the swatches place and the appointment card settles; video, the selected clip's frame draws in and the title settles; website, the button's ring shows and the sign-off is stamped; the coming-soon two, the rule under the first topic draws. Under reduced motion or with animations paused the cards swap at once and the samples stay finished; without JavaScript the six cards are a plain list and the controls stay hidden.</p>
+          <div class="ref-stage">
+          <div class="beyond" data-deck>
+            <div class="beyond-head">
+              <h3 class="beyond-title" id="beyond-title">Beyond the core plan<span class="sr-only">: add-ons and projects, including patient follow-up</span></h3>
+              <p>Add follow-up, or ask us about a separate project.</p>
+              <div class="deck-picks" role="group" aria-label="Choose an add-on">
+                <button class="deck-pick" type="button" data-deck-go="0" aria-current="true">Patient follow-up</button>
+                <button class="deck-pick" type="button" data-deck-go="1">Brand and logo work</button>
+                <button class="deck-pick" type="button" data-deck-go="2">Video and content</button>
+                <button class="deck-pick" type="button" data-deck-go="3">Website without the ads</button>
+                <button class="deck-pick" type="button" data-deck-go="4">Reputation management <span class="chip">Coming soon</span></button>
+                <button class="deck-pick" type="button" data-deck-go="5">Dental consulting <span class="chip">Coming soon</span></button>
               </div>
-              <div class="addons">
-                <div class="addon-box" aria-live="off">
-                  <article class="addon is-active" data-cycle-item="follow">
-                    <div class="addon-text">
-                      <div class="addon-head"><h4 class="addon-title">Patient follow-up</h4><span class="chip">Monthly add-on</span></div>
-                      <p>A patient concierge calls and texts your new and past leads, follows up cancellations and no-shows, and books into your patient management software. Any client can ask, and our sales team confirms the fit.</p>
-                      <a class="btn btn--secondary btn--small" href="/services/patient-follow-up">How patient follow-up works <svg class="arrow" viewBox="0 0 22 12" aria-hidden="true" focusable="false"><path d="M1 6h19M15 1l5 5-5 5"/></svg></a>
+            </div>
+            <div class="deck-stage">
+              <div class="deck" data-anim="none">
+                <article class="deck-card" data-slot="0" aria-labelledby="deck-follow">
+                  <div class="deck-body">
+                    <div class="deck-copy">
+                      <div class="deck-head"><h4 class="deck-title" id="deck-follow" tabindex="-1">Patient follow-up</h4><span class="chip">Monthly add-on</span></div>
+                      <p>A patient concierge calls and texts your leads, then books into your patient management software. Our sales team confirms the fit.</p>
+                      <a class="btn btn--secondary btn--small" href="/services/patient-follow-up">How follow-up works <svg class="arrow" viewBox="0 0 22 12" aria-hidden="true" focusable="false"><path d="M1 6h19M15 1l5 5-5 5"/></svg></a>
                     </div>
-                    <div class="run-show">
-                      <div class="screen" data-anim="none" role="img" aria-label="Sample: a follow-up lead card. [Name], clear aligner consult, called and consult booked.">
-                        <div class="lead-head">
-                          <p class="lead-title"><span class="lead-dot"></span>[Name], clear aligner consult</p>
-                        </div>
-                        <ol class="status">
-                          <li class="status-step is-done"><span class="chip">New</span></li>
-                          <li class="status-step is-done"><span class="chip">Called</span></li>
-                          <li class="status-step is-current"><span class="chip">Consult booked</span></li>
-                        </ol>
-                        <p class="keyword-line">Patient follow-up <span class="chip chip--sample">Sample</span></p>
-                      </div>
+                    <div class="deck-sheet deck-follow" data-loop="follow" role="img" aria-label="Sample: patient follow-up for [Name], an adult braces enquiry. Called and left a message, then a text: Hi [Name], this is the patient concierge for [Your practice]. You asked about adult braces. When would be a good time to call? Consultation booked, [Date] at [Time], in your practice's patient management software. Signed by Follow-up.">
+                      <div class="deck-sheet-head"><span class="deck-follow-who"><b>[Name]</b> Adult braces enquiry</span><span class="chip chip--sample">Sample</span></div>
+                      <p class="deck-follow-call" data-part="call"><span class="deck-follow-icon"><svg class="icon" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><path d="M6.6 3.2 8.4 7 7 8.4a9.6 9.6 0 0 0 4.6 4.6L13 11.6l3.8 1.8v2.4a1.6 1.6 0 0 1-1.7 1.6A13.4 13.4 0 0 1 2.6 4.9 1.6 1.6 0 0 1 4.2 3.2Z"/></svg></span>Called. Left a message.</p>
+                      <p class="deck-follow-msg" data-part="msg">Hi [Name], this is the patient concierge for [Your practice]. You asked about adult braces. When would be a good time to call?</p>
+                      <p class="deck-follow-booked" data-part="booked"><b>Consultation booked</b><span>[Date] at [Time]</span><small>In your practice's patient management software</small></p>
+                      <p class="deck-sign" data-part="sign"><span class="deck-sign-who">Signed by <em class="signature">Follow-up</em></span><img class="stamp" src="/assets/img/stamp-signed.svg" alt="" width="48" height="48"></p>
                     </div>
-                  </article>
-                  <article class="addon" data-cycle-item="brand">
-                    <div class="addon-text">
-                      <div class="addon-head"><h4 class="addon-title">Brand and logo work</h4><span class="chip">Priced for your practice</span></div>
+                  </div>
+                  <button class="deck-rail" type="button" data-deck-go="0"><span class="sr-only">Show </span><span class="deck-rail-name">Patient follow-up</span></button>
+                </article>
+                <article class="deck-card" data-slot="1" aria-labelledby="deck-brand">
+                  <div class="deck-body">
+                    <div class="deck-copy">
+                      <div class="deck-head"><h4 class="deck-title" id="deck-brand" tabindex="-1">Brand and logo work</h4><span class="chip">Priced for your practice</span></div>
                       <p>A logo and a brand kit made for your practice.</p>
-                      <a class="btn btn--secondary btn--small" href="/services/add-ons#brand">More on brand and logo work <svg class="arrow" viewBox="0 0 22 12" aria-hidden="true" focusable="false"><path d="M1 6h19M15 1l5 5-5 5"/></svg></a>
+                      <a class="btn btn--secondary btn--small" href="/services/add-ons#brand">See brand work <svg class="arrow" viewBox="0 0 22 12" aria-hidden="true" focusable="false"><path d="M1 6h19M15 1l5 5-5 5"/></svg></a>
                     </div>
-                    <div class="run-show">
-                      <div class="screen" data-anim="none" role="img" aria-label="Sample: a logo tile for [your practice] beside three colours from its brand kit.">
-                        <div class="mini-brand">
-                          <span class="mini-logo" aria-hidden="true">[Your practice]</span>
-                          <span class="mini-swatches" aria-hidden="true"><span class="mini-swatch mini-swatch--sage"></span><span class="mini-swatch mini-swatch--mist"></span><span class="mini-swatch mini-swatch--field"></span></span>
-                        </div>
-                        <p class="keyword-line">Brand kit <span class="chip chip--sample">Sample</span></p>
-                      </div>
+                    <div class="deck-sheet deck-brand" role="img" aria-label="Sample: a brand application study. [Your practice], orthodontics, in forest, cream and sage, and an appointment card: your next visit, [Date] at [Time]. Prepared for discussion.">
+                      <div class="deck-sheet-head"><span class="deck-sheet-title">Brand application study</span><span class="chip chip--sample">Sample</span></div>
+                      <p class="deck-brand-mark"><span>[Your practice]</span><span>Orthodontics</span></p>
+                      <ul class="deck-swatches"><li><span class="deck-swatch deck-swatch--forest"></span>Forest</li><li><span class="deck-swatch deck-swatch--cream"></span>Cream</li><li><span class="deck-swatch deck-swatch--sage"></span>Sage</li></ul>
+                      <p class="deck-appt"><small>Your next visit</small><span>[Date] at [Time]</span></p>
+                      <p class="deck-by">Prepared for discussion</p>
                     </div>
-                  </article>
-                  <article class="addon" data-cycle-item="video">
-                    <div class="addon-text">
-                      <div class="addon-head"><h4 class="addon-title">Video and content</h4><span class="chip">Priced for your practice</span></div>
+                  </div>
+                  <button class="deck-rail" type="button" data-deck-go="1"><span class="sr-only">Show </span><span class="deck-rail-name">Brand and logo work</span></button>
+                </article>
+                <article class="deck-card" data-slot="2" aria-labelledby="deck-video">
+                  <div class="deck-body">
+                    <div class="deck-copy">
+                      <div class="deck-head"><h4 class="deck-title" id="deck-video" tabindex="-1">Video and content</h4><span class="chip">Priced for your practice</span></div>
                       <p>Video cutdowns and written content for your site and social.</p>
-                      <a class="btn btn--secondary btn--small" href="/services/add-ons#video">More on video and content <svg class="arrow" viewBox="0 0 22 12" aria-hidden="true" focusable="false"><path d="M1 6h19M15 1l5 5-5 5"/></svg></a>
+                      <a class="btn btn--secondary btn--small" href="/services/add-ons#video">See video and content <svg class="arrow" viewBox="0 0 22 12" aria-hidden="true" focusable="false"><path d="M1 6h19M15 1l5 5-5 5"/></svg></a>
                     </div>
-                    <div class="run-show">
-                      <div class="screen" data-anim="none" role="img" aria-label="Sample: a video frame for [your practice], Meet the team.">
-                        <div class="mini-video"><svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="10"/><path d="M10 8.5v7l5.5-3.5z"/></svg></div>
-                        <p class="keyword-line">[Your practice] · Meet the team <span class="chip chip--sample">Sample</span></p>
+                    <div class="deck-sheet deck-video" role="img" aria-label="Sample: a title sequence study. Three frames, your first visit, your questions and what happens next; the first frame's title, what to expect at your first visit; and three clips, welcome, consultation and next steps. Prepared for discussion.">
+                      <div class="deck-sheet-head"><span class="deck-sheet-title">Title sequence study</span><span class="chip chip--sample">Sample</span></div>
+                      <div class="deck-video-board">
+                        <ol class="deck-frames"><li class="is-current">Your first visit</li><li>Your questions</li><li>What happens next</li></ol>
+                        <p class="deck-video-title"><span>What to expect at your first visit</span></p>
                       </div>
+                      <ol class="deck-clips"><li class="is-current">Welcome</li><li>Consultation</li><li>Next steps</li></ol>
+                      <p class="deck-by">Prepared for discussion</p>
                     </div>
-                  </article>
-                  <article class="addon" data-cycle-item="website">
-                    <div class="addon-text">
-                      <div class="addon-head"><h4 class="addon-title">Website without the ads</h4><span class="chip">Priced for your practice</span></div>
+                  </div>
+                  <button class="deck-rail" type="button" data-deck-go="2"><span class="sr-only">Show </span><span class="deck-rail-name">Video and content</span></button>
+                </article>
+                <article class="deck-card" data-slot="back" aria-labelledby="deck-website">
+                  <div class="deck-body">
+                    <div class="deck-copy">
+                      <div class="deck-head"><h4 class="deck-title" id="deck-website" tabindex="-1">Website without the ads</h4><span class="chip">Priced for your practice</span></div>
                       <p>A website built from your practice, with SEO, for practices running their own ads.</p>
-                      <a class="btn btn--secondary btn--small" href="/services/add-ons#website">More on a website without the ads <svg class="arrow" viewBox="0 0 22 12" aria-hidden="true" focusable="false"><path d="M1 6h19M15 1l5 5-5 5"/></svg></a>
+                      <a class="btn btn--secondary btn--small" href="/services/add-ons#website">See website projects <svg class="arrow" viewBox="0 0 22 12" aria-hidden="true" focusable="false"><path d="M1 6h19M15 1l5 5-5 5"/></svg></a>
                     </div>
-                    <div class="run-show">
-                      <div class="screen" data-anim="none" role="img" aria-label="Sample: a browser window showing [yourpractice].com.">
-                        <div class="screen-bar"><span class="screen-url">[yourpractice].com</span></div>
-                        <div class="skeleton" aria-hidden="true"><span></span><span></span></div>
-                        <p class="keyword-line">Your website <span class="chip chip--sample">Sample</span></p>
+                    <div class="deck-sheet deck-site" role="img" aria-label="Sample: a home page for [Your practice], with links to treatments, your visit and contact. A place to start with your orthodontic questions. Learn about treatment options and what to expect at your first visit. Request a consultation. Signed by Web and SEO.">
+                      <div class="deck-sheet-head"><span class="deck-sheet-title">Home page</span><span class="chip chip--sample">Sample</span></div>
+                      <div class="deck-site-page">
+                        <p class="deck-site-top"><b>[Your practice]</b><span>Treatments · Your visit · Contact</span></p>
+                        <p class="deck-site-h">A place to start with your orthodontic questions.</p>
+                        <p class="deck-site-p">Learn about treatment options and what to expect at your first visit.</p>
+                        <span class="deck-site-btn">Request a consultation</span>
                       </div>
+                      <p class="deck-sign"><span class="deck-sign-who">Signed by <em class="signature">Web and SEO</em></span><img class="stamp" src="/assets/img/stamp-signed.svg" alt="" width="48" height="48"></p>
                     </div>
-                  </article>
-                  <article class="addon" data-cycle-item="reputation">
-                    <div class="addon-text">
-                      <div class="addon-head"><h4 class="addon-title">Reputation management</h4><span class="chip">Coming soon</span></div>
-                      <a class="btn btn--secondary btn--small" href="/contact">Tell us you're interested <svg class="arrow" viewBox="0 0 22 12" aria-hidden="true" focusable="false"><path d="M1 6h19M15 1l5 5-5 5"/></svg></a>
-                    </div>
-                    <div class="run-show">
-                      <div class="screen" data-anim="none" role="img" aria-label="Sample: a patient review card, [Name] and [Review text].">
-                        <div class="mini-review">
-                          <p class="mini-review-name">[Name]</p>
-                          <p class="mini-review-text">[Review text]</p>
-                        </div>
-                        <p class="keyword-line">A patient review <span class="chip chip--sample">Sample</span></p>
-                      </div>
+                  </div>
+                  <button class="deck-rail" type="button" data-deck-go="3"><span class="sr-only">Show </span><span class="deck-rail-name">Website without the ads</span></button>
+                </article>
+                <article class="deck-card" data-slot="back" aria-labelledby="deck-reputation">
+                  <div class="deck-body">
+                    <div class="deck-copy">
+                      <div class="deck-head"><h4 class="deck-title" id="deck-reputation" tabindex="-1">Reputation management</h4><span class="chip">Coming soon</span></div>
+                      <p>Tell us what you need help with.</p>
+                      <a class="btn btn--secondary btn--small" href="/contact">Register interest <svg class="arrow" viewBox="0 0 22 12" aria-hidden="true" focusable="false"><path d="M1 6h19M15 1l5 5-5 5"/></svg></a>
                     </div>
-                  </article>
-                  <article class="addon" data-cycle-item="consulting">
-                    <div class="addon-text">
-                      <div class="addon-head"><h4 class="addon-title">Dental consulting</h4><span class="chip">Coming soon</span></div>
-                      <a class="btn btn--secondary btn--small" href="/contact">Tell us you're interested <svg class="arrow" viewBox="0 0 22 12" aria-hidden="true" focusable="false"><path d="M1 6h19M15 1l5 5-5 5"/></svg></a>
+                    <div class="deck-sheet deck-plan" role="img" aria-label="Sample, illustrative only: discussion topics for reputation management. How do you request feedback? Who replies to reviews? What needs attention? For discussion with Sales.">
+                      <div class="deck-sheet-head"><span class="deck-sheet-title">Discussion topics</span><span class="deck-chips"><span class="chip chip--todo">Illustrative only</span><span class="chip chip--sample">Sample</span></span></div>
+                      <p class="deck-plan-title">Reputation management</p>
+                      <ul class="deck-topics"><li class="is-key"><svg class="icon" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><rect x="3.5" y="3.5" width="13" height="13" rx="3"/></svg>How do you request feedback?</li><li><svg class="icon" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><rect x="3.5" y="3.5" width="13" height="13" rx="3"/></svg>Who replies to reviews?</li><li><svg class="icon" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><rect x="3.5" y="3.5" width="13" height="13" rx="3"/></svg>What needs attention?</li></ul>
+                      <p class="deck-by">For discussion with <em class="signature">Sales</em></p>
                     </div>
-                    <div class="run-show">
-                      <div class="screen" data-anim="none" role="img" aria-label="Sample: a short day schedule with a new patient visit, a recall and a consult.">
-                        <div class="schedule">
-                          <div class="schedule-row"><span class="schedule-time">[Time]</span><span class="schedule-slot">New patient</span></div>
-                          <div class="schedule-row"><span class="schedule-time">[Time]</span><span class="schedule-slot">Recall</span></div>
-                          <div class="schedule-row"><span class="schedule-time">[Time]</span><span class="schedule-slot mini-slot-key">Consult</span></div>
-                        </div>
-                        <p class="keyword-line">A day's schedule <span class="chip chip--sample">Sample</span></p>
-                      </div>
+                  </div>
+                  <button class="deck-rail" type="button" data-deck-go="4"><span class="sr-only">Show </span><span class="deck-rail-name">Reputation management</span></button>
+                </article>
+                <article class="deck-card" data-slot="prev" aria-labelledby="deck-consulting">
+                  <div class="deck-body">
+                    <div class="deck-copy">
+                      <div class="deck-head"><h4 class="deck-title" id="deck-consulting" tabindex="-1">Dental consulting</h4><span class="chip">Coming soon</span></div>
+                      <p>Talk to us about your practice.</p>
+                      <a class="btn btn--secondary btn--small" href="/contact">Register interest <svg class="arrow" viewBox="0 0 22 12" aria-hidden="true" focusable="false"><path d="M1 6h19M15 1l5 5-5 5"/></svg></a>
                     </div>
-                  </article>
-                </div>
-                <div class="addon-bar">
-                  <div class="addon-controls" role="group" aria-label="Choose an add-on">
-                    <button class="addon-step" type="button" data-cycle-step="-1" aria-label="Previous add-on"><svg class="arrow" viewBox="0 0 22 12" aria-hidden="true" focusable="false"><path d="M1 6h19M15 1l5 5-5 5"/></svg></button>
-                    <div class="addon-dots">
-                      <button class="addon-dot" type="button" data-cycle-go="follow" aria-label="Show patient follow-up" aria-current="true"></button>
-                      <button class="addon-dot" type="button" data-cycle-go="brand" aria-label="Show brand and logo work"></button>
-                      <button class="addon-dot" type="button" data-cycle-go="video" aria-label="Show video and content"></button>
-                      <button class="addon-dot" type="button" data-cycle-go="website" aria-label="Show a website without the ads"></button>
-                      <button class="addon-dot" type="button" data-cycle-go="reputation" aria-label="Show reputation management"></button>
-                      <button class="addon-dot" type="button" data-cycle-go="consulting" aria-label="Show dental consulting"></button>
+                    <div class="deck-sheet deck-plan" role="img" aria-label="Sample, illustrative only: discussion topics for a practice conversation. New patient enquiries, scheduling and team handoffs. What would you like to improve? For discussion with Sales.">
+                      <div class="deck-sheet-head"><span class="deck-sheet-title">Discussion topics</span><span class="deck-chips"><span class="chip chip--todo">Illustrative only</span><span class="chip chip--sample">Sample</span></span></div>
+                      <p class="deck-plan-title">Practice conversation</p>
+                      <ul class="deck-topics"><li class="is-key"><svg class="icon" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><rect x="3.5" y="3.5" width="13" height="13" rx="3"/></svg>New patient enquiries</li><li><svg class="icon" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><rect x="3.5" y="3.5" width="13" height="13" rx="3"/></svg>Scheduling</li><li><svg class="icon" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><rect x="3.5" y="3.5" width="13" height="13" rx="3"/></svg>Team handoffs</li></ul>
+                      <p class="deck-topics-ask">What would you like to improve?</p>
+                      <p class="deck-by">For discussion with <em class="signature">Sales</em></p>
                     </div>
-                    <button class="addon-step" type="button" data-cycle-step="1" aria-label="Next add-on"><svg class="arrow" viewBox="0 0 22 12" aria-hidden="true" focusable="false"><path d="M1 6h19M15 1l5 5-5 5"/></svg></button>
                   </div>
-                  <a class="btn btn--secondary btn--small" href="/contact">Ask about a project <svg class="arrow" viewBox="0 0 22 12" aria-hidden="true" focusable="false"><path d="M1 6h19M15 1l5 5-5 5"/></svg></a>
+                  <button class="deck-rail" type="button" data-deck-go="5"><span class="sr-only">Show </span><span class="deck-rail-name">Dental consulting</span></button>
+                </article>
+              </div>
+              <div class="deck-bar">
+                <div class="deck-nav">
+                  <button class="deck-step" type="button" data-deck-step="-1" aria-label="Previous add-on"><svg class="arrow" viewBox="0 0 22 12" aria-hidden="true" focusable="false"><path d="M1 6h19M15 1l5 5-5 5"/></svg></button>
+                  <p class="deck-count" data-deck-count>1 of 6</p>
+                  <button class="deck-step" type="button" data-deck-step="1" aria-label="Next add-on"><svg class="arrow" viewBox="0 0 22 12" aria-hidden="true" focusable="false"><path d="M1 6h19M15 1l5 5-5 5"/></svg></button>
                 </div>
+                <a class="btn btn--secondary btn--small" href="/contact">Ask about a project <svg class="arrow" viewBox="0 0 22 12" aria-hidden="true" focusable="false"><path d="M1 6h19M15 1l5 5-5 5"/></svg></a>
               </div>
-            </article>
+              <p class="sr-only" aria-live="polite" data-deck-say></p>
+            </div>
+          </div>
           </div>
         </div>
 
         <div class="ref-item ref-item--wide">
-          <p class="ref-name" id="demo-mini">Small samples for the add-ons (the homepage's .addon-box and /services/add-ons): plain .screen cards with data-anim="none", role="img", an aria-label starting "Sample:", and a .keyword-line with the Sample chip. Brand: .mini-brand (span.mini-logo, a forest tile with "[Your practice]", and three .mini-swatch in sage, sage mist and field; never rose). Video: .mini-video, a field frame with a 1.5px play mark. Website: .screen-bar with [yourpractice].com and a two-bar .skeleton. Reputation: .mini-review ([Name], [Review text]; no stars, no numbers). Consulting: a .schedule of three [Time] rows, the consult (.mini-slot-key) in forest. Then the add-ons page's ul.soon-list (names and a "Coming soon" chip, no lines, no links) and p.soon-ask.</p>
+          <p class="ref-name" id="demo-mini">Small samples for /services/add-ons: plain .screen cards with data-anim="none", role="img", an aria-label starting "Sample:", and a .keyword-line with the Sample chip; on the page each also carries data-play and plays its steps once as it comes into view. Brand: .mini-brand (span.mini-logo, a forest tile with "[Your practice]", and three .mini-swatch in sage, sage mist and field; never rose). Video: .mini-video, a field frame with a 1.5px play mark. Website: .screen-bar with [yourpractice].com and a two-bar .skeleton. Then the add-ons page's ul.soon-list (names and a "Coming soon" chip, no lines, no links) and p.soon-ask. The homepage's add-ons deck has its own samples (see .beyond above).</p>
           <div class="ref-stage">
             <div class="cards">
               <div class="screen" data-anim="none" role="img" aria-label="Sample: a logo tile for [your practice] beside three colours from its brand kit.">
@@ -686,21 +697,6 @@
                 <div class="skeleton" aria-hidden="true"><span></span><span></span></div>
                 <p class="keyword-line">Your website <span class="chip chip--sample">Sample</span></p>
               </div>
-              <div class="screen" data-anim="none" role="img" aria-label="Sample: a patient review card, [Name] and [Review text].">
-                <div class="mini-review">
-                  <p class="mini-review-name">[Name]</p>
-                  <p class="mini-review-text">[Review text]</p>
-                </div>
-                <p class="keyword-line">A patient review <span class="chip chip--sample">Sample</span></p>
-              </div>
-              <div class="screen" data-anim="none" role="img" aria-label="Sample: a short day schedule with a new patient visit, a recall and a consult.">
-                <div class="schedule">
-                  <div class="schedule-row"><span class="schedule-time">[Time]</span><span class="schedule-slot">New patient</span></div>
-                  <div class="schedule-row"><span class="schedule-time">[Time]</span><span class="schedule-slot">Recall</span></div>
-                  <div class="schedule-row"><span class="schedule-time">[Time]</span><span class="schedule-slot mini-slot-key">Consult</span></div>
-                </div>
-                <p class="keyword-line">A day's schedule <span class="chip chip--sample">Sample</span></p>
-              </div>
             </div>
             <ul class="soon-list">
               <li><span class="soon-name">Reputation management</span><span class="chip">Coming soon</span></li>
diff --git a/site/index.html b/site/index.html
index b374073..291f6f1 100644
--- a/site/index.html
+++ b/site/index.html
@@ -407,137 +407,146 @@ height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
 
       </div>
 
-      <!-- Beyond the core plan: one set of add-ons ("The add-ons cycle", site.css and site.js). The line names one item at
-           a time, sliding up to the next, and the descriptor box under it shows the same item: its name, chip, line, link
-           and a small sample, which plays once each time its item comes up. Patient follow-up (the monthly add-on any
-           client can ask about; the sales team confirms the fit) holds longest, in a forest pill. The buttons and dots
-           jump to an item; the line carries on 6s after the last one. The moving line is aria-hidden; the sr-only sentence says the same thing once. Without GSAP, under
-           reduced motion or with animations paused, it rests on patient follow-up and the controls swap instantly.
-           One cycle per page. -->
-      <div class="run-list run-list--beyond">
-        <article class="run-row run-row--beyond reveal" data-cycle data-current="follow">
-          <div class="run-title">
-            <h3>Beyond the core plan<span class="sr-only">: add-ons and projects, including patient follow-up</span></h3>
+      <!-- Beyond the core plan: the add-ons as a deck of cards, browsed by hand (site.css and site.js "Beyond the core plan").
+           Six cards in the present order, patient follow-up first. Each card is a name, a chip, a line, a link and a real
+           sample on a cream sheet; follow-up's sample is a signed sample that loops while its card is in front (site.js
+           "signed samples", data-loop="follow"), the others replay one small action when chosen. With JavaScript the cards
+           stack: the chosen one in front, the next two behind it, offset, with their bodies out of focus and an unblurred
+           rail naming each (click a rail to bring it forward). The named buttons on the left (desktop and tablet), Previous
+           and Next, the rails and a swipe on phones all choose a card; nothing advances on its own. Without JavaScript the
+           six cards are a plain list and the controls stay hidden. -->
+      <div class="beyond reveal" data-deck>
+        <div class="beyond-head">
+          <h3 class="beyond-title" id="beyond-title">Beyond the core plan<span class="sr-only">: add-ons and projects, including patient follow-up</span></h3>
+          <p>Add follow-up, or ask us about a separate project.</p>
+          <div class="deck-picks" role="group" aria-label="Choose an add-on">
+            <button class="deck-pick" type="button" data-deck-go="0" aria-current="true">Patient follow-up</button>
+            <button class="deck-pick" type="button" data-deck-go="1">Brand and logo work</button>
+            <button class="deck-pick" type="button" data-deck-go="2">Video and content</button>
+            <button class="deck-pick" type="button" data-deck-go="3">Website without the ads</button>
+            <button class="deck-pick" type="button" data-deck-go="4">Reputation management <span class="chip">Coming soon</span></button>
+            <button class="deck-pick" type="button" data-deck-go="5">Dental consulting <span class="chip">Coming soon</span></button>
           </div>
-          <div class="cycle">
-            <p class="sr-only">We can also take on patient follow-up, brand and logo work, video and content, a website without the ads, and, coming soon, reputation management and dental consulting.</p>
-            <p class="cycle-line" aria-hidden="true"><span class="cycle-lead">We can also take on</span> <span class="cycle-tail"><span class="cycle-slot"><span class="cycle-phrase is-current" data-cycle-item="follow"><span class="cycle-pill">patient follow-up</span>.</span><span class="cycle-phrase" data-cycle-item="brand">brand and logo work.</span><span class="cycle-phrase" data-cycle-item="video">video and content.</span><span class="cycle-phrase" data-cycle-item="website">a website without the ads.</span><span class="cycle-phrase" data-cycle-item="reputation">reputation management. <span class="chip">Coming soon</span></span><span class="cycle-phrase" data-cycle-item="consulting">dental consulting. <span class="chip">Coming soon</span></span></span></span></p>
-          </div>
-          <div class="addons">
-            <div class="addon-box" aria-live="off">
-              <article class="addon is-active" data-cycle-item="follow">
-                <div class="addon-text">
-                  <div class="addon-head"><h4 class="addon-title">Patient follow-up</h4><span class="chip">Monthly add-on</span></div>
-                  <p>A patient concierge calls and texts your new and past leads, follows up cancellations and no-shows, and books into your patient management software. Any client can ask, and our sales team confirms the fit.</p>
-                  <a class="btn btn--secondary btn--small" href="/services/patient-follow-up">How patient follow-up works <svg class="arrow" viewBox="0 0 22 12" aria-hidden="true" focusable="false"><path d="M1 6h19M15 1l5 5-5 5"/></svg></a>
+        </div>
+        <div class="deck-stage">
+          <div class="deck" data-anim="none">
+            <article class="deck-card" data-slot="0" aria-labelledby="deck-follow">
+              <div class="deck-body">
+                <div class="deck-copy">
+                  <div class="deck-head"><h4 class="deck-title" id="deck-follow" tabindex="-1">Patient follow-up</h4><span class="chip">Monthly add-on</span></div>
+                  <p>A patient concierge calls and texts your leads, then books into your patient management software. Our sales team confirms the fit.</p>
+                  <a class="btn btn--secondary btn--small" href="/services/patient-follow-up">How follow-up works <svg class="arrow" viewBox="0 0 22 12" aria-hidden="true" focusable="false"><path d="M1 6h19M15 1l5 5-5 5"/></svg></a>
                 </div>
-                <div class="run-show">
-                  <div class="screen" data-anim="none" role="img" aria-label="Sample: a follow-up lead card. [Name], clear aligner consult, called and consult booked.">
-                    <div class="lead-head">
-                      <p class="lead-title"><span class="lead-dot"></span>[Name], clear aligner consult</p>
-                    </div>
-                    <ol class="status">
-                      <li class="status-step is-done"><span class="chip">New</span></li>
-                      <li class="status-step is-done"><span class="chip">Called</span></li>
-                      <li class="status-step is-current"><span class="chip">Consult booked</span></li>
-                    </ol>
-                    <p class="keyword-line">Patient follow-up <span class="chip chip--sample">Sample</span></p>
-                  </div>
+                <div class="deck-sheet deck-follow" data-loop="follow" role="img" aria-label="Sample: patient follow-up for [Name], an adult braces enquiry. Called and left a message, then a text: Hi [Name], this is the patient concierge for [Your practice]. You asked about adult braces. When would be a good time to call? Consultation booked, [Date] at [Time], in your practice's patient management software. Signed by Follow-up.">
+                  <div class="deck-sheet-head"><span class="deck-follow-who"><b>[Name]</b> Adult braces enquiry</span><span class="chip chip--sample">Sample</span></div>
+                  <p class="deck-follow-call" data-part="call"><span class="deck-follow-icon"><svg class="icon" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><path d="M6.6 3.2 8.4 7 7 8.4a9.6 9.6 0 0 0 4.6 4.6L13 11.6l3.8 1.8v2.4a1.6 1.6 0 0 1-1.7 1.6A13.4 13.4 0 0 1 2.6 4.9 1.6 1.6 0 0 1 4.2 3.2Z"/></svg></span>Called. Left a message.</p>
+                  <p class="deck-follow-msg" data-part="msg">Hi [Name], this is the patient concierge for [Your practice]. You asked about adult braces. When would be a good time to call?</p>
+                  <p class="deck-follow-booked" data-part="booked"><b>Consultation booked</b><span>[Date] at [Time]</span><small>In your practice's patient management software</small></p>
+                  <p class="deck-sign" data-part="sign"><span class="deck-sign-who">Signed by <em class="signature">Follow-up</em></span><img class="stamp" src="/assets/img/stamp-signed.svg" alt="" width="48" height="48"></p>
                 </div>
-              </article>
-              <article class="addon" data-cycle-item="brand">
-                <div class="addon-text">
-                  <div class="addon-head"><h4 class="addon-title">Brand and logo work</h4><span class="chip">Priced for your practice</span></div>
+              </div>
+              <button class="deck-rail" type="button" data-deck-go="0"><span class="sr-only">Show </span><span class="deck-rail-name">Patient follow-up</span></button>
+            </article>
+            <article class="deck-card" data-slot="1" aria-labelledby="deck-brand">
+              <div class="deck-body">
+                <div class="deck-copy">
+                  <div class="deck-head"><h4 class="deck-title" id="deck-brand" tabindex="-1">Brand and logo work</h4><span class="chip">Priced for your practice</span></div>
                   <p>A logo and a brand kit made for your practice.</p>
-                  <a class="btn btn--secondary btn--small" href="/services/add-ons#brand">More on brand and logo work <svg class="arrow" viewBox="0 0 22 12" aria-hidden="true" focusable="false"><path d="M1 6h19M15 1l5 5-5 5"/></svg></a>
+                  <a class="btn btn--secondary btn--small" href="/services/add-ons#brand">See brand work <svg class="arrow" viewBox="0 0 22 12" aria-hidden="true" focusable="false"><path d="M1 6h19M15 1l5 5-5 5"/></svg></a>
                 </div>
-                <div class="run-show">
-                  <div class="screen" data-anim="none" role="img" aria-label="Sample: a logo tile for [your practice] beside three colours from its brand kit.">
-                    <div class="mini-brand">
-                      <span class="mini-logo" aria-hidden="true">[Your practice]</span>
-                      <span class="mini-swatches" aria-hidden="true"><span class="mini-swatch mini-swatch--sage"></span><span class="mini-swatch mini-swatch--mist"></span><span class="mini-swatch mini-swatch--field"></span></span>
-                    </div>
-                    <p class="keyword-line">Brand kit <span class="chip chip--sample">Sample</span></p>
-                  </div>
+                <div class="deck-sheet deck-brand" role="img" aria-label="Sample: a brand application study. [Your practice], orthodontics, in forest, cream and sage, and an appointment card: your next visit, [Date] at [Time]. Prepared for discussion.">
+                  <div class="deck-sheet-head"><span class="deck-sheet-title">Brand application study</span><span class="chip chip--sample">Sample</span></div>
+                  <p class="deck-brand-mark"><span>[Your practice]</span><span>Orthodontics</span></p>
+                  <ul class="deck-swatches"><li><span class="deck-swatch deck-swatch--forest"></span>Forest</li><li><span class="deck-swatch deck-swatch--cream"></span>Cream</li><li><span class="deck-swatch deck-swatch--sage"></span>Sage</li></ul>
+                  <p class="deck-appt"><small>Your next visit</small><span>[Date] at [Time]</span></p>
+                  <p class="deck-by">Prepared for discussion</p>
                 </div>
-              </article>
-              <article class="addon" data-cycle-item="video">
-                <div class="addon-text">
-                  <div class="addon-head"><h4 class="addon-title">Video and content</h4><span class="chip">Priced for your practice</span></div>
+              </div>
+              <button class="deck-rail" type="button" data-deck-go="1"><span class="sr-only">Show </span><span class="deck-rail-name">Brand and logo work</span></button>
+            </article>
+            <article class="deck-card" data-slot="2" aria-labelledby="deck-video">
+              <div class="deck-body">
+                <div class="deck-copy">
+                  <div class="deck-head"><h4 class="deck-title" id="deck-video" tabindex="-1">Video and content</h4><span class="chip">Priced for your practice</span></div>
                   <p>Video cutdowns and written content for your site and social.</p>
-                  <a class="btn btn--secondary btn--small" href="/services/add-ons#video">More on video and content <svg class="arrow" viewBox="0 0 22 12" aria-hidden="true" focusable="false"><path d="M1 6h19M15 1l5 5-5 5"/></svg></a>
+                  <a class="btn btn--secondary btn--small" href="/services/add-ons#video">See video and content <svg class="arrow" viewBox="0 0 22 12" aria-hidden="true" focusable="false"><path d="M1 6h19M15 1l5 5-5 5"/></svg></a>
                 </div>
-                <div class="run-show">
-                  <div class="screen" data-anim="none" role="img" aria-label="Sample: a video frame for [your practice], Meet the team.">
-                    <div class="mini-video"><svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="10"/><path d="M10 8.5v7l5.5-3.5z"/></svg></div>
-                    <p class="keyword-line">[Your practice] · Meet the team <span class="chip chip--sample">Sample</span></p>
+                <div class="deck-sheet deck-video" role="img" aria-label="Sample: a title sequence study. Three frames, your first visit, your questions and what happens next; the first frame's title, what to expect at your first visit; and three clips, welcome, consultation and next steps. Prepared for discussion.">
+                  <div class="deck-sheet-head"><span class="deck-sheet-title">Title sequence study</span><span class="chip chip--sample">Sample</span></div>
+                  <div class="deck-video-board">
+                    <ol class="deck-frames"><li class="is-current">Your first visit</li><li>Your questions</li><li>What happens next</li></ol>
+                    <p class="deck-video-title"><span>What to expect at your first visit</span></p>
                   </div>
+                  <ol class="deck-clips"><li class="is-current">Welcome</li><li>Consultation</li><li>Next steps</li></ol>
+                  <p class="deck-by">Prepared for discussion</p>
                 </div>
-              </article>
-              <article class="addon" data-cycle-item="website">
-                <div class="addon-text">
-                  <div class="addon-head"><h4 class="addon-title">Website without the ads</h4><span class="chip">Priced for your practice</span></div>
+              </div>
+              <button class="deck-rail" type="button" data-deck-go="2"><span class="sr-only">Show </span><span class="deck-rail-name">Video and content</span></button>
+            </article>
+            <article class="deck-card" data-slot="back" aria-labelledby="deck-website">
+              <div class="deck-body">
+                <div class="deck-copy">
+                  <div class="deck-head"><h4 class="deck-title" id="deck-website" tabindex="-1">Website without the ads</h4><span class="chip">Priced for your practice</span></div>
                   <p>A website built from your practice, with SEO, for practices running their own ads.</p>
-                  <a class="btn btn--secondary btn--small" href="/services/add-ons#website">More on a website without the ads <svg class="arrow" viewBox="0 0 22 12" aria-hidden="true" focusable="false"><path d="M1 6h19M15 1l5 5-5 5"/></svg></a>
+                  <a class="btn btn--secondary btn--small" href="/services/add-ons#website">See website projects <svg class="arrow" viewBox="0 0 22 12" aria-hidden="true" focusable="false"><path d="M1 6h19M15 1l5 5-5 5"/></svg></a>
                 </div>
-                <div class="run-show">
-                  <div class="screen" data-anim="none" role="img" aria-label="Sample: a browser window showing [yourpractice].com.">
-                    <div class="screen-bar"><span class="screen-url">[yourpractice].com</span></div>
-                    <div class="skeleton" aria-hidden="true"><span></span><span></span></div>
-                    <p class="keyword-line">Your website <span class="chip chip--sample">Sample</span></p>
+                <div class="deck-sheet deck-site" role="img" aria-label="Sample: a home page for [Your practice], with links to treatments, your visit and contact. A place to start with your orthodontic questions. Learn about treatment options and what to expect at your first visit. Request a consultation. Signed by Web and SEO.">
+                  <div class="deck-sheet-head"><span class="deck-sheet-title">Home page</span><span class="chip chip--sample">Sample</span></div>
+                  <div class="deck-site-page">
+                    <p class="deck-site-top"><b>[Your practice]</b><span>Treatments · Your visit · Contact</span></p>
+                    <p class="deck-site-h">A place to start with your orthodontic questions.</p>
+                    <p class="deck-site-p">Learn about treatment options and what to expect at your first visit.</p>
+                    <span class="deck-site-btn">Request a consultation</span>
                   </div>
+                  <p class="deck-sign"><span class="deck-sign-who">Signed by <em class="signature">Web and SEO</em></span><img class="stamp" src="/assets/img/stamp-signed.svg" alt="" width="48" height="48"></p>
                 </div>
-              </article>
-              <article class="addon" data-cycle-item="reputation">
-                <div class="addon-text">
-                  <div class="addon-head"><h4 class="addon-title">Reputation management</h4><span class="chip">Coming soon</span></div>
-                  <a class="btn btn--secondary btn--small" href="/contact">Tell us you're interested <svg class="arrow" viewBox="0 0 22 12" aria-hidden="true" focusable="false"><path d="M1 6h19M15 1l5 5-5 5"/></svg></a>
-                </div>
-                <div class="run-show">
-                  <div class="screen" data-anim="none" role="img" aria-label="Sample: a patient review card, [Name] and [Review text].">
-                    <div class="mini-review">
-                      <p class="mini-review-name">[Name]</p>
-                      <p class="mini-review-text">[Review text]</p>
-                    </div>
-                    <p class="keyword-line">A patient review <span class="chip chip--sample">Sample</span></p>
-                  </div>
+              </div>
+              <button class="deck-rail" type="button" data-deck-go="3"><span class="sr-only">Show </span><span class="deck-rail-name">Website without the ads</span></button>
+            </article>
+            <article class="deck-card" data-slot="back" aria-labelledby="deck-reputation">
+              <div class="deck-body">
+                <div class="deck-copy">
+                  <div class="deck-head"><h4 class="deck-title" id="deck-reputation" tabindex="-1">Reputation management</h4><span class="chip">Coming soon</span></div>
+                  <p>Tell us what you need help with.</p>
+                  <a class="btn btn--secondary btn--small" href="/contact">Register interest <svg class="arrow" viewBox="0 0 22 12" aria-hidden="true" focusable="false"><path d="M1 6h19M15 1l5 5-5 5"/></svg></a>
                 </div>
-              </article>
-              <article class="addon" data-cycle-item="consulting">
-                <div class="addon-text">
-                  <div class="addon-head"><h4 class="addon-title">Dental consulting</h4><span class="chip">Coming soon</span></div>
-                  <a class="btn btn--secondary btn--small" href="/contact">Tell us you're interested <svg class="arrow" viewBox="0 0 22 12" aria-hidden="true" focusable="false"><path d="M1 6h19M15 1l5 5-5 5"/></svg></a>
+                <div class="deck-sheet deck-plan" role="img" aria-label="Sample, illustrative only: discussion topics for reputation management. How do you request feedback? Who replies to reviews? What needs attention? For discussion with Sales.">
+                  <div class="deck-sheet-head"><span class="deck-sheet-title">Discussion topics</span><span class="deck-chips"><span class="chip chip--todo">Illustrative only</span><span class="chip chip--sample">Sample</span></span></div>
+                  <p class="deck-plan-title">Reputation management</p>
+                  <ul class="deck-topics"><li class="is-key"><svg class="icon" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><rect x="3.5" y="3.5" width="13" height="13" rx="3"/></svg>How do you request feedback?</li><li><svg class="icon" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><rect x="3.5" y="3.5" width="13" height="13" rx="3"/></svg>Who replies to reviews?</li><li><svg class="icon" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><rect x="3.5" y="3.5" width="13" height="13" rx="3"/></svg>What needs attention?</li></ul>
+                  <p class="deck-by">For discussion with <em class="signature">Sales</em></p>
                 </div>
-                <div class="run-show">
-                  <div class="screen" data-anim="none" role="img" aria-label="Sample: a short day schedule with a new patient visit, a recall and a consult.">
-                    <div class="schedule">
-                      <div class="schedule-row"><span class="schedule-time">[Time]</span><span class="schedule-slot">New patient</span></div>
-                      <div class="schedule-row"><span class="schedule-time">[Time]</span><span class="schedule-slot">Recall</span></div>
-                      <div class="schedule-row"><span class="schedule-time">[Time]</span><span class="schedule-slot mini-slot-key">Consult</span></div>
-                    </div>
-                    <p class="keyword-line">A day's schedule <span class="chip chip--sample">Sample</span></p>
-                  </div>
+              </div>
+              <button class="deck-rail" type="button" data-deck-go="4"><span class="sr-only">Show </span><span class="deck-rail-name">Reputation management</span></button>
+            </article>
+            <article class="deck-card" data-slot="prev" aria-labelledby="deck-consulting">
+              <div class="deck-body">
+                <div class="deck-copy">
+                  <div class="deck-head"><h4 class="deck-title" id="deck-consulting" tabindex="-1">Dental consulting</h4><span class="chip">Coming soon</span></div>
+                  <p>Talk to us about your practice.</p>
+                  <a class="btn btn--secondary btn--small" href="/contact">Register interest <svg class="arrow" viewBox="0 0 22 12" aria-hidden="true" focusable="false"><path d="M1 6h19M15 1l5 5-5 5"/></svg></a>
                 </div>
-              </article>
-            </div>
-            <div class="addon-bar">
-              <div class="addon-controls" role="group" aria-label="Choose an add-on">
-                <button class="addon-step" type="button" data-cycle-step="-1" aria-label="Previous add-on"><svg class="arrow" viewBox="0 0 22 12" aria-hidden="true" focusable="false"><path d="M1 6h19M15 1l5 5-5 5"/></svg></button>
-                <div class="addon-dots">
-                  <button class="addon-dot" type="button" data-cycle-go="follow" aria-label="Show patient follow-up" aria-current="true"></button>
-                  <button class="addon-dot" type="button" data-cycle-go="brand" aria-label="Show brand and logo work"></button>
-                  <button class="addon-dot" type="button" data-cycle-go="video" aria-label="Show video and content"></button>
-                  <button class="addon-dot" type="button" data-cycle-go="website" aria-label="Show a website without the ads"></button>
-                  <button class="addon-dot" type="button" data-cycle-go="reputation" aria-label="Show reputation management"></button>
-                  <button class="addon-dot" type="button" data-cycle-go="consulting" aria-label="Show dental consulting"></button>
+                <div class="deck-sheet deck-plan" role="img" aria-label="Sample, illustrative only: discussion topics for a practice conversation. New patient enquiries, scheduling and team handoffs. What would you like to improve? For discussion with Sales.">
+                  <div class="deck-sheet-head"><span class="deck-sheet-title">Discussion topics</span><span class="deck-chips"><span class="chip chip--todo">Illustrative only</span><span class="chip chip--sample">Sample</span></span></div>
+                  <p class="deck-plan-title">Practice conversation</p>
+                  <ul class="deck-topics"><li class="is-key"><svg class="icon" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><rect x="3.5" y="3.5" width="13" height="13" rx="3"/></svg>New patient enquiries</li><li><svg class="icon" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><rect x="3.5" y="3.5" width="13" height="13" rx="3"/></svg>Scheduling</li><li><svg class="icon" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><rect x="3.5" y="3.5" width="13" height="13" rx="3"/></svg>Team handoffs</li></ul>
+                  <p class="deck-topics-ask">What would you like to improve?</p>
+                  <p class="deck-by">For discussion with <em class="signature">Sales</em></p>
                 </div>
-                <button class="addon-step" type="button" data-cycle-step="1" aria-label="Next add-on"><svg class="arrow" viewBox="0 0 22 12" aria-hidden="true" focusable="false"><path d="M1 6h19M15 1l5 5-5 5"/></svg></button>
               </div>
-              <a class="btn btn--secondary btn--small" href="/contact">Ask about a project <svg class="arrow" viewBox="0 0 22 12" aria-hidden="true" focusable="false"><path d="M1 6h19M15 1l5 5-5 5"/></svg></a>
+              <button class="deck-rail" type="button" data-deck-go="5"><span class="sr-only">Show </span><span class="deck-rail-name">Dental consulting</span></button>
+            </article>
+          </div>
+          <div class="deck-bar">
+            <div class="deck-nav">
+              <button class="deck-step" type="button" data-deck-step="-1" aria-label="Previous add-on"><svg class="arrow" viewBox="0 0 22 12" aria-hidden="true" focusable="false"><path d="M1 6h19M15 1l5 5-5 5"/></svg></button>
+              <p class="deck-count" data-deck-count>1 of 6</p>
+              <button class="deck-step" type="button" data-deck-step="1" aria-label="Next add-on"><svg class="arrow" viewBox="0 0 22 12" aria-hidden="true" focusable="false"><path d="M1 6h19M15 1l5 5-5 5"/></svg></button>
             </div>
+            <a class="btn btn--secondary btn--small" href="/contact">Ask about a project <svg class="arrow" viewBox="0 0 22 12" aria-hidden="true" focusable="false"><path d="M1 6h19M15 1l5 5-5 5"/></svg></a>
           </div>
-        </article>
-
+          <p class="sr-only" aria-live="polite" data-deck-say></p>
+        </div>
       </div>
     </div>
   </section>
```

</details>

### 8. What happens after you say yes: the practice folder

**What and why.** Chris: the section felt "half-baked"; the graphics didn't show "anything real" and nothing made him focus on it. It was four prose steps beside a report full of `[n]`. It is now one **practice folder**: your four steps, each with the actual piece of work it hands over, and the folder moves through them by itself while it's on screen.

**Kept:** the heading, your intro line, and your four step titles and lines, word for word.

**Each step's sheet** (cream, with the Sample chip):
1. **A first conversation.** Sales' *Practice notes*:
   - "We ask / Which patients are you hoping to reach?"
   - "We ask / What have you already tried?"
   - "Example focus / Adult braces enquiries"
   - "Prepared by *Sales*". There's no stamp, because these are prompts, not finished work.
2. **Your website, built from your practice.** *Adult braces page*:
   - a small page: "Adult braces in [your city]", its line, and "Request a consultation";
   - "Built the page around adult patients' *questions*.";
   - "Signed by *Web and SEO*", with a stamp.
3. **Your ads go live.** *Launch checklist*:
   - three ticked rows: the Google and Meta ads linked to the adult braces page, and call and conversion tracking set up;
   - "Ad accounts in your practice's name.";
   - "Signed by *Paid media*", with a stamp.
4. **Your first monthly report.** *Work and next steps*:
   - two signed rows: Web and SEO, "Published the *adult braces* page.", and Paid media, "Matched the ads to the *adult braces* page.";
   - a "Next" row, "Review enquiries and booked consults with your team.";
   - the line "Work excerpt only. Sample results are not shown.";
   - a 64px stamp.
   - The rows are separate, so real results can go above them later without a redesign.

The sentence before "See every step" is removed. The button still goes to /services#after-yes.

**Layout**
- **Desktop:** a stage rail on the left (number, title, line; the chosen stage is a raised cream card) and the sheet on the right.
- **Under 1025px:** four short steps in a row (two by two on phones: Conversation, Website, Ads go live, Report), then the stage's full title and line, then the sheet.
- All four sheets share one grid cell, so changing stage never moves the page.

**Motion** (new site.js section "the practice folder", GSAP)
- While the folder is on screen it moves 1, 2, 3, 4 and loops.
- On each stage:
  1. The sheet plays one beat: the focus underlines; the page places and is signed; the boxes tick one by one; or the report rows light in turn.
  2. The stamp is pressed.
  3. It rests 4s while a thin forest line fills along the active stage.
- Any click, tap or key on a stage stops this for the rest of the visit.
- Pausing stops on the current stage, finished.
- Reduced motion shows stage 1, finished, and stage changes are instant.
- Without JavaScript the stages are native `<details>`, with stage 1 open and all four reachable.

**Retired:** `.after-yes`, `.yes-step*`, `.after-yes-visual`, `.month-report`, `.report-*` and the `report` builder. /services and /pricing have their own #after-yes and are unchanged.

**Check:**
- Watch the folder for 25 seconds at 1440 and at 390.
- Click a stage: it stops there.
- Pause: it holds.
- The height doesn't change between stages.

**Files and lines** (after this change):

- `site/assets/site.css`: lines 2032–2181
- `site/assets/site.js`: lines 776–781, 846–1124
- `site/components.html`: lines 834–911
- `site/index.html`: lines 551–644

<details>
<summary>Exact diff for change 8</summary>

```diff
diff --git a/site/assets/site.css b/site/assets/site.css
index c8f0e6e..cd2da1c 100644
--- a/site/assets/site.css
+++ b/site/assets/site.css
@@ -2032,41 +2032,150 @@ h1 em, h2 em, h3 em, .tagline em, .signed-change em { color: var(--accent-italic
   }
 }
 
-/* What happens after you say yes: four steps beside the signed monthly report (sticky beside the steps from 1025px).
-   Markup: .after-yes > ol.yes-steps > li.yes-step (span.step-num + .yes-step-text (h3.h3 + p)) ×4
-   + .after-yes-visual[data-place] > .vignette[data-loop=report] > .screen.month-report (.screen-head + .report-stats
-   + .report-feed (span.report-hl + ul.report-changes > li[data-item] (svg.signoff-disc + .report-change + img.stamp))) */
-.after-yes { display: grid; grid-template-columns: minmax(0, 6fr) minmax(0, 5fr); align-items: start; gap: var(--space-12) var(--space-16); }
-.yes-steps { display: grid; }
-.yes-step { display: grid; grid-template-columns: 72px minmax(0, 1fr); gap: var(--space-4); padding-block: var(--space-6); border-top: var(--border-w) solid var(--border-quiet); }
-.yes-step:last-child { border-bottom: var(--border-w) solid var(--border-quiet); }
-.yes-step-text { display: grid; gap: var(--space-1); }
-.yes-step p { color: var(--text-muted); }
-.after-yes-visual { position: sticky; top: calc(var(--header-h) + var(--space-8)); display: grid; grid-template-columns: minmax(0, 1fr); place-items: center; }
-.month-report .stat--key .stat-label { color: var(--forest); font-weight: 600; }
-.report-feed { position: relative; }
-.report-changes { position: relative; display: grid; }
-.report-changes > li { position: relative; display: grid; grid-template-columns: 40px minmax(0, 1fr); gap: var(--space-4); padding: var(--space-4) 52px var(--space-4) var(--space-2); border-top: var(--border-w) solid var(--border-quiet); }
-.report-changes .signoff-disc.founder-art { width: 40px; height: 40px; }
-.report-change { display: grid; justify-items: start; gap: var(--space-2); }
-/* the signer, by role, in ink 600 (the signed change item, guideline section 6) */
-.report-who { font-weight: 600; line-height: 1.3; }
-.report-changes .stamp { position: absolute; right: -6px; top: var(--space-3); width: 48px; height: 48px; }
-/* the band that walks from one signed change to the next (placed by site.js; hidden at rest) */
-.report-hl { position: absolute; left: 0; right: 0; top: 0; height: 0; border-radius: var(--radius-input); background: var(--surface-panel); opacity: 0; }
+/* ---------- the practice folder (homepage "What happens after you say yes") ---------- */
+/* The four stages after a practice says yes, each with the piece of work it hands over, filed in one folder: Sales'
+   practice notes, the adult braces page (signed by Web and SEO), the launch checklist (signed by Paid media) and the
+   monthly report's work and next steps (two signed rows). Illustrative work: a Sample chip on every sheet, brackets
+   for the practice.
+   Markup (static, no JavaScript): .folder[data-folder] (a field panel) > details.folder-stage[name] ×4, the first open,
+   each summary.folder-summary (span.folder-num + .folder-head (h3.folder-title + span.folder-line)) + .folder-panel
+   > article.folder-doc (.folder-doc-head (practice + Sample chip) + .folder-doc-body + the sign-off + img.folder-stamp).
+   site.js ("the practice folder") then adds .is-folder and rebuilds it as .folder-rail[role=tablist] of
+   button.folder-tab (number, title and line on desktop, number and short title from data-short below 1025px, and a
+   span.folder-progress) beside .folder-sheet, which holds every .folder-panel[role=tabpanel] in one grid cell: the
+   sheet keeps the tallest stage's height, so changing stage never moves the page. Below 1025px each panel opens with
+   its stage's title and line (.folder-panel-head, moved there from the summary; read-only on desktop).
+   Motion (site.js): while the folder is on screen it moves from stage to stage on its own, 1 to 4 and round again;
+   each sheet plays its one beat (the focus underlined; the page placed; the checklist ticked; each signed row lit,
+   then the stamp pressed) and rests, and the active stage's progress line fills until the next. A click, tap or key
+   on a stage stops that for the visit. Paused animations: the current stage, finished. Reduced motion: stage 1,
+   finished, stages change at once. Static state (no JavaScript, reduced motion, paused): every sheet finished. */
+.folder { display: grid; grid-template-columns: minmax(0, 1fr); padding: var(--space-8); border-radius: var(--radius-panel); background: var(--surface-alt); }
+/* a stage, as a disclosure (no JavaScript) */
+.folder-stage + .folder-stage { border-top: var(--border-w) solid var(--border-quiet); }
+.folder-summary { position: relative; display: grid; grid-template-columns: 36px minmax(0, 1fr); gap: var(--space-4); padding: var(--space-5) var(--space-10) var(--space-5) 0; cursor: pointer; list-style: none; }
+.folder-summary::-webkit-details-marker { display: none; }
+.folder-summary::after { content: ""; position: absolute; right: var(--space-2); top: 30px; width: 8px; height: 8px; border-right: 1.5px solid var(--forest); border-bottom: 1.5px solid var(--forest); rotate: 45deg; transition: rotate var(--dur-fast) var(--ease-standard); }
+.folder-stage[open] > .folder-summary::after { rotate: 225deg; top: 34px; }
+.folder-panel { display: grid; grid-template-columns: minmax(0, 1fr); padding: 0 0 var(--space-6) 52px; }
+/* the stage number: an outlined disc, filled forest on the open stage (cream on forest 8.7:1) */
+.folder-num { display: grid; place-items: center; width: 36px; height: 36px; border: var(--border-w) solid var(--border-input); border-radius: 50%; font-family: var(--font-display); font-size: 18px; line-height: 1; color: var(--forest); transition: background-color var(--dur-fast) var(--ease-standard), color var(--dur-fast) var(--ease-standard); }
+.folder-stage[open] .folder-num, .folder-tab[aria-selected="true"] .folder-num { border-color: var(--forest); background: var(--forest); color: var(--cream); }
+.folder-head { display: grid; gap: var(--space-1); }
+/* titles ink, lines label sage: 11.75:1 and 5.02:1 on field, 13.78:1 and 5.88:1 on cream */
+.folder-title, .folder-tab-title { font-size: var(--text-body-m); font-weight: 600; line-height: 1.35; }
+.folder-line, .folder-tab-line { font-size: var(--text-body-s); line-height: 1.5; color: var(--text-muted); text-wrap: pretty; }
+
+/* the folder, built by site.js: the stage rail beside the sheet */
+.folder.is-folder { grid-template-columns: 320px minmax(0, 1fr); align-items: stretch; gap: var(--space-8); }
+.folder-rail { display: grid; align-content: start; gap: var(--space-1); }
+.folder-tab { position: relative; display: grid; grid-template-columns: 36px minmax(0, 1fr); align-items: start; gap: var(--space-4); min-height: 44px; padding: var(--space-4); border: 0; border-radius: var(--radius-card); background: transparent; color: var(--text-body); font: inherit; text-align: left; cursor: pointer; transition: background-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard); }
+.folder-tab:hover { background: var(--surface-panel); }
+.folder-tab[aria-selected="true"] { background: var(--surface-page); box-shadow: var(--shadow-2); }
+.folder-tab-text { display: grid; gap: var(--space-1); }
+.folder-tab-short { display: none; font-size: var(--text-body-s); font-weight: 600; line-height: 1.35; }
+/* the time to the next stage: a forest line along the active stage's foot, filled by site.js while the folder moves on its own */
+.folder-progress { position: absolute; left: var(--space-4); right: var(--space-4); bottom: 0; height: 2px; border-radius: var(--radius-pill); background: var(--forest); transform: scaleX(0); transform-origin: left center; visibility: hidden; }
+.folder-sheet { display: grid; grid-template-columns: minmax(0, 1fr); min-height: 430px; }
+.folder-sheet > .folder-panel { grid-area: 1 / 1; padding: 0; }
+.folder-sheet > .folder-panel:not(.is-current, .is-leaving) { visibility: hidden; }
+/* while the stage changes, the outgoing sheet sits on top as its work fades, then drops away (site.js) */
+.folder-sheet > .folder-panel.is-leaving { z-index: 1; }
+.folder-panel-head { display: grid; gap: var(--space-1); }
+.is-folder .folder-panel-head { position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); white-space: nowrap; }
+
+/* the sheet: one piece of work on cream paper, its foot kept clear for the stamp */
+.folder-doc { position: relative; display: grid; grid-template-rows: auto 1fr auto; gap: var(--space-5); padding: var(--space-6); border-radius: var(--radius-card); background: var(--surface-page); box-shadow: var(--shadow-2); font-size: var(--text-body-s); line-height: 1.5; }
+.folder-doc-head { display: flex; align-items: flex-start; justify-content: space-between; gap: var(--space-4); padding-bottom: var(--space-4); border-bottom: var(--border-w) solid var(--border-quiet); }
+.folder-doc-name { display: grid; gap: var(--space-1); }
+.folder-doc-practice { font-size: var(--text-label); font-weight: 600; line-height: 1.4; color: var(--text-muted); }
+.folder-doc-title { font-family: var(--font-display); font-size: var(--text-h2); line-height: 1.1; }
+.folder-doc-body { display: grid; align-content: start; gap: var(--space-4); }
+/* the sign-off: what was done, then "Signed by" and the role in deep rose (.signature, 8.43:1) */
+.folder-sign { display: grid; gap: var(--space-1); padding-top: var(--space-4); border-top: var(--border-w) solid var(--border-quiet); font-size: var(--text-label); font-weight: 600; line-height: 1.4; }
+/* the signature line keeps clear of the stamp */
+.folder-sign > p:last-child { padding-right: 72px; }
+.folder-sign .signed-change, .folder-sign-note { font-size: var(--text-body-s); font-weight: 400; }
+.folder-sign .signature { display: inline; margin-left: var(--space-1); font-size: 1.6em; line-height: 1; }
+.folder-stamp { position: absolute; right: var(--space-4); bottom: var(--space-4); width: 48px; height: 48px; }
+.folder-stamp--large { right: var(--space-3); bottom: var(--space-3); width: 64px; height: 64px; }
+
+/* 1. practice notes: what Sales asks, and the focus it leads to, underlined */
+.folder-notes > div { display: grid; grid-template-columns: 120px minmax(0, 1fr); gap: var(--space-4); padding-block: var(--space-3); }
+.folder-notes > div + div, .folder-checks li + li { border-top: var(--border-w) solid var(--border-quiet); }
+.folder-notes dt { font-size: var(--text-label); font-weight: 600; line-height: 1.6; color: var(--text-muted); }
+.folder-notes dd { font-size: var(--text-body-m); line-height: 1.4; }
+.folder-notes .is-key dd { font-weight: 600; color: var(--forest); }
+.folder-focus { position: relative; display: inline-block; padding-bottom: 3px; }
+.folder-underline { position: absolute; left: 0; right: 0; bottom: 0; height: 2px; border-radius: var(--radius-pill); background: var(--forest); transform-origin: left center; }
+/* 2. the adult braces page, as a small page in its window */
+.folder-page { overflow: hidden; border: var(--border-w) solid var(--border-quiet); border-radius: var(--radius-input); background: var(--surface-page); box-shadow: var(--shadow-1); }
+.folder-page-bar { display: flex; gap: var(--space-2); padding: var(--space-3) var(--space-4); background: var(--surface-panel); }
+.folder-page-bar i { width: 8px; height: 8px; border-radius: 50%; background: var(--fill-quiet); }
+.folder-page-body { display: grid; justify-items: start; gap: var(--space-3); padding: var(--space-5); }
+.folder-page-title { font-family: var(--font-display); font-size: var(--text-h2); line-height: 1.1; color: var(--forest); }
+.folder-page-button { padding: var(--space-2) var(--space-4); border-radius: var(--radius-pill); background: var(--forest); color: var(--cream); font-size: var(--text-label); font-weight: 600; }
+/* 3. the launch checklist: three rows, each ticked */
+.folder-checks li { display: grid; grid-template-columns: 20px minmax(0, 1fr); align-items: center; gap: var(--space-3); padding-block: var(--space-3); font-size: var(--text-body-m); line-height: 1.4; }
+.folder-checks .icon { color: var(--forest); }
+/* 4. the monthly report's work and next steps: two signed rows, then what comes next */
+.folder-work li { display: grid; grid-template-columns: 32px minmax(0, 1fr); align-items: start; gap: var(--space-3); padding: var(--space-3); border-radius: var(--radius-input); }
+.folder-work li + li { margin-top: var(--space-1); }
+.folder-disc.founder-art { position: static; width: 32px; height: 32px; transform: rotate(-90deg); }
+.folder-who { display: block; font-size: var(--text-label); font-weight: 600; line-height: 1.4; }
+.folder-work .signed-change { font-size: var(--text-body-m); line-height: 1.4; }
+.folder-next { border: var(--border-w) solid var(--border-quiet); }
+.folder-next .icon { justify-self: center; margin-top: 6px; color: var(--forest); }
+.folder-disclosure { padding: var(--space-4) 88px 0 0; border-top: var(--border-w) solid var(--border-quiet); font-size: var(--text-caption); line-height: 1.4; color: var(--text-muted); }
+
+/* under 1025px: a row of four steps (two by two on phones) over the sheet; each sheet opens with its stage's title */
+@media (max-width: 1024px) {
+  .folder.is-folder { grid-template-columns: minmax(0, 1fr); gap: var(--space-4); }
+  .folder-rail { grid-template-columns: repeat(4, minmax(0, 1fr)); gap: var(--space-2); }
+  .folder-tab { grid-template-columns: 28px minmax(0, 1fr); align-items: center; gap: var(--space-2); padding: var(--space-2) var(--space-3); }
+  .folder-tab .folder-num { width: 28px; height: 28px; font-size: 15px; }
+  .folder-tab-text { display: none; }
+  .folder-tab-short { display: block; }
+  .folder-progress { left: var(--space-3); right: var(--space-3); }
+  .folder-sheet { min-height: 0; }
+  .folder-sheet > .folder-panel { grid-template-rows: auto minmax(0, 1fr); gap: var(--space-3); }
+  .is-folder .folder-panel-head { position: static; width: auto; height: auto; overflow: visible; clip-path: none; white-space: normal; padding-inline: var(--space-1); }
+}
+@media (max-width: 640px) {
+  .folder { padding: var(--space-3); border-radius: var(--radius-card); }
+  .folder.is-folder { gap: var(--space-3); }
+  .folder-rail { grid-template-columns: repeat(2, minmax(0, 1fr)); }
+  .folder-panel { padding-left: 0; }
+  .folder-summary { gap: var(--space-3); padding-block: var(--space-4); }
+  .folder-tab { padding-inline: var(--space-2); }
+  .folder-doc { gap: var(--space-3); padding: var(--space-4); }
+  .folder-doc-head { padding-bottom: var(--space-3); }
+  .folder-doc-title { font-size: 24px; }
+  .folder-notes > div { grid-template-columns: minmax(0, 1fr); gap: 0; padding-block: var(--space-2); }
+  .folder-notes dd, .folder-checks li, .folder-work .signed-change { font-size: var(--text-body-s); }
+  .folder-checks li { padding-block: var(--space-2); }
+  .folder-page-body { gap: var(--space-2); padding: var(--space-3) var(--space-4) var(--space-4); }
+  .folder-page-title { font-size: 22px; }
+  .folder-page-bar { display: none; }
+  .folder-work li { padding: var(--space-1) var(--space-2); }
+  .folder-work li + li { margin-top: 0; }
+  .folder-stamp { right: var(--space-3); bottom: var(--space-3); }
+  .folder-sign > p { padding-right: 64px; }
+  .folder-stamp--large { width: 56px; height: 56px; }
+  .folder-disclosure { padding: var(--space-2) 72px 0 0; }
+  .folder + .cta-line { margin-top: var(--space-8); }
+}
 
 @media (max-width: 1024px) {
-  .service-row, .service-row--flip, .after-yes { grid-template-columns: minmax(0, 1fr); }
+  .service-row, .service-row--flip { grid-template-columns: minmax(0, 1fr); }
   .service-row--flip .service-row-copy { order: 0; }
   .service-rows { gap: var(--space-16); }
-  .after-yes-visual { position: static; }
+
 }
 @media (max-width: 640px) {
   .service-row-visual { min-height: 0; padding: var(--space-6) var(--space-4); border-radius: var(--radius-card); }
   .vignette .screen { --screen-pad: var(--space-5); }
   .signoff .stamp { right: -8px; width: 44px; height: 44px; margin-top: -20px; }
-  .yes-step { grid-template-columns: 52px minmax(0, 1fr); }
-  .month-report .report-stats { gap: var(--space-2); }
 }
 
 /* Placing: a sample panel settles 16px into place the first time it reaches the screen, always at full opacity, so
diff --git a/site/assets/site.js b/site/assets/site.js
index 1638770..b323e73 100644
--- a/site/assets/site.js
+++ b/site/assets/site.js
@@ -776,23 +776,6 @@
         hold(tl, cycle('meta', 'google', first + HOLD + REST));
         return tl;
       },
-      // the monthly report: a band walks to each signed change and the stamp is pressed on it
-      report: (el) => {
-        const items = el.querySelectorAll('[data-item]');
-        const stamps = el.querySelectorAll('.report-changes .stamp');
-        const hl = el.querySelector('[data-part="hl"]');
-        const box = (li) => ({ y: li.offsetTop, height: li.offsetHeight });
-        const tl = gsap.timeline({ paused: true, repeat: -1 });
-        tl.to(stamps, { autoAlpha: 0, duration: SLOW, ease: 'power2.in' }, 0)
-          .set(hl, box(items[0]), 0.3)
-          .to(hl, { autoAlpha: 1, duration: SLOW }, 0.5);
-        press(tl, stamps[0], 0.95);
-        tl.to(hl, { ...box(items[1]), duration: REST, ease: 'power3.out' }, 2.6);
-        press(tl, stamps[1], 3.1);
-        tl.to(hl, { autoAlpha: 0, duration: REST }, 3.8);
-        hold(tl, 4.4);
-        return tl;
-      },
       // patient follow-up (the add-ons deck's first card): the call is noted, the concierge's text goes out, the
       // consultation is booked in the practice's software, and it is signed by Follow-up
       follow: (el) => {
@@ -863,6 +846,279 @@
     });
   }
 
+  // ----- the practice folder (homepage "What happens after you say yes", [data-folder]; site.css "the practice folder") -----
+  // The markup is four native disclosures (details[name], the first open), so without this script every stage opens in
+  // place. This rebuilds them as a folder: a tablist of stages (button.folder-tab: number, title and line, a short
+  // title from data-short for narrow screens, and the progress line) beside one sheet holding every stage's panel in a
+  // single grid cell (so the sheet keeps the tallest one's height and nothing moves when the stage changes). The
+  // stage's title and line move from its summary to the top of its panel (shown below 1025px, kept for screen readers
+  // above). Tabs: click or tap, Left/Right/Up/Down, Home and End; the selected tab is the one tab stop.
+  // Motion, only with GSAP, while at least 35% of the folder is on screen and the tab is visible: the folder moves
+  // from stage to stage on its own, 1 to 4 and round again. The incoming sheet's work fades in (150ms out, 250ms in;
+  // the sheet's head and Sample chip stay put) and plays its one beat: the focus is underlined (Sales' notes), the
+  // page is placed (Web and SEO), the checklist is ticked row by row (Paid media), each signed row of the report is
+  // lit in turn; then the sign-off returns and the stamp is pressed (the same press as the signed samples). It rests
+  // (--hold-lower-third) while the active stage's progress line fills, then the next stage. The first stage, on first
+  // view, holds finished for --rest-bloom before its beat replays. Off screen or in a hidden tab it holds where it is.
+  // A click, tap or key on a stage (or keyboard focus arriving on one) stops the moving on for the rest of the visit:
+  // the chosen stage plays its beat once and rests. Paused animations stop on the current stage, finished; a later
+  // play starts that stage again. Under reduced motion nothing is built: stage 1, finished, and stages change at once.
+  // The static markup is every stage's finished state, so stopping only ever clears what the timeline set.
+  const folder = document.querySelector('[data-folder]');
+  if (folder && folder.querySelector('details.folder-stage')) {
+    const gsap = window.gsap;
+    const stages = [...folder.querySelectorAll(':scope > details.folder-stage')];
+    const rail = document.createElement('div');
+    rail.className = 'folder-rail';
+    rail.setAttribute('role', 'tablist');
+    rail.setAttribute('aria-label', 'Stages after you say yes');
+    const sheet = document.createElement('div');
+    sheet.className = 'folder-sheet';
+    const span = (cls, text) => { const s = document.createElement('span'); s.className = cls; if (text) s.textContent = text; return s; };
+    const tabs = [];
+    const bars = [];
+    const panels = stages.map((stage, i) => {
+      const summary = stage.querySelector('summary');
+      const panel = stage.querySelector('.folder-panel');
+      const title = summary.querySelector('.folder-title');
+      const line = summary.querySelector('.folder-line');
+      const id = 'folder-stage-' + (i + 1);
+      const tab = document.createElement('button');
+      tab.type = 'button';
+      tab.className = 'folder-tab';
+      tab.id = id + '-tab';
+      tab.setAttribute('role', 'tab');
+      tab.setAttribute('aria-controls', id);
+      const text = span('folder-tab-text');
+      text.append(span('folder-tab-title', title.textContent), span('folder-tab-line', line.textContent));
+      const bar = span('folder-progress');
+      bar.setAttribute('aria-hidden', 'true');
+      tab.append(summary.querySelector('.folder-num'), text, span('folder-tab-short', stage.dataset.short || title.textContent), bar);
+      const head = document.createElement('div');
+      head.className = 'folder-panel-head';
+      head.append(title, line);
+      panel.prepend(head);
+      panel.id = id;
+      panel.setAttribute('role', 'tabpanel');
+      panel.setAttribute('aria-labelledby', tab.id);
+      panel.tabIndex = 0;
+      tabs.push(tab);
+      bars.push(bar);
+      rail.append(tab);
+      sheet.append(panel);
+      return panel;
+    });
+    stages.forEach((stage) => stage.remove());
+    folder.append(rail, sheet);
+    folder.classList.add('is-folder');
+
+    let index = 0;
+    const mark = () => {
+      tabs.forEach((tab, i) => {
+        tab.setAttribute('aria-selected', String(i === index));
+        tab.tabIndex = i === index ? 0 : -1;
+      });
+      panels.forEach((panel, i) => panel.classList.toggle('is-current', i === index));
+    };
+    mark();
+
+    const token = (name) => getComputedStyle(root).getPropertyValue(name).trim();
+    const FAST = seconds('--dur-fast', 0.15);
+    const MED = seconds('--dur-med', 0.25);
+    const SLOW = seconds('--dur-slow', 0.4);
+    const REST = seconds('--rest-bloom', 0.6);
+    const HOLD = seconds('--hold-lower-third', 4);
+    const clear = (hex) => { const n = parseInt(hex.replace('#', ''), 16); return 'rgba(' + (n >> 16) + ', ' + ((n >> 8) & 255) + ', ' + (n & 255) + ', 0)'; };
+    const motionOK = () => Boolean(gsap) && !reduceMotion.matches && !motionPaused() && !document.hidden;
+    // the stamp, pressed on: the signed samples' press (down fast and a touch past, then settled; its tilt lives in CSS)
+    const press = (tl, stamp, at) => {
+      tl.fromTo(stamp, { autoAlpha: 0, scale: 1.7, rotation: -24 }, { autoAlpha: 0.9, scale: 0.93, rotation: 0, duration: MED, ease: 'power2.in', immediateRender: false }, at)
+        .to(stamp, { scale: 1, duration: MED * 0.8, ease: 'power2.out' }, at + MED);
+      return at + MED * 1.8;
+    };
+    // each stage's beat: what it hides before the beat (from, set at once or faded out over FAST) and the beat itself,
+    // which ends on the static markup's finished state and returns its end time
+    const BEATS = panels.map((panel) => {
+      const q = (sel) => [...panel.querySelectorAll(sel)];
+      const sign = q('.folder-sign');
+      const stamp = panel.querySelector('.folder-stamp');
+      const signIn = (tl, at) => { if (sign.length) tl.fromTo(sign, { autoAlpha: 0, y: 8 }, { autoAlpha: 1, y: 0, duration: MED, ease: 'power2.out', immediateRender: false }, at); return at + MED; };
+      const kind = panel.querySelector('.folder-doc').dataset.stage;
+      if (kind === 'notes') {
+        const line = panel.querySelector('[data-part="focus"]');
+        return {
+          from: [[line, { scaleX: 0 }], [sign, { autoAlpha: 0 }]],
+          play: (tl, at) => { tl.fromTo(line, { scaleX: 0 }, { scaleX: 1, duration: MED, ease: 'power2.out', immediateRender: false }, at); return signIn(tl, at + MED + FAST); },
+        };
+      }
+      if (kind === 'page') {
+        const page = panel.querySelector('[data-part="page"]');
+        return {
+          from: [[page, { autoAlpha: 0, y: 8 }], [sign, { autoAlpha: 0 }], [stamp, { autoAlpha: 0 }]],
+          play: (tl, at) => {
+            tl.fromTo(page, { autoAlpha: 0, y: 8 }, { autoAlpha: 1, y: 0, duration: SLOW, ease: 'power2.out', immediateRender: false }, at);
+            return press(tl, stamp, signIn(tl, at + SLOW + FAST));
+          },
+        };
+      }
+      if (kind === 'launch') {
+        const ticks = q('[data-part="check"] path');
+        const rows = q('[data-part="check"] > span:not(.sr-only)');
+        const lengths = ticks.map((t) => t.getTotalLength());
+        return {
+          from: [[ticks, { strokeDasharray: (i) => lengths[i], strokeDashoffset: (i) => lengths[i] }], [rows, { color: token('--text-muted') }], [sign, { autoAlpha: 0 }], [stamp, { autoAlpha: 0 }]],
+          play: (tl, at) => {
+            ticks.forEach((tick, i) => {
+              const t = at + i * (MED + FAST);
+              tl.fromTo(tick, { strokeDasharray: lengths[i], strokeDashoffset: lengths[i] }, { strokeDashoffset: 0, duration: MED, ease: 'power2.out', immediateRender: false }, t)
+                .fromTo(rows[i], { color: token('--text-muted') }, { color: token('--text-body'), duration: MED, ease: 'power2.out', immediateRender: false }, t);
+            });
+            return press(tl, stamp, signIn(tl, at + ticks.length * (MED + FAST)));
+          },
+        };
+      }
+      // the report: each signed row lit in turn (sage mist, forest on sage mist 7.55:1), then the stamp
+      const rowEls = q('[data-part="row"]');
+      const lit = token('--surface-panel');
+      return {
+        from: [[stamp, { autoAlpha: 0 }]],
+        play: (tl, at) => {
+          tl.fromTo(rowEls[0], { backgroundColor: clear(lit) }, { backgroundColor: lit, duration: SLOW, ease: 'power2.out', immediateRender: false }, at)
+            .to(rowEls[0], { backgroundColor: clear(lit), duration: SLOW, ease: 'power2.out' }, at + SLOW + REST)
+            .fromTo(rowEls[1], { backgroundColor: clear(lit) }, { backgroundColor: lit, duration: SLOW, ease: 'power2.out', immediateRender: false }, at + SLOW + REST)
+            .to(rowEls[1], { backgroundColor: clear(lit), duration: SLOW, ease: 'power2.out' }, at + 2 * SLOW + 2 * REST);
+          return press(tl, stamp, at + 2 * SLOW + 2 * REST);
+        },
+      };
+    });
+    // what fades when the stage changes: the outgoing sheet's work, and the incoming one's (its sign-off and stamp wait
+    // for the beat); the sheet itself, its practice line and its Sample chip stay put
+    const OUTGOING = '.folder-panel-head, .folder-doc-title, .folder-doc-body, .folder-sign, .folder-disclosure, .folder-stamp';
+    const INCOMING = '.folder-panel-head, .folder-doc-title, .folder-doc-body, .folder-disclosure';
+    const moves = (panel, sel) => [...panel.querySelectorAll(sel)];
+    const moved = panels.map((panel) => moves(panel, OUTGOING + ', [data-part]'));
+
+    let auto = true;
+    let live = false;
+    let fresh = true;
+    let run = null;
+    let swap = null;
+    // back to the markup: every sheet finished, no progress showing
+    const settle = () => {
+      if (run) run.kill();
+      if (swap) swap.kill();
+      run = null;
+      swap = null;
+      if (!gsap) return;
+      panels.forEach((panel) => panel.classList.remove('is-leaving'));
+      gsap.set([...panels, ...moved.flat(), ...bars, ...panels.flatMap((p) => moves(p, '[data-part="check"] path, [data-part="check"] > span'))], { clearProps: 'all' });
+    };
+    // one visit to the current stage: (on first view, hold it finished, then fade out what the beat brings back) the
+    // beat; then, while it moves on its own, the rest with the progress line filling, and the next stage
+    const visit = (first) => {
+      const beat = BEATS[index];
+      const tl = gsap.timeline({ paused: true });
+      let at = 0;
+      if (first) {
+        at = REST;
+        beat.from.forEach(([targets, vars]) => tl.to(targets, { ...vars, duration: FAST, ease: 'power2.in' }, at));
+        at += FAST;
+      } else {
+        at = FAST + MED;
+      }
+      const end = beat.play(tl, at) + (auto ? HOLD : 0);
+      if (auto) {
+        tl.fromTo(bars[index], { autoAlpha: 1, scaleX: 0 }, { scaleX: 1, duration: end, ease: 'none', immediateRender: false }, 0)
+          .call(() => go(index + 1, false), null, end);
+      }
+      run = tl;
+      tl.play();
+    };
+    // change stage: the outgoing sheet's work fades over FAST, the incoming one's (in its pre-beat state) over MED;
+    // without motion, at once
+    const go = (next, chosen) => {
+      next = (next + panels.length) % panels.length;
+      const from = index;
+      if (chosen) auto = false;
+      if (!motionOK()) {
+        settle();
+        index = next;
+        mark();
+        return;
+      }
+      if (run) run.kill();
+      if (swap) swap.progress(1).kill();
+      run = null;
+      gsap.set(bars, { clearProps: 'all' });
+      if (next !== from) {
+        index = next;
+        mark();
+        const leaving = panels[from];
+        const coming = panels[next];
+        // the outgoing sheet stays on top while its work fades, then drops away to the incoming one
+        leaving.classList.add('is-leaving');
+        gsap.set(moved[next], { clearProps: 'all' });
+        BEATS[next].from.forEach(([targets, vars]) => gsap.set(targets, vars));
+        const left = () => { leaving.classList.remove('is-leaving'); gsap.set(moved[from], { clearProps: 'all' }); };
+        swap = gsap.timeline({ onComplete: () => { swap = null; } })
+          .to(moves(leaving, OUTGOING), { autoAlpha: 0, duration: FAST, ease: 'power2.in' }, 0)
+          .fromTo(moves(coming, INCOMING), { autoAlpha: 0, y: 8 }, { autoAlpha: 1, y: 0, duration: MED, ease: 'power2.out' }, FAST)
+          .call(left, null, FAST);
+        visit(false);
+      } else {
+        settle(); // the stage already showing, chosen: it stays, finished
+      }
+    };
+    const sync = () => {
+      if (live && motionOK()) {
+        if (fresh) {
+          fresh = false;
+          if (auto) { settle(); visit(true); }
+        } else if (run) run.resume();
+        if (swap) swap.resume();
+      } else if (!document.hidden && !motionOK()) {
+        settle(); // paused by the visitor (or reduced motion switched on): this stage, finished; play starts it again
+        fresh = true;
+      } else {
+        if (run) run.pause(); // off screen or tab hidden: hold where it is
+        if (swap) swap.pause();
+      }
+    };
+
+    // the visitor takes over: any click, tap or key on a stage (or keyboard focus arriving on one)
+    const takeOver = () => {
+      if (!auto) return;
+      auto = false;
+      if (run) { settle(); fresh = false; }
+    };
+    rail.addEventListener('pointerdown', (e) => { if (e.target.closest('.folder-tab')) takeOver(); });
+    rail.addEventListener('focusin', (e) => { if (e.target.matches(':focus-visible')) takeOver(); });
+    rail.addEventListener('click', (e) => {
+      const tab = e.target.closest('.folder-tab');
+      if (!tab) return;
+      takeOver();
+      go(tabs.indexOf(tab), true);
+    });
+    rail.addEventListener('keydown', (e) => {
+      const keys = { ArrowRight: index + 1, ArrowDown: index + 1, ArrowLeft: index - 1, ArrowUp: index - 1, Home: 0, End: panels.length - 1 };
+      takeOver();
+      if (!(e.key in keys)) return;
+      e.preventDefault();
+      go(keys[e.key], true);
+      tabs[index].focus();
+    });
+
+    if (gsap && 'IntersectionObserver' in window) {
+      new IntersectionObserver(([entry]) => {
+        live = entry.isIntersecting;
+        sync();
+      }, { threshold: 0.35 }).observe(folder);
+      document.addEventListener('visibilitychange', sync);
+      root.addEventListener('rose:motion', sync);
+      reduceMotion.addEventListener('change', sync);
+    }
+  }
+
   // ----- the talking ring (homepage why-us band, [data-ring-talk]; site.css "the talking ring") -----
   // The discs arrive as links to /about#<id>. This turns them into toggle buttons in one toolbar (one tab stop; the
   // arrow keys, Home and End move round the ring in its clockwise order) and shows a founder in the ring's centre:
diff --git a/site/components.html b/site/components.html
index fb91a24..914db27 100644
--- a/site/components.html
+++ b/site/components.html
@@ -834,31 +834,78 @@
         </div>
 
         <div class="ref-item ref-item--wide">
-          <p class="ref-name" id="demo-after-yes">.after-yes (the homepage's "What happens after you say yes"): ol.yes-steps of four li.yes-step (span.step-num, then .yes-step-text with an h3.h3 and a p in label sage), worded as the onboarding steps on /services#after-yes, beside .after-yes-visual: the signed monthly report, .vignette[data-loop="report"] &gt; .screen.month-report (screen-head with the Sample chip, .report-stats in [n], then ul.report-changes of signed changes: the founder disc, the role in ink 600, the change with its one italic word in .signed-change, a result chip, and a stamp). The loop walks a band (.report-hl) to each change and presses its stamp. The report sits beside the steps and stays in view from 1025px; under it, one column. Two of the four steps shown here.</p>
-          <div class="after-yes">
-            <ol class="yes-steps">
-              <li class="yes-step"><span class="step-num" aria-hidden="true">01</span><div class="yes-step-text"><h3 class="h3">A first conversation.</h3><p>About your practice, your patients and what you've already tried.</p></div></li>
-              <li class="yes-step"><span class="step-num" aria-hidden="true">02</span><div class="yes-step-text"><h3 class="h3">Your website, built from your practice.</h3><p>Not a template. We also set up local SEO and keep your Google Business Profile current.</p></div></li>
-            </ol>
-            <div class="after-yes-visual">
-              <div class="vignette" data-loop="report" data-anim="none" role="img" aria-label="Sample: the [Month] report for [your practice name], with [n] new leads, [n] reached and [n] consults booked, and two signed changes, one by Paid media and one by Web and SEO.">
-                <div class="screen screen--raised month-report">
-                  <div class="screen-head"><span class="screen-title">[Month] report, [your practice name]</span><span class="chip chip--sample">Sample</span></div>
-                  <div class="report-stats">
-                    <div class="stat"><span class="stat-num">[n]</span><span class="stat-label">New leads</span></div>
-                    <div class="stat"><span class="stat-num">[n]</span><span class="stat-label">Reached</span></div>
-                    <div class="stat stat--key"><span class="stat-num">[n]</span><span class="stat-label">Consults booked</span></div>
+          <p class="ref-name" id="demo-after-yes">.folder, the practice folder (the homepage's "What happens after you say yes"): a field panel holding four stages, each one of the onboarding steps on /services#after-yes (its title and line, as written there) with the piece of work it hands over on a cream sheet (article.folder-doc: the practice in brackets, the sheet's name, the Sample chip, the work, the sign-off). 1, Sales' practice notes: two questions and the example focus, underlined, "Prepared by Sales", no stamp. 2, the adult braces page: a small page (title, line, its button), the signed change, "Signed by Web and SEO" and a 48px stamp. 3, the launch checklist: three ticked rows, "Ad accounts in your practice's name.", "Signed by Paid media" and a 48px stamp. 4, the monthly report's work and next steps: two signed rows (the founder disc, the role, the change with its italic words), the next step, the disclosure "Work excerpt only. Sample results are not shown." and a 64px stamp in the clear corner. In the markup each stage is details[name] (the first open; summary.folder-summary + .folder-panel), so without JavaScript each opens in place. site.js ("the practice folder") rebuilds it as a tablist of stages (.folder-rail &gt; button.folder-tab, the number in a disc filled forest when selected) beside one .folder-sheet holding every panel in one grid cell, so the sheet keeps the tallest stage's height and changing stage moves nothing. From 1025px: the rail on the left (number, title, line). Under it: four steps in a row (two by two under 641px) by number and data-short, and each sheet opens with its stage's title and line. While on screen it moves from stage 1 to 4 and round again: each sheet plays one beat (the focus underlined, the page placed, the boxes ticked, each signed row lit, then the stamp pressed), rests 4s, and a forest line along the active stage fills until the next. A click, tap or key on a stage stops that for the visit. Paused: the current stage, finished. Reduced motion: stage 1, finished, changes at once. Brackets only; no dates, no results.</p>
+          <div class="folder" data-folder data-anim="none">
+            <details class="folder-stage" name="demo-folder-stage" data-short="Conversation" open>
+              <summary class="folder-summary"><span class="folder-num" aria-hidden="true">01</span><span class="folder-head"><h3 class="folder-title">A first conversation.</h3><span class="folder-line">About your practice, your patients and what you've already tried.</span></span></summary>
+              <div class="folder-panel">
+                <article class="folder-doc" data-stage="notes" aria-label="Sample: practice notes, prepared by Sales">
+                  <div class="folder-doc-head"><div class="folder-doc-name"><span class="folder-doc-practice">[Your practice]</span><p class="folder-doc-title">Practice notes</p></div><span class="chip chip--sample">Sample</span></div>
+                  <div class="folder-doc-body">
+                    <dl class="folder-notes">
+                      <div><dt>We ask</dt><dd>Which patients are you hoping to reach?</dd></div>
+                      <div><dt>We ask</dt><dd>What have you already tried?</dd></div>
+                      <div class="is-key"><dt>Example focus</dt><dd><span class="folder-focus">Adult braces enquiries<span class="folder-underline" data-part="focus" aria-hidden="true"></span></span></dd></div>
+                    </dl>
+                  </div>
+                  <div class="folder-sign" data-part="sign"><p>Prepared by <em class="signature">Sales</em></p></div>
+                </article>
+              </div>
+            </details>
+            <details class="folder-stage" name="demo-folder-stage" data-short="Website">
+              <summary class="folder-summary"><span class="folder-num" aria-hidden="true">02</span><span class="folder-head"><h3 class="folder-title">Your website, built from your practice.</h3><span class="folder-line">Not a template. We also set up local SEO and keep your Google Business Profile current.</span></span></summary>
+              <div class="folder-panel">
+                <article class="folder-doc" data-stage="page" aria-label="Sample: the adult braces page, signed by Web and SEO">
+                  <div class="folder-doc-head"><div class="folder-doc-name"><span class="folder-doc-practice">[Your practice]</span><p class="folder-doc-title">Adult braces page</p></div><span class="chip chip--sample">Sample</span></div>
+                  <div class="folder-doc-body">
+                    <div class="folder-page" data-part="page">
+                      <div class="folder-page-bar" aria-hidden="true"><i></i><i></i><i></i></div>
+                      <div class="folder-page-body">
+                        <p class="folder-page-title">Adult braces in [your city]</p>
+                        <p>What to expect at your first visit, treatment questions, and how to request a consultation.</p>
+                        <span class="folder-page-button">Request a consultation</span>
+                      </div>
+                    </div>
                   </div>
-                  <div class="report-feed">
-                    <span class="report-hl" data-part="hl"></span>
-                    <ul class="report-changes">
-                      <li class="signed-change" data-item><svg class="signoff-disc founder-art" viewBox="-1 -1 2 2" focusable="false"><circle r="1"/><path d="M0.2621 -0.8819A0.92 0.92 0 1 0 0.2621 0.8819A0.8832 0.8832 0 1 1 0.2621 -0.8819Z"/></svg><div class="report-change"><span class="report-who">Paid media</span><p class="signed-change">Moved budget from Meta to the <em>braces</em> search campaign.</p><span class="chip">Google Ads</span></div><img class="stamp" src="/assets/img/stamp-signed.svg" alt="" width="52" height="52"></li>
-                      <li class="signed-change" data-item><svg class="signoff-disc founder-art" viewBox="-1 -1 2 2" focusable="false"><circle r="1"/><path d="M0.2621 -0.8819A0.92 0.92 0 1 0 0.2621 0.8819A0.8832 0.8832 0 1 1 0.2621 -0.8819Z"/></svg><div class="report-change"><span class="report-who">Web and SEO</span><p class="signed-change">Put your holiday hours on your <em>Google Business Profile</em>.</p><span class="chip">Local SEO</span></div><img class="stamp" src="/assets/img/stamp-signed.svg" alt="" width="52" height="52"></li>
+                  <div class="folder-sign" data-part="sign"><p class="signed-change">Built the page around adult patients' <em>questions</em>.</p><p>Signed by <em class="signature">Web and SEO</em></p></div>
+                  <img class="stamp folder-stamp" src="/assets/img/stamp-signed.svg" alt="" width="48" height="48">
+                </article>
+              </div>
+            </details>
+            <details class="folder-stage" name="demo-folder-stage" data-short="Ads go live">
+              <summary class="folder-summary"><span class="folder-num" aria-hidden="true">03</span><span class="folder-head"><h3 class="folder-title">Your ads go live.</h3><span class="folder-line">Google and Meta ads, run from ad accounts in your name.</span></span></summary>
+              <div class="folder-panel">
+                <article class="folder-doc" data-stage="launch" aria-label="Sample: the launch checklist, signed by Paid media">
+                  <div class="folder-doc-head"><div class="folder-doc-name"><span class="folder-doc-practice">[Your practice]</span><p class="folder-doc-title">Launch checklist</p></div><span class="chip chip--sample">Sample</span></div>
+                  <div class="folder-doc-body">
+                    <ul class="folder-checks">
+                      <li data-part="check"><svg class="icon" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><rect x="2.75" y="2.75" width="14.5" height="14.5" rx="4"/><path d="m6.5 10.2 2.4 2.4 4.6-5"/></svg><span>Google ad linked to the adult braces page</span><span class="sr-only">, done</span></li>
+                      <li data-part="check"><svg class="icon" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><rect x="2.75" y="2.75" width="14.5" height="14.5" rx="4"/><path d="m6.5 10.2 2.4 2.4 4.6-5"/></svg><span>Meta ad linked to the adult braces page</span><span class="sr-only">, done</span></li>
+                      <li data-part="check"><svg class="icon" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><rect x="2.75" y="2.75" width="14.5" height="14.5" rx="4"/><path d="m6.5 10.2 2.4 2.4 4.6-5"/></svg><span>Call and conversion tracking set up</span><span class="sr-only">, done</span></li>
                     </ul>
                   </div>
-                </div>
+                  <div class="folder-sign" data-part="sign"><p class="folder-sign-note">Ad accounts in your practice's name.</p><p>Signed by <em class="signature">Paid media</em></p></div>
+                  <img class="stamp folder-stamp" src="/assets/img/stamp-signed.svg" alt="" width="48" height="48">
+                </article>
               </div>
-            </div>
+            </details>
+            <details class="folder-stage" name="demo-folder-stage" data-short="Report">
+              <summary class="folder-summary"><span class="folder-num" aria-hidden="true">04</span><span class="folder-head"><h3 class="folder-title">Your first monthly report.</h3><span class="folder-line">What we did, what it brought in, and what we're changing next.</span></span></summary>
+              <div class="folder-panel">
+                <article class="folder-doc" data-stage="report" aria-label="Sample: the monthly report's work and next steps, signed by Web and SEO and by Paid media">
+                  <div class="folder-doc-head"><div class="folder-doc-name"><span class="folder-doc-practice">[Your practice]</span><p class="folder-doc-title">Work and next steps</p></div><span class="chip chip--sample">Sample</span></div>
+                  <div class="folder-doc-body">
+                    <ul class="folder-work">
+                      <li class="signed-change" data-part="row"><svg class="folder-disc founder-art" viewBox="-1 -1 2 2" aria-hidden="true" focusable="false"><circle r="1"/><path d="M0.2621 -0.8819A0.92 0.92 0 1 0 0.2621 0.8819A0.8832 0.8832 0 1 1 0.2621 -0.8819Z"/></svg><div><span class="folder-who">Web and SEO</span><p class="signed-change">Published the <em>adult braces</em> page.</p></div></li>
+                      <li class="signed-change" data-part="row"><svg class="folder-disc founder-art" viewBox="-1 -1 2 2" aria-hidden="true" focusable="false"><circle r="1"/><path d="M0.2621 -0.8819A0.92 0.92 0 1 0 0.2621 0.8819A0.8832 0.8832 0 1 1 0.2621 -0.8819Z"/></svg><div><span class="folder-who">Paid media</span><p class="signed-change">Matched the ads to the <em>adult braces</em> page.</p></div></li>
+                      <li class="folder-next"><svg class="icon" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><circle cx="10" cy="10" r="8.25"/><path d="M6 10h7.5M10.5 7l3 3-3 3"/></svg><div><span class="folder-who">Next</span><p>Review enquiries and booked consults with your team.</p></div></li>
+                    </ul>
+                  </div>
+                  <p class="folder-disclosure">Work excerpt only. Sample results are not shown.</p>
+                  <img class="stamp folder-stamp folder-stamp--large" src="/assets/img/stamp-signed.svg" alt="" width="64" height="64">
+                </article>
+              </div>
+            </details>
           </div>
         </div>
 
diff --git a/site/index.html b/site/index.html
index 291f6f1..97570bc 100644
--- a/site/index.html
+++ b/site/index.html
@@ -551,43 +551,94 @@ height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
     </div>
   </section>
 
-  <!-- 4. What happens after you say yes: four of the onboarding steps (worded as in /services#after-yes and /pricing) beside
-       the signed monthly report (.month-report, a signed sample: a band walks to each signed change and the stamp is pressed
-       on it). The full list, with the agreement and the terms, is on /services#after-yes. -->
+  <!-- 4. What happens after you say yes: the practice folder (site.css and site.js "the practice folder"). Four stages,
+       each one of the onboarding steps (worded as in /services#after-yes and /pricing), and in each the piece of work
+       that stage hands over: Sales' practice notes, the adult braces page Web and SEO built, Paid media's launch
+       checklist, and the first monthly report's work and next steps. In the markup each stage is a native disclosure
+       (details[name] > summary + .folder-panel), the first one open, so without JavaScript every stage opens in place.
+       site.js turns them into a stage rail (desktop) or a four-step selector (phones) beside one sheet that holds the
+       chosen stage's work, and moves through the stages on its own while the folder is on screen. Illustrative work,
+       not a client portal: brackets stand in for the practice, no dates, no results. The full list, with the
+       agreement and the terms, is on /services#after-yes. -->
   <section class="section" id="after-yes" aria-labelledby="after-yes-title">
     <div class="wrap">
       <div class="head-row reveal">
         <h2 class="display-l" id="after-yes-title">What happens after you say <em>yes</em><span class="sr-only"> to Rose Practice Solutions</span>.</h2>
         <p>The same steps for every practice on the Core Marketing Plan, with the same people at each one.</p>
       </div>
-      <div class="after-yes">
-        <ol class="yes-steps" data-anim="stagger">
-          <li class="yes-step"><span class="step-num" aria-hidden="true">01</span><div class="yes-step-text"><h3 class="h3">A first conversation.</h3><p>About your practice, your patients and what you've already tried.</p></div></li>
-          <li class="yes-step"><span class="step-num" aria-hidden="true">02</span><div class="yes-step-text"><h3 class="h3">Your website, built from your practice.</h3><p>Not a template. We also set up local SEO and keep your Google Business Profile current.</p></div></li>
-          <li class="yes-step"><span class="step-num" aria-hidden="true">03</span><div class="yes-step-text"><h3 class="h3">Your ads go live.</h3><p>Google and Meta ads, run from ad accounts in your name.</p></div></li>
-          <li class="yes-step"><span class="step-num" aria-hidden="true">04</span><div class="yes-step-text"><h3 class="h3">Your first monthly report.</h3><p>What we did, what it brought in, and what we're changing next.</p></div></li>
-        </ol>
-        <div class="after-yes-visual" data-place>
-          <div class="vignette" data-loop="report" data-anim="none" role="img" aria-label="Sample: the [Month] report for [your practice name], with [n] new leads, [n] reached and [n] consults booked, and two signed changes, one by Paid media and one by Web and SEO.">
-            <div class="screen screen--raised month-report">
-              <div class="screen-head"><span class="screen-title">[Month] report, [your practice name]</span><span class="chip chip--sample">Sample</span></div>
-              <div class="report-stats">
-                <div class="stat"><span class="stat-num">[n]</span><span class="stat-label">New leads</span></div>
-                <div class="stat"><span class="stat-num">[n]</span><span class="stat-label">Reached</span></div>
-                <div class="stat stat--key"><span class="stat-num">[n]</span><span class="stat-label">Consults booked</span></div>
+      <div class="folder" data-folder data-anim="none" data-place>
+        <details class="folder-stage" name="after-yes-stage" data-short="Conversation" open>
+          <summary class="folder-summary"><span class="folder-num" aria-hidden="true">01</span><span class="folder-head"><h3 class="folder-title">A first conversation.</h3><span class="folder-line">About your practice, your patients and what you've already tried.</span></span></summary>
+          <div class="folder-panel">
+            <article class="folder-doc" data-stage="notes" aria-label="Sample: practice notes, prepared by Sales">
+              <div class="folder-doc-head"><div class="folder-doc-name"><span class="folder-doc-practice">[Your practice]</span><p class="folder-doc-title">Practice notes</p></div><span class="chip chip--sample">Sample</span></div>
+              <div class="folder-doc-body">
+                <dl class="folder-notes">
+                  <div><dt>We ask</dt><dd>Which patients are you hoping to reach?</dd></div>
+                  <div><dt>We ask</dt><dd>What have you already tried?</dd></div>
+                  <div class="is-key"><dt>Example focus</dt><dd><span class="folder-focus">Adult braces enquiries<span class="folder-underline" data-part="focus" aria-hidden="true"></span></span></dd></div>
+                </dl>
+              </div>
+              <div class="folder-sign" data-part="sign"><p>Prepared by <em class="signature">Sales</em></p></div>
+            </article>
+          </div>
+        </details>
+        <details class="folder-stage" name="after-yes-stage" data-short="Website">
+          <summary class="folder-summary"><span class="folder-num" aria-hidden="true">02</span><span class="folder-head"><h3 class="folder-title">Your website, built from your practice.</h3><span class="folder-line">Not a template. We also set up local SEO and keep your Google Business Profile current.</span></span></summary>
+          <div class="folder-panel">
+            <article class="folder-doc" data-stage="page" aria-label="Sample: the adult braces page, signed by Web and SEO">
+              <div class="folder-doc-head"><div class="folder-doc-name"><span class="folder-doc-practice">[Your practice]</span><p class="folder-doc-title">Adult braces page</p></div><span class="chip chip--sample">Sample</span></div>
+              <div class="folder-doc-body">
+                <div class="folder-page" data-part="page">
+                  <div class="folder-page-bar" aria-hidden="true"><i></i><i></i><i></i></div>
+                  <div class="folder-page-body">
+                    <p class="folder-page-title">Adult braces in [your city]</p>
+                    <p>What to expect at your first visit, treatment questions, and how to request a consultation.</p>
+                    <span class="folder-page-button">Request a consultation</span>
+                  </div>
+                </div>
               </div>
-              <div class="report-feed">
-                <span class="report-hl" data-part="hl"></span>
-                <ul class="report-changes">
-                  <li class="signed-change" data-item><svg class="signoff-disc founder-art" viewBox="-1 -1 2 2" focusable="false"><circle r="1"/><path d="M0.2621 -0.8819A0.92 0.92 0 1 0 0.2621 0.8819A0.8832 0.8832 0 1 1 0.2621 -0.8819Z"/></svg><div class="report-change"><span class="report-who">Paid media</span><p class="signed-change">Moved budget from Meta to the <em>braces</em> search campaign.</p><span class="chip">Google Ads</span></div><img class="stamp" src="/assets/img/stamp-signed.svg" alt="" width="52" height="52"></li>
-                  <li class="signed-change" data-item><svg class="signoff-disc founder-art" viewBox="-1 -1 2 2" focusable="false"><circle r="1"/><path d="M0.2621 -0.8819A0.92 0.92 0 1 0 0.2621 0.8819A0.8832 0.8832 0 1 1 0.2621 -0.8819Z"/></svg><div class="report-change"><span class="report-who">Web and SEO</span><p class="signed-change">Put your holiday hours on your <em>Google Business Profile</em>.</p><span class="chip">Local SEO</span></div><img class="stamp" src="/assets/img/stamp-signed.svg" alt="" width="52" height="52"></li>
+              <div class="folder-sign" data-part="sign"><p class="signed-change">Built the page around adult patients' <em>questions</em>.</p><p>Signed by <em class="signature">Web and SEO</em></p></div>
+              <img class="stamp folder-stamp" src="/assets/img/stamp-signed.svg" alt="" width="48" height="48">
+            </article>
+          </div>
+        </details>
+        <details class="folder-stage" name="after-yes-stage" data-short="Ads go live">
+          <summary class="folder-summary"><span class="folder-num" aria-hidden="true">03</span><span class="folder-head"><h3 class="folder-title">Your ads go live.</h3><span class="folder-line">Google and Meta ads, run from ad accounts in your name.</span></span></summary>
+          <div class="folder-panel">
+            <article class="folder-doc" data-stage="launch" aria-label="Sample: the launch checklist, signed by Paid media">
+              <div class="folder-doc-head"><div class="folder-doc-name"><span class="folder-doc-practice">[Your practice]</span><p class="folder-doc-title">Launch checklist</p></div><span class="chip chip--sample">Sample</span></div>
+              <div class="folder-doc-body">
+                <ul class="folder-checks">
+                  <li data-part="check"><svg class="icon" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><rect x="2.75" y="2.75" width="14.5" height="14.5" rx="4"/><path d="m6.5 10.2 2.4 2.4 4.6-5"/></svg><span>Google ad linked to the adult braces page</span><span class="sr-only">, done</span></li>
+                  <li data-part="check"><svg class="icon" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><rect x="2.75" y="2.75" width="14.5" height="14.5" rx="4"/><path d="m6.5 10.2 2.4 2.4 4.6-5"/></svg><span>Meta ad linked to the adult braces page</span><span class="sr-only">, done</span></li>
+                  <li data-part="check"><svg class="icon" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><rect x="2.75" y="2.75" width="14.5" height="14.5" rx="4"/><path d="m6.5 10.2 2.4 2.4 4.6-5"/></svg><span>Call and conversion tracking set up</span><span class="sr-only">, done</span></li>
                 </ul>
               </div>
-            </div>
+              <div class="folder-sign" data-part="sign"><p class="folder-sign-note">Ad accounts in your practice's name.</p><p>Signed by <em class="signature">Paid media</em></p></div>
+              <img class="stamp folder-stamp" src="/assets/img/stamp-signed.svg" alt="" width="48" height="48">
+            </article>
           </div>
-        </div>
+        </details>
+        <details class="folder-stage" name="after-yes-stage" data-short="Report">
+          <summary class="folder-summary"><span class="folder-num" aria-hidden="true">04</span><span class="folder-head"><h3 class="folder-title">Your first monthly report.</h3><span class="folder-line">What we did, what it brought in, and what we're changing next.</span></span></summary>
+          <div class="folder-panel">
+            <article class="folder-doc" data-stage="report" aria-label="Sample: the monthly report's work and next steps, signed by Web and SEO and by Paid media">
+              <div class="folder-doc-head"><div class="folder-doc-name"><span class="folder-doc-practice">[Your practice]</span><p class="folder-doc-title">Work and next steps</p></div><span class="chip chip--sample">Sample</span></div>
+              <div class="folder-doc-body">
+                <ul class="folder-work">
+                  <li class="signed-change" data-part="row"><svg class="folder-disc founder-art" viewBox="-1 -1 2 2" aria-hidden="true" focusable="false"><circle r="1"/><path d="M0.2621 -0.8819A0.92 0.92 0 1 0 0.2621 0.8819A0.8832 0.8832 0 1 1 0.2621 -0.8819Z"/></svg><div><span class="folder-who">Web and SEO</span><p class="signed-change">Published the <em>adult braces</em> page.</p></div></li>
+                  <li class="signed-change" data-part="row"><svg class="folder-disc founder-art" viewBox="-1 -1 2 2" aria-hidden="true" focusable="false"><circle r="1"/><path d="M0.2621 -0.8819A0.92 0.92 0 1 0 0.2621 0.8819A0.8832 0.8832 0 1 1 0.2621 -0.8819Z"/></svg><div><span class="folder-who">Paid media</span><p class="signed-change">Matched the ads to the <em>adult braces</em> page.</p></div></li>
+                  <li class="folder-next"><svg class="icon" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><circle cx="10" cy="10" r="8.25"/><path d="M6 10h7.5M10.5 7l3 3-3 3"/></svg><div><span class="folder-who">Next</span><p>Review enquiries and booked consults with your team.</p></div></li>
+                </ul>
+              </div>
+              <p class="folder-disclosure">Work excerpt only. Sample results are not shown.</p>
+              <img class="stamp folder-stamp folder-stamp--large" src="/assets/img/stamp-signed.svg" alt="" width="64" height="64">
+            </article>
+          </div>
+        </details>
       </div>
-      <p class="cta-line">Every step, from the agreement to the first report. <a class="btn btn--secondary btn--small" href="/services#after-yes">See every step <svg class="arrow" viewBox="0 0 22 12" aria-hidden="true" focusable="false"><path d="M1 6h19M15 1l5 5-5 5"/></svg></a></p>
+      <p class="cta-line"><a class="btn btn--secondary btn--small" href="/services#after-yes">See every step <svg class="arrow" viewBox="0 0 22 12" aria-hidden="true" focusable="false"><path d="M1 6h19M15 1l5 5-5 5"/></svg></a></p>
     </div>
   </section>
 
```

</details>

## Round 4

### 9. Websites and SEO: the callout's arm reaches the result more slowly

**What and why.** Chris found the callout "a bit too snappy when the arm connects and points to the result". The connector used to wipe into view in one 0.4s move.

**Now** (site.js "signed samples", builder `'local-page'`), the arm draws in two eased phases after the note has landed:
1. It rises from the note up its left side: 0.55s, `sine.inOut`.
2. It reaches across to the result's title, slowing as it arrives: 0.8s, `power3.out`.

The signature and the panel stamp follow once the arm has arrived. That's 1.35s for the arm, where it used to be 0.4s. Pause, reduced motion and no-JS states are unchanged.

**Check:** watch the SEO sample. The line climbs from the note, then glides into the dot beside "Adult braces in [your city]".

**Files and lines** (after this change):

- `site/assets/site.js`: lines 692–704, 726–740

<details>
<summary>Exact diff for change 9</summary>

```diff
diff --git a/site/assets/site.js b/site/assets/site.js
index b323e73..0503967 100644
--- a/site/assets/site.js
+++ b/site/assets/site.js
@@ -692,8 +692,13 @@
         const FAST = sec('--dur-fast', 0.15);
         const fill = token('--fill-quiet');
         const mist = token('--sage-mist');
+        // the connector draws in two phases: up from the note (its left strip only), then out along the top to the
+        // title, slowing as it arrives, so the arm reads as reaching for the result rather than snapping to it
+        const armW = link.offsetWidth;
+        const armH = link.offsetHeight;
+        const hidden = 'inset(' + (armH + 8) + 'px ' + (armW - 14) + 'px -8px -8px)';
+        const risen = 'inset(-8px ' + (armW - 14) + 'px -8px -8px)';
         const drawn = 'inset(-8px -8px -8px -8px)';
-        const undrawn = 'inset(' + (link.offsetHeight + 8) + 'px -8px -8px -8px)';
         const tl = gsap.timeline({ paused: true, repeat: -1 });
         tl.to([note, link, stamp], { autoAlpha: 0, duration: FAST, ease: 'power2.in' }, REST)
           .set(marks, { autoAlpha: 0 }, REST + FAST)
@@ -721,12 +726,15 @@
           .to(load, { autoAlpha: 0, duration: FAST }, sent + FAST + SLOW);
         const placed = sent + FAST * 2 + MED;
         tl.fromTo(result, { autoAlpha: 0, y: 10 }, { autoAlpha: 1, y: 0, duration: SLOW, ease: 'power2.out', immediateRender: false }, placed)
-          // the note returns and its connector draws from it up to the title, then it is signed
-          .fromTo(note, { autoAlpha: 0, y: 8 }, { autoAlpha: 1, y: 0, duration: MED, ease: 'power2.out', immediateRender: false }, placed + SLOW)
-          .fromTo(link, { autoAlpha: 1, clipPath: undrawn }, { autoAlpha: 1, clipPath: drawn, duration: SLOW, ease: 'power2.out', immediateRender: false }, placed + SLOW)
-          .fromTo(marks, { autoAlpha: 0, y: 6 }, { autoAlpha: 1, y: 0, duration: MED, ease: 'power2.out', immediateRender: false }, placed + SLOW + MED);
-        press(tl, stamp, placed + SLOW * 2 + MED);
-        hold(tl, placed + SLOW * 2 + MED * 2.8);
+          // the note returns, then its connector rises from it and reaches across to the title; then it is signed
+          .fromTo(note, { autoAlpha: 0, y: 8 }, { autoAlpha: 1, y: 0, duration: MED, ease: 'power2.out', immediateRender: false }, placed + SLOW);
+        const reach = placed + SLOW + MED * 0.6;
+        const reached = reach + 0.55 + 0.8;
+        tl.fromTo(link, { autoAlpha: 1, clipPath: hidden }, { autoAlpha: 1, clipPath: risen, duration: 0.55, ease: 'sine.inOut', immediateRender: false }, reach)
+          .to(link, { clipPath: drawn, duration: 0.8, ease: 'power3.out' }, reach + 0.55)
+          .fromTo(marks, { autoAlpha: 0, y: 6 }, { autoAlpha: 1, y: 0, duration: MED, ease: 'power2.out', immediateRender: false }, reached - 0.1);
+        press(tl, stamp, reached + MED * 0.6);
+        hold(tl, reached + MED * 0.6 + 0.5);
         return tl;
       },
       // the consult is traced back to the ad that brought it: the record clears and a new consult is placed, the wire
```

</details>

### 10. Google and Meta ads: a shorter panel

**What and why.** Chris: the ads graphic was "too tall" (the panel was 724px at 1440, beside 525px for the SEO panel). It is now 586px at 1440. Nothing was removed; the copy is just tighter.
- **Ad copy:** both ads clamp their copy to two lines, as Google and Meta do with their own "See more".
- **Sitelinks:** the Google ad's two sitelinks sit on one line.
- **Meta creative:** its minimum height drops from 140px to 96px.
- **Consult record:** on a wide panel, "Consult booked", "[Name] Adult braces" and "[Time]" share one line, and the source box and sign-off are a little tighter.

Phones and narrow panels (the stacked layout) are unchanged.

**Check:** at 1440 the ads panel is about 586px tall. The wire still runs from the record up to the Google ad (or the Meta ad mid-loop).

**Files and lines** (after this change):

- `site/assets/site.css`: lines 1955–1996, 2003–2011, 2013–2018

<details>
<summary>Exact diff for change 10</summary>

```diff
diff --git a/site/assets/site.css b/site/assets/site.css
index cd2da1c..bfec570 100644
--- a/site/assets/site.css
+++ b/site/assets/site.css
@@ -1955,31 +1955,42 @@ h1 em, h2 em, h3 em, .tagline em, .signed-change em { color: var(--accent-italic
 .ads-call { display: inline-flex; align-items: center; gap: var(--space-1); margin-left: auto; padding: var(--space-1) var(--space-3); border: var(--border-w) solid var(--border-input); border-radius: var(--radius-pill); color: var(--forest); font-size: var(--text-caption); font-weight: 600; line-height: 1.4; }
 .ads-call .icon { width: 14px; height: 14px; }
 .ads-google-title { font-size: var(--text-body-m); font-weight: 500; line-height: 1.35; color: var(--forest); }
+/* Google's and Meta's own "See more" clamps: two lines of copy on every ad */
 .ads-google-text { color: var(--text-muted); }
+.ads-google-text, .ads-meta-text { display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; overflow: hidden; }
 /* the search it answers, and its sitelinks (desktop only: phones show the ad alone) */
 .ads-query { display: flex; align-items: center; gap: var(--space-2); margin-bottom: var(--space-1); padding: var(--space-2) var(--space-3); border: var(--border-w) solid var(--border-input); border-radius: var(--radius-pill); font-weight: 500; }
 .ads-query .icon { width: 16px; height: 16px; color: var(--text-muted); }
-.ads-sitelinks { display: grid; margin-top: var(--space-1); }
-.ads-sitelinks li { padding-block: var(--space-2); border-top: var(--border-w) solid var(--border-quiet); font-weight: 500; color: var(--forest); }
+.ads-sitelinks { display: flex; flex-wrap: wrap; gap: var(--space-1) var(--space-4); }
+.ads-sitelinks li { font-weight: 500; color: var(--forest); }
 .ads-meta { grid-template-rows: auto auto minmax(0, 1fr) auto; align-content: stretch; }
-.ads-meta-art { display: grid; align-content: end; align-self: stretch; min-height: 140px; margin-inline: calc(-1 * var(--space-4)); padding: var(--space-4); background: var(--surface-strong); color: var(--text-on-strong); font-family: var(--font-display); font-size: var(--text-h3); line-height: 1.1; text-wrap: balance; }
+.ads-meta-art { display: grid; align-content: end; align-self: stretch; min-height: 96px; margin-inline: calc(-1 * var(--space-4)); padding: var(--space-4); background: var(--surface-strong); color: var(--text-on-strong); font-family: var(--font-display); font-size: var(--text-h3); line-height: 1.1; text-wrap: balance; }
 .ads-meta-foot { display: flex; align-items: center; justify-content: space-between; gap: var(--space-2); margin: calc(-1 * var(--space-3)) calc(-1 * var(--space-4)) calc(-1 * var(--space-4)); padding: var(--space-3) var(--space-4); border-radius: 0 0 var(--radius-card) var(--radius-card); background: var(--surface-panel); }
 .ads-meta-headline { font-weight: 600; }
 .ads-meta-button { flex: none; padding: var(--space-1) var(--space-3); border-radius: var(--radius-input); background: var(--surface-page); font-size: var(--text-caption); font-weight: 600; line-height: 1.6; }
 /* the consult record: booked, who and for what, and where it came from */
-.ads-consult { position: relative; grid-column: 1 / -1; justify-self: end; display: grid; gap: var(--space-3); width: calc(100% - 128px); margin-top: var(--ads-band); padding: var(--space-4) var(--space-5); border: var(--border-w) solid var(--border-quiet); border-radius: var(--radius-card); background: var(--surface-page); box-shadow: var(--shadow-2); font-size: var(--text-body-s); line-height: 1.5; }
+.ads-consult { position: relative; grid-column: 1 / -1; justify-self: end; display: grid; gap: var(--space-2); width: calc(100% - 128px); margin-top: var(--ads-band); padding: var(--space-3) var(--space-5) var(--space-4); border: var(--border-w) solid var(--border-quiet); border-radius: var(--radius-card); background: var(--surface-page); box-shadow: var(--shadow-2); font-size: var(--text-body-s); line-height: 1.5; }
 .ads-consult-head { display: flex; align-items: center; gap: var(--space-2); font-weight: 600; }
 .ads-consult-head .lead-dot { flex: none; }
 .ads-consult-time { margin-left: auto; font-size: var(--text-label); color: var(--text-muted); font-variant-numeric: tabular-nums; }
 .ads-consult-who { display: flex; flex-wrap: wrap; align-items: baseline; gap: 0 var(--space-3); color: var(--text-muted); }
 .ads-consult-name { font-family: var(--font-display); font-size: var(--text-h3); line-height: 1.2; color: var(--text-body); }
 /* label sage on sage mist, 5.1:1 */
-.ads-consult-source { display: grid; grid-template-columns: auto minmax(0, 1fr); gap: var(--space-1) var(--space-4); padding: var(--space-3) var(--space-4); border-radius: var(--radius-input); background: var(--surface-panel); }
+.ads-consult-source { display: grid; grid-template-columns: auto minmax(0, 1fr); gap: 0 var(--space-4); padding: var(--space-2) var(--space-4); border-radius: var(--radius-input); background: var(--surface-panel); }
 .ads-consult-source dt { font-size: var(--text-label); font-weight: 600; line-height: 1.6; color: var(--text-muted); }
 .ads-consult-source dd { display: grid; font-weight: 600; }
 .ads-consult-source dd > span { grid-area: 1 / 1; }
 .ads-consult-source [data-src="meta"] { visibility: hidden; opacity: 0; }
-.ads-signoff { padding-right: 0; }
+.ads-signoff { padding-top: var(--space-3); padding-right: 0; }
+/* on a wide panel the record's first line carries all three facts: booked, who and what for, and when */
+@container ads-panel (min-width: 520px) {
+  .ads-ad { gap: var(--space-2); }
+  .ads-consult { grid-template-columns: auto minmax(0, 1fr); column-gap: var(--space-4); }
+  .ads-consult-head, .ads-consult-who { grid-row: 1; align-self: center; }
+  .ads-consult-who { grid-column: 2; padding-right: 56px; }
+  .ads-consult-time { position: absolute; top: var(--space-4); right: var(--space-5); }
+  .ads-consult-source, .ads-signoff { grid-column: 1 / -1; }
+}
 /* the wire: 2px forest segments under each ad, meeting above the record's centre. The record's centre sits 72px past
    the Google slot's right edge (it starts 128px in), which is 56px into the Meta slot. */
 .ads-wire { position: absolute; top: 100%; left: 0; right: 0; height: calc(var(--ads-band) / 2 + var(--space-2)); pointer-events: none; }
@@ -1992,10 +2003,9 @@ h1 em, h2 em, h3 em, .tagline em, .signed-change em { color: var(--accent-italic
 .ads-wire--land { top: auto; bottom: 100%; height: calc(var(--ads-band) / 2 + var(--space-2) + 2px); }
 .ads-wire--land i:nth-child(2), .ads-wire--pass { display: none; }
 /* Narrow panels (phones, and 1025-1150px): the two ads stacked and compact (no platform labels: each reads as its
-   platform; the Meta post as a card with its creative a small square beside the post text, Google's and Meta's own
-   "See more" clamps on the copy), then the record. The wire runs in a 20px lane down the left: out of the record's
-   head, up past the Meta ad, into the head of the ad it came from. The record's sign-off sits right (no disc), clear
-   of the stamp on the bottom-left. */
+   platform; the Meta post as a card with its creative a small square beside the post text), then the record. The
+   wire runs in a 20px lane down the left: out of the record's head, up past the Meta ad, into the head of the ad it
+   came from. The record's sign-off sits right (no disc), clear of the stamp on the bottom-left. */
 @container ads-panel (max-width: 519px) {
   .ads { --ads-hook: 26px; grid-template-columns: minmax(0, 1fr); gap: var(--space-2); padding-left: var(--space-5); }
   .ads-slot { gap: 0; }
@@ -2003,7 +2013,6 @@ h1 em, h2 em, h3 em, .tagline em, .signed-change em { color: var(--accent-italic
   .ads-ad { gap: var(--space-2); padding: var(--space-3); }
   .ads-mark { width: 28px; height: 28px; }
   .ads-query, .ads-sitelinks { display: none; }
-  .ads-google-text, .ads-meta-text { display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; overflow: hidden; }
   .ads-meta { grid-template-columns: 96px minmax(0, 1fr); grid-template-rows: auto auto 1fr; align-content: start; gap: var(--space-1) var(--space-3); }
   .ads-meta .ads-site { grid-column: 2; }
   .ads-meta .ads-mark { display: none; }
```

</details>

### 11. What happens after you say yes: four composed scenes

**What and why.** Chris: "The first conversation graphic sucks, it's not really representative of anything. In fact, all the graphics in this section 1-4 are pretty bad/minimal/incomplete. Could all be more higher-end and visually engaging." Each flat cream sheet is now a composed scene: two to four product surfaces overlapping on the folder's field panel, with depth from your shadow scale, and one authored beat each. Everything else about the folder stays as it was:
- your heading, intro, step titles and lines;
- the rail and the phone selector;
- auto-advance with its progress line, and stopping on interaction;
- pause, reduced motion and no-JS `<details>`;
- no layout shift between stages.

Each scene has a caption and Sample chip row, like the service samples.

**1. A first conversation** (Sales)
- **Surfaces:**
  - A video call, "First conversation", with a live dot and an illustrative 24:18.
  - Two tiles: Sales on forest with the founder disc and a speaking ring, and "[Your practice]" with a 1.5px practice icon.
  - A live caption strip and the call controls.
  - Behind it, the invitation: "Accepted", "[Date] · [Time] · Video call".
  - In front, Sales' call notes with your three topics: Your practice, Your patients, What you've already tried. It's prepared by *Sales*, with no stamp.
- **Beat:** Sales asks three questions as word-by-word captions, and each topic ticks as its question ends.

**2. Your website, built from your practice** (Web and SEO)
- **Surfaces:**
  - A browser at `[yourpractice].com/adult-braces` with a believable practice page: its navigation, "Adult braces in [your city]", "Request a consultation", "What to expect at your first visit" and "Questions adults ask".
  - The same page on a phone, with a sticky "Book a consult" bar.
  - A Google Business Profile-style card: a geometric map, "Orthodontist in [your city]", "Open · Closes [Time]", Directions / Call / Website, and an "Hours updated" chip. It's signed by *Web and SEO* and stamped.
- **Beat:** the page scrolls under its fixed navigation, the phone settles, and "Updating hours" ticks over to "Hours updated".

**3. Your ads go live** (Paid media)
- **Surfaces:**
  - A generic ads-manager panel, with no Google or Meta marks or colours: Campaigns, a [Your practice] account pill, and rows for "Adult braces · Search" and "Adult braces · Meta" with switches, status and [Budget]/day.
  - Call tracking and Conversion tracking, both "Set up".
  - An "Ad accounts in your practice's name / Owner: [Your practice]" badge with a 1.5px key.
  - Small previews of the two ads from the ads sample above.
  - It's signed by *Paid media* and stamped.
- **Beat:** the switches turn on, the status moves Draft, then In review, then Live, and tracking reads Set up.

**4. Your first monthly report** (Paid media and Web and SEO)
- **Surfaces:**
  - An email notification, "Your [Month] report is ready", from Rose Practice Solutions with the mark tile.
  - The report "[Month] report · [Your practice]" in your step's three parts:
    - **What we did:** two signed, stamped changes.
    - **What it brought in:** `[n]` New leads · `[n]` Reached · `[n]` Consults booked, with no chart.
    - **What we're changing next:** "A clear aligners page, with its own ads."
  - On desktop, one booked consult card beside it, traced to the Google Search ad.
- **Beat:** the notification lands, the report opens, and the changes are stamped in turn.

**Layout**
- **Wide (1280px desktops and up):** each scene has a 768×420 canvas with every surface.
- **Narrow (1025 to 1279px desktops, tablets, phones):** one main surface with a smaller one over its edge, up to 520px wide:
  - the call plus its notes;
  - the phone page plus the profile;
  - the ads account plus the ownership badge;
  - the report plus the email.
- **Phones:** the Sample chip moves beside the stage title.

**Height:** the section is 993px at 1440 (987 before) and 1,045px at 390 (992 before).

**Retired:** the old sheet classes (`.folder-doc*`, `.folder-notes`, `.folder-page*`, `.folder-checks`, `.folder-work`, and the rest), with no dead selectors left. `#demo-after-yes` on /components shows the new scenes.

**Check:** watch each stage at 1440 and at 390. Click a stage (it stops there), pause (it holds), and check that switching stages never moves the page.

**Files and lines** (after this change):

- `site/assets/site.css`: lines 2042–2074, 2094–2374, 2379–2384, 2389–2400
- `site/assets/site.js`: lines 862–887, 954–1163, 1180–1187, 1201–1211
- `site/components.html`: lines 834–1037
- `site/index.html`: lines 552–567, 572–770

<details>
<summary>Exact diff for change 11</summary>

```diff
diff --git a/site/assets/site.css b/site/assets/site.css
index bfec570..995321e 100644
--- a/site/assets/site.css
+++ b/site/assets/site.css
@@ -2042,24 +2042,33 @@ h1 em, h2 em, h3 em, .tagline em, .signed-change em { color: var(--accent-italic
 }
 
 /* ---------- the practice folder (homepage "What happens after you say yes") ---------- */
-/* The four stages after a practice says yes, each with the piece of work it hands over, filed in one folder: Sales'
-   practice notes, the adult braces page (signed by Web and SEO), the launch checklist (signed by Paid media) and the
-   monthly report's work and next steps (two signed rows). Illustrative work: a Sample chip on every sheet, brackets
-   for the practice.
+/* The four stages after a practice says yes, each with a scene of the work it hands over: the first call with Sales
+   (the call, its invitation behind, Sales' notes in front), the adult braces page and the Google Business Profile Web
+   and SEO set up (the page in a browser and on a phone, the profile), the ads account Paid media switches on (the
+   campaigns, the accounts in your name, the two ads) and the first monthly report (the email it arrives in, and the
+   report). Illustrative work: a Sample chip on every scene, brackets for the practice, the dates and the numbers.
    Markup (static, no JavaScript): .folder[data-folder] (a field panel) > details.folder-stage[name] ×4, the first open,
    each summary.folder-summary (span.folder-num + .folder-head (h3.folder-title + span.folder-line)) + .folder-panel
-   > article.folder-doc (.folder-doc-head (practice + Sample chip) + .folder-doc-body + the sign-off + img.folder-stamp).
+   > figure.folder-scene[role=img] (.folder-scene-top (caption + Sample chip) + .folder-canvas > two to four
+   .folder-surface, cream product surfaces on the field, the one at the back on --shadow-2, those in front on --shadow-3).
    site.js ("the practice folder") then adds .is-folder and rebuilds it as .folder-rail[role=tablist] of
    button.folder-tab (number, title and line on desktop, number and short title from data-short below 1025px, and a
    span.folder-progress) beside .folder-sheet, which holds every .folder-panel[role=tabpanel] in one grid cell: the
    sheet keeps the tallest stage's height, so changing stage never moves the page. Below 1025px each panel opens with
    its stage's title and line (.folder-panel-head, moved there from the summary; read-only on desktop).
+   Each scene is a container (folder-scene). From 768px wide (desktops from 1280px) its surfaces are composed on a
+   768 by 420 canvas, overlapping; narrower (smaller desktops, tablets, phones) each scene keeps one main surface and
+   one smaller one over its edge, in the flow, and the rest stay out (the invitation, the browser, the two ads, the consult).
    Motion (site.js): while the folder is on screen it moves from stage to stage on its own, 1 to 4 and round again;
-   each sheet plays its one beat (the focus underlined; the page placed; the checklist ticked; each signed row lit,
-   then the stamp pressed) and rests, and the active stage's progress line fills until the next. A click, tap or key
-   on a stage stops that for the visit. Paused animations: the current stage, finished. Reduced motion: stage 1,
-   finished, stages change at once. Static state (no JavaScript, reduced motion, paused): every sheet finished. */
-.folder { display: grid; grid-template-columns: minmax(0, 1fr); padding: var(--space-8); border-radius: var(--radius-panel); background: var(--surface-alt); }
+   each scene places its surfaces and plays its one beat (the call runs through Sales' three topics, each ticked as
+   its caption ends; the page scrolls, the phone settles, the profile's hours are updated; the two campaigns are
+   switched on and go from draft to in review to live, tracking is set up; the email lands, the report opens and each
+   signed row is stamped), then the sign-off and the stamp, and rests while the active stage's progress line fills.
+   A click, tap or key on a stage stops that for the visit. Paused animations: the current stage, finished. Reduced
+   motion: stage 1, finished, stages change at once. Static state (no JavaScript, reduced motion, paused): every scene
+   finished. */
+/* full width wherever it sits: its scenes are size containers, so they lend it no width of their own */
+.folder { display: grid; grid-template-columns: minmax(0, 1fr); width: 100%; padding: var(--space-8); border-radius: var(--radius-panel); background: var(--surface-alt); }
 /* a stage, as a disclosure (no JavaScript) */
 .folder-stage + .folder-stage { border-top: var(--border-w) solid var(--border-quiet); }
 .folder-summary { position: relative; display: grid; grid-template-columns: 36px minmax(0, 1fr); gap: var(--space-4); padding: var(--space-5) var(--space-10) var(--space-5) 0; cursor: pointer; list-style: none; }
@@ -2085,57 +2094,281 @@ h1 em, h2 em, h3 em, .tagline em, .signed-change em { color: var(--accent-italic
 .folder-tab-short { display: none; font-size: var(--text-body-s); font-weight: 600; line-height: 1.35; }
 /* the time to the next stage: a forest line along the active stage's foot, filled by site.js while the folder moves on its own */
 .folder-progress { position: absolute; left: var(--space-4); right: var(--space-4); bottom: 0; height: 2px; border-radius: var(--radius-pill); background: var(--forest); transform: scaleX(0); transform-origin: left center; visibility: hidden; }
-.folder-sheet { display: grid; grid-template-columns: minmax(0, 1fr); min-height: 430px; }
+.folder-sheet { display: grid; grid-template-columns: minmax(0, 1fr); }
 .folder-sheet > .folder-panel { grid-area: 1 / 1; padding: 0; }
 .folder-sheet > .folder-panel:not(.is-current, .is-leaving) { visibility: hidden; }
-/* while the stage changes, the outgoing sheet sits on top as its work fades, then drops away (site.js) */
+/* while the stage changes, the outgoing scene sits on top as its surfaces fade, then drops away (site.js) */
 .folder-sheet > .folder-panel.is-leaving { z-index: 1; }
 .folder-panel-head { display: grid; gap: var(--space-1); }
 .is-folder .folder-panel-head { position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); white-space: nowrap; }
 
-/* the sheet: one piece of work on cream paper, its foot kept clear for the stamp */
-.folder-doc { position: relative; display: grid; grid-template-rows: auto 1fr auto; gap: var(--space-5); padding: var(--space-6); border-radius: var(--radius-card); background: var(--surface-page); box-shadow: var(--shadow-2); font-size: var(--text-body-s); line-height: 1.5; }
-.folder-doc-head { display: flex; align-items: flex-start; justify-content: space-between; gap: var(--space-4); padding-bottom: var(--space-4); border-bottom: var(--border-w) solid var(--border-quiet); }
-.folder-doc-name { display: grid; gap: var(--space-1); }
-.folder-doc-practice { font-size: var(--text-label); font-weight: 600; line-height: 1.4; color: var(--text-muted); }
-.folder-doc-title { font-family: var(--font-display); font-size: var(--text-h2); line-height: 1.1; }
-.folder-doc-body { display: grid; align-content: start; gap: var(--space-4); }
-/* the sign-off: what was done, then "Signed by" and the role in deep rose (.signature, 8.43:1) */
-.folder-sign { display: grid; gap: var(--space-1); padding-top: var(--space-4); border-top: var(--border-w) solid var(--border-quiet); font-size: var(--text-label); font-weight: 600; line-height: 1.4; }
-/* the signature line keeps clear of the stamp */
-.folder-sign > p:last-child { padding-right: 72px; }
-.folder-sign .signed-change, .folder-sign-note { font-size: var(--text-body-s); font-weight: 400; }
-.folder-sign .signature { display: inline; margin-left: var(--space-1); font-size: 1.6em; line-height: 1; }
-.folder-stamp { position: absolute; right: var(--space-4); bottom: var(--space-4); width: 48px; height: 48px; }
-.folder-stamp--large { right: var(--space-3); bottom: var(--space-3); width: 64px; height: 64px; }
-
-/* 1. practice notes: what Sales asks, and the focus it leads to, underlined */
-.folder-notes > div { display: grid; grid-template-columns: 120px minmax(0, 1fr); gap: var(--space-4); padding-block: var(--space-3); }
-.folder-notes > div + div, .folder-checks li + li { border-top: var(--border-w) solid var(--border-quiet); }
-.folder-notes dt { font-size: var(--text-label); font-weight: 600; line-height: 1.6; color: var(--text-muted); }
-.folder-notes dd { font-size: var(--text-body-m); line-height: 1.4; }
-.folder-notes .is-key dd { font-weight: 600; color: var(--forest); }
-.folder-focus { position: relative; display: inline-block; padding-bottom: 3px; }
-.folder-underline { position: absolute; left: 0; right: 0; bottom: 0; height: 2px; border-radius: var(--radius-pill); background: var(--forest); transform-origin: left center; }
-/* 2. the adult braces page, as a small page in its window */
-.folder-page { overflow: hidden; border: var(--border-w) solid var(--border-quiet); border-radius: var(--radius-input); background: var(--surface-page); box-shadow: var(--shadow-1); }
-.folder-page-bar { display: flex; gap: var(--space-2); padding: var(--space-3) var(--space-4); background: var(--surface-panel); }
-.folder-page-bar i { width: 8px; height: 8px; border-radius: 50%; background: var(--fill-quiet); }
-.folder-page-body { display: grid; justify-items: start; gap: var(--space-3); padding: var(--space-5); }
-.folder-page-title { font-family: var(--font-display); font-size: var(--text-h2); line-height: 1.1; color: var(--forest); }
-.folder-page-button { padding: var(--space-2) var(--space-4); border-radius: var(--radius-pill); background: var(--forest); color: var(--cream); font-size: var(--text-label); font-weight: 600; }
-/* 3. the launch checklist: three rows, each ticked */
-.folder-checks li { display: grid; grid-template-columns: 20px minmax(0, 1fr); align-items: center; gap: var(--space-3); padding-block: var(--space-3); font-size: var(--text-body-m); line-height: 1.4; }
-.folder-checks .icon { color: var(--forest); }
-/* 4. the monthly report's work and next steps: two signed rows, then what comes next */
-.folder-work li { display: grid; grid-template-columns: 32px minmax(0, 1fr); align-items: start; gap: var(--space-3); padding: var(--space-3); border-radius: var(--radius-input); }
-.folder-work li + li { margin-top: var(--space-1); }
-.folder-disc.founder-art { position: static; width: 32px; height: 32px; transform: rotate(-90deg); }
-.folder-who { display: block; font-size: var(--text-label); font-weight: 600; line-height: 1.4; }
-.folder-work .signed-change { font-size: var(--text-body-m); line-height: 1.4; }
-.folder-next { border: var(--border-w) solid var(--border-quiet); }
-.folder-next .icon { justify-self: center; margin-top: 6px; color: var(--forest); }
-.folder-disclosure { padding: var(--space-4) 88px 0 0; border-top: var(--border-w) solid var(--border-quiet); font-size: var(--text-caption); line-height: 1.4; color: var(--text-muted); }
+/* the scene: its caption and Sample chip (forest on field 7.4:1), then the canvas of surfaces. Text on the surfaces:
+   ink on cream 13.78:1, label sage on cream 5.88:1, forest on sage mist 7.55:1, cream on forest 8.7:1. Under 768px the
+   scene is kept to 520px, centred. */
+.folder-scene { container: folder-scene / inline-size; display: grid; align-content: start; gap: var(--space-3); min-width: 0; margin: 0; }
+.folder-scene-top { display: flex; align-items: center; justify-content: space-between; gap: var(--space-3); }
+.folder-scene-top, .folder-canvas { width: 100%; max-width: 520px; margin-inline: auto; }
+.folder-scene-caption { font-size: var(--text-caption); font-weight: 500; line-height: 1.4; color: var(--forest); }
+.folder-canvas { position: relative; display: grid; grid-template-columns: minmax(0, 1fr); align-items: start; font-size: var(--text-body-s); line-height: 1.5; color: var(--text-body); }
+.folder-surface { position: relative; min-width: 0; border: var(--border-w) solid var(--border-quiet); border-radius: var(--radius-card); background: var(--surface-page); box-shadow: var(--shadow-2); }
+.folder-surface--front { z-index: 2; box-shadow: var(--shadow-3); }
+.folder-canvas .icon { width: 16px; height: 16px; }
+.folder-canvas .signoff { padding-top: var(--space-3); }
+.folder-canvas .signoff .signature { white-space: nowrap; }
+/* the stamp, overprinted on a surface's corner, clear of its text: bottom right, or top right over the profile's map */
+.folder-stamp { position: absolute; right: -12px; bottom: -12px; z-index: 3; width: 64px; height: 64px; }
+.folder-stamp--top { top: -12px; bottom: auto; }
+/* a part with its states stacked in one cell, the finished one showing (site.js swaps them) */
+.folder-caption-lines, .folder-update-text, .folder-status-text { display: grid; }
+.folder-caption-lines > span, .folder-update-text > span, .folder-status-text > span { grid-area: 1 / 1; }
+.folder-caption-lines > span:not(:last-child), .folder-update-text > span:first-child, .folder-status-text > span:not([data-state="live"]) { visibility: hidden; }
+
+/* 1. the first call: the invitation (wide only), the call, and Sales' notes over its corner */
+.folder-invite { display: none; gap: var(--space-2); padding: var(--space-4) var(--space-5); }
+.folder-invite-head { display: flex; align-items: center; gap: var(--space-2); font-size: var(--text-caption); font-weight: 600; line-height: 1.4; color: var(--text-muted); }
+.folder-invite-head .icon, .folder-invite-meta .icon { color: var(--forest); }
+.folder-invite-head .chip { margin-left: auto; }
+.folder-invite-title { font-size: var(--text-body-m); font-weight: 600; line-height: 1.35; }
+.folder-invite-meta { display: flex; align-items: center; gap: var(--space-2); font-size: var(--text-label); line-height: 1.5; color: var(--text-muted); }
+.folder-call { display: grid; overflow: hidden; }
+.folder-call-bar { display: grid; grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr); align-items: center; gap: var(--space-3); padding: var(--space-3) var(--space-4); border-bottom: var(--border-w) solid var(--border-quiet); background: var(--surface-panel); }
+.folder-call-name { font-size: var(--text-label); font-weight: 600; line-height: 1.4; white-space: nowrap; }
+.folder-call-time { justify-self: end; display: inline-flex; align-items: center; gap: var(--space-2); font-size: var(--text-caption); font-weight: 600; line-height: 1.4; color: var(--forest); font-variant-numeric: tabular-nums; }
+.folder-call-tiles { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: var(--space-2); padding: var(--space-3) var(--space-3) 0; }
+/* a participant: Sales on forest with the founder disc (ink and forest, as in the team band) and a ring while speaking */
+.folder-tile { position: relative; display: grid; place-items: center; height: 96px; border-radius: var(--radius-input); background: var(--surface-panel); }
+.folder-tile--sales { background: var(--surface-strong); color: var(--text-on-strong); }
+.folder-tile-face { position: relative; display: grid; place-items: center; width: 44px; height: 44px; margin-bottom: var(--space-4); }
+.folder-tile-disc.founder-art { position: static; width: 100%; height: 100%; transform: rotate(-90deg); }
+.folder-ring { position: absolute; inset: -6px; border: var(--border-w-strong) solid var(--outline-on-strong); border-radius: 50%; }
+.folder-tile-face--practice { border: var(--border-w) solid var(--border-input); border-radius: 50%; background: var(--surface-page); color: var(--forest); }
+.folder-canvas .folder-tile-face--practice .icon { width: 22px; height: 22px; }
+.folder-tile-name { position: absolute; left: var(--space-3); bottom: var(--space-2); display: inline-flex; align-items: center; gap: var(--space-1); max-width: calc(100% - var(--space-6)); font-size: var(--text-caption); font-weight: 600; line-height: 1.4; white-space: nowrap; }
+.folder-canvas .folder-tile-name .icon { width: 14px; height: 14px; }
+/* the live caption: one line, Sales' three questions stacked in it (site.js plays them in turn) */
+.folder-caption { display: flex; align-items: flex-start; gap: var(--space-2); margin: var(--space-2) var(--space-3) var(--space-3); padding: var(--space-2) var(--space-3); border-radius: var(--radius-input); background: var(--surface-panel); line-height: 1.45; }
+.folder-caption .icon { margin-top: 2px; color: var(--forest); }
+.folder-caption-who { flex: none; font-weight: 600; }
+.folder-caption-lines { min-width: 0; }
+.folder-call-controls { display: none; align-items: center; justify-content: center; gap: var(--space-2); padding: 0 var(--space-3) var(--space-3); }
+.folder-control { display: grid; place-items: center; width: 34px; height: 34px; border: var(--border-w) solid var(--border-quiet); border-radius: 50%; color: var(--forest); }
+.folder-control.is-on { border-color: var(--forest); background: var(--surface-strong); color: var(--text-on-strong); }
+.folder-control-leave { margin-left: var(--space-2); padding: 6px var(--space-3); border: var(--border-w) solid var(--border-input); border-radius: var(--radius-pill); font-size: var(--text-caption); font-weight: 600; line-height: 1.4; }
+.folder-notes { justify-self: end; display: grid; gap: var(--space-2); width: min(300px, 88%); margin-top: -12px; padding: var(--space-3) var(--space-4) var(--space-4); }
+.folder-notes-head { display: flex; align-items: center; gap: var(--space-2); padding-bottom: var(--space-2); border-bottom: var(--border-w) solid var(--border-quiet); font-weight: 600; line-height: 1.4; }
+.folder-notes-head .icon { color: var(--forest); }
+.folder-notes-meta { margin-left: auto; font-size: var(--text-caption); font-weight: 500; color: var(--text-muted); }
+.folder-topics { display: grid; gap: var(--space-2); }
+.folder-topics li { display: grid; grid-template-columns: 20px minmax(0, 1fr); gap: var(--space-3); }
+.folder-canvas .folder-topics .icon { width: 20px; height: 20px; color: var(--forest); }
+.folder-topic-name { display: block; font-weight: 600; line-height: 20px; }
+.folder-topic-line { display: none; font-size: var(--text-label); line-height: 1.45; color: var(--text-muted); }
+
+/* 2. the site: the adult braces page in a browser (wide only), the same page on a phone, the Google Business Profile.
+   Under 768px the phone and the profile share one cell, the profile over the phone's edge (a narrower canvas, so they
+   meet on wider screens too) */
+.folder-scene--site .folder-canvas { max-width: 430px; }
+.folder-browser { display: none; overflow: hidden; }
+.folder-browser-bar { display: flex; align-items: center; gap: var(--space-3); padding: var(--space-3) var(--space-4); border-bottom: var(--border-w) solid var(--border-quiet); background: var(--surface-panel); }
+.folder-browser-url { display: inline-flex; flex: 1; align-items: center; gap: var(--space-1); min-width: 0; padding: 2px var(--space-3); border-radius: var(--radius-pill); background: var(--surface-page); font-size: var(--text-caption); font-weight: 500; line-height: 1.6; color: var(--text-muted); }
+.folder-canvas .folder-browser-url .icon { width: 12px; height: 12px; }
+/* the page scrolls under its nav (site.js moves .folder-site) */
+.folder-browser-view { height: 318px; overflow: hidden; }
+.folder-browser-view > .folder-site-nav { position: relative; z-index: 1; background: var(--surface-page); }
+.folder-site { display: grid; }
+.folder-site-nav { display: flex; align-items: center; gap: var(--space-4); padding: var(--space-3) var(--space-5); border-bottom: var(--border-w) solid var(--border-quiet); }
+.folder-site-brand { font-family: var(--font-display); font-size: 18px; line-height: 1.1; white-space: nowrap; }
+.folder-site-links { display: flex; gap: var(--space-4); margin-left: auto; font-size: var(--text-caption); font-weight: 500; line-height: 1.4; color: var(--text-muted); }
+.folder-site-book { padding: var(--space-1) var(--space-3); border-radius: var(--radius-pill); background: var(--surface-strong); color: var(--text-on-strong); font-size: var(--text-caption); font-weight: 600; line-height: 1.5; }
+.folder-site-hero { display: grid; justify-items: start; gap: var(--space-3); max-width: 340px; padding: var(--space-6) var(--space-5) var(--space-5); }
+.folder-site-title { font-family: var(--font-display); font-size: 34px; line-height: 1.05; color: var(--forest); text-wrap: balance; }
+.folder-site-line { color: var(--text-muted); text-wrap: pretty; }
+.folder-site-actions { display: flex; align-items: center; gap: var(--space-4); margin-top: var(--space-1); }
+.folder-site-button { padding: var(--space-2) var(--space-4); border-radius: var(--radius-pill); background: var(--surface-strong); color: var(--text-on-strong); font-size: var(--text-label); font-weight: 600; line-height: 1.4; text-align: center; white-space: nowrap; }
+.folder-site-call { display: inline-flex; align-items: center; gap: var(--space-1); font-size: var(--text-label); font-weight: 600; line-height: 1.4; color: var(--forest); }
+.folder-site-part { display: grid; gap: var(--space-3); max-width: 320px; margin-inline: var(--space-5); padding-block: var(--space-5); border-top: var(--border-w) solid var(--border-quiet); }
+.folder-site-h { font-family: var(--font-display); font-size: 20px; line-height: 1.15; }
+.folder-site-steps { display: grid; gap: var(--space-2); }
+.folder-site-steps li { display: flex; align-items: flex-start; gap: var(--space-3); font-size: var(--text-label); line-height: 1.4; }
+.folder-site-steps span { display: grid; flex: none; place-items: center; width: 20px; height: 20px; border-radius: 50%; background: var(--surface-panel); color: var(--forest); font-family: var(--font-display); font-size: 14px; line-height: 1; }
+.folder-site-faq li { padding-block: var(--space-2); border-bottom: var(--border-w) solid var(--border-quiet); font-size: var(--text-label); font-weight: 600; line-height: 1.4; }
+/* the phone: an ink frame round a cream screen; the page runs on under its sticky booking bar */
+.folder-phone { position: relative; z-index: 1; grid-area: 1 / 1; justify-self: start; align-self: start; width: 50%; max-width: 212px; aspect-ratio: 1 / 2; padding: 6px; border-radius: var(--radius-panel); background: var(--ink); box-shadow: var(--shadow-3); }
+.folder-phone-screen { position: relative; display: grid; align-content: start; height: 100%; overflow: hidden; padding-top: var(--space-5); border-radius: var(--radius-card); background: var(--surface-page); }
+.folder-phone-notch { position: absolute; top: 7px; left: 50%; width: 40px; height: 10px; margin-left: -20px; border-radius: var(--radius-pill); background: var(--ink); }
+.folder-phone .folder-site-nav { justify-content: space-between; gap: var(--space-2); padding: var(--space-2) var(--space-3); }
+.folder-phone .folder-site-brand { font-size: 15px; }
+.folder-phone .folder-site-hero { gap: var(--space-2); padding: var(--space-4) var(--space-3) var(--space-3); }
+.folder-phone .folder-site-title { font-size: 22px; }
+.folder-phone .folder-site-part { gap: var(--space-2); margin-inline: var(--space-3); padding-block: var(--space-3); }
+.folder-phone .folder-site-h { font-size: 17px; }
+.folder-phone .folder-site-steps li { gap: var(--space-2); font-size: var(--text-body-s); }
+.folder-phone .folder-site-steps span { width: 18px; height: 18px; margin-top: 1px; font-size: 12px; }
+.folder-phone-bar { position: absolute; left: 0; right: 0; bottom: 0; display: flex; gap: var(--space-2); padding: var(--space-2) var(--space-2) var(--space-3); border-top: var(--border-w) solid var(--border-quiet); background: var(--surface-page); }
+.folder-phone-bar .folder-site-button { flex: 1; padding: var(--space-2); font-size: var(--text-caption); }
+.folder-phone-call { display: none; flex: none; place-items: center; width: 32px; border: var(--border-w) solid var(--border-input); border-radius: 50%; color: var(--forest); }
+.folder-canvas .folder-phone-call .icon { width: 14px; height: 14px; }
+.folder-profile { z-index: 2; grid-area: 1 / 1; justify-self: end; align-self: end; display: grid; width: 56%; max-width: 248px; }
+.folder-map { display: block; width: 100%; height: 56px; border-radius: var(--radius-card) var(--radius-card) 0 0; }
+.folder-map rect { fill: var(--surface-panel); }
+.folder-map-road { fill: none; stroke: var(--surface-page); stroke-width: 7; stroke-linecap: round; }
+.folder-map-road--minor { stroke-width: 3.5; }
+.folder-map-pin { fill: var(--forest); }
+.folder-map-dot { fill: var(--surface-page); }
+.folder-profile-body { display: grid; gap: 2px; padding: var(--space-3) var(--space-4) var(--space-4); }
+.folder-profile-name { font-size: var(--text-body-m); font-weight: 600; line-height: 1.35; }
+.folder-profile-kind, .folder-profile-open { font-size: var(--text-label); line-height: 1.45; color: var(--text-muted); }
+.folder-profile-open span { font-weight: 600; color: var(--forest); }
+.folder-profile-actions { display: flex; justify-content: space-between; gap: var(--space-2); margin-top: var(--space-3); }
+.folder-profile-actions li { display: grid; justify-items: center; gap: var(--space-1); font-size: var(--text-caption); font-weight: 600; line-height: 1.4; color: var(--forest); }
+.folder-profile-actions li > span { display: grid; place-items: center; width: 34px; height: 34px; border: var(--border-w) solid var(--border-input); border-radius: 50%; }
+/* the profile update: done, a forest chip (cream on forest 8.7:1); before, outlined, "Updating hours" */
+.folder-update { justify-self: start; display: inline-flex; align-items: center; gap: var(--space-1); margin-top: var(--space-3); padding: var(--space-1) var(--space-3) var(--space-1) var(--space-2); border: var(--border-w) solid var(--forest); border-radius: var(--radius-pill); background: var(--surface-strong); color: var(--text-on-strong); font-size: var(--text-caption); font-weight: 600; line-height: 1.4; }
+.folder-canvas .folder-update .icon { width: 14px; height: 14px; }
+.folder-profile .signoff { flex-wrap: nowrap; gap: var(--space-2) var(--space-3); margin-top: var(--space-3); padding-right: 0; }
+.folder-profile .signoff-who { min-width: 0; }
+
+/* 3. the ads account: the campaigns, the accounts in your name over its corner, the two ads beside it (wide only) */
+.folder-ads { grid-row: 2; display: grid; }
+.folder-ads-head { display: flex; align-items: center; gap: var(--space-3); padding: var(--space-4) var(--space-4) var(--space-3); }
+.folder-ads-title { font-size: var(--text-body-m); font-weight: 600; line-height: 1.35; }
+.folder-ads-account { display: inline-flex; align-items: center; gap: var(--space-1); min-width: 0; padding: 2px var(--space-3) 2px var(--space-2); border: var(--border-w) solid var(--border-quiet); border-radius: var(--radius-pill); font-size: var(--text-caption); font-weight: 600; line-height: 1.6; color: var(--text-muted); white-space: nowrap; }
+.folder-canvas .folder-ads-account .icon { width: 14px; height: 14px; color: var(--forest); }
+.folder-ads-cols, .folder-ads-rows li { display: grid; grid-template-columns: 32px minmax(0, 1fr) auto; align-items: center; gap: var(--space-3); padding: var(--space-3) var(--space-4); }
+.folder-ads-cols { display: none; padding-block: var(--space-2); border-block: var(--border-w) solid var(--border-quiet); background: var(--surface-panel); font-size: var(--text-caption); font-weight: 600; line-height: 1.4; color: var(--text-muted); }
+.folder-ads-rows { border-top: var(--border-w) solid var(--border-quiet); }
+.folder-ads-rows li + li { border-top: var(--border-w) solid var(--border-quiet); }
+.folder-ads-name { display: grid; font-weight: 600; line-height: 1.4; }
+.folder-ads-name span { font-size: var(--text-caption); font-weight: 500; color: var(--text-muted); }
+.folder-ads-budget { display: none; font-size: var(--text-label); color: var(--text-muted); font-variant-numeric: tabular-nums; }
+/* the switch: on, a forest track with the cream knob at the right; off (before the beat), sage with the knob left */
+.folder-switch { position: relative; width: 32px; height: 18px; border-radius: var(--radius-pill); background: var(--surface-strong); }
+.folder-switch > span { position: absolute; top: 2px; left: 2px; width: 14px; height: 14px; border-radius: 50%; background: var(--surface-page); box-shadow: var(--shadow-1); transform: translateX(14px); }
+/* the status: a dot and the word; live is forest (7.55:1 on cream), in review and draft label sage */
+.folder-status { display: inline-flex; align-items: center; gap: var(--space-2); font-size: var(--text-label); font-weight: 600; line-height: 1.4; color: var(--forest); white-space: nowrap; }
+.folder-status-dot { flex: none; width: 8px; height: 8px; border: var(--border-w) solid var(--forest); border-radius: 50%; background: var(--forest); }
+.folder-track { display: grid; gap: var(--space-2); margin: var(--space-1) var(--space-4) 0; padding: var(--space-3) var(--space-4); border-radius: var(--radius-input); background: var(--surface-panel); }
+.folder-track li { display: flex; align-items: center; gap: var(--space-2); font-size: var(--text-label); line-height: 1.4; }
+.folder-track li > .icon { color: var(--forest); }
+.folder-track-state { display: inline-flex; align-items: center; gap: 2px; margin-left: auto; font-weight: 600; color: var(--forest); }
+.folder-ads > .signoff { margin: var(--space-3) var(--space-4) var(--space-4); }
+.folder-owner { grid-row: 1; justify-self: end; display: flex; align-items: center; gap: var(--space-3); max-width: 92%; margin-bottom: -18px; padding: var(--space-3) var(--space-4) var(--space-3) var(--space-3); }
+.folder-owner-key { display: grid; flex: none; place-items: center; width: 32px; height: 32px; border-radius: 50%; background: var(--surface-strong); color: var(--text-on-strong); }
+.folder-owner-text { display: grid; font-size: var(--text-label); font-weight: 600; line-height: 1.4; }
+.folder-owner-text span { font-size: var(--text-caption); font-weight: 500; color: var(--text-muted); }
+.folder-preview { display: none; gap: var(--space-1); padding: var(--space-3) var(--space-4); font-size: var(--text-caption); line-height: 1.5; }
+.folder-preview-who { display: flex; align-items: center; gap: var(--space-2); color: var(--text-muted); }
+.folder-preview-who > span:first-child { font-weight: 600; color: var(--text-body); }
+.folder-preview-title { font-size: var(--text-body-s); font-weight: 600; line-height: 1.35; color: var(--forest); }
+.folder-preview-text { color: var(--text-muted); }
+.folder-preview--feed { overflow: hidden; gap: 0; padding: 0; }
+.folder-preview--feed .folder-preview-who { padding: var(--space-3); }
+.folder-preview-mark { flex: none; width: 24px; height: 24px; border-radius: 50%; background: var(--surface-strong); }
+.folder-preview-name { display: grid; font-weight: 600; line-height: 1.3; color: var(--text-body); }
+.folder-preview-name span { font-weight: 500; color: var(--text-muted); }
+.folder-preview-art { display: grid; align-content: end; min-height: 84px; padding: var(--space-3); background: var(--surface-strong); color: var(--text-on-strong); font-family: var(--font-display); font-size: 17px; line-height: 1.1; text-wrap: balance; }
+.folder-preview-foot { display: flex; align-items: center; justify-content: space-between; gap: var(--space-2); padding: var(--space-2) var(--space-3); background: var(--surface-panel); font-weight: 600; }
+.folder-preview-button { padding: 2px var(--space-2); border-radius: var(--radius-input); background: var(--surface-page); }
+
+/* 4. the report: the email it arrives in over its top corner; the report's three parts, its two changes each signed
+   and stamped; beside it (wide only) one of the consults it counts */
+.folder-report { grid-row: 2; display: grid; gap: var(--space-3); padding: var(--space-6) var(--space-4) var(--space-4); }
+.folder-report-head { display: flex; flex-wrap: wrap; align-items: baseline; gap: 0 var(--space-2); padding-bottom: var(--space-3); border-bottom: var(--border-w) solid var(--border-quiet); }
+.folder-report-title { font-family: var(--font-display); font-size: 26px; line-height: 1.1; }
+.folder-report-for { font-size: var(--text-label); line-height: 1.4; color: var(--text-muted); }
+.folder-report-part { display: grid; align-content: start; gap: var(--space-1); }
+.folder-report-h { font-size: var(--text-caption); font-weight: 600; line-height: 1.4; color: var(--text-muted); }
+.folder-report-work { display: grid; gap: var(--space-1); }
+.folder-report-work li { display: grid; grid-template-columns: minmax(0, 1fr) 36px; align-items: center; gap: var(--space-3); padding: 6px var(--space-2) 6px var(--space-3); border-radius: var(--radius-input); background: var(--surface-panel); }
+.folder-report-work .signoff-disc.founder-art { display: none; width: 28px; height: 28px; }
+.folder-report-change { display: grid; }
+.folder-report-who { font-size: var(--text-caption); font-weight: 600; line-height: 1.4; color: var(--text-muted); }
+.folder-report-change .signed-change { line-height: 1.4; }
+.folder-row-stamp { width: 36px; height: 36px; }
+.folder-report-stats { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: var(--space-2); }
+.folder-report-stats li { display: grid; align-content: start; gap: 2px; padding: 6px var(--space-3); border: var(--border-w) solid var(--border-quiet); border-radius: var(--radius-input); font-size: var(--text-caption); font-weight: 500; line-height: 1.35; }
+.folder-report-stats span { font-family: var(--font-display); font-size: 24px; line-height: 1.1; color: var(--forest); }
+.folder-report-next { display: flex; align-items: flex-start; gap: var(--space-2); }
+.folder-canvas .folder-report-next .icon { flex: none; width: 18px; height: 18px; margin-top: 1px; color: var(--forest); }
+.folder-mail { z-index: 3; grid-row: 1; justify-self: end; display: grid; gap: var(--space-2); width: min(300px, 90%); margin-bottom: -16px; padding: var(--space-3) var(--space-4); }
+.folder-mail-head { display: none; align-items: center; gap: var(--space-2); font-size: var(--text-caption); font-weight: 600; line-height: 1.4; color: var(--text-muted); }
+.folder-canvas .folder-mail-head .icon { width: 14px; height: 14px; color: var(--forest); }
+.folder-mail-head span { margin-left: auto; font-weight: 500; }
+.folder-mail-body { display: grid; grid-template-columns: 28px minmax(0, 1fr); align-items: center; gap: var(--space-3); }
+.folder-mail-body img { width: 28px; height: 28px; }
+.folder-mail-body p { display: grid; }
+.folder-mail-from { font-size: var(--text-caption); font-weight: 600; line-height: 1.4; color: var(--text-muted); }
+.folder-mail-subject { font-weight: 600; line-height: 1.4; }
+.folder-mail-preview { display: none; font-size: var(--text-label); line-height: 1.45; color: var(--text-muted); }
+.folder-consult { display: none; gap: var(--space-2); padding: var(--space-4); }
+.folder-consult-head { display: flex; align-items: center; gap: var(--space-2); font-weight: 600; line-height: 1.4; }
+.folder-consult-head span:last-child { margin-left: auto; font-size: var(--text-caption); color: var(--text-muted); }
+.folder-consult-who { display: flex; align-items: baseline; gap: var(--space-2); color: var(--text-muted); }
+.folder-consult-who span { font-family: var(--font-display); font-size: 24px; line-height: 1.1; color: var(--text-body); }
+.folder-consult-source { display: grid; grid-template-columns: auto minmax(0, 1fr); gap: 2px var(--space-3); padding: var(--space-2) var(--space-3); border-radius: var(--radius-input); background: var(--surface-panel); font-size: var(--text-caption); line-height: 1.5; }
+.folder-consult-source dt { color: var(--text-muted); }
+.folder-consult-source dd { font-weight: 600; }
+
+/* the composed scenes, from 768px wide: every surface placed on a 768 by 420 canvas (centred if there is more room) */
+@container folder-scene (min-width: 768px) {
+  .folder-scene-top { max-width: none; }
+  .folder-canvas, .folder-scene--site .folder-canvas { display: block; max-width: 768px; height: 420px; }
+  .folder-canvas > * { position: absolute; margin: 0; }
+  /* 1: the invitation at the back, top right; the call over its edge; the notes in front, bottom right */
+  .folder-invite { display: grid; top: 0; right: 0; width: 276px; padding-left: var(--space-8); }
+  .folder-call { top: 32px; left: 0; z-index: 1; width: 512px; box-shadow: var(--shadow-3); }
+  .folder-tile { height: 168px; }
+  .folder-tile-face { width: 68px; height: 68px; margin-bottom: 0; }
+  .folder-canvas .folder-tile-face--practice .icon { width: 28px; height: 28px; }
+  .folder-caption { margin-right: 60px; }
+  .folder-call-controls { display: flex; padding-right: 60px; }
+  .folder-notes { right: 0; bottom: 0; width: 300px; gap: var(--space-3); padding: var(--space-4) var(--space-5); }
+  .folder-notes-head { padding-bottom: var(--space-3); }
+  .folder-topics { gap: var(--space-3); }
+  .folder-topic-line { display: block; }
+  /* 2: the browser at the back; the profile over its right edge; the phone in front, over the browser's corner */
+  .folder-browser { display: block; top: 0; left: 0; width: 524px; }
+  .folder-phone { z-index: 3; top: 100px; left: 334px; width: 172px; max-width: none; height: 320px; aspect-ratio: auto; }
+  .folder-phone .folder-site-title { font-size: 21px; }
+  .folder-phone .folder-site-line, .folder-phone .folder-site-steps li { font-size: var(--text-caption); }
+  .folder-profile { top: 24px; right: 0; width: 256px; max-width: none; }
+  .folder-map { height: 72px; }
+  /* 3: the account at the back; the accounts in your name over its corner; the search ad and the feed ad beside it */
+  .folder-ads { top: 22px; left: 0; width: 532px; }
+  .folder-ads-head { padding-inline: var(--space-5); }
+  .folder-ads-cols { display: grid; }
+  .folder-ads-cols, .folder-ads-rows li { grid-template-columns: 36px minmax(0, 1fr) 96px 92px; padding-inline: var(--space-5) var(--space-6); }
+  .folder-ads-rows { border-top: 0; }
+  .folder-ads-budget { display: block; }
+  .folder-track { margin-inline: var(--space-5); }
+  .folder-ads > .signoff { margin: var(--space-4) var(--space-5); }
+  .folder-owner { top: 0; right: 0; width: 256px; max-width: none; }
+  .folder-preview { display: grid; }
+  .folder-preview--search { top: 92px; right: 28px; width: 228px; }
+  .folder-preview--feed { right: 0; bottom: 4px; width: 204px; }
+  /* 4: the report at the back; the email over its top right; the consult it counts over its lower right */
+  .folder-report { top: 12px; left: 0; width: 512px; gap: var(--space-3); padding: var(--space-5) var(--space-6); }
+  .folder-report-head { padding-bottom: var(--space-3); }
+  .folder-report-title { font-size: 30px; }
+  .folder-report-part { gap: var(--space-2); }
+  .folder-report-h { font-size: var(--text-label); }
+  .folder-report-work li { grid-template-columns: 28px minmax(0, 1fr) 36px; padding-block: var(--space-2); }
+  .folder-report-work .signoff-disc.founder-art { display: block; }
+  .folder-report-stats li { padding: var(--space-2) var(--space-3); font-size: var(--text-label); }
+  .folder-report-stats span { font-size: 28px; }
+  .folder-mail { top: 0; right: 0; width: 296px; gap: var(--space-3); padding: var(--space-3) var(--space-4) var(--space-4); }
+  .folder-mail-head { display: flex; }
+  .folder-mail-body { grid-template-columns: 32px minmax(0, 1fr); align-items: start; }
+  .folder-mail-body img { width: 32px; height: 32px; }
+  .folder-mail-preview { display: block; }
+  .folder-consult { display: grid; right: 0; bottom: 20px; width: 272px; }
+  .folder-phone-call { display: grid; }
+}
+/* the narrowest phones: the profile keeps two of its three actions */
+@container folder-scene (max-width: 310px) {
+  .folder-profile-actions li:nth-child(3) { display: none; }
+  .folder-profile-actions { justify-content: flex-start; gap: var(--space-5); }
+}
 
 /* under 1025px: a row of four steps (two by two on phones) over the sheet; each sheet opens with its stage's title */
 @media (max-width: 1024px) {
@@ -2146,7 +2379,6 @@ h1 em, h2 em, h3 em, .tagline em, .signed-change em { color: var(--accent-italic
   .folder-tab-text { display: none; }
   .folder-tab-short { display: block; }
   .folder-progress { left: var(--space-3); right: var(--space-3); }
-  .folder-sheet { min-height: 0; }
   .folder-sheet > .folder-panel { grid-template-rows: auto minmax(0, 1fr); gap: var(--space-3); }
   .is-folder .folder-panel-head { position: static; width: auto; height: auto; overflow: visible; clip-path: none; white-space: normal; padding-inline: var(--space-1); }
 }
@@ -2157,22 +2389,12 @@ h1 em, h2 em, h3 em, .tagline em, .signed-change em { color: var(--accent-italic
   .folder-panel { padding-left: 0; }
   .folder-summary { gap: var(--space-3); padding-block: var(--space-4); }
   .folder-tab { padding-inline: var(--space-2); }
-  .folder-doc { gap: var(--space-3); padding: var(--space-4); }
-  .folder-doc-head { padding-bottom: var(--space-3); }
-  .folder-doc-title { font-size: 24px; }
-  .folder-notes > div { grid-template-columns: minmax(0, 1fr); gap: 0; padding-block: var(--space-2); }
-  .folder-notes dd, .folder-checks li, .folder-work .signed-change { font-size: var(--text-body-s); }
-  .folder-checks li { padding-block: var(--space-2); }
-  .folder-page-body { gap: var(--space-2); padding: var(--space-3) var(--space-4) var(--space-4); }
-  .folder-page-title { font-size: 22px; }
-  .folder-page-bar { display: none; }
-  .folder-work li { padding: var(--space-1) var(--space-2); }
-  .folder-work li + li { margin-top: 0; }
-  .folder-stamp { right: var(--space-3); bottom: var(--space-3); }
-  .folder-sign > p { padding-right: 64px; }
-  .folder-stamp--large { width: 56px; height: 56px; }
-  .folder-disclosure { padding: var(--space-2) 72px 0 0; }
   .folder + .cta-line { margin-top: var(--space-8); }
+  /* the scene's Sample chip moves up beside the stage's title; its caption goes (the title says what it is) */
+  .folder-sheet > .folder-panel { position: relative; gap: var(--space-2); }
+  .is-folder .folder-scene-top { position: absolute; top: 0; right: var(--space-1); width: auto; }
+  .is-folder .folder-scene-caption { display: none; }
+  .is-folder .folder-panel-head .folder-title { padding-right: 76px; }
 }
 
 @media (max-width: 1024px) {
diff --git a/site/assets/site.js b/site/assets/site.js
index 0503967..a5ff59e 100644
--- a/site/assets/site.js
+++ b/site/assets/site.js
@@ -862,16 +862,26 @@
   // stage's title and line move from its summary to the top of its panel (shown below 1025px, kept for screen readers
   // above). Tabs: click or tap, Left/Right/Up/Down, Home and End; the selected tab is the one tab stop.
   // Motion, only with GSAP, while at least 35% of the folder is on screen and the tab is visible: the folder moves
-  // from stage to stage on its own, 1 to 4 and round again. The incoming sheet's work fades in (150ms out, 250ms in;
-  // the sheet's head and Sample chip stay put) and plays its one beat: the focus is underlined (Sales' notes), the
-  // page is placed (Web and SEO), the checklist is ticked row by row (Paid media), each signed row of the report is
-  // lit in turn; then the sign-off returns and the stamp is pressed (the same press as the signed samples). It rests
-  // (--hold-lower-third) while the active stage's progress line fills, then the next stage. The first stage, on first
-  // view, holds finished for --rest-bloom before its beat replays. Off screen or in a hidden tab it holds where it is.
-  // A click, tap or key on a stage (or keyboard focus arriving on one) stops the moving on for the rest of the visit:
-  // the chosen stage plays its beat once and rests. Paused animations stop on the current stage, finished; a later
-  // play starts that stage again. Under reduced motion nothing is built: stage 1, finished, and stages change at once.
-  // The static markup is every stage's finished state, so stopping only ever clears what the timeline set.
+  // from stage to stage on its own, 1 to 4 and round again. The outgoing scene fades (150ms), the incoming one's caption
+  // fades in (250ms; the Sample chip stays put), and its surfaces are placed (500ms, power3.out, a little apart) and it
+  // plays its one beat:
+  //   1, the call: the call runs (its clock time-lapses to the end), Sales asks the three questions in turn as live
+  //      captions (word by word, the speaking ring breathing), and each topic in Sales' notes is ticked as its question
+  //      ends; then "Prepared by Sales".
+  //   2, the site: the page scrolls down to its first-visit section and back up, the phone settles over the browser's
+  //      corner, then the profile's "Updating hours" becomes "Hours updated" (ticked); signed, stamped.
+  //   3, the ads: each campaign is switched on and goes from draft to in review to live, then call and conversion
+  //      tracking is set up, line by line; signed, stamped.
+  //   4, the report: the email lands, the report opens (unfolding from the top), each signed change appears and is
+  //      stamped in turn, then what it brought in (and, wide, the consult it counts) and what's next.
+  // On phones (and anywhere the scene is under 768px wide) the surfaces that stay out (the invitation, the browser,
+  // the two ads, the consult) are simply not seen. It rests (--hold-lower-third) while the active stage's progress
+  // line fills, then the next stage. The first stage, on first view, holds finished for --rest-bloom before its beat
+  // replays. Off screen or in a hidden tab it holds where it is. A click, tap or key on a stage (or keyboard focus
+  // arriving on one) stops the moving on for the rest of the visit: the chosen stage plays its beat once and rests.
+  // Paused animations stop on the current stage, finished; a later play starts that stage again. Under reduced motion
+  // nothing is built: stage 1, finished, and stages change at once. The static markup is every stage's finished
+  // state, so stopping only ever clears what the timeline set (and puts the call's clock back).
   const folder = document.querySelector('[data-folder]');
   if (folder && folder.querySelector('details.folder-stage')) {
     const gsap = window.gsap;
@@ -944,82 +954,210 @@
         .to(stamp, { scale: 1, duration: MED * 0.8, ease: 'power2.out' }, at + MED);
       return at + MED * 1.8;
     };
-    // each stage's beat: what it hides before the beat (from, set at once or faded out over FAST) and the beat itself,
-    // which ends on the static markup's finished state and returns its end time
+    const PLACE = 0.5;
+    // a surface placed: in from a short way off (16px down unless told otherwise), power3.out
+    const place = (tl, el, at, off) => { tl.fromTo(el, { autoAlpha: 0, x: 0, y: 16, ...off }, { autoAlpha: 1, x: 0, y: 0, duration: PLACE, ease: 'power3.out', immediateRender: false }, at); };
+    // a tick drawn on
+    const tick = (tl, path, at) => { const len = path.getTotalLength(); tl.fromTo(path, { strokeDasharray: len, strokeDashoffset: len }, { strokeDashoffset: 0, duration: MED, ease: 'power2.out', immediateRender: false }, at); };
+    const undrawn = (paths) => [paths, { strokeDasharray: (i, p) => p.getTotalLength(), strokeDashoffset: (i, p) => p.getTotalLength() }];
+    // a caption's words, each in its own span (the text stays the same)
+    const words = (el) => {
+      const list = el.textContent.trim().split(/\s+/);
+      el.textContent = '';
+      return list.map((word, i) => { const s = document.createElement('span'); s.textContent = word; el.append(s, i < list.length - 1 ? ' ' : ''); return s; });
+    };
+    const INK = token('--text-body');
+    const MUTED = token('--text-muted');
+    const FOREST = token('--forest');
+    const SAGE = token('--fill-quiet');
+    const CREAM = token('--surface-page');
+    const INPUT = token('--border-input');
+    // each scene's beat: what it hides or resets before the beat (from: set at once, or faded over FAST on first view),
+    // the beat itself, which ends on the static markup's finished state and returns its end time, and anything a stop
+    // has to put back that is not a style (reset)
     const BEATS = panels.map((panel) => {
       const q = (sel) => [...panel.querySelectorAll(sel)];
-      const sign = q('.folder-sign');
+      const part = (name) => panel.querySelector('[data-part="' + name + '"]');
+      const sign = part('sign');
       const stamp = panel.querySelector('.folder-stamp');
-      const signIn = (tl, at) => { if (sign.length) tl.fromTo(sign, { autoAlpha: 0, y: 8 }, { autoAlpha: 1, y: 0, duration: MED, ease: 'power2.out', immediateRender: false }, at); return at + MED; };
-      const kind = panel.querySelector('.folder-doc').dataset.stage;
-      if (kind === 'notes') {
-        const line = panel.querySelector('[data-part="focus"]');
+      const signIn = (tl, at) => { if (sign) tl.fromTo(sign, { autoAlpha: 0, y: 8 }, { autoAlpha: 1, y: 0, duration: MED, ease: 'power2.out', immediateRender: false }, at); return at + MED; };
+      const kind = panel.querySelector('.folder-scene').dataset.stage;
+      if (kind === 'call') {
+        const invite = part('invite');
+        const call = part('call');
+        const notes = part('notes');
+        const caps = q('[data-part="cap"]');
+        const said = caps.map(words);
+        const topics = q('[data-part="topic"]');
+        const ticks = topics.map((t) => t.querySelector('path'));
+        const names = topics.map((t) => t.querySelector('.folder-topic-name'));
+        const ring = part('ring');
+        const clock = part('clock');
+        const told = clock.textContent;
+        const length = told.split(':').reduce((m, s) => m * 60 + Number(s), 0);
+        const show = (s) => { s = Math.round(s); clock.textContent = String(Math.floor(s / 60)).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0'); };
+        const STEP = 1.35; // one question: its words, then its topic ticked
         return {
-          from: [[line, { scaleX: 0 }], [sign, { autoAlpha: 0 }]],
-          play: (tl, at) => { tl.fromTo(line, { scaleX: 0 }, { scaleX: 1, duration: MED, ease: 'power2.out', immediateRender: false }, at); return signIn(tl, at + MED + FAST); },
+          from: [[[invite, call, notes, sign, ...caps], { autoAlpha: 0 }], undrawn(ticks), [names, { color: MUTED }]],
+          reset: () => { clock.textContent = told; },
+          play: (tl, at) => {
+            place(tl, invite, at, { y: -12 });
+            place(tl, call, at + 0.1);
+            place(tl, notes, at + 0.25, { x: 16, y: 0 });
+            const talk = at + PLACE + 0.2;
+            const time = { s: 0 };
+            tl.fromTo(time, { s: 0 }, { s: length, duration: STEP * caps.length, ease: 'power1.inOut', immediateRender: false, onUpdate: () => show(time.s) }, talk);
+            caps.forEach((cap, i) => {
+              const at2 = talk + i * STEP;
+              if (i) tl.to(caps[i - 1], { autoAlpha: 0, duration: FAST, ease: 'power2.in' }, at2 - FAST);
+              tl.set(cap, { autoAlpha: 1 }, at2)
+                .fromTo(said[i], { autoAlpha: 0 }, { autoAlpha: 1, duration: FAST, stagger: 0.06, ease: 'none', immediateRender: false }, at2)
+                .fromTo(ring, { scale: 1, autoAlpha: 1 }, { scale: 1.12, autoAlpha: 0.35, duration: 0.4, ease: 'sine.inOut', yoyo: true, repeat: 1, immediateRender: false }, at2);
+              const covered = at2 + said[i].length * 0.06 + FAST;
+              tick(tl, ticks[i], covered);
+              tl.fromTo(names[i], { color: MUTED }, { color: INK, duration: MED, ease: 'power2.out', immediateRender: false }, covered);
+            });
+            return signIn(tl, talk + caps.length * STEP);
+          },
         };
       }
-      if (kind === 'page') {
-        const page = panel.querySelector('[data-part="page"]');
+      if (kind === 'site') {
+        const browser = part('browser');
+        const phone = part('phone');
+        const profile = part('profile');
+        const scroll = part('scroll');
+        const update = part('update');
+        const todo = part('update-todo');
+        const done = todo.nextElementSibling;
+        const mark = update.querySelector('path');
         return {
-          from: [[page, { autoAlpha: 0, y: 8 }], [sign, { autoAlpha: 0 }], [stamp, { autoAlpha: 0 }]],
+          from: [[[browser, phone, profile, sign, stamp, done], { autoAlpha: 0 }], [todo, { autoAlpha: 1 }], [update, { backgroundColor: CREAM, borderColor: INPUT, color: MUTED }], undrawn([mark])],
           play: (tl, at) => {
-            tl.fromTo(page, { autoAlpha: 0, y: 8 }, { autoAlpha: 1, y: 0, duration: SLOW, ease: 'power2.out', immediateRender: false }, at);
-            return press(tl, stamp, signIn(tl, at + SLOW + FAST));
+            let t = at;
+            if (browser.offsetWidth) {
+              // desktop: the browser and the profile, the page scrolled down and back while the phone settles on
+              place(tl, browser, t);
+              place(tl, profile, t + 0.15, { x: 16, y: 0 });
+              tl.fromTo(scroll, { y: 0 }, { y: -170, duration: 1.1, ease: 'power2.inOut', immediateRender: false }, t + 0.7)
+                .to(scroll, { y: 0, duration: 0.8, ease: 'power2.inOut' }, t + 2.3);
+              place(tl, phone, t + 1.2, { y: 40 });
+              t += 3.2;
+            } else {
+              place(tl, phone, t, { y: 24 });
+              place(tl, profile, t + 0.2, { x: 16, y: 0 });
+              t += PLACE + 0.6;
+            }
+            tl.fromTo(update, { backgroundColor: CREAM, borderColor: INPUT, color: MUTED }, { backgroundColor: FOREST, borderColor: FOREST, color: CREAM, duration: MED, ease: 'power2.out', immediateRender: false }, t)
+              .to(todo, { autoAlpha: 0, duration: FAST, ease: 'power2.in' }, t)
+              .fromTo(done, { autoAlpha: 0 }, { autoAlpha: 1, duration: MED, ease: 'power2.out', immediateRender: false }, t + FAST);
+            tick(tl, mark, t + FAST);
+            return press(tl, stamp, signIn(tl, t + MED + SLOW));
           },
         };
       }
-      if (kind === 'launch') {
-        const ticks = q('[data-part="check"] path');
-        const rows = q('[data-part="check"] > span:not(.sr-only)');
-        const lengths = ticks.map((t) => t.getTotalLength());
+      if (kind === 'ads') {
+        const manager = part('manager');
+        const owner = part('owner');
+        const previews = q('[data-part="preview"]');
+        const switches = q('[data-part="switch"]');
+        const knobs = switches.map((s) => s.querySelector('span'));
+        const statuses = q('[data-part="status"]');
+        const dots = statuses.map((s) => s.querySelector('.folder-status-dot'));
+        const state = (k) => statuses.map((s) => s.querySelector('[data-state="' + k + '"]'));
+        const drafts = state('draft');
+        const reviews = state('review');
+        const lives = state('live');
+        const tracked = q('[data-part="track"] .folder-track-state');
+        const marks = tracked.map((s) => s.querySelector('path'));
+        const SWITCH = 1.1; // one campaign: switched on, in review, live
         return {
-          from: [[ticks, { strokeDasharray: (i) => lengths[i], strokeDashoffset: (i) => lengths[i] }], [rows, { color: token('--text-muted') }], [sign, { autoAlpha: 0 }], [stamp, { autoAlpha: 0 }]],
+          from: [[[manager, owner, ...previews, sign, stamp, ...tracked, ...reviews, ...lives], { autoAlpha: 0 }], [drafts, { autoAlpha: 1 }], [switches, { backgroundColor: SAGE }], [knobs, { x: 0 }], [dots, { backgroundColor: clear(FOREST), borderColor: MUTED }], [statuses, { color: MUTED }], undrawn(marks)],
           play: (tl, at) => {
-            ticks.forEach((tick, i) => {
-              const t = at + i * (MED + FAST);
-              tl.fromTo(tick, { strokeDasharray: lengths[i], strokeDashoffset: lengths[i] }, { strokeDashoffset: 0, duration: MED, ease: 'power2.out', immediateRender: false }, t)
-                .fromTo(rows[i], { color: token('--text-muted') }, { color: token('--text-body'), duration: MED, ease: 'power2.out', immediateRender: false }, t);
+            place(tl, manager, at);
+            previews.forEach((p, i) => place(tl, p, at + 0.2 + i * 0.12, { x: 20, y: 0 }));
+            place(tl, owner, at + 0.45, { y: -10 });
+            const on = at + PLACE + 0.45;
+            statuses.forEach((status, i) => {
+              const c = on + i * SWITCH;
+              const live = c + 0.8;
+              tl.fromTo(switches[i], { backgroundColor: SAGE }, { backgroundColor: FOREST, duration: MED, ease: 'power2.out', immediateRender: false }, c)
+                .fromTo(knobs[i], { x: 0 }, { x: 14, duration: MED, ease: 'power2.out', immediateRender: false }, c)
+                .to(drafts[i], { autoAlpha: 0, duration: FAST, ease: 'power2.in' }, c + FAST)
+                .fromTo(reviews[i], { autoAlpha: 0 }, { autoAlpha: 1, duration: MED, ease: 'power2.out', immediateRender: false }, c + 2 * FAST)
+                .fromTo(dots[i], { backgroundColor: clear(FOREST), borderColor: MUTED }, { backgroundColor: SAGE, borderColor: SAGE, duration: MED, ease: 'power2.out', immediateRender: false }, c + 2 * FAST)
+                .to(reviews[i], { autoAlpha: 0, duration: FAST, ease: 'power2.in' }, live)
+                .fromTo(lives[i], { autoAlpha: 0 }, { autoAlpha: 1, duration: MED, ease: 'power2.out', immediateRender: false }, live + FAST)
+                .fromTo(dots[i], { backgroundColor: SAGE, borderColor: SAGE }, { backgroundColor: FOREST, borderColor: FOREST, duration: MED, ease: 'power2.out', immediateRender: false }, live + FAST)
+                .fromTo(status, { color: MUTED }, { color: FOREST, duration: MED, ease: 'power2.out', immediateRender: false }, live + FAST);
             });
-            return press(tl, stamp, signIn(tl, at + ticks.length * (MED + FAST)));
+            const track = on + statuses.length * SWITCH + 0.1;
+            tracked.forEach((s, i) => {
+              const t = track + i * 0.3;
+              tl.fromTo(s, { autoAlpha: 0, x: -4 }, { autoAlpha: 1, x: 0, duration: MED, ease: 'power2.out', immediateRender: false }, t);
+              tick(tl, marks[i], t + FAST);
+            });
+            return press(tl, stamp, signIn(tl, track + tracked.length * 0.3 + FAST));
           },
         };
       }
-      // the report: each signed row lit in turn (sage mist, forest on sage mist 7.55:1), then the stamp
-      const rowEls = q('[data-part="row"]');
-      const lit = token('--surface-panel');
+      // the report: the email lands, the report unfolds from its top, each change appears and is stamped, then what it
+      // brought in (and, wide, one of the consults it counts slides in beside it) and what's next
+      const mail = part('mail');
+      const report = part('report');
+      const consult = part('consult');
+      const rows = q('[data-part="row"]');
+      const rowStamps = rows.map((r) => r.querySelector('.folder-row-stamp'));
+      const stats = [...part('stats').children];
+      const next = part('next');
       return {
-        from: [[stamp, { autoAlpha: 0 }]],
+        from: [[[mail, report, consult, ...rows, ...rowStamps, ...stats, next], { autoAlpha: 0 }]],
         play: (tl, at) => {
-          tl.fromTo(rowEls[0], { backgroundColor: clear(lit) }, { backgroundColor: lit, duration: SLOW, ease: 'power2.out', immediateRender: false }, at)
-            .to(rowEls[0], { backgroundColor: clear(lit), duration: SLOW, ease: 'power2.out' }, at + SLOW + REST)
-            .fromTo(rowEls[1], { backgroundColor: clear(lit) }, { backgroundColor: lit, duration: SLOW, ease: 'power2.out', immediateRender: false }, at + SLOW + REST)
-            .to(rowEls[1], { backgroundColor: clear(lit), duration: SLOW, ease: 'power2.out' }, at + 2 * SLOW + 2 * REST);
-          return press(tl, stamp, at + 2 * SLOW + 2 * REST);
+          tl.fromTo(mail, { autoAlpha: 0, y: -20 }, { autoAlpha: 1, y: 0, duration: PLACE, ease: 'power3.out', immediateRender: false }, at);
+          const open = at + PLACE + 0.3;
+          tl.fromTo(report, { autoAlpha: 0, y: 16, clipPath: 'inset(0% 0% 100% 0% round 16px)' }, { autoAlpha: 1, y: 0, clipPath: 'inset(0% 0% 0% 0% round 16px)', duration: 0.6, ease: 'power3.out', immediateRender: false }, open)
+            .set(report, { clearProps: 'clipPath' }, open + 0.6);
+          let t = open + 0.6;
+          rows.forEach((row, i) => {
+            tl.fromTo(row, { autoAlpha: 0, y: 8 }, { autoAlpha: 1, y: 0, duration: MED, ease: 'power2.out', immediateRender: false }, t);
+            t = press(tl, rowStamps[i], t + MED + FAST) + 0.2;
+          });
+          stats.forEach((s, i) => tl.fromTo(s, { autoAlpha: 0, y: 8 }, { autoAlpha: 1, y: 0, duration: MED, ease: 'power2.out', immediateRender: false }, t + i * 0.12));
+          place(tl, consult, t + 0.2, { x: 20, y: 0 });
+          t += stats.length * 0.12 + MED + 0.2;
+          tl.fromTo(next, { autoAlpha: 0, x: -6 }, { autoAlpha: 1, x: 0, duration: MED, ease: 'power2.out', immediateRender: false }, t);
+          return t + MED;
         },
       };
     });
-    // what fades when the stage changes: the outgoing sheet's work, and the incoming one's (its sign-off and stamp wait
-    // for the beat); the sheet itself, its practice line and its Sample chip stay put
-    const OUTGOING = '.folder-panel-head, .folder-doc-title, .folder-doc-body, .folder-sign, .folder-disclosure, .folder-stamp';
-    const INCOMING = '.folder-panel-head, .folder-doc-title, .folder-doc-body, .folder-disclosure';
+    // what fades when the stage changes: the outgoing scene's surfaces, and the incoming one's caption and title (its
+    // surfaces wait for the beat); the Sample chip stays put. Everything a timeline may touch, per panel, so a stop can
+    // clear it all: every element outside the icons, and of the icons only the ticks' dashes (a full clear on an SVG
+    // element would also rewrite its transform).
+    const OUTGOING = '.folder-panel-head, .folder-scene-caption, .folder-canvas';
+    const INCOMING = '.folder-panel-head, .folder-scene-caption';
     const moves = (panel, sel) => [...panel.querySelectorAll(sel)];
-    const moved = panels.map((panel) => moves(panel, OUTGOING + ', [data-part]'));
+    const touched = panels.map((panel) => moves(panel, '*:not(svg *)'));
+    const ticked = panels.map((panel) => moves(panel, '[data-part="topic"] path, [data-part="update"] path, .folder-track-state path'));
+    const clean = (i) => {
+      gsap.set(touched[i], { clearProps: 'all' });
+      if (ticked[i].length) gsap.set(ticked[i], { clearProps: 'strokeDasharray,strokeDashoffset' });
+      if (BEATS[i].reset) BEATS[i].reset();
+    };
 
     let auto = true;
     let live = false;
     let fresh = true;
     let run = null;
     let swap = null;
-    // back to the markup: every sheet finished, no progress showing
+    // back to the markup: every scene finished, no progress showing
     const settle = () => {
       if (run) run.kill();
       if (swap) swap.kill();
       run = null;
       swap = null;
       if (!gsap) return;
-      panels.forEach((panel) => panel.classList.remove('is-leaving'));
-      gsap.set([...panels, ...moved.flat(), ...bars, ...panels.flatMap((p) => moves(p, '[data-part="check"] path, [data-part="check"] > span'))], { clearProps: 'all' });
+      panels.forEach((panel, i) => { panel.classList.remove('is-leaving'); clean(i); });
+      gsap.set([...panels, ...bars], { clearProps: 'all' });
     };
     // one visit to the current stage: (on first view, hold it finished, then fade out what the beat brings back) the
     // beat; then, while it moves on its own, the rest with the progress line filling, and the next stage
@@ -1042,8 +1180,8 @@
       run = tl;
       tl.play();
     };
-    // change stage: the outgoing sheet's work fades over FAST, the incoming one's (in its pre-beat state) over MED;
-    // without motion, at once
+    // change stage: the outgoing scene fades over FAST, the incoming one's caption and title over MED while its beat
+    // places its surfaces; without motion, at once
     const go = (next, chosen) => {
       next = (next + panels.length) % panels.length;
       const from = index;
@@ -1063,11 +1201,11 @@
         mark();
         const leaving = panels[from];
         const coming = panels[next];
-        // the outgoing sheet stays on top while its work fades, then drops away to the incoming one
+        // the outgoing scene stays on top while it fades, then drops away to the incoming one
         leaving.classList.add('is-leaving');
-        gsap.set(moved[next], { clearProps: 'all' });
+        clean(next);
         BEATS[next].from.forEach(([targets, vars]) => gsap.set(targets, vars));
-        const left = () => { leaving.classList.remove('is-leaving'); gsap.set(moved[from], { clearProps: 'all' }); };
+        const left = () => { leaving.classList.remove('is-leaving'); clean(from); };
         swap = gsap.timeline({ onComplete: () => { swap = null; } })
           .to(moves(leaving, OUTGOING), { autoAlpha: 0, duration: FAST, ease: 'power2.in' }, 0)
           .fromTo(moves(coming, INCOMING), { autoAlpha: 0, y: 8 }, { autoAlpha: 1, y: 0, duration: MED, ease: 'power2.out' }, FAST)
diff --git a/site/components.html b/site/components.html
index 914db27..e993c25 100644
--- a/site/components.html
+++ b/site/components.html
@@ -834,76 +834,204 @@
         </div>
 
         <div class="ref-item ref-item--wide">
-          <p class="ref-name" id="demo-after-yes">.folder, the practice folder (the homepage's "What happens after you say yes"): a field panel holding four stages, each one of the onboarding steps on /services#after-yes (its title and line, as written there) with the piece of work it hands over on a cream sheet (article.folder-doc: the practice in brackets, the sheet's name, the Sample chip, the work, the sign-off). 1, Sales' practice notes: two questions and the example focus, underlined, "Prepared by Sales", no stamp. 2, the adult braces page: a small page (title, line, its button), the signed change, "Signed by Web and SEO" and a 48px stamp. 3, the launch checklist: three ticked rows, "Ad accounts in your practice's name.", "Signed by Paid media" and a 48px stamp. 4, the monthly report's work and next steps: two signed rows (the founder disc, the role, the change with its italic words), the next step, the disclosure "Work excerpt only. Sample results are not shown." and a 64px stamp in the clear corner. In the markup each stage is details[name] (the first open; summary.folder-summary + .folder-panel), so without JavaScript each opens in place. site.js ("the practice folder") rebuilds it as a tablist of stages (.folder-rail &gt; button.folder-tab, the number in a disc filled forest when selected) beside one .folder-sheet holding every panel in one grid cell, so the sheet keeps the tallest stage's height and changing stage moves nothing. From 1025px: the rail on the left (number, title, line). Under it: four steps in a row (two by two under 641px) by number and data-short, and each sheet opens with its stage's title and line. While on screen it moves from stage 1 to 4 and round again: each sheet plays one beat (the focus underlined, the page placed, the boxes ticked, each signed row lit, then the stamp pressed), rests 4s, and a forest line along the active stage fills until the next. A click, tap or key on a stage stops that for the visit. Paused: the current stage, finished. Reduced motion: stage 1, finished, changes at once. Brackets only; no dates, no results.</p>
+          <p class="ref-name" id="demo-after-yes">.folder, the practice folder (the homepage's "What happens after you say yes"): a field panel holding four stages, each one of the onboarding steps on /services#after-yes (its title and line, as written there) with a composed scene of the work it hands over (figure.folder-scene[role=img]: a caption and the Sample chip over .folder-canvas, two to four cream .folder-surface layered with depth, the back one on --shadow-2, the ones in front on --shadow-3). 1, the first call: the video call (First conversation, its clock, Sales on forest with the founder disc and a speaking ring, [Your practice], the live caption, the controls), the invitation behind it ([Date] · [Time] · Video call, Accepted) and Sales' call notes in front, three topics ticked, "Prepared by Sales". 2, the site: the adult braces page in a browser (its nav, "Adult braces in [your city]", Request a consultation, what to expect at your first visit), the same page on a phone (an ink frame, a sticky booking bar) and the Google Business Profile (a map, Open, Directions, Call, Website, "Hours updated"), "Signed by Web and SEO", the stamp on the profile's top corner. 3, the ads account: two campaigns (switch, name, Draft / In review / Live with a forest dot, [Budget]/day), call and conversion tracking set up, "Signed by Paid media" and the stamp; over its corner "Ad accounts in your practice's name" (a key icon); beside it the search ad and the feed ad. 4, the report: the email it arrives in ("Your [Month] report is ready", from Rose), the [Month] report for [Your practice] (what we did: two signed changes, each stamped; what it brought in: [n] new leads, [n] reached, [n] consults booked; what we're changing next) and one consult it counts ([Name], Google Search ad). From 768px wide (a container query on the scene; desktops from 1280px) the surfaces are composed on a 768 by 420 canvas; narrower, each scene keeps one main surface and one over its edge, and the invitation, the browser, the two ads and the consult stay out. In the markup each stage is details[name] (the first open), so without JavaScript each opens in place. site.js ("the practice folder") rebuilds it as a tablist of stages beside one .folder-sheet holding every panel in one grid cell, so the sheet keeps the tallest stage's height and changing stage moves nothing; under 1025px four steps in a row (two by two under 641px, the Sample chip beside the stage's title). While on screen it moves from stage 1 to 4 and round again: each scene places its surfaces and plays one beat (the call's three questions captioned and ticked; the page scrolled and the phone settled, the hours updated; the campaigns switched on, draft to live, tracking set up; the email landing, the report opening, each change stamped), then signed and stamped, rests 4s, and a forest line along the active stage fills until the next. A click, tap or key on a stage stops that for the visit. Paused: the current stage, finished. Reduced motion: stage 1, finished, changes at once. Brackets only; no real dates, names or results.</p>
           <div class="folder" data-folder data-anim="none">
             <details class="folder-stage" name="demo-folder-stage" data-short="Conversation" open>
               <summary class="folder-summary"><span class="folder-num" aria-hidden="true">01</span><span class="folder-head"><h3 class="folder-title">A first conversation.</h3><span class="folder-line">About your practice, your patients and what you've already tried.</span></span></summary>
               <div class="folder-panel">
-                <article class="folder-doc" data-stage="notes" aria-label="Sample: practice notes, prepared by Sales">
-                  <div class="folder-doc-head"><div class="folder-doc-name"><span class="folder-doc-practice">[Your practice]</span><p class="folder-doc-title">Practice notes</p></div><span class="chip chip--sample">Sample</span></div>
-                  <div class="folder-doc-body">
-                    <dl class="folder-notes">
-                      <div><dt>We ask</dt><dd>Which patients are you hoping to reach?</dd></div>
-                      <div><dt>We ask</dt><dd>What have you already tried?</dd></div>
-                      <div class="is-key"><dt>Example focus</dt><dd><span class="folder-focus">Adult braces enquiries<span class="folder-underline" data-part="focus" aria-hidden="true"></span></span></dd></div>
-                    </dl>
+                <figure class="folder-scene folder-scene--call" data-stage="call" role="img" aria-label="Sample: the first conversation. A video call between Sales and [Your practice] with live captions; behind it the invitation, First conversation, [Date], [Time], video call; in front, Sales' call notes with each topic ticked as it is covered: your practice, your patients, and what you've already tried. Prepared by Sales.">
+                  <div class="folder-scene-top"><span class="folder-scene-caption">Illustrative first call</span><span class="chip chip--sample">Sample</span></div>
+                  <div class="folder-canvas">
+                    <div class="folder-surface folder-invite" data-part="invite">
+                      <p class="folder-invite-head"><svg class="icon" viewBox="0 0 20 20" focusable="false"><rect x="3" y="4.25" width="14" height="12.75" rx="2.5"/><path d="M3 8.25h14M7 2.75v3M13 2.75v3"/></svg>Invitation<span class="chip">Accepted</span></p>
+                      <p class="folder-invite-title">First conversation</p>
+                      <p class="folder-invite-meta"><svg class="icon" viewBox="0 0 20 20" focusable="false"><rect x="2.75" y="5.25" width="10.5" height="9.5" rx="2.5"/><path d="m13.25 9 4-2.5v7l-4-2.5"/></svg>[Date] · [Time] · Video call</p>
+                    </div>
+                    <div class="folder-surface folder-call" data-part="call">
+                      <div class="folder-call-bar"><span class="bar-dots"><i></i><i></i><i></i></span><span class="folder-call-name">First conversation</span><span class="folder-call-time"><span class="lead-dot"></span><span data-part="clock">24:18</span></span></div>
+                      <div class="folder-call-tiles">
+                        <div class="folder-tile folder-tile--sales on-strong">
+                          <span class="folder-tile-face"><span class="folder-ring" data-part="ring"></span><svg class="folder-tile-disc founder-art" viewBox="-1 -1 2 2" focusable="false"><circle r="1"/><path d="M0.2621 -0.8819A0.92 0.92 0 1 0 0.2621 0.8819A0.8832 0.8832 0 1 1 0.2621 -0.8819Z"/></svg></span>
+                          <span class="folder-tile-name"><svg class="icon" viewBox="0 0 20 20" focusable="false"><rect x="7.25" y="2.75" width="5.5" height="9" rx="2.75"/><path d="M4.75 9.5a5.25 5.25 0 0 0 10.5 0M10 14.75v2.5"/></svg>Sales</span>
+                        </div>
+                        <div class="folder-tile">
+                          <span class="folder-tile-face folder-tile-face--practice"><svg class="icon" viewBox="0 0 20 20" focusable="false"><path d="M3.75 17V6.75L10 3.25l6.25 3.5V17M2.75 17h14.5M8 17v-3.75h4V17M10 6.75v3.5M8.25 8.5h3.5"/></svg></span>
+                          <span class="folder-tile-name"><svg class="icon" viewBox="0 0 20 20" focusable="false"><rect x="7.25" y="2.75" width="5.5" height="9" rx="2.75"/><path d="M4.75 9.5a5.25 5.25 0 0 0 10.5 0M10 14.75v2.5"/></svg>[Your practice]</span>
+                        </div>
+                      </div>
+                      <p class="folder-caption"><svg class="icon" viewBox="0 0 20 20" focusable="false"><rect x="2.75" y="4.25" width="14.5" height="11.5" rx="2.5"/><path d="M8.75 8.6a2 2 0 1 0 0 2.8M14.25 8.6a2 2 0 1 0 0 2.8"/></svg><span class="folder-caption-who">Sales</span><span class="folder-caption-lines"><span data-part="cap">First, tell me about the practice and your team.</span><span data-part="cap">Which patients would you like to see more of?</span><span data-part="cap">And what have you already tried? Ads, an agency, anything.</span></span></p>
+                      <div class="folder-call-controls">
+                        <span class="folder-control"><svg class="icon" viewBox="0 0 20 20" focusable="false"><rect x="7.25" y="2.75" width="5.5" height="9" rx="2.75"/><path d="M4.75 9.5a5.25 5.25 0 0 0 10.5 0M10 14.75v2.5"/></svg></span>
+                        <span class="folder-control"><svg class="icon" viewBox="0 0 20 20" focusable="false"><rect x="2.75" y="5.25" width="10.5" height="9.5" rx="2.5"/><path d="m13.25 9 4-2.5v7l-4-2.5"/></svg></span>
+                        <span class="folder-control is-on"><svg class="icon" viewBox="0 0 20 20" focusable="false"><rect x="2.75" y="4.25" width="14.5" height="11.5" rx="2.5"/><path d="M8.75 8.6a2 2 0 1 0 0 2.8M14.25 8.6a2 2 0 1 0 0 2.8"/></svg></span>
+                        <span class="folder-control"><svg class="icon" viewBox="0 0 20 20" focusable="false"><rect x="2.75" y="3.75" width="14.5" height="10" rx="2"/><path d="M7 17h6M10 13.75V17"/></svg></span>
+                        <span class="folder-control-leave">Leave</span>
+                      </div>
+                    </div>
+                    <div class="folder-surface folder-surface--front folder-notes" data-part="notes">
+                      <p class="folder-notes-head"><svg class="icon" viewBox="0 0 20 20" focusable="false"><path d="M5.75 2.75h6l3.5 3.5v11h-9.5z"/><path d="M11.75 2.75v3.5h3.5M8.25 10.25h4.5M8.25 13.25h4.5"/></svg>Call notes<span class="folder-notes-meta">First conversation</span></p>
+                      <ul class="folder-topics">
+                        <li data-part="topic"><svg class="icon" viewBox="0 0 20 20" focusable="false"><rect x="2.75" y="2.75" width="14.5" height="14.5" rx="4"/><path d="m6.5 10.2 2.4 2.4 4.6-5"/></svg><span><span class="folder-topic-name">Your practice</span><span class="folder-topic-line">Locations, your team, how patients book</span></span></li>
+                        <li data-part="topic"><svg class="icon" viewBox="0 0 20 20" focusable="false"><rect x="2.75" y="2.75" width="14.5" height="14.5" rx="4"/><path d="m6.5 10.2 2.4 2.4 4.6-5"/></svg><span><span class="folder-topic-name">Your patients</span><span class="folder-topic-line">Who you'd like to see more of</span></span></li>
+                        <li data-part="topic"><svg class="icon" viewBox="0 0 20 20" focusable="false"><rect x="2.75" y="2.75" width="14.5" height="14.5" rx="4"/><path d="m6.5 10.2 2.4 2.4 4.6-5"/></svg><span><span class="folder-topic-name">What you've already tried</span><span class="folder-topic-line">Ads, agencies, what worked and what didn't</span></span></li>
+                      </ul>
+                      <div class="signoff" data-part="sign"><svg class="signoff-disc founder-art" viewBox="-1 -1 2 2" focusable="false"><circle r="1"/><path d="M0.2621 -0.8819A0.92 0.92 0 1 0 0.2621 0.8819A0.8832 0.8832 0 1 1 0.2621 -0.8819Z"/></svg><span class="signoff-who">Prepared by <em class="signature">Sales</em></span></div>
+                    </div>
                   </div>
-                  <div class="folder-sign" data-part="sign"><p>Prepared by <em class="signature">Sales</em></p></div>
-                </article>
+                </figure>
               </div>
             </details>
             <details class="folder-stage" name="demo-folder-stage" data-short="Website">
               <summary class="folder-summary"><span class="folder-num" aria-hidden="true">02</span><span class="folder-head"><h3 class="folder-title">Your website, built from your practice.</h3><span class="folder-line">Not a template. We also set up local SEO and keep your Google Business Profile current.</span></span></summary>
               <div class="folder-panel">
-                <article class="folder-doc" data-stage="page" aria-label="Sample: the adult braces page, signed by Web and SEO">
-                  <div class="folder-doc-head"><div class="folder-doc-name"><span class="folder-doc-practice">[Your practice]</span><p class="folder-doc-title">Adult braces page</p></div><span class="chip chip--sample">Sample</span></div>
-                  <div class="folder-doc-body">
-                    <div class="folder-page" data-part="page">
-                      <div class="folder-page-bar" aria-hidden="true"><i></i><i></i><i></i></div>
-                      <div class="folder-page-body">
-                        <p class="folder-page-title">Adult braces in [your city]</p>
-                        <p>What to expect at your first visit, treatment questions, and how to request a consultation.</p>
-                        <span class="folder-page-button">Request a consultation</span>
+                <figure class="folder-scene folder-scene--site" data-stage="site" role="img" aria-label="Sample: your website, built from your practice. The adult braces page for [Your practice] in a browser: Adult braces in [your city], Request a consultation, and what to expect at your first visit; the same page on a phone; and the practice's Google Business Profile, open, with Directions, Call and Website, its hours just updated. Signed by Web and SEO.">
+                  <div class="folder-scene-top"><span class="folder-scene-caption">Illustrative page and profile</span><span class="chip chip--sample">Sample</span></div>
+                  <div class="folder-canvas">
+                    <div class="folder-surface folder-browser" data-part="browser">
+                      <div class="folder-browser-bar"><span class="bar-dots"><i></i><i></i><i></i></span><span class="folder-browser-url"><svg class="icon" viewBox="0 0 20 20" focusable="false"><rect x="4.75" y="9" width="10.5" height="8" rx="2"/><path d="M7 9V6.75a3 3 0 0 1 6 0V9"/></svg>[yourpractice].com/adult-braces</span></div>
+                      <div class="folder-browser-view">
+                        <div class="folder-site-nav"><span class="folder-site-brand">[Your practice]</span><span class="folder-site-links"><span>Treatments</span><span>Your first visit</span><span>About</span></span><span class="folder-site-book">Book a consult</span></div>
+                        <div class="folder-site" data-part="scroll">
+                          <div class="folder-site-hero">
+                            <p class="folder-site-title">Adult braces in [your city]</p>
+                            <p class="folder-site-line">Braces and clear aligners for adults, planned around your work and your week.</p>
+                            <p class="folder-site-actions"><span class="folder-site-button">Request a consultation</span><span class="folder-site-call"><svg class="icon" viewBox="0 0 24 24" focusable="false"><path d="M6.5 4h3l1.5 4-2 1.5a11 11 0 0 0 5.5 5.5l1.5-2 4 1.5v3a2 2 0 0 1-2 2A15.5 15.5 0 0 1 4.5 6a2 2 0 0 1 2-2z"/></svg>Call us</span></p>
+                          </div>
+                          <div class="folder-site-part">
+                            <p class="folder-site-h">What to expect at your first visit</p>
+                            <ol class="folder-site-steps"><li><span>1</span>A look at your teeth and bite</li><li><span>2</span>Braces or clear aligners, explained</li><li><span>3</span>Your plan, timing and cost</li></ol>
+                          </div>
+                          <div class="folder-site-part">
+                            <p class="folder-site-h">Questions adults ask</p>
+                            <ul class="folder-site-faq"><li>Will people notice my braces?</li><li>How long does treatment take?</li></ul>
+                          </div>
+                        </div>
                       </div>
                     </div>
+                    <div class="folder-phone" data-part="phone">
+                      <div class="folder-phone-screen">
+                        <span class="folder-phone-notch"></span>
+                        <div class="folder-site-nav"><span class="folder-site-brand">[Your practice]</span><svg class="icon" viewBox="0 0 20 20" focusable="false"><path d="M3.5 6h13M3.5 10h13M3.5 14h13"/></svg></div>
+                        <div class="folder-site-hero">
+                          <p class="folder-site-title">Adult braces in [your city]</p>
+                          <p class="folder-site-line">Planned around your work and your week.</p>
+                        </div>
+                        <div class="folder-site-part">
+                          <p class="folder-site-h">Your first visit</p>
+                          <ol class="folder-site-steps"><li><span>1</span>A look at your teeth and bite</li><li><span>2</span>Braces or aligners, explained</li><li><span>3</span>Your plan, timing and cost</li></ol>
+                        </div>
+                        <p class="folder-phone-bar"><span class="folder-site-button">Book a consult</span><span class="folder-phone-call"><svg class="icon" viewBox="0 0 24 24" focusable="false"><path d="M6.5 4h3l1.5 4-2 1.5a11 11 0 0 0 5.5 5.5l1.5-2 4 1.5v3a2 2 0 0 1-2 2A15.5 15.5 0 0 1 4.5 6a2 2 0 0 1 2-2z"/></svg></span></p>
+                      </div>
+                    </div>
+                    <div class="folder-surface folder-surface--front folder-profile" data-part="profile">
+                      <svg class="folder-map" viewBox="0 0 264 76" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="264" height="76"/><path class="folder-map-road folder-map-road--minor" d="M-4 16 L270 28 M34 -4 L48 80 M190 -4 L176 80"/><path class="folder-map-road" d="M-4 54 C60 44 130 62 270 42 M98 -4 L116 80"/><path class="folder-map-pin" d="M146 40c-7-9-10-14-10-18a10 10 0 0 1 20 0c0 4-3 9-10 18z"/><circle class="folder-map-dot" cx="146" cy="22" r="3.5"/></svg>
+                      <div class="folder-profile-body">
+                        <p class="folder-profile-name">[Your practice]</p>
+                        <p class="folder-profile-kind">Orthodontist in [your city]</p>
+                        <p class="folder-profile-open"><span>Open</span> · Closes [Time]</p>
+                        <ul class="folder-profile-actions">
+                          <li><span><svg class="icon" viewBox="0 0 20 20" focusable="false"><path d="M10 2.75 17.25 10 10 17.25 2.75 10z"/><path d="M8 11.75v-2.5h4M10.75 7.75l1.5 1.5-1.5 1.5"/></svg></span>Directions</li>
+                          <li><span><svg class="icon" viewBox="0 0 24 24" focusable="false"><path d="M6.5 4h3l1.5 4-2 1.5a11 11 0 0 0 5.5 5.5l1.5-2 4 1.5v3a2 2 0 0 1-2 2A15.5 15.5 0 0 1 4.5 6a2 2 0 0 1 2-2z"/></svg></span>Call</li>
+                          <li><span><svg class="icon" viewBox="0 0 20 20" focusable="false"><circle cx="10" cy="10" r="7"/><path d="M3 10h14M10 3c-3.5 4-3.5 10 0 14M10 3c3.5 4 3.5 10 0 14"/></svg></span>Website</li>
+                        </ul>
+                        <p class="folder-update" data-part="update"><svg class="icon" viewBox="0 0 20 20" focusable="false"><path d="m5.75 10.25 2.75 2.75 5.75-6"/></svg><span class="folder-update-text"><span data-part="update-todo">Updating hours</span><span>Hours updated</span></span></p>
+                        <div class="signoff" data-part="sign"><svg class="signoff-disc founder-art" viewBox="-1 -1 2 2" focusable="false"><circle r="1"/><path d="M0.2621 -0.8819A0.92 0.92 0 1 0 0.2621 0.8819A0.8832 0.8832 0 1 1 0.2621 -0.8819Z"/></svg><span class="signoff-who">Signed by <em class="signature">Web and SEO</em></span></div>
+                      </div>
+                      <img class="stamp folder-stamp folder-stamp--top" src="/assets/img/stamp-signed.svg" alt="" width="64" height="64">
+                    </div>
                   </div>
-                  <div class="folder-sign" data-part="sign"><p class="signed-change">Built the page around adult patients' <em>questions</em>.</p><p>Signed by <em class="signature">Web and SEO</em></p></div>
-                  <img class="stamp folder-stamp" src="/assets/img/stamp-signed.svg" alt="" width="48" height="48">
-                </article>
+                </figure>
               </div>
             </details>
             <details class="folder-stage" name="demo-folder-stage" data-short="Ads go live">
               <summary class="folder-summary"><span class="folder-num" aria-hidden="true">03</span><span class="folder-head"><h3 class="folder-title">Your ads go live.</h3><span class="folder-line">Google and Meta ads, run from ad accounts in your name.</span></span></summary>
               <div class="folder-panel">
-                <article class="folder-doc" data-stage="launch" aria-label="Sample: the launch checklist, signed by Paid media">
-                  <div class="folder-doc-head"><div class="folder-doc-name"><span class="folder-doc-practice">[Your practice]</span><p class="folder-doc-title">Launch checklist</p></div><span class="chip chip--sample">Sample</span></div>
-                  <div class="folder-doc-body">
-                    <ul class="folder-checks">
-                      <li data-part="check"><svg class="icon" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><rect x="2.75" y="2.75" width="14.5" height="14.5" rx="4"/><path d="m6.5 10.2 2.4 2.4 4.6-5"/></svg><span>Google ad linked to the adult braces page</span><span class="sr-only">, done</span></li>
-                      <li data-part="check"><svg class="icon" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><rect x="2.75" y="2.75" width="14.5" height="14.5" rx="4"/><path d="m6.5 10.2 2.4 2.4 4.6-5"/></svg><span>Meta ad linked to the adult braces page</span><span class="sr-only">, done</span></li>
-                      <li data-part="check"><svg class="icon" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><rect x="2.75" y="2.75" width="14.5" height="14.5" rx="4"/><path d="m6.5 10.2 2.4 2.4 4.6-5"/></svg><span>Call and conversion tracking set up</span><span class="sr-only">, done</span></li>
-                    </ul>
+                <figure class="folder-scene folder-scene--ads" data-stage="ads" role="img" aria-label="Sample: your ads go live. The ads account for [Your practice], in your practice's name: two campaigns, Adult braces on Search and Adult braces on Meta, each switched on and moved from draft to in review to live; call and conversion tracking set up; beside it, the search ad and the feed ad. Signed by Paid media.">
+                  <div class="folder-scene-top"><span class="folder-scene-caption">Illustrative ads account</span><span class="chip chip--sample">Sample</span></div>
+                  <div class="folder-canvas">
+                    <div class="folder-surface folder-ads" data-part="manager">
+                      <div class="folder-ads-head"><p class="folder-ads-title">Campaigns</p><span class="folder-ads-account"><svg class="icon" viewBox="0 0 20 20" focusable="false"><path d="M3.75 17V6.75L10 3.25l6.25 3.5V17M2.75 17h14.5M8 17v-3.75h4V17M10 6.75v3.5M8.25 8.5h3.5"/></svg>[Your practice]</span></div>
+                      <div class="folder-ads-cols"><span>On</span><span>Campaign</span><span>Status</span><span>Budget</span></div>
+                      <ul class="folder-ads-rows">
+                        <li data-part="campaign">
+                          <span class="folder-switch" data-part="switch"><span></span></span>
+                          <span class="folder-ads-name">Adult braces · Search<span>Search ads, to the adult braces page</span></span>
+                          <span class="folder-status" data-part="status"><span class="folder-status-dot"></span><span class="folder-status-text"><span data-state="draft">Draft</span><span data-state="review">In review</span><span data-state="live">Live</span></span></span>
+                          <span class="folder-ads-budget">[Budget]/day</span>
+                        </li>
+                        <li data-part="campaign">
+                          <span class="folder-switch" data-part="switch"><span></span></span>
+                          <span class="folder-ads-name">Adult braces · Meta<span>Feed ads, to the adult braces page</span></span>
+                          <span class="folder-status" data-part="status"><span class="folder-status-dot"></span><span class="folder-status-text"><span data-state="draft">Draft</span><span data-state="review">In review</span><span data-state="live">Live</span></span></span>
+                          <span class="folder-ads-budget">[Budget]/day</span>
+                        </li>
+                      </ul>
+                      <ul class="folder-track">
+                        <li data-part="track"><svg class="icon" viewBox="0 0 24 24" focusable="false"><path d="M6.5 4h3l1.5 4-2 1.5a11 11 0 0 0 5.5 5.5l1.5-2 4 1.5v3a2 2 0 0 1-2 2A15.5 15.5 0 0 1 4.5 6a2 2 0 0 1 2-2z"/></svg>Call tracking<span class="folder-track-state"><svg class="icon" viewBox="0 0 20 20" focusable="false"><path d="m5.75 10.25 2.75 2.75 5.75-6"/></svg>Set up</span></li>
+                        <li data-part="track"><svg class="icon" viewBox="0 0 20 20" focusable="false"><circle cx="10" cy="10" r="7.25"/><circle cx="10" cy="10" r="3.25"/></svg>Conversion tracking<span class="folder-track-state"><svg class="icon" viewBox="0 0 20 20" focusable="false"><path d="m5.75 10.25 2.75 2.75 5.75-6"/></svg>Set up</span></li>
+                      </ul>
+                      <div class="signoff" data-part="sign"><svg class="signoff-disc founder-art" viewBox="-1 -1 2 2" focusable="false"><circle r="1"/><path d="M0.2621 -0.8819A0.92 0.92 0 1 0 0.2621 0.8819A0.8832 0.8832 0 1 1 0.2621 -0.8819Z"/></svg><span class="signoff-who">Signed by <em class="signature">Paid media</em></span></div>
+                      <img class="stamp folder-stamp" src="/assets/img/stamp-signed.svg" alt="" width="64" height="64">
+                    </div>
+                    <div class="folder-surface folder-surface--front folder-owner" data-part="owner">
+                      <span class="folder-owner-key"><svg class="icon" viewBox="0 0 20 20" focusable="false"><circle cx="6.75" cy="13.25" r="3.5"/><path d="m9.25 10.75 7-7M14 6l2 2M12 8l1.5 1.5"/></svg></span>
+                      <span class="folder-owner-text">Ad accounts in your practice's name<span>Owner: [Your practice]</span></span>
+                    </div>
+                    <div class="folder-surface folder-preview folder-preview--search" data-part="preview">
+                      <p class="folder-preview-who"><span>Sponsored</span>[Your practice]</p>
+                      <p class="folder-preview-title">Adult braces | Request a consult</p>
+                      <p class="folder-preview-text">Braces as an adult? See what treatment involves, then ask our team about a consultation.</p>
+                    </div>
+                    <div class="folder-surface folder-surface--front folder-preview folder-preview--feed" data-part="preview">
+                      <p class="folder-preview-who"><span class="folder-preview-mark"></span><span class="folder-preview-name">[Your practice]<span>Sponsored</span></span></p>
+                      <p class="folder-preview-art">Your questions about adult braces, answered.</p>
+                      <p class="folder-preview-foot"><span>Adult braces</span><span class="folder-preview-button">Learn more</span></p>
+                    </div>
                   </div>
-                  <div class="folder-sign" data-part="sign"><p class="folder-sign-note">Ad accounts in your practice's name.</p><p>Signed by <em class="signature">Paid media</em></p></div>
-                  <img class="stamp folder-stamp" src="/assets/img/stamp-signed.svg" alt="" width="48" height="48">
-                </article>
+                </figure>
               </div>
             </details>
             <details class="folder-stage" name="demo-folder-stage" data-short="Report">
               <summary class="folder-summary"><span class="folder-num" aria-hidden="true">04</span><span class="folder-head"><h3 class="folder-title">Your first monthly report.</h3><span class="folder-line">What we did, what it brought in, and what we're changing next.</span></span></summary>
               <div class="folder-panel">
-                <article class="folder-doc" data-stage="report" aria-label="Sample: the monthly report's work and next steps, signed by Web and SEO and by Paid media">
-                  <div class="folder-doc-head"><div class="folder-doc-name"><span class="folder-doc-practice">[Your practice]</span><p class="folder-doc-title">Work and next steps</p></div><span class="chip chip--sample">Sample</span></div>
-                  <div class="folder-doc-body">
-                    <ul class="folder-work">
-                      <li class="signed-change" data-part="row"><svg class="folder-disc founder-art" viewBox="-1 -1 2 2" aria-hidden="true" focusable="false"><circle r="1"/><path d="M0.2621 -0.8819A0.92 0.92 0 1 0 0.2621 0.8819A0.8832 0.8832 0 1 1 0.2621 -0.8819Z"/></svg><div><span class="folder-who">Web and SEO</span><p class="signed-change">Published the <em>adult braces</em> page.</p></div></li>
-                      <li class="signed-change" data-part="row"><svg class="folder-disc founder-art" viewBox="-1 -1 2 2" aria-hidden="true" focusable="false"><circle r="1"/><path d="M0.2621 -0.8819A0.92 0.92 0 1 0 0.2621 0.8819A0.8832 0.8832 0 1 1 0.2621 -0.8819Z"/></svg><div><span class="folder-who">Paid media</span><p class="signed-change">Matched the ads to the <em>adult braces</em> page.</p></div></li>
-                      <li class="folder-next"><svg class="icon" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><circle cx="10" cy="10" r="8.25"/><path d="M6 10h7.5M10.5 7l3 3-3 3"/></svg><div><span class="folder-who">Next</span><p>Review enquiries and booked consults with your team.</p></div></li>
-                    </ul>
+                <figure class="folder-scene folder-scene--report" data-stage="report" role="img" aria-label="Sample: your first monthly report. An email from Rose Practice Solutions: your [Month] report is ready. The [Month] report for [Your practice]: what we did, the adult braces page published, signed by Web and SEO, and the ads matched to it, signed by Paid media, each stamped; what it brought in, [n] new leads, [n] reached and [n] consults booked; and what we're changing next. Beside it, one of the consults booked: [Name], adult braces, from the Google Search ad.">
+                  <div class="folder-scene-top"><span class="folder-scene-caption">Illustrative monthly report</span><span class="chip chip--sample">Sample</span></div>
+                  <div class="folder-canvas">
+                    <div class="folder-surface folder-report" data-part="report">
+                      <div class="folder-report-head">
+                        <p class="folder-report-title">[Month] report</p>
+                        <p class="folder-report-for">[Your practice]</p>
+                      </div>
+                      <div class="folder-report-part">
+                        <p class="folder-report-h">What we did</p>
+                        <ul class="folder-report-work">
+                          <li class="signed-change" data-part="row"><svg class="signoff-disc founder-art" viewBox="-1 -1 2 2" focusable="false"><circle r="1"/><path d="M0.2621 -0.8819A0.92 0.92 0 1 0 0.2621 0.8819A0.8832 0.8832 0 1 1 0.2621 -0.8819Z"/></svg><span class="folder-report-change"><span class="folder-report-who">Web and SEO</span><span class="signed-change">Published the <em>adult braces</em> page.</span></span><img class="stamp folder-row-stamp" src="/assets/img/stamp-signed.svg" alt="" width="40" height="40"></li>
+                          <li class="signed-change" data-part="row"><svg class="signoff-disc founder-art" viewBox="-1 -1 2 2" focusable="false"><circle r="1"/><path d="M0.2621 -0.8819A0.92 0.92 0 1 0 0.2621 0.8819A0.8832 0.8832 0 1 1 0.2621 -0.8819Z"/></svg><span class="folder-report-change"><span class="folder-report-who">Paid media</span><span class="signed-change">Matched the ads to the <em>new</em> page.</span></span><img class="stamp folder-row-stamp" src="/assets/img/stamp-signed.svg" alt="" width="40" height="40"></li>
+                        </ul>
+                      </div>
+                      <div class="folder-report-part">
+                        <p class="folder-report-h">What it brought in</p>
+                        <ul class="folder-report-stats" data-part="stats"><li><span>[n]</span>New leads</li><li><span>[n]</span>Reached</li><li><span>[n]</span>Consults booked</li></ul>
+                      </div>
+                      <div class="folder-report-part">
+                        <p class="folder-report-h">What we're changing next</p>
+                        <p class="folder-report-next" data-part="next"><svg class="icon" viewBox="0 0 20 20" focusable="false"><circle cx="10" cy="10" r="8.25"/><path d="M6 10h7.5M10.5 7l3 3-3 3"/></svg>A clear aligners page, with its own ads.</p>
+                      </div>
+                    </div>
+                    <div class="folder-surface folder-surface--front folder-mail" data-part="mail">
+                      <p class="folder-mail-head"><svg class="icon" viewBox="0 0 20 20" focusable="false"><rect x="2.75" y="4.25" width="14.5" height="11.5" rx="2.5"/><path d="m3.5 5.5 6.5 5 6.5-5"/></svg>Inbox<span>[Time]</span></p>
+                      <div class="folder-mail-body">
+                        <img src="/assets/logo/rose-mark-tile-light.svg" alt="" width="32" height="32">
+                        <p><span class="folder-mail-from">Rose Practice Solutions</span><span class="folder-mail-subject">Your [Month] report is ready</span><span class="folder-mail-preview">What we did, what it brought in, and what we're changing next.</span></p>
+                      </div>
+                    </div>
+                    <div class="folder-surface folder-surface--front folder-consult" data-part="consult">
+                      <p class="folder-consult-head"><span class="lead-dot"></span>Consult booked<span>[Time]</span></p>
+                      <p class="folder-consult-who"><span>[Name]</span>Adult braces</p>
+                      <dl class="folder-consult-source"><dt>Source</dt><dd>Google Search ad</dd><dt>Campaign</dt><dd>Adult braces · Search</dd></dl>
+                    </div>
                   </div>
-                  <p class="folder-disclosure">Work excerpt only. Sample results are not shown.</p>
-                  <img class="stamp folder-stamp folder-stamp--large" src="/assets/img/stamp-signed.svg" alt="" width="64" height="64">
-                </article>
+                </figure>
               </div>
             </details>
           </div>
diff --git a/site/index.html b/site/index.html
index 97570bc..c804bae 100644
--- a/site/index.html
+++ b/site/index.html
@@ -552,14 +552,16 @@ height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
   </section>
 
   <!-- 4. What happens after you say yes: the practice folder (site.css and site.js "the practice folder"). Four stages,
-       each one of the onboarding steps (worded as in /services#after-yes and /pricing), and in each the piece of work
-       that stage hands over: Sales' practice notes, the adult braces page Web and SEO built, Paid media's launch
-       checklist, and the first monthly report's work and next steps. In the markup each stage is a native disclosure
-       (details[name] > summary + .folder-panel), the first one open, so without JavaScript every stage opens in place.
-       site.js turns them into a stage rail (desktop) or a four-step selector (phones) beside one sheet that holds the
-       chosen stage's work, and moves through the stages on its own while the folder is on screen. Illustrative work,
-       not a client portal: brackets stand in for the practice, no dates, no results. The full list, with the
-       agreement and the terms, is on /services#after-yes. -->
+       each one of the onboarding steps (worded as in /services#after-yes and /pricing), and in each a composed scene of
+       the work that stage hands over, two or three product surfaces layered with depth: the first call with Sales (the
+       call, its invite and Sales' notes), the site and profile Web and SEO set up (the page in a browser and on a phone,
+       the Google Business Profile), the ads account Paid media switches on (the campaigns, the ads, the accounts in your
+       name) and the first monthly report (the email it arrives in, and the report). In the markup each stage is a
+       native disclosure (details[name] > summary + .folder-panel), the first one open, so without JavaScript every
+       stage opens in place. site.js turns them into a stage rail (desktop) or a four-step selector (phones) beside one
+       sheet that holds the chosen stage's scene, and moves through the stages on its own while the folder is on screen.
+       Illustrative work, not a client portal: brackets stand in for the practice, the dates and the numbers. The full
+       list, with the agreement and the terms, is on /services#after-yes. -->
   <section class="section" id="after-yes" aria-labelledby="after-yes-title">
     <div class="wrap">
       <div class="head-row reveal">
@@ -570,71 +572,199 @@ height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
         <details class="folder-stage" name="after-yes-stage" data-short="Conversation" open>
           <summary class="folder-summary"><span class="folder-num" aria-hidden="true">01</span><span class="folder-head"><h3 class="folder-title">A first conversation.</h3><span class="folder-line">About your practice, your patients and what you've already tried.</span></span></summary>
           <div class="folder-panel">
-            <article class="folder-doc" data-stage="notes" aria-label="Sample: practice notes, prepared by Sales">
-              <div class="folder-doc-head"><div class="folder-doc-name"><span class="folder-doc-practice">[Your practice]</span><p class="folder-doc-title">Practice notes</p></div><span class="chip chip--sample">Sample</span></div>
-              <div class="folder-doc-body">
-                <dl class="folder-notes">
-                  <div><dt>We ask</dt><dd>Which patients are you hoping to reach?</dd></div>
-                  <div><dt>We ask</dt><dd>What have you already tried?</dd></div>
-                  <div class="is-key"><dt>Example focus</dt><dd><span class="folder-focus">Adult braces enquiries<span class="folder-underline" data-part="focus" aria-hidden="true"></span></span></dd></div>
-                </dl>
+            <figure class="folder-scene folder-scene--call" data-stage="call" role="img" aria-label="Sample: the first conversation. A video call between Sales and [Your practice] with live captions; behind it the invitation, First conversation, [Date], [Time], video call; in front, Sales' call notes with each topic ticked as it is covered: your practice, your patients, and what you've already tried. Prepared by Sales.">
+              <div class="folder-scene-top"><span class="folder-scene-caption">Illustrative first call</span><span class="chip chip--sample">Sample</span></div>
+              <div class="folder-canvas">
+                <div class="folder-surface folder-invite" data-part="invite">
+                  <p class="folder-invite-head"><svg class="icon" viewBox="0 0 20 20" focusable="false"><rect x="3" y="4.25" width="14" height="12.75" rx="2.5"/><path d="M3 8.25h14M7 2.75v3M13 2.75v3"/></svg>Invitation<span class="chip">Accepted</span></p>
+                  <p class="folder-invite-title">First conversation</p>
+                  <p class="folder-invite-meta"><svg class="icon" viewBox="0 0 20 20" focusable="false"><rect x="2.75" y="5.25" width="10.5" height="9.5" rx="2.5"/><path d="m13.25 9 4-2.5v7l-4-2.5"/></svg>[Date] · [Time] · Video call</p>
+                </div>
+                <div class="folder-surface folder-call" data-part="call">
+                  <div class="folder-call-bar"><span class="bar-dots"><i></i><i></i><i></i></span><span class="folder-call-name">First conversation</span><span class="folder-call-time"><span class="lead-dot"></span><span data-part="clock">24:18</span></span></div>
+                  <div class="folder-call-tiles">
+                    <div class="folder-tile folder-tile--sales on-strong">
+                      <span class="folder-tile-face"><span class="folder-ring" data-part="ring"></span><svg class="folder-tile-disc founder-art" viewBox="-1 -1 2 2" focusable="false"><circle r="1"/><path d="M0.2621 -0.8819A0.92 0.92 0 1 0 0.2621 0.8819A0.8832 0.8832 0 1 1 0.2621 -0.8819Z"/></svg></span>
+                      <span class="folder-tile-name"><svg class="icon" viewBox="0 0 20 20" focusable="false"><rect x="7.25" y="2.75" width="5.5" height="9" rx="2.75"/><path d="M4.75 9.5a5.25 5.25 0 0 0 10.5 0M10 14.75v2.5"/></svg>Sales</span>
+                    </div>
+                    <div class="folder-tile">
+                      <span class="folder-tile-face folder-tile-face--practice"><svg class="icon" viewBox="0 0 20 20" focusable="false"><path d="M3.75 17V6.75L10 3.25l6.25 3.5V17M2.75 17h14.5M8 17v-3.75h4V17M10 6.75v3.5M8.25 8.5h3.5"/></svg></span>
+                      <span class="folder-tile-name"><svg class="icon" viewBox="0 0 20 20" focusable="false"><rect x="7.25" y="2.75" width="5.5" height="9" rx="2.75"/><path d="M4.75 9.5a5.25 5.25 0 0 0 10.5 0M10 14.75v2.5"/></svg>[Your practice]</span>
+                    </div>
+                  </div>
+                  <p class="folder-caption"><svg class="icon" viewBox="0 0 20 20" focusable="false"><rect x="2.75" y="4.25" width="14.5" height="11.5" rx="2.5"/><path d="M8.75 8.6a2 2 0 1 0 0 2.8M14.25 8.6a2 2 0 1 0 0 2.8"/></svg><span class="folder-caption-who">Sales</span><span class="folder-caption-lines"><span data-part="cap">First, tell me about the practice and your team.</span><span data-part="cap">Which patients would you like to see more of?</span><span data-part="cap">And what have you already tried? Ads, an agency, anything.</span></span></p>
+                  <div class="folder-call-controls">
+                    <span class="folder-control"><svg class="icon" viewBox="0 0 20 20" focusable="false"><rect x="7.25" y="2.75" width="5.5" height="9" rx="2.75"/><path d="M4.75 9.5a5.25 5.25 0 0 0 10.5 0M10 14.75v2.5"/></svg></span>
+                    <span class="folder-control"><svg class="icon" viewBox="0 0 20 20" focusable="false"><rect x="2.75" y="5.25" width="10.5" height="9.5" rx="2.5"/><path d="m13.25 9 4-2.5v7l-4-2.5"/></svg></span>
+                    <span class="folder-control is-on"><svg class="icon" viewBox="0 0 20 20" focusable="false"><rect x="2.75" y="4.25" width="14.5" height="11.5" rx="2.5"/><path d="M8.75 8.6a2 2 0 1 0 0 2.8M14.25 8.6a2 2 0 1 0 0 2.8"/></svg></span>
+                    <span class="folder-control"><svg class="icon" viewBox="0 0 20 20" focusable="false"><rect x="2.75" y="3.75" width="14.5" height="10" rx="2"/><path d="M7 17h6M10 13.75V17"/></svg></span>
+                    <span class="folder-control-leave">Leave</span>
+                  </div>
+                </div>
+                <div class="folder-surface folder-surface--front folder-notes" data-part="notes">
+                  <p class="folder-notes-head"><svg class="icon" viewBox="0 0 20 20" focusable="false"><path d="M5.75 2.75h6l3.5 3.5v11h-9.5z"/><path d="M11.75 2.75v3.5h3.5M8.25 10.25h4.5M8.25 13.25h4.5"/></svg>Call notes<span class="folder-notes-meta">First conversation</span></p>
+                  <ul class="folder-topics">
+                    <li data-part="topic"><svg class="icon" viewBox="0 0 20 20" focusable="false"><rect x="2.75" y="2.75" width="14.5" height="14.5" rx="4"/><path d="m6.5 10.2 2.4 2.4 4.6-5"/></svg><span><span class="folder-topic-name">Your practice</span><span class="folder-topic-line">Locations, your team, how patients book</span></span></li>
+                    <li data-part="topic"><svg class="icon" viewBox="0 0 20 20" focusable="false"><rect x="2.75" y="2.75" width="14.5" height="14.5" rx="4"/><path d="m6.5 10.2 2.4 2.4 4.6-5"/></svg><span><span class="folder-topic-name">Your patients</span><span class="folder-topic-line">Who you'd like to see more of</span></span></li>
+                    <li data-part="topic"><svg class="icon" viewBox="0 0 20 20" focusable="false"><rect x="2.75" y="2.75" width="14.5" height="14.5" rx="4"/><path d="m6.5 10.2 2.4 2.4 4.6-5"/></svg><span><span class="folder-topic-name">What you've already tried</span><span class="folder-topic-line">Ads, agencies, what worked and what didn't</span></span></li>
+                  </ul>
+                  <div class="signoff" data-part="sign"><svg class="signoff-disc founder-art" viewBox="-1 -1 2 2" focusable="false"><circle r="1"/><path d="M0.2621 -0.8819A0.92 0.92 0 1 0 0.2621 0.8819A0.8832 0.8832 0 1 1 0.2621 -0.8819Z"/></svg><span class="signoff-who">Prepared by <em class="signature">Sales</em></span></div>
+                </div>
               </div>
-              <div class="folder-sign" data-part="sign"><p>Prepared by <em class="signature">Sales</em></p></div>
-            </article>
+            </figure>
           </div>
         </details>
         <details class="folder-stage" name="after-yes-stage" data-short="Website">
           <summary class="folder-summary"><span class="folder-num" aria-hidden="true">02</span><span class="folder-head"><h3 class="folder-title">Your website, built from your practice.</h3><span class="folder-line">Not a template. We also set up local SEO and keep your Google Business Profile current.</span></span></summary>
           <div class="folder-panel">
-            <article class="folder-doc" data-stage="page" aria-label="Sample: the adult braces page, signed by Web and SEO">
-              <div class="folder-doc-head"><div class="folder-doc-name"><span class="folder-doc-practice">[Your practice]</span><p class="folder-doc-title">Adult braces page</p></div><span class="chip chip--sample">Sample</span></div>
-              <div class="folder-doc-body">
-                <div class="folder-page" data-part="page">
-                  <div class="folder-page-bar" aria-hidden="true"><i></i><i></i><i></i></div>
-                  <div class="folder-page-body">
-                    <p class="folder-page-title">Adult braces in [your city]</p>
-                    <p>What to expect at your first visit, treatment questions, and how to request a consultation.</p>
-                    <span class="folder-page-button">Request a consultation</span>
+            <figure class="folder-scene folder-scene--site" data-stage="site" role="img" aria-label="Sample: your website, built from your practice. The adult braces page for [Your practice] in a browser: Adult braces in [your city], Request a consultation, and what to expect at your first visit; the same page on a phone; and the practice's Google Business Profile, open, with Directions, Call and Website, its hours just updated. Signed by Web and SEO.">
+              <div class="folder-scene-top"><span class="folder-scene-caption">Illustrative page and profile</span><span class="chip chip--sample">Sample</span></div>
+              <div class="folder-canvas">
+                <div class="folder-surface folder-browser" data-part="browser">
+                  <div class="folder-browser-bar"><span class="bar-dots"><i></i><i></i><i></i></span><span class="folder-browser-url"><svg class="icon" viewBox="0 0 20 20" focusable="false"><rect x="4.75" y="9" width="10.5" height="8" rx="2"/><path d="M7 9V6.75a3 3 0 0 1 6 0V9"/></svg>[yourpractice].com/adult-braces</span></div>
+                  <div class="folder-browser-view">
+                    <div class="folder-site-nav"><span class="folder-site-brand">[Your practice]</span><span class="folder-site-links"><span>Treatments</span><span>Your first visit</span><span>About</span></span><span class="folder-site-book">Book a consult</span></div>
+                    <div class="folder-site" data-part="scroll">
+                      <div class="folder-site-hero">
+                        <p class="folder-site-title">Adult braces in [your city]</p>
+                        <p class="folder-site-line">Braces and clear aligners for adults, planned around your work and your week.</p>
+                        <p class="folder-site-actions"><span class="folder-site-button">Request a consultation</span><span class="folder-site-call"><svg class="icon" viewBox="0 0 24 24" focusable="false"><path d="M6.5 4h3l1.5 4-2 1.5a11 11 0 0 0 5.5 5.5l1.5-2 4 1.5v3a2 2 0 0 1-2 2A15.5 15.5 0 0 1 4.5 6a2 2 0 0 1 2-2z"/></svg>Call us</span></p>
+                      </div>
+                      <div class="folder-site-part">
+                        <p class="folder-site-h">What to expect at your first visit</p>
+                        <ol class="folder-site-steps"><li><span>1</span>A look at your teeth and bite</li><li><span>2</span>Braces or clear aligners, explained</li><li><span>3</span>Your plan, timing and cost</li></ol>
+                      </div>
+                      <div class="folder-site-part">
+                        <p class="folder-site-h">Questions adults ask</p>
+                        <ul class="folder-site-faq"><li>Will people notice my braces?</li><li>How long does treatment take?</li></ul>
+                      </div>
+                    </div>
                   </div>
                 </div>
+                <div class="folder-phone" data-part="phone">
+                  <div class="folder-phone-screen">
+                    <span class="folder-phone-notch"></span>
+                    <div class="folder-site-nav"><span class="folder-site-brand">[Your practice]</span><svg class="icon" viewBox="0 0 20 20" focusable="false"><path d="M3.5 6h13M3.5 10h13M3.5 14h13"/></svg></div>
+                    <div class="folder-site-hero">
+                      <p class="folder-site-title">Adult braces in [your city]</p>
+                      <p class="folder-site-line">Planned around your work and your week.</p>
+                    </div>
+                    <div class="folder-site-part">
+                      <p class="folder-site-h">Your first visit</p>
+                      <ol class="folder-site-steps"><li><span>1</span>A look at your teeth and bite</li><li><span>2</span>Braces or aligners, explained</li><li><span>3</span>Your plan, timing and cost</li></ol>
+                    </div>
+                    <p class="folder-phone-bar"><span class="folder-site-button">Book a consult</span><span class="folder-phone-call"><svg class="icon" viewBox="0 0 24 24" focusable="false"><path d="M6.5 4h3l1.5 4-2 1.5a11 11 0 0 0 5.5 5.5l1.5-2 4 1.5v3a2 2 0 0 1-2 2A15.5 15.5 0 0 1 4.5 6a2 2 0 0 1 2-2z"/></svg></span></p>
+                  </div>
+                </div>
+                <div class="folder-surface folder-surface--front folder-profile" data-part="profile">
+                  <svg class="folder-map" viewBox="0 0 264 76" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="264" height="76"/><path class="folder-map-road folder-map-road--minor" d="M-4 16 L270 28 M34 -4 L48 80 M190 -4 L176 80"/><path class="folder-map-road" d="M-4 54 C60 44 130 62 270 42 M98 -4 L116 80"/><path class="folder-map-pin" d="M146 40c-7-9-10-14-10-18a10 10 0 0 1 20 0c0 4-3 9-10 18z"/><circle class="folder-map-dot" cx="146" cy="22" r="3.5"/></svg>
+                  <div class="folder-profile-body">
+                    <p class="folder-profile-name">[Your practice]</p>
+                    <p class="folder-profile-kind">Orthodontist in [your city]</p>
+                    <p class="folder-profile-open"><span>Open</span> · Closes [Time]</p>
+                    <ul class="folder-profile-actions">
+                      <li><span><svg class="icon" viewBox="0 0 20 20" focusable="false"><path d="M10 2.75 17.25 10 10 17.25 2.75 10z"/><path d="M8 11.75v-2.5h4M10.75 7.75l1.5 1.5-1.5 1.5"/></svg></span>Directions</li>
+                      <li><span><svg class="icon" viewBox="0 0 24 24" focusable="false"><path d="M6.5 4h3l1.5 4-2 1.5a11 11 0 0 0 5.5 5.5l1.5-2 4 1.5v3a2 2 0 0 1-2 2A15.5 15.5 0 0 1 4.5 6a2 2 0 0 1 2-2z"/></svg></span>Call</li>
+                      <li><span><svg class="icon" viewBox="0 0 20 20" focusable="false"><circle cx="10" cy="10" r="7"/><path d="M3 10h14M10 3c-3.5 4-3.5 10 0 14M10 3c3.5 4 3.5 10 0 14"/></svg></span>Website</li>
+                    </ul>
+                    <p class="folder-update" data-part="update"><svg class="icon" viewBox="0 0 20 20" focusable="false"><path d="m5.75 10.25 2.75 2.75 5.75-6"/></svg><span class="folder-update-text"><span data-part="update-todo">Updating hours</span><span>Hours updated</span></span></p>
+                    <div class="signoff" data-part="sign"><svg class="signoff-disc founder-art" viewBox="-1 -1 2 2" focusable="false"><circle r="1"/><path d="M0.2621 -0.8819A0.92 0.92 0 1 0 0.2621 0.8819A0.8832 0.8832 0 1 1 0.2621 -0.8819Z"/></svg><span class="signoff-who">Signed by <em class="signature">Web and SEO</em></span></div>
+                  </div>
+                  <img class="stamp folder-stamp folder-stamp--top" src="/assets/img/stamp-signed.svg" alt="" width="64" height="64">
+                </div>
               </div>
-              <div class="folder-sign" data-part="sign"><p class="signed-change">Built the page around adult patients' <em>questions</em>.</p><p>Signed by <em class="signature">Web and SEO</em></p></div>
-              <img class="stamp folder-stamp" src="/assets/img/stamp-signed.svg" alt="" width="48" height="48">
-            </article>
+            </figure>
           </div>
         </details>
         <details class="folder-stage" name="after-yes-stage" data-short="Ads go live">
           <summary class="folder-summary"><span class="folder-num" aria-hidden="true">03</span><span class="folder-head"><h3 class="folder-title">Your ads go live.</h3><span class="folder-line">Google and Meta ads, run from ad accounts in your name.</span></span></summary>
           <div class="folder-panel">
-            <article class="folder-doc" data-stage="launch" aria-label="Sample: the launch checklist, signed by Paid media">
-              <div class="folder-doc-head"><div class="folder-doc-name"><span class="folder-doc-practice">[Your practice]</span><p class="folder-doc-title">Launch checklist</p></div><span class="chip chip--sample">Sample</span></div>
-              <div class="folder-doc-body">
-                <ul class="folder-checks">
-                  <li data-part="check"><svg class="icon" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><rect x="2.75" y="2.75" width="14.5" height="14.5" rx="4"/><path d="m6.5 10.2 2.4 2.4 4.6-5"/></svg><span>Google ad linked to the adult braces page</span><span class="sr-only">, done</span></li>
-                  <li data-part="check"><svg class="icon" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><rect x="2.75" y="2.75" width="14.5" height="14.5" rx="4"/><path d="m6.5 10.2 2.4 2.4 4.6-5"/></svg><span>Meta ad linked to the adult braces page</span><span class="sr-only">, done</span></li>
-                  <li data-part="check"><svg class="icon" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><rect x="2.75" y="2.75" width="14.5" height="14.5" rx="4"/><path d="m6.5 10.2 2.4 2.4 4.6-5"/></svg><span>Call and conversion tracking set up</span><span class="sr-only">, done</span></li>
-                </ul>
+            <figure class="folder-scene folder-scene--ads" data-stage="ads" role="img" aria-label="Sample: your ads go live. The ads account for [Your practice], in your practice's name: two campaigns, Adult braces on Search and Adult braces on Meta, each switched on and moved from draft to in review to live; call and conversion tracking set up; beside it, the search ad and the feed ad. Signed by Paid media.">
+              <div class="folder-scene-top"><span class="folder-scene-caption">Illustrative ads account</span><span class="chip chip--sample">Sample</span></div>
+              <div class="folder-canvas">
+                <div class="folder-surface folder-ads" data-part="manager">
+                  <div class="folder-ads-head"><p class="folder-ads-title">Campaigns</p><span class="folder-ads-account"><svg class="icon" viewBox="0 0 20 20" focusable="false"><path d="M3.75 17V6.75L10 3.25l6.25 3.5V17M2.75 17h14.5M8 17v-3.75h4V17M10 6.75v3.5M8.25 8.5h3.5"/></svg>[Your practice]</span></div>
+                  <div class="folder-ads-cols"><span>On</span><span>Campaign</span><span>Status</span><span>Budget</span></div>
+                  <ul class="folder-ads-rows">
+                    <li data-part="campaign">
+                      <span class="folder-switch" data-part="switch"><span></span></span>
+                      <span class="folder-ads-name">Adult braces · Search<span>Search ads, to the adult braces page</span></span>
+                      <span class="folder-status" data-part="status"><span class="folder-status-dot"></span><span class="folder-status-text"><span data-state="draft">Draft</span><span data-state="review">In review</span><span data-state="live">Live</span></span></span>
+                      <span class="folder-ads-budget">[Budget]/day</span>
+                    </li>
+                    <li data-part="campaign">
+                      <span class="folder-switch" data-part="switch"><span></span></span>
+                      <span class="folder-ads-name">Adult braces · Meta<span>Feed ads, to the adult braces page</span></span>
+                      <span class="folder-status" data-part="status"><span class="folder-status-dot"></span><span class="folder-status-text"><span data-state="draft">Draft</span><span data-state="review">In review</span><span data-state="live">Live</span></span></span>
+                      <span class="folder-ads-budget">[Budget]/day</span>
+                    </li>
+                  </ul>
+                  <ul class="folder-track">
+                    <li data-part="track"><svg class="icon" viewBox="0 0 24 24" focusable="false"><path d="M6.5 4h3l1.5 4-2 1.5a11 11 0 0 0 5.5 5.5l1.5-2 4 1.5v3a2 2 0 0 1-2 2A15.5 15.5 0 0 1 4.5 6a2 2 0 0 1 2-2z"/></svg>Call tracking<span class="folder-track-state"><svg class="icon" viewBox="0 0 20 20" focusable="false"><path d="m5.75 10.25 2.75 2.75 5.75-6"/></svg>Set up</span></li>
+                    <li data-part="track"><svg class="icon" viewBox="0 0 20 20" focusable="false"><circle cx="10" cy="10" r="7.25"/><circle cx="10" cy="10" r="3.25"/></svg>Conversion tracking<span class="folder-track-state"><svg class="icon" viewBox="0 0 20 20" focusable="false"><path d="m5.75 10.25 2.75 2.75 5.75-6"/></svg>Set up</span></li>
+                  </ul>
+                  <div class="signoff" data-part="sign"><svg class="signoff-disc founder-art" viewBox="-1 -1 2 2" focusable="false"><circle r="1"/><path d="M0.2621 -0.8819A0.92 0.92 0 1 0 0.2621 0.8819A0.8832 0.8832 0 1 1 0.2621 -0.8819Z"/></svg><span class="signoff-who">Signed by <em class="signature">Paid media</em></span></div>
+                  <img class="stamp folder-stamp" src="/assets/img/stamp-signed.svg" alt="" width="64" height="64">
+                </div>
+                <div class="folder-surface folder-surface--front folder-owner" data-part="owner">
+                  <span class="folder-owner-key"><svg class="icon" viewBox="0 0 20 20" focusable="false"><circle cx="6.75" cy="13.25" r="3.5"/><path d="m9.25 10.75 7-7M14 6l2 2M12 8l1.5 1.5"/></svg></span>
+                  <span class="folder-owner-text">Ad accounts in your practice's name<span>Owner: [Your practice]</span></span>
+                </div>
+                <div class="folder-surface folder-preview folder-preview--search" data-part="preview">
+                  <p class="folder-preview-who"><span>Sponsored</span>[Your practice]</p>
+                  <p class="folder-preview-title">Adult braces | Request a consult</p>
+                  <p class="folder-preview-text">Braces as an adult? See what treatment involves, then ask our team about a consultation.</p>
+                </div>
+                <div class="folder-surface folder-surface--front folder-preview folder-preview--feed" data-part="preview">
+                  <p class="folder-preview-who"><span class="folder-preview-mark"></span><span class="folder-preview-name">[Your practice]<span>Sponsored</span></span></p>
+                  <p class="folder-preview-art">Your questions about adult braces, answered.</p>
+                  <p class="folder-preview-foot"><span>Adult braces</span><span class="folder-preview-button">Learn more</span></p>
+                </div>
               </div>
-              <div class="folder-sign" data-part="sign"><p class="folder-sign-note">Ad accounts in your practice's name.</p><p>Signed by <em class="signature">Paid media</em></p></div>
-              <img class="stamp folder-stamp" src="/assets/img/stamp-signed.svg" alt="" width="48" height="48">
-            </article>
+            </figure>
           </div>
         </details>
         <details class="folder-stage" name="after-yes-stage" data-short="Report">
           <summary class="folder-summary"><span class="folder-num" aria-hidden="true">04</span><span class="folder-head"><h3 class="folder-title">Your first monthly report.</h3><span class="folder-line">What we did, what it brought in, and what we're changing next.</span></span></summary>
           <div class="folder-panel">
-            <article class="folder-doc" data-stage="report" aria-label="Sample: the monthly report's work and next steps, signed by Web and SEO and by Paid media">
-              <div class="folder-doc-head"><div class="folder-doc-name"><span class="folder-doc-practice">[Your practice]</span><p class="folder-doc-title">Work and next steps</p></div><span class="chip chip--sample">Sample</span></div>
-              <div class="folder-doc-body">
-                <ul class="folder-work">
-                  <li class="signed-change" data-part="row"><svg class="folder-disc founder-art" viewBox="-1 -1 2 2" aria-hidden="true" focusable="false"><circle r="1"/><path d="M0.2621 -0.8819A0.92 0.92 0 1 0 0.2621 0.8819A0.8832 0.8832 0 1 1 0.2621 -0.8819Z"/></svg><div><span class="folder-who">Web and SEO</span><p class="signed-change">Published the <em>adult braces</em> page.</p></div></li>
-                  <li class="signed-change" data-part="row"><svg class="folder-disc founder-art" viewBox="-1 -1 2 2" aria-hidden="true" focusable="false"><circle r="1"/><path d="M0.2621 -0.8819A0.92 0.92 0 1 0 0.2621 0.8819A0.8832 0.8832 0 1 1 0.2621 -0.8819Z"/></svg><div><span class="folder-who">Paid media</span><p class="signed-change">Matched the ads to the <em>adult braces</em> page.</p></div></li>
-                  <li class="folder-next"><svg class="icon" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><circle cx="10" cy="10" r="8.25"/><path d="M6 10h7.5M10.5 7l3 3-3 3"/></svg><div><span class="folder-who">Next</span><p>Review enquiries and booked consults with your team.</p></div></li>
-                </ul>
+            <figure class="folder-scene folder-scene--report" data-stage="report" role="img" aria-label="Sample: your first monthly report. An email from Rose Practice Solutions: your [Month] report is ready. The [Month] report for [Your practice]: what we did, the adult braces page published, signed by Web and SEO, and the ads matched to it, signed by Paid media, each stamped; what it brought in, [n] new leads, [n] reached and [n] consults booked; and what we're changing next. Beside it, one of the consults booked: [Name], adult braces, from the Google Search ad.">
+              <div class="folder-scene-top"><span class="folder-scene-caption">Illustrative monthly report</span><span class="chip chip--sample">Sample</span></div>
+              <div class="folder-canvas">
+                <div class="folder-surface folder-report" data-part="report">
+                  <div class="folder-report-head">
+                    <p class="folder-report-title">[Month] report</p>
+                    <p class="folder-report-for">[Your practice]</p>
+                  </div>
+                  <div class="folder-report-part">
+                    <p class="folder-report-h">What we did</p>
+                    <ul class="folder-report-work">
+                      <li class="signed-change" data-part="row"><svg class="signoff-disc founder-art" viewBox="-1 -1 2 2" focusable="false"><circle r="1"/><path d="M0.2621 -0.8819A0.92 0.92 0 1 0 0.2621 0.8819A0.8832 0.8832 0 1 1 0.2621 -0.8819Z"/></svg><span class="folder-report-change"><span class="folder-report-who">Web and SEO</span><span class="signed-change">Published the <em>adult braces</em> page.</span></span><img class="stamp folder-row-stamp" src="/assets/img/stamp-signed.svg" alt="" width="40" height="40"></li>
+                      <li class="signed-change" data-part="row"><svg class="signoff-disc founder-art" viewBox="-1 -1 2 2" focusable="false"><circle r="1"/><path d="M0.2621 -0.8819A0.92 0.92 0 1 0 0.2621 0.8819A0.8832 0.8832 0 1 1 0.2621 -0.8819Z"/></svg><span class="folder-report-change"><span class="folder-report-who">Paid media</span><span class="signed-change">Matched the ads to the <em>new</em> page.</span></span><img class="stamp folder-row-stamp" src="/assets/img/stamp-signed.svg" alt="" width="40" height="40"></li>
+                    </ul>
+                  </div>
+                  <div class="folder-report-part">
+                    <p class="folder-report-h">What it brought in</p>
+                    <ul class="folder-report-stats" data-part="stats"><li><span>[n]</span>New leads</li><li><span>[n]</span>Reached</li><li><span>[n]</span>Consults booked</li></ul>
+                  </div>
+                  <div class="folder-report-part">
+                    <p class="folder-report-h">What we're changing next</p>
+                    <p class="folder-report-next" data-part="next"><svg class="icon" viewBox="0 0 20 20" focusable="false"><circle cx="10" cy="10" r="8.25"/><path d="M6 10h7.5M10.5 7l3 3-3 3"/></svg>A clear aligners page, with its own ads.</p>
+                  </div>
+                </div>
+                <div class="folder-surface folder-surface--front folder-mail" data-part="mail">
+                  <p class="folder-mail-head"><svg class="icon" viewBox="0 0 20 20" focusable="false"><rect x="2.75" y="4.25" width="14.5" height="11.5" rx="2.5"/><path d="m3.5 5.5 6.5 5 6.5-5"/></svg>Inbox<span>[Time]</span></p>
+                  <div class="folder-mail-body">
+                    <img src="/assets/logo/rose-mark-tile-light.svg" alt="" width="32" height="32">
+                    <p><span class="folder-mail-from">Rose Practice Solutions</span><span class="folder-mail-subject">Your [Month] report is ready</span><span class="folder-mail-preview">What we did, what it brought in, and what we're changing next.</span></p>
+                  </div>
+                </div>
+                <div class="folder-surface folder-surface--front folder-consult" data-part="consult">
+                  <p class="folder-consult-head"><span class="lead-dot"></span>Consult booked<span>[Time]</span></p>
+                  <p class="folder-consult-who"><span>[Name]</span>Adult braces</p>
+                  <dl class="folder-consult-source"><dt>Source</dt><dd>Google Search ad</dd><dt>Campaign</dt><dd>Adult braces · Search</dd></dl>
+                </div>
               </div>
-              <p class="folder-disclosure">Work excerpt only. Sample results are not shown.</p>
-              <img class="stamp folder-stamp folder-stamp--large" src="/assets/img/stamp-signed.svg" alt="" width="64" height="64">
-            </article>
+            </figure>
           </div>
         </details>
       </div>
```

</details>

### 12. Footer: a product-style footer with the name large, cropped and faded

**What and why.** Chris: the footer "could also be higher-end, maybe more SaaS-generic, like how brands nowadays have the name really large and cut off and fading into the background". This applies to **every page**, because the footer is shared. Every page's footer markup is replaced with the same new markup, and each file keeps its own line endings. Six pages (dental-marketing, orthodontic-marketing, pricing, services, services/add-ons and services/patient-follow-up) use Windows (CRLF) line endings. The diff below keeps them, so apply this change with `git apply` rather than by copy and paste.

**Layout** (still your forest panel, with 28px top corners and cream text)
- **Brand, on the left:**
  - The logo tile is now the home link, "Rose Practice Solutions, home".
  - Under it: "*Tended,* not templated." at Display M, the about line, and "Write to us" with the email address.
- **Three link columns, on the right**, in `nav aria-label="Footer"`. Each has a small label (13px/600, sage mist) over 44px links:
  - **What we do:** Services, Add-ons and projects, Pricing.
  - **Who we work with:** Orthodontic marketing, Dental marketing.
  - **Company:** About, Get in touch, Send us a message.
- **Legal row:** © 2026 Rose Practice Solutions, the four legal links and Pause animations, all unchanged.

**The name, large.** Your own wordmark file (`rose-wordmark-white.svg`) runs the full width of the footer.
- It's cream at 7% opacity, so it reads as a lighter tone of the forest. The colour is flat, with no gradient and no mask.
- The footer's bottom edge crops it, so about 80% of the word shows and the strap never does.
- On desktop it sits partly under the brand block and the legal row. On phones it sits under the legal links.
- It's decorative (`alt=""`, `aria-hidden`).
- Text over it still passes AA: cream 7.17:1, sage mist 6.22:1.
- It rises the last 12% into place once, as it scrolls into view. Without JavaScript or under reduced motion it's simply there.
- I used the wordmark rather than the bloom: your motif rule keeps the bloom to the hero and the footer flat.

**Layout by size**
- **1025px and up:** brand beside the columns.
- **769 to 1024:** brand on top, columns below.
- **768 and under:** the tile sits beside the tagline.
- **600 and under:** the columns go two across.

**Height:** 847px at 1440 (464 before, most of the extra is the cropped name) and 763px at 390 (784 before).

**CSS and JS**
- The footer block in site.css is rewritten.
- The `:where(...)` link selectors now name `.foot-nav a` instead of `.foot-links a`.
- `.foot-links` and `.foot-wordmark` are retired.
- site.js gains three lines for the rise.

**Check:** on the homepage, /about and /pricing at 1440 and 390, every link works and Pause animations toggles. The homepage's questions band still fills the footer's top corners.

**Files and lines** (after this change):

- `site/404.html`: lines 96–134, 141–147
- `site/about.html`: lines 331–369, 376–382
- `site/accessibility.html`: lines 175–213, 220–226
- `site/ai-policy.html`: lines 180–218, 225–231
- `site/assets/site.css`: lines 542–548, 554–560, 3339–3387, 3389–3440, 3474–3479
- `site/assets/site.js`: lines 282–288, 550–559
- `site/components.html`: lines 1486–1524, 1531–1537
- `site/contact.html`: lines 315–353, 360–366
- `site/dental-marketing.html`: lines 618–656, 663–669
- `site/index.html`: lines 927–965, 972–978
- `site/orthodontic-marketing.html`: lines 541–579, 586–592
- `site/pricing.html`: lines 485–523, 530–536
- `site/privacy.html`: lines 187–225, 232–238
- `site/services.html`: lines 523–561, 568–574
- `site/services/add-ons.html`: lines 453–491, 498–504
- `site/services/paid-ads.html`: lines 442–480, 487–493
- `site/services/patient-follow-up.html`: lines 490–528, 535–541
- `site/services/websites-and-seo.html`: lines 434–472, 479–485
- `site/terms.html`: lines 186–224, 231–237

<details>
<summary>Exact diff for change 12</summary>

```diff
diff --git a/site/404.html b/site/404.html
index 15209f7..0705c41 100644
--- a/site/404.html
+++ b/site/404.html
@@ -96,24 +96,39 @@ height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
   <div class="wrap">
     <div class="foot-grid">
       <div class="foot-brand">
-        <a href="/" aria-label="Rose Practice Solutions, home"><img class="foot-wordmark" src="/assets/logo/rose-wordmark-white.svg" alt="Rose Practice Solutions" width="200" height="125" loading="lazy" decoding="async"></a>
+        <a class="foot-home" href="/" aria-label="Rose Practice Solutions, home"><img src="/assets/logo/rose-mark-tile-light.svg" alt="" width="44" height="44" loading="lazy" decoding="async"></a>
         <p class="tagline"><em>Tended,</em> not templated.</p>
         <p class="foot-about">Rose Practice Solutions is a fully remote orthodontic and dental marketing company in the United States.</p>
+        <div class="foot-contact">
+          <p class="foot-label">Write to us</p>
+          <a href="mailto:hello@rosepracticesolutions.com">hello@rosepracticesolutions.com</a>
+        </div>
       </div>
-      <ul class="foot-links">
-        <li><a href="/services">Services</a></li>
-        <li><a href="/services/add-ons">Add-ons and projects</a></li>
-        <li><a href="/orthodontic-marketing">Orthodontic marketing</a></li>
-        <li><a href="/dental-marketing">Dental marketing</a></li>
-        <li><a href="/pricing">Pricing</a></li>
-        <li><a href="/about">About</a></li>
-        <li><a href="/contact">Get in touch</a></li>
-      </ul>
-      <div class="foot-contact">
-        <p class="body-s">Write to us</p>
-        <a href="/contact#book">Send us a message</a>
-        <a href="mailto:hello@rosepracticesolutions.com">hello@rosepracticesolutions.com</a>
-      </div>
+      <nav class="foot-nav" aria-label="Footer">
+        <div class="foot-col">
+          <h2 class="foot-label" id="foot-what">What we do</h2>
+          <ul aria-labelledby="foot-what">
+            <li><a href="/services">Services</a></li>
+            <li><a href="/services/add-ons">Add-ons and projects</a></li>
+            <li><a href="/pricing">Pricing</a></li>
+          </ul>
+        </div>
+        <div class="foot-col">
+          <h2 class="foot-label" id="foot-who">Who we work with</h2>
+          <ul aria-labelledby="foot-who">
+            <li><a href="/orthodontic-marketing">Orthodontic marketing</a></li>
+            <li><a href="/dental-marketing">Dental marketing</a></li>
+          </ul>
+        </div>
+        <div class="foot-col">
+          <h2 class="foot-label" id="foot-company">Company</h2>
+          <ul aria-labelledby="foot-company">
+            <li><a href="/about">About</a></li>
+            <li><a href="/contact">Get in touch</a></li>
+            <li><a href="/contact#book">Send us a message</a></li>
+          </ul>
+        </div>
+      </nav>
     </div>
     <div class="foot-legal">
       <p class="meta">&copy; 2026 Rose Practice Solutions</p>
@@ -126,6 +141,7 @@ height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
       </div>
     </div>
   </div>
+  <img class="foot-giant" src="/assets/logo/rose-wordmark-white.svg" alt="" aria-hidden="true" width="1595" height="996" loading="lazy" decoding="async">
 </footer>
 
 <!-- No GSAP on this page: it has no graphics to animate, and site.js runs without it. -->
diff --git a/site/about.html b/site/about.html
index 9258435..aefd28e 100644
--- a/site/about.html
+++ b/site/about.html
@@ -331,24 +331,39 @@ height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
   <div class="wrap">
     <div class="foot-grid">
       <div class="foot-brand">
-        <a href="/" aria-label="Rose Practice Solutions, home"><img class="foot-wordmark" src="/assets/logo/rose-wordmark-white.svg" alt="Rose Practice Solutions" width="200" height="125" loading="lazy" decoding="async"></a>
+        <a class="foot-home" href="/" aria-label="Rose Practice Solutions, home"><img src="/assets/logo/rose-mark-tile-light.svg" alt="" width="44" height="44" loading="lazy" decoding="async"></a>
         <p class="tagline"><em>Tended,</em> not templated.</p>
         <p class="foot-about">Rose Practice Solutions is a fully remote orthodontic and dental marketing company in the United States.</p>
+        <div class="foot-contact">
+          <p class="foot-label">Write to us</p>
+          <a href="mailto:hello@rosepracticesolutions.com">hello@rosepracticesolutions.com</a>
+        </div>
       </div>
-      <ul class="foot-links">
-        <li><a href="/services">Services</a></li>
-        <li><a href="/services/add-ons">Add-ons and projects</a></li>
-        <li><a href="/orthodontic-marketing">Orthodontic marketing</a></li>
-        <li><a href="/dental-marketing">Dental marketing</a></li>
-        <li><a href="/pricing">Pricing</a></li>
-        <li><a href="/about">About</a></li>
-        <li><a href="/contact">Get in touch</a></li>
-      </ul>
-      <div class="foot-contact">
-        <p class="body-s">Write to us</p>
-        <a href="/contact#book">Send us a message</a>
-        <a href="mailto:hello@rosepracticesolutions.com">hello@rosepracticesolutions.com</a>
-      </div>
+      <nav class="foot-nav" aria-label="Footer">
+        <div class="foot-col">
+          <h2 class="foot-label" id="foot-what">What we do</h2>
+          <ul aria-labelledby="foot-what">
+            <li><a href="/services">Services</a></li>
+            <li><a href="/services/add-ons">Add-ons and projects</a></li>
+            <li><a href="/pricing">Pricing</a></li>
+          </ul>
+        </div>
+        <div class="foot-col">
+          <h2 class="foot-label" id="foot-who">Who we work with</h2>
+          <ul aria-labelledby="foot-who">
+            <li><a href="/orthodontic-marketing">Orthodontic marketing</a></li>
+            <li><a href="/dental-marketing">Dental marketing</a></li>
+          </ul>
+        </div>
+        <div class="foot-col">
+          <h2 class="foot-label" id="foot-company">Company</h2>
+          <ul aria-labelledby="foot-company">
+            <li><a href="/about">About</a></li>
+            <li><a href="/contact">Get in touch</a></li>
+            <li><a href="/contact#book">Send us a message</a></li>
+          </ul>
+        </div>
+      </nav>
     </div>
     <div class="foot-legal">
       <p class="meta">&copy; 2026 Rose Practice Solutions</p>
@@ -361,6 +376,7 @@ height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
       </div>
     </div>
   </div>
+  <img class="foot-giant" src="/assets/logo/rose-wordmark-white.svg" alt="" aria-hidden="true" width="1595" height="996" loading="lazy" decoding="async">
 </footer>
 
 <script src="/assets/vendor/gsap.min.js" defer></script>
diff --git a/site/accessibility.html b/site/accessibility.html
index b069d60..fecd76a 100644
--- a/site/accessibility.html
+++ b/site/accessibility.html
@@ -175,24 +175,39 @@ height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
   <div class="wrap">
     <div class="foot-grid">
       <div class="foot-brand">
-        <a href="/" aria-label="Rose Practice Solutions, home"><img class="foot-wordmark" src="/assets/logo/rose-wordmark-white.svg" alt="Rose Practice Solutions" width="200" height="125" loading="lazy" decoding="async"></a>
+        <a class="foot-home" href="/" aria-label="Rose Practice Solutions, home"><img src="/assets/logo/rose-mark-tile-light.svg" alt="" width="44" height="44" loading="lazy" decoding="async"></a>
         <p class="tagline"><em>Tended,</em> not templated.</p>
         <p class="foot-about">Rose Practice Solutions is a fully remote orthodontic and dental marketing company in the United States.</p>
+        <div class="foot-contact">
+          <p class="foot-label">Write to us</p>
+          <a href="mailto:hello@rosepracticesolutions.com">hello@rosepracticesolutions.com</a>
+        </div>
       </div>
-      <ul class="foot-links">
-        <li><a href="/services">Services</a></li>
-        <li><a href="/services/add-ons">Add-ons and projects</a></li>
-        <li><a href="/orthodontic-marketing">Orthodontic marketing</a></li>
-        <li><a href="/dental-marketing">Dental marketing</a></li>
-        <li><a href="/pricing">Pricing</a></li>
-        <li><a href="/about">About</a></li>
-        <li><a href="/contact">Get in touch</a></li>
-      </ul>
-      <div class="foot-contact">
-        <p class="body-s">Write to us</p>
-        <a href="/contact#book">Send us a message</a>
-        <a href="mailto:hello@rosepracticesolutions.com">hello@rosepracticesolutions.com</a>
-      </div>
+      <nav class="foot-nav" aria-label="Footer">
+        <div class="foot-col">
+          <h2 class="foot-label" id="foot-what">What we do</h2>
+          <ul aria-labelledby="foot-what">
+            <li><a href="/services">Services</a></li>
+            <li><a href="/services/add-ons">Add-ons and projects</a></li>
+            <li><a href="/pricing">Pricing</a></li>
+          </ul>
+        </div>
+        <div class="foot-col">
+          <h2 class="foot-label" id="foot-who">Who we work with</h2>
+          <ul aria-labelledby="foot-who">
+            <li><a href="/orthodontic-marketing">Orthodontic marketing</a></li>
+            <li><a href="/dental-marketing">Dental marketing</a></li>
+          </ul>
+        </div>
+        <div class="foot-col">
+          <h2 class="foot-label" id="foot-company">Company</h2>
+          <ul aria-labelledby="foot-company">
+            <li><a href="/about">About</a></li>
+            <li><a href="/contact">Get in touch</a></li>
+            <li><a href="/contact#book">Send us a message</a></li>
+          </ul>
+        </div>
+      </nav>
     </div>
     <div class="foot-legal">
       <p class="meta">&copy; 2026 Rose Practice Solutions</p>
@@ -205,6 +220,7 @@ height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
       </div>
     </div>
   </div>
+  <img class="foot-giant" src="/assets/logo/rose-wordmark-white.svg" alt="" aria-hidden="true" width="1595" height="996" loading="lazy" decoding="async">
 </footer>
 
 <!-- No GSAP on this page: it has no graphics to animate, and site.js runs without it. -->
diff --git a/site/ai-policy.html b/site/ai-policy.html
index f7bd329..79622e2 100644
--- a/site/ai-policy.html
+++ b/site/ai-policy.html
@@ -180,24 +180,39 @@ height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
   <div class="wrap">
     <div class="foot-grid">
       <div class="foot-brand">
-        <a href="/" aria-label="Rose Practice Solutions, home"><img class="foot-wordmark" src="/assets/logo/rose-wordmark-white.svg" alt="Rose Practice Solutions" width="200" height="125" loading="lazy" decoding="async"></a>
+        <a class="foot-home" href="/" aria-label="Rose Practice Solutions, home"><img src="/assets/logo/rose-mark-tile-light.svg" alt="" width="44" height="44" loading="lazy" decoding="async"></a>
         <p class="tagline"><em>Tended,</em> not templated.</p>
         <p class="foot-about">Rose Practice Solutions is a fully remote orthodontic and dental marketing company in the United States.</p>
+        <div class="foot-contact">
+          <p class="foot-label">Write to us</p>
+          <a href="mailto:hello@rosepracticesolutions.com">hello@rosepracticesolutions.com</a>
+        </div>
       </div>
-      <ul class="foot-links">
-        <li><a href="/services">Services</a></li>
-        <li><a href="/services/add-ons">Add-ons and projects</a></li>
-        <li><a href="/orthodontic-marketing">Orthodontic marketing</a></li>
-        <li><a href="/dental-marketing">Dental marketing</a></li>
-        <li><a href="/pricing">Pricing</a></li>
-        <li><a href="/about">About</a></li>
-        <li><a href="/contact">Get in touch</a></li>
-      </ul>
-      <div class="foot-contact">
-        <p class="body-s">Write to us</p>
-        <a href="/contact#book">Send us a message</a>
-        <a href="mailto:hello@rosepracticesolutions.com">hello@rosepracticesolutions.com</a>
-      </div>
+      <nav class="foot-nav" aria-label="Footer">
+        <div class="foot-col">
+          <h2 class="foot-label" id="foot-what">What we do</h2>
+          <ul aria-labelledby="foot-what">
+            <li><a href="/services">Services</a></li>
+            <li><a href="/services/add-ons">Add-ons and projects</a></li>
+            <li><a href="/pricing">Pricing</a></li>
+          </ul>
+        </div>
+        <div class="foot-col">
+          <h2 class="foot-label" id="foot-who">Who we work with</h2>
+          <ul aria-labelledby="foot-who">
+            <li><a href="/orthodontic-marketing">Orthodontic marketing</a></li>
+            <li><a href="/dental-marketing">Dental marketing</a></li>
+          </ul>
+        </div>
+        <div class="foot-col">
+          <h2 class="foot-label" id="foot-company">Company</h2>
+          <ul aria-labelledby="foot-company">
+            <li><a href="/about">About</a></li>
+            <li><a href="/contact">Get in touch</a></li>
+            <li><a href="/contact#book">Send us a message</a></li>
+          </ul>
+        </div>
+      </nav>
     </div>
     <div class="foot-legal">
       <p class="meta">&copy; 2026 Rose Practice Solutions</p>
@@ -210,6 +225,7 @@ height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
       </div>
     </div>
   </div>
+  <img class="foot-giant" src="/assets/logo/rose-wordmark-white.svg" alt="" aria-hidden="true" width="1595" height="996" loading="lazy" decoding="async">
 </footer>
 
 <script src="/assets/vendor/gsap.min.js" defer></script>
diff --git a/site/assets/site.css b/site/assets/site.css
index 995321e..c12aa7b 100644
--- a/site/assets/site.css
+++ b/site/assets/site.css
@@ -542,7 +542,7 @@ h1 em, h2 em, h3 em, .tagline em, .signed-change em { color: var(--accent-italic
 .on-strong { --link-line: var(--line-cream); --link-rest-color: var(--outline-on-strong); }
 .on-strong .on-light { --link-line: var(--line-forest); --link-rest-color: var(--text-muted); }
 
-:where(.inline-link, .faq-a a, .qa-item a, .prose a:not([class]), .hero-note a, .hero-capture-help a, .hero-capture-status a, .foot-links a, .foot-contact a, .foot-legal a, .foot-legal .motion-toggle) {
+:where(.inline-link, .faq-a a, .qa-item a, .prose a:not([class]), .hero-note a, .hero-capture-help a, .hero-capture-status a, .foot-nav a, .foot-contact a, .foot-legal a, .foot-legal .motion-toggle) {
   text-decoration-line: underline;
   text-decoration-color: var(--link-rest-color, var(--text-muted));
   text-decoration-thickness: 1px;
@@ -554,7 +554,7 @@ h1 em, h2 em, h3 em, .tagline em, .signed-change em { color: var(--accent-italic
   background-size: 0% 2px;
   transition: background-size var(--dur-med) var(--ease-standard);
 }
-:where(.inline-link, .faq-a a, .qa-item a, .prose a:not([class]), .hero-note a, .hero-capture-help a, .hero-capture-status a, .foot-links a, .foot-contact a, .foot-legal a, .foot-legal .motion-toggle):is(:hover, :focus-visible) {
+:where(.inline-link, .faq-a a, .qa-item a, .prose a:not([class]), .hero-note a, .hero-capture-help a, .hero-capture-status a, .foot-nav a, .foot-contact a, .foot-legal a, .foot-legal .motion-toggle):is(:hover, :focus-visible) {
   background-size: var(--link-span, 100%) 2px;
 }
 
@@ -3339,26 +3339,49 @@ main > #questions:last-child { margin-bottom: calc(-1 * var(--radius-panel)); pa
 }
 
 /* ---------- footer ---------- */
+/* The site footer, the same on every page. A forest panel with 28px top corners; cream text (8.7:1), sage mist for the
+   quiet text and the column labels (7.55:1), focus in cream (from .on-strong).
+   Markup: footer.site-foot.on-strong > .wrap > (.foot-grid > .foot-brand + nav.foot-nav) + .foot-legal, then
+   img.foot-giant.
+   - .foot-brand: a.foot-home (the logo tile, 44px, named "Rose Practice Solutions, home"), the tagline, the line about
+     us, and .foot-contact ("Write to us" over the email address).
+   - nav.foot-nav[aria-label="Footer"]: three .foot-col, each an h2.foot-label (a small label, 13px/600 sage mist, not
+     a headline) over a ul of 44px links labelled by it: What we do, Who we work with, Company.
+   - .foot-legal: the copyright, the legal links and the pause button, in tracked-caps meta over a hairline.
+   - img.foot-giant: the wordmark (rose-wordmark-white.svg) the full width of the footer, in cream at 7% so it reads as
+     a tone of the forest (flat, no gradient). The footer's bottom edge crops it: --giant-show is how much of the word's
+     height shows (80%; the strap under it never does), --giant-tuck how much of it runs up under the content above
+     (30%, 62% on phones, where it sits under the legal links). The wordmark is .6245 of its width tall and the word
+     .481, so both turn into margins in % of the width. Over its tone cream measures 7.17:1 and sage mist 6.22:1.
+     Decorative: alt="" and aria-hidden; the tile is the home link.
+   Motion: site.js ("motion, with GSAP") lifts the wordmark the last 12% into its crop once, as it comes into view.
+   Without JavaScript or under reduced motion it is simply in place; like every one-off entrance, pausing lets it finish. */
 
 .site-foot {
-  padding-block: var(--space-16) var(--space-8);
+  --giant-show: .8;
+  --giant-tuck: .3;
+  position: relative;
+  isolation: isolate;
+  display: flow-root;
+  overflow: clip;
+  padding-top: var(--space-24);
   border-radius: 28px 28px 0 0;
   background: var(--surface-strong);
   color: var(--text-on-strong);
 }
 
-.foot-grid { display: grid; grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr); gap: var(--space-6) var(--space-12); align-items: start; }
-.foot-brand { grid-row: 1 / span 2; }
-.foot-links { display: flex; flex-wrap: wrap; gap: 0 var(--space-6); }
-.foot-brand { display: grid; justify-items: start; align-content: start; gap: var(--space-6); }
-/* the wordmark with its strap: 200px wide, never smaller */
-.foot-wordmark { width: 200px; height: auto; }
-.foot-about { max-width: 26em; font-size: var(--text-body-s); color: var(--sage-mist); }
-.site-foot .meta { color: var(--sage-mist); }
-.foot-contact { display: flex; flex-wrap: wrap; align-items: center; gap: 0 var(--space-3); }
+.foot-grid { display: grid; grid-template-columns: minmax(0, 5fr) minmax(0, 7fr); gap: var(--space-12) var(--space-16); align-items: start; }
+.foot-brand { display: grid; justify-items: start; align-content: start; }
+.foot-home { display: block; border-radius: var(--radius-input); }
+.foot-home img { width: 44px; height: 44px; }
+.foot-brand .tagline { margin-top: var(--space-8); font-size: var(--text-display-m); line-height: 1.1; }
+.foot-about { max-width: 26em; margin-top: var(--space-4); font-size: var(--text-body-s); color: var(--sage-mist); }
+.foot-contact { margin-top: var(--space-8); }
+.foot-label { font-family: var(--font-text); font-size: var(--text-label); font-weight: 600; line-height: 1.4; letter-spacing: var(--tracking-label); color: var(--sage-mist); }
+.foot-nav { display: grid; grid-template-columns: repeat(3, auto); justify-content: space-between; gap: var(--space-8); }
+.foot-col ul { margin-top: var(--space-2); }
 /* footer links take the site's link line in cream, with no rest underline (they read as a menu) */
-.foot-links a, .foot-contact a { --link-y: var(--link-flex-y); display: inline-flex; align-items: center; min-width: 44px; min-height: 44px; color: var(--text-on-strong); font-size: var(--text-body-s); font-weight: 500; text-decoration: none; overflow-wrap: anywhere; }
-.foot-contact p { min-height: 44px; display: flex; align-items: center; color: var(--sage-mist); }
+.foot-nav a, .foot-contact a { --link-y: var(--link-flex-y); display: inline-flex; align-items: center; min-width: 44px; min-height: 44px; color: var(--text-on-strong); font-size: var(--text-body-s); font-weight: 500; text-decoration: none; overflow-wrap: anywhere; }
 
 .foot-legal {
   display: flex;
@@ -3366,16 +3389,52 @@ main > #questions:last-child { margin-bottom: calc(-1 * var(--radius-panel)); pa
   align-items: center;
   justify-content: space-between;
   gap: var(--space-2) var(--space-6);
-  margin-top: var(--space-12);
+  margin-top: var(--space-16);
   padding-top: var(--space-4);
   border-top: var(--border-w) solid var(--line-on-strong);
 }
-
+.site-foot .meta { color: var(--sage-mist); }
 .foot-legal a { --link-y: var(--link-flex-y); display: inline-flex; align-items: center; min-height: 44px; text-decoration: none; }
 .foot-legal-links { display: flex; flex-wrap: wrap; gap: var(--space-2) var(--space-6); }
 /* a button that reads as the meta links beside it: .meta sets the type; this only takes off the button chrome */
 .foot-legal .motion-toggle { --link-y: var(--link-flex-y); min-height: 44px; padding: 0; border: 0; background-color: transparent; font-family: inherit; color: var(--sage-mist); text-decoration: none; cursor: pointer; }
 
+.foot-giant {
+  position: relative;
+  z-index: -1;
+  width: 100%;
+  max-width: none;
+  height: auto;
+  margin-top: calc(-.481 * var(--giant-tuck) * 100%);
+  margin-bottom: calc((.481 * var(--giant-show) - .6245) * 100%);
+  opacity: .07;
+  pointer-events: none;
+  user-select: none;
+}
+
+@media (max-width: 1024px) {
+  .foot-grid { grid-template-columns: minmax(0, 1fr); }
+}
+
+@media (max-width: 768px) {
+  .site-foot { --giant-show: .9; --giant-tuck: .72; padding-top: var(--space-12); }
+  .foot-grid { row-gap: var(--space-10); }
+  .foot-brand { grid-template-columns: auto minmax(0, 1fr); align-items: center; column-gap: var(--space-4); }
+  .foot-brand .tagline { margin-top: 0; font-size: var(--text-h2); }
+  .foot-about, .foot-contact { grid-column: 1 / -1; }
+  .foot-about { margin-top: var(--space-4); }
+  .foot-contact { margin-top: var(--space-5); }
+  .foot-legal { flex-direction: column; align-items: flex-start; margin-top: var(--space-8); }
+  .foot-legal-links { gap: 0 var(--space-6); }
+}
+
+@media (max-width: 600px) {
+  .foot-nav { grid-template-columns: repeat(2, minmax(0, 1fr)); grid-template-areas: "what company" "who ."; justify-content: stretch; gap: var(--space-5) var(--space-4); }
+  .foot-col:nth-child(1) { grid-area: what; }
+  .foot-col:nth-child(2) { grid-area: who; }
+  .foot-col:nth-child(3) { grid-area: company; }
+}
+
 /* ---------- pause animations ---------- */
 /* WCAG 2.2.2. The control is a script feature, so it shows only with JavaScript, and not under reduced motion,
    where nothing loops. Paused, the looping graphics and the call rings show their still, complete state, as
@@ -3415,12 +3474,6 @@ main > #questions:last-child { margin-bottom: calc(-1 * var(--radius-panel)); pa
   .js .nav-actions .btn { flex: 1 1 auto; width: auto; }
 }
 
-@media (max-width: 768px) {
-  .site-foot { padding-top: var(--space-12); }
-  .foot-grid { grid-template-columns: minmax(0, 1fr); gap: var(--space-6); }
-  .foot-brand { grid-row: auto; }
-}
-
 /* ---------- components reference page ---------- */
 
 .ref-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: var(--space-12) var(--gutter); align-items: start; }
diff --git a/site/assets/site.js b/site/assets/site.js
index a5ff59e..b28284d 100644
--- a/site/assets/site.js
+++ b/site/assets/site.js
@@ -282,6 +282,7 @@
   //   [data-anim="draw"]           an SVG line draws in
   //   [data-anim="status"]         a status row steps from new to called to booked
   //   [data-play]                  a small sample plays its steps once (site.css), starting as it comes into view
+  //   .foot-giant                  the footer's wordmark rises the last 12% into its crop, once, as it comes into view
   const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');
   const gs = window.gsap;
   const ST = window.ScrollTrigger;
@@ -549,6 +550,10 @@
         gs.fromTo(sig, { clipPath: 'inset(-20% 100% -20% 0)' }, { clipPath: 'inset(-20% -5% -20% 0)', duration: REST * 1.4, ease: OUT, scrollTrigger: { trigger: sig, start: 'top 88%', once: true } });
       });
 
+      // the footer's wordmark rises the last stretch into its crop as it comes into view (site.css "footer")
+      const giant = document.querySelector('.foot-giant');
+      if (giant) gs.from(giant, { yPercent: 12, duration: REST * 1.4, ease: 'power3.out', scrollTrigger: { trigger: giant, start: 'top 75%', once: true } });
+
       // the numeral on a numbered card counts up to its number as the card arrives
       gs.utils.toArray('.commit-num, .step-num').forEach((num) => {
         const text = num.textContent.trim();
diff --git a/site/components.html b/site/components.html
index e993c25..d44d542 100644
--- a/site/components.html
+++ b/site/components.html
@@ -1486,24 +1486,39 @@
   <div class="wrap">
     <div class="foot-grid">
       <div class="foot-brand">
-        <a href="/" aria-label="Rose Practice Solutions, home"><img class="foot-wordmark" src="/assets/logo/rose-wordmark-white.svg" alt="Rose Practice Solutions" width="200" height="125" loading="lazy" decoding="async"></a>
+        <a class="foot-home" href="/" aria-label="Rose Practice Solutions, home"><img src="/assets/logo/rose-mark-tile-light.svg" alt="" width="44" height="44" loading="lazy" decoding="async"></a>
         <p class="tagline"><em>Tended,</em> not templated.</p>
         <p class="foot-about">Rose Practice Solutions is a fully remote orthodontic and dental marketing company in the United States.</p>
+        <div class="foot-contact">
+          <p class="foot-label">Write to us</p>
+          <a href="mailto:hello@rosepracticesolutions.com">hello@rosepracticesolutions.com</a>
+        </div>
       </div>
-      <ul class="foot-links">
-        <li><a href="/services">Services</a></li>
-        <li><a href="/services/add-ons">Add-ons and projects</a></li>
-        <li><a href="/orthodontic-marketing">Orthodontic marketing</a></li>
-        <li><a href="/dental-marketing">Dental marketing</a></li>
-        <li><a href="/pricing">Pricing</a></li>
-        <li><a href="/about">About</a></li>
-        <li><a href="/contact">Get in touch</a></li>
-      </ul>
-      <div class="foot-contact">
-        <p class="body-s">Write to us</p>
-        <a href="/contact#book">Send us a message</a>
-        <a href="mailto:hello@rosepracticesolutions.com">hello@rosepracticesolutions.com</a>
-      </div>
+      <nav class="foot-nav" aria-label="Footer">
+        <div class="foot-col">
+          <h2 class="foot-label" id="foot-what">What we do</h2>
+          <ul aria-labelledby="foot-what">
+            <li><a href="/services">Services</a></li>
+            <li><a href="/services/add-ons">Add-ons and projects</a></li>
+            <li><a href="/pricing">Pricing</a></li>
+          </ul>
+        </div>
+        <div class="foot-col">
+          <h2 class="foot-label" id="foot-who">Who we work with</h2>
+          <ul aria-labelledby="foot-who">
+            <li><a href="/orthodontic-marketing">Orthodontic marketing</a></li>
+            <li><a href="/dental-marketing">Dental marketing</a></li>
+          </ul>
+        </div>
+        <div class="foot-col">
+          <h2 class="foot-label" id="foot-company">Company</h2>
+          <ul aria-labelledby="foot-company">
+            <li><a href="/about">About</a></li>
+            <li><a href="/contact">Get in touch</a></li>
+            <li><a href="/contact#book">Send us a message</a></li>
+          </ul>
+        </div>
+      </nav>
     </div>
     <div class="foot-legal">
       <p class="meta">&copy; 2026 Rose Practice Solutions</p>
@@ -1516,6 +1531,7 @@
       </div>
     </div>
   </div>
+  <img class="foot-giant" src="/assets/logo/rose-wordmark-white.svg" alt="" aria-hidden="true" width="1595" height="996" loading="lazy" decoding="async">
 </footer>
 
 <script src="/assets/vendor/gsap.min.js" defer></script>
diff --git a/site/contact.html b/site/contact.html
index 6599830..debd451 100644
--- a/site/contact.html
+++ b/site/contact.html
@@ -315,24 +315,39 @@ height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
   <div class="wrap">
     <div class="foot-grid">
       <div class="foot-brand">
-        <a href="/" aria-label="Rose Practice Solutions, home"><img class="foot-wordmark" src="/assets/logo/rose-wordmark-white.svg" alt="Rose Practice Solutions" width="200" height="125" loading="lazy" decoding="async"></a>
+        <a class="foot-home" href="/" aria-label="Rose Practice Solutions, home"><img src="/assets/logo/rose-mark-tile-light.svg" alt="" width="44" height="44" loading="lazy" decoding="async"></a>
         <p class="tagline"><em>Tended,</em> not templated.</p>
         <p class="foot-about">Rose Practice Solutions is a fully remote orthodontic and dental marketing company in the United States.</p>
+        <div class="foot-contact">
+          <p class="foot-label">Write to us</p>
+          <a href="mailto:hello@rosepracticesolutions.com">hello@rosepracticesolutions.com</a>
+        </div>
       </div>
-      <ul class="foot-links">
-        <li><a href="/services">Services</a></li>
-        <li><a href="/services/add-ons">Add-ons and projects</a></li>
-        <li><a href="/orthodontic-marketing">Orthodontic marketing</a></li>
-        <li><a href="/dental-marketing">Dental marketing</a></li>
-        <li><a href="/pricing">Pricing</a></li>
-        <li><a href="/about">About</a></li>
-        <li><a href="/contact">Get in touch</a></li>
-      </ul>
-      <div class="foot-contact">
-        <p class="body-s">Write to us</p>
-        <a href="/contact#book">Send us a message</a>
-        <a href="mailto:hello@rosepracticesolutions.com">hello@rosepracticesolutions.com</a>
-      </div>
+      <nav class="foot-nav" aria-label="Footer">
+        <div class="foot-col">
+          <h2 class="foot-label" id="foot-what">What we do</h2>
+          <ul aria-labelledby="foot-what">
+            <li><a href="/services">Services</a></li>
+            <li><a href="/services/add-ons">Add-ons and projects</a></li>
+            <li><a href="/pricing">Pricing</a></li>
+          </ul>
+        </div>
+        <div class="foot-col">
+          <h2 class="foot-label" id="foot-who">Who we work with</h2>
+          <ul aria-labelledby="foot-who">
+            <li><a href="/orthodontic-marketing">Orthodontic marketing</a></li>
+            <li><a href="/dental-marketing">Dental marketing</a></li>
+          </ul>
+        </div>
+        <div class="foot-col">
+          <h2 class="foot-label" id="foot-company">Company</h2>
+          <ul aria-labelledby="foot-company">
+            <li><a href="/about">About</a></li>
+            <li><a href="/contact">Get in touch</a></li>
+            <li><a href="/contact#book">Send us a message</a></li>
+          </ul>
+        </div>
+      </nav>
     </div>
     <div class="foot-legal">
       <p class="meta">&copy; 2026 Rose Practice Solutions</p>
@@ -345,6 +360,7 @@ height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
       </div>
     </div>
   </div>
+  <img class="foot-giant" src="/assets/logo/rose-wordmark-white.svg" alt="" aria-hidden="true" width="1595" height="996" loading="lazy" decoding="async">
 </footer>
 
 <script src="/assets/vendor/gsap.min.js" defer></script>
diff --git a/site/dental-marketing.html b/site/dental-marketing.html
index dd2ca34..4b59898 100644
--- a/site/dental-marketing.html
+++ b/site/dental-marketing.html
@@ -618,24 +618,39 @@ height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
   <div class="wrap">
     <div class="foot-grid">
       <div class="foot-brand">
-        <a href="/" aria-label="Rose Practice Solutions, home"><img class="foot-wordmark" src="/assets/logo/rose-wordmark-white.svg" alt="Rose Practice Solutions" width="200" height="125" loading="lazy" decoding="async"></a>
+        <a class="foot-home" href="/" aria-label="Rose Practice Solutions, home"><img src="/assets/logo/rose-mark-tile-light.svg" alt="" width="44" height="44" loading="lazy" decoding="async"></a>
         <p class="tagline"><em>Tended,</em> not templated.</p>
         <p class="foot-about">Rose Practice Solutions is a fully remote orthodontic and dental marketing company in the United States.</p>
+        <div class="foot-contact">
+          <p class="foot-label">Write to us</p>
+          <a href="mailto:hello@rosepracticesolutions.com">hello@rosepracticesolutions.com</a>
+        </div>
       </div>
-      <ul class="foot-links">
-        <li><a href="/services">Services</a></li>
-        <li><a href="/services/add-ons">Add-ons and projects</a></li>
-        <li><a href="/orthodontic-marketing">Orthodontic marketing</a></li>
-        <li><a href="/dental-marketing">Dental marketing</a></li>
-        <li><a href="/pricing">Pricing</a></li>
-        <li><a href="/about">About</a></li>
-        <li><a href="/contact">Get in touch</a></li>
-      </ul>
-      <div class="foot-contact">
-        <p class="body-s">Write to us</p>
-        <a href="/contact#book">Send us a message</a>
-        <a href="mailto:hello@rosepracticesolutions.com">hello@rosepracticesolutions.com</a>
-      </div>
+      <nav class="foot-nav" aria-label="Footer">
+        <div class="foot-col">
+          <h2 class="foot-label" id="foot-what">What we do</h2>
+          <ul aria-labelledby="foot-what">
+            <li><a href="/services">Services</a></li>
+            <li><a href="/services/add-ons">Add-ons and projects</a></li>
+            <li><a href="/pricing">Pricing</a></li>
+          </ul>
+        </div>
+        <div class="foot-col">
+          <h2 class="foot-label" id="foot-who">Who we work with</h2>
+          <ul aria-labelledby="foot-who">
+            <li><a href="/orthodontic-marketing">Orthodontic marketing</a></li>
+            <li><a href="/dental-marketing">Dental marketing</a></li>
+          </ul>
+        </div>
+        <div class="foot-col">
+          <h2 class="foot-label" id="foot-company">Company</h2>
+          <ul aria-labelledby="foot-company">
+            <li><a href="/about">About</a></li>
+            <li><a href="/contact">Get in touch</a></li>
+            <li><a href="/contact#book">Send us a message</a></li>
+          </ul>
+        </div>
+      </nav>
     </div>
     <div class="foot-legal">
       <p class="meta">&copy; 2026 Rose Practice Solutions</p>
@@ -648,6 +663,7 @@ height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
       </div>
     </div>
   </div>
+  <img class="foot-giant" src="/assets/logo/rose-wordmark-white.svg" alt="" aria-hidden="true" width="1595" height="996" loading="lazy" decoding="async">
 </footer>
 
 <script src="/assets/vendor/gsap.min.js" defer></script>
diff --git a/site/index.html b/site/index.html
index c804bae..1795554 100644
--- a/site/index.html
+++ b/site/index.html
@@ -927,24 +927,39 @@ height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
   <div class="wrap">
     <div class="foot-grid">
       <div class="foot-brand">
-        <a href="/" aria-label="Rose Practice Solutions, home"><img class="foot-wordmark" src="/assets/logo/rose-wordmark-white.svg" alt="Rose Practice Solutions" width="200" height="125" loading="lazy" decoding="async"></a>
+        <a class="foot-home" href="/" aria-label="Rose Practice Solutions, home"><img src="/assets/logo/rose-mark-tile-light.svg" alt="" width="44" height="44" loading="lazy" decoding="async"></a>
         <p class="tagline"><em>Tended,</em> not templated.</p>
         <p class="foot-about">Rose Practice Solutions is a fully remote orthodontic and dental marketing company in the United States.</p>
+        <div class="foot-contact">
+          <p class="foot-label">Write to us</p>
+          <a href="mailto:hello@rosepracticesolutions.com">hello@rosepracticesolutions.com</a>
+        </div>
       </div>
-      <ul class="foot-links">
-        <li><a href="/services">Services</a></li>
-        <li><a href="/services/add-ons">Add-ons and projects</a></li>
-        <li><a href="/orthodontic-marketing">Orthodontic marketing</a></li>
-        <li><a href="/dental-marketing">Dental marketing</a></li>
-        <li><a href="/pricing">Pricing</a></li>
-        <li><a href="/about">About</a></li>
-        <li><a href="/contact">Get in touch</a></li>
-      </ul>
-      <div class="foot-contact">
-        <p class="body-s">Write to us</p>
-        <a href="/contact#book">Send us a message</a>
-        <a href="mailto:hello@rosepracticesolutions.com">hello@rosepracticesolutions.com</a>
-      </div>
+      <nav class="foot-nav" aria-label="Footer">
+        <div class="foot-col">
+          <h2 class="foot-label" id="foot-what">What we do</h2>
+          <ul aria-labelledby="foot-what">
+            <li><a href="/services">Services</a></li>
+            <li><a href="/services/add-ons">Add-ons and projects</a></li>
+            <li><a href="/pricing">Pricing</a></li>
+          </ul>
+        </div>
+        <div class="foot-col">
+          <h2 class="foot-label" id="foot-who">Who we work with</h2>
+          <ul aria-labelledby="foot-who">
+            <li><a href="/orthodontic-marketing">Orthodontic marketing</a></li>
+            <li><a href="/dental-marketing">Dental marketing</a></li>
+          </ul>
+        </div>
+        <div class="foot-col">
+          <h2 class="foot-label" id="foot-company">Company</h2>
+          <ul aria-labelledby="foot-company">
+            <li><a href="/about">About</a></li>
+            <li><a href="/contact">Get in touch</a></li>
+            <li><a href="/contact#book">Send us a message</a></li>
+          </ul>
+        </div>
+      </nav>
     </div>
     <div class="foot-legal">
       <p class="meta">&copy; 2026 Rose Practice Solutions</p>
@@ -957,6 +972,7 @@ height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
       </div>
     </div>
   </div>
+  <img class="foot-giant" src="/assets/logo/rose-wordmark-white.svg" alt="" aria-hidden="true" width="1595" height="996" loading="lazy" decoding="async">
 </footer>
 
 <script src="/assets/vendor/gsap.min.js" defer></script>
diff --git a/site/orthodontic-marketing.html b/site/orthodontic-marketing.html
index ed4de22..8f4a02f 100644
--- a/site/orthodontic-marketing.html
+++ b/site/orthodontic-marketing.html
@@ -541,24 +541,39 @@ height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
   <div class="wrap">
     <div class="foot-grid">
       <div class="foot-brand">
-        <a href="/" aria-label="Rose Practice Solutions, home"><img class="foot-wordmark" src="/assets/logo/rose-wordmark-white.svg" alt="Rose Practice Solutions" width="200" height="125" loading="lazy" decoding="async"></a>
+        <a class="foot-home" href="/" aria-label="Rose Practice Solutions, home"><img src="/assets/logo/rose-mark-tile-light.svg" alt="" width="44" height="44" loading="lazy" decoding="async"></a>
         <p class="tagline"><em>Tended,</em> not templated.</p>
         <p class="foot-about">Rose Practice Solutions is a fully remote orthodontic and dental marketing company in the United States.</p>
+        <div class="foot-contact">
+          <p class="foot-label">Write to us</p>
+          <a href="mailto:hello@rosepracticesolutions.com">hello@rosepracticesolutions.com</a>
+        </div>
       </div>
-      <ul class="foot-links">
-        <li><a href="/services">Services</a></li>
-        <li><a href="/services/add-ons">Add-ons and projects</a></li>
-        <li><a href="/orthodontic-marketing">Orthodontic marketing</a></li>
-        <li><a href="/dental-marketing">Dental marketing</a></li>
-        <li><a href="/pricing">Pricing</a></li>
-        <li><a href="/about">About</a></li>
-        <li><a href="/contact">Get in touch</a></li>
-      </ul>
-      <div class="foot-contact">
-        <p class="body-s">Write to us</p>
-        <a href="/contact#book">Send us a message</a>
-        <a href="mailto:hello@rosepracticesolutions.com">hello@rosepracticesolutions.com</a>
-      </div>
+      <nav class="foot-nav" aria-label="Footer">
+        <div class="foot-col">
+          <h2 class="foot-label" id="foot-what">What we do</h2>
+          <ul aria-labelledby="foot-what">
+            <li><a href="/services">Services</a></li>
+            <li><a href="/services/add-ons">Add-ons and projects</a></li>
+            <li><a href="/pricing">Pricing</a></li>
+          </ul>
+        </div>
+        <div class="foot-col">
+          <h2 class="foot-label" id="foot-who">Who we work with</h2>
+          <ul aria-labelledby="foot-who">
+            <li><a href="/orthodontic-marketing">Orthodontic marketing</a></li>
+            <li><a href="/dental-marketing">Dental marketing</a></li>
+          </ul>
+        </div>
+        <div class="foot-col">
+          <h2 class="foot-label" id="foot-company">Company</h2>
+          <ul aria-labelledby="foot-company">
+            <li><a href="/about">About</a></li>
+            <li><a href="/contact">Get in touch</a></li>
+            <li><a href="/contact#book">Send us a message</a></li>
+          </ul>
+        </div>
+      </nav>
     </div>
     <div class="foot-legal">
       <p class="meta">&copy; 2026 Rose Practice Solutions</p>
@@ -571,6 +586,7 @@ height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
       </div>
     </div>
   </div>
+  <img class="foot-giant" src="/assets/logo/rose-wordmark-white.svg" alt="" aria-hidden="true" width="1595" height="996" loading="lazy" decoding="async">
 </footer>
 
 <script src="/assets/vendor/gsap.min.js" defer></script>
diff --git a/site/pricing.html b/site/pricing.html
index 73a1562..39a36a5 100644
--- a/site/pricing.html
+++ b/site/pricing.html
@@ -485,24 +485,39 @@ height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
   <div class="wrap">
     <div class="foot-grid">
       <div class="foot-brand">
-        <a href="/" aria-label="Rose Practice Solutions, home"><img class="foot-wordmark" src="/assets/logo/rose-wordmark-white.svg" alt="Rose Practice Solutions" width="200" height="125" loading="lazy" decoding="async"></a>
+        <a class="foot-home" href="/" aria-label="Rose Practice Solutions, home"><img src="/assets/logo/rose-mark-tile-light.svg" alt="" width="44" height="44" loading="lazy" decoding="async"></a>
         <p class="tagline"><em>Tended,</em> not templated.</p>
         <p class="foot-about">Rose Practice Solutions is a fully remote orthodontic and dental marketing company in the United States.</p>
+        <div class="foot-contact">
+          <p class="foot-label">Write to us</p>
+          <a href="mailto:hello@rosepracticesolutions.com">hello@rosepracticesolutions.com</a>
+        </div>
       </div>
-      <ul class="foot-links">
-        <li><a href="/services">Services</a></li>
-        <li><a href="/services/add-ons">Add-ons and projects</a></li>
-        <li><a href="/orthodontic-marketing">Orthodontic marketing</a></li>
-        <li><a href="/dental-marketing">Dental marketing</a></li>
-        <li><a href="/pricing">Pricing</a></li>
-        <li><a href="/about">About</a></li>
-        <li><a href="/contact">Get in touch</a></li>
-      </ul>
-      <div class="foot-contact">
-        <p class="body-s">Write to us</p>
-        <a href="/contact#book">Send us a message</a>
-        <a href="mailto:hello@rosepracticesolutions.com">hello@rosepracticesolutions.com</a>
-      </div>
+      <nav class="foot-nav" aria-label="Footer">
+        <div class="foot-col">
+          <h2 class="foot-label" id="foot-what">What we do</h2>
+          <ul aria-labelledby="foot-what">
+            <li><a href="/services">Services</a></li>
+            <li><a href="/services/add-ons">Add-ons and projects</a></li>
+            <li><a href="/pricing">Pricing</a></li>
+          </ul>
+        </div>
+        <div class="foot-col">
+          <h2 class="foot-label" id="foot-who">Who we work with</h2>
+          <ul aria-labelledby="foot-who">
+            <li><a href="/orthodontic-marketing">Orthodontic marketing</a></li>
+            <li><a href="/dental-marketing">Dental marketing</a></li>
+          </ul>
+        </div>
+        <div class="foot-col">
+          <h2 class="foot-label" id="foot-company">Company</h2>
+          <ul aria-labelledby="foot-company">
+            <li><a href="/about">About</a></li>
+            <li><a href="/contact">Get in touch</a></li>
+            <li><a href="/contact#book">Send us a message</a></li>
+          </ul>
+        </div>
+      </nav>
     </div>
     <div class="foot-legal">
       <p class="meta">&copy; 2026 Rose Practice Solutions</p>
@@ -515,6 +530,7 @@ height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
       </div>
     </div>
   </div>
+  <img class="foot-giant" src="/assets/logo/rose-wordmark-white.svg" alt="" aria-hidden="true" width="1595" height="996" loading="lazy" decoding="async">
 </footer>
 
 <script src="/assets/vendor/gsap.min.js" defer></script>
diff --git a/site/privacy.html b/site/privacy.html
index e42ab10..2e1cc31 100644
--- a/site/privacy.html
+++ b/site/privacy.html
@@ -187,24 +187,39 @@ height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
   <div class="wrap">
     <div class="foot-grid">
       <div class="foot-brand">
-        <a href="/" aria-label="Rose Practice Solutions, home"><img class="foot-wordmark" src="/assets/logo/rose-wordmark-white.svg" alt="Rose Practice Solutions" width="200" height="125" loading="lazy" decoding="async"></a>
+        <a class="foot-home" href="/" aria-label="Rose Practice Solutions, home"><img src="/assets/logo/rose-mark-tile-light.svg" alt="" width="44" height="44" loading="lazy" decoding="async"></a>
         <p class="tagline"><em>Tended,</em> not templated.</p>
         <p class="foot-about">Rose Practice Solutions is a fully remote orthodontic and dental marketing company in the United States.</p>
+        <div class="foot-contact">
+          <p class="foot-label">Write to us</p>
+          <a href="mailto:hello@rosepracticesolutions.com">hello@rosepracticesolutions.com</a>
+        </div>
       </div>
-      <ul class="foot-links">
-        <li><a href="/services">Services</a></li>
-        <li><a href="/services/add-ons">Add-ons and projects</a></li>
-        <li><a href="/orthodontic-marketing">Orthodontic marketing</a></li>
-        <li><a href="/dental-marketing">Dental marketing</a></li>
-        <li><a href="/pricing">Pricing</a></li>
-        <li><a href="/about">About</a></li>
-        <li><a href="/contact">Get in touch</a></li>
-      </ul>
-      <div class="foot-contact">
-        <p class="body-s">Write to us</p>
-        <a href="/contact#book">Send us a message</a>
-        <a href="mailto:hello@rosepracticesolutions.com">hello@rosepracticesolutions.com</a>
-      </div>
+      <nav class="foot-nav" aria-label="Footer">
+        <div class="foot-col">
+          <h2 class="foot-label" id="foot-what">What we do</h2>
+          <ul aria-labelledby="foot-what">
+            <li><a href="/services">Services</a></li>
+            <li><a href="/services/add-ons">Add-ons and projects</a></li>
+            <li><a href="/pricing">Pricing</a></li>
+          </ul>
+        </div>
+        <div class="foot-col">
+          <h2 class="foot-label" id="foot-who">Who we work with</h2>
+          <ul aria-labelledby="foot-who">
+            <li><a href="/orthodontic-marketing">Orthodontic marketing</a></li>
+            <li><a href="/dental-marketing">Dental marketing</a></li>
+          </ul>
+        </div>
+        <div class="foot-col">
+          <h2 class="foot-label" id="foot-company">Company</h2>
+          <ul aria-labelledby="foot-company">
+            <li><a href="/about">About</a></li>
+            <li><a href="/contact">Get in touch</a></li>
+            <li><a href="/contact#book">Send us a message</a></li>
+          </ul>
+        </div>
+      </nav>
     </div>
     <div class="foot-legal">
       <p class="meta">&copy; 2026 Rose Practice Solutions</p>
@@ -217,6 +232,7 @@ height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
       </div>
     </div>
   </div>
+  <img class="foot-giant" src="/assets/logo/rose-wordmark-white.svg" alt="" aria-hidden="true" width="1595" height="996" loading="lazy" decoding="async">
 </footer>
 
 <!-- No GSAP on this page: it has no graphics to animate, and site.js runs without it. -->
diff --git a/site/services.html b/site/services.html
index 2f2d3fd..c0e9ead 100644
--- a/site/services.html
+++ b/site/services.html
@@ -523,24 +523,39 @@ height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
   <div class="wrap">
     <div class="foot-grid">
       <div class="foot-brand">
-        <a href="/" aria-label="Rose Practice Solutions, home"><img class="foot-wordmark" src="/assets/logo/rose-wordmark-white.svg" alt="Rose Practice Solutions" width="200" height="125" loading="lazy" decoding="async"></a>
+        <a class="foot-home" href="/" aria-label="Rose Practice Solutions, home"><img src="/assets/logo/rose-mark-tile-light.svg" alt="" width="44" height="44" loading="lazy" decoding="async"></a>
         <p class="tagline"><em>Tended,</em> not templated.</p>
         <p class="foot-about">Rose Practice Solutions is a fully remote orthodontic and dental marketing company in the United States.</p>
+        <div class="foot-contact">
+          <p class="foot-label">Write to us</p>
+          <a href="mailto:hello@rosepracticesolutions.com">hello@rosepracticesolutions.com</a>
+        </div>
       </div>
-      <ul class="foot-links">
-        <li><a href="/services">Services</a></li>
-        <li><a href="/services/add-ons">Add-ons and projects</a></li>
-        <li><a href="/orthodontic-marketing">Orthodontic marketing</a></li>
-        <li><a href="/dental-marketing">Dental marketing</a></li>
-        <li><a href="/pricing">Pricing</a></li>
-        <li><a href="/about">About</a></li>
-        <li><a href="/contact">Get in touch</a></li>
-      </ul>
-      <div class="foot-contact">
-        <p class="body-s">Write to us</p>
-        <a href="/contact#book">Send us a message</a>
-        <a href="mailto:hello@rosepracticesolutions.com">hello@rosepracticesolutions.com</a>
-      </div>
+      <nav class="foot-nav" aria-label="Footer">
+        <div class="foot-col">
+          <h2 class="foot-label" id="foot-what">What we do</h2>
+          <ul aria-labelledby="foot-what">
+            <li><a href="/services">Services</a></li>
+            <li><a href="/services/add-ons">Add-ons and projects</a></li>
+            <li><a href="/pricing">Pricing</a></li>
+          </ul>
+        </div>
+        <div class="foot-col">
+          <h2 class="foot-label" id="foot-who">Who we work with</h2>
+          <ul aria-labelledby="foot-who">
+            <li><a href="/orthodontic-marketing">Orthodontic marketing</a></li>
+            <li><a href="/dental-marketing">Dental marketing</a></li>
+          </ul>
+        </div>
+        <div class="foot-col">
+          <h2 class="foot-label" id="foot-company">Company</h2>
+          <ul aria-labelledby="foot-company">
+            <li><a href="/about">About</a></li>
+            <li><a href="/contact">Get in touch</a></li>
+            <li><a href="/contact#book">Send us a message</a></li>
+          </ul>
+        </div>
+      </nav>
     </div>
     <div class="foot-legal">
       <p class="meta">&copy; 2026 Rose Practice Solutions</p>
@@ -553,6 +568,7 @@ height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
       </div>
     </div>
   </div>
+  <img class="foot-giant" src="/assets/logo/rose-wordmark-white.svg" alt="" aria-hidden="true" width="1595" height="996" loading="lazy" decoding="async">
 </footer>
 
 <script src="/assets/vendor/gsap.min.js" defer></script>
diff --git a/site/services/add-ons.html b/site/services/add-ons.html
index 9f89767..c55d58d 100644
--- a/site/services/add-ons.html
+++ b/site/services/add-ons.html
@@ -453,24 +453,39 @@ height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
   <div class="wrap">
     <div class="foot-grid">
       <div class="foot-brand">
-        <a href="/" aria-label="Rose Practice Solutions, home"><img class="foot-wordmark" src="/assets/logo/rose-wordmark-white.svg" alt="Rose Practice Solutions" width="200" height="125" loading="lazy" decoding="async"></a>
+        <a class="foot-home" href="/" aria-label="Rose Practice Solutions, home"><img src="/assets/logo/rose-mark-tile-light.svg" alt="" width="44" height="44" loading="lazy" decoding="async"></a>
         <p class="tagline"><em>Tended,</em> not templated.</p>
         <p class="foot-about">Rose Practice Solutions is a fully remote orthodontic and dental marketing company in the United States.</p>
+        <div class="foot-contact">
+          <p class="foot-label">Write to us</p>
+          <a href="mailto:hello@rosepracticesolutions.com">hello@rosepracticesolutions.com</a>
+        </div>
       </div>
-      <ul class="foot-links">
-        <li><a href="/services">Services</a></li>
-        <li><a href="/services/add-ons">Add-ons and projects</a></li>
-        <li><a href="/orthodontic-marketing">Orthodontic marketing</a></li>
-        <li><a href="/dental-marketing">Dental marketing</a></li>
-        <li><a href="/pricing">Pricing</a></li>
-        <li><a href="/about">About</a></li>
-        <li><a href="/contact">Get in touch</a></li>
-      </ul>
-      <div class="foot-contact">
-        <p class="body-s">Write to us</p>
-        <a href="/contact#book">Send us a message</a>
-        <a href="mailto:hello@rosepracticesolutions.com">hello@rosepracticesolutions.com</a>
-      </div>
+      <nav class="foot-nav" aria-label="Footer">
+        <div class="foot-col">
+          <h2 class="foot-label" id="foot-what">What we do</h2>
+          <ul aria-labelledby="foot-what">
+            <li><a href="/services">Services</a></li>
+            <li><a href="/services/add-ons">Add-ons and projects</a></li>
+            <li><a href="/pricing">Pricing</a></li>
+          </ul>
+        </div>
+        <div class="foot-col">
+          <h2 class="foot-label" id="foot-who">Who we work with</h2>
+          <ul aria-labelledby="foot-who">
+            <li><a href="/orthodontic-marketing">Orthodontic marketing</a></li>
+            <li><a href="/dental-marketing">Dental marketing</a></li>
+          </ul>
+        </div>
+        <div class="foot-col">
+          <h2 class="foot-label" id="foot-company">Company</h2>
+          <ul aria-labelledby="foot-company">
+            <li><a href="/about">About</a></li>
+            <li><a href="/contact">Get in touch</a></li>
+            <li><a href="/contact#book">Send us a message</a></li>
+          </ul>
+        </div>
+      </nav>
     </div>
     <div class="foot-legal">
       <p class="meta">&copy; 2026 Rose Practice Solutions</p>
@@ -483,6 +498,7 @@ height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
       </div>
     </div>
   </div>
+  <img class="foot-giant" src="/assets/logo/rose-wordmark-white.svg" alt="" aria-hidden="true" width="1595" height="996" loading="lazy" decoding="async">
 </footer>
 
 <script src="/assets/vendor/gsap.min.js" defer></script>
diff --git a/site/services/paid-ads.html b/site/services/paid-ads.html
index 68a37e3..10c22bd 100644
--- a/site/services/paid-ads.html
+++ b/site/services/paid-ads.html
@@ -442,24 +442,39 @@ height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
   <div class="wrap">
     <div class="foot-grid">
       <div class="foot-brand">
-        <a href="/" aria-label="Rose Practice Solutions, home"><img class="foot-wordmark" src="/assets/logo/rose-wordmark-white.svg" alt="Rose Practice Solutions" width="200" height="125" loading="lazy" decoding="async"></a>
+        <a class="foot-home" href="/" aria-label="Rose Practice Solutions, home"><img src="/assets/logo/rose-mark-tile-light.svg" alt="" width="44" height="44" loading="lazy" decoding="async"></a>
         <p class="tagline"><em>Tended,</em> not templated.</p>
         <p class="foot-about">Rose Practice Solutions is a fully remote orthodontic and dental marketing company in the United States.</p>
+        <div class="foot-contact">
+          <p class="foot-label">Write to us</p>
+          <a href="mailto:hello@rosepracticesolutions.com">hello@rosepracticesolutions.com</a>
+        </div>
       </div>
-      <ul class="foot-links">
-        <li><a href="/services">Services</a></li>
-        <li><a href="/services/add-ons">Add-ons and projects</a></li>
-        <li><a href="/orthodontic-marketing">Orthodontic marketing</a></li>
-        <li><a href="/dental-marketing">Dental marketing</a></li>
-        <li><a href="/pricing">Pricing</a></li>
-        <li><a href="/about">About</a></li>
-        <li><a href="/contact">Get in touch</a></li>
-      </ul>
-      <div class="foot-contact">
-        <p class="body-s">Write to us</p>
-        <a href="/contact#book">Send us a message</a>
-        <a href="mailto:hello@rosepracticesolutions.com">hello@rosepracticesolutions.com</a>
-      </div>
+      <nav class="foot-nav" aria-label="Footer">
+        <div class="foot-col">
+          <h2 class="foot-label" id="foot-what">What we do</h2>
+          <ul aria-labelledby="foot-what">
+            <li><a href="/services">Services</a></li>
+            <li><a href="/services/add-ons">Add-ons and projects</a></li>
+            <li><a href="/pricing">Pricing</a></li>
+          </ul>
+        </div>
+        <div class="foot-col">
+          <h2 class="foot-label" id="foot-who">Who we work with</h2>
+          <ul aria-labelledby="foot-who">
+            <li><a href="/orthodontic-marketing">Orthodontic marketing</a></li>
+            <li><a href="/dental-marketing">Dental marketing</a></li>
+          </ul>
+        </div>
+        <div class="foot-col">
+          <h2 class="foot-label" id="foot-company">Company</h2>
+          <ul aria-labelledby="foot-company">
+            <li><a href="/about">About</a></li>
+            <li><a href="/contact">Get in touch</a></li>
+            <li><a href="/contact#book">Send us a message</a></li>
+          </ul>
+        </div>
+      </nav>
     </div>
     <div class="foot-legal">
       <p class="meta">&copy; 2026 Rose Practice Solutions</p>
@@ -472,6 +487,7 @@ height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
       </div>
     </div>
   </div>
+  <img class="foot-giant" src="/assets/logo/rose-wordmark-white.svg" alt="" aria-hidden="true" width="1595" height="996" loading="lazy" decoding="async">
 </footer>
 
 <script src="/assets/vendor/gsap.min.js" defer></script>
diff --git a/site/services/patient-follow-up.html b/site/services/patient-follow-up.html
index fb27086..f783a3b 100644
--- a/site/services/patient-follow-up.html
+++ b/site/services/patient-follow-up.html
@@ -490,24 +490,39 @@ height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
   <div class="wrap">
     <div class="foot-grid">
       <div class="foot-brand">
-        <a href="/" aria-label="Rose Practice Solutions, home"><img class="foot-wordmark" src="/assets/logo/rose-wordmark-white.svg" alt="Rose Practice Solutions" width="200" height="125" loading="lazy" decoding="async"></a>
+        <a class="foot-home" href="/" aria-label="Rose Practice Solutions, home"><img src="/assets/logo/rose-mark-tile-light.svg" alt="" width="44" height="44" loading="lazy" decoding="async"></a>
         <p class="tagline"><em>Tended,</em> not templated.</p>
         <p class="foot-about">Rose Practice Solutions is a fully remote orthodontic and dental marketing company in the United States.</p>
+        <div class="foot-contact">
+          <p class="foot-label">Write to us</p>
+          <a href="mailto:hello@rosepracticesolutions.com">hello@rosepracticesolutions.com</a>
+        </div>
       </div>
-      <ul class="foot-links">
-        <li><a href="/services">Services</a></li>
-        <li><a href="/services/add-ons">Add-ons and projects</a></li>
-        <li><a href="/orthodontic-marketing">Orthodontic marketing</a></li>
-        <li><a href="/dental-marketing">Dental marketing</a></li>
-        <li><a href="/pricing">Pricing</a></li>
-        <li><a href="/about">About</a></li>
-        <li><a href="/contact">Get in touch</a></li>
-      </ul>
-      <div class="foot-contact">
-        <p class="body-s">Write to us</p>
-        <a href="/contact#book">Send us a message</a>
-        <a href="mailto:hello@rosepracticesolutions.com">hello@rosepracticesolutions.com</a>
-      </div>
+      <nav class="foot-nav" aria-label="Footer">
+        <div class="foot-col">
+          <h2 class="foot-label" id="foot-what">What we do</h2>
+          <ul aria-labelledby="foot-what">
+            <li><a href="/services">Services</a></li>
+            <li><a href="/services/add-ons">Add-ons and projects</a></li>
+            <li><a href="/pricing">Pricing</a></li>
+          </ul>
+        </div>
+        <div class="foot-col">
+          <h2 class="foot-label" id="foot-who">Who we work with</h2>
+          <ul aria-labelledby="foot-who">
+            <li><a href="/orthodontic-marketing">Orthodontic marketing</a></li>
+            <li><a href="/dental-marketing">Dental marketing</a></li>
+          </ul>
+        </div>
+        <div class="foot-col">
+          <h2 class="foot-label" id="foot-company">Company</h2>
+          <ul aria-labelledby="foot-company">
+            <li><a href="/about">About</a></li>
+            <li><a href="/contact">Get in touch</a></li>
+            <li><a href="/contact#book">Send us a message</a></li>
+          </ul>
+        </div>
+      </nav>
     </div>
     <div class="foot-legal">
       <p class="meta">&copy; 2026 Rose Practice Solutions</p>
@@ -520,6 +535,7 @@ height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
       </div>
     </div>
   </div>
+  <img class="foot-giant" src="/assets/logo/rose-wordmark-white.svg" alt="" aria-hidden="true" width="1595" height="996" loading="lazy" decoding="async">
 </footer>
 
 <script src="/assets/vendor/gsap.min.js" defer></script>
diff --git a/site/services/websites-and-seo.html b/site/services/websites-and-seo.html
index 73ce81a..50e18b3 100644
--- a/site/services/websites-and-seo.html
+++ b/site/services/websites-and-seo.html
@@ -434,24 +434,39 @@ height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
   <div class="wrap">
     <div class="foot-grid">
       <div class="foot-brand">
-        <a href="/" aria-label="Rose Practice Solutions, home"><img class="foot-wordmark" src="/assets/logo/rose-wordmark-white.svg" alt="Rose Practice Solutions" width="200" height="125" loading="lazy" decoding="async"></a>
+        <a class="foot-home" href="/" aria-label="Rose Practice Solutions, home"><img src="/assets/logo/rose-mark-tile-light.svg" alt="" width="44" height="44" loading="lazy" decoding="async"></a>
         <p class="tagline"><em>Tended,</em> not templated.</p>
         <p class="foot-about">Rose Practice Solutions is a fully remote orthodontic and dental marketing company in the United States.</p>
+        <div class="foot-contact">
+          <p class="foot-label">Write to us</p>
+          <a href="mailto:hello@rosepracticesolutions.com">hello@rosepracticesolutions.com</a>
+        </div>
       </div>
-      <ul class="foot-links">
-        <li><a href="/services">Services</a></li>
-        <li><a href="/services/add-ons">Add-ons and projects</a></li>
-        <li><a href="/orthodontic-marketing">Orthodontic marketing</a></li>
-        <li><a href="/dental-marketing">Dental marketing</a></li>
-        <li><a href="/pricing">Pricing</a></li>
-        <li><a href="/about">About</a></li>
-        <li><a href="/contact">Get in touch</a></li>
-      </ul>
-      <div class="foot-contact">
-        <p class="body-s">Write to us</p>
-        <a href="/contact#book">Send us a message</a>
-        <a href="mailto:hello@rosepracticesolutions.com">hello@rosepracticesolutions.com</a>
-      </div>
+      <nav class="foot-nav" aria-label="Footer">
+        <div class="foot-col">
+          <h2 class="foot-label" id="foot-what">What we do</h2>
+          <ul aria-labelledby="foot-what">
+            <li><a href="/services">Services</a></li>
+            <li><a href="/services/add-ons">Add-ons and projects</a></li>
+            <li><a href="/pricing">Pricing</a></li>
+          </ul>
+        </div>
+        <div class="foot-col">
+          <h2 class="foot-label" id="foot-who">Who we work with</h2>
+          <ul aria-labelledby="foot-who">
+            <li><a href="/orthodontic-marketing">Orthodontic marketing</a></li>
+            <li><a href="/dental-marketing">Dental marketing</a></li>
+          </ul>
+        </div>
+        <div class="foot-col">
+          <h2 class="foot-label" id="foot-company">Company</h2>
+          <ul aria-labelledby="foot-company">
+            <li><a href="/about">About</a></li>
+            <li><a href="/contact">Get in touch</a></li>
+            <li><a href="/contact#book">Send us a message</a></li>
+          </ul>
+        </div>
+      </nav>
     </div>
     <div class="foot-legal">
       <p class="meta">&copy; 2026 Rose Practice Solutions</p>
@@ -464,6 +479,7 @@ height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
       </div>
     </div>
   </div>
+  <img class="foot-giant" src="/assets/logo/rose-wordmark-white.svg" alt="" aria-hidden="true" width="1595" height="996" loading="lazy" decoding="async">
 </footer>
 
 <script src="/assets/vendor/gsap.min.js" defer></script>
diff --git a/site/terms.html b/site/terms.html
index 24eb16c..0c3341d 100644
--- a/site/terms.html
+++ b/site/terms.html
@@ -186,24 +186,39 @@ height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
   <div class="wrap">
     <div class="foot-grid">
       <div class="foot-brand">
-        <a href="/" aria-label="Rose Practice Solutions, home"><img class="foot-wordmark" src="/assets/logo/rose-wordmark-white.svg" alt="Rose Practice Solutions" width="200" height="125" loading="lazy" decoding="async"></a>
+        <a class="foot-home" href="/" aria-label="Rose Practice Solutions, home"><img src="/assets/logo/rose-mark-tile-light.svg" alt="" width="44" height="44" loading="lazy" decoding="async"></a>
         <p class="tagline"><em>Tended,</em> not templated.</p>
         <p class="foot-about">Rose Practice Solutions is a fully remote orthodontic and dental marketing company in the United States.</p>
+        <div class="foot-contact">
+          <p class="foot-label">Write to us</p>
+          <a href="mailto:hello@rosepracticesolutions.com">hello@rosepracticesolutions.com</a>
+        </div>
       </div>
-      <ul class="foot-links">
-        <li><a href="/services">Services</a></li>
-        <li><a href="/services/add-ons">Add-ons and projects</a></li>
-        <li><a href="/orthodontic-marketing">Orthodontic marketing</a></li>
-        <li><a href="/dental-marketing">Dental marketing</a></li>
-        <li><a href="/pricing">Pricing</a></li>
-        <li><a href="/about">About</a></li>
-        <li><a href="/contact">Get in touch</a></li>
-      </ul>
-      <div class="foot-contact">
-        <p class="body-s">Write to us</p>
-        <a href="/contact#book">Send us a message</a>
-        <a href="mailto:hello@rosepracticesolutions.com">hello@rosepracticesolutions.com</a>
-      </div>
+      <nav class="foot-nav" aria-label="Footer">
+        <div class="foot-col">
+          <h2 class="foot-label" id="foot-what">What we do</h2>
+          <ul aria-labelledby="foot-what">
+            <li><a href="/services">Services</a></li>
+            <li><a href="/services/add-ons">Add-ons and projects</a></li>
+            <li><a href="/pricing">Pricing</a></li>
+          </ul>
+        </div>
+        <div class="foot-col">
+          <h2 class="foot-label" id="foot-who">Who we work with</h2>
+          <ul aria-labelledby="foot-who">
+            <li><a href="/orthodontic-marketing">Orthodontic marketing</a></li>
+            <li><a href="/dental-marketing">Dental marketing</a></li>
+          </ul>
+        </div>
+        <div class="foot-col">
+          <h2 class="foot-label" id="foot-company">Company</h2>
+          <ul aria-labelledby="foot-company">
+            <li><a href="/about">About</a></li>
+            <li><a href="/contact">Get in touch</a></li>
+            <li><a href="/contact#book">Send us a message</a></li>
+          </ul>
+        </div>
+      </nav>
     </div>
     <div class="foot-legal">
       <p class="meta">&copy; 2026 Rose Practice Solutions</p>
@@ -216,6 +231,7 @@ height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
       </div>
     </div>
   </div>
+  <img class="foot-giant" src="/assets/logo/rose-wordmark-white.svg" alt="" aria-hidden="true" width="1595" height="996" loading="lazy" decoding="async">
 </footer>
 
 <!-- No GSAP on this page: it has no graphics to animate, and site.js runs without it. -->
```

</details>

## Round 5

### 13. Google and Meta ads: rebuilt for clarity and breathing room

**What and why.** Chris: the ads sample "still feels a bit claustrophobic and confusing". His screenshot also showed a bug: `[Time]` wrapping under "Consult booked". The message stays the same, with fewer pieces and more air around them. The message: your ads run on Google and on Meta, and each booked consult is traced back to the ad that brought it.

**Desktop**
- The two ads sit side by side with nothing above them.
- Each card names its platform inside its own UI, under the practice name: "**Google** · Sponsored", "**Meta** · Sponsored".
- **Removed:**
  - the separate platform-label row;
  - the search field above the Google ad;
  - the forest outline on the traced ad;
  - the Source/Campaign table.
- **The consult is one slim line:** ● Consult booked, `[Name]`, Adult braces, `[Time]`. It never wraps, so `[Time]` can't drop under "Consult booked"; "Adult braces" shortens first.
- **The trace:** the ad it came from carries one forest **Source** tag on its bottom edge, joined to the consult line by one straight line.
- **The sign-off:** "Signed by *Paid media*" sits under the right end of the consult line, clear of the stamp's corner.
- **Spacing:** 32px panel padding on every side, 24px between pieces, 20px inside the cards.

**Phone:** the order is Google ad, consult line, Meta ad, sign-off. With the consult between the ads, the line runs straight up to Google or straight down to Meta.
- The Google ad shows one line of copy and no sitelinks.
- The Meta ad is a compact card with a square creative beside its headline and Learn more.
- The consult takes two lines.

**Motion:** each cycle goes place, trace (the line draws and the Source tag lands on the ad), sign, stamp, rest. It traces Meta first, then Google. Google is the finished state, so pause, reduced motion and no JavaScript all show it.

**Height**

| | Before | Now |
|---|---|---|
| Panel at 1440 | 586px | 522px |
| Row at 390 | 859px | 855px |

**Also fixed:** on /components the two service-row reference panels had collapsed to 64px wide. One scoped rule now gives them the homepage's width.

**Check:** at 1440 and 390 the panel reads in a second: two ads, one tagged Source, one consult line. Watch two cycles to see the tag move between the ads.

**Files and lines** (after this change):

- `site/assets/site.css`: lines 1912–2023
- `site/assets/site.js`: lines 742–772
- `site/components.html`: lines 752–758, 783–815
- `site/index.html`: lines 356–388

<details>
<summary>Exact diff for change 13</summary>

```diff
diff --git a/site/assets/site.css b/site/assets/site.css
index c12aa7b..ad71cac 100644
--- a/site/assets/site.css
+++ b/site/assets/site.css
@@ -1912,129 +1912,112 @@ h1 em, h2 em, h3 em, .tagline em, .signed-change em { color: var(--accent-italic
 }
 
 /* Google and Meta ads: the practice's ads on both platforms, and a booked consult traced back to the ad that brought it.
-   Two real-format ads side by side (a Google search ad with its Call button; a Meta feed post with a flat forest
-   creative and Learn more), and under them the consult record, signed by Paid media. A forest wire runs from the
-   record up to the ad it came from, and that ad gets a forest outline. Illustration only: the buttons do nothing.
-   Markup: .service-row-visual--ads > .vignette.ads[data-loop=ads] > .ads-top (caption + Sample chip) + .ads-slot ×2
-   (p.ads-label + .ads-ad[data-ad=google|meta] + span.ads-wire[data-wire] > i (the Meta slot also holds the Google
-   wire's pass, shown when stacked)) + .ads-consult[data-part=consult] (span.ads-wire--land, the head, the who,
-   dl.ads-consult-source whose dd holds one span[data-src] per ad, .signoff); then img.panel-stamp.
-   Each wire segment draws by --d (0 to 1) along its own axis, from the record end. Static and paused: traced to the
-   Google ad (its .is-source outline and wire; the Meta wire at --d 0, the Meta source text hidden). The loop traces
-   the next consult to the Meta ad, then back to Google (site.js "signed samples"). The bottom-left corner stays clear
-   for the panel stamp: the record and its sign-off start 128px in on desktop; stacked, the sign-off sits right. */
-/* the panel is the container (the ads stack whenever its inner width is under 520px: phones, and 1025-1150px). Its
-   top padding is small: the caption and Sample chip row sits there, as on the Websites and SEO panel. */
-.service-row-visual.service-row-visual--ads { container: ads-panel / inline-size; padding: var(--space-4) var(--space-8) var(--space-8); }
+   Two real-format ads side by side, each naming its platform in its own Sponsored line (a Google search ad with its
+   Call button and sitelinks; a Meta feed post with a flat forest creative and Learn more). Under them one slim line,
+   the booked consult (Consult booked, [Name], the enquiry, [Time]), and its sign-off, Paid media. The ad the consult
+   came from carries a forest Source tag on its edge, joined to the consult line by one straight forest line. Each card
+   is cream on the panel with one soft shadow and no outline. Illustration only: the buttons do nothing.
+   Markup: .service-row-visual--ads > .vignette.ads[data-loop=ads] > .ads-top (caption + Sample chip)
+   + .ads-ad.ads-google + .ads-ad.ads-meta (each ending in span.ads-source[data-src] > .ads-tag + .ads-link)
+   + p.ads-consult[data-part=consult] + .signoff[data-part=sign]; then img.panel-stamp.
+   Static and paused: traced to the Google ad (its .ads-source shown, the Meta one hidden). The loop clears the consult
+   and its trace, places the next consult, draws the line out of it to the other ad and tags that ad, signs it and
+   presses the panel stamp: the Meta ad first, then back to Google (site.js "signed samples"). The bottom-left corner
+   stays clear for the panel stamp: the consult line is inset 80px each side and the sign-off sits at its right end. */
+/* the panel is the container (the ads stack whenever its inner width is under 520px: phones, and 1025-1150px) */
+.service-row-visual.service-row-visual--ads { container: ads-panel / inline-size; padding: var(--space-8); }
 /* its clear corner is the bottom left wherever the panel sits (the flipped row, and its reference on components.html) */
 .service-row-visual--ads .panel-stamp { right: auto; left: -16px; rotate: 8deg; }
 @media (max-width: 768px) {
   .service-row-visual--ads .panel-stamp { left: 4px; }
 }
+/* the reference on components.html: both service-row panels size to their container, so their row is given the
+   width (stacked, at about the homepage's width) instead of shrinking to fit them */
+.ref-item > .cards:has(> .service-row-visual--ads) { justify-self: stretch; grid-template-columns: minmax(0, 664px); gap: var(--space-12); }
 @media (max-width: 640px) {
-  .service-row-visual.service-row-visual--ads { padding: var(--space-4) var(--space-4) var(--space-6); }
+  .service-row-visual.service-row-visual--ads { padding: var(--space-5) var(--space-5) var(--space-6); }
 }
-.ads { --ads-band: var(--space-6); grid-template-columns: repeat(2, minmax(0, 1fr)); justify-items: stretch; gap: var(--space-4); max-width: 600px; }
-.ads-top { grid-column: 1 / -1; display: flex; align-items: center; justify-content: space-between; gap: var(--space-3); }
+/* --ads-reach: from the cards' bottom edge to the consult line (the Source tag and its line fill it);
+   --ads-inset: the consult line's inset each side, which keeps it clear of the stamp's corner */
+.ads { --ads-reach: var(--space-10); --ads-inset: 80px; grid-template-columns: repeat(2, minmax(0, 1fr)); grid-template-areas: "top top" "google meta" "consult consult" "sign sign"; justify-items: stretch; gap: var(--space-6); max-width: 600px; }
+.ads-top { grid-area: top; display: flex; align-items: center; justify-content: space-between; gap: var(--space-3); }
 .ads-caption { font-size: var(--text-caption); font-weight: 500; line-height: 1.4; color: var(--forest); }
-.ads-slot { position: relative; display: grid; grid-template-rows: auto 1fr; gap: var(--space-2); min-width: 0; }
-/* the platform, outside its simulated UI: forest on sage mist, 7.55:1 */
-.ads-label { font-size: var(--text-label); font-weight: 600; line-height: 1.4; color: var(--forest); }
-.ads-ad { position: relative; display: grid; align-content: start; gap: var(--space-3); min-width: 0; padding: var(--space-4); border: var(--border-w) solid var(--border-quiet); border-radius: var(--radius-card); background: var(--surface-page); box-shadow: var(--shadow-2); font-size: var(--text-body-s); line-height: 1.5; }
-/* the ad a consult is traced to: a 2px forest edge over its hairline, shown by --src (0 to 1; site.js tweens it) */
-.ads-ad::after { content: ""; position: absolute; inset: -1px; border: var(--border-w-strong) solid var(--forest); border-radius: inherit; opacity: var(--src, 0); pointer-events: none; }
-.ads-ad.is-source { --src: 1; }
-/* who is advertising: the practice's mark (a plain forest disc; a globe on Google), its name, Sponsored */
-.ads-site { display: flex; align-items: center; gap: var(--space-3); min-width: 0; }
+.ads-google { grid-area: google; }
+.ads-meta { grid-area: meta; }
+.ads-ad { position: relative; display: grid; align-content: start; gap: var(--space-2); min-width: 0; padding: var(--space-5); border-radius: var(--radius-card); background: var(--surface-page); box-shadow: var(--shadow-2); font-size: var(--text-body-s); line-height: 1.5; }
+/* who is advertising, and where: the practice's mark (a plain forest disc; a globe on Google), its name, and the
+   platform's own Sponsored line naming the platform */
+.ads-site { display: flex; align-items: center; gap: var(--space-3); min-width: 0; margin-bottom: var(--space-1); }
 .ads-mark { flex: none; display: grid; place-items: center; width: 32px; height: 32px; border-radius: 50%; background: var(--surface-strong); color: var(--text-on-strong); }
 .ads-mark .icon { width: 16px; height: 16px; }
-.ads-who { display: grid; min-width: 0; line-height: 1.3; }
+.ads-who { display: grid; min-width: 0; line-height: 1.35; }
 .ads-name { font-weight: 600; }
-.ads-sponsored { font-size: var(--text-caption); font-weight: 500; color: var(--text-muted); }
-.ads-google .ads-sponsored { order: -1; font-weight: 600; color: var(--text-body); }
-.ads-call { display: inline-flex; align-items: center; gap: var(--space-1); margin-left: auto; padding: var(--space-1) var(--space-3); border: var(--border-w) solid var(--border-input); border-radius: var(--radius-pill); color: var(--forest); font-size: var(--text-caption); font-weight: 600; line-height: 1.4; }
+.ads-on { font-size: var(--text-caption); font-weight: 500; color: var(--text-muted); white-space: nowrap; }
+.ads-platform { font-weight: 600; color: var(--text-body); }
+.ads-call { flex: none; display: inline-flex; align-items: center; gap: var(--space-1); margin-left: auto; padding: var(--space-1) var(--space-3); border: var(--border-w) solid var(--border-input); border-radius: var(--radius-pill); color: var(--forest); font-size: var(--text-caption); font-weight: 600; line-height: 1.4; }
 .ads-call .icon { width: 14px; height: 14px; }
 .ads-google-title { font-size: var(--text-body-m); font-weight: 500; line-height: 1.35; color: var(--forest); }
 /* Google's and Meta's own "See more" clamps: two lines of copy on every ad */
 .ads-google-text { color: var(--text-muted); }
 .ads-google-text, .ads-meta-text { display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; overflow: hidden; }
-/* the search it answers, and its sitelinks (desktop only: phones show the ad alone) */
-.ads-query { display: flex; align-items: center; gap: var(--space-2); margin-bottom: var(--space-1); padding: var(--space-2) var(--space-3); border: var(--border-w) solid var(--border-input); border-radius: var(--radius-pill); font-weight: 500; }
-.ads-query .icon { width: 16px; height: 16px; color: var(--text-muted); }
-.ads-sitelinks { display: flex; flex-wrap: wrap; gap: var(--space-1) var(--space-4); }
+/* the sitelinks (wide panels only: phones show the ad alone) */
+.ads-sitelinks { display: flex; flex-wrap: wrap; gap: var(--space-1) var(--space-4); margin-top: var(--space-1); }
 .ads-sitelinks li { font-weight: 500; color: var(--forest); }
-.ads-meta { grid-template-rows: auto auto minmax(0, 1fr) auto; align-content: stretch; }
-.ads-meta-art { display: grid; align-content: end; align-self: stretch; min-height: 96px; margin-inline: calc(-1 * var(--space-4)); padding: var(--space-4); background: var(--surface-strong); color: var(--text-on-strong); font-family: var(--font-display); font-size: var(--text-h3); line-height: 1.1; text-wrap: balance; }
-.ads-meta-foot { display: flex; align-items: center; justify-content: space-between; gap: var(--space-2); margin: calc(-1 * var(--space-3)) calc(-1 * var(--space-4)) calc(-1 * var(--space-4)); padding: var(--space-3) var(--space-4); border-radius: 0 0 var(--radius-card) var(--radius-card); background: var(--surface-panel); }
+.ads-meta { grid-template-rows: auto auto minmax(0, 1fr) auto; align-content: stretch; gap: var(--space-3); }
+.ads-meta .ads-site { margin-bottom: 0; }
+.ads-meta-art { display: grid; align-content: end; align-self: stretch; min-height: 88px; margin-inline: calc(-1 * var(--space-5)); padding: var(--space-4) var(--space-5); background: var(--surface-strong); color: var(--text-on-strong); font-family: var(--font-display); font-size: var(--text-h3); line-height: 1.1; text-wrap: balance; }
+/* its foot keeps 20px under Learn more, clear of the Source tag that sits on the card's edge */
+.ads-meta-foot { display: flex; align-items: center; justify-content: space-between; gap: var(--space-2); margin: calc(-1 * var(--space-3)) calc(-1 * var(--space-5)) calc(-1 * var(--space-5)); padding: var(--space-3) var(--space-5) var(--space-5); border-radius: 0 0 var(--radius-card) var(--radius-card); background: var(--surface-panel); }
 .ads-meta-headline { font-weight: 600; }
 .ads-meta-button { flex: none; padding: var(--space-1) var(--space-3); border-radius: var(--radius-input); background: var(--surface-page); font-size: var(--text-caption); font-weight: 600; line-height: 1.6; }
-/* the consult record: booked, who and for what, and where it came from */
-.ads-consult { position: relative; grid-column: 1 / -1; justify-self: end; display: grid; gap: var(--space-2); width: calc(100% - 128px); margin-top: var(--ads-band); padding: var(--space-3) var(--space-5) var(--space-4); border: var(--border-w) solid var(--border-quiet); border-radius: var(--radius-card); background: var(--surface-page); box-shadow: var(--shadow-2); font-size: var(--text-body-s); line-height: 1.5; }
-.ads-consult-head { display: flex; align-items: center; gap: var(--space-2); font-weight: 600; }
-.ads-consult-head .lead-dot { flex: none; }
-.ads-consult-time { margin-left: auto; font-size: var(--text-label); color: var(--text-muted); font-variant-numeric: tabular-nums; }
-.ads-consult-who { display: flex; flex-wrap: wrap; align-items: baseline; gap: 0 var(--space-3); color: var(--text-muted); }
-.ads-consult-name { font-family: var(--font-display); font-size: var(--text-h3); line-height: 1.2; color: var(--text-body); }
-/* label sage on sage mist, 5.1:1 */
-.ads-consult-source { display: grid; grid-template-columns: auto minmax(0, 1fr); gap: 0 var(--space-4); padding: var(--space-2) var(--space-4); border-radius: var(--radius-input); background: var(--surface-panel); }
-.ads-consult-source dt { font-size: var(--text-label); font-weight: 600; line-height: 1.6; color: var(--text-muted); }
-.ads-consult-source dd { display: grid; font-weight: 600; }
-.ads-consult-source dd > span { grid-area: 1 / 1; }
-.ads-consult-source [data-src="meta"] { visibility: hidden; opacity: 0; }
-.ads-signoff { padding-top: var(--space-3); padding-right: 0; }
-/* on a wide panel the record's first line carries all three facts: booked, who and what for, and when */
-@container ads-panel (min-width: 520px) {
-  .ads-ad { gap: var(--space-2); }
-  .ads-consult { grid-template-columns: auto minmax(0, 1fr); column-gap: var(--space-4); }
-  .ads-consult-head, .ads-consult-who { grid-row: 1; align-self: center; }
-  .ads-consult-who { grid-column: 2; padding-right: 56px; }
-  .ads-consult-time { position: absolute; top: var(--space-4); right: var(--space-5); }
-  .ads-consult-source, .ads-signoff { grid-column: 1 / -1; }
-}
-/* the wire: 2px forest segments under each ad, meeting above the record's centre. The record's centre sits 72px past
-   the Google slot's right edge (it starts 128px in), which is 56px into the Meta slot. */
-.ads-wire { position: absolute; top: 100%; left: 0; right: 0; height: calc(var(--ads-band) / 2 + var(--space-2)); pointer-events: none; }
-.ads-wire i { position: absolute; background: var(--forest); }
-.ads-wire i:nth-child(1) { left: calc(50% - 1px); top: 0; width: 2px; height: 100%; scale: 1 var(--d, 1); transform-origin: 50% 100%; }
-.ads-wire i:nth-child(2) { top: calc(100% - 2px); height: 2px; scale: var(--d, 1) 1; }
-.ads-wire[data-wire="google"] i:nth-child(2) { left: calc(50% - 1px); width: calc(50% + 74px); transform-origin: 100% 50%; }
-.ads-wire[data-wire="meta"] i:nth-child(2) { left: 55px; width: calc(50% - 54px); transform-origin: 0 50%; }
-.ads-wire[data-wire="meta"] i { --d: 0; }
-.ads-wire--land { top: auto; bottom: 100%; height: calc(var(--ads-band) / 2 + var(--space-2) + 2px); }
-.ads-wire--land i:nth-child(2), .ads-wire--pass { display: none; }
-/* Narrow panels (phones, and 1025-1150px): the two ads stacked and compact (no platform labels: each reads as its
-   platform; the Meta post as a card with its creative a small square beside the post text), then the record. The
-   wire runs in a 20px lane down the left: out of the record's head, up past the Meta ad, into the head of the ad it
-   came from. The record's sign-off sits right (no disc), clear of the stamp on the bottom-left. */
+/* the trace: a forest Source tag centred on the ad's bottom edge, and under it one straight 1.5px forest line down to
+   the consult. site.js draws the line by scale, out from the consult end (transform-origin). The Meta one waits hidden. */
+.ads-source { position: absolute; top: 100%; left: 50%; z-index: 1; translate: -50% -50%; display: grid; }
+.ads-source[data-src="meta"] { visibility: hidden; opacity: 0; }
+.ads-tag { display: inline-flex; align-items: center; height: 24px; padding: 0 var(--space-3); border-radius: var(--radius-pill); background: var(--surface-strong); color: var(--text-on-strong); box-shadow: var(--shadow-1); font-size: var(--text-caption); font-weight: 600; line-height: 1; white-space: nowrap; }
+.ads-link { position: absolute; top: 100%; left: calc(50% - .75px); width: 1.5px; height: calc(var(--ads-reach) - 12px); background: var(--forest); transform-origin: 50% 100%; pointer-events: none; }
+/* the consult: one line, booked, who and what for, and when. [Time] never wraps; the enquiry gives way first. */
+.ads-consult { grid-area: consult; justify-self: center; display: flex; align-items: center; gap: var(--space-3); width: calc(100% - 2 * var(--ads-inset)); min-width: 0; margin-top: calc(var(--ads-reach) - var(--space-6)); padding: var(--space-3) var(--space-5); border-radius: var(--radius-card); background: var(--surface-page); box-shadow: var(--shadow-2); font-size: var(--text-body-s); line-height: 1.4; white-space: nowrap; }
+.ads-consult .lead-dot { flex: none; }
+.ads-consult-what { flex: none; font-weight: 600; }
+.ads-consult-who { display: flex; align-items: baseline; gap: var(--space-3); min-width: 0; }
+.ads-consult-name { flex: none; font-family: var(--font-display); font-size: var(--text-h3); line-height: 1.2; }
+.ads-consult-for { min-width: 0; overflow: hidden; text-overflow: ellipsis; color: var(--text-muted); }
+.ads-consult-time { flex: none; margin-left: auto; font-size: var(--text-label); font-weight: 600; color: var(--text-muted); font-variant-numeric: tabular-nums; }
+/* the sign-off: under the consult's right end, no rule */
+.ads-signoff { grid-area: sign; justify-self: end; margin: calc(-1 * var(--space-2)) var(--ads-inset) 0 0; padding: 0; border-top: 0; }
+/* Narrow panels (phones, and 1025-1150px): the ads stacked and compact (one line of Google copy and no sitelinks; the
+   Meta post as a card with its creative a square beside its headline and Learn more), and the consult between them, so
+   the line to either ad is short and straight: up to the Google ad's bottom edge, or down to the Meta ad's top edge.
+   Each ad keeps 24px on its traced edge, so a tag never crowds its copy. The sign-off sits right, clear of the stamp. */
 @container ads-panel (max-width: 519px) {
-  .ads { --ads-hook: 26px; grid-template-columns: minmax(0, 1fr); gap: var(--space-2); padding-left: var(--space-5); }
-  .ads-slot { gap: 0; }
-  .ads-label { display: none; }
-  .ads-ad { gap: var(--space-2); padding: var(--space-3); }
+  .ads { --ads-reach: 28px; grid-template-columns: minmax(0, 1fr); grid-template-areas: "top" "google" "consult" "meta" "sign"; gap: var(--space-4); }
+  .ads-ad { padding: var(--space-4); }
+  .ads-google { padding-bottom: var(--space-6); }
+  .ads-site { margin-bottom: 0; }
   .ads-mark { width: 28px; height: 28px; }
-  .ads-query, .ads-sitelinks { display: none; }
-  .ads-meta { grid-template-columns: 96px minmax(0, 1fr); grid-template-rows: auto auto 1fr; align-content: start; gap: var(--space-1) var(--space-3); }
+  .ads-google-text { -webkit-line-clamp: 1; }
+  .ads-sitelinks, .ads-meta-text { display: none; }
+  .ads-meta { grid-template-columns: 88px minmax(0, 1fr); grid-template-rows: auto 1fr; align-content: start; gap: var(--space-1) var(--space-3); padding-top: var(--space-6); }
   .ads-meta .ads-site { grid-column: 2; }
   .ads-meta .ads-mark { display: none; }
-  .ads-meta-text { grid-column: 2; grid-row: 2; }
-  .ads-meta-art { grid-column: 1; grid-row: 1 / -1; aspect-ratio: auto; min-height: 0; margin: 0; padding: var(--space-2); border-radius: var(--radius-input); font-size: var(--text-body-s); line-height: 1.05; }
-  .ads-meta-foot { grid-column: 2; grid-row: 3; align-self: end; margin: 0; padding: 0; background: none; }
-  .ads-meta-headline { display: none; }
+  .ads-meta-art { grid-column: 1; grid-row: 1 / -1; min-height: 88px; margin: 0; padding: var(--space-2); border-radius: var(--radius-input); font-size: var(--text-body-s); line-height: 1.05; }
+  .ads-meta-foot { grid-column: 2; grid-row: 2; display: grid; justify-items: start; align-content: end; gap: var(--space-1); margin: 0; padding: 0; background: none; }
   .ads-meta-button { background: var(--surface-panel); }
-  .ads-consult { width: auto; justify-self: stretch; gap: var(--space-2); margin-top: 0; padding: var(--space-3); }
-  .ads-consult-source { padding: 0; background: none; }
-  .ads-signoff { justify-content: flex-end; gap: var(--space-2); padding-top: var(--space-2); }
+  .ads-meta .ads-source { top: 0; }
+  .ads-meta .ads-link { top: auto; bottom: 100%; transform-origin: 50% 0; }
+  .ads-consult { width: auto; justify-self: stretch; margin-block: calc(var(--ads-reach) - var(--space-4)); padding: var(--space-3) var(--space-4); }
+  .ads-signoff { gap: var(--space-2); margin: var(--space-4) 0 0; }
   .ads-signoff .signoff-disc.founder-art { width: 24px; height: 24px; }
-  .ads .ads-wire { top: var(--ads-hook); bottom: calc(-1 * var(--space-2)); left: -11px; right: auto; width: 11px; height: auto; }
-  .ads .ads-wire i:nth-child(1) { left: 0; top: -1px; width: 100%; height: 2px; scale: var(--d, 1) 1; transform-origin: 0 50%; }
-  .ads .ads-wire i:nth-child(2) { left: 0; top: -1px; width: 2px; height: calc(100% + 1px); scale: 1 var(--d, 1); transform-origin: 50% 100%; }
-  .ads .ads-wire--pass { display: block; top: 0; width: 2px; }
-  .ads .ads-wire--pass i:nth-child(1) { top: 0; width: 2px; height: 100%; scale: 1 var(--d, 1); transform-origin: 50% 100%; }
-  .ads .ads-wire--land { top: -1px; bottom: auto; left: -12px; width: 12px; height: 24px; }
-  .ads .ads-wire--land i:nth-child(1) { top: 0; width: 2px; height: 100%; scale: 1 var(--d, 1); transform-origin: 50% 100%; }
-  .ads .ads-wire--land i:nth-child(2) { display: block; top: calc(100% - 1px); width: calc(100% + 1px); height: 2px; scale: var(--d, 1) 1; transform-origin: 100% 50%; }
-}
-/* stacked beside the copy (1025-1150px) the stamp is full size: lift the record clear of its 96px corner */
+}
+/* on a phone the consult takes two lines: booked and when, then who and what for */
+@container ads-panel (max-width: 419px) {
+  .ads-consult { display: grid; grid-template-columns: auto minmax(0, 1fr) auto; gap: 2px var(--space-2); }
+  .ads-consult .lead-dot, .ads-consult-what, .ads-consult-time { grid-row: 1; }
+  .ads-consult-time { grid-column: 3; }
+  .ads-consult-who { grid-column: 2 / -1; grid-row: 2; }
+}
+/* stacked beside the copy (1025-1150px) the stamp is full size: lift the Meta ad clear of its 96px corner */
 @media (min-width: 769px) {
   @container ads-panel (max-width: 519px) {
     .ads { padding-bottom: var(--space-5); }
diff --git a/site/assets/site.js b/site/assets/site.js
index b28284d..32b205d 100644
--- a/site/assets/site.js
+++ b/site/assets/site.js
@@ -742,48 +742,31 @@
         hold(tl, reached + MED * 0.6 + 0.5);
         return tl;
       },
-      // the consult is traced back to the ad that brought it: the record clears and a new consult is placed, the wire
-      // draws from the record up to its ad, the ad is outlined, signed, the panel stamp pressed. Each cycle traces the
-      // other ad: the first to Meta, the second back to Google, which is the finished state ('rest') and the markup.
+      // the consult is traced back to the ad that brought it: the consult and its trace lift off, the next consult is
+      // placed, its line draws out of it to the ad it came from and that ad is tagged Source, it is signed and the
+      // panel stamp pressed. Each cycle traces the other ad: the first to Meta, the second back to Google, which is the
+      // finished state ('rest') and the markup.
       ads: (el) => {
         const consult = el.querySelector('[data-part="consult"]');
-        const record = consult.querySelectorAll('.ads-consult-head, .ads-consult-who, .ads-consult-source');
-        const sign = el.querySelector('[data-part="sign"]');
-        const marks = signParts(sign);
+        const marks = signParts(el.querySelector('[data-part="sign"]'));
         const stamp = el.closest('.service-row-visual').querySelector('.panel-stamp');
-        const ad = (src) => el.querySelector('[data-ad="' + src + '"]');
-        const texts = (src) => el.querySelectorAll('[data-src="' + src + '"]');
-        const own = (wire) => Array.from(wire.children).reverse();
-        // a path's segments in drawing order, from the record end: the record's stub and rise, the pass beside the
-        // Meta ad (Google's, on phones), then the ad's own run and drop
-        const path = (src) => [
-          ...own(el.querySelector('[data-wire="land"]')),
-          ...(src === 'google' ? Array.from(el.querySelectorAll('.ads-wire--pass i')) : []),
-          ...own(el.querySelector('.ads-wire[data-wire="' + src + '"]:not(.ads-wire--pass)')),
-        ];
-        const shown = (seg) => seg.getClientRects().length > 0;
+        const source = (src) => el.querySelector('.ads-source[data-src="' + src + '"]');
+        const PLACE = SLOW + 0.1;
         const tl = gsap.timeline({ paused: true, repeat: -1 });
         const cycle = (from, to, at) => {
-          tl.to([...record, ...marks], { autoAlpha: 0, y: 8, duration: SLOW, ease: 'power2.in' }, at)
-            .to(stamp, { autoAlpha: 0, duration: SLOW, ease: 'power2.in' }, at)
-            .fromTo(path(from), { '--d': 1 }, { '--d': 0, duration: MED, ease: 'power2.in', immediateRender: false }, at)
-            .fromTo(ad(from), { '--src': 1 }, { '--src': 0, duration: MED, immediateRender: false }, at)
-            .set(texts(from), { autoAlpha: 0 }, at + SLOW)
-            .set(texts(to), { autoAlpha: 1 }, at + SLOW)
-            .fromTo(record, { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: REST, ease: 'power3.out', stagger: 0.08, immediateRender: false }, at + 0.6);
-          // the wire draws over SLOW, split across the segments this layout shows (hidden ones are set at once)
-          const trace = at + 1.4;
-          const segs = path(to);
-          const step = SLOW / Math.max(1, segs.filter(shown).length);
-          let k = 0;
-          segs.forEach((seg) => {
-            const on = shown(seg);
-            tl.fromTo(seg, { '--d': 0 }, { '--d': 1, duration: on ? step : 0, ease: 'none', immediateRender: false }, on ? trace + step * k++ : trace);
-          });
-          tl.fromTo(ad(to), { '--src': 0 }, { '--src': 1, duration: MED, immediateRender: false }, trace + SLOW - 0.05)
-            .fromTo(marks, { autoAlpha: 0, y: 8 }, { autoAlpha: 1, y: 0, duration: SLOW, ease: 'power3.out', immediateRender: false }, trace + SLOW + MED);
-          press(tl, stamp, trace + SLOW + MED + 0.35);
-          return trace + SLOW + MED + 0.35 + MED * 1.8;
+          const trace = at + MED + 0.35 + PLACE + 0.2;
+          const line = source(to).querySelector('.ads-link');
+          const tag = source(to).querySelector('.ads-tag');
+          tl.to([consult, source(from), ...marks, stamp], { autoAlpha: 0, duration: MED, ease: 'power2.in' }, at)
+            .fromTo(consult, { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: PLACE, ease: 'power3.out', immediateRender: false }, at + MED + 0.35)
+            // the trace: the line grows out of the consult to the ad's edge, then the ad's tag lands on it
+            .set(tag, { autoAlpha: 0 }, trace)
+            .set(source(to), { autoAlpha: 1 }, trace)
+            .fromTo(line, { scaleY: 0 }, { scaleY: 1, duration: SLOW, ease: 'power2.inOut', immediateRender: false }, trace)
+            .fromTo(tag, { autoAlpha: 0, scale: 0.8 }, { autoAlpha: 1, scale: 1, duration: MED, ease: 'power2.out', immediateRender: false }, trace + SLOW - 0.05)
+            .fromTo(marks, { autoAlpha: 0, y: 8 }, { autoAlpha: 1, y: 0, duration: SLOW, ease: 'power3.out', immediateRender: false }, trace + SLOW + MED + 0.2);
+          press(tl, stamp, trace + SLOW + MED + 0.55);
+          return trace + SLOW + MED + 0.55 + MED * 1.8;
         };
         const first = cycle('google', 'meta', REST);
         hold(tl, cycle('meta', 'google', first + HOLD + REST));
diff --git a/site/components.html b/site/components.html
index d44d542..43c5dc1 100644
--- a/site/components.html
+++ b/site/components.html
@@ -752,7 +752,7 @@
         </div>
 
         <div class="ref-item ref-item--wide">
-          <p class="ref-name" id="demo-vignettes">.service-row-visual &gt; .vignette[data-loop][data-anim="none"][role="img"] (the homepage's core service rows, .service-row and .service-row--flip). local-page (.service-row-visual--search &gt; .vignette--search): an illustrative excerpt of a Google results page in the palette (.screen.gsr: the address bar on desktop only, "Google" in plain type, the search field, All, Maps and Images, one organic result), and outside it a cream note (.gsr-note: "New this month", its line, signed by Web and SEO) joined to the result's title by a forest connector (.gsr-link). Its loop: the note lifts off, the query is selected, cleared and typed into its one text node with the caret right after the typed text, search is pressed, the page loads with no result, the result places, the note and connector return, signed, and the panel stamp is pressed on. Under 640px the address bar goes and the page stacks as on a phone. ads (.service-row-visual--ads &gt; .vignette.ads): a caption and the Sample chip on top; a Google search ad (the search above it, Sponsored, [Your practice] and a Call button, the headline, the description, two sitelinks) and a Meta feed post ([Your practice], Sponsored, the post text, a flat forest creative with cream serif text, Adult braces and Learn more), each labelled outside its UI; under them the consult record (.ads-consult: Consult booked, [Time], [Name], the enquiry, the source ad and campaign, signed by Paid media), joined to the ad it came from by a forest wire (.ads-wire) and that ad outlined in forest. Its loop: the record clears, the next consult is placed, the wire draws from the record up to its ad, the ad is outlined, it is signed and the panel stamp is pressed on; each cycle traces the other ad (Meta, then back to Google, the finished state). In panels under 520px wide the ads stack (the Meta post becomes a compact card with a small creative) and the wire runs down a lane on the left. The panel stamp sits bottom left. Each loop is about 8 to 10s, runs only on screen with the tab visible, starts and ends on the finished, signed state, jumps there when animations are paused and never runs under reduced motion.</p>
+          <p class="ref-name" id="demo-vignettes">.service-row-visual &gt; .vignette[data-loop][data-anim="none"][role="img"] (the homepage's core service rows, .service-row and .service-row--flip). local-page (.service-row-visual--search &gt; .vignette--search): an illustrative excerpt of a Google results page in the palette (.screen.gsr: the address bar on desktop only, "Google" in plain type, the search field, All, Maps and Images, one organic result), and outside it a cream note (.gsr-note: "New this month", its line, signed by Web and SEO) joined to the result's title by a forest connector (.gsr-link). Its loop: the note lifts off, the query is selected, cleared and typed into its one text node with the caret right after the typed text, search is pressed, the page loads with no result, the result places, the note and connector return, signed, and the panel stamp is pressed on. Under 640px the address bar goes and the page stacks as on a phone. ads (.service-row-visual--ads &gt; .vignette.ads): a caption and the Sample chip on top; side by side, a Google search ad ([Your practice] over "Google · Sponsored", a Call button, the headline, the description, two sitelinks) and a Meta feed post ([Your practice] over "Meta · Sponsored", the post text, a flat forest creative with cream serif text, Adult braces and Learn more), each naming its platform in its own Sponsored line; under them the consult on one slim line (.ads-consult: Consult booked, [Name], the enquiry, [Time]) and its sign-off, Paid media. The ad the consult came from carries a forest Source tag on its edge (.ads-source &gt; .ads-tag), joined to the consult by one straight forest line (.ads-link). Its loop: the consult and its trace lift off, the next consult is placed, the line grows out of it to the ad it came from and that ad is tagged, it is signed and the panel stamp is pressed on; each cycle traces the other ad (Meta, then back to Google, the finished state). In panels under 520px wide the ads stack (one line of Google copy and no sitelinks; the Meta post a compact card with its creative a square beside its headline) with the consult between them, so the line runs straight up to the Google ad or down to the Meta ad; under 420px the consult takes two lines. The panel stamp sits bottom left, clear of the consult and the sign-off. Each loop is about 8 to 10s, runs only on screen with the tab visible, starts and ends on the finished, signed state, jumps there when animations are paused and never runs under reduced motion.</p>
           <div class="cards">
             <div class="service-row-visual service-row-visual--search">
               <div class="vignette vignette--search" data-loop="local-page" data-anim="none" role="img" aria-label="Sample, an illustrative search result: a Google search for braces for adults near me shows one result, [Your practice], Adult braces in [your city]. A note outside the page says it is new this month, a page answering adult patients' questions, signed by Web and SEO.">
@@ -783,49 +783,33 @@
               <img class="stamp panel-stamp" src="/assets/img/stamp-signed.svg" alt="" width="112" height="112">
             </div>
             <div class="service-row-visual service-row-visual--ads">
-              <div class="vignette ads" data-loop="ads" data-anim="none" role="img" aria-label="Sample: a Google search ad and a Meta feed ad for adult braces from [Your practice]. A consult booked by [Name] for adult braces is traced back to the Google search ad and its campaign, signed by Paid media.">
+              <div class="vignette ads" data-loop="ads" data-anim="none" role="img" aria-label="Sample: a Google search ad and a Meta feed ad for adult braces from [Your practice]. A consult booked by [Name] for adult braces, at [Time], is traced back to the Google search ad that brought it, signed by Paid media.">
                 <div class="ads-top"><span class="ads-caption">Illustrative ads and booking</span><span class="chip chip--sample">Sample</span></div>
-                <div class="ads-slot">
-                  <p class="ads-label">Google Search</p>
-                  <div class="ads-ad ads-google is-source" data-ad="google">
-                    <p class="ads-query"><svg class="icon" viewBox="0 0 20 20" focusable="false"><circle cx="9" cy="9" r="5.5"/><path d="m13.2 13.2 3.8 3.8"/></svg>orthodontist for adults</p>
-                    <div class="ads-site">
-                      <span class="ads-mark"><svg class="icon" viewBox="0 0 20 20" focusable="false"><circle cx="10" cy="10" r="7"/><path d="M3 10h14M10 3c-3.5 4-3.5 10 0 14M10 3c3.5 4 3.5 10 0 14"/></svg></span>
-                      <span class="ads-who"><span class="ads-name">[Your practice]</span><span class="ads-sponsored">Sponsored</span></span>
-                      <span class="ads-call"><svg class="icon" viewBox="0 0 24 24" focusable="false"><path d="M6.5 4h3l1.5 4-2 1.5a11 11 0 0 0 5.5 5.5l1.5-2 4 1.5v3a2 2 0 0 1-2 2A15.5 15.5 0 0 1 4.5 6a2 2 0 0 1 2-2z"/></svg>Call</span>
-                    </div>
-                    <p class="ads-google-title">Adult braces | Request a consult</p>
-                    <p class="ads-google-text">Braces as an adult? See what treatment involves, then ask our team about a consultation.</p>
-                    <ul class="ads-sitelinks"><li>Your first visit</li><li>Braces or clear aligners</li></ul>
+                <div class="ads-ad ads-google">
+                  <div class="ads-site">
+                    <span class="ads-mark"><svg class="icon" viewBox="0 0 20 20" focusable="false"><circle cx="10" cy="10" r="7"/><path d="M3 10h14M10 3c-3.5 4-3.5 10 0 14M10 3c3.5 4 3.5 10 0 14"/></svg></span>
+                    <span class="ads-who"><span class="ads-name">[Your practice]</span><span class="ads-on"><span class="ads-platform">Google</span> · Sponsored</span></span>
+                    <span class="ads-call"><svg class="icon" viewBox="0 0 24 24" focusable="false"><path d="M6.5 4h3l1.5 4-2 1.5a11 11 0 0 0 5.5 5.5l1.5-2 4 1.5v3a2 2 0 0 1-2 2A15.5 15.5 0 0 1 4.5 6a2 2 0 0 1 2-2z"/></svg>Call</span>
                   </div>
-                  <span class="ads-wire" data-wire="google"><i></i><i></i></span>
+                  <p class="ads-google-title">Adult braces | Request a consult</p>
+                  <p class="ads-google-text">Braces as an adult? See what treatment involves, then ask our team about a consultation.</p>
+                  <ul class="ads-sitelinks"><li>Your first visit</li><li>Braces or clear aligners</li></ul>
+                  <span class="ads-source" data-src="google"><span class="ads-tag">Source</span><span class="ads-link"></span></span>
                 </div>
-                <div class="ads-slot">
-                  <p class="ads-label">Meta</p>
-                  <div class="ads-ad ads-meta" data-ad="meta">
-                    <div class="ads-site">
-                      <span class="ads-mark"></span>
-                      <span class="ads-who"><span class="ads-name">[Your practice]</span><span class="ads-sponsored">Sponsored</span></span>
-                    </div>
-                    <p class="ads-meta-text">Considering braces as an adult? Start with a conversation about your options.</p>
-                    <p class="ads-meta-art">Your questions about adult braces, answered.</p>
-                    <div class="ads-meta-foot"><span class="ads-meta-headline">Adult braces</span><span class="ads-meta-button">Learn more</span></div>
+                <div class="ads-ad ads-meta">
+                  <div class="ads-site">
+                    <span class="ads-mark"></span>
+                    <span class="ads-who"><span class="ads-name">[Your practice]</span><span class="ads-on"><span class="ads-platform">Meta</span> · Sponsored</span></span>
                   </div>
-                  <span class="ads-wire" data-wire="meta"><i></i><i></i></span>
-                  <span class="ads-wire ads-wire--pass" data-wire="google"><i></i></span>
+                  <p class="ads-meta-text">Considering braces as an adult? Start with a conversation about your options.</p>
+                  <p class="ads-meta-art">Your questions about adult braces, answered.</p>
+                  <div class="ads-meta-foot"><span class="ads-meta-headline">Adult braces</span><span class="ads-meta-button">Learn more</span></div>
+                  <span class="ads-source" data-src="meta"><span class="ads-tag">Source</span><span class="ads-link"></span></span>
                 </div>
-                <div class="ads-consult" data-part="consult">
-                  <span class="ads-wire ads-wire--land" data-wire="land"><i></i><i></i></span>
-                  <p class="ads-consult-head"><span class="lead-dot"></span>Consult booked<span class="ads-consult-time">[Time]</span></p>
-                  <p class="ads-consult-who"><span class="ads-consult-name">[Name]</span>Adult braces</p>
-                  <dl class="ads-consult-source">
-                    <dt>Source</dt><dd><span data-src="google">Google Search ad</span><span data-src="meta">Meta feed ad</span></dd>
-                    <dt>Campaign</dt><dd><span data-src="google">Search: Adult braces</span><span data-src="meta">Meta: Adult braces</span></dd>
-                  </dl>
-                  <div class="signoff ads-signoff" data-part="sign">
-                    <svg class="signoff-disc founder-art" viewBox="-1 -1 2 2" focusable="false"><circle r="1"/><path d="M0.2621 -0.8819A0.92 0.92 0 1 0 0.2621 0.8819A0.8832 0.8832 0 1 1 0.2621 -0.8819Z"/></svg>
-                    <span class="signoff-who">Signed by <em class="signature">Paid media</em></span>
-                  </div>
+                <p class="ads-consult" data-part="consult"><span class="lead-dot"></span><span class="ads-consult-what">Consult booked</span><span class="ads-consult-who"><span class="ads-consult-name">[Name]</span><span class="ads-consult-for">Adult braces</span></span><span class="ads-consult-time">[Time]</span></p>
+                <div class="signoff ads-signoff" data-part="sign">
+                  <svg class="signoff-disc founder-art" viewBox="-1 -1 2 2" focusable="false"><circle r="1"/><path d="M0.2621 -0.8819A0.92 0.92 0 1 0 0.2621 0.8819A0.8832 0.8832 0 1 1 0.2621 -0.8819Z"/></svg>
+                  <span class="signoff-who">Signed by <em class="signature">Paid media</em></span>
                 </div>
               </div>
               <img class="stamp panel-stamp" src="/assets/img/stamp-signed.svg" alt="" width="112" height="112">
diff --git a/site/index.html b/site/index.html
index 1795554..08ce4a9 100644
--- a/site/index.html
+++ b/site/index.html
@@ -356,49 +356,33 @@ height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
             <a class="btn btn--secondary" href="/services/paid-ads">See ads management <svg class="arrow" viewBox="0 0 22 12" aria-hidden="true" focusable="false"><path d="M1 6h19M15 1l5 5-5 5"/></svg></a>
           </div>
           <div class="service-row-visual service-row-visual--ads" data-place>
-            <div class="vignette ads" data-loop="ads" data-anim="none" role="img" aria-label="Sample: a Google search ad and a Meta feed ad for adult braces from [Your practice]. A consult booked by [Name] for adult braces is traced back to the Google search ad and its campaign, signed by Paid media.">
+            <div class="vignette ads" data-loop="ads" data-anim="none" role="img" aria-label="Sample: a Google search ad and a Meta feed ad for adult braces from [Your practice]. A consult booked by [Name] for adult braces, at [Time], is traced back to the Google search ad that brought it, signed by Paid media.">
               <div class="ads-top"><span class="ads-caption">Illustrative ads and booking</span><span class="chip chip--sample">Sample</span></div>
-              <div class="ads-slot">
-                <p class="ads-label">Google Search</p>
-                <div class="ads-ad ads-google is-source" data-ad="google">
-                  <p class="ads-query"><svg class="icon" viewBox="0 0 20 20" focusable="false"><circle cx="9" cy="9" r="5.5"/><path d="m13.2 13.2 3.8 3.8"/></svg>orthodontist for adults</p>
-                  <div class="ads-site">
-                    <span class="ads-mark"><svg class="icon" viewBox="0 0 20 20" focusable="false"><circle cx="10" cy="10" r="7"/><path d="M3 10h14M10 3c-3.5 4-3.5 10 0 14M10 3c3.5 4 3.5 10 0 14"/></svg></span>
-                    <span class="ads-who"><span class="ads-name">[Your practice]</span><span class="ads-sponsored">Sponsored</span></span>
-                    <span class="ads-call"><svg class="icon" viewBox="0 0 24 24" focusable="false"><path d="M6.5 4h3l1.5 4-2 1.5a11 11 0 0 0 5.5 5.5l1.5-2 4 1.5v3a2 2 0 0 1-2 2A15.5 15.5 0 0 1 4.5 6a2 2 0 0 1 2-2z"/></svg>Call</span>
-                  </div>
-                  <p class="ads-google-title">Adult braces | Request a consult</p>
-                  <p class="ads-google-text">Braces as an adult? See what treatment involves, then ask our team about a consultation.</p>
-                  <ul class="ads-sitelinks"><li>Your first visit</li><li>Braces or clear aligners</li></ul>
+              <div class="ads-ad ads-google">
+                <div class="ads-site">
+                  <span class="ads-mark"><svg class="icon" viewBox="0 0 20 20" focusable="false"><circle cx="10" cy="10" r="7"/><path d="M3 10h14M10 3c-3.5 4-3.5 10 0 14M10 3c3.5 4 3.5 10 0 14"/></svg></span>
+                  <span class="ads-who"><span class="ads-name">[Your practice]</span><span class="ads-on"><span class="ads-platform">Google</span> · Sponsored</span></span>
+                  <span class="ads-call"><svg class="icon" viewBox="0 0 24 24" focusable="false"><path d="M6.5 4h3l1.5 4-2 1.5a11 11 0 0 0 5.5 5.5l1.5-2 4 1.5v3a2 2 0 0 1-2 2A15.5 15.5 0 0 1 4.5 6a2 2 0 0 1 2-2z"/></svg>Call</span>
                 </div>
-                <span class="ads-wire" data-wire="google"><i></i><i></i></span>
+                <p class="ads-google-title">Adult braces | Request a consult</p>
+                <p class="ads-google-text">Braces as an adult? See what treatment involves, then ask our team about a consultation.</p>
+                <ul class="ads-sitelinks"><li>Your first visit</li><li>Braces or clear aligners</li></ul>
+                <span class="ads-source" data-src="google"><span class="ads-tag">Source</span><span class="ads-link"></span></span>
               </div>
-              <div class="ads-slot">
-                <p class="ads-label">Meta</p>
-                <div class="ads-ad ads-meta" data-ad="meta">
-                  <div class="ads-site">
-                    <span class="ads-mark"></span>
-                    <span class="ads-who"><span class="ads-name">[Your practice]</span><span class="ads-sponsored">Sponsored</span></span>
-                  </div>
-                  <p class="ads-meta-text">Considering braces as an adult? Start with a conversation about your options.</p>
-                  <p class="ads-meta-art">Your questions about adult braces, answered.</p>
-                  <div class="ads-meta-foot"><span class="ads-meta-headline">Adult braces</span><span class="ads-meta-button">Learn more</span></div>
+              <div class="ads-ad ads-meta">
+                <div class="ads-site">
+                  <span class="ads-mark"></span>
+                  <span class="ads-who"><span class="ads-name">[Your practice]</span><span class="ads-on"><span class="ads-platform">Meta</span> · Sponsored</span></span>
                 </div>
-                <span class="ads-wire" data-wire="meta"><i></i><i></i></span>
-                <span class="ads-wire ads-wire--pass" data-wire="google"><i></i></span>
+                <p class="ads-meta-text">Considering braces as an adult? Start with a conversation about your options.</p>
+                <p class="ads-meta-art">Your questions about adult braces, answered.</p>
+                <div class="ads-meta-foot"><span class="ads-meta-headline">Adult braces</span><span class="ads-meta-button">Learn more</span></div>
+                <span class="ads-source" data-src="meta"><span class="ads-tag">Source</span><span class="ads-link"></span></span>
               </div>
-              <div class="ads-consult" data-part="consult">
-                <span class="ads-wire ads-wire--land" data-wire="land"><i></i><i></i></span>
-                <p class="ads-consult-head"><span class="lead-dot"></span>Consult booked<span class="ads-consult-time">[Time]</span></p>
-                <p class="ads-consult-who"><span class="ads-consult-name">[Name]</span>Adult braces</p>
-                <dl class="ads-consult-source">
-                  <dt>Source</dt><dd><span data-src="google">Google Search ad</span><span data-src="meta">Meta feed ad</span></dd>
-                  <dt>Campaign</dt><dd><span data-src="google">Search: Adult braces</span><span data-src="meta">Meta: Adult braces</span></dd>
-                </dl>
-                <div class="signoff ads-signoff" data-part="sign">
-                  <svg class="signoff-disc founder-art" viewBox="-1 -1 2 2" focusable="false"><circle r="1"/><path d="M0.2621 -0.8819A0.92 0.92 0 1 0 0.2621 0.8819A0.8832 0.8832 0 1 1 0.2621 -0.8819Z"/></svg>
-                  <span class="signoff-who">Signed by <em class="signature">Paid media</em></span>
-                </div>
+              <p class="ads-consult" data-part="consult"><span class="lead-dot"></span><span class="ads-consult-what">Consult booked</span><span class="ads-consult-who"><span class="ads-consult-name">[Name]</span><span class="ads-consult-for">Adult braces</span></span><span class="ads-consult-time">[Time]</span></p>
+              <div class="signoff ads-signoff" data-part="sign">
+                <svg class="signoff-disc founder-art" viewBox="-1 -1 2 2" focusable="false"><circle r="1"/><path d="M0.2621 -0.8819A0.92 0.92 0 1 0 0.2621 0.8819A0.8832 0.8832 0 1 1 0.2621 -0.8819Z"/></svg>
+                <span class="signoff-who">Signed by <em class="signature">Paid media</em></span>
               </div>
             </div>
             <img class="stamp panel-stamp" src="/assets/img/stamp-signed.svg" alt="" width="112" height="112">
```

</details>

### 14. Beyond the core plan: richer brand, video and website samples

**What and why.** Chris:
- the brand card "could be a bit more involved and refer better to the subject", and the video card the same;
- the website card should "show a bit higher fidelity website mockup".

**Brand and logo work: a brand identity board for `[Your practice]`**
- Two type-set lockups: a horizontal one with an icon tile holding `[P]`, and a stacked one reversed out of forest.
- A colour strip: Primary, Ground, Accent and Text, each with `[Hex]`.
- A type specimen: "Aa" with `[Display face]` and `[Text face]`.
- "In use": an appointment card, a business card and a profile image.
- There's no drawn logo and no Rose bloom.
- **Beat:** the pieces place in order, about 1.6s.

**Video and content: the first-visit video in the edit**
- A preview frame with the title "What to expect at your first visit", a caption line and a timecode.
- A timeline with three clips (Welcome, Consultation, Next steps), a caption track and an SVG audio waveform.
- Beside it, a sage 9:16 vertical cut and an article card: the "written content" half.
- There are no photos or faces.
- **Beat:** the playhead scrubs, the waveform it has passed darkens, captions appear, then the vertical cut splits off and the article places.

**Website without the ads: a full practice homepage in a browser at `[yourpractice].com`**
- The navigation.
- A hero with "Request a consultation" and "Call", and a visual made of flat brand shapes rather than a photo.
- Treatments: Braces, Clear aligners, Early treatment.
- A reassurance strip: Evening appointments, Payment plans, Adults and teens. There are no numbers and no reviews.
- A consultation form and a footer.
- Signed by *Web and SEO*, with its stamp.
- **Beat:** the page scrolls down inside the browser and back, and the hero button is ringed. The sign-off appears after the scroll, about 5s in.

**Layout**
- These three cards give their sample a 432px column; the other three keep 340px.
- Each sample lays itself out by its own width, with a separate phone design and 14px body text on phones. The desktop website and timeline use 9.5 to 10.5px text, which is website-in-a-browser scale.
- Card titles now balance when they wrap.

**Height**
- The deck section is 633px at 1440 (617 before) and 967px at 390 (927 before).
- Patient follow-up, Reputation management and Dental consulting look the same. Their card is 16px taller on desktop, because the deck takes its tallest card's height.

**Unchanged:** the deck's behaviour, /services/add-ons, and site.js.

**Check:** step to cards 2, 3 and 4 at 1440 and 390 and watch each beat. Rails, names, Previous/Next and swipe all still work.

**Files and lines** (after this change):

- `site/assets/site.css`: lines 1482–1490, 1510–1523, 1581–1796, 1801–1858
- `site/components.html`: lines 539–545, 574–692
- `site/index.html`: lines 432–550

<details>
<summary>Exact diff for change 14</summary>

```diff
diff --git a/site/assets/site.css b/site/assets/site.css
index ad71cac..f3016e4 100644
--- a/site/assets/site.css
+++ b/site/assets/site.css
@@ -1482,8 +1482,9 @@ h1 em, h2 em, h3 em, .tagline em, .signed-change em { color: var(--accent-italic
    Tablet (768 to 1024): the named buttons wrap in a row above the deck. Phones (under 768): no named buttons; the rear
    cards show under the card in front, the next one's name on its edge, and a sideways swipe on the deck chooses the
    next or previous card. A card's copy sits beside its sample only where the card is 640px wide or more (a container
-   query), otherwise above it. Without JavaScript the six cards are a plain list and the buttons, rails and counter
-   stay hidden.
+   query), otherwise above it; beside it, the sample column is 340px, or 432px for the brand, video and website cards
+   (.deck-body--wide), whose richer samples compose themselves by their own width. Without JavaScript the six cards are
+   a plain list and the buttons, rails and counter stay hidden.
    Markup: .beyond[data-deck] > .beyond-head (h3.beyond-title + p + .deck-picks[role=group] > button.deck-pick
    [data-deck-go] ×6, the current one aria-current) + .deck-stage (.deck[data-anim=none] > article.deck-card[data-slot] ×6
    (.deck-body (.deck-copy (.deck-head (h4.deck-title + span.chip) + p + a.btn) + .deck-sheet[role=img]) + button.deck-rail
@@ -1509,12 +1510,14 @@ h1 em, h2 em, h3 em, .tagline em, .signed-change em { color: var(--accent-italic
 .deck { display: grid; gap: var(--space-6); }
 .deck-card { position: relative; container-type: inline-size; border-radius: var(--radius-card); background: var(--surface-panel); }
 .deck-body { display: grid; grid-template-columns: minmax(0, 1fr); align-content: start; gap: var(--space-6); height: 100%; padding: var(--space-6); }
+/* the brand, video and website cards (.deck-body--wide) give their richer samples a wider column */
 @container (min-width: 640px) {
   .deck-body { grid-template-columns: minmax(0, 1fr) 340px; gap: var(--space-8); }
+  .deck-body--wide { grid-template-columns: minmax(0, 1fr) 432px; }
 }
 .deck-copy { display: grid; justify-items: start; align-content: start; gap: var(--space-3); }
 .deck-head { display: flex; flex-wrap: wrap; align-items: center; gap: var(--space-2) var(--space-3); }
-.deck-title { font-family: var(--font-display); font-size: var(--text-h2); font-weight: 400; line-height: 1.15; }
+.deck-title { font-family: var(--font-display); font-size: var(--text-h2); font-weight: 400; line-height: 1.15; text-wrap: balance; }
 .deck-copy > p { text-wrap: pretty; }
 .deck-card .deck-head .chip { background: var(--surface-page); }
 
@@ -1578,40 +1581,216 @@ h1 em, h2 em, h3 em, .tagline em, .signed-change em { color: var(--accent-italic
 .deck-follow-booked b { font-weight: 600; }
 .deck-follow-booked small { font-size: var(--text-caption); line-height: 1.4; color: var(--text-muted); }
 
-/* brand: the practice's name set in the display face, three labelled colours, and an appointment card in them */
-.deck-brand-mark { display: grid; padding-block: var(--space-2); font-family: var(--font-display); line-height: 1.1; }
-.deck-brand-mark span:first-child { font-size: var(--text-h2); }
-.deck-brand-mark span + span { font-size: var(--text-h3); color: var(--text-muted); }
-.deck-swatches { display: flex; flex-wrap: wrap; gap: var(--space-4); font-size: var(--text-caption); font-weight: 500; line-height: 1.4; color: var(--text-muted); }
-.deck-swatches li { display: grid; justify-items: start; gap: var(--space-1); }
-.deck-swatch { display: block; width: 48px; height: 28px; border: var(--border-w) solid var(--border-quiet); border-radius: var(--radius-input); }
-.deck-swatch--forest { background: var(--forest); }
-.deck-swatch--cream { background: var(--cream); }
-.deck-swatch--sage { background: var(--sage); }
-.deck-appt { display: grid; justify-self: start; padding: var(--space-3) var(--space-4); border-radius: var(--radius-input); background: var(--surface-strong); color: var(--text-on-strong); }
-.deck-appt small { font-size: var(--text-caption); line-height: 1.4; color: var(--sage-mist); }
-.deck-appt span { font-family: var(--font-display); font-size: var(--text-h3); line-height: 1.2; }
-
-/* video: three frames beside the first one's title card, and the clips under them, the first one selected */
-.deck-video-board { display: grid; grid-template-columns: minmax(0, 1fr) 104px; align-items: start; gap: var(--space-4); }
-.deck-frames { display: grid; gap: var(--space-2); }
-.deck-frames li { padding: var(--space-2) var(--space-3); border: var(--border-w) solid var(--border-quiet); border-radius: var(--radius-input); font-size: var(--text-label); font-weight: 500; line-height: 1.4; color: var(--text-muted); }
-.deck-frames li.is-current { border-color: var(--border-strong); color: var(--text-body); font-weight: 600; }
-.deck-video-title { display: grid; align-items: end; aspect-ratio: 9 / 16; padding: var(--space-3); border-radius: var(--radius-input); background: var(--surface-strong); color: var(--text-on-strong); font-family: var(--font-display); font-size: 17px; line-height: 1.15; }
-.deck-video-title span { display: block; }
-.deck-clips { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: var(--space-1); }
-.deck-clips li { position: relative; padding: var(--space-2) var(--space-1); border-radius: var(--radius-input); background: var(--surface-panel); color: var(--forest); font-size: var(--text-caption); font-weight: 600; line-height: 1.4; text-align: center; }
-.deck-clips li.is-current::after { content: ""; position: absolute; inset: 0; border: var(--border-w-strong) solid var(--forest); border-radius: inherit; }
-
-/* a website without the ads: a real small home page, its button a picture of one */
-.deck-site-page { display: grid; justify-items: start; gap: var(--space-2); padding: var(--space-4); border: var(--border-w) solid var(--border-quiet); border-radius: var(--radius-input); }
-.deck-site-top { display: flex; flex-wrap: wrap; align-items: baseline; justify-content: space-between; gap: var(--space-1) var(--space-3); width: 100%; padding-bottom: var(--space-2); border-bottom: var(--border-w) solid var(--border-quiet); font-size: var(--text-caption); line-height: 1.4; color: var(--text-muted); }
-.deck-site-top b { font-family: var(--font-display); font-size: 17px; font-weight: 400; color: var(--text-body); }
-.deck-site-h { font-family: var(--font-display); font-size: 22px; line-height: 1.15; text-wrap: balance; }
-.deck-site-p { color: var(--text-muted); text-wrap: pretty; }
-.deck-site-btn { position: relative; margin-top: var(--space-1); padding: var(--space-1) var(--space-4); border-radius: var(--radius-pill); background: var(--surface-strong); color: var(--text-on-strong); font-size: var(--text-label); font-weight: 600; line-height: 1.6; }
-/* the button's emphasis ring: hidden at rest, it shows for a moment when the sample plays */
-.deck-site-btn::after { content: ""; position: absolute; inset: -5px; border: var(--border-w-strong) solid var(--forest); border-radius: inherit; opacity: 0; }
+/* the three richer samples (brand, video, website): a wider sheet, composed by its own width. 360px or wider inside
+   (desktop, and the stacked cards on tablets) they take their full composition; narrower (phones) each one is
+   recomposed for the width rather than scaled down. */
+.deck-sheet--wide { container: deck-sheet / inline-size; }
+
+/* brand: a brand identity board for [Your practice]. Five cells: the primary lockup (an icon tile holding the
+   initial, then the name in the display face over "Orthodontics" in tracked caps), the stacked lockup reversed out
+   of forest, the four colors as one strip with their names and [Hex], the two faces as "Aa", and the brand in use on
+   a sage mist ground: an appointment card, a business card and a round profile image. Type-set lockups only, no
+   drawn logo. */
+.deck-brand-board { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)) 124px; grid-template-areas: "primary primary stacked" "colors colors type" "uses uses uses"; gap: var(--space-2); }
+.deck-brand-cell { display: grid; grid-template-rows: auto minmax(0, 1fr); gap: var(--space-1); min-width: 0; padding: var(--space-2) 10px 10px; border: var(--border-w) solid var(--border-quiet); border-radius: var(--radius-input); }
+.deck-brand-label { font-size: 10.5px; font-weight: 500; line-height: 13px; letter-spacing: var(--tracking-label); color: var(--text-muted); }
+.deck-brand-tile { display: grid; place-items: center; flex: none; width: 36px; height: 36px; border-radius: var(--radius-input); background: var(--forest); color: var(--cream); font-family: var(--font-display); font-size: 17px; line-height: 1; letter-spacing: -.02em; }
+.deck-brand-lockup { display: flex; align-items: center; gap: var(--space-3); }
+.deck-brand-word { display: grid; justify-items: start; gap: 3px; }
+.deck-brand-word b { font-family: var(--font-display); font-size: 25px; font-weight: 400; line-height: 1; white-space: nowrap; color: var(--text-body); }
+.deck-brand-word small { padding-left: 1px; font-size: 8px; font-weight: 600; line-height: 1; letter-spacing: .26em; text-transform: uppercase; color: var(--text-muted); }
+.deck-brand-primary { grid-area: primary; }
+.deck-brand-stacked { grid-area: stacked; border-color: var(--forest); background: var(--surface-strong); }
+.deck-brand-stacked .deck-brand-label { color: var(--sage-mist); }
+.deck-brand-stacked .deck-brand-lockup { flex-direction: column; justify-content: center; gap: 5px; }
+.deck-brand-stacked .deck-brand-tile { width: 30px; height: 30px; background: var(--cream); color: var(--forest); font-size: 14px; }
+.deck-brand-stacked .deck-brand-word { justify-items: center; }
+.deck-brand-stacked .deck-brand-word b { font-size: 16px; color: var(--cream); }
+.deck-brand-stacked .deck-brand-word small { font-size: 6.5px; color: var(--sage-mist); }
+.deck-brand-colors { grid-area: colors; }
+.deck-brand-swatches { display: grid; grid-template-columns: 1.5fr 1.2fr 1fr 1fr; min-height: 46px; overflow: hidden; border: var(--border-w) solid var(--border-quiet); border-radius: var(--radius-input); }
+.deck-brand-swatch { display: grid; align-content: end; padding: 6px 8px; font-size: 10px; font-weight: 600; line-height: 1.3; }
+.deck-brand-swatch small { font-size: 9.5px; font-weight: 500; }
+.deck-brand-swatch:nth-child(1) { background: var(--forest); color: var(--cream); }
+.deck-brand-swatch:nth-child(2) { background: var(--cream); color: var(--ink); }
+.deck-brand-swatch:nth-child(3) { background: var(--sage); color: var(--ink); }
+.deck-brand-swatch:nth-child(4) { background: var(--ink); color: var(--cream); }
+.deck-brand-type { grid-area: type; }
+.deck-brand-faces { display: grid; align-content: center; gap: 2px; }
+.deck-brand-face { display: flex; align-items: baseline; gap: var(--space-2); font-size: 9.5px; font-weight: 500; line-height: 1.2; color: var(--text-muted); }
+.deck-brand-face b { flex: none; width: 30px; font-family: var(--font-display); font-size: 26px; font-weight: 400; line-height: 1.1; color: var(--text-body); }
+.deck-brand-face + .deck-brand-face b { font-family: var(--font-text); font-size: 19px; font-weight: 600; letter-spacing: -.02em; }
+.deck-brand-uses { grid-area: uses; grid-template-columns: auto auto minmax(0, 1fr); grid-template-rows: auto auto; align-items: end; column-gap: var(--space-3); border-color: var(--surface-panel); background: var(--surface-panel); }
+.deck-brand-uses .deck-brand-label { grid-column: 1 / -1; }
+.deck-brand-appt { display: grid; gap: 2px; padding: var(--space-2) var(--space-3); border-radius: var(--radius-input); background: var(--surface-strong); color: var(--cream); box-shadow: var(--shadow-2); }
+.deck-brand-appt small { font-size: 9.5px; font-weight: 500; line-height: 1.3; color: var(--sage-mist); }
+.deck-brand-appt b { font-family: var(--font-display); font-size: 17px; font-weight: 400; line-height: 1.1; white-space: nowrap; }
+.deck-brand-biz { display: flex; align-items: center; gap: var(--space-2); padding: var(--space-2) var(--space-3) var(--space-2) var(--space-2); border-radius: var(--radius-input); background: var(--surface-page); box-shadow: var(--shadow-2); }
+.deck-brand-biz .deck-brand-tile { width: 32px; height: 32px; font-size: 15px; }
+.deck-brand-biz-who { display: grid; gap: 3px; }
+.deck-brand-biz-who b { font-size: 11px; font-weight: 600; line-height: 1.2; }
+.deck-brand-biz-who small { font-size: 6.5px; font-weight: 600; line-height: 1; letter-spacing: .26em; text-transform: uppercase; color: var(--text-muted); }
+.deck-brand-avatar { display: grid; justify-items: center; justify-self: end; gap: 3px; font-size: 9.5px; font-weight: 500; line-height: 1.2; color: var(--text-muted); }
+.deck-brand-avatar .deck-brand-tile { width: 40px; height: 40px; border-radius: 50%; box-shadow: var(--shadow-2); font-size: 16px; }
+@container deck-sheet (max-width: 359px) {
+  .deck-brand-board { grid-template-columns: repeat(2, minmax(0, 1fr)); grid-template-areas: "primary primary" "stacked type" "colors colors" "uses uses"; gap: 6px; }
+  .deck-brand-tile { width: 32px; height: 32px; font-size: 15px; }
+  .deck-brand-word b { font-size: 22px; }
+  .deck-brand-primary { position: relative; grid-template-rows: auto; padding-block: 12px; }
+  .deck-brand-primary .deck-brand-label { position: absolute; right: 10px; bottom: 10px; }
+  .deck-brand-stacked .deck-brand-lockup { gap: 4px; }
+  .deck-brand-stacked .deck-brand-tile { width: 26px; height: 26px; font-size: 12px; }
+  .deck-brand-stacked .deck-brand-word b { font-size: 15px; }
+  .deck-brand-face b { font-size: 24px; }
+  .deck-brand-face + .deck-brand-face b { font-size: 18px; }
+  .deck-brand-swatches { min-height: 36px; }
+  .deck-brand-swatch { padding: 4px 6px; }
+  .deck-brand-uses { grid-template-columns: auto minmax(0, 1fr) auto; column-gap: 6px; }
+  .deck-brand-appt { padding-inline: var(--space-2); }
+  .deck-brand-appt b { font-size: 14px; }
+  .deck-brand-biz { padding: 6px; }
+  .deck-brand-biz .deck-brand-tile { width: 28px; height: 28px; font-size: 13px; }
+  .deck-brand-biz-who small { display: none; }
+  .deck-brand-avatar .deck-brand-tile { width: 32px; height: 32px; font-size: 13px; }
+}
+
+/* video: a first-visit video in the edit. The preview (forest, 16:9) with its title and the caption under the
+   playhead; under it the timeline: a ruler, three clips (the playhead in Consultation), the caption track and the
+   audio as SVG bars, played bars in forest; beside it what was cut from it, a vertical 9:16 version for social
+   (sage) and an article for the site. Type and 1.5px line icons only, no pictures. */
+.deck-video-edit { --split: -200px; display: grid; grid-template-columns: minmax(0, 1fr) 104px; grid-template-areas: "mon cut" "time cut" "time art"; align-items: start; gap: var(--space-3); }
+.deck-video-monitor { grid-area: mon; position: relative; display: grid; align-content: space-between; justify-items: start; aspect-ratio: 16 / 9; padding: var(--space-3); border-radius: var(--radius-input); background: var(--surface-strong); color: var(--cream); }
+.deck-video-tc { position: absolute; top: 9px; right: var(--space-3); font-size: 9.5px; font-weight: 500; line-height: 1.2; color: var(--sage-mist); font-variant-numeric: tabular-nums; }
+.deck-video-title { display: grid; gap: 6px; max-width: 10em; font-family: var(--font-display); font-size: 21px; line-height: 1.05; text-wrap: balance; }
+.deck-video-title::before { content: ""; width: 20px; height: 2px; border-radius: var(--radius-pill); background: var(--sage); }
+.deck-video-cap { justify-self: center; padding: 2px var(--space-2); border-radius: var(--radius-pill); background: var(--ink); color: var(--cream); font-size: 10px; font-weight: 500; line-height: 1.4; white-space: nowrap; }
+.deck-video-time { grid-area: time; position: relative; display: grid; grid-template-columns: 14px minmax(0, 1fr); grid-template-rows: auto 22px 10px 22px; align-items: center; gap: 6px var(--space-2); padding: var(--space-2) var(--space-3) var(--space-3) var(--space-2); border-radius: var(--radius-input); background: var(--surface-panel); }
+.deck-video-time .icon { width: 14px; height: 14px; color: var(--text-muted); }
+.deck-video-ruler { grid-column: 2; display: flex; justify-content: space-between; padding-bottom: 3px; border-bottom: var(--border-w) solid var(--border-quiet); font-size: 9.5px; font-weight: 500; line-height: 1.2; color: var(--text-muted); font-variant-numeric: tabular-nums; }
+.deck-video-clips { display: grid; grid-template-columns: 29fr 43fr 28fr; gap: 2px; height: 100%; overflow: hidden; border-radius: var(--radius-input); }
+.deck-video-clips span { display: block; min-width: 0; padding-inline: 6px; overflow: hidden; background: var(--sage); color: var(--ink); font-size: 9.5px; font-weight: 600; line-height: 22px; white-space: nowrap; text-overflow: ellipsis; }
+.deck-video-clips .is-current { background: var(--forest); color: var(--cream); }
+.deck-video-caps { position: relative; height: 100%; }
+.deck-video-caps i { position: absolute; top: 0; bottom: 0; left: var(--x); width: var(--w); border-radius: var(--radius-pill); background: var(--sage); }
+.deck-video-caps .is-current { background: var(--forest); }
+.deck-video-wave { position: relative; height: 100%; }
+.deck-video-wave svg { display: block; width: 100%; height: 100%; fill: var(--sage); }
+.deck-video-wave .deck-video-played { position: absolute; inset: 0; fill: var(--forest); clip-path: inset(0 52% 0 0); }
+/* the playhead: a 2px line with a knob, 48% along the lanes (cqi: the lanes are its container) */
+.deck-video-scrub { position: absolute; top: 19px; right: var(--space-3); bottom: var(--space-2); left: 30px; container-type: inline-size; pointer-events: none; }
+.deck-video-scrub i { position: absolute; top: 0; bottom: 0; left: -1px; width: 2px; border-radius: var(--radius-pill); background: var(--ink); translate: 48cqi 0; }
+.deck-video-scrub i::before { content: ""; position: absolute; top: 0; left: -3px; width: 8px; height: 8px; border-radius: 50%; background: var(--ink); }
+.deck-video-cut { grid-area: cut; position: relative; z-index: 1; display: grid; align-content: space-between; justify-items: start; aspect-ratio: 9 / 16; padding: var(--space-2); border-radius: var(--radius-input); background: var(--sage); color: var(--ink); box-shadow: var(--shadow-2); }
+.deck-video-ratio { padding: 1px 6px; border-radius: var(--radius-pill); background: var(--cream); color: var(--forest); font-size: 9.5px; font-weight: 600; line-height: 1.3; font-variant-numeric: tabular-nums; }
+.deck-video-cut .deck-video-title { font-size: 17px; }
+.deck-video-cut .deck-video-title::before { background: var(--forest); }
+.deck-video-cut .deck-video-cap { justify-self: stretch; padding: 3px 6px; border-radius: var(--radius-input); font-size: 9.5px; line-height: 1.3; text-align: center; white-space: normal; }
+.deck-video-article { grid-area: art; display: grid; align-content: start; gap: 4px; padding: var(--space-2); border: var(--border-w) solid var(--border-quiet); border-radius: var(--radius-input); background: var(--surface-page); box-shadow: var(--shadow-1); }
+.deck-video-kind { display: flex; align-items: center; gap: 4px; font-size: 9.5px; font-weight: 600; line-height: 1.2; color: var(--text-muted); }
+.deck-video-kind .icon { width: 12px; height: 12px; }
+.deck-video-article b { font-family: var(--font-display); font-size: 14px; font-weight: 400; line-height: 1.1; }
+.deck-video-lede { display: none; }
+@container deck-sheet (max-width: 359px) {
+  .deck-video-edit { --split: -148px; grid-template-columns: minmax(0, 1fr) 72px; grid-template-areas: "mon cut" "time time" "art art"; gap: var(--space-2); }
+  .deck-video-title { font-size: 17px; }
+  .deck-video-cap { max-width: 100%; border-radius: var(--radius-input); font-size: 9.5px; text-align: center; white-space: normal; text-wrap: balance; }
+  .deck-video-cut { padding: 6px; }
+  .deck-video-cut .deck-video-title { gap: 4px; font-size: 13px; }
+  .deck-video-cut .deck-video-cap { padding: 2px 4px; font-size: 8px; }
+  .deck-video-article { grid-template-columns: minmax(0, 1fr); gap: 2px; padding: var(--space-2) var(--space-3); }
+  .deck-video-article b { font-size: 17px; }
+  .deck-video-lede { display: block; font-size: var(--text-label); line-height: 1.4; color: var(--text-muted); }
+}
+
+/* website without the ads: a practice home page in a browser. The page (nav, hero with its two calls to action and
+   a visual of flat brand shapes, treatments, a reassurance strip, a consultation form and the footer) is taller than
+   the window; at rest the window shows its top. The window is a size container: the page and the scroll thumb move by
+   container units when the sample plays. Under 340px wide inside, the page takes its own phone layout. */
+.deck-site-browser { display: grid; overflow: hidden; border: var(--border-w) solid var(--border-quiet); border-radius: var(--radius-input); background: var(--surface-page); box-shadow: var(--shadow-2); }
+.deck-site-bar { display: flex; align-items: center; gap: var(--space-3); padding: 6px var(--space-3); border-bottom: var(--border-w) solid var(--border-quiet); background: var(--surface-panel); }
+.deck-site-dots { display: flex; gap: 5px; }
+.deck-site-dots i { width: 7px; height: 7px; border-radius: 50%; background: var(--sage); }
+.deck-site-url { display: flex; flex: 1; align-items: center; justify-content: center; gap: 4px; min-width: 0; margin-right: 27px; padding: 2px var(--space-3); border-radius: var(--radius-pill); background: var(--surface-page); font-size: 10px; font-weight: 500; line-height: 1.4; color: var(--text-muted); }
+.deck-site-url .icon { width: 11px; height: 11px; }
+.deck-site-view { position: relative; display: block; height: 240px; overflow: hidden; container: deck-site / size; }
+.deck-site-page { display: grid; font-size: 10px; line-height: 1.45; color: var(--text-body); }
+.deck-site-nav { display: flex; align-items: center; justify-content: space-between; gap: var(--space-3); padding: 9px 14px; border-bottom: var(--border-w) solid var(--border-quiet); }
+.deck-site-word { font-family: var(--font-display); font-size: 16px; font-weight: 400; line-height: 1.1; white-space: nowrap; }
+.deck-site-links { display: flex; gap: var(--space-3); font-weight: 500; color: var(--text-muted); }
+.deck-site-links .is-on { color: var(--text-body); }
+.deck-site-menu { display: none; }
+.deck-site-hero { display: grid; grid-template-columns: minmax(0, 1.3fr) minmax(0, 1fr); align-items: center; gap: 14px; padding: 18px 14px; }
+.deck-site-lead { display: grid; justify-items: start; gap: 6px; }
+.deck-site-h { font-family: var(--font-display); font-size: 23px; line-height: 1.02; text-wrap: balance; }
+.deck-site-p { font-size: 10.5px; color: var(--text-muted); text-wrap: pretty; }
+.deck-site-ctas { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 4px; }
+.deck-site-btn { position: relative; display: inline-flex; align-items: center; justify-content: center; gap: 4px; padding: 4px 10px; border: var(--border-w) solid var(--forest); border-radius: var(--radius-pill); background: var(--forest); color: var(--cream); font-size: 9.5px; font-weight: 600; line-height: 1.4; white-space: nowrap; }
+.deck-site-btn--line { background: transparent; color: var(--forest); }
+.deck-site-btn .icon { width: 10px; height: 10px; }
+/* the hero button's emphasis ring: hidden at rest, it shows for a moment when the sample plays */
+.deck-site-lead .deck-site-btn::after { content: ""; position: absolute; inset: -4px; border: var(--border-w-strong) solid var(--forest); border-radius: inherit; opacity: 0; }
+.deck-site-lead .deck-site-btn--line::after { display: none; }
+.deck-site-art { position: relative; display: block; height: 124px; overflow: hidden; border-radius: var(--radius-input); background: var(--forest); }
+.deck-site-art i { position: absolute; display: block; }
+.deck-site-art i:nth-child(1) { left: 14%; bottom: 0; width: 44%; height: 72%; border-radius: 999px 999px 0 0; background: var(--sage); }
+.deck-site-art i:nth-child(2) { top: 16%; right: 12%; width: 30%; aspect-ratio: 1; border-radius: 50%; background: var(--cream); }
+.deck-site-art i:nth-child(3) { right: 12%; bottom: 16%; width: 34%; height: 8px; border-radius: var(--radius-pill); background: var(--sage-mist); }
+.deck-site-treat { display: grid; gap: var(--space-2); padding: 4px 14px 16px; }
+.deck-site-h2 { font-family: var(--font-display); font-size: 16px; line-height: 1.1; }
+.deck-site-cards { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 6px; }
+.deck-site-cards > span { display: grid; justify-items: start; gap: 1px; padding: var(--space-2) 10px; border-radius: var(--radius-input); background: var(--surface-panel); font-size: 9.5px; color: var(--text-muted); }
+.deck-site-cards b { font-size: 10.5px; font-weight: 600; color: var(--text-body); }
+.deck-site-cards .arrow { width: 13px; height: 8px; margin-top: 4px; color: var(--forest); }
+.deck-site-trust { display: flex; justify-content: space-between; gap: var(--space-2); padding: var(--space-2) 14px; background: var(--forest); color: var(--cream); font-weight: 500; }
+.deck-site-trust > span { display: flex; align-items: center; gap: 4px; white-space: nowrap; }
+.deck-site-trust .icon { width: 12px; height: 12px; color: var(--sage-mist); }
+.deck-site-form { display: grid; grid-template-columns: minmax(0, .9fr) minmax(0, 1.1fr); align-items: start; gap: 14px; padding: 16px 14px; }
+.deck-site-ask { display: grid; gap: 4px; }
+.deck-site-fields { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 6px; }
+.deck-site-fields > span:not(.deck-site-btn) { display: flex; align-items: center; justify-content: space-between; padding: 4px 10px; border: var(--border-w) solid var(--border-input); border-radius: var(--radius-pill); background: var(--surface-page); color: var(--text-muted); line-height: 1.4; }
+.deck-site-fields .icon { width: 10px; height: 10px; }
+.deck-site-select, .deck-site-fields .deck-site-btn { grid-column: 1 / -1; }
+.deck-site-foot { display: flex; flex-wrap: wrap; align-items: baseline; gap: 4px var(--space-3); padding: var(--space-3) 14px 14px; border-top: var(--border-w) solid var(--border-quiet); background: var(--surface-panel); font-size: 9.5px; font-weight: 500; color: var(--text-muted); }
+.deck-site-foot .deck-site-word { flex: 1 1 100%; font-size: 14px; color: var(--text-body); }
+/* the scroll thumb: its track is a size container too, so it travels by the same keyframes as the page */
+.deck-site-track { position: absolute; top: 4px; right: 3px; bottom: 4px; width: 3px; container-type: size; }
+.deck-site-track i { display: block; width: 3px; height: 40%; border-radius: var(--radius-pill); background: var(--sage); }
+/* phones: a taller window, and the page in its own phone layout (by the window's width, below) */
+@container deck-sheet (max-width: 359px) {
+  .deck-site-view { height: 276px; }
+}
+@container deck-site (max-width: 339px) {
+  .deck-site-page { font-size: var(--text-label); line-height: 1.45; }
+  .deck-site-nav { padding: 10px 14px; }
+  .deck-site-word { font-size: 18px; }
+  .deck-site-links { display: none; }
+  .deck-site-menu { display: block; width: 18px; height: 18px; color: var(--text-body); }
+  .deck-site-hero { grid-template-columns: minmax(0, 1fr); gap: 14px; padding: 16px 14px; }
+  .deck-site-lead { gap: var(--space-2); }
+  .deck-site-h { font-size: 26px; }
+  .deck-site-p { font-size: var(--text-body-s); line-height: 1.45; }
+  .deck-site-ctas { gap: var(--space-2); }
+  .deck-site-btn { padding: 7px 14px; font-size: 12px; }
+  .deck-site-btn .icon { width: 12px; height: 12px; }
+  .deck-site-art { height: 64px; }
+  .deck-site-art i:nth-child(1) { left: 8%; width: 22%; height: 80%; }
+  .deck-site-art i:nth-child(2) { top: 22%; right: 30%; width: 14%; }
+  .deck-site-art i:nth-child(3) { right: 6%; bottom: 28%; width: 20%; }
+  .deck-site-h2 { font-size: 20px; }
+  .deck-site-cards { grid-template-columns: minmax(0, 1fr); }
+  .deck-site-cards > span { grid-template-columns: auto minmax(0, 1fr) auto; align-items: center; gap: var(--space-2); padding: 10px 12px; font-size: 12px; }
+  .deck-site-cards b { font-size: var(--text-label); }
+  .deck-site-cards .arrow { margin-top: 0; }
+  .deck-site-trust { flex-direction: column; gap: 6px; padding: 12px 14px; }
+  .deck-site-trust .icon { width: 14px; height: 14px; }
+  .deck-site-form { grid-template-columns: minmax(0, 1fr); }
+  .deck-site-fields { grid-template-columns: minmax(0, 1fr); }
+  .deck-site-fields > span:not(.deck-site-btn) { padding: 7px 14px; }
+  .deck-site-fields .deck-site-btn { padding-block: 8px; }
+  .deck-site-fields .icon { width: 12px; height: 12px; }
+  .deck-site-foot { font-size: 12px; }
+  .deck-site-foot .deck-site-word { font-size: 16px; }
+}
 
 /* coming soon: the questions a first conversation would cover, the first one ruled. Nothing ticked. */
 .deck-plan-title { font-family: var(--font-display); font-size: var(--text-h3); line-height: 1.2; }
@@ -1622,23 +1801,58 @@ h1 em, h2 em, h3 em, .tagline em, .signed-change em { color: var(--accent-italic
 .deck-topics-ask { color: var(--text-muted); font-weight: 500; }
 
 /* each sample's one action, 600ms after its card is chosen (site.js adds .is-playing). Each starts from a quiet state
-   and ends on the element's own style, so a sample that doesn't play is complete. */
+   and ends on the element's own style, so a sample that doesn't play is complete.
+   Brand: the identity is set in order: the tile, the name beside it, the stacked lockup, the colors drawn left to
+   right, the two faces, then the three things it is used on. Video: the playhead scrubs to the consultation while
+   the played audio follows it and the captions appear as it passes them (the rest are filled in when it stops), then
+   the vertical cut splits off the preview to its column and the article places. Website: the page scrolls down
+   through the window (pausing at the treatments and at the form) and back to the top, the hero button is ringed,
+   then the sample is signed and stamped. */
 @keyframes deck-place { from { opacity: 0; translate: 0 6px; } }
+@keyframes deck-pop { from { opacity: 0; scale: .8; } }
+@keyframes deck-show { from { opacity: 0; } }
 @keyframes deck-draw { from { clip-path: inset(0 100% 0 0); } to { clip-path: inset(0 0 0 0); } }
 @keyframes deck-rule { from { transform: scaleX(0); } }
 @keyframes deck-ring { 0%, 100% { opacity: 0; } 35%, 65% { opacity: 1; } }
 @keyframes deck-press { 0% { opacity: 0; scale: 1.7; } 60% { opacity: .9; scale: .93; } }
+@keyframes deck-scrub { from { translate: 0 0; } }
+@keyframes deck-played { from { clip-path: inset(0 100% 0 0); } }
+@keyframes deck-split { 0% { opacity: 0; translate: var(--split) 0; scale: .86; } 30% { opacity: 1; } }
+@keyframes deck-scroll {
+  0%, 10% { translate: 0 0; }
+  32%, 44% { translate: 0 calc((100cqh - 100%) * .5); }
+  64%, 80% { translate: 0 calc(100cqh - 100%); }
+  100% { translate: 0 0; }
+}
 @keyframes deck-fan { 50% { translate: calc(var(--fan-x) * var(--fan-n, 1)) calc(var(--fan-y) * var(--fan-n, 1)); } }
 @media (prefers-reduced-motion: no-preference) {
-  .js:not(.motion-paused) .deck-card.is-playing :is(.deck-swatch, .deck-appt, .deck-video-title span, .deck-site .deck-sign) { animation: deck-place var(--dur-slow) var(--ease-standard) backwards; }
-  .js:not(.motion-paused) .deck-card.is-playing .deck-swatches li:nth-child(2) .deck-swatch { animation-delay: var(--dur-fast); }
-  .js:not(.motion-paused) .deck-card.is-playing .deck-swatches li:nth-child(3) .deck-swatch { animation-delay: calc(var(--dur-fast) * 2); }
-  .js:not(.motion-paused) .deck-card.is-playing .deck-appt { animation-delay: calc(var(--dur-fast) * 2 + var(--dur-med)); }
-  .js:not(.motion-paused) .deck-card.is-playing .deck-clips li.is-current::after { animation: deck-draw var(--dur-slow) var(--ease-standard) backwards; }
-  .js:not(.motion-paused) .deck-card.is-playing .deck-video-title span { animation-duration: var(--dur-med); animation-delay: var(--dur-slow); }
-  .js:not(.motion-paused) .deck-card.is-playing .deck-site-btn::after { animation: deck-ring calc(var(--dur-med) * 3) var(--ease-standard); }
-  .js:not(.motion-paused) .deck-card.is-playing .deck-site .deck-sign { animation-delay: calc(var(--dur-med) * 3); }
-  .js:not(.motion-paused) .deck-card.is-playing .deck-site .stamp { animation: deck-press calc(var(--dur-med) * 1.8) var(--ease-standard) calc(var(--dur-med) * 3 + var(--dur-slow)) backwards; }
+  .js:not(.motion-paused) .deck-card.is-playing :is(.deck-brand-stacked, .deck-brand-face, .deck-brand-appt, .deck-brand-biz, .deck-brand-avatar, .deck-video-article) { animation: deck-place var(--dur-slow) var(--ease-standard) backwards; }
+  /* brand */
+  .js:not(.motion-paused) .deck-card.is-playing .deck-brand-primary .deck-brand-tile { animation: deck-pop var(--dur-slow) var(--ease-standard) backwards; }
+  .js:not(.motion-paused) .deck-card.is-playing .deck-brand-primary .deck-brand-word { animation: deck-draw var(--dur-slow) var(--ease-standard) var(--dur-fast) backwards; }
+  .js:not(.motion-paused) .deck-card.is-playing .deck-brand-stacked { animation-delay: 350ms; }
+  .js:not(.motion-paused) .deck-card.is-playing .deck-brand-swatches { animation: deck-draw 500ms var(--ease-standard) 550ms backwards; }
+  .js:not(.motion-paused) .deck-card.is-playing .deck-brand-face:first-child { animation-delay: 700ms; }
+  .js:not(.motion-paused) .deck-card.is-playing .deck-brand-face + .deck-brand-face { animation-delay: 800ms; }
+  .js:not(.motion-paused) .deck-card.is-playing .deck-brand-appt { animation-delay: 950ms; }
+  .js:not(.motion-paused) .deck-card.is-playing .deck-brand-biz { animation-delay: 1075ms; }
+  .js:not(.motion-paused) .deck-card.is-playing .deck-brand-avatar { animation-delay: 1200ms; }
+  /* video */
+  .js:not(.motion-paused) .deck-card.is-playing .deck-video-monitor .deck-video-title { animation: deck-place var(--dur-slow) var(--ease-standard) backwards; }
+  .js:not(.motion-paused) .deck-card.is-playing .deck-video-scrub i { animation: deck-scrub 2.4s var(--ease-standard) backwards; }
+  .js:not(.motion-paused) .deck-card.is-playing .deck-video-played { animation: deck-played 2.4s var(--ease-standard) backwards; }
+  .js:not(.motion-paused) .deck-card.is-playing :is(.deck-video-caps i, .deck-video-monitor .deck-video-cap) { animation: deck-show var(--dur-med) var(--ease-standard) backwards; }
+  .js:not(.motion-paused) .deck-card.is-playing .deck-video-caps i:nth-child(2) { animation-delay: 300ms; }
+  .js:not(.motion-paused) .deck-card.is-playing :is(.deck-video-caps i:nth-child(3), .deck-video-monitor .deck-video-cap) { animation-delay: 1.1s; }
+  .js:not(.motion-paused) .deck-card.is-playing .deck-video-caps i:nth-child(4) { animation-delay: 2.4s; }
+  .js:not(.motion-paused) .deck-card.is-playing .deck-video-caps i:nth-child(5) { animation-delay: 2.5s; }
+  .js:not(.motion-paused) .deck-card.is-playing .deck-video-cut { animation: deck-split 700ms var(--ease-standard) 2.5s backwards; }
+  .js:not(.motion-paused) .deck-card.is-playing .deck-video-article { animation-delay: 3s; }
+  /* website */
+  .js:not(.motion-paused) .deck-card.is-playing :is(.deck-site-page, .deck-site-track i) { animation: deck-scroll 4.4s var(--ease-standard); }
+  .js:not(.motion-paused) .deck-card.is-playing .deck-site-lead .deck-site-btn::after { animation: deck-ring calc(var(--dur-med) * 3) var(--ease-standard) 4.4s; }
+  .js:not(.motion-paused) .deck-card.is-playing .deck-site .deck-sign { animation: deck-place var(--dur-slow) var(--ease-standard) 4.9s backwards; }
+  .js:not(.motion-paused) .deck-card.is-playing .deck-site .stamp { animation: deck-press calc(var(--dur-med) * 1.8) var(--ease-standard) 5.3s backwards; }
   .js:not(.motion-paused) .deck-card.is-playing .deck-topics li.is-key::after { animation: deck-rule var(--dur-slow) var(--ease-standard) backwards; }
   /* the nudge: the rear cards fan out and settle back, once */
   .js:not(.motion-paused) .deck.is-nudging .deck-card:is([data-slot="1"], [data-slot="2"]) { animation: deck-fan var(--rest-bloom) var(--ease-standard) var(--dur-med); }
diff --git a/site/components.html b/site/components.html
index 43c5dc1..472bd60 100644
--- a/site/components.html
+++ b/site/components.html
@@ -539,7 +539,7 @@
         </div>
 
         <div class="ref-item ref-item--wide">
-          <p class="ref-name" id="demo-beyond">.beyond[data-deck] (the homepage's "Beyond the core plan", under the How we help rows, on its own hairline): the add-ons as a deck of cards browsed by hand, patient follow-up first. Left: h3.beyond-title, its line, and .deck-picks, six named buttons (aria-current on the chosen one; Left/Right, Up/Down, Home and End move along them; a wrapping row of pills on tablets; none on phones). Right: .deck, six article.deck-card in one grid cell, each a sage mist card with h4.deck-title, its chip, a line, a link and a real sample on a cream sheet (.deck-sheet, the Sample chip in its header, the attribution on its own line at the foot). site.js ("the add-ons deck") sets data-slot on every card: 0 in front (shadow level 3), 1 and 2 behind it, smaller and offset right and down (on phones, down), their bodies blurred 1.5px and 3px (.75px and 1.5px on phones) and inert, back and prev out of sight. Each rear card shows .deck-rail on its exposed edge: an unblurred button naming it (on phones only the next card's, along its bottom edge). Under the deck, .deck-bar: Previous add-on and Next add-on (a 32px circle in a 44px target; both wrap), "1 of 6", and "Ask about a project". A swipe of 48px or more, mostly sideways, on a phone chooses the next or previous card; vertical scrolling is left alone. The choice is announced politely (the name and "2 of 6"). Nothing advances on its own. Moves take 400ms; the card coming forward comes into focus in its last 150ms. The first time the deck is on screen the rear cards fan out 12px and settle back, once. Follow-up's sample (a call note, the concierge's text, the booking in the practice's software, signed by Follow-up with a small stamp) is a signed sample (data-loop="follow") that loops while its card is in front; the others replay one action 600ms after they are chosen: brand, the swatches place and the appointment card settles; video, the selected clip's frame draws in and the title settles; website, the button's ring shows and the sign-off is stamped; the coming-soon two, the rule under the first topic draws. Under reduced motion or with animations paused the cards swap at once and the samples stay finished; without JavaScript the six cards are a plain list and the controls stay hidden.</p>
+          <p class="ref-name" id="demo-beyond">.beyond[data-deck] (the homepage's "Beyond the core plan", under the How we help rows, on its own hairline): the add-ons as a deck of cards browsed by hand, patient follow-up first. Left: h3.beyond-title, its line, and .deck-picks, six named buttons (aria-current on the chosen one; Left/Right, Up/Down, Home and End move along them; a wrapping row of pills on tablets; none on phones). Right: .deck, six article.deck-card in one grid cell, each a sage mist card with h4.deck-title, its chip, a line, a link and a real sample on a cream sheet (.deck-sheet, the Sample chip in its header, the attribution on its own line at the foot). The brand, video and website cards (.deck-body--wide, .deck-sheet--wide) give their samples a 432px column beside the copy; each of those samples is composed by its own width (a container query) and recomposed for phones rather than scaled down. site.js ("the add-ons deck") sets data-slot on every card: 0 in front (shadow level 3), 1 and 2 behind it, smaller and offset right and down (on phones, down), their bodies blurred 1.5px and 3px (.75px and 1.5px on phones) and inert, back and prev out of sight. Each rear card shows .deck-rail on its exposed edge: an unblurred button naming it (on phones only the next card's, along its bottom edge). Under the deck, .deck-bar: Previous add-on and Next add-on (a 32px circle in a 44px target; both wrap), "1 of 6", and "Ask about a project". A swipe of 48px or more, mostly sideways, on a phone chooses the next or previous card; vertical scrolling is left alone. The choice is announced politely (the name and "2 of 6"). Nothing advances on its own. Moves take 400ms; the card coming forward comes into focus in its last 150ms. The first time the deck is on screen the rear cards fan out 12px and settle back, once. Follow-up's sample (a call note, the concierge's text, the booking in the practice's software, signed by Follow-up with a small stamp) is a signed sample (data-loop="follow") that loops while its card is in front; the others replay one action 600ms after they are chosen: brand, a brand identity board (two lockups, the colors, the type, the brand in use) is set piece by piece; video, the playhead scrubs along the edit's timeline as the captions appear, then the vertical cut splits off the preview and the article places; website, the practice home page scrolls down through the browser and back, the hero button's ring shows and the sign-off is stamped; the coming-soon two, the rule under the first topic draws. Under reduced motion or with animations paused the cards swap at once and the samples stay finished; without JavaScript the six cards are a plain list and the controls stay hidden.</p>
           <div class="ref-stage">
           <div class="beyond" data-deck>
             <div class="beyond-head">
@@ -574,55 +574,119 @@
                   <button class="deck-rail" type="button" data-deck-go="0"><span class="sr-only">Show </span><span class="deck-rail-name">Patient follow-up</span></button>
                 </article>
                 <article class="deck-card" data-slot="1" aria-labelledby="deck-brand">
-                  <div class="deck-body">
+                  <div class="deck-body deck-body--wide">
                     <div class="deck-copy">
                       <div class="deck-head"><h4 class="deck-title" id="deck-brand" tabindex="-1">Brand and logo work</h4><span class="chip">Priced for your practice</span></div>
                       <p>A logo and a brand kit made for your practice.</p>
                       <a class="btn btn--secondary btn--small" href="/services/add-ons#brand">See brand work <svg class="arrow" viewBox="0 0 22 12" aria-hidden="true" focusable="false"><path d="M1 6h19M15 1l5 5-5 5"/></svg></a>
                     </div>
-                    <div class="deck-sheet deck-brand" role="img" aria-label="Sample: a brand application study. [Your practice], orthodontics, in forest, cream and sage, and an appointment card: your next visit, [Date] at [Time]. Prepared for discussion.">
-                      <div class="deck-sheet-head"><span class="deck-sheet-title">Brand application study</span><span class="chip chip--sample">Sample</span></div>
-                      <p class="deck-brand-mark"><span>[Your practice]</span><span>Orthodontics</span></p>
-                      <ul class="deck-swatches"><li><span class="deck-swatch deck-swatch--forest"></span>Forest</li><li><span class="deck-swatch deck-swatch--cream"></span>Cream</li><li><span class="deck-swatch deck-swatch--sage"></span>Sage</li></ul>
-                      <p class="deck-appt"><small>Your next visit</small><span>[Date] at [Time]</span></p>
+                    <div class="deck-sheet deck-sheet--wide deck-brand" role="img" aria-label="Sample: a brand identity board for [Your practice]. The name set in two lockups, horizontal and stacked, each with an icon tile holding your initial; four colors, primary, ground, accent and text, their hex codes to come; a display face and a text face; and the brand in use on an appointment card, your next visit on [Date] at [Time], a business card for [Name], and a social profile image. Prepared for discussion.">
+                      <div class="deck-sheet-head"><span class="deck-sheet-title">Brand identity board</span><span class="chip chip--sample">Sample</span></div>
+                      <div class="deck-brand-board">
+                        <div class="deck-brand-cell deck-brand-primary">
+                          <span class="deck-brand-label">Primary lockup</span>
+                          <span class="deck-brand-lockup"><span class="deck-brand-tile">[P]</span><span class="deck-brand-word"><b>[Your practice]</b><small>Orthodontics</small></span></span>
+                        </div>
+                        <div class="deck-brand-cell deck-brand-stacked">
+                          <span class="deck-brand-label">Stacked</span>
+                          <span class="deck-brand-lockup"><span class="deck-brand-tile">[P]</span><span class="deck-brand-word"><b>[Your practice]</b><small>Orthodontics</small></span></span>
+                        </div>
+                        <div class="deck-brand-cell deck-brand-colors">
+                          <span class="deck-brand-label">Color</span>
+                          <span class="deck-brand-swatches"><span class="deck-brand-swatch">Primary<small>[Hex]</small></span><span class="deck-brand-swatch">Ground<small>[Hex]</small></span><span class="deck-brand-swatch">Accent<small>[Hex]</small></span><span class="deck-brand-swatch">Text<small>[Hex]</small></span></span>
+                        </div>
+                        <div class="deck-brand-cell deck-brand-type">
+                          <span class="deck-brand-label">Type</span>
+                          <span class="deck-brand-faces"><span class="deck-brand-face"><b>Aa</b><small>[Display face]</small></span><span class="deck-brand-face"><b>Aa</b><small>[Text face]</small></span></span>
+                        </div>
+                        <div class="deck-brand-cell deck-brand-uses">
+                          <span class="deck-brand-label">In use</span>
+                          <span class="deck-brand-appt"><small>Your next visit</small><b>[Date] at [Time]</b></span>
+                          <span class="deck-brand-biz"><span class="deck-brand-tile">[P]</span><span class="deck-brand-biz-who"><b>[Name]</b><small>Orthodontics</small></span></span>
+                          <span class="deck-brand-avatar"><span class="deck-brand-tile">[P]</span><small>Profile</small></span>
+                        </div>
+                      </div>
                       <p class="deck-by">Prepared for discussion</p>
                     </div>
                   </div>
                   <button class="deck-rail" type="button" data-deck-go="1"><span class="sr-only">Show </span><span class="deck-rail-name">Brand and logo work</span></button>
                 </article>
                 <article class="deck-card" data-slot="2" aria-labelledby="deck-video">
-                  <div class="deck-body">
+                  <div class="deck-body deck-body--wide">
                     <div class="deck-copy">
                       <div class="deck-head"><h4 class="deck-title" id="deck-video" tabindex="-1">Video and content</h4><span class="chip">Priced for your practice</span></div>
                       <p>Video cutdowns and written content for your site and social.</p>
                       <a class="btn btn--secondary btn--small" href="/services/add-ons#video">See video and content <svg class="arrow" viewBox="0 0 22 12" aria-hidden="true" focusable="false"><path d="M1 6h19M15 1l5 5-5 5"/></svg></a>
                     </div>
-                    <div class="deck-sheet deck-video" role="img" aria-label="Sample: a title sequence study. Three frames, your first visit, your questions and what happens next; the first frame's title, what to expect at your first visit; and three clips, welcome, consultation and next steps. Prepared for discussion.">
-                      <div class="deck-sheet-head"><span class="deck-sheet-title">Title sequence study</span><span class="chip chip--sample">Sample</span></div>
-                      <div class="deck-video-board">
-                        <ol class="deck-frames"><li class="is-current">Your first visit</li><li>Your questions</li><li>What happens next</li></ol>
-                        <p class="deck-video-title"><span>What to expect at your first visit</span></p>
+                    <div class="deck-sheet deck-sheet--wide deck-video" role="img" aria-label="Sample: a video in the edit, What to expect at your first visit. The preview shows its title and the caption, Your first visit starts with a conversation. Under it, the timeline: three clips, welcome, consultation and next steps, a caption track and the audio, with the playhead in the consultation. Cut from it, a vertical version for social and an article for your site. Prepared for discussion.">
+                      <div class="deck-sheet-head"><span class="deck-sheet-title">First visit video, in the edit</span><span class="chip chip--sample">Sample</span></div>
+                      <div class="deck-video-edit">
+                        <div class="deck-video-monitor">
+                          <span class="deck-video-tc">0:14 / 0:30</span>
+                          <span class="deck-video-title">What to expect at your first visit</span>
+                          <span class="deck-video-cap">Your first visit starts with a conversation.</span>
+                        </div>
+                        <div class="deck-video-time">
+                          <span class="deck-video-ruler"><span>0:00</span><span>0:10</span><span>0:20</span><span>0:30</span></span>
+                          <svg class="icon" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><rect x="2.5" y="5.5" width="10.5" height="9" rx="2"/><path d="m13 9 4.5-2.5v7L13 11"/></svg>
+                          <span class="deck-video-clips"><span>Welcome</span><span class="is-current">Consultation</span><span>Next steps</span></span>
+                          <svg class="icon" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><rect x="2.5" y="4.5" width="15" height="11" rx="2"/><path d="M6 9h3M11.5 9h2.5M6 12h8"/></svg>
+                          <span class="deck-video-caps"><i style="--x: 1%; --w: 12%"></i><i style="--x: 17%; --w: 17%"></i><i class="is-current" style="--x: 39%; --w: 18%"></i><i style="--x: 61%; --w: 18%"></i><i style="--x: 83%; --w: 16%"></i></span>
+                          <svg class="icon" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><path d="M3.5 8v4h3l4 3.5v-11L6.5 8Z"/><path d="M13.5 7.5a3.5 3.5 0 0 1 0 5M15.5 5.5a6.5 6.5 0 0 1 0 9"/></svg>
+                          <span class="deck-video-wave"><svg viewBox="0 0 256 24" preserveAspectRatio="none" aria-hidden="true" focusable="false"><path id="deck-wave" d="M1 9h2v6h-2zM5 9h2v6h-2zM9 6h2v12h-2zM13 9h2v6h-2zM17 6h2v12h-2zM21 8h2v8h-2zM25 10h2v4h-2zM29 8h2v8h-2zM33 10h2v4h-2zM37 11h2v2h-2zM41 11h2v2h-2zM45 7h2v10h-2zM49 10h2v4h-2zM53 10h2v4h-2zM57 8h2v8h-2zM61 6h2v12h-2zM65 9h2v6h-2zM69 8h2v8h-2zM73 5h2v14h-2zM77 4h2v16h-2zM81 7h2v10h-2zM85 8h2v8h-2zM89 11h2v2h-2zM93 11h2v2h-2zM97 11h2v2h-2zM101 2h2v20h-2zM105 10h2v4h-2zM109 6h2v12h-2zM113 9h2v6h-2zM117 9h2v6h-2zM121 9h2v6h-2zM125 8h2v8h-2zM129 4h2v16h-2zM133 9h2v6h-2zM137 7h2v10h-2zM141 7h2v10h-2zM145 8h2v8h-2zM149 11h2v2h-2zM153 11h2v2h-2zM157 6h2v12h-2zM161 10h2v4h-2zM165 10h2v4h-2zM169 9h2v6h-2zM173 6h2v12h-2zM177 7h2v10h-2zM181 8h2v8h-2zM185 5h2v14h-2zM189 7h2v10h-2zM193 9h2v6h-2zM197 6h2v12h-2zM201 6h2v12h-2zM205 11h2v2h-2zM209 11h2v2h-2zM213 8h2v8h-2zM217 6h2v12h-2zM221 7h2v10h-2zM225 6h2v12h-2zM229 6h2v12h-2zM233 8h2v8h-2zM237 2h2v20h-2zM241 9h2v6h-2zM245 7h2v10h-2zM249 6h2v12h-2zM253 9h2v6h-2z"/></svg><svg class="deck-video-played" viewBox="0 0 256 24" preserveAspectRatio="none" aria-hidden="true" focusable="false"><use href="#deck-wave"/></svg></span>
+                          <span class="deck-video-scrub"><i></i></span>
+                        </div>
+                        <div class="deck-video-cut">
+                          <span class="deck-video-ratio">9:16</span>
+                          <span class="deck-video-title">What to expect at your first visit</span>
+                          <span class="deck-video-cap">Your first visit starts with a conversation.</span>
+                        </div>
+                        <div class="deck-video-article">
+                          <span class="deck-video-kind"><svg class="icon" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><path d="M5.5 2.5h6l3.5 3.5v11.5h-9.5Z"/><path d="M11.5 2.5V6H15M8 10h4.5M8 13h4.5"/></svg>Article</span>
+                          <b>What to expect at your first visit</b>
+                          <span class="deck-video-lede">Who you'll meet and what happens.</span>
+                        </div>
                       </div>
-                      <ol class="deck-clips"><li class="is-current">Welcome</li><li>Consultation</li><li>Next steps</li></ol>
                       <p class="deck-by">Prepared for discussion</p>
                     </div>
                   </div>
                   <button class="deck-rail" type="button" data-deck-go="2"><span class="sr-only">Show </span><span class="deck-rail-name">Video and content</span></button>
                 </article>
                 <article class="deck-card" data-slot="back" aria-labelledby="deck-website">
-                  <div class="deck-body">
+                  <div class="deck-body deck-body--wide">
                     <div class="deck-copy">
                       <div class="deck-head"><h4 class="deck-title" id="deck-website" tabindex="-1">Website without the ads</h4><span class="chip">Priced for your practice</span></div>
                       <p>A website built from your practice, with SEO, for practices running their own ads.</p>
                       <a class="btn btn--secondary btn--small" href="/services/add-ons#website">See website projects <svg class="arrow" viewBox="0 0 22 12" aria-hidden="true" focusable="false"><path d="M1 6h19M15 1l5 5-5 5"/></svg></a>
                     </div>
-                    <div class="deck-sheet deck-site" role="img" aria-label="Sample: a home page for [Your practice], with links to treatments, your visit and contact. A place to start with your orthodontic questions. Learn about treatment options and what to expect at your first visit. Request a consultation. Signed by Web and SEO.">
-                      <div class="deck-sheet-head"><span class="deck-sheet-title">Home page</span><span class="chip chip--sample">Sample</span></div>
-                      <div class="deck-site-page">
-                        <p class="deck-site-top"><b>[Your practice]</b><span>Treatments · Your visit · Contact</span></p>
-                        <p class="deck-site-h">A place to start with your orthodontic questions.</p>
-                        <p class="deck-site-p">Learn about treatment options and what to expect at your first visit.</p>
-                        <span class="deck-site-btn">Request a consultation</span>
+                    <div class="deck-sheet deck-sheet--wide deck-site" role="img" aria-label="Sample: the home page of a website for [Your practice], scrolled from top to bottom. A menu: treatments, your visit, about and contact. A place to start with your orthodontic questions. Learn about treatment options and what to expect at your first visit. Request a consultation, or call. Treatments: braces, clear aligners and early treatment. Evening appointments, payment plans, and treatment for adults and teens. A form to request a consultation: name, phone and what you would like to ask about. Then the footer. Signed by Web and SEO.">
+                      <div class="deck-sheet-head"><span class="deck-sheet-title">Practice home page</span><span class="chip chip--sample">Sample</span></div>
+                      <div class="deck-site-browser">
+                        <span class="deck-site-bar"><span class="deck-site-dots"><i></i><i></i><i></i></span><span class="deck-site-url"><svg class="icon" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><rect x="5" y="9" width="10" height="7.5" rx="2"/><path d="M7.5 9V7a2.5 2.5 0 0 1 5 0v2"/></svg>[yourpractice].com</span></span>
+                        <span class="deck-site-view">
+                          <span class="deck-site-page">
+                            <span class="deck-site-nav"><b class="deck-site-word">[Your practice]</b><span class="deck-site-links"><span class="is-on">Treatments</span><span>Your visit</span><span>About</span><span>Contact</span></span><svg class="icon deck-site-menu" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><path d="M3.5 6h13M3.5 10h13M3.5 14h13"/></svg></span>
+                            <span class="deck-site-hero">
+                              <span class="deck-site-lead">
+                                <span class="deck-site-h">A place to start with your orthodontic questions.</span>
+                                <span class="deck-site-p">Learn about treatment options and what to expect at your first visit.</span>
+                                <span class="deck-site-ctas"><span class="deck-site-btn">Request a consultation</span><span class="deck-site-btn deck-site-btn--line"><svg class="icon" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><path d="M6.6 3.2 8.4 7 7 8.4a9.6 9.6 0 0 0 4.6 4.6L13 11.6l3.8 1.8v2.4a1.6 1.6 0 0 1-1.7 1.6A13.4 13.4 0 0 1 2.6 4.9 1.6 1.6 0 0 1 4.2 3.2Z"/></svg>Call</span></span>
+                              </span>
+                              <span class="deck-site-art"><i></i><i></i><i></i></span>
+                            </span>
+                            <span class="deck-site-treat">
+                              <span class="deck-site-h2">Treatments</span>
+                              <span class="deck-site-cards"><span><b>Braces</b>Metal or ceramic<svg class="arrow" viewBox="0 0 22 12" aria-hidden="true" focusable="false"><path d="M1 6h19M15 1l5 5-5 5"/></svg></span><span><b>Clear aligners</b>Removable trays<svg class="arrow" viewBox="0 0 22 12" aria-hidden="true" focusable="false"><path d="M1 6h19M15 1l5 5-5 5"/></svg></span><span><b>Early treatment</b>For younger children<svg class="arrow" viewBox="0 0 22 12" aria-hidden="true" focusable="false"><path d="M1 6h19M15 1l5 5-5 5"/></svg></span></span>
+                            </span>
+                            <span class="deck-site-trust"><span><svg class="icon" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><path d="m4.5 10.5 3.5 3.5 7.5-8"/></svg>Evening appointments</span><span><svg class="icon" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><path d="m4.5 10.5 3.5 3.5 7.5-8"/></svg>Payment plans</span><span><svg class="icon" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><path d="m4.5 10.5 3.5 3.5 7.5-8"/></svg>Adults and teens</span></span>
+                            <span class="deck-site-form">
+                              <span class="deck-site-ask"><span class="deck-site-h2">Request a consultation</span><span class="deck-site-p">Tell us what you would like to ask about.</span></span>
+                              <span class="deck-site-fields"><span>Name</span><span>Phone</span><span class="deck-site-select">I'm asking about<svg class="icon" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><path d="m6 8 4 4 4-4"/></svg></span><span class="deck-site-btn">Send request</span></span>
+                            </span>
+                            <span class="deck-site-foot"><b class="deck-site-word">[Your practice]</b><span>Treatments</span><span>Your visit</span><span>About</span><span>Contact</span><span>Privacy</span></span>
+                          </span>
+                          <span class="deck-site-track"><i></i></span>
+                        </span>
                       </div>
                       <p class="deck-sign"><span class="deck-sign-who">Signed by <em class="signature">Web and SEO</em></span><img class="stamp" src="/assets/img/stamp-signed.svg" alt="" width="48" height="48"></p>
                     </div>
diff --git a/site/index.html b/site/index.html
index 08ce4a9..72b1143 100644
--- a/site/index.html
+++ b/site/index.html
@@ -432,55 +432,119 @@ height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
               <button class="deck-rail" type="button" data-deck-go="0"><span class="sr-only">Show </span><span class="deck-rail-name">Patient follow-up</span></button>
             </article>
             <article class="deck-card" data-slot="1" aria-labelledby="deck-brand">
-              <div class="deck-body">
+              <div class="deck-body deck-body--wide">
                 <div class="deck-copy">
                   <div class="deck-head"><h4 class="deck-title" id="deck-brand" tabindex="-1">Brand and logo work</h4><span class="chip">Priced for your practice</span></div>
                   <p>A logo and a brand kit made for your practice.</p>
                   <a class="btn btn--secondary btn--small" href="/services/add-ons#brand">See brand work <svg class="arrow" viewBox="0 0 22 12" aria-hidden="true" focusable="false"><path d="M1 6h19M15 1l5 5-5 5"/></svg></a>
                 </div>
-                <div class="deck-sheet deck-brand" role="img" aria-label="Sample: a brand application study. [Your practice], orthodontics, in forest, cream and sage, and an appointment card: your next visit, [Date] at [Time]. Prepared for discussion.">
-                  <div class="deck-sheet-head"><span class="deck-sheet-title">Brand application study</span><span class="chip chip--sample">Sample</span></div>
-                  <p class="deck-brand-mark"><span>[Your practice]</span><span>Orthodontics</span></p>
-                  <ul class="deck-swatches"><li><span class="deck-swatch deck-swatch--forest"></span>Forest</li><li><span class="deck-swatch deck-swatch--cream"></span>Cream</li><li><span class="deck-swatch deck-swatch--sage"></span>Sage</li></ul>
-                  <p class="deck-appt"><small>Your next visit</small><span>[Date] at [Time]</span></p>
+                <div class="deck-sheet deck-sheet--wide deck-brand" role="img" aria-label="Sample: a brand identity board for [Your practice]. The name set in two lockups, horizontal and stacked, each with an icon tile holding your initial; four colors, primary, ground, accent and text, their hex codes to come; a display face and a text face; and the brand in use on an appointment card, your next visit on [Date] at [Time], a business card for [Name], and a social profile image. Prepared for discussion.">
+                  <div class="deck-sheet-head"><span class="deck-sheet-title">Brand identity board</span><span class="chip chip--sample">Sample</span></div>
+                  <div class="deck-brand-board">
+                    <div class="deck-brand-cell deck-brand-primary">
+                      <span class="deck-brand-label">Primary lockup</span>
+                      <span class="deck-brand-lockup"><span class="deck-brand-tile">[P]</span><span class="deck-brand-word"><b>[Your practice]</b><small>Orthodontics</small></span></span>
+                    </div>
+                    <div class="deck-brand-cell deck-brand-stacked">
+                      <span class="deck-brand-label">Stacked</span>
+                      <span class="deck-brand-lockup"><span class="deck-brand-tile">[P]</span><span class="deck-brand-word"><b>[Your practice]</b><small>Orthodontics</small></span></span>
+                    </div>
+                    <div class="deck-brand-cell deck-brand-colors">
+                      <span class="deck-brand-label">Color</span>
+                      <span class="deck-brand-swatches"><span class="deck-brand-swatch">Primary<small>[Hex]</small></span><span class="deck-brand-swatch">Ground<small>[Hex]</small></span><span class="deck-brand-swatch">Accent<small>[Hex]</small></span><span class="deck-brand-swatch">Text<small>[Hex]</small></span></span>
+                    </div>
+                    <div class="deck-brand-cell deck-brand-type">
+                      <span class="deck-brand-label">Type</span>
+                      <span class="deck-brand-faces"><span class="deck-brand-face"><b>Aa</b><small>[Display face]</small></span><span class="deck-brand-face"><b>Aa</b><small>[Text face]</small></span></span>
+                    </div>
+                    <div class="deck-brand-cell deck-brand-uses">
+                      <span class="deck-brand-label">In use</span>
+                      <span class="deck-brand-appt"><small>Your next visit</small><b>[Date] at [Time]</b></span>
+                      <span class="deck-brand-biz"><span class="deck-brand-tile">[P]</span><span class="deck-brand-biz-who"><b>[Name]</b><small>Orthodontics</small></span></span>
+                      <span class="deck-brand-avatar"><span class="deck-brand-tile">[P]</span><small>Profile</small></span>
+                    </div>
+                  </div>
                   <p class="deck-by">Prepared for discussion</p>
                 </div>
               </div>
               <button class="deck-rail" type="button" data-deck-go="1"><span class="sr-only">Show </span><span class="deck-rail-name">Brand and logo work</span></button>
             </article>
             <article class="deck-card" data-slot="2" aria-labelledby="deck-video">
-              <div class="deck-body">
+              <div class="deck-body deck-body--wide">
                 <div class="deck-copy">
                   <div class="deck-head"><h4 class="deck-title" id="deck-video" tabindex="-1">Video and content</h4><span class="chip">Priced for your practice</span></div>
                   <p>Video cutdowns and written content for your site and social.</p>
                   <a class="btn btn--secondary btn--small" href="/services/add-ons#video">See video and content <svg class="arrow" viewBox="0 0 22 12" aria-hidden="true" focusable="false"><path d="M1 6h19M15 1l5 5-5 5"/></svg></a>
                 </div>
-                <div class="deck-sheet deck-video" role="img" aria-label="Sample: a title sequence study. Three frames, your first visit, your questions and what happens next; the first frame's title, what to expect at your first visit; and three clips, welcome, consultation and next steps. Prepared for discussion.">
-                  <div class="deck-sheet-head"><span class="deck-sheet-title">Title sequence study</span><span class="chip chip--sample">Sample</span></div>
-                  <div class="deck-video-board">
-                    <ol class="deck-frames"><li class="is-current">Your first visit</li><li>Your questions</li><li>What happens next</li></ol>
-                    <p class="deck-video-title"><span>What to expect at your first visit</span></p>
+                <div class="deck-sheet deck-sheet--wide deck-video" role="img" aria-label="Sample: a video in the edit, What to expect at your first visit. The preview shows its title and the caption, Your first visit starts with a conversation. Under it, the timeline: three clips, welcome, consultation and next steps, a caption track and the audio, with the playhead in the consultation. Cut from it, a vertical version for social and an article for your site. Prepared for discussion.">
+                  <div class="deck-sheet-head"><span class="deck-sheet-title">First visit video, in the edit</span><span class="chip chip--sample">Sample</span></div>
+                  <div class="deck-video-edit">
+                    <div class="deck-video-monitor">
+                      <span class="deck-video-tc">0:14 / 0:30</span>
+                      <span class="deck-video-title">What to expect at your first visit</span>
+                      <span class="deck-video-cap">Your first visit starts with a conversation.</span>
+                    </div>
+                    <div class="deck-video-time">
+                      <span class="deck-video-ruler"><span>0:00</span><span>0:10</span><span>0:20</span><span>0:30</span></span>
+                      <svg class="icon" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><rect x="2.5" y="5.5" width="10.5" height="9" rx="2"/><path d="m13 9 4.5-2.5v7L13 11"/></svg>
+                      <span class="deck-video-clips"><span>Welcome</span><span class="is-current">Consultation</span><span>Next steps</span></span>
+                      <svg class="icon" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><rect x="2.5" y="4.5" width="15" height="11" rx="2"/><path d="M6 9h3M11.5 9h2.5M6 12h8"/></svg>
+                      <span class="deck-video-caps"><i style="--x: 1%; --w: 12%"></i><i style="--x: 17%; --w: 17%"></i><i class="is-current" style="--x: 39%; --w: 18%"></i><i style="--x: 61%; --w: 18%"></i><i style="--x: 83%; --w: 16%"></i></span>
+                      <svg class="icon" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><path d="M3.5 8v4h3l4 3.5v-11L6.5 8Z"/><path d="M13.5 7.5a3.5 3.5 0 0 1 0 5M15.5 5.5a6.5 6.5 0 0 1 0 9"/></svg>
+                      <span class="deck-video-wave"><svg viewBox="0 0 256 24" preserveAspectRatio="none" aria-hidden="true" focusable="false"><path id="deck-wave" d="M1 9h2v6h-2zM5 9h2v6h-2zM9 6h2v12h-2zM13 9h2v6h-2zM17 6h2v12h-2zM21 8h2v8h-2zM25 10h2v4h-2zM29 8h2v8h-2zM33 10h2v4h-2zM37 11h2v2h-2zM41 11h2v2h-2zM45 7h2v10h-2zM49 10h2v4h-2zM53 10h2v4h-2zM57 8h2v8h-2zM61 6h2v12h-2zM65 9h2v6h-2zM69 8h2v8h-2zM73 5h2v14h-2zM77 4h2v16h-2zM81 7h2v10h-2zM85 8h2v8h-2zM89 11h2v2h-2zM93 11h2v2h-2zM97 11h2v2h-2zM101 2h2v20h-2zM105 10h2v4h-2zM109 6h2v12h-2zM113 9h2v6h-2zM117 9h2v6h-2zM121 9h2v6h-2zM125 8h2v8h-2zM129 4h2v16h-2zM133 9h2v6h-2zM137 7h2v10h-2zM141 7h2v10h-2zM145 8h2v8h-2zM149 11h2v2h-2zM153 11h2v2h-2zM157 6h2v12h-2zM161 10h2v4h-2zM165 10h2v4h-2zM169 9h2v6h-2zM173 6h2v12h-2zM177 7h2v10h-2zM181 8h2v8h-2zM185 5h2v14h-2zM189 7h2v10h-2zM193 9h2v6h-2zM197 6h2v12h-2zM201 6h2v12h-2zM205 11h2v2h-2zM209 11h2v2h-2zM213 8h2v8h-2zM217 6h2v12h-2zM221 7h2v10h-2zM225 6h2v12h-2zM229 6h2v12h-2zM233 8h2v8h-2zM237 2h2v20h-2zM241 9h2v6h-2zM245 7h2v10h-2zM249 6h2v12h-2zM253 9h2v6h-2z"/></svg><svg class="deck-video-played" viewBox="0 0 256 24" preserveAspectRatio="none" aria-hidden="true" focusable="false"><use href="#deck-wave"/></svg></span>
+                      <span class="deck-video-scrub"><i></i></span>
+                    </div>
+                    <div class="deck-video-cut">
+                      <span class="deck-video-ratio">9:16</span>
+                      <span class="deck-video-title">What to expect at your first visit</span>
+                      <span class="deck-video-cap">Your first visit starts with a conversation.</span>
+                    </div>
+                    <div class="deck-video-article">
+                      <span class="deck-video-kind"><svg class="icon" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><path d="M5.5 2.5h6l3.5 3.5v11.5h-9.5Z"/><path d="M11.5 2.5V6H15M8 10h4.5M8 13h4.5"/></svg>Article</span>
+                      <b>What to expect at your first visit</b>
+                      <span class="deck-video-lede">Who you'll meet and what happens.</span>
+                    </div>
                   </div>
-                  <ol class="deck-clips"><li class="is-current">Welcome</li><li>Consultation</li><li>Next steps</li></ol>
                   <p class="deck-by">Prepared for discussion</p>
                 </div>
               </div>
               <button class="deck-rail" type="button" data-deck-go="2"><span class="sr-only">Show </span><span class="deck-rail-name">Video and content</span></button>
             </article>
             <article class="deck-card" data-slot="back" aria-labelledby="deck-website">
-              <div class="deck-body">
+              <div class="deck-body deck-body--wide">
                 <div class="deck-copy">
                   <div class="deck-head"><h4 class="deck-title" id="deck-website" tabindex="-1">Website without the ads</h4><span class="chip">Priced for your practice</span></div>
                   <p>A website built from your practice, with SEO, for practices running their own ads.</p>
                   <a class="btn btn--secondary btn--small" href="/services/add-ons#website">See website projects <svg class="arrow" viewBox="0 0 22 12" aria-hidden="true" focusable="false"><path d="M1 6h19M15 1l5 5-5 5"/></svg></a>
                 </div>
-                <div class="deck-sheet deck-site" role="img" aria-label="Sample: a home page for [Your practice], with links to treatments, your visit and contact. A place to start with your orthodontic questions. Learn about treatment options and what to expect at your first visit. Request a consultation. Signed by Web and SEO.">
-                  <div class="deck-sheet-head"><span class="deck-sheet-title">Home page</span><span class="chip chip--sample">Sample</span></div>
-                  <div class="deck-site-page">
-                    <p class="deck-site-top"><b>[Your practice]</b><span>Treatments · Your visit · Contact</span></p>
-                    <p class="deck-site-h">A place to start with your orthodontic questions.</p>
-                    <p class="deck-site-p">Learn about treatment options and what to expect at your first visit.</p>
-                    <span class="deck-site-btn">Request a consultation</span>
+                <div class="deck-sheet deck-sheet--wide deck-site" role="img" aria-label="Sample: the home page of a website for [Your practice], scrolled from top to bottom. A menu: treatments, your visit, about and contact. A place to start with your orthodontic questions. Learn about treatment options and what to expect at your first visit. Request a consultation, or call. Treatments: braces, clear aligners and early treatment. Evening appointments, payment plans, and treatment for adults and teens. A form to request a consultation: name, phone and what you would like to ask about. Then the footer. Signed by Web and SEO.">
+                  <div class="deck-sheet-head"><span class="deck-sheet-title">Practice home page</span><span class="chip chip--sample">Sample</span></div>
+                  <div class="deck-site-browser">
+                    <span class="deck-site-bar"><span class="deck-site-dots"><i></i><i></i><i></i></span><span class="deck-site-url"><svg class="icon" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><rect x="5" y="9" width="10" height="7.5" rx="2"/><path d="M7.5 9V7a2.5 2.5 0 0 1 5 0v2"/></svg>[yourpractice].com</span></span>
+                    <span class="deck-site-view">
+                      <span class="deck-site-page">
+                        <span class="deck-site-nav"><b class="deck-site-word">[Your practice]</b><span class="deck-site-links"><span class="is-on">Treatments</span><span>Your visit</span><span>About</span><span>Contact</span></span><svg class="icon deck-site-menu" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><path d="M3.5 6h13M3.5 10h13M3.5 14h13"/></svg></span>
+                        <span class="deck-site-hero">
+                          <span class="deck-site-lead">
+                            <span class="deck-site-h">A place to start with your orthodontic questions.</span>
+                            <span class="deck-site-p">Learn about treatment options and what to expect at your first visit.</span>
+                            <span class="deck-site-ctas"><span class="deck-site-btn">Request a consultation</span><span class="deck-site-btn deck-site-btn--line"><svg class="icon" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><path d="M6.6 3.2 8.4 7 7 8.4a9.6 9.6 0 0 0 4.6 4.6L13 11.6l3.8 1.8v2.4a1.6 1.6 0 0 1-1.7 1.6A13.4 13.4 0 0 1 2.6 4.9 1.6 1.6 0 0 1 4.2 3.2Z"/></svg>Call</span></span>
+                          </span>
+                          <span class="deck-site-art"><i></i><i></i><i></i></span>
+                        </span>
+                        <span class="deck-site-treat">
+                          <span class="deck-site-h2">Treatments</span>
+                          <span class="deck-site-cards"><span><b>Braces</b>Metal or ceramic<svg class="arrow" viewBox="0 0 22 12" aria-hidden="true" focusable="false"><path d="M1 6h19M15 1l5 5-5 5"/></svg></span><span><b>Clear aligners</b>Removable trays<svg class="arrow" viewBox="0 0 22 12" aria-hidden="true" focusable="false"><path d="M1 6h19M15 1l5 5-5 5"/></svg></span><span><b>Early treatment</b>For younger children<svg class="arrow" viewBox="0 0 22 12" aria-hidden="true" focusable="false"><path d="M1 6h19M15 1l5 5-5 5"/></svg></span></span>
+                        </span>
+                        <span class="deck-site-trust"><span><svg class="icon" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><path d="m4.5 10.5 3.5 3.5 7.5-8"/></svg>Evening appointments</span><span><svg class="icon" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><path d="m4.5 10.5 3.5 3.5 7.5-8"/></svg>Payment plans</span><span><svg class="icon" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><path d="m4.5 10.5 3.5 3.5 7.5-8"/></svg>Adults and teens</span></span>
+                        <span class="deck-site-form">
+                          <span class="deck-site-ask"><span class="deck-site-h2">Request a consultation</span><span class="deck-site-p">Tell us what you would like to ask about.</span></span>
+                          <span class="deck-site-fields"><span>Name</span><span>Phone</span><span class="deck-site-select">I'm asking about<svg class="icon" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><path d="m6 8 4 4 4-4"/></svg></span><span class="deck-site-btn">Send request</span></span>
+                        </span>
+                        <span class="deck-site-foot"><b class="deck-site-word">[Your practice]</b><span>Treatments</span><span>Your visit</span><span>About</span><span>Contact</span><span>Privacy</span></span>
+                      </span>
+                      <span class="deck-site-track"><i></i></span>
+                    </span>
                   </div>
                   <p class="deck-sign"><span class="deck-sign-who">Signed by <em class="signature">Web and SEO</em></span><img class="stamp" src="/assets/img/stamp-signed.svg" alt="" width="48" height="48"></p>
                 </div>
```

</details>

### 15. What happens after you say yes: more room in the four scenes

**What and why.** Chris: "Every section under 'what happens after you say yes' is great, however the graphics with the floating cards come off as slightly claustrophobic, I'd just adjust some of the spacing and margins on each." Every surface, every line of copy and every beat is unchanged; only spacing changed (CSS in "the practice folder", plus the components entry's text).

**Desktop (1280px and up)**
- **Canvas:** 768×500, up from 768×420, and every card sits 16px in from its edges.
- **Caption row:** 20px between the caption/Sample row and the scene, up from 12px.
- **Overlaps:** cards still layer, but now overlap by 12 to 32px and never cover another card's text:
  - the search ad no longer covers the Budget column;
  - the email sits clear of the report's heading;
  - the ads scene's three stacked cards are 24px and 46px apart, where they were 13px and 1px.
- **Website scene:** the browser page's text is narrower, so the phone in front no longer covers its headline.

**1025 to 1279px, tablets and phones**
- The smaller front card (call notes, ad accounts, email) is set in from the right edge by 16px, or 24px once the scene is at least 480px wide. It overlaps the main card by 10px.
- The phone is slightly narrower, and the profile card sits 24px lower so it only covers the phone's frame.
- Phones only: the folder's inner padding is 16px, and there are 16px between the stage title and the scene.

**Height**

| Width | Before | After |
|---|---|---|
| 1440 | 993px | 1,081px |
| 390 | 1,045px | 1,087px |
| 360 | n/a | 1,147px |

**Check:** step through all four stages at 1440, 1100 and 390. No card crowds another's text, and the section height stays the same as stages change.

**Files and lines** (after this change):

- `site/assets/site.css`: lines 2254–2262, 2300–2309, 2352–2358, 2363–2370, 2391–2397, 2406–2412, 2450–2456, 2488–2494, 2507–2546, 2548–2559, 2562–2573, 2589–2595, 2597–2603
- `site/components.html`: lines 882–888

<details>
<summary>Exact diff for change 15</summary>

```diff
diff --git a/site/assets/site.css b/site/assets/site.css
index f3016e4..1264880 100644
--- a/site/assets/site.css
+++ b/site/assets/site.css
@@ -2254,8 +2254,9 @@ h1 em, h2 em, h3 em, .tagline em, .signed-change em { color: var(--accent-italic
    sheet keeps the tallest stage's height, so changing stage never moves the page. Below 1025px each panel opens with
    its stage's title and line (.folder-panel-head, moved there from the summary; read-only on desktop).
    Each scene is a container (folder-scene). From 768px wide (desktops from 1280px) its surfaces are composed on a
-   768 by 420 canvas, overlapping; narrower (smaller desktops, tablets, phones) each scene keeps one main surface and
-   one smaller one over its edge, in the flow, and the rest stay out (the invitation, the browser, the two ads, the consult).
+   768 by 500 canvas, inset 16px from its edges, overlapping by 12 to 32px at most and never over another's text;
+   narrower (smaller desktops, tablets, phones) each scene keeps one main surface and one smaller one, set in from the
+   right and over its edge by 10px, in the flow, and the rest stay out (the invitation, the browser, the two ads, the consult).
    Motion (site.js): while the folder is on screen it moves from stage to stage on its own, 1 to 4 and round again;
    each scene places its surfaces and plays its one beat (the call runs through Sales' three topics, each ticked as
    its caption ends; the page scrolls, the phone settles, the profile's hours are updated; the two campaigns are
@@ -2299,10 +2300,10 @@ h1 em, h2 em, h3 em, .tagline em, .signed-change em { color: var(--accent-italic
 .folder-panel-head { display: grid; gap: var(--space-1); }
 .is-folder .folder-panel-head { position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); white-space: nowrap; }
 
-/* the scene: its caption and Sample chip (forest on field 7.4:1), then the canvas of surfaces. Text on the surfaces:
-   ink on cream 13.78:1, label sage on cream 5.88:1, forest on sage mist 7.55:1, cream on forest 8.7:1. Under 768px the
-   scene is kept to 520px, centred. */
-.folder-scene { container: folder-scene / inline-size; display: grid; align-content: start; gap: var(--space-3); min-width: 0; margin: 0; }
+/* the scene: its caption and Sample chip (forest on field 7.4:1), then the canvas of surfaces, a 20px gap between.
+   Text on the surfaces: ink on cream 13.78:1, label sage on cream 5.88:1, forest on sage mist 7.55:1, cream on forest
+   8.7:1. Under 768px the scene is kept to 520px, centred. */
+.folder-scene { container: folder-scene / inline-size; display: grid; align-content: start; gap: var(--space-5); min-width: 0; margin: 0; }
 .folder-scene-top { display: flex; align-items: center; justify-content: space-between; gap: var(--space-3); }
 .folder-scene-top, .folder-canvas { width: 100%; max-width: 520px; margin-inline: auto; }
 .folder-scene-caption { font-size: var(--text-caption); font-weight: 500; line-height: 1.4; color: var(--forest); }
@@ -2351,7 +2352,7 @@ h1 em, h2 em, h3 em, .tagline em, .signed-change em { color: var(--accent-italic
 .folder-control { display: grid; place-items: center; width: 34px; height: 34px; border: var(--border-w) solid var(--border-quiet); border-radius: 50%; color: var(--forest); }
 .folder-control.is-on { border-color: var(--forest); background: var(--surface-strong); color: var(--text-on-strong); }
 .folder-control-leave { margin-left: var(--space-2); padding: 6px var(--space-3); border: var(--border-w) solid var(--border-input); border-radius: var(--radius-pill); font-size: var(--text-caption); font-weight: 600; line-height: 1.4; }
-.folder-notes { justify-self: end; display: grid; gap: var(--space-2); width: min(300px, 88%); margin-top: -12px; padding: var(--space-3) var(--space-4) var(--space-4); }
+.folder-notes { justify-self: end; display: grid; gap: var(--space-2); width: min(300px, 86%); margin: -10px var(--space-4) 0 0; padding: var(--space-3) var(--space-4) var(--space-4); }
 .folder-notes-head { display: flex; align-items: center; gap: var(--space-2); padding-bottom: var(--space-2); border-bottom: var(--border-w) solid var(--border-quiet); font-weight: 600; line-height: 1.4; }
 .folder-notes-head .icon { color: var(--forest); }
 .folder-notes-meta { margin-left: auto; font-size: var(--text-caption); font-weight: 500; color: var(--text-muted); }
@@ -2362,8 +2363,8 @@ h1 em, h2 em, h3 em, .tagline em, .signed-change em { color: var(--accent-italic
 .folder-topic-line { display: none; font-size: var(--text-label); line-height: 1.45; color: var(--text-muted); }
 
 /* 2. the site: the adult braces page in a browser (wide only), the same page on a phone, the Google Business Profile.
-   Under 768px the phone and the profile share one cell, the profile over the phone's edge (a narrower canvas, so they
-   meet on wider screens too) */
+   Under 768px the phone and the profile share one cell, the profile a step lower and over the phone's frame only (a
+   narrower canvas, so they meet on wider screens too) */
 .folder-scene--site .folder-canvas { max-width: 430px; }
 .folder-browser { display: none; overflow: hidden; }
 .folder-browser-bar { display: flex; align-items: center; gap: var(--space-3); padding: var(--space-3) var(--space-4); border-bottom: var(--border-w) solid var(--border-quiet); background: var(--surface-panel); }
@@ -2390,7 +2391,7 @@ h1 em, h2 em, h3 em, .tagline em, .signed-change em { color: var(--accent-italic
 .folder-site-steps span { display: grid; flex: none; place-items: center; width: 20px; height: 20px; border-radius: 50%; background: var(--surface-panel); color: var(--forest); font-family: var(--font-display); font-size: 14px; line-height: 1; }
 .folder-site-faq li { padding-block: var(--space-2); border-bottom: var(--border-w) solid var(--border-quiet); font-size: var(--text-label); font-weight: 600; line-height: 1.4; }
 /* the phone: an ink frame round a cream screen; the page runs on under its sticky booking bar */
-.folder-phone { position: relative; z-index: 1; grid-area: 1 / 1; justify-self: start; align-self: start; width: 50%; max-width: 212px; aspect-ratio: 1 / 2; padding: 6px; border-radius: var(--radius-panel); background: var(--ink); box-shadow: var(--shadow-3); }
+.folder-phone { position: relative; z-index: 1; grid-area: 1 / 1; justify-self: start; align-self: start; width: 48%; max-width: 212px; aspect-ratio: 1 / 2; padding: 6px; border-radius: var(--radius-panel); background: var(--ink); box-shadow: var(--shadow-3); }
 .folder-phone-screen { position: relative; display: grid; align-content: start; height: 100%; overflow: hidden; padding-top: var(--space-5); border-radius: var(--radius-card); background: var(--surface-page); }
 .folder-phone-notch { position: absolute; top: 7px; left: 50%; width: 40px; height: 10px; margin-left: -20px; border-radius: var(--radius-pill); background: var(--ink); }
 .folder-phone .folder-site-nav { justify-content: space-between; gap: var(--space-2); padding: var(--space-2) var(--space-3); }
@@ -2405,7 +2406,7 @@ h1 em, h2 em, h3 em, .tagline em, .signed-change em { color: var(--accent-italic
 .folder-phone-bar .folder-site-button { flex: 1; padding: var(--space-2); font-size: var(--text-caption); }
 .folder-phone-call { display: none; flex: none; place-items: center; width: 32px; border: var(--border-w) solid var(--border-input); border-radius: 50%; color: var(--forest); }
 .folder-canvas .folder-phone-call .icon { width: 14px; height: 14px; }
-.folder-profile { z-index: 2; grid-area: 1 / 1; justify-self: end; align-self: end; display: grid; width: 56%; max-width: 248px; }
+.folder-profile { z-index: 2; grid-area: 1 / 1; justify-self: end; align-self: end; display: grid; width: 56%; max-width: 248px; margin-top: var(--space-6); }
 .folder-map { display: block; width: 100%; height: 56px; border-radius: var(--radius-card) var(--radius-card) 0 0; }
 .folder-map rect { fill: var(--surface-panel); }
 .folder-map-road { fill: none; stroke: var(--surface-page); stroke-width: 7; stroke-linecap: round; }
@@ -2449,7 +2450,7 @@ h1 em, h2 em, h3 em, .tagline em, .signed-change em { color: var(--accent-italic
 .folder-track li > .icon { color: var(--forest); }
 .folder-track-state { display: inline-flex; align-items: center; gap: 2px; margin-left: auto; font-weight: 600; color: var(--forest); }
 .folder-ads > .signoff { margin: var(--space-3) var(--space-4) var(--space-4); }
-.folder-owner { grid-row: 1; justify-self: end; display: flex; align-items: center; gap: var(--space-3); max-width: 92%; margin-bottom: -18px; padding: var(--space-3) var(--space-4) var(--space-3) var(--space-3); }
+.folder-owner { grid-row: 1; justify-self: end; display: flex; align-items: center; gap: var(--space-3); max-width: calc(100% - var(--space-8)); margin: 0 var(--space-4) -10px 0; padding: var(--space-3) var(--space-4) var(--space-3) var(--space-3); }
 .folder-owner-key { display: grid; flex: none; place-items: center; width: 32px; height: 32px; border-radius: 50%; background: var(--surface-strong); color: var(--text-on-strong); }
 .folder-owner-text { display: grid; font-size: var(--text-label); font-weight: 600; line-height: 1.4; }
 .folder-owner-text span { font-size: var(--text-caption); font-weight: 500; color: var(--text-muted); }
@@ -2487,7 +2488,7 @@ h1 em, h2 em, h3 em, .tagline em, .signed-change em { color: var(--accent-italic
 .folder-report-stats span { font-family: var(--font-display); font-size: 24px; line-height: 1.1; color: var(--forest); }
 .folder-report-next { display: flex; align-items: flex-start; gap: var(--space-2); }
 .folder-canvas .folder-report-next .icon { flex: none; width: 18px; height: 18px; margin-top: 1px; color: var(--forest); }
-.folder-mail { z-index: 3; grid-row: 1; justify-self: end; display: grid; gap: var(--space-2); width: min(300px, 90%); margin-bottom: -16px; padding: var(--space-3) var(--space-4); }
+.folder-mail { z-index: 3; grid-row: 1; justify-self: end; display: grid; gap: var(--space-2); width: min(300px, 86%); margin: 0 var(--space-4) -10px 0; padding: var(--space-3) var(--space-4); }
 .folder-mail-head { display: none; align-items: center; gap: var(--space-2); font-size: var(--text-caption); font-weight: 600; line-height: 1.4; color: var(--text-muted); }
 .folder-canvas .folder-mail-head .icon { width: 14px; height: 14px; color: var(--forest); }
 .folder-mail-head span { margin-left: auto; font-weight: 500; }
@@ -2506,32 +2507,40 @@ h1 em, h2 em, h3 em, .tagline em, .signed-change em { color: var(--accent-italic
 .folder-consult-source dt { color: var(--text-muted); }
 .folder-consult-source dd { font-weight: 600; }
 
-/* the composed scenes, from 768px wide: every surface placed on a 768 by 420 canvas (centred if there is more room) */
+/* wider flowing scenes (compact desktops, tablets): the front surface sits further in from the right */
+@container folder-scene (min-width: 480px) {
+  .folder-notes, .folder-owner, .folder-mail { margin-right: var(--space-6); }
+}
+/* the composed scenes, from 768px wide: every surface placed on a 768 by 500 canvas (centred if there is more room),
+   16px in from its edges */
 @container folder-scene (min-width: 768px) {
   .folder-scene-top { max-width: none; }
-  .folder-canvas, .folder-scene--site .folder-canvas { display: block; max-width: 768px; height: 420px; }
+  .folder-canvas, .folder-scene--site .folder-canvas { display: block; max-width: 768px; height: 500px; }
   .folder-canvas > * { position: absolute; margin: 0; }
   /* 1: the invitation at the back, top right; the call over its edge; the notes in front, bottom right */
-  .folder-invite { display: grid; top: 0; right: 0; width: 276px; padding-left: var(--space-8); }
-  .folder-call { top: 32px; left: 0; z-index: 1; width: 512px; box-shadow: var(--shadow-3); }
+  .folder-invite { display: grid; top: 16px; right: 16px; width: 284px; padding-left: var(--space-8); }
+  .folder-call { top: 56px; left: 16px; z-index: 1; width: 468px; box-shadow: var(--shadow-3); }
   .folder-tile { height: 168px; }
   .folder-tile-face { width: 68px; height: 68px; margin-bottom: 0; }
   .folder-canvas .folder-tile-face--practice .icon { width: 28px; height: 28px; }
   .folder-caption { margin-right: 60px; }
   .folder-call-controls { display: flex; padding-right: 60px; }
-  .folder-notes { right: 0; bottom: 0; width: 300px; gap: var(--space-3); padding: var(--space-4) var(--space-5); }
+  .folder-notes { right: 16px; bottom: 16px; width: 300px; gap: var(--space-3); padding: var(--space-4) var(--space-5); }
   .folder-notes-head { padding-bottom: var(--space-3); }
   .folder-topics { gap: var(--space-3); }
   .folder-topic-line { display: block; }
   /* 2: the browser at the back; the profile over its right edge; the phone in front, over the browser's corner */
-  .folder-browser { display: block; top: 0; left: 0; width: 524px; }
-  .folder-phone { z-index: 3; top: 100px; left: 334px; width: 172px; max-width: none; height: 320px; aspect-ratio: auto; }
+  .folder-browser { display: block; top: 16px; left: 16px; width: 500px; }
+  /* the browser page's copy kept to its left, clear of the phone in front */
+  .folder-browser .folder-site-hero { max-width: 296px; }
+  .folder-browser .folder-site-part { max-width: 260px; }
+  .folder-phone { z-index: 3; top: 148px; left: 318px; width: 172px; max-width: none; height: 320px; aspect-ratio: auto; }
   .folder-phone .folder-site-title { font-size: 21px; }
   .folder-phone .folder-site-line, .folder-phone .folder-site-steps li { font-size: var(--text-caption); }
-  .folder-profile { top: 24px; right: 0; width: 256px; max-width: none; }
+  .folder-profile { top: 40px; right: 16px; width: 248px; max-width: none; }
   .folder-map { height: 72px; }
   /* 3: the account at the back; the accounts in your name over its corner; the search ad and the feed ad beside it */
-  .folder-ads { top: 22px; left: 0; width: 532px; }
+  .folder-ads { top: 56px; left: 16px; width: 512px; }
   .folder-ads-head { padding-inline: var(--space-5); }
   .folder-ads-cols { display: grid; }
   .folder-ads-cols, .folder-ads-rows li { grid-template-columns: 36px minmax(0, 1fr) 96px 92px; padding-inline: var(--space-5) var(--space-6); }
@@ -2539,12 +2548,12 @@ h1 em, h2 em, h3 em, .tagline em, .signed-change em { color: var(--accent-italic
   .folder-ads-budget { display: block; }
   .folder-track { margin-inline: var(--space-5); }
   .folder-ads > .signoff { margin: var(--space-4) var(--space-5); }
-  .folder-owner { top: 0; right: 0; width: 256px; max-width: none; }
+  .folder-owner { top: 16px; right: 16px; width: 248px; max-width: none; }
   .folder-preview { display: grid; }
-  .folder-preview--search { top: 92px; right: 28px; width: 228px; }
-  .folder-preview--feed { right: 0; bottom: 4px; width: 204px; }
+  .folder-preview--search { top: 119px; right: 24px; width: 224px; }
+  .folder-preview--feed { right: 16px; bottom: 16px; width: 204px; }
   /* 4: the report at the back; the email over its top right; the consult it counts over its lower right */
-  .folder-report { top: 12px; left: 0; width: 512px; gap: var(--space-3); padding: var(--space-5) var(--space-6); }
+  .folder-report { top: 40px; left: 16px; width: 480px; gap: var(--space-3); padding: var(--space-5) var(--space-6); }
   .folder-report-head { padding-bottom: var(--space-3); }
   .folder-report-title { font-size: 30px; }
   .folder-report-part { gap: var(--space-2); }
@@ -2553,12 +2562,12 @@ h1 em, h2 em, h3 em, .tagline em, .signed-change em { color: var(--accent-italic
   .folder-report-work .signoff-disc.founder-art { display: block; }
   .folder-report-stats li { padding: var(--space-2) var(--space-3); font-size: var(--text-label); }
   .folder-report-stats span { font-size: 28px; }
-  .folder-mail { top: 0; right: 0; width: 296px; gap: var(--space-3); padding: var(--space-3) var(--space-4) var(--space-4); }
+  .folder-mail { top: 16px; right: 16px; width: 280px; gap: var(--space-3); padding: var(--space-3) var(--space-4) var(--space-4); }
   .folder-mail-head { display: flex; }
   .folder-mail-body { grid-template-columns: 32px minmax(0, 1fr); align-items: start; }
   .folder-mail-body img { width: 32px; height: 32px; }
   .folder-mail-preview { display: block; }
-  .folder-consult { display: grid; right: 0; bottom: 20px; width: 272px; }
+  .folder-consult { display: grid; right: 16px; bottom: 24px; width: 264px; }
   .folder-phone-call { display: grid; }
 }
 /* the narrowest phones: the profile keeps two of its three actions */
@@ -2580,7 +2589,7 @@ h1 em, h2 em, h3 em, .tagline em, .signed-change em { color: var(--accent-italic
   .is-folder .folder-panel-head { position: static; width: auto; height: auto; overflow: visible; clip-path: none; white-space: normal; padding-inline: var(--space-1); }
 }
 @media (max-width: 640px) {
-  .folder { padding: var(--space-3); border-radius: var(--radius-card); }
+  .folder { padding: var(--space-4); border-radius: var(--radius-card); }
   .folder.is-folder { gap: var(--space-3); }
   .folder-rail { grid-template-columns: repeat(2, minmax(0, 1fr)); }
   .folder-panel { padding-left: 0; }
@@ -2588,7 +2597,7 @@ h1 em, h2 em, h3 em, .tagline em, .signed-change em { color: var(--accent-italic
   .folder-tab { padding-inline: var(--space-2); }
   .folder + .cta-line { margin-top: var(--space-8); }
   /* the scene's Sample chip moves up beside the stage's title; its caption goes (the title says what it is) */
-  .folder-sheet > .folder-panel { position: relative; gap: var(--space-2); }
+  .folder-sheet > .folder-panel { position: relative; gap: var(--space-4); }
   .is-folder .folder-scene-top { position: absolute; top: 0; right: var(--space-1); width: auto; }
   .is-folder .folder-scene-caption { display: none; }
   .is-folder .folder-panel-head .folder-title { padding-right: 76px; }
diff --git a/site/components.html b/site/components.html
index 472bd60..7adca06 100644
--- a/site/components.html
+++ b/site/components.html
@@ -882,7 +882,7 @@
         </div>
 
         <div class="ref-item ref-item--wide">
-          <p class="ref-name" id="demo-after-yes">.folder, the practice folder (the homepage's "What happens after you say yes"): a field panel holding four stages, each one of the onboarding steps on /services#after-yes (its title and line, as written there) with a composed scene of the work it hands over (figure.folder-scene[role=img]: a caption and the Sample chip over .folder-canvas, two to four cream .folder-surface layered with depth, the back one on --shadow-2, the ones in front on --shadow-3). 1, the first call: the video call (First conversation, its clock, Sales on forest with the founder disc and a speaking ring, [Your practice], the live caption, the controls), the invitation behind it ([Date] · [Time] · Video call, Accepted) and Sales' call notes in front, three topics ticked, "Prepared by Sales". 2, the site: the adult braces page in a browser (its nav, "Adult braces in [your city]", Request a consultation, what to expect at your first visit), the same page on a phone (an ink frame, a sticky booking bar) and the Google Business Profile (a map, Open, Directions, Call, Website, "Hours updated"), "Signed by Web and SEO", the stamp on the profile's top corner. 3, the ads account: two campaigns (switch, name, Draft / In review / Live with a forest dot, [Budget]/day), call and conversion tracking set up, "Signed by Paid media" and the stamp; over its corner "Ad accounts in your practice's name" (a key icon); beside it the search ad and the feed ad. 4, the report: the email it arrives in ("Your [Month] report is ready", from Rose), the [Month] report for [Your practice] (what we did: two signed changes, each stamped; what it brought in: [n] new leads, [n] reached, [n] consults booked; what we're changing next) and one consult it counts ([Name], Google Search ad). From 768px wide (a container query on the scene; desktops from 1280px) the surfaces are composed on a 768 by 420 canvas; narrower, each scene keeps one main surface and one over its edge, and the invitation, the browser, the two ads and the consult stay out. In the markup each stage is details[name] (the first open), so without JavaScript each opens in place. site.js ("the practice folder") rebuilds it as a tablist of stages beside one .folder-sheet holding every panel in one grid cell, so the sheet keeps the tallest stage's height and changing stage moves nothing; under 1025px four steps in a row (two by two under 641px, the Sample chip beside the stage's title). While on screen it moves from stage 1 to 4 and round again: each scene places its surfaces and plays one beat (the call's three questions captioned and ticked; the page scrolled and the phone settled, the hours updated; the campaigns switched on, draft to live, tracking set up; the email landing, the report opening, each change stamped), then signed and stamped, rests 4s, and a forest line along the active stage fills until the next. A click, tap or key on a stage stops that for the visit. Paused: the current stage, finished. Reduced motion: stage 1, finished, changes at once. Brackets only; no real dates, names or results.</p>
+          <p class="ref-name" id="demo-after-yes">.folder, the practice folder (the homepage's "What happens after you say yes"): a field panel holding four stages, each one of the onboarding steps on /services#after-yes (its title and line, as written there) with a composed scene of the work it hands over (figure.folder-scene[role=img]: a caption and the Sample chip over .folder-canvas, two to four cream .folder-surface layered with depth, the back one on --shadow-2, the ones in front on --shadow-3). 1, the first call: the video call (First conversation, its clock, Sales on forest with the founder disc and a speaking ring, [Your practice], the live caption, the controls), the invitation behind it ([Date] · [Time] · Video call, Accepted) and Sales' call notes in front, three topics ticked, "Prepared by Sales". 2, the site: the adult braces page in a browser (its nav, "Adult braces in [your city]", Request a consultation, what to expect at your first visit), the same page on a phone (an ink frame, a sticky booking bar) and the Google Business Profile (a map, Open, Directions, Call, Website, "Hours updated"), "Signed by Web and SEO", the stamp on the profile's top corner. 3, the ads account: two campaigns (switch, name, Draft / In review / Live with a forest dot, [Budget]/day), call and conversion tracking set up, "Signed by Paid media" and the stamp; over its corner "Ad accounts in your practice's name" (a key icon); beside it the search ad and the feed ad. 4, the report: the email it arrives in ("Your [Month] report is ready", from Rose), the [Month] report for [Your practice] (what we did: two signed changes, each stamped; what it brought in: [n] new leads, [n] reached, [n] consults booked; what we're changing next) and one consult it counts ([Name], Google Search ad). Spacing: 20px between the caption row and the canvas. From 768px wide (a container query on the scene; desktops from 1280px) the surfaces are composed on a 768 by 500 canvas, 16px in from its edges, overlapping by 12 to 32px and never over another surface's text; narrower, each scene keeps one main surface and one set 16px in from the right (24px from a 480px scene) and 10px over its edge, and the invitation, the browser, the two ads and the consult stay out. In the markup each stage is details[name] (the first open), so without JavaScript each opens in place. site.js ("the practice folder") rebuilds it as a tablist of stages beside one .folder-sheet holding every panel in one grid cell, so the sheet keeps the tallest stage's height and changing stage moves nothing; under 1025px four steps in a row (two by two under 641px, the Sample chip beside the stage's title). While on screen it moves from stage 1 to 4 and round again: each scene places its surfaces and plays one beat (the call's three questions captioned and ticked; the page scrolled and the phone settled, the hours updated; the campaigns switched on, draft to live, tracking set up; the email landing, the report opening, each change stamped), then signed and stamped, rests 4s, and a forest line along the active stage fills until the next. A click, tap or key on a stage stops that for the visit. Paused: the current stage, finished. Reduced motion: stage 1, finished, changes at once. Brackets only; no real dates, names or results.</p>
           <div class="folder" data-folder data-anim="none">
             <details class="folder-stage" name="demo-folder-stage" data-short="Conversation" open>
               <summary class="folder-summary"><span class="folder-num" aria-hidden="true">01</span><span class="folder-head"><h3 class="folder-title">A first conversation.</h3><span class="folder-line">About your practice, your patients and what you've already tried.</span></span></summary>
```

</details>

## Not changed

- **The team band** ("A small team that knows its clients…" and the ring of five founders).
- **The hero letter's delivery animation, the proof strip's wording and the closing panel.**
- **Every other page's content.** Only the footer changes there.

## Small things to know

- **The Google and Meta row at 390px is 855px tall,** a little over the 820px it was aimed at.
- **At 360px the 80px panel stamp just touches the corner of the SEO note.** There's no text under it.
- **The chat widget's bubble sits over the right edge of some samples on phones.** That's the LeadConnector widget, which was already on the page.
- **The deck on phones:** the card behind peeks out under the front one, and when it's the tallest card the top of its content shows, blurred, in that strip. Clipping the rear cards would change how the deck behaves, so it's left as it is.
- **The website card's sign-off appears about 5 seconds into its beat,** after the page has scrolled.
- **The practice folder on narrower desktops:** from 1025 to 1279px it shows the compact two-surface scenes beside the rail. The full scenes need a 768px canvas.
- **The folder's height on phones:** 1,087px at 390 and 1,147px at 360.
- **The practice folder repeats the stamp-press helper** (`press()`) from "signed samples". It has the same values, because the original lives inside that block's scope. If you'd like one copy, move `press` and `hold` above both sections.
- **The footer's text Pause animations button doesn't set `aria-pressed`;** only the header's icon button does. That was already the case and is unchanged.
- **The footer's home link is now the logo tile** rather than the white wordmark lockup, because the giant wordmark carries the name. If you want the lockup back, swap the image inside `a.foot-home`.

## How it was checked

- **All 17 pages load locally** with no failed requests and no script errors, with motion on and with reduced motion.
- **Behaviour at 1440 and 390:**
  - the SEO query types with the caret moving along with it, and the callout's arm takes 1.35s to reach the result;
  - the ads Source tag alternates between Meta and Google;
  - the deck's names, rails, Previous and Next, keys and swipe all work;
  - the folder advances on its own and holds when paused or clicked;
  - every footer link resolves;
  - no console errors.
- **Without JavaScript** every section is complete and readable.
- **No sideways overflow** at 360, 390, 430, 768 or 1100px.
- **Your design checker** (`rose-design-check.mjs`) gives the same 3 blocks and 2 warnings as the live site.
