import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Compass,
  HeartHandshake,
  Mic,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Quote
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import TestimonialCard from "@/components/ui/TestimonialCard";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { testimonialsData } from "@/data/testimonials";
import { faqData } from "@/data/faq";

export const metadata = {
  title: "About Pradheep N.V. | Psychologist in Palakkad & Pattambi",
  description:
    "Learn about Pradheep N.V. (Pradheep Pattambi), psychologist in Palakkad, published poet, martial arts enthusiast, and life skill mentor with 20+ years of Kerala Government service."
};

export default function AboutPage() {
  return (
    <div className="overflow-x-hidden">
      {/* ========================================================================= */}
      {/* 1. ABOUT HERO — CIRCULAR PHOTO ON LEFT, EDITORIAL CONTENT ON RIGHT */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#FAF7F2] border-b border-[#EAE2D3]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left: Circular Photo Frame */}
            <div className="lg:col-span-5 flex justify-center lg:justify-start">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[360px] lg:h-[360px] xl:w-[390px] xl:h-[390px] rounded-full bg-white border border-[#EAE2D3] shadow-sm flex items-center justify-center p-3 sm:p-4 shrink-0">
                <div className="relative w-full h-full rounded-full overflow-hidden flex items-center justify-center">
                  <Image
                    src="/images/pradheep-portrait.webp"
                    alt="Pradheep N.V. - Psychologist in Kerala"
                    fill
                    priority
                    className="object-contain"
                    sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 390px"
                  />
                </div>
              </div>
            </div>

            {/* Right: Editorial Typography & Actions */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF1EA] border border-[#D8CCA8]/60 w-fit">
                <span className="w-2 h-2 rounded-full bg-olive-600" />
                <span className="text-xs uppercase tracking-[0.25em] font-semibold text-olive-800">
                  MEET YOUR GUIDE
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl text-forest-950 font-bold tracking-tight leading-[1.1]">
                About Me
              </h1>

              <p className="text-lg sm:text-xl text-forest-800 font-medium leading-relaxed">
                &ldquo;I’m Pradheep N.V., a psychologist in Palakkad, helping individuals explore
                their inner strength and overcome life’s challenges through mindful guidance and support.&rdquo;
              </p>

              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-forest-900 text-[#FAF7F2] hover:bg-forest-800 transition-all text-sm font-medium tracking-wide shadow-sm group"
                >
                  <span>Book Consultation</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href="https://api.whatsapp.com/send?phone=919567654880"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-forest-900/30 text-forest-950 bg-white hover:bg-[#F3EDE2] transition-colors text-sm font-medium tracking-wide"
                >
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. BIOGRAPHY CONTENT — BALANCED WITH COMPACT ELEGANT PHOTO */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Portrait Column: smaller and well-balanced */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-xs sm:max-w-sm rounded-3xl overflow-hidden shadow-md border border-[#EAE2D3] bg-white">
                <Image
                  src="/images/pradheep-about.webp"
                  alt="Pradheep N.V. (Pradheep Pattambi)"
                  width={576}
                  height={1024}
                  className="w-full h-auto object-cover max-h-[480px]"
                  priority
                  sizes="(max-width: 1024px) 100vw, 30vw"
                />
              </div>
            </div>

            {/* Narrative Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2">
                <span className="w-6 h-[1.5px] bg-olive-600" />
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-olive-800">
                  LIFE & PURPOSE
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl text-forest-950 font-bold leading-tight tracking-tight">
                Pradheep Pattambi
              </h2>

              <div className="space-y-5 text-muted-text text-base sm:text-lg leading-relaxed font-sans">
                <p>
                  <strong className="text-forest-950 font-semibold">Pradheep N. V</strong>, a
                  renowned Psychologist in Palakkad, was born in Pattambi, Kerala, to Sri.
                  Narayanan Nair and Smt. Lakshmi Amma. A man of many friends and interests,
                  he completed his graduation and post-graduation with distinction. With over
                  20 years of service in the Kerala Government, he is admired for his deep
                  compassion and love for humanity.
                </p>

                <p>
                  Pradheep is also a published author of three Malayalam poetry books, a
                  storyteller, and a martial arts enthusiast. He is passionate about meditation,
                  hypnosis, and personal growth. As a motivational speaker with a sense of humor
                  and a love for music and badminton, Pradheep N. V inspires many to live fuller,
                  more aware lives.
                </p>

                <p>
                  For those seeking personal transformation and emotional wellness, he is a
                  trusted guide and a leading Psychologist in Palakkad.
                </p>
              </div>

              {/* Dedicated WhatsApp CTA */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href="https://wa.link/jc9lgn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-forest-900 text-[#FAF7F2] hover:bg-forest-800 transition-all text-sm sm:text-base font-medium tracking-wide shadow-sm group"
                >
                  <span>Let’s talk with me</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>

                <Link
                  href="/counselling"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-forest-900/30 text-forest-950 hover:bg-white transition-colors text-sm sm:text-base font-medium"
                >
                  <span>View Services</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. THREE CORE PILLARS OF EXPERTISE — BRIGHT SOFT CREAM */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#F8F5EE] border-t border-b border-[#EAE2D3]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="AREAS OF MASTERY"
            title="Three Pillars of Healing & Evolution"
            description="Bridging deep psychological insight, public inspiration, and practical life competencies."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#EAE2D3] shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-2xl bg-[#EBF1EA] text-forest-900 flex items-center justify-center mb-6">
                <HeartHandshake className="w-7 h-7" />
              </div>
              <h3 className="text-2xl text-forest-950 font-bold mb-3">
                Psychological Counselor
              </h3>
              <p className="text-muted-text text-sm sm:text-base leading-relaxed mb-6">
                Personalized, empathetic sessions to untangle emotional knots, alleviate anxiety,
                rebuild relationships, and provide a confidential haven for your deepest thoughts.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-forest-900">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-olive-600" />
                  <span>Anxiety & Stress Management</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-olive-600" />
                  <span>Couples & Premarital Guidance</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-olive-600" />
                  <span>Confidential Safe Space</span>
                </li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#EAE2D3] shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-2xl bg-[#EBF1EA] text-forest-900 flex items-center justify-center mb-6">
                <Mic className="w-7 h-7" />
              </div>
              <h3 className="text-2xl text-forest-950 font-bold mb-3">
                Motivational Speaker
              </h3>
              <p className="text-muted-text text-sm sm:text-base leading-relaxed mb-6">
                Tailored keynotes and workshops blending psychological clarity, humor, storytelling,
                and practical strategies to awaken inner purpose and grit.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-forest-900">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-olive-600" />
                  <span>Youth & College Seminars</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-olive-600" />
                  <span>Corporate & Team Well-being</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-olive-600" />
                  <span>Transformational Storytelling</span>
                </li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#EAE2D3] shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-2xl bg-[#EBF1EA] text-forest-900 flex items-center justify-center mb-6">
                <Sparkles className="w-7 h-7" />
              </div>
              <h3 className="text-2xl text-forest-950 font-bold mb-3">
                Life Skill Coach
              </h3>
              <p className="text-muted-text text-sm sm:text-base leading-relaxed mb-6">
                Mentoring individuals in assertiveness, emotional regulation, mindful decision-making,
                and resilience to excel in day-to-day challenges and careers.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-forest-900">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-olive-600" />
                  <span>Communication & Confidence</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-olive-600" />
                  <span>Meditation & Hypnosis Techniques</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-olive-600" />
                  <span>Career & Personal Clarity</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. PHILOSOPHY SECTION — BRIGHT PALE SAGE BACKGROUND */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#EDF2EB] text-forest-950 border-b border-[#D8CCA8]/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#D8CCA8]/60 shadow-sm">
            <span className="text-xs uppercase tracking-[0.2em] text-olive-800 font-semibold">
              MY PHILOSOPHY
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight text-forest-950">
            Delving into the uncharted realms of your consciousness to light the way toward personal evolution
          </h2>

          <div className="space-y-5 text-muted-text text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            <p>
              &ldquo;Are you feeling overwhelmed by life’s challenges? Struggling with anxiety,
              depression, or relationship issues? Searching for a safe, non-judgmental space to
              explore your thoughts and emotions? You’ve come to the right place.&rdquo;
            </p>
            <p>
              &ldquo;As a trusted psychologist in Palakkad, I offer personalized counseling to help
              you understand yourself better, build emotional resilience, and move forward with clarity
              and confidence.&rdquo;
            </p>
          </div>

          <div className="pt-4">
            <a
              href="https://wa.link/jc9lgn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-forest-900 text-[#FAF7F2] hover:bg-forest-800 transition-all text-sm sm:text-base font-medium shadow-sm group"
            >
              <span>Connect on WhatsApp</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. FULL-WIDTH TESTIMONIALS — BRIGHT IVORY */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="CLIENT EXPERIENCES"
            title="Voices of Healing & Real Transformation"
            description="Read experiences from trainers and professionals mentored by Pradheep N.V."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialsData.map((item) => (
              <TestimonialCard key={item.id} testimonial={item} />
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. FAQ SECTION — BRIGHT SOFT CREAM */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#F8F5EE] border-t border-[#EAE2D3]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="FAQ"
            title="Frequently Asked Questions"
            description="Answers to common queries regarding sessions, methods, and appointments."
            align="center"
          />

          <FAQAccordion items={faqData} defaultOpenIndex={null} />
        </div>
      </section>
    </div>
  );
}
