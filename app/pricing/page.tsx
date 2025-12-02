"use client"

import { useState } from "react"
import Link from "next/link"
import { Check, X, ArrowRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/translation"
import Head from "next/head"

type PricingTier = {
  id: string
  name: string
  description: string
  basePrice: number
  trialPrice: number
  minimumLessons: number
  highlights: string[]
  recommended: boolean
}

type ComparisonFeature = {
  feature: string
  individual: boolean
  group: boolean
  club: boolean
  homeVisit: boolean
}

type FAQItem = {
  q: string
  a: string
}

export default function Pricing() {
  const [selectedTier, setSelectedTier] = useState<string | null>(null)
  const { language } = useLanguage()
  const t = translations[language].pricing

  const pricingTiers: PricingTier[] = [
    {
      id: "individual",
      name: language === "ru" ? "Индивидуальные уроки" : "Individual Lessons",
      description: language === "ru" ? "Идеально для целенаправленного, персонализированного обучения" : "Perfect for focused, personalized learning",
      basePrice: 2500,
      trialPrice: 1250,
      minimumLessons: 3,
      highlights: [
        language === "ru" ? "Один на один с опытным учителем" : "One-on-one with expert teacher",
        language === "ru" ? "Индивидуальная программа" : "Customized curriculum",
        language === "ru" ? "Гибкое расписание" : "Flexible scheduling",
        language === "ru" ? "Подробные отчеты о прогрессе" : "Detailed progress reports",
        language === "ru" ? "Скидка 50% на первый урок" : "50% off first lesson",
      ],
      recommended: false,
    },

    {
      id: "group",
      name: language === "ru" ? "Групповые уроки (2-3 студента)" : "Group Lessons (2-3 Students)",
      description: language === "ru" ? "Экономичное обучение с взаимодействием со сверстниками" : "Cost-effective learning with peer interaction",
      basePrice: 1500,
      trialPrice: 750,
      minimumLessons: 3,
      highlights: [
        language === "ru" ? "Небольшая групповая среда" : "Small group environment",
        language === "ru" ? "Совместное обучение" : "Collaborative learning",
        language === "ru" ? "Поддержка и взаимодействие со сверстниками" : "Peer support & interaction",
        language === "ru" ? "Более низкая стоимость на человека" : "Lower cost per person",
        language === "ru" ? "Скидка 50% на первый урок" : "50% off first lesson",
      ],
      recommended: true,
    },

    {
      id: "club",
      name: language === "ru" ? "Разговорный клуб" : "Speaking Club",
      description: language === "ru" ? "Чистая разговорная практика и нетворкинг" : "Pure conversation practice & networking",
      basePrice: 1500,
      trialPrice: 750,
      minimumLessons: 3,
      highlights: [
        language === "ru" ? "Свободные беседы" : "Free-flowing conversations",
        language === "ru" ? "Групповые обсуждения" : "Group discussions",
        language === "ru" ? "Культурный обмен" : "Cultural exchange",
        language === "ru" ? "Построение сообщества" : "Community building",
        language === "ru" ? "Скидка 50% на первую сессию" : "50% off first session",
      ],
      recommended: false,
    },

    // ⭐ NEW HOME VISIT PACKAGE
    {
      id: "home-visit",
      name: language === "ru" ? "Выездной урок (на дому)" : "Home Visit",
      description:
        language === "ru"
          ? "Идеально подходит для тех, кто предпочитает офлайн-занятия"
          : "Perfect for individuals who prefer offline lessons",

      basePrice: 5000,
      trialPrice: 2500,
      minimumLessons: 2,

      highlights: [
        language === "ru"
          ? "Один на один с преподавателем — носителем языка"
          : "One-on-one sessions with a native English teacher",
        language === "ru" ? "Индивидуальная программа" : "Customized curriculum",
        language === "ru" ? "Гибкое расписание" : "Flexible scheduling",
        language === "ru" ? "Подробные отчёты о прогрессе" : "Detailed progress reports",
        language === "ru" ? "Бесплатный вход в разговорный клуб" : "Free entry to the speaking club",
      ],

      recommended: false,
    },
  ]

  const comparisonFeatures: ComparisonFeature[] = [
    { feature: t.comparison.personalizedCurriculum, individual: true, group: false, club: false, homeVisit: true },
    { feature: t.comparison.oneOnOne, individual: true, group: false, club: false, homeVisit: true },
    { feature: t.comparison.groupInteraction, individual: false, group: true, club: true, homeVisit: false },
    { feature: t.comparison.flexibleScheduling, individual: true, group: true, club: true, homeVisit: true },
    { feature: t.comparison.progressReports, individual: true, group: true, club: true, homeVisit: true },
    { feature: t.comparison.speakingPractice, individual: true, group: true, club: true, homeVisit: true },
  ]

  const faqItems: FAQItem[] = [
    { q: t.faq.q1, a: t.faq.a1 },
    { q: t.faq.q2, a: t.faq.a2 },
    { q: t.faq.q3, a: t.faq.a3 },
    { q: t.faq.q4, a: t.faq.a4 },
    { q: t.faq.q5, a: t.faq.a5 },
    { q: t.faq.q6, a: t.faq.a6 },
  ]

  const calculatePackagePrice = (basePrice: number, minimumLessons: number) => basePrice * minimumLessons

  return (
    <>
      <Head>
        <title>Pricing - Speak Fluently School</title>
        <meta
          name="description"
          content="View pricing for our language courses. Individual, Group, Home Visit, and Speaking Club options with trial lessons, package pricing, and course comparisons."
        />
      </Head>

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-24 px-4 bg-gradient-to-b from-primary to-primary/95 text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <span className="text-sm font-semibold bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
              {t.badge}
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-balance">{t.hero.title}</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">{t.hero.subtitle}</p>
          </div>
        </section>

        {/* Pricing Grid */}
        <section className="py-24 px-4 bg-background">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-16">
              {pricingTiers.map((tier) => (
                <div
                  key={tier.id}
                  id={`tier-${tier.id}`}
                  className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
                    tier.recommended
                      ? "ring-2 ring-primary shadow-xl md:scale-105 origin-center"
                      : "border border-border/50 hover:border-primary/30 hover:shadow-lg"
                  }`}
                  onClick={() => setSelectedTier(tier.name)}
                >
                  <div className="p-8 h-full flex flex-col bg-white">
                    {tier.recommended && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-xs font-bold tracking-wide">
                        {t.mostPopular}
                      </div>
                    )}

                    <h2 className="text-2xl font-bold mb-2 text-foreground">{tier.name}</h2>
                    <p className="text-foreground/70 mb-8 text-sm">{tier.description}</p>

                    {/* Prices */}
                    <div className="mb-8 pb-8 border-b border-border/30 space-y-5">
                      <div className="bg-primary/5 rounded-lg p-4">
                        <div className="text-xs font-bold text-foreground/60 uppercase tracking-wider mb-1">
                          {t.trialLesson}
                        </div>
                        <div className="text-3xl font-bold text-primary">
                          ₽{tier.trialPrice.toLocaleString()}
                        </div>
                        <div className="text-xs text-foreground/60 mt-2">{t.offFirstSession}</div>
                      </div>

                      <div>
                        <div className="text-xs font-bold text-foreground/60 uppercase tracking-wider mb-2">
                          {t.regularPrice}
                        </div>
                        <div className="text-xl font-bold text-foreground">
                          ₽{tier.basePrice.toLocaleString()}
                        </div>
                      </div>

                      <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
                        <div className="text-xs font-bold text-primary uppercase tracking-wider mb-1">
                          {t.minimumPackage}
                        </div>
                        <div className="text-lg font-bold text-primary">
                          {tier.minimumLessons} {t.lessons} = ₽
                          {calculatePackagePrice(tier.basePrice, tier.minimumLessons).toLocaleString()}
                        </div>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="mb-8 space-y-3 flex-grow">
                      <div className="text-xs font-bold text-foreground uppercase tracking-wider">
                        {t.whatsIncluded}
                      </div>
                      {tier.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground/80">{highlight}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      href="/contact"
                      className={`flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-semibold transition-all duration-200 ${
                        tier.recommended
                          ? "bg-primary text-primary-foreground hover:shadow-lg hover:bg-primary/95"
                          : "bg-primary/10 text-primary hover:bg-primary/20"
                      }`}
                    >
                      {t.getStarted}
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Comparison Table */}
            <div className="mt-20 pt-20 border-t border-border/30">
              <h2 className="text-3xl font-bold text-center mb-12">{t.comparison.title}</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-center">
                  <thead>
                    <tr className="border-b-2 border-primary">
                      <th className="text-left py-4 px-6 font-bold text-foreground">{t.comparison.feature}</th>
                      {pricingTiers.map((tier) => (
                        <th key={tier.name} className="py-4 px-6 font-bold text-foreground">
                          {tier.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonFeatures.map((item, i) => (
                      <tr key={i} className="border-b border-border/30 hover:bg-muted/30 transition">
                        <td className="text-left py-4 px-6 font-medium text-foreground">{item.feature}</td>

                        <td className="py-4 px-6">
                          {item.individual ? (
                            <Check className="w-5 h-5 text-primary mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-foreground/30 mx-auto" />
                          )}
                        </td>

                        <td className="py-4 px-6">
                          {item.group ? (
                            <Check className="w-5 h-5 text-primary mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-foreground/30 mx-auto" />
                          )}
                        </td>

                        <td className="py-4 px-6">
                          {item.club ? (
                            <Check className="w-5 h-5 text-primary mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-foreground/30 mx-auto" />
                          )}
                        </td>

                        <td className="py-4 px-6">
                          {item.homeVisit ? (
                            <Check className="w-5 h-5 text-primary mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-foreground/30 mx-auto" />
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* FAQ */}
            <div className="py-24 px-4 bg-muted/20">
              <div className="max-w-3xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-foreground mb-4">{t.faq.title}</h2>
                  <p className="text-lg text-foreground/70">{t.faq.subtitle}</p>
                </div>

                <div className="space-y-6">
                  {faqItems.map((item, i) => (
                    <div key={i} className="border border-border/30 rounded-lg p-6 hover:bg-white/50 transition">
                      <h3 className="font-bold text-lg text-foreground mb-3">{item.q}</h3>
                      <p className="text-foreground/80 leading-relaxed">{item.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Final CTA */}
            <section id="contact-form" className="py-24 px-4 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
              <div className="max-w-3xl mx-auto text-center space-y-8">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
                    {t.finalCta.title}
                  </h2>
                  <p className="text-lg text-white/90 text-pretty">{t.finalCta.subtitle}</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href="https://t.me/+JHwfsOY7k-YzMTFi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-bold hover:shadow-xl transition-all duration-200 hover:bg-white/95"
                  >
                    {t.finalCta.telegram}
                    <ArrowRight size={20} />
                  </a>

                  <a
                    href="mailto:hello@speakfluently.com"
                    className="inline-flex items-center gap-2 bg-white/20 text-white border-2 border-white/50 px-8 py-4 rounded-lg font-bold hover:bg-white/30 transition-all duration-200 backdrop-blur-sm"
                  >
                    {t.finalCta.email}
                  </a>
                </div>
              </div>
            </section>
          </div>
        </section>
      </main>
    </>
  )
}
