"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Individual Psychological Counseling",
    message: ""
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // Frontend placeholder / interactive demonstration
    setTimeout(() => {
      setStatus("success");
    }, 1000);
  };

  return (
    <div className="bg-white p-8 sm:p-10 md:p-12 rounded-3xl border border-[#EAE2D3] shadow-sm">
      {status === "success" ? (
        <div className="text-center py-10 space-y-4 animate-in fade-in duration-300">
          <div className="w-16 h-16 rounded-full bg-[#EBF1EA] text-forest-900 mx-auto flex items-center justify-center">
            <CheckCircle2 className="w-10 h-10 text-olive-600" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-forest-950">
            Thank you, {formData.name || "friend"}!
          </h3>
          <p className="text-muted-text text-sm sm:text-base max-w-md mx-auto leading-relaxed">
            Your message has been received with care. Pradheep Sir or our office will connect with you shortly.
          </p>
          <div className="pt-4">
            <button
              type="button"
              onClick={() => {
                setStatus("idle");
                setFormData({
                  name: "",
                  email: "",
                  phone: "",
                  service: "Individual Psychological Counseling",
                  message: ""
                });
              }}
              className="px-6 py-2.5 rounded-full border border-[#C8D1C7] text-forest-950 text-xs uppercase tracking-wider font-semibold hover:bg-[#FAF7F2] transition-colors"
            >
              Send Another Note
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-semibold uppercase tracking-wider text-forest-950 mb-2"
              >
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Rahul Menon"
                className="w-full px-4 py-3.5 rounded-xl bg-[#FAF7F2] border border-[#EAE2D3] text-forest-950 placeholder-muted-text/50 text-sm focus:outline-none focus:ring-2 focus:ring-forest-900 focus:bg-white transition-all"
              />
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block text-xs font-semibold uppercase tracking-wider text-forest-950 mb-2"
              >
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. +91 98765 43210"
                className="w-full px-4 py-3.5 rounded-xl bg-[#FAF7F2] border border-[#EAE2D3] text-forest-950 placeholder-muted-text/50 text-sm focus:outline-none focus:ring-2 focus:ring-forest-900 focus:bg-white transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-semibold uppercase tracking-wider text-forest-950 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. rahul@example.com"
                className="w-full px-4 py-3.5 rounded-xl bg-[#FAF7F2] border border-[#EAE2D3] text-forest-950 placeholder-muted-text/50 text-sm focus:outline-none focus:ring-2 focus:ring-forest-900 focus:bg-white transition-all"
              />
            </div>

            {/* Service Interest */}
            <div>
              <label
                htmlFor="service"
                className="block text-xs font-semibold uppercase tracking-wider text-forest-950 mb-2"
              >
                Area of Guidance
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3.5 rounded-xl bg-[#FAF7F2] border border-[#EAE2D3] text-forest-950 text-sm focus:outline-none focus:ring-2 focus:ring-forest-900 focus:bg-white transition-all"
              >
                <option value="Individual Psychological Counseling">
                  Individual Psychological Counseling
                </option>
                <option value="Couples & Premarital Counseling">
                  Couples & Premarital Counseling
                </option>
                <option value="Career Guidance in Pattambi">
                  Career Guidance & Counseling
                </option>
                <option value="Life Skill Coaching">
                  Life Skill Coaching & Personal Evolution
                </option>
                <option value="Motivational Speaking & Seminars">
                  Motivational Speaking & Corporate Seminars
                </option>
                <option value="Other Inquiries">Other Inquiries</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-xs font-semibold uppercase tracking-wider text-forest-950 mb-2"
            >
              Your Message or Specific Need <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Please share briefly about the guidance or session you are looking for..."
              className="w-full px-4 py-3.5 rounded-xl bg-[#FAF7F2] border border-[#EAE2D3] text-forest-950 placeholder-muted-text/50 text-sm focus:outline-none focus:ring-2 focus:ring-forest-900 focus:bg-white transition-all resize-none"
            />
          </div>

          {/* Privacy Note & Submit */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-text flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-olive-600 inline-block" />
              <span>Strictly confidential. Your privacy is respected.</span>
            </p>
            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-forest-900 text-[#FAF7F2] hover:bg-forest-800 transition-colors shadow text-sm font-medium tracking-wide disabled:opacity-70 group"
            >
              {status === "submitting" ? (
                <span>Sending note...</span>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
