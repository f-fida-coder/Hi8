"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const heroSlides = [
  {
    id: 1,
    title: "DAILY",
    subtitle: "MISSION",
    description: "YOU PLAY! WE REWARD!",
    image: "/colorful-gaming-character-with-coins-and-treasures.png",
    background: "from-blue-500 via-blue-600 to-blue-700",
  },
  {
    id: 2,
    title: "EXCLUSIVE",
    subtitle: "Minigames",
    description: "WIN UP TO $5,888 + LUXURY GIFTS",
    image: "/luxury-casino-wheel-with-woman-dealer.png",
    background: "from-purple-600 via-purple-700 to-pink-700",
  },
  {
    id: 3,
    title: "REFERRAL",
    subtitle: "COMMISSION",
    description: "GET $80 + DAILY $1,888 COMMISSION",
    image: "/phone-with-refer-friend-app-and-golden-coins.png",
    background: "from-cyan-500 via-blue-600 to-blue-700",
  },
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  return (
    <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
            index === currentSlide ? "translate-x-0" : index < currentSlide ? "-translate-x-full" : "translate-x-full"
          }`}
        >
          <div className={`w-full h-full bg-gradient-to-r ${slide.background} relative overflow-hidden`}>
            {/* Content */}
            <div className="relative z-10 flex items-center justify-between h-full px-4 md:px-8 lg:px-16">
              <div className="text-white max-w-lg">
                <h1 className="text-4xl md:text-6xl font-bold mb-2 tracking-wider">{slide.title}</h1>
                <h2 className="text-2xl md:text-4xl font-light mb-4 italic">{slide.subtitle}</h2>
                <p className="text-lg md:text-xl mb-6 font-medium">{slide.description}</p>

                {/* Mobile Login Buttons - only show on mobile */}
                <div className="flex gap-4 md:hidden">
                  <button className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:from-cyan-500 hover:to-blue-600 transition-all">
                    Login
                  </button>
                  <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-blue-700 transition-all">
                    Join
                  </button>
                </div>
              </div>

              {/* Right side image/graphic */}
              <div className="hidden md:block">
                <Image
                  src={slide.image || "/placeholder.svg"}
                  alt="Game mockup"
                  width={300}
                  height={300}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Floating coins and decorative elements */}
            <div className="absolute top-10 right-20 animate-bounce">
              <div className="w-8 h-8 bg-yellow-400 rounded-full shadow-lg"></div>
            </div>
            <div className="absolute top-32 right-32 animate-pulse">
              <div className="w-6 h-6 bg-orange-400 rounded-full shadow-lg"></div>
            </div>
            <div className="absolute bottom-20 left-20 animate-bounce delay-300">
              <div className="w-10 h-10 bg-yellow-500 rounded-full shadow-lg"></div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows - hidden on mobile */}
      <button
        onClick={prevSlide}
        className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full transition-all"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full transition-all"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
          />
        ))}
      </div>
    </div>
  )
}
