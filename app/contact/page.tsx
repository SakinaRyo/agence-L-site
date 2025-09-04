import { Metadata } from 'next'
import ContactClient from '@/components/ContactClient'

// Metadata pour le composant serveur
export const metadata: Metadata = {
  title: 'Contact Détective Privé Montpellier - 24h/7j | Agence L',
  description: 'Contactez l\'Agence L, détective privé à Montpellier. Disponible 24h/24 7j/7. Consultation gratuite et confidentielle. ☎ 06 50 01 27 47',
  keywords: 'contact détective privé Montpellier, numéro détective, consultation gratuite',
  openGraph: {
    title: 'Contactez l\'Agence L - Détective Privé Montpellier',
    description: 'Disponible 24h/24 pour vos enquêtes privées',
    url: 'https://www.lrdetectives.com/contact',
    siteName: 'Agence L Détective',
    locale: 'fr_FR',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.lrdetectives.com/contact',
  },
}

export default function ContactPage() {
  return <ContactClient />
}