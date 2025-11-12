"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Users, Clock, Zap, Globe } from "lucide-react"
import { FaUsers, FaClock, FaBolt, FaGlobe } from "react-icons/fa";
import { ExperiencesSection } from "@/components/experience-section"

const images = [
  "/assets/photo_2025-11-09_11-30-03.jpg",
  "/assets/photo_2025-11-09_11-30-37.jpg",
  "/assets/photo_2025-11-09_11-30-50.jpg",
  "/assets/photo_2025-11-09_11-29-30.jpg",
  "/assets/photo_2025-11-09_11-30-00.jpg",
  "/assets/photo_2025-11-09_11-30-26.jpg",
  "/assets/photo_2025-11-09_11-31-03.jpg"
]

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [autoplay])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length)
    setAutoplay(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)
    setAutoplay(false)
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section with Image Slider */}
      <section className="relative w-full h-screen max-h-screen overflow-hidden">
        {/* Image Slider */}
        <div className="absolute inset-0">
          {images.map((image, index) => (
            <div
              key={index}
              className="absolute inset-0 transition-opacity duration-1000"
              style={{
                opacity: currentSlide === index ? 1 : 0,
              }}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`Slide ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Slider Controls */}
        <button
          onClick={prevSlide}
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-40 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-40 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition"
        >
          <ChevronRight size={24} />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-40 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentSlide(index)
                setAutoplay(false)
              }}
              className={`w-2 h-2 rounded-full transition ${currentSlide === index ? "bg-white w-8" : "bg-white/50"}`}
            />
          ))}
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center text-white max-w-2xl px-4">
            <div className="inline-block bg-blue-500/30 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-medium">Speak Fluently ✨</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              English learning with a very modern <span className="text-blue-300">edge</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 text-pretty">
              Learn how to communicate in English with real native speakers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/courses"
                className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition inline-block"
              >
                Explore Courses
              </Link>
              <Link
                href="#contact"
                className="bg-white/20 text-white border border-white/50 px-8 py-3 rounded-lg font-semibold hover:bg-white/30 transition inline-block backdrop-blur-sm"
              >
                Contact on Telegram
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
   <section className="py-20 px-4 bg-background">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-16 text-balance">
      Why we are the best ESL school?
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        {
          icon: FaUsers,
          title: "Talented Native English teachers",
          description:
            "Our talented, dedicated teachers prioritise helping students communicate in English in a natural manner.",
        },
        {
          icon: FaClock,
          title: "Flexible Scheduling",
          description:
            "Learn at your own pace with class times that fit your lifestyle.",
        },
        {
          icon: FaBolt,
          title: "Interactive Learning",
          description:
            "Engaging lessons filled with conversations, activities, and real-world English usage.",
        },
        {
          icon: FaGlobe,
          title: "Global Community",
          description:
            "Connect with teachers and students from around the world and experience authentic communication.",
        },
      ].map((item, i) => (
        <div
          key={i}
          className="p-6 rounded-lg border border-border bg-card hover:shadow-lg transition"
        >
          <item.icon className="w-12 h-12 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
          <p className="text-foreground/70">{item.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>

<ExperiencesSection />

      {/* Our Metrics */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Our Impact</h2>
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">25+</div>
              <p className="text-lg opacity-90">Active Students and growing</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">10+</div>
              <p className="text-lg opacity-90">Expert Native English teachers</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">3+</div>
              <p className="text-lg opacity-90">Countries Represented</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-foreground/70 mb-8">
            Get your first trial lesson at 50% off! Begin with a consultation to find the perfect package for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/pricing"
              className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition inline-block"
            >
              View Pricing & Packages
            </Link>
            <Link
              href="/courses"
              className="bg-secondary text-secondary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition inline-block"
            >
              Explore All Courses
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
