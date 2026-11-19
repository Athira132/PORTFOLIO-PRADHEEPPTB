import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Users,
  Heart,
  Sparkles,
  ShieldCheck,
  BookOpen,
  Disc,
  LifeBuoy,
  Brain,
  Waves,
  Eye,
  HeartHandshake,
  Shield,
  Target,
  Zap,
  SunMedium,
  Phone,
  MessageCircle,
  ArrowRight,
  MapPin,
  CalendarCheck,
  LucideIcon
} from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import { WHATSAPP_NUMBER, getWhatsAppServiceEnquiryUrl } from "@/config/whatsapp";
import {
  trainingSessionsData,
  therapeuticCounsellingData,
  ServiceCardItem
} from "@/data/trainingCounsellingData";

export const metadata: Metadata = {
  title: "Training & Therapeutic Counselling in Pattambi | The Light Training and Counselling Centre",
  description:
    "Explore Training & Therapeutic Counselling in Pattambi at The Light Training and Counselling Centre. Discover training sessions, NLP, parenting, stress management and counselling services. Call 9567654880.",
  keywords: [
    "Training & Therapeutic Counselling in Pattambi",
    "Training and Counselling Centre in Pattambi",
    "Therapeutic Counselling in Pattambi",
    "Training Sessions in Pattambi",
    "Counselling Services in Pattambi",
    "NLP Training in Pattambi",
    "Psychological Counselling in Pattambi",
    "Parenting Counselling in Pattambi",
    "Couple Counselling in Pattambi",
    "Stress Management Training in Pattambi",
    "Hypnotic Therapy in Pattambi",
    "Pradheep Pattambi",
    "The Light Training and Counselling Centre"
  ],
  alternates: {
    canonical: "https://pradheeppattambi.com/training-and-therapeutic-counselling/"
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
    title: "Training & Therapeutic Counselling in Pattambi | The Light Training and Counselling Centre",
    description:
      "Explore Training & Therapeutic Counselling in Pattambi at The Light Training and Counselling Centre. Discover training sessions, NLP, parenting, stress management and counselling services. Call 9567654880.",
    url: "https://pradheeppattambi.com/training-and-therapeutic-counselling/",
    siteName: "The Light Training and Counselling Centre",
    images: [
      {
        url: "https://pradheeppattambi.com/images/pradheep-poster-portrait.jpg",
        width: 600,
        height: 600,
        alt: "Pradheep Pattambi - Training & Therapeutic Counselling in Pattambi | The Light Centre"
      },
      {
        url: "https://pradheeppattambi.com/images/hero-family-wellbeing.jpg",
        width: 1376,
        height: 768,
        alt: "Family wellbeing and emotional harmony at The Light Training and Counselling Centre Pattambi"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Training & Therapeutic Counselling in Pattambi | The Light Training and Counselling Centre",
    description:
      "Explore Training & Therapeutic Counselling in Pattambi at The Light Training and Counselling Centre. Discover training sessions, NLP, parenting, stress management and counselling services. Call 9567654880.",
    images: ["https://pradheeppattambi.com/images/pradheep-poster-portrait.jpg"]
  }
};

const iconMap: Record<string, LucideIcon> = {
  Users,
  Heart,
  Sparkles,
  ShieldCheck,
  BookOpen,
  Disc,
  LifeBuoy,
  Brain,
  Waves,
  Eye,
  HeartHandshake,
  Shield,
  Target,
  Zap,
  SunMedium
};

const pageStructuredData = {
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
          "name": "Training & Therapeutic Counselling",
          "item": "https://pradheeppattambi.com/training-and-therapeutic-counselling/"
        }
      ]
    },
    {
      "@type": ["LocalBusiness", "ProfessionalService"],
      "@id": "https://pradheeppattambi.com/training-and-therapeutic-counselling/#business",
      "name": "The Light Training and Counselling Centre - Pattambi",
      "alternateName": [
        "The Light Training and Counselling Centre",
        "The Light Centre Pattambi",
        "Pradheep Pattambi"
      ],
      "url": "https://pradheeppattambi.com/training-and-therapeutic-counselling/",
      "telephone": "+919567654880",
      "email": "info@pradheeppattambi.com",
      "image": "https://pradheeppattambi.com/images/pradheep-poster-portrait.jpg",
      "description":
        "Explore Training & Therapeutic Counselling in Pattambi at The Light Training and Counselling Centre. Discover training sessions, NLP, parenting, stress management and counselling services. Call 9567654880.",
      "founder": {
        "@type": "Person",
        "@id": "https://pradheeppattambi.com/#person",
        "name": "Pradheep Pattambi",
        "jobTitle": "NLP Master Trainer, Hypnotist, Psychological Counsellor"
      },
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
        { "@type": "AdministrativeArea", "name": "Palakkad" },
        { "@type": "State", "name": "Kerala" }
      ],
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "09:00",
          "closes": "18:00"
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Training Sessions & Therapeutic Counselling",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Parenting" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Couple Therapy" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pre-marital Counselling" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Stress Management" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Study Skills" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hypnotism" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Addiction Support" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "NLP" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "CBT" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "DBT" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "EMDR (Trauma)" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Sex Therapy" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hypnotic Therapy" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "NLP Therapies" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Meditation" } }
        ]
      }
    }
  ]
};

function ServiceCard({
  item,
  variant = "sage"
}: {
  item: ServiceCardItem;
  variant?: "sage" | "peach";
}) {
  const IconComp = iconMap[item.iconName] || Brain;
  const enquiryUrl = getWhatsAppServiceEnquiryUrl(item.name);
  const isSage = variant === "sage";

  return (
    <div
      className={`group rounded-2xl bg-white p-5 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between ${
        isSage
          ? "border border-[#D4E4D7] hover:border-[#7FA885]"
          : "border border-[#EBDCCF] hover:border-[#C4A58F]"
      }`}
    >
      <div className="space-y-3">
        <div
          className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors duration-200 ${
            isSage
              ? "bg-[#E5EFE7] text-[#1E4A2B] group-hover:bg-[#1E4A2B] group-hover:text-[#FAF7F2]"
              : "bg-[#F5ECE1] text-[#784F2B] group-hover:bg-[#784F2B] group-hover:text-[#FAF7F2]"
          }`}
        >
          <IconComp className="w-5 h-5 stroke-[1.8]" />
        </div>
        <h3
          className={`text-base sm:text-lg font-bold text-forest-950 transition-colors ${
            isSage ? "group-hover:text-[#1E4A2B]" : "group-hover:text-[#784F2B]"
          }`}
        >
          {item.name}
        </h3>
        <p className="text-xs sm:text-sm text-[#4E5D53] leading-relaxed font-sans">
          {item.brief}
        </p>
      </div>

      <div className={`pt-4 mt-4 border-t ${isSage ? "border-[#EBF2EC]" : "border-[#F4ECE3]"}`}>
        <a
          href={enquiryUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-1.5 text-xs font-bold transition-colors ${
            isSage ? "text-[#1E4A2B] hover:text-[#14301E]" : "text-[#784F2B] hover:text-[#4A2F17]"
          }`}
          aria-label={`Enquire about ${item.name} on WhatsApp`}
        >
          <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
          <span>Enquire on WhatsApp &rarr;</span>
        </a>
      </div>
    </div>
  );
}

export default function TrainingAndTherapeuticCounsellingPage() {
  return (
    <div className="overflow-x-hidden">
      <JsonLd data={pageStructuredData} />

      {/* ========================================================================= */}
      {/* 1. HERO BANNER — WARM IVORY PALETTE, PRESERVED CIRCULAR PORTRAIT */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 lg:py-24 bg-[#FAF6F0] border-b border-[#E8DFC9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left: Circular Photo Frame (Exact dimensions & positioning preserved) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-start">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[360px] lg:h-[360px] xl:w-[390px] xl:h-[390px] rounded-full bg-[#1A241E] border-2 border-[#C5A880] shadow-xl flex items-center justify-center overflow-hidden shrink-0">
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src="/images/pradheep-poster-portrait.jpg"
                    alt="Pradheep Pattambi - Training &amp; Therapeutic Counselling in Pattambi | The Light Centre"
                    fill
                    priority
                    className="object-cover object-center scale-105"
                    sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 390px"
                  />
                </div>
              </div>
            </div>

            {/* Right: Editorial Typography & Actions */}
            <div className="lg:col-span-7 space-y-5 text-left">
              {/* Category Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F0E9] border border-[#C5DAC8] w-fit">
                <span className="w-2 h-2 rounded-full bg-[#346E44]" />
                <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#1E4527]">
                  THE LIGHT TRAINING AND COUNSELLING CENTRE &bull; PATTAMBI
                </span>
              </div>

              {/* Main Heading H1 */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl text-forest-950 font-bold tracking-tight leading-[1.1]">
                Training &amp; Therapeutic Counselling<span className="sr-only"> in Pattambi</span>
              </h1>

              {/* Tagline: Learn • Heal • Transform */}
              <p className="text-lg sm:text-xl text-[#825C34] font-semibold tracking-wide">
                Learn &bull; Heal &bull; Transform
              </p>

              {/* Trainer & Contact Info */}
              <div className="space-y-1.5 text-[#3E4E44]">
                <p className="text-xl sm:text-2xl font-bold text-forest-950">
                  Pradheep Pattambi
                </p>
                <p className="text-sm sm:text-base text-[#4D6054] font-medium">
                  NLP Master Trainer <span className="text-[#8C653B]">|</span> Hypnotist <span className="text-[#8C653B]">|</span> Psychological Counsellor
                </p>
                <p className="text-sm sm:text-base text-forest-950 pt-1">
                  Contact:{" "}
                  <a
                    href="tel:+919567654880"
                    className="text-forest-950 font-bold hover:text-[#825C34] transition-colors underline underline-offset-4"
                  >
                    9567654880
                  </a>
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <Link
                  href="/contact"
                  data-booking-trigger="true"
                  data-service="Training &amp; Therapeutic Counselling"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#14231A] text-[#FAF7F2] hover:bg-[#1E3628] transition-all text-sm sm:text-base font-bold tracking-wide shadow-md group cursor-pointer"
                >
                  <span>Book a Consultation</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                    "Hello Pradheep Sir, I would like to enquire about Training & Therapeutic Counselling at The Light Centre, Pattambi."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-forest-950/20 text-forest-950 bg-white/80 hover:bg-white hover:border-forest-950/40 transition-all text-sm sm:text-base font-medium tracking-wide shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Hero Family Wellbeing Visual Showcase */}
          <div className="mt-12 sm:mt-16 relative rounded-3xl overflow-hidden border border-[#E4D7C4] shadow-md h-60 sm:h-72 md:h-80">
            <Image
              src="/images/hero-family-wellbeing.jpg"
              alt="Emotional wellbeing, personal development and family harmony at The Light Training and Counselling Centre Pattambi"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 1200px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-950/85 via-forest-950/30 to-transparent flex items-end p-6 sm:p-8">
              <div className="max-w-2xl text-left">
                <span className="text-[11px] sm:text-xs uppercase tracking-[0.22em] font-semibold text-[#D4C3A3] block mb-1">
                  FAMILY WELLBEING &bull; PERSONAL EMPOWERMENT
                </span>
                <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-[#FAF7F2] leading-snug">
                  Nurturing Emotional Harmony, Strong Families &amp; Confident Futures
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. TRAINING SESSIONS SECTION — SOFT SAGE GREEN THEME */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 bg-[#EFF5F0] border-b border-[#D8E6DB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-6 h-[1.5px] bg-[#346E44]" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#1E4829]">
                PERSONAL &bull; PROFESSIONAL DEVELOPMENT
              </span>
              <span className="w-6 h-[1.5px] bg-[#346E44]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-forest-950 tracking-tight">
              Training Sessions
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#4E5D53]">
              Professional training programs and interactive skill-building sessions in Pattambi at The Light Training and Counselling Centre.
            </p>
          </div>

          {/* Visual Workshop Banner Card */}
          <div className="mb-10 rounded-2xl overflow-hidden border border-[#D5E5D8] bg-white shadow-xs grid grid-cols-1 md:grid-cols-12 items-center">
            <div className="md:col-span-5 relative h-56 sm:h-64 md:h-full min-h-[230px]">
              <Image
                src="/images/training-sessions-workshop.jpg"
                alt="Interactive parenting, communication, and family training workshops in Pattambi"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 500px"
              />
            </div>
            <div className="md:col-span-7 p-6 sm:p-8 text-left space-y-2.5">
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#235632]">
                Interactive Workshops &bull; Experiential Learning
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-forest-950">
                Empowering Individuals, Parents &amp; Students
              </h3>
              <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-sans">
                Our structured training modules integrate behavioural insights, neuro-linguistic programming, and real-world tools to build emotional resilience, focus, and positive family communication.
              </p>
              <div className="pt-1">
                <a
                  href="tel:+919567654880"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#235632] hover:text-forest-950 transition-colors"
                >
                  <span>Enquire about training sessions &rarr;</span>
                </a>
              </div>
            </div>
          </div>

          {/* 8 Clean Service Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {trainingSessionsData.map((item) => (
              <ServiceCard key={item.id} item={item} variant="sage" />
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. THERAPEUTICAL COUNSELLING SECTION — WARM BEIGE / SOFT PEACH THEME */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 bg-[#F8F2EB] border-b border-[#E8DCCE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-6 h-[1.5px] bg-[#9C6B43]" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#7A4F2A]">
                CLINICAL THERAPEUTIC MODALITIES
              </span>
              <span className="w-6 h-[1.5px] bg-[#9C6B43]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-forest-950 tracking-tight">
              Therapeutical Counselling
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#5A4F45]">
              Confidential therapeutic counselling and clinical modalities offered at The Light Centre in Pattambi.
            </p>
          </div>

          {/* Visual Counselling Session Banner Card */}
          <div className="mb-10 rounded-2xl overflow-hidden border border-[#E9DACB] bg-white shadow-xs grid grid-cols-1 md:grid-cols-12 items-center">
            <div className="md:col-span-5 relative h-56 sm:h-64 md:h-full min-h-[230px]">
              <Image
                src="/images/therapeutic-counselling-session.jpg"
                alt="Confidential and supportive psychological counselling session in Pattambi"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 500px"
              />
            </div>
            <div className="md:col-span-7 p-6 sm:p-8 text-left space-y-2.5">
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#7A4F2A]">
                Evidence-Based Modalities &bull; Safe Environment
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-forest-950">
                Compassionate, Science-Backed Psychological Care
              </h3>
              <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-sans">
                A private, non-judgmental space to navigate personal distress, process trauma, resolve relationship barriers, and develop grounded emotional resilience.
              </p>
              <div className="pt-1">
                <a
                  href="tel:+919567654880"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#7A4F2A] hover:text-forest-950 transition-colors"
                >
                  <span>Schedule a confidential consultation &rarr;</span>
                </a>
              </div>
            </div>
          </div>

          {/* 8 Clean Service Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {therapeuticCounsellingData.map((item) => (
              <ServiceCard key={item.id} item={item} variant="peach" />
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. COMPACT FINAL CONTACT SECTION — DEEP FOREST GREEN THEME */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 bg-[#111C15] text-[#FAF7F2] border-b border-[#213527]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-semibold">
              Get in Touch
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#FAF7F2] tracking-tight">
              Pradheep Pattambi
            </h2>
            <p className="text-base sm:text-lg text-[#D4C3A3] font-medium">
              The Light Training and Counselling Centre
            </p>
            <p className="text-xs sm:text-sm text-[#A9B8AF] flex items-center justify-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#C5A880]" />
              <span>Pattambi, Palakkad District, Kerala</span>
            </p>
          </div>

          <div className="py-2">
            <p className="text-sm text-[#B5C2B9]">Direct Phone:</p>
            <a
              href="tel:+919567654880"
              className="text-2xl sm:text-3xl font-bold text-[#FAF7F2] hover:text-[#C5A880] transition-colors inline-block mt-0.5"
            >
              9567654880
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
            <a
              href="tel:+919567654880"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#C5A880] text-[#111814] hover:bg-[#D4BC96] transition-all text-sm sm:text-base font-bold tracking-wide shadow-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now: 9567654880</span>
            </a>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                "Hello Pradheep Sir, I would like to enquire about Training & Therapeutic Counselling at The Light Centre, Pattambi."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#25D366] text-white hover:bg-[#20ba5a] transition-all text-sm sm:text-base font-semibold shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>

            <Link
              href="/contact"
              data-booking-trigger="true"
              data-service="Training &amp; Therapeutic Counselling"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-[#D8CCA8]/50 text-[#FAF7F2] bg-white/5 hover:bg-white/10 transition-colors text-sm sm:text-base font-medium tracking-wide cursor-pointer"
            >
              <CalendarCheck className="w-4 h-4 text-[#C5A880]" />
              <span>Book a Consultation</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
