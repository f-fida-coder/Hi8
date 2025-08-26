"use client"

import React from "react";

const slotsImages = [
  { src: "/slotsg/s5ForStar.png", name: "5 For Star" },
  { src: "/slotsg/s7Dragons.png", name: "7 Dragons" },
  { src: "/slotsg/sAztecGolT.png", name: "Aztec Gold" },
  { src: "/slotsg/sBuffK.png", name: "Buffalo King" },
  { src: "/slotsg/sCaiShen.jpg", name: "Cai Shen" },
  { src: "/slotsg/sCandyBona.png", name: "Candy Bonanza" },
  { src: "/slotsg/sCandyXmas.png", name: "Candy Xmas" },
  { src: "/slotsg/sClaFruit7.png", name: "Classic Fruit 7" },
  { src: "/slotsg/sCleopaFor.png", name: "Cleopatra Fortune" },
  { src: "/slotsg/sCrazyMkDx.png", name: "Crazy Monkey DX" },
  { src: "/slotsg/sDiamond7.png", name: "Diamond 7" },
  { src: "/slotsg/sForToad.png", name: "Fortune Toad" },
  { src: "/slotsg/sGoldenFa.png", name: "Golden Fa" },
  { src: "/slotsg/sGoldenWar.jpg", name: "Golden Warrior" },
  { src: "/slotsg/sGolWest.png", name: "Gold West" },
  { src: "/slotsg/sGuanGong.jpg", name: "Guan Gong" },
  { src: "/slotsg/sHG0001.jpg", name: "HG0001" },
  { src: "/slotsg/sHighwayB.png", name: "Highway Bee" },
  { src: "/slotsg/sHolyGoat.png", name: "Holy Goat" },
  { src: "/slotsg/sHotSmash.png", name: "Hot Smash" },
  { src: "/slotsg/sLightnDrg.jpg", name: "Lightning Dragon" },
  { src: "/slotsg/sLightnWmn.png", name: "Lightning Woman" },
  { src: "/slotsg/sLongX3.png", name: "Long X3" },
  { src: "/slotsg/sLuckyGems.png", name: "Lucky Gems" },
  { src: "/slotsg/sMahDrg.jpg", name: "Mahjong Dragon" },
  { src: "/slotsg/sMahPhe.jpg", name: "Mahjong Phoenix" },
  { src: "/slotsg/sMayaQuest.png", name: "Maya Quest" },
  { src: "/slotsg/sPrincessR.jpg", name: "Princess Riches" },
  { src: "/slotsg/sProsDrg.jpg", name: "Prosperity Dragon" },
  { src: "/slotsg/sProsSnake.jpg", name: "Prosperity Snake" },
  { src: "/slotsg/sRoma.png", name: "Roma" },
  { src: "/slotsg/sRomaII.jpg", name: "Roma II" },
  { src: "/slotsg/sRoyalGem.jpg", name: "Royal Gems" },
  { src: "/slotsg/sShkThaiX2.png", name: "Shark Thai X2" },
  { src: "/slotsg/sSweetLava.png", name: "Sweet Lava" },
  { src: "/slotsg/sTaiga88.png", name: "Taiga 88" },
  { src: "/slotsg/sTreaAtlan.jpg", name: "Treasure Atlantis" },
  { src: "/slotsg/sWinX2Neko.jpg", name: "WinX2 Neko" },
  { src: "/slotsg/sZeus.jpg", name: "Zeus" },
];

const SlotsGallery = () => {
  return (
    <div className="w-full bg-gray-50 py-6">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Slots Gallery</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {slotsImages.map((slot, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center"
            >
              <div className="w-[120px] h-[120px] overflow-hidden rounded-lg shadow-md flex items-center justify-center bg-white">
                <img
                  src={slot.src}
                  alt={slot.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-2 text-sm text-gray-700 font-medium truncate w-[120px]">
                {slot.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlotsGallery;
