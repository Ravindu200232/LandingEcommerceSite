"use client";

import React, { useState } from "react";
import Image from "next/image";

const img = [
  "/img/feature1.jpeg",
  "/img/feature2.jpg",
  "/img/feature3.jpg",
  "/img/feature2.jpg",
  "/img/feature1.jpeg",
  "/img/feature3.jpg",
];

export default function Galary({images}) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  console.log(images)
  console.log(img)
  



  const handleNext = (e) => {
    e.stopPropagation();
    setSelectedIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setSelectedIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, index) => (
          <div
            key={index}
            className="cursor-pointer overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
            onClick={() => setSelectedIndex(index)}
          >
            <Image
              src={img}
              alt={`Gallery ${index}`}
              width={500}
              height={300}
              className="w-full h-[300px] object-cover"
            />
          </div>
        ))}
      </div>

      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
          onClick={() => setSelectedIndex(null)}
        >
          <button
            onClick={handlePrev}
            className="absolute left-4 text-white text-4xl font-bold"
          >
            ‹
          </button>

          <Image
            src={images[selectedIndex]}
            alt="Full view"
            width={1000}
            height={600}
            className="max-w-full max-h-full object-contain"
          />

          <button
            onClick={handleNext}
            className="absolute right-4 text-white text-4xl font-bold"
          >
            ›
          </button>

          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute top-4 right-4 text-white text-3xl font-bold"
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
}
