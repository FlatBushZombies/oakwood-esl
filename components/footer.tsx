import React from 'react'
import Link from 'next/link'
import { FaVaadin, FaVk } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { TbBrandInstagramFilled } from "react-icons/tb";
import Image from 'next/image';

export default function Footer ()  {
  return (
      <footer id="contact" className="bg-foreground text-background py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <Image
                alt="Oakwood "
                src="/oakwood-footer.png"
                width={90}
                height={90}
                priority
            />
            <div>
              <h3 className="font-bold text-lg mb-4">About Us</h3>
              <p className="text-background/80">
                 Oakwood ESL is a dynamic and down-to-earth English school that nurtures bright and imaginative students. We focus on real communication and prepare our students for real life situations.
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
              <p className="text-background/80">Email: hello@oakwood.com</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Follow Us</h3>
              <div className="flex gap-4 text-background/80">
                <a href="#" className="hover:text-background transition">
                  <FaVk size={24} color='white' />
                </a>
                <a href="#" className="hover:text-background transition">
                  <FaTelegramPlane size={24} color='white' />
                </a>
                <a href="https://www.instagram.com/oakwoodesl/" className="hover:text-background transition">
                  <TbBrandInstagramFilled size={24} color='white'/>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-background/70">
            <p>&copy; 2025 Oakwood ESL. All rights reserved.</p>
          </div>
        </div>
      </footer>
  )
}


