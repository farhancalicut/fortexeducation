'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { toast } from 'react-hot-toast';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaClock,
} from 'react-icons/fa';
import { siteConfig } from '@/lib/config';
import type { ContactForm } from '@/types';

type ContactFormData = Omit<ContactForm, 'id' | 'status' | 'createdAt'>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const contactData: Omit<ContactForm, 'id'> = {
        ...data,
        status: 'new',
        createdAt: Timestamp.now(),
      };

      await addDoc(collection(db, 'contactForms'), contactData);
      toast.success('Message sent successfully! We will get back to you soon.');
      reset();
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
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
              Get In Touch
            </h1>
            <p className="text-xl text-primary-50 leading-relaxed">
              Have questions? We're here to help you on your educational journey
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-heading font-bold mb-6 text-gray-900">
                Contact Information
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Reach out to us through any of the following channels. Our team
                is ready to assist you with your educational needs.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaPhone className="text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <a
                      href={`tel:${siteConfig.contact.phone}`}
                      className="text-gray-600 hover:text-primary-600 transition-colors"
                    >
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-gray-600 hover:text-primary-600 transition-colors"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Office Location
                    </h3>
                    <div>
                      <p className="font-medium text-gray-700">Mananthavady Office</p>
                      <p className="text-gray-600 text-sm">{siteConfig.contact.address}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaClock className="text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Office Hours
                    </h3>
                    <p className="text-gray-600">
                      Monday - Saturday: 9:00 AM - 6:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h3 className="font-semibold text-gray-900 mb-4">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  <a
                    href={siteConfig.links.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-100 hover:bg-primary-600 hover:text-white rounded-lg flex items-center justify-center transition-colors"
                  >
                    <FaFacebook size={20} />
                  </a>
                  <a
                    href={siteConfig.links.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-100 hover:bg-primary-600 hover:text-white rounded-lg flex items-center justify-center transition-colors"
                  >
                    <FaInstagram size={20} />
                  </a>
                  <a
                    href={siteConfig.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-100 hover:bg-primary-600 hover:text-white rounded-lg flex items-center justify-center transition-colors"
                  >
                    <FaLinkedin size={20} />
                  </a>
                  <a
                    href={siteConfig.links.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-100 hover:bg-primary-600 hover:text-white rounded-lg flex items-center justify-center transition-colors"
                  >
                    <FaTwitter size={20} />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="card"
            >
              <h2 className="text-2xl font-heading font-bold mb-6 text-gray-900">
                Send Us a Message
              </h2>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
                    <p className="text-red-500 text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    {...register('phone', {
                      required: 'Phone number is required',
                    })}
                    type="tel"
                    className="input-field"
                    placeholder="+91 98765 43210"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    {...register('subject', { required: 'Subject is required' })}
                    type="text"
                    className="input-field"
                    placeholder="How can we help you?"
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    {...register('message', {
                      required: 'Message is required',
                      minLength: {
                        value: 20,
                        message: 'Message must be at least 20 characters',
                      },
                    })}
                    rows={6}
                    className="input-field"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-100">
        <div className="container-custom">
          <h2 className="text-3xl font-heading font-bold mb-8 text-center text-gray-900">
            Visit Our Office
          </h2>
          <div className="aspect-video bg-gray-300 rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.2!2d76.0!3d11.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDQ4JzAwLjAiTiA3NsKwMDAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1705853689518!5m2!1sen!2sin&q=Mananthavady,+Wayanad,+Kerala"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Fortex Education Mananthavady Office Location"
            ></iframe>
          </div>
          <p className="text-center text-gray-600 mt-4">
            Govind Building, Near Kallat Mall, Mysore Road, Mananthavady
          </p>
        </div>
      </section>
    </div>
  );
}
