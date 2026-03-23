# Tekpoint Website Rebuild — V0 Handover Package

## 🎯 Project Overview

Complete website rebuild for **Tekpoint GmbH**, a B2B technology distribution company headquartered in **Vienna, Austria**. The site serves as a corporate presence showcasing services, brands, team, and partner onboarding across **30 languages**.

**Live staging (current v19):** https://tekpoint-redesign.vercel.app  
**Password:** `Tekpoint2025!`

## 📁 Repository Structure

```
├── docs/                          # Project documentation
│   ├── TEKPOINT_DESIGN_GUIDE.md   # Full design system (colors, typography, components)
│   ├── TEKPOINT_AUDIT_REPORT.md   # Known issues + priorities
│   ├── RULES-AND-LESSONS.md       # 90 development rules from v1 build
│   └── CONNECT_GITHUB_TO_V0.md    # How to connect this repo to v0
├── data/
│   ├── locales/                   # 30 language JSON files (en.json, de.json, etc.)
│   ├── team.json                  # 8 management board members + LinkedIn
│   ├── brands.json                # 33 vendor/brand partners
│   ├── customers.json             # 12 customer logos
│   ├── locations.json             # Office locations (Vienna HQ, Customer Ops, Warehouse)
│   ├── services.json              # Service offerings
│   ├── pages.json                 # Page structure + meta
│   ├── seo.json                   # SEO data per page
│   ├── languages.json             # 30 supported languages + metadata
│   ├── vacancies.json             # Job listings
│   └── images.json                # Image catalog with alt text
├── reference/                     # Current HTML design (for visual reference)
│   ├── home.html
│   ├── about.html
│   ├── contact.html
│   └── ...                        # All 10 page templates
├── public/
│   ├── images/                    # All brand logos, team photos, assets
│   ├── css/                       # Current CSS files
│   └── downloads/                 # Trading application form PDF
└── README.md                      # This file
```

## 🌐 Pages to Build (10 total)

| Page | Route | Description |
|------|-------|-------------|
| Homepage | `/{lang}` | Hero, stats, services, brands, customers, industries, CTA |
| About | `/{lang}/about` | Company story, values, sustainability |
| Management Board | `/{lang}/management-board` | 8 team members with bios + LinkedIn |
| Services | `/{lang}/services` | Distribution services overview |
| Career | `/{lang}/career` | Job listings + culture |
| Contact | `/{lang}/contact` | Offices, form, market map |
| Become a Partner | `/{lang}/become-a-partner` | 3-step application process + PDF download |
| Impressum | `/{lang}/impressum` | Legal page (exact original text) |
| Privacy Policy | `/{lang}/privacy` | Legal page (exact original text) |
| Terms & Conditions | `/{lang}/terms` | Legal page (exact original text) |

## 🌍 30 Languages

**12 Original:** EN, DE, NL, FR, ES, IT, SR, DA, SV, NO, FI, IS  
**15 EU additions:** PL, RO, CS, HU, HR, BG, SK, SL, PT, EL, ET, LV, LT, GA, MT  
**3 Asian:** ZH, JA, KO

Each language has a complete JSON locale file in `data/locales/`. Translation keys are consistent across all languages.

## 🎨 Design System

**Primary:** `#0a1628` (Navy) | **Accent:** `#00a7e0` (Tekpoint Blue) | **CTA:** `#e8a838` (Gold)

Full design guide in `docs/TEKPOINT_DESIGN_GUIDE.md` including:
- Color system with gradients
- Typography (Inter font family)
- Component specifications
- Responsive breakpoints
- Animation guidelines

## 🔍 SEO Requirements

- hreflang tags for all 30 languages on every page
- JSON-LD structured data (Organization, LocalBusiness)
- Open Graph + Twitter Card meta tags
- XML sitemap with language alternates
- Canonical URLs
- Semantic HTML structure

## ⚠️ Known Issues to Fix

See `docs/TEKPOINT_AUDIT_REPORT.md` for complete list. Key items:
- ES Spanish systematic "in"→"en" translation errors
- SR Serbian Latin script corruptions
- Several languages with untranslated "For Manufacturers" strings
- JA Japanese mobile layout issues
- Missing: market map on contact page, warehouse address, footer offices section

## 🏢 Company Details

- **Company:** Tekpoint GmbH
- **HQ:** Handelskai 388/5/7, 1020 Vienna, Austria
- **Phone:** +43/1/3616670
- **Email:** info@tekpoint.com (general), distribution@tekpoint.com (partner applications)
- **Market:** Western, Central & Eastern European distribution
- **Tagline:** "Your trusted WEU / CEE distribution partner"

## 🔧 Tech Stack (Recommended)

- **Framework:** Next.js 14+ with App Router
- **Styling:** Tailwind CSS + shadcn/ui
- **i18n:** next-intl or similar
- **Deployment:** Vercel
- **Font:** Inter (Google Fonts)
