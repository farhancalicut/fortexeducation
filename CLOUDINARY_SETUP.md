# Cloudinary Setup Guide for Fortex Education

## 1. Create Cloudinary Account

1. Go to [Cloudinary](https://cloudinary.com)
2. Click "Sign Up Free"
3. Fill in your details
4. Verify your email

## 2. Get Your Credentials

After logging in, you'll see your dashboard with:
- **Cloud Name** (e.g., `fortexeducation`)
- **API Key** (e.g., `123456789012345`)
- **API Secret** (click "Reveal" to see)

## 3. Create Upload Preset

1. Go to Settings → Upload
2. Scroll to "Upload presets"
3. Click "Add upload preset"
4. Configure:
   - **Preset name:** `fortex_preset`
   - **Signing Mode:** Unsigned
   - **Folder:** `fortex`
   - **Format:** Auto
   - **Quality:** Auto
5. Click "Save"

## 4. Add Configuration to Project

Add to your `.env.local` file:

```env
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=fortexeducation
NEXT_PUBLIC_CLOUDINARY_API_KEY=123456789012345
CLOUDINARY_API_SECRET=your_api_secret_here
```

## 5. Configure Transformations (Optional)

Create transformation presets for optimized images:

### Thumbnail Preset
- **Name:** `thumbnail`
- **Width:** 400px
- **Height:** 400px
- **Crop:** Fill
- **Quality:** Auto
- **Format:** Auto

### Hero Image Preset
- **Name:** `hero`
- **Width:** 1920px
- **Height:** 1080px
- **Crop:** Fill
- **Quality:** 80
- **Format:** Auto

### Gallery Preset
- **Name:** `gallery`
- **Width:** 800px
- **Height:** 600px
- **Crop:** Fill
- **Quality:** 85
- **Format:** Auto

## 6. Test Upload

Use the admin dashboard to test image uploads:

1. Run `npm run dev`
2. Go to http://localhost:3000/admin
3. Login with admin password
4. Try uploading an image to gallery

## 7. Optimize Your Images

### Best Practices

1. **Use Automatic Format Selection:**
   ```
   https://res.cloudinary.com/fortexeducation/image/upload/f_auto/image.jpg
   ```

2. **Enable Auto Quality:**
   ```
   https://res.cloudinary.com/fortexeducation/image/upload/q_auto/image.jpg
   ```

3. **Responsive Images:**
   ```
   https://res.cloudinary.com/fortexeducation/image/upload/w_auto,c_scale/image.jpg
   ```

4. **Combined Optimizations:**
   ```
   https://res.cloudinary.com/fortexeducation/image/upload/f_auto,q_auto,w_800/image.jpg
   ```

## 8. Set Up Media Library

1. Go to Media Library
2. Create folders:
   - `fortex/gallery` - Gallery images
   - `fortex/testimonials` - Testimonial avatars
   - `fortex/career-guides` - Career guide images
   - `fortex/og-images` - Social media images

## 9. Widget Configuration (Optional)

For advanced upload widget:

```javascript
cloudinary.openUploadWidget({
  cloudName: 'fortexeducation',
  uploadPreset: 'fortex_preset',
  folder: 'fortex/gallery',
  sources: ['local', 'url', 'camera'],
  multiple: false,
  maxFileSize: 5000000, // 5MB
  clientAllowedFormats: ['jpg', 'jpeg', 'png', 'gif', 'webp'],
}, (error, result) => {
  if (!error && result && result.event === "success") {
    console.log('Upload successful:', result.info.secure_url);
  }
});
```

## 10. Bandwidth Optimization

Tips to stay within free tier (25GB/month):

1. **Use smaller images:** Resize before uploading
2. **Enable lazy loading:** Images load as user scrolls
3. **Use WebP format:** Smaller file sizes
4. **Cache images:** Browser caching reduces requests
5. **Monitor usage:** Check dashboard regularly

## Common Issues

### "Upload preset not found"
- Verify preset name is exactly `fortex_preset`
- Check that signing mode is "Unsigned"
- Wait a few minutes after creating preset

### CORS Errors
- Add your domain to allowed origins in Cloudinary settings
- Include both `http://localhost:3000` and production domain

### Images Not Displaying
- Check cloud name spelling
- Verify image URL format
- Check browser console for errors

### Upload Fails
- Check file size (max 10MB on free tier)
- Verify file format is supported
- Check upload preset configuration

## Security Best Practices

### For Production:

1. **Restrict Upload Preset:**
   - Change to "Signed" mode
   - Implement server-side signing

2. **Set Up Access Control:**
   ```javascript
   // In your API route
   const signature = cloudinary.utils.api_sign_request(
     params,
     process.env.CLOUDINARY_API_SECRET
   );
   ```

3. **Enable Moderation:**
   - Auto-moderate uploaded content
   - Set up manual approval workflow

4. **Implement Rate Limiting:**
   - Limit uploads per user
   - Throttle requests

## Monitoring and Analytics

1. Go to Dashboard → Reports
2. Monitor:
   - Bandwidth usage
   - Transformations used
   - Storage space
   - API calls

## Next Steps

1. Upload sample images through admin panel
2. Test image display on all pages
3. Optimize image loading performance
4. Set up CDN caching
5. Configure backup solution

## Useful Links

- [Cloudinary Docs](https://cloudinary.com/documentation)
- [Image Optimization Guide](https://cloudinary.com/documentation/image_optimization)
- [Upload Widget](https://cloudinary.com/documentation/upload_widget)
- [Transformation Reference](https://cloudinary.com/documentation/image_transformations)

## Support

For issues:
- Check [Cloudinary Support](https://support.cloudinary.com)
- Review [Community Forum](https://community.cloudinary.com)
- Contact support@cloudinary.com
