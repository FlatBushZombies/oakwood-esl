"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { MdMarkEmailUnread } from "react-icons/md"
import { BsTelegram } from "react-icons/bs";
import { BsPhoneFill } from "react-icons/bs";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-primary to-primary/95 text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-block">
            <span className="text-sm font-semibold bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
              Get in Touch
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-balance">Contact Us</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto text-pretty">
            Have questions? We'd love to hear from you. Reach out to us through any of these channels.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {/* Telegram */}
            <div className="bg-white rounded-xl border border-border/30 p-8 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-center w-14 h-14 bg-blue-500/10 rounded-lg mb-6">
                <BsTelegram size={20} color="#1a73e8" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Telegram</h3>
              <p className="text-foreground/70 mb-6 text-sm leading-relaxed">
                Connect with us on Telegram for quick responses and instant updates about your lessons.
              </p>
              <a
                href="https://t.me/itsslucki"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
              >
                Message Us
                <span>→</span>
              </a>
            </div>

            {/* Email */}
            <div className="bg-white rounded-xl border border-border/30 p-8 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-center w-14 h-14 bg-primary/10 rounded-lg mb-6">
                <MdMarkEmailUnread size={20} color="#1a73e8"/>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Email</h3>
              <p className="text-foreground/70 mb-6 text-sm leading-relaxed">
                Send us an email with your inquiry and we'll respond within 24 hours.
              </p>
              <a
                href="mailto:hello@sname.com"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
              >
                hello@sname.com
                <span>→</span>
              </a>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-xl border border-border/30 p-8 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-center w-14 h-14 bg-green-500/10 rounded-lg mb-6">
                <BsPhoneFill size={20} color="green" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Phone</h3>
              <p className="text-foreground/70 mb-6 text-sm leading-relaxed">
                Call us directly to speak with our team and schedule your trial lesson.
              </p>
              <a
                href="tel:+7 903 747 1267"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
              >
                +7 903 747 1267
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Send us a Message</h2>
              <p className="text-foreground/70 mb-8 leading-relaxed text-lg">
                Fill out the form and we'll get back to you as soon as possible. Whether you have questions about our
                courses, pricing, or just want to say hello, we're here to help.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Office Location</h4>
                    <p className="text-foreground/70 text-sm">Available for online and offline lessons</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Response Time</h4>
                    <p className="text-foreground/70 text-sm">We typically respond within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-border/30 p-8 shadow-lg">
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                    Email Address
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
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (234) 567-890"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your inquiry..."
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-3 px-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 hover:opacity-90 flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send size={18} />
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
            <h2 className="text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-foreground/70">Quick answers to help you get started</p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "What are your typical response times?",
                a: "We aim to respond to all inquiries within 24 hours on weekdays. Telegram messages are typically answered even faster.",
              },
              {
                q: "Can I book a trial lesson directly?",
                a: "Yes! Contact us through Telegram, email, or use our contact form to book your 50% off trial lesson.",
              },
              {
                q: "Do you offer offline lessons?",
                a: "We primarily offer online lessons for flexibility, but we can discuss custom arrangements based on your needs.",
              },
              {
                q: "What if I have questions about specific courses?",
                a: "Visit our Courses page for detailed information, or contact us directly for personalized recommendations.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-lg p-6 border border-border/30 hover:shadow-md transition-all">
                <h3 className="font-bold text-foreground mb-3">{item.q}</h3>
                <p className="text-foreground/80 leading-relaxed text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">Ready to Start Your Journey?</h2>
          <p className="text-lg text-white/90 text-pretty">
            Don't wait! Book your 50% off trial lesson today and take the first step toward fluent English.
          </p>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-bold hover:shadow-xl transition-all duration-200 hover:bg-white/95"
          >
            Explore Our Packages
            <span>→</span>
          </Link>
        </div>
      </section>
    </main>
  )
}
