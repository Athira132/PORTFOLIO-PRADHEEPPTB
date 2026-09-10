"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

interface BookingModalContextType {
  isOpen: boolean;
  serviceName: string;
  openBookingModal: (service?: string) => void;
  closeBookingModal: () => void;
}

const BookingModalContext = createContext<BookingModalContextType | undefined>(undefined);

// Trigger phrases for existing CTA buttons and links
const TRIGGER_PHRASES = [
  "contact",
  "get in touch",
  "enquiry",
  "enquire",
  "make an enquiry",
  "book an appointment",
  "booking",
  "contact me",
  "contact us",
  "book a consultation",
  "book consultation",
  "book a session",
  "book your career session",
  "fix an appointment",
  "contact pradheep directly",
  "inquire for speaking",
  "book an appointment on whatsapp"
];

export function BookingModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [serviceName, setServiceName] = useState("");

  const openBookingModal = useCallback((service?: string) => {
    setServiceName(service || "");
    setIsOpen(true);
  }, []);

  const closeBookingModal = useCallback(() => {
    setIsOpen(false);
    setServiceName("");
  }, []);

  // Lock background scrolling while modal is open; restore upon closing
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow || "unset";
      };
    }
  }, [isOpen]);

  // Global custom event listener so any button can open modal
  useEffect(() => {
    const handleCustomEvent = (e: Event) => {
      const customEvent = e as CustomEvent<{ service?: string }>;
      openBookingModal(customEvent.detail?.service);
    };

    window.addEventListener("open-booking-modal", handleCustomEvent);
    return () => {
      window.removeEventListener("open-booking-modal", handleCustomEvent);
    };
  }, [openBookingModal]);

  // Global click/tap listener to connect all existing Contact, Enquiry, and Booking CTA buttons
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const triggerEl = target.closest<HTMLElement>("a, button, [role='button']");
      if (!triggerEl) return;

      // Do not intercept if inside the modal itself or explicitly excluded
      if (
        triggerEl.closest("[data-no-booking-modal]") ||
        triggerEl.closest("[role='dialog']") ||
        triggerEl.hasAttribute("data-no-booking-modal")
      ) {
        return;
      }

      // Check for explicit data attribute
      const hasTriggerAttr = triggerEl.hasAttribute("data-booking-trigger");
      const serviceAttr = triggerEl.getAttribute("data-service");

      // Check button / link text
      const rawText = (triggerEl.innerText || triggerEl.textContent || "").trim().toLowerCase();
      const text = rawText.replace(/\s+/g, " ");

      // Exclude tel:, mailto:, map links, and direct external social links
      const href = (triggerEl.getAttribute("href") || "").trim();
      if (
        href.startsWith("tel:") ||
        href.startsWith("mailto:") ||
        href.includes("maps.google") ||
        href.includes("maps.app.goo.gl")
      ) {
        return;
      }

      const matchesPhrase =
        hasTriggerAttr ||
        TRIGGER_PHRASES.includes(text) ||
        TRIGGER_PHRASES.some((phrase) => text.startsWith(phrase));

      if (matchesPhrase) {
        e.preventDefault();
        e.stopPropagation();
        openBookingModal(serviceAttr || undefined);
      }
    };

    document.addEventListener("click", handleGlobalClick, true);
    return () => {
      document.removeEventListener("click", handleGlobalClick, true);
    };
  }, [openBookingModal]);

  return (
    <BookingModalContext.Provider
      value={{
        isOpen,
        serviceName,
        openBookingModal,
        closeBookingModal
      }}
    >
      {children}
    </BookingModalContext.Provider>
  );
}

export function useBookingModal() {
  const context = useContext(BookingModalContext);
  if (!context) {
    throw new Error("useBookingModal must be used within a BookingModalProvider");
  }
  return context;
}
