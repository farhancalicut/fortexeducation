'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaSearch, FaArrowRight, FaGraduationCap } from 'react-icons/fa';
import { careerCategories } from '@/lib/config';
import { coursesData, partnerInstitutions } from '@/lib/courses';

export default function CareerGuidancePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const getFilteredCategories = () => {
    if (selectedCategory !== 'All') {
      return { [selectedCategory]: coursesData[selectedCategory as keyof typeof coursesData] };
    }
    return coursesData;
  };

  const filteredData = getFilteredCategories();

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white py-16 md:py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              What Next After 12th?
            </h1>
            <p className="text-xl text-primary-50 leading-relaxed mb-8">
              Explore diverse academic opportunities across India - from Medical and Engineering to Management, Law, and more
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search courses, programs, or fields..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 focus:ring-2 focus:ring-primary-300 outline-none"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-gray-50 py-6 sticky top-[72px] md:top-[112px] z-30 shadow-sm">
        <div className="container-custom">
          <div className="flex overflow-x-auto space-x-3 pb-2 scrollbar-hide">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`px-4 py-2 rounded-full font-medium whitespace-nowrap transition-all ${
                selectedCategory === 'All'
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              All Categories
            </button>
            {careerCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-medium whitespace-nowrap transition-all ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="space-y-12">
            {Object.entries(filteredData).map(([category, courses], catIndex) => {
              const filteredCourses = searchTerm
                ? courses.filter((course) =>
                    course.toLowerCase().includes(searchTerm.toLowerCase())
                  )
                : courses;

              if (filteredCourses.length === 0) return null;

              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                  className="card"
                >
                  <div className="flex items-center mb-6">
                    <FaGraduationCap className="text-3xl text-primary-600 mr-4" />
                    <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900">
                      {category}
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                    {filteredCourses.map((course, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.02 }}
                        className="px-4 py-3 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-lg hover:shadow-md transition-all border border-primary-100"
                      >
                        <p className="text-sm md:text-base text-gray-800 font-medium">
                          {course}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partner Institutions Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-heading">Expert Assistance for Admissions</h2>
            <p className="section-subheading">
              We have strong partnerships with top institutions across India
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {partnerInstitutions.map((institution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.02 }}
                className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all text-center border border-gray-100"
              >
                <p className="text-sm font-medium text-gray-700">
                  {institution}
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
            Need Personalized Career Guidance?
          </h2>
          <p className="text-xl mb-8 text-primary-50 max-w-2xl mx-auto">
            Book a one-on-one session with our expert career counselors for
            personalized advice.
          </p>
          <Link
            href="/booking"
            className="inline-flex items-center bg-white text-primary-600 hover:bg-primary-50 font-semibold py-4 px-8 rounded-lg transition-all shadow-lg"
          >
            Book Counseling Session
            <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
