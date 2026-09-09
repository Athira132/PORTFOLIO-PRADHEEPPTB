"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/90 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-6xl w-full h-[88vh] bg-[#FAF7F2] rounded-3xl overflow-hidden shadow-2xl border border-[#EAE2D3] flex items-center justify-center p-3 sm:p-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-11 h-11 rounded-full bg-forest-950/80 hover:bg-forest-950 text-[#FAF7F2] flex items-center justify-center transition-colors shadow-lg"
          aria-label="Close photo preview"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Pure Photo Display — 100% visible, object-contain, zero text or captions */}
        <div className="relative w-full h-full">
          <Image
            src={item.imageSrc}
            alt={`${item.title} - Pradheep Pattambi Workshop Photograph`}
            fill
            className="object-contain"
            sizes="(max-width: 1024px) 100vw, 1200px"
            priority
          />
        </div>
      </div>
    </div>
  );
}
