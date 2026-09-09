import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Clock,
  TrendingUp,
  Award,
  Briefcase,
  Compass,
  CheckCircle2,
  PhoneCall,
  CalendarCheck,
  LucideIcon
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import TestimonialCard from "@/components/ui/TestimonialCard";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { servicesData } from "@/data/services";
import { testimonialsData } from "@/data/testimonials";
import { faqData } from "@/data/faq";
import { trustFeaturesData } from "@/data/trustFeatures";

export const metadata = {
  title: "Counselling in Palakkad | Pradheep N.V. (Psychologist)",
  description:
    "Expert, confidential psychological counselling in Palakkad & Pattambi by Pradheep N.V. Empowering minds, healing relationships, and building lasting resilience."
};

const trustIconMap: Record<string, LucideIcon> = {
  ShieldCheck,
  Clock,
  TrendingUp,
  Award,
  Briefcase,
  Compass
};

export default function CounsellingPage() {
  return (
    <div className="overflow-x-hidden">
      {/* ========================================================================= */}
      {/* 1. COUNSELLING HERO — CIRCULAR PHOTO ON LEFT, CLINICAL INFO ON RIGHT */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#111814] border-b border-[#233127]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left: Circular Photo Frame */}
            <div className="lg:col-span-5 flex justify-center lg:justify-start">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[360px] lg:h-[360px] xl:w-[390px] xl:h-[390px] rounded-full bg-[#1A241E] border-2 border-[#C5A880] shadow-xl flex items-center justify-center overflow-hidden shrink-0">
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src="/images/gallery/gallery-04.jpg"
                    alt="Supportive Psychological Counselling Session with Pradheep N.V."
                    fill
                    priority
                    className="object-cover object-[center_50%] scale-110"
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
                  CLINICAL & PERSONAL COUNSELLING
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl text-[#FAF7F2] font-bold tracking-tight leading-[1.1]">
                Empowering minds, transforming lives
              </h1>

              <p className="text-[#D6CEBE] text-base sm:text-lg max-w-2xl leading-relaxed">
                Safe, confidential psychological support in Palakkad and Pattambi to help you
                overcome anxiety, heal emotional wounds, and rediscover inner calm.
              </p>

              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#C5A880] text-[#111814] hover:bg-[#D4BC96] transition-all text-sm sm:text-base font-bold tracking-wide shadow-sm group"
                >
                  <span>Fix an Appointment</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href="https://wa.link/n8jdj7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-[#D8CCA8]/50 text-[#FAF7F2] bg-white/5 hover:bg-white/10 transition-colors text-sm sm:text-base font-medium tracking-wide"
                >
                  <span>WhatsApp Appointment</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. MAIN COUNSELLING CONTENT: PSYCHOLOGIST IN PALAKKAD — REFINED IMAGE */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Image Col: 100% visible, object-contain */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm sm:max-w-md rounded-3xl overflow-hidden shadow-md border border-[#EAE2D3] bg-white aspect-[4/5] p-3 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <Image
                    src="/images/photo-4.png"
                    alt="Counseling in Palakkad by Pradheep N.V."
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 35vw"
                  />
                </div>
              </div>
            </div>

            {/* Narrative Col */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2">
                <span className="w-6 h-[1.5px] bg-olive-600" />
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-olive-800">
                  PALAKKAD & PATTAMBI CLINICAL CARE
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl text-forest-950 font-bold leading-tight tracking-tight">
                Psychologist In Palakkad
              </h2>

              <div className="space-y-4 text-muted-text text-base sm:text-lg leading-relaxed font-sans">
                <p>
                  Discovering peace of mind and navigating life’s challenges is made more
                  accessible with the support of skilled psychologists and counselors in
                  Palakkad. Our dedicated professionals offer expert guidance and a compassionate
                  ear, providing a confidential space for individuals to explore their thoughts,
                  emotions, and behaviors.
                </p>

                <p>
                  Whether you seek assistance for managing stress, improving relationships, or
                  addressing mental health concerns, our psychologists bring a wealth of knowledge
                  and therapeutic approaches to support your unique journey.
                </p>

                <p>
                  Likewise, our counselors specialize in empowering individuals with practical
                  strategies and emotional support, fostering personal growth and resilience. Take
                  a step towards well-being by engaging with our trusted psychologists and counselors
                  in Palakkad, where your mental health and personal development are prioritized
                  with care and expertise.
                </p>
              </div>

              <div className="pt-4">
                <a
                  href="https://wa.link/n8jdj7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-forest-900 text-[#FAF7F2] hover:bg-forest-800 transition-all text-sm sm:text-base font-medium tracking-wide shadow-sm group"
                >
                  <span>Get in Touch</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. THREE COUNSELLING SERVICE CARDS */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#F8F5EE] border-t border-b border-[#EAE2D3]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="THERAPEUTIC OFFERINGS"
            title="Comprehensive Counseling & Mental Wellness"
            description="Explore our specialized guidance pathways crafted to bring lasting relief and personal growth."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicesData.map((service) => (
              <ServiceCard key={service.id} service={service} variant="elevated" />
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. TRUST SECTION: 6-ITEM GRID — BRIGHT & FRESH PALE SAGE */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#EDF2EB] text-forest-950 border-b border-[#D8CCA8]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="WHY CHOOSE PRADHEEP N.V."
            title="A Foundation Built on Trust & Compassion"
            description="Our therapeutic relationships are grounded in professional ethics, privacy, and dedicated guidance."
            align="center"
            light={false}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {trustFeaturesData.map((feature) => {
              const IconComponent = trustIconMap[feature.iconName] || ShieldCheck;
              return (
                <div
                  key={feature.id}
                  className="p-8 rounded-3xl bg-white border border-[#EAE2D3] shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#EBF1EA] text-forest-900 flex items-center justify-center mb-6">
                    <IconComponent className="w-6 h-6 text-olive-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-forest-950 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-text text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. TESTIMONIALS — BRIGHT WARM CREAM */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="CLIENT FEEDBACK"
            title="Endorsements & Personal Experiences"
            description="Hear from those who experienced genuine guidance with Pradheep Sir."
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
            label="COUNSELLING FAQ"
            title="Questions About Palakkad Counseling"
            description="Everything you need to know about preparing for your first session."
            align="center"
          />

          <FAQAccordion items={faqData} defaultOpenIndex={1} />
        </div>
      </section>
    </div>
  );
}
