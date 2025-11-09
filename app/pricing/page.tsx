"use client"

import { useState } from "react"
import Link from "next/link"
import { Check, X, ArrowRight } from "lucide-react"

const pricingTiers = [
  {
    name: "Individual Lessons",
    description: "Perfect for focused, personalized learning",
    basePrice: 2500,
    trialPrice: 1250,
    minimumLessons: 3,
    highlights: [
      "One-on-one with expert teacher",
      "Customized curriculum",
      "Flexible scheduling",
      "Detailed progress reports",
      "50% off first lesson",
    ],
    recommended: false,
  },
  {
    name: "Group Lessons",
    description: "Cost-effective learning with peer interaction",
    basePrice: 1500,
    trialPrice: 750,
    minimumLessons: 3,
    highlights: [
      "Small group environment",
      "Collaborative learning",
      "Peer support & interaction",
      "Lower cost per person",
      "50% off first lesson",
    ],
    recommended: true,
  },
  {
    name: "Speaking Club",
    description: "Pure conversation practice & networking",
    basePrice: 1500,
    trialPrice: 750,
    minimumLessons: 3,
    highlights: [
      "Free-flowing conversations",
      "Group discussions",
      "Cultural exchange",
      "Community building",
      "50% off first session",
    ],
    recommended: false,
  },
]

const comparisonFeatures = [
  { feature: "Personalized Curriculum", individual: true, group: false, club: false },
  { feature: "One-on-One Sessions", individual: true, group: false, club: false },
  { feature: "Group Interaction", individual: false, group: true, club: true },
  { feature: "Flexible Scheduling", individual: true, group: true, club: true },
  { feature: "Progress Reports", individual: true, group: false, club: false },
  { feature: "Speaking Practice", individual: true, group: true, club: true },
]

export default function Pricing() {
  const [selectedTier, setSelectedTier] = useState<string | null>(null)

  const calculatePackagePrice = (basePrice: number, minimumLessons: number) => {
    return basePrice * minimumLessons
  }

  return (
    <main className="min-h-screen bg-background">
      <section className="py-24 px-4 bg-gradient-to-b from-primary to-primary/95 text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-block">
            <span className="text-sm font-semibold bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
              Pricing & Packages
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-balance">Simple, Transparent Pricing</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Choose your perfect plan and start learning English with confidence
          </p>
        </div>
      </section>

      <section className="py-24 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
                  tier.recommended
                    ? "ring-2 ring-primary shadow-xl md:scale-105 origin-center"
                    : "border border-border/50 hover:border-primary/30 hover:shadow-lg"
                }`}
                onClick={() => setSelectedTier(tier.name)}
              >
                {tier.recommended && (
                  <div className="absolute -top-px left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
                )}

                <div
                  className={`p-8 h-full flex flex-col ${tier.recommended ? "bg-gradient-to-br from-white to-blue-50/20" : "bg-white"}`}
                >
                  {tier.recommended && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-xs font-bold tracking-wide">
                      MOST POPULAR
                    </div>
                  )}

                  <h2 className="text-2xl font-bold mb-2 text-foreground">{tier.name}</h2>
                  <p className="text-foreground/70 mb-8 text-sm">{tier.description}</p>

                  <div className="mb-8 pb-8 border-b border-border/30 space-y-5">
                    <div className="bg-primary/5 rounded-lg p-4">
                      <div className="text-xs font-bold text-foreground/60 uppercase tracking-wider mb-1">
                        First Lesson Trial
                      </div>
                      <div className="text-3xl font-bold text-primary">₽{tier.trialPrice.toLocaleString()}</div>
                      <div className="text-xs text-foreground/60 mt-2">50% off your first session</div>
                    </div>

                    <div>
                      <div className="text-xs font-bold text-foreground/60 uppercase tracking-wider mb-2">
                        Regular Price per Lesson
                      </div>
                      <div className="text-xl font-bold text-foreground">₽{tier.basePrice.toLocaleString()}</div>
                    </div>

                    <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
                      <div className="text-xs font-bold text-primary uppercase tracking-wider mb-1">
                        Minimum Package
                      </div>
                      <div className="text-lg font-bold text-primary">
                        {tier.minimumLessons} lessons = ₽
                        {calculatePackagePrice(tier.basePrice, tier.minimumLessons).toLocaleString()}
                      </div>
                    </div>
                  </div>

                  <div className="mb-8 space-y-3 flex-grow">
                    <div className="text-xs font-bold text-foreground uppercase tracking-wider">What's Included</div>
                    {tier.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground/80">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="#contact-form"
                    className={`flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-semibold transition-all duration-200 ${
                      tier.recommended
                        ? "bg-primary text-primary-foreground hover:shadow-lg hover:bg-primary/95"
                        : "bg-primary/10 text-primary hover:bg-primary/20"
                    }`}
                  >
                    Get Started
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <div className="bg-gradient-to-br from-primary/5 to-primary/0 border border-primary/20 rounded-xl p-8">
              <h3 className="text-lg font-bold text-foreground mb-3">🎁 New Student Special</h3>
              <p className="text-foreground/80">
                Get your first trial lesson at 50% off to ensure we're the perfect fit for you!
              </p>
            </div>
            <div className="bg-gradient-to-br from-accent/5 to-accent/0 border border-accent/20 rounded-xl p-8">
              <h3 className="text-lg font-bold text-foreground mb-3">📋 Minimum Commitment</h3>
              <p className="text-foreground/80">
                All packages require a minimum of 3 lessons to ensure continuity and measurable progress.
              </p>
            </div>
          </div>

          <div className="mt-20 pt-20 border-t border-border/30">
            <h2 className="text-3xl font-bold text-center mb-12">Feature Comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-center">
                <thead>
                  <tr className="border-b-2 border-primary">
                    <th className="text-left py-4 px-6 font-bold text-foreground">Feature</th>
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
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-muted/20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-foreground/70">
              Find answers to common questions about our pricing and packages
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "Can I switch between packages?",
                a: "You can transition between Individual, Group, or Speaking Club formats at any time. Just contact us to discuss your options.",
              },
              {
                q: "What if I want more lessons beyond the minimum?",
                a: "You can continue with as many additional lessons as you want. Each extra lesson is billed at the regular rate for that package.",
              },
              {
                q: "How do I schedule my lessons?",
                a: "After enrollment, you'll coordinate directly with your teacher for scheduling. We offer flexible timing across morning, afternoon, and evening slots.",
              },
              {
                q: "What's your cancellation policy?",
                a: "We require 24 hours notice for cancellations. Lessons canceled with proper notice can be rescheduled for another time.",
              },
              {
                q: "Do you offer corporate training?",
                a: "Yes! We offer customized corporate packages for teams and organizations. Contact us for a tailored quote.",
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept bank transfers, UPI, and various digital payment methods. Contact our team for specific payment details.",
              },
            ].map((item, i) => (
              <div key={i} className="border border-border/30 rounded-lg p-6 hover:bg-white/50 transition">
                <h3 className="font-bold text-lg text-foreground mb-3">{item.q}</h3>
                <p className="text-foreground/80 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact-form"
        className="py-24 px-4 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground"
      >
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Ready to Start Learning?</h2>
            <p className="text-lg text-white/90 text-pretty">
              Book your 50% off trial lesson today and take the first step toward fluent English
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://t.me/SpeakFluentlySchool"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-bold hover:shadow-xl transition-all duration-200 hover:bg-white/95"
            >
              Chat on Telegram
              <ArrowRight size={20} />
            </a>
            <a
              href="mailto:hello@speakfluently.com"
              className="inline-flex items-center gap-2 bg-white/20 text-white border-2 border-white/50 px-8 py-4 rounded-lg font-bold hover:bg-white/30 transition-all duration-200 backdrop-blur-sm"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
