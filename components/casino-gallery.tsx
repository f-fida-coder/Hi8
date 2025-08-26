"use client"

import React from "react";

const casinoImages = [
  "/casinog1.png",
  "/casinog2.png",
  "/casinog3.png",
  "/casinog4.png",
  "/casinog5.png",
  "/casinog6.png",
  "/casinog7.png",
  "/casinog8.png",
  "/casinog9.png",
  "/casinog10.png",
  "/casinog11.png",
];

const CasinoGallery = () => {
  return (
    <div className="w-full bg-gray-50 py-6">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Casino Gallery</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {casinoImages.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-md">
              <img
                src={image}
                alt={`Casino Image ${index + 1}`}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CasinoGallery;
