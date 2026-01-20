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

      // Fetch Testimonials (pending approval)
      const testimonialsQuery = query(
        collection(db, 'testimonials'),
        where('approved', '==', false)
      );
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

  const updateBookingStatus = async (bookingId: string, status: 'confirmed' | 'cancelled') => {
    try {
      await updateDoc(doc(db, 'bookings', bookingId), { status });
      setBookings(bookings.map((b) => (b.id === bookingId ? { ...b, status } : b)));
      toast.success(`Booking ${status}`);
    } catch (error) {
      toast.error('Failed to update booking');
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
      label: 'Pending Bookings',
      value: bookings.filter((b) => b.status === 'pending').length,
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: FaComments,
      label: 'Pending Testimonials',
      value: testimonials.length,
      color: 'bg-yellow-100 text-yellow-600',
    },
    {
      icon: FaEnvelope,
      label: 'New Messages',
      value: contacts.filter((c) => c.status === 'new').length,
      color: 'bg-green-100 text-green-600',
    },
    {
      icon: FaBookOpen,
      label: 'Total Bookings',
      value: bookings.length,
      color: 'bg-purple-100 text-purple-600',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-heading font-bold text-gray-900">
                Admin Dashboard
              </h1>
              <p className="text-sm text-gray-600">Manage your website content</p>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-gray-600 hover:text-primary-600">
                View Site
              </Link>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-colors"
              >
                <FaSignOutAlt />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`w-14 h-14 ${stat.color} rounded-lg flex items-center justify-center`}>
                  <stat.icon className="text-2xl" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm mb-6">
          <div className="border-b border-gray-200">
            <div className="flex space-x-1 p-4">
              <button
                onClick={() => setActiveTab('bookings')}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeTab === 'bookings'
                    ? 'bg-primary-600 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Bookings ({bookings.length})
              </button>
              <button
                onClick={() => setActiveTab('testimonials')}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeTab === 'testimonials'
                    ? 'bg-primary-600 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Testimonials ({testimonials.length})
              </button>
              <button
                onClick={() => setActiveTab('contacts')}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeTab === 'contacts'
                    ? 'bg-primary-600 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Messages ({contacts.length})
              </button>
            </div>
          </div>

          <div className="p-6">
            {loading ? (
              <div className="text-center py-12">
                <div className="inline-block w-12 h-12 border-4 border-primary-600 border-t-transparent rounded-full animate-spin"></div>
              </div>
            ) : (
              <>
                {/* Bookings Tab */}
                {activeTab === 'bookings' && (
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Name</th>
                          <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Type</th>
                          <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Date & Time</th>
                          <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Contact</th>
                          <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Status</th>
                          <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {bookings.map((booking) => (
                          <tr key={booking.id}>
                            <td className="px-4 py-4 text-sm">{booking.name}</td>
                            <td className="px-4 py-4 text-sm">
                              <span className={`px-2 py-1 rounded-full text-xs ${
                                booking.type === 'personal'
                                  ? 'bg-blue-100 text-blue-700'
                                  : 'bg-green-100 text-green-700'
                              }`}>
                                {booking.type}
                              </span>
                            </td>
                            <td className="px-4 py-4 text-sm">
                              {booking.date} at {booking.time}
                            </td>
                            <td className="px-4 py-4 text-sm">
                              {booking.email}<br />
                              {booking.phone}
                            </td>
                            <td className="px-4 py-4 text-sm">
                              <span className={`px-2 py-1 rounded-full text-xs ${
                                booking.status === 'pending'
                                  ? 'bg-yellow-100 text-yellow-700'
                                  : booking.status === 'confirmed'
                                  ? 'bg-green-100 text-green-700'
                                  : 'bg-red-100 text-red-700'
                              }`}>
                                {booking.status}
                              </span>
                            </td>
                            <td className="px-4 py-4 text-sm">
                              {booking.status === 'pending' && (
                                <div className="flex space-x-2">
                                  <button
                                    onClick={() => updateBookingStatus(booking.id!, 'confirmed')}
                                    className="text-green-600 hover:text-green-700"
                                    title="Confirm"
                                  >
                                    <FaCheckCircle size={20} />
                                  </button>
                                  <button
                                    onClick={() => updateBookingStatus(booking.id!, 'cancelled')}
                                    className="text-red-600 hover:text-red-700"
                                    title="Cancel"
                                  >
                                    <FaTimes size={20} />
                                  </button>
                                </div>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Testimonials Tab */}
                {activeTab === 'testimonials' && (
                  <div className="grid gap-6">
                    {testimonials.length === 0 ? (
                      <p className="text-center text-gray-600 py-12">
                        No pending testimonials
                      </p>
                    ) : (
                      testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="border border-gray-200 rounded-lg p-4 overflow-hidden">
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-4">
                            <div className="flex-1 min-w-0">
                              <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                              <p className="text-sm text-gray-600">{testimonial.role}</p>
                            </div>
                            <div className="flex gap-2 flex-shrink-0 self-start">
                              <button
                                onClick={() => approveTestimonial(testimonial.id!, true)}
                                className="px-3 py-1.5 bg-green-600 hover:bg-green-700 text-white rounded text-xs font-medium whitespace-nowrap"
                              >
                                ✓ Approve
                              </button>
                              <button
                                onClick={() => approveTestimonial(testimonial.id!, false)}
                                className="px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white rounded text-xs font-medium whitespace-nowrap"
                              >
                                ✗ Reject
                              </button>
                            </div>
                          </div>
                          <p className="text-gray-700 italic break-words whitespace-pre-wrap">"{testimonial.content}"</p>
                          <p className="text-sm text-gray-500 mt-2">Rating: {testimonial.rating}/5</p>
                        </div>
                      ))
                    )}
                  </div>
                )}

                {/* Contacts Tab */}
                {activeTab === 'contacts' && (
                  <div className="grid gap-6">
                    {contacts.map((contact) => (
                      <div key={contact.id} className="border border-gray-200 rounded-lg p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="font-semibold text-lg">{contact.name}</h3>
                            <p className="text-sm text-gray-600">{contact.phone}</p>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs ${
                            contact.status === 'new'
                              ? 'bg-blue-100 text-blue-700'
                              : 'bg-gray-100 text-gray-700'
                          }`}>
                            {contact.status}
                          </span>
                        </div>
                        <h4 className="font-medium text-gray-900 mb-2">{contact.subject}</h4>
                        <p className="text-gray-700">{contact.message}</p>
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
