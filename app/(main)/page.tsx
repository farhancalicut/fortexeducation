'use client';

import { useState, useEffect } from 'react';
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
      console.error('Error fetching testimonials:', error);
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

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container-custom relative z-10 py-16 md:py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
                TRUSTED GUIDANCE FOR A BRIGHT FUTURE
              </h1>
              <p className="text-lg md:text-xl mb-8 text-primary-50 leading-relaxed">
                At Fortex Education Consultancy, we are committed to turning students' academic aspirations into reality by providing expert guidance and seamless admission support to top universities and colleges across India.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/booking"
                  className="inline-flex items-center justify-center bg-white text-primary-600 hover:bg-primary-50 font-semibold py-4 px-8 rounded-lg transition-all shadow-lg hover:shadow-xl"
                >
                  Book Free Consultation
                  <FaArrowRight className="ml-2" />
                </Link>
                <Link
                  href="/career-guidance"
                  className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-all"
                >
                  Explore Careers
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="mt-8 flex flex-wrap items-center gap-6 text-sm">
                <div className="flex items-center space-x-2">
                  <FaStar className="text-yellow-400" />
                  <span>4.9/5 Rating</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaCheckCircle className="text-green-400" />
                  <span>5000+ Students</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaTrophy className="text-yellow-400" />
                  <span>Award Winning</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-2xl opacity-30 blur-xl"></div>
                <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  <div className="grid grid-cols-2 gap-6">
                    {stats.map((stat, index) => (
                      <div
                        key={index}
                        className="text-center p-4 bg-white/10 rounded-xl backdrop-blur"
                      >
                        <stat.icon className="text-4xl mx-auto mb-2 text-yellow-400" />
                        <div className="text-3xl font-bold mb-1">
                          {stat.value}
                        </div>
                        <div className="text-sm text-primary-100">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
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

      {/* Stats Section - Mobile */}
      <section className="lg:hidden bg-gray-50 py-12">
        <div className="container-custom">
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-md">
                <stat.icon className="text-3xl mx-auto mb-2 text-primary-600" />
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-heading">Why Choose Fortex?</h2>
            <p className="section-subheading">
              We are committed to your success with proven expertise and
              personalized guidance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card text-center"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="text-3xl text-primary-600" />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-3 text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section with Vision & Mission */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-primary-50">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6">
                About Fortex Education Consultancy
              </h2>
              <div className="max-w-4xl mx-auto space-y-6">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  With years of experience in the education sector and a strong network of prestigious institutions, we specialize in personalized consultation and education placement services, ensuring that every student finds the perfect academic path tailored to their interests and career goals.
                </p>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  At Fortex, we believe that quality education is the foundation of a successful future. Our approach is built on transparency, trust, and student-centric solutions, making us one of the most reliable education consultancies in India.
                </p>
              </div>
            </motion.div>

            {/* Vision & Mission Cards */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="card bg-white shadow-xl hover:shadow-2xl transition-shadow"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <FaTrophy className="text-2xl text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl md:text-3xl text-gray-900 mt-2">
                    Our Vision
                  </h3>
                </div>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  At Fortex Education Consultancy, we believe that every student in India deserves access to quality higher education. Our goal is to guide and support students in securing admission to top universities and colleges. We help them make informed decisions about their future, turning their dreams into reality.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="card bg-white shadow-xl hover:shadow-2xl transition-shadow"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <FaHeart className="text-2xl text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl md:text-3xl text-gray-900 mt-2">
                    Our Mission
                  </h3>
                </div>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  Our mission is to guide students in achieving their academic and career goals with honesty and dedication. We provide personalized counseling, admission support, and financial aid guidance, making the entire process smooth and stress-free. At Fortex, we don't just help students get into colleges—we help them build a strong foundation for a successful future.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-heading">Our Services</h2>
            <p className="section-subheading">
              Comprehensive solutions for all your educational needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card group hover:border-primary-500 border-2 border-transparent"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {service.icon === 'target' && (
                    <FaUserTie className="text-2xl text-white" />
                  )}
                  {service.icon === 'graduation' && (
                    <FaGraduationCap className="text-2xl text-white" />
                  )}
                  {service.icon === 'book' && (
                    <FaBookOpen className="text-2xl text-white" />
                  )}
                  {service.icon === 'globe' && (
                    <FaGlobe className="text-2xl text-white" />
                  )}
                </div>
                <h3 className="font-heading font-semibold text-xl mb-3 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <Link
                  href={`/services#${service.id}`}
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                >
                  Learn More
                  <FaArrowRight className="ml-2 text-sm" />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-heading">What Our Students Say</h2>
            <p className="section-subheading">
              Real experiences from students we've helped achieve their dreams
            </p>
          </div>

          {loadingTestimonials ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-primary-600 border-t-transparent"></div>
              <p className="mt-4 text-gray-600">Loading testimonials...</p>
            </div>
          ) : testimonials.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`card bg-gradient-to-br ${index % 2 === 0 ? 'from-primary-50' : 'from-secondary-50'
                    } to-white`}
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 text-lg" />
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6 italic break-words">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center space-x-3">
                    {testimonial.imageUrl ? (
                      <Image
                        src={testimonial.imageUrl}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    ) : (
                      <div className={`w-12 h-12 ${index % 2 === 0 ? 'bg-primary-600' : 'bg-secondary-600'
                        } rounded-full flex items-center justify-center text-white font-bold text-lg`}>
                        {getInitials(testimonial.name)}
                      </div>
                    )}
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600">No testimonials available yet.</p>
            </div>
          )}

          <div className="text-center mt-12">
            <Link href="/testimonials" className="btn-primary">
              View All Testimonials
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-heading">Frequently Asked Questions</h2>
            <p className="section-subheading">
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card bg-white"
            >
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-2">
                What services does Fortex offer?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We provide personalized counseling, university selection, application assistance, scholarship guidance, and complete admission support for students across India.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="card bg-white"
            >
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-2">
                How do I book a counseling session?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                You can book a session through our Booking page. Choose between personal one-on-one counseling or group counseling sessions for schools and colleges.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="card bg-white"
            >
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-2">
                Which institutions do you have partnerships with?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We partner with 40+ top institutions including Jain University, Manipal University, SRM, Christ University, PES University, and many more across India.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="card bg-white"
            >
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-2">
                Do you help with scholarships and financial aid?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Yes! We provide in-depth guidance on scholarships, grants, and financial aid options to help students secure funding and minimize educational expenses.
              </p>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <Link href="/faq" className="btn-secondary">
              View All FAQs
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 text-primary-50 max-w-2xl mx-auto">
            Book a free consultation with our expert counselors and take the
            first step towards your dream career.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/booking"
              className="inline-flex items-center justify-center bg-white text-primary-600 hover:bg-primary-50 font-semibold py-4 px-8 rounded-lg transition-all shadow-lg"
            >
              Book Free Consultation
              <FaArrowRight className="ml-2" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
