import React from "react";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center" | "right";
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  label,
  title,
  description,
  align = "center",
  light = false,
  className = ""
}: SectionHeadingProps) {
  const alignmentClass =
    align === "center"
      ? "text-center mx-auto"
      : align === "right"
      ? "text-right ml-auto"
      : "text-left mr-auto";

  return (
    <div className={`max-w-3xl mb-12 md:mb-16 ${alignmentClass} ${className}`}>
      {label && (
        <div className="inline-flex items-center gap-2 mb-3">
          <span
            className={`w-6 h-[1.5px] ${
              light ? "bg-sand-200" : "bg-olive-600"
            }`}
          />
          <span
            className={`text-xs md:text-sm uppercase tracking-[0.2em] font-medium font-sans ${
              light ? "text-sand-100" : "text-olive-700"
            }`}
          >
            {label}
          </span>
          {align === "center" && (
            <span
              className={`w-6 h-[1.5px] ${
                light ? "bg-sand-200" : "bg-olive-600"
              }`}
            />
          )}
        </div>
      )}

      <h2
        className={`font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight leading-[1.18] ${
          light ? "text-[#FAF7F2]" : "text-forest-950"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-5 text-base md:text-lg leading-relaxed font-sans ${
            light ? "text-[#E6E0D4]" : "text-muted-text"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
