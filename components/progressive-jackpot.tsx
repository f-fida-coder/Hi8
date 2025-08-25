"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function ProgressiveJackpot() {
  const [jackpotAmount, setJackpotAmount] = useState("630,983.49")

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIncrease = Math.random() * 10
      const currentAmount = Number.parseFloat(jackpotAmount.replace(/,/g, ""))
      const newAmount = (currentAmount + randomIncrease).toFixed(2)
      setJackpotAmount(newAmount.replace(/\B(?=(\d{3})+(?!\d))/g, ","))
    }, 3000)

    return () => clearInterval(interval)
  }, [jackpotAmount])

  return (
    <div className="w-full bg-gradient-to-r from-orange-500 via-red-600 to-purple-700 py-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex items-center justify-between">
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">PROGRESSIVE</h2>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">JACKPOT</h3>
            <div className="flex items-center gap-2">
              <span className="text-lg">$</span>
              <div className="bg-black text-white px-4 py-2 rounded font-mono text-2xl md:text-3xl font-bold">
                {jackpotAmount}
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <Image
              src="/colorful-gaming-character-with-coins-and-treasures.png"
              alt="Fantasy character with treasures"
              width={300}
              height={200}
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Floating coins animation */}
      <div className="absolute top-4 right-20 animate-bounce">
        <div className="w-6 h-6 bg-yellow-400 rounded-full shadow-lg"></div>
      </div>
      <div className="absolute bottom-8 left-16 animate-pulse">
        <div className="w-8 h-8 bg-orange-400 rounded-full shadow-lg"></div>
      </div>
    </div>
  )
}
