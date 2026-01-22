'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { navigationLinks, siteConfig } from '@/lib/config';
import { FaBars, FaTimes, FaPhone, FaEnvelope, FaGraduationCap } from 'react-icons/fa';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/98 backdrop-blur-lg shadow-2xl border-b border-gray-100/50' 
          : 'bg-white shadow-lg'
      }`}
    >
      {/* Top Bar - Hidden on mobile */}
      <div className="hidden md:block bg-gradient-to-r from-primary-600 via-primary-500 to-purple-600 text-white text-sm">
        <div className="container-custom py-2.5 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="flex items-center space-x-2 hover:text-white/80 transition-all"
            >
              <FaPhone className="text-xs" />
              <span className="font-medium">{siteConfig.contact.phone}</span>
            </a>
            <span className="text-white/40">|</span>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="flex items-center space-x-2 hover:text-white/80 transition-all"
            >
              <FaEnvelope className="text-xs" />
              <span className="font-medium">{siteConfig.contact.email}</span>
            </a>
          </div>
          <div className="flex items-center space-x-2 text-xs font-medium">
            <FaGraduationCap className="text-base" />
            <span>{siteConfig.tagline}</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`container-custom transition-all duration-500 ${isScrolled ? 'py-2.5 lg:py-3' : 'py-4 lg:py-4'}`}>
        <div className="flex items-center justify-between">
          {/* Modern Logo Design */}
          <Link href="/" className="flex items-center space-x-3 lg:space-x-4 group">
            <div className={`relative transition-all duration-500 ${isScrolled ? 'scale-90 lg:scale-95' : 'scale-100'}`}>
              {/* Gradient glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400/30 via-purple-400/30 to-primary-400/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className={`relative bg-gradient-to-br from-primary-50 to-purple-50 rounded-2xl p-2 transition-all duration-300 ${
                isScrolled ? 'shadow-lg' : 'shadow-md'
              }`}>
                <Image
                  src="/logo.png"
                  alt="FORTEX Logo"
                  width={isScrolled ? 36 : 42}
                  height={isScrolled ? 36 : 42}
                  className="object-contain transition-all duration-500"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <span className={`font-heading font-extrabold tracking-tight transition-all duration-500 bg-gradient-to-r from-primary-700 via-primary-600 to-purple-700 bg-clip-text text-transparent ${
                isScrolled ? 'text-lg lg:text-xl' : 'text-xl lg:text-2xl'
              }`}>
                FORTEX
              </span>
              <span className={`text-xs font-medium text-gray-600 -mt-0.5 transition-all duration-500 ${
                isScrolled ? 'opacity-0 h-0 overflow-hidden lg:opacity-100 lg:h-auto' : 'opacity-100'
              }`}>
                For Defining Future
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center space-x-2">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`px-5 py-2.5 rounded-xl font-medium transition-all duration-300 ${
                    pathname === link.href
                      ? 'text-primary-600 bg-gradient-to-br from-primary-50 to-purple-50'
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
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Book Counseling
            </Link>
          </div>

          {/* Ultra-Modern Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className={`lg:hidden relative w-11 h-11 rounded-2xl flex items-center justify-center transition-all duration-500 group ${
              isMenuOpen 
                ? 'bg-gradient-to-br from-primary-600 via-primary-500 to-purple-600 shadow-xl shadow-primary-600/30 scale-95' 
                : isScrolled
                ? 'bg-gradient-to-br from-gray-100 to-gray-50 hover:from-primary-50 hover:to-purple-50 shadow-md'
                : 'bg-gradient-to-br from-gray-50 to-gray-100 hover:from-primary-50 hover:to-purple-50 shadow-lg'
            }`}
            aria-label="Toggle menu"
          >
            <div className="flex flex-col items-center justify-center gap-1.5 w-6 h-6">
              <span className={`block h-0.5 rounded-full transition-all duration-300 ${
                isMenuOpen ? 'bg-white w-5 rotate-45 translate-y-2' : 'bg-gray-700 group-hover:bg-primary-600 w-6'
              }`}></span>
              <span className={`block h-0.5 rounded-full transition-all duration-300 ${
                isMenuOpen ? 'bg-white w-0 opacity-0' : 'bg-gray-700 group-hover:bg-primary-600 w-5'
              }`}></span>
              <span className={`block h-0.5 rounded-full transition-all duration-300 ${
                isMenuOpen ? 'bg-white w-5 -rotate-45 -translate-y-2' : 'bg-gray-700 group-hover:bg-primary-600 w-4'
              }`}></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu - Slide from Right */}
      <div 
        className={`lg:hidden fixed inset-0 top-[64px] bg-white z-40 transition-transform duration-300 ease-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-full overflow-y-auto">
          <ul className="py-2">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={toggleMenu}
                  className={`block px-6 py-4 font-medium transition-colors border-l-4 ${
                    pathname === link.href
                      ? 'text-primary-600 bg-primary-50 border-primary-600'
                      : 'text-gray-700 hover:bg-gray-50 border-transparent hover:border-gray-300'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Contact Info */}
          <div className="border-t border-gray-200 px-6 py-4 space-y-3">
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="flex items-center space-x-3 text-gray-700 hover:text-primary-600"
            >
              <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                <FaPhone className="text-primary-600" />
              </div>
              <div>
                <div className="text-xs text-gray-500">Call Us</div>
                <div className="font-semibold">{siteConfig.contact.phone}</div>
              </div>
            </a>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="flex items-center space-x-3 text-gray-700 hover:text-primary-600"
            >
              <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                <FaEnvelope className="text-primary-600" />
              </div>
              <div>
                <div className="text-xs text-gray-500">Email Us</div>
                <div className="font-semibold text-sm">{siteConfig.contact.email}</div>
              </div>
            </a>
          </div>

          {/* CTA Button */}
          <div className="px-6 py-4">
            <Link
              href="/booking"
              onClick={toggleMenu}
              className="block w-full py-3 text-center bg-gradient-to-r from-primary-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg"
            >
              Book Counseling Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
