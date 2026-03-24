"use client";

const customers = [
  { name: "Amazon", logo: "/images/logo-amazon-1-1.png", logoHover: "/images/logo-amazon-1.png" },
  { name: "eBay", logo: "/images/logo-Ebay-1.png", logoHover: "/images/logo-Ebay.png" },
  { name: "Metro", logo: "/images/metro-1.png", logoHover: "/images/metro.png" },
  { name: "Media Markt", logo: "/images/media-market-1.png", logoHover: "/images/media-market.png" },
  { name: "A1", logo: "/images/A1-1.png", logoHover: "/images/A1.png" },
  { name: "Decathlon", logo: "/images/Decathlon-1.png", logoHover: "/images/Decathlon.png" },
  { name: "Lidl", logo: "/images/lidl-1.png", logoHover: "/images/lidl.png" },
  { name: "Otto", logo: "/images/otto-3.png", logoHover: "/images/otto-orange-1.png" },
  { name: "Euronics", logo: "/images/Euronics-1.png", logoHover: "/images/Euronics.png" },
  { name: "Mobilcom Debitel", logo: "/images/Mobilcom-Debitel-1-1.png", logoHover: "/images/Mobilcom-Debitel-1.png" },
  { name: "Telefonica", logo: "/images/logo-Telefonica-1.png", logoHover: "/images/logo-Telefonica.png" },
  { name: "Yettel", logo: "/images/yettel-logo-1.png", logoHover: "/images/yettel-logo.png" },
  { name: "Notebooksbilliger.de", logo: "/images/notebooksbilliger.de-logo-1.png", logoHover: "/images/notebooksbilliger.de-logo.png" },
  { name: "Expert", logo: "/images/Expert_Logo-1-1.png", logoHover: "/images/Expert_Logo-1.png" },
  { name: "Tink", logo: "/images/tink-logo-1.png", logoHover: "/images/tink-logo.png" },
  { name: "1&1", logo: "/images/1_1_logo-1-1.png", logoHover: "/images/1_1_logo-1.png" },
  { name: "Aldi Süd", logo: "/images/aldi-sud-1.png", logoHover: "/images/aldi-sud.png" },
  { name: "Aldi Nord", logo: "/images/ALDI-Nord-Logo-2021.png", logoHover: "/images/ALDI-Nord.png" },
  { name: "Saturn", logo: "/images/saturn-1.png", logoHover: "/images/saturn.png" },
  { name: "Electronic 4 you", logo: "/images/electronic4you_logo_flat_normal-1-1.png", logoHover: "/images/electronic4you_logo_flat_normal-1.png" },
  { name: "Vodafone", logo: "/images/Vodafone_2017_logo-1-1.png", logoHover: "/images/Vodafone_2017_logo-1.png" },
];

export default function CustomerGrid() {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-6 md:gap-8 items-center justify-items-center">
      {customers.map((c) => (
        <div
          key={c.name}
          className="group relative w-full flex items-center justify-center h-16 md:h-20"
        >
          {/* Grayscale logo (default) */}
          <img
            src={c.logo}
            alt={c.name}
            className="max-h-12 md:max-h-16 max-w-[100px] md:max-w-[130px] object-contain opacity-60 group-hover:opacity-0 transition-opacity duration-300"
          />
          {/* Color logo (on hover) */}
          <img
            src={c.logoHover}
            alt={c.name}
            className="absolute inset-0 m-auto max-h-12 md:max-h-16 max-w-[100px] md:max-w-[130px] object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
        </div>
      ))}
    </div>
  );
}
