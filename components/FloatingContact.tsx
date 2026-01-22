'use client';

import { useState, useEffect } from 'react';
import { FaWhatsapp, FaPhone, FaComments } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '@/lib/config';

export default function FloatingContact() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsExpanded(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsApp = () => {
    const phone = siteConfig.contact.phone.replace(/\D/g, '');
    const message = encodeURIComponent('Hello! I would like to know more about your services.');
    window.open(`https://wa.me/91${phone}?text=${message}`, '_blank');
  };

  const handleCall = () => {
    window.location.href = `tel:+91${siteConfig.contact.phone}`;
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
            className="flex flex-col gap-3"
          >
            {/* WhatsApp Button */}
            <motion.button
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 50, opacity: 0 }}
              transition={{ duration: 0.2, delay: 0.05 }}
              whileHover={{ scale: 1.05, x: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleWhatsApp}
              className="group relative bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white pl-4 pr-5 py-3.5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-3"
              aria-label="Contact via WhatsApp"
            >
              <FaWhatsapp className="text-2xl flex-shrink-0" />
              <span className="text-sm font-semibold whitespace-nowrap">WhatsApp</span>
            </motion.button>

            {/* Phone Button */}
            <motion.button
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 50, opacity: 0 }}
              transition={{ duration: 0.2, delay: 0.1 }}
              whileHover={{ scale: 1.05, x: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleCall}
              className="group relative bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white pl-4 pr-5 py-3.5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-3"
              aria-label="Call us"
            >
              <FaPhone className="text-2xl flex-shrink-0" />
              <span className="text-sm font-semibold whitespace-nowrap">Call Now</span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1, rotate: isExpanded ? 45 : 0 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsExpanded(!isExpanded)}
        animate={{ rotate: isExpanded ? 45 : 0 }}
        transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
        className="bg-gradient-to-br from-primary-600 via-primary-500 to-purple-600 hover:from-primary-700 hover:via-primary-600 hover:to-purple-700 text-white w-16 h-16 rounded-full shadow-2xl hover:shadow-primary-500/50 transition-all duration-300 flex items-center justify-center"
        aria-label="Toggle contact options"
      >
        <FaComments className="text-3xl" />
      </motion.button>
    </div>
  );
}
