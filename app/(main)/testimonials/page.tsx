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

      setTestimonials(testimonialsData);
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
      console.error('Error submitting testimonial:', error);
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
      <section className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white py-16 md:py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Student Success Stories
            </h1>
            <p className="text-xl text-primary-50 leading-relaxed">
              Hear from students who achieved their dreams with our guidance
            </p>
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card relative"
                >
                  <FaQuoteLeft className="text-4xl text-primary-200 absolute top-4 right-4" />
                  <div className="mb-4">{renderStars(testimonial.rating)}</div>
                  <p className="text-gray-700 leading-relaxed mb-6 italic break-words">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
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
                    placeholder="Student - Harvard University"
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
                      value: 50,
                      message: 'Please provide at least 50 characters',
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

              <p className="text-sm text-gray-500 text-center">
                * Your testimonial will be reviewed before being published
              </p>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
