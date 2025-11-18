// app/mentions-legales/page.tsx
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Mentions Légales | Agence L - Détective Privé Montpellier',
  description: 'Mentions légales, agréments CNAPS et informations légales de l\'Agence L, détective privé agréé à Montpellier.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.lrdetectives.com/mentions-legales',
  },
}

// Icônes SVG
const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full stroke-[var(--color-bronze)] fill-none stroke-[1.5]">
    <path d="M12 2L4 6v5c0 5.5 3.8 10.7 8 12 4.2-1.3 8-6.5 8-12V6l-8-4z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const BuildingIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full stroke-[var(--color-bronze)] fill-none stroke-[1.5]">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
  </svg>
);

const FileIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full stroke-[var(--color-bronze)] fill-none stroke-[1.5]">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
    <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
  </svg>
);

const ScaleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full stroke-[var(--color-bronze)] fill-none stroke-[1.5]">
    <path d="M12 3v18M5 8l7-5 7 5M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8" />
    <circle cx="8" cy="14" r="2" />
    <circle cx="16" cy="14" r="2" />
  </svg>
);

export default function MentionsLegales() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Mentions Légales - Agence L',
    url: 'https://www.lrdetectives.com/mentions-legales',
    publisher: {
      '@type': 'PrivateInvestigator',
      name: 'Agence L',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '48 rue Claude Balbastre',
        addressLocality: 'Montpellier',
        postalCode: '34070',
        addressCountry: 'FR'
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="min-h-screen bg-[var(--color-beige)]">
        {/* Hero Section */}
        <section className="py-20 text-center">
          <div className="container-custom">
            <h1 className="font-[family-name:var(--font-playfair)] text-[var(--color-bleu-nuit)] text-5xl md:text-6xl font-bold mb-6">
              MENTIONS LÉGALES
            </h1>
            <p className="font-[family-name:var(--font-lato)] text-[var(--color-gris-doux)] text-xl max-w-2xl mx-auto font-light">
              Informations légales et agréments professionnels de l'Agence L
            </p>
          </div>
        </section>

        {/* ⭐ SECTION PRINCIPALE - Agréments professionnels */}
        <section className="py-16 bg-gradient-to-br from-[#D4A574] to-[var(--color-bronze)]">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-8 justify-center">
                <div className="w-16 h-16">
                  <ShieldIcon />
                </div>
                <h2 className="font-[family-name:var(--font-playfair)] text-[var(--color-beige)] text-4xl">
                  Agréments & Certifications
                </h2>
              </div>
              
              <div className="bg-white rounded-lg p-8 shadow-[0_8px_30px_rgba(0,0,0,0.15)]">
                <p className="font-[family-name:var(--font-lato)] text-[var(--color-gris-doux)] text-lg leading-relaxed mb-6 text-center">
                  L'Agence L est pleinement agréée et certifiée pour exercer l'activité de détective privé en France.
                </p>

                <div className="bg-[var(--color-beige)] p-6 rounded-lg mb-6">
                  <p className="font-[family-name:var(--font-lato)] text-[var(--color-gris-doux)] leading-relaxed">
                    <span className="text-2xl mr-2">🎓</span>
                    Tous nos agents de recherches privées ont obtenu le <strong>diplôme d'État obligatoire</strong> ainsi que les agréments du <strong>Ministère de l'Intérieur</strong> délivrés par le <strong>CNAPS</strong> (Conseil National des Activités Privées de Sécurité).
                  </p>
                </div>

                {/* Grille des numéros d'agrément */}
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-[var(--color-beige)] border-2 border-[var(--color-bronze)] p-5 rounded-lg hover:shadow-[0_4px_20px_rgba(0,0,0,0.1)] transition-all duration-300">
                    <p className="font-[family-name:var(--font-lato)] text-[var(--color-bronze)] text-xs uppercase tracking-wider mb-2 font-bold">
                      🔹 Autorisation d'exercice
                    </p>
                    <p className="font-[family-name:var(--font-lato)] text-[var(--color-bleu-nuit)] text-sm font-mono font-bold selectable">
                      AUT-034-2121-10-18-20220827229
                    </p>
                    <p className="font-[family-name:var(--font-lato)] text-[var(--color-gris-doux)] text-xs mt-1">
                      Ministère de l'Intérieur
                    </p>
                  </div>
                  
                  <div className="bg-[var(--color-beige)] border-2 border-[var(--color-bronze)] p-5 rounded-lg hover:shadow-[0_4px_20px_rgba(0,0,0,0.1)] transition-all duration-300">
                    <p className="font-[family-name:var(--font-lato)] text-[var(--color-bronze)] text-xs uppercase tracking-wider mb-2 font-bold">
                      🔹 Agrément de dirigeant
                    </p>
                    <p className="font-[family-name:var(--font-lato)] text-[var(--color-bleu-nuit)] text-sm font-mono font-bold selectable">
                      AGD-034-2024-12-06-20190670889
                    </p>
                    <p className="font-[family-name:var(--font-lato)] text-[var(--color-gris-doux)] text-xs mt-1">
                      CNAPS
                    </p>
                  </div>
                  
                  <div className="bg-[var(--color-beige)] border-2 border-[var(--color-bronze)] p-5 rounded-lg hover:shadow-[0_4px_20px_rgba(0,0,0,0.1)] transition-all duration-300">
                    <p className="font-[family-name:var(--font-lato)] text-[var(--color-bronze)] text-xs uppercase tracking-wider mb-2 font-bold">
                      🔹 Carte professionnelle
                    </p>
                    <p className="font-[family-name:var(--font-lato)] text-[var(--color-bleu-nuit)] text-sm font-mono font-bold selectable">
                      CAR-034-2024-12-06-20190670889
                    </p>
                    <p className="font-[family-name:var(--font-lato)] text-[var(--color-gris-doux)] text-xs mt-1">
                      Agent de recherches privées
                    </p>
                  </div>
                  
                  <div className="bg-[var(--color-beige)] border-2 border-[var(--color-bronze)] p-5 rounded-lg hover:shadow-[0_4px_20px_rgba(0,0,0,0.1)] transition-all duration-300">
                    <p className="font-[family-name:var(--font-lato)] text-[var(--color-bronze)] text-xs uppercase tracking-wider mb-2 font-bold">
                      🔹 N° SIRET
                    </p>
                    <p className="font-[family-name:var(--font-lato)] text-[var(--color-bleu-nuit)] text-sm font-mono font-bold selectable">
                      911 130 482 00019
                    </p>
                    <p className="font-[family-name:var(--font-lato)] text-[var(--color-gris-doux)] text-xs mt-1">
                      Entreprise individuelle
                    </p>
                  </div>
                </div>

                {/* Certification DPO */}
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg border-l-4 border-blue-600">
                  <div className="flex items-start gap-3">
                    <span className="text-3xl">🔐</span>
                    <div>
                      <p className="font-[family-name:var(--font-lato)] font-bold text-blue-900 mb-2">
                        Certification « Délégué à la Protection des Données » (DPO)
                      </p>
                      <p className="font-[family-name:var(--font-lato)] text-sm text-blue-800">
                        La direction de l'Agence L est certifiée par la <strong>CNIL</strong> et maîtrise parfaitement tous les enjeux de protection de vos données personnelles.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <Link 
                    href="/confidentialite"
                    className="font-[family-name:var(--font-lato)] text-[var(--color-bronze)] hover:text-[var(--color-bronze-light)] font-semibold text-sm transition-colors"
                  >
                    → Consultez notre politique de confidentialité (RGPD)
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 1 : Éditeur du site */}
        <section className="py-20">
          <div className="container-custom max-w-4xl">
            <div className="bg-white p-10 rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.05)] mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12">
                  <BuildingIcon />
                </div>
                <h2 className="font-[family-name:var(--font-playfair)] text-[var(--color-bleu-nuit)] text-3xl">
                  1. Éditeur du site
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <p className="font-[family-name:var(--font-lato)] text-[var(--color-bronze)] text-xs uppercase tracking-wide mb-1 font-bold">
                    Raison sociale
                  </p>
                  <p className="font-[family-name:var(--font-lato)] text-[var(--color-bleu-nuit)] font-semibold">
                    Agence L
                  </p>
                  <p className="font-[family-name:var(--font-lato)] text-[var(--color-gris-doux)] text-sm">
                    Détective Privé & Généalogie
                  </p>
                </div>
                
                <div>
                  <p className="font-[family-name:var(--font-lato)] text-[var(--color-bronze)] text-xs uppercase tracking-wide mb-1 font-bold">
                    Statut juridique
                  </p>
                  <p className="font-[family-name:var(--font-lato)] text-[var(--color-gris-doux)]">
                    Entreprise individuelle
                  </p>
                </div>
                
                <div>
                  <p className="font-[family-name:var(--font-lato)] text-[var(--color-bronze)] text-xs uppercase tracking-wide mb-1 font-bold">
                    Dirigeante & Responsable
                  </p>
                  <p className="font-[family-name:var(--font-lato)] text-[var(--color-bleu-nuit)] font-semibold">
                    Laetitia ROMERA
                  </p>
                </div>
                
                <div>
                  <p className="font-[family-name:var(--font-lato)] text-[var(--color-bronze)] text-xs uppercase tracking-wide mb-1 font-bold">
                    SIRET
                  </p>
                  <p className="font-[family-name:var(--font-lato)] text-[var(--color-bleu-nuit)] font-mono font-semibold selectable">
                    911 130 482 00019
                  </p>
                </div>
              </div>

              <div className="border-t border-stone-200 pt-6">
                <p className="font-[family-name:var(--font-lato)] text-[var(--color-bronze)] text-xs uppercase tracking-wide mb-3 font-bold">
                  Coordonnées
                </p>
                <div className="space-y-2 font-[family-name:var(--font-lato)] text-[var(--color-gris-doux)]">
                  <p className="selectable">📍 48 rue Balbastre, 34070 Montpellier, France</p>
                  <p>
                    📞 <a href="tel:0650012747" className="selectable hover:text-[var(--color-bronze)] transition-colors">
                      06 50 01 27 47
                    </a>
                  </p>
                  <p>
                    ✉️ <a href="mailto:ldetective7@proton.me" className="selectable hover:text-[var(--color-bronze)] transition-colors">
                      ldetective7@proton.me
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 : Hébergement */}
        <section className="py-20 bg-white">
          <div className="container-custom max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12">
                <BuildingIcon />
              </div>
              <h2 className="font-[family-name:var(--font-playfair)] text-[var(--color-bleu-nuit)] text-3xl">
                2. Hébergement
              </h2>
            </div>
            
            <div className="font-[family-name:var(--font-lato)] text-[var(--color-gris-doux)] space-y-2">
              <p><strong>Hébergeur :</strong> Vercel Inc.</p>
              <p><strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA</p>
              <p>
                <strong>Site web :</strong>{' '}
                <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-[var(--color-bronze)] hover:text-[var(--color-bronze-light)] transition-colors">
                  vercel.com
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Section 3 : Propriété intellectuelle */}
        <section className="py-20">
          <div className="container-custom max-w-4xl">
            <div className="bg-white p-10 rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12">
                  <FileIcon />
                </div>
                <h2 className="font-[family-name:var(--font-playfair)] text-[var(--color-bleu-nuit)] text-3xl">
                  3. Propriété intellectuelle
                </h2>
              </div>
              
              <div className="font-[family-name:var(--font-lato)] text-[var(--color-gris-doux)] space-y-4 leading-relaxed">
                <p>
                  L'ensemble de ce site web (structure, textes, images, graphismes, logo, icônes, sons, logiciels, etc.) est la propriété exclusive de <strong>Laetitia ROMERA</strong> ou fait l'objet d'une autorisation d'usage.
                </p>
                <p>
                  Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est <strong>strictement interdite</strong> sans l'autorisation écrite préalable de Laetitia ROMERA.
                </p>
                <p>
                  Toute exploitation non autorisée du site ou de l'un quelconque des éléments qu'il contient sera considérée comme constitutive d'une contrefaçon et poursuivie conformément aux dispositions des <strong>articles L.335-2 et suivants du Code de Propriété Intellectuelle</strong>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 : Limitation de responsabilité */}
        <section className="py-20 bg-white">
          <div className="container-custom max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12">
                <ScaleIcon />
              </div>
              <h2 className="font-[family-name:var(--font-playfair)] text-[var(--color-bleu-nuit)] text-3xl">
                4. Limitation de responsabilité
              </h2>
            </div>
            
            <div className="font-[family-name:var(--font-lato)] text-[var(--color-gris-doux)] space-y-4 leading-relaxed">
              <p>
                L'Agence L s'efforce de fournir des informations aussi précises que possible sur ce site web. Toutefois, elle ne pourra être tenue responsable des omissions, des inexactitudes ou des carences dans la mise à jour.
              </p>
              <p>
                Le site peut contenir des liens hypertextes vers d'autres sites. L'Agence L n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.
              </p>
              <p>
                L'utilisation des informations et contenus disponibles sur ce site se fait sous l'entière responsabilité de l'utilisateur.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5 : Médiation */}
        <section className="py-20">
          <div className="container-custom max-w-4xl">
            <div className="bg-white p-10 rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12">
                  <ScaleIcon />
                </div>
                <h2 className="font-[family-name:var(--font-playfair)] text-[var(--color-bleu-nuit)] text-3xl">
                  5. Médiation des litiges
                </h2>
              </div>
              
              <p className="font-[family-name:var(--font-lato)] text-[var(--color-gris-doux)] mb-4">
                En cas de litige, la partie la plus diligente peut saisir le dispositif de médiation de la consommation :
              </p>
              
              <div className="bg-[var(--color-beige)] p-6 rounded-lg border-l-4 border-[var(--color-bronze)]">
                <p className="font-[family-name:var(--font-lato)] text-[var(--color-bleu-nuit)] font-semibold text-lg mb-2">
                  AME Conso
                </p>
                <p className="font-[family-name:var(--font-lato)] text-[var(--color-gris-doux)] selectable">
                  11 place Dauphine<br />
                  75001 PARIS
                </p>
                <p className="font-[family-name:var(--font-lato)] text-[var(--color-gris-doux)] mt-3">
                  <strong>Site web :</strong>{' '}
                  <a href="https://www.mediationconso-ame.com" target="_blank" rel="noopener noreferrer" className="text-[var(--color-bronze)] hover:text-[var(--color-bronze-light)] transition-colors">
                    mediationconso-ame.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Liens vers autres pages */}
        <section className="bg-[var(--color-bronze)] py-16">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="font-[family-name:var(--font-playfair)] text-[var(--color-beige)] text-2xl mb-6">
                Autres informations légales
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/confidentialite"
                  className="inline-block bg-[var(--color-beige)] text-[var(--color-bronze)] px-6 py-3 text-xs uppercase tracking-wider font-bold hover:bg-white transition-all duration-300"
                >
                  🔐 Politique de confidentialité (RGPD)
                </Link>
                <Link 
                  href="/tarifs"
                  className="inline-block bg-transparent border-2 border-[var(--color-beige)] text-[var(--color-beige)] px-6 py-3 text-xs uppercase tracking-wider font-bold hover:bg-[var(--color-beige)] hover:text-[var(--color-bronze)] transition-all duration-300"
                >
                  💰 Nos tarifs
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <section className="py-12 text-center bg-white">
          <div className="container-custom">
            <p className="font-[family-name:var(--font-lato)] text-[var(--color-gris-doux)] text-sm mb-3">
              <strong>Dernière mise à jour :</strong> Janvier 2025
            </p>
            <p className="font-[family-name:var(--font-lato)] text-[var(--color-gris-doux)] text-sm mb-6">
              Pour toute question concernant ces mentions légales :
            </p>
            <a 
              href="mailto:ldetective7@proton.me" 
              className="inline-block bg-[var(--color-bronze)] text-[var(--color-beige)] px-8 py-4 text-sm uppercase tracking-wider font-bold hover:bg-[var(--color-bronze-light)] transition-all duration-300"
            >
              ✉️ Nous contacter
            </a>
            
            <div className="mt-8">
              <Link 
                href="/" 
                className="font-[family-name:var(--font-lato)] text-[var(--color-bronze)] hover:text-[var(--color-bronze-light)] font-medium transition-colors"
              >
                ← Retour à l'accueil
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}