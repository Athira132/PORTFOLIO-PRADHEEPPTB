"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useBookingModal } from "@/context/BookingModalContext";

interface NavItem {
  name: string;
  href: string;
}

const navLinks: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Gallery", href: "/gallery" },
  { name: "Counselling", href: "/counselling" },
  { name: "Career", href: "/career" },
  { name: "Contact", href: "/contact" }
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openBookingModal } = useBookingModal();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 bg-[#FAF7F2] border-b border-[#EAE2D3] shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 md:h-20 w-full">
          {/* Desktop Navigation: Far-Left Brand Name, Menu Items Following It */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-12">
            <Link
              href="/"
              className="text-base xl:text-lg font-bold tracking-tight text-forest-950 hover:text-forest-800 transition-colors shrink-0"
            >
              Pradheep Pattambi
            </Link>

            <nav className="flex items-center space-x-1 xl:space-x-3">
              {navLinks.map((item) => {
                const isContact = item.name === "Contact";
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                if (isContact) {
                  return (
                    <button
                      key={item.name}
                      type="button"
                      data-booking-trigger="true"
                      onClick={() => openBookingModal()}
                      className={`relative px-4 py-2 text-sm xl:text-base font-medium transition-colors font-sans rounded-full cursor-pointer ${
                        isActive
                          ? "text-forest-950 font-bold"
                          : "text-forest-900/80 hover:text-forest-950 hover:bg-[#F3EDE2]"
                      }`}
                    >
                      {item.name}
                    </button>
                  );
                }

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`relative px-4 py-2 text-sm xl:text-base font-medium transition-colors font-sans rounded-full ${
                      isActive
                        ? "text-forest-950 font-bold"
                        : "text-forest-900/80 hover:text-forest-950 hover:bg-[#F3EDE2]"
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <span className="absolute bottom-1 left-4 right-4 h-[2px] bg-forest-900 rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Right: Far-Right Aligned Get in Touch Button — Desktop */}
          <div className="hidden lg:flex items-center justify-end">
            <button
              type="button"
              data-booking-trigger="true"
              onClick={() => openBookingModal()}
              className="inline-flex items-center justify-center gap-1.5 px-6 py-2.5 rounded-full bg-forest-900 text-[#FAF7F2] hover:bg-forest-800 transition-all shadow-sm hover:shadow text-sm font-medium tracking-wide group cursor-pointer"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Navigation Header: Brand Name on the LEFT, Hamburger on the RIGHT */}
          <div className="flex lg:hidden items-center justify-between w-full">
            {/* Far Left: Brand Name */}
            <Link
              href="/"
              className="text-base sm:text-lg font-bold tracking-tight text-forest-950 hover:text-forest-800 transition-colors py-1 shrink-0"
            >
              Pradheep Pattambi
            </Link>

            {/* Far Right: Compact CTA & Menu Button */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                data-booking-trigger="true"
                onClick={() => openBookingModal()}
                className="inline-flex items-center justify-center px-3.5 py-1.5 rounded-full bg-forest-900 text-[#FAF7F2] text-xs font-medium shadow-sm hover:bg-forest-800 transition-colors shrink-0 cursor-pointer"
              >
                Get in Touch
              </button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 -mr-2 rounded-xl text-forest-950 hover:bg-[#F3EDE2] transition-colors focus:outline-none"
                aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-18 bottom-0 z-40 bg-[#FAF7F2] border-t border-[#EAE2D3] px-6 py-8 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-top duration-200">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-widest text-olive-600 font-semibold mb-3 px-3">
              Navigation
            </p>
            {navLinks.map((item) => {
              const isContact = item.name === "Contact";
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              if (isContact) {
                return (
                  <button
                    key={item.name}
                    type="button"
                    data-booking-trigger="true"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      openBookingModal();
                    }}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors cursor-pointer ${
                      isActive
                        ? "bg-forest-900 text-[#FAF7F2] font-semibold"
                        : "text-forest-950 hover:bg-[#F3EDE2]"
                    }`}
                  >
                    <span>{item.name}</span>
                  </button>
                );
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    isActive
                      ? "bg-forest-900 text-[#FAF7F2] font-semibold"
                      : "text-forest-950 hover:bg-[#F3EDE2]"
                  }`}
                >
                  <span>{item.name}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#FAF7F2]" />}
                </Link>
              );
            })}
          </div>

          <div className="pt-8 border-t border-[#EAE2D3] space-y-4">
            <div className="flex flex-col gap-1 text-sm text-muted-text">
              <span className="text-xs uppercase tracking-wider text-olive-700 font-semibold">
                Direct Contact
              </span>
              <a
                href="tel:+919567654880"
                className="text-forest-950 font-medium hover:underline text-base"
              >
                +91 9567-654-880
              </a>
              <a
                href="mailto:info@pradheeppattambi.com"
                className="text-forest-950 hover:underline"
              >
                info@pradheeppattambi.com
              </a>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <button
                type="button"
                data-booking-trigger="true"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openBookingModal();
                }}
                className="w-full flex items-center justify-center py-3 px-4 rounded-xl bg-forest-900 text-[#FAF7F2] font-medium text-sm text-center shadow cursor-pointer"
              >
                Get in Touch
              </button>
              <a
                href="https://api.whatsapp.com/send?phone=919567654880"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center py-3 px-4 rounded-xl bg-[#25D366] text-white font-medium text-sm text-center shadow"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
