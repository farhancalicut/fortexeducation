# How to Add Sample Testimonials to Your Backend

## Quick Steps:

### Option 1: Use Admin Dashboard (Recommended)

1. **Submit through website**:
   - Visit: http://localhost:3002/testimonials
   - Scroll to "Share Your Experience" form
   - Fill in details and submit
   - Repeat 3-4 times with different names

2. **Approve in Admin**:
   - Visit: http://localhost:3002/admin/dashboard
   - Password: `admin`
   - Click "Testimonials" tab
   - Click "Approve" on each testimonial

3. **View on Homepage**:
   - Visit: http://localhost:3002
   - Scroll to "What Our Students Say"
   - Your approved testimonials will appear!

### Option 2: Add Directly in Firebase Console

1. Go to: https://console.firebase.google.com/
2. Select project: `fortex-43845`
3. Click "Firestore Database"
4. Click "Start Collection" or select `testimonials`
5. Add documents with this structure:

**Sample Testimonial 1:**
```json
{
  "name": "Ananya Sharma",
  "role": "MBBS Student",
  "content": "Fortex helped me secure admission to my dream medical college. Their personalized counseling and complete support throughout the application process made everything so easy. Highly recommended!",
  "rating": 5,
  "approved": true,
  "createdAt": "2024-01-15T10:00:00.000Z"
}
```

**Sample Testimonial 2:**
```json
{
  "name": "Rahul Krishna",
  "role": "Engineering Student",
  "content": "The team at Fortex guided me through every step of the admission process. From college selection to scholarship guidance, they were always there to help. Thank you for making my engineering dreams come true!",
  "rating": 5,
  "approved": true,
  "createdAt": "2024-01-14T10:00:00.000Z"
}
```

**Sample Testimonial 3:**
```json
{
  "name": "Priya Menon",
  "role": "BBA Student",
  "content": "Excellent service and genuine support! Fortex not only helped me get into a top management college but also arranged accommodation and provided career guidance. They truly care about student success.",
  "rating": 5,
  "approved": true,
  "createdAt": "2024-01-13T10:00:00.000Z"
}
```

**Sample Testimonial 4:**
```json
{
  "name": "Arjun Nair",
  "role": "Paramedical Student",
  "content": "I was confused about my career path after 12th. Fortex counselors helped me discover my passion for healthcare and guided me to the perfect paramedical program. Forever grateful!",
  "rating": 5,
  "approved": true,
  "createdAt": "2024-01-12T10:00:00.000Z"
}
```

**Sample Testimonial 5:**
```json
{
  "name": "Meera Pillai",
  "role": "Law Student",
  "content": "The personalized attention and expert guidance I received from Fortex was outstanding. They helped me navigate the complex admission process and secure a seat in my preferred law college.",
  "rating": 5,
  "approved": true,
  "createdAt": "2024-01-11T10:00:00.000Z"
}
```

## Important Notes:

1. **createdAt Field**: Use Firestore Timestamp type when adding directly
   - In Firebase Console: Select "timestamp" type
   - Or use current date/time

2. **approved Field**: Must be `true` for testimonials to show on homepage

3. **rating Field**: Number between 1-5

4. **imageUrl Field**: Optional - if not added, will show initials instead

## After Adding:

1. Refresh homepage: http://localhost:3002
2. Check "What Our Students Say" section
3. Should see your testimonials with 5-star ratings
4. Click "View All Testimonials" to see full list

## Fields Explanation:

- **name**: Student's full name
- **role**: Course/College/Occupation
- **content**: The testimonial text (quote)
- **rating**: Number of stars (1-5)
- **imageUrl**: (Optional) Link to student photo
- **approved**: Boolean - must be `true` to show publicly
- **createdAt**: Timestamp for sorting (newest first)

That's it! Your testimonials will now appear on the homepage.
