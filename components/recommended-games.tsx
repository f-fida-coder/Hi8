"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

const gameCategories = ["Casino", "Slots", "Sports", "E-Sports", "Fast Games", "Poker", "Fishing", "Lottery"]

const games = {
  Casino: [
    { id: 1, name: "Blackjack", image: "/game-blackjack.png", provider: "Evolution" },
    { id: 2, name: "Roulette", image: "/game-roulette.png", provider: "Pragmatic" },
    { id: 3, name: "Baccarat", image: "/game-baccarat.png", provider: "Evolution" },
    { id: 4, name: "Dragon Tiger", image: "/game-dragon-tiger.png", provider: "NetEnt" },
    { id: 5, name: "Sic Bo", image: "/game-sic-bo.png", provider: "Evolution" },
    { id: 6, name: "Live Dealer", image: "/game-live-dealer.png", provider: "Pragmatic" },
    { id: 7, name: "Poker", image: "/game-poker.png", provider: "NetEnt" },
    { id: 8, name: "Craps", image: "/game-craps.png", provider: "Evolution" },
  ],
  Slots: [
    { id: 9, name: "Mega Fortune", image: "/slot-mega-fortune.png", provider: "NetEnt" },
    { id: 10, name: "Starburst", image: "/slot-starburst.png", provider: "NetEnt" },
    { id: 11, name: "Fire Joker", image: "/slot-machine-fire-joker.png", provider: "Play'n GO" },
    { id: 12, name: "Book of Dead", image: "/ancient-egypt-slot-machine.png", provider: "Play'n GO" },
    { id: 13, name: "Golden Dragon", image: "/golden-dragon-slot-machine.png", provider: "Pragmatic" },
    { id: 14, name: "Fortune Coins", image: "/slot-machine-fortune-coins.png", provider: "NetEnt" },
  ],
  Sports: [
    { id: 15, name: "Football", image: "/sport-football.png", provider: "SportsBook" },
    { id: 16, name: "Basketball", image: "/sport-basketball.png", provider: "SportsBook" },
    { id: 17, name: "Tennis", image: "/sports-betting-football.png", provider: "SportsBook" },
    { id: 18, name: "Horse Racing", image: "/sport-football.png", provider: "SportsBook" },
  ],
  "E-Sports": [
    { id: 19, name: "DOTA 2 Tournament", image: "/esports-dota2-tournament.png", provider: "ESports" },
    { id: 20, name: "CS:GO Championship", image: "/placeholder.svg?height=200&width=300", provider: "ESports" },
    { id: 21, name: "League of Legends", image: "/placeholder.svg?height=200&width=300", provider: "ESports" },
    { id: 22, name: "Valorant Pro", image: "/placeholder.svg?height=200&width=300", provider: "ESports" },
  ],
  "Fast Games": [
    { id: 23, name: "Crash Game", image: "/placeholder.svg?height=200&width=300", provider: "Spribe" },
    { id: 24, name: "Aviator", image: "/placeholder.svg?height=200&width=300", provider: "Spribe" },
    { id: 25, name: "Plinko", image: "/placeholder.svg?height=200&width=300", provider: "BGaming" },
    { id: 26, name: "Mines", image: "/placeholder.svg?height=200&width=300", provider: "BGaming" },
  ],
  Poker: [
    { id: 27, name: "Texas Hold'em", image: "/placeholder.svg?height=200&width=300", provider: "PokerStars" },
    { id: 28, name: "Omaha Poker", image: "/placeholder.svg?height=200&width=300", provider: "PokerStars" },
    { id: 29, name: "Caribbean Stud", image: "/placeholder.svg?height=200&width=300", provider: "Evolution" },
    { id: 30, name: "Three Card Poker", image: "/placeholder.svg?height=200&width=300", provider: "Evolution" },
  ],
  Fishing: [
    { id: 31, name: "Ocean King", image: "/placeholder.svg?height=200&width=300", provider: "JDB" },
    { id: 32, name: "Fish Hunter", image: "/placeholder.svg?height=200&width=300", provider: "JDB" },
    { id: 33, name: "Golden Toad", image: "/placeholder.svg?height=200&width=300", provider: "CQ9" },
    { id: 34, name: "Dragon Fortune", image: "/placeholder.svg?height=200&width=300", provider: "CQ9" },
  ],
  Lottery: [
    { id: 35, name: "Daily Draw", image: "/placeholder.svg?height=200&width=300", provider: "Lottery" },
    { id: 36, name: "Mega Millions", image: "/placeholder.svg?height=200&width=300", provider: "Lottery" },
    { id: 37, name: "Scratch Cards", image: "/placeholder.svg?height=200&width=300", provider: "Lottery" },
    { id: 38, name: "Keno Live", image: "/placeholder.svg?height=200&width=300", provider: "Lottery" },
  ],
}

export default function RecommendedGames() {
  const [activeCategory, setActiveCategory] = useState("Casino")

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Recommended Games</h2>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {gameCategories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={`${
                activeCategory === category
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "border-gray-300 text-gray-700 hover:bg-gray-100 bg-white"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6">
          {games[activeCategory as keyof typeof games]?.map((game) => (
            <div key={game.id} className="flex flex-col items-center group cursor-pointer">
              <div className="relative mb-3">
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-gray-200 group-hover:border-blue-500 transition-colors duration-300">
                  <img
                    src={game.image || "/placeholder.svg"}
                    alt={game.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 rounded-full transition-colors duration-300" />
              </div>
              <h3 className="text-sm font-medium text-gray-800 text-center leading-tight">{game.name}</h3>
              <p className="text-xs text-gray-500 mt-1">{game.provider}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-white">
            View All Games
          </Button>
        </div>
      </div>
    </section>
  )
}
