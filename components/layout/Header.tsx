'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { navigationLinks, siteConfig } from '@/lib/config';
import { FaBars, FaTimes, FaPhone, FaEnvelope } from 'react-icons/fa';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      {/* Top Bar - Hidden on mobile */}
      <div className="hidden md:block bg-primary-600 text-white text-sm">
        <div className="container-custom py-2 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="flex items-center space-x-2 hover:text-primary-200 transition-colors"
            >
              <FaPhone className="text-xs" />
              <span>{siteConfig.contact.phone}</span>
            </a>
            <span className="text-gray-300">|</span>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="flex items-center space-x-2 hover:text-primary-200 transition-colors"
            >
              <FaEnvelope className="text-xs" />
              <span>{siteConfig.contact.email}</span>
            </a>
          </div>
          <div className="text-xs">
            🎓 {siteConfig.tagline}
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/logo.png"
              alt="FORTEX Logo"
              width={50}
              height={50}
              className="object-contain"
            />
            <div className="flex flex-col">
              <span className="font-heading font-bold text-xl text-gray-900">
                FORTEX
              </span>
              <span className="text-xs text-gray-600 -mt-1">For Defining Future</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center space-x-1">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    pathname === link.href
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <Link
              href="/booking"
              className="btn-primary text-sm"
            >
              Book Counseling
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-gray-700 hover:text-primary-600 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[72px] bg-white z-40 mobile-menu-enter">
          <div className="h-full overflow-y-auto">
            <ul className="py-4">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={toggleMenu}
                    className={`block px-6 py-4 font-medium transition-all ${
                      pathname === link.href
                        ? 'text-primary-600 bg-primary-50 border-l-4 border-primary-600'
                        : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Contact Info */}
            <div className="border-t border-gray-200 px-6 py-6 space-y-4">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="flex items-center space-x-3 text-gray-700 hover:text-primary-600"
              >
                <FaPhone className="text-primary-600" />
                <span>{siteConfig.contact.phone}</span>
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center space-x-3 text-gray-700 hover:text-primary-600"
              >
                <FaEnvelope className="text-primary-600" />
                <span>{siteConfig.contact.email}</span>
              </a>
            </div>

            {/* Mobile CTA Button */}
            <div className="px-6 pb-6">
              <Link
                href="/booking"
                onClick={toggleMenu}
                className="block w-full btn-primary text-center"
              >
                Book Counseling Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
