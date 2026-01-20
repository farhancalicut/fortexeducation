export const siteConfig = {
  name: 'FORTEX - For Defining Future',
  tagline: 'TRUSTED GUIDANCE FOR A BRIGHT FUTURE',
  description: 'At Fortex Education Consultancy, we are committed to turning students\' academic aspirations into reality by providing expert guidance and seamless admission support to top universities and colleges across India.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  ogImage: '/og-image.jpg',
  links: {
    facebook: 'https://facebook.com/fortexedu',
    instagram: 'https://instagram.com/fortexedu',
    linkedin: 'https://linkedin.com/company/fortexedu',
    twitter: 'https://twitter.com/fortexedu',
  },
  contact: {
    email: 'info@fortexedu.com',
    phone: '8547758517',
    phone2: '8547758517',
    phone3: '8547758517',
    address: 'Govind Building, Near Kallat Mall, Mysore Road, Mananthavady',
    website: 'www.fortexedu.com',
  },
};

export const navigationLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Career Guidance', href: '/career-guidance' },
  { name: 'Book Counseling', href: '/booking' },
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact', href: '/contact' },
];

export const services = [
  {
    id: 'personalized-counseling',
    title: 'Personalized Counseling',
    description: 'Every student is unique, and so are their career aspirations. Our one-on-one counseling sessions help us understand your strengths, interests, and long-term goals. We provide tailored recommendations to guide you toward the best academic and career choices that align with your future ambitions.',
    icon: 'target',
    features: [
      'One-on-one counseling sessions',
      'Understanding your strengths and interests',
      'Long-term career goal planning',
      'Tailored academic recommendations',
    ],
  },
  {
    id: 'university-selection',
    title: 'University & College Selection',
    description: 'Choosing the right institution is crucial for academic and career growth. Based on your academic profile, preferences, and aspirations, we carefully map you to top universities and colleges across India, ensuring that you enroll in a program that maximizes your potential.',
    icon: 'graduation',
    features: [
      'Academic profile assessment',
      'Mapping to top institutions across India',
      'Program selection guidance',
      'Campus environment evaluation',
    ],
  },
  {
    id: 'application-assistance',
    title: 'Seamless Application & Documentation Assistance',
    description: 'The admission process can be overwhelming, but with Fortex, you don\'t have to worry! Our experts assist you in preparing, reviewing, and submitting all necessary documents, ensuring an error-free and hassle-free application experience.',
    icon: 'book',
    features: [
      'Document preparation guidance',
      'Application review and verification',
      'Error-free submission support',
      'Deadline management',
    ],
  },
  {
    id: 'scholarship-guidance',
    title: 'Scholarship & Financial Aid Guidance',
    description: 'Higher education is a valuable investment, and we strive to make it accessible. Our team provides in-depth guidance on scholarships, grants, and financial aid options, helping students secure funding and minimize educational expenses.',
    icon: 'globe',
    features: [
      'Scholarship identification',
      'Financial aid application support',
      'Grant opportunity guidance',
      'Cost reduction strategies',
    ],
  },
  {
    id: 'admission-support',
    title: 'Admission & Enrollment Support',
    description: 'From securing admissions to completing the enrollment process, we walk with you every step of the way. Our dedicated team ensures that you meet deadlines, submit all required paperwork, and smoothly transition into your chosen institution.',
    icon: 'target',
    features: [
      'Admission process guidance',
      'Enrollment completion support',
      'Deadline tracking',
      'Smooth institutional transition',
    ],
  },
];

export const careerCategories = [
  'Medical Courses',
  'Paramedical & Allied Health Sciences',
  'Engineering',
  'General Degree Courses',
  'Management Courses',
  'Law Courses',
  'Commerce & Finance',
  'Pharmacy Courses',
  'Design & Media',
  'Sports & Physical Education',
  'Aviation & Marine Courses',
  'Allied Science Courses',
];
