"use client";

import Link from "next/link";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { getSiteConfig } from "@/lib/get-site-config";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const searchParams = useSearchParams();
  const demo = searchParams.get("demo");
  const siteConfig = getSiteConfig({ demo: demo || undefined });

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="bg-primary-600 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <a href={`tel:${siteConfig.business.phone}`} className="hover:text-primary-100">
              📞 {siteConfig.business.phone}
            </a>
            <a href={`mailto:${siteConfig.business.email}`} className="hover:text-primary-100 hidden md:inline">
              ✉️ {siteConfig.business.email}
            </a>
          </div>
          <div className="text-sm">
            {siteConfig.business.hours.weekday.split(": ")[1]}
          </div>
        </div>
      </div>

      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary-700">
            {siteConfig.business.name}
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 items-center">
            <li>
              <Link href="/" className="text-gray-700 hover:text-primary-600 font-medium">
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-gray-700 hover:text-primary-600 font-medium">
                Services
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-700 hover:text-primary-600 font-medium">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-700 hover:text-primary-600 font-medium">
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors"
              >
                {siteConfig.cta.primary}
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <ul className="md:hidden mt-4 space-y-4 pb-4">
            <li>
              <Link href="/" className="block text-gray-700 hover:text-primary-600 font-medium">
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className="block text-gray-700 hover:text-primary-600 font-medium">
                Services
              </Link>
            </li>
            <li>
              <Link href="/about" className="block text-gray-700 hover:text-primary-600 font-medium">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="block text-gray-700 hover:text-primary-600 font-medium">
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors text-center"
              >
                {siteConfig.cta.primary}
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}
