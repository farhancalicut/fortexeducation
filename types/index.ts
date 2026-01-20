import { Timestamp } from 'firebase/firestore';

// Booking Types
export interface Booking {
  id?: string;
  type: 'personal' | 'group';
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  message?: string;
  // Group counseling specific fields
  institution?: string;
  numberOfStudents?: string;
  institutionAddress?: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: Timestamp | Date;
}

// Testimonial Types
export interface Testimonial {
  id?: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  imageUrl?: string;
  approved: boolean;
  createdAt: Timestamp | Date;
}

// Gallery Types
export interface GalleryItem {
  id?: string;
  title: string;
  imageUrl: string;
  cloudinaryId: string;
  description?: string;
  createdAt: Timestamp | Date;
}

// Contact Form Types
export interface ContactForm {
  id?: string;
  name: string;
  phone: string;
  subject: string;
  message: string;
  status: 'new' | 'responded';
  createdAt: Timestamp | Date;
}

// Career Guide Types
export interface CareerGuide {
  id?: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  category: string;
  tags: string[];
  metaDescription: string;
  metaKeywords: string[];
  featuredImage?: string;
  published: boolean;
  views: number;
  createdAt: Timestamp | Date;
  updatedAt: Timestamp | Date;
}

// Service Types
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

// FAQ Types
export interface FAQ {
  id?: string;
  question: string;
  answer: string;
  category: string;
  order: number;
}
