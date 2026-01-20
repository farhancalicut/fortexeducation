# Troubleshooting Guide

## Steps to Debug:

### 1. Open Browser Console
- Press F12 or right-click → Inspect
- Go to Console tab
- Look for red error messages

### 2. Check Specific Errors:

**If you see "Missing or insufficient permissions":**
- Firebase rules not properly set
- Go to Firebase Console
- Firestore Database → Rules
- Make sure you published the rules

**If you see "Failed to get document":**
- Collections don't exist yet
- Submit some test data first

**If you see index-related errors:**
- The queries are trying to use orderBy with where
- We've removed those, refresh the page

### 3. Quick Test:

Open browser console and run:
```javascript
// Test if Firebase is connected
console.log('Testing Firebase...');
fetch('https://firestore.googleapis.com/v1/projects/fortex-43845/databases/(default)/documents/testimonials')
  .then(r => r.json())
  .then(d => console.log('Firebase response:', d))
  .catch(e => console.error('Firebase error:', e));
```

### 4. Manual Fix Steps:

1. **Clear browser cache**: Ctrl + Shift + Delete
2. **Restart dev server**: 
   - Stop the terminal (Ctrl + C)
   - Run: `npm run dev`
3. **Check Firebase Console**:
   - Go to Firestore Database → Data
   - Do you see collections: `testimonials`, `bookings`, `contactForms`?
   - If empty, submit test data first

### 5. Test Each Page:

1. **Test page**: http://localhost:3002/test
   - Click "Add Test Testimonial"
   - Should say ✅ Testimonial Added

2. **Testimonials page**: http://localhost:3002/testimonials
   - Submit a testimonial
   - Check if it appears in Firebase Console

3. **Admin page**: http://localhost:3002/admin/dashboard
   - Check console for errors
   - See what specific error appears

### 6. Common Issues:

**Issue**: "Failed to load data"
**Solution**: Check Firebase rules are published and collections exist

**Issue**: Testimonials not showing on homepage
**Solution**: Make sure testimonials are approved in admin dashboard

**Issue**: Static data showing
**Solution**: Already fixed - clear cache and refresh

### 7. Force Refresh:
- **Windows**: Ctrl + Shift + R
- **Mac**: Cmd + Shift + R

This will clear the cached JavaScript files.

## Tell me what error you see in the console!
