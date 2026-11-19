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
    default: "Psychologist in Pattambi | Pradheep Pattambi",
    template: "%s",
  },
  description:
    "Official website of Pradheep Pattambi (Pradheep N.V.) — Psychologist, Therapeutic Healer, NLP Grand Master, and Certified Hypnotist based in Pattambi, Kerala.",
  keywords: [
    "Psychologist in Pattambi",
    "Psychologist in Palakkad",
    "Counselling in Pattambi",
    "Counselling Centre in Pattambi",
    "Psychological Counselling in Kerala",
    "Counsellor in Pattambi",
    "Mental Health Counselling in Palakkad",
    "Pradheep Pattambi",
    "Pradheep N.V.",
    "Individual Counselling in Pattambi",
    "Family Counselling in Pattambi",
    "Marriage Counselling in Palakkad",
    "Couples Counselling in Kerala",
    "Premarital Counselling in Pattambi",
    "Stress Management Counselling",
    "Anxiety Counselling in Kerala",
    "Emotional Wellness Counselling",
    "Relationship Counselling in Palakkad",
    "Career Counselling in Pattambi",
    "Career Guidance in Kerala",
    "NLP Training in Kerala",
    "NLP Trainer in Kerala",
    "NLP Grand Master in Kerala",
    "Hypnosis Training in Kerala",
    "Hypnotherapy in Kerala",
    "Motivational Speaker in Kerala",
    "Psychologist near Pattambi",
    "Psychologist in Shoranur",
    "Psychologist in Ottapalam",
    "Psychologist in Perinthalmanna",
    "Counselling in Palakkad"
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
    title: "Psychologist in Pattambi | Pradheep Pattambi",
    description:
      "Looking for counselling in Pattambi or Palakkad? Explore psychological counselling, NLP training, personal development and professional training services at Pradheep Pattambi.",
    url: "https://pradheeppattambi.com/",
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
    title: "Psychologist in Pattambi | Pradheep Pattambi",
    description:
      "Looking for counselling in Pattambi or Palakkad? Explore psychological counselling, NLP training, personal development and professional training services at Pradheep Pattambi.",
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
        "streetAddress": "The Light Training and Counselling Centre, Sree Nilayam, Umikkunnu",
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
        "streetAddress": "The Light Training and Counselling Centre, Sree Nilayam, Umikkunnu",
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
        { "@type": "City", "name": "Palakkad" },
        { "@type": "City", "name": "Shoranur" },
        { "@type": "City", "name": "Ottapalam" },
        { "@type": "City", "name": "Perinthalmanna" },
        { "@type": "AdministrativeArea", "name": "Palakkad District" },
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
