import React from 'react'
import Link from 'next/link'

export default function Footer ()  {
  return (
      <footer id="contact" className="bg-foreground text-background py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">About Us</h3>
              <p className="text-background/80">
                Dedicated to helping students master English communication with confidence.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-background/80">
                <li>
                  <Link href="/courses" className="hover:text-background transition">
                    Courses
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="hover:text-background transition">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-background transition">
                    Home
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Contact</h3>
              <p className="text-background/80">Telegram: @itsslucki</p>
              <p className="text-background/80">Email: hello@schoolname.com</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Follow Us</h3>
              <div className="flex gap-4 text-background/80">
                <a href="#" className="hover:text-background transition">
                  Instagram
                </a>
                <a href="#" className="hover:text-background transition">
                  Facebook
                </a>
                <a href="#" className="hover:text-background transition">
                  Twitter
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-background/70">
            <p>&copy; 2025 sname. All rights reserved.</p>
          </div>
        </div>
      </footer>
  )
}


