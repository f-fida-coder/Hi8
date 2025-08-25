"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"

const liveGames = [
  {
    id: 1,
    name: "SALON PRIVE BLACKJACK",
    provider: "Evolution",
    bg: "from-purple-600 to-purple-800",
    image: "/elegant-blonde-woman-dealer-in-luxury-casino.png",
  },
  {
    id: 2,
    name: "SPEED ROULETTE",
    provider: "Evolution",
    bg: "from-green-600 to-green-800",
    image: "/brunette-woman-dealer-at-roulette-table.png",
  },
  {
    id: 3,
    name: "SALON PRIVE BLACKJACK",
    provider: "Evolution",
    bg: "from-red-600 to-red-800",
    image: "/red-dress-woman-dealer-at-blackjack-table.png",
  },
  {
    id: 4,
    name: "SPEED ROULETTE",
    provider: "Evolution",
    bg: "from-orange-600 to-orange-800",
    image: "/elegant-woman-dealer-in-brown-casino-setting.png",
  },
  {
    id: 5,
    name: "DREAM CATCHER",
    provider: "Evolution",
    bg: "from-blue-600 to-blue-800",
    image: "/man-dealer-with-colorful-wheel-game-show.png",
  },
]

export default function RecommendedLiveCasino() {
  const sliderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return

    const scrollWidth = slider.scrollWidth
    const clientWidth = slider.clientWidth
    let scrollPosition = 0

    const scroll = () => {
      scrollPosition += 0.5
      if (scrollPosition >= scrollWidth - clientWidth) {
        scrollPosition = 0
      }
      slider.scrollLeft = scrollPosition
    }

    const interval = setInterval(scroll, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full bg-gray-50 py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
          <h2 className="text-xl font-bold text-gray-900">Recommended Live Casino</h2>
        </div>

        <div ref={sliderRef} className="flex gap-4 overflow-hidden" style={{ scrollBehavior: "smooth" }}>
          {/* Duplicate games for infinite scroll */}
          {[...liveGames, ...liveGames, ...liveGames].map((game, index) => (
            <div
              key={`${game.id}-${index}`}
              className={`flex-shrink-0 w-64 h-32 rounded-lg bg-gradient-to-br ${game.bg} relative overflow-hidden cursor-pointer hover:scale-105 transition-transform`}
            >
              {/* Background dealer image */}
              <div className="absolute inset-0">
                <Image
                  src={game.image || "/placeholder.svg"}
                  alt={game.name}
                  fill
                  className="object-cover opacity-80"
                />
              </div>

              {/* Game info overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-4">
                <h3 className="text-white font-bold text-sm mb-1">{game.name}</h3>
                <p className="text-white/90 text-xs">{game.provider}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
