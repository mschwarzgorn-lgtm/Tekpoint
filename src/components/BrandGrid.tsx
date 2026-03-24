"use client";

const brands = [
  "Alcatel", "TCL", "Motorola", "Gigaset", "Wiko", "Emporia",
  "Honor", "OnePlus", "Nothing", "realme", "Fairphone", "Cat"
];

export default function BrandGrid() {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 md:gap-8">
      {brands.map((brand) => (
        <div
          key={brand}
          className="aspect-[3/2] bg-white rounded-xl border border-gray-200 hover:shadow-md transition-shadow flex items-center justify-center p-4"
        >
          <img
            src={`/images/brands/${brand.toLowerCase().replace(/ /g, '-')}-logo.png`}
            alt={brand}
            className="max-h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              target.parentElement!.innerHTML = `<span class="text-sm font-medium text-gray-400">${brand}</span>`;
            }}
          />
        </div>
      ))}
    </div>
  );
}
