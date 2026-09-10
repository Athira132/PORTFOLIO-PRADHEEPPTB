import React from "react";
import Link from "next/link";
import { MessageCircle, ArrowUpRight, Heart, Users, Compass } from "lucide-react";
import { getWhatsAppServiceEnquiryUrl } from "@/config/whatsapp";

interface ServiceItem {
  id: string;
  name: string;
  description: string;
  link: string;
  icon: React.ComponentType<{ className?: string }>;
  tag: string;
}

const mainServices: ServiceItem[] = [
  {
    id: "individual-counseling",
    name: "Individual Counseling",
    description: "One-on-one therapy for stress, anxiety, depression, and emotional well-being.",
    link: "/counselling",
    icon: Heart,
    tag: "Personal Healing"
  },
  {
    id: "family-counseling",
    name: "Family Counseling",
    description: "Support for families facing relationship and communication challenges.",
    link: "/counselling",
    icon: Users,
    tag: "Relationship Harmony"
  },
  {
    id: "career-counseling",
    name: "Career Counseling",
    description: "Career guidance, decision-making, and personal development support.",
    link: "/career",
    icon: Compass,
    tag: "Growth & Purpose"
  }
];

export default function MainServicesSection() {
  return (
    <section id="services" className="py-16 sm:py-20 bg-[#FBF9F4] border-b border-[#EAE2D3]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading with Local SEO focus */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF1EA] border border-[#D8CCA8]/50">
            <span className="w-2 h-2 rounded-full bg-olive-600" />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-olive-800">
              SERVICES
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-forest-950 tracking-tight leading-tight">
            Psychologist &amp; Counselling Services in Pattambi
          </h2>
          <p className="text-base sm:text-lg text-muted-text font-sans leading-relaxed">
            Confidential psychological therapies, family guidance, and career direction tailored to help you overcome life challenges and thrive.
          </p>
        </div>

        {/* 3 Balanced Service Cards: Horizontal on Desktop, Vertical Stack on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {mainServices.map((service) => {
            const Icon = service.icon;
            const enquiryUrl = getWhatsAppServiceEnquiryUrl(service.name);

            return (
              <div
                key={service.id}
                className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white border border-[#EAE2D3] shadow-xs hover:border-[#D8CCA8] hover:shadow-md transition-all duration-300"
              >
                <div>
                  {/* Top Icon & Tag */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#FAF7F2] border border-[#EAE2D3] flex items-center justify-center text-olive-800">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-olive-800 uppercase tracking-wider bg-[#F2ECE1] px-2.5 py-1 rounded-full">
                      {service.tag}
                    </span>
                  </div>

                  {/* Service Name (H3) */}
                  <h3 className="text-xl sm:text-2xl font-bold text-forest-950 tracking-tight mb-3">
                    {service.name}
                  </h3>

                  {/* Short Description */}
                  <p className="text-sm sm:text-base text-muted-text font-sans leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Bottom Actions: Enquiry Button (WhatsApp) + Details Link */}
                <div className="pt-4 border-t border-[#EAE2D3]/60 space-y-3">
                  <a
                    href={enquiryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-sm tracking-wide shadow-xs hover:shadow-sm transition-all duration-200"
                    aria-label={`Enquire about ${service.name} on WhatsApp`}
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Enquiry</span>
                  </a>

                  <div className="text-center">
                    <Link
                      href={service.link}
                      className="inline-flex items-center gap-1 text-xs sm:text-sm font-medium text-forest-900/80 hover:text-forest-950 transition-colors"
                    >
                      <span>Explore service details</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
