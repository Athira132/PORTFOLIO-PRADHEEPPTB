"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, Tag } from "lucide-react";
import { GalleryItem } from "@/data/gallery";

interface LightboxProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export default function Lightbox({ item, onClose }: LightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (item) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full max-h-[90vh] bg-[#FAF7F2] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row border border-[#EAE2D3]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors"
          aria-label="Close image preview"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image Container */}
        <div className="relative w-full md:w-3/5 h-72 sm:h-96 md:h-[600px] bg-[#14261B]">
          <Image
            src={item.imageSrc}
            alt={item.title}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 60vw"
            priority
          />
        </div>

        {/* Text Details Container */}
        <div className="w-full md:w-2/5 p-6 sm:p-8 md:p-10 flex flex-col justify-between bg-[#FAF7F2]">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBF1EA] text-forest-900 text-xs font-medium mb-4">
              <Tag className="w-3 h-3 text-olive-600" />
              <span>{item.category}</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl text-forest-950 font-normal leading-tight mb-4">
              {item.title}
            </h3>

            <p className="text-muted-text text-sm sm:text-base leading-relaxed">
              {item.description}
            </p>
          </div>

          <div className="pt-6 border-t border-[#EAE2D3] mt-6 flex items-center justify-between">
            <span className="text-xs uppercase tracking-widest text-olive-700 font-semibold">
              Pradheep Pattambi Archive
            </span>
            <button
              type="button"
              onClick={onClose}
              className="text-xs uppercase tracking-wider text-forest-900 font-medium hover:underline"
            >
              Close Window
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
