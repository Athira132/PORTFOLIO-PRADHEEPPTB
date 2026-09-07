"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQItem } from "@/data/faq";

interface FAQAccordionProps {
  items: FAQItem[];
  defaultOpenIndex?: number | null;
}

export default function FAQAccordion({
  items,
  defaultOpenIndex = 0
}: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={item.id}
            className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
              isOpen
                ? "bg-white border-[#C8D1C7] shadow-sm"
                : "bg-white/60 border-[#EAE2D3] hover:bg-white/90"
            }`}
          >
            <button
              type="button"
              onClick={() => toggleItem(index)}
              className="w-full text-left px-6 sm:px-8 py-5 sm:py-6 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-900"
              aria-expanded={isOpen}
            >
              <span className="font-serif text-lg sm:text-xl font-medium text-forest-950 pr-4">
                {item.question}
              </span>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                  isOpen
                    ? "bg-forest-900 text-[#FAF7F2] rotate-180"
                    : "bg-[#EBF1EA] text-forest-900 rotate-0"
                }`}
              >
                <ChevronDown className="w-4 h-4 stroke-[2]" />
              </div>
            </button>

            {isOpen && (
              <div className="px-6 sm:px-8 pb-6 text-muted-text text-sm sm:text-base leading-relaxed animate-in fade-in duration-200">
                <div className="pt-2 border-t border-[#F0EAE0]">
                  <p>{item.answer}</p>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
