"use client";

const customers = [
  /* === Original 21 retailers (with dedicated gray/hover images) === */
  { name: "Amazon", logo: "/images/retailers-real/amazon.svg" },
  { name: "eBay", logo: "/images/retailers-real/ebay.svg" },
  { name: "Metro", logo: "/images/retailers-real/metro.png" },
  { name: "Media Markt", logo: "/images/retailers-real/mediamarkt.svg" },
  { name: "A1", logo: "/images/retailers-real/a1.png" },
  { name: "Decathlon", logo: "/images/retailers-real/decathlon.png" },
  { name: "Lidl", logo: "/images/retailers-real/lidl.svg" },
  { name: "Otto", logo: "/images/retailers-real/otto.png" },
  { name: "Euronics", logo: "/images/retailers-real/euronics.png" },
  { name: "Mobilcom Debitel", logo: "/images/retailers-real/mobilcom.png" },
  { name: "Telefonica", logo: "/images/retailers-real/telefonica.svg" },
  { name: "Yettel", logo: "/images/retailers-real/yettel.png" },
  { name: "Notebooksbilliger.de", logo: "/images/retailers-real/nbb.png" },
  { name: "Expert", logo: "/images/retailers-real/expert.png" },
  { name: "Tink", logo: "/images/retailers-real/tink.png" },
  { name: "1&1", logo: "/images/retailers-real/oneandone.png" },
  { name: "Aldi Süd", logo: "/images/retailers-real/aldisud.png" },
  { name: "Aldi Nord", logo: "/images/retailers-real/aldinord.png" },
  { name: "Saturn", logo: "/images/retailers-real/saturn.svg" },
  { name: "Electronic4you", logo: "/images/retailers-real/electronic4you.png" },
  { name: "Vodafone", logo: "/images/retailers-real/vodafone.png" },
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
            className="max-h-12 md:max-h-16 max-w-[100px] md:max-w-[130px] object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
          />
        </div>
      ))}
    </div>
  );
}
