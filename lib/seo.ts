import { siteConfig } from './config';

export default function generateSEOMetadata(
  title: string,
  description: string,
  path: string,
  keywords?: string[]
) {
  const url = `${siteConfig.url}${path}`;
  
  return {
    title: `${title} | ${siteConfig.name}`,
    description,
    keywords: keywords || [
      'education consultancy India',
      'college admissions India',
      'career guidance',
      'university selection India',
      'MBBS admissions',
      'engineering colleges India',
      'medical college admissions',
      'Fortex Education',
      'Kerala education consultant',
      'higher education India',
    ],
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [siteConfig.ogImage],
    },
    alternates: {
      canonical: url,
    },
  };
}
