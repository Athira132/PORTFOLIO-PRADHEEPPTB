import React from "react";
import { Quote, Star } from "lucide-react";
import { TestimonialItem } from "@/data/testimonials";

interface TestimonialCardProps {
  testimonial: TestimonialItem;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="relative flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-white border border-[#EAE2D3] shadow-sm hover:shadow-md transition-shadow duration-300">
      <div>
        {/* Star Rating & Quote Icon */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-1 text-[#D4AF37]">
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current stroke-none" />
            ))}
          </div>
          <Quote className="w-8 h-8 text-[#EAE2D3] fill-[#FAF7F2]" />
        </div>

        {/* Quote Content */}
        <p className="font-serif text-lg sm:text-xl text-forest-950 leading-relaxed italic mb-8">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </div>

      {/* Author Info */}
      <div className="flex items-center gap-4 pt-6 border-t border-[#F0EAE0]">
        <div className="w-12 h-12 rounded-full bg-[#EBF1EA] text-forest-900 border border-[#D8CCA8] flex items-center justify-center font-serif text-base font-semibold">
          {testimonial.initials}
        </div>
        <div>
          <h4 className="font-sans font-semibold text-base text-forest-950">
            {testimonial.name}
          </h4>
          <p className="text-xs text-olive-700 font-medium">
            {testimonial.role} {testimonial.location ? `• ${testimonial.location}` : ""}
          </p>
        </div>
      </div>
    </div>
  );
}
