import React from "react";
import type { Metadata } from "next";
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
import TestimonialCard from "@/components/ui/TestimonialCard";
import FAQAccordion from "@/components/ui/FAQAccordion";
import JsonLd from "@/components/seo/JsonLd";
import BookAppointmentButton from "@/components/ui/BookAppointmentButton";
import MainServicesSection from "@/components/services/MainServicesSection";
import { testimonialsData } from "@/data/testimonials";
import { faqData } from "@/data/faq";
import { galleryData } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Psychologist in Pattambi | Pradheep Pattambi",
  description:
    "Looking for counselling in Pattambi or Palakkad? Explore psychological counselling, NLP training, personal development and professional training services at Pradheep Pattambi.",
  keywords: [
    "Psychologist in Pattambi",
    "Psychologist in Palakkad",
    "Counselling Centre in Pattambi",
    "Counsellor in Pattambi",
    "Pradheep Pattambi",
    "Mental Health Counselling in Palakkad",
    "Psychological Counselling in Kerala",
    "Individual Counselling in Pattambi",
    "Family Counselling in Pattambi",
    "Psychologist near Pattambi",
    "Counselling in Palakkad"
  ],
  alternates: {
    canonical: "https://pradheeppattambi.com/"
  },
  openGraph: {
    title: "Psychologist in Pattambi | Pradheep Pattambi",
    description:
      "Looking for counselling in Pattambi or Palakkad? Explore psychological counselling, NLP training, personal development and professional training services at Pradheep Pattambi.",
    url: "https://pradheeppattambi.com/",
    siteName: "Pradheep Pattambi",
    images: [
      {
        url: "/images/hero-new.webp",
        width: 1200,
        height: 630,
        alt: "Pradheep Pattambi - Professional Psychologist and Counsellor in Pattambi, Kerala"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Psychologist in Pattambi | Pradheep Pattambi",
    description:
      "Looking for counselling in Pattambi or Palakkad? Explore psychological counselling, NLP training, personal development and professional training services at Pradheep Pattambi.",
    images: ["/images/hero-new.webp"]
  }
};

const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://pradheeppattambi.com/#service",
      "name": "Pradheep Pattambi - Psychologist & Therapeutic Healer",
      "image": "https://pradheeppattambi.com/images/hero-new.webp",
      "url": "https://pradheeppattambi.com/",
      "telephone": "+919567654880",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "The Light Training and Counselling Centre, Sree Nilayam, Umikkunnu",
        "addressLocality": "Pattambi",
        "addressRegion": "Palakkad District, Kerala",
        "postalCode": "679303",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "10.8065",
        "longitude": "76.1950"
      },
      "areaServed": [
        { "@type": "City", "name": "Pattambi" },
        { "@type": "City", "name": "Palakkad" },
        { "@type": "City", "name": "Shoranur" },
        { "@type": "City", "name": "Ottapalam" },
        { "@type": "City", "name": "Perinthalmanna" },
        { "@type": "AdministrativeArea", "name": "Palakkad District" },
        { "@type": "State", "name": "Kerala" }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Psychological Counselling & Therapy Services in Pattambi",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Individual Counselling in Pattambi",
              "description": "One-on-one therapy for stress management, anxiety relief, emotional healing, and personal wellbeing in Pattambi."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Family Counselling in Pattambi",
              "description": "Support for couples and families facing relationship, communication, and interpersonal challenges in Pattambi."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Career Counselling in Pattambi",
              "description": "Scientific career guidance, course selection, student motivation, and personal development in Pattambi."
            }
          }
        ]
      }
    },
    {
      "@type": "Person",
      "@id": "https://pradheeppattambi.com/#person",
      "name": "Pradheep Pattambi",
      "alternateName": "Pradheep N.V.",
      "jobTitle": "Psychologist, Therapeutic Healer, NLP Grand Master, Certified Hypnotist, Trainer",
      "worksFor": {
        "@id": "https://pradheeppattambi.com/#service"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "The Light Training and Counselling Centre, Sree Nilayam, Umikkunnu",
        "addressLocality": "Pattambi",
        "addressRegion": "Palakkad District, Kerala",
        "postalCode": "679303",
        "addressCountry": "IN"
      },
      "url": "https://pradheeppattambi.com/",
      "image": "https://pradheeppattambi.com/images/hero-new.webp"
    },
    {
      "@type": "WebSite",
      "@id": "https://pradheeppattambi.com/#website",
      "url": "https://pradheeppattambi.com/",
      "name": "Pradheep Pattambi | Psychologist in Pattambi",
      "publisher": {
        "@id": "https://pradheeppattambi.com/#person"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://pradheeppattambi.com/#faq",
      "mainEntity": faqData.slice(0, 4).map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    }
  ]
};

export default function HomePage() {
  const previewGallery = galleryData.slice(0, 6);

  return (
    <div className="overflow-x-hidden">
      <JsonLd data={homeSchema} />
      {/* ========================================================================= */}
      {/* 1. HERO SECTION — BALANCED, COMPACT BANNER WITH PROFESSIONAL DESCRIPTION */}
      {/* ========================================================================= */}
      <section className="relative w-full bg-[#FAF7F2] border-b border-[#EAE2D3]">
        {/* DESKTOP LAYOUT (md and above): Full-width background banner with professional typography overlay */}
        <div className="hidden md:flex relative w-full min-h-[480px] lg:h-[530px] xl:h-[560px] max-h-[580px] items-center overflow-hidden">
          {/* Full-width photo positioned to showcase Pradheep on right with clear left space */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero-new.webp"
              alt="Pradheep Pattambi - Professional Psychologist and Counsellor in Pattambi, Kerala"
              fill
              priority
              quality={100}
              className="object-cover object-[72%_center] lg:object-[75%_center]"
              sizes="100vw"
            />
          </div>

          {/* Typography Direct Overlay on the Left — Balanced, Editorial */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-10 md:py-12 w-full flex items-center">
            <div className="max-w-xl lg:max-w-2xl space-y-4">
              {/* Main Heading — Prominent H1 with primary keyword context */}
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[4.25rem] xl:text-[4.75rem] font-extrabold text-forest-950 tracking-tight leading-[1.02]">
                Pradheep Pattambi
              </h1>

              {/* Professional Description directly following main heading */}
              <p className="text-lg sm:text-xl lg:text-[1.3rem] text-forest-900 font-semibold tracking-tight leading-snug">
                Psychologist in Pattambi &bull; Therapeutic Healer &bull; NLP Grand Master &bull; Trainer
              </p>

              {/* Training & Therapeutic Counselling Service Mention */}
              <div className="pt-0.5">
                <Link
                  href="/training-and-therapeutic-counselling/"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF1EA] border border-[#D8CCA8] text-forest-950 text-xs sm:text-sm font-semibold hover:bg-forest-900 hover:text-[#FAF7F2] transition-colors group shadow-xs w-fit"
                >
                  <span className="w-2 h-2 rounded-full bg-olive-600 group-hover:bg-[#C5A880]" />
                  <span>Training &amp; Therapeutic Counselling</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  data-booking-trigger="true"
                  className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-forest-900 text-[#FAF7F2] hover:bg-forest-800 text-base font-medium tracking-wide shadow-sm hover:shadow-md transition-all cursor-pointer"
                >
                  <span>Get in Touch</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="#services"
                  className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full border border-forest-900/40 text-forest-950 hover:bg-forest-900 hover:text-[#FAF7F2] text-base font-medium tracking-wide transition-colors"
                >
                  <span>Explore Services</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE LAYOUT (under md): Direct typography overlay on the LEFT SIDE, photo on the RIGHT SIDE — TWO-COLUMN COMPOSITION WITH SOFTER DARK OVERLAY */}
        <div className="md:hidden relative w-full h-[510px] sm:h-[535px] bg-[#111814] overflow-hidden">
          {/* Hero photo framed with Pradheep visually dominant on the RIGHT */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero-new.webp"
              alt="Pradheep Pattambi - Psychologist and Counsellor in Pattambi, Kerala"
              fill
              priority
              quality={100}
              className="object-cover object-[68%_top] sm:object-[70%_top]"
              sizes="100vw"
            />
            {/* Lighter, softer dark overlay: original photograph is clearly visible while text maintains strong contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#111814]/85 via-[#111814]/60 via-[50%] to-transparent pointer-events-none" />
          </div>

          {/* Typography Direct Overlay on the LEFT SIDE — Two-column composition, High Contrast */}
          <div className="relative z-10 h-full w-full flex justify-start items-start pt-5 sm:pt-6 px-4 sm:px-5 pointer-events-none">
            <div className="max-w-[55%] sm:max-w-[50%] flex flex-col items-start text-left space-y-2 pointer-events-auto">
              {/* 1. Dominant Element: Pradheep Pattambi (Two lines, significantly larger font, dominant visual element) */}
              <h1 className="text-[2.35rem] min-[375px]:text-[2.55rem] min-[414px]:text-[2.85rem] sm:text-[3.1rem] font-extrabold text-[#FAF7F2] tracking-tight leading-[1.02] drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
                <span>Pradheep</span>
                <br />
                <span>Pattambi</span>
              </h1>

              {/* Professional Description directly following main heading */}
              <p className="text-[11.5px] sm:text-[13px] font-semibold text-[#E6DAC8] leading-[1.25] drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)] pb-1">
                Psychologist in Pattambi, Therapeutic Healer, NLP Grand Master, Trainer
              </p>

              {/* 4. Subjects / Tags */}
              <div className="pt-0.5 flex flex-col items-start text-left w-full">
                <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.15em] font-bold text-[#A3B899] mb-1 drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
                  Subjects &amp; Services
                </span>
                <div className="flex flex-wrap justify-start gap-1 text-[8.5px] sm:text-[9.5px] text-[#FAF7F2] font-semibold max-w-[195px]">
                  <Link
                    href="/training-and-therapeutic-counselling/"
                    className="px-2 py-0.5 rounded-full bg-[#1C2621]/95 border border-[#C5A880]/80 text-[#C5A880] shadow-xs flex items-center gap-0.5 hover:text-white transition-colors"
                  >
                    <span>Training &amp; Counselling &rarr;</span>
                  </Link>
                  <span className="px-2 py-0.5 rounded-full bg-[#1C2621]/90 border border-[#375240]/80 shadow-xs">
                    NLP
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-[#1C2621]/90 border border-[#375240]/80 shadow-xs">
                    Enniagram
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-[#1C2621]/90 border border-[#375240]/80 shadow-xs">
                    TA
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-[#1C2621]/90 border border-[#375240]/80 shadow-xs">
                    Therapees
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-[#1C2621]/90 border border-[#375240]/80 shadow-xs">
                    Stress Mannagement
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-[#1C2621]/90 border border-[#375240]/80 shadow-xs">
                    De Addiction
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-[#1C2621]/90 border border-[#375240]/80 shadow-xs">
                    Relationship Issues etc
                  </span>
                </div>
              </div>

              {/* Action CTA Button */}
              <div className="pt-1 flex items-center gap-2">
                <Link
                  href="/contact"
                  data-booking-trigger="true"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#C5A880] text-[#111814] hover:bg-[#D4BC96] text-xs font-bold tracking-wide shadow-md transition-colors cursor-pointer"
                >
                  <span>Get in Touch</span>
                  <ArrowRight className="w-3 h-3" />
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
                Core Psychological Training & Specializations
              </h2>
              <p className="text-sm sm:text-base text-muted-text leading-relaxed font-sans">
                Pradheep Pattambi undertakes specialized psychological counselling and life skill training for students, teachers, clubs, individuals, and corporate teams across Pattambi, Palakkad, and Kerala.
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
      {/* 3. MAIN SERVICES SECTION (LOCAL SEO FOR PATTAMBI) */}
      {/* ========================================================================= */}
      <MainServicesSection />

      {/* ========================================================================= */}
      {/* 3B. TRAINING & THERAPEUTIC COUNSELLING DEDICATED SECTION */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-24 bg-[#FAF7F2] border-b border-[#EAE2D3]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF1EA] border border-[#D8CCA8]/50">
              <span className="w-2 h-2 rounded-full bg-olive-600" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-olive-800">
                THE LIGHT CENTRE &bull; PATTAMBI
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-950 tracking-tight leading-tight">
              Training &amp; Therapeutic Counselling
            </h2>
            <p className="text-sm sm:text-base text-muted-text leading-relaxed font-sans max-w-2xl mx-auto">
              Empowering personal transformation and holistic mental wellness through specialized training programs and clinical counselling modalities in Pattambi.
            </p>
          </div>

          {/* Two Main Categories Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Category 1: Training Sessions */}
            <div className="rounded-3xl bg-white border border-[#EAE2D3] p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-[#EBF1EA] text-forest-900 flex items-center justify-center shrink-0 border border-[#DCE5DF]">
                    <Users className="w-6 h-6 text-olive-700" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-forest-950 tracking-tight">
                      Training Sessions
                    </h3>
                    <p className="text-xs text-olive-700 font-semibold uppercase tracking-wider">
                      Interactive Skill &amp; Mindset Programs
                    </p>
                  </div>
                </div>

                {/* Service Items Grid: 8 items */}
                <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                  {[
                    "Parenting",
                    "Couple Therapy",
                    "Pre-marital Counselling",
                    "Stress Management",
                    "Study Skills",
                    "Hypnotism",
                    "Addiction",
                    "NLP"
                  ].map((service, idx) => (
                    <div
                      key={idx}
                      className="px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#EAE2D3] text-forest-950 text-xs sm:text-sm font-semibold flex items-center gap-2 hover:bg-[#F2ECE1] transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-olive-600 shrink-0" />
                      <span className="truncate">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#F0EAE0]">
                <p className="text-xs text-muted-text leading-relaxed">
                  Tailored developmental training designed to cultivate resilience, study habits, and effective family communication.
                </p>
              </div>
            </div>

            {/* Category 2: Therapeutical Counselling */}
            <div className="rounded-3xl bg-white border border-[#EAE2D3] p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-[#EBF1EA] text-forest-900 flex items-center justify-center shrink-0 border border-[#DCE5DF]">
                    <Sparkles className="w-6 h-6 text-olive-700" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-forest-950 tracking-tight">
                      Therapeutical Counselling
                    </h3>
                    <p className="text-xs text-olive-700 font-semibold uppercase tracking-wider">
                      Clinical &amp; Evidence-Based Healing
                    </p>
                  </div>
                </div>

                {/* Service Items Grid: 8 items */}
                <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                  {[
                    "CBT",
                    "DBT",
                    "EMDR (Trauma)",
                    "Couple Therapy",
                    "Sex Therapy",
                    "Hypnotic Therapy",
                    "NLP Therapies",
                    "Meditation"
                  ].map((service, idx) => (
                    <div
                      key={idx}
                      className="px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#EAE2D3] text-forest-950 text-xs sm:text-sm font-semibold flex items-center gap-2 hover:bg-[#F2ECE1] transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-olive-600 shrink-0" />
                      <span className="truncate">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#F0EAE0]">
                <p className="text-xs text-muted-text leading-relaxed">
                  Confidential psychological care utilizing advanced therapeutic modalities to overcome trauma, anxiety, and distress.
                </p>
              </div>
            </div>
          </div>

          {/* Read More Button — Centered, High Visibility */}
          <div className="text-center pt-2">
            <Link
              href="/training-and-therapeutic-counselling/"
              className="inline-flex items-center gap-2.5 px-9 py-4 rounded-full bg-forest-900 text-[#FAF7F2] hover:bg-forest-800 transition-all text-sm sm:text-base font-semibold tracking-wide shadow-sm hover:shadow-md group cursor-pointer"
            >
              <span>Read More</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. ABOUT PREVIEW SECTION — BALANCED WITH DISTINCT SMALLER PHOTO */}
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
                    alt="Pradheep Pattambi consulting clients at his psychological guidance desk in Pattambi"
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
                  ABOUT PRADHEEP PATTAMBI
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl text-forest-950 font-bold leading-tight tracking-tight">
                A Little About Pradheep Pattambi
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
                  dedicated Psychologist in Pattambi, Kerala guiding individuals through their
                  personal growth journeys. With deep compassion and over two decades of experience, I
                  help uncover the resilience and strength that already exist within you.
                </p>
                <p className="text-muted-text text-base sm:text-lg leading-relaxed">
                  My approach is rooted in the belief that every mind holds the power to heal
                  and evolve. Whether you are looking for psychological counselling in Kerala, NLP training,
                  or relationship counselling in Palakkad, together we will explore your challenges and rediscover your inner
                  potential.
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

          {/* Gallery Preview Grid — 2-column square grid on mobile, 4-column on desktop */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {previewGallery.map((item, idx) => (
              <Link
                key={item.id}
                href="/gallery"
                className={`group relative aspect-square w-full rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 ${
                  idx >= 4 ? "lg:hidden" : ""
                }`}
                style={{ aspectRatio: "1 / 1" }}
              >
                <Image
                  src={item.imageSrc}
                  alt={`${item.title} - Pradheep Pattambi Workshop in Kerala`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: item.objectPosition || "center",
                  }}
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
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

          {/* Appointment CTA Card (Opens Modal Popup) */}
          <div className="max-w-xl mx-auto bg-white rounded-3xl p-7 sm:p-9 border border-[#D8CCA8] shadow-sm text-center space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#EBF1EA] text-olive-800 flex items-center justify-center mx-auto">
              <CalendarCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-forest-950 tracking-tight">
                Request a Confidential Session at Our Counselling Centre in Pattambi
              </h3>
              <p className="text-xs sm:text-sm text-muted-text mt-1 max-w-md mx-auto leading-relaxed">
                Connect directly for individual counselling, family counselling, or career guidance in Pattambi and Palakkad. Serving clients from Shoranur, Ottapalam, Perinthalmanna, and across Kerala.
              </p>
            </div>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3.5">
              <BookAppointmentButton variant="primary">
                Book an Appointment
              </BookAppointmentButton>
              <BookAppointmentButton variant="outline">
                Make an Enquiry
              </BookAppointmentButton>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              data-booking-trigger="true"
              className="inline-flex items-center gap-2 px-9 py-4 rounded-full bg-forest-900 text-[#FAF7F2] hover:bg-forest-800 transition-colors text-base font-medium shadow-sm hover:shadow group cursor-pointer"
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
