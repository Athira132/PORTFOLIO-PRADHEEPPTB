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

export const metadata: Metadata = {
  metadataBase: new URL("https://pradheeppattambi.com"),
  title: "Pradheep Pattambi | Psychologist, Motivational Speaker & Life Coach",
  description:
    "Official website of Pradheep N.V. (Pradheep Pattambi) — Renowned psychologist in Palakkad, author, motivational speaker, and life skill coach based in Pattambi, Kerala.",
  keywords: [
    "Pradheep Pattambi",
    "Pradheep N.V.",
    "Psychologist in Palakkad",
    "Psychologist in Pattambi",
    "Counselling Kerala",
    "Motivational Speaker Kerala",
    "Life Skill Coach Pattambi",
    "Career Counselling Pattambi"
  ],
  authors: [{ name: "Pradheep N.V." }],
  openGraph: {
    title: "Pradheep Pattambi | Psychologist, Motivational Speaker & Life Coach",
    description:
      "Elevating lives through psychological counseling, mindful life skill coaching, and inspiring transformation in Kerala.",
    url: "https://pradheeppattambi.com",
    siteName: "Pradheep Pattambi",
    images: [
      {
        url: "/images/pradheep-hero.png",
        width: 1200,
        height: 630,
        alt: "Pradheep Pattambi - Psychologist in Kerala"
      }
    ],
    locale: "en_US",
    type: "website"
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
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
