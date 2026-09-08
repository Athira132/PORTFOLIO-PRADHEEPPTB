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
      {/* 1. HERO SECTION — IMAGE-FIRST, MINIMAL EDITORIAL TEXT ON LEFT */}
      {/* ========================================================================= */}
      <section className="relative w-full bg-[#FAF7F2] border-b border-[#EAE2D3]/60">
        {/* DESKTOP LAYOUT (md and above): Full-width background banner with direct typography overlay — NO BOX / NO CARD */}
        <div className="hidden md:flex relative w-full min-h-[580px] lg:h-[calc(100vh-5rem)] max-h-[820px] items-center overflow-hidden">
          {/* Full-width original photo — 100% natural, NO overlays or shades */}
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

          {/* Typography Direct Overlay on the Left — No Card, No Box */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-12 md:py-16 w-full flex items-center">
            <div className="max-w-xl lg:max-w-2xl space-y-5">
              {/* Minimal Accent Label */}
              <div className="inline-flex items-center gap-2">
                <span className="w-8 h-[2px] bg-olive-700" />
                <span className="text-xs sm:text-sm uppercase tracking-[0.25em] font-bold text-olive-900">
                  NLP Master Trainer
                </span>
              </div>

              {/* Main Heading — Large, Strong, Editorial */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.5rem] font-bold text-forest-950 tracking-tight leading-[1.05]">
                Pradheep Pattambi
              </h1>

              {/* Subheading */}
              <p className="text-lg sm:text-xl lg:text-2xl text-forest-900 font-medium tracking-tight">
                Psychologist &bull; Life Skill Coach &bull; Speaker
              </p>

              {/* Supporting Line */}
              <p className="text-forest-950/80 text-sm sm:text-base leading-relaxed font-sans max-w-lg">
                Undertakes specialized training for students, Teachers, clubs, individuals and corporates.
              </p>

              {/* Action Buttons — Sits directly over the image */}
              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-forest-900 text-[#FAF7F2] hover:bg-forest-800 text-sm font-medium tracking-wide shadow-sm hover:shadow-md transition-all"
                >
                  <span>Get in Touch</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-forest-900/40 text-forest-950 hover:bg-forest-900 hover:text-[#FAF7F2] text-sm font-medium tracking-wide transition-colors"
                >
                  <span>About Pradheep</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE LAYOUT (under md): Direct typography overlay on the LEFT SIDE inside hero banner — NO BOX / NO CARD */}
        <div className="md:hidden relative w-full h-[400px] sm:h-[460px] bg-[#FAF7F2] overflow-hidden">
          {/* Full hero photo — 100% natural, NO overlays, shades, or gradients */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/pradheep-hero.png"
              alt="Pradheep Pattambi - Psychologist and Life Skill Coach"
              fill
              priority
              quality={100}
              className="object-cover object-[70%_15%] sm:object-[75%_15%]"
              sizes="100vw"
            />
          </div>

          {/* Typography Direct Overlay on the LEFT SIDE — Started Higher, Inside Hero, No Box, No Card */}
          <div className="relative z-10 h-full w-full flex justify-start items-start pt-7 sm:pt-9 px-5 sm:px-8 pointer-events-none">
            <div className="max-w-[240px] sm:max-w-[280px] flex flex-col items-start text-left space-y-2 pointer-events-auto">
              {/* Accent Tag */}
              <div className="inline-flex items-center gap-1.5">
                <span className="w-5 h-[1.5px] bg-olive-700" />
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-olive-900">
                  NLP Master Trainer
                </span>
              </div>

              {/* Main Heading — Large, attention-grabbing, left-aligned, inside hero */}
              <h1 className="text-2xl sm:text-3xl font-extrabold text-forest-950 tracking-tight leading-[1.1]">
                Pradheep Pattambi
              </h1>

              {/* Subheading */}
              <p className="text-xs sm:text-sm text-forest-900 font-semibold leading-snug">
                Psychologist &bull; Life Skill Coach
              </p>

              {/* Compact CTA sitting directly on the image */}
              <div className="pt-1 flex items-center gap-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1 px-4 py-2 rounded-full bg-forest-900 text-[#FAF7F2] hover:bg-forest-800 text-xs font-medium tracking-wide shadow-sm"
                >
                  <span>Get in Touch</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-1 px-3.5 py-2 rounded-full border border-forest-900/40 text-forest-950 hover:bg-forest-900 hover:text-[#FAF7F2] text-xs font-medium tracking-wide transition-colors"
                >
                  <span>About</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. CORE TRAINING SUBJECTS & TRUST HIGHLIGHTS (DEDICATED SECTION) */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-16 bg-[#FAF7F2] border-b border-[#EAE2D3]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-2xl space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF1EA] border border-[#D8CCA8]/50 w-fit">
                <span className="w-2 h-2 rounded-full bg-olive-600" />
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-olive-800">
                  TRAINING & SPECIALIZATIONS
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-forest-950 tracking-tight">
                Core Subjects & Training Focus
              </h2>
              <p className="text-sm sm:text-base text-muted-text leading-relaxed font-sans">
                Pradheep Pattambi undertakes specialized psychological and life skill training for students, teachers, clubs, individuals, and corporate teams across Kerala.
              </p>
            </div>

            {/* Trust Highlights */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 bg-white p-4 sm:p-5 rounded-2xl border border-[#EAE2D3] shadow-xs shrink-0 text-center">
              <div>
                <span className="block text-xl sm:text-2xl font-bold text-forest-950 leading-none mb-1">
                  20+
                </span>
                <span className="text-[10px] sm:text-xs text-forest-900/80 font-sans uppercase tracking-wider font-semibold">
                  Years Service
                </span>
              </div>
              <div className="border-x border-[#EAE2D3] px-2 sm:px-4">
                <span className="block text-xl sm:text-2xl font-bold text-forest-950 leading-none mb-1">
                  1000s
                </span>
                <span className="text-[10px] sm:text-xs text-forest-900/80 font-sans uppercase tracking-wider font-semibold">
                  Lives Guided
                </span>
              </div>
              <div>
                <span className="block text-xl sm:text-2xl font-bold text-forest-950 leading-none mb-1">
                  100%
                </span>
                <span className="text-[10px] sm:text-xs text-forest-900/80 font-sans uppercase tracking-wider font-semibold">
                  Confidential
                </span>
              </div>
            </div>
          </div>

          {/* Subjects Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {[
              { name: "NLP", desc: "Neuro-Linguistic Programming mastery" },
              { name: "Enniagram", desc: "Personality typing & self-awareness" },
              { name: "TA", desc: "Transactional Analysis & behavior" },
              { name: "Therapees", desc: "Evidence-based psychological therapies" },
              { name: "Stress Mannagement", desc: "Practical coping strategies" },
              { name: "De Addiction", desc: "Compassionate recovery support" },
              { name: "Relationship Issues etc", desc: "Interpersonal conflict resolution" },
              { name: "Life Skills & Mindset", desc: "Holistic empowerment for youth" }
            ].map((subject, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-white border border-[#EAE2D3] hover:border-[#D8CCA8] shadow-xs hover:shadow-sm transition-all"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-2 h-2 rounded-full bg-olive-600" />
                  <h3 className="text-sm sm:text-base font-bold text-forest-950">
                    {subject.name}
                  </h3>
                </div>
                <p className="text-xs text-muted-text font-sans leading-relaxed">
                  {subject.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. ABOUT PREVIEW SECTION — BALANCED WITH DISTINCT SMALLER PHOTO */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 lg:py-32 bg-[#F8F5EE] border-b border-[#EAE2D3]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Distinct photo (consultation desk, 100% visible, no top crop) */}
            <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
              <div className="relative w-full max-w-sm sm:max-w-md rounded-3xl overflow-hidden shadow-md border border-[#EAE2D3] bg-white aspect-[4/5] p-3 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <Image
                    src="/images/gallery/gallery-05.jpg"
                    alt="Pradheep N.V. at consultation desk"
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
