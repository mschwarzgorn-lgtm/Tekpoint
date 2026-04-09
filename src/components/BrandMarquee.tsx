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
  { name: "Zepp", logo: "zepp.png" },
];

const row1 = brands.slice(0, 13);
const row2 = brands.slice(13);

function MarqueeRow({
  items,
  reverse = false,
  speed = 35,
}: {
  items: typeof brands;
  reverse?: boolean;
  speed?: number;
}) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden">
      <div
        className="flex gap-6 w-max marquee-track"
        style={{
          animation: `marquee-scroll ${speed}s linear infinite`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {doubled.map((brand, i) => (
          <div
            key={`${brand.name}-${i}`}
            className="flex-shrink-0 w-36 h-20 bg-white rounded-xl border border-gray-100 flex items-center justify-center p-4"
          >
            <img
              src={`/images/${brand.logo}`}
              alt={brand.name}
              loading="lazy"
              className="max-h-9 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
                target.parentElement!.innerHTML = `<span class="text-xs font-semibold text-gray-400">${brand.name}</span>`;
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function BrandMarquee() {
  return (
    <div className="relative" role="list" aria-label="Partner brands">
      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-gray-50 to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-gray-50 to-transparent z-10" />

      <div className="space-y-4">
        <MarqueeRow items={row1} speed={35} />
        <MarqueeRow items={row2} reverse speed={40} />
      </div>
    </div>
  );
}
