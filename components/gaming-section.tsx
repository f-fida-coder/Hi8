"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const mainGames = [
  {
    title: "Mahjong Phoenix",
    image: "/mahjong-phoenix-colorful-game-with-rainbow-and-pho.png",
  },
  {
    title: "Dragon Fortune",
    image: "/dragon-fortune-slot-game-with-gold-coins.png",
  },
  {
    title: "Lucky Gems",
    image: "/lucky-gems-casino-game-with-sparkling-jewels.png",
  },
]

const gameProviders = [
  { name: "MT Live", badge: "NEW", badgeColor: "bg-gray-500" },
  { name: "Sexy Baccarat", badge: "HOT", badgeColor: "bg-red-500" },
  { name: "On Casino", badge: "", badgeColor: "" },
  { name: "Evolution Gaming", badge: "HOT", badgeColor: "bg-red-500" },
  { name: "SA Gaming", badge: "HOT", badgeColor: "bg-red-500" },
  { name: "Pragmatic Play", badge: "VIP", badgeColor: "bg-purple-500" },
  { name: "Dream Gaming", badge: "VIP", badgeColor: "bg-purple-500" },
  { name: "WE Casino", badge: "NEW", badgeColor: "bg-green-500" },
  { name: "Via Casino", badge: "NEW", badgeColor: "bg-green-500" },
  { name: "WMCasino", badge: "", badgeColor: "" },
]

// Generate 8 random images for each provider
const generateProviderImages = (providerName: string) => {
  return Array.from(
    { length: 8 },
    (_, index) =>
      `/placeholder.svg?height=80&width=80&query=${providerName.toLowerCase().replace(" ", "-")}-gaming-logo-${index + 1}`,
  )
}

export default function GamingSection() {
  const [currentMainGame, setCurrentMainGame] = useState(0)
  const [currentProviderPage, setCurrentProviderPage] = useState(0)
  const [providerImages, setProviderImages] = useState<{ [key: string]: string[] }>({})

  useEffect(() => {
    // Generate images for each provider
    const images: { [key: string]: string[] } = {}
    gameProviders.forEach((provider) => {
      images[provider.name] = generateProviderImages(provider.name)
    })
    setProviderImages(images)
  }, [])

  const nextMainGame = () => {
    setCurrentMainGame((prev) => (prev + 1) % mainGames.length)
  }

  const prevMainGame = () => {
    setCurrentMainGame((prev) => (prev - 1 + mainGames.length) % mainGames.length)
  }

  const nextProviderPage = () => {
    setCurrentProviderPage((prev) => (prev + 1) % 8) // 8 pages of images
  }

  const prevProviderPage = () => {
    setCurrentProviderPage((prev) => (prev - 1 + 8) % 8)
  }

  return (
    <div className="w-full bg-gray-50 py-6">
      <div className="max-w-7xl mx-auto px-4">
        {/* Navigation Header */}
        <div className="bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3">
          <div className="flex space-x-8 text-white">
            <div className="text-white font-medium border-b-2 border-white pb-1">Recommended Games</div>
            <div className="text-white/80 hover:text-white cursor-pointer">Casino</div>
            <div className="text-white/80 hover:text-white cursor-pointer">Slots</div>
            <div className="text-white/80 hover:text-white cursor-pointer">Sports</div>
            <div className="text-white/80 hover:text-white cursor-pointer">E-Sports</div>
            <div className="text-white/80 hover:text-white cursor-pointer">Fast Games</div>
            <div className="text-white/80 hover:text-white cursor-pointer">Poker</div>
            <div className="text-white/80 hover:text-white cursor-pointer">Fishing</div>
            <div className="text-white/80 hover:text-white cursor-pointer">Lottery</div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex gap-6 p-6 bg-white">
          {/* Left Side - Main Game Slider */}
          <div className="flex-shrink-0">
            <div className="relative w-64 h-80 bg-white rounded-lg overflow-hidden shadow-lg">
              <img
                src={mainGames[currentMainGame].image || "/placeholder.svg"}
                alt={mainGames[currentMainGame].title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={prevMainGame}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-1 rounded-full hover:bg-black/70"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={nextMainGame}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-1 rounded-full hover:bg-black/70"
              >
                <ChevronRight size={16} />
              </button>
            </div>

            {/* Game Title */}
            <div className="text-center mt-3 font-medium text-gray-700">{mainGames[currentMainGame].title}</div>

            {/* Slider Dots */}
            <div className="flex justify-center mt-2 space-x-2">
              {mainGames.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentMainGame(index)}
                  className={`w-2 h-2 rounded-full ${index === currentMainGame ? "bg-cyan-500" : "bg-gray-300"}`}
                />
              ))}
            </div>
          </div>

          {/* Right Side - Game Providers Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-5 gap-4">
              {gameProviders.map((provider, index) => {
                const currentImage =
                  providerImages[provider.name]?.[currentProviderPage] ||
                  `/placeholder.svg?height=80&width=80&query=${provider.name.toLowerCase().replace(" ", "-")}-gaming-logo`

                return (
                  <div key={provider.name} className="relative">
                    <div className="w-20 h-20 rounded-full overflow-hidden bg-white shadow-md border-2 border-gray-200 hover:border-cyan-400 cursor-pointer transition-colors">
                      <img
                        src={currentImage || "/placeholder.svg"}
                        alt={provider.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Badge */}
                    {provider.badge && (
                      <div
                        className={`absolute -top-1 -right-1 ${provider.badgeColor} text-white text-xs px-1.5 py-0.5 rounded-full font-bold`}
                      >
                        {provider.badge}
                      </div>
                    )}

                    {/* Provider Name */}
                    <div className="text-center mt-2 text-sm text-gray-600 font-medium">{provider.name}</div>
                  </div>
                )
              })}
            </div>

            {/* Provider Grid Slider Dots */}
            <div className="flex justify-center mt-4 space-x-2">
              {Array.from({ length: 8 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProviderPage(index)}
                  className={`w-2 h-2 rounded-full ${index === currentProviderPage ? "bg-cyan-500" : "bg-gray-300"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
