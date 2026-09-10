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
import BookingProviderWrapper from "@/components/providers/BookingProviderWrapper";

export const metadata: Metadata = {
  metadataBase: new URL("https://pradheeppattambi.com"),
  title: {
    default: "Psychologist in Pattambi | Counselling & Therapy – Pradheep Pattambi",
    template: "%s",
  },
  description:
    "Official website of Pradheep Pattambi (Pradheep N.V.) — Psychologist, Therapeutic Healer, NLP Grand Master, and Certified Hypnotist based in Pattambi, Kerala.",
  keywords: [
    "Psychologist Pattambi",
    "Psychologist in Pattambi",
    "Counselling Pattambi",
    "Counseling Pattambi",
    "Counsellor Pattambi",
    "Counselor Pattambi",
    "Individual counselling Pattambi",
    "Family counselling Pattambi",
    "Career counselling Pattambi",
    "Stress counselling Pattambi",
    "Anxiety counselling Pattambi",
    "Relationship counselling Pattambi",
    "NLP trainer Pattambi",
    "Hypnotherapy Pattambi",
    "Therapeutic healer Pattambi",
    "Mental wellness Pattambi",
    "Pradheep Pattambi",
    "Pradheep N.V."
  ],
  authors: [{ name: "Pradheep Pattambi", url: "https://pradheeppattambi.com" }],
  creator: "Pradheep Pattambi",
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
    title: "Psychologist in Pattambi | Counselling & Therapy – Pradheep Pattambi",
    description:
      "Empathetic psychological counselling, individual & family therapy, and NLP training in Pattambi, Kerala.",
    url: "https://pradheeppattambi.com",
    siteName: "Pradheep Pattambi",
    images: [
      {
        url: "/images/hero-new.webp",
        width: 1200,
        height: 630,
        alt: "Pradheep Pattambi - Psychologist and Therapeutic Healer in Pattambi, Kerala"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Psychologist in Pattambi | Counselling & Therapy – Pradheep Pattambi",
    description:
      "Psychological counselling, individual & family guidance, and NLP mastery in Pattambi, Kerala.",
    images: ["/images/hero-new.webp"]
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
        "Official website of Pradheep Pattambi - Psychologist, Therapeutic Healer, and NLP Grand Master in Pattambi, Kerala",
      "publisher": { "@id": "https://pradheeppattambi.com/#person" }
    },
    {
      "@type": "Person",
      "@id": "https://pradheeppattambi.com/#person",
      "name": "Pradheep Pattambi",
      "alternateName": ["Pradheep N.V.", "Pradeep Pattambi"],
      "jobTitle": "Psychologist, Therapeutic Healer, NLP Grand Master, Certified Hypnotist, Trainer",
      "url": "https://pradheeppattambi.com",
      "image": "https://pradheeppattambi.com/images/hero-new.webp",
      "telephone": "+919567654880",
      "email": "info@pradheeppattambi.com",
      "sameAs": [
        "https://www.facebook.com/PradheepPattambiPsychologist",
        "https://maps.app.goo.gl/PcEBdo9ftxN1VcRs9"
      ],
      "knowsAbout": [
        "Psychological Counselling",
        "Individual Counseling",
        "Family Counseling",
        "Career Counseling",
        "Neuro-Linguistic Programming (NLP)",
        "Enneagram Personality Typing",
        "Transactional Analysis (TA)",
        "Stress Management",
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
        <BookingProviderWrapper>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <WhatsAppFloat />
        </BookingProviderWrapper>
      </body>
    </html>
  );
}
