import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Clock,
  ShieldCheck,
  Calendar,
  ExternalLink
} from "lucide-react";
import ContactForm from "@/components/forms/ContactForm";

export const metadata = {
  title: "Contact & Appointments | Pradheep Pattambi (Psychologist)",
  description:
    "Get in touch with Pradheep N.V. for confidential psychological counselling, career guidance in Pattambi, or motivational speaking across Kerala."
};

export default function ContactPage() {
  return (
    <div className="overflow-x-hidden bg-[#FAF7F2]">
      {/* ========================================================================= */}
      {/* 1. CONTACT HERO — CIRCULAR PHOTO ON LEFT, REACH INFO ON RIGHT */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#FAF7F2] border-b border-[#EAE2D3]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left: Circular Photo Frame */}
            <div className="lg:col-span-5 flex justify-center lg:justify-start">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[360px] lg:h-[360px] xl:w-[390px] xl:h-[390px] rounded-full bg-white border border-[#EAE2D3] shadow-sm flex items-center justify-center p-3 sm:p-4 shrink-0">
                <div className="relative w-full h-full rounded-full overflow-hidden flex items-center justify-center">
                  <Image
                    src="/images/photo-1.jpg"
                    alt="Pradheep N.V. - Contact & Appointments"
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
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF1EA] border border-[#D8CCA8]/50 w-fit">
                <span className="w-2 h-2 rounded-full bg-olive-600" />
                <span className="text-xs uppercase tracking-[0.25em] font-semibold text-olive-800">
                  SAFE & CONFIDENTIAL REACH
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl text-forest-950 font-bold tracking-tight leading-[1.1]">
                Let’s connect.
              </h1>

              <p className="text-muted-text text-base sm:text-lg max-w-2xl leading-relaxed">
                &ldquo;Take the first step towards clarity, growth, and a more fulfilling life.
                Reach out directly for appointments, confidential consultations, or speaking inquiries.&rdquo;
              </p>

              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <a
                  href="tel:+919567654880"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-forest-900 text-[#FAF7F2] hover:bg-forest-800 transition-all text-sm font-medium tracking-wide shadow-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call +91 9567-654-880</span>
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=919567654880"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-[#25D366] text-forest-950 bg-[#E8F8EE] hover:bg-[#D3F3DC] transition-colors text-sm font-medium tracking-wide"
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
      {/* 2. CONTACT DETAILS & FORM SECTION — BRIGHT SOFT CREAM */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#F8F5EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Col: Contact Information Cards & Social */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-olive-700 font-semibold block mb-2">
                  DIRECT CONSULTATION
                </span>
                <h2 className="text-3xl font-bold tracking-tight text-forest-950">
                  Reach out personally
                </h2>
                <p className="mt-3 text-muted-text text-sm sm:text-base leading-relaxed">
                  Whether you are seeking personal psychological counseling, career
                  direction, or would like to invite Pradheep Sir for an event, we welcome your call or note.
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="space-y-4">
                {/* Phone */}
                <div className="p-6 rounded-2xl bg-white border border-[#EAE2D3] shadow-sm flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#EBF1EA] text-forest-900 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-olive-600" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-olive-700 font-semibold block">
                      Phone Number
                    </span>
                    <a
                      href="tel:+919567654880"
                      className="text-xl font-bold text-forest-950 hover:text-forest-800 transition-colors block mt-0.5"
                    >
                      +91 9567-654-880
                    </a>
                    <p className="text-xs text-muted-text mt-1">
                      Direct appointments & consultation inquiries
                    </p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="p-6 rounded-2xl bg-[#E8F8EE] border border-[#B7EBCA] shadow-sm flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#14833B] font-semibold block">
                      Instant WhatsApp Chat
                    </span>
                    <a
                      href="https://api.whatsapp.com/send?phone=919567654880"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl font-bold text-forest-950 hover:text-forest-800 transition-colors block mt-0.5"
                    >
                      +91 9567-654-880
                    </a>
                    <p className="text-xs text-muted-text mt-1">
                      Quick messaging & booking confirmation
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="p-6 rounded-2xl bg-white border border-[#EAE2D3] shadow-sm flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#EBF1EA] text-forest-900 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-olive-600" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-olive-700 font-semibold block">
                      Email Address
                    </span>
                    <a
                      href="mailto:info@pradheeppattambi.com"
                      className="text-lg sm:text-xl font-bold text-forest-950 hover:text-forest-800 transition-colors block mt-0.5"
                    >
                      info@pradheeppattambi.com
                    </a>
                    <p className="text-xs text-muted-text mt-1">
                      Official communication & keynote bookings
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="p-6 rounded-2xl bg-white border border-[#EAE2D3] shadow-sm flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#EBF1EA] text-forest-900 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-olive-600" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-olive-700 font-semibold block">
                      Office / Clinic Address
                    </span>
                    <p className="text-lg font-bold text-forest-950 mt-0.5">
                      Sree Nilayam, Umikkunnu Pattambi
                    </p>
                    <p className="text-xs text-muted-text mt-1">
                      Palakkad District, Kerala, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 space-y-3">
                <span className="text-xs uppercase tracking-wider text-olive-700 font-semibold block">
                  Follow on Social Media
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.facebook.com/PradheepPattambiPsychologist"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full bg-white border border-[#EAE2D3] text-forest-950 hover:bg-forest-900 hover:text-[#FAF7F2] transition-colors text-xs font-semibold uppercase tracking-wider flex items-center gap-2 shadow-sm"
                  >
                    <span>Facebook</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="https://www.instagram.com/pradheeppattambi/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full bg-white border border-[#EAE2D3] text-forest-950 hover:bg-forest-900 hover:text-[#FAF7F2] transition-colors text-xs font-semibold uppercase tracking-wider flex items-center gap-2 shadow-sm"
                  >
                    <span>Instagram</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="https://api.whatsapp.com/send?phone=919567654880"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full bg-white border border-[#EAE2D3] text-forest-950 hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-colors text-xs font-semibold uppercase tracking-wider flex items-center gap-2 shadow-sm"
                  >
                    <span>WhatsApp</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Col: Contact Form */}
            <div className="lg:col-span-7">
              <div className="mb-6">
                <span className="text-xs uppercase tracking-[0.2em] text-olive-700 font-semibold block mb-1">
                  APPOINTMENT INQUIRY
                </span>
                <h3 className="text-3xl font-bold tracking-tight text-forest-950">
                  Send a Confidential Message
                </h3>
                <p className="text-xs sm:text-sm text-muted-text mt-2">
                  Fill in the form below with your requirements and contact details. We will respond respectfully and promptly.
                </p>
              </div>

              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
