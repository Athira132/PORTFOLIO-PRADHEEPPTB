import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  MessageCircle,
  Phone,
  ShieldCheck,
  CalendarCheck,
  Sparkles,
  Users,
  Compass,
  Heart
} from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import { WHATSAPP_NUMBER, getWhatsAppServiceEnquiryUrl } from "@/config/whatsapp";
import {
  trainingSessionsData,
  therapeuticCounsellingData
} from "@/data/trainingCounsellingData";

export const metadata: Metadata = {
  title: "Training Programs & Therapeutic Counselling in Pattambi | The Light",
  description:
    "Explore training programs and therapeutic counselling in Pattambi, Kerala. Discover parenting, NLP, stress management, study skills and counselling services at The Light Training and Counselling Centre.",
  keywords: [
    // Main SEO Focus
    "Training Programs in Kerala",
    "Therapeutic Counselling in Kerala",
    "Training Programs in Pattambi",
    "Therapeutic Counselling in Pattambi",
    // Training Sessions Keywords
    "Parenting Classes in Kerala",
    "Parenting Skills Training",
    "Couple Relationship Training",
    "Relationship Skills Training",
    "Pre-Marital Counselling in Kerala",
    "Marriage Preparation Counselling",
    "Stress Management Training in Kerala",
    "Study Skills Training in Kerala",
    "Study Skills for Students",
    "Hypnosis Training in Kerala",
    "Addiction Awareness Training",
    "NLP Training in Kerala",
    "Neuro Linguistic Programming Training",
    "Personal Development Training",
    // Therapeutic Counselling Keywords
    "Cognitive Behavioural Therapy in Kerala",
    "CBT Counselling",
    "Dialectical Behaviour Therapy",
    "DBT Counselling",
    "EMDR Therapy in Kerala",
    "Trauma Counselling",
    "Couples Counselling in Kerala",
    "Relationship Counselling",
    "Sex Therapy in Kerala",
    "Psychosexual Wellness",
    "Hypnotherapy in Kerala",
    "Clinical Hypnotherapy",
    "NLP Therapy in Kerala",
    "Meditation Classes in Kerala",
    "Guided Meditation",
    "Mindfulness Meditation",
    // Location Focus
    "Psychologist in Pattambi",
    "Psychologist in Palakkad",
    "Counselling in Shoranur",
    "Counselling in Ottapalam",
    "The Light Training and Counselling Centre",
    "Pradheep Pattambi"
  ],
  alternates: {
    canonical: "https://pradheeppattambi.com/our-services/"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  openGraph: {
    title: "Training Programs & Therapeutic Counselling in Pattambi | The Light",
    description:
      "Explore training programs and therapeutic counselling in Pattambi, Kerala. Discover parenting, NLP, stress management, study skills and counselling services at The Light Training and Counselling Centre.",
    url: "https://pradheeppattambi.com/our-services/",
    siteName: "The Light Training and Counselling Centre",
    images: [
      {
        url: "/images/services-hero.webp",
        width: 1086,
        height: 1448,
        alt: "Pradheep Pattambi - Training Programs and Therapeutic Counselling in Pattambi, Kerala"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Training Programs & Therapeutic Counselling in Pattambi | The Light",
    description:
      "Explore training programs and therapeutic counselling in Pattambi, Kerala. Discover parenting, NLP, stress management, study skills and counselling services at The Light Training and Counselling Centre.",
    images: ["/images/services-hero.webp"]
  }
};

const ourServicesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://pradheeppattambi.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Our Services",
          "item": "https://pradheeppattambi.com/our-services/"
        }
      ]
    },
    {
      "@type": "MedicalWebPage",
      "@id": "https://pradheeppattambi.com/our-services/#webpage",
      "name": "Training Programs & Therapeutic Counselling in Pattambi | The Light",
      "description":
        "Explore training programs and therapeutic counselling in Pattambi, Kerala. Discover parenting, NLP, stress management, study skills and counselling services at The Light Training and Counselling Centre.",
      "url": "https://pradheeppattambi.com/our-services/",
      "provider": {
        "@type": "LocalBusiness",
        "@id": "https://pradheeppattambi.com/#service",
        "name": "The Light Training and Counselling Centre",
        "telephone": "+919567654880",
        "url": "https://pradheeppattambi.com/",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "The Light Training and Counselling Centre, Sree Nilayam, Umikkunnu",
          "addressLocality": "Pattambi",
          "addressRegion": "Palakkad District, Kerala",
          "postalCode": "679303",
          "addressCountry": "IN"
        },
        "founder": {
          "@type": "Person",
          "name": "Pradheep Pattambi",
          "alternateName": "Pradheep N.V.",
          "jobTitle": "Psychologist, Therapeutic Healer, NLP Grand Master, Certified Hypnotist & Trainer"
        }
      }
    }
  ]
};

// Map service IDs to vector illustration covers
const trainingImageMap: Record<string, string> = {
  parenting: "/images/services/parenting.svg",
  "couple-therapy-training": "/images/services/couple-therapy-training.svg",
  "pre-marital-counselling": "/images/services/premarital-counselling.svg",
  "stress-management": "/images/services/stress-management.svg",
  "study-skills": "/images/services/study-skills.svg",
  hypnotism: "/images/services/hypnosis-training.svg",
  addiction: "/images/services/addiction-recovery.svg",
  nlp: "/images/services/nlp-training.svg"
};

const counsellingImageMap: Record<string, string> = {
  cbt: "/images/services/cbt-therapy.svg",
  dbt: "/images/services/dbt-therapy.svg",
  "emdr-trauma": "/images/services/emdr-trauma.svg",
  "couple-therapy": "/images/services/couple-therapy-counselling.svg",
  "sex-therapy": "/images/services/sex-therapy.svg",
  "hypnotic-therapy": "/images/services/hypnotic-therapy.svg",
  "nlp-therapies": "/images/services/nlp-therapies.svg",
  meditation: "/images/services/meditation.svg"
};

export default function OurServicesPage() {
  return (
    <div className="overflow-x-hidden bg-[#FFFFFF]">
      <JsonLd data={ourServicesSchema} />

      {/* ========================================================================= */}
      {/* 1. HERO BANNER — CIRCULAR HERO IMAGE (3RD GALLERY PHOTO) ON LEFT,          */}
      {/*    EDITORIAL TYPOGRAPHY ON RIGHT (MATCHES COUNSELLING/CAREER PAGES)        */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#111814] border-b border-[#233127]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left: Circular Photo Frame — Supplied ImgBB Hero Image */}
            <div className="lg:col-span-5 flex justify-center lg:justify-start">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[360px] lg:h-[360px] xl:w-[390px] xl:h-[390px] rounded-full bg-[#1A241E] border-2 border-[#C5A880] shadow-xl flex items-center justify-center overflow-hidden shrink-0">
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src="/images/services-hero.webp"
                    alt="Pradheep Pattambi - Training Programs and Therapeutic Counselling in Pattambi, Kerala"
                    fill
                    priority
                    className="object-cover object-[center_15%] scale-105"
                    sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 390px"
                  />
                </div>
              </div>
            </div>

            {/* Right: Editorial Typography & Actions */}
            <div className="lg:col-span-7 space-y-5 text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1C2B22] border border-[#375240] w-fit">
                <span className="w-2 h-2 rounded-full bg-[#C5A880]" />
                <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#A3B899]">
                  THE LIGHT TRAINING &amp; COUNSELLING CENTRE &bull; PATTAMBI
                </span>
              </div>

              {/* Main Page Heading — Visible H1 */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl text-[#FAF7F2] font-bold tracking-tight leading-[1.1]">
                Our Services
              </h1>

              {/* Focus Subheading */}
              <p className="text-lg sm:text-xl font-medium text-[#C5A880]">
                Training Programs &amp; Therapeutic Counselling in Pattambi, Kerala
              </p>

              {/* Page Introduction incorporating Primary Keyword Focus */}
              <p className="text-[#D6CEBE] text-base sm:text-lg max-w-2xl leading-relaxed font-sans">
                Discover our training programs and therapeutic counselling services designed to support personal growth, learning and well-being. At The Light Training and Counselling Centre in Pattambi, Pradheep Pattambi provides professional guidance across Palakkad, Shoranur, Ottapalam, and Kerala.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <Link
                  href="/contact"
                  data-booking-trigger="true"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#C5A880] text-[#111814] hover:bg-[#D4BC96] transition-all text-sm sm:text-base font-bold tracking-wide shadow-sm group cursor-pointer"
                >
                  <span>Book a Consultation</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello Pradheep Pattambi, I would like to enquire about your training programs and therapeutic counselling services.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-[#D8CCA8]/50 text-[#FAF7F2] bg-white/5 hover:bg-white/10 transition-colors text-sm sm:text-base font-medium tracking-wide"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. SECTION 1: OUR TRAINING SESSIONS (H2)                                  */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#FFFFFF] border-b border-[#EAE2D3]/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Section Heading Hierarchy: H2 */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF1EA] border border-[#D8CCA8]/50">
              <span className="w-2 h-2 rounded-full bg-olive-600" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-olive-800">
                SECTION 1 &bull; DEVELOPMENTAL &amp; MINDSET
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-forest-950 tracking-tight leading-tight">
              Our Training Sessions
            </h2>
            <p className="text-sm sm:text-base text-muted-text leading-relaxed font-sans max-w-2xl mx-auto">
              Interactive, structured developmental workshops and training programs in Kerala designed to cultivate resilience, peak learning habits, and harmonious family relationships.
            </p>
          </div>

          {/* 8 Illustrated Service Cards in 4-column balanced grid (2 rows of 4) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trainingSessionsData.map((item) => {
              const imageSrc = trainingImageMap[item.id] || "/images/services/parenting.svg";
              const whatsappUrl = getWhatsAppServiceEnquiryUrl(item.name);

              return (
                <div
                  key={item.id}
                  className="group flex flex-col justify-between rounded-2xl bg-white border border-[#EAE2D3] shadow-xs hover:border-[#C5A880] hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                  <div>
                    {/* Illustrated Cover Header */}
                    <div className="relative w-full aspect-[16/10] bg-[#111814] overflow-hidden">
                      <Image
                        src={imageSrc}
                        alt={`${item.name} - ${item.primaryKeyword} - Pradheep Pattambi`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 rounded-full text-[10px] uppercase tracking-wider font-bold bg-[#111814]/80 text-[#C5A880] border border-[#C5A880]/30 backdrop-blur-xs">
                          Training
                        </span>
                      </div>
                    </div>

                    {/* Card Content with Descriptive H3 Heading */}
                    <div className="p-5 sm:p-6 space-y-2.5">
                      <h3 className="text-base sm:text-lg font-bold text-forest-950 tracking-tight group-hover:text-forest-800 transition-colors leading-snug">
                        <span className="text-lg sm:text-xl font-bold text-forest-950 block">{item.name}</span>
                        <span className="text-xs sm:text-[13px] font-semibold text-olive-800 block mt-1">
                          {item.primaryKeyword}
                        </span>
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-text font-sans leading-relaxed">
                        {item.brief}
                      </p>
                    </div>
                  </div>

                  {/* WhatsApp Enquiry Button */}
                  <div className="p-5 sm:p-6 pt-0 border-t border-[#F2ECE1] mt-4">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-[#FAF7F2] border border-[#EAE2D3] text-forest-950 hover:bg-[#123D2B] hover:text-[#FAF7F2] hover:border-[#123D2B] text-xs sm:text-sm font-semibold transition-all shadow-2xs group/btn"
                    >
                      <MessageCircle className="w-4 h-4 text-[#25D366] group-hover/btn:text-[#FAF7F2] transition-colors" />
                      <span>WhatsApp Enquiry</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. SECTION 2: THERAPEUTIC COUNSELLING (H2)                                */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#FAFAF8] border-b border-[#EAE2D3]/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Section Heading Hierarchy: H2 */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF1EA] border border-[#D8CCA8]/50">
              <span className="w-2 h-2 rounded-full bg-olive-600" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-olive-800">
                SECTION 2 &bull; CLINICAL MODALITIES &amp; HEALING
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-forest-950 tracking-tight leading-tight">
              Therapeutic Counselling
            </h2>
            <p className="text-sm sm:text-base text-muted-text leading-relaxed font-sans max-w-2xl mx-auto">
              Confidential, evidence-based therapeutic counselling in Pattambi and Kerala employing proven modalities to resolve trauma, emotional distress, psychosexual concerns, and relationship disharmony.
            </p>
          </div>

          {/* 8 Illustrated Service Cards in 4-column balanced grid (2 rows of 4) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {therapeuticCounsellingData.map((item) => {
              const imageSrc = counsellingImageMap[item.id] || "/images/services/cbt-therapy.svg";
              const whatsappUrl = getWhatsAppServiceEnquiryUrl(item.name);

              return (
                <div
                  key={item.id}
                  className="group flex flex-col justify-between rounded-2xl bg-white border border-[#EAE2D3] shadow-xs hover:border-[#C5A880] hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                  <div>
                    {/* Illustrated Cover Header */}
                    <div className="relative w-full aspect-[16/10] bg-[#111814] overflow-hidden">
                      <Image
                        src={imageSrc}
                        alt={`${item.name} - ${item.primaryKeyword} - Pradheep Pattambi`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 rounded-full text-[10px] uppercase tracking-wider font-bold bg-[#111814]/80 text-[#A3B899] border border-[#A3B899]/30 backdrop-blur-xs">
                          Therapy
                        </span>
                      </div>
                    </div>

                    {/* Card Content with Descriptive H3 Heading */}
                    <div className="p-5 sm:p-6 space-y-2.5">
                      <h3 className="text-base sm:text-lg font-bold text-forest-950 tracking-tight group-hover:text-forest-800 transition-colors leading-snug">
                        <span className="text-lg sm:text-xl font-bold text-forest-950 block">{item.name}</span>
                        <span className="text-xs sm:text-[13px] font-semibold text-olive-800 block mt-1">
                          {item.primaryKeyword}
                        </span>
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-text font-sans leading-relaxed">
                        {item.brief}
                      </p>
                    </div>
                  </div>

                  {/* WhatsApp Enquiry Button */}
                  <div className="p-5 sm:p-6 pt-0 border-t border-[#F2ECE1] mt-4">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-[#FAF7F2] border border-[#EAE2D3] text-forest-950 hover:bg-[#123D2B] hover:text-[#FAF7F2] hover:border-[#123D2B] text-xs sm:text-sm font-semibold transition-all shadow-2xs group/btn"
                    >
                      <MessageCircle className="w-4 h-4 text-[#25D366] group-hover/btn:text-[#FAF7F2] transition-colors" />
                      <span>WhatsApp Enquiry</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. CLINICAL ASSURANCE & TRUST SUMMARY                                      */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-[#FAF7F2] border-b border-[#EAE2D3]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center sm:text-left">
            <div className="p-6 rounded-2xl bg-white border border-[#EAE2D3] space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#EBF1EA] text-forest-900 flex items-center justify-center border border-[#DCE5DF]">
                <ShieldCheck className="w-6 h-6 text-olive-700" />
              </div>
              <h3 className="text-lg font-bold text-forest-950">100% Strict Confidentiality</h3>
              <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                All consultations and therapeutic interventions adhere to the highest ethical privacy standards in a secure, supportive setting.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#EAE2D3] space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#EBF1EA] text-forest-900 flex items-center justify-center border border-[#DCE5DF]">
                <Users className="w-6 h-6 text-olive-700" />
              </div>
              <h3 className="text-lg font-bold text-forest-950">20+ Years Clinical Experience</h3>
              <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                Guidance from a seasoned psychologist, NLP Grand Master, and certified therapist serving Palakkad, Shoranur, Ottapalam, and Kerala.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#EAE2D3] space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#EBF1EA] text-forest-900 flex items-center justify-center border border-[#DCE5DF]">
                <CalendarCheck className="w-6 h-6 text-olive-700" />
              </div>
              <h3 className="text-lg font-bold text-forest-950">Personalized Action Plans</h3>
              <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                Every individual, couple, and student receives targeted, practical strategies tailored to their unique circumstances and goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. BOTTOM CTA SECTION                                                      */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-[#111814] text-[#FAF7F2] border-t border-[#233127]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-semibold">
            START YOUR JOURNEY TODAY
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#FAF7F2] tracking-tight">
            Take the First Step Toward Clarity and Well-Being
          </h2>
          <p className="text-base sm:text-lg text-[#D6CEBE] max-w-2xl mx-auto leading-relaxed">
            Whether you seek personal healing through therapeutic counselling or transformative growth through our training sessions in Pattambi, we are here to support you.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              data-booking-trigger="true"
              className="inline-flex items-center gap-2 px-9 py-4 rounded-full bg-[#C5A880] text-[#111814] hover:bg-[#D4BC96] transition-all text-sm sm:text-base font-bold tracking-wide shadow-sm cursor-pointer"
            >
              <span>Book an Appointment</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello Pradheep Pattambi, I would like to book a consultation at The Light Centre.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-9 py-4 rounded-full border border-[#D8CCA8]/50 text-[#FAF7F2] bg-white/5 hover:bg-white/10 transition-colors text-sm sm:text-base font-medium tracking-wide"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>Direct WhatsApp Contact</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
