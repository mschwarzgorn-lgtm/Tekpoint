# 🛡️ Rules & Lessons Learned — Tekpoint Website Project
## Self-Improving Quality Control Document
*Updated after every issue resolved. Read before every fix.*

---

## 🔴🔴🔴 IRON RULE #0: UPDATE PROFILE AFTER EVERY FIX
> **After EVERY fix, bugfix, deployment, or resolved issue — no matter how small:**
> 1. **Update agent_profile database** with what went wrong, what fixed it, and the lesson learned
> 2. **Update THIS rules document** if a new rule or pattern emerged
> 3. **This is NON-NEGOTIABLE** — never skip, never postpone, never "do it later"
> 4. If you forget, you WILL repeat the same mistakes
>
> *This rule exists because we repeatedly forgot to log lessons, then hit the same issues weeks later.*

---

## 🔴 GOLDEN RULES (Never Break These)

### Rule 1: AUDIT FIRST, FIX NEVER FIRST
- **ALWAYS** do a complete inventory of all issues before writing any code
- **NEVER** fix issues one at a time — they cascade and break each other
- Document EVERY issue in writing, then create ONE comprehensive fix

### Rule 2: VERIFY BEFORE CLAIMING SUCCESS
- "It works in curl" ≠ "It works on a real phone"
- **ALWAYS** test on actual mobile viewport (DevTools or real device) before marking done
- Test the EXACT scenario the user reported, not a proxy
- Take screenshots as proof

### Rule 3: UNDERSTAND BEFORE CHANGING
- Read the FULL file before editing it (not just the section you think matters)
- Understand CSS specificity: inline `<style>` vs external CSS vs `!important`
- Map ALL selectors that affect a component before changing any

### Rule 4: ONE COMPREHENSIVE CHANGE, NOT MANY SMALL ONES
- Each deployment should fix ALL known issues, not one at a time
- After fixing, test ALL previously-working features to verify no regression
- "Whack-a-mole" = you're not understanding the root cause

### Rule 5: THE FIX PLAN NEEDS AN AUDIT TOO
- Before implementing, write out the fix plan
- Review the plan for potential side effects
- Ask: "What could this break?"
- Only implement after plan passes review

---

## 📋 CSS & STYLING RULES

### Rule C1: Inline CSS Conflicts
**Problem:** Pages have 940-line inline `<style>` blocks with OLD hamburger menu CSS, nav-links styling, and media queries.
**Lesson:** External CSS (`global-fixes.css`) loads AFTER inline styles (line 994 vs line 956), so it CAN override by cascade. But inline rules with `!important` beat external rules without it.
**Rule:** ALL overrides in global-fixes.css MUST use `!important` to guarantee they win against inline styles.

### Rule C2: Know All Media Breakpoints
**Problem:** Inline CSS has breakpoints at 1100px, 1024px, 768px, and 640px. These were not fully mapped before writing overrides.
**Lesson:** Map EVERY media query in the inline CSS before writing override CSS.
**Breakpoints in inline CSS:**
- `@media (max-width: 1100px)` — nav-cta shrinks
- `@media (max-width: 1024px)` — hero/grid go single-column, stats go 4-col
- `@media (max-width: 768px)` — OLD hamburger shows, nav-links get fixed positioning
- `@media (max-width: 640px)` — stats go 2-col, services go single-col

### Rule C3: Never Use External CSS Without !important Against Inline
**Problem:** CSS rules in global-fixes.css were written without `!important` and got overridden by inline styles.
**Rule:** When overriding inline `<style>` from an external file, EVERY property needs `!important`.

### Rule C4: Class Name Mismatches
**Problem:** CSS used `.mobile-menu-sheet` but HTML had `.mobile-menu-body`. CSS used `.mobile-menu-toggle` but summary had no class.
**Lesson:** ALWAYS grep actual HTML across ALL languages before writing selectors. EN and non-EN pages use DIFFERENT class names.
**EN pages:** `.mobile-menu-sheet`, `.mobile-menu-toggle`
**Non-EN pages:** `.mobile-menu-body`, plain `<summary>☰ Menu</summary>`

### Rule C5: box-sizing: border-box Is Mandatory
**Problem:** Grid containers overflow viewport because padding/gap not included in width calc.
**Rule:** Always add `*, *::before, *::after { box-sizing: border-box; }` and `max-width: 100%` on containers.

### Rule C6: Mobile Overflow Prevention
**Problem:** Horizontal scrolling on mobile viewports.
**Rule:** Use `html, body { overflow-x: hidden; max-width: 100vw; }` AND ensure child elements don't create overflow with `min-width: 0` on grid/flex children.

---

## 🧭 NAVIGATION RULES

### Rule N1: Logo href Must Use Language Prefix
**Problem:** All 29 non-EN pages had `href="/home"` which goes to EN homepage.
**Fix:** Use `href="/{lang}/"` for each language.
**Rule:** NEVER use a hardcoded English path in non-EN pages.

### Rule N2: Relative Links Need <base> Tag
**Problem:** Dropdown links like `href="about"` resolve to `/about` (EN) instead of `/{lang}/about` when on `/{lang}/` homepage.
**Fix:** Added `<base href="/{lang}/">` to all non-EN index.html files.
**Rule:** Either use absolute paths (`/{lang}/about`) OR ensure `<base>` tag is set.

### Rule N3: <summary> Text Content
**Problem:** Non-EN pages have `<summary>☰ Menu</summary>` showing both icon AND word "Menu" which overflows to "Men..." on mobile.
**Fix needed:** Use CSS to show only the ☰ icon (font-size: 0 trick with ::before pseudo-element).
**Rule:** Mobile menu toggle should show ONLY an icon, never text. If HTML has text, use CSS to hide it.

---

## 🚀 DEPLOYMENT RULES

### Rule D1: Deploy ALL Files, Not Just Changed Ones
**Problem:** v11 deployed only 29 changed files → entire site broke (404s for everything else).
**Lesson:** Vercel deployments REPLACE the entire site. ALWAYS include all 520+ files in manifest.
**Rule:** Start from the last complete manifest, merge changes, deploy complete set.

### Rule D2: Verify File Count Before Deploy
**Rule:** Before every deployment, verify: `len(files) >= 510`. If significantly less, STOP — you're about to delete the site.

### Rule D3: vercel.json Must Be Included
**Problem:** vercel.json was missing from deployment, breaking clean URLs.
**Rule:** Always include vercel.json in deployment manifest. Verify with: `any(f['file'] == 'vercel.json' for f in files)`.

### Rule D4: Wait for Deployment Before Testing
**Rule:** Wait 25-30 seconds after deployment before testing. Verify with curl first before opening browser.

---

## 🌍 TRANSLATION RULES

### Rule T1: Never Use Naive Find-Replace on Content
**Problem:** Replacing "in" with "på" for Danish corrupted words like "distribution" → "distributpåon".
**Rule:** NEVER use str.replace() for word translation. Only replace FULL STRINGS from the translation database, matched by string key.

### Rule T2: Verify Language Content Matches Language Code
**Problem:** LV (Latvian) pages had Estonian content. JA had wrong database mapping.
**Rule:** After applying translations, spot-check at least 3 strings per language against known translations.

### Rule T3: One Language at a Time for QA
**Rule:** QA each language individually. Fix and deploy THAT language. Verify. Then move to next. NEVER mass-fix across all languages.

---

## 📱 MOBILE-SPECIFIC RULES

### Rule M1: Test on Real Mobile Viewport Dimensions
**Known viewports:**
- iPhone 14 Pro: 393 × 852 (portrait), 852 × 393 (landscape)
- Galaxy S21: 360 × 800 (portrait), 800 × 360 (landscape)
- Standard mobile: 390 × 844

### Rule M2: Mobile Menu Must Be Pure CSS
**Rule:** Use `<details>/<summary>` for mobile menu. ZERO JavaScript. Browser-native toggle.

### Rule M3: Logo Must Be Visible on Mobile
**Rule:** Mobile header logo MINIMUM 250px width. Must be bigger than footer logo.

### Rule M4: Touch Targets Must Be 44×44px Minimum
**Rule:** All interactive elements on mobile must have minimum 44×44px touch target (Apple HIG guideline).

### Rule M5: No Horizontal Overflow on Any Page
**Rule:** Test every page at 360px width. ZERO horizontal scroll allowed.

---

## 🔍 QA PROCESS RULES

### Rule Q1: Full Audit → Plan → Audit Plan → Implement → Test
1. Audit: Document ALL issues (screenshots + code references)
2. Plan: Write specific fix for each issue
3. Review plan: Check for conflicts, side effects, regressions
4. Implement: Make ALL fixes at once
5. Test: Verify ALL fixes AND all previously-working features
6. If ANY issue remains, go back to step 1

### Rule Q2: Never Claim "Fixed" Without Screenshot Proof
**Rule:** After fixing, take a screenshot of the fixed state on mobile. Compare with original issue screenshot.

### Rule Q3: Test Regression After Every Fix
**Rule:** After fixing mobile, test that desktop STILL works. After fixing nav, test that content STILL renders. Check at least 3 languages.

### Rule Q4: Check Both EN and Non-EN
**Rule:** EN pages have different HTML structure than non-EN. ALWAYS test at least 1 EN page AND 1 non-EN page after any change.

---

## 🐛 BUG PATTERNS TO WATCH FOR

### Bug B1: Grid Overflow on Mobile
**Symptom:** Cards cut off on right side, horizontal scrollbar appears
**Cause:** Grid container doesn't have `max-width: 100%` or children don't have `min-width: 0`
**Fix:** Add `max-width: 100%; overflow: hidden;` to grid parent, `min-width: 0;` to grid children

### Bug B2: Old Hamburger CSS Conflicts
**Symptom:** Old hamburger button appears, or nav-links styling is wrong
**Cause:** Inline `<style>` has `@media (max-width: 768px) { .hamburger { display: block; } }` 
**Fix:** Override with `!important` in global-fixes.css

### Bug B3: ::after Pseudo-Elements Creating Visual Artifacts
**Symptom:** Small dots or lines appearing near nav elements
**Cause:** `.nav-links a::after` creates a decorative underline that may show on mobile
**Fix:** Hide with `.nav-links a::after { display: none !important; }` on mobile

### Bug B4: Font/Text Overflow in Menu Toggle
**Symptom:** "Men..." appearing instead of clean ☰ icon
**Cause:** `<summary>☰ Menu</summary>` contains visible text
**Fix:** Use `font-size: 0` + `::before` pseudo-element trick

### Bug B5: Language Selector Not Working
**Symptom:** Dropdown changes but page doesn't navigate
**Cause:** `<option value="">` (empty) or wrong path
**Fix:** Verify all option values have correct `/{lang}/` paths

---

## 📊 Current Status of Known Issues

| # | Issue | Identified | Fixed | Verified |
|---|-------|-----------|-------|----------|
| 1 | Logo href="/home" in non-EN | v12b | ✅ v12b | ✅ curl + VM |
| 2 | Dropdown relative links wrong | v13 | ✅ v13 | ✅ VM |
| 3 | CSS class mismatches | v14 | ✅ v14 | ⚠️ VM only |
| 4 | "Men..." text in mobile toggle | v14 screenshots | ❌ | ❌ |
| 5 | Stats cards overflow on mobile | v14 screenshots | ❌ | ❌ |
| 6 | Visual dots/artifacts near logo | v14 screenshots | ❌ | ❌ |
| 7 | Overall mobile layout not adjusted | v14 screenshots | ❌ | ❌ |
| 8 | CTA buttons not mobile-sized | v14 screenshots | ❌ | ❌ |

---

## 🧰 Fix Toolbox

### CSS-Only Fix Pattern (Safest)
- Change ONLY global-fixes.css
- Use `!important` on every property
- Test at 360px, 390px, and 1920px widths
- Verify both EN and non-EN pages

### HTML Structure Fix Pattern (Higher Risk)
- Must update ALL affected pages (up to 290+ files)
- Use Python script, never manual editing
- Verify with `grep` across all files after script runs
- ALWAYS redeploy complete file set

### Deployment Pattern (Safest)
1. Start from last known-good manifest
2. Replace/add only changed files
3. Verify total file count ≥ 510
4. Upload new/changed files to Vercel
5. Deploy with full manifest
6. Wait 30 seconds
7. Curl-test 5 representative pages
8. VM-test on mobile viewport

---

### Rule C6: VERIFY CSS SELECTORS MATCH ACTUAL HTML
- **NEVER** write CSS for a class name from memory — ALWAYS grep or querySelector first
- If your CSS has no effect, the #1 cause is wrong selector
- Before writing any CSS rule, run: `grep -o 'class="[^"]*"' file.html | sort -u` to see real classes
- v15 bug: wrote `.stats-grid` and `.stats` but HTML had `.hero-stats` — fix had zero effect

### Rule C7: USE SHARED EXTERNAL CSS FOR CROSS-LANGUAGE FIXES
- CSS-only fixes via global-fixes.css benefit ALL 30 languages in one deployment
- 1 file change → 1 upload → 1 deploy → 30 languages fixed
- Always prefer external CSS over per-language HTML edits
- Only touch HTML when the fix genuinely requires markup changes

### Rule C8: MOBILE STAT/NUMBER ELEMENTS NEED white-space:nowrap
- Numbers like "10.000+" and "3,5 Mio.+" must NEVER wrap mid-number
- Always apply `white-space: nowrap` on number containers
- Reduce font-size for mobile rather than allowing wrap
- Test with longest number variant (German uses dots: 10.000+)

---

### C9: Base href breaks relative image/resource paths
- When `<base href="/{lang}/">` is set, `src="images/foo.svg"` resolves to `/{lang}/images/foo.svg` (404)
- ALWAYS use absolute paths: `src="/images/foo.svg"` in language-specific pages
- v16 fix: sed replaced `src="images/` → `src="/images/` in 12 affected languages (35 files)

### C10: Verify resource loading consistency across ALL language variants
- Some languages may use base64 inline images while others use file paths
- Test console errors on at least one representative from each "batch" of page builds
- Console errors (Network tab) catch image 404s immediately

*Last updated: 2026-03-23 — v16 deployed: absolute image paths fix for 12 languages*
*This document grows with every resolved issue. Read it before EVERY change.*
*IRON RULE: Update agent_profile DB + this file after EVERY fix. No exceptions.*
