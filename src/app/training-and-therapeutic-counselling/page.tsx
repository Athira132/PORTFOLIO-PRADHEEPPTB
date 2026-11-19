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

function ServiceCard({ item }: { item: ServiceCardItem }) {
  const IconComp = iconMap[item.iconName] || Brain;
  const enquiryUrl = getWhatsAppServiceEnquiryUrl(item.name);

  return (
    <div className="group rounded-2xl bg-white border border-[#DCE5DF] p-5 shadow-xs hover:shadow-md hover:border-[#123D2B]/40 transition-all duration-200 flex flex-col justify-between">
      <div className="space-y-3">
        <div className="w-11 h-11 rounded-xl bg-[#F0F5F2] text-[#123D2B] border border-[#DCE5DF] flex items-center justify-center group-hover:bg-[#123D2B] group-hover:text-white transition-colors duration-200">
          <IconComp className="w-5 h-5 stroke-[1.8]" />
        </div>
        <h3 className="text-base sm:text-lg font-bold text-[#252525] group-hover:text-[#123D2B] transition-colors">
          {item.name}
        </h3>
        <p className="text-xs sm:text-sm text-[#555555] leading-relaxed font-sans">
          {item.brief}
        </p>
      </div>

      <div className="pt-4 mt-4 border-t border-[#EDF2EF]">
        <a
          href={enquiryUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#123D2B] hover:text-[#1E5D42] transition-colors"
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
      {/* 1. HERO BANNER — SOLID DARK GREEN (#123D2B), PRESERVED CIRCULAR PORTRAIT */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#123D2B] border-b border-[#1A4E38]">
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
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1C4E37] border border-[#2B6D50] w-fit">
                <span className="w-2 h-2 rounded-full bg-[#C5A880]" />
                <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D4E8DC]">
                  THE LIGHT TRAINING AND COUNSELLING CENTRE &bull; PATTAMBI
                </span>
              </div>

              {/* Main Heading H1 */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl text-white font-bold tracking-tight leading-[1.1]">
                Training &amp; Therapeutic Counselling<span className="sr-only"> in Pattambi</span>
              </h1>

              {/* Tagline: Learn • Heal • Transform */}
              <p className="text-lg sm:text-xl text-[#C5A880] font-semibold tracking-wide">
                Learn &bull; Heal &bull; Transform
              </p>

              {/* Trainer & Contact Info */}
              <div className="space-y-1.5 text-[#D4E8DC]">
                <p className="text-xl sm:text-2xl font-bold text-white">
                  Pradheep Pattambi
                </p>
                <p className="text-sm sm:text-base text-[#D4C3A3] font-medium">
                  NLP Master Trainer <span className="text-[#C5A880]">|</span> Hypnotist <span className="text-[#C5A880]">|</span> Psychological Counsellor
                </p>
                <p className="text-sm sm:text-base text-white pt-1">
                  Contact:{" "}
                  <a
                    href="tel:+919567654880"
                    className="text-white font-bold hover:text-[#C5A880] transition-colors underline underline-offset-4"
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
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#C5A880] text-[#111814] hover:bg-[#D4BC96] transition-all text-sm sm:text-base font-bold tracking-wide shadow-sm group cursor-pointer"
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
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-[#D8CCA8]/50 text-white bg-white/5 hover:bg-white/10 transition-colors text-sm sm:text-base font-medium tracking-wide"
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
      {/* 2. TRAINING SESSIONS SECTION — CLEAN WHITE BODY, DARK GREEN (#123D2B) HEADING */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-16 bg-white border-b border-[#DCE5DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Solid Dark Green Heading Area Box */}
          <div className="w-full rounded-2xl bg-[#123D2B] py-8 sm:py-10 px-6 sm:px-8 mb-8 sm:mb-10 text-center border border-[#1A4E38] shadow-xs">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-6 h-[1.5px] bg-[#3B7A5C]" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#D4E8DC]">
                PERSONAL &bull; PROFESSIONAL DEVELOPMENT
              </span>
              <span className="w-6 h-[1.5px] bg-[#3B7A5C]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Training Sessions
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#D4E8DC] max-w-2xl mx-auto">
              Professional training programs and interactive skill-building sessions in Pattambi at The Light Training and Counselling Centre.
            </p>
          </div>

          {/* 8 Clean Service Cards on White Background */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {trainingSessionsData.map((item) => (
              <ServiceCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. THERAPEUTICAL COUNSELLING SECTION — CLEAN WHITE BODY, DARK GREEN (#123D2B) HEADING */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-16 bg-white border-b border-[#DCE5DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Solid Dark Green Heading Area Box */}
          <div className="w-full rounded-2xl bg-[#123D2B] py-8 sm:py-10 px-6 sm:px-8 mb-8 sm:mb-10 text-center border border-[#1A4E38] shadow-xs">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-6 h-[1.5px] bg-[#3B7A5C]" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#D4E8DC]">
                CLINICAL THERAPEUTIC MODALITIES
              </span>
              <span className="w-6 h-[1.5px] bg-[#3B7A5C]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Therapeutical Counselling
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#D4E8DC] max-w-2xl mx-auto">
              Confidential therapeutic counselling and clinical modalities offered at The Light Centre in Pattambi.
            </p>
          </div>

          {/* 8 Clean Service Cards on White Background */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {therapeuticCounsellingData.map((item) => (
              <ServiceCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. COMPACT FINAL CONTACT SECTION — WHITE BODY WITH DARK GREEN (#123D2B) BOX */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-16 bg-white border-b border-[#DCE5DF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#123D2B] p-8 sm:p-12 text-center text-white border border-[#1A4E38] shadow-xs space-y-6">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-semibold">
                Get in Touch
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
                Pradheep Pattambi
              </h2>
              <p className="text-base sm:text-lg text-[#D4C3A3] font-medium">
                The Light Training and Counselling Centre
              </p>
              <p className="text-xs sm:text-sm text-[#D4E8DC] flex items-center justify-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#C5A880]" />
                <span>Pattambi, Palakkad District, Kerala</span>
              </p>
            </div>

            <div className="py-2">
              <p className="text-sm text-[#D4E8DC]">Direct Phone:</p>
              <a
                href="tel:+919567654880"
                className="text-2xl sm:text-3xl font-bold text-white hover:text-[#C5A880] transition-colors inline-block mt-0.5"
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
        </div>
      </section>
    </div>
  );
}
