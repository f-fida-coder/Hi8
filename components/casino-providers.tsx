"use client"

import Image from "next/image"

const providers = [
  { name: "MT Live", image: "/games/mt-live.png", isNew: true },
  { name: "Sexy Baccarat", image: "/games/sexy-baccarat.png", isHot: true },
  { name: "On Casino", image: "/games/on-casino.png", isNew: true },
  { name: "Evolution Gaming", image: "/games/evolution.png", isNew: true },
  { name: "SA Gaming", image: "/games/sa-gaming.png", isHot: true },
  { name: "Pragmatic Play", image: "/games/pragmatic.png", isVip: true },
  { name: "Dream Gaming", image: "/games/dream-gaming.png", isVip: true },
  { name: "WE Casino", image: "/games/we-casino.png", isNew: true },
]

export default function CasinoProviders() {
  return (
    <section className="px-4 py-6 bg-white">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Casino</h2>
      <div className="grid grid-cols-4 gap-4">
        {providers.map((provider, index) => (
          <div key={index} className="relative">
            <div className="relative w-full aspect-square rounded-full overflow-hidden border-2 border-gray-200">
              <Image src={provider.image || "/placeholder.svg"} alt={provider.name} fill className="object-cover" />
              {provider.isNew && (
                <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full font-bold">
                  NEW
                </div>
              )}
              {provider.isHot && (
                <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full font-bold">
                  HOT
                </div>
              )}
              {provider.isVip && (
                <div className="absolute -top-1 -right-1 bg-purple-500 text-white text-xs px-1.5 py-0.5 rounded-full font-bold">
                  VIP
                </div>
              )}
            </div>
            <p className="text-xs text-center mt-2 text-gray-700 font-medium">{provider.name}</p>
          </div>
        ))}
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center mt-6 space-x-2">
        <div className="w-8 h-1 bg-blue-500 rounded-full"></div>
        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
      </div>
    </section>
  )
}
