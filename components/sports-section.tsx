"use client"

import Image from "next/image"

export default function SportsSection() {
  return (
    <div className="w-full bg-white py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Upcoming Matches */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image src="/football-soccer-ball-icon.png" alt="Football" width={24} height={24} />
              <h2 className="text-xl font-bold text-gray-900">Upcoming Matches</h2>
              {/* Pagination dots */}
              <div className="flex gap-1 ml-auto">
                {[...Array(10)].map((_, i) => (
                  <div key={i} className={`w-2 h-2 rounded-full ${i === 5 ? "bg-cyan-500" : "bg-gray-300"}`} />
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-t-lg p-3">
              <div className="text-white text-center font-semibold text-sm">ENGLISH PREMIER LEAGUE</div>
            </div>

            <div className="bg-cover bg-center rounded-b-lg overflow-hidden relative">
              <Image
                src="/football-stadium-grass-field-background.png"
                alt="Stadium background"
                width={600}
                height={200}
                className="w-full h-48 object-cover"
              />

              <div className="absolute inset-0 bg-black/40 flex items-center justify-between p-6">
                {/* Liverpool */}
                <div className="text-center text-white">
                  <Image src="/liverpool-fc-logo.png" alt="Liverpool" width={50} height={50} className="mx-auto mb-2" />
                  <div className="font-semibold text-sm">Liverpool</div>
                  <div className="bg-blue-900 text-white px-3 py-1 rounded mt-2 font-bold text-sm">1.77</div>
                </div>

                {/* Match Info */}
                <div className="text-center text-white">
                  <div className="text-xl font-bold mb-2">VS</div>
                  <div className="text-xs">31 AUG 2025 (SUN)</div>
                  <div className="text-xs mb-3">11:30 pm (GMT +8)</div>
                  <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all text-sm">
                    Bet Now
                  </button>
                </div>

                {/* Arsenal */}
                <div className="text-center text-white">
                  <Image src="/arsenal-fc-logo.png" alt="Arsenal" width={50} height={50} className="mx-auto mb-2" />
                  <div className="font-semibold text-sm">Arsenal</div>
                  <div className="bg-blue-900 text-white px-3 py-1 rounded mt-2 font-bold text-sm">2.15</div>
                </div>
              </div>
            </div>
          </div>

          {/* Live Match TV */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-cyan-500 text-white px-2 py-1 rounded text-sm font-bold flex items-center gap-1">
                <span>▶</span> LIVE
              </div>
              <h2 className="text-xl font-bold text-gray-900">MATCH TV</h2>
            </div>

            <div className="bg-cover bg-center rounded-lg overflow-hidden relative h-64">
              <Image
                src="/dark-stadium-night-football-field-background.png"
                alt="Stadium night background"
                width={600}
                height={256}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white text-center p-6">
                <div className="text-4xl mb-4 opacity-50">⏸</div>
                <h3 className="text-lg font-semibold mb-2">There is no live match at the moment.</h3>
                <p className="text-sm">
                  Click the link to check the{" "}
                  <a href="#" className="text-cyan-400 underline hover:text-cyan-300">
                    upcoming matches
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
