// app/page.tsx
import { Metadata } from 'next'
import HeroSection from '@/components/HeroSection'
import ReassuranceSection from '@/components/ReassuranceSection'
import ServicesSection from '@/components/ServicesSection'
import ApproachSection from '@/components/ApproachSection'
import ZoneSection from '@/components/ZoneSection'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Détective Privé Montpellier - Agence L | Enquêtes & Généalogie',
  description: 'Agence de détective privé à Montpellier. Enquêtes privées, filatures, généalogie, recherches. Disponible 24h/7j en Occitanie. Première consultation gratuite.',
  keywords: 'détective privé Montpellier, enquêteur privé, agence détective, généalogie Montpellier, filature, enquête privée, recherche personne',
  openGraph: {
    title: 'Agence L - Détective Privé & Généalogie à Montpellier',
    description: 'Votre détective privé de confiance à Montpellier. Enquêtes discrètes et professionnelles.',
    url: 'https://www.lrdetectives.com',
    siteName: 'Agence L Détective',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Agence L - Détective Privé Montpellier',
      }
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agence L - Détective Privé Montpellier',
    description: 'Enquêtes privées et généalogie professionnelle',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.lrdetectives.com',
  },
}

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'PrivateInvestigator',
    name: 'Agence L - Détective Privé & Généalogie',
    image: 'https://www.lrdetectives.com/logo.jpg',
    '@id': 'https://www.lrdetectives.com',
    url: 'https://www.lrdetectives.com',
    telephone: '+33650012747',
    email: 'ldetective7@proton.me',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '48 rue Claude Balbastre',
      addressLocality: 'Montpellier',
      addressRegion: 'Occitanie',
      postalCode: '34070',
      addressCountry: 'FR'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 43.6108,
      longitude: 3.8767
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ],
      opens: '00:00',
      closes: '23:59'
    },
    priceRange: '€€',
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 43.6108,
        longitude: 3.8767
      },
      geoRadius: '200000'
    },
    sameAs: [
      'https://www.lrdetectives.com'
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <ReassuranceSection />
      <ServicesSection />
      <ApproachSection />
      <ZoneSection />
      <CTASection />
    </>
  )
}