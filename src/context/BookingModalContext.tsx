"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

interface BookingModalContextType {
  isOpen: boolean;
  serviceName: string;
  openBookingModal: (service?: string) => void;
  closeBookingModal: () => void;
}

const BookingModalContext = createContext<BookingModalContextType | undefined>(undefined);

const SESSION_STORAGE_KEY = "bookingPopupShown";
const AUTO_POPUP_DELAY_MS = 3000;

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

  // Lock background scrolling while modal is open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow || "unset";
      };
    }
  }, [isOpen]);

  // Auto-popup after 3 seconds once per browsing session
  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      const alreadyShown = sessionStorage.getItem(SESSION_STORAGE_KEY);
      if (alreadyShown) {
        return;
      }

      const timer = setTimeout(() => {
        const checkAgain = sessionStorage.getItem(SESSION_STORAGE_KEY);
        if (!checkAgain) {
          sessionStorage.setItem(SESSION_STORAGE_KEY, "true");
          setIsOpen(true);
        }
      }, AUTO_POPUP_DELAY_MS);

      return () => clearTimeout(timer);
    } catch {
      // Ignore sessionStorage errors in restricted environments
    }
  }, []);

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
