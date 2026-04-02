"use client";

const customers = [
  /* === Original 21 retailers (with dedicated gray/hover images) === */
  { name: "Amazon", logo: "/images/logo-amazon-1.png" },
  { name: "eBay", logo: "/images/logo-Ebay.png" },
  { name: "Metro", logo: "/images/metro.png" },
  { name: "Media Markt", logo: "/images/media-market.png" },
  { name: "A1", logo: "/images/A1.png" },
  { name: "Decathlon", logo: "/images/Decathlon.png" },
  { name: "Lidl", logo: "/images/lidl.png" },
  { name: "Otto", logo: "/images/otto-orange-1.png" },
  { name: "Euronics", logo: "/images/Euronics.png" },
  { name: "Mobilcom Debitel", logo: "/images/Mobilcom-Debitel-1.png" },
  { name: "Telefonica", logo: "/images/logo-Telefonica.png" },
  { name: "Yettel", logo: "/images/yettel-logo.png" },
  { name: "Notebooksbilliger.de", logo: "/images/notebooksbilliger.de-logo.png" },
  { name: "Expert", logo: "/images/Expert_Logo-1.png" },
  { name: "Tink", logo: "/images/tink-logo.png" },
  { name: "1&1", logo: "/images/1_1_logo-1.png" },
  { name: "Aldi Süd", logo: "/images/aldi-sud.png" },
  { name: "Aldi Nord", logo: "/images/ALDI-Nord.png" },
  { name: "Saturn", logo: "/images/saturn.png" },
  { name: "Electronic4you", logo: "/images/electronic4you_logo_flat_normal-1.png" },
  { name: "Vodafone", logo: "/images/Vodafone_2017_logo-1.png" },
  /* === Additional 24 retailers (from partner list) === */
  { name: "EDEKA", logo: "/images/retailers/edeka.png" },
  { name: "Coolblue", logo: "/images/retailers/coolblue.png" },
  { name: "bol.com", logo: "/images/retailers/bol-com.png" },
  { name: "T-Mobile", logo: "/images/retailers/t-mobile.png" },
  { name: "BAUHAUS", logo: "/images/retailers/bauhaus.png" },
  { name: "Fnac Vanden Borre", logo: "/images/retailers/vanden-borre.png" },
  { name: "Cyberport", logo: "/images/retailers/cyberport.png" },
  { name: "Medion", logo: "/images/retailers/medion.png" },
  { name: "Freenet", logo: "/images/retailers/freenet.svg" },
  { name: "Galaxus", logo: "/images/retailers/galaxus.svg" },
  { name: "Printus", logo: "/images/retailers/printus.svg" },
  { name: "Büromarkt Böttcher", logo: "/images/retailers/boettcher.svg" },
  { name: "JD.com", logo: "/images/retailers/jd-com.png" },
  { name: "e-tec", logo: "/images/retailers/e-tec.svg" },
  { name: "Powwow", logo: "/images/retailers/powwow.svg" },
  { name: "Wortmann Telecom", logo: "/images/retailers/wortmann-telecom.svg" },
  { name: "Terra Home & Living", logo: "/images/retailers/terra-home-living.png" },
  { name: "Farkind", logo: "/images/retailers/farkind.png" },
  { name: "Motion TM", logo: "/images/retailers/motion-tm.png" },
  { name: "Michael Telecom", logo: "/images/retailers/michael-telecom.png" },
  { name: "Köhler Teledata", logo: "/images/retailers/koehler-teledata.svg" },
  { name: "Lanckriet", logo: "/images/retailers/lanckriet.png" },
  { name: "MobielWerkt", logo: "/images/retailers/mobielwerkt.png" },
  { name: "Sunny Europe", logo: "/images/retailers/sunny-europe.svg" },
];

export default function CustomerGrid() {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-6 md:gap-8 items-center justify-items-center" role="list" aria-label="Customer partners">
      {customers.map((c) => (
        <div
          key={c.name}
          role="listitem"
          className="group relative w-full flex items-center justify-center h-16 md:h-20"
        >
          <img
            src={c.logo}
            alt={`${c.name} logo`}
            loading="lazy"
            width={130}
            height={64}
            className="max-h-12 md:max-h-16 max-w-[100px] md:max-w-[130px] object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
          />
        </div>
      ))}
    </div>
  );
}
