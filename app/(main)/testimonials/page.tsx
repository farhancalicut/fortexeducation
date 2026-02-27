'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { collection, addDoc, query, where, orderBy, getDocs, Timestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { toast } from 'react-hot-toast';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import type { Testimonial } from '@/types';

type TestimonialFormData = Omit<Testimonial, 'id' | 'approved' | 'createdAt' | 'imageUrl'>;

export default function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const { register, handleSubmit, reset, formState: { errors } } = useForm<TestimonialFormData>();

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const q = query(
        collection(db, 'testimonials'),
        where('approved', '==', true)
      );
      const querySnapshot = await getDocs(q);
      const testimonialsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Testimonial[];

      // Filter to show only 4 and 5 star testimonials
      const filteredTestimonials = testimonialsData.filter(
        (t) => t.rating >= 4
      );

      setTestimonials(filteredTestimonials);
    } catch (error) {
      console.error('Error fetching testimonials:', error);
      setTestimonials([]);
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = async (data: TestimonialFormData) => {
    setIsSubmitting(true);
    try {
      const testimonialData: Omit<Testimonial, 'id'> = {
        ...data,
        approved: false,
        createdAt: Timestamp.now(),
      };

      await addDoc(collection(db, 'testimonials'), testimonialData);
      toast.success('Thank you for your testimonial! It will be reviewed and published soon.');
      reset();
    } catch (error) {
      toast.error('Failed to submit testimonial. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <FaStar
            key={i}
            className={i < rating ? 'text-yellow-400' : 'text-gray-300'}
          />
        ))}
      </div>
    );
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 pt-10 pb-10 md:pt-32 md:pb-20">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-200/30 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm mb-6">
              <FaQuoteLeft className="text-primary-600" />
              <span className="text-sm font-medium text-gray-700">Success Stories</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-2 bg-gradient-to-r from-primary-700 via-primary-600 to-purple-700 bg-clip-text text-transparent leading-tight">
              Student Success Stories
            </h1>
            
            <p className="text-base md:text-xl text-gray-600 leading-relaxed mb-8">
              Hear what our students have to say about their journey with Fortex
            </p>

            <div className="flex items-center justify-center space-x-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-xl" />
                  ))}
                </div>
                <p className="text-sm text-gray-600">500+ Happy Students</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block w-12 h-12 border-4 border-primary-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            <>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {testimonials
                  .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
                  .map((testimonial, index) => (
                    <motion.div
                      key={testimonial.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="card relative overflow-hidden"
                      style={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}
                    >
                      <FaQuoteLeft className="text-3xl sm:text-4xl text-primary-200 absolute top-4 right-4 flex-shrink-0" />
                      <div className="mb-4">{renderStars(testimonial.rating)}</div>
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6 italic" style={{ wordBreak: 'break-word', overflowWrap: 'anywhere' }}>
                        "{testimonial.content}"
                      </p>
                      <div className="min-w-0">
                        <p className="font-semibold text-gray-900 text-sm sm:text-base" style={{ wordBreak: 'break-word' }}>{testimonial.name}</p>
                        <p className="text-xs sm:text-sm text-gray-600" style={{ wordBreak: 'break-word' }}>{testimonial.role}</p>
                      </div>
                    </motion.div>
                  ))}
              </div>

              {/* Pagination */}
              {testimonials.length > itemsPerPage && (
                <div className="flex items-center justify-center gap-2 mt-8 sm:mt-12 flex-wrap">
                  {/* Previous Button */}
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="px-3 py-2 rounded-lg text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                  >
                    Previous
                  </button>

                  {/* Page Numbers */}
                  {Array.from({ length: Math.ceil(testimonials.length / itemsPerPage) }, (_, i) => i + 1).map((page) => {
                    const totalPages = Math.ceil(testimonials.length / itemsPerPage);
                    // Show first page, last page, current page, and pages around current
                    if (
                      page === 1 ||
                      page === totalPages ||
                      (page >= currentPage - 1 && page <= currentPage + 1)
                    ) {
                      return (
                        <button
                          key={page}
                          onClick={() => setCurrentPage(page)}
                          className={`px-3 sm:px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                            currentPage === page
                              ? 'bg-primary-600 text-white'
                              : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                          }`}
                        >
                          {page}
                        </button>
                      );
                    } else if (page === currentPage - 2 || page === currentPage + 2) {
                      return <span key={page} className="px-2 text-gray-500">...</span>;
                    }
                    return null;
                  })}

                  {/* Next Button */}
                  <button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, Math.ceil(testimonials.length / itemsPerPage)))}
                    disabled={currentPage === Math.ceil(testimonials.length / itemsPerPage)}
                    className="px-3 py-2 rounded-lg text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Submit Testimonial Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card"
          >
            <h2 className="text-3xl font-heading font-bold mb-6 text-gray-900 text-center">
              Share Your Success Story
            </h2>
            <p className="text-gray-600 text-center mb-8">
              We'd love to hear about your experience with Fortex Education
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    {...register('name', { required: 'Name is required' })}
                    type="text"
                    className="input-field"
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Role/Position *
                  </label>
                  <input
                    {...register('role', { required: 'Role is required' })}
                    type="text"
                    className="input-field"
                    placeholder="Student - jain University"
                  />
                  {errors.role && (
                    <p className="text-red-500 text-sm mt-1">{errors.role.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Rating *
                </label>
                <select
                  {...register('rating', {
                    required: 'Rating is required',
                    valueAsNumber: true,
                  })}
                  className="input-field"
                >
                  <option value="">Select rating</option>
                  <option value={5}>5 Stars - Excellent</option>
                  <option value={4}>4 Stars - Very Good</option>
                  <option value={3}>3 Stars - Good</option>
                  <option value={2}>2 Stars - Fair</option>
                  <option value={1}>1 Star - Poor</option>
                </select>
                {errors.rating && (
                  <p className="text-red-500 text-sm mt-1">{errors.rating.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Testimonial *
                </label>
                <textarea
                  {...register('content', {
                    required: 'Testimonial is required',
                    minLength: {
                      value: 10,
                      message: 'Please provide at least 10 characters',
                    },
                  })}
                  rows={6}
                  className="input-field"
                  placeholder="Share your experience with Fortex Education..."
                ></textarea>
                {errors.content && (
                  <p className="text-red-500 text-sm mt-1">{errors.content.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Testimonial'}
              </button>

        
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
