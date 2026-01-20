export interface OrganizationSchema {
  '@context': 'https://schema.org';
  '@type': 'EducationalOrganization';
  name: string;
  url: string;
  logo: string;
  description: string;
  address: {
    '@type': 'PostalAddress';
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  contactPoint: {
    '@type': 'ContactPoint';
    telephone: string;
    contactType: 'customer service';
    email: string;
  };
  sameAs: string[];
}

export interface ServiceSchema {
  '@context': 'https://schema.org';
  '@type': 'Service';
  name: string;
  description: string;
  provider: {
    '@type': 'EducationalOrganization';
    name: string;
    url: string;
  };
  serviceType: string;
  areaServed: string;
}

export function generateOrganizationSchema(config: {
  name: string;
  url: string;
  description: string;
  phone: string;
  email: string;
  address: string;
  socialLinks: string[];
}): OrganizationSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: config.name,
    url: config.url,
    logo: `${config.url}/logo.png`,
    description: config.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Education Street',
      addressLocality: 'City',
      addressRegion: 'State',
      postalCode: '12345',
      addressCountry: 'US',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: config.phone,
      contactType: 'customer service',
      email: config.email,
    },
    sameAs: config.socialLinks,
  };
}

export function generateServiceSchema(
  serviceName: string,
  description: string,
  serviceType: string
): ServiceSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description: description,
    provider: {
      '@type': 'EducationalOrganization',
      name: 'Fortex Education',
      url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    },
    serviceType: serviceType,
    areaServed: 'Worldwide',
  };
}
