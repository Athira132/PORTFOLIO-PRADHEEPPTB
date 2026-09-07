import React from "react";
import Link from "next/link";
import {
  HeartHandshake,
  Mic,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  LucideIcon
} from "lucide-react";
import { ServiceItem } from "@/data/services";

const iconMap: Record<string, LucideIcon> = {
  HeartHandshake,
  Mic,
  Sparkles
};

interface ServiceCardProps {
  service: ServiceItem;
  variant?: "light" | "elevated";
}

export default function ServiceCard({
  service,
  variant = "light"
}: ServiceCardProps) {
  const Icon = iconMap[service.iconName] || HeartHandshake;

  return (
    <div
      className={`group relative flex flex-col justify-between p-8 sm:p-10 rounded-3xl transition-all duration-300 ${
        variant === "elevated"
          ? "bg-[#F4EFE6] hover:bg-white shadow-sm hover:shadow-xl border border-[#EAE2D3]"
          : "bg-white/80 hover:bg-white shadow-sm hover:shadow-lg border border-[#EAE2D3]"
      }`}
    >
      <div>
        {/* Card Header & Icon */}
        <div className="flex items-center justify-between mb-8">
          <div className="w-14 h-14 rounded-2xl bg-[#EBF1EA] text-forest-900 flex items-center justify-center group-hover:bg-forest-900 group-hover:text-[#FAF7F2] transition-colors duration-300">
            <Icon className="w-7 h-7 stroke-[1.5]" />
          </div>
          <span className="text-xs uppercase tracking-widest text-olive-700 font-semibold px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#EAE2D3]">
            Personalized
          </span>
        </div>

        {/* Title */}
        <h3 className="font-serif text-2xl sm:text-3xl font-medium text-forest-950 mb-4 group-hover:text-forest-800 transition-colors">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-muted-text text-sm sm:text-base leading-relaxed mb-6">
          {service.shortDescription}
        </p>

        {/* Features Checklist */}
        {service.features && service.features.length > 0 && (
          <ul className="space-y-2.5 mb-8 pt-4 border-t border-[#EAE2D3]/60">
            {service.features.map((feature, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 text-xs sm:text-sm text-forest-900/80"
              >
                <CheckCircle2 className="w-4 h-4 text-olive-600 shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Card Action Link */}
      <div className="pt-4">
        <Link
          href={service.href}
          className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-forest-900 group-hover:text-forest-700 transition-colors"
        >
          <span>Explore Guidance</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
