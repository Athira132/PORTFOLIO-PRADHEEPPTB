import React from "react";
import type { Metadata } from "next";
import GalleryClient from "@/components/ui/GalleryClient";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Workshops & Seminar Gallery | Pradheep Pattambi Kerala",
  description:
    "Browse photos from transformational workshops, student seminars, leadership keynotes, and counselling sessions conducted by Pradheep N.V. across Kerala.",
  alternates: {
    canonical: "https://pradheeppattambi.com/gallery/"
  },
  openGraph: {
    title: "Workshops & Seminar Gallery | Pradheep Pattambi Kerala",
    description:
      "Visual archive of workshops, seminars, and counseling moments with Pradheep N.V. in Palakkad & Kerala.",
    url: "https://pradheeppattambi.com/gallery/",
    siteName: "Pradheep Pattambi",
    images: [
      {
        url: "/images/photo-2.png",
        width: 1200,
        height: 800,
        alt: "Pradheep Pattambi Keynote Seminars and Transformation Workshops in Kerala"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Workshops & Seminar Gallery | Pradheep Pattambi Kerala",
    description:
      "Visual archive of keynote seminars and life skill workshops conducted by Pradheep N.V. across Kerala.",
    images: ["/images/photo-2.png"]
  }
};

const galleryStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://pradheeppattambi.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Visual Archive & Gallery",
          "item": "https://pradheeppattambi.com/gallery/"
        }
      ]
    },
    {
      "@type": "CollectionPage",
      "@id": "https://pradheeppattambi.com/gallery/#webpage",
      "url": "https://pradheeppattambi.com/gallery/",
      "name": "Workshops & Seminar Gallery | Pradheep Pattambi Kerala",
      "description":
        "Visual archive of transformational workshops, student seminars, and leadership keynotes by Pradheep N.V.",
      "isPartOf": { "@id": "https://pradheeppattambi.com/#website" }
    }
  ]
};

export default function GalleryPage() {
  return (
    <>
      <JsonLd data={galleryStructuredData} />
      <GalleryClient />
    </>
  );
}
