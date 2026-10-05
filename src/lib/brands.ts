/** Shared portfolio inventory. Draft: identity and artwork approvals remain release gates. */
export interface Brand {name:string;slug:string;category:string;summary:string;logo:string;bg:string;website?:string;logoTone?:'light'|'dark';portfolioLogo?:string;portfolioLogoTone?:'light'|'dark';logoBlend?:'multiply';portfolioLogoSizing?:'optical';assetPending?:boolean;}
export interface Retailer {name:string;logo:string;identityPending?:boolean;}
export const BRANDS: Brand[] = [
  {
    "name": "Xiaomi",
    "slug": "xiaomi",
    "category": "Smartphones, smart home & AIoT",
    "summary": "Xiaomi produces smartphones, tablets and a broad connected smart home and AIoT ecosystem.",
    "logo": "Xiaomi-2.png",
    "bg": "xiaomi_bg-jpg.webp",
    "website": "https://www.mi.com/global/",
    "logoTone": "dark"
  },
  {
    "name": "POCO",
    "slug": "poco",
    "category": "Smartphones",
    "summary": "POCO produces performance-oriented smartphones, positioned as a Xiaomi sub-brand.",
    "logo": "on-hover-2.png",
    "bg": "poco-2.png",
    "website": "https://www.po.co/global/",
    "logoTone": "dark"
  },
  {
    "name": "Oclean",
    "slug": "oclean",
    "category": "Oral care",
    "summary": "Oclean produces electric sonic toothbrushes and connected oral care devices.",
    "logo": "oclean-logo.png",
    "bg": "oclean_bg-jpg.webp",
    "website": "https://www.oclean.com/",
    "logoTone": "dark",
    "portfolioLogoSizing": "optical"
  },
  {
    "name": "Anker",
    "slug": "anker",
    "category": "Charging & power accessories",
    "summary": "Anker produces chargers, power banks, cables and GaN-based charging accessories.",
    "logo": "anker.png",
    "bg": "Anker_bg-jpg.webp",
    "website": "https://www.anker.com/",
    "logoTone": "dark"
  },
  {
    "name": "Roborock",
    "slug": "roborock",
    "category": "Robot vacuums & floor care",
    "summary": "Roborock produces robot vacuums, mopping robots and, since 2026, robotic lawn mowers.",
    "logo": "Group.svg",
    "bg": "3eb9ca14b75698a5197a5d07ff87fd8b.png",
    "website": "https://global.roborock.com/",
    "logoTone": "dark"
  },
  {
    "name": "RENPHO",
    "slug": "renpho",
    "category": "Health & wellness devices",
    "summary": "RENPHO produces smart body scales, massage guns and other connected wellness devices.",
    "logo": "Renpro.svg",
    "bg": "38a444420680af9adfa6751332370f11.png",
    "website": "https://renpho.com/",
    "logoTone": "dark",
    "portfolioLogoSizing": "optical",
    "portfolioLogo": "portfolio-refresh/logo-sizing/renpho.svg"
  },
  {
    "name": "DYU",
    "slug": "dyu",
    "category": "E-bikes & micro-mobility",
    "summary": "DYU produces compact and foldable urban e-bikes.",
    "logo": "DYU.svg",
    "bg": "98999b50860f542d41d52d312ed1f333.png",
    "website": "https://dyucycle.com/",
    "logoTone": "dark"
  },
  {
    "name": "Govee",
    "slug": "govee",
    "category": "Smart lighting",
    "summary": "Govee produces app-controlled smart LED lighting for indoor and outdoor use.",
    "logo": "Mask-group-2.svg",
    "bg": "govee.png",
    "website": "https://us.govee.com/",
    "logoTone": "dark"
  },
  {
    "name": "SFP",
    "slug": "sfp",
    "category": "Enterprise mobile devices",
    "summary": "SFP Mobile, based in Vienna, produces ruggedised enterprise devices and terminals for private and industrial networks.",
    "logo": "SFP-1.svg",
    "bg": "a11fae9e9c9f32debc8741029b36d3d9.png",
    "website": "https://www.solutionforpros.com/",
    "logoTone": "dark"
  },
  {
    "name": "DJI ROMO",
    "slug": "dji-romo",
    "category": "Robot vacuums & floor care",
    "summary": "DJI ROMO is DJI's robot vacuum series, applying the company's navigation and sensing technology to home cleaning.",
    "logo": "DJI-ROMO.svg",
    "bg": "170b377c572b948a8a66adbff97470f10963cef5.jpg",
    "website": "https://www.romo.tech/",
    "logoTone": "dark"
  },
  {
    "name": "Mi Scooter",
    "slug": "mi-scooter",
    "category": "E-scooters & micro-mobility",
    "summary": "Mi Scooter is Xiaomi's electric scooter line for urban commuting.",
    "logo": "brands/mi-scooter.svg",
    "bg": "brands/mi-scooter-bg.webp",
    "website": "https://www.mi.com/global/product-list/outdoor/scooter/",
    "logoTone": "light",
    "portfolioLogoSizing": "optical",
    "portfolioLogo": "portfolio-refresh/logo-sizing/mi-scooter.svg"
  },
  {
    "name": "Mi Eco",
    "slug": "mi-eco",
    "category": "Smart home & ecosystem products",
    "summary": "Mi Eco covers Xiaomi's wider ecosystem product range across smart home, personal care and small appliances.",
    "logo": "brands/mi-eco.svg",
    "bg": "brands/mi-eco-bg.webp",
    "website": "https://www.mi.com/global/smart-home/",
    "logoTone": "light",
    "portfolioLogoSizing": "optical",
    "portfolioLogo": "portfolio-refresh/logo-sizing/mi-eco.svg"
  },
  {
    "name": "ANTHBOT",
    "slug": "anthbot",
    "category": "Robotic lawn mowers",
    "summary": "ANTHBOT produces wire-free robotic lawn mowers that combine LiDAR, RTK and AI vision navigation; its M9 Pro launched across Europe in July 2026.",
    "logo": "brands/anthbot.svg",
    "bg": "brands/anthbot-bg.webp",
    "website": "https://anthbot.com/",
    "logoTone": "light"
  },
  {
    "name": "Honor",
    "slug": "honor",
    "category": "Smartphones, tablets & wearables",
    "summary": "Honor produces smartphones, foldables, tablets and wearables, including the Magic V6 foldable.",
    "logo": "brands/honor.svg",
    "bg": "brands/honor-bg.webp",
    "website": "https://www.honor.com/global/",
    "logoTone": "light"
  },
  {
    "name": "Levoit",
    "slug": "levoit",
    "category": "Air treatment & home climate",
    "summary": "Levoit produces air purifiers, humidifiers and home climate devices.",
    "logo": "brands/levoit.svg",
    "bg": "brands/levoit-bg.webp",
    "website": "https://levoit.com/",
    "logoTone": "light"
  },
  {
    "name": "Navimow",
    "slug": "navimow",
    "category": "Robotic lawn mowers",
    "summary": "Navimow is Segway's robotic lawn mower brand; its X420 and i206 AWD models hold the first TÜV Rheinland Lawn Care certification.",
    "logo": "brands/navimow.svg",
    "bg": "brands/navimow-bg.webp",
    "website": "https://navimow.segway.com/",
    "logoTone": "light",
    "portfolioLogo": "portfolio-refresh/logo-variants/navimow-official-light.svg",
    "portfolioLogoTone": "dark"
  },
  {
    "name": "NIU",
    "slug": "niu",
    "category": "Electric two-wheelers",
    "summary": "NIU produces electric scooters and mopeds. It was the world's second-largest pure electric two-wheeler brand by 2025 sales volume.",
    "logo": "brands/niu.svg",
    "bg": "brands/niu-bg.webp",
    "website": "https://global.niu.com/home",
    "logoTone": "light"
  },
  {
    "name": "eufy",
    "slug": "eufy",
    "category": "Smart home & security",
    "summary": "eufy, part of Anker Innovations, produces smart home security cameras, doorbells, locks and robot vacuums.",
    "logo": "brands/eufy.svg",
    "bg": "brands/eufy-bg.webp",
    "website": "https://www.eufy.com/",
    "logoTone": "light"
  },
  {
    "name": "Rokid",
    "slug": "rokid",
    "category": "Smart glasses",
    "summary": "Rokid produces AI smart glasses that run multiple assistant platforms natively, including ChatGPT, Gemini and Claude, rather than a single proprietary assistant.",
    "logo": "brands/rokid.svg",
    "bg": "brands/rokid-bg.webp",
    "website": "https://global.rokid.com/",
    "logoTone": "light",
    "portfolioLogo": "portfolio-refresh/logo-variants/rokid-official-light-wordmark.png",
    "portfolioLogoTone": "dark"
  },
  {
    "name": "Harmonix",
    "slug": "harmonix",
    "category": "Wearable audio & hearing enhancement",
    "summary": "Harmonix is an Icelandic audio-technology company building open-ear smart glasses (SonaVue) and over-the-counter hearing enhancement earbuds (Elevate). Tekpoint is a partner, co-owner and European distributor.",
    "logo": "brands/harmonix-wordmark.png",
    "bg": "brands/harmonix-bg.webp",
    "website": "https://harmonix.co/",
    "logoTone": "light"
  },
  {
    "name": "AGIBOT",
    "slug": "agibot",
    "category": "Humanoid & industrial robotics",
    "summary": "AGIBOT produces humanoid and industrial robots, including A2 Ultra, X2 Ultra and G2. Tekpoint is its regional distributor for Europe.",
    "logo": "robotics/agibot-logo-dark.png",
    "bg": "robotics/agibot-robot-detail.webp",
    "logoTone": "light"
  },
  {
    "name": "Pure Electric",
    "slug": "pure-electric",
    "category": "Electric scooters",
    "summary": "Pure Electric produces electric scooters for urban mobility.",
    "logo": "brands/pure-electric.png",
    "bg": "portfolio-refresh/pure-electric/background.webp",
    "website": "https://www.pureelectric.com/",
    "logoTone": "dark"
  },
  {
    "name": "Laifen",
    "slug": "laifen",
    "category": "Hair care & personal care",
    "summary": "Laifen produces hair dryers, electric toothbrushes and electric shavers.",
    "logo": "brands/laifen.png",
    "bg": "portfolio-refresh/laifen/background.webp",
    "website": "https://www.laifentech.com/",
    "logoTone": "light",
    "logoBlend": "multiply"
  },
  {
    "name": "Clicks",
    "slug": "clicks",
    "category": "Mobile technology / smartphone keyboard accessories",
    "summary": "Mobile technology / smartphone keyboard accessories.",
    "logo": "portfolio-refresh/clicks/logo.svg",
    "bg": "portfolio-refresh/clicks/background.webp",
    "website": "https://www.clicks.tech/",
    "logoTone": "dark",
    "assetPending": false
  },
  {
    "name": "Navee",
    "slug": "navee",
    "category": "Smart personal mobility",
    "summary": "Smart personal mobility.",
    "logo": "portfolio-refresh/navee/logo.webp",
    "bg": "portfolio-refresh/navee/background.webp",
    "website": "https://www.naveetech.com/",
    "logoTone": "dark",
    "assetPending": false
  },
  {
    "name": "Egret",
    "slug": "egret",
    "category": "Premium electric scooters / e-mobility",
    "summary": "Premium electric scooters / e-mobility.",
    "logo": "portfolio-refresh/egret/logo.webp",
    "bg": "portfolio-refresh/egret/background.webp",
    "website": "https://my-egret.com/",
    "logoTone": "dark",
    "assetPending": false
  },
  {
    "name": "Ulike",
    "slug": "ulike",
    "category": "At-home IPL hair-removal devices",
    "summary": "At-home IPL hair-removal devices.",
    "logo": "portfolio-refresh/ulike/logo.svg",
    "bg": "portfolio-refresh/ulike/background.webp",
    "website": "https://www.ulike.com/",
    "logoTone": "light",
    "assetPending": false
  },
  {
    "name": "Care Pro",
    "slug": "care-pro",
    "category": "Hair-treatment devices",
    "summary": "CARE PRO produces ultrasonic hair-treatment devices for salon and home use.",
    "logo": "portfolio-refresh/care-pro/logo.svg",
    "bg": "portfolio-refresh/care-pro/background.webp",
    "logoTone": "dark",
    "assetPending": false,
    "website": "https://www.carepro-hairmedication.com/EN/"
  }
];
export const BRAND_COUNT = BRANDS.length;
export const RETAILERS: Retailer[] = [
  {
    "name": "Amazon",
    "logo": "retailers-real/amazon.svg"
  },
  {
    "name": "eBay",
    "logo": "retailers-real/ebay.svg"
  },
  {
    "name": "Metro",
    "logo": "retailers-real/metro.png"
  },
  {
    "name": "Media Markt",
    "logo": "retailers-real/mediamarkt.svg"
  },
  {
    "name": "A1",
    "logo": "portfolio-refresh/customer-colors/a1.png"
  },
  {
    "name": "Decathlon",
    "logo": "portfolio-refresh/customer-colors/decathlon.svg"
  },
  {
    "name": "Lidl",
    "logo": "retailers-real/lidl.svg"
  },
  {
    "name": "Otto",
    "logo": "portfolio-refresh/customer-colors/otto.svg"
  },
  {
    "name": "Euronics",
    "logo": "portfolio-refresh/customer-colors/euronics.svg"
  },
  {
    "name": "Mobilcom Debitel",
    "logo": "portfolio-refresh/customer-colors/mobilcom-debitel.svg"
  },
  {
    "name": "Telefónica",
    "logo": "retailers-real/telefonica.svg"
  },
  {
    "name": "Yettel",
    "logo": "retailers-real/yettel.png"
  },
  {
    "name": "Notebooksbilliger.de",
    "logo": "portfolio-refresh/customer-colors/notebooksbilliger-de.svg"
  },
  {
    "name": "Expert",
    "logo": "portfolio-refresh/customer-colors/expert.svg"
  },
  {
    "name": "Tink",
    "logo": "portfolio-refresh/customer-colors/tink.svg"
  },
  {
    "name": "1&1",
    "logo": "portfolio-refresh/customer-colors/1and1.svg"
  },
  {
    "name": "Aldi Süd",
    "logo": "portfolio-refresh/customer-colors/aldi-sud.svg"
  },
  {
    "name": "Aldi Nord",
    "logo": "portfolio-refresh/customer-colors/aldi-nord.svg"
  },
  {
    "name": "Saturn",
    "logo": "retailers-real/saturn.svg"
  },
  {
    "name": "Electronic4you",
    "logo": "portfolio-refresh/customer-colors/electronic4you.jpg"
  },
  {
    "name": "Vodafone",
    "logo": "portfolio-refresh/customer-colors/vodafone.svg"
  },
  {
    "name": "EDEKA",
    "logo": "portfolio-refresh/customer-colors/edeka.webp"
  },
  {
    "name": "Coolblue",
    "logo": "retailers/coolblue.png"
  },
  {
    "name": "bol.com",
    "logo": "retailers/bol-com.png"
  },
  {
    "name": "T-Mobile",
    "logo": "retailers/t-mobile.png"
  },
  {
    "name": "BAUHAUS",
    "logo": "retailers/bauhaus.png"
  },
  {
    "name": "Fnac Vanden Borre",
    "logo": "retailers/vanden-borre.png"
  },
  {
    "name": "Cyberport",
    "logo": "retailers/cyberport.png"
  },
  {
    "name": "Medion",
    "logo": "retailers/medion.png"
  },
  {
    "name": "Freenet",
    "logo": "retailers/freenet.svg"
  },
  {
    "name": "Galaxus",
    "logo": "retailers/galaxus.svg"
  },
  {
    "name": "Printus",
    "logo": "retailers/printus.svg"
  },
  {
    "name": "Büromarkt Böttcher",
    "logo": "retailers/boettcher.svg"
  },
  {
    "name": "JD.com",
    "logo": "retailers/jd-com.png"
  },
  {
    "name": "e-tec",
    "logo": "retailers/e-tec.svg"
  },
  {
    "name": "Powwow",
    "logo": "retailers/powwow.svg"
  },
  {
    "name": "Wortmann Telecom",
    "logo": "retailers/wortmann-telecom.svg"
  },
  {
    "name": "Terra Home & Living",
    "logo": "retailers/terra-home-living.png"
  },
  {
    "name": "Farkind",
    "logo": "retailers/farkind.png"
  },
  {
    "name": "Motion TM",
    "logo": "retailers/motion-tm.png"
  },
  {
    "name": "Michael Telecom",
    "logo": "retailers/michael-telecom.png"
  },
  {
    "name": "Köhler Teledata",
    "logo": "retailers/koehler-teledata.svg"
  },
  {
    "name": "Lanckriet",
    "logo": "retailers/lanckriet.png"
  },
  {
    "name": "MobielWerkt",
    "logo": "retailers/mobielwerkt.png"
  },
  {
    "name": "Sunny Europe",
    "logo": "retailers/sunny-europe.svg"
  },
  {
    "name": "EP: (ElectronicPartner)",
    "logo": "retailers/ep-medimax.png"
  },
  {
    "name": "Medimax",
    "logo": "retailers/medimax.png"
  },
  {
    "name": "Kaufland",
    "logo": "retailers/kaufland.svg"
  },
  {
    "name": "OBI",
    "logo": "retailers/obi.svg"
  },
  {
    "name": "Hornbach",
    "logo": "retailers/hornbach.svg"
  },
  {
    "name": "Connect+",
    "logo": "portfolio-refresh/connectplus/logo.webp"
  },
  {
    "name": "Alternate",
    "logo": "portfolio-refresh/alternate/logo.svg",
    "identityPending": false
  },
  {
    "name": "Rossmann",
    "logo": "portfolio-refresh/rossmann/logo.svg",
    "identityPending": false
  },
  {
    "name": "Office Partner",
    "logo": "portfolio-refresh/office-partner/logo.svg",
    "identityPending": false
  }
];

/** Retained homepage order preserved; authorised removals excluded and additions appended. */
const HOME_ORDER = ["roborock","mi-scooter","xiaomi","mi-eco","renpho","govee","poco","anthbot","dji-romo","dyu","oclean","honor","levoit","navimow","niu","sfp","anker","eufy","rokid","harmonix","pure-electric","laifen","agibot","clicks","navee","egret","ulike","care-pro"];
export const HOME_BRANDS: Brand[] = HOME_ORDER.map(slug => BRANDS.find(brand => brand.slug === slug)!).filter(Boolean);
