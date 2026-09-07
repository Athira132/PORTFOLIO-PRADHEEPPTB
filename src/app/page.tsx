import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
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
      {/* ========================================================================= */}
      <section className="relative pt-6 sm:pt-10 pb-16 sm:pb-24 lg:pb-32 bg-[#FAF7F2] border-b border-[#EAE2D3]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Copy & CTAs */}
            <div className="lg:col-span-6 space-y-6 sm:space-y-8 pr-0 lg:pr-6">
              {/* Small Label */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF1EA] border border-[#D8CCA8]/50">
                <span className="w-2 h-2 rounded-full bg-olive-600 animate-pulse" />
                <span className="text-xs uppercase tracking-[0.25em] font-semibold text-olive-800">
                  PSYCHOLOGIST
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.2rem] font-normal text-forest-950 tracking-tight leading-[1.05]">
                Pradheep <br />
                <span className="italic font-normal text-forest-800">Pattambi</span>
              </h1>

              {/* Description */}
              <p className="text-muted-text text-lg sm:text-xl leading-relaxed font-sans max-w-xl">
                Are you feeling overwhelmed by life&rsquo;s challenges? Struggling with
                anxiety, depression, or relationship issues? Seeking a safe space to
                explore your thoughts and emotions? You&rsquo;ve come to the right place.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-forest-900 text-[#FAF7F2] hover:bg-forest-800 transition-all shadow-sm hover:shadow-md text-sm sm:text-base font-medium tracking-wide group"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-forest-900/30 text-forest-950 hover:bg-[#F3EDE2] transition-colors text-sm sm:text-base font-medium tracking-wide"
                >
                  <span>Get in Touch</span>
                </Link>
              </div>

              {/* Quick Trust Highlights */}
              <div className="pt-6 sm:pt-8 border-t border-[#EAE2D3] grid grid-cols-3 gap-4 sm:gap-6">
                <div>
                  <span className="block font-serif text-2xl sm:text-3xl text-forest-950 font-medium">
                    20+
                  </span>
                  <span className="text-xs text-muted-text font-sans uppercase tracking-wider">
                    Years Service
                  </span>
                </div>
                <div>
                  <span className="block font-serif text-2xl sm:text-3xl text-forest-950 font-medium">
                    1000s
                  </span>
                  <span className="text-xs text-muted-text font-sans uppercase tracking-wider">
                    Lives Guided
                  </span>
                </div>
                <div>
                  <span className="block font-serif text-2xl sm:text-3xl text-forest-950 font-medium">
                    100%
                  </span>
                  <span className="text-xs text-muted-text font-sans uppercase tracking-wider">
                    Confidential
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Banner Image */}
            <div className="lg:col-span-6 relative">
              <div className="relative mx-auto max-w-xl lg:max-w-none">
                {/* Decorative border frame */}
                <div className="absolute -inset-3 sm:-inset-4 rounded-[2.5rem] border border-[#D8CCA8]/60 -z-10 bg-[#F4EFE6]/50" />
                <div className="relative rounded-[2rem] overflow-hidden shadow-xl border border-[#EAE2D3] bg-white">
                  <Image
                    src="/images/pradheep-hero.png"
                    alt="Pradheep Pattambi - Psychologist and Life Skill Coach"
                    width={1264}
                    height={693}
                    priority
                    className="w-full h-auto object-cover transform hover:scale-[1.01] transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                {/* Subtle Floating Badge */}
                <div className="hidden sm:flex absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md px-5 py-3.5 rounded-2xl shadow-lg border border-[#EAE2D3] items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#EBF1EA] text-forest-900 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-olive-600" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-forest-950 uppercase tracking-wider">
                      Mindful Healing
                    </p>
                    <p className="text-[11px] text-muted-text">
                      Pattambi &bull; Palakkad, Kerala
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. ABOUT PREVIEW SECTION */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 lg:py-36 bg-[#F4EFE6]/60 border-b border-[#EAE2D3]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: About Photo */}
            <div className="lg:col-span-5 relative order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-lg border border-[#EAE2D3] bg-white">
                <Image
                  src="/images/pradheep-about.webp"
                  alt="Pradheep N.V. Portrait"
                  width={576}
                  height={1024}
                  className="w-full h-auto max-h-[580px] object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              <div className="mt-4 p-4 rounded-2xl bg-white border border-[#EAE2D3] flex items-center gap-3">
                <Award className="w-6 h-6 text-olive-600 shrink-0" />
                <p className="text-xs text-forest-900 font-medium">
                  Author of 3 Malayalam poetry books &bull; Dedicated to humanitarian wellness
                </p>
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

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-forest-950 font-normal leading-tight">
                A little about Pradheep
              </h2>

              <div className="space-y-4">
                <p className="font-serif text-xl sm:text-2xl text-forest-800 italic leading-snug">
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
      {/* 3. SERVICES SECTION */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 lg:py-36 bg-[#FAF7F2]">
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
      {/* 4. PORTFOLIO / GALLERY PREVIEW */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 lg:py-36 bg-[#F4EFE6]/50 border-t border-b border-[#EAE2D3]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-6 h-[1.5px] bg-olive-600" />
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-olive-800">
                  MOMENTS OF IMPACT
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-forest-950 font-normal leading-tight">
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

          {/* Gallery Preview Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {previewGallery.map((item) => (
              <Link
                key={item.id}
                href="/gallery"
                className="group relative rounded-2xl overflow-hidden shadow-sm bg-white border border-[#EAE2D3] aspect-[4/5] flex flex-col justify-end"
              >
                <Image
                  src={item.imageSrc}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/85 via-forest-950/30 to-transparent" />
                <div className="relative p-5 text-[#FAF7F2]">
                  <span className="text-[11px] uppercase tracking-wider text-[#D8CCA8] font-semibold block mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-lg font-medium text-white leading-snug line-clamp-2">
                    {item.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. TESTIMONIALS SECTION */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 lg:py-36 bg-[#FAF7F2]">
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
      {/* 6. STAY IN TOUCH / CTA BANNER */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#143022] text-[#FAF7F2] relative overflow-hidden">
        <div className="absolute -right-24 -bottom-24 w-96 h-96 rounded-full bg-[#2B5D45]/30 blur-3xl" />
        <div className="absolute -left-24 -top-24 w-96 h-96 rounded-full bg-[#0E2016]/40 blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-semibold">
            YOUR TRANSFORMATION AWAITS
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-tight text-[#FAF7F2]">
            Let’s take the next step together.
          </h2>

          <p className="text-[#E6E0D4] text-base sm:text-xl max-w-2xl mx-auto leading-relaxed">
            &ldquo;Whether you’re looking for personal guidance, career clarity, or support
            through life’s challenges, I’m here to help.&rdquo;
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-9 py-4 rounded-full bg-[#FAF7F2] text-[#143022] hover:bg-[#F3EDE2] transition-colors text-base font-medium shadow-lg group"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="https://api.whatsapp.com/send?phone=919567654880"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-[#FAF7F2]/40 text-[#FAF7F2] hover:bg-white/10 transition-colors text-base font-medium"
            >
              <span>WhatsApp Message</span>
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. FAQ SECTION */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 lg:py-36 bg-[#FAF7F2]">
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
