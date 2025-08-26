"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Menu, X, Eye, EyeOff, ChevronDown } from "lucide-react"
import { useAuth } from "@/hooks/use-auth"
import Link from "next/link"


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const { isAuthenticated, login, logout } = useAuth()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await login(username, password)
    } catch (error) {
      console.error("Login failed:", error)
    }
  }

  const gameCategories = {
    casino: [
      { name: "MT Live", image: "/casino1.png" },
      { name: "Sexy Baccarat", image: "/casino2.png" },
      { name: "On Casino", image: "/casino3.png" },
      { name: "Evolution Gaming", image: "/casino4.png" },
      { name: "SA Gaming", image: "/casino5.png" },
      { name: "Pragmatic Play", image: "/casino6.png" },
      { name: "Dream Gaming", image: "/casino7.png" },
      { name: "WE Casino", image: "/casino8.png" },
      { name: "Via Casino", image: "/casino9.png" },
      { name: "WMCasino", image: "/casino10.png" },
      { name: "Ezugi", image: "/casino11.png" },
      { name: "Yeebet Live", image: "/casino12.png" },
    ],
    slots: [
      { name: "Pragmatic Play", image: "/slots1.png" },
      { name: "Play'n GO", image: "/slots2.png" },
      { name: "NetEnt", image: "/slots3.png" },
      { name: "Microgaming", image: "/slots4.png" },
      { name: "Red Tiger", image: "/slots5.png" },
      { name: "Push Gaming", image: "/slots6.png" },
      { name: "Quickspin", image: "/slots7.png" },
      { name: "Yggdrasil", image: "/slots8.png" },
      { name: "Big Time Gaming", image: "/slots9.png" },
      { name: "Thunderkick", image: "/slots10.png" },
      { name: "Nolimit City", image: "/slots11.png" },
      { name: "Hacksaw Gaming", image: "/slots12.png" },
    ],
    sports: [
      { name: "SBO Sports", image: "/sport2.png" },
      { name: "CMD368", image: "/sports2.png" },
    ],
    fastGames: [
      { name: "Aviator", image: "/fast1.png" },
      { name: "Crash", image: "/fast2.png" },
    ],
    poker: [
      { name: "Texas Hold'em", image: "/poker1.png" },
    ],
    fishing: [
      { name: "Ocean King", image: "/fishing1.png" },
      { name: "Fishing War", image: "/fishing2.png" },
    ],
    lottery: [
      { name: "Powerball", image: "/lottery1.png" },
    ],
  }

  return (
    <>
      {/* Top Header - White background with login form */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <img src="/logo.png" alt="HEY8" className="h-10 w-auto" />
            </div>

            {/* Desktop Login Form */}
            <div className="hidden lg:flex items-center space-x-4">
              <a href="#" className="text-red-500 hover:text-red-600 text-sm">
                Forgot Password?
              </a>

              {!isAuthenticated ? (
                <form onSubmit={handleLogin} className="flex items-center space-x-3">
                  <Input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-32 h-9 text-sm"
                  />
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-32 h-9 text-sm pr-8"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                  <Button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-6 h-9">
                    Login
                  </Button>
                  <Button type="button" className="bg-blue-600 hover:bg-blue-700 text-white px-6 h-9">
                    Join Now
                  </Button>
                </form>
              ) : (
                <div className="flex items-center space-x-3">
                  <span className="text-sm text-gray-600">Welcome back!</span>
                  <Button onClick={logout} className="bg-red-600 hover:bg-red-700 text-white px-4 h-9">
                    Logout
                  </Button>
                </div>
              )}
            </div>

            {/* Timestamp */}
            <div className="hidden lg:block text-sm text-gray-600">
              {new Date().toLocaleString("en-SG", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                timeZone: "Asia/Singapore",
                hour12: false,
              })}{" "}
              (GMT+8)
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-600 hover:bg-gray-100 lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </header>

      {/* Navigation Bar - Blue gradient */}
      <nav className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 shadow-md relative">
        <div className="container mx-auto px-4">
          <div className="hidden lg:flex items-center h-12 space-x-8">
            <a href="/" className="flex items-center text-white hover:text-yellow-300 font-medium">
              🏠 Home
            </a>

            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("casino")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link href="/casino" className="flex items-center text-white hover:text-yellow-300 font-medium">
  🎰 Casino
  <span className="ml-1 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded">HOT</span>
  <ChevronDown className="ml-1 h-4 w-4" />
</Link>

              {activeDropdown === "casino" && (
                <div className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-xl border p-4 z-50 w-96">
                  <div className="grid grid-cols-6 gap-3">
                    {gameCategories.casino.map((game, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center p-2 hover:bg-gray-50 rounded-lg cursor-pointer"
                      >
                        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-200 mb-1">
                          <img
                            src={game.image || "/placeholder.svg"}
                            alt={game.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="text-xs text-gray-700 text-center leading-tight">{game.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("slots")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link href="/slots" className="flex items-center text-white hover:text-yellow-300 font-medium">
                🎲 Slots
                <span className="ml-1 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded">HOT</span>
                <ChevronDown className="ml-1 h-4 w-4" />
              </Link>

              {activeDropdown === "slots" && (
                <div className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-xl border p-4 z-50 w-96">
                  <div className="grid grid-cols-6 gap-3">
                    {gameCategories.slots.map((game, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center p-2 hover:bg-gray-50 rounded-lg cursor-pointer"
                      >
                        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-200 mb-1">
                          <img
                            src={game.image || "/placeholder.svg"}
                            alt={game.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="text-xs text-gray-700 text-center leading-tight">{game.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("sports")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a href="#" className="flex items-center text-white hover:text-yellow-300 font-medium">
                Sports
                <ChevronDown className="ml-1 h-4 w-4" />
              </a>

              {activeDropdown === "sports" && (
                <div className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-xl border p-4 z-50 w-96">
                  <div className="grid grid-cols-6 gap-3">
                    {gameCategories.sports.map((game, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center p-2 hover:bg-gray-50 rounded-lg cursor-pointer"
                      >
                        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-200 mb-1">
                          <img
                            src={game.image || "/placeholder.svg"}
                            alt={game.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="text-xs text-gray-700 text-center leading-tight">{game.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a href="#" className="text-white hover:text-yellow-300 font-medium">
              E-Sports
            </a>
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("fastGames")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a href="#" className="flex items-center text-white hover:text-yellow-300 font-medium">
                Fast Games
                <ChevronDown className="ml-1 h-4 w-4" />
              </a>

              {activeDropdown === "fastGames" && (
                <div className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-xl border p-4 z-50 w-96">
                  <div className="grid grid-cols-6 gap-3">
                    {gameCategories.fastGames.map((game, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center p-2 hover:bg-gray-50 rounded-lg cursor-pointer"
                      >
                        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-200 mb-1">
                          <img
                            src={game.image || "/placeholder.svg"}
                            alt={game.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="text-xs text-gray-700 text-center leading-tight">{game.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("poker")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a href="#" className="flex items-center text-white hover:text-yellow-300 font-medium">
                Poker
                <ChevronDown className="ml-1 h-4 w-4" />
              </a>

              {activeDropdown === "poker" && (
                <div className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-xl border p-4 z-50 w-96">
                  <div className="grid grid-cols-6 gap-3">
                    {gameCategories.poker.map((game, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center p-2 hover:bg-gray-50 rounded-lg cursor-pointer"
                      >
                        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-200 mb-1">
                          <img
                            src={game.image || "/placeholder.svg"}
                            alt={game.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="text-xs text-gray-700 text-center leading-tight">{game.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("fishing")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a href="#" className="flex items-center text-white hover:text-yellow-300 font-medium">
                Fishing
                <ChevronDown className="ml-1 h-4 w-4" />
              </a>

              {activeDropdown === "fishing" && (
                <div className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-xl border p-4 z-50 w-96">
                  <div className="grid grid-cols-6 gap-3">
                    {gameCategories.fishing.map((game, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center p-2 hover:bg-gray-50 rounded-lg cursor-pointer"
                      >
                        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-200 mb-1">
                          <img
                            src={game.image || "/placeholder.svg"}
                            alt={game.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="text-xs text-gray-700 text-center leading-tight">{game.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("lottery")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a href="#" className="flex items-center text-white hover:text-yellow-300 font-medium">
                Lottery
                <ChevronDown className="ml-1 h-4 w-4" />
              </a>

              {activeDropdown === "lottery" && (
                <div className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-xl border p-4 z-50 w-96">
                  <div className="grid grid-cols-6 gap-3">
                    {gameCategories.lottery.map((game, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center p-2 hover:bg-gray-50 rounded-lg cursor-pointer"
                      >
                        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-200 mb-1">
                          <img
                            src={game.image || "/placeholder.svg"}
                            alt={game.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="text-xs text-gray-700 text-center leading-tight">{game.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <a href="#" className="text-white hover:text-yellow-300 font-medium">
              Promotion
            </a>
            <a href="#" className="flex items-center text-white hover:text-yellow-300 font-medium">
              Events
              <span className="ml-1 bg-green-500 text-white text-xs px-1.5 py-0.5 rounded">New</span>
            </a>
            <a href="#" className="text-white hover:text-yellow-300 font-medium">
              TV
            </a>
            <a href="#" className="flex items-center text-white hover:text-yellow-300 font-medium">
              Score
              <span className="ml-1 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded">HOT</span>
            </a>
            <a href="#" className="text-white hover:text-yellow-300 font-medium">
              VIP
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-blue-600 border-t border-blue-500">
          <div className="container mx-auto px-4 py-4">
            <div className="space-y-3">
              {!isAuthenticated && (
                <form onSubmit={handleLogin} className="space-y-3 pb-4 border-b border-blue-500">
                  <Input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full"
                  />
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                  <div className="flex space-x-2">
                    <Button type="submit" className="flex-1 bg-blue-500 hover:bg-blue-600 text-white">
                      Login
                    </Button>
                    <Button type="button" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
                      Join Now
                    </Button>
                  </div>
                </form>
              )}

              <a href="/" className="block text-white hover:text-yellow-300 font-medium py-2">
                🏠 Home
              </a>
              <a href="/casino" className="block text-white hover:text-yellow-300 font-medium py-2">
                🎰 Casino HOT
              </a>
              <a href="/slots" className="block text-white hover:text-yellow-300 font-medium py-2">
                🎲 Slots HOT
              </a>
              <a href="#" className="block text-white hover:text-yellow-300 font-medium py-2">
                Sports
              </a>
              <a href="#" className="block text-white hover:text-yellow-300 font-medium py-2">
                E-Sports
              </a>
              <a href="#" className="block text-white hover:text-yellow-300 font-medium py-2">
                Fast Games
              </a>
              <a href="#" className="block text-white hover:text-yellow-300 font-medium py-2">
                Poker
              </a>
              <a href="#" className="block text-white hover:text-yellow-300 font-medium py-2">
                Fishing
              </a>
              <a href="#" className="block text-white hover:text-yellow-300 font-medium py-2">
                Lottery
              </a>
              <a href="#" className="block text-white hover:text-yellow-300 font-medium py-2">
                Promotion
              </a>
              <a href="#" className="block text-white hover:text-yellow-300 font-medium py-2">
                Events New
              </a>
              <a href="#" className="block text-white hover:text-yellow-300 font-medium py-2">
                TV
              </a>
              <a href="#" className="block text-white hover:text-yellow-300 font-medium py-2">
                Score HOT
              </a>
              <a href="#" className="block text-white hover:text-yellow-300 font-medium py-2">
                VIP
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
