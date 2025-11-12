"use client"

import type React from "react"

import { useState, useRef, type MouseEvent } from "react"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"

type BentoTiltProps = {
  children: React.ReactNode
  className?: string
}

export const BentoTilt = ({ children, className = "" }: BentoTiltProps) => {
  const [transformStyle, setTransformStyle] = useState<string>("")
  const itemRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!itemRef.current) return

    const { left, top, width, height } = itemRef.current.getBoundingClientRect()

    const relativeX = (event.clientX - left) / width
    const relativeY = (event.clientY - top) / height

    const tiltX = (relativeY - 0.5) * 5
    const tiltY = (relativeX - 0.5) * -5

    setTransformStyle(`perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`)
  }

  const handleMouseLeave = () => setTransformStyle("")

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle, transition: "transform 0.3s ease-out" }}
    >
      {children}
    </div>
  )
}

type BentoCardProps = {
  src: string | string[] // Updated to accept array of images
  title: string
  description?: string
  isImage?: boolean
}

export const BentoCard = ({ src, title, description, isImage = false }: BentoCardProps) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [hoverOpacity, setHoverOpacity] = useState(0)
  const hoverButtonRef = useRef<HTMLDivElement>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!hoverButtonRef.current) return
    const rect = hoverButtonRef.current.getBoundingClientRect()

    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    })
  }

  const handleMouseEnter = () => setHoverOpacity(1)
  const handleMouseLeave = () => setHoverOpacity(0)

  const images = Array.isArray(src) ? src : [src]
  const hasMultipleImages = images.length > 1 && isImage

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="relative size-full overflow-hidden rounded-lg">
      {isImage ? (
        <>
          <img
            src={images[currentImageIndex] || "/placeholder.svg"}
            alt={title}
            className="absolute left-0 top-0 size-full object-cover object-center transition-opacity duration-300"
          />
          {hasMultipleImages && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-2 transition"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-2 transition"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
              <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation()
                      setCurrentImageIndex(index)
                    }}
                    className={`w-2 h-2 rounded-full transition ${
                      index === currentImageIndex ? "bg-white" : "bg-white/40"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </>
      ) : (
        <video
          src={images[0]}
          loop
          muted
          autoPlay
          className="absolute left-0 top-0 size-full object-cover object-center"
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      <div className="relative z-10 flex size-full flex-col justify-between p-6 text-white">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">{title}</h2>
          {description && <p className="text-sm md:text-base text-white/90 max-w-xs">{description}</p>}
        </div>

        <div
          ref={hoverButtonRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="flex w-fit cursor-pointer items-center gap-2 relative overflow-hidden rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 text-sm uppercase text-white border border-white/30 hover:border-white/60 transition"
        >
          <div
            className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
            style={{
              opacity: hoverOpacity,
              background: `radial-gradient(80px circle at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(255,255,255,0.3), transparent)`,
            }}
          />
          <a href="/courses">
            <span className="relative z-20">Learn More</span>
          </a>
          <ArrowRight className="relative z-20 w-4 h-4" />
        </div>
      </div>
    </div>
  )
}
