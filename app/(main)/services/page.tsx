'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  FaUserTie,
  FaGraduationCap,
  FaBookOpen,
  FaGlobe,
  FaCheckCircle,
  FaArrowRight,
} from 'react-icons/fa';
import { services } from '@/lib/config';
import type { Metadata } from 'next';

const iconMap = {
  target: FaUserTie,
  graduation: FaGraduationCap,
  book: FaBookOpen,
  globe: FaGlobe,
};

export default function ServicesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 pt-14 pb-6 md:pt-32 md:pb-20">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-200/30 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm mb-6">
                <FaCheckCircle className="text-primary-600" />
                <span className="text-sm font-medium text-gray-700">What We Offer</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-2 bg-gradient-to-r from-primary-700 via-primary-600 to-purple-700 bg-clip-text text-transparent leading-tight">
                Our Services
              </h1>
              
              <p className="text-sm md:text-xl text-gray-600 leading-relaxed mb-8">
                Comprehensive educational consulting services to make higher education in India accessible, stress-free, and rewarding
              </p>

              {/* <div className="flex flex-wrap gap-3">
                <div className="px-4 py-2 bg-white rounded-full shadow-sm">
                  <span className="text-sm font-medium text-gray-700">🎯 Career Counseling</span>
                </div>
                <div className="px-4 py-2 bg-white rounded-full shadow-sm">
                  <span className="text-sm font-medium text-gray-700">📚 Admission Support</span>
                </div>
                <div className="px-4 py-2 bg-white rounded-full shadow-sm">
                  <span className="text-sm font-medium text-gray-700">💰 Financial Aid</span>
                </div>
              </div> */}
            </motion.div>

            {/* Illustration Cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="grid grid-cols-2 gap-4">
                {[
                  { Icon: FaUserTie, title: 'Career Counseling', color: 'from-blue-500 to-cyan-500', desc: 'Expert guidance' },
                  { Icon: FaGraduationCap, title: 'Admission Support', color: 'from-purple-500 to-indigo-500', desc: 'End-to-end help' },
                  { Icon: FaBookOpen, title: 'Test Preparation', color: 'from-orange-500 to-amber-500', desc: 'Ace your exams' },
                  { Icon: FaGlobe, title: 'Beyond Academics', color: 'from-pink-500 to-rose-500', desc: 'Holistic support' },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white text-xl mb-3`}>
                      <item.Icon />
                    </div>
                    <h3 className="font-semibold text-gray-800 text-sm mb-1">{item.title}</h3>
                    <p className="text-xs text-gray-500">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon as keyof typeof iconMap];

              return (
                <motion.div
                  key={service.id}
                  id={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="card"
                >
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="text-xl text-primary-600" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-heading font-semibold text-gray-900">
                        {service.title}
                      </h2>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start space-x-2 text-sm"
                      >
                        <FaCheckCircle className="text-primary-600 mt-1 flex-shrink-0 text-xs" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm"
                  >
                    Contact Us
                    <FaArrowRight className="ml-2 text-xs" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-heading">Why Choose India for Higher Education?</h2>
            <p className="section-subheading max-w-3xl mx-auto">
              India is renowned for its rich culture and high-quality education. With top universities, a rapidly growing economy, and affordable study options, it provides an excellent learning environment for students.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: 'Globally Recognized Education',
                description:
                  'Home to prestigious institutions including IITs, IIMs, AIIMS, and NITs. Degrees are internationally recognized ensuring high employability worldwide.',
              },
              {
                title: 'Affordable & Cost-Effective',
                description:
                  'World-class education at a fraction of the cost. Affordable tuition fees, lower living expenses, and scholarship opportunities.',
              },
              {
                title: 'Cultural Diversity',
                description:
                  'Experience vibrant multicultural environment with over 1,600 languages and diverse traditions for global exposure.',
              },
              {
                title: 'Thriving Campus Life',
                description:
                  'Holistic growth through cultural festivals, technical events, student clubs, and leadership programs.',
              },
              {
                title: 'Expanding Career Opportunities',
                description:
                  'Access to abundant job prospects across IT, healthcare, finance, manufacturing, and entrepreneurship sectors.',
              },
              {
                title: 'Government Support',
                description:
                  'Active promotion of education through scholarships, simplified processes, and student exchange programs.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card"
              >
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

      {/* Additional Support Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-heading">Beyond Admissions - Complete Support</h2>
            <p className="section-subheading">
              Our commitment extends throughout your academic journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🏫',
                title: 'College Visits',
                description:
                  'Arrange campus tours so you can experience the environment firsthand before making your final choice.',
              },
              {
                icon: '🏠',
                title: 'Accommodation Support',
                description:
                  'Assistance in securing safe and comfortable housing, whether in university hostels or private accommodations.',
              },
              {
                icon: '✈️',
                title: 'Travel Assistance',
                description:
                  'Transportation guidance and planning to ensure students reach their colleges with ease.',
              },
              {
                icon: '📚',
                title: 'Academic Support',
                description:
                  'Additional study materials, tutoring, and writing assistance to help students excel in their courses.',
              },
              {
                icon: '💬',
                title: 'Counseling & Motivation',
                description:
                  'Regular check-ins and mentorship to keep students motivated and focused throughout their journey.',
              },
              {
                icon: '💼',
                title: 'Career Guidance',
                description:
                  'Helping students transition from academics to professional life through career counseling and job preparation.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card text-center"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
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

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Ready to Start Your Educational Journey?
          </h2>
          <p className="text-xl mb-8 text-primary-50 max-w-2xl mx-auto">
            At Fortex Education Consultancy, our mission is to make higher education in India accessible, stress-free, and rewarding. Book a free consultation to get started.
          </p>
          <Link
            href="/booking"
            className="inline-flex items-center bg-white text-primary-600 hover:bg-primary-50 font-semibold py-4 px-8 rounded-lg transition-all shadow-lg"
          >
            Book Free Consultation
            <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
