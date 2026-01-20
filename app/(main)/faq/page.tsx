'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  {
    category: 'About Fortex',
    question: 'What is Fortex Education Consultancy?',
    answer: 'Fortex Education Consultancy is committed to turning students\' academic aspirations into reality by providing expert guidance and seamless admission support to top universities and colleges across India. We specialize in personalized consultation and education placement services with years of experience and a strong network of prestigious institutions.',
  },
  {
    category: 'About Fortex',
    question: 'What is your vision and mission?',
    answer: 'Our vision is that every student in India deserves access to quality higher education. We guide and support students in securing admission to top universities and colleges. Our mission is to guide students in achieving their academic and career goals with honesty and dedication through personalized counseling, admission support, and financial aid guidance.',
  },
  {
    category: 'About Fortex',
    question: 'Where is your office located?',
    answer: 'Our office is located at Govind Building, Near Kallat Mall, Mysore Road, Mananthavady. You can reach us at 7025337761, 7025337762, or 8547758517.',
  },
  {
    category: 'Services',
    question: 'What services does Fortex offer?',
    answer: 'We provide comprehensive end-to-end services: (1) Personalized Counseling - One-on-one sessions to understand your goals, (2) University & College Selection - Mapping you to top institutions across India, (3) Application & Documentation Assistance - Error-free application support, (4) Scholarship & Financial Aid Guidance - Help securing funding, and (5) Admission & Enrollment Support - Complete support until you transition into your chosen institution.',
  },
  {
    category: 'Services',
    question: 'Do you provide accommodation and travel assistance?',
    answer: 'Yes! We provide accommodation support to help students secure safe and comfortable housing (university hostels or private accommodations). We also offer travel assistance including transportation guidance and planning to ensure students reach their colleges with ease.',
  },
  {
    category: 'Services',
    question: 'Do you offer ongoing support after admission?',
    answer: 'Absolutely! Our commitment doesn\'t end with admission. We provide academic support (study materials, tutoring, writing assistance), regular counseling and motivation check-ins, and career guidance to help students transition from academics to professional life.',
  },
  {
    category: 'Counseling',
    question: 'What types of counseling do you offer?',
    answer: 'We offer two types: (1) Personal Counseling - One-on-one personalized guidance sessions at our office for individual students, and (2) Group/Public Counseling - Career guidance sessions conducted at schools and colleges for groups of students.',
  },
  {
    category: 'Counseling',
    question: 'How do I book a counseling session?',
    answer: 'Visit our Booking page and select either Personal Counseling or Group/Public Counseling. Fill in your details, preferred date and time. For group counseling, you\'ll need to provide institution name, expected number of students, and institution address. We will contact you within 24 hours to confirm your booking.',
  },
  {
    category: 'Counseling',
    question: 'Do you arrange college visits?',
    answer: 'Yes! We believe choosing the right institution is an important decision. That\'s why we arrange college visits, allowing students to experience the campus environment firsthand before making their final choice.',
  },
  {
    category: 'Admissions',
    question: 'Which institutions do you have partnerships with?',
    answer: 'We have partnerships with 40+ top institutions including Jain University, Manipal University, Nitte, SRM, PES University, Christ University, Ramaiah University, JSS Academy, Alliance University, Saveetha University, and many more across Karnataka, Tamil Nadu, and Kerala.',
  },
  {
    category: 'Admissions',
    question: 'What courses can students pursue after 12th?',
    answer: 'Students can choose from diverse fields: Medical (MBBS, BDS, BAMS), Paramedical & Allied Health Sciences, Engineering (Computer Science, AI/ML, Mechanical, Civil, etc.), Management (BBA, BMS), Law (BA LLB, BBA LLB), Commerce & Finance, Pharmacy, Design & Media, Sports & Physical Education, Aviation & Marine, and Allied Science courses.',
  },
  {
    category: 'Admissions',
    question: 'How do you help with the application process?',
    answer: 'Our experts assist you in preparing, reviewing, and submitting all necessary documents, ensuring an error-free and hassle-free application experience. We guide you through shortlisting colleges, completing applications, meeting deadlines, and submitting all required paperwork.',
  },
  {
    category: 'Financial Aid',
    question: 'Do you help with scholarships and financial aid?',
    answer: 'Yes! Higher education is a valuable investment, and we strive to make it accessible. Our team provides in-depth guidance on scholarships, grants, and financial aid options, helping students secure funding and minimize educational expenses.',
  },
  {
    category: 'Why India',
    question: 'Why should I choose India for higher education?',
    answer: 'India offers globally recognized education (IITs, IIMs, AIIMS, NITs), affordable and cost-effective education compared to international destinations, cultural diversity with 1,600+ languages, thriving campus life, expanding career opportunities in IT, healthcare, finance, and government support for students through scholarships and simplified processes.',
  },
  {
    category: 'Why India',
    question: 'What makes India\'s education system special?',
    answer: 'India\'s competitive academic environment fosters critical thinking, leadership, and entrepreneurship. With top universities, a rapidly growing economy, affordable study options, and holistic growth opportunities through cultural festivals, technical events, and student clubs, India prepares students to excel on a global stage.',
  },
];

const categories = ['All', ...Array.from(new Set(faqs.map((faq) => faq.category)))];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFAQs =
    selectedCategory === 'All'
      ? faqs
      : faqs.filter((faq) => faq.category === selectedCategory);

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
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-primary-50 leading-relaxed">
              Find answers to common questions about our services and processes
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom max-w-4xl">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {filteredFAQs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors text-left"
                >
                  <span className="font-heading font-semibold text-lg text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <FaChevronUp className="text-primary-600 flex-shrink-0" />
                  ) : (
                    <FaChevronDown className="text-gray-400 flex-shrink-0" />
                  )}
                </button>

                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-5 bg-gray-50"
                  >
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Still Have Questions CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center card bg-gradient-to-br from-primary-50 to-secondary-50"
          >
            <h2 className="text-2xl font-heading font-bold mb-4 text-gray-900">
              Still Have Questions?
            </h2>
            <p className="text-gray-600 mb-6">
              Can't find the answer you're looking for? Our team is here to help!
            </p>
            <a
              href="/contact"
              className="inline-block btn-primary"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
