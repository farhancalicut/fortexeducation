'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { toast } from 'react-hot-toast';
import {
  FaUsers,
  FaCalendarAlt,
  FaClock,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaCheckCircle,
} from 'react-icons/fa';
import type { Booking } from '@/types';

type BookingFormData = Omit<Booking, 'id' | 'status' | 'createdAt'>;

export default function BookingPage() {
  const [bookingType, setBookingType] = useState<'personal' | 'group'>('personal');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BookingFormData>();

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    try {
      const bookingData: Omit<Booking, 'id'> = {
        ...data,
        type: bookingType,
        status: 'pending',
        createdAt: Timestamp.now(),
      };

      await addDoc(collection(db, 'bookings'), bookingData);

      toast.success(
        'Booking request submitted successfully! We will contact you soon.'
      );
      reset();
    } catch (error) {
      toast.error('Failed to submit booking. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
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
              Book Your Counseling Session
            </h1>
            <p className="text-xl text-primary-50 leading-relaxed">
              Choose between personal one-on-one counseling or group counseling sessions for schools and colleges
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom max-w-5xl">
          {/* Booking Type Selection */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={() => setBookingType('personal')}
              className={`p-8 rounded-xl border-2 transition-all ${
                bookingType === 'personal'
                  ? 'border-primary-600 bg-primary-50 shadow-lg'
                  : 'border-gray-200 hover:border-primary-300'
              }`}
            >
              <FaUser
                className={`text-5xl mb-4 mx-auto ${
                  bookingType === 'personal'
                    ? 'text-primary-600'
                    : 'text-gray-400'
                }`}
              />
              <h3 className="font-heading font-semibold text-xl mb-2">
                Personal Counseling
              </h3>
              <p className="text-gray-600 mb-4">
                One-on-one personalized guidance session at our office
              </p>
              {bookingType === 'personal' && (
                <div className="flex items-center justify-center text-primary-600 font-medium">
                  <FaCheckCircle className="mr-2" />
                  Selected
                </div>
              )}
            </motion.button>

            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={() => setBookingType('group')}
              className={`p-8 rounded-xl border-2 transition-all ${
                bookingType === 'group'
                  ? 'border-primary-600 bg-primary-50 shadow-lg'
                  : 'border-gray-200 hover:border-primary-300'
              }`}
            >
              <FaUsers
                className={`text-5xl mb-4 mx-auto ${
                  bookingType === 'group'
                    ? 'text-primary-600'
                    : 'text-gray-400'
                }`}
              />
              <h3 className="font-heading font-semibold text-xl mb-2">
                Group/Public Counseling
              </h3>
              <p className="text-gray-600 mb-4">
                Career guidance sessions at schools and colleges
              </p>
              {bookingType === 'group' && (
                <div className="flex items-center justify-center text-primary-600 font-medium">
                  <FaCheckCircle className="mr-2" />
                  Selected
                </div>
              )}
            </motion.button>
          </div>

          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="card"
          >
            <h2 className="text-2xl font-heading font-bold mb-6 text-gray-900">
              Booking Details
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Personal Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <FaUser className="inline mr-2 text-primary-600" />
                    Full Name *
                  </label>
                  <input
                    {...register('name', { required: 'Name is required' })}
                    type="text"
                    className="input-field"
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <FaEnvelope className="inline mr-2 text-primary-600" />
                    Email Address *
                  </label>
                  <input
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address',
                      },
                    })}
                    type="email"
                    className="input-field"
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <FaPhone className="inline mr-2 text-primary-600" />
                  Phone Number *
                </label>
                <input
                  {...register('phone', {
                    required: 'Phone number is required',
                  })}
                  type="tel"
                  className="input-field"
                  placeholder="+1 (555) 123-4567"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              {/* Group Counseling Specific Fields */}
              {bookingType === 'group' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Institution Name *
                    </label>
                    <input
                      {...register('institution', { 
                        required: bookingType === 'group' ? 'Institution name is required' : false 
                      })}
                      type="text"
                      className="input-field"
                      placeholder="School/College Name"
                    />
                    {errors.institution && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.institution.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Expected Number of Students *
                    </label>
                    <input
                      {...register('numberOfStudents', { 
                        required: bookingType === 'group' ? 'Number of students is required' : false 
                      })}
                      type="number"
                      min="10"
                      className="input-field"
                      placeholder="e.g., 50"
                    />
                    {errors.numberOfStudents && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.numberOfStudents.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Institution Address *
                    </label>
                    <textarea
                      {...register('institutionAddress', { 
                        required: bookingType === 'group' ? 'Institution address is required' : false 
                      })}
                      rows={2}
                      className="input-field"
                      placeholder="Full address of the institution"
                    ></textarea>
                    {errors.institutionAddress && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.institutionAddress.message}
                      </p>
                    )}
                  </div>
                </>
              )}

              {/* Date and Time */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <FaCalendarAlt className="inline mr-2 text-primary-600" />
                    Preferred Date *
                  </label>
                  <input
                    {...register('date', { required: 'Date is required' })}
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    className="input-field"
                  />
                  {errors.date && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.date.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <FaClock className="inline mr-2 text-primary-600" />
                    Preferred Time *
                  </label>
                  <select
                    {...register('time', { required: 'Time is required' })}
                    className="input-field"
                  >
                    <option value="">Select time</option>
                    <option value="09:00 AM">09:00 AM</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="12:00 PM">12:00 PM</option>
                    <option value="01:00 PM">01:00 PM</option>
                    <option value="02:00 PM">02:00 PM</option>
                    <option value="03:00 PM">03:00 PM</option>
                    <option value="04:00 PM">04:00 PM</option>
                    <option value="05:00 PM">05:00 PM</option>
                  </select>
                  {errors.time && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.time.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message (Optional)
                </label>
                <textarea
                  {...register('message')}
                  rows={4}
                  className="input-field"
                  placeholder="Tell us about your goals and what you'd like to discuss..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Booking Request'}
              </button>

              <p className="text-sm text-gray-500 text-center">
                * We will contact you within 24 hours to confirm your booking
              </p>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
