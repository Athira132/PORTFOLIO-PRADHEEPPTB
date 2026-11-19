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
  CalendarCheck,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  MapPin,
  Clock,
  Sparkle,
  LucideIcon
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQAccordion from "@/components/ui/FAQAccordion";
import JsonLd from "@/components/seo/JsonLd";
import { WHATSAPP_NUMBER, getWhatsAppServiceEnquiryUrl } from "@/config/whatsapp";
import {
  trainingPrograms,
  therapeuticServices,
  trainingFAQs
} from "@/data/trainingCounsellingData";

export const metadata: Metadata = {
  title: "Training & Therapeutic Counselling in Pattambi | The Light Centre",
  description:
    "Explore professional training sessions and therapeutic counselling at The Light Training and Counselling Centre, Pattambi. Discover NLP, stress management, parenting support and more.",
  keywords: [
    "Training and Counselling Centre in Pattambi",
    "Counselling in Pattambi",
    "Therapeutic Counselling Pattambi",
    "Psychological Counsellor Pattambi",
    "NLP Training in Pattambi",
    "Parenting Counselling Pattambi",
    "Couple Counselling Pattambi",
    "Stress Management Training Pattambi",
    "Hypnotherapy Pattambi",
    "Personal Development Training Pattambi",
    "Training Sessions in Pattambi",
    "Pradheep Pattambi",
    "The Light Centre Pattambi"
  ],
  alternates: {
    canonical: "https://pradheeppattambi.com/training-and-therapeutic-counselling/"
  },
  openGraph: {
    title: "Training & Therapeutic Counselling in Pattambi | The Light Centre",
    description:
      "Explore professional training sessions and therapeutic counselling at The Light Training and Counselling Centre, Pattambi. Discover NLP, stress management, parenting support and more.",
    url: "https://pradheeppattambi.com/training-and-therapeutic-counselling/",
    siteName: "The Light Training and Counselling Centre",
    images: [
      {
        url: "/images/posters/poster-training-sessions.jpeg",
        width: 1200,
        height: 1312,
        alt: "The Light Training and Counselling Centre Pattambi - Pradheep Pattambi"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Training & Therapeutic Counselling in Pattambi | The Light Centre",
    description:
      "Explore professional training sessions and therapeutic counselling at The Light Training and Counselling Centre, Pattambi. Discover NLP, stress management, parenting support and more.",
    images: ["/images/posters/poster-training-sessions.jpeg"]
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
        "Pradheep Pattambi Counselling & Training"
      ],
      "url": "https://pradheeppattambi.com/training-and-therapeutic-counselling/",
      "telephone": "+919567654880",
      "email": "info@pradheeppattambi.com",
      "image": "https://pradheeppattambi.com/images/posters/poster-training-sessions.jpeg",
      "logo": "https://pradheeppattambi.com/images/the-light-centre-logo.jpg",
      "description":
        "The Light Training and Counselling Centre in Pattambi, Kerala offers professional training sessions and therapeutic counselling. Services include NLP, CBT, DBT, EMDR trauma recovery, couple therapy, hypnotherapy, and parenting guidance led by Pradheep Pattambi.",
      "founder": {
        "@type": "Person",
        "@id": "https://pradheeppattambi.com/#person",
        "name": "Pradheep Pattambi",
        "jobTitle": "NLP Master Trainer, Certified Hypnotist, Psychological Counsellor"
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
        "name": "Training & Therapeutic Counselling Offerings",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cognitive Behavioural Therapy (CBT)" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Dialectical Behaviour Therapy (DBT)" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "EMDR Trauma Counselling" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Couple Therapy & Marital Counselling" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Sex Therapy" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hypnotic Therapy" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "NLP Therapies & Master Training" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Parenting Training & Family Guidance" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Stress Management & Burnout Prevention" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Study Skills & Academic Focus Training" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Addiction Recovery Support" } }
        ]
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://pradheeppattambi.com/training-and-therapeutic-counselling/#faq",
      "mainEntity": trainingFAQs.map((faq) => ({
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

export default function TrainingAndTherapeuticCounsellingPage() {
  return (
    <div className="overflow-x-hidden">
      <JsonLd data={pageStructuredData} />

      {/* ========================================================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative py-16 sm:py-24 lg:py-28 bg-[#0E2016] text-[#FAF7F2] border-b border-[#1C3A29] overflow-hidden">
        {/* Subtle decorative background glow */}
        <div
          aria-hidden="true"
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#183A2A] blur-3xl opacity-40 pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[#2B5D45] blur-3xl opacity-20 pointer-events-none"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Heading, Subtext, Credentials, CTAs */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Centre & Location Pill */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#183A2A] border border-[#2B5D45] shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#C5A880] animate-pulse" />
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#D4C3A3]">
                  The Light Training and Counselling Centre • Pattambi
                </span>
              </div>

              {/* Main Heading H1 */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.12] text-[#FAF7F2]">
                Training & Therapeutic Counselling in Pattambi
              </h1>

              {/* Supporting Text: Learn. Heal. Transform. */}
              <div className="flex items-center gap-3 text-lg sm:text-xl font-semibold text-[#C5A880] tracking-wide">
                <span>Learn</span>
                <span className="text-[#6E8276]">&bull;</span>
                <span>Heal</span>
                <span className="text-[#6E8276]">&bull;</span>
                <span>Transform</span>
              </div>

              {/* Introduction Text */}
              <p className="text-base sm:text-lg text-[#CFD8D2] leading-relaxed max-w-2xl font-sans">
                Welcome to <strong className="text-[#FAF7F2] font-semibold">The Light Training and Counselling Centre</strong> in Pattambi, Kerala. We provide a safe, compassionate sanctuary combining professional personal development training sessions with evidence-based therapeutic counselling designed to heal emotional wounds and empower purposeful living.
              </p>

              {/* Trainer Credential Badge */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#142A1E] border border-[#244733] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#C5A880] font-semibold block">
                    Chief Facilitator & Psychological Consultant
                  </span>
                  <p className="text-xl font-bold text-[#FAF7F2] mt-0.5">
                    Pradheep Pattambi
                  </p>
                  <p className="text-xs sm:text-sm text-[#A9B8AF] mt-1 font-medium">
                    NLP Master Trainer <span className="text-[#C5A880]">|</span> Hypnotist <span className="text-[#C5A880]">|</span> Psychological Counsellor
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#D8CCA8] bg-[#1E3A2B] px-3.5 py-2 rounded-xl shrink-0 self-start sm:self-auto border border-[#305741]">
                  <MapPin className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                  <span>Pattambi, Kerala</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/contact"
                  data-booking-trigger="true"
                  data-service="Training & Therapeutic Counselling"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#C5A880] text-[#0E2016] hover:bg-[#D4BC96] transition-all text-base font-bold tracking-wide shadow-md hover:shadow-lg active:scale-[0.99] group cursor-pointer"
                >
                  <CalendarCheck className="w-5 h-5 transition-transform group-hover:scale-110" />
                  <span>Book a Consultation</span>
                </Link>

                <a
                  href="#training-sessions"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-[#2B5D45] text-[#FAF7F2] hover:bg-[#183A2A] transition-colors text-base font-medium tracking-wide"
                >
                  <span>Explore Our Programs</span>
                  <ArrowRight className="w-4 h-4 text-[#C5A880]" />
                </a>

                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                    "Hello Pradheep Sir, I would like to enquire about Training & Therapeutic Counselling sessions at The Light Centre, Pattambi."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-[#25D366] text-white hover:bg-[#20ba5a] transition-all text-sm sm:text-base font-semibold shadow-sm"
                  aria-label="Chat on WhatsApp with Pradheep Pattambi"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp Enquiry</span>
                </a>
              </div>

              {/* Quick Contact Line */}
              <div className="pt-2 flex items-center gap-3 text-xs sm:text-sm text-[#A9B8AF]">
                <span>Direct Contact:</span>
                <a
                  href="tel:+919567654880"
                  className="text-[#FAF7F2] font-semibold hover:text-[#C5A880] underline underline-offset-4 transition-colors"
                >
                  +91 9567-654-880
                </a>
              </div>
            </div>

            {/* Right Column: Visual Showcase Featuring Pradheep Pattambi & The Light Centre */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="relative w-full max-w-md">
                {/* Outer decorative card */}
                <div className="relative rounded-3xl bg-gradient-to-b from-[#183A2A] to-[#102419] p-6 sm:p-8 border border-[#2B5D45] shadow-2xl">
                  {/* Top Badge: The Light Centre Logo / Identity */}
                  <div className="flex items-center justify-between pb-6 border-b border-[#244733]">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-white p-1 flex items-center justify-center shadow-xs overflow-hidden shrink-0">
                        <Image
                          src="/images/the-light-emblem.jpg"
                          alt="The Light Training and Counselling Centre Emblem"
                          width={48}
                          height={48}
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-widest text-[#C5A880] font-bold">
                          The Light
                        </p>
                        <p className="text-sm font-semibold text-[#FAF7F2] leading-tight">
                          Training & Counselling Centre
                        </p>
                      </div>
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#A9B8AF] bg-[#0E2016] px-2.5 py-1 rounded-full border border-[#244733]">
                      Pattambi
                    </span>
                  </div>

                  {/* Central Portrait: Authentic Photo from Posters */}
                  <div className="my-6 flex justify-center">
                    <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full p-1.5 bg-gradient-to-tr from-[#C5A880] to-[#2B5D45] shadow-xl">
                      <div className="relative w-full h-full rounded-full overflow-hidden bg-[#0E2016]">
                        <Image
                          src="/images/pradheep-portrait-clean.png"
                          alt="Pradheep Pattambi - NLP Master Trainer, Certified Hypnotist & Psychological Counsellor in Pattambi"
                          fill
                          priority
                          className="object-cover"
                          sizes="(max-width: 640px) 176px, 208px"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Quote Banner from Posters */}
                  <div className="text-center space-y-2 pt-2">
                    <p className="text-sm italic text-[#D8CCA8] font-serif">
                      &ldquo;Vision for a better tomorrow &bull; Enjoy and Transform&rdquo;
                    </p>
                    <p className="text-xs text-[#8E9F94] leading-relaxed">
                      &ldquo;Book a call and heal your wounds in Mind.&rdquo;
                    </p>
                  </div>

                  {/* Bottom Metrics Pill Bar */}
                  <div className="mt-6 pt-5 border-t border-[#244733] grid grid-cols-2 gap-3 text-center">
                    <div className="p-2.5 rounded-xl bg-[#0E2016]/70 border border-[#244733]">
                      <p className="text-base font-bold text-[#FAF7F2]">16+ Modules</p>
                      <p className="text-[11px] text-[#A9B8AF]">Training & Therapy</p>
                    </div>
                    <div className="p-2.5 rounded-xl bg-[#0E2016]/70 border border-[#244733]">
                      <p className="text-base font-bold text-[#C5A880]">Confidential</p>
                      <p className="text-[11px] text-[#A9B8AF]">Personal Care</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. CENTRE INTRODUCTION & PHILOSOPHY */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#FAF7F2] border-b border-[#EAE2D3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left: Professional Visual of Pradheep Pattambi */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md rounded-3xl overflow-hidden shadow-lg border border-[#EAE2D3] bg-white p-4">
                <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden">
                  <Image
                    src="/images/photo-4.png"
                    alt="Pradheep Pattambi conducting psychological counselling and life skill coaching in Pattambi"
                    fill
                    className="object-contain bg-[#F8F5EE]"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
                <div className="p-4 text-center">
                  <p className="text-base font-bold text-forest-950">
                    Pradheep Pattambi
                  </p>
                  <p className="text-xs text-muted-text mt-0.5">
                    Lead Psychologist & NLP Master Trainer &bull; The Light Centre
                  </p>
                </div>
              </div>
            </div>

            {/* Right: The Light Centre Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2">
                <span className="w-6 h-[1.5px] bg-olive-600" />
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-olive-800">
                  ABOUT THE LIGHT CENTRE
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-950 tracking-tight leading-tight">
                A Dedicated Sanctuary for Mindful Healing & Personal Growth in Pattambi
              </h2>

              <div className="space-y-4 text-muted-text text-base sm:text-lg leading-relaxed font-sans">
                <p>
                  At <strong className="text-forest-950 font-semibold">The Light Training and Counselling Centre</strong> in Pattambi, we believe that emotional wellbeing and personal fulfillment are attainable for everyone. Life transitions, persistent anxiety, family conflicts, and professional burnout can cloud our direction; our mission is to illuminate the path forward with empathy, clarity, and proven methodologies.
                </p>
                <p>
                  Under the experienced guidance of <strong className="text-forest-950 font-semibold">Pradheep Pattambi</strong>, our centre unites two essential branches of human wellness: <span className="text-forest-950 font-medium">Professional Training & Personal Development</span> to build cognitive mastery, and <span className="text-forest-950 font-medium">Therapeutic Counselling</span> to address and heal emotional struggles in a safe, judgment-free space.
                </p>
                <p>
                  Whether you are seeking couples counselling, parenting insight, student study skills, or evidence-based therapies like CBT, DBT, or EMDR, each program is customized to your personal pace and authentic circumstances.
                </p>
              </div>

              {/* 3 Pillars Card Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-white border border-[#EAE2D3] shadow-2xs">
                  <div className="w-10 h-10 rounded-xl bg-[#EBF1EA] text-forest-900 flex items-center justify-center mb-3">
                    <ShieldCheck className="w-5 h-5 text-olive-700" />
                  </div>
                  <h3 className="text-sm font-bold text-forest-950 mb-1">Confidential & Safe</h3>
                  <p className="text-xs text-muted-text">Strict ethical standards safeguarding your disclosures.</p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-[#EAE2D3] shadow-2xs">
                  <div className="w-10 h-10 rounded-xl bg-[#EBF1EA] text-forest-900 flex items-center justify-center mb-3">
                    <Brain className="w-5 h-5 text-olive-700" />
                  </div>
                  <h3 className="text-sm font-bold text-forest-950 mb-1">Evidence-Based</h3>
                  <p className="text-xs text-muted-text">Rooted in validated cognitive and behavioral sciences.</p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-[#EAE2D3] shadow-2xs">
                  <div className="w-10 h-10 rounded-xl bg-[#EBF1EA] text-forest-900 flex items-center justify-center mb-3">
                    <Sparkles className="w-5 h-5 text-olive-700" />
                  </div>
                  <h3 className="text-sm font-bold text-forest-950 mb-1">Holistic Growth</h3>
                  <p className="text-xs text-muted-text">Balancing emotional healing with practical life mastery.</p>
                </div>
              </div>

              {/* Internal navigation links */}
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold text-olive-800">
                <span>Explore related resources:</span>
                <Link href="/counselling" className="underline hover:text-forest-950">
                  Counselling in Palakkad &rarr;
                </Link>
                <Link href="/career" className="underline hover:text-forest-950">
                  Career Guidance &rarr;
                </Link>
                <Link href="/about" className="underline hover:text-forest-950">
                  Trainer Background &rarr;
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. TRAINING SESSIONS SECTION (FROM POSTER 1) */}
      {/* ========================================================================= */}
      <section id="training-sessions" className="py-20 sm:py-28 bg-[#F8F5EE] border-b border-[#EAE2D3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="DEVELOPMENTAL OFFERINGS"
            title="Professional Training & Personal Development"
            description="Transformative training programs from The Light Centre designed to cultivate emotional intelligence, strengthen family relationships, and unlock personal potential in Pattambi."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {trainingPrograms.map((item) => {
              const IconComp = iconMap[item.iconName] || Users;
              return (
                <article
                  key={item.id}
                  className="group relative flex flex-col justify-between rounded-3xl bg-white border border-[#EAE2D3] p-7 shadow-xs hover:shadow-md hover:border-olive-500/40 transition-all duration-200"
                >
                  <div className="space-y-4">
                    {/* Icon Header */}
                    <div className="w-13 h-13 rounded-2xl bg-[#EBF1EA] text-forest-900 flex items-center justify-center group-hover:bg-forest-900 group-hover:text-[#FAF7F2] transition-colors duration-200">
                      <IconComp className="w-6 h-6 stroke-[1.75]" />
                    </div>

                    {/* Title & Tagline */}
                    <div>
                      <h3 className="text-xl font-bold text-forest-950 group-hover:text-forest-800 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs font-semibold text-olive-700 mt-1 uppercase tracking-wider">
                        {item.tagline}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-text leading-relaxed font-sans">
                      {item.description}
                    </p>

                    {/* Key Highlights */}
                    <div className="pt-2 border-t border-[#F0EAE0] space-y-1.5">
                      {item.highlights.map((h, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-[#55635B]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-olive-600 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Action */}
                  <div className="pt-6 mt-6 border-t border-[#F0EAE0]">
                    <a
                      href={getWhatsAppServiceEnquiryUrl(item.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-[#FAF7F2] hover:bg-forest-900 hover:text-[#FAF7F2] text-forest-950 border border-[#EAE2D3] text-xs font-bold tracking-wide transition-colors"
                      aria-label={`Enquire about ${item.title} training on WhatsApp`}
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                      <span>Enquire on WhatsApp</span>
                    </a>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Section Footnote / Booking prompt */}
          <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-[#EBF1EA] border border-[#C8D1C7] flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div>
              <p className="text-base sm:text-lg font-bold text-forest-950">
                Interested in custom corporate, institutional, or group training in Pattambi?
              </p>
              <p className="text-xs sm:text-sm text-muted-text mt-1">
                Pradheep Pattambi conducts tailored seminars, school workshops, and parent-teacher interactive sessions across Kerala.
              </p>
            </div>
            <Link
              href="/contact"
              data-booking-trigger="true"
              data-service="Group Training Program"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-forest-900 text-[#FAF7F2] hover:bg-forest-800 text-sm font-semibold tracking-wide shrink-0 transition-colors shadow-xs cursor-pointer"
            >
              <span>Schedule a Program</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. THERAPEUTIC COUNSELLING SECTION (FROM POSTER 2) */}
      {/* ========================================================================= */}
      <section id="therapeutic-counselling" className="py-20 sm:py-28 bg-[#FAF7F2] border-b border-[#EAE2D3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="CLINICAL PSYCHOLOGY & HEALING"
            title="Therapeutic Counselling"
            description="Confidential, evidence-based psychotherapeutic modalities conducted in Pattambi to heal deep emotional trauma, relieve anxiety, and restore inner harmony."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {therapeuticServices.map((service) => {
              const IconComp = iconMap[service.iconName] || Brain;
              return (
                <article
                  key={service.id}
                  className="group relative flex flex-col justify-between rounded-3xl bg-white border border-[#EAE2D3] p-7 shadow-xs hover:shadow-md hover:border-olive-500/40 transition-all duration-200"
                >
                  <div className="space-y-4">
                    {/* Icon Header */}
                    <div className="w-13 h-13 rounded-2xl bg-[#F4EFE6] text-forest-900 flex items-center justify-center group-hover:bg-[#143022] group-hover:text-[#FAF7F2] transition-colors duration-200">
                      <IconComp className="w-6 h-6 stroke-[1.75]" />
                    </div>

                    {/* Title & Tagline */}
                    <div>
                      <h3 className="text-xl font-bold text-forest-950 group-hover:text-forest-800 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs font-semibold text-[#8C6D47] mt-1 uppercase tracking-wider">
                        {service.tagline}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-text leading-relaxed font-sans">
                      {service.description}
                    </p>

                    {/* Key Highlights */}
                    <div className="pt-2 border-t border-[#F0EAE0] space-y-1.5">
                      {service.highlights.map((h, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-[#55635B]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#8C6D47] shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Action */}
                  <div className="pt-6 mt-6 border-t border-[#F0EAE0]">
                    <Link
                      href="/contact"
                      data-booking-trigger="true"
                      data-service={service.title}
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-forest-900 hover:bg-forest-800 text-[#FAF7F2] text-xs font-bold tracking-wide transition-colors cursor-pointer"
                    >
                      <CalendarCheck className="w-3.5 h-3.5 text-[#C5A880]" />
                      <span>Book Counselling</span>
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Ethics & Non-judgment notice */}
          <div className="mt-14 max-w-4xl mx-auto p-5 sm:p-6 rounded-2xl bg-[#FAF8F5] border border-[#D8CCA8] text-center space-y-1.5">
            <p className="text-xs uppercase tracking-widest text-olive-800 font-bold">
              Professional Ethics & Clinical Discretion
            </p>
            <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
              All therapeutic consultations at The Light Centre strictly adhere to non-judgmental ethical guidelines. Every client’s story is treated with dignity, compassion, and complete confidentiality.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. ABOUT THE TRAINER: PRADHEEP PATTAMBI */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#111814] text-[#FAF7F2] border-b border-[#233127]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left: Authentic Photos Grid showcasing Pradheep Pattambi */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-sm sm:max-w-md rounded-3xl overflow-hidden bg-[#1A241E] border-2 border-[#C5A880] p-4 shadow-xl">
                {/* Authentic circular portrait from poster */}
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-[#0E2016]">
                  <Image
                    src="/images/pradheep-poster-portrait.jpg"
                    alt="Pradheep Pattambi - Authentic portrait from The Light Training and Counselling Centre poster"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 35vw"
                  />
                </div>

                {/* Caption Banner */}
                <div className="mt-4 pt-3 border-t border-[#2B3B30] text-center">
                  <p className="text-base font-bold text-[#FAF7F2]">
                    Pradheep Pattambi
                  </p>
                  <p className="text-xs text-[#C5A880] font-medium mt-0.5">
                    NLP Master Trainer &bull; Hypnotist &bull; Psychological Counsellor
                  </p>
                </div>
              </div>

              {/* Secondary photo badge: Live training session */}
              <div className="mt-6 flex items-center gap-3 p-3 rounded-2xl bg-[#18231C] border border-[#2B3B30] max-w-sm w-full">
                <div className="relative w-14 h-14 rounded-xl overflow-hidden shrink-0 border border-[#C5A880]/50">
                  <Image
                    src="/images/photo-2.png"
                    alt="Pradheep Pattambi addressing a seminar on personal development"
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                </div>
                <div className="text-left">
                  <p className="text-xs font-semibold text-[#FAF7F2]">
                    Decades of Real Experience
                  </p>
                  <p className="text-[11px] text-[#A9B8AF] leading-tight">
                    Conducting transformative workshops and personal consultations across Kerala.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Biographical Profile */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1C2B22] border border-[#375240]">
                <span className="w-2 h-2 rounded-full bg-[#C5A880]" />
                <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#A3B899]">
                  MEET YOUR TRAINER & COUNSELLOR
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FAF7F2] tracking-tight leading-tight">
                Pradheep Pattambi
              </h2>

              <div className="inline-flex flex-wrap items-center gap-2 text-sm sm:text-base font-semibold text-[#C5A880]">
                <span>NLP Master Trainer</span>
                <span className="text-[#55695C]">&bull;</span>
                <span>Hypnotist</span>
                <span className="text-[#55695C]">&bull;</span>
                <span>Psychological Counsellor</span>
              </div>

              <div className="space-y-4 text-[#D6CEBE] text-base sm:text-lg leading-relaxed font-sans">
                <p>
                  <strong className="text-[#FAF7F2] font-semibold">Pradheep Pattambi (Pradheep N.V.)</strong> is the driving force and lead consultant at The Light Training and Counselling Centre in Pattambi, Kerala. With dedicated practice in psychological counselling, certified Neuro-Linguistic Programming (NLP) training, and hypnotherapy, he has helped hundreds of individuals break through emotional barriers and discover lasting clarity.
                </p>
                <p>
                  His training programs are acclaimed for their grounded, engaging, and deeply relatable delivery. Drawing on evidence-based cognitive frameworks, NLP methodologies, and subconscious alignment, Pradheep simplifies complex psychological principles into actionable habits for parents, couples, students, and professionals alike.
                </p>
                <p>
                  In individual therapeutic counselling, Pradheep maintains an empathetic, judgment-free environment where clients can openly explore sensitive challenges such as chronic stress, relationship strains, trauma, and lifestyle dependencies.
                </p>
              </div>

              {/* 3 Core Competencies Chips */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-[#1A261E] border border-[#2D4032]">
                  <p className="text-xs uppercase tracking-wider text-[#C5A880] font-bold">Training</p>
                  <p className="text-xs text-[#D6CEBE] mt-1">NLP mastery, study skills, stress regulation & parenting.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-[#1A261E] border border-[#2D4032]">
                  <p className="text-xs uppercase tracking-wider text-[#C5A880] font-bold">Counselling</p>
                  <p className="text-xs text-[#D6CEBE] mt-1">CBT, DBT, couple therapy & confidential trauma support.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-[#1A261E] border border-[#2D4032]">
                  <p className="text-xs uppercase tracking-wider text-[#C5A880] font-bold">Hypnotherapy</p>
                  <p className="text-xs text-[#D6CEBE] mt-1">Subconscious reframing, habit reform & deep relaxation.</p>
                </div>
              </div>

              {/* Action buttons */}
              <div className="pt-3 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  data-booking-trigger="true"
                  data-service="Consultation with Pradheep Pattambi"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#C5A880] text-[#111814] hover:bg-[#D4BC96] text-sm font-bold tracking-wide transition-colors shadow-sm cursor-pointer"
                >
                  <span>Book a Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-[#2B5D45] text-[#FAF7F2] hover:bg-[#183A2A] text-sm font-medium transition-colors"
                >
                  <span>Read Full Biography</span>
                  <ArrowUpRight className="w-4 h-4 text-[#C5A880]" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. ORIGINAL POSTERS SHOWCASE */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-[#F8F5EE] border-b border-[#EAE2D3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="CENTRE CAMPAIGN"
            title="The Light Centre Visual Announcements"
            description="Our official announcements for Training Sessions and Therapeutic Counselling in Pattambi, Kerala."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Poster 1: Training Sessions */}
            <div className="rounded-3xl bg-white border border-[#EAE2D3] p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="relative w-full aspect-[1200/1312] rounded-2xl overflow-hidden bg-[#FAF7F2] border border-[#EAE2D3]">
                <Image
                  src="/images/posters/poster-training-sessions.jpeg"
                  alt="Training Sessions Poster - The Light Training and Counselling Centre Pattambi"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-base font-bold text-forest-950">
                  Poster 1: Professional Training Sessions
                </h3>
                <p className="text-xs text-muted-text mt-1">
                  Parenting, Couple Therapy, Pre-marital, Stress Management, Study Skills, Hypnotism, Addiction & NLP
                </p>
              </div>
            </div>

            {/* Poster 2: Therapeutical Counselling */}
            <div className="rounded-3xl bg-white border border-[#EAE2D3] p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="relative w-full aspect-[1200/1312] rounded-2xl overflow-hidden bg-[#FAF7F2] border border-[#EAE2D3]">
                <Image
                  src="/images/posters/poster-therapeutic-counselling.jpeg"
                  alt="Therapeutical Counselling Poster - The Light Training and Counselling Centre Pattambi"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-base font-bold text-forest-950">
                  Poster 2: Therapeutic Counselling
                </h3>
                <p className="text-xs text-muted-text mt-1">
                  CBT, DBT, EMDR (Trauma), Couple Therapy, Sex Therapy, Hypnotic Therapy, NLP Therapies & Meditation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. FREQUENTLY ASKED QUESTIONS (FAQ) */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#FAF7F2] border-b border-[#EAE2D3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="QUESTIONS & ANSWERS"
            title="Frequently Asked Questions"
            description="Clear and honest information about counselling services and training programs at The Light Centre, Pattambi."
            align="center"
          />

          <FAQAccordion items={trainingFAQs} defaultOpenIndex={0} />

          <div className="mt-12 text-center">
            <p className="text-sm text-muted-text">
              Have another question not answered here?{" "}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  "Hello Pradheep Sir, I have a question regarding your counselling and training services in Pattambi."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-forest-950 font-bold underline hover:text-olive-700 transition-colors"
              >
                Ask directly on WhatsApp &rarr;
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. CALL TO ACTION (CTA) FINAL SECTION */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#0E2016] text-[#FAF7F2] relative overflow-hidden">
        {/* Glow Effects */}
        <div
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#183A2A] rounded-full blur-[120px] opacity-50 pointer-events-none"
        />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          {/* Emblem Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#183A2A] border border-[#2B5D45]">
            <Sparkle className="w-3.5 h-3.5 text-[#C5A880]" />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#D8CCA8]">
              Begin Your Positive Transformation
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#FAF7F2] leading-tight">
            Your Journey Towards a Better Tomorrow Begins Here
          </h2>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-[#CFD8D2] max-w-2xl mx-auto leading-relaxed font-sans">
            Take the first step towards personal growth, emotional wellbeing and positive transformation. Whether you are dealing with stress, navigating relationship challenges, or aiming to master your mindset, confidential support is here for you in Pattambi.
          </p>

          {/* Contact Details & Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Book Consultation Button */}
            <Link
              href="/contact"
              data-booking-trigger="true"
              data-service="Training & Therapeutic Counselling"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full bg-[#C5A880] text-[#0E2016] hover:bg-[#D4BC96] text-base font-bold tracking-wide transition-all shadow-md hover:shadow-lg cursor-pointer"
            >
              <CalendarCheck className="w-5 h-5" />
              <span>Book a Consultation</span>
            </Link>

            {/* Clickable Phone Number */}
            <a
              href="tel:+919567654880"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#FAF7F2] text-[#0E2016] hover:bg-[#F3EDE2] text-base font-bold tracking-wide transition-colors shadow-md"
            >
              <Phone className="w-5 h-5 text-forest-900" />
              <span>Call: 9567654880</span>
            </a>

            {/* WhatsApp Contact Button */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                "Hello Pradheep Sir, I would like to book a consultation at The Light Training and Counselling Centre in Pattambi."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#25D366] text-white hover:bg-[#20ba5a] text-base font-bold tracking-wide transition-all shadow-md"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Address & Centre details */}
          <div className="pt-8 border-t border-[#1C3A29] flex flex-col sm:flex-row items-center justify-center gap-4 text-xs sm:text-sm text-[#A9B8AF]">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#C5A880]" />
              The Light Training and Counselling Centre, Pattambi, Kerala
            </span>
            <span className="hidden sm:inline text-[#2B5D45]">&bull;</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#C5A880]" />
              Monday &ndash; Saturday, 09:00 AM &ndash; 06:00 PM
            </span>
          </div>

          {/* Internal links to other key pages */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-[#8E9F94]">
            <Link href="/" className="hover:text-[#FAF7F2] transition-colors">Home</Link>
            <span>&bull;</span>
            <Link href="/about" className="hover:text-[#FAF7F2] transition-colors">About Pradheep</Link>
            <span>&bull;</span>
            <Link href="/counselling" className="hover:text-[#FAF7F2] transition-colors">Counselling in Palakkad</Link>
            <span>&bull;</span>
            <Link href="/career" className="hover:text-[#FAF7F2] transition-colors">Career Guidance</Link>
            <span>&bull;</span>
            <Link href="/gallery" className="hover:text-[#FAF7F2] transition-colors">Photo Gallery</Link>
            <span>&bull;</span>
            <Link href="/contact" className="hover:text-[#FAF7F2] transition-colors">Contact & Location</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

