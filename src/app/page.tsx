import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Award,
  Users,
  CalendarCheck,
  CheckCircle2
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import TestimonialCard from "@/components/ui/TestimonialCard";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { servicesData } from "@/data/services";
import { testimonialsData } from "@/data/testimonials";
import { faqData } from "@/data/faq";
import { galleryData } from "@/data/gallery";

export default function HomePage() {
  const previewGallery = galleryData.slice(0, 4);

  return (
    <div className="overflow-x-hidden">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION */}
      {/* Desktop (md: & up): Full-width background banner with left text */}
      {/* Mobile (< md): Vertically stacked — Image cleanly on top, text below */}
      {/* ========================================================================= */}
      <section className="relative w-full bg-[#FAF7F2] border-b border-[#EAE2D3]/60">
        {/* DESKTOP LAYOUT (md and above): Full-width background banner */}
        <div className="hidden md:flex relative w-full min-h-[580px] lg:h-[calc(100vh-5rem)] max-h-[820px] items-center overflow-hidden">
          {/* Full-width original photo */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/pradheep-hero.png"
              alt="Pradheep Pattambi - Psychologist and Life Skill Coach"
              fill
              priority
              quality={100}
              className="object-cover object-[80%_15%] lg:object-[82%_15%]"
              sizes="100vw"
            />
          </div>

          {/* Hero Content on the left */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-12 md:py-16 w-full flex flex-col justify-center">
            <div className="max-w-xl lg:max-w-2xl space-y-4">
              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.8rem] xl:text-[4.2rem] font-bold text-forest-950 tracking-tight leading-[1.08]">
                Pradheep Pattambi
              </h1>

              {/* Secondary Heading */}
              <h2 className="text-2xl sm:text-3xl font-bold text-forest-850 tracking-tight">
                NLP Master Trainer
              </h2>

              {/* Supporting Text */}
              <p className="text-forest-950/90 text-sm sm:text-base leading-relaxed font-sans max-w-xl">
                Undertakes training for students, Teachers, clubs individuals and corporates
              </p>

              {/* Structured Subjects Section */}
              <div className="pt-2">
                <span className="text-xs uppercase tracking-[0.2em] font-bold text-forest-950 block mb-2">
                  Subjects
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs sm:text-sm text-forest-900 font-medium">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/80 border border-[#D8CCA8]/60 shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-olive-600 shrink-0" />
                    <span>NLP</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/80 border border-[#D8CCA8]/60 shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-olive-600 shrink-0" />
                    <span>Enniagram</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/80 border border-[#D8CCA8]/60 shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-olive-600 shrink-0" />
                    <span>TA</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/80 border border-[#D8CCA8]/60 shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-olive-600 shrink-0" />
                    <span>Therapees</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/80 border border-[#D8CCA8]/60 shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-olive-600 shrink-0" />
                    <span>Stress Mannagement</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/80 border border-[#D8CCA8]/60 shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-olive-600 shrink-0" />
                    <span>De Addiction</span>
                  </div>
                  <div className="col-span-2 sm:col-span-3 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/80 border border-[#D8CCA8]/60 shadow-2xs w-fit">
                    <span className="w-1.5 h-1.5 rounded-full bg-olive-600 shrink-0" />
                    <span>Relationship Issues etc</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-forest-900 text-[#FAF7F2] hover:bg-forest-800 transition-all shadow-sm hover:shadow-md text-sm sm:text-base font-medium tracking-wide group"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-forest-900/40 text-forest-950 bg-white/80 hover:bg-white transition-colors text-sm sm:text-base font-medium tracking-wide shadow-xs"
                >
                  <span>Get in Touch</span>
                </Link>
              </div>

              {/* Quick Trust Highlights */}
              <div className="pt-4 border-t border-[#D8CCA8]/70 grid grid-cols-3 gap-4 max-w-md">
                <div>
                  <span className="block text-2xl sm:text-3xl text-forest-950 font-bold leading-none mb-1">
                    20+
                  </span>
                  <span className="text-[11px] text-forest-900/80 font-sans uppercase tracking-wider font-semibold">
                    Years Service
                  </span>
                </div>
                <div>
                  <span className="block text-2xl sm:text-3xl text-forest-950 font-bold leading-none mb-1">
                    1000s
                  </span>
                  <span className="text-[11px] text-forest-900/80 font-sans uppercase tracking-wider font-semibold">
                    Lives Guided
                  </span>
                </div>
                <div>
                  <span className="block text-2xl sm:text-3xl text-forest-950 font-bold leading-none mb-1">
                    100%
                  </span>
                  <span className="text-[11px] text-forest-900/80 font-sans uppercase tracking-wider font-semibold">
                    Confidential
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE LAYOUT (under md): Complete hero visible immediately on load, text positioned towards the RIGHT SIDE */}
        <div className="md:hidden flex flex-col w-full bg-[#FAF7F2]">
          {/* Top: Compact hero photo */}
          <div className="relative w-full h-[200px] sm:h-[240px] bg-[#FAF7F2] overflow-hidden border-b border-[#EAE2D3]/50">
            <Image
              src="/images/pradheep-hero.png"
              alt="Pradheep Pattambi - Psychologist and Life Skill Coach"
              fill
              priority
              quality={100}
              className="object-cover object-[78%_12%]"
              sizes="100vw"
            />
          </div>

          {/* Bottom: Complete hero text block positioned toward the RIGHT SIDE */}
          <div className="w-full px-5 py-6 sm:px-8 sm:py-8 flex flex-col items-end text-right bg-[#FAF7F2]">
            <div className="max-w-md w-full flex flex-col items-end text-right space-y-3">
              {/* Name - clearly visible immediately */}
              <h1 className="text-2xl sm:text-3xl font-bold text-forest-950 tracking-tight leading-[1.15]">
                Pradheep Pattambi
              </h1>

              {/* Secondary Heading - clearly visible immediately */}
              <h2 className="text-base sm:text-lg font-bold text-forest-850 tracking-tight">
                NLP Master Trainer
              </h2>

              {/* Training Description */}
              <p className="text-forest-900/90 text-xs sm:text-sm leading-relaxed font-sans max-w-xs">
                Undertakes training for students, Teachers, clubs individuals and corporates
              </p>

              {/* Subjects */}
              <div className="pt-1.5 w-full flex flex-col items-end text-right">
                <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-forest-950 mb-1.5 block">
                  Subjects
                </span>
                <div className="flex flex-wrap justify-end gap-1.5 text-xs text-forest-900 font-medium max-w-sm">
                  <span className="px-2.5 py-1 rounded-md bg-white border border-[#D8CCA8]/70 shadow-2xs">NLP</span>
                  <span className="px-2.5 py-1 rounded-md bg-white border border-[#D8CCA8]/70 shadow-2xs">Enniagram</span>
                  <span className="px-2.5 py-1 rounded-md bg-white border border-[#D8CCA8]/70 shadow-2xs">TA</span>
                  <span className="px-2.5 py-1 rounded-md bg-white border border-[#D8CCA8]/70 shadow-2xs">Therapees</span>
                  <span className="px-2.5 py-1 rounded-md bg-white border border-[#D8CCA8]/70 shadow-2xs">Stress Mannagement</span>
                  <span className="px-2.5 py-1 rounded-md bg-white border border-[#D8CCA8]/70 shadow-2xs">De Addiction</span>
                  <span className="px-2.5 py-1 rounded-md bg-white border border-[#D8CCA8]/70 shadow-2xs">Relationship Issues etc</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap justify-end gap-2.5 pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-forest-900 text-[#FAF7F2] text-xs font-medium tracking-wide shadow-sm hover:bg-forest-800 transition-colors"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-forest-900/40 text-forest-950 bg-white text-xs font-medium tracking-wide shadow-xs hover:bg-[#F3EDE2] transition-colors"
                >
                  <span>Get in Touch</span>
                </Link>
              </div>

              {/* Quick Trust Highlights */}
              <div className="pt-3 border-t border-[#D8CCA8]/60 w-full grid grid-cols-3 gap-2 text-center">
                <div>
                  <span className="block text-xl text-forest-950 font-bold leading-none mb-1">
                    20+
                  </span>
                  <span className="text-[10px] text-forest-900/80 font-sans uppercase tracking-wider font-semibold">
                    Years Service
                  </span>
                </div>
                <div>
                  <span className="block text-xl text-forest-950 font-bold leading-none mb-1">
                    1000s
                  </span>
                  <span className="text-[10px] text-forest-900/80 font-sans uppercase tracking-wider font-semibold">
                    Lives Guided
                  </span>
                </div>
                <div>
                  <span className="block text-xl text-forest-950 font-bold leading-none mb-1">
                    100%
                  </span>
                  <span className="text-[10px] text-forest-900/80 font-sans uppercase tracking-wider font-semibold">
                    Confidential
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. ABOUT PREVIEW SECTION — BALANCED WITH DISTINCT SMALLER PHOTO */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 lg:py-32 bg-[#F8F5EE] border-b border-[#EAE2D3]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Distinct photo (slightly cropped from right side only, face/body intact, no top crop) */}
            <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
              <div className="relative w-full max-w-sm sm:max-w-md rounded-3xl overflow-hidden shadow-md border border-[#EAE2D3] bg-white aspect-[4/5] p-3 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <Image
                    src="/images/photo-4-rightcrop.png"
                    alt="Pradheep N.V. Portrait - Psychologist in Kerala"
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 35vw"
                  />
                </div>
              </div>
            </div>

            {/* Right: About Text Content */}
            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2">
                <span className="w-6 h-[1.5px] bg-olive-600" />
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-olive-800">
                  ABOUT ME
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl text-forest-950 font-bold leading-tight tracking-tight">
                A little about Pradheep
              </h2>

              <div className="space-y-4">
                <p className="text-xl sm:text-2xl text-forest-800 font-semibold leading-snug">
                  &ldquo;Elevating Lives Through Counseling and Inspiring Transformation.&rdquo;
                </p>
                <p className="text-olive-700 font-medium text-base sm:text-lg">
                  &ldquo;Exploring the uncharted depths of your mind to illuminate the path to personal transformation.&rdquo;
                </p>
                <p className="text-muted-text text-base sm:text-lg leading-relaxed pt-2">
                  Welcome to a sanctuary of self-discovery and healing. I&rsquo;m{" "}
                  <strong className="text-forest-950 font-semibold">PRADHEEP N.V.</strong>, a
                  Psychologist in Kerala dedicated to guiding individuals through their
                  personal growth journeys. With deep compassion and years of experience, I
                  help uncover the resilience and strength that already exist within you.
                </p>
                <p className="text-muted-text text-base sm:text-lg leading-relaxed">
                  My approach is rooted in the belief that every mind holds the power to heal
                  and evolve. Together, we&rsquo;ll explore your challenges and rediscover your inner
                  potential. Thank you for considering me as your partner on this transformative
                  path toward clarity, confidence, and lasting fulfillment.
                </p>
              </div>

              <div className="pt-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-forest-900 text-[#FAF7F2] hover:bg-forest-800 transition-all text-sm font-medium tracking-wide shadow-sm group"
                >
                  <span>Discover More</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. SERVICES SECTION — BRIGHT WARM CREAM */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 lg:py-32 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="HOLISTIC SERVICES"
            title="Guiding you towards mental wellness and personal growth."
            description="Empathetic, evidence-informed psychological support customized to your personal, emotional, and professional path."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
            {servicesData.map((service) => (
              <ServiceCard key={service.id} service={service} variant="elevated" />
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. PORTFOLIO / GALLERY PREVIEW — BRIGHT & REFINED */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 lg:py-32 bg-[#F8F5EE] border-t border-b border-[#EAE2D3]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-6 h-[1.5px] bg-olive-600" />
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-olive-800">
                  MOMENTS OF IMPACT
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl text-forest-950 font-bold leading-tight tracking-tight">
                A window into the transformative journeys I’ve guided
              </h2>
              <p className="mt-4 text-muted-text text-base sm:text-lg leading-relaxed">
                A window into the transformative journeys I’ve guided and the stories of
                personal growth and healing I’ve been privileged to witness.
              </p>
            </div>
            <div>
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-forest-900 text-[#FAF7F2] hover:bg-forest-800 transition-colors text-sm font-medium tracking-wide shadow-sm group"
              >
                <span>View Gallery</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Gallery Preview Grid — Pure photos, object-contain, no captions or labels */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {previewGallery.map((item) => (
              <Link
                key={item.id}
                href="/gallery"
                className="group relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-[#FAF7F2] border border-[#EAE2D3] shadow-xs hover:border-forest-900/40 hover:shadow-md transition-all duration-300 flex items-center justify-center p-3"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={item.imageSrc}
                    alt="Pradheep Pattambi gallery photo"
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. TESTIMONIALS SECTION — BRIGHT IVORY */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 lg:py-32 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="WHAT MY CLIENTS SAY"
            title="Their stories of growth, healing, and transformation"
            description="Real reflections from peers, trainers, and individuals who experienced guidance with Pradheep N.V."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. STAY IN TOUCH — BRIGHT, FRESH PALE SAGE BACKGROUND */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#EDF2EB] text-forest-950 border-t border-b border-[#D8CCA8]/60 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <span className="text-xs uppercase tracking-[0.25em] text-olive-800 font-semibold">
            YOUR TRANSFORMATION AWAITS
          </span>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight text-forest-950 tracking-tight">
            Let’s take the next step together.
          </h2>

          <p className="text-muted-text text-base sm:text-xl max-w-2xl mx-auto leading-relaxed">
            &ldquo;Whether you’re looking for personal guidance, career clarity, or support
            through life’s challenges, I’m here to help.&rdquo;
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-9 py-4 rounded-full bg-forest-900 text-[#FAF7F2] hover:bg-forest-800 transition-colors text-base font-medium shadow-sm hover:shadow group"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="https://api.whatsapp.com/send?phone=919567654880"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-forest-900/30 text-forest-950 bg-white hover:bg-[#F3EDE2] transition-colors text-base font-medium"
            >
              <span>WhatsApp Message</span>
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. FAQ SECTION — BRIGHT WARM CREAM */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 lg:py-32 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="FREQUENTLY ASKED QUESTIONS"
            title="Clear answers to your common questions."
            description="Find clarity regarding session formats, counseling confidentiality, premarital guidance, and the therapeutic journey."
            align="center"
          />

          <FAQAccordion items={faqData} defaultOpenIndex={0} />
        </div>
      </section>
    </div>
  );
}
