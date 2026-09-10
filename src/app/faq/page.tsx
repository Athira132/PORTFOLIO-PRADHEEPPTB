import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { faqData } from "@/data/faq";

export const metadata: Metadata = {
  title: "Counselling FAQs | Pradheep Pattambi Psychologist Kerala",
  description:
    "Find answers to common questions on psychological counseling, therapy sessions, confidentiality, premarital guidance, and appointments in Palakkad & Kerala.",
  alternates: {
    canonical: "https://pradheeppattambi.com/faq/",
  },
  openGraph: {
    title: "Counselling FAQs | Pradheep Pattambi Psychologist Kerala",
    description:
      "Find answers to common questions on psychological counseling, therapy sessions, confidentiality, premarital guidance, and appointments in Palakkad & Kerala.",
    url: "https://pradheeppattambi.com/faq/",
    siteName: "Pradheep Pattambi - Psychologist & NLP Master Trainer",
    images: [
      {
        url: "https://pradheeppattambi.com/images/photo-3.png",
        width: 1200,
        height: 630,
        alt: "Pradheep Pattambi - Counselling Questions and Answers Kerala",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Counselling FAQs | Pradheep Pattambi Psychologist Kerala",
    description:
      "Find answers to common questions on psychological counseling, therapy sessions, confidentiality, premarital guidance, and appointments in Palakkad & Kerala.",
    images: ["https://pradheeppattambi.com/images/photo-3.png"],
  },
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://pradheeppattambi.com/faq/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://pradheeppattambi.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "FAQ",
          item: "https://pradheeppattambi.com/faq/",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://pradheeppattambi.com/faq/#faqpage",
      name: "Frequently Asked Questions About Counselling & Psychological Guidance",
      url: "https://pradheeppattambi.com/faq/",
      description:
        "Frequently asked questions and answers about personal counselling, psychotherapy sessions, confidentiality, and booking with Pradheep N.V. in Palakkad, Kerala.",
      mainEntity: faqData.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
};

export default function FAQPage() {
  return (
    <div className="overflow-x-hidden bg-[#FAF7F2]">
      <JsonLd data={faqStructuredData} />
      {/* ========================================================================= */}
      {/* 1. FAQ HERO — CIRCULAR PHOTO ON LEFT, Q&A HEADING ON RIGHT */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#111814] border-b border-[#233127]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left: Circular Photo Frame */}
            <div className="lg:col-span-5 flex justify-center lg:justify-start">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[360px] lg:h-[360px] xl:w-[390px] xl:h-[390px] rounded-full bg-[#1A241E] border-2 border-[#C5A880] shadow-xl flex items-center justify-center overflow-hidden shrink-0">
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src="/images/photo-3.png"
                    alt="Pradheep N.V. - Psychological Counseling and Guidance FAQs in Palakkad"
                    fill
                    priority
                    className="object-cover object-[center_top] scale-110"
                    sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 390px"
                  />
                </div>
              </div>
            </div>

            {/* Right: Editorial Typography & Actions */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1C2B22] border border-[#375240] w-fit">
                <span className="w-2 h-2 rounded-full bg-[#C5A880]" />
                <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#A3B899]">
                  HELP & COMMON QUESTIONS
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl text-[#FAF7F2] font-bold tracking-tight leading-[1.1]">
                Frequently Asked Questions
              </h1>

              <p className="text-[#D6CEBE] text-base sm:text-lg max-w-2xl leading-relaxed">
                Clear answers regarding psychological counseling sessions, confidentiality,
                duration, and what you can expect during your personal growth journey with Pradheep N.V.
              </p>

              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <Link
                  href="/contact"
                  data-booking-trigger="true"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#C5A880] text-[#111814] hover:bg-[#D4BC96] transition-all text-sm font-bold tracking-wide shadow-sm group cursor-pointer"
                >
                  <span>Book a Consultation</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href="https://api.whatsapp.com/send?phone=919567654880"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-[#D8CCA8]/50 text-[#FAF7F2] bg-white/5 hover:bg-white/10 transition-colors text-sm font-medium tracking-wide"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>Ask on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. ACCORDION QUESTIONS SECTION */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#F8F5EE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-[0.2em] text-olive-700 font-semibold block mb-2">
              ALL YOU NEED TO KNOW
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-forest-950">
              Guidance & Consultation FAQs
            </h2>
            <p className="mt-3 text-muted-text text-base leading-relaxed">
              Click any question below to explore details about our practices and approach.
            </p>
          </div>

          <FAQAccordion items={faqData} defaultOpenIndex={0} />

          {/* Still have questions banner */}
          <div className="mt-14 p-8 sm:p-10 rounded-3xl bg-white border border-[#EAE2D3] text-center space-y-4 shadow-sm">
            <h3 className="text-2xl font-bold text-forest-950">
              Have a question that isn&rsquo;t answered here?
            </h3>
            <p className="text-muted-text text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Feel free to reach out directly. Every inquiry is handled with complete discretion and care.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                data-booking-trigger="true"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-forest-900 text-[#FAF7F2] hover:bg-forest-800 transition-all text-sm font-medium tracking-wide shadow-sm cursor-pointer"
              >
                <span>Contact Pradheep Directly</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
