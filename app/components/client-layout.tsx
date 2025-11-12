"use client"

import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="rounded-lg flex items-center justify-center text-primary-foreground font-bold">
                <Image alt="Oakwood " src="/oakwood-logo.png" width={90} height={90} priority />
              </div>
              <span className="font-bold text-xl text-primary hidden sm:inline"></span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-foreground/70 hover:text-foreground transition">
                Home
              </Link>
              <Link href="/courses" className="text-foreground/70 hover:text-foreground transition">
                Courses
              </Link>
              <Link href="/pricing" className="text-foreground/70 hover:text-foreground transition">
                Pricing
              </Link>
              <Link href="/contact" className="text-foreground/70 hover:text-foreground transition">
                Contact
              </Link>
            </div>

            {/* Desktop Enroll Button */}
            <Link
              href="/bookings"
              className="hidden md:block bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:opacity-90 transition"
            >
              Enroll Now
            </Link>

            {/* <CHANGE> Added hamburger menu button for mobile */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-foreground hover:text-primary transition"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* <CHANGE> Added mobile menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden pb-4 animate-in slide-in-from-top-5 duration-200">
              <div className="flex flex-col space-y-3">
                <Link
                  href="/"
                  className="text-foreground/70 hover:text-foreground transition px-2 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/courses"
                  className="text-foreground/70 hover:text-foreground transition px-2 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Courses
                </Link>
                <Link
                  href="/pricing"
                  className="text-foreground/70 hover:text-foreground transition px-2 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Pricing
                </Link>
                <Link
                  href="/contact"
                  className="text-foreground/70 hover:text-foreground transition px-2 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                <Link
                  href="/bookings"
                  className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:opacity-90 transition text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Enroll Now
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
      {children}
    </>
  )
}
