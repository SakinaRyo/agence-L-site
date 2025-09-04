import { Metadata } from 'next'
import React from 'react';

export const metadata: Metadata = {
  title: 'Services de Généalogie - Recherche d\'Héritiers Montpellier | Agence L',
  description: 'Services de généalogie professionnelle à Montpellier : recherche d\'héritiers, généalogie successorale, histoire familiale, arbres généalogiques. Expert en Occitanie.',
  keywords: 'généalogie Montpellier, recherche héritiers, généalogie successorale, arbre généalogique, histoire familiale, généalogie ADN',
  openGraph: {
    title: 'Services de Généalogie - Agence L Montpellier',
    description: 'Expert en généalogie et recherche d\'héritiers en Occitanie',
    url: 'https://www.lrdetectives.com/services/genealogie',
    siteName: 'Agence L Détective',
    locale: 'fr_FR',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.lrdetectives.com/services/genealogie',
  },
}

// Icônes SVG comme composants
const ArbreIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full stroke-[var(--color-bronze)] fill-none stroke-[1.5]">
    <path d="M12 2v6m0 0v6m0-6h6m-6 0H6" />
    <circle cx="12" cy="8" r="2" />
    <circle cx="6" cy="8" r="2" />
    <circle cx="18" cy="8" r="2" />
    <circle cx="12" cy="14" r="2" />
    <circle cx="12" cy="20" r="2" />
    <path d="M12 16v4" />
  </svg>
);

const SuccessionIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full stroke-[var(--color-bronze)] fill-none stroke-[1.5]">
    <path d="M3 3h18v18H3z" />
    <path d="M7 3v18m7-18v18M3 7h18m-18 7h18" />
    <path d="M10 10h4v4h-4z" />
  </svg>
);

const GenetiqueIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full stroke-[var(--color-bronze)] fill-none stroke-[1.5]">
    {/* Loupe avec double hélice ADN */}
    <g>
      {/* Loupe */}
      <circle cx="10" cy="10" r="6" />
      <line x1="14.5" y1="14.5" x2="20" y2="20" strokeWidth="2" />
      {/* Mini ADN dans la loupe */}
      <g opacity="0.7">
        <path d="M8 7 C9 8, 9 9, 8 10 C9 11, 9 12, 8 13" strokeWidth="1" />
        <path d="M12 7 C11 8, 11 9, 12 10 C11 11, 11 12, 12 13" strokeWidth="1" />
        <line x1="8.5" y1="8.5" x2="11.5" y2="8.5" strokeWidth="0.5" />
        <line x1="8.5" y1="10" x2="11.5" y2="10" strokeWidth="0.5" />
        <line x1="8.5" y1="11.5" x2="11.5" y2="11.5" strokeWidth="0.5" />
      </g>
    </g>
  </svg>
);

const RechercheIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full stroke-[var(--color-bronze)] fill-none stroke-[1.5]">
    <circle cx="11" cy="11" r="8" />
    <path d="M21 21l-4.35-4.35" />
    <path d="M8 11h6m-3-3v6" />
  </svg>
);

const ArchivesIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full stroke-[var(--color-bronze)] fill-none stroke-[1.5]">
    <path d="M4 7h16l-1.5 9.5A2 2 0 0 1 16.5 18h-9a2 2 0 0 1-2-1.5L4 7z" />
    <path d="M4 7l1-3h14l1 3M10 11h4" />
  </svg>
);

const ConseilIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full stroke-[var(--color-bronze)] fill-none stroke-[1.5]">
    {/* Livre ouvert simple */}
    <g>
      {/* Page gauche */}
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      {/* Page droite */}
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      {/* Ligne centrale du livre */}
      <line x1="12" y1="7" x2="12" y2="21" strokeWidth="1" />
    </g>
  </svg>
);

export default function ServicesGenealogie() {
  const services = [
    {
      category: "Recherches Généalogiques Classiques",
      items: [
        {
          icon: <ArbreIcon />,
          title: "Généalogie familiale",
          description: "Découvrez vos origines et reconstituez votre arbre généalogique complet. Nous explorons les registres d'état civil, les archives paroissiales et notariales pour retracer votre lignée sur plusieurs générations, révélant l'histoire fascinante de vos ancêtres.",
          cta: "DÉCOUVRIR VOS ORIGINES"
        },
        {
          icon: <RechercheIcon />,
          title: "Recherche d'héritiers",
          description: "Dans le cadre de successions complexes, nous identifions et localisons les héritiers légitimes. Notre expertise permet de retrouver des parents éloignés ou perdus de vue, facilitant ainsi le règlement des successions et la transmission des patrimoines.",
          cta: "LANCER UNE RECHERCHE"
        }
      ]
    },
    {
      category: "Services Spécialisés",
      items: [
        {
          icon: <SuccessionIcon />,
          title: "Généalogie successorale",
          description: "Expertise complète pour les notaires, avocats et particuliers dans le cadre de successions. Nous établissons les dévolutions successorales, vérifions les droits des héritiers et produisons des rapports détaillés conformes aux exigences juridiques.",
          cta: "EXPERTISE SUCCESSORALE"
        },
        {
          icon: <GenetiqueIcon />,
          title: "Généalogie génétique",
          description: "Combinez l'analyse ADN avec les recherches documentaires traditionnelles. Nous vous accompagnons dans l'interprétation de vos résultats génétiques et les croisons avec les archives pour une vision complète de vos origines ethniques et familiales.",
          cta: "EXPLORER VOTRE ADN"
        }
      ]
    },
    {
      category: "Recherches Historiques et Patrimoniales",
      items: [
        {
          icon: <ArchivesIcon />,
          title: "Histoire familiale et patrimoine",
          description: "Au-delà des dates et des noms, découvrez l'histoire vivante de votre famille. Nous reconstituons le contexte historique, les métiers exercés, les lieux de vie et les événements marquants qui ont façonné le destin de vos ancêtres.",
          cta: "RACONTER VOTRE HISTOIRE"
        },
        {
          icon: <ConseilIcon />,
          title: "Conseil et formation",
          description: "Apprenez à mener vos propres recherches généalogiques. Nous proposons des formations personnalisées, des conseils méthodologiques et un accompagnement pour vous initier aux techniques de recherche dans les archives.",
          cta: "SE FORMER"
        }
      ]
    }
  ];

  const features = [
    {
      title: "Expertise régionale",
      description: "Connaissance approfondie des archives du Languedoc-Roussillon et de l'Occitanie"
    },
    {
      title: "Réseau étendu",
      description: "Accès privilégié aux archives départementales, nationales et internationales"
    },
    {
      title: "Rigueur historique",
      description: "Vérification systématique des sources et recoupement des informations"
    },
    {
      title: "Livrable sur mesure",
      description: "Rapports détaillés, arbres généalogiques illustrés et livres de famille personnalisés"
    }
  ];

  const process = [
    {
      step: "1",
      title: "Consultation initiale",
      description: "Définition de vos objectifs et évaluation des informations disponibles"
    },
    {
      step: "2",
      title: "Recherche approfondie",
      description: "Exploration méthodique des archives et bases de données"
    },
    {
      step: "3",
      title: "Analyse et vérification",
      description: "Recoupement des sources et validation des liens familiaux"
    },
    {
      step: "4",
      title: "Rapport final",
      description: "Présentation détaillée des résultats avec arbre généalogique"
    }
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Services de généalogie professionnelle',
    provider: {
      '@type': 'Organization',
      name: 'Agence L - Généalogie',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '48 rue Claude Balbastre',
        addressLocality: 'Montpellier',
        postalCode: '34070',
        addressCountry: 'FR'
      }
    },
    serviceType: 'Recherches généalogiques et successorales',
    areaServed: [
      {
        '@type': 'City',
        name: 'Montpellier'
      },
      {
        '@type': 'City',
        name: 'Béziers'
      },
      {
        '@type': 'City',
        name: 'Narbonne'
      },
      {
        '@type': 'State',
        name: 'Occitanie'
      }
    ]
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
              SERVICES DE GÉNÉALOGIE
            </h1>
            <p className="font-[family-name:var(--font-lato)] text-[var(--color-gris-doux)] text-xl max-w-2xl mx-auto font-light">
              Explorez vos racines, découvrez votre histoire. 
              De Montpellier à Narbonne, nous révélons les secrets de votre passé familial.
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
                          aria-label={`${service.cta} - Service ${service.title}`}
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

        {/* Process Section */}
        <section className="py-20 bg-white" aria-labelledby="process-heading">
          <div className="container-custom">
            <h2 id="process-heading" className="font-[family-name:var(--font-playfair)] text-[var(--color-bleu-nuit)] text-4xl text-center mb-12 font-bold">
              Notre Méthode de Travail
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((item, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-16 h-16 bg-[var(--color-bronze)] text-[var(--color-beige)] rounded-full flex items-center justify-center mx-auto mb-4 font-[family-name:var(--font-playfair)] text-2xl font-bold">
                    {item.step}
                  </div>
                  <h3 className="font-[family-name:var(--font-lato)] text-[var(--color-bleu-nuit)] text-lg mb-2 font-bold">
                    {item.title}
                  </h3>
                  <p className="font-[family-name:var(--font-lato)] text-[var(--color-gris-doux)] text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-[var(--color-bleu-nuit)] py-20" aria-labelledby="expertise-heading">
          <div className="container-custom">
            <h2 id="expertise-heading" className="font-[family-name:var(--font-playfair)] text-[var(--color-beige)] text-4xl text-center mb-12 font-bold">
              Notre Expertise à Votre Service
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
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

        {/* Testimonial Section */}
        <section className="py-20 bg-[var(--color-beige)]">
          <div className="container-custom max-w-3xl text-center">
            <blockquote>
              <p className="font-[family-name:var(--font-playfair)] text-[var(--color-gris-doux)] text-2xl italic mb-6">
                "Grâce à l'Agence L, j'ai découvert l'histoire fascinante de mes ancêtres catalans. 
                Un travail minutieux qui a révélé des branches familiales insoupçonnées et des histoires émouvantes."
              </p>
              <cite className="font-[family-name:var(--font-lato)] text-[var(--color-bronze)] font-bold not-italic">
                Marie D., Montpellier
              </cite>
            </blockquote>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 text-center bg-white">
          <div className="container-custom max-w-4xl">
            <h2 className="font-[family-name:var(--font-playfair)] text-[var(--color-bleu-nuit)] text-3xl mb-6">
              Commencez votre voyage dans le temps
            </h2>
            <p className="font-[family-name:var(--font-lato)] text-[var(--color-gris-doux)] text-lg mb-8">
              Chaque famille a une histoire unique qui mérite d'être racontée. 
              Laissez-nous vous aider à découvrir la vôtre et à préserver ce précieux héritage pour les générations futures.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="inline-block bg-[var(--color-bronze)] text-[var(--color-beige)] px-6 py-3 text-xs uppercase tracking-wider font-bold hover:bg-[var(--color-bronze-light)] transition-all duration-300 hover:-translate-y-0.5"
              >
                DÉBUTER VOS RECHERCHES
              </a>
              <a 
                href="/tarifs" 
                className="inline-block bg-transparent border-2 border-[var(--color-bronze)] text-[var(--color-bronze)] px-6 py-3 text-xs uppercase tracking-wider font-bold hover:bg-[var(--color-bronze)] hover:text-[var(--color-beige)] transition-all duration-300"
              >
                CONSULTER NOS FORFAITS
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}