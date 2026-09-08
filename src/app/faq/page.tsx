import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { faqData } from "@/data/faq";

export const metadata = {
  title: "Frequently Asked Questions | Pradheep Pattambi (Psychologist)",
  description:
    "Find answers to common questions about psychological counseling, session formats, fees, and confidential therapy with Pradheep N.V. in Palakkad and Pattambi."
};

export default function FAQPage() {
  return (
    <div className="overflow-x-hidden bg-[#FAF7F2]">
      {/* ========================================================================= */}
      {/* 1. FAQ HERO — CIRCULAR PHOTO ON LEFT, Q&A HEADING ON RIGHT */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#FAF7F2] border-b border-[#EAE2D3]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left: Circular Photo Frame */}
            <div className="lg:col-span-5 flex justify-center lg:justify-start">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[360px] lg:h-[360px] xl:w-[390px] xl:h-[390px] rounded-full bg-white border-2 border-[#C5B594] shadow-sm flex items-center justify-center overflow-hidden shrink-0">
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src="/images/photo-3.png"
                    alt="Pradheep N.V. - Consultative Counselling Guidance"
                    fill
                    priority
                    className="object-cover object-[center_top] scale-105"
                    sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 390px"
                  />
                </div>
              </div>
            </div>

            {/* Right: Editorial Typography & Actions */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF1EA] border border-[#D8CCA8]/50 w-fit">
                <span className="w-2 h-2 rounded-full bg-olive-600" />
                <span className="text-xs uppercase tracking-[0.25em] font-semibold text-olive-800">
                  HELP & COMMON QUESTIONS
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl text-forest-950 font-bold tracking-tight leading-[1.1]">
                Frequently Asked Questions
              </h1>

              <p className="text-muted-text text-base sm:text-lg max-w-2xl leading-relaxed">
                Clear answers regarding psychological counseling sessions, confidentiality,
                duration, and what you can expect during your personal growth journey with Pradheep N.V.
              </p>

              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-forest-900 text-[#FAF7F2] hover:bg-forest-800 transition-all text-sm font-medium tracking-wide shadow-sm group"
                >
                  <span>Book a Consultation</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href="https://api.whatsapp.com/send?phone=919567654880"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-[#25D366] text-forest-950 bg-[#E8F8EE] hover:bg-[#D3F3DC] transition-colors text-sm font-medium tracking-wide"
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
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-forest-900 text-[#FAF7F2] hover:bg-forest-800 transition-all text-sm font-medium tracking-wide shadow-sm"
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
