"use client";

import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Grid as SwiperGrid } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/grid";

import {
  Dice3,
  Gamepad2,
  Rocket,
  Fish,
  Trophy,
  Grid,
  Dice6,
  BadgeDollarSign,
  Star,
  Crown,
} from "lucide-react";

const MobileNavSlider = () => {
  const items = [
    { icon: Dice3, label: "Casino", hot: true, href: "/casino" },
    { icon: Dice6, label: "Slots", hot: true, href: "/slots" },
    { icon: Trophy, label: "Sports", href: "/sports" },
    { icon: Gamepad2, label: "E-Sports", href: "/esports" },
    { icon: Rocket, label: "Fast Games", href: "/fast-games" },
    { icon: BadgeDollarSign, label: "Poker", href: "/poker" },
    { icon: Fish, label: "Fishing", href: "/fishing" },
    { icon: Grid, label: "Lottery", href: "/lottery" },
    { icon: Star, label: "VIP", href: "/vip" },
    { icon: Crown, label: "King", href: "/king" },
  ];

  return (
    <div className="md:hidden bg-[#135990] py-4 mt-2">
      <Swiper
        slidesPerView={4}
        grid={{ rows: 2, fill: "row" }}
        spaceBetween={10}
        pagination={{ clickable: true }}
        modules={[Pagination, SwiperGrid]}
        className="w-full"
      >
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <SwiperSlide key={index}>
              <Link href={item.href}>
                <div className="flex flex-col items-center text-white relative">
                  {/* Icon inside circle */}
                  <div className="relative bg-[#135990] rounded-full p-3 shadow-md">
                    <Icon className="w-8 h-8 stroke-[2.5] text-white" />
                    {item.hot && (
                      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[9px] px-1 rounded font-bold">
                        HOT
                      </span>
                    )}
                  </div>
                  <span className="text-sm font-semibold mt-2">
                    {item.label}
                  </span>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default MobileNavSlider;
