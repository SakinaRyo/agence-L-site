import { Metadata } from 'next'
import React from 'react';

export const metadata: Metadata = {
  title: 'Services aux Particuliers - Détective Privé Montpellier | Agence L',
  description: 'Services de détective privé pour particuliers à Montpellier : enquêtes familiales, adultère, garde d\'enfants, harcèlement, recherche de personnes. Consultation gratuite.',
  keywords: 'détective privé particuliers, enquête adultère Montpellier, garde enfants detective, harcèlement preuves, recherche personnes disparues',
  openGraph: {
    title: 'Services aux Particuliers - Agence L Détective Privé',
    description: 'Solutions d\'enquête privée pour protéger votre vie personnelle et familiale',
    url: 'https://www.lrdetectives.com/services/particuliers',
    siteName: 'Agence L Détective',
    locale: 'fr_FR',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.lrdetectives.com/services/particuliers',
  },
}

// Icônes SVG comme composants
const AdultereIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full stroke-[var(--color-bronze)] fill-none stroke-[1.5]">
    <circle cx="9" cy="9" r="7" />
    <circle cx="15" cy="15" r="7" />
  </svg>
);

const GardeEnfantIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full stroke-[var(--color-bronze)] fill-none stroke-[1.5]">
    <path d="M12 2C17 2 21 6 21 11C21 15 18 18 14 20L12 22L10 20C6 18 3 15 3 11C3 6 7 2 12 2Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const EscroquerieIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full stroke-[var(--color-bronze)] fill-none stroke-[1.5]">
    <rect x="3" y="11" width="18" height="10" rx="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    <circle cx="12" cy="16" r="1" />
  </svg>
);

const HarcelementIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full stroke-[var(--color-bronze)] fill-none stroke-[1.5]">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    <line x1="9" y1="9" x2="15" y2="15" />
    <line x1="15" y1="9" x2="9" y2="15" />
  </svg>
);

const RechercheIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full stroke-[var(--color-bronze)] fill-none stroke-[1.5]">
    {/* Silhouette principale avec effet de disparition */}
    <g>
      {/* Tête/personne stylisée en pointillés */}
      <circle cx="9" cy="7" r="3" opacity="0.4" strokeDasharray="2 1"/>
      <path d="M9 10 C5 10, 3 12, 3 16 L3 18" opacity="0.4" strokeDasharray="2 1"/>
      
      {/* Loupe élégante intégrée */}
      <circle cx="15" cy="15" r="5" strokeWidth="2"/>
      <path d="M18.5 18.5 L21 21" strokeWidth="2" strokeLinecap="round"/>
      
      {/* Détail subtil : chemin/trace */}
      <path d="M9 15 Q12 15, 13 14" opacity="0.6" strokeDasharray="1 1"/>
    </g>
  </svg>
);

const ContreEnqueteIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full stroke-[var(--color-bronze)] fill-none stroke-[1.5]">
    <path d="M12 2l3 7h7l-5.5 4 2 7L12 15l-6.5 5 2-7L2 9h7l3-7z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export default function ServicesParticuliers() {
  const services = [
    {
      category: "Enquêtes pour Droit de la Famille",
      items: [
        {
          icon: <AdultereIcon />,
          title: "Suspicion d'adultère",
          description: "Dans les moments de doute qui fragilisent votre couple, nous apportons les éléments factuels dont vous avez besoin. Notre approche respectueuse et méthodique permet d'établir la vérité sans jugement, vous offrant ainsi les moyens de prendre des décisions éclairées pour votre avenir.",
          cta: "DEMANDER UNE CONSULTATION"
        },
        {
          icon: <GardeEnfantIcon />,
          title: "Garde d'enfants et pension alimentaire",
          description: "La protection de vos enfants est votre priorité absolue. Nous documentons avec rigueur les conditions de vie, les comportements et l'environnement dans lequel évoluent vos enfants. Ces éléments objectifs constituent des preuves solides pour défendre leurs intérêts devant la justice familiale.",
          cta: "EN SAVOIR PLUS"
        }
      ]
    },
    {
      category: "Protection Contre les Abus",
      items: [
        {
          icon: <EscroquerieIcon />,
          title: "Escroquerie et abus de confiance",
          description: "Un proche qui profite de votre générosité, un professionnel qui abuse de votre confiance... Nous analysons les transactions, recueillons les témoignages et constituons un dossier solide pour faire valoir vos droits et récupérer ce qui vous appartient.",
          cta: "ANALYSER VOTRE SITUATION"
        },
        {
          icon: <HarcelementIcon />,
          title: "Harcèlement moral et cyber-harcèlement",
          description: "Que ce soit dans votre vie privée, professionnelle ou en ligne, le harcèlement est une atteinte intolérable à votre dignité. Nous collectons méthodiquement les preuves, identifions les auteurs et documentons chaque fait pour vous permettre d'agir efficacement et retrouver votre sérénité.",
          cta: "OBTENIR DE L'AIDE"
        }
      ]
    },
    {
      category: "Recherches et Vérifications",
      items: [
        {
          icon: <RechercheIcon />,
          title: "Recherche de personnes disparues",
          description: "Un parent éloigné, un ami perdu de vue, un débiteur qui se dérobe... Nous mobilisons notre réseau et nos outils d'investigation pour retrouver la trace de personnes disparues. Chaque recherche est menée avec tact et dans le respect de la vie privée de chacun.",
          cta: "LANCER UNE RECHERCHE"
        },
        {
          icon: <ContreEnqueteIcon />,
          title: "Contre-enquête pénale",
          description: "Face à une accusation, la vérité mérite d'être explorée sous tous ses angles. Nous réexaminons les éléments du dossier, recherchons de nouvelles preuves et identifions les éventuelles failles de l'enquête initiale. Notre travail, toujours effectué dans le cadre légal, vise à contribuer à la manifestation de la vérité.",
          cta: "DEMANDER UNE ANALYSE DE DOSSIER"
        }
      ]
    }
  ];

  const features = [
    {
      title: "Expertise locale",
      description: "Basés à Montpellier, nous connaissons parfaitement le terrain et les spécificités régionales"
    },
    {
      title: "Double compétence",
      description: "Notre expertise unique en détective privé ET généalogie nous permet des recherches approfondies"
    },
    {
      title: "Confidentialité absolue",
      description: "Chaque mission est traitée avec la plus grande discrétion"
    },
    {
      title: "Approche humaine",
      description: "Nous comprenons que derrière chaque enquête se cache une histoire personnelle"
    }
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Services de détective privé pour particuliers',
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
    },
    serviceType: 'Enquêtes privées pour particuliers',
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 43.6108,
        longitude: 3.8767
      },
      geoRadius: '200000'
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
              SERVICES AUX PARTICULIERS
            </h1>
            <p className="font-[family-name:var(--font-lato)] text-[var(--color-gris-doux)] text-xl max-w-2xl mx-auto font-light">
              Des réponses claires pour des situations complexes. 
              Nous intervenons avec la plus grande discrétion pour protéger vos intérêts.
            </p>
          </div>
        </section>

        {/* Services Content */}
        <section className="py-10">
          <div className="container-custom">
            {services.map((category, idx) => (
              <div key={idx} className="mb-20">
                <h2 className="font-[family-name:var(--font-playfair)] text-[var(--color-bleu-nuit)] text-4xl text-center mb-12 font-bold">
                  {category.category}
                </h2>
                <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-10">
                  {category.items.map((service, serviceIdx) => (
                    <article 
                      key={serviceIdx} 
                      className="bg-white p-10 rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1 flex gap-8 items-start"
                    >
                      <div className="flex-shrink-0 w-16 h-16" aria-hidden="true">
                        {service.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-[family-name:var(--font-playfair)] text-[var(--color-bleu-nuit)] text-2xl mb-4">
                          {service.title}
                        </h3>
                        <p className="font-[family-name:var(--font-lato)] text-[var(--color-gris-doux)] mb-6 leading-relaxed">
                          {service.description}
                        </p>
                        <a 
                          href="/contact" 
                          className="inline-block bg-[var(--color-bronze)] text-[var(--color-beige)] px-6 py-3 text-xs uppercase tracking-wider font-bold hover:bg-[var(--color-bronze-light)] transition-all duration-300 hover:-translate-y-0.5"
                          aria-label={`${service.cta} pour ${service.title}`}
                        >
                          {service.cta}
                        </a>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="bg-[var(--color-bleu-nuit)] py-20 mt-20" aria-labelledby="why-choose-heading">
          <div className="container-custom">
            <h2 id="why-choose-heading" className="font-[family-name:var(--font-playfair)] text-[var(--color-beige)] text-4xl text-center mb-12 font-bold">
              Pourquoi choisir l'Agence L ?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
              {features.map((feature, idx) => (
                <div key={idx} className="text-center">
                  <h3 className="font-[family-name:var(--font-lato)] text-[var(--color-bronze)] text-xl mb-4 font-bold">
                    {feature.title}
                  </h3>
                  <p className="font-[family-name:var(--font-lato)] text-[var(--color-beige)] opacity-90 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 text-center">
          <div className="container-custom max-w-4xl">
            <h2 className="font-[family-name:var(--font-playfair)] text-[var(--color-bleu-nuit)] text-3xl mb-6">
              Vous avez des questions sur nos services ?
            </h2>
            <p className="font-[family-name:var(--font-lato)] text-[var(--color-gris-doux)] text-lg mb-8">
              Chaque situation est unique et mérite une attention particulière. 
              Contactez-nous pour une première consultation confidentielle et sans engagement.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-[var(--color-bronze)] text-[var(--color-beige)] px-6 py-3 text-xs uppercase tracking-wider font-bold hover:bg-[var(--color-bronze-light)] transition-all duration-300 hover:-translate-y-0.5"
            >
              PRENDRE RENDEZ-VOUS
            </a>
          </div>
        </section>
      </div>
    </>
  );
}