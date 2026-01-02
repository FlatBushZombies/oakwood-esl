import type React from "react"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Footer from "@/components/footer"
import "./globals.css"
import ClientLayout from "@/components/client-layout"
import { Toaster } from "@/components/ui/sonner"
import type { Metadata } from "next"
import { LanguageProvider } from "@/contexts/language-context"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  preload: true,
})
const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  title: {
    default: "Oakwood English Language School | Professional Academic ESL Training",
    template: "%s | Oakwood Language School",
  },
  description:
    "Oakwood ESL School provides accredited English-language programs, modern ESL training, IELTS & TOEFL preparation, and immersive learning for international students.",
  keywords: [
    "English Language School",
    "ESL Academy",
    "Professional Academic English",
    "Language Institute",
    "IELTS Preparation",
    "TOEFL Preparation",
    "English Courses",
    "Language Classes",
    "Accredited Language School",
    "Oakwood English School",
  ],
  metadataBase: new URL("https://oakwoodesl.com"),
  alternates: {
    canonical: "https://oakwoodesl.com",
    languages: {
      en: "https://oakwoodesl.com/en",
      ru: "https://oakwoodesl.com/ru",
    },
  },
  openGraph: {
    type: "website",
    url: "https://oakwoodesl.com",
    siteName: "Oakwood English Language School",
    title: "Oakwood English Language School | Accredited ESL Programs",
    description:
      "Learn English with accredited instructors, immersive ESL programs, and international exam preparation.",
    images: [
      {
        url: "https://oakwoodesl.com/oakwood-logo.png",
        width: 1200,
        height: 630,
        alt: "Oakwood ESL School",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oakwood English Language School",
    description: "Accredited English courses, ESL training, and IELTS/TOEFL preparation.",
    images: ["https://oakwoodesl.com/oakwood-logo.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geist.className} antialiased`}>
        <LanguageProvider>
          <ClientLayout>{children}</ClientLayout>

          {/* Google Analytics / Vercel Analytics */}
          <Analytics />

          {/* Footer */}
          <Footer />

          {/* =============================
              STRUCTURED DATA (LD+JSON)
              Institution + Website Search
             ============================= */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "EducationalOrganization",
                name: "Oakwood English Language School",
                url: "https://oakwoodesl.com",
                logo: "https://oakwoodesl.com/logo.png",
                description:
                  "Oakwood English Language School provides accredited ESL programs, IELTS/TOEFL preparation, and immersive English learning for students and professionals.",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "YOUR ADDRESS HERE",
                  addressLocality: "YOUR CITY",
                  addressCountry: "YOUR COUNTRY",
                },
                contactPoint: {
                  "@type": "ContactPoint",
                  telephone: "+YOUR PHONE",
                  contactType: "Customer Service",
                  areaServed: "Worldwide",
                  availableLanguage: ["English", "Russian"],
                },
                sameAs: [
                  "https://facebook.com/oakwood",
                  "https://instagram.com/oakwood",
                  "https://tiktok.com/@oakwood",
                ],
              }),
            }}
          />

          {/* Sitelinks Search Box */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebSite",
                url: "https://oakwoodesl.com",
                potentialAction: {
                  "@type": "SearchAction",
                  target: "https://oakwoodesl.com/?s={search_term_string}",
                  "query-input": "required name=search_term_string",
                },
              }),
            }}
          />
        </LanguageProvider>
      </body>
      <Toaster />
    </html>
  )
}
