"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Maximize2, Tag, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Lightbox from "@/components/ui/Lightbox";
import {
  galleryData,
  galleryCategories,
  GalleryItem
} from "@/data/gallery";
import Link from "next/link";

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const filteredItems =
    selectedCategory === "All"
      ? galleryData
      : galleryData.filter((item) => item.category === selectedCategory);

  return (
    <div className="overflow-x-hidden bg-[#FAF8F5]">
      {/* ========================================================================= */}
      {/* 1. GALLERY HERO — FULL-WIDTH BRIGHT BANNER */}
      {/* ========================================================================= */}
      <section className="pt-16 sm:pt-24 pb-12 sm:pb-16 bg-[#FAF7F2] border-b border-[#EAE2D3]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF1EA] border border-[#D8CCA8]/50 mb-4">
            <span className="w-2 h-2 rounded-full bg-olive-600" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-olive-800">
              VISUAL ARCHIVE
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-forest-950 font-normal tracking-tight">
            Moments of Insight & Transformation
          </h1>

          <p className="mt-4 text-muted-text text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            A window into the transformative journeys, keynote seminars, life skill
            workshops, and community wellness programs led by Pradheep N.V.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-10">
            {galleryCategories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                    isSelected
                      ? "bg-forest-900 text-[#FAF7F2] shadow-sm"
                      : "bg-white text-muted-text hover:text-forest-900 border border-[#EAE2D3] hover:bg-[#F3EDE2]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. GALLERY GRID — REFINED, SMALLER PHOTOS, NO CAPTION OVERLAYS */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveItem(item)}
                className="group relative rounded-2xl overflow-hidden bg-white border border-[#EAE2D3] shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                {/* Image Container: smaller and well-proportioned */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#EAE2D3]">
                  <Image
                    src={item.imageSrc}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-forest-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-4 py-1.5 rounded-full bg-white/95 text-forest-950 text-xs font-medium tracking-wide flex items-center gap-1.5 shadow-sm">
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>View</span>
                    </span>
                  </div>
                </div>

                {/* Clean Title & Category only (no long description/captions) */}
                <div className="p-5">
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-olive-700 block mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-lg font-medium text-forest-950 group-hover:text-forest-800 transition-colors line-clamp-1">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-text text-base">
                No photographs in this category yet.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. LIGHTBOX MODAL */}
      {/* ========================================================================= */}
      <Lightbox item={activeItem} onClose={() => setActiveItem(null)} />

      {/* ========================================================================= */}
      {/* 4. BOTTOM BANNER — BRIGHT WARM CREAM */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-[#F4EFE6] border-t border-[#EAE2D3]/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl text-forest-950 font-normal">
            Invite Pradheep N.V. to your next event or workshop
          </h2>
          <p className="text-muted-text text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Organizing a college youth seminar, corporate leadership wellness day, or
            community mental health conference? Connect directly to discuss availability.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-forest-900 text-[#FAF7F2] hover:bg-forest-800 transition-all text-sm font-medium tracking-wide shadow-sm"
            >
              <span>Inquire for Speaking</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
