import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Link from "next/link"
import Image from "next/image"
import Footer from "./components/footer"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Oakwood ESL",
  description: "Master English with confidence through friendly lessons, expert guidance, and flexible learning",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="flex items-center gap-2">
                <div className="rounded-lg flex items-center justify-center text-primary-foreground font-bold">
                  <Image
                  alt="Oakwood "
                  src="/oakwood-logo.png"
                  width={90}
                  height={90}
                  priority
                  />
                </div>
                <span className="font-bold text-xl text-primary hidden sm:inline"></span>
              </Link>
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
              <Link
                href="/bookings"
                className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:opacity-90 transition"
              >
                Enroll Now
              </Link>
            </div>
          </div>
        </nav>
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  )
}
