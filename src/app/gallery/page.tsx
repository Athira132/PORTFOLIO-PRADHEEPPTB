"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
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
      {/* 1. GALLERY HERO — CIRCULAR PHOTO ON LEFT, ARCHIVE HEADINGS ON RIGHT */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#111814] border-b border-[#233127]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left: Circular Photo Frame */}
            <div className="lg:col-span-5 flex justify-center lg:justify-start">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[360px] lg:h-[360px] xl:w-[390px] xl:h-[390px] rounded-full bg-[#1A241E] border-2 border-[#C5A880] shadow-xl flex items-center justify-center overflow-hidden shrink-0">
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src="/images/photo-2.png"
                    alt="Pradheep Pattambi Keynote Seminars and Workshops"
                    fill
                    priority
                    className="object-cover object-[center_top] scale-110"
                    sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 390px"
                  />
                </div>
              </div>
            </div>

            {/* Right: Editorial Typography & Filter Pills */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1C2B22] border border-[#375240] w-fit">
                <span className="w-2 h-2 rounded-full bg-[#C5A880]" />
                <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#A3B899]">
                  VISUAL ARCHIVE
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl text-[#FAF7F2] font-bold tracking-tight leading-[1.1]">
                Moments of Insight & Transformation
              </h1>

              <p className="text-[#D6CEBE] text-base sm:text-lg max-w-2xl leading-relaxed">
                A window into the transformative journeys, keynote seminars, life skill
                workshops, and community wellness programs led by Pradheep N.V.
              </p>

              {/* Category Filter Pills */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 pt-2">
                {galleryCategories.map((cat) => {
                  const isSelected = selectedCategory === cat;
                  return (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                        isSelected
                          ? "bg-[#C5A880] text-[#111814] shadow-sm font-bold"
                          : "bg-[#1A241E] text-[#D6CEBE] hover:text-[#FAF7F2] border border-[#2F4235] hover:bg-[#233127]"
                      }`}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. GALLERY GRID — PURE PHOTOS, OBJECT-CONTAIN, NO TEXT OR CAPTIONS */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveItem(item)}
                className="group relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-[#FAF7F2] border border-[#EAE2D3] shadow-xs hover:border-forest-900/40 hover:shadow-md transition-all duration-300 cursor-pointer flex items-center justify-center p-3"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={item.imageSrc}
                    alt="Pradheep Pattambi gallery photo"
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
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
          <h2 className="text-3xl sm:text-4xl text-forest-950 font-bold tracking-tight">
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
