"use client";

import React, { useState } from "react";
import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <aside
      aria-label="Quick contact"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {showTooltip && (
        <div className="hidden sm:block bg-white text-forest-950 px-3.5 py-1.5 rounded-full shadow-lg border border-[#EAE2D3] text-xs font-medium animate-in fade-in slide-in-from-right-2 duration-150">
          Chat with Pradheep Sir
        </div>
      )}
      <a
        href="https://api.whatsapp.com/send?phone=919567654880"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366]"
        aria-label="Chat directly on WhatsApp with Pradheep Pattambi"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </aside>
  );
}
