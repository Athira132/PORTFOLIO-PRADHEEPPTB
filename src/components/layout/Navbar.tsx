"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, Phone } from "lucide-react";

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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FAF7F2]/90 backdrop-blur-md shadow-sm border-b border-[#EAE2D3]"
          : "bg-[#FAF7F2]/70 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo & Identity */}
          <Link
            href="/"
            className="group flex flex-col focus:outline-none"
            aria-label="Pradheep Pattambi Homepage"
          >
            <span className="font-serif text-2xl sm:text-3xl font-semibold tracking-tight text-forest-950 group-hover:text-forest-800 transition-colors">
              Pradheep Pattambi
            </span>
            <span className="text-[11px] sm:text-xs font-sans tracking-[0.18em] uppercase text-olive-700 font-medium -mt-0.5">
              Psychologist &bull; Coach &bull; Speaker
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors font-sans rounded-full ${
                    isActive
                      ? "text-forest-950 font-semibold"
                      : "text-muted-text hover:text-forest-900 hover:bg-[#F3EDE2]"
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

          {/* Right CTA - Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://api.whatsapp.com/send?phone=919567654880"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-forest-900 hover:text-forest-700 font-medium px-2 py-1"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>+91 9567-654-880</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-1.5 px-6 py-2.5 rounded-full bg-forest-900 text-[#FAF7F2] hover:bg-forest-800 transition-all shadow-sm hover:shadow text-sm font-medium tracking-wide group"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-3">
            <Link
              href="/contact"
              className="sm:inline-flex hidden items-center justify-center px-4 py-2 rounded-full bg-forest-900 text-[#FAF7F2] text-xs font-medium"
            >
              Get in Touch
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-forest-950 hover:bg-[#F3EDE2] transition-colors focus:outline-none"
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

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-20 bottom-0 z-40 bg-[#FAF7F2] border-t border-[#EAE2D3] px-6 py-8 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-top duration-200">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-widest text-olive-600 font-semibold mb-3 px-3">
              Navigation
            </p>
            {navLinks.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-lg font-serif transition-colors ${
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
              <Link
                href="/contact"
                className="w-full flex items-center justify-center py-3 px-4 rounded-xl bg-forest-900 text-[#FAF7F2] font-medium text-sm text-center shadow"
              >
                Get in Touch
              </Link>
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
