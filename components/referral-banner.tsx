"use client"

import { Button } from "@/components/ui/button"

export default function ReferralBanner() {
  return (
    <div className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 relative overflow-hidden">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between">
          {/* Left side - Text content */}
          <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-6">
              REFERRAL
              <br />
              COMMISSION
            </h1>
            <p className="text-xl lg:text-2xl text-white font-semibold mb-8">GET $80 + DAILY $1,888 COMMISSION</p>

            {/* Carousel dots indicator */}
            <div className="flex justify-center lg:justify-start space-x-2 mb-6">
              <div className="w-2 h-2 bg-white/50 rounded-full"></div>
              <div className="w-2 h-2 bg-white/50 rounded-full"></div>
              <div className="w-2 h-2 bg-white/50 rounded-full"></div>
              <div className="w-8 h-2 bg-white rounded-full"></div>
              <div className="w-2 h-2 bg-white/50 rounded-full"></div>
              <div className="w-2 h-2 bg-white/50 rounded-full"></div>
              <div className="w-2 h-2 bg-white/50 rounded-full"></div>
            </div>
          </div>

          {/* Right side - Phone mockup and graphics */}
          <div className="lg:w-1/2 relative flex justify-center">
            {/* Floating coins */}
            <div className="absolute top-0 left-1/4 w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
              <span className="text-2xl font-bold text-black">$</span>
            </div>
            <div className="absolute top-8 right-1/4 w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-xl font-bold text-black">$</span>
            </div>
            <div className="absolute bottom-16 left-8 w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-lg font-bold text-black">$</span>
            </div>

            {/* Paper planes */}
            <div className="absolute top-12 right-8 text-white text-2xl transform rotate-45">✈️</div>
            <div className="absolute bottom-20 right-16 text-white text-xl transform -rotate-12">✈️</div>

            {/* Phone mockup */}
            <div className="relative z-10">
              <div className="bg-white rounded-3xl p-1 shadow-2xl transform rotate-12 hover:rotate-6 transition-transform duration-500">
                <div className="bg-black rounded-3xl p-6 relative overflow-hidden">
                  {/* Phone notch */}
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-black rounded-full"></div>

                  {/* Phone content */}
                  <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl p-6 text-white text-center mt-4">
                    <div className="mb-4">
                      <div className="w-12 h-12 bg-white/20 rounded-full mx-auto mb-2 flex items-center justify-center">
                        <span className="text-2xl">👤</span>
                      </div>
                    </div>
                    <div className="text-lg font-semibold mb-2">REFER A FRIEND</div>
                    <Button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-6 py-2 rounded-full font-semibold mb-4 w-full">
                      REWARDS
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Orange chain/link graphics */}
            <div className="absolute bottom-0 right-0 w-32 h-32 opacity-80">
              <div className="w-full h-full bg-gradient-to-br from-orange-400 to-orange-600 transform rotate-45 rounded-lg"></div>
            </div>
            <div className="absolute bottom-8 right-8 w-24 h-24 opacity-60">
              <div className="w-full h-full bg-gradient-to-br from-orange-500 to-red-500 transform rotate-12 rounded-lg"></div>
            </div>
          </div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-0 w-64 h-64 bg-blue-300/10 rounded-full transform -translate-x-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/10 rounded-full transform translate-x-1/3 translate-y-1/3"></div>
        </div>
      </div>
    </div>
  )
}
