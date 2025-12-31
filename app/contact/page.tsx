"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import Head from "next/head"
import { MapPin, Mail } from "lucide-react"
import { MdMarkEmailUnread } from "react-icons/md"
import { BsTelegram, BsPhoneFill } from "react-icons/bs"
import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/translation"

const SITE_URL = "https://oakwoodesl.com"
const PAGE_URL = `${SITE_URL}/contact`

function buildJsonLd() {
  const contactPoints = [
    {
      "@type": "ContactPoint",
      telephone: "+7 903 747 1267",
      contactType: "Customer Support",
      areaServed: "RU",
      availableLanguage: ["English", "Russian"],
    },
    {
      "@type": "ContactPoint",
      email: "hello@sname.com",
      contactType: "Customer Support",
      areaServed: "RU",
      availableLanguage: ["English", "Russian"],
    },
    {
      "@type": "ContactPoint",
      url: "https://t.me/itsslucki",
      contactType: "Telegram Support",
      areaServed: "RU",
      availableLanguage: ["English", "Russian"],
    },
  ]

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Oakwood English Language School",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    contactPoint: contactPoints,
  }

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Contact", item: PAGE_URL },
    ],
  }

  return { organization, breadcrumb }
}

export default function ContactPage() {
  const { organization, breadcrumb } = buildJsonLd()
  const { language } = useLanguage()
  const t = translations[language].contact

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
  }

  return (
    <>
      <Head>
        <title>Contact | Oakwood English Language School</title>
        <meta
          name="description"
          content="Get in touch with Oakwood English Language School via Telegram, email, phone, or our contact form. We respond promptly to inquiries."
        />
        <link rel="canonical" href={PAGE_URL} />
        {/* Open Graph */}
        <meta property="og:title" content="Contact — Oakwood English Language School" />
        <meta property="og:description" content="Reach Oakwood School by Telegram, email, phone, or contact form." />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:site_name" content="Oakwood English Language School" />
        <meta property="og:image" content={`${SITE_URL}/og-image-contact.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Oakwood Contact" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Oakwood English Language School" />
        <meta name="twitter:description" content="Get in touch via Telegram, email, phone, or contact form." />
      </Head>

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-24 px-4 bg-gradient-to-b from-primary to-primary/95 text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-block">
              <span className="text-sm font-semibold bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
                {t.badge}
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-balance">{t.hero.title}</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto text-pretty">{t.hero.subtitle}</p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20 px-4 bg-background">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-20">
              {/* Telegram */}
              <div className="bg-white rounded-xl border border-border/30 p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-center w-14 h-14 bg-blue-500/10 rounded-lg mb-6">
                  <BsTelegram size={20} color="#1a73e8" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{t.telegram.title}</h3>
                <p className="text-foreground/70 mb-6 text-sm leading-relaxed">{t.telegram.description}</p>
                <a
                  href="https://t.me/oakwoodesl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                >
                  {t.telegram.button}
                  <span>→</span>
                </a>
              </div>

              {/* Email */}
              <div className="bg-white rounded-xl border border-border/30 p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-center w-14 h-14 bg-primary/10 rounded-lg mb-6">
                  <MdMarkEmailUnread size={20} color="#1a73e8" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{t.email.title}</h3>
                <p className="text-foreground/70 mb-6 text-sm leading-relaxed">{t.email.description}</p>
                <a
                  href="mailto:oakwoodesl@mail.ru"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                >
                  oakwoodesl@mail.ru
                  <span>→</span>
                </a>
              </div>

              {/* Phone */}
              <div className="bg-white rounded-xl border border-border/30 p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-center w-14 h-14 bg-green-500/10 rounded-lg mb-6">
                  <BsPhoneFill size={20} color="green" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{t.phone.title}</h3>
                <p className="text-foreground/70 mb-6 text-sm leading-relaxed">{t.phone.description}</p>
                <a
                  href="tel:+7 903 747 1267"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                >
                  +7 903 747 1267
                  <span>→</span>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-6">{t.form.title}</h2>
                <p className="text-foreground/70 mb-8 leading-relaxed text-lg">{t.form.subtitle}</p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{t.form.officeLocation}</h4>
                      <p className="text-foreground/70 text-sm">{t.form.officeLocationText}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{t.form.responseTime}</h4>
                      <p className="text-foreground/70 text-sm">{t.form.responseTimeText}</p>
                    </div>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-border/30 p-8 shadow-lg">
                <div className="space-y-5">
                  {["name", "email", "phone", "subject", "message"].map((field) => {
                    const isTextArea = field === "message"
                    return (
                      <div key={field}>
                        <label htmlFor={field} className="block text-sm font-semibold text-foreground mb-2">
                          {t.form[field as keyof typeof t.form]}
                        </label>
                        {isTextArea ? (
                          <textarea
                            id={field}
                            name={field}
                            value={formData[field as keyof typeof formData]}
                            onChange={handleChange}
                            rows={5}
                            placeholder={t.form[`${field}Placeholder` as keyof typeof t.form]}
                            className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                            required
                          />
                        ) : (
                          <input
                            type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                            id={field}
                            name={field}
                            value={formData[field as keyof typeof formData]}
                            onChange={handleChange}
                            placeholder={t.form[`${field}Placeholder` as keyof typeof t.form]}
                            className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                            required={field !== "phone"}
                          />
                        )}
                      </div>
                    )
                  })}

                  <button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground py-3 px-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 hover:opacity-90 flex items-center justify-center gap-2"
                  >
                    {t.form.send}
                    <Mail size={18} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 bg-muted/20">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">{t.faq.title}</h2>
              <p className="text-lg text-foreground/70">{t.faq.subtitle}</p>
            </div>

            <div className="space-y-4">
              {[t.faq.q1, t.faq.q2, t.faq.q3, t.faq.q4].map((q, i) => (
                <div key={i} className="bg-white rounded-lg p-6 border border-border/30 hover:shadow-md transition-all">
                  <h3 className="font-bold text-foreground mb-3">{q}</h3>
                  <p className="text-foreground/80 leading-relaxed text-sm">{t.faq[`a${i + 1}` as keyof typeof t.faq]}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-4 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-balance">{t.finalCta.title}</h2>
            <p className="text-lg text-white/90 text-pretty">{t.finalCta.subtitle}</p>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-bold hover:shadow-xl transition-all duration-200 hover:bg-white/95"
            >
              {t.finalCta.button}
              <span>→</span>
            </Link>
          </div>
        </section>

        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
        />
      </main>
    </>
  )
}
