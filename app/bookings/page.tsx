"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Calendar, Users, BookOpen, CheckCircle, Gift, ArrowRight } from "lucide-react"
import { BsTelegram } from "react-icons/bs"

export default function Booking() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    courseType: "",
    level: "",
    packageType: "",
    preferredDate: "",
    preferredTime: "",
    goals: "",
    hearAboutUs: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/send-booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          courseType: "",
          level: "",
          packageType: "",
          preferredDate: "",
          preferredTime: "",
          goals: "",
          hearAboutUs: "",
        })
        alert("Booking request submitted successfully! We'll contact you soon to confirm your trial lesson.")
      } else {
        setSubmitStatus("error")
        alert("Failed to submit booking. Please try again or contact us via Telegram.")
      }
    } catch (error) {
      console.error("Error submitting booking:", error)
      setSubmitStatus("error")
      alert("Failed to submit booking. Please try again or contact us via Telegram.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-primary to-primary/95 text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-block">
            <span className="text-sm font-semibold bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm flex items-center gap-2">
              <Gift className="w-4 h-4" />
              50% Off Your First Lesson
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-balance">Book Your Trial Lesson</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto text-pretty">
            Start your English learning journey today. Choose your course, pick a time, and get ready to speak fluently
            with native teachers.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: Gift,
                title: "50% Off Trial",
                description: "Your first lesson at half price",
              },
              {
                icon: Users,
                title: "Native Teachers",
                description: "Learn from expert native speakers",
              },
              {
                icon: Calendar,
                title: "Flexible Schedule",
                description: "Choose times that work for you",
              },
              {
                icon: CheckCircle,
                title: "No Commitment",
                description: "Try before you commit to a package",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-border/30 p-6 text-center hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-foreground/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl border border-border/30 p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-foreground mb-6">Complete Your Booking</h2>
                <p className="text-foreground/70 mb-8">
                  Fill out the form below and we'll get back to you within 24 hours to confirm your trial lesson.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Users className="w-5 h-5 text-primary" />
                      Personal Information
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-semibold text-foreground mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="John"
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-semibold text-foreground mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="Doe"
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="you@example.com"
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (234) 567-890"
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Course Selection */}
                  <div className="pt-6 border-t border-border">
                    <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-primary" />
                      Course Selection
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="courseType" className="block text-sm font-semibold text-foreground mb-2">
                          Course Type *
                        </label>
                        <select
                          id="courseType"
                          name="courseType"
                          value={formData.courseType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                          required
                        >
                          <option value="">Select a course</option>
                          <option value="general">General English</option>
                          <option value="business">Business English</option>
                          <option value="conversation">Conversation Practice</option>
                          <option value="exam">Exam Preparation (IELTS/TOEFL)</option>
                          <option value="kids">English for Kids</option>
                          <option value="intensive">Intensive Course</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="level" className="block text-sm font-semibold text-foreground mb-2">
                          Current Level *
                        </label>
                        <select
                          id="level"
                          name="level"
                          value={formData.level}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                          required
                        >
                          <option value="">Select your level</option>
                          <option value="beginner">Beginner (A1)</option>
                          <option value="elementary">Elementary (A2)</option>
                          <option value="intermediate">Intermediate (B1)</option>
                          <option value="upper-intermediate">Upper Intermediate (B2)</option>
                          <option value="advanced">Advanced (C1)</option>
                          <option value="proficient">Proficient (C2)</option>
                          <option value="not-sure">Not Sure</option>
                        </select>
                      </div>
                    </div>

                    <div className="mt-4">
                      <label htmlFor="packageType" className="block text-sm font-semibold text-foreground mb-2">
                        Interested Package *
                      </label>
                      <select
                        id="packageType"
                        name="packageType"
                        value={formData.packageType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        required
                      >
                        <option value="">Select a package</option>
                        <option value="trial">Trial Lesson Only (50% off)</option>
                        <option value="starter">Starter Package (8 lessons)</option>
                        <option value="standard">Standard Package (16 lessons)</option>
                        <option value="intensive">Intensive Package (24 lessons)</option>
                        <option value="unlimited">Unlimited Monthly</option>
                      </select>
                    </div>
                  </div>

                  {/* Scheduling */}
                  <div className="pt-6 border-t border-border">
                    <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-primary" />
                      Scheduling Preferences
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="preferredDate" className="block text-sm font-semibold text-foreground mb-2">
                          Preferred Start Date *
                        </label>
                        <input
                          type="date"
                          id="preferredDate"
                          name="preferredDate"
                          value={formData.preferredDate}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="preferredTime" className="block text-sm font-semibold text-foreground mb-2">
                          Preferred Time *
                        </label>
                        <select
                          id="preferredTime"
                          name="preferredTime"
                          value={formData.preferredTime}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                          required
                        >
                          <option value="">Select a time slot</option>
                          <option value="morning">Morning (9:00 AM - 12:00 PM)</option>
                          <option value="afternoon">Afternoon (12:00 PM - 5:00 PM)</option>
                          <option value="evening">Evening (5:00 PM - 9:00 PM)</option>
                          <option value="flexible">Flexible</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div className="pt-6 border-t border-border">
                    <div className="mb-4">
                      <label htmlFor="goals" className="block text-sm font-semibold text-foreground mb-2">
                        Learning Goals (Optional)
                      </label>
                      <textarea
                        id="goals"
                        name="goals"
                        value={formData.goals}
                        onChange={handleChange}
                        placeholder="Tell us about your English learning goals and what you hope to achieve..."
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                      />
                    </div>

                    <div>
                      <label htmlFor="hearAboutUs" className="block text-sm font-semibold text-foreground mb-2">
                        How did you hear about us? (Optional)
                      </label>
                      <select
                        id="hearAboutUs"
                        name="hearAboutUs"
                        value={formData.hearAboutUs}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      >
                        <option value="">Select an option</option>
                        <option value="google">Google Search</option>
                        <option value="social">Social Media</option>
                        <option value="friend">Friend or Family</option>
                        <option value="telegram">Telegram</option>
                        <option value="advertisement">Advertisement</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-primary-foreground py-4 px-6 rounded-lg font-bold hover:shadow-lg transition-all duration-200 hover:opacity-90 flex items-center justify-center gap-2 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Submitting..." : "Book My Trial Lesson"}
                    <ArrowRight className="w-5 h-5" />
                  </button>

                  <p className="text-sm text-foreground/60 text-center">
                    By submitting this form, you agree to our terms and privacy policy.
                  </p>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Quick Contact */}
              <div className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-4">Need Help?</h3>
                <p className="text-white/90 mb-6 text-sm">
                  Contact us directly on Telegram for instant assistance with your booking.
                </p>
                <a
                  href="https://t.me/itsslucki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
                >
                  <BsTelegram className="w-5 h-5" />
                  Message on Telegram
                </a>
              </div>

              {/* What Happens Next */}
              <div className="bg-white rounded-2xl border border-border/30 p-6 shadow-md">
                <h3 className="text-xl font-bold text-foreground mb-4">What Happens Next?</h3>
                <div className="space-y-4">
                  {[
                    {
                      step: "1",
                      text: "We review your booking request",
                    },
                    {
                      step: "2",
                      text: "Receive confirmation within 24 hours",
                    },
                    {
                      step: "3",
                      text: "Get matched with your teacher",
                    },
                    {
                      step: "4",
                      text: "Start your trial lesson!",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="flex items-center justify-center w-7 h-7 bg-primary/10 text-primary rounded-full font-bold text-sm flex-shrink-0">
                        {item.step}
                      </div>
                      <p className="text-sm text-foreground/80 pt-1">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust Badges */}
              <div className="bg-white rounded-2xl border border-border/30 p-6 shadow-md">
                <h3 className="text-lg font-bold text-foreground mb-4">Why Book With Us?</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-foreground/80">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span>25+ Active Students</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground/80">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span>10+ Native Teachers</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground/80">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span>Flexible Schedule</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground/80">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span>Money-Back Guarantee</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Booking FAQs</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                q: "What's included in the trial lesson?",
                a: "A full 60-minute session with a native teacher, level assessment, and personalized learning plan.",
              },
              {
                q: "Can I choose my teacher?",
                a: "Yes! We'll match you based on your preferences and you can request changes anytime.",
              },
              {
                q: "What if I need to reschedule?",
                a: "You can reschedule up to 24 hours before your lesson with no penalty.",
              },
              {
                q: "Do I need to commit to a package?",
                a: "Not at all! The trial lesson has no commitment. Choose a package only if you're satisfied.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-lg p-6 border border-border/30">
                <h3 className="font-bold text-foreground mb-2">{item.q}</h3>
                <p className="text-sm text-foreground/70">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alternative CTA */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Not Ready to Book Yet?</h2>
          <p className="text-lg text-foreground/70">
            Explore our courses and pricing to find the perfect package for your English learning journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/courses"
              className="bg-secondary text-secondary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition inline-block"
            >
              View All Courses
            </Link>
            <Link
              href="/pricing"
              className="bg-white border-2 border-border text-foreground px-8 py-3 rounded-lg font-semibold hover:shadow-md transition inline-block"
            >
              See Pricing
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
