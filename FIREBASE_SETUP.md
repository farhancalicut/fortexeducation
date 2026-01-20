# Firebase Setup Guide for Fortex Education

## 1. Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Click "Add Project"
3. Enter project name: `fortex-education`
4. Disable Google Analytics (optional for now)
5. Click "Create Project"

## 2. Set Up Firestore Database

1. In Firebase Console, click "Firestore Database" in left menu
2. Click "Create database"
3. Choose "Start in production mode"
4. Select location closest to your users
5. Click "Enable"

### Firestore Security Rules

Go to "Rules" tab and paste:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow public read for approved content
    match /testimonials/{document} {
      allow read: if resource.data.approved == true;
      allow create: if true;
      allow update, delete: if false;
    }
    
    match /gallery/{document} {
      allow read: if true;
      allow write: if false;
    }
    
    match /careerGuides/{document} {
      allow read: if resource.data.published == true;
      allow write: if false;
    }
    
    // Allow write for forms and bookings
    match /bookings/{document} {
      allow read: if true;
      allow create: if true;
      allow update, delete: if false;
    }
    
    match /contactForms/{document} {
      allow read: if true;
      allow create: if true;
      allow update, delete: if false;
    }
  }
}
```

## 3. Get Firebase Configuration

1. Click on Project Settings (gear icon)
2. Scroll to "Your apps" section
3. Click web icon (</>)
4. Register app with nickname "fortex-web"
5. Copy the configuration object

Your config will look like:
```javascript
{
  apiKey: "AIza...",
  authDomain: "fortex-education.firebaseapp.com",
  projectId: "fortex-education",
  storageBucket: "fortex-education.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123"
}
```

## 4. Add Configuration to Project

Create `.env.local` file in project root:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=AIza...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=fortex-education.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=fortex-education
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=fortex-education.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789:web:abc123
```

## 5. Create Initial Collections (Optional)

You can create sample data using Firebase Console:

### Gallery Collection
```json
{
  "title": "Career Counseling Session",
  "imageUrl": "https://images.unsplash.com/photo-1573164713988-8665fc963095",
  "cloudinaryId": "sample1",
  "description": "One-on-one guidance session",
  "createdAt": "2026-01-20T00:00:00.000Z"
}
```

### Career Guides Collection
```json
{
  "title": "Software Engineering Career Guide",
  "slug": "software-engineering-career",
  "content": "Full content here...",
  "excerpt": "Complete guide to software engineering",
  "category": "Engineering & Technology",
  "tags": ["software", "programming"],
  "metaDescription": "Career guide for software engineers",
  "metaKeywords": ["software engineering", "career"],
  "published": true,
  "views": 0,
  "createdAt": "2026-01-20T00:00:00.000Z",
  "updatedAt": "2026-01-20T00:00:00.000Z"
}
```

## 6. Enable Firebase Storage (for future use)

1. Click "Storage" in left menu
2. Click "Get Started"
3. Keep default security rules
4. Choose same location as Firestore
5. Click "Done"

## 7. Test Connection

Run your Next.js app:
```bash
npm run dev
```

Visit http://localhost:3000 and check browser console for any Firebase errors.

## Common Issues

### "Firebase: No Firebase App '[DEFAULT]' has been created"
- Check that `.env.local` file exists
- Restart development server
- Verify all environment variables are set

### "Missing or insufficient permissions"
- Check Firestore security rules
- Ensure rules are published
- Wait a few minutes for rules to propagate

### CORS Errors
- Check Firebase project settings
- Verify authorized domains include localhost
- Add production domain when deploying

## Production Checklist

Before deploying:
- [ ] Update security rules for production
- [ ] Add authorized domains in Firebase Console
- [ ] Set up Firebase billing if needed
- [ ] Enable Firebase App Check (recommended)
- [ ] Set up backup rules for Firestore
- [ ] Configure proper indexes for queries
- [ ] Set up monitoring and alerts

## Next Steps

1. Set up Cloudinary (see CLOUDINARY_SETUP.md)
2. Test all forms and submissions
3. Add sample content through admin dashboard
4. Deploy to production
