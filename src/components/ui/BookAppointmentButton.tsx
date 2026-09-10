"use client";

import React from "react";
import { CalendarCheck, ArrowRight, MessageCircle } from "lucide-react";
import { useBookingModal } from "@/context/BookingModalContext";

interface BookAppointmentButtonProps {
  service?: string;
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "enquiry" | "outline";
  className?: string;
  showIcon?: boolean;
}

export default function BookAppointmentButton({
  service,
  children = "Book an Appointment",
  variant = "primary",
  className = "",
  showIcon = true
}: BookAppointmentButtonProps) {
  const { openBookingModal } = useBookingModal();

  let baseStyles = "inline-flex items-center justify-center gap-2.5 font-semibold transition-all duration-200 cursor-pointer";
  let variantStyles = "";

  switch (variant) {
    case "primary":
      variantStyles = "px-8 py-4 rounded-full bg-forest-900 text-[#FAF7F2] hover:bg-forest-800 text-base shadow-sm hover:shadow-md active:scale-[0.99]";
      break;
    case "secondary":
      variantStyles = "px-8 py-4 rounded-full bg-[#C5A880] text-[#111814] hover:bg-[#D4BC96] text-base font-bold shadow-sm hover:shadow-md active:scale-[0.99]";
      break;
    case "enquiry":
      variantStyles = "w-full px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-sm shadow-xs hover:shadow-sm active:scale-[0.99]";
      break;
    case "outline":
      variantStyles = "px-8 py-4 rounded-full border border-forest-900/40 text-forest-950 hover:bg-forest-900 hover:text-[#FAF7F2] text-base font-medium";
      break;
  }

  return (
    <button
      type="button"
      data-booking-trigger="true"
      data-service={service || ""}
      onClick={() => openBookingModal(service)}
      className={`${baseStyles} ${variantStyles} ${className}`}
    >
      {showIcon && variant === "enquiry" && <MessageCircle className="w-4 h-4" />}
      {showIcon && variant !== "enquiry" && <CalendarCheck className="w-4 h-4" />}
      <span>{children}</span>
    </button>
  );
}
