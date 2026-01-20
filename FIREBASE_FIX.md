# Fix Firebase "Failed to submit" Error

## Problem:
Your Firebase Firestore is blocking submissions because security rules are not set up.

## Solution - Set Up Firestore Security Rules:

### Step 1: Go to Firebase Console
1. Open: https://console.firebase.google.com/
2. Select your project: **fortex-43845**

### Step 2: Open Firestore Database
1. Click **"Firestore Database"** from left sidebar
2. If you see "Get started", click it and choose:
   - **Start in production mode** (we'll add rules next)
   - Select location: Choose closest to India (like `asia-south1`)
   - Click "Enable"

### Step 3: Set Security Rules
1. Click the **"Rules"** tab at the top
2. You'll see default rules that deny everything
3. **Replace ALL the rules** with this:

```javascript
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    
    // Bookings - allow anyone to create
    match /bookings/{document} {
      allow create: if true;
      allow read, update, delete: if request.auth != null;
    }
    
    // Contact Forms - allow anyone to create
    match /contactForms/{document} {
      allow create: if true;
      allow read, update, delete: if request.auth != null;
    }
    
    // Testimonials - allow anyone to create
    match /testimonials/{document} {
      allow create: if true;
      allow read: if resource.data.approved == true || request.auth != null;
      allow update, delete: if request.auth != null;
    }
  }
}
```

4. Click **"Publish"** button

### Step 4: Test Your Forms
1. Go back to your website: http://localhost:3002/testimonials
2. Fill out the "Share Your Experience" form
3. Submit - should work now! ✅

## What These Rules Do:

- **`allow create: if true`** - Anyone can submit forms (bookings, contacts, testimonials)
- **`allow read, update, delete: if request.auth != null`** - Only authenticated admins can read/update
- **Testimonials read** - Public can only see approved testimonials

## Verify It's Working:

1. Submit a testimonial
2. Go to Firebase Console → Firestore Database → Data tab
3. You should see:
   - Collection: `testimonials`
   - Your submitted document with all fields

## Alternative: Test Mode (For Development Only)

If you want to test quickly (NOT for production):

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
```

⚠️ **WARNING**: This allows anyone to read/write everything. Only use for testing!

## After Setting Rules:

✅ All forms will work:
- Testimonials submission
- Booking submission
- Contact form submission
- Admin dashboard will be able to read data

Your database will automatically create collections when you submit forms.
