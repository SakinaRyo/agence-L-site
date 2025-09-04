import { Metadata } from 'next'
import React from 'react';

export const metadata: Metadata = {
  title: 'Tarifs Détective Privé Montpellier - Devis Gratuit | Agence L',
  description: 'Tarifs transparents pour nos services de détective privé à Montpellier. Première consultation gratuite. Forfaits adaptés. Remboursement possible Article 700.',
  keywords: 'tarifs détective privé, prix enquête privée, devis détective Montpellier, consultation gratuite',
  openGraph: {
    title: 'Tarifs - Agence L Détective Privé Montpellier',
    description: 'Découvrez nos tarifs transparents et adaptés à vos besoins',
    url: 'https://www.lrdetectives.com/tarifs',
    siteName: 'Agence L Détective',
    locale: 'fr_FR',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.lrdetectives.com/tarifs',
  },
}

// Icônes SVG comme composants
const ConsultationIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full stroke-[var(--color-bronze)] fill-none stroke-[1.5]">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
    <path d="M12 6v6l4 2" />
  </svg>
);

const HoraireIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full stroke-[var(--color-bronze)] fill-none stroke-[1.5]">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>
);

const ForfaitIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full stroke-[var(--color-bronze)] fill-none stroke-[1.5]">
    <path d="M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    <circle cx="12" cy="14" r="2" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 16 16" className="w-4 h-4 inline-block stroke-[var(--color-bronze)] fill-none stroke-2">
    <polyline points="4 8 7 11 12 5" />
  </svg>
);

export default function Tarifs() {
  const forfaits = [
    {
      title: "Gratuit",
      description: "Certaines prestations vous sont offerte lors de la souscription d'un forfait.",
      services: [
        { name: "Première consultation", included: true },
        { name: "Communications avec vos détectives (pendant, horraire, avants etc..)", included: true },
        { name: "Production de photographies, vidéos, documents", included: true },
        { name: "Rédaction du rapport final recevable par toutes juridictions", included: true }
      ]
    },
    {
      title: "Tarifs horaires",
      description: "Nos tarifs horaires sont calculés en fonction de la complexité et les moyens techniques à mettre en place dans le cadre de la défense de vos intérêts",
      services: []
    },
    {
      title: "Forfaits",
      description: "Pour votre avantage financier, dans certains cas nos tarifs peuvent être calculés sous forme de forfait.",
      services: []
    }
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'PriceSpecification',
    name: 'Tarifs détective privé Agence L',
    url: 'https://www.lrdetectives.com/tarifs',
    priceCurrency: 'EUR',
    eligibleTransactionVolume: {
      '@type': 'QuantitativeValue',
      unitText: 'HOUR'
    },
    provider: {
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
              TARIFS
            </h1>
            <p className="font-[family-name:var(--font-lato)] text-[var(--color-gris-doux)] text-xl max-w-2xl mx-auto font-light">
              Des solutions adaptées à vos besoins et à votre budget. 
              Transparence et clarté dans tous nos engagements.
            </p>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-10">
          <div className="container-custom max-w-4xl">
            <div className="bg-white p-10 rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.05)] mb-12">
              <h2 className="font-[family-name:var(--font-playfair)] text-[var(--color-bleu-nuit)] text-3xl mb-6 text-center">
                Une tarification transparente et équitable
              </h2>
              <p className="font-[family-name:var(--font-lato)] text-[var(--color-gris-doux)] text-lg leading-relaxed text-center">
                Chez l'Agence L, nous croyons que la confiance commence par la transparence. 
                Nos tarifs sont clairs, sans surprise, et adaptés à la complexité de chaque mission. 
                Chaque euro investi l'est dans votre intérêt.
              </p>
            </div>
          </div>
        </section>

        {/* Consultation gratuite mise en avant */}
        <section className="bg-[var(--color-bronze)] py-16">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-20 h-20 mx-auto mb-6">
                <ConsultationIcon />
              </div>
              <h2 className="font-[family-name:var(--font-playfair)] text-[var(--color-beige)] text-3xl mb-4">
                Première consultation offerte
              </h2>
              <p className="font-[family-name:var(--font-lato)] text-[var(--color-beige)] text-lg mb-8 opacity-90">
                Nous offrons systématiquement une première consultation pour comprendre vos besoins 
                et vous proposer la solution la plus adaptée, sans engagement de votre part.
              </p>
              <a 
                href="/contact" 
                className="inline-block bg-[var(--color-beige)] text-[var(--color-bronze)] px-8 py-4 text-sm uppercase tracking-wider font-bold hover:bg-white transition-all duration-300"
              >
                RÉSERVER MA CONSULTATION GRATUITE
              </a>
            </div>
          </div>
        </section>

        {/* Forfaits Grid */}
        <section className="py-20">
          <div className="container-custom">
            <h2 className="font-[family-name:var(--font-playfair)] text-[var(--color-bleu-nuit)] text-4xl text-center mb-12 font-bold">
              Nos formules tarifaires
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {forfaits.map((forfait, idx) => (
                <div 
                  key={idx} 
                  className={`bg-white p-8 rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1 ${
                    idx === 0 ? 'border-2 border-[var(--color-bronze)]' : ''
                  }`}
                >
                  <div className="w-16 h-16 mx-auto mb-6">
                    {idx === 0 ? <ConsultationIcon /> : idx === 1 ? <HoraireIcon /> : <ForfaitIcon />}
                  </div>
                  <h3 className="font-[family-name:var(--font-playfair)] text-[var(--color-bleu-nuit)] text-2xl mb-4 text-center">
                    {forfait.title}
                  </h3>
                  <p className="font-[family-name:var(--font-lato)] text-[var(--color-gris-doux)] text-sm mb-6 text-center">
                    {forfait.description}
                  </p>
                  
                  {forfait.services.length > 0 && (
                    <div className="space-y-3">
                      {forfait.services.map((service, serviceIdx) => (
                        <div key={serviceIdx} className="flex items-start gap-2">
                          <CheckIcon />
                          <span className="font-[family-name:var(--font-lato)] text-[var(--color-gris-doux)] text-sm">
                            {service.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {idx > 0 && (
                    <div className="mt-8 text-center">
                      <a 
                        href="/contact" 
                        className="inline-block bg-[var(--color-bronze)] text-[var(--color-beige)] px-6 py-3 text-xs uppercase tracking-wider font-bold hover:bg-[var(--color-bronze-light)] transition-all duration-300 hover:-translate-y-0.5"
                      >
                        DEMANDER UN DEVIS
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mentions légales Section */}
        <section className="bg-[var(--color-bleu-nuit)] py-16">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <p className="font-[family-name:var(--font-lato)] text-[var(--color-beige)] text-sm leading-relaxed">
                Vos frais d'enquêtes peuvent être remboursés dans le cadre de l'article 700 du code de procédure civile.
                <br />
                Références d'arrêts à communiquer à votre avocat - Cour d'Appel 29/01/1988, Tribunal de Commerce 27/01/1999, Cour d'Appel 22/12/2000
              </p>
            </div>
          </div>
        </section>

        {/* Additional Info Section */}
        <section className="py-20 bg-white">
          <div className="container-custom max-w-4xl">
            <h2 className="font-[family-name:var(--font-playfair)] text-[var(--color-bleu-nuit)] text-3xl mb-10 text-center">
              Informations complémentaires
            </h2>
            
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h3 className="font-[family-name:var(--font-lato)] text-[var(--color-bronze)] text-xl mb-4 font-bold">
                  Modalités de paiement
                </h3>
                <p className="font-[family-name:var(--font-lato)] text-[var(--color-gris-doux)] leading-relaxed">
                  Nous acceptons les règlements par virement bancaire, chèque et espèces. 
                  Un acompte de 30% est demandé au début de la mission, le solde à la remise du rapport.
                </p>
              </div>
              
              <div>
                <h3 className="font-[family-name:var(--font-lato)] text-[var(--color-bronze)] text-xl mb-4 font-bold">
                  Devis personnalisé
                </h3>
                <p className="font-[family-name:var(--font-lato)] text-[var(--color-gris-doux)] leading-relaxed">
                  Chaque situation étant unique, nous établissons un devis détaillé et personnalisé 
                  après notre première consultation. Aucune surprise, tout est transparent.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 text-center bg-[var(--color-beige)]">
          <div className="container-custom max-w-4xl">
            <h2 className="font-[family-name:var(--font-playfair)] text-[var(--color-bleu-nuit)] text-3xl mb-6">
              Prêt à nous confier votre dossier ?
            </h2>
            <p className="font-[family-name:var(--font-lato)] text-[var(--color-gris-doux)] text-lg mb-8">
              Contactez-nous dès aujourd'hui pour une consultation gratuite et confidentielle. 
              Nous étudierons ensemble la meilleure approche pour votre situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="inline-block bg-[var(--color-bronze)] text-[var(--color-beige)] px-6 py-3 text-xs uppercase tracking-wider font-bold hover:bg-[var(--color-bronze-light)] transition-all duration-300 hover:-translate-y-0.5"
              >
                OBTENIR UN DEVIS GRATUIT
              </a>
              <a 
                href="tel:+33650012747" 
                className="inline-block bg-transparent border-2 border-[var(--color-bronze)] text-[var(--color-bronze)] px-6 py-3 text-xs uppercase tracking-wider font-bold hover:bg-[var(--color-bronze)] hover:text-[var(--color-beige)] transition-all duration-300"
              >
                APPELER MAINTENANT
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}