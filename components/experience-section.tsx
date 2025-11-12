"use client"

import { BentoTilt, BentoCard } from "./bento-components"

export const ExperiencesSection = () => {
  return (
    <section className="py-20 px-4 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        {/* Section Intro */}
        <div className="mb-16 text-center">
          <p className="text-emerald-400 text-sm font-semibold tracking-wider uppercase mb-3">
            Our Vision, Mission and Values
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 text-balance leading-tight">
            We transform the learning Experience
          </h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto text-pretty leading-relaxed">
            At Oakwood ESL, our mission is to provide holistic, inclusive support for all students to achieve their
            goals of communicating in English and to grow their unique talents so that they find joy and fulfillment in
            higher education, career, and life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          
          <BentoTilt className="md:col-span-8 h-[500px] md:h-[600px]">
            <BentoCard
              src={["/assets/photo_2025-11-09_11-31-47.jpg", "/assets/photo_2025-11-09_11-29-30.jpg"]}
              isImage={true}
              title="Our Mission: Every Student, Every Success"
              description="We create a supportive, inclusive learning environment where students from all backgrounds discover their potential and achieve their English language goals."
            />
          </BentoTilt>

          {/* Row 1: Core Values - Portrait Video */}
          <BentoTilt className="md:col-span-4 h-[500px] md:h-[600px]">
            <BentoCard
              src="/assets/videos/Play.mp4"
              isImage={false}
              title="Values in Action"
              description="Excellence, respect, inclusivity, and joy—see our values come alive in every lesson."
            />
          </BentoTilt>

          <BentoTilt className="md:col-span-4 h-[380px]">
            <BentoCard
              src={["/assets/photo_2025-11-09_11-31-50.jpg", "/assets/photo_2025-11-09_11-29-52.jpg"]}
              isImage={true}
              title="Visionary Learning"
              description="We envision a world where language opens doors—to education, careers, and meaningful connections."
            />
          </BentoTilt>

          <BentoTilt className="md:col-span-4 h-[380px]">
            <BentoCard
              src={["/assets/photo_2025-11-09_11-29-37.jpg", "/assets/photo_2025-11-09_11-30-06.jpg"]}
              isImage={true}
              title="Personalized Support"
              description="Dedicated teachers and mentors who believe in you, understand your goals, and guide you every step forward."
            />
          </BentoTilt>

          <BentoTilt className="md:col-span-4 h-[380px]">
            <BentoCard
              src="/assets/videos/Play.mp4"
              isImage={false}
              title="Inclusive Community"
              description="Join a vibrant, welcoming community where diversity is celebrated and every voice matters."
            />
          </BentoTilt>
        </div>

        <div className="mt-16 text-center">
          <blockquote className="text-2xl md:text-3xl font-medium text-white max-w-4xl mx-auto italic text-balance leading-relaxed">
            "At Oakwood ESL, we are committed to transforming the English learning experience. From the moment you have
            your first lesson with us, you will notice the difference. Beyond the warm welcome and inviting environment
            is a team of highly trained teachers, administrators and support personnel, all of whom share the goal of
            ensuring that our students are highly engaged in their English learning journey and feel 100% confident
            using the English language."
          </blockquote>
          <p className="mt-6 text-emerald-400 font-semibold text-lg">— The Oakwood ESL Team</p>
        </div>
      </div>
    </section>
  )
}
