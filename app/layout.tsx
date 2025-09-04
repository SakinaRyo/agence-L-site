// app/layout.tsx
import type { Metadata } from 'next'
import { Playfair_Display, Lato } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const lato = Lato({ 
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  variable: '--font-lato',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Agence L - Détective Privé & Généalogie | Montpellier',
  description: 'Agence L - Détective privé et généalogiste à Montpellier. Enquêtes privées confidentielles pour particuliers et entreprises en Occitanie. Agréé CNAPS.',
  keywords: 'détective privé Montpellier, enquête privée Hérault, agence de recherches privées Occitanie, généalogie successorale',
  openGraph: {
    title: 'Agence L - Détective Privé & Généalogie',
    description: 'Enquêtes privées et recherches généalogiques à Montpellier et en Occitanie',
    locale: 'fr_FR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${playfair.variable} ${lato.variable}`}>
      <body className="font-sans antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}