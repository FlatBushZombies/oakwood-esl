"use client"

import React from 'react'
import Link from 'next/link'
import { FaVk, FaTelegramPlane } from "react-icons/fa";
import { TbBrandInstagramFilled } from "react-icons/tb";
import Image from 'next/image';
import { useLanguage } from '@/contexts/language-context';
import { translations } from '@/lib/translation';

export default function Footer() {
  const { language } = useLanguage()
  const t = translations[language].footer

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
            <h3 className="font-bold text-lg mb-4">{t.aboutUs}</h3>
            <p className="text-background/80">
              {t.aboutText}
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">{t.quickLinks}</h3>
            <ul className="space-y-2 text-background/80">
              <li>
                <Link href="/courses" className="hover:text-background transition">
                  {t.courses}
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-background transition">
                  {t.pricing}
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-background transition">
                  {t.home}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">{t.contact}</h3>
            <p className="text-background/80">Email: oakwoodesl@mail.ru</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">{t.followUs}</h3>
            <div className="flex gap-4 text-background/80">
              <a href="https://vk.com/club234358789" className="hover:text-background transition">
                <FaVk size={24} color='white' />
              </a>
              <a href="https://t.me/oakwoodesl" className="hover:text-background transition" target='_blank'>
                <FaTelegramPlane size={24} color='white' />
              </a>
              <a href="https://www.instagram.com/oakwoodesl/" className="hover:text-background transition" target='_blank'>
                <TbBrandInstagramFilled size={24} color='white'/>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-background/20 pt-8 text-center text-background/70">
          <p>{t.rights}</p>
        </div>
      </div>
    </footer>
  )
}
