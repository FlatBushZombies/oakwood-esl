"use client"

import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/translation"
import LanguageSwitcher from "./language-switcher"

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { language } = useLanguage()
  const t = translations[language].nav

  return (
    <>
      <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image alt="Oakwood" src="/oakwood-logo.png" width={90} height={90} priority />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-foreground/70 hover:text-foreground transition">
                {t.home}
              </Link>
              <Link href="/courses" className="text-foreground/70 hover:text-foreground transition">
                {t.courses}
              </Link>
              <Link href="/pricing" className="text-foreground/70 hover:text-foreground transition">
                {t.pricing}
              </Link>
              <Link href="/contact" className="text-foreground/70 hover:text-foreground transition">
                {t.contact}
              </Link>
              <LanguageSwitcher />
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              {/* Enroll Button — NOW VISIBLE ON MOBILE */}
              <Link
                href="/bookings"
                className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:opacity-90 transition"
              >
                {t.enrollNow}
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-foreground hover:text-primary transition"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden pb-4 animate-in slide-in-from-top-5 duration-200">
              <div className="flex flex-col space-y-3">
                <Link
                  href="/"
                  className="text-foreground/70 hover:text-foreground transition px-2 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t.home}
                </Link>
                <Link
                  href="/courses"
                  className="text-foreground/70 hover:text-foreground transition px-2 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t.courses}
                </Link>
                <Link
                  href="/pricing"
                  className="text-foreground/70 hover:text-foreground transition px-2 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t.pricing}
                </Link>
                <Link
                  href="/contact"
                  className="text-foreground/70 hover:text-foreground transition px-2 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t.contact}
                </Link>

                <div className="px-2 py-2">
                  <LanguageSwitcher />
                </div>

                {/* Mobile Enroll CTA */}
                <Link
                  href="/bookings"
                  className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:opacity-90 transition text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t.enrollNow}
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
