# Tekpoint Design System Guide

**Site:** https://tekpoint-redesign.vercel.app  
**Purpose:** B2B Technology Distribution  
**Markets:** Europe (30 languages)  
**Audience:** Retailers, Vendors, E-tailers

---

## Design Philosophy

Tekpoint should convey **trust**, **scale**, and **technical excellence** while remaining approachable for B2B partners across Europe. The design should feel modern and sophisticated without being cold or inaccessible.

**Key Attributes:**
- Professional but not corporate-sterile
- Tech-forward without being intimidating
- European elegance with global appeal
- Clean, spacious, confident

---

## 1. Color System

### Primary Palette (5 Colors Maximum)

```css
/* globals.css */

@theme inline {
  /* Primary Brand Color - Deep Tech Blue */
  --color-primary: oklch(0.45 0.15 250);        /* #1a4d80 - Trust, Technology */
  --color-primary-foreground: oklch(0.98 0 0);  /* White text on primary */
  
  /* Neutrals */
  --color-background: oklch(0.99 0 0);          /* #fafafa - Off-white */
  --color-foreground: oklch(0.13 0 0);          /* #1a1a1a - Near black */
  --color-muted: oklch(0.96 0 0);               /* #f0f0f0 - Light gray */
  --color-muted-foreground: oklch(0.45 0 0);    /* #6b6b6b - Medium gray */
  
  /* Accent - Subtle Teal for CTAs */
  --color-accent: oklch(0.55 0.12 195);         /* #2a8a8a - Action, Growth */
  --color-accent-foreground: oklch(0.98 0 0);   /* White text on accent */
  
  /* Semantic Colors */
  --color-card: oklch(1 0 0);                   /* Pure white cards */
  --color-card-foreground: oklch(0.13 0 0);
  --color-border: oklch(0.90 0 0);              /* #e5e5e5 - Subtle borders */
  --color-ring: oklch(0.45 0.15 250);           /* Focus ring matches primary */
  
  /* Status Colors */
  --color-success: oklch(0.55 0.15 145);        /* Green for positive */
  --color-destructive: oklch(0.55 0.2 25);      /* Red for errors */
}

/* Dark Mode (Optional) */
.dark {
  --color-background: oklch(0.13 0 0);
  --color-foreground: oklch(0.95 0 0);
  --color-card: oklch(0.18 0 0);
  --color-muted: oklch(0.22 0 0);
  --color-border: oklch(0.28 0 0);
}
```

### Color Usage Rules

| Element | Color Token | Notes |
|---------|-------------|-------|
| Page background | `bg-background` | Off-white, never pure white |
| Text - Primary | `text-foreground` | Near black for readability |
| Text - Secondary | `text-muted-foreground` | Gray for supporting text |
| Primary buttons | `bg-primary text-primary-foreground` | Deep blue |
| Secondary buttons | `bg-muted text-foreground` | Gray outline style |
| CTA/Action buttons | `bg-accent text-accent-foreground` | Teal for conversion actions |
| Cards | `bg-card` | Pure white with subtle shadow |
| Borders | `border-border` | Very subtle, 1px |
| Links | `text-primary` | Match brand blue |

**DO NOT USE:**
- Pure black (#000000) for text - use near-black
- Pure white (#ffffff) for backgrounds - use off-white
- Gradients unless absolutely necessary
- More than 5 colors in any single view

---

## 2. Typography

### Font Stack

```css
/* globals.css */

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

@theme inline {
  --font-sans: 'Inter', system-ui, -apple-system, sans-serif;
  --font-mono: 'Geist Mono', monospace;
}
```

### Type Scale

```css
/* Headings */
.text-hero {
  @apply text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight;
}

.text-h1 {
  @apply text-4xl md:text-5xl font-bold tracking-tight leading-tight;
}

.text-h2 {
  @apply text-3xl md:text-4xl font-semibold tracking-tight leading-snug;
}

.text-h3 {
  @apply text-2xl md:text-3xl font-semibold leading-snug;
}

.text-h4 {
  @apply text-xl md:text-2xl font-medium leading-normal;
}

/* Body */
.text-body-lg {
  @apply text-lg leading-relaxed;
}

.text-body {
  @apply text-base leading-relaxed;
}

.text-body-sm {
  @apply text-sm leading-relaxed;
}

/* Labels & Captions */
.text-label {
  @apply text-sm font-medium tracking-wide uppercase;
}

.text-caption {
  @apply text-xs text-muted-foreground;
}
```

### Typography Implementation

```tsx
// Hero Section
<h1 className="text-balance text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
  Smart Technology Distribution
</h1>

// Section Heading
<h2 className="text-balance text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
  Our Services
</h2>

// Body Copy
<p className="text-pretty text-lg leading-relaxed text-muted-foreground max-w-prose">
  Tekpoint connects leading technology brands with retailers across Europe...
</p>

// Label/Overline
<span className="text-sm font-medium tracking-wide uppercase text-primary">
  About Us
</span>
```

**Rules:**
- Always use `text-balance` on headings
- Always use `text-pretty` on body paragraphs
- Limit line length with `max-w-prose` or specific max-widths
- Use `leading-relaxed` (1.625) for body text
- Use `tracking-tight` for large headings

---

## 3. Spacing System

### Spacing Scale

```
4px   = p-1, m-1, gap-1
8px   = p-2, m-2, gap-2
12px  = p-3, m-3, gap-3
16px  = p-4, m-4, gap-4
24px  = p-6, m-6, gap-6
32px  = p-8, m-8, gap-8
48px  = p-12, m-12, gap-12
64px  = p-16, m-16, gap-16
96px  = p-24, m-24, gap-24
128px = p-32, m-32, gap-32
```

### Section Spacing

```tsx
// Page Section
<section className="py-24 md:py-32">
  <div className="container mx-auto px-4 md:px-6">
    {/* Content */}
  </div>
</section>

// Card Grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
  {/* Cards */}
</div>

// Content Stack
<div className="flex flex-col gap-4">
  <h3>Title</h3>
  <p>Description</p>
</div>
```

**Rules:**
- Use `gap-*` for spacing between elements (not margins)
- Section padding: `py-24` minimum on desktop
- Container padding: `px-4 md:px-6`
- Card internal padding: `p-6` or `p-8`

---

## 4. Component Specifications

### Buttons

```tsx
// Primary Button - Main actions
<Button className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 text-base font-medium rounded-lg">
  Get Started
</Button>

// Secondary Button - Alternative actions
<Button variant="outline" className="border-border text-foreground hover:bg-muted h-12 px-8 text-base font-medium rounded-lg">
  Learn More
</Button>

// Ghost Button - Tertiary actions
<Button variant="ghost" className="text-muted-foreground hover:text-foreground h-10 px-4">
  View Details
</Button>

// CTA Button - High conversion actions
<Button className="bg-accent text-accent-foreground hover:bg-accent/90 h-14 px-10 text-lg font-semibold rounded-lg shadow-lg">
  Partner With Us
</Button>
```

### Cards

```tsx
// Service Card
<div className="group bg-card rounded-2xl border border-border p-8 hover:shadow-lg hover:border-primary/20 transition-all duration-300">
  <div className="flex flex-col gap-4">
    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
      <Icon className="w-6 h-6 text-primary" />
    </div>
    <h3 className="text-xl font-semibold text-foreground">Service Title</h3>
    <p className="text-muted-foreground leading-relaxed">
      Service description goes here with clear value proposition.
    </p>
    <a href="#" className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
      Learn more <ArrowRight className="w-4 h-4" />
    </a>
  </div>
</div>

// Stats Card
<div className="bg-card rounded-2xl border border-border p-8 text-center">
  <p className="text-5xl font-bold text-primary mb-2">500K+</p>
  <p className="text-muted-foreground">Products Shipped Daily</p>
</div>

// Team Member Card
<div className="bg-card rounded-2xl overflow-hidden border border-border">
  <div className="aspect-[4/5] bg-muted">
    <img src="/team/member.jpg" alt="Name" className="w-full h-full object-cover" />
  </div>
  <div className="p-6">
    <h4 className="font-semibold text-foreground">Full Name</h4>
    <p className="text-sm text-muted-foreground">Position</p>
  </div>
</div>
```

### Navigation

```tsx
// Desktop Header
<header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-lg">
  <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
    <a href="/" className="flex items-center gap-2">
      <Logo className="h-8 w-auto" />
    </a>
    
    <nav className="hidden md:flex items-center gap-8">
      <a href="/about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
        About
      </a>
      <a href="/services" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
        Services
      </a>
      <a href="/brands" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
        Brands
      </a>
      <a href="/contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
        Contact
      </a>
    </nav>
    
    <div className="flex items-center gap-4">
      <LanguageSelector />
      <Button className="bg-primary text-primary-foreground h-10 px-6">
        Partner Portal
      </Button>
    </div>
  </div>
</header>
```

### Language Selector (Accessible)

```tsx
// Accessible Language Selector with Regional Grouping
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Globe } from "lucide-react"

const languageGroups = {
  "Western Europe": [
    { code: "en", name: "English" },
    { code: "de", name: "Deutsch" },
    { code: "fr", name: "Francais" },
    { code: "nl", name: "Nederlands" },
  ],
  "Southern Europe": [
    { code: "es", name: "Espanol" },
    { code: "it", name: "Italiano" },
    { code: "pt", name: "Portugues" },
    { code: "el", name: "Ellinika" },
    { code: "mt", name: "Malti" },
  ],
  "Nordic": [
    { code: "da", name: "Dansk" },
    { code: "sv", name: "Svenska" },
    { code: "no", name: "Norsk" },
    { code: "fi", name: "Suomi" },
    { code: "is", name: "Islenska" },
  ],
  "Central Europe": [
    { code: "pl", name: "Polski" },
    { code: "cs", name: "Cestina" },
    { code: "sk", name: "Slovencina" },
    { code: "hu", name: "Magyar" },
  ],
  "Balkans": [
    { code: "ro", name: "Romana" },
    { code: "bg", name: "Balgarski" },
    { code: "hr", name: "Hrvatski" },
    { code: "sl", name: "Slovenscina" },
    { code: "sr", name: "Srpski" },
  ],
  "Baltic": [
    { code: "lt", name: "Lietuviu" },
    { code: "lv", name: "Latviesu" },
    { code: "et", name: "Eesti" },
  ],
  "Celtic": [
    { code: "ga", name: "Gaeilge" },
  ],
  "Asia": [
    { code: "zh", name: "Zhongwen" },
    { code: "ja", name: "Nihongo" },
    { code: "ko", name: "Hangugeo" },
  ],
}

export function LanguageSelector({ currentLocale }: { currentLocale: string }) {
  return (
    <Select defaultValue={currentLocale}>
      <SelectTrigger 
        className="w-auto gap-2 border-0 bg-transparent hover:bg-muted"
        aria-label="Select language"
      >
        <Globe className="h-4 w-4" aria-hidden="true" />
        <SelectValue />
      </SelectTrigger>
      <SelectContent className="max-h-80">
        {Object.entries(languageGroups).map(([region, languages]) => (
          <SelectGroup key={region}>
            <SelectLabel className="text-xs text-muted-foreground font-medium">
              {region}
            </SelectLabel>
            {languages.map((lang) => (
              <SelectItem 
                key={lang.code} 
                value={lang.code}
                lang={lang.code}
              >
                {lang.name}
              </SelectItem>
            ))}
          </SelectGroup>
        ))}
      </SelectContent>
    </Select>
  )
}
```

### Footer

```tsx
<footer className="border-t border-border bg-muted/30">
  <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
      {/* Brand Column */}
      <div className="lg:col-span-2">
        <Logo className="h-8 w-auto mb-6" />
        <p className="text-muted-foreground max-w-sm mb-6">
          Your trusted partner for smart technology distribution across Europe.
        </p>
        <div className="flex gap-4">
          <a href="#" className="text-muted-foreground hover:text-foreground" aria-label="LinkedIn">
            <LinkedInIcon className="h-5 w-5" />
          </a>
          {/* More social icons */}
        </div>
      </div>
      
      {/* Link Columns */}
      <div>
        <h4 className="font-semibold text-foreground mb-4">Company</h4>
        <ul className="flex flex-col gap-3">
          <li><a href="/about" className="text-muted-foreground hover:text-foreground transition-colors">About Us</a></li>
          <li><a href="/careers" className="text-muted-foreground hover:text-foreground transition-colors">Careers</a></li>
          <li><a href="/news" className="text-muted-foreground hover:text-foreground transition-colors">News</a></li>
        </ul>
      </div>
      
      <div>
        <h4 className="font-semibold text-foreground mb-4">Services</h4>
        <ul className="flex flex-col gap-3">
          <li><a href="/services#logistics" className="text-muted-foreground hover:text-foreground transition-colors">Logistics</a></li>
          <li><a href="/services#marketing" className="text-muted-foreground hover:text-foreground transition-colors">Marketing</a></li>
          <li><a href="/services#connectivity" className="text-muted-foreground hover:text-foreground transition-colors">Partner Connectivity</a></li>
        </ul>
      </div>
      
      <div>
        <h4 className="font-semibold text-foreground mb-4">Contact</h4>
        <address className="not-italic flex flex-col gap-3 text-muted-foreground">
          <p>Tekpoint GmbH</p>
          <p>Berlin, Germany</p>
          <a href="mailto:info@tekpoint.com" className="hover:text-foreground transition-colors">info@tekpoint.com</a>
        </address>
      </div>
    </div>
    
    {/* Bottom Bar */}
    <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
      <p className="text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Tekpoint GmbH. All rights reserved.
      </p>
      <div className="flex gap-6 text-sm">
        <a href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a>
        <a href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a>
        <a href="/imprint" className="text-muted-foreground hover:text-foreground transition-colors">Imprint</a>
      </div>
    </div>
  </div>
</footer>
```

---

## 5. Layout Patterns

### Hero Section

```tsx
<section className="relative min-h-[80vh] flex items-center bg-gradient-to-b from-muted/50 to-background">
  <div className="container mx-auto px-4 md:px-6 py-24 md:py-32">
    <div className="max-w-4xl">
      <span className="inline-block text-sm font-medium tracking-wide uppercase text-primary mb-6">
        Technology Distribution
      </span>
      <h1 className="text-balance text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6">
        Smart Technology Distribution for Europe
      </h1>
      <p className="text-pretty text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
        Connecting leading technology brands with retailers across 30+ European markets. Your trusted partner for logistics, marketing, and partner connectivity.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button className="bg-primary text-primary-foreground h-14 px-10 text-lg font-semibold rounded-lg">
          Become a Partner
        </Button>
        <Button variant="outline" className="h-14 px-10 text-lg font-semibold rounded-lg">
          Our Services
        </Button>
      </div>
    </div>
  </div>
</section>
```

### Feature Grid (Bento Style)

```tsx
<section className="py-24 md:py-32 bg-background">
  <div className="container mx-auto px-4 md:px-6">
    <div className="text-center max-w-3xl mx-auto mb-16">
      <span className="text-sm font-medium tracking-wide uppercase text-primary mb-4 block">
        Our Services
      </span>
      <h2 className="text-balance text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4">
        Everything You Need to Succeed
      </h2>
      <p className="text-lg text-muted-foreground">
        Comprehensive distribution services tailored for the European market.
      </p>
    </div>
    
    {/* Bento Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Large Feature Card */}
      <div className="md:col-span-2 bg-primary rounded-3xl p-10 text-primary-foreground">
        <div className="flex flex-col h-full justify-between">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Pan-European Logistics</h3>
            <p className="text-primary-foreground/80 text-lg max-w-lg">
              Reach 30+ markets with our integrated logistics network. Same-day dispatch, real-time tracking, and localized fulfillment.
            </p>
          </div>
          <div className="mt-8">
            <Button variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      {/* Standard Cards */}
      <div className="bg-card rounded-3xl border border-border p-8">
        <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
          <BarChart className="w-6 h-6 text-accent" />
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-3">Marketing Support</h3>
        <p className="text-muted-foreground">
          Localized marketing campaigns, POS materials, and brand amplification across all markets.
        </p>
      </div>
      
      {/* More cards... */}
    </div>
  </div>
</section>
```

### Stats Section

```tsx
<section className="py-24 md:py-32 bg-muted/30">
  <div className="container mx-auto px-4 md:px-6">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {[
        { value: "30+", label: "European Markets" },
        { value: "500K+", label: "Products Daily" },
        { value: "200+", label: "Brand Partners" },
        { value: "15+", label: "Years Experience" },
      ].map((stat, i) => (
        <div key={i} className="text-center">
          <p className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</p>
          <p className="text-muted-foreground">{stat.label}</p>
        </div>
      ))}
    </div>
  </div>
</section>
```

---

## 6. Iconography

### Icon Library

Use **Lucide React** icons consistently throughout the site.

```tsx
import { 
  Truck,          // Logistics
  BarChart3,      // Marketing/Analytics
  Users,          // Partners/Team
  Globe,          // International/Languages
  Package,        // Products
  Zap,            // Speed/Efficiency
  Shield,         // Trust/Security
  ArrowRight,     // CTAs/Links
  Check,          // Checkmarks
  Mail,           // Email
  Phone,          // Phone
  MapPin,         // Location
  Building,       // Company
  ChevronDown,    // Dropdowns
} from "lucide-react"
```

### Icon Usage Rules

```tsx
// Icon in Button
<Button>
  <span>Get Started</span>
  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
</Button>

// Icon with Text (feature list)
<li className="flex items-start gap-3">
  <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" aria-hidden="true" />
  <span>Feature description here</span>
</li>

// Decorative Icon Block
<div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center" aria-hidden="true">
  <Truck className="w-6 h-6 text-primary" />
</div>
```

**Rules:**
- Always add `aria-hidden="true"` to decorative icons
- Use consistent sizes: 16px (h-4), 20px (h-5), 24px (h-6)
- Icon color should match or complement text color
- Never use emojis as icons

---

## 7. Imagery Guidelines

### Image Specifications

| Type | Aspect Ratio | Min Resolution | Format |
|------|--------------|----------------|--------|
| Hero | 16:9 | 1920x1080 | WebP/AVIF |
| Cards | 4:3 or 16:9 | 800x600 | WebP |
| Team | 4:5 | 400x500 | WebP |
| Logos | Various | SVG preferred | SVG/PNG |
| Icons | 1:1 | 48x48 | SVG |

### Image Implementation

```tsx
// Hero Image with Next.js
import Image from 'next/image'

<div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
  <Image
    src="/images/hero-warehouse.webp"
    alt="Tekpoint logistics warehouse with automated systems"
    fill
    className="object-cover"
    priority
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
  />
</div>

// Team Member Image
<div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-muted">
  <Image
    src="/images/team/member-name.webp"
    alt="John Doe, CEO of Tekpoint"
    fill
    className="object-cover"
    sizes="(max-width: 768px) 50vw, 25vw"
  />
</div>

// Partner Logo
<div className="h-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all">
  <Image
    src="/images/partners/xiaomi.svg"
    alt="Xiaomi"
    width={120}
    height={40}
    className="object-contain"
  />
</div>
```

---

## 8. Motion & Animation

### Transition Standards

```css
/* Base transitions */
.transition-colors { transition-duration: 150ms; }
.transition-all { transition-duration: 300ms; }

/* Hover transitions */
.hover-lift {
  @apply transition-transform duration-300 hover:-translate-y-1;
}

.hover-scale {
  @apply transition-transform duration-300 hover:scale-105;
}
```

### Animation Examples

```tsx
// Card Hover
<div className="bg-card rounded-2xl p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
  {/* Content */}
</div>

// Link Arrow Animation
<a className="inline-flex items-center gap-2 group">
  <span>Learn more</span>
  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
</a>

// Fade In on Scroll (use with Intersection Observer)
<div className="opacity-0 translate-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
  {/* Content */}
</div>
```

**Rules:**
- Keep animations subtle (max 300ms)
- Use `ease-out` for exits, `ease-in-out` for hovers
- Respect `prefers-reduced-motion`
- No auto-playing animations that loop

---

## 9. Responsive Breakpoints

```
sm:  640px   - Large phones
md:  768px   - Tablets
lg:  1024px  - Small laptops
xl:  1280px  - Desktops
2xl: 1536px  - Large screens
```

### Responsive Patterns

```tsx
// Typography
<h1 className="text-3xl md:text-5xl lg:text-7xl">

// Grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

// Spacing
<section className="py-16 md:py-24 lg:py-32">

// Visibility
<nav className="hidden md:flex">
<button className="md:hidden">
```

---

## 10. Accessibility Checklist

### Required for All Components

- [ ] Color contrast ratio minimum 4.5:1 for text
- [ ] Focus visible states on all interactive elements
- [ ] Proper heading hierarchy (h1 > h2 > h3)
- [ ] Alt text on all meaningful images
- [ ] `aria-label` on icon-only buttons
- [ ] `aria-hidden="true"` on decorative elements
- [ ] Keyboard navigable (Tab, Enter, Escape)
- [ ] `lang` attribute on language-specific content
- [ ] Form inputs have associated labels
- [ ] Error messages are announced to screen readers

### Focus Styles

```css
/* globals.css */
@layer base {
  *:focus-visible {
    @apply outline-none ring-2 ring-ring ring-offset-2 ring-offset-background;
  }
}
```

---

## 11. Implementation Checklist

### Before Development

- [ ] Set up color tokens in globals.css
- [ ] Configure fonts in layout.tsx
- [ ] Create base component variants (Button, Card, etc.)
- [ ] Set up icon library (Lucide)

### During Development

- [ ] Use semantic HTML elements
- [ ] Follow spacing scale strictly
- [ ] Test responsive at all breakpoints
- [ ] Verify color contrast
- [ ] Add proper aria attributes

### Before Launch

- [ ] Run Lighthouse accessibility audit
- [ ] Test with keyboard navigation
- [ ] Test with screen reader
- [ ] Verify all 30 language layouts
- [ ] Check mobile touch targets (min 44x44px)

---

## Quick Reference

### Most Used Classes

```
/* Layout */
container mx-auto px-4 md:px-6
flex items-center justify-between
grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6

/* Typography */
text-foreground text-muted-foreground
text-balance text-pretty
leading-relaxed tracking-tight

/* Colors */
bg-background bg-card bg-muted bg-primary
text-primary text-foreground text-muted-foreground
border-border

/* Spacing */
py-24 md:py-32 (sections)
p-6 p-8 (cards)
gap-4 gap-6 gap-8

/* Effects */
rounded-lg rounded-xl rounded-2xl
shadow-sm shadow-lg
transition-all duration-300
```

---

**Document Version:** 1.0  
**Created:** March 23, 2026  
**For:** Tekpoint Website Redesign
