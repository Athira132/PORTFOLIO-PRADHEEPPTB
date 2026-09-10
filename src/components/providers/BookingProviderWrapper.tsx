"use client";

import React from "react";
import { BookingModalProvider } from "@/context/BookingModalContext";
import BookingModal from "@/components/modal/BookingModal";

export default function BookingProviderWrapper({ children }: { children: React.ReactNode }) {
  return (
    <BookingModalProvider>
      {children}
      <BookingModal />
    </BookingModalProvider>
  );
}
