'use client';

import Link from 'next/link';
import Image from 'next/image';
import { siteConfig, navigationLinks } from '@/lib/config';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowUp,
} from 'react-icons/fa';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Image
                src="/logo.png"
                alt="FORTEX Logo"
                width={40}
                height={40}
                className="object-contain"
              />
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl text-white">
                  FORTEX
                </span>
                <span className="text-xs text-gray-400 -mt-1">For Defining Future</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Expert guidance and seamless admission support to top universities and colleges across India.
            </p>
            <p className="text-xs text-gray-500">
              www.fortexedu.com
            </p>
            <div className="flex space-x-4">
              <a
                href={siteConfig.links.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook size={18} />
              </a>
              <a
                href={siteConfig.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href={siteConfig.links.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-white text-lg mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navigationLinks.slice(0, 6).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-primary-400 transition-colors inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-white text-lg mb-4">
              Our Services
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/services#personalized-counseling"
                  className="hover:text-primary-400 transition-colors inline-block"
                >
                  Personalized Counseling
                </Link>
              </li>
              <li>
                <Link
                  href="/services#university-selection"
                  className="hover:text-primary-400 transition-colors inline-block"
                >
                  University Selection
                </Link>
              </li>
              <li>
                <Link
                  href="/services#application-assistance"
                  className="hover:text-primary-400 transition-colors inline-block"
                >
                  Application Assistance
                </Link>
              </li>
              <li>
                <Link
                  href="/services#scholarship-guidance"
                  className="hover:text-primary-400 transition-colors inline-block"
                >
                  Scholarship Guidance
                </Link>
              </li>
              <li>
                <Link
                  href="/booking"
                  className="hover:text-primary-400 transition-colors inline-block"
                >
                  Book Counseling
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-white text-lg mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-primary-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium mb-1">Mananthavady Office</p>
                  <span>{siteConfig.contact.address}</span>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="text-primary-500 flex-shrink-0" />
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="hover:text-primary-400 transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-primary-500 flex-shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-primary-400 transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-3">
              <Image
                src="/logo.png"
                alt="FORTEX Logo"
                width={30}
                height={30}
                className="object-contain"
              />
              <p className="text-sm text-gray-400 text-center md:text-left">
                © {currentYear} FORTEX - For Defining Future. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6 text-sm">
              <Link
                href="/privacy-policy"
                className="hover:text-primary-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="hover:text-primary-400 transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-12 h-12 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 z-40"
          aria-label="Scroll to top"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </footer>
  );
}
