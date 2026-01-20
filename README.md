# Fortex Educational Consulting Website

A comprehensive, SEO-optimized website for educational consulting services with mobile-first responsive design.

## Features

- 🎨 Modern, Professional UI/UX Design
- 📱 Mobile-First Responsive Design
- 🚀 SEO Optimized (Next.js 14 with App Router)
- 🔥 Firebase Backend (Firestore Database)
- ☁️ Cloudinary Media Management
- 📅 Dual Booking System (Online & Offline Counseling)
- 💬 Testimonials with Client Submission Form
- 🖼️ Gallery Section
- 📞 Contact Form
- ❓ FAQ Accordion
- 🔐 Admin Dashboard

## Tech Stack

- **Frontend:** Next.js 14 (App Router), React 18, TypeScript
- **Styling:** Tailwind CSS, Framer Motion
- **Backend:** Firebase (Firestore, Storage)
- **Media:** Cloudinary
- **Forms:** React Hook Form
- **SEO:** Next SEO, Structured Data

## Getting Started

### Prerequisites

- Node.js 18+ installed
- Firebase project created
- Cloudinary account set up

### Installation

1. Install dependencies:
```bash
npm install
```

2. Configure environment variables:
   - Copy `.env.example` to `.env.local`
   - Fill in your Firebase credentials
   - Add Cloudinary credentials
   - Set admin password

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
fortexeducation/
├── app/                      # Next.js App Router
│   ├── (admin)/             # Admin dashboard routes
│   ├── (main)/              # Main website routes
│   ├── api/                 # API routes
│   └── layout.tsx           # Root layout
├── components/              # React components
│   ├── admin/              # Admin-specific components
│   ├── booking/            # Booking system components
│   ├── career/             # Career guidance components
│   ├── layout/             # Layout components (Header, Footer)
│   ├── shared/             # Reusable components
│   └── testimonials/       # Testimonial components
├── lib/                    # Utilities and configurations
│   ├── firebase.ts         # Firebase configuration
│   └── cloudinary.ts       # Cloudinary helpers
├── types/                  # TypeScript type definitions
└── public/                 # Static assets

```

## Firebase Collections Schema

### Bookings
- `type`: 'online' | 'offline'
- `name`, `email`, `phone`
- `date`, `time`
- `message`
- `status`: 'pending' | 'confirmed' | 'cancelled'
- `createdAt`

### Testimonials
- `name`, `role`, `content`
- `rating`, `imageUrl`
- `approved`: boolean
- `createdAt`

### Gallery
- `title`, `imageUrl`, `cloudinaryId`
- `description`
- `createdAt`

### ContactForms
- `name`, `email`, `subject`, `message`
- `status`: 'new' | 'responded'
- `createdAt`

### CareerGuides
- `title`, `slug`, `content`
- `category`, `tags`
- `metaDescription`
- `published`: boolean
- `createdAt`, `updatedAt`

## Admin Dashboard

Access: `/admin`
- Manage bookings (view, confirm, cancel)
- Approve/reject testimonials
- Upload gallery images
- Respond to contact forms
- Create/edit career guide articles
- View analytics

## SEO Features

- Dynamic meta tags for all pages
- Structured data (JSON-LD)
- XML sitemap generation
- Optimized images via Cloudinary
- Mobile-friendly design
- Fast loading times

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Other Platforms

Build the project:
```bash
npm run build
```

Start production server:
```bash
npm start
```

## License

Private - All Rights Reserved

## Contact

For support or inquiries, please visit the website or contact the development team.
