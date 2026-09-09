import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"]
});

import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  metadataBase: new URL("https://pradheeppattambi.com"),
  title: {
    default: "Pradheep Pattambi | Psychologist in Palakkad & Life Coach",
    template: "%s",
  },
  description:
    "Official website of Pradheep N.V. (Pradheep Pattambi) — Renowned psychologist in Palakkad, author, motivational speaker, and life skill coach based in Pattambi, Kerala.",
  keywords: [
    "Pradheep Pattambi",
    "Pradheep N.V.",
    "Psychologist in Palakkad",
    "Psychologist in Pattambi",
    "Psychological Counselling Palakkad",
    "Counselling Kerala",
    "NLP Master Trainer Kerala",
    "Motivational Speaker Kerala",
    "Life Skill Coach Pattambi",
    "Career Counselling Pattambi",
    "Stress Management Kerala",
    "Premarital Counselling Palakkad"
  ],
  authors: [{ name: "Pradheep N.V.", url: "https://pradheeppattambi.com" }],
  creator: "Pradheep N.V.",
  publisher: "Pradheep Pattambi",
  formatDetection: {
    email: true,
    address: true,
    telephone: true
  },
  alternates: {
    canonical: "https://pradheeppattambi.com/"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  openGraph: {
    title: "Pradheep Pattambi | Psychologist in Palakkad & Life Coach",
    description:
      "Elevating lives through psychological counseling, mindful life skill coaching, and inspiring transformation in Kerala.",
    url: "https://pradheeppattambi.com",
    siteName: "Pradheep Pattambi",
    images: [
      {
        url: "/images/pradheep-hero.png",
        width: 1200,
        height: 630,
        alt: "Pradheep Pattambi - Psychologist and Life Skill Coach in Kerala"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Pradheep Pattambi | Psychologist in Palakkad & Life Coach",
    description:
      "Empathetic psychological counselling, NLP mastery, and life skill coaching in Pattambi, Palakkad, Kerala.",
    images: ["/images/pradheep-hero.png"]
  },
  icons: {
    icon: [
      { url: "/images/about-hero.jpg" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" }
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
      { url: "/images/about-hero.jpg" }
    ]
  }
};

const rootStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://pradheeppattambi.com/#website",
      "url": "https://pradheeppattambi.com",
      "name": "Pradheep Pattambi",
      "description":
        "Official website of Pradheep N.V. - Psychologist, Life Skill Coach & Motivational Speaker in Palakkad, Kerala",
      "publisher": { "@id": "https://pradheeppattambi.com/#person" }
    },
    {
      "@type": "Person",
      "@id": "https://pradheeppattambi.com/#person",
      "name": "Pradheep N.V.",
      "alternateName": ["Pradheep Pattambi", "Pradeep Pattambi"],
      "jobTitle": "Psychologist, NLP Master Trainer & Life Skill Coach",
      "url": "https://pradheeppattambi.com",
      "image": "https://pradheeppattambi.com/images/pradheep-hero.png",
      "telephone": "+919567654880",
      "email": "info@pradheeppattambi.com",
      "sameAs": [
        "https://www.facebook.com/PradheepPattambiPsychologist",
        "https://maps.app.goo.gl/PcEBdo9ftxN1VcRs9"
      ],
      "knowsAbout": [
        "Psychological Counselling",
        "Neuro-Linguistic Programming (NLP)",
        "Enneagram Personality Typing",
        "Transactional Analysis (TA)",
        "Stress Management",
        "Career Guidance",
        "Mindfulness & Life Skills"
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Sree Nilayam, Umikkunnu",
        "addressLocality": "Pattambi",
        "addressRegion": "Palakkad District, Kerala",
        "postalCode": "679303",
        "addressCountry": "IN"
      }
    },
    {
      "@type": ["ProfessionalService", "LocalBusiness"],
      "@id": "https://pradheeppattambi.com/#business",
      "name": "Pradheep Pattambi - Psychological Counselling & Life Skill Coaching",
      "url": "https://pradheeppattambi.com",
      "telephone": "+919567654880",
      "email": "info@pradheeppattambi.com",
      "priceRange": "$$",
      "image": "https://pradheeppattambi.com/images/pradheep-hero.png",
      "logo": "https://pradheeppattambi.com/images/about-hero.jpg",
      "hasMap": "https://maps.app.goo.gl/PcEBdo9ftxN1VcRs9",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Sree Nilayam, Umikkunnu",
        "addressLocality": "Pattambi",
        "addressRegion": "Palakkad District, Kerala",
        "postalCode": "679303",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "10.8065",
        "longitude": "76.1950"
      },
      "areaServed": [
        { "@type": "City", "name": "Pattambi" },
        { "@type": "AdministrativeArea", "name": "Palakkad" },
        { "@type": "State", "name": "Kerala" }
      ],
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "09:00",
          "closes": "18:00"
        }
      ]
    }
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#1C2621] font-sans selection:bg-[#143022] selection:text-[#FAF7F2]">
        <JsonLd data={rootStructuredData} />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
