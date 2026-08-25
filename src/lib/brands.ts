/**
 * Single source of truth for the brand portfolio.
 *
 * Rendering assets (logo, bg, logoClass) are unchanged from the original
 * Brands page array — order and filenames are preserved exactly.
 *
 * `slug`, `category` and `summary` exist so the portfolio is readable as text
 * and as structured data, not only as images.
 */

export interface Brand {
  /** Display name, exactly as used on the Brands page. */
  name: string;
  /** Stable machine identifier, also used as the in-page anchor id. */
  slug: string;
  /** Product category Tekpoint distributes this brand in. */
  category: string;
  /** One factual sentence. No marketing claims. */
  summary: string;
  logo: string;
  bg: string;
  logoClass?: string;
}

export const BRANDS: Brand[] = [
  {
    name: "Xiaomi",
    slug: "xiaomi",
    category: "Smartphones, smart home & AIoT",
    summary:
      "Xiaomi produces smartphones, tablets and a broad connected smart home and AIoT ecosystem.",
    logo: "Xiaomi-2.png",
    bg: "xiaomi_bg-jpg.webp",
  },
  {
    name: "OPPO",
    slug: "oppo",
    category: "Smartphones",
    summary:
      "OPPO produces smartphones and tablets across entry-level, mid-range and flagship segments.",
    logo: "VI_PNG_OPPO-Logo_White_CMYK_20191204-01-2.png",
    bg: "oppo.png",
  },
  {
    name: "POCO",
    slug: "poco",
    category: "Smartphones",
    summary:
      "POCO produces performance-oriented smartphones, positioned as a Xiaomi sub-brand.",
    logo: "on-hover-2.png",
    bg: "poco-2.png",
  },
  {
    name: "Amazfit",
    slug: "amazfit",
    category: "Smartwatches & wearables",
    summary:
      "Amazfit produces smartwatches and fitness wearables with health and activity tracking.",
    logo: "amazfit-2.png",
    bg: "amazfit_bg-jpg.webp",
  },
  {
    name: "Realme",
    slug: "realme",
    category: "Smartphones & smart devices",
    summary:
      "Realme produces smartphones, audio products and connected smart devices.",
    logo: "realme-logo.png",
    bg: "realme_bg-jpg.webp",
  },
  {
    name: "Oclean",
    slug: "oclean",
    category: "Oral care",
    summary:
      "Oclean produces electric sonic toothbrushes and connected oral care devices.",
    logo: "oclean-logo.png",
    bg: "oclean_bg-jpg.webp",
  },
  {
    name: "Anker",
    slug: "anker",
    category: "Charging & power accessories",
    summary:
      "Anker produces chargers, power banks, cables and GaN-based charging accessories.",
    logo: "anker.png",
    bg: "Anker_bg-jpg.webp",
  },
  {
    name: "Nothing",
    slug: "nothing",
    category: "Smartphones & audio",
    summary:
      "Nothing produces smartphones and true-wireless earbuds with transparent industrial design.",
    logo: "Nothing.png",
    bg: "nothing_bg-jpg.webp",
  },
  {
    name: "Roborock",
    slug: "roborock",
    category: "Robot vacuums & floor care",
    summary:
      "Roborock produces robot vacuums, mopping robots and, since 2026, robotic lawn mowers.",
    logo: "Group.svg",
    bg: "3eb9ca14b75698a5197a5d07ff87fd8b.png",
  },
  {
    name: "Narwal",
    slug: "narwal",
    category: "Robot vacuums & floor care",
    summary:
      "Narwal produces self-cleaning robot vacuum and mop systems with automated maintenance docks.",
    logo: "Narwal-1.svg",
    bg: "a8f131925ee4f759e636c99fdbcce4c6.png",
  },
  {
    name: "IMIKI",
    slug: "imiki",
    category: "Smartwatches & earbuds",
    summary:
      "IMIKI produces entry and mid-range smartwatches, earbuds and lightweight wearables.",
    logo: "Imiki.svg",
    bg: "bbbc240f453e5becc4098326ae851c48.jpeg",
  },
  {
    name: "RENPHO",
    slug: "renpho",
    category: "Health & wellness devices",
    summary:
      "RENPHO produces smart body scales, massage guns and other connected wellness devices.",
    logo: "Renpro.svg",
    bg: "38a444420680af9adfa6751332370f11.png",
  },
  {
    name: "DYU",
    slug: "dyu",
    category: "E-bikes & micro-mobility",
    summary:
      "DYU produces compact and foldable urban e-bikes.",
    logo: "DYU.svg",
    bg: "98999b50860f542d41d52d312ed1f333.png",
  },
  {
    name: "Govee",
    slug: "govee",
    category: "Smart lighting",
    summary:
      "Govee produces app-controlled smart LED lighting for indoor and outdoor use.",
    logo: "Mask-group-2.svg",
    bg: "govee.png",
  },
  {
    name: "SFP",
    slug: "sfp",
    category: "Enterprise mobile devices",
    summary:
      "SFP Mobile, based in Vienna, produces ruggedised enterprise devices and terminals for private and industrial networks.",
    logo: "SFP-1.svg",
    bg: "a11fae9e9c9f32debc8741029b36d3d9.png",
  },
  {
    name: "DJI ROMO",
    slug: "dji-romo",
    category: "Robot vacuums & floor care",
    summary:
      "DJI ROMO is DJI's robot vacuum series, applying the company's navigation and sensing technology to home cleaning.",
    logo: "DJI-ROMO.svg",
    bg: "170b377c572b948a8a66adbff97470f10963cef5.jpg",
  },
  {
    name: "Mi Scooter",
    slug: "mi-scooter",
    category: "E-scooters & micro-mobility",
    summary:
      "Mi Scooter is Xiaomi's electric scooter line for urban commuting.",
    logo: "brands/mi-scooter.svg",
    bg: "brands/mi-scooter-bg.webp",
  },
  {
    name: "Mi Eco",
    slug: "mi-eco",
    category: "Smart home & ecosystem products",
    summary:
      "Mi Eco covers Xiaomi's wider ecosystem product range across smart home, personal care and small appliances.",
    logo: "brands/mi-eco.svg",
    bg: "brands/mi-eco-bg.webp",
  },
  {
    name: "ANTHBOT",
    slug: "anthbot",
    category: "Robotic lawn mowers",
    summary:
      "ANTHBOT produces wire-free robotic lawn mowers that combine LiDAR, RTK and AI vision navigation; its M9 Pro launched across Europe in July 2026.",
    logo: "brands/anthbot.svg",
    bg: "brands/anthbot-bg.webp",
  },
  {
    name: "Honor",
    slug: "honor",
    category: "Smartphones, tablets & wearables",
    summary:
      "Honor produces smartphones, foldables, tablets and wearables, including the Magic V6 foldable.",
    logo: "brands/honor.svg",
    bg: "brands/honor-bg.webp",
  },
  {
    name: "Levoit",
    slug: "levoit",
    category: "Air treatment & home climate",
    summary:
      "Levoit produces air purifiers, humidifiers and home climate devices.",
    logo: "brands/levoit.svg",
    bg: "brands/levoit-bg.webp",
  },
  {
    name: "Motorola",
    slug: "motorola",
    category: "Smartphones",
    summary:
      "Motorola produces smartphones across entry, mid-range and foldable segments.",
    logo: "brands/motorola.svg",
    bg: "brands/motorola-bg.webp",
  },
  {
    name: "Navimow",
    slug: "navimow",
    category: "Robotic lawn mowers",
    summary:
      "Navimow is Segway's robotic lawn mower brand; its X420 and i206 AWD models hold the first TÜV Rheinland Lawn Care certification.",
    logo: "brands/navimow.svg",
    bg: "brands/navimow-bg.webp",
  },
  {
    name: "NIU",
    slug: "niu",
    category: "Electric two-wheelers",
    summary:
      "NIU produces electric scooters and mopeds. It was the world's second-largest pure electric two-wheeler brand by 2025 sales volume.",
    logo: "brands/niu.svg",
    bg: "brands/niu-bg.webp",
  },
  {
    name: "eufy",
    slug: "eufy",
    category: "Smart home & security",
    summary:
      "eufy, part of Anker Innovations, produces smart home security cameras, doorbells, locks and robot vacuums.",
    logo: "brands/eufy.svg",
    bg: "brands/eufy-bg.webp",
  },
  {
    name: "Rokid",
    slug: "rokid",
    category: "Smart glasses",
    summary:
      "Rokid produces AI smart glasses that run multiple assistant platforms natively, including ChatGPT, Gemini and Claude, rather than a single proprietary assistant.",
    logo: "brands/rokid.svg",
    bg: "brands/rokid-bg.webp",
  },
  {
    name: "Harmonix",
    slug: "harmonix",
    category: "Wearable audio & hearing enhancement",
    summary:
      "Harmonix is an Icelandic audio-technology company building open-ear smart glasses (SonaVue) and over-the-counter hearing enhancement earbuds (Elevate). Tekpoint is a partner, co-owner and European distributor.",
    // Harmonix wordmark is very wide; render it a touch larger than the default
    // and cap its width so the long wordmark fits cleanly inside the card.
    logo: "brands/harmonix-wordmark.png",
    bg: "brands/harmonix-bg.webp",
    logoClass: "max-h-14 md:max-h-20 max-w-[85%]",
  },
];

export const BRAND_COUNT = BRANDS.length;

/** Retail, e-commerce and channel partners Tekpoint supplies. */
export const RETAILERS: { name: string; logo: string }[] = [
  /* === Major retailers (from homepage) === */
  { name: "Amazon", logo: "retailers-real/amazon.svg" },
  { name: "eBay", logo: "retailers-real/ebay.svg" },
  { name: "Metro", logo: "retailers-real/metro.png" },
  { name: "Media Markt", logo: "retailers-real/mediamarkt.svg" },
  { name: "A1", logo: "retailers-real/a1.png" },
  { name: "Decathlon", logo: "retailers-real/decathlon.png" },
  { name: "Lidl", logo: "retailers-real/lidl.svg" },
  { name: "Otto", logo: "retailers-real/otto.png" },
  { name: "Euronics", logo: "retailers-real/euronics.png" },
  { name: "Mobilcom Debitel", logo: "retailers-real/mobilcom.png" },
  { name: "Telefónica", logo: "retailers-real/telefonica.svg" },
  { name: "Yettel", logo: "retailers-real/yettel.png" },
  { name: "Notebooksbilliger.de", logo: "retailers-real/nbb.png" },
  { name: "Expert", logo: "retailers-real/expert.png" },
  { name: "Tink", logo: "retailers-real/tink.png" },
  { name: "1&1", logo: "retailers-real/oneandone.png" },
  { name: "Aldi Süd", logo: "retailers-real/aldisud.png" },
  { name: "Aldi Nord", logo: "retailers-real/aldinord.png" },
  { name: "Saturn", logo: "retailers-real/saturn.svg" },
  { name: "Electronic4you", logo: "retailers-real/electronic4you.png" },
  { name: "Vodafone", logo: "retailers-real/vodafone.png" },
  /* === Additional retailers (from partner list) === */
  { name: "EDEKA", logo: "retailers/edeka.png" },
  { name: "Coolblue", logo: "retailers/coolblue.png" },
  { name: "bol.com", logo: "retailers/bol-com.png" },
  { name: "T-Mobile", logo: "retailers/t-mobile.png" },
  { name: "BAUHAUS", logo: "retailers/bauhaus.png" },
  { name: "Fnac Vanden Borre", logo: "retailers/vanden-borre.png" },
  { name: "Cyberport", logo: "retailers/cyberport.png" },
  { name: "Medion", logo: "retailers/medion.png" },
  { name: "Freenet", logo: "retailers/freenet.svg" },
  { name: "Galaxus", logo: "retailers/galaxus.svg" },
  { name: "Printus", logo: "retailers/printus.svg" },
  { name: "Büromarkt Böttcher", logo: "retailers/boettcher.svg" },
  { name: "JD.com", logo: "retailers/jd-com.png" },
  { name: "e-tec", logo: "retailers/e-tec.svg" },
  { name: "Powwow", logo: "retailers/powwow.svg" },
  { name: "Wortmann Telecom", logo: "retailers/wortmann-telecom.svg" },
  { name: "Terra Home & Living", logo: "retailers/terra-home-living.png" },
  { name: "Farkind", logo: "retailers/farkind.png" },
  { name: "Motion TM", logo: "retailers/motion-tm.png" },
  { name: "Michael Telecom", logo: "retailers/michael-telecom.png" },
  { name: "Köhler Teledata", logo: "retailers/koehler-teledata.svg" },
  { name: "Lanckriet", logo: "retailers/lanckriet.png" },
  { name: "MobielWerkt", logo: "retailers/mobielwerkt.png" },
  { name: "Sunny Europe", logo: "retailers/sunny-europe.svg" },
  { name: "EP: (ElectronicPartner)", logo: "retailers/ep-medimax.png" },
  { name: "Medimax", logo: "retailers/medimax.png" },
  { name: "Kaufland", logo: "retailers/kaufland.svg" },
  { name: "OBI", logo: "retailers/obi.svg" },
  { name: "Hornbach", logo: "retailers/hornbach.svg" },
];
