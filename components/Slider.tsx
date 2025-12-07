"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/assets/photo_2025-11-09_11-30-03.jpg",
  "/assets/photo_2025-11-09_11-30-37.jpg",
  "/assets/photo_2025-11-09_11-30-50.jpg",
  "/assets/photo_2025-11-09_11-29-30.jpg",
  "/assets/photo_2025-11-09_11-30-00.jpg",
  "/assets/photo_2025-11-09_11-30-26.jpg",
  "/assets/photo_2025-11-09_11-31-03.jpg",
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((c) => (c + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[60vh] sm:h-screen overflow-hidden bg-black">
      {/* FIRST IMAGE loads instantly */}
      <Image
        src={images[current]}
        alt="Slide"
        fill
        quality={40}          
        priority={current === 0}  
        onLoadingComplete={() => setLoaded(true)}
        className={`object-cover transition-opacity duration-700 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
}
