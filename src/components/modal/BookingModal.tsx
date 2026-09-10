"use client";

import React, { useState, useEffect, useRef } from "react";
import { X, CheckCircle2, AlertCircle, Calendar, Clock, User, ShieldCheck } from "lucide-react";
import { useBookingModal } from "@/context/BookingModalContext";
import { WHATSAPP_NUMBER } from "@/config/whatsapp";
import { formatBookingDate } from "@/components/forms/WhatsAppBookingForm";

function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.983.541 1.777.818 2.796.818 3.182 0 5.769-2.587 5.77-5.767.001-3.182-2.587-5.804-5.77-5.804zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.632.062-1.921-.448-1.572-.622-2.613-2.18-2.695-2.288-.081-.108-.646-.861-.646-1.643 0-.782.405-1.171.55-1.332.144-.162.315-.203.42-.203.104 0 .209.002.301.008.098.006.23-.037.36.275.135.324.46 1.12.5 1.201.04.081.068.175.014.283-.054.108-.081.175-.162.27-.081.095-.17.212-.243.284-.081.081-.166.17-.071.333.095.162.421.696.903 1.126.621.554 1.144.726 1.306.807.162.081.257.068.351-.04.095-.108.405-.472.513-.634.108-.162.216-.135.364-.081.148.054.945.445 1.107.526.162.081.27.121.311.189.04.068.04.405-.104.81zM12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.436 5.176L2 22l4.982-1.397A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.056c-1.628 0-3.136-.497-4.398-1.353l-.315-.213-2.955.775.789-2.88-.207-.33A7.99 7.99 0 014.045 12c0-4.387 3.568-7.955 7.955-7.955 4.386 0 7.955 3.568 7.955 7.955 0 4.386-3.569 8.056-7.955 8.056z" />
    </svg>
  );
}

export default function BookingModal() {
  const { isOpen, serviceName, closeBookingModal } = useBookingModal();

  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [errors, setErrors] = useState<{ name?: string; date?: string; time?: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [lastSubmittedUrl, setLastSubmittedUrl] = useState("");

  const modalRef = useRef<HTMLDivElement>(null);

  // Prevent past dates
  const today = new Date().toISOString().split("T")[0];

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeBookingModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeBookingModal]);

  // Reset form state immediately when modal closes
  useEffect(() => {
    if (!isOpen) {
      setName("");
      setDate("");
      setTime("");
      setErrors({});
      setIsSubmitted(false);
      setLastSubmittedUrl("");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: { name?: string; date?: string; time?: string } = {};

    if (!name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!date) {
      newErrors.date = "Please select a date.";
    } else if (date < today) {
      newErrors.date = "Please select today or a future date.";
    }

    if (!time) {
      newErrors.time = "Please select a preferred time.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleBooking = (e?: React.FormEvent | React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }

    if (!validate()) {
      return;
    }

    const formattedDate = formatBookingDate(date);

    // Differentiate between service-specific enquiry and general booking request
    const hasService = Boolean(
      serviceName &&
      serviceName.trim() &&
      serviceName.trim().toLowerCase() !== "general enquiry"
    );

    let message = "";
    if (hasService) {
      message = `Hello, I would like to make an enquiry.

Service: ${serviceName.trim()}

Name: ${name.trim()}
Date: ${formattedDate}
Time: ${time.trim()}

Please provide more information.

Thank you.`;
    } else {
      message = `Hello, I would like to request a booking.

Name: ${name.trim()}
Date: ${formattedDate}
Time: ${time.trim()}

Please confirm the availability of this booking.

Thank you.`;
    }

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    setLastSubmittedUrl(whatsappUrl);
    setIsSubmitted(true);

    if (typeof window !== "undefined") {
      window.open(whatsappUrl, "_blank");
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      closeBookingModal();
    }
  };

  return (
    <div
      data-no-booking-modal="true"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/65 backdrop-blur-[2px] animate-in fade-in duration-200 overflow-y-auto"
      onClick={handleBackdropClick}
      aria-modal="true"
      role="dialog"
      aria-labelledby="booking-modal-title"
    >
      <div
        ref={modalRef}
        data-no-booking-modal="true"
        className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 md:p-9 shadow-2xl border border-[#EAE2D3] max-h-[90vh] overflow-y-auto my-auto animate-in zoom-in-95 duration-200"
      >
        {/* Close Button: Clearly visible '×' button */}
        <button
          type="button"
          onClick={closeBookingModal}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 w-9 h-9 rounded-full bg-[#FAF7F2] hover:bg-[#EAE2D3] border border-[#EAE2D3] flex items-center justify-center text-forest-950 text-2xl font-bold leading-none transition-colors cursor-pointer"
          aria-label="Close booking modal"
        >
          &times;
        </button>

        {/* Modal Header */}
        <div className="pr-10 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF1EA] border border-[#D8CCA8]/50 mb-2">
            <span className="w-2 h-2 rounded-full bg-olive-600" />
            <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-olive-800">
              CONFIDENTIAL APPOINTMENT
            </span>
          </div>
          <h2
            id="booking-modal-title"
            className="text-2xl sm:text-3xl font-bold text-forest-950 tracking-tight"
          >
            Book an Appointment
          </h2>
          <p className="text-xs sm:text-sm text-muted-text mt-1.5 leading-relaxed font-sans">
            Fill in your details and continue to WhatsApp to request a booking.
          </p>

          {serviceName && serviceName.trim().toLowerCase() !== "general enquiry" && (
            <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F3EDE2] border border-[#D8CCA8]/60 text-xs font-semibold text-forest-900">
              <span className="text-muted-text">Service:</span>
              <span className="text-olive-900">{serviceName}</span>
            </div>
          )}
        </div>

        {/* Post-submission feedback */}
        {isSubmitted && (
          <div className="mb-6 p-4 sm:p-5 rounded-2xl bg-[#EBF1EA] border border-[#C8D1C7] space-y-3 animate-in fade-in duration-200">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-olive-700 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <p className="text-sm font-bold text-forest-950 leading-snug">
                  Your booking request is ready in WhatsApp. Please send the message to complete your request.
                </p>
                <p className="text-xs text-muted-text leading-relaxed">
                  If WhatsApp did not open automatically, click the button below to review and send.
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={lastSubmittedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] text-white hover:bg-[#20ba5a] text-xs font-semibold tracking-wide transition-colors shadow-xs"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Open WhatsApp</span>
              </a>
              <button
                type="button"
                onClick={() => setIsSubmitted(false)}
                className="inline-flex items-center px-4 py-2 rounded-full border border-forest-900/30 text-forest-950 hover:bg-[#FAF7F2] text-xs font-semibold tracking-wide transition-colors"
              >
                Edit Details
              </button>
              <button
                type="button"
                onClick={closeBookingModal}
                className="inline-flex items-center px-4 py-2 rounded-full bg-forest-900 text-[#FAF7F2] hover:bg-forest-800 text-xs font-medium tracking-wide transition-colors ml-auto"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Booking Form */}
        <form
          action="#"
          method="dialog"
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handleBooking(e);
          }}
          noValidate
          className="space-y-4 sm:space-y-5"
        >
          {/* 1. Name */}
          <div>
            <label
              htmlFor="modal-booking-name"
              className="block text-xs font-semibold uppercase tracking-wider text-forest-950 mb-1.5"
            >
              Name <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                id="modal-booking-name"
                name="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                }}
                placeholder="Enter your name"
                className={`w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border text-forest-950 placeholder:text-muted-text/50 text-sm focus:outline-none focus:ring-2 focus:bg-white transition-all ${
                  errors.name
                    ? "border-red-400 focus:ring-red-400/20 focus:border-red-500"
                    : "border-[#EAE2D3] focus:ring-forest-900/20 focus:border-forest-900"
                }`}
              />
            </div>
            {errors.name && (
              <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.name}</span>
              </p>
            )}
          </div>

          {/* 2. Date & 3. Time */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Date */}
            <div>
              <label
                htmlFor="modal-booking-date"
                className="block text-xs font-semibold uppercase tracking-wider text-forest-950 mb-1.5"
              >
                Date <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="date"
                  id="modal-booking-date"
                  name="date"
                  min={today}
                  value={date}
                  onChange={(e) => {
                    setDate(e.target.value);
                    if (errors.date) setErrors((prev) => ({ ...prev, date: undefined }));
                  }}
                  className={`w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border text-forest-950 text-sm focus:outline-none focus:ring-2 focus:bg-white transition-all ${
                    errors.date
                      ? "border-red-400 focus:ring-red-400/20 focus:border-red-500"
                      : "border-[#EAE2D3] focus:ring-forest-900/20 focus:border-forest-900"
                  }`}
                />
              </div>
              {errors.date && (
                <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errors.date}</span>
                </p>
              )}
            </div>

            {/* Time */}
            <div>
              <label
                htmlFor="modal-booking-time"
                className="block text-xs font-semibold uppercase tracking-wider text-forest-950 mb-1.5"
              >
                Time <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  id="modal-booking-time"
                  name="time"
                  value={time}
                  onChange={(e) => {
                    setTime(e.target.value);
                    if (errors.time) setErrors((prev) => ({ ...prev, time: undefined }));
                  }}
                  className={`w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border text-forest-950 text-sm focus:outline-none focus:ring-2 focus:bg-white transition-all appearance-none cursor-pointer ${
                    errors.time
                      ? "border-red-400 focus:ring-red-400/20 focus:border-red-500"
                      : "border-[#EAE2D3] focus:ring-forest-900/20 focus:border-forest-900"
                  }`}
                >
                  <option value="">Select a preferred time</option>
                  <option value="09:30 AM">09:30 AM</option>
                  <option value="10:00 AM">10:00 AM</option>
                  <option value="10:30 AM">10:30 AM</option>
                  <option value="11:00 AM">11:00 AM</option>
                  <option value="11:30 AM">11:30 AM</option>
                  <option value="12:00 PM">12:00 PM</option>
                  <option value="02:00 PM">02:00 PM</option>
                  <option value="02:30 PM">02:30 PM</option>
                  <option value="03:00 PM">03:00 PM</option>
                  <option value="03:30 PM">03:30 PM</option>
                  <option value="04:00 PM">04:00 PM</option>
                  <option value="04:30 PM">04:30 PM</option>
                  <option value="05:00 PM">05:00 PM</option>
                  <option value="05:30 PM">05:30 PM</option>
                  <option value="06:00 PM">06:00 PM</option>
                </select>
              </div>
              {errors.time && (
                <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errors.time}</span>
                </p>
              )}
            </div>
          </div>

          {/* 4. WhatsApp Booking Button */}
          <div className="pt-3">
            <button
              type="button"
              onClick={(e) => handleBooking(e)}
              className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#25D366] text-white hover:bg-[#20ba5a] active:scale-[0.99] transition-all font-semibold text-sm sm:text-base shadow-sm hover:shadow group cursor-pointer"
            >
              <WhatsAppIcon className="w-5 h-5 transition-transform group-hover:scale-110" />
              <span>Confirm Booking on WhatsApp</span>
            </button>
            <p className="text-center text-[11px] text-muted-text mt-2.5">
              Opens WhatsApp with your booking request pre-filled. You can review before sending.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
