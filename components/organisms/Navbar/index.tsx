"use client";

import Link from "next/link";
import { useState } from "react";

import { Button, Container, MStripe } from "@/components/atoms";
import { NavLink } from "@/components/molecules";
import { BUSINESS } from "@/lib/constants/business";

const navLinks = [
  { label: "Beranda", href: "/#home" },
  { label: "Tentang", href: "/#about" },
  { label: "Layanan", href: "/#services" },
  { label: "Harga", href: "/#pricing" },
  { label: "Portofolio", href: "/#works" },
  { label: "Kontak", href: "/#contact" },
  { label: "Blog", href: "/blog" },
];

const Navbar = () => {
  const whatsappLink = `https://wa.me/${BUSINESS.whatsapp}`;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/85 backdrop-blur">
      <MStripe />
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link className="text-xs font-semibold uppercase tracking-[0.4em] text-white" href="/#home">
          {BUSINESS.name}
        </Link>
        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <NavLink key={link.label} href={link.href} label={link.label} />
          ))}
        </nav>
        <div className="hidden items-center gap-4 md:flex">
          <Button href={whatsappLink} label="Konsultasi Gratis" target="_blank" />
        </div>
        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition-colors hover:bg-white/10 active:bg-white/15 md:hidden"
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-label={isOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          <span className="sr-only">{isOpen ? "Tutup menu" : "Buka menu"}</span>
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            {isOpen ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </Container>
      {isOpen ? (
        <div className="fixed inset-0 z-[60] bg-black/95">
          <div className="flex h-full flex-col">
            <MStripe />
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
              <span className="text-xs font-semibold uppercase tracking-[0.4em] text-white">
                {BUSINESS.name}
              </span>
              <button
                className="text-xs uppercase tracking-[0.3em] text-white/70"
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Tutup menu"
              >
                Tutup
              </button>
            </div>
            <nav id="mobile-navigation" className="flex flex-1 flex-col gap-6 px-6 py-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-lg font-semibold uppercase tracking-[0.2em] text-white"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="px-6 pb-10">
              <Button href={whatsappLink} label="Konsultasi Gratis" target="_blank" />
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
};

export default Navbar;
