'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  FaGraduationCap,
  FaUserTie,
  FaGlobe,
  FaBookOpen,
  FaStar,
  FaCheckCircle,
  FaArrowRight,
  FaUsers,
  FaTrophy,
  FaHeart,
} from 'react-icons/fa';
import { collection, query, where, getDocs, limit } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { services } from '@/lib/config';
import type { Testimonial } from '@/types';

const stats = [
  { icon: FaUsers, value: '1000+', label: 'Students Guided' },
  { icon: FaGraduationCap, value: '100%', label: 'Satisfaction Rate' },
  { icon: FaTrophy, value: '40+', label: 'Partner Institutions' },
  { icon: FaHeart, value: 'Expert', label: 'Counseling Team' },
];

const whyChooseUs = [
  {
    icon: FaCheckCircle,
    title: 'Personalized Guidance',
    description:
      'One-on-one counseling to understand your strengths and career aspirations, providing tailored recommendations.',
  },
  {
    icon: FaUserTie,
    title: 'Expert Network',
    description:
      'Strong partnerships with prestigious institutions across India, ensuring access to the best programs.',
  },
  {
    icon: FaGlobe,
    title: 'End-to-End Support',
    description:
      'From college selection to enrollment, we guide you at every step including accommodation and travel.',
  },
  {
    icon: FaHeart,
    title: 'Student-Centric Approach',
    description:
      'Built on transparency, trust, and commitment to making quality education accessible and stress-free.',
  },
];

export default function HomePage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loadingTestimonials, setLoadingTestimonials] = useState(true);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const userInteractionTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const q = query(
        collection(db, 'testimonials'),
        where('approved', '==', true),
        limit(3)
      );
      const querySnapshot = await getDocs(q);
      const testimonialsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Testimonial[];

      setTestimonials(testimonialsData);
    } catch (error) {
      // Error fetching testimonials
    } finally {
      setLoadingTestimonials(false);
    }
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const [showFullAbout, setShowFullAbout] = useState(false);

  // Auto-scroll testimonials
  useEffect(() => {
    if (!isAutoScrolling || testimonials.length === 0) return;

    autoScrollIntervalRef.current = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 3500); // Change every 3.5 seconds

    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
    };
  }, [isAutoScrolling, testimonials.length]);

  // Scroll to active testimonial
  useEffect(() => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.scrollWidth / testimonials.length;
      scrollContainerRef.current.scrollTo({
        left: cardWidth * activeTestimonial,
        behavior: 'smooth',
      });
    }
  }, [activeTestimonial, testimonials.length]);

  // Handle user interaction - pause auto-scroll
  const handleUserInteraction = () => {
    setIsAutoScrolling(false);

    // Clear existing timeout
    if (userInteractionTimeoutRef.current) {
      clearTimeout(userInteractionTimeoutRef.current);
    }

    // Resume auto-scroll after 5 seconds of no interaction
    userInteractionTimeoutRef.current = setTimeout(() => {
      setIsAutoScrolling(true);
    }, 5000);
  };

  // Handle scroll event to update active dot
  const handleScroll = () => {
    if (scrollContainerRef.current && testimonials.length > 0) {
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const cardWidth = scrollContainerRef.current.scrollWidth / testimonials.length;
      const newActiveIndex = Math.round(scrollLeft / cardWidth);
      setActiveTestimonial(newActiveIndex);
    }
    handleUserInteraction();
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section - Illustration Led */}
      <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden min-h-[90vh]">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-indigo-200/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10 py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-6 sm:space-y-8 order-1"
            >
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-6">
                  <span className="text-primary-900">Your Journey to </span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-purple-600">
                    Success Starts Here
                  </span>
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-secondary-700 leading-relaxed max-w-xl">
                  Expert guidance for top university admissions across India. We'll map your career path and help you achieve your dreams with personalized counseling.
                </p>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 text-center shadow-lg border border-white/50"
                  >
                    <stat.icon className="text-2xl sm:text-3xl text-primary-600 mx-auto mb-2" />
                    <div className="text-xl sm:text-2xl font-bold text-primary-900">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-secondary-600 font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/booking"
                  className="group inline-flex items-center justify-center bg-primary-600 text-white hover:bg-primary-700 font-semibold py-4 px-8 rounded-2xl transition-all shadow-xl hover:shadow-2xl text-base sm:text-lg hover:scale-105 duration-300"
                >
                  Book Free Consultation
                  <FaArrowRight className="ml-3 text-sm group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/career-guidance"
                  className="group inline-flex items-center justify-center bg-white text-primary-700 hover:bg-primary-50 font-semibold py-4 px-8 rounded-2xl transition-all shadow-lg hover:shadow-xl text-base sm:text-lg border-2 border-primary-200 hover:border-primary-300 duration-300"
                >
                  Explore Careers
                  <FaGlobe className="ml-3 text-sm group-hover:rotate-12 transition-transform" />
                </Link>
              </div>
            </motion.div>

            {/* Right Column - Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative order-2"
            >
              {/* Career Roadmap Illustration */}
              <div className="relative max-w-md mx-auto lg:max-w-none">
                {/* Central Path - Animated Dotted Line */}
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 400 500"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.path
                    d="M 200 50 Q 250 150 200 250 Q 150 350 200 450"
                    stroke="url(#gradient)"
                    strokeWidth="3"
                    strokeDasharray="10 10"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatDelay: 1 }}
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#0284c7" />
                      <stop offset="50%" stopColor="#7c3aed" />
                      <stop offset="100%" stopColor="#0284c7" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Milestone Cards */}
                <div className="relative space-y-8 sm:space-y-12 lg:space-y-16 py-8">
                  {/* Step 1 - Assessment */}
                  <motion.div
                    initial={{ scale: 0, rotate: -10 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="relative ml-0 max-w-xs sm:max-w-sm"
                  >
                    <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xl border-4 border-blue-100 hover:scale-105 transition-transform duration-300">
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                          <FaUserTie className="text-2xl sm:text-3xl text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-base sm:text-lg text-gray-900">Career Assessment</h3>
                          <p className="text-xs sm:text-sm text-gray-600">Discover your strengths</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Step 2 - Planning */}
                  <motion.div
                    initial={{ scale: 0, rotate: 10 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="relative ml-auto mr-0 max-w-xs sm:max-w-sm"
                  >
                    <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xl border-4 border-purple-100 hover:scale-105 transition-transform duration-300">
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                          <FaBookOpen className="text-2xl sm:text-3xl text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-base sm:text-lg text-gray-900">College Selection</h3>
                          <p className="text-xs sm:text-sm text-gray-600">Find perfect matches</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Step 3 - Application */}
                  <motion.div
                    initial={{ scale: 0, rotate: -10 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="relative ml-0 max-w-xs sm:max-w-sm"
                  >
                    <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xl border-4 border-indigo-100 hover:scale-105 transition-transform duration-300">
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                          <FaCheckCircle className="text-2xl sm:text-3xl text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-base sm:text-lg text-gray-900">Application Support</h3>
                          <p className="text-xs sm:text-sm text-gray-600">End-to-end guidance</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Step 4 - Success */}
                  <motion.div
                    initial={{ scale: 0, rotate: 10 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    className="relative ml-auto mr-0 max-w-xs sm:max-w-sm"
                  >
                    <div className="bg-gradient-to-br from-primary-500 to-purple-500 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xl border-4 border-yellow-200 hover:scale-105 transition-transform duration-300">
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                          <FaTrophy className="text-2xl sm:text-3xl text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-base sm:text-lg text-white">Admission Success!</h3>
                          <p className="text-xs sm:text-sm text-white/90">Your dream achieved</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute top-10 right-10 w-20 h-20 bg-yellow-200/50 rounded-full blur-xl"
                ></motion.div>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute bottom-20 left-10 w-16 h-16 bg-pink-200/50 rounded-full blur-xl"
                ></motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
          >
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-10 sm:py-14 lg:py-20 bg-white">
        <div className="container-custom">
          <div className="mb-8 lg:mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">Why Choose Fortex?</h2>
            <p className="text-sm sm:text-base text-gray-600">
              Proven expertise and personalized guidance
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-3">
                  <item.icon className="text-2xl text-primary-600" />
                </div>
                <h3 className="font-heading font-semibold text-base mb-2 text-gray-900">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section with Vision & Mission */}
      <section className="py-10 sm:py-14 lg:py-20 bg-gradient-to-br from-gray-50 to-primary-50">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8 lg:mb-12"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-3 sm:mb-4">
                About Fortex Education
              </h2>
              <div className="max-w-4xl space-y-3">
                {/* Mobile: Show preview with read more */}
                <div className="lg:hidden">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    We specialize in personalized consultation and education placement services, helping students find the perfect academic path.
                  </p>
                  {showFullAbout && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="mt-3 space-y-3"
                    >
                      <p className="text-sm text-gray-700 leading-relaxed">
                        With years of experience and a strong network of prestigious institutions, we ensure every student finds their ideal academic path tailored to their interests and career goals.
                      </p>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        Our approach is built on transparency, trust, and student-centric solutions, making us one of India's most reliable education consultancies.
                      </p>
                    </motion.div>
                  )}
                  <button
                    onClick={() => setShowFullAbout(!showFullAbout)}
                    className="text-primary-600 font-medium text-sm mt-2 inline-flex items-center hover:text-primary-700"
                  >
                    {showFullAbout ? 'Show less' : 'Read more'}
                    <FaArrowRight className={`ml-1 text-xs transition-transform ${showFullAbout ? 'rotate-90' : ''}`} />
                  </button>
                </div>
                {/* Desktop: Show full text */}
                <div className="hidden lg:block space-y-4">
                  <p className="text-base text-gray-700 leading-relaxed">
                    With years of experience in the education sector and a strong network of prestigious institutions, we specialize in personalized consultation and education placement services, ensuring that every student finds the perfect academic path tailored to their interests and career goals.
                  </p>
                  <p className="text-base text-gray-700 leading-relaxed">
                    At Fortex, we believe that quality education is the foundation of a successful future. Our approach is built on transparency, trust, and student-centric solutions, making us one of the most reliable education consultancies in India.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Vision & Mission Cards */}
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-xl shadow-lg p-5 sm:p-6 lg:p-8 hover:shadow-2xl transition-shadow"
              >
                <div className="flex items-start space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <FaTrophy className="text-xl sm:text-2xl text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-xl sm:text-2xl md:text-3xl text-gray-900 mt-1 sm:mt-2">
                    Our Vision
                  </h3>
                </div>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                  At Fortex Education Consultancy, we believe that every student in India deserves access to quality higher education. Our goal is to guide and support students in securing admission to top universities and colleges. We help them make informed decisions about their future, turning their dreams into reality.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-xl shadow-lg p-5 sm:p-6 lg:p-8 hover:shadow-2xl transition-shadow"
              >
                <div className="flex items-start space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <FaHeart className="text-xl sm:text-2xl text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-xl sm:text-2xl md:text-3xl text-gray-900 mt-1 sm:mt-2">
                    Our Mission
                  </h3>
                </div>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                  Our mission is to guide students in achieving their academic and career goals with honesty and dedication. We provide personalized counseling, admission support, and financial aid guidance, making the entire process smooth and stress-free. At Fortex, we don't just help students get into colleges—we help them build a strong foundation for a successful future.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-10 sm:py-14 lg:py-20 bg-gray-50">
        <div className="container-custom">
          <div className="mb-8 lg:mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">Our Services</h2>
            <p className="text-sm sm:text-base text-gray-600">
              Complete solutions for your education journey
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-5 sm:p-6 hover:shadow-xl transition-shadow duration-300 group hover:border-primary-500 border-2 border-transparent"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                  {service.icon === 'target' && (
                    <FaUserTie className="text-xl sm:text-2xl text-white" />
                  )}
                  {service.icon === 'graduation' && (
                    <FaGraduationCap className="text-xl sm:text-2xl text-white" />
                  )}
                  {service.icon === 'book' && (
                    <FaBookOpen className="text-xl sm:text-2xl text-white" />
                  )}
                  {service.icon === 'globe' && (
                    <FaGlobe className="text-xl sm:text-2xl text-white" />
                  )}
                </div>
                <h3 className="font-heading font-semibold text-base sm:text-lg lg:text-xl mb-2 sm:mb-3 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed line-clamp-3">
                  {service.description}
                </p>
                <Link
                  href={`/services#${service.id}`}
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm sm:text-base transition-colors"
                >
                  Learn More
                  <FaArrowRight className="ml-2 text-xs sm:text-sm" />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-10 lg:mt-12">
            <Link href="/services" className="inline-flex items-center justify-center bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 sm:px-8 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg text-sm sm:text-base">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-10 sm:py-14 lg:py-20 bg-white">
        <div className="container-custom">
          <div className="mb-8 lg:mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">Student Success Stories</h2>
            <p className="text-sm sm:text-base text-gray-600">
              What our students say about us
            </p>
          </div>

          {loadingTestimonials ? (
            <div className="text-center py-8">
              <div className="inline-block animate-spin rounded-full h-10 w-10 border-4 border-primary-600 border-t-transparent"></div>
              <p className="mt-3 text-sm text-gray-600">Loading...</p>
            </div>
          ) : testimonials.length > 0 ? (
            <>
              {/* Horizontal scroll on mobile */}
              <div className="lg:hidden">
                <div 
                  ref={scrollContainerRef}
                  onScroll={handleScroll}
                  onTouchStart={handleUserInteraction}
                  className="overflow-x-auto scrollbar-hide -mx-5 px-5 snap-x snap-mandatory"
                >
                  <div className="flex gap-4 pb-4">
                    {testimonials.map((testimonial, index) => (
                      <div
                        key={testimonial.id}
                        className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-primary-200 relative overflow-hidden group flex-shrink-0 w-[85vw] max-w-[340px] snap-center"
                      >
                        {/* Decorative element */}
                        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-100/50 to-transparent rounded-bl-full transform translate-x-6 -translate-y-6 group-hover:scale-110 transition-transform"></div>
                        
                        {/* Rating */}
                        <div className="flex items-center gap-1 mb-4 relative z-10">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <FaStar key={i} className="text-yellow-400 text-base" />
                          ))}
                        </div>
                        
                        {/* Content */}
                        <div className="mb-5 relative z-10">
                          <p className="text-gray-700 leading-relaxed text-sm line-clamp-4 italic">
                            "{testimonial.content}"
                          </p>
                        </div>
                        
                        {/* Author info */}
                        <div className="flex items-center gap-3 pt-4 border-t border-gray-100 relative z-10">
                          {testimonial.imageUrl ? (
                            <Image
                              src={testimonial.imageUrl}
                              alt={testimonial.name}
                              width={44}
                              height={44}
                              className="w-11 h-11 rounded-full object-cover ring-2 ring-gray-100"
                            />
                          ) : (
                            <div className={`w-11 h-11 ${index % 2 === 0 ? 'bg-gradient-to-br from-primary-500 to-primary-600' : 'bg-gradient-to-br from-secondary-500 to-secondary-600'} rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md`}>
                              {getInitials(testimonial.name)}
                            </div>
                          )}
                          <div className="flex-1 min-w-0">
                            <p className="font-semibold text-gray-900 truncate">{testimonial.name}</p>
                            <p className="text-xs text-gray-500 truncate">{testimonial.role}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Dots navigation */}
                <div className="flex justify-center gap-2 mt-6">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setActiveTestimonial(index);
                        handleUserInteraction();
                      }}
                      className={`transition-all duration-300 rounded-full ${
                        activeTestimonial === index
                          ? 'w-8 h-2 bg-primary-600'
                          : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Grid layout on desktop */}
              <div className="hidden lg:grid lg:grid-cols-3 gap-6">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-primary-200 relative overflow-hidden group"
                  >
                    {/* Decorative element */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-100/50 to-transparent rounded-bl-full transform translate-x-6 -translate-y-6 group-hover:scale-110 transition-transform"></div>
                    
                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-4 relative z-10">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400 text-base" />
                      ))}
                    </div>
                    
                    {/* Content */}
                    <div className="mb-5 relative z-10">
                      <p className="text-gray-700 leading-relaxed text-sm line-clamp-4 italic">
                        "{testimonial.content}"
                      </p>
                    </div>
                    
                    {/* Author info */}
                    <div className="flex items-center gap-3 pt-4 border-t border-gray-100 relative z-10">
                      {testimonial.imageUrl ? (
                        <Image
                          src={testimonial.imageUrl}
                          alt={testimonial.name}
                          width={44}
                          height={44}
                          className="w-11 h-11 rounded-full object-cover ring-2 ring-gray-100"
                        />
                      ) : (
                        <div className={`w-11 h-11 ${index % 2 === 0 ? 'bg-gradient-to-br from-primary-500 to-primary-600' : 'bg-gradient-to-br from-secondary-500 to-secondary-600'} rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md`}>
                          {getInitials(testimonial.name)}
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-gray-900 truncate">{testimonial.name}</p>
                        <p className="text-xs text-gray-500 truncate">{testimonial.role}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-8">
              <p className="text-sm text-gray-600">No testimonials yet.</p>
            </div>
          )}

          <div className="text-center mt-8 lg:mt-10">
            <Link href="/testimonials" className="inline-flex items-center justify-center bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors shadow-md hover:shadow-lg text-sm">
              View All Stories
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">Frequently Asked Questions</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 px-4">
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-3 sm:space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-5 sm:p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="font-heading font-semibold text-base sm:text-lg text-gray-900 mb-2">
                What services does Fortex offer?
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                We provide personalized counseling, university selection, application assistance, scholarship guidance, and complete admission support for students across India.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl shadow-lg p-5 sm:p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="font-heading font-semibold text-base sm:text-lg text-gray-900 mb-2">
                How do I book a counseling session?
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                You can book a session through our Booking page. Choose between personal one-on-one counseling or group counseling sessions for schools and colleges.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl shadow-lg p-5 sm:p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="font-heading font-semibold text-base sm:text-lg text-gray-900 mb-2">
                Which institutions do you have partnerships with?
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                We partner with 40+ top institutions including Jain University, Manipal University, SRM, Christ University, PES University, and many more across India.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-xl shadow-lg p-5 sm:p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="font-heading font-semibold text-base sm:text-lg text-gray-900 mb-2">
                Do you help with scholarships and financial aid?
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Yes! We provide in-depth guidance on scholarships, grants, and financial aid options to help students secure funding and minimize educational expenses.
              </p>
            </motion.div>
          </div>

          <div className="text-center mt-8 sm:mt-10 lg:mt-12">
            <Link href="/faq" className="inline-flex items-center justify-center bg-secondary-600 hover:bg-secondary-700 text-white font-semibold py-3 px-6 sm:px-8 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg text-sm sm:text-base">
              View All FAQs
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container-custom">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold mb-3 sm:mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-base sm:text-lg text-primary-50 mb-6 max-w-2xl">
            Book a free consultation and take the first step towards your dream career.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/booking"
              className="inline-flex items-center justify-center bg-white text-primary-700 hover:bg-gray-50 font-semibold py-3 px-6 rounded-lg transition-all shadow-lg text-sm"
            >
              Book Consultation
              <FaArrowRight className="ml-2 text-xs" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white/10 font-medium py-3 px-6 rounded-lg transition-all text-sm"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
