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
      {/* 1. COUNSELLING HERO */}
      {/* ========================================================================= */}
      <section className="pt-12 sm:pt-20 pb-16 sm:pb-24 bg-[#FAF7F2] border-b border-[#EAE2D3]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF1EA] border border-[#D8CCA8]/50">
              <span className="w-2 h-2 rounded-full bg-olive-600" />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-olive-800">
                CLINICAL & PERSONAL COUNSELLING
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-forest-950 font-normal tracking-tight leading-[1.12]">
              Empowering minds, transforming lives — expert counselling in Palakkad
            </h1>

            <p className="text-muted-text text-base sm:text-xl max-w-2xl mx-auto leading-relaxed">
              Safe, confidential psychological support to help you overcome anxiety, heal emotional wounds, and rediscover inner calm.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-forest-900 text-[#FAF7F2] hover:bg-forest-800 transition-all text-sm sm:text-base font-medium tracking-wide shadow-md group"
              >
                <span>Fix an Appointment</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="https://wa.link/n8jdj7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-forest-900/30 text-forest-950 hover:bg-[#F3EDE2] transition-colors text-sm sm:text-base font-medium tracking-wide"
              >
                <span>WhatsApp Appointment</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. MAIN COUNSELLING CONTENT: PSYCHOLOGIST IN PALAKKAD */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 lg:py-32 bg-[#F4EFE6]/50 border-b border-[#EAE2D3]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Image Col */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#EAE2D3] bg-white">
                <Image
                  src="/images/pradheep-counselling.webp"
                  alt="Counseling in Palakkad by Pradheep N.V."
                  width={768}
                  height={432}
                  className="w-full h-auto object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              <div className="mt-6 p-6 rounded-2xl bg-white border border-[#EAE2D3] space-y-2">
                <div className="flex items-center gap-2 text-olive-700 font-semibold text-xs uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Confidential Haven</span>
                </div>
                <p className="text-xs text-muted-text leading-relaxed">
                  Every counseling interaction in Palakkad is held under strict ethical privacy and unconditional empathetic regard.
                </p>
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

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-forest-950 font-normal leading-tight">
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
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-forest-900 text-[#FAF7F2] hover:bg-forest-800 transition-all text-sm sm:text-base font-medium tracking-wide shadow-md group"
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
      <section className="py-20 sm:py-28 lg:py-32 bg-[#FAF7F2]">
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
      {/* 4. TRUST SECTION: 6-ITEM GRID */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 lg:py-32 bg-[#143022] text-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="WHY CHOOSE PRADHEEP N.V."
            title="A Foundation Built on Trust & Compassion"
            description="Our therapeutic relationships are grounded in professional ethics, privacy, and dedicated guidance."
            align="center"
            light={true}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {trustFeaturesData.map((feature) => {
              const IconComponent = trustIconMap[feature.iconName] || ShieldCheck;
              return (
                <div
                  key={feature.id}
                  className="p-8 rounded-3xl bg-[#1B3E2D] border border-[#2B5D45] hover:border-[#C5A880] transition-colors"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#28573E] text-[#C5A880] flex items-center justify-center mb-6">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-2xl font-normal text-[#FAF7F2] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-[#C8D4CC] text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. TESTIMONIALS */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 lg:py-32 bg-[#FAF7F2]">
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
      {/* 6. FAQ SECTION */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 lg:py-32 bg-[#F4EFE6]/50 border-t border-[#EAE2D3]/60">
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
