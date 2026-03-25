"use client";

const brands = [
  { name: "Xiaomi", logo: "Xiaomi.png" },
  { name: "OPPO", logo: "OPPO_logo-1.png" },
  { name: "POCO", logo: "poco1.png" },
  { name: "Amazfit", logo: "amazfit.png" },
  { name: "Realme", logo: "realme-logo.png" },
  { name: "OnePlus", logo: "icon-brand-oneplus.png" },
  { name: "Oclean", logo: "oclean-logo.png" },
  { name: "Anker", logo: "anker.png" },
  { name: "Nothing", logo: "Nothing.png" },
  { name: "Roborock", logo: "Group.svg" },
  { name: "Narwal", logo: "Narwal-1.svg" },
  { name: "IMIKI", logo: "Imiki.svg" },
  { name: "RENPHO", logo: "Renpro.svg" },
  { name: "DYU", logo: "DYU.svg" },
  { name: "Govee", logo: "Mask-group-2.svg" },
  { name: "MYVU", logo: "MYVU.svg" },
  { name: "SFP", logo: "SFP-1.svg" },
  { name: "Panasonic", logo: "Panasonic.svg" },
  { name: "HMD", logo: "HMD.svg" },
  { name: "Sony", logo: "sony.svg" },
  { name: "DJI ROMO", logo: "DJI-ROMO.svg" },
  { name: "Tecno", logo: "Tecno.png" },
  { name: "Aqara", logo: "aqara_logo_white-1-2.png" },
  { name: "Zepp", logo: "zepp.png" },
  { name: "Enabot", logo: "logo-enabot.png" },
  { name: "Haylou", logo: "Haylou-1.png" },
  { name: "Mibro", logo: "mibro-logo.png" },
  { name: "Viomi", logo: "viomi-2-1.png" },
];

export default function BrandGrid() {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-4 md:gap-6" role="list" aria-label="Partner brands">
      {brands.map((brand) => (
        <div
          key={brand.name}
          role="listitem"
          className="aspect-[3/2] bg-white rounded-xl border border-gray-200 hover:shadow-lg hover:border-gray-300 transition-all flex items-center justify-center p-4"
        >
          <img
            src={`/images/${brand.logo}`}
            alt={`${brand.name} logo`}
            loading="lazy"
            width={120}
            height={60}
            className="max-h-10 md:max-h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = "none";
              target.parentElement!.innerHTML = `<span class="text-xs font-semibold text-gray-400">${brand.name}</span>`;
            }}
          />
        </div>
      ))}
    </div>
  );
}
