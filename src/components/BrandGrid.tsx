"use client";

const brands = [
  { name: "Roborock", logo: "Group.svg" },
  { name: "Mi Scooter", logo: "brands/mi-scooter.svg" },
  { name: "Xiaomi", logo: "Xiaomi.png" },
  { name: "Mi Eco", logo: "brands/mi-eco.svg" },
  { name: "Nothing", logo: "Nothing.png" },
  { name: "Amazfit", logo: "amazfit.png" },
  { name: "RENPHO", logo: "Renpro.svg" },
  { name: "Govee", logo: "Mask-group-2.svg" },
  { name: "POCO", logo: "poco1.png" },
  { name: "ANTHBOT", logo: "brands/anthbot.svg" },
  { name: "Realme", logo: "realme-logo.png" },
  { name: "DJI ROMO", logo: "DJI-ROMO.svg" },
  { name: "DYU", logo: "DYU.svg" },
  { name: "Oclean", logo: "oclean-logo.png" },
  { name: "OPPO", logo: "OPPO_logo-1.png" },
  { name: "Narwal", logo: "Narwal-1.svg" },
  { name: "Honor", logo: "brands/honor.svg" },
  { name: "Levoit", logo: "brands/levoit.svg" },
  { name: "Motorola", logo: "brands/motorola.svg" },
  { name: "Navimow", logo: "brands/navimow.svg" },
  { name: "NIU", logo: "brands/niu.svg" },
  { name: "SFP", logo: "SFP-1.svg" },
  { name: "Anker", logo: "anker.png" },
  { name: "IMIKI", logo: "Imiki.svg" },
  { name: "eufy", logo: "brands/eufy.svg" },
  { name: "Rokid", logo: "brands/rokid.svg" },
  { name: "Harmonix", logo: "brands/harmonix.png" },
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
            className="max-h-10 md:max-h-12 w-auto object-contain opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-300"
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
