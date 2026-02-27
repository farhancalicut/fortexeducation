'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch, FaArrowRight, FaGraduationCap, FaTimes, FaClock, FaBook, FaBriefcase, FaClipboardCheck } from 'react-icons/fa';
import { careerCategories } from '@/lib/config';
import { coursesData, partnerInstitutions } from '@/lib/courses';
import { courseDetailsData } from '@/lib/courseDetails';

export default function CareerGuidancePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

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
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 pt-14 pb-16 md:pt-32 md:pb-20">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-200/30 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-200/20 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm mb-6">
                <FaGraduationCap className="text-primary-600" />
                <span className="text-sm font-medium text-gray-700">Career Guidance</span>
              </div> */}
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-2 bg-gradient-to-r from-primary-700 via-primary-600 to-purple-700 bg-clip-text text-transparent leading-tight ">
                What Next After 12th?
              </h1>
              
              <p className="text-sm md:text-xl text-gray-500 leading-tight mb-8">
                Explore diverse academic opportunities across India - from Medical and Engineering to Management, Law, and more
              </p>

              {/* Search Bar */}
              <div className="relative">
                <FaSearch className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 text-base" />
                <input
                  type="text"
                  placeholder="Search courses, programs, or fields..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-14 pr-6 py-2 rounded-lg text-gray-900 bg-white shadow-md shadow-primary-100/50 border-2 border-transparent focus:border-primary-300 focus:ring-4 focus:ring-primary-100 outline-none transition-all"
                />
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary-600">50+</div>
                  <div className="text-xs md:text-sm text-gray-600 mt-1">Courses</div>
                </div>
                <div className="text-center border-x border-gray-200">
                  <div className="text-2xl md:text-3xl font-bold text-purple-600">100+</div>
                  <div className="text-xs md:text-sm text-gray-600 mt-1">Institutions</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-indigo-600">10+</div>
                  <div className="text-xs md:text-sm text-gray-600 mt-1">Categories</div>
                </div>
              </div>
            </motion.div>

            {/* Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="relative">
                {/* Floating Cards */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: '🎓', title: 'Engineering', color: 'from-blue-500 to-cyan-500' },
                    { icon: '⚕️', title: 'Medical', color: 'from-red-500 to-pink-500' },
                    { icon: '💼', title: 'Management', color: 'from-purple-500 to-indigo-500' },
                    { icon: '⚖️', title: 'Law', color: 'from-orange-500 to-amber-500' },
                  ].map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
                    >
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-2xl mb-3`}>
                        {item.icon}
                      </div>
                      <h3 className="font-semibold text-gray-800">{item.title}</h3>
                      <p className="text-sm text-gray-500 mt-1">Explore programs</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white/80 backdrop-blur-sm py-3 sticky top-[56px] md:top-[64px] z-30 border-b border-gray-200/50">
        <div className="container-custom">
          <div className="flex overflow-x-auto space-x-2 scrollbar-hide">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
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
                className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
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
                      <motion.button
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.02 }}
                        onClick={() => setSelectedCourse(course)}
                        className="w-full text-left px-4 py-3 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-lg hover:shadow-md hover:scale-105 transition-all border border-primary-100 cursor-pointer group"
                      >
                        <p className="text-sm md:text-base text-gray-800 font-medium group-hover:text-primary-700">
                          {course}
                        </p>
                        {courseDetailsData[course] && (
                          <span className="text-xs text-primary-600 opacity-0 group-hover:opacity-100 transition-opacity">Click to view details →</span>
                        )}
                      </motion.button>
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

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {partnerInstitutions.map((institution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.02 }}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 hover:border-primary-200 group"
              >
                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg">
                  <Image
                    src={`/${institution.logo}`}
                    alt={institution.name}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                    className="object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Details Modal */}
      <AnimatePresence>
        {selectedCourse && courseDetailsData[selectedCourse] && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCourse(null)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[10001] flex items-center justify-center p-4"
            >
              {/* Modal */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-3xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col"
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-primary-600 to-purple-600 text-white px-6 py-4 flex items-center justify-between flex-shrink-0">
                  <div>
                    <h2 className="text-2xl font-heading font-bold">{selectedCourse}</h2>
                    {courseDetailsData[selectedCourse].fullForm && (
                      <p className="text-sm text-primary-100 mt-1">{courseDetailsData[selectedCourse].fullForm}</p>
                    )}
                  </div>
                  <button
                    onClick={() => setSelectedCourse(null)}
                    className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors"
                  >
                    <FaTimes className="text-xl" />
                  </button>
                </div>

                {/* Content */}
                <div className="overflow-y-auto flex-1 p-6 space-y-6">
                {/* Description */}
                <div>
                  <p className="text-gray-700 leading-relaxed">{courseDetailsData[selectedCourse].description}</p>
                </div>

                {/* Additional Info */}
                {courseDetailsData[selectedCourse].additionalInfo && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    {courseDetailsData[selectedCourse].additionalInfo!.map((info, idx) => (
                      <p key={idx} className="text-sm text-gray-700">{info}</p>
                    ))}
                  </div>
                )}

                {/* Duration */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <FaClock className="text-primary-600" />
                    <h3 className="font-semibold text-gray-900">Duration</h3>
                  </div>
                  <p className="text-gray-700">{courseDetailsData[selectedCourse].duration}</p>
                </div>

                {/* Subjects */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <FaBook className="text-primary-600" />
                    <h3 className="font-semibold text-gray-900">What You Study</h3>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {courseDetailsData[selectedCourse].subjects.map((subject, idx) => (
                      <div key={idx} className="px-3 py-2 bg-gray-100 rounded-lg text-sm text-gray-800">
                        {subject}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Career Options */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <FaBriefcase className="text-primary-600" />
                    <h3 className="font-semibold text-gray-900">After {selectedCourse}, You Can</h3>
                  </div>
                  <ul className="space-y-2">
                    {courseDetailsData[selectedCourse].careerOptions.map((option, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-700">
                        <span className="text-primary-600 mt-1">✓</span>
                        <span>{option}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Admission */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <FaClipboardCheck className="text-primary-600" />
                    <h3 className="font-semibold text-gray-900">Admission in India</h3>
                  </div>
                  {courseDetailsData[selectedCourse].admission.exam && (
                    <p className="text-gray-700 mb-2">
                      <span className="font-medium">Entrance Exam:</span> {courseDetailsData[selectedCourse].admission.exam}
                    </p>
                  )}
                  <p className="text-gray-700 mb-2 font-medium">Available in:</p>
                  <ul className="space-y-1 ml-4">
                    {courseDetailsData[selectedCourse].admission.availableIn.map((inst, idx) => (
                      <li key={idx} className="text-gray-700 list-disc">{inst}</li>
                    ))}
                  </ul>
                </div>
              </div>

                {/* Footer */}
                <div className="border-t border-gray-200 px-6 py-4 bg-gray-50 flex-shrink-0">
                  <Link
                    href="/booking"
                    onClick={() => setSelectedCourse(null)}
                    className="w-full inline-flex items-center justify-center bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                  >
                    Book Career Counseling Session
                    <FaArrowRight className="ml-2" />
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

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
