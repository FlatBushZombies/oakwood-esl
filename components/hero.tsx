"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/translation"

const images = [
  "/assets/photo_2025-11-09_11-30-03.webp",
  "/assets/photo_2025-11-09_11-30-37.webp",
  "/assets/photo_2025-11-09_11-30-50.webp",
  "/assets/photo_2025-11-09_11-29-30.webp",
  "/assets/photo_2025-11-09_11-30-00.webp",
  "/assets/photo_2025-11-09_11-30-26.webp",
  "/assets/photo_2025-11-09_11-31-03.webp",
]

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const { language } = useLanguage()
  const t = translations[language].home

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((c) => (c + 1) % images.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full min-h-[80vh] sm:h-screen bg-black overflow-hidden">
      {images.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={src}
            alt={`Slide ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
            loading={index === 0 ? "eager" : "lazy"}
            quality={50}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />

      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="text-center text-white max-w-2xl px-4 w-full">
          <div className="inline-block bg-blue-500/30 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium">{t.badge}</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            {t.hero.title}{" "}
            <span className="text-blue-300">{t.hero.titleHighlight}</span>
          </h1>

          <p className="text-xl md:text-2xl mb-10 text-blue-100 text-pretty">
            {t.hero.subtitle}
          </p>

          {/* ✅ Buttons: stacked on mobile, wider, side-by-side on desktop */}
          <div className="flex flex-col sm:flex-row w-full max-w-lg mx-auto gap-4">
            <Link
              href="/courses"
              className="flex w-full sm:w-1/2 items-center justify-center min-h-[60px] bg-primary text-primary-foreground rounded-xl font-semibold hover:opacity-90 transition"
            >
              {t.hero.exploreCourses}
            </Link>

            <Link
              href="https://t.me/oakwoodesl"
              className="flex w-full sm:w-1/2 items-center justify-center min-h-[60px] bg-white/20 text-white border border-white/50 rounded-xl font-semibold hover:bg-white/30 transition backdrop-blur-sm"
            >
              {t.hero.contactTelegram}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
