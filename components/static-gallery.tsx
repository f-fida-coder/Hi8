"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const matches = [
  {
    id: 1,
    league: "ENGLISH PREMIER LEAGUE",
    date: "23 AUG 2025 (SAT)",
    time: "04:45 pm (GMT +5)",
    team1: "Arsenal",
    team2: "Leeds United",
    odds1: 1.79,
    odds2: 2.09,
    background: "/bg_slider.webp"
  },
  {
    id: 2,
    league: "LA LIGA",
    date: "24 AUG 2025 (SUN)",
    time: "07:30 pm (GMT +5)",
    team1: "Barcelona",
    team2: "Real Madrid",
    odds1: 2.25,
    odds2: 1.95,
    background: "/bg_slider.webp"
  },
  {
    id: 3,
    league: "SERIE A",
    date: "25 AUG 2025 (MON)",
    time: "09:00 pm (GMT +5)",
    team1: "Juventus",
    team2: "AC Milan",
    odds1: 2.05,
    odds2: 1.85,
    background: "/bg_slider.webp"
  }
];

export default function MatchSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % matches.length);
        setIsTransitioning(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-[1040px] mx-auto p-4">
      {/* Headings above boxes */}
      <div className="grid grid-cols-1 md:grid-cols-[616px_404px] gap-6 mb-2">
        <h2 className="text-black font-bold text-lg">Upcoming Matches</h2>
        <h2 className="text-black font-bold text-lg">LIVE MATCH TV</h2>
      </div>
      
      {/* Boxes container */}
      <div className="grid grid-cols-1 md:grid-cols-[616px_404px] gap-6">
        {/* Left: Match Slider */}
        <div className="relative h-[218px] overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={matches[currentSlide].background}
              alt="Match background"
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </div>
          
          <div className="relative z-10 h-full flex flex-col justify-center items-center p-4 text-white">
            <div className={`transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'} w-full`}>
              {/* League badge */}
              <div className="text-center mb-2">
                <span className="bg-red-600 text-xs font-bold px-2 py-1 rounded-md uppercase">
                  {matches[currentSlide].league}
                </span>
              </div>
              
              {/* Date and time */}
              <div className="text-center mb-4">
                <p className="text-sm font-medium mb-1">{matches[currentSlide].date}</p>
                <p className="text-xs text-gray-300">{matches[currentSlide].time}</p>
              </div>
              
              {/* Teams and odds */}
              <div className="flex justify-between items-center w-full mb-4 px-4">
                <div className="text-center w-2/5">
                  <div className="font-bold text-base mb-2 text-white">{matches[currentSlide].team1}</div>
                  <div className="bg-white text-gray-900 font-bold text-lg py-1 px-3 rounded-md">
                    {matches[currentSlide].odds1}
                  </div>
                </div>
                
                <div className="text-red-500 font-extrabold text-xl mx-2">VS</div>
                
                <div className="text-center w-2/5">
                  <div className="font-bold text-base mb-2 text-white">{matches[currentSlide].team2}</div>
                  <div className="bg-white text-gray-900 font-bold text-lg py-1 px-3 rounded-md">
                    {matches[currentSlide].odds2}
                  </div>
                </div>
              </div>
              
              {/* Bet Now button with blue background */}
              <div className="text-center">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition-colors text-sm">
                  Bet Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Static Banner */}
        <div className="relative h-[218px] overflow-hidden">
          <Image
            src="/bg_slider.webp"
            alt="Live Match TV"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-white">
            <p className="text-center mb-4 text-gray-300 text-xs">There is no live match at the moment. Click the link to check the upcoming matches.</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-md transition-colors text-sm">
              View Schedule
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
