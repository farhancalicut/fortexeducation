'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { collection, query, where, getDocs, updateDoc, doc, deleteDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { useAdmin } from '@/components/admin/AdminContext';
import { toast } from 'react-hot-toast';
import {
  FaCalendar,
  FaComments,
  FaImage,
  FaEnvelope,
  FaBookOpen,
  FaSignOutAlt,
  FaCheckCircle,
  FaTimes,
  FaEye,
  FaPhone,
  FaWhatsapp,
} from 'react-icons/fa';
import type { Booking, Testimonial, ContactForm } from '@/types';

export default function AdminDashboard() {
  const { logout } = useAdmin();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'bookings' | 'testimonials' | 'contacts'>('bookings');
  
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [contacts, setContacts] = useState<ContactForm[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      // Fetch Bookings
      const bookingsQuery = query(collection(db, 'bookings'));
      const bookingsSnapshot = await getDocs(bookingsQuery);
      const bookingsData = bookingsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Booking[];
      setBookings(bookingsData);

      // Fetch All Testimonials
      const testimonialsQuery = query(collection(db, 'testimonials'));
      const testimonialsSnapshot = await getDocs(testimonialsQuery);
      const testimonialsData = testimonialsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Testimonial[];
      setTestimonials(testimonialsData);

      // Fetch Contact Forms
      const contactsQuery = query(collection(db, 'contactForms'));
      const contactsSnapshot = await getDocs(contactsQuery);
      const contactsData = contactsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as ContactForm[];
      setContacts(contactsData);
    } catch (error) {
      toast.error('Failed to load data');
    } finally {
      setLoading(false);
    }
  };

  const approveTestimonial = async (testimonialId: string, approved: boolean) => {
    try {
      await updateDoc(doc(db, 'testimonials', testimonialId), { approved });
      setTestimonials(testimonials.filter((t) => t.id !== testimonialId));
      toast.success(approved ? 'Testimonial approved' : 'Testimonial rejected');
    } catch (error) {
      toast.error('Failed to update testimonial');
    }
  };

  const handleLogout = () => {
    logout();
    router.push('/admin');
  };

  const stats = [
    {
      icon: FaCalendar,
      label: 'Total Bookings',
      value: bookings.length,
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: FaComments,
      label: 'Total Testimonials',
      value: testimonials.length,
      color: 'bg-yellow-100 text-yellow-600',
    },
    
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h1 className="text-lg sm:text-2xl font-heading font-bold text-gray-900">
                Admin Dashboard
              </h1>
              <p className="text-xs sm:text-sm text-gray-600">Manage your website content</p>
            </div>
            <div className="flex items-center space-x-3 sm:space-x-4">
              <Link href="/" className="text-sm text-gray-600 hover:text-primary-600">
                View Site
              </Link>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 text-sm text-gray-600 hover:text-red-600 transition-colors"
              >
                <FaSignOutAlt className="text-sm" />
                <span className="hidden sm:inline">Logout</span>
                <span className="sm:hidden">Exit</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-6 sm:mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="card p-3 sm:p-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <p className="text-xs sm:text-sm text-gray-600 mb-1 truncate">{stat.label}</p>
                  <p className="text-xl sm:text-3xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`w-10 h-10 sm:w-14 sm:h-14 ${stat.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                  <stat.icon className="text-lg sm:text-2xl" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm mb-6">
          <div className="border-b border-gray-200">
            <div className="flex space-x-1 sm:space-x-2 p-2 sm:p-4 overflow-x-auto scrollbar-hide">
              <button
                onClick={() => setActiveTab('bookings')}
                className={`px-3 sm:px-6 py-2 sm:py-3 rounded-lg text-xs sm:text-base font-medium transition-colors whitespace-nowrap ${
                  activeTab === 'bookings'
                    ? 'bg-primary-600 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Bookings ({bookings.length})
              </button>
              <button
                onClick={() => setActiveTab('testimonials')}
                className={`px-3 sm:px-6 py-2 sm:py-3 rounded-lg text-xs sm:text-base font-medium transition-colors whitespace-nowrap ${
                  activeTab === 'testimonials'
                    ? 'bg-primary-600 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Testimonials ({testimonials.length})
              </button>
              <button
                onClick={() => setActiveTab('contacts')}
                className={`px-3 sm:px-6 py-2 sm:py-3 rounded-lg text-xs sm:text-base font-medium transition-colors whitespace-nowrap ${
                  activeTab === 'contacts'
                    ? 'bg-primary-600 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Messages ({contacts.length})
              </button>
            </div>
          </div>

          <div className="p-3 sm:p-6">
            {loading ? (
              <div className="text-center py-12">
                <div className="inline-block w-12 h-12 border-4 border-primary-600 border-t-transparent rounded-full animate-spin"></div>
              </div>
            ) : (
              <>
                {/* Bookings Tab */}
                {activeTab === 'bookings' && (
                  <>
                    {/* Desktop View */}
                    <div className="hidden md:block space-y-3">
                      {bookings.map((booking) => (
                        <div key={booking.id} className="border border-gray-200 rounded-lg overflow-hidden">
                          <div className="bg-gray-50 px-4 py-3 flex items-center justify-between">
                            <div className="flex items-center gap-4 flex-1">
                              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                booking.type === 'personal'
                                  ? 'bg-blue-100 text-blue-700'
                                  : 'bg-green-100 text-green-700'
                              }`}>
                                {booking.type}
                              </span>
                              <div>
                                <h3 className="font-semibold text-gray-900">{booking.name}</h3>
                                <p className="text-sm text-gray-600">{booking.date} at {booking.time}</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <a
                                href={`tel:${booking.phone}`}
                                className="inline-flex items-center justify-center w-8 h-8 bg-primary-600 hover:bg-primary-700 text-white rounded-full transition-colors"
                                title={`Call ${booking.name}`}
                              >
                                <FaPhone className="text-sm" />
                              </a>
                              <a
                                href={`https://wa.me/${booking.phone.replace(/[^0-9]/g, '')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center w-8 h-8 bg-green-600 hover:bg-green-700 text-white rounded-full transition-colors"
                                title={`WhatsApp ${booking.name}`}
                              >
                                <FaWhatsapp className="text-sm" />
                              </a>
                            </div>
                          </div>
                          <div className="px-4 py-3 bg-white">
                            <div className="grid grid-cols-2 gap-4 text-sm">
                              <div>
                                <p className="text-gray-500 mb-1">Email</p>
                                <p className="text-gray-900 break-all">{booking.email}</p>
                              </div>
                              <div>
                                <p className="text-gray-500 mb-1">Phone</p>
                                <p className="text-gray-900">{booking.phone}</p>
                              </div>
                              {booking.type === 'group' && (
                                <>
                                  <div>
                                    <p className="text-gray-500 mb-1">Institution</p>
                                    <p className="text-gray-900">{booking.institution || 'N/A'}</p>
                                  </div>
                                  <div>
                                    <p className="text-gray-500 mb-1">Number of Students</p>
                                    <p className="text-gray-900">{booking.numberOfStudents || 'N/A'}</p>
                                  </div>
                                  <div className="col-span-2">
                                    <p className="text-gray-500 mb-1">Institution Address</p>
                                    <p className="text-gray-900">{booking.institutionAddress || 'N/A'}</p>
                                  </div>
                                </>
                              )}
                              {booking.message && (
                                <div className="col-span-2">
                                  <p className="text-gray-500 mb-1">Additional Message</p>
                                  <p className="text-gray-900 whitespace-pre-wrap">{booking.message}</p>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Mobile Cards */}
                    <div className="md:hidden space-y-3">
                      {bookings.map((booking) => (
                        <div key={booking.id} className="border border-gray-200 rounded-lg p-3">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex-1 min-w-0">
                              <h3 className="font-semibold text-sm">{booking.name}</h3>
                              <p className="text-xs text-gray-600 mt-1">📅 {booking.date} at {booking.time}</p>
                            </div>
                            <span className={`px-2 py-1 rounded-full text-xs whitespace-nowrap ml-2 ${
                              booking.type === 'personal'
                                ? 'bg-blue-100 text-blue-700'
                                : 'bg-green-100 text-green-700'
                            }`}>
                              {booking.type}
                            </span>
                          </div>
                          <div className="space-y-2 text-xs mb-3">
                            <div>
                              <p className="text-gray-500">Email</p>
                              <p className="text-gray-900 break-all">{booking.email}</p>
                            </div>
                            <div>
                              <p className="text-gray-500">Phone</p>
                              <p className="text-gray-900">{booking.phone}</p>
                            </div>
                            {booking.type === 'group' && (
                              <>
                                <div>
                                  <p className="text-gray-500">Institution</p>
                                  <p className="text-gray-900">{booking.institution || 'N/A'}</p>
                                </div>
                                <div>
                                  <p className="text-gray-500">Number of Students</p>
                                  <p className="text-gray-900">{booking.numberOfStudents || 'N/A'}</p>
                                </div>
                                <div>
                                  <p className="text-gray-500">Institution Address</p>
                                  <p className="text-gray-900">{booking.institutionAddress || 'N/A'}</p>
                                </div>
                              </>
                            )}
                            {booking.message && (
                              <div>
                                <p className="text-gray-500">Message</p>
                                <p className="text-gray-900 whitespace-pre-wrap">{booking.message}</p>
                              </div>
                            )}
                          </div>
                          <div className="flex items-center gap-2 pt-2 border-t border-gray-200">
                            <a
                              href={`tel:${booking.phone}`}
                              className="inline-flex items-center justify-center w-7 h-7 bg-primary-600 hover:bg-primary-700 text-white rounded-full transition-colors"
                              title={`Call ${booking.name}`}
                            >
                              <FaPhone className="text-xs" />
                            </a>
                            <a
                              href={`https://wa.me/${booking.phone.replace(/[^0-9]/g, '')}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center w-7 h-7 bg-green-600 hover:bg-green-700 text-white rounded-full transition-colors"
                              title={`WhatsApp ${booking.name}`}
                            >
                              <FaWhatsapp className="text-xs" />
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {/* Testimonials Tab */}
                {activeTab === 'testimonials' && (
                  <div className="grid gap-3 sm:gap-6">
                    {testimonials.length === 0 ? (
                      <p className="text-center text-gray-600 py-12 text-sm">
                        No testimonials yet
                      </p>
                    ) : (
                      testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="border border-gray-200 rounded-lg p-3 sm:p-4 overflow-hidden">
                          <div className="mb-3">
                            <h3 className="font-semibold text-sm sm:text-lg break-words">{testimonial.name}</h3>
                            <p className="text-xs sm:text-sm text-gray-600 break-words">{testimonial.role}</p>
                          </div>
                          <p className="text-xs sm:text-sm text-gray-700 italic break-words whitespace-pre-wrap line-clamp-4">"{testimonial.content}"</p>
                          <p className="text-xs sm:text-sm text-gray-500 mt-2">Rating: {testimonial.rating}/5</p>
                        </div>
                      ))
                    )}
                  </div>
                )}

                {/* Contacts Tab */}
                {activeTab === 'contacts' && (
                  <div className="grid gap-3 sm:gap-6">
                    {contacts.map((contact) => (
                      <div key={contact.id} className="border border-gray-200 rounded-lg p-3 sm:p-6">
                        <div className="flex justify-between items-start gap-2 mb-3 sm:mb-4">
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-sm sm:text-lg break-words">{contact.name}</h3>
                            <p className="text-xs sm:text-sm text-gray-600 break-all">{contact.phone}</p>
                          </div>
                          <span className={`px-2 sm:px-3 py-1 rounded-full text-xs whitespace-nowrap flex-shrink-0 ${
                            contact.status === 'new'
                              ? 'bg-blue-100 text-blue-700'
                              : 'bg-gray-100 text-gray-700'
                          }`}>
                            {contact.status}
                          </span>
                        </div>
                        <h4 className="font-medium text-gray-900 mb-2 text-sm sm:text-base break-words">{contact.subject}</h4>
                        <p className="text-xs sm:text-sm text-gray-700 break-words whitespace-pre-wrap">{contact.message}</p>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
