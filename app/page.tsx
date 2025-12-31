"use client"

import Link from "next/link"
import Hero from "@/components/hero"
import { ExperiencesSection } from "@/components/experience-section"
import { translations } from "@/lib/translation"
import { useLanguage } from "@/contexts/language-context"

type Feature = {
  title: string
  description: string
}

export default function HomePage() {
  const { language } = useLanguage()
  const t = translations[language].home

  const features: Feature[] = [
    t.whyChoose.feature1,
    t.whyChoose.feature2,
    t.whyChoose.feature3,
    t.whyChoose.feature4,
  ]

  return (
    <main className="min-h-screen">
      <Hero />

      {/* WHY CHOOSE */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            {t.whyChoose.title}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((item: Feature, i: number) => (
              <div
                key={i}
                className="p-6 rounded-lg border border-border bg-card"
              >
                <h3 className="text-xl font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-foreground/70">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ExperiencesSection/>

      {/* METRICS */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-16">
            {t.impact.title}
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            <Metric value="25+" label={t.impact.students} />
            <Metric value="10+" label={t.impact.teachers} />
            <Metric value="3+" label={t.impact.countries} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            {t.cta.title}
          </h2>
          <p className="text-xl text-foreground/70 mb-8">
            {t.cta.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pricing" className="btn-primary">
              {t.cta.viewPricing}
            </Link>
            <Link href="/courses" className="btn-secondary">
              {t.cta.exploreCourses}
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-5xl font-bold mb-2">{value}</div>
      <p className="text-lg opacity-90">{label}</p>
    </div>
  )
}
