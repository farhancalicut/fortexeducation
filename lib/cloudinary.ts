import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default cloudinary;

// Helper function to get optimized image URL
export const getOptimizedImageUrl = (
  publicId: string,
  width: number = 800,
  quality: number = 80
): string => {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  return `https://res.cloudinary.com/${cloudName}/image/upload/w_${width},q_${quality},f_auto/${publicId}`;
};

// Upload image to Cloudinary
export const uploadToCloudinary = async (
  file: File,
  folder: string = 'fortex'
): Promise<{ url: string; publicId: string }> => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', 'fortex_preset'); // You'll need to create this in Cloudinary
  formData.append('folder', folder);

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
    {
      method: 'POST',
      body: formData,
    }
  );

  const data = await response.json();
  return {
    url: data.secure_url,
    publicId: data.public_id,
  };
};
