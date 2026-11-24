"use client";

import React, { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, Loader2 } from "lucide-react";

export default function TrainingAndTherapeuticCounsellingRedirect() {
  const router = useRouter();

  useEffect(() => {
    // Immediate client-side redirection
    window.location.replace("/our-services/");
  }, [router]);

  return (
    <>
      <head>
        <title>Redirecting to Our Services | Pradheep Pattambi</title>
        <meta httpEquiv="refresh" content="0;url=/our-services/" />
        <link rel="canonical" href="https://pradheeppattambi.com/our-services/" />
        <meta name="robots" content="noindex, follow" />
      </head>
      <div className="min-h-[70vh] flex items-center justify-center bg-[#FAF7F2] px-4 py-16">
        <div className="max-w-md w-full bg-white rounded-3xl p-8 border border-[#EAE2D3] shadow-md text-center space-y-5">
          <div className="w-12 h-12 rounded-full bg-[#EBF1EA] text-olive-800 flex items-center justify-center mx-auto">
            <Loader2 className="w-6 h-6 animate-spin" />
          </div>
          <h1 className="text-2xl font-bold text-forest-950 tracking-tight">
            Redirecting to Our Services
          </h1>
          <p className="text-sm text-muted-text font-sans">
            Our Training &amp; Therapeutic Counselling page has moved to Our Services. You are being redirected automatically...
          </p>
          <div className="pt-2">
            <Link
              href="/our-services/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-forest-900 text-[#FAF7F2] hover:bg-forest-800 transition-all text-sm font-semibold tracking-wide"
            >
              <span>Go to Our Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
