"use client"

const categories = [
  { name: "Casino", icon: CasinoIcon, hot: true },
  { name: "Slots", icon: SlotsIcon, hot: true },
  { name: "Sports", icon: SportsIcon, hot: false },
  { name: "E-Sports", icon: EsportsIcon, hot: false },
  { name: "Fast Games", icon: FastGamesIcon, hot: false },
  { name: "Poker", icon: PokerIcon, hot: false },
  { name: "Fishing", icon: FishingIcon, hot: false },
  { name: "Lottery", icon: LotteryIcon, hot: false },
]

function CasinoIcon() {
  return (
    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
    </svg>
  )
}

function SlotsIcon() {
  return (
    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
    </svg>
  )
}

function SportsIcon() {
  return (
    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
    </svg>
  )
}

function EsportsIcon() {
  return (
    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M21.58 16.09l-1.09-7.66C20.21 6.46 18.52 5 16.53 5H7.47C5.48 5 3.79 6.46 3.51 8.43l-1.09 7.66C2.2 17.63 3.39 19 4.94 19c.68 0 1.32-.27 1.8-.75L9 16h6l2.25 2.25c.48.48 1.12.75 1.8.75 1.56 0 2.75-1.37 2.53-2.91zM11 11H9v2H8v-2H6v-1h2V8h1v2h2v1zm4.5 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm2-3c-.83 0-1.5-.67-1.5-1.5S16.67 6 17.5 6 19 6.67 19 7.5 18.33 8 17.5 8z" />
    </svg>
  )
}

function FastGamesIcon() {
  return (
    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M13 1v3l.5 2 .5.5.5.5.5 2v3l-.5 2-.5.5-.5.5-.5 2v3l-1 1-1-1v-3l-.5-2-.5-.5-.5-.5-.5-2v-3l.5-2 .5-.5.5-.5.5-2V1l1-1 1 1z" />
    </svg>
  )
}

function PokerIcon() {
  return (
    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M21.47 4.35l-1.34-.56v9.03l2.43-5.86c.41-1.02-.06-2.19-1.09-2.61zm-19.5 3.7L6.93 20a2 2 0 0 0 1.81 1.25c.06 0 .12 0 .19-.01L21 18.95c.62-.1 1.04-.65.94-1.27-.1-.62-.65-1.04-1.27-.94l-11.92 2.03L4.57 7.33l16.15-2.8c.62-.11 1.04-.66.94-1.28-.11-.61-.66-1.03-1.28-.93L3.94 5.05c-.62.1-1.04.65-.94 1.27.06.35.25.65.51.84.21.15.46.22.71.22.07 0 .14-.01.21-.02z" />
    </svg>
  )
}

function FishingIcon() {
  return (
    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 10.9c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1c.61 0 1.1-.49 1.1-1.1s-.49-1.1-1.1-1.1zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.19 12.19L6 18l3.81-8.19L18 6l-3.81 8.19z" />
    </svg>
  )
}

function LotteryIcon() {
  return (
    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z" />
    </svg>
  )
}

export default function GamingCategories() {
  return (
    <div className="bg-gradient-to-b from-blue-800 to-blue-900 py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-4 gap-3 max-w-sm mx-auto lg:max-w-none lg:grid-cols-8 lg:gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-blue-700/50 border border-blue-600 hover:bg-blue-600/50 transition-colors cursor-pointer group rounded-lg"
            >
              <div className="p-3 text-center">
                <div className="relative mb-2">
                  <div className="flex justify-center mb-2 group-hover:scale-110 transition-transform">
                    <category.icon />
                  </div>
                  {category.hot && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full font-bold">
                      HOT
                    </span>
                  )}
                </div>
                <p className="text-white text-xs lg:text-sm font-medium">{category.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
