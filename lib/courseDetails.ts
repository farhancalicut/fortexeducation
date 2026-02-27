export interface CourseDetail {
  name: string;
  fullForm?: string;
  description: string;
  duration: string;
  subjects: string[];
  careerOptions: string[];
  admission: {
    exam?: string;
    availableIn: string[];
  };
  additionalInfo?: string[];
}

export const courseDetailsData: Record<string, CourseDetail> = {
  'MBBS': {
    name: 'MBBS',
    fullForm: 'Bachelor of Medicine, Bachelor of Surgery',
    description: "It's the basic medical degree required to become a doctor in India and many other countries.",
    duration: '5.5 years (4.5 years academic study + 1 year compulsory internship)',
    subjects: [
      'Anatomy',
      'Physiology',
      'Biochemistry',
      'Pathology',
      'Pharmacology',
      'Microbiology',
      'Forensic Medicine',
      'Community Medicine',
      'Medicine',
      'Surgery',
      'Pediatrics',
      'Obstetrics & Gynecology (OB-GYN)',
    ],
    careerOptions: [
      'Work as a general doctor (MBBS doctor)',
      'Do post-graduation (MD / MS / DNB)',
      'Specialize in fields like Cardiology, Surgery, Pediatrics, etc.',
      'Work in hospitals, clinics, government service',
      'Go abroad after clearing exams (USMLE, PLAB, etc.)',
    ],
    admission: {
      exam: 'NEET-UG',
      availableIn: [
        'Government medical colleges',
        'Private medical colleges',
        'Deemed universities',
      ],
    },
    additionalInfo: [
      '🩺 Bachelor of Medicine → medical knowledge (diagnosis, treatment, diseases)',
      '🩺 Bachelor of Surgery → surgical training',
    ],
  },
  'BDS': {
    name: 'BDS',
    fullForm: 'Bachelor of Dental Surgery',
    description: "It's the professional undergraduate degree to become a dentist.",
    duration: '5 years (4 years academic study + 1 year internship)',
    subjects: [
      'Dental Anatomy',
      'Oral Pathology',
      'Prosthodontics',
      'Orthodontics',
      'Oral & Maxillofacial Surgery',
      'Periodontics',
      'Conservative Dentistry & Endodontics',
      'Oral Medicine & Radiology',
      'Pedodontics',
      'Community Dentistry',
    ],
    careerOptions: [
      'Work as a dentist in private practice or hospitals',
      'Government dental officer',
      'Pursue MDS (Master of Dental Surgery) for specialization in Orthodontics, Oral Surgery, etc.',
      'Teaching and research in dental colleges',
      'Open your own dental clinic',
    ],
    admission: {
      exam: 'NEET-UG',
      availableIn: [
        'Government dental colleges',
        'Private dental colleges',
        'Deemed universities',
      ],
    },
    additionalInfo: [
      '🦷 Focus on oral health, dental diseases, and treatment',
      '🦷 Includes both clinical practice and surgical training',
    ],
  },
  'BAMS': {
    name: 'BAMS',
    fullForm: 'Bachelor of Ayurvedic Medicine and Surgery',
    description: "It's a professional medical degree in Ayurveda, combining traditional Ayurvedic knowledge with basic modern medicine.",
    duration: '5.5 years (4.5 years academic study + 1 year internship)',
    subjects: [
      'Dravyaguna (Ayurvedic Pharmacology)',
      'Panchakarma (Detoxification Therapy)',
      'Kaya Chikitsa (Internal Medicine)',
      'Rasashastra (Ayurvedic Pharmaceutics)',
      'Shalya Tantra (Surgery)',
      'Anatomy',
      'Physiology',
      'Pathology',
      'Surgery Basics',
      'Charaka Samhita & Sushruta Samhita',
    ],
    careerOptions: [
      'Work as an Ayurvedic doctor in clinics or hospitals',
      'Government medical officer (AYUSH department)',
      'Specialize as a Panchakarma specialist',
      'Pursue MD (Ayurveda) for specialization',
      'Work in pharmaceutical industry (Ayurvedic medicines)',
      'Research and teaching in Ayurvedic colleges',
    ],
    admission: {
      exam: 'NEET-UG',
      availableIn: [
        'Government Ayurvedic colleges',
        'Private Ayurvedic colleges',
        'Deemed universities',
      ],
    },
    additionalInfo: [
      '🌿 Combines ancient Ayurvedic wisdom with modern medical science',
      '🌿 Focus on holistic healing and natural treatment methods',
    ],
  },
  'BUMS': {
    name: 'BUMS',
    fullForm: 'Bachelor of Unani Medicine and Surgery',
    description: "It's an undergraduate medical degree in the Unani system of medicine, based on Greco-Arab medical principles.",
    duration: '5.5 years (4.5 years academic study + 1 year internship)',
    subjects: [
      'Ilmul Advia (Unani Pharmacology)',
      'Moalijat (Unani Medicine)',
      'Jarahat (Unani Surgery)',
      'Kulliyat (Unani Fundamentals)',
      'Tahaffuzi wa Samaji Tib (Preventive & Social Medicine)',
      'Anatomy',
      'Physiology',
      'Pathology',
      'Community Medicine',
      'Ilmul Saidla (Unani Pharmacy)',
    ],
    careerOptions: [
      'Work as a Unani doctor in clinics or hospitals',
      'Government medical officer (AYUSH department)',
      'Research officer in Unani medicine',
      'Pursue MD (Unani) for specialization',
      'Teaching in Unani medical colleges',
      'Work in pharmaceutical and herbal medicine industry',
    ],
    admission: {
      exam: 'NEET-UG',
      availableIn: [
        'Government Unani medical colleges',
        'Private Unani medical colleges',
        'Deemed universities',
      ],
    },
    additionalInfo: [
      '🌿 Based on Greco-Arab medical principles and philosophy',
      '🌿 Focus on holistic healing using natural remedies',
    ],
  },
  'BHMS': {
    name: 'BHMS',
    fullForm: 'Bachelor of Homeopathic Medicine and Surgery',
    description: "It's a professional medical degree in Homeopathy, focused on holistic and individualized treatment.",
    duration: '5.5 years (4.5 years academic study + 1 year internship)',
    subjects: [
      'Organon of Medicine',
      'Materia Medica',
      'Repertory',
      'Homeopathic Pharmacy',
      'Practice of Medicine',
      'Anatomy',
      'Physiology',
      'Pathology',
      'Community Medicine',
      'Forensic Medicine & Toxicology',
    ],
    careerOptions: [
      'Work as a Homeopathic doctor in private clinics',
      'Government medical officer (AYUSH department)',
      'Pursue MD (Homeopathy) for specialization',
      'Research in homeopathic medicine',
      'Teaching in homeopathic medical colleges',
      'Work in pharmaceutical and homeopathic drug industry',
    ],
    admission: {
      exam: 'NEET-UG',
      availableIn: [
        'Government Homeopathic colleges',
        'Private Homeopathic colleges',
        'Deemed universities',
      ],
    },
    additionalInfo: [
      '🌼 Focus on holistic and individualized patient treatment',
      '🌼 Based on the principle "like cures like" using highly diluted substances',
    ],
  },
  'BSMS': {
    name: 'BSMS',
    fullForm: 'Bachelor of Siddha Medicine and Surgery',
    description: "It's the undergraduate degree in the Siddha system of medicine, which is a traditional Indian medical practice, mainly followed in Tamil Nadu and some parts of South India.",
    duration: '5.5 years (4.5 years academic study + 1 year internship)',
    subjects: [
      'Gunapadam (Siddha Pharmacology)',
      'Maruthuvam (Siddha Medicine)',
      'Sirappu Maruthuvam (Special Treatments)',
      'Noi Naadal (Diagnosis)',
      'Siddha Physiotherapy',
      'Anatomy',
      'Physiology',
      'Pathology',
      'Community Medicine',
      'Nanjunool (Toxicology)',
    ],
    careerOptions: [
      'Work as a Siddha doctor in clinics or hospitals',
      'Government medical officer (AYUSH department)',
      'Research in Siddha medicine',
      'Pursue MD (Siddha) for specialization',
      'Teaching in Siddha medical colleges',
      'Work in herbal medicine and pharmaceutical industry',
    ],
    admission: {
      exam: 'NEET-UG',
      availableIn: [
        'Government Siddha medical colleges',
        'Private Siddha medical colleges',
        'Deemed universities',
      ],
    },
    additionalInfo: [
      '🌿 Ancient Tamil system of medicine with rich heritage',
      '🌿 Focus on herbal medicine and traditional healing methods',
    ],
  },
  'BNYS': {
    name: 'BNYS',
    fullForm: 'Bachelor of Naturopathy and Yogic Sciences',
    description: "It's an undergraduate degree in Naturopathy and Yoga, focusing on natural healing methods, preventive health, and holistic well-being.",
    duration: '5.5 years (4.5 years academic study + 1 year internship)',
    subjects: [
      'Hydrotherapy',
      'Diet Therapy & Nutrition',
      'Mud Therapy',
      'Massage Therapy',
      'Yoga Asanas',
      'Pranayama',
      'Meditation & Therapeutic Yoga',
      'Anatomy',
      'Physiology',
      'Pathology',
      'Biochemistry',
      'Naturopathic Diagnosis',
    ],
    careerOptions: [
      'Work as a Naturopathic and Yoga practitioner in clinics or wellness centers',
      'Government AYUSH medical officer',
      'Research and teaching in Naturopathy and Yoga',
      'Health consultant and wellness coach',
      'Work in wellness retreats and spa centers',
      'Fitness and lifestyle coaching',
    ],
    admission: {
      exam: 'NEET-UG',
      availableIn: [
        'Government Naturopathy colleges',
        'Private Naturopathy colleges',
        'Deemed universities',
      ],
    },
    additionalInfo: [
      '🌱 Focus on natural healing without drugs or surgery',
      '🧘 Combines ancient yogic wisdom with modern naturopathic practices',
    ],
  },
  'B.Sc Nursing': {
    name: 'B.Sc Nursing',
    fullForm: 'Bachelor of Science in Nursing',
    description: "It's an undergraduate professional degree to become a nurse, focusing on patient care, medical knowledge, and healthcare management.",
    duration: '4 years (academic study + clinical internship)',
    subjects: [
      'Fundamentals of Nursing',
      'Community Health Nursing',
      'Pediatric Nursing',
      'Psychiatric Nursing',
      'Obstetric Nursing',
      'Medical-Surgical Nursing',
      'Anatomy',
      'Physiology',
      'Pharmacology',
      'Microbiology',
      'Nutrition & Dietetics',
      'Nursing Research & Statistics',
    ],
    careerOptions: [
      'Staff nurse in government or private hospitals',
      'Nurse educator and teaching in nursing colleges',
      'Public health nurse and community health work',
      'Pursue M.Sc Nursing for specialization (ICU, Pediatrics, Psychiatry, etc.)',
      'Clinical nurse specialist',
      'International opportunities (USA, UK, Middle East, etc.)',
    ],
    admission: {
      exam: 'NEET-UG or State Nursing Entrance Exams',
      availableIn: [
        'Government nursing colleges',
        'Private nursing colleges',
        'Medical college nursing programs',
        'Deemed universities',
      ],
    },
    additionalInfo: [
      '🏥 Includes extensive practical training in hospitals and clinics',
      '🏥 High demand profession with global career opportunities',
    ],
  },
  'BPT': {
    name: 'BPT',
    fullForm: 'Bachelor of Physiotherapy',
    description: "It's an undergraduate degree in physiotherapy, focusing on the rehabilitation of patients, improving mobility, and restoring physical function.",
    duration: '4.5 years (academic study + 6 months internship)',
    subjects: [
      'Anatomy',
      'Physiology',
      'Biomechanics',
      'Exercise Therapy',
      'Electrotherapy',
      'Manual Therapy',
      'Orthopedics',
      'Neurology',
      'Rehabilitation Techniques',
      'Sports Physiotherapy',
      'Geriatric & Pediatric Physiotherapy',
      'Cardiopulmonary Physiotherapy',
    ],
    careerOptions: [
      'Physiotherapist in hospitals, clinics, sports teams, or rehabilitation centers',
      'Start your own physiotherapy clinic',
      'Research and teaching in physiotherapy colleges',
      'Pursue MPT (Master of Physiotherapy) for specialization in Orthopedics, Sports, Neurology, etc.',
      'Sports physiotherapist for athletic teams',
      'International opportunities in healthcare and sports fields',
    ],
    admission: {
      exam: 'NEET-UG or State-level Physiotherapy Entrance Exams',
      availableIn: [
        'Government physiotherapy colleges',
        'Private physiotherapy colleges',
        'Medical college physiotherapy programs',
        'Deemed universities',
      ],
    },
    additionalInfo: [
      '🏃‍♂️ Focus on restoring movement and function through non-surgical methods',
      '💪 Growing demand in sports, geriatric care, and rehabilitation sectors',
    ],
  },
  'DPT': {
    name: 'DPT',
    fullForm: 'Doctor of Physical Therapy',
    description: "It's an advanced professional degree in physiotherapy, mainly pursued after BPT (Bachelor of Physiotherapy), or in some countries as a direct entry doctoral program.",
    duration: '3 years (after BPT) or 3-4 years in direct entry doctoral programs',
    subjects: [
      'Advanced Musculoskeletal Physiotherapy',
      'Neurological Physiotherapy',
      'Cardiopulmonary Physiotherapy',
      'Manual Therapy Techniques',
      'Advanced Electrotherapy',
      'Sports & Athletic Rehabilitation',
      'Geriatric Rehabilitation',
      'Research Methodology',
      'Evidence-Based Practice',
      'Clinical Decision-Making',
      'Differential Diagnosis',
      'Advanced Therapeutic Exercise',
    ],
    careerOptions: [
      'Specialist Physiotherapist in hospitals, rehabilitation centers, or sports teams',
      'Open your own advanced physiotherapy clinic',
      'Academic teaching and research in medical universities',
      'Clinical researcher in physiotherapy and rehabilitation',
      'Consultant physiotherapist',
      'International career opportunities (USA, Canada, UAE, Australia, etc.)',
    ],
    admission: {
      exam: 'BPT degree + Entrance exams or Merit-based admission',
      availableIn: [
        'Medical universities with doctoral programs',
        'Specialized physiotherapy institutes',
        'International universities (USA, Canada, Australia)',
      ],
    },
    additionalInfo: [
      '🏃‍♀️ Advanced clinical expertise beyond undergraduate BPT level',
      '💪 Doctoral-level training with focus on research and specialization',
    ],
  },
  'BOT': {
    name: 'BOT',
    fullForm: 'Bachelor of Occupational Therapy',
    description: "It's an undergraduate professional degree focused on helping people regain independence in daily activities after illness, injury, or disability.",
    duration: '4 years (academic study + 6 months internship)',
    subjects: [
      'Anatomy',
      'Physiology',
      'Psychology',
      'Kinesiology',
      'Occupational Therapy Techniques',
      'Assistive Devices & Technology',
      'Ergonomics',
      'Pediatric Rehabilitation',
      'Geriatric Care',
      'Neurological Rehabilitation',
      'Orthopedic Rehabilitation',
      'Community-Based Rehabilitation',
      'Mental Health & Psychiatry',
    ],
    careerOptions: [
      'Occupational therapist in hospitals, rehabilitation centers, special schools, or clinics',
      'Private practice and home care services',
      'Research and teaching in occupational therapy colleges',
      'Pursue M.OT (Master of Occupational Therapy) for specialization',
      'Work with children with special needs',
      'Corporate ergonomics and workplace wellness consultant',
    ],
    admission: {
      exam: 'NEET-UG or State-level Occupational Therapy Entrance Exams',
      availableIn: [
        'Government occupational therapy colleges',
        'Private occupational therapy colleges',
        'Medical college OT programs',
        'Deemed universities',
      ],
    },
    additionalInfo: [
      '👐 Focus on helping people regain independence in daily life activities',
      '👐 Works with diverse populations from children to elderly',
    ],
  },
  'BASLP': {
    name: 'BASLP',
    fullForm: 'Bachelor of Audiology and Speech-Language Pathology',
    description: "It's an undergraduate degree focused on diagnosing and treating hearing, speech, and communication disorders.",
    duration: '4 years (academic study + 6 months internship)',
    subjects: [
      'Anatomy & Physiology of Speech & Hearing',
      'Audiology (Hearing Assessment)',
      'Hearing Aids & Assistive Devices',
      'Speech-Language Disorders',
      'Stuttering & Voice Disorders',
      'Language Development & Delays',
      'Rehabilitation Techniques',
      'Swallowing Disorders (Dysphagia)',
      'Psychology',
      'ENT Basics',
      'Communication Sciences',
      'Clinical Practicum',
    ],
    careerOptions: [
      'Audiologist or Speech-Language Pathologist in hospitals, rehabilitation centers, or special schools',
      'Start your own speech therapy or audiology clinic',
      'Research and teaching in audiology or speech therapy colleges',
      'Work in cochlear implant centers and ENT clinics',
      'Hearing aid companies and assistive technology firms',
      'Pursue M.ASLP (Master in Audiology & Speech-Language Pathology) for specialization',
    ],
    admission: {
      exam: 'NEET-UG or University-specific Entrance Exams',
      availableIn: [
        'Government ASLP colleges',
        'Private ASLP colleges',
        'Medical college ASLP programs',
        'Deemed universities',
      ],
    },
    additionalInfo: [
      '🎧 Focus on hearing assessment and rehabilitation',
      '🗣️ Helps people with speech, language, and communication challenges',
    ],
  },
  'B.Sc MLT': {
    name: 'B.Sc MLT',
    fullForm: 'Bachelor of Science in Medical Laboratory Technology',
    description: "It's an undergraduate degree focused on laboratory testing and diagnostics, crucial for modern healthcare.",
    duration: '3-4 years (depending on the college/university)',
    subjects: [
      'Hematology',
      'Clinical Biochemistry',
      'Microbiology',
      'Pathology',
      'Immunology',
      'Molecular Biology',
      'Blood Banking',
      'Clinical Pathology',
      'Lab Management',
      'Quality Control',
      'Clinical Research Techniques',
      'Diagnostic Technology',
    ],
    careerOptions: [
      'Medical laboratory technologist in hospitals, diagnostic labs, and research centers',
      'Blood bank or pathology lab specialist',
      'Teaching and research in medical technology',
      'Clinical trials and pharmaceutical research',
      'Pursue M.Sc in Medical Laboratory Technology or related fields',
      'International opportunities in healthcare diagnostics',
    ],
    admission: {
      exam: 'NEET-UG or State/University-level Entrance Exams',
      availableIn: [
        'Government medical colleges & paramedical institutes',
        'Private medical laboratory technology colleges',
        'Universities with paramedical programs',
        'Deemed universities',
      ],
    },
    additionalInfo: [
      '🧪 Essential role in disease diagnosis and patient care',
      '🔬 Hands-on laboratory training with modern diagnostic equipment',
    ],
  },
  'B.Sc Radiology & Imaging Technology': {
    name: 'B.Sc Radiology & Imaging Technology',
    fullForm: 'Bachelor of Science in Radiology & Imaging Technology',
    description: "It's an undergraduate degree focusing on medical imaging techniques used to diagnose and treat patients.",
    duration: '3-4 years (varies by university)',
    subjects: [
      'X-ray Imaging',
      'CT Scan Technology',
      'MRI (Magnetic Resonance Imaging)',
      'Ultrasound & Sonography',
      'Nuclear Medicine',
      'Radiographic Techniques',
      'Radiation Safety & Protection',
      'Patient Care & Positioning',
      'Anatomy & Physiology',
      'Pathology',
      'Imaging Equipment Handling',
      'Equipment Maintenance',
    ],
    careerOptions: [
      'Radiologic technologist / radiographer in hospitals, clinics, and diagnostic centers',
      'CT/MRI/Ultrasound technician specialist',
      'Research and teaching in radiology departments',
      'Pursue M.Sc Radiology or MRI/CT specialization courses',
      'Nuclear medicine technologist',
      'International opportunities in hospitals and imaging centers',
    ],
    admission: {
      exam: 'NEET-UG or State/University-level Entrance Exams',
      availableIn: [
        'Government medical colleges & paramedical institutes',
        'Private radiology & imaging colleges',
        'Universities with paramedical programs',
        'Deemed universities',
      ],
    },
    additionalInfo: [
      '🩻 Focus on non-invasive diagnostic imaging techniques',
      '📡 Work with advanced medical imaging equipment and technology',
    ],
  },
  'B.Sc Radiotherapy Technology': {
    name: 'B.Sc Radiotherapy Technology',
    fullForm: 'Bachelor of Science in Radiotherapy Technology',
    description: "It's an undergraduate degree focused on using radiation to treat cancer and other medical conditions, combining technology and patient care.",
    duration: '3-4 years (varies by college)',
    subjects: [
      'Radiotherapy Principles',
      'Radiation Physics',
      'Dosimetry',
      'Oncology',
      'Cancer Biology',
      'Anatomy & Physiology',
      'Linear Accelerators Operation',
      'Brachytherapy',
      'Imaging for Treatment Planning',
      'Radiation Safety & Protection',
      'Patient Care During Therapy',
      'Treatment Simulation',
    ],
    careerOptions: [
      'Radiotherapy technologist in hospitals or cancer centers',
      'Medical physicist assistant in oncology departments',
      'Research and clinical trials in cancer treatment',
      'Teaching and training in radiotherapy colleges',
      'Quality assurance in radiation oncology',
      'International opportunities in cancer hospitals and oncology centers',
    ],
    admission: {
      exam: 'NEET-UG or State/University-level Entrance Exams',
      availableIn: [
        'Government medical colleges & cancer institutes',
        'Private radiotherapy technology colleges',
        'Universities with paramedical programs',
        'Deemed universities',
      ],
    },
    additionalInfo: [
      '🎯 Focus on cancer treatment using radiation therapy',
      '💉 Work with advanced radiotherapy equipment like Linear Accelerators',
    ],
  },
  'B.Sc OTT': {
    name: 'B.Sc OTT',
    fullForm: 'Bachelor of Science in Operation Theatre Technology',
    description: "It's an undergraduate degree focused on perioperative care and assisting surgeons in the operating room.",
    duration: '3-4 years (depending on the college)',
    subjects: [
      'Surgical Procedures & Techniques',
      'Operating Room Protocols',
      'Sterilization Techniques',
      'Infection Control',
      'Aseptic Techniques',
      'Anaesthesia Basics',
      'Patient Monitoring',
      'Surgical Instruments & Equipment',
      'Emergency Procedures',
      'Critical Care',
      'ICU Management',
      'Pre & Post-Operative Care',
    ],
    careerOptions: [
      'Operation theatre technologist in hospitals, surgical centers, and ICUs',
      'Surgical assistant in specialized departments (Cardiac, Neuro, Orthopedic surgery)',
      'Teaching and training in surgical technology colleges',
      'Quality control in surgical departments',
      'Equipment maintenance specialist in OT',
      'International opportunities in advanced surgical centers',
    ],
    admission: {
      exam: 'NEET-UG or State/University-level Entrance Exams',
      availableIn: [
        'Government medical colleges & paramedical institutes',
        'Private operation theatre technology colleges',
        'Universities with paramedical programs',
        'Deemed universities',
      ],
    },
    additionalInfo: [
      '🏥 Focus on perioperative care and surgical team support',
      '🔪 Essential role in ensuring safe and sterile surgical procedures',
    ],
  },
  'B.Sc Anesthesia Technology': {
    name: 'B.Sc Anesthesia Technology',
    fullForm: 'Bachelor of Science in Anesthesia Technology',
    description: "It's an undergraduate degree focused on assisting anesthesiologists during surgeries and managing perioperative care.",
    duration: '3-4 years (varies by college)',
    subjects: [
      'Principles of Anesthesia',
      'Anesthetic Drugs & Pharmacology',
      'Patient Monitoring During Surgery',
      'Vital Signs Monitoring',
      'Airway Management',
      'Ventilator Management',
      'ICU Procedures',
      'Emergency Response',
      'Critical Care',
      'Pain Management',
      'Sterilization Techniques',
      'Infection Control',
    ],
    careerOptions: [
      'Anesthesia technician in hospitals, operation theatres, and ICUs',
      'Critical care and emergency department assistant',
      'Teaching and training in anesthesia technology colleges',
      'Ventilator specialist in ICU',
      'Pain management clinic technician',
      'International opportunities in hospitals and surgical centers',
    ],
    admission: {
      exam: 'NEET-UG or State/University-level Entrance Exams',
      availableIn: [
        'Government medical colleges & paramedical institutes',
        'Private anesthesia technology colleges',
        'Universities with paramedical programs',
        'Deemed universities',
      ],
    },
    additionalInfo: [
      '💉 Focus on perioperative anesthesia support and patient safety',
      '🩺 Essential role in monitoring patients during surgical procedures',
    ],
  },
  'B.Sc CCT': {
    name: 'B.Sc CCT',
    fullForm: 'Bachelor of Science in Cardiac Care Technology',
    description: "It's an undergraduate program focused on diagnosing, monitoring, and assisting in the treatment of heart-related conditions.",
    duration: '3-4 years (depends on the college)',
    subjects: [
      'Cardiac Anatomy & Physiology',
      'ECG (Electrocardiography)',
      'Echocardiography',
      'Cardiac Catheterization',
      'Pacemaker Management',
      'Defibrillator Management',
      'ICU & CCU Protocols',
      'Hemodynamics',
      'Cardiac Rehabilitation',
      'Patient Monitoring',
      'Emergency Response',
      'BLS/ACLS (Basic & Advanced Life Support)',
    ],
    careerOptions: [
      'Cardiac care technologist in hospitals, cardiac centers, and ICU/CCU',
      'ECG/Echo technician specialist',
      'Cardiac catheterization lab assistant',
      'Teaching and training in cardiac care technology colleges',
      'Pacemaker clinic technician',
      'International opportunities in heart institutes and cardiac hospitals',
    ],
    admission: {
      exam: 'NEET-UG or State/University-level Entrance Exams',
      availableIn: [
        'Government medical colleges & cardiac institutes',
        'Private cardiac care technology colleges',
        'Universities with paramedical programs',
        'Deemed universities',
      ],
    },
    additionalInfo: [
      '❤️‍🩹 Focus on diagnosing and treating heart-related conditions',
      '❤️‍🩹 Essential role in cardiac emergency response and patient monitoring',
    ],
  },
  'B.Sc CVT': {
    name: 'B.Sc CVT',
    fullForm: 'Bachelor of Science in Cardiovascular Technology',
    description: "It's an undergraduate degree focused on assisting in the diagnosis and treatment of cardiovascular (heart and blood vessel) diseases using advanced technology.",
    duration: '3-4 years (varies by university)',
    subjects: [
      'Cardiac Anatomy & Physiology',
      'Electrocardiography (ECG)',
      'Echocardiography',
      'Cardiac Catheterization',
      'Angiography',
      'Hemodynamic Monitoring',
      'Pacemaker & Implantable Device Management',
      'Cardiac Rehabilitation',
      'Critical Care',
      'Emergency Protocols',
      'Lab & Instrumentation Handling',
      'Cardiovascular Diagnostics',
    ],
    careerOptions: [
      'Cardiovascular technologist in hospitals, cardiac care centers, and cath labs',
      'Echocardiography or ECG technician specialist',
      'Cardiac catheterization lab assistant',
      'Angiography specialist',
      'Teaching, training, or research in cardiovascular technology',
      'International opportunities in heart institutes and advanced cardiac centers',
    ],
    admission: {
      exam: 'NEET-UG or State/University-level Entrance Exams',
      availableIn: [
        'Government medical colleges & cardiac institutes',
        'Private cardiovascular technology colleges',
        'Universities with paramedical programs',
        'Deemed universities',
      ],
    },
    additionalInfo: [
      '❤️‍🩺 Focus on advanced cardiovascular diagnostics and treatment support',
      '❤️‍🩺 Work with cutting-edge cardiac technology and imaging equipment',
    ],
  },
  'B.Sc Perfusion Technology': {
    name: 'B.Sc Perfusion Technology',
    fullForm: 'Bachelor of Science in Perfusion Technology',
    description: "It's an undergraduate program focused on operating and managing heart-lung machines and other equipment during cardiac surgeries. Perfusionists play a crucial role in open-heart surgeries and cardiopulmonary procedures.",
    duration: '3-4 years (depending on the institute)',
    subjects: [
      'Anatomy & Physiology',
      'Cardiovascular System',
      'Cardiac Surgery Basics',
      'Principles of Perfusion',
      'Heart-Lung Machine Operation',
      'ECMO (Extracorporeal Membrane Oxygenation)',
      'Patient Monitoring During Surgery',
      'Blood Conservation Techniques',
      'Critical Care',
      'Sterilization & Safety Protocols',
      'Cardiopulmonary Bypass',
      'Hemodynamics',
    ],
    careerOptions: [
      'Clinical perfusionist in cardiac surgery centers, hospitals, and heart institutes',
      'Assist in open-heart surgeries and bypass surgeries',
      'ECMO specialist in critical care units',
      'Teaching and research in perfusion technology',
      'Blood conservation specialist',
      'International opportunities in cardiac care centers and specialized hospitals',
    ],
    admission: {
      exam: 'NEET-UG or State/University-level Entrance Exams',
      availableIn: [
        'Government medical colleges & cardiac institutes',
        'Private perfusion technology colleges',
        'Universities with paramedical programs',
        'Deemed universities',
      ],
    },
    additionalInfo: [
      '❤️‍⚕️ Focus on operating heart-lung machines during cardiac surgeries',
      '💉 Critical role in open-heart surgery and cardiopulmonary bypass procedures',
    ],
  },
  'B.Sc Optometry': {
    name: 'B.Sc Optometry',
    fullForm: 'Bachelor of Science in Optometry',
    description: "It's an undergraduate degree focused on eye care, vision correction, and diagnosing eye-related disorders.",
    duration: '3-4 years (depending on the university)',
    subjects: [
      'Anatomy & Physiology of the Eye',
      'Optics & Visual Sciences',
      'Refraction Techniques',
      'Contact Lenses',
      'Ophthalmic Dispensing',
      'Pediatric Optometry',
      'Geriatric Optometry',
      'Diagnosis of Eye Diseases',
      'Low Vision Rehabilitation',
      'Instrumentation & Eye Testing',
      'Vision Therapy',
      'Ocular Pharmacology',
    ],
    careerOptions: [
      'Optometrist in hospitals, clinics, optical stores, or eye institutes',
      'Vision therapist and low-vision specialist',
      'Research and teaching in optometry colleges',
      'Clinical optometrist in ophthalmology departments',
      'Pursue M.Optometry for specialization in Vision Science, Pediatric Optometry, etc.',
      'International opportunities in hospitals, vision centers, and eye research labs',
    ],
    admission: {
      exam: 'NEET-UG or State/University-level Entrance Exams',
      availableIn: [
        'Government optometry colleges',
        'Private optometry colleges',
        'Medical college optometry programs',
        'Deemed universities',
      ],
    },
    additionalInfo: [
      '👁️ Focus on eye care, vision testing, and correction',
      '🔬 Essential role in preventing and managing vision problems',
    ],
  },
  'B.Sc RDT': {
    name: 'B.Sc RDT',
    fullForm: 'Bachelor of Science in Renal Dialysis Technology',
    description: "It's an undergraduate program focused on kidney care and dialysis treatment, training professionals to operate dialysis machines and assist in managing patients with kidney-related issues.",
    duration: '3-4 years (depends on the institute)',
    subjects: [
      'Anatomy & Physiology of the Renal System',
      'Principles of Dialysis',
      'Hemodialysis',
      'Peritoneal Dialysis',
      'Dialysis Machine Operation',
      'Water Treatment Systems',
      'Equipment Maintenance',
      'Patient Care During Dialysis',
      'Vital Signs Monitoring',
      'Emergency Management',
      'Renal Pathology',
      'Pharmacology',
      'Infection Control',
    ],
    careerOptions: [
      'Dialysis technician in hospitals, kidney care centers, and specialty clinics',
      'Patient education and counseling in renal care',
      'Research and training in nephrology and dialysis technology',
      'Quality control in dialysis units',
      'Water treatment specialist for dialysis',
      'International opportunities in dialysis centers and hospitals',
    ],
    admission: {
      exam: 'NEET-UG or State/University-level Entrance Exams',
      availableIn: [
        'Government medical colleges & nephrology institutes',
        'Private renal dialysis technology colleges',
        'Universities with paramedical programs',
        'Deemed universities',
      ],
    },
    additionalInfo: [
      '💧 Focus on kidney care and life-saving dialysis treatment',
      '🩺 Essential role in managing patients with chronic kidney disease',
    ],
  },
  'B.Sc PA': {
    name: 'B.Sc PA',
    fullForm: 'Bachelor of Science in Physician Assistant',
    description: "It's an undergraduate program that trains students to assist doctors in clinical practice, patient care, and medical procedures. Physician assistants act as mid-level healthcare professionals under the supervision of physicians.",
    duration: '3-4 years (depends on the institute)',
    subjects: [
      'Anatomy',
      'Physiology',
      'Pathology',
      'Pharmacology',
      'Microbiology',
      'Clinical Medicine',
      'Surgery',
      'Pediatrics',
      'Obstetrics & Gynecology',
      'Patient Examination & History Taking',
      'Basic Medical Procedures',
      'Emergency Care',
      'Hospital Administration',
      'Communication Skills',
      'Patient Counseling',
    ],
    careerOptions: [
      'Physician assistant in hospitals, clinics, and specialty centers',
      'Assist in patient management, minor procedures, and follow-ups',
      'Work in rural healthcare and telemedicine',
      'Emergency department assistant',
      'Pursue postgraduate PA programs or MPH (Masters in Public Health)',
      'International opportunities in hospitals that employ physician assistants',
    ],
    admission: {
      exam: 'NEET-UG or State/University-level Entrance Exams',
      availableIn: [
        'Government medical colleges & paramedical institutes',
        'Private physician assistant colleges',
        'Universities with paramedical programs',
        'Deemed universities',
      ],
    },
    additionalInfo: [
      '🩺 Mid-level healthcare professionals working under physician supervision',
      '💊 Essential role in extending medical care and improving access to healthcare',
    ],
  },
  'B.Sc RCT': {
    name: 'B.Sc RCT',
    fullForm: 'Bachelor of Science in Respiratory Care Technology',
    description: "It's an undergraduate program focused on the assessment, treatment, and management of patients with respiratory and cardiopulmonary disorders. Respiratory care technologists play a critical role in ICUs, emergency care, and chronic respiratory management.",
    duration: '3-4 years (depends on the institute)',
    subjects: [
      'Anatomy & Physiology of Respiratory System',
      'Cardiovascular System',
      'Pulmonary Function Testing',
      'Ventilator Management',
      'Oxygen Therapy',
      'Critical Care Protocols',
      'ICU Procedures',
      'Emergency Response',
      'ABG Analysis (Arterial Blood Gas)',
      'Spirometry',
      'Sleep Studies',
      'Patient Care & Rehabilitation',
      'Respiratory Therapy Techniques',
    ],
    careerOptions: [
      'Respiratory care technologist in hospitals, ICUs, and emergency departments',
      'Pulmonary rehabilitation centers specialist',
      'Home care services for chronic respiratory patients',
      'Sleep lab technician',
      'Teaching, training, and research in respiratory care',
      'International opportunities in hospitals and specialized respiratory care centers',
    ],
    admission: {
      exam: 'NEET-UG or State/University-level Entrance Exams',
      availableIn: [
        'Government medical colleges & respiratory care institutes',
        'Private respiratory care technology colleges',
        'Universities with paramedical programs',
        'Deemed universities',
      ],
    },
    additionalInfo: [
      '🌬️ Focus on respiratory and cardiopulmonary patient care',
      '🫁 Critical role in ICU ventilation and emergency respiratory management',
    ],
  },
  'B.Sc EMT': {
    name: 'B.Sc EMT',
    fullForm: 'Bachelor of Science in Emergency Medicine Technology',
    description: "It's an undergraduate program focused on pre-hospital and in-hospital emergency care, preparing students to manage critical, life-threatening situations efficiently.",
    duration: '3-4 years (depending on the college/university)',
    subjects: [
      'Anatomy',
      'Physiology',
      'Pathology',
      'Pharmacology',
      'Emergency Medicine',
      'Trauma Management',
      'First Aid',
      'CPR (Cardiopulmonary Resuscitation)',
      'ACLS/BLS (Advanced/Basic Life Support)',
      'Critical Care',
      'Accident & Disaster Management',
      'Patient Assessment & Triage',
      'Emergency Equipment Handling',
      'Ambulance Services & Pre-hospital Care',
      'Hospital Emergency Protocols',
    ],
    careerOptions: [
      'Emergency medical technologist in hospitals, trauma centers, or ambulance services',
      'Disaster management and rescue operations specialist',
      'Emergency department coordinator',
      'Teaching, training, and research in emergency care',
      'Flight paramedic or ambulance crew leader',
      'International opportunities in emergency departments and pre-hospital care systems',
    ],
    admission: {
      exam: 'NEET-UG or State/University-level Entrance Exams',
      availableIn: [
        'Government medical colleges & emergency medicine institutes',
        'Private emergency medicine technology colleges',
        'Universities with paramedical programs',
        'Deemed universities',
      ],
    },
    additionalInfo: [
      '🚑 Focus on pre-hospital and in-hospital emergency care',
      '🩺 Essential role in saving lives during critical and life-threatening situations',
    ],
  },
  'B.Sc NMT': {
    name: 'B.Sc NMT',
    fullForm: 'Bachelor of Science in Nuclear Medicine Technology',
    description: "It's an undergraduate program focused on using radioactive materials and imaging techniques to diagnose and treat diseases. Nuclear medicine technologists work closely with nuclear medicine physicians and radiologists.",
    duration: '3-4 years (varies by institute)',
    subjects: [
      'Anatomy',
      'Physiology',
      'Biochemistry',
      'Pathology',
      'Radiopharmacy',
      'Radioactive Isotopes Handling',
      'Nuclear Imaging Techniques',
      'PET (Positron Emission Tomography)',
      'SPECT (Single Photon Emission CT)',
      'Gamma Camera',
      'Radiation Safety & Protection',
      'Quality Control',
      'Patient Preparation',
      'Diagnostic & Therapeutic Procedures',
      'Radionuclides',
    ],
    careerOptions: [
      'Nuclear medicine technologist in hospitals, diagnostic centers, and research labs',
      'PET/SPECT scanner operator',
      'Radiopharmaceutical lab assistant',
      'Research and teaching in nuclear medicine and imaging',
      'Quality assurance specialist in nuclear medicine',
      'International opportunities in hospitals, cancer centers, and diagnostic labs',
    ],
    admission: {
      exam: 'NEET-UG or State/University-level Entrance Exams',
      availableIn: [
        'Government medical colleges & nuclear medicine institutes',
        'Private nuclear medicine technology colleges',
        'Universities with paramedical programs',
        'Deemed universities',
      ],
    },
    additionalInfo: [
      '☢️ Focus on using radioactive materials for diagnosis and treatment',
      '🩺 Work with advanced nuclear imaging technology like PET and SPECT',
    ],
  },
  'B.Sc Neurophysiology Technology': {
    name: 'B.Sc Neurophysiology Technology',
    fullForm: 'Bachelor of Science in Neurophysiology Technology',
    description: "It's an undergraduate program focused on the study, recording, and analysis of the nervous system's electrical activity. Neurophysiology technologists assist in diagnosing neurological disorders using specialized equipment.",
    duration: '3-4 years (depending on the university/institute)',
    subjects: [
      'Anatomy & Physiology of the Nervous System',
      'Electroencephalography (EEG)',
      'Electromyography (EMG)',
      'Nerve Conduction Studies (NCS)',
      'Polysomnography (Sleep Studies)',
      'Evoked Potentials',
      'Neurodiagnostic Instrumentation',
      'Neurological Monitoring',
      'Patient Preparation & Care',
      'Safety During Neurodiagnostic Procedures',
      'Clinical Neurology',
      'Neuroanatomy',
    ],
    careerOptions: [
      'Neurophysiology technologist in hospitals, neurology centers, and diagnostic labs',
      'EEG/EMG/NCS lab operator specialist',
      'Sleep lab technician (Polysomnography)',
      'Teaching, training, and research in neurophysiology',
      'Neurodiagnostic equipment specialist',
      'International opportunities in neurology and neuroscience centers',
    ],
    admission: {
      exam: 'NEET-UG or State/University-level Entrance Exams',
      availableIn: [
        'Government medical colleges & neurology institutes',
        'Private neurophysiology technology colleges',
        'Universities with paramedical programs',
        'Deemed universities',
      ],
    },
    additionalInfo: [
      '🧠 Focus on studying and recording nervous system electrical activity',
      '⚡ Essential role in diagnosing neurological disorders using specialized equipment',
    ],
  },
  'B.Sc Forensic Science': {
    name: 'B.Sc Forensic Science',
    fullForm: 'Bachelor of Science in Forensic Science',
    description: "It's an undergraduate program focused on the application of science to criminal investigations and legal processes, helping law enforcement agencies solve crimes through scientific methods.",
    duration: '3 years (typically)',
    subjects: [
      'Forensic Biology',
      'Forensic Chemistry',
      'Forensic Toxicology',
      'Crime Scene Investigation',
      'Fingerprint Analysis',
      'DNA Profiling',
      'Forensic Serology',
      'Forensic Anthropology',
      'Digital Forensics',
      'Law & Criminal Procedures',
      'Evidence Handling',
      'Laboratory Techniques',
      'Trace Evidence Analysis',
    ],
    careerOptions: [
      'Forensic scientist in government labs, police departments, and crime investigation agencies',
      'Crime scene investigator (CSI)',
      'DNA analyst specialist',
      'Toxicologist or fingerprint examiner',
      'Digital forensics expert',
      'Teaching, research, and private forensic consulting',
      'International opportunities in forensic labs, law enforcement, and research institutes',
    ],
    admission: {
      exam: 'State/University-level Entrance Exams or Merit-based',
      availableIn: [
        'Government forensic science colleges',
        'Private forensic science colleges',
        'Universities with forensic science programs',
        'Deemed universities',
      ],
    },
    additionalInfo: [
      '🕵️‍♂️ Focus on solving crimes through scientific investigation methods',
      '🔬 Essential role in law enforcement and criminal justice system',
    ],
  },
  'B.Sc P&O': {
    name: 'B.Sc P&O',
    fullForm: 'Bachelor of Science in Prosthetics & Orthotics',
    description: "It's an undergraduate program focused on designing, fitting, and maintaining prosthetic limbs and orthopedic supports for patients with physical disabilities or injuries. Professionals in this field help restore mobility and improve quality of life.",
    duration: '3-4 years (depending on the institute)',
    subjects: [
      'Anatomy',
      'Physiology',
      'Biomechanics',
      'Orthotic Devices (Braces, Supports, Splints)',
      'Prosthetic Devices (Artificial Limbs & Joints)',
      'Assistive Devices',
      'Gait Analysis',
      'Patient Assessment',
      'Rehabilitation Techniques',
      'Materials Science',
      'Device Fabrication',
      'Maintenance & Repair',
    ],
    careerOptions: [
      'Prosthetist/Orthotist in hospitals, rehabilitation centers, and clinics',
      'Assistive device designer and fitter',
      'Gait analysis specialist',
      'Teaching, research, and rehabilitation consulting',
      'Custom orthotic and prosthetic manufacturer',
      'International opportunities in rehabilitation centers and disability support services',
    ],
    admission: {
      exam: 'NEET-UG or State/University-level Entrance Exams',
      availableIn: [
        'Government medical colleges & rehabilitation institutes',
        'Private prosthetics & orthotics colleges',
        'Universities with paramedical programs',
        'Deemed universities',
      ],
    },
    additionalInfo: [
      '🦾 Focus on designing and fitting prosthetic limbs for amputees',
      '🦿 Essential role in restoring mobility and improving quality of life for disabled individuals',
    ],
  },
  'B.Sc Clinical Psychology': {
    name: 'B.Sc Clinical Psychology',
    fullForm: 'Bachelor of Science in Clinical Psychology',
    description: "It's an undergraduate program focused on understanding human behavior, mental health, and psychological disorders, preparing students to work in counseling, therapy, and mental health assessment.",
    duration: '3 years (typically)',
    subjects: [
      'Introduction to Psychology',
      'Cognitive Psychology',
      'Behavioral Psychology',
      'Abnormal Psychology',
      'Clinical Assessment & Diagnosis',
      'Counseling Techniques',
      'Psychotherapy Basics',
      'Research Methodology',
      'Statistics',
      'Psychological Testing',
      'Mental Health Care',
      'Rehabilitation Psychology',
      'Community Psychology',
    ],
    careerOptions: [
      'Assistant psychologist or counselor in hospitals, mental health clinics, schools, or NGOs',
      'Work in psychiatric rehabilitation centers',
      'Research and teaching in psychology departments',
      'Pursue M.Sc Clinical Psychology for professional psychologist licensure',
      'HR and corporate mental wellness programs',
      'Community mental health projects and awareness campaigns',
    ],
    admission: {
      exam: 'State/University-level Entrance Exams or Merit-based',
      availableIn: [
        'Government psychology colleges',
        'Private psychology colleges',
        'Universities with psychology programs',
        'Deemed universities',
      ],
    },
    additionalInfo: [
      '🧠 Focus on understanding mental health and psychological disorders',
      '💬 Essential role in counseling, therapy, and mental health support',
    ],
  },
  'B.Sc Nutrition & Dietetics': {
    name: 'B.Sc Nutrition & Dietetics',
    fullForm: 'Bachelor of Science in Nutrition & Dietetics',
    description: "It's an undergraduate program focused on food, nutrition, and diet management to promote health, prevent disease, and manage medical conditions through proper nutrition.",
    duration: '3-4 years (depending on the university)',
    subjects: [
      'Human Anatomy & Physiology',
      'Biochemistry',
      'Nutrition Science',
      'Diet Planning',
      'Therapeutic Diets',
      'Public Health Nutrition',
      'Food Science',
      'Food Safety & Hygiene',
      'Clinical Nutrition',
      'Diabetes & Obesity Management',
      'Cardiovascular Nutrition',
      'Community Nutrition',
      'Research Methodology',
      'Nutrition Counseling',
    ],
    careerOptions: [
      'Dietitian/Nutritionist in hospitals, wellness centers, gyms, or clinics',
      'Clinical nutritionist in healthcare settings',
      'Research and teaching in nutrition science',
      'Corporate wellness consultant',
      'Food industry nutritionist',
      'Pursue M.Sc Nutrition & Dietetics or Clinical Dietetics',
      'International opportunities in hospitals, health organizations, and food research centers',
    ],
    admission: {
      exam: 'State/University-level Entrance Exams or Merit-based',
      availableIn: [
        'Government nutrition & dietetics colleges',
        'Private nutrition & dietetics colleges',
        'Universities with nutrition programs',
        'Deemed universities',
      ],
    },
    additionalInfo: [
      '🥗 Focus on promoting health through proper nutrition and diet management',
      '🩺 Essential role in preventing and managing diseases through dietary interventions',
    ],
  },
  'CSE': {
    name: 'CSE',
    fullForm: 'Computer Science & Engineering',
    description: "It's a branch of engineering that focuses on the design, development, and application of computer systems, software, and hardware.",
    duration: '4 years (B.Tech/B.E.)',
    subjects: [
      'Programming Languages (C, C++, Java, Python)',
      'Data Structures & Algorithms',
      'Database Management Systems (DBMS)',
      'Operating Systems',
      'Computer Networks',
      'Software Engineering',
      'Computer Architecture',
      'Artificial Intelligence & Machine Learning',
      'Cybersecurity',
      'Cloud Computing',
      'Web Development',
      'App Development',
    ],
    careerOptions: [
      'Software Developer / Engineer',
      'AI/ML Engineer',
      'Cybersecurity Analyst',
      'Web Developer',
      'App Developer',
      'Cloud Engineer',
      'Data Scientist',
      'Game Developer',
      'Researcher in computer science',
    ],
    admission: {
      exam: 'JEE Main or State Engineering Entrance Exams',
      availableIn: [
        'IITs, NITs, IIITs',
        'Government engineering colleges',
        'Private engineering colleges',
        'Deemed universities',
      ],
    },
    additionalInfo: [
      '💻 High demand in IT industry with excellent career prospects',
      '💻 Skills in logical thinking, problem-solving, and software development',
    ],
  },
  'AI & ML': {
    name: 'AI & ML',
    fullForm: 'Artificial Intelligence & Machine Learning',
    description: "It's a specialized field of computer science that enables machines to mimic human intelligence through learning, reasoning, decision-making, and problem-solving. Machine Learning is a subset of AI that allows systems to learn from data and improve automatically without being explicitly programmed.",
    duration: '4 years (B.Tech/B.E.) or Specialization courses',
    subjects: [
      'Python Programming',
      'Mathematics (Linear Algebra, Probability, Calculus)',
      'Statistics',
      'Data Structures',
      'Machine Learning Algorithms',
      'Deep Learning',
      'Natural Language Processing (NLP)',
      'Computer Vision',
      'Supervised Learning',
      'Unsupervised Learning',
      'Reinforcement Learning',
      'Neural Networks',
    ],
    careerOptions: [
      'Machine Learning Engineer',
      'Data Scientist',
      'AI Engineer',
      'NLP Engineer',
      'Computer Vision Engineer',
      'Robotics Engineer',
      'Research Scientist in AI/ML',
      'Deep Learning Specialist',
    ],
    admission: {
      exam: 'JEE Main or State Engineering Entrance Exams',
      availableIn: [
        'IITs, NITs, IIITs',
        'Government engineering colleges',
        'Private engineering colleges',
        'Deemed universities',
        'Specialized AI/ML certification programs',
      ],
    },
    additionalInfo: [
      '🧠 AI is the goal, ML is the method to achieve intelligent systems',
      '🤖 High-growth field with applications in self-driving cars, face recognition, chatbots, and more',
    ],
  },
  'Data Science': {
    name: 'Data Science',
    fullForm: 'Data Science',
    description: "It's the field that uses data, statistics, and programming to extract meaningful insights and help organizations make better decisions. Data Science combines collecting data, analyzing it, and finding useful insights to drive business outcomes.",
    duration: '4 years (B.Tech/B.E.) or Specialization courses',
    subjects: [
      'Python or R Programming',
      'Statistics & Probability',
      'Linear Algebra',
      'Data Visualization',
      'SQL (Database Queries)',
      'Machine Learning',
      'Big Data Tools (Hadoop, Spark)',
      'Data Collection & Cleaning',
      'Exploratory Data Analysis (EDA)',
      'Model Building & Evaluation',
      'Predictive Analytics',
      'Data Mining',
    ],
    careerOptions: [
      'Data Scientist',
      'Data Analyst',
      'Business Analyst',
      'Machine Learning Engineer',
      'Data Engineer',
      'AI Researcher',
      'Business Intelligence Analyst',
      'Analytics Consultant',
    ],
    admission: {
      exam: 'JEE Main or State Engineering Entrance Exams',
      availableIn: [
        'IITs, NITs, IIITs',
        'Government engineering colleges',
        'Private engineering colleges',
        'Deemed universities',
        'Specialized Data Science certification programs',
      ],
    },
    additionalInfo: [
      '📊 Combines statistics, programming, and business knowledge',
      '📈 High demand across industries: IT, banking, healthcare, e-commerce, and more',
    ],
  },
  'Robotics': {
    name: 'Robotics',
    fullForm: 'Robotics Engineering',
    description: "It's a branch of engineering that deals with designing, building, programming, and operating robots. Robotics combines computer science, mechanical engineering, electronics, and artificial intelligence to create machines that can sense, think, and act.",
    duration: '4 years (B.Tech/B.E.)',
    subjects: [
      'Programming (Python, C++, ROS)',
      'Embedded Systems',
      'Control Systems',
      'Microprocessors & Microcontrollers',
      'Artificial Intelligence & Machine Learning',
      'Computer Vision',
      'Electronics Basics',
      'Sensors & Actuators',
      'Robot Operating System (ROS)',
      'Automation',
      'Kinematics & Dynamics',
      'Signal Processing',
    ],
    careerOptions: [
      'Robotics Engineer',
      'Automation Engineer',
      'Embedded Systems Engineer',
      'AI Robotics Engineer',
      'Control Systems Engineer',
      'Research Scientist in Robotics',
      'Autonomous Vehicle Engineer',
      'Drone Engineer',
    ],
    admission: {
      exam: 'JEE Main or State Engineering Entrance Exams',
      availableIn: [
        'IITs, NITs, IIITs',
        'Government engineering colleges',
        'Private engineering colleges',
        'Deemed universities',
        'Specialized robotics institutes',
      ],
    },
    additionalInfo: [
      '🤖 Combines computer science, mechanical, electronics, and AI',
      '🤖 Applications in manufacturing, space, defense, healthcare, automotive, and more',
    ],
  },
  'IoT': {
    name: 'IoT',
    fullForm: 'Internet of Things',
    description: "It's a network of physical devices connected to the internet that collect and exchange data. IoT enables smart devices to communicate with each other through the internet, creating intelligent systems for homes, cities, industries, and more.",
    duration: '4 years (B.Tech/B.E.) or Specialization courses',
    subjects: [
      'Programming (C, C++, Python)',
      'Embedded Systems',
      'Networking Basics',
      'Cloud Computing',
      'Cybersecurity',
      'Data Analytics',
      'Electronics Fundamentals',
      'Microcontrollers (Arduino, ESP32, Raspberry Pi)',
      'MQTT Protocol',
      'Sensors & Actuators',
      'Wireless Communication',
      'IoT Architecture',
    ],
    careerOptions: [
      'IoT Engineer',
      'Embedded Systems Engineer',
      'IoT Solutions Architect',
      'Cloud Engineer (IoT focused)',
      'IoT Security Specialist',
      'Smart Home/City Developer',
      'Industrial IoT (IIoT) Engineer',
      'IoT Data Analyst',
    ],
    admission: {
      exam: 'JEE Main or State Engineering Entrance Exams',
      availableIn: [
        'IITs, NITs, IIITs',
        'Government engineering colleges',
        'Private engineering colleges',
        'Deemed universities',
        'Specialized IoT certification programs',
      ],
    },
    additionalInfo: [
      '🌐 Smart devices that communicate through the internet',
      '🌐 Applications in smart homes, healthcare, agriculture, smart cities, and industrial automation',
    ],
  },
  'IT': {
    name: 'IT',
    fullForm: 'Information Technology',
    description: "It's a branch of engineering and computer science that focuses on storing, retrieving, transmitting, and securing information using computers and networks. IT manages and uses technology to handle information efficiently.",
    duration: '4 years (B.Tech/B.E.)',
    subjects: [
      'Networking (LAN, WAN, VPN)',
      'Database Management (SQL, Oracle, MongoDB)',
      'Software Development',
      'Web & Mobile Development',
      'Cybersecurity',
      'Cloud Computing',
      'IT Support & Helpdesk',
      'Programming (Java, Python, C#)',
      'Operating Systems',
      'DevOps (Docker, Jenkins, Kubernetes)',
      'Data Structures & Algorithms',
      'System Administration',
    ],
    careerOptions: [
      'Network Engineer / Administrator',
      'Database Administrator (DBA)',
      'IT Support / Helpdesk Specialist',
      'Cybersecurity Analyst / Ethical Hacker',
      'Cloud Solutions Architect',
      'Web Developer / App Developer',
      'Systems Analyst',
      'DevOps Engineer',
    ],
    admission: {
      exam: 'JEE Main or State Engineering Entrance Exams',
      availableIn: [
        'IITs, NITs, IIITs',
        'Government engineering colleges',
        'Private engineering colleges',
        'Deemed universities',
      ],
    },
    additionalInfo: [
      '🌐 Focus on managing and using technology to handle information efficiently',
      '🌐 High demand across IT services, banking, telecom, healthcare, e-commerce, and government sectors',
    ],
  },
  'Aerospace Engineering': {
    name: 'Aerospace Engineering',
    fullForm: 'Aerospace Engineering',
    description: "It's the branch of engineering that deals with the design, development, testing, and maintenance of aircraft, spacecraft, and missiles. It covers both aeronautics (aircraft) and astronautics (spacecraft).",
    duration: '4 years (B.Tech/B.E.)',
    subjects: [
      'Aerodynamics',
      'Flight Mechanics & Dynamics',
      'Propulsion Systems',
      'Spacecraft Design & Orbital Mechanics',
      'Avionics & Control Systems',
      'Thermodynamics & Fluid Mechanics',
      'Materials & Structural Engineering',
      'CAD & Simulation',
    ],
    careerOptions: [
      'Aerospace Engineer',
      'Aeronautical Engineer',
      'Spacecraft Design Engineer',
      'Propulsion / Jet Engine Engineer',
      'Avionics Engineer',
      'Flight Test Engineer',
      'Research Scientist (space & defense)',
    ],
    admission: {
      exam: 'JEE Main or State Engineering Entrance Exams',
      availableIn: [
        'IITs, NITs, IIITs',
        'Government engineering colleges',
        'Private engineering colleges',
        'Deemed universities',
      ],
    },
    additionalInfo: [
      '🚀 Covers both aeronautics (aircraft) and astronautics (spacecraft)',
      '✈️ Industries: Airlines, space agencies (NASA, ISRO, ESA), defense, aircraft & spacecraft manufacturing',
    ],
  },
  'Aeronautical Engineering': {
    name: 'Aeronautical Engineering',
    fullForm: 'Aeronautical Engineering',
    description: "It's the branch of engineering that focuses on the design, development, testing, and maintenance of aircraft and related systems. It deals with aerodynamics, aircraft structures, propulsion systems, flight mechanics, and avionics.",
    duration: '4 years (B.Tech/B.E.)',
    subjects: [
      'Aerodynamics',
      'Flight Mechanics',
      'Aircraft Structures',
      'Propulsion Systems',
      'Avionics',
      'Thermodynamics & Fluid Mechanics',
      'Control Systems',
      'Aircraft Design Project / CAD',
    ],
    careerOptions: [
      'Aeronautical Engineer',
      'Aerospace Engineer',
      'Design Engineer',
      'Flight Test Engineer',
      'Propulsion Engineer',
      'Avionics Engineer',
      'Maintenance Engineer',
      'Research Scientist',
    ],
    admission: {
      exam: 'JEE Main or State Engineering Entrance Exams',
      availableIn: [
        'IITs, NITs, IIITs',
        'Government engineering colleges',
        'Private engineering colleges',
        'Deemed universities',
      ],
    },
    additionalInfo: [
      '✈️ Focus on aircraft design, aerodynamics, and propulsion',
      '🛩️ Industries: Airlines, defense & aerospace, aircraft manufacturing, space organizations, UAV/drone companies',
    ],
  },
  'Cybersecurity': {
    name: 'Cybersecurity',
    fullForm: 'Cybersecurity',
    description: "It's the practice and engineering discipline of protecting computers, networks, programs, and data from unauthorized access, attacks, or damage. Cybersecurity keeps digital systems safe.",
    duration: '4 years (B.Tech/B.E.) or Specialization courses',
    subjects: [
      'Networking & Protocols (TCP/IP, HTTP, DNS)',
      'Operating Systems Security (Linux, Windows)',
      'Programming (Python, C, Java)',
      'Cryptography & Encryption',
      'Web & Mobile Security',
      'Malware Analysis',
      'Ethical Hacking Techniques',
      'Network Security (Firewalls, VPNs)',
      'Application Security',
      'Cloud Security',
      'Cyber Forensics',
    ],
    careerOptions: [
      'Cybersecurity Analyst',
      'Ethical Hacker / Penetration Tester',
      'Network Security Engineer',
      'Cloud Security Architect',
      'Cyber Forensics Expert',
      'Security Operations Center (SOC) Analyst',
      'Information Security Manager',
    ],
    admission: {
      exam: 'JEE Main or State Engineering Entrance Exams',
      availableIn: [
        'IITs, NITs, IIITs',
        'Government engineering colleges',
        'Private engineering colleges',
        'Deemed universities',
        'Specialized cybersecurity certification programs',
      ],
    },
    additionalInfo: [
      '🔐 Focus on keeping digital systems, networks, and data safe',
      '🛡️ High demand across banking, IT, government, and defense sectors',
    ],
  },
  'Mechatronics': {
    name: 'Mechatronics',
    fullForm: 'Mechatronics Engineering',
    description: "It's an interdisciplinary branch that combines Mechanical Engineering, Electronics & Electrical Engineering, and Computer Science. It focuses on designing smart automated systems, robots, and intelligent machines.",
    duration: '4 years (B.Tech/B.E.)',
    subjects: [
      'Mechanics & Dynamics',
      'Electronics & Control Systems',
      'Robotics & Automation',
      'Embedded Systems & Microcontrollers',
      'Computer Programming & AI Basics',
      'Hydraulics & Pneumatics',
      'Mechatronic System Design & Simulation',
      'PLC Programming',
    ],
    careerOptions: [
      'Mechatronics Engineer',
      'Robotics Engineer',
      'Automation Engineer',
      'Embedded Systems Engineer',
      'Industrial Control Engineer',
      'R&D Engineer (Smart machines, AI integration)',
    ],
    admission: {
      exam: 'JEE Main or State Engineering Entrance Exams',
      availableIn: [
        'IITs, NITs, IIITs',
        'Government engineering colleges',
        'Private engineering colleges',
        'Deemed universities',
      ],
    },
    additionalInfo: [
      '🤖 Machines + Electronics + Intelligence',
      '🏭 Industries: Manufacturing, automotive, robotics, aerospace, defense, consumer electronics, automation',
    ],
  },
  'Automobile Engineering': {
    name: 'Automobile Engineering',
    fullForm: 'Automobile Engineering',
    description: "It's the branch of engineering that focuses on the design, development, manufacturing, and maintenance of vehicles — including cars, buses, trucks, motorcycles, and electric vehicles.",
    duration: '4 years (B.Tech/B.E.)',
    subjects: [
      'Vehicle Dynamics & Control',
      'Internal Combustion Engines',
      'Electric & Hybrid Vehicles',
      'Automobile Design & CAD',
      'Automotive Materials & Manufacturing',
      'Suspension, Brakes & Steering Systems',
      'Emission Control & Environmental Compliance',
      'Automotive Electronics & Embedded Systems',
    ],
    careerOptions: [
      'Design Engineer',
      'Vehicle Dynamics Engineer',
      'Automotive R&D Engineer',
      'Production / Manufacturing Engineer',
      'Electric Vehicle Engineer',
      'Embedded Systems Engineer',
      'Testing & Quality Control Engineer',
    ],
    admission: {
      exam: 'JEE Main or State Engineering Entrance Exams',
      availableIn: [
        'IITs, NITs, IIITs',
        'Government engineering colleges',
        'Private engineering colleges',
        'Deemed universities',
      ],
    },
    additionalInfo: [
      '🚗 Focus on designing safe, efficient, and technologically advanced vehicles',
      '⚡ Growing field with electric vehicles and autonomous driving technology',
    ],
  },
  'Naval Architecture': {
    name: 'Naval Architecture',
    fullForm: 'Naval Architecture & Shipbuilding',
    description: "It's the branch of engineering focused on the design, construction, and maintenance of ships, submarines, and other marine vessels. It combines mechanical engineering, marine engineering, and structural design.",
    duration: '4 years (B.Tech/B.E.)',
    subjects: [
      'Ship Design & Stability',
      'Hydrodynamics & Fluid Mechanics',
      'Marine Structures & Materials',
      'Ship Construction Technology',
      'Propulsion & Power Systems',
      'Naval Safety & Regulations',
      'Shipyard Management & Project Planning',
    ],
    careerOptions: [
      'Naval Architect',
      'Ship Design Engineer',
      'Marine Structural Engineer',
      'Shipyard Project Manager',
      'Offshore & Subsea Engineer',
      'Research & Development Engineer',
    ],
    admission: {
      exam: 'JEE Main or State Engineering Entrance Exams',
      availableIn: [
        'IITs, NITs, IIITs',
        'Government engineering colleges',
        'Private engineering colleges',
        'Deemed universities',
      ],
    },
    additionalInfo: [
      '⚓ Naval architects design the ship; marine engineers make it run',
      '🌊 Industries: Shipbuilding companies, defense/naval organizations, offshore oil & gas, cruise liners',
    ],
  },
  'Marine Engineering': {
    name: 'Marine Engineering',
    fullForm: 'Marine Engineering',
    description: "It's the branch of engineering that deals with the design, construction, operation, and maintenance of ships, boats, and offshore structures. It combines mechanical, electrical, and electronic engineering with naval architecture.",
    duration: '4 years (B.Tech/B.E.)',
    subjects: [
      'Thermodynamics & Fluid Mechanics',
      'Ship Design & Naval Architecture',
      'Marine Propulsion Systems',
      'Shipboard Electrical Systems',
      'Navigation & Control Systems',
      'Marine Safety & Regulations',
      'Ship Maintenance & Operations',
    ],
    careerOptions: [
      'Marine Engineer / Ship Engineer',
      'Naval Architect',
      'Offshore Engineer (Oil rigs, platforms)',
      'Ship Design Engineer',
      'Maintenance Engineer (Shipping companies, navies)',
      'Port & Harbor Engineer',
    ],
    admission: {
      exam: 'JEE Main or State Engineering Entrance Exams',
      availableIn: [
        'IITs, NITs, IIITs',
        'Government engineering colleges',
        'Private engineering colleges',
        'Deemed universities',
      ],
    },
    additionalInfo: [
      '🚢 Focus on ensuring ships and submarines run efficiently and safely',
      '🌊 Industries: Shipping companies, shipyards, oil & gas offshore platforms, naval forces, cruise liners',
    ],
  },
  'Fire & Safety Engineering': {
    name: 'Fire & Safety Engineering',
    fullForm: 'Fire & Safety Engineering',
    description: "It's the branch of engineering that focuses on preventing, controlling, and managing fire hazards and workplace safety risks. It combines mechanical, chemical, and electrical engineering with safety management.",
    duration: '4 years (B.Tech/B.E.) or Diploma programs',
    subjects: [
      'Fire Chemistry & Combustion',
      'Fire Detection & Alarm Systems',
      'Fire Prevention & Protection Engineering',
      'Occupational Safety & Health',
      'Industrial Safety & Hazard Management',
      'Building Codes & Fire Regulations (NFPA, OSHA)',
      'Risk Assessment & Disaster Management',
      'Safety Audits & Emergency Planning',
    ],
    careerOptions: [
      'Fire & Safety Engineer',
      'Industrial Safety Officer',
      'Fire Protection Engineer',
      'Risk & Hazard Manager',
      'Safety Consultant',
      'Emergency Response Officer',
    ],
    admission: {
      exam: 'JEE Main or State Engineering Entrance Exams',
      availableIn: [
        'Government engineering colleges',
        'Private engineering colleges',
        'Deemed universities',
        'Specialized fire & safety institutes',
      ],
    },
    additionalInfo: [
      '🔥 Focus on making workplaces safe from fire, explosions, and accidents',
      '🏭 Industries: Manufacturing, oil & gas, chemical plants, construction, power plants, mining, fire departments',
    ],
  },
  'Chemical Engineering': {
    name: 'Chemical Engineering',
    fullForm: 'Chemical Engineering',
    description: "It's the branch of engineering that focuses on converting raw materials into useful products through chemical, biological, and physical processes. It combines chemistry, physics, biology, and mathematics.",
    duration: '4 years (B.Tech/B.E.)',
    subjects: [
      'Chemical Process Calculations',
      'Fluid Mechanics & Thermodynamics',
      'Chemical Reaction Engineering',
      'Transport Phenomena',
      'Process Control & Instrumentation',
      'Material Science & Polymer Engineering',
      'Biochemical & Environmental Engineering',
      'Plant Design & Safety Engineering',
    ],
    careerOptions: [
      'Process Engineer',
      'Chemical Engineer',
      'Production & Operations Engineer',
      'Plant Design Engineer',
      'Environmental Engineer',
      'Research & Development (R&D) Engineer',
      'Quality Control / Safety Engineer',
    ],
    admission: {
      exam: 'JEE Main or State Engineering Entrance Exams',
      availableIn: [
        'IITs, NITs, IIITs',
        'Government engineering colleges',
        'Private engineering colleges',
        'Deemed universities',
      ],
    },
    additionalInfo: [
      '⚗️ Focus on making chemicals, fuels, drugs, and materials safely and efficiently',
      '🏭 Industries: Chemicals, petrochemicals, pharmaceuticals, food & beverages, oil & gas, polymers',
    ],
  },
  'Biotechnology': {
    name: 'Biotechnology',
    fullForm: 'Biotechnology Engineering',
    description: "It's the branch of engineering and science that uses living organisms, cells, and biological systems to develop products and technologies for healthcare, agriculture, and industry. It combines biology, chemistry, genetics, and engineering.",
    duration: '4 years (B.Tech/B.E.) or B.Sc (3 years)',
    subjects: [
      'Molecular Biology & Genetics',
      'Biochemistry & Microbiology',
      'Bioprocess Engineering',
      'Genetic Engineering & Recombinant DNA Technology',
      'Bioinformatics & Computational Biology',
      'Immunology & Pharmaceutical Biotechnology',
      'Environmental & Agricultural Biotechnology',
      'Biotech Lab Techniques & Safety',
    ],
    careerOptions: [
      'Biotechnologist / Research Scientist',
      'Genetic Engineer',
      'Bioprocess Engineer',
      'Bioinformatics Analyst',
      'Pharmaceutical / Drug Development Scientist',
      'Environmental / Agricultural Biotechnologist',
      'Quality Control / Regulatory Affairs Specialist',
    ],
    admission: {
      exam: 'JEE Main or State Engineering Entrance Exams',
      availableIn: [
        'IITs, NITs, IIITs',
        'Government engineering colleges',
        'Private engineering colleges',
        'Deemed universities',
      ],
    },
    additionalInfo: [
      '🧬 Using biology + technology to solve real-world problems',
      '💊 Industries: Pharmaceuticals, healthcare, agriculture, food & beverages, research labs, genomics companies',
    ],
  },
  'Industrial Engineering': {
    name: 'Industrial Engineering',
    fullForm: 'Industrial Engineering',
    description: "It's the branch of engineering that focuses on optimizing complex systems, processes, and operations to improve efficiency, productivity, and quality. It combines engineering, management, and analytics.",
    duration: '4 years (B.Tech/B.E.)',
    subjects: [
      'Operations Research & Optimization',
      'Production & Manufacturing Systems',
      'Supply Chain & Logistics Management',
      'Quality Control & Six Sigma',
      'Human Factors & Ergonomics',
      'Industrial Automation & Simulation',
      'Project Management & Cost Analysis',
    ],
    careerOptions: [
      'Industrial Engineer',
      'Operations Manager',
      'Process Improvement Engineer',
      'Supply Chain Analyst / Manager',
      'Production Planner / Manager',
      'Quality & Safety Engineer',
      'Logistics & Operations Consultant',
    ],
    admission: {
      exam: 'JEE Main or State Engineering Entrance Exams',
      availableIn: [
        'IITs, NITs, IIITs',
        'Government engineering colleges',
        'Private engineering colleges',
        'Deemed universities',
      ],
    },
    additionalInfo: [
      '⚙️ Industrial Engineers make systems and processes work better, faster, and cheaper',
      '📦 Industries: Manufacturing, logistics, healthcare, banking, IT, retail, e-commerce',
    ],
  },
  'Nanotechnology': {
    name: 'Nanotechnology',
    fullForm: 'Nanotechnology Engineering',
    description: "It's the branch of engineering and science that deals with manipulating matter at the nanoscale (1–100 nanometers) to create new materials, devices, and systems with unique properties. Engineering at the scale of atoms and molecules.",
    duration: '4 years (B.Tech/B.E.) or B.Sc (3 years)',
    subjects: [
      'Nanomaterials & Nanostructures',
      'Nanofabrication & Lithography',
      'Nanoelectronics & MEMS/NEMS',
      'Nanobiotechnology',
      'Quantum Mechanics & Solid State Physics',
      'Surface Science & Characterization Techniques',
      'Computational Nanotechnology',
    ],
    careerOptions: [
      'Nanotechnology Research Scientist',
      'Materials Engineer',
      'Nanoelectronics Engineer',
      'Nanobiotechnology Researcher',
      'R&D Engineer (Pharmaceuticals, Electronics, Materials)',
      'Quality & Safety Specialist in Nanomaterials',
    ],
    admission: {
      exam: 'JEE Main or State Engineering Entrance Exams',
      availableIn: [
        'IITs, NITs, IIITs',
        'Government engineering colleges',
        'Private engineering colleges',
        'Deemed universities',
      ],
    },
    additionalInfo: [
      '🔬 Engineering at the scale of atoms and molecules',
      '💡 Industries: Electronics, pharmaceuticals, healthcare, energy, materials science, defense research, space & aerospace',
    ],
  },
  'Agricultural Engineering': {
    name: 'Agricultural Engineering',
    fullForm: 'Agricultural Engineering',
    description: "It's the branch of engineering that applies engineering principles to agriculture and farming. It focuses on improving farming efficiency, machinery, irrigation, soil management, and food production systems.",
    duration: '4 years (B.Tech/B.E.)',
    subjects: [
      'Farm Machinery & Equipment',
      'Soil & Water Conservation Engineering',
      'Agricultural Structures & Buildings',
      'Crop Processing & Post-Harvest Technology',
      'Renewable Energy in Agriculture',
      'Precision Farming & Automation',
      'Environmental & Sustainable Agriculture Practices',
      'Agricultural Economics & Farm Management',
    ],
    careerOptions: [
      'Agricultural Engineer',
      'Irrigation Engineer',
      'Precision Farming Specialist',
      'Farm Machinery Designer / Technician',
      'Post-Harvest & Food Processing Engineer',
      'Renewable Energy Specialist (Agri-solutions)',
      'Agricultural Consultant / Research Scientist',
    ],
    admission: {
      exam: 'JEE Main or State Engineering Entrance Exams',
      availableIn: [
        'IITs, NITs, IIITs',
        'Government agricultural engineering colleges',
        'Private engineering colleges',
        'Deemed universities',
      ],
    },
    additionalInfo: [
      '🌾 Making farming smarter, efficient, and sustainable',
      '🚁 Industries: Farms, agri-business, irrigation & water management, food processing, government agricultural departments',
    ],
  },
  'Dairy Technology': {
    name: 'Dairy Technology',
    fullForm: 'Bachelor of Technology in Dairy Technology',
    description: "It's a specialized branch of Food Technology focused on processing, preserving, and improving milk and milk-based products. It combines microbiology, chemistry, engineering, and nutrition.",
    duration: '4 years (B.Tech)',
    subjects: [
      'Dairy Chemistry & Biochemistry',
      'Dairy Microbiology',
      'Dairy Processing & Technology',
      'Milk & Dairy Product Quality Control',
      'Dairy Engineering',
      'Dairy Plant Management',
      'Nutrition & Functional Dairy Products',
      'Packaging, Storage & Distribution of Dairy Products',
    ],
    careerOptions: [
      'Dairy Technologist / Dairy Engineer',
      'Quality Assurance / Quality Control Officer',
      'Milk Processing Plant Manager',
      'R&D Scientist (Dairy Products)',
      'Packaging & Storage Engineer',
      'Dairy Consultant',
      'Regulatory Compliance Officer',
    ],
    admission: {
      exam: 'JEE Main or State Entrance Exams',
      availableIn: [
        'Government dairy technology colleges',
        'Agricultural universities',
        'Private engineering colleges',
        'Deemed universities',
      ],
    },
    additionalInfo: [
      '🥛 Dairy Technologists turn milk into safe, nutritious, and market-ready products',
      '🏭 Industries: Milk processing companies, dairy farms, ice cream & cheese manufacturers, food & beverage companies',
    ],
  },
  'Food Technology': {
    name: 'Food Technology',
    fullForm: 'Bachelor of Technology in Food Technology',
    description: "It's the branch of engineering and science that focuses on processing, preserving, packaging, and distributing food products safely and efficiently. It combines biology, chemistry, microbiology, and engineering principles.",
    duration: '4 years (B.Tech)',
    subjects: [
      'Food Chemistry & Biochemistry',
      'Food Microbiology & Safety',
      'Food Processing & Preservation',
      'Food Packaging & Storage',
      'Food Engineering & Technology',
      'Quality Control & Standards (ISO, FSSAI, HACCP)',
      'Sensory Evaluation & Nutrition',
      'Food Product Development & Innovation',
    ],
    careerOptions: [
      'Food Technologist / Food Scientist',
      'Quality Assurance / Quality Control Officer',
      'Food Safety Specialist',
      'Process Engineer (Food Manufacturing)',
      'Product Development & R&D Scientist',
      'Regulatory Affairs / Compliance Officer',
      'Packaging & Storage Engineer',
    ],
    admission: {
      exam: 'JEE Main or State Engineering Entrance Exams',
      availableIn: [
        'Government food technology colleges',
        'Agricultural universities',
        'Private engineering colleges',
        'Deemed universities',
      ],
    },
    additionalInfo: [
      '🍱 Food Technologists make sure food is safe, nutritious, and tasty on a large scale',
      '🏭 Industries: Food & beverage companies, dairy, confectionery, packaged foods, research labs, pharmaceuticals',
    ],
  },
  'Civil Engineering': {
    name: 'Civil Engineering',
    fullForm: 'Civil Engineering',
    description: "It's the branch of engineering that focuses on planning, designing, constructing, and maintaining infrastructure and the built environment. Civil Engineers build the world around us — roads, bridges, buildings, dams, and water systems.",
    duration: '4 years (B.Tech/B.E.)',
    subjects: [
      'Structural Engineering',
      'Construction Technology & Management',
      'Geotechnical Engineering',
      'Transportation Engineering',
      'Water Resources & Irrigation Engineering',
      'Environmental Engineering',
      'Surveying & Geomatics',
      'Building Materials & Concrete Technology',
    ],
    careerOptions: [
      'Civil Engineer / Structural Engineer',
      'Construction Manager / Project Manager',
      'Transportation Engineer',
      'Geotechnical Engineer',
      'Environmental Engineer',
      'Urban Planner / Water Resource Engineer',
      'Quantity Surveyor / Site Engineer',
    ],
    admission: {
      exam: 'JEE Main or State Engineering Entrance Exams',
      availableIn: [
        'IITs, NITs, IIITs',
        'Government engineering colleges',
        'Private engineering colleges',
        'Deemed universities',
      ],
    },
    additionalInfo: [
      '🏗️ Build roads, bridges, buildings, dams, and water systems',
      '🌆 Industries: Construction, infrastructure, real estate, urban planning, transportation, water resources, government projects',
    ],
  },
  'Electrical Engineering': {
    name: 'Electrical Engineering',
    fullForm: 'Electrical Engineering',
    description: "It's a branch of engineering that focuses on generation, transmission, distribution, and utilization of electrical power, as well as designing electrical systems and equipment. Electrical Engineers make electricity work efficiently in power systems, machines, and industrial setups.",
    duration: '4 years (B.Tech/B.E.)',
    subjects: [
      'Circuit Theory & Network Analysis',
      'Electrical Machines & Transformers',
      'Power Systems & Transmission Lines',
      'Control Systems',
      'Power Electronics & Drives',
      'Renewable Energy & Smart Grids',
      'Electrical Measurements & Instrumentation',
      'Energy Management & Electrical Safety',
    ],
    careerOptions: [
      'Electrical Engineer / Power Engineer',
      'Transmission & Distribution Engineer',
      'Control & Automation Engineer',
      'Renewable Energy Engineer',
      'Electrical Design Engineer',
      'Instrumentation Engineer',
      'Project Engineer (Power plants, industries)',
    ],
    admission: {
      exam: 'JEE Main or State Engineering Entrance Exams',
      availableIn: [
        'IITs, NITs, IIITs',
        'Government engineering colleges',
        'Private engineering colleges',
        'Deemed universities',
      ],
    },
    additionalInfo: [
      '⚡ Focus on power generation, transmission, and distribution',
      '🔌 Industries: Power generation & distribution, manufacturing, renewable energy, construction, industrial automation',
    ],
  },
  'EEE': {
    name: 'EEE',
    fullForm: 'Electrical & Electronics Engineering',
    description: "It's the branch of engineering that deals with generation, transmission, distribution, and utilization of electrical power as well as the design and development of electronic devices and systems. EEE Engineers make electricity and electronics work efficiently in industries, homes, and devices.",
    duration: '4 years (B.Tech/B.E.)',
    subjects: [
      'Circuit Theory & Network Analysis',
      'Electrical Machines & Transformers',
      'Power Systems & Transmission',
      'Control Systems & Automation (PLCs)',
      'Digital Electronics & Microprocessors',
      'Power Electronics & Drives',
      'Signal Processing & Communication Systems',
      'Renewable Energy Systems',
    ],
    careerOptions: [
      'Electrical Engineer / Power Engineer',
      'Electronics Engineer / Embedded Systems Engineer',
      'Control & Automation Engineer',
      'Power System Designer / Renewable Energy Engineer',
      'Instrumentation & Communication Engineer',
      'Research & Development Engineer',
      'Electric Vehicle / Smart Grid Engineer',
    ],
    admission: {
      exam: 'JEE Main or State Engineering Entrance Exams',
      availableIn: [
        'IITs, NITs, IIITs',
        'Government engineering colleges',
        'Private engineering colleges',
        'Deemed universities',
      ],
    },
    additionalInfo: [
      '⚡ Combines electrical engineering (power systems) and electronics engineering',
      '🔋 Industries: Power generation, electronics manufacturing, automation & robotics, renewable energy, EV companies',
    ],
  },
  'Biomedical Engineering': {
    name: 'Biomedical Engineering',
    fullForm: 'Biomedical Engineering',
    description: "It's the branch of engineering that applies engineering principles and technology to healthcare and medicine. It focuses on designing medical devices, imaging systems, prosthetics, and healthcare solutions to improve diagnosis, treatment, and patient care.",
    duration: '4 years (B.Tech/B.E.)',
    subjects: [
      'Human Anatomy & Physiology',
      'Biomedical Instrumentation',
      'Medical Imaging Systems (X-rays, MRI, CT, Ultrasound)',
      'Biomaterials & Tissue Engineering',
      'Biomechanics & Rehabilitation Engineering',
      'Medical Electronics & Sensors (ECG, EEG)',
      'Clinical Engineering & Hospital Systems',
      'Biomedical Signal Processing & Data Analysis',
    ],
    careerOptions: [
      'Biomedical Engineer',
      'Medical Device Designer / R&D Engineer',
      'Clinical Engineer (Hospitals & Healthcare Facilities)',
      'Bioinstrumentation Engineer',
      'Prosthetics & Rehabilitation Engineer',
      'Medical Imaging Specialist',
      'Research Scientist in Healthcare & Biotechnology',
    ],
    admission: {
      exam: 'JEE Main or State Engineering Entrance Exams',
      availableIn: [
        'IITs, NITs, IIITs',
        'Government engineering colleges',
        'Private engineering colleges',
        'Deemed universities',
      ],
    },
    additionalInfo: [
      '🏥 Biomedical Engineers make healthcare smarter, safer, and more advanced',
      '🩺 Industries: Hospitals, medical device companies, research institutes, healthcare technology startups, rehabilitation centers',
    ],
  },
  'Textile Engineering': {
    name: 'Textile Engineering',
    fullForm: 'Textile Engineering',
    description: "It's the branch of engineering that deals with the design, development, production, and quality control of fibers, yarns, fabrics, and textile products. It combines materials science, mechanical engineering, chemistry, and production technology.",
    duration: '4 years (B.Tech/B.E.)',
    subjects: [
      'Textile Fibers & Yarn Manufacturing',
      'Fabric Formation & Weaving/Knitting Technology',
      'Textile Chemistry & Dyeing',
      'Textile Testing & Quality Control',
      'Garment Manufacturing & Apparel Technology',
      'Textile Machinery & Production Engineering',
      'Technical & Smart Textiles',
      'Textile Management & Sustainability',
    ],
    careerOptions: [
      'Textile Engineer / Production Engineer',
      'Quality Control / Textile Testing Specialist',
      'Dyeing & Finishing Technologist',
      'Garment & Apparel Engineer',
      'Technical & Smart Textiles Designer',
      'Textile R&D Scientist',
      'Textile Plant Manager / Operations Engineer',
    ],
    admission: {
      exam: 'JEE Main or State Engineering Entrance Exams',
      availableIn: [
        'IITs, NITs (textile focused)',
        'Government engineering colleges',
        'Private textile engineering colleges',
        'Deemed universities',
      ],
    },
    additionalInfo: [
      '🧵 Textile Engineers turn fibers into fabrics and textiles for fashion, industry, and technical applications',
      '👕 Industries: Textile mills, apparel & fashion companies, technical textiles, smart wearable products, research labs',
    ],
  },
  'Material Science': {
    name: 'Material Science',
    fullForm: 'Material Science & Engineering',
    description: "It's the branch of engineering that studies the properties, structure, processing, and applications of materials. It focuses on metals, ceramics, polymers, composites, and nanomaterials, aiming to design materials that meet specific performance requirements.",
    duration: '4 years (B.Tech/B.E.) or B.Sc (3 years)',
    subjects: [
      'Engineering Materials & Metallurgy',
      'Polymers, Ceramics & Composites',
      'Nanomaterials & Advanced Materials',
      'Material Characterization & Testing',
      'Thermodynamics & Kinetics of Materials',
      'Corrosion & Surface Engineering',
      'Mechanical Behavior of Materials',
      'Computational Materials Science',
    ],
    careerOptions: [
      'Materials Engineer / Scientist',
      'Metallurgist',
      'Nanomaterials Researcher',
      'Quality Control / Failure Analysis Engineer',
      'R&D Engineer (Aerospace, Automotive, Electronics)',
      'Surface Coating & Corrosion Specialist',
      'Academic / Industrial Research Scientist',
    ],
    admission: {
      exam: 'JEE Main or State Engineering Entrance Exams',
      availableIn: [
        'IITs, NITs, IIITs',
        'Government engineering colleges',
        'Private engineering colleges',
        'Deemed universities',
      ],
    },
    additionalInfo: [
      '🔩 Material Scientists create and improve materials that make technology and infrastructure possible',
      '🚀 Industries: Aerospace, automotive, electronics, defense, nanotechnology, energy, manufacturing, research labs',
    ],
  },
  'Mechanical Engineering': {
    name: 'Mechanical Engineering',
    fullForm: 'Mechanical Engineering',
    description: "It's one of the oldest and broadest engineering disciplines. It focuses on the design, analysis, manufacturing, and maintenance of mechanical systems. It combines physics, materials science, thermodynamics, and mechanics.",
    duration: '4 years (B.Tech/B.E.)',
    subjects: [
      'Engineering Mechanics & Strength of Materials',
      'Thermodynamics & Heat Transfer',
      'Fluid Mechanics & Hydraulic Machines',
      'Manufacturing Processes & Production Engineering',
      'Machine Design & Dynamics',
      'Material Science & Metallurgy',
      'CAD/CAM & Computer-Aided Design',
      'Automation & Mechatronics',
    ],
    careerOptions: [
      'Mechanical Engineer / Design Engineer',
      'Manufacturing / Production Engineer',
      'Thermal / HVAC Engineer',
      'Automotive / Aerospace Engineer',
      'Robotics / Mechatronics Engineer',
      'Maintenance & Reliability Engineer',
      'Research & Development Engineer',
    ],
    admission: {
      exam: 'JEE Main or State Engineering Entrance Exams',
      availableIn: [
        'IITs, NITs, IIITs',
        'Government engineering colleges',
        'Private engineering colleges',
        'Deemed universities',
      ],
    },
    additionalInfo: [
      '⚙️ Mechanical Engineers make machines work efficiently and safely, from engines to robots',
      '🏭 Industries: Automotive, aerospace, manufacturing, robotics, energy, HVAC, heavy machinery, defense, research labs',
    ],
  },
  'BBA': {
    name: 'BBA',
    fullForm: 'Bachelor of Business Administration',
    description: "It's an undergraduate degree focused on business management, leadership, entrepreneurship, and corporate operations. It provides knowledge in marketing, finance, HR, operations, and business strategy.",
    duration: '3 years',
    subjects: [
      'Principles of Management',
      'Business Economics',
      'Financial Accounting & Corporate Finance',
      'Marketing Management',
      'Human Resource Management (HRM)',
      'Business Law & Ethics',
      'Operations & Supply Chain Management',
      'Entrepreneurship & Business Strategy',
    ],
    careerOptions: [
      'Business Analyst',
      'Marketing Executive / Brand Manager',
      'HR Executive / Talent Acquisition',
      'Financial Analyst',
      'Sales Manager',
      'Operations Executive',
      'Entrepreneur / Startup Founder',
    ],
    admission: {
      exam: 'State/University-level Entrance Exams or Merit-based',
      availableIn: [
        'Government management colleges',
        'Private management colleges',
        'Universities with BBA programs',
        'Deemed universities',
      ],
    },
    additionalInfo: [
      '💼 BBA teaches you how businesses work and how to manage them effectively',
      '🏢 Industries: Corporate companies, banks, consulting firms, startups, retail, IT companies, FMCG, e-commerce',
    ],
  },
  'BCA': {
    name: 'BCA',
    fullForm: 'Bachelor of Computer Applications',
    description: "It's an undergraduate program in computer applications and IT, focusing on software development, programming, and computer systems. It provides strong foundation in computing with options to add specialized tech skills.",
    duration: '3 years',
    subjects: [
      'Programming Languages (C, C++, Java, Python)',
      'Database Management Systems (DBMS)',
      'Data Structures & Algorithms',
      'Operating Systems & Computer Networks',
      'Web Development & Mobile App Development',
      'Software Engineering & Project Management',
      'Computer Graphics & Multimedia',
      'Cybersecurity Basics',
    ],
    careerOptions: [
      'Software Developer / Programmer',
      'Web / Mobile App Developer',
      'Data Analyst / Data Scientist',
      'AI / ML Engineer (with add-on courses)',
      'Network / System Administrator',
      'Cybersecurity Analyst',
      'IT Support / Technical Consultant',
    ],
    admission: {
      exam: 'State/University-level Entrance Exams or Merit-based',
      availableIn: [
        'Government IT colleges',
        'Private IT colleges',
        'Universities with BCA programs',
        'Deemed universities',
      ],
    },
    additionalInfo: [
      '💻 BCA + Add-On Courses = Core computer knowledge + specialized tech skills',
      '🏢 Industries: IT & software companies, startups, banks & finance, e-commerce, cybersecurity firms, government IT departments',
    ],
  },
  'Petroleum Engineering': {
    name: 'Petroleum Engineering',
    fullForm: 'Petroleum Engineering',
    description: "It's the branch of engineering that focuses on exploration, extraction, production, and management of oil and natural gas resources. It combines geology, mechanical engineering, chemical engineering, and reservoir engineering.",
    duration: '4 years (B.Tech/B.E.)',
    subjects: [
      'Petroleum Geology & Reservoir Engineering',
      'Drilling Engineering',
      'Production Engineering',
      'Petroleum Refining & Processing',
      'Petroleum Economics & Management',
      'Petrophysics & Well Logging',
      'Enhanced Oil Recovery (EOR)',
      'Safety, Environment & Risk Management',
    ],
    careerOptions: [
      'Petroleum Engineer / Reservoir Engineer',
      'Drilling Engineer',
      'Production Engineer',
      'Petroleum Geologist',
      'Oil & Gas Project Manager',
      'Refinery Process Engineer',
      'Health, Safety & Environment (HSE) Specialist',
    ],
    admission: {
      exam: 'JEE Main or State Engineering Entrance Exams',
      availableIn: [
        'IITs, NITs, IIITs',
        'Government engineering colleges',
        'Private engineering colleges',
        'Deemed universities',
      ],
    },
    additionalInfo: [
      '🛢️ Petroleum Engineers find and produce oil and gas safely and efficiently',
      '⛽ Industries: Oil & gas exploration and production companies, refineries, petrochemical industries, energy consultancy firms',
    ],
  },
  'BHM': {
    name: 'BHM',
    fullForm: 'Bachelor of Hotel Management',
    description: "It's a 3–4 year undergraduate degree focused on hospitality, hotel operations, tourism, food & beverage management, and customer service. It prepares students for careers in hotels, resorts, cruise lines, airlines, event management, and hospitality businesses.",
    duration: '3-4 years',
    subjects: [
      'Front Office Management',
      'Food Production (Culinary Arts)',
      'Food & Beverage Service',
      'Housekeeping Operations',
      'Hospitality Marketing & Sales',
      'Hotel Accounting & Financial Management',
      'Tourism Management',
      'Event & Hospitality Law',
    ],
    careerOptions: [
      'Hotel Manager',
      'Front Office Executive',
      'Food & Beverage Manager',
      'Chef / Culinary Specialist',
      'Event Manager',
      'Housekeeping Manager',
      'Cruise Line / Airline Hospitality Staff',
      'Resort / Club Manager',
    ],
    admission: {
      exam: 'NCHMCT JEE or State Hotel Management Entrance Exams',
      availableIn: [
        'Government hotel management colleges (IHM)',
        'Private hotel management colleges',
        'Universities with hospitality programs',
        'Deemed universities',
      ],
    },
    additionalInfo: [
      '🏨 BHM teaches you how to manage hotels and provide professional hospitality services',
      '✈️ Industries: Hotels & Resorts, Cruise Ships, Airlines, Event Companies, Restaurants, Luxury Hospitality Brands',
    ],
  },
  'BBM': {
    name: 'BBM',
    fullForm: 'Bachelor of Business Management',
    description: "It's a 3-year undergraduate degree focused on business operations, management principles, leadership, and entrepreneurship. It prepares students to understand how organizations function and how to manage resources, people, and strategies effectively.",
    duration: '3 years',
    subjects: [
      'Principles of Management',
      'Financial Accounting & Business Finance',
      'Marketing Management',
      'Human Resource Management (HRM)',
      'Business Economics',
      'Business Law & Ethics',
      'Operations & Production Management',
      'Entrepreneurship Development',
    ],
    careerOptions: [
      'Management Trainee',
      'Marketing Executive',
      'HR Executive',
      'Business Development Executive',
      'Operations Executive',
      'Financial Services Executive',
      'Entrepreneur / Startup Founder',
    ],
    admission: {
      exam: 'State/University-level Entrance Exams or Merit-based',
      availableIn: [
        'Government management colleges',
        'Private management colleges',
        'Universities with BBM programs',
        'Deemed universities',
      ],
    },
    additionalInfo: [
      '📊 BBM trains you to run and manage businesses professionally',
      '🏢 Industries: Corporate firms, banking & finance, retail, FMCG, consulting, startups, manufacturing, service sector',
    ],
  },
  'BMS': {
    name: 'BMS',
    fullForm: 'Bachelor of Management Studies',
    description: "It's a 3-year undergraduate degree focused on advanced management education, leadership, and business decision-making. It is similar to BBA but often considered more management-focused and analytical, with deeper emphasis on strategy, finance, and organizational behavior.",
    duration: '3 years',
    subjects: [
      'Principles of Management & Organizational Behavior',
      'Business Economics & Business Environment',
      'Financial Management & Accounting',
      'Marketing Management',
      'Human Resource Management (HRM)',
      'Operations & Supply Chain Management',
      'Business Law & Corporate Governance',
      'Strategic Management & Entrepreneurship',
    ],
    careerOptions: [
      'Management Trainee',
      'Business Analyst',
      'Marketing Executive / Brand Executive',
      'HR Executive',
      'Financial Analyst',
      'Operations Executive',
      'Entrepreneur / Startup Founder',
    ],
    admission: {
      exam: 'State/University-level Entrance Exams or Merit-based',
      availableIn: [
        'Government management colleges',
        'Private management colleges',
        'Universities with BMS programs',
        'Deemed universities',
      ],
    },
    additionalInfo: [
      '💡 BMS prepares you to manage businesses, teams, and corporate operations professionally',
      '🏢 Industries: Corporate firms, banks, consulting companies, FMCG, IT companies, startups, retail',
    ],
  },
  'BIB': {
    name: 'BIB',
    fullForm: 'Bachelor of International Business',
    description: "It's a 3-year undergraduate degree focused on global trade, international marketing, cross-border finance, and global business operations. It prepares students to work with multinational companies (MNCs), export-import businesses, and international finance institutions.",
    duration: '3 years',
    subjects: [
      'International Marketing',
      'Global Trade & Export-Import Management',
      'International Finance',
      'Global Supply Chain & Logistics',
      'Foreign Exchange Management',
      'International Business Law',
      'Cross-Cultural Management',
      'Global Economic Environment',
    ],
    careerOptions: [
      'International Business Executive',
      'Export-Import Manager',
      'Global Marketing Executive',
      'Foreign Trade Analyst',
      'Supply Chain & Logistics Manager',
      'International Sales Manager',
      'Trade Compliance Officer',
    ],
    admission: {
      exam: 'State/University-level Entrance Exams or Merit-based',
      availableIn: [
        'Government management colleges',
        'Private management colleges',
        'Universities with international business programs',
        'Deemed universities',
      ],
    },
    additionalInfo: [
      '🌍 BIB teaches you how to do business across countries and manage global markets',
      '🚢 Industries: Multinational companies (MNCs), export houses, logistics companies, shipping firms, banks, international trade agencies',
    ],
  },
  'BEM': {
    name: 'BEM',
    fullForm: 'Bachelor of Event Management',
    description: "It's an undergraduate program that focuses on planning, organizing, marketing, and executing events such as weddings, concerts, corporate events, exhibitions, festivals, and conferences. It combines creativity, business management, marketing, budgeting, and logistics.",
    duration: '3-4 years',
    subjects: [
      'Event Planning & Production',
      'Event Marketing & Promotion',
      'Event Budgeting & Financial Management',
      'Public Relations & Media Management',
      'Hospitality & Venue Management',
      'Branding & Sponsorship Management',
      'Logistics & Risk Management',
      'Event Law & Contracts',
    ],
    careerOptions: [
      'Event Manager',
      'Wedding Planner',
      'Corporate Event Coordinator',
      'Exhibition & Trade Show Manager',
      'Celebrity / Artist Event Manager',
      'Public Relations Executive',
      'Event Marketing Executive',
    ],
    admission: {
      exam: 'State/University-level Entrance Exams or Merit-based',
      availableIn: [
        'Government management colleges',
        'Private management colleges',
        'Universities with event management programs',
        'Deemed universities',
      ],
    },
    additionalInfo: [
      '🎉 Event Management teaches you how to plan and successfully execute professional events',
      '🎭 Industries: Event management companies, wedding planning firms, corporate companies, entertainment industry, PR agencies',
    ],
  },
  'B.Sc LLB': {
    name: 'B.Sc LLB',
    fullForm: 'Bachelor of Science and Bachelor of Laws (Integrated)',
    description: "It's a 5-year integrated undergraduate program that combines Science subjects (Physics, Chemistry, Biology, Mathematics) and Law subjects. It is ideal for students interested in technology law, intellectual property rights (IPR), patent law, and environmental law.",
    duration: '5 years (Integrated)',
    subjects: [
      'Physics / Chemistry / Biology',
      'Mathematics & Statistics',
      'Environmental Science / Biotechnology Basics',
      'Constitutional Law',
      'Criminal Law',
      'Civil Law',
      'Company & Corporate Law',
      'Intellectual Property Rights (IPR)',
      'Environmental Law',
      'Cyber Law & Technology Law',
      'Contract & Commercial Law',
    ],
    careerOptions: [
      'Intellectual Property Lawyer / Patent Attorney',
      'Technology Lawyer / Cyber Law Consultant',
      'Environmental Law Expert',
      'Corporate Lawyer (Tech Companies)',
      'Legal Researcher in Science & Technology',
      'Advocate (after Bar Council Registration)',
      'Compliance Officer in biotech, pharma, or IT firms',
    ],
    admission: {
      exam: 'CLAT or State Law Entrance Exams',
      availableIn: [
        'National Law Universities (NLUs)',
        'Government law colleges',
        'Private law colleges with science background',
        'Deemed universities',
      ],
    },
    additionalInfo: [
      '⚖️ B.Sc LLB trains you to become a lawyer specialized in science, technology, and intellectual property',
      '💡 Industries: Law firms, IT companies, biotech & pharma industries, research institutes, government technology & IP offices',
    ],
  },
  'B.Com LLB': {
    name: 'B.Com LLB',
    fullForm: 'Bachelor of Commerce and Bachelor of Laws (Integrated)',
    description: "It's a 5-year integrated law degree that combines Commerce subjects (Accounting, Finance, Taxation) and Law subjects (Civil, Criminal, Corporate, Tax Law). It is ideal for students interested in corporate law, taxation law, banking law, and financial regulations.",
    duration: '5 years (Integrated)',
    subjects: [
      'Financial Accounting',
      'Corporate Accounting',
      'Cost & Management Accounting',
      'Business Economics',
      'Banking & Insurance',
      'Taxation',
      'Constitutional Law',
      'Contract Law',
      'Criminal Law',
      'Company Law',
      'Corporate & Commercial Law',
      'Taxation Law (Direct & Indirect Taxes)',
      'Banking & Insurance Law',
      'Intellectual Property Rights (IPR)',
    ],
    careerOptions: [
      'Corporate Lawyer',
      'Tax Lawyer',
      'Banking & Finance Legal Advisor',
      'Compliance Officer',
      'Legal Consultant in Financial Firms',
      'Advocate (after Bar Council registration)',
      'Legal Auditor',
    ],
    admission: {
      exam: 'CLAT or State Law Entrance Exams',
      availableIn: [
        'National Law Universities (NLUs)',
        'Government law colleges',
        'Private law colleges',
        'Deemed universities',
      ],
    },
    additionalInfo: [
      '📊 B.Com LLB prepares you to become a lawyer with strong financial and commerce knowledge',
      '🏦 Industries: Law firms, banks, financial institutions, MNCs, corporate companies, taxation consultancies',
    ],
  },
  'BA LLB': {
    name: 'BA LLB',
    fullForm: 'Bachelor of Arts and Bachelor of Laws (Integrated)',
    description: "It's a 5-year integrated law degree that combines Arts subjects (Political Science, Sociology, Economics, History) and Law education. It covers Constitutional Law, Criminal Law, Corporate Law, Civil Law, and Human Rights Law.",
    duration: '5 years (Integrated)',
    subjects: [
      'Political Science',
      'Sociology',
      'Economics',
      'History',
      'Constitutional Law',
      'Criminal Law (IPC, CrPC)',
      'Civil Law',
      'Corporate & Business Law',
      'Contract Law',
      'Family Law',
      'Human Rights Law',
      'International Law',
    ],
    careerOptions: [
      'Advocate / Lawyer',
      'Corporate Legal Advisor',
      'Public Prosecutor',
      'Judge (after judicial exams)',
      'Legal Consultant',
      'Legal Analyst',
      'Compliance Officer',
      'Law Firm Associate',
    ],
    admission: {
      exam: 'CLAT or State Law Entrance Exams',
      availableIn: [
        'National Law Universities (NLUs)',
        'Government law colleges',
        'Private law colleges',
        'Deemed universities',
      ],
    },
    additionalInfo: [
      '⚖️ BA LLB trains you to become a lawyer, legal advisor, or judicial professional',
      '🏛️ Industries: Law firms, courts, corporate companies, government agencies, NGOs, multinational corporations',
    ],
  },


  'B.Sc Physics': {
        name: 'B.Sc Physics',
        fullForm: 'Bachelor of Science in Physics',
        description: "It provides an in-depth understanding of fundamental principles governing the universe, from quantum mechanics to astrophysics. Graduates are well-prepared for research, technology development, and advanced academic pursuits.",
        duration: '3-4 years',
        subjects: ['Classical Mechanics', 'Quantum Physics', 'Electromagnetism', 'Thermal Physics', 'Mathematical Methods'],
        careerOptions: ['Research Scientist', 'Data Analyst', 'Lab Technician', 'Physics Educator'],
        admission: {
            exam: 'Merit-based, CUET, or State Entrance Exams',
            availableIn: ['Government colleges', 'Private colleges', 'State Universities']
        },
        additionalInfo: [
            '📚 Extensive hands-on laboratory work',
            '🔭 Foundation for advanced degrees like M.Sc and PhD'
        ]
    },
    'B.Sc Chemistry': {
        name: 'B.Sc Chemistry',
        fullForm: 'Bachelor of Science in Chemistry',
        description: "This course delves into the composition, structure, properties, and changes of matter. It focuses heavily on organic, inorganic, and physical chemistry applications in industries ranging from pharmaceuticals to materials science.",
        duration: '3-4 years',
        subjects: ['Organic Chemistry', 'Inorganic Chemistry', 'Physical Chemistry', 'Analytical Chemistry', 'Polymer Science'],
        careerOptions: ['Analytical Chemist', 'Quality Control Inspector', 'Toxicologist', 'Forensic Scientist'],
        admission: {
            exam: 'Merit-based, CUET',
            availableIn: ['Government colleges', 'Private colleges', 'Central Universities']
        },
        additionalInfo: [
            '🧪 Strong emphasis on experimental techniques',
            '🏭 High demand in chemical and pharmaceutical sectors'
        ]
    },
    'B.Sc Mathematics': {
        name: 'B.Sc Mathematics',
        fullForm: 'Bachelor of Science in Mathematics',
        description: "Focuses on developing rigorous analytical and problem-solving skills through theoretical and applied mathematics. It serves as a springboard for careers in IT, finance, cryptography, and logic systems.",
        duration: '3-4 years',
        subjects: ['Calculus', 'Linear Algebra', 'Differential Equations', 'Real & Complex Analysis', 'Discrete Mathematics'],
        careerOptions: ['Mathematician', 'Actuary', 'Financial Analyst', 'Software Developer'],
        admission: {
            exam: 'Merit-based, CUET, State/University Level Entrances',
            availableIn: ['Government colleges', 'Private colleges']
        },
        additionalInfo: [
            '🔢 Highly logical and theoretical curriculum',
            '📈 Opens doors for data science and statistics'
        ]
    },
    'B.Sc Statistics': {
        name: 'B.Sc Statistics',
        fullForm: 'Bachelor of Science in Statistics',
        description: "A data-driven program that teaches the collection, analysis, interpretation, and presentation of quantitative data. Crucial for roles in data science, predictive modeling, and business intelligence.",
        duration: '3-4 years',
        subjects: ['Probability Theory', 'Statistical Inference', 'Applied Statistics', 'Operations Research', 'Programming with R/Python'],
        careerOptions: ['Statistician', 'Data Analyst', 'Risk Analyst', 'Biostatistician'],
        admission: {
            exam: 'Merit-based, CUET',
            availableIn: ['Government colleges', 'Private colleges', 'Universities']
        },
        additionalInfo: [
            '📊 Core component of modern Data Science',
            '💻 Integrates math with programming'
        ]
    },
    'B.Sc Computer Science': {
        name: 'B.Sc Computer Science',
        fullForm: 'Bachelor of Science in Computer Science',
        description: "An extensive study of computation systems, algorithms, programming languages, and software development. It builds a robust foundation for building modern web applications, software, and managing databases.",
        duration: '3-4 years',
        subjects: ['Data Structures & Algorithms', 'Operating Systems', 'Database Management Systems', 'Software Engineering', 'Computer Networks'],
        careerOptions: ['Software Developer', 'System Analyst', 'Database Administrator', 'Web Developer'],
        admission: {
            exam: 'Merit-based, CUET, University-specific Exams',
            availableIn: ['Government colleges', 'Private colleges', 'Deemed universities']
        },
        additionalInfo: [
            '💻 Hands-on coding and project-based learning',
            '🚀 Rapidly growing and highly paid field'
        ]
    },
    'B.Sc Electronics': {
        name: 'B.Sc Electronics',
        fullForm: 'Bachelor of Science in Electronics',
        description: "Covers the design, functioning, and application of electronic circuits and devices. It bridges the gap between physics and electrical engineering, focusing heavily on semiconductors and microprocessors.",
        duration: '3-4 years',
        subjects: ['Digital Electronics', 'Analog Circuits', 'Microprocessors & Microcontrollers', 'Signals & Systems', 'Communication Electronics'],
        careerOptions: ['Electronics Technician', 'Hardware Design Engineer', 'Network Support Engineer', 'Broadcast Technician'],
        admission: {
            exam: 'Merit-based, CUET',
            availableIn: ['Government colleges', 'Private colleges']
        },
        additionalInfo: [
            '🔌 Involves working with microcontrollers and IoT',
            '📻 Foundational for telecommunications and hardware'
        ]
    },
    'B.Sc Biotechnology': {
        name: 'B.Sc Biotechnology',
        fullForm: 'Bachelor of Science in Biotechnology',
        description: "Integrates biology and technology to develop products and solutions in healthcare, agriculture, and industry. A highly research-oriented field addressing modern biological challenges like genetics and biomolecular engineering.",
        duration: '3-4 years',
        subjects: ['Cell Biology', 'Genetics', 'Molecular Biology', 'Recombinant DNA Technology', 'Bioinformatics'],
        careerOptions: ['Biotechnologist', 'Clinical Research Associate', 'Biochemist', 'Forensic Scientist'],
        admission: {
            exam: 'Merit-based, CUET, specialized biotech entrance exams',
            availableIn: ['Government colleges', 'Private colleges', 'Deemed universities']
        },
        additionalInfo: [
            '🧬 At the cutting edge of medicine and agriculture',
            '🔬 Strong focus on modern genetics and genomics'
        ]
    },
    'B.Sc Microbiology': {
        name: 'B.Sc Microbiology',
        fullForm: 'Bachelor of Science in Microbiology',
        description: "The study of microscopic organisms, including bacteria, viruses, fungi, and protozoa. It is vital for understanding infectious diseases, immunology, and industrial fermentation processes.",
        duration: '3-4 years',
        subjects: ['Bacteriology', 'Virology', 'Immunology', 'Industrial Microbiology', 'Medical Microbiology'],
        careerOptions: ['Microbiologist', 'Clinical Laboratory Scientist', 'Food Technologist', 'Quality Assurance Analyst'],
        admission: {
            exam: 'Merit-based, CUET',
            availableIn: ['Government colleges', 'Private colleges', 'Universities']
        },
        additionalInfo: [
            '🦠 Crucial for healthcare and epidemiological research',
            '🩺 Prepares for roles in clinical diagnostics'
        ]
    },
    'B.Sc Biochemistry': {
        name: 'B.Sc Biochemistry',
        fullForm: 'Bachelor of Science in Biochemistry',
        description: "Explores the chemical processes within and related to living organisms. It combines biology and chemistry to study cellular processes, metabolism, and the molecular basis of diseases.",
        duration: '3-4 years',
        subjects: ['Enzymology', 'Metabolism', 'Molecular Genetics', 'Clinical Biochemistry', 'Nutritional Biochemistry'],
        careerOptions: ['Biochemist', 'Analytical Chemist', 'Pharmacologist', 'Research Scientist'],
        admission: {
            exam: 'Merit-based, CUET',
            availableIn: ['Government colleges', 'Private colleges']
        },
        additionalInfo: [
            '🧪 Essential for pharmaceutical and biotech industries',
            '💊 Foundation for understanding pharmacology and drug design'
        ]
    },
    'B.Sc Environmental Science': {
        name: 'B.Sc Environmental Science',
        fullForm: 'Bachelor of Science in Environmental Science',
        description: "An interdisciplinary field studying the interactions between the physical, chemical, and biological components of the environment. Focuses on sustainability, pollution control, and conservation.",
        duration: '3-4 years',
        subjects: ['Ecology', 'Environmental Chemistry', 'Pollution Control & Waste Management', 'Biodiversity Conservation', 'Environmental Impact Assessment'],
        careerOptions: ['Environmental Consultant', 'Conservation Scientist', 'Sustainability Officer', 'Wildlife Manager'],
        admission: {
            exam: 'Merit-based, CUET',
            availableIn: ['Government colleges', 'Private colleges', 'Universities']
        },
        additionalInfo: [
            '🌍 Highly relevant for tackling climate change',
            '🌱 Extensive field work and environmental auditing'
        ]
    },
    'B.Sc Geology': {
        name: 'B.Sc Geology',
        fullForm: 'Bachelor of Science in Geology',
        description: "The scientific study of the Earth, its materials, the structure of those materials, and the processes acting upon them. Important for natural resource management and earth history analysis.",
        duration: '3-4 years',
        subjects: ['Mineralogy', 'Petrology', 'Structural Geology', 'Paleontology', 'Economic Geology'],
        careerOptions: ['Geologist', 'Seismologist', 'Meteorologist', 'Mining Consultant'],
        admission: {
            exam: 'Merit-based, CUET',
            availableIn: ['Government colleges', 'Private colleges', 'Central Universities']
        },
        additionalInfo: [
            '⛰️ Significant field excursions and mapping projects',
            '🛢️ Gateway to careers in petroleum and mining industries'
        ]
    },
    'B.Sc Geography': {
        name: 'B.Sc Geography',
        fullForm: 'Bachelor of Science in Geography',
        description: "Focuses on the physical features of the earth and its atmosphere, and human activity affecting them. It bridges physical sciences with social sciences, focusing on spatial analysis and GIS mapping.",
        duration: '3-4 years',
        subjects: ['Geomorphology', 'Climatology', 'Human Geography', 'GIS & Remote Sensing', 'Cartography'],
        careerOptions: ['Cartographer', 'GIS Specialist', 'Urban Planner', 'Environmental Consultant'],
        admission: {
            exam: 'Merit-based, CUET',
            availableIn: ['Government colleges', 'Private colleges']
        },
        additionalInfo: [
            '🗺️ Strong integration of technology via GIS',
            '🌍 Valuable for civil services and urban planning'
        ]
    },
    'B.Sc Home Science': {
        name: 'B.Sc Home Science',
        fullForm: 'Bachelor of Science in Home Science',
        description: "A multidisciplinary course incorporating elements of health, nutrition, human development, and resource management. Applies scientific principles to everyday living and community development.",
        duration: '3-4 years',
        subjects: ['Food and Nutrition', 'Human Development', 'Textiles and Clothing', 'Resource Management', 'Extension Education'],
        careerOptions: ['Dietitian / Nutritionist', 'Interior Designer', 'Family Counselor', 'Food Technologist'],
        admission: {
            exam: 'Merit-based, CUET',
            availableIn: ['Government colleges', 'Private colleges', 'Women’s Universities']
        },
        additionalInfo: [
            '🏡 Broad applicability in daily lifestyle improvement',
            '🥗 Distinct specialization pathways in nutrition or textiles'
        ]
    },
    'B.Sc Food Science & Technology': {
        name: 'B.Sc Food Science & Technology',
        fullForm: 'Bachelor of Science in Food Science and Technology',
        description: "The application of science to evaluate, manufacture, preserve, and package food. It ensures food safety, improves nutrition, and innovates product formulations on an industrial scale.",
        duration: '3-4 years',
        subjects: ['Food Chemistry', 'Food Microbiology', 'Food Preservation', 'Quality Control & Sensory Evaluation', 'Dairy Technology'],
        careerOptions: ['Food Technologist', 'Quality Assurance Manager', 'Product Development Scientist', 'Regulatory Affairs Specialist'],
        admission: {
            exam: 'Merit-based, CUET, University Entrances',
            availableIn: ['Government colleges', 'Private colleges']
        },
        additionalInfo: [
            '🍞 Industrial orientation towards FMCG sectors',
            '🔬 Combines culinary creativity with microbiology'
        ]
    },
    'B.Sc Marine Science': {
        name: 'B.Sc Marine Science',
        fullForm: 'Bachelor of Science in Marine Science',
        description: "The comprehensive study of the marine environment, including oceans, coastlines, and marine organisms. It spans oceanography, marine biology, and the physical dynamics of the sea.",
        duration: '3-4 years',
        subjects: ['Physical Oceanography', 'Marine Biology', 'Chemical Oceanography', 'Fisheries Science', 'Marine Ecology'],
        careerOptions: ['Marine Biologist', 'Oceanographer', 'Environmental Consultant', 'Aquaculturist'],
        admission: {
            exam: 'Merit-based, CUET',
            availableIn: ['Government coastal universities', 'Specialized marine institutes']
        },
        additionalInfo: [
            '🌊 Crucial for ocean conservation and deep-sea exploration',
            '🚢 Often requires hands-on fieldwork in coastal regions'
        ]
    },
    'B.Sc Genetics': {
        name: 'B.Sc Genetics',
        fullForm: 'Bachelor of Science in Genetics',
        description: "An advanced biological science course focusing on heredity, genes, and variation in living organisms. Instrumental in revolutionary fields like personalized medicine, gene therapy, and genetic engineering.",
        duration: '3-4 years',
        subjects: ['Mendelian Genetics', 'Population Genetics', 'Molecular Genetics', 'Human Genetics', 'Cytogenetics'],
        careerOptions: ['Geneticist', 'Clinical Cytogeneticist', 'Genetic Counselor', 'Research Scientist'],
        admission: {
            exam: 'Merit-based, CUET, specialized university exams',
            availableIn: ['Government colleges', 'Private colleges', 'Deemed universities']
        },
        additionalInfo: [
            '🧬 Foundation for cutting-edge CRISPR and genetic editing',
            '🔬 High progression rate to MSc and PhD for research careers'
        ]
    },
    'B.A. English Literature': {
        name: 'B.A. English Literature',
        fullForm: 'Bachelor of Arts in English Literature',
        description: "An immersive program analyzing classic and contemporary literature, poetry, and drama in the English language. It sharply hones critical thinking, rhetorical analysis, and advanced writing skills.",
        duration: '3-4 years',
        subjects: ['British Literature', 'American Literature', 'Indian Writing in English', 'Literary Theory', 'Linguistics'],
        careerOptions: ['Content Writer', 'Journalist', 'Editor/Proofreader', 'Copywriter', 'Educator'],
        admission: {
            exam: 'Merit-based, CUET',
            availableIn: ['Government colleges', 'Private colleges', 'Central Universities']
        },
        additionalInfo: [
            '📖 Develops exceptionally strong communication skills',
            '✍️ Highly flexible degree applicable to media, law, and corporate comms'
        ]
    },
    'B.A. History': {
        name: 'B.A. History',
        fullForm: 'Bachelor of Arts in History',
        description: "The systematic study of past events, societies, and civilizations, analyzing the causes and effects of historical changes. It cultivates excellent analytical, research, and documentation capabilities.",
        duration: '3-4 years',
        subjects: ['Ancient Indian History', 'Medieval World History', 'Modern European History', 'Historiography', 'Cultural History'],
        careerOptions: ['Historian', 'Archivist', 'Museum Curator', 'Civil Services (IAS/IPS)'],
        admission: {
            exam: 'Merit-based, CUET',
            availableIn: ['Government colleges', 'Private colleges']
        },
        additionalInfo: [
            '🏛️ Provides profound context for modern socio-political climates',
            '📜 A very popular and strategic subject for UPSC aspirants'
        ]
    },
    'B.A. Political Science': {
        name: 'B.A. Political Science',
        fullForm: 'Bachelor of Arts in Political Science',
        description: "Examines systems of governance, political behavior, and institutional structures at both national and international levels. Understands the distribution of power and resources in societies.",
        duration: '3-4 years',
        subjects: ['Political Theory', 'Comparative Politics', 'International Relations', 'Public Administration', 'Indian Constitution'],
        careerOptions: ['Political Analyst', 'Public Relations Specialist', 'Legislative Assistant', 'Journalist'],
        admission: {
            exam: 'Merit-based, CUET',
            availableIn: ['Government colleges', 'Private colleges', 'Central Universities']
        },
        additionalInfo: [
            '⚖️ Ideal foundation for pursuing a career in Law or Public Policy',
            '🌐 Deepens understanding of global geo-politics'
        ]
    },
    'B.A. Economics': {
        name: 'B.A. Economics',
        fullForm: 'Bachelor of Arts in Economics',
        description: "A highly analytical degree examining the production, distribution, and consumption of wealth and resources. It combines rigorous mathematical modeling with vast social theories.",
        duration: '3-4 years',
        subjects: ['Microeconomics', 'Macroeconomics', 'Econometrics', 'Development Economics', 'International Economics'],
        careerOptions: ['Economist', 'Financial Risk Analyst', 'Data Analyst', 'Investment Analyst'],
        admission: {
            exam: 'Merit-based, CUET, Math proficiency often required',
            availableIn: ['Government colleges', 'Private colleges']
        },
        additionalInfo: [
            '📈 One of the most sought-after and highly paid courses in Humanities',
            '💹 Directly translates into careers in banking, finance, and consulting'
        ]
    },
    'B.A. Sociology': {
        name: 'B.A. Sociology',
        fullForm: 'Bachelor of Arts in Sociology',
        description: "The study of human society, social behavior, organized groups, and institutional structures. It explores the dynamics of social change, class, religion, and demography.",
        duration: '3-4 years',
        subjects: ['Sociological Thinkers', 'Sociology of India', 'Social Stratification', 'Research Methodology', 'Gender Studies'],
        careerOptions: ['Social Worker', 'Market Research Analyst', 'Human Resources Specialist', 'Community Developer'],
        admission: {
            exam: 'Merit-based, CUET',
            availableIn: ['Government colleges', 'Private colleges']
        },
        additionalInfo: [
            '🤝 Develops strong qualitative research methods',
            '🌍 Valuable for roles in NGOs, CSR, and public welfare administration'
        ]
    },
    'B.A. Psychology': {
        name: 'B.A. Psychology',
        fullForm: 'Bachelor of Arts in Psychology',
        description: "Explores the human mind and behavior from developmental, cognitive, and clinical perspectives. Provides insight into how humans feel, act, and interact with their environments.",
        duration: '3-4 years',
        subjects: ['General Psychology', 'Developmental Psychology', 'Abnormal Psychology', 'Social Psychology', 'Research Methods & Statistics'],
        careerOptions: ['Counselor', 'Human Resources Consultant', 'Market Researcher', 'Social Worker', 'Clinical Psychologist (post-M.A.)'],
        admission: {
            exam: 'Merit-based, CUET, Specific University Entrances',
            availableIn: ['Government colleges', 'Private colleges', 'Deemed universities']
        },
        additionalInfo: [
            '🧠 Heavy emphasis on empirical research and case studies',
            '🗣️ Increasing demand in corporate mental health and clinical sectors'
        ]
    },
    'B.A. Journalism & Mass Communication': {
        name: 'B.A. Journalism & Mass Communication',
        fullForm: 'Bachelor of Arts in Journalism & Mass Communication',
        description: "A robust professional course focusing on media theories, reporting across diverse platforms, and corporate communications. Prepares students for the fast-paced world of digital and print media.",
        duration: '3-4 years',
        subjects: ['Reporting & Editing', 'Media Ethics', 'Public Relations & Corporate Comm', 'Digital Media Marketing', 'Broadcast Journalism'],
        careerOptions: ['Journalist / Reporter', 'Public Relations Officer', 'Content Strategist', 'Social Media Manager', 'Copywriter'],
        admission: {
            exam: 'Merit-based, CUET, JMI/IPU CET',
            availableIn: ['Government colleges', 'Private colleges', 'Media specialized institutes']
        },
        additionalInfo: [
            '🎙️ Very practical, hands-on portfolio building',
            '📷 Covers writing, video production, and PR strategies'
        ]
    },
    'B.A. Geography': {
        name: 'B.A. Geography',
        fullForm: 'Bachelor of Arts in Geography',
        description: "Similar to B.Sc Geography but with a stronger lean towards human and economic geography rather than physical sciences. Analyzes spatial organizations of human societies and their environments.",
        duration: '3-4 years',
        subjects: ['Human Geography', 'Economic Geography', 'Regional Planning', 'Cartography', 'Environmental Geography'],
        careerOptions: ['Urban Planner', 'Travel & Tourism Manager', 'Demographer', 'GIS Analyst'],
        admission: {
            exam: 'Merit-based, CUET',
            availableIn: ['Government colleges', 'Private colleges']
        },
        additionalInfo: [
            '🗺️ Blend of sociology, economics, and spatial analysis',
            '🌍 Strong foundation for town planning and civil services'
        ]
    },
    'B.A. Music': {
        name: 'B.A. Music',
        fullForm: 'Bachelor of Arts in Music',
        description: "A specialized performance and theoretical arts degree dedicated to musical history, composition, and vocal or instrumental proficiency. Preserves classical traditions while exploring modern soundscapes.",
        duration: '3-4 years',
        subjects: ['Music Theory', 'History of Music', 'Vocal/Instrumental Practical', 'Acoustics', 'Music Composition'],
        careerOptions: ['Professional Musician', 'Music Therapist', 'Sound Engineer', 'Music Educator / Teacher'],
        admission: {
            exam: 'Merit-based + Practical Auditions',
            availableIn: ['Specialized Arts Colleges', 'Central Universities']
        },
        additionalInfo: [
            '🎵 Requires rigorous daily practice and dedication',
            '🎹 Auditions are standard procedure for college admission'
        ]
    },

'B.A. Dance': {
        name: 'B.A. Dance',
        fullForm: 'Bachelor of Arts in Dance',
        description: "An immersive program focusing on classical, contemporary, and folk dance forms. It combines rigorous physical training with the study of dance history, choreography, and performance arts.",
        duration: '3-4 years',
        subjects: ['Classical Dance Theory & Practice', 'Choreography', 'History of Performing Arts', 'Rhythm & Acoustics', 'Stage Make-up & Lighting'],
        careerOptions: ['Professional Dancer', 'Choreographer', 'Dance Instructor', 'Creative Director'],
        admission: {
            exam: 'Merit-based & Practical Auditions',
            availableIn: ['Specialized Arts Colleges', 'Universities']
        },
        additionalInfo: [
            '💃 Intense physical discipline required',
            '🎭 Direct pathway to the entertainment and theatre industry'
        ]
    },
    'B.A. Film Studies': {
        name: 'B.A. Film Studies',
        fullForm: 'Bachelor of Arts in Film Studies',
        description: "Explores the history, theory, and criticism of cinema across global cultures. It builds a foundation for understanding the aesthetic, social, and political impact of the moving image.",
        duration: '3-4 years',
        subjects: ['History of World Cinema', 'Film Theory and Criticism', 'Screenwriting', 'Cinematography Basics', 'Media Ethics'],
        careerOptions: ['Film Critic', 'Screenwriter', 'Assistant Director', 'Media Researcher'],
        admission: {
            exam: 'Merit-based, CUET, FTII Entrance',
            availableIn: ['Film Schools', 'Universities', 'Private colleges']
        },
        additionalInfo: [
            '🎬 Perfect for cinephiles aiming for a career in media analysis',
            '🎥 Focuses heavily on critical viewing and writing'
        ]
    },
    'B.A. Linguistics': {
        name: 'B.A. Linguistics',
        fullForm: 'Bachelor of Arts in Linguistics',
        description: "The scientific study of language, its structure, meaning, and context. It delves into syntax, semantics, and how language functions in society and the human brain.",
        duration: '3-4 years',
        subjects: ['Phonetics & Phonology', 'Syntax', 'Semantics', 'Sociolinguistics', 'Historical Linguistics'],
        careerOptions: ['Linguist', 'Speech Therapist (with further study)', 'Translator', 'Lexicographer', 'NLP Researcher'],
        admission: {
            exam: 'Merit-based, CUET',
            availableIn: ['Central Universities', 'State Universities']
        },
        additionalInfo: [
            '🗣️ Unlocks highly specialized roles in AI (Natural Language Processing)',
            '🧠 Bridges the gap between humanities and cognitive science'
        ]
    },
    'B.A. Foreign Languages': {
        name: 'B.A. Foreign Languages',
        fullForm: 'Bachelor of Arts in Foreign Languages',
        description: "Provides fluency in a specific foreign language (like French, German, Spanish, Japanese) along with a deep understanding of its associated literature, culture, and history.",
        duration: '3-4 years',
        subjects: ['Grammar & Composition', 'Spoken Language & Phonetics', 'Foreign Literature', 'Cultural History', 'Translation Studies'],
        careerOptions: ['Translator', 'Interpreter', 'Diplomat', 'Foreign Language Teacher', 'Tourism Consultant'],
        admission: {
            exam: 'Merit-based, CUET, JNU Entrance Exam',
            availableIn: ['Central Universities', 'Language Institutes']
        },
        additionalInfo: [
            '🌍 High demand in multinational corporations and embassies',
            '✈️ Offers excellent opportunities for working abroad'
        ]
    },
    'B.A. Tourism & Hospitality Management': {
        name: 'B.A. Tourism & Hospitality Management',
        fullForm: 'Bachelor of Arts in Tourism & Hospitality Management',
        description: "Prepares students for dynamic careers in the travel, tourism, and hotel industries. Focuses on customer service, event management, and the economics of global tourism.",
        duration: '3-4 years',
        subjects: ['Tourism Principles', 'Hospitality Operations', 'Event Management', 'Travel Agency Management', 'Customer Relationship Management'],
        careerOptions: ['Tour Manager', 'Hotel Manager', 'Event Coordinator', 'Travel Consultant'],
        admission: {
            exam: 'Merit-based, NCHMCT JEE',
            availableIn: ['Government colleges', 'Private colleges', 'Hotel Management Institutes']
        },
        additionalInfo: [
            '🏨 Includes practical training and internships in top hotels',
            '✈️ Ideal for outgoing individuals who love traveling'
        ]
    },
    'B.A. International Relations': {
        name: 'B.A. International Relations',
        fullForm: 'Bachelor of Arts in International Relations',
        description: "Studies the interactions between nations, international organizations, and global NGOs. It focuses heavily on global politics, human rights, global economics, and conflict resolution.",
        duration: '3-4 years',
        subjects: ['Global Politics', 'International Law', 'Foreign Policy', 'Political Economy', 'Peace and Conflict Studies'],
        careerOptions: ['Diplomat', 'Policy Analyst', 'International NGO Worker', 'Political Risk Consultant'],
        admission: {
            exam: 'Merit-based, CUET',
            availableIn: ['Central Universities', 'Private colleges']
        },
        additionalInfo: [
            '🌐 Best path toward joining the Indian Foreign Service (IFS)',
            '🤝 Crucial for roles within the UN and global think-tanks'
        ]
    },
    'B.A. Visual Arts': {
        name: 'B.A. Visual Arts',
        fullForm: 'Bachelor of Arts in Visual Arts',
        description: "A creative program focused on the development of practical artistic skills and theoretical understanding of art history. Includes painting, sculpture, printing, and digital arts.",
        duration: '3-4 years',
        subjects: ['History of Art', 'Drawing and Painting', 'Sculpture', 'Printmaking', 'Visual Cultural Studies'],
        careerOptions: ['Fine Artist', 'Art Director', 'Museum Curator', 'Illustrator', 'Art Teacher'],
        admission: {
            exam: 'Merit-based & Portfolio/Aptitude Test',
            availableIn: ['Art Colleges', 'Private colleges', 'Universities']
        },
        additionalInfo: [
            '🎨 Heavy emphasis on portfolio creation',
            '🖼️ Leads to independent art careers or agency-based design roles'
        ]
    },
    'B.A. Criminology & Criminal Justice': {
        name: 'B.A. Criminology & Criminal Justice',
        fullForm: 'Bachelor of Arts in Criminology & Criminal Justice',
        description: "Analyzes the causes, prevention, and consequences of crime from a sociological and psychological perspective. It studies the criminal justice system, forensics, and penal systems.",
        duration: '3-4 years',
        subjects: ['Introduction to Criminology', 'Criminal Law', 'Forensic Science', 'Penology & Victimology', 'Juvenile Justice'],
        careerOptions: ['Criminologist', 'Police Officer', 'Forensic Analyst', 'Probation Officer'],
        admission: {
            exam: 'Merit-based, CUET',
            availableIn: ['Government colleges', 'Universities']
        },
        additionalInfo: [
            '🔍 Excellent foundation for IPS and forensic careers',
            '🧠 Combines sociology, psychology, and law'
        ]
    },
    'Bachelor of Commerce': {
        name: 'Bachelor of Commerce',
        fullForm: 'Bachelor of Commerce (B.Com)',
        description: "A foundational undergraduate degree in business and commerce. It provides a broad understanding of accounting, finance, taxation, and business management principles.",
        duration: '3-4 years',
        subjects: ['Financial Accounting', 'Corporate Laws', 'Business Economics', 'Income Tax Law & Practice', 'Cost Accounting'],
        careerOptions: ['Accountant', 'Financial Analyst', 'Tax Consultant', 'Auditor'],
        admission: {
            exam: 'Merit-based, CUET',
            availableIn: ['Government colleges', 'Private colleges', 'Universities']
        },
        additionalInfo: [
            '📊 The standard preparatory degree for CA, CS, and CMA',
            '💼 Highly versatile degree for corporate jobs'
        ]
    },
    'B.Com in Accounting & Finance': {
        name: 'B.Com in Accounting & Finance',
        fullForm: 'Bachelor of Commerce in Accounting & Finance',
        description: "A specialized B.Com variant that dives deeper into advanced accounting frameworks and financial markets. Designed for students aiming specifically for high-level finance roles.",
        duration: '3-4 years',
        subjects: ['Advanced Financial Accounting', 'Financial Management', 'Auditing', 'Security Analysis', 'Corporate Finance'],
        careerOptions: ['Financial Accountant', 'Investment Analyst', 'Internal Auditor', 'Wealth Manager'],
        admission: {
            exam: 'Merit-based, CUET',
            availableIn: ['Government colleges', 'Private colleges']
        },
        additionalInfo: [
            '🧮 More rigorous and math-intensive than a general B.Com',
            '🏦 Ideal for careers in investment banking and audit firms'
        ]
    },
    'B.Com in Banking & Insurance': {
        name: 'B.Com in Banking & Insurance',
        fullForm: 'Bachelor of Commerce in Banking & Insurance',
        description: "Focuses specifically on the operations, regulations, and economics of the banking and insurance sectors. Prepares students directly for the financial services industry.",
        duration: '3-4 years',
        subjects: ['Principles of Banking', 'Insurance Law & Practice', 'Risk Management', 'Financial Markets', 'Commercial Banking'],
        careerOptions: ['Bank Officer', 'Insurance Agent/Broker', 'Underwriter', 'Loan Officer'],
        admission: {
            exam: 'Merit-based, CUET',
            availableIn: ['Government colleges', 'Private colleges']
        },
        additionalInfo: [
            '🏦 Direct alignment with IBPS, SBI, and insurance sector exams',
            '🛡️ Growing demand due to expanding fintech and insurance markets'
        ]
    },
    'B.Com in CMA': {
        name: 'B.Com in CMA',
        fullForm: 'Bachelor of Commerce in Certified Management Accountant',
        description: "An integrated degree program that incorporates the curriculum of the globally recognized CMA (Certified Management Accountant) certification, focusing on financial planning, analysis, and control.",
        duration: '3-4 years',
        subjects: ['Financial Reporting', 'Strategic Financial Management', 'Cost Management', 'Performance Management', 'Business Ethics'],
        careerOptions: ['Management Accountant', 'Financial Controller', 'Cost Analyst', 'CFO'],
        admission: {
            exam: 'Merit-based, University specific tests',
            availableIn: ['Private colleges', 'Deemed universities']
        },
        additionalInfo: [
            '🌐 Globally recognized qualification embedded in the degree',
            '📈 High earning potential in corporate finance'
        ]
    },
    'B.Com ACCA': {
        name: 'B.Com ACCA',
        fullForm: 'Bachelor of Commerce with ACCA',
        description: "Integrates the curriculum of the Association of Chartered Certified Accountants (ACCA) UK with a B.Com degree. Offers students significant exemptions in ACCA papers.",
        duration: '3-4 years',
        subjects: ['Business and Technology', 'Management Accounting', 'Financial Accounting', 'Corporate and Business Law', 'Taxation'],
        careerOptions: ['Chartered Certified Accountant', 'Tax Advisor', 'Forensic Accountant', 'Chief Financial Officer'],
        admission: {
            exam: 'Merit-based',
            availableIn: ['Private colleges', 'Deemed universities']
        },
        additionalInfo: [
            '🇬🇧 Opens doors for global accounting careers across 180+ countries',
            '📝 Students get up to 6-9 paper exemptions for the ACCA exams'
        ]
    },
    'B.Com in CA': {
        name: 'B.Com in CA',
        fullForm: 'Bachelor of Commerce with Computer Applications',
        description: "Blends commerce and foundational IT subjects. It prepares students for modern accounting environments where software (like Tally, ERP) is as important as accounting principles.",
        duration: '3-4 years',
        subjects: ['Financial Accounting', 'C++ / Java Programming', 'Database Management', 'E-Commerce', 'Computerized Accounting'],
        careerOptions: ['Computer Programmer', 'Financial Analyst', 'E-Commerce Specialist', 'IT Consultant'],
        admission: {
            exam: 'Merit-based',
            availableIn: ['Government colleges', 'Private colleges']
        },
        additionalInfo: [
            '💻 Perfectly bridges commerce skills with tech literacy',
            '⌨️ High demand for ERP and Tally specialists in modern businesses'
        ]
    },
    'Bachelor of Economics': {
        name: 'Bachelor of Economics',
        fullForm: 'Bachelor of Economics (B.Econ / B.A. Econ Hons)',
        description: "A highly rigorous analytical degree focused on economic theories, statistical analysis, and financial modeling to understand global and local markets.",
        duration: '3-4 years',
        subjects: ['Microeconomics', 'Macroeconomics', 'Econometrics', 'Public Finance', 'International Trade'],
        careerOptions: ['Economist', 'Financial Risk Analyst', 'Data Analyst', 'Investment Banker'],
        admission: {
            exam: 'Merit-based, CUET',
            availableIn: ['Government colleges', 'Private colleges', 'Central Universities']
        },
        additionalInfo: [
            '💹 Requires strong mathematical and statistical aptitude',
            '📈 Leads to premium roles in consulting and investment banking'
        ]
    },
    'Bachelor of Actuarial Science': {
        name: 'Bachelor of Actuarial Science',
        fullForm: 'Bachelor of Science in Actuarial Science',
        description: "Applies mathematical and statistical methods to assess risk in insurance, finance, and other industries. It is one of the most highly specialized and mathematically intensive degrees available.",
        duration: '3-4 years',
        subjects: ['Financial Mathematics', 'Probability Models', 'Actuarial Statistics', 'Survival Analysis', 'Risk Management'],
        careerOptions: ['Actuary', 'Risk Analyst', 'Insurance Underwriter', 'Investment Consultant'],
        admission: {
            exam: 'Merit-based, university entrance (Actuarial Common Entrance Test - ACET preferred)',
            availableIn: ['Private colleges', 'Some Central Universities']
        },
        additionalInfo: [
            '🧮 One of the highest-paying professions globally',
            '🛡️ Direct pathway into the elite insurance and risk management sectors'
        ]
    },
    'D.Pharm': {
        name: 'D.Pharm',
        fullForm: 'Diploma in Pharmacy',
        description: "A foundational, short-term diploma course that teaches the basics of pharmacy, pharmacology, and drug dispensing. It is the minimum qualification required to open a retail pharmacy in India.",
        duration: '2 years',
        subjects: ['Pharmaceutics', 'Pharmaceutical Chemistry', 'Pharmacognosy', 'Biochemistry', 'Human Anatomy & Physiology'],
        careerOptions: ['Pharmacist', 'Medical Representative', 'Chemist Shop Owner', 'Hospital Pharmacist'],
        admission: {
            exam: 'Merit-based, State Diploma Entrance Exams',
            availableIn: ['Pharmacy Colleges', 'Government institutions']
        },
        additionalInfo: [
            '💊 Quickest route to obtaining a registered pharmacist license',
            '🏥 Direct employment opportunities in retail and hospital pharmacies'
        ]
    },
    'B.Pharm': {
        name: 'B.Pharm',
        fullForm: 'Bachelor of Pharmacy',
        description: "A comprehensive undergraduate degree covering drug formulation, testing, pharmacological action, and regulations. It is essential for careers in pharmaceutical manufacturing, R&D, and clinical research.",
        duration: '4 years',
        subjects: ['Pharmaceutics', 'Pharmacology', 'Pharmaceutical Analysis', 'Medicinal Chemistry', 'Biopharmaceutics'],
        careerOptions: ['Drug Inspector', 'Clinical Research Associate', 'Quality Control Officer', 'Formulation Scientist'],
        admission: {
            exam: 'NEET, KEAM, MHT CET, State Pharmacy Entrances',
            availableIn: ['Government colleges', 'Private pharmacy colleges', 'Universities']
        },
        additionalInfo: [
            '🏭 Gateway to India’s massive pharmaceutical manufacturing industry',
            '🔬 Strong focus on drug R&D and quality control'
        ]
    },
    'Pharm D': {
        name: 'Pharm D',
        fullForm: 'Doctor of Pharmacy',
        description: "A professional doctorate in pharmacy focusing heavily on clinical pharmacy practice, patient care, and therapeutic drug monitoring. Graduates act as medication experts alongside doctors in hospitals.",
        duration: '6 years (5 years academic + 1 year internship)',
        subjects: ['Pathophysiology', 'Pharmacotherapeutics', 'Clinical Pharmacy', 'Hospital Pharmacy', 'Biostatistics'],
        careerOptions: ['Clinical Pharmacist', 'Drug Safety Associate', 'Medical Writer', 'Pharmacovigilance Officer'],
        admission: {
            exam: 'State and University specific Entrances',
            availableIn: ['Private pharmacy colleges', 'Deemed universities']
        },
        additionalInfo: [
            '🩺 Doctor prefix allows direct involvement in patient ward rounds',
            '📈 High demand in hospitals for pharmacovigilance and drug safety'
        ]
    },
    'B.Des (Fashion, Interior, Graphic)': {
        name: 'B.Des (Fashion, Interior, Graphic)',
        fullForm: 'Bachelor of Design',
        description: "A premier creative degree offering specializations in Fashion, Interior, or Graphic design. It blends aesthetics, functionality, and modern design software training.",
        duration: '4 years',
        subjects: ['Design Foundation', 'Material Studies', 'CAD/Computer Graphics', 'Design Thinking', 'Studio Practice (depending on specialization)'],
        careerOptions: ['Fashion Designer', 'Interior Designer', 'Graphic Designer', 'UI/UX Designer', 'Art Director'],
        admission: {
            exam: 'NID DAT, UCEED, NIFT Entrance',
            availableIn: ['NIFT', 'NID', 'Private Design Universities']
        },
        additionalInfo: [
            '🎨 Elite design degree with very competitive entrance exams',
            '💻 Heavy emphasis on creating a professional design portfolio'
        ]
    },
    'Product Design': {
        name: 'Product Design',
        fullForm: 'Bachelor of Design in Product Design',
        description: "Focuses on the creation of tangible and digital products that solve user problems. It merges ergonomics, engineering, aesthetics, and user experience (UX) to design everything from consumer electronics to furniture.",
        duration: '4 years',
        subjects: ['Ergonomics', 'CAD/CAM', 'Material Science', 'Design Thinking', 'Industrial Design Prototyping'],
        careerOptions: ['Product Designer', 'Industrial Designer', 'UX Researcher', 'Automotive Designer'],
        admission: {
            exam: 'NID DAT, UCEED, Private Design Entrances',
            availableIn: ['NID', 'IITs (via UCEED)', 'Private Design Colleges']
        },
        additionalInfo: [
            '🛠️ Lots of hands-on prototyping and 3D modeling work',
            '💡 Crucial role in tech and manufacturing startups'
        ]
    },
    'BFA': {
        name: 'BFA',
        fullForm: 'Bachelor of Fine Arts',
        description: "An intensive studio-based program aimed at highly skilled artists looking to perfect their craft in painting, sculpture, applied arts, or photography.",
        duration: '4 years',
        subjects: ['Drawing & Illustration', 'Painting', 'Printmaking', 'Sculpture', 'History of Art'],
        careerOptions: ['Fine Artist', 'Illustrator', 'Art Director', 'Animator', 'Art Teacher'],
        admission: {
            exam: 'Merit-based + Practical Skill Test / Portfolio',
            availableIn: ['Government Art Colleges', 'Private universities']
        },
        additionalInfo: [
            '🖼️ Primarily evaluated on practical studio output rather than written exams',
            '🖌️ Path to specialized careers like muralists or exhibition artists'
        ]
    },
    'B.Sc Animation & Multimedia': {
        name: 'B.Sc Animation & Multimedia',
        fullForm: 'Bachelor of Science in Animation & Multimedia',
        description: "A technology-driven creative degree training students in 2D/3D animation, VFX, and digital media production. Essential for careers in gaming, film, and advertising.",
        duration: '3 years',
        subjects: ['3D Modeling', 'Character Animation', 'Visual Effects (VFX)', 'Digital Sculpting', 'Storyboarding'],
        careerOptions: ['3D Animator', 'VFX Artist', 'Game Designer', 'Video Editor'],
        admission: {
            exam: 'Merit-based or Aptitude Test',
            availableIn: ['Private colleges', 'Media Institutes']
        },
        additionalInfo: [
            '🎮 Booming demand in the gaming and OTT streaming industries',
            '💻 Extensive use of industry software like Maya, Blender, and After Effects'
        ]
    },
    'B.Sc Film & Television Production': {
        name: 'B.Sc Film & Television Production',
        fullForm: 'Bachelor of Science in Film & Television Production',
        description: "Provides hands-on technical training in the actual production process of film and TV, including camera operations, lighting, sound design, and post-production.",
        duration: '3 years',
        subjects: ['Cinematography', 'Sound Recording & Editing', 'Video Editing', 'Directing', 'Scriptwriting'],
        careerOptions: ['Cinematographer', 'Video Editor', 'Sound Engineer', 'Director'],
        admission: {
            exam: 'Merit-based, Media Entrances',
            availableIn: ['Film Schools', 'Private colleges']
        },
        additionalInfo: [
            '🎥 Highly technical, focusing on equipment handling and editing software',
            '🎬 Lots of field projects and short-film creation'
        ]
    },
    'B.Sc Visual Communication': {
        name: 'B.Sc Visual Communication',
        fullForm: 'Bachelor of Science in Visual Communication (VisCom)',
        description: "A popular media course that covers a broad spectrum of visual arts, including graphic design, photography, advertising, and video production.",
        duration: '3 years',
        subjects: ['Graphic Design', 'Photography', 'Advertising', 'Web Design', 'Media Ethics'],
        careerOptions: ['Graphic Designer', 'Photographer', 'Ad Executive', 'UI Designer'],
        admission: {
            exam: 'Merit-based, Aptitude Test',
            availableIn: ['Government colleges', 'Private colleges (Very popular in South India)']
        },
        additionalInfo: [
            '📸 A very versatile degree offering multiple creative career paths',
            '🎨 Prepares students well for ad agencies and digital marketing firms'
        ]
    },

'B.Sc Gaming & VFX': {
        name: 'B.Sc Gaming & VFX',
        fullForm: 'Bachelor of Science in Gaming & Visual Effects',
        description: "A highly specialized tech-creative degree dealing with the complete pipeline of game development and cinematic visual effects. Students learn to create immersive virtual worlds, character models, and special effects.",
        duration: '3 years',
        subjects: ['Game Engine Programming (Unity/Unreal)', '3D Character Modeling', 'Compositing & Rotoscopy', 'Game Level Design', 'C# / C++ Programming'],
        careerOptions: ['Game Designer', 'VFX Supervisor', 'Technical Artist', 'Level Designer'],
        admission: {
            exam: 'Merit-based, Institute-specific Entrance Date',
            availableIn: ['Private colleges', 'Media Institutes']
        },
        additionalInfo: [
            '🎮 Incredible demand in mobile and AAA game dev studios',
            '💻 Requires a strong portfolio of 3D models and short games to excel'
        ]
    },
    'B.P.Ed': {
        name: 'B.P.Ed',
        fullForm: 'Bachelor of Physical Education',
        description: "Designed for individuals passionate about sports, fitness, and health education. It primarily trains students to become physical education teachers or sports coaches in schools and academies.",
        duration: '2-3 years',
        subjects: ['Sports Psychology', 'Kinesiology & Biomechanics', 'Anatomy & Physiology', 'Officiating & Coaching', 'Yoga Education'],
        careerOptions: ['Physical Education Teacher (PET)', 'Sports Coach', 'Fitness Trainer', 'Sports Manager'],
        admission: {
            exam: 'Physical Fitness Test, State B.P.Ed Entrance',
            availableIn: ['Government colleges', 'Private colleges', 'Universities']
        },
        additionalInfo: [
            '🏃 Mandatory physical fitness test for admission',
            '⚽ Gateway degree for securing PET jobs in government schools'
        ]
    },
    'B.Sc Sports Science': {
        name: 'B.Sc Sports Science',
        fullForm: 'Bachelor of Science in Sports Science',
        description: "A scientific study of human performance during exercise and sports. It leverages biochemistry, physiology, and biomechanics to enhance athletic endurance and prevent sports injuries.",
        duration: '3-4 years',
        subjects: ['Sports Biomechanics', 'Exercise Physiology', 'Sports Nutrition', 'Motor Control & Learning', 'Sports Injury Management'],
        careerOptions: ['Sports Scientist', 'Performance Analyst', 'Strength and Conditioning Coach', 'Sports Nutritionist'],
        admission: {
            exam: 'Merit-based, CUET',
            availableIn: ['Specialized Sports Universities', 'Private colleges']
        },
        additionalInfo: [
            '🧬 Focuses on the science behind creating elite athletes',
            '📈 High demand in national sports federations and pro leagues'
        ]
    },
    'B.Sc Exercise & Fitness': {
        name: 'B.Sc Exercise & Fitness',
        fullForm: 'Bachelor of Science in Exercise & Fitness',
        description: "Concentrates on personal training, wellness programs, and the physiological response to exercise. It aims to combat lifestyle diseases by prescribing scientifically backed fitness regimes.",
        duration: '3 years',
        subjects: ['Human Anatomy', 'Fitness Assessment', 'Exercise Prescription', 'Diet & Nutrition', 'Rehabilitation Techniques'],
        careerOptions: ['Fitness Center Manager', 'Personal Trainer', 'Corporate Wellness Coordinator', 'Health Consultant'],
        admission: {
            exam: 'Merit-based',
            availableIn: ['Private colleges', 'Health Institutes']
        },
        additionalInfo: [
            '🏋️ Perfect for careers in the booming modern fitness and gym industry',
            '🧘‍♂️ Combines physical training with nutritional science'
        ]
    },
    'B.Sc Yoga & Naturopathy': {
        name: 'B.Sc Yoga & Naturopathy',
        fullForm: 'Bachelor of Science in Yoga & Naturopathy',
        description: "Explores the ancient science of Yoga combined with natural healing techniques. It emphasizes preventive healthcare, focusing on holistic physical, mental, and spiritual well-being without conventional medicine.",
        duration: '3 years',
        subjects: ['Foundations of Yoga', 'Patanjali Yoga Sutras', 'Naturopathy Principles', 'Diet Therapy', 'Human Physiology'],
        careerOptions: ['Yoga Instructor', 'Naturopathy Consultant', 'Wellness Coach', 'Rehab Therapist'],
        admission: {
            exam: 'Merit-based, CUET',
            availableIn: ['Government Yoga Institutes', 'Private colleges']
        },
        additionalInfo: [
            '🌿 Great demand globally for holistic healing centers and retreats',
            '🧘 Requires deep personal commitment to the yogic lifestyle'
        ]
    },
    'Commercial Pilot License': {
        name: 'Commercial Pilot License',
        fullForm: 'Commercial Pilot License (CPL) Training',
        description: "A highly intensive, specialized aviation training program certified by the DGCA (in India) that authorizes an individual to act as a pilot of an aircraft and be paid for their work. It requires rigorous flying hours and written technical exams.",
        duration: '1.5 - 2 years',
        subjects: ['Aviation Meteorology', 'Air Navigation', 'Air Regulations', 'Technical General (Aircraft Engines)', 'Radio Telephony (RTR)'],
        careerOptions: ['Airline Pilot', 'Charter Pilot', 'Flight Instructor', 'Corporate Pilot'],
        admission: {
            exam: 'DGCA Medical Class I & II, SPL, Extrance exams for Flying Clubs',
            availableIn: ['Government Flying Clubs (IGRUA)', 'Private Flying Schools globally']
        },
        additionalInfo: [
            '✈️ Requires exactly 200 hours of actual flying time for the Indian DGCA CPL',
            '💰 Very high training cost but extremely lucrative career'
        ]
    },
    'B.Sc Aviation': {
        name: 'B.Sc Aviation',
        fullForm: 'Bachelor of Science in Aviation',
        description: "Provides a thorough academic base in the science of flying, aircraft mechanics, and air traffic control. It is often pursued alongside or before obtaining a Commercial Pilot License.",
        duration: '3 years',
        subjects: ['Aerodynamics', 'Aircraft Systems', 'Aviation Meteorology', 'Air Traffic Control', 'Aviation Security'],
        careerOptions: ['Pilot (with CPL)', 'Air Traffic Controller', 'Aviation Safety Officer', 'Flight Dispatcher'],
        admission: {
            exam: 'Merit-based, University Entrances',
            availableIn: ['Private Aviation Academies', 'Universities']
        },
        additionalInfo: [
            '🛫 Perfect foundational degree before joining a flight school',
            '🌍 Comprehensive coverage of the entire aviation industry'
        ]
    },
    'B.Sc Nautical Science': {
        name: 'B.Sc Nautical Science',
        fullForm: 'Bachelor of Science in Nautical Science',
        description: "The primary degree required to become a Deck Officer in the Merchant Navy. It involves studying ship navigation, cargo handling, seamanship, and maritime law.",
        duration: '3 years',
        subjects: ['Navigation', 'Voyage Planning', 'Ship Operation & Cargo Handling', 'Marine Meteorology', 'Naval Architecture Basics'],
        careerOptions: ['Deck Cadet', 'Navigating Officer', 'Captain / Master Mariner', 'Marine Superintendent'],
        admission: {
            exam: 'IMU-CET (Indian Maritime University Common Entrance Test)',
            availableIn: ['Indian Maritime University (IMU) campuses', 'DG Shipping approved Private Institutes']
        },
        additionalInfo: [
            '⚓ Strict physical and eyesight (6/6) requirements',
            '🚢 Highly adventurous career involving sailing across the globe'
        ]
    },
    'BBA/B.Com Aviation Management': {
        name: 'BBA/B.Com Aviation Management',
        fullForm: 'BBA or B.Com in Aviation Management',
        description: "Focuses on the business, operational, and financial aspects of the aviation sector. Covers airport handling, airline economics, and fleet management.",
        duration: '3 years',
        subjects: ['Airline Operations', 'Airport Management', 'Aviation Law', 'Travel and Tourism Management', 'Logistics & Supply Chain'],
        careerOptions: ['Airport Station Manager', 'Airline Operations Manager', 'Ground Handling Manager', 'Revenue Analyst'],
        admission: {
            exam: 'Merit-based, CUET',
            availableIn: ['Private colleges', 'Universities']
        },
        additionalInfo: [
            '💼 Targets the fast-growing corporate side of the aviation industry',
            '🛬 Ideal for managing complex airport ground operations'
        ]
    },
    'B.Sc Airport & Airline Management': {
        name: 'B.Sc Airport & Airline Management',
        fullForm: 'Bachelor of Science in Airport & Airline Management',
        description: "Similar to Aviation Management, but with a more technical and procedural focus on terminal operations, aviation safety protocols, and emergency management.",
        duration: '3 years',
        subjects: ['Airport Terminal Operations', 'Aviation Security', 'Cargo and Hazardous Material Handling', 'Emergency Procedures', 'Aviation Economics'],
        careerOptions: ['Airport Station Manager', 'Terminal Duty Manager', 'Aviation Security Officer', 'Flight Dispatcher'],
        admission: {
            exam: 'Merit-based',
            availableIn: ['Aviation Institutes', 'Private colleges']
        },
        additionalInfo: [
            '✈️ Focuses specifically on the ground and terminal environment',
            '🧳 Leads to roles ensuring the smooth flow of passengers and cargo'
        ]
    },
    'B.Sc Cabin Crew & Hospitality Management': {
        name: 'B.Sc Cabin Crew & Hospitality Management',
        fullForm: 'Bachelor of Science in Cabin Crew & Hospitality Management',
        description: "An industry-focused degree training students in in-flight services, passenger safety, first-aid, and ultra-premium hospitality standards for airlines and cruise lines.",
        duration: '3 years',
        subjects: ['In-flight Safety and Security', 'Aviation Medicine & First Aid', 'Passenger Handling', 'Grooming and Personality Development', 'Food & Beverage Service'],
        careerOptions: ['Air Hostess / Flight Steward', 'In-Flight Manager', 'Cruise Ship Hospitality Manager', 'VIP Lounge Manager'],
        admission: {
            exam: 'Merit-based & Personality/Medical Interviews',
            availableIn: ['Private Aviation Academies', 'Hospitality Institutes']
        },
        additionalInfo: [
            '👔 Extreme emphasis on grooming, communication, and personality',
            '🌍 Allows you to travel the world while working'
        ]
    },
    'B.Sc Aircraft Maintenance Engineering': {
        name: 'B.Sc Aircraft Maintenance Engineering',
        fullForm: 'B.Sc / License in Aircraft Maintenance Engineering (AME)',
        description: "Crucial engineering program focused on the repair, maintenance, and airworthiness of aircraft. AMEs sign the flight release certificate before any flight can take off.",
        duration: '3-4 years',
        subjects: ['Aircraft Structures', 'Jet Engine Mechanics', 'Avionics & Radar Systems', 'Aerodynamics', 'Aviation Legislation'],
        careerOptions: ['Aircraft Maintenance Engineer', 'Avionics Technician', 'Quality Control Inspector', 'Line Maintenance Engineer'],
        admission: {
            exam: 'AME CET (Common Entrance Test)',
            availableIn: ['DGCA approved AME Institutes']
        },
        additionalInfo: [
            '🔧 Requires clearing rigorous DGCA licensing module exams',
            '✈️ The aircraft absolutely cannot fly without an AME\'s signature'
        ]
    },
    'B.Sc Maritime Science': {
        name: 'B.Sc Maritime Science',
        fullForm: 'Bachelor of Science in Maritime Science',
        description: "A dual-capacity course combining elements of both Deck (Navigation) and Engine (Marine Engineering) sides of a merchant navy vessel. It trains Polyvalent Officers.",
        duration: '3 years',
        subjects: ['Marine Engineering Basics', 'Navigation Systems', 'Naval Architecture', 'Engine Room Operations', 'Maritime Law'],
        careerOptions: ['Dual Certificated Officer', 'Marine Surveyor', 'Port Operations Manager'],
        admission: {
            exam: 'IMU-CET',
            availableIn: ['Indian Maritime University (IMU)']
        },
        additionalInfo: [
            '🚢 Creates highly versatile officers capable of working on both deck and engine room',
            '⚓ Strict physical and medical standards apply'
        ]
    },
    'B.Sc Ship Building & Repair': {
        name: 'B.Sc Ship Building & Repair',
        fullForm: 'Bachelor of Science in Ship Building & Repair',
        description: "A technical niche degree addressing the construction, structure, outfitting, and structural maintenance of modern marine vessels at dry docks and shipyards.",
        duration: '3 years',
        subjects: ['Ship Geometry & Hydrostatics', 'Ship Structural Design', 'Welding & Metallurgy', 'Dry Docking Operations', 'Marine Piping Systems'],
        careerOptions: ['Shipyard Supervisor', 'Quality Surveyor', 'Ship Repair Manager', 'Marine Draftsman'],
        admission: {
            exam: 'IMU-CET or Merit-based',
            availableIn: ['IMU Campuses', 'Maritime Academies near coastal shipyards']
        },
        additionalInfo: [
            '🏗️ Completely land-based role in shipyards and dry docks',
            '🛠️ Heavy structural engineering focus'
        ]
    },
    'B.V.Sc & A.H': {
        name: 'B.V.Sc & A.H',
        fullForm: 'Bachelor of Veterinary Science & Animal Husbandry',
        description: "The official medical degree required to become a veterinary doctor. It covers the anatomy, surgery, and treatment of all animal species, alongside livestock management.",
        duration: '5.5 years',
        subjects: ['Veterinary Anatomy', 'Veterinary Pharmacology', 'Veterinary Surgery & Radiology', 'Animal Nutrition', 'Livestock Production Management'],
        careerOptions: ['Veterinary Surgeon', 'Wildlife Veterinarian', 'Dairy / Poultry Farm Manager', 'Animal Researcher'],
        admission: {
            exam: 'NEET / AIPVT / State Vet entrances (e.g., KEAM, RPVT)',
            availableIn: ['Government Veterinary Colleges', 'Private Veterinary Universities']
        },
        additionalInfo: [
            '🐾 Essential for anyone looking to surgically treat animals',
            '🏥 High demand in pet clinics, wildlife conservation, and agriculture'
        ]
    },
    'B.Sc Agriculture': {
        name: 'B.Sc Agriculture',
        fullForm: 'Bachelor of Science in Agriculture',
        description: "A professional degree focusing on the science and practice of farming, crop genetics, soil health, and modernized agricultural techniques. Crucial for food security.",
        duration: '4 years',
        subjects: ['Agronomy', 'Soil Science', 'Plant Breeding & Genetics', 'Agricultural Economics', 'Entomology'],
        careerOptions: ['Agriculture Officer', 'Agronomist', 'Plant Breeder', 'Farm Manager', 'Agri-Bank Officer'],
        admission: {
            exam: 'ICAR AIEEA, State Agri entrances (e.g., KEAM, KCET)',
            availableIn: ['State Agricultural Universities (SAUs)', 'Private universities']
        },
        additionalInfo: [
            '🌾 India’s backbone sector; huge government job opportunities (AFO, ADO)',
            '🚜 Integrates heavy field work with laboratory genetics'
        ]
    },
    'B.Sc Forestry': {
        name: 'B.Sc Forestry',
        fullForm: 'Bachelor of Science in Forestry',
        description: "Focuses on the conservation, management, and sustainable utilization of forest ecosystems and wildlife. Essential for climate change mitigation and timber management.",
        duration: '4 years',
        subjects: ['Silviculture', 'Forest Management', 'Wildlife Management', 'Wood Science', 'Forest Economics'],
        careerOptions: ['Forest Range Officer (FRO)', 'Wildlife Conservator', 'Plantation Manager', 'Environmental Consultant'],
        admission: {
            exam: 'ICAR AIEEA, State entrances',
            availableIn: ['State Agricultural/Forestry Universities']
        },
        additionalInfo: [
            '🌲 Direct pathway to the prestigious Indian Forest Service (IFS) via UPSC',
            '🏕️ Involves significant outdoor and wilderness field studies'
        ]
    },
    'B.Sc Fisheries': {
        name: 'B.Sc Fisheries',
        fullForm: 'Bachelor of Fisheries Science (B.F.Sc)',
        description: "Covers the biological and commercial aspects of fishing, aquaculture, oceanography, and aquatic biology. Vital for the seafood industry and marine conservation.",
        duration: '4 years',
        subjects: ['Aquaculture', 'Fish Pathology', 'Marine Biology', 'Fisheries Economics', 'Fish Processing Technology'],
        careerOptions: ['Fisheries Inspector', 'Aquaculture Manager', 'Marine Biologist', 'Seafood Quality Controller'],
        admission: {
            exam: 'ICAR AIEEA, State entrances',
            availableIn: ['Fisheries Universities', 'Coastal State Agri Universities']
        },
        additionalInfo: [
            '🐟 Huge export-oriented industry with massive commercial potential',
            '🌊 Blends marine biology with commercial farming techniques'
        ]
    },
    'B.Sc Horticulture': {
        name: 'B.Sc Horticulture',
        fullForm: 'Bachelor of Science in Horticulture',
        description: "A specialized branch of agriculture focused on the intensive commercial cultivation of fruits, vegetables, flowers, spices, and plantation crops.",
        duration: '4 years',
        subjects: ['Pomology (Fruits)', 'Olericulture (Vegetables)', 'Floriculture', 'Post-Harvest Technology', 'Plant Propagation'],
        careerOptions: ['Horticulture Officer', 'Landscape Designer', 'Floriculturist', 'Plantation Manager'],
        admission: {
            exam: 'ICAR AIEEA, State entrance exams',
            availableIn: ['State Agricultural Universities']
        },
        additionalInfo: [
            '🍎 High potential for entrepreneurship in commercial farming and landscaping',
            '🌸 Crucial for the food processing and floriculture industries'
        ]
    },
    'B.Sc Sericulture': {
        name: 'B.Sc Sericulture',
        fullForm: 'Bachelor of Science in Sericulture',
        description: "A highly specialized applied science degree dealing with the rearing of silkworms and the commercial production of silk yarn. Studies the entire lifecycle of the Bombyx mori.",
        duration: '4 years',
        subjects: ['Silkworm Anatomy & Physiology', 'Mulberry Cultivation', 'Silk Reeling Technology', 'Silkworm Pathology', 'Agri-Economics'],
        careerOptions: ['Sericulture Inspector', 'Silk Farm Manager', 'Textile Quality Controller', 'Research Assistant'],
        admission: {
            exam: 'State Level Agricultural Entrance Exams',
            availableIn: ['Agricultural Universities (especially in Karnataka/South India)']
        },
        additionalInfo: [
            '🐛 Extremely niche field supporting India\'s massive handloom silk industry',
            '🧵 Combines aspects of entomology (insect study) and textile technology'
        ]
    },
    'B.Sc Agri Business Management': {
        name: 'B.Sc Agri Business Management',
        fullForm: 'Bachelor of Science in Agri-Business Management',
        description: "Bridges the gap between agricultural science and commercial corporate management. Focuses on the supply chain, marketing, and economics of agricultural produce and FMCG goods.",
        duration: '4 years',
        subjects: ['Agricultural Finance', 'Supply Chain Management', 'Marketing Management', 'Agronomy Basics', 'Rural Economics'],
        careerOptions: ['Agri-Business Manager', 'FMCG Sales Manager', 'Commodity Trader', 'Rural Bank Officer'],
        admission: {
            exam: 'ICAR AIEEA, State Agricultural Exams',
            availableIn: ['State Agricultural Universities', 'Management Institutes']
        },
        additionalInfo: [
            '💼 Perfect for entering corporate roles at companies like ITC, Nestle, or Godrej Agrovet',
            '📈 Combines core biology concepts with pure MBA-style marketing'
        ]
    },
    'B.Sc Community Science': {
        name: 'B.Sc Community Science',
        fullForm: 'Bachelor of Science in Community Science (formerly Home Science)',
        description: "A redefined degree aiming at improving the quality of life in communities through nutrition, family resource management, early childhood development, and apparel design.",
        duration: '4 years',
        subjects: ['Food & Nutrition', 'Human Development', 'Apparel & Textiles', 'Family Resource Management', 'Extension Education'],
        careerOptions: ['Dietician', 'Child Development Project Officer (CDPO)', 'Apparel Designer', 'Community Social Worker'],
        admission: {
            exam: 'ICAR AIEEA, CUET',
            availableIn: ['State Agricultural Universities']
        },
        additionalInfo: [
            '🏡 Highly recognized for government jobs in the Women and Child Development sector',
            '🥗 Strong focus on applied sciences for community upliftment'
        ]
    },
    'B.Sc Dairy Technology': {
        name: 'B.Sc Dairy Technology',
        fullForm: 'Bachelor of Technology / B.Sc in Dairy Technology',
        description: "An intensive program focusing on the processing, preservation, and quality control of milk and dairy products. It involves heavy industrial engineering and microbiology.",
        duration: '4 years',
        subjects: ['Dairy Engineering', 'Dairy Microbiology', 'Dairy Chemistry', 'Cheese & Fermented Foods', 'Dairy Plant Management'],
        careerOptions: ['Dairy Technologist', 'Plant Manager', 'Quality Control Officer', 'R&D Scientist in FMCG'],
        admission: {
            exam: 'ICAR AIEEA, State Engineering/Agri Entrances',
            availableIn: ['National Dairy Research Institute (NDRI)', 'State Vet/Agri Universities']
        },
        additionalInfo: [
            '🥛 Direct pipeline to massive cooperatives like Amul and corporate FMCG giants',
            '⚙️ Uses large-scale thermodynamics and fluid mechanics'
        ]
    },
    'B.Arch': {
        name: 'B.Arch',
        fullForm: 'Bachelor of Architecture',
        description: "A prestigious professional degree dealing with the art and science of planning, designing, and constructing buildings and physical structures. It heavily combines aesthetics, physics, and structural engineering.",
        duration: '5 years',
        subjects: ['Architectural Design Studio', 'Building Materials & Construction', 'Structural Design', 'History of Architecture', 'Town Planning'],
        careerOptions: ['Architect', 'Urban Planner', 'Interior Architect', 'Landscape Architect'],
        admission: {
            exam: 'NATA, JEE Main (Paper 2)',
            availableIn: ['NITs', 'SPAs', 'Private Architecture Colleges']
        },
        additionalInfo: [
            '🏛️ Requires passing the mandatory NATA exam or JEE Main Paper 2',
            '📐 5-year rigorous degree requiring immense creativity and mathematical precision'
        ]
    },
    'D. Arch': {
        name: 'D. Arch',
        fullForm: 'Diploma in Architecture',
        description: "A foundational diploma providing basic drafting, modeling, and foundational structural knowledge. Graduates usually work as draftsmen or assistants to principal architects before pursuing higher studies.",
        duration: '3 years',
        subjects: ['Architectural Drafting', 'AutoCAD / 3D Modeling', 'Basic Construction Tech', 'Surveying', 'Model Making'],
        careerOptions: ['Architectural Draftsman', 'CAD Technician', 'Site Supervisor', 'Assistant Architect'],
        admission: {
            exam: 'State Polytechnic Entrances, Merit-based',
            availableIn: ['Government Polytechnics', 'Private Technical Institutes']
        },
        additionalInfo: [
            '✏️ Highly practical, software-heavy (AutoCAD, SketchUp) training',
            '🏗️ Lateral entry available into the 2nd year of B.Arch for top diploma holders'
        ]
    },

'B.Plan': {
        name: 'B.Plan',
        fullForm: 'Bachelor of Planning',
        description: "A specialized professional degree focused on urban, regional, and environmental planning. It prepares students to design, develop, and manage sustainable cities and infrastructure systems.",
        duration: '4 years',
        subjects: ['Urban Economics', 'Geoinformatics (GIS & Remote Sensing)', 'Transportation Planning', 'Environmental Planning', 'Housing and Community Planning'],
        careerOptions: ['Urban Planner', 'Town Planner', 'GIS Specialist', 'Transport Planner'],
        admission: {
            exam: 'JEE Main (Paper 3), NATA, State Entrances',
            availableIn: ['School of Planning and Architecture (SPAs)', 'NITs', 'Private Universities']
        },
        additionalInfo: [
            '🏙️ Highly critical for modern Smart City development initiatives',
            '🗺️ Strong focus on mapping, sociology, and civic engineering concepts'
        ]
    }
};

// Alias mapping: maps course names used in courses.ts to the same data
// This ensures clicking any course name in the career guidance page shows details
const aliasMap: Record<string, string> = {
  // Paramedical aliases
  'B.Sc Radiology & Imaging Tech': 'B.Sc Radiology & Imaging Technology',
  'B.Sc Radiotherapy Tech': 'B.Sc Radiotherapy Technology',
  'B.Sc Operation Theatre Tech': 'B.Sc OTT',
  'B.Sc Anesthesia Tech': 'B.Sc Anesthesia Technology',
  'B.Sc Cardiac Care Tech': 'B.Sc CCT',
  'B.Sc Cardiovascular Tech': 'B.Sc CVT',
  'B.Sc Perfusion Tech': 'B.Sc Perfusion Technology',
  'B.Sc Renal Dialysis Tech': 'B.Sc RDT',
  'B.Sc Physician Assistant': 'B.Sc PA',
  'B.Sc Respiratory Care Tech': 'B.Sc RCT',
  'B.Sc Emergency Medicine Tech': 'B.Sc EMT',
  'B.Sc Nuclear Medicine Tech': 'B.Sc NMT',
  'B.Sc Neurophysiology Tech': 'B.Sc Neurophysiology Technology',
  'B.Sc Prosthetics & Orthotics': 'B.Sc P&O',
  // Engineering aliases
  'Computer Science & Engineering': 'CSE',
  'Artificial Intelligence & Machine Learning': 'AI & ML',
  'Internet of Things (IoT)': 'IoT',
  'Information Technology': 'IT',
  'Cyber Security': 'Cybersecurity',
  'Naval Architecture & Shipbuilding': 'Naval Architecture',
  'Electrical & Electronics Engineering': 'EEE',
  'Material Science & Engineering': 'Material Science',
  // Management aliases
  'BCA (Add-On)': 'BCA',
  'Bachelor of Business Administration': 'BBA',
  'BBA With Add On': 'BBA',
  'Bachelor of Management Studies': 'BMS',
  'Bachelor of Business Management': 'BBM',
  'Bachelor of Hotel Management': 'BHM',
  'Bachelor of Event Management': 'BEM',
  'Bachelor of International Business': 'BIB',
  // Law aliases
  'B.COM LLB': 'B.Com LLB',
  'BBA LLB': 'BA LLB',
};

// Apply aliases to courseDetailsData
Object.entries(aliasMap).forEach(([alias, target]) => {
  if (courseDetailsData[target] && !courseDetailsData[alias]) {
    (courseDetailsData as Record<string, typeof courseDetailsData[keyof typeof courseDetailsData]>)[alias] = courseDetailsData[target];
  }
});
