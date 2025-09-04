import { Metadata } from 'next'
import React from 'react';

export const metadata: Metadata = {
  title: 'Services aux Entreprises - Détective Privé Montpellier | Agence L',
  description: 'Services de détective privé pour entreprises : vol, fraude, espionnage industriel, concurrence déloyale, arrêts maladie. Protection de vos actifs commerciaux.',
  keywords: 'détective privé entreprise, enquête fraude entreprise, espionnage industriel, concurrence déloyale, vérification arrêt maladie',
  openGraph: {
    title: 'Services aux Entreprises - Agence L Détective Privé',
    description: 'Solutions d\'investigation pour protéger votre entreprise et vos actifs',
    url: 'https://www.lrdetectives.com/services/entreprises',
    siteName: 'Agence L Détective',
    locale: 'fr_FR',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.lrdetectives.com/services/entreprises',
  },
}

// Icônes SVG comme composants
const VolAbusIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full stroke-[var(--color-bronze)] fill-none stroke-[1.5]">
    <path d="M17 8V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1" />
    <path d="M21 12H13m0 0l3-3m-3 3l3 3" />
    <circle cx="9" cy="12" r="2" />
  </svg>
);

const ArretMaladieIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full stroke-[var(--color-bronze)] fill-none stroke-[1.5]">
    <path d="M9 11V7a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m-6 0h6m-3-7v16m-7-5h14a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2z" />
  </svg>
);

const CyberSecuriteIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full stroke-[var(--color-bronze)] fill-none stroke-[1.5]">
    <path d="M12 2l8 4v6c0 4-3.5 7.5-8 8-4.5-.5-8-4-8-8V6l8-4z" />
    <path d="M12 12v4m0-8v.01" />
  </svg>
);

const EspionnageIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full stroke-[var(--color-bronze)] fill-none stroke-[1.5]">
    <path d="M19 3h-1a2 2 0 0 0-2 2v0a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2h-1a2 2 0 0 0-2 2v0a2 2 0 0 0 2 2h1" />
    <path d="M5 3h1a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2H5a2 2 0 0 0-2 2v0a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2H5" />
    <line x1="12" y1="3" x2="12" y2="21" />
  </svg>
);

const ConcurrenceIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full stroke-[var(--color-bronze)] fill-none stroke-[1.5]">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>
);

const ContrefaconIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full stroke-[var(--color-bronze)] fill-none stroke-[1.5]">
    <circle cx="11" cy="11" r="8" />
    <path d="M21 21l-4.35-4.35" />
    <path d="M11 7v8m-4-4h8" />
  </svg>
);

export default function ServicesEntreprises() {
  const services = [
    {
      category: "Protection des Actifs et du Personnel",
      items: [
        {
          icon: <VolAbusIcon />,
          title: "Vol et abus de confiance",
          description: "Un employé soupçonné de détournement, des marchandises qui disparaissent, des informations sensibles qui fuient... Nous menons des enquêtes discrètes pour identifier les responsables et documenter les preuves nécessaires à une action judiciaire ou disciplinaire.",
          cta: "PROTÉGER VOS ACTIFS"
        },
        {
          icon: <ArretMaladieIcon />,
          title: "Arrêt maladie abusif",
          description: "Les arrêts maladie de complaisance coûtent cher à votre entreprise. Nos enquêteurs vérifient discrètement la réalité des incapacités déclarées, dans le strict respect du cadre légal, vous permettant d'agir en cas d'abus avéré.",
          cta: "VÉRIFIER UN ARRÊT"
        }
      ]
    },
    {
      category: "Intelligence Économique et Sécurité",
      items: [
        {
          icon: <CyberSecuriteIcon />,
          title: "Cybersécurité et protection des données",
          description: "Dans un monde hyperconnecté, vos données sont votre capital. Nous évaluons vos vulnérabilités, enquêtons sur les fuites d'informations et vous aidons à renforcer votre sécurité numérique face aux menaces internes et externes.",
          cta: "SÉCURISER VOS DONNÉES"
        },
        {
          icon: <EspionnageIcon />,
          title: "Contre-espionnage industriel",
          description: "Vos innovations et secrets commerciaux sont-ils en sécurité ? Nous détectons les tentatives d'espionnage, identifions les fuites potentielles et mettons en place des protocoles pour protéger votre avantage concurrentiel.",
          cta: "PROTÉGER VOS SECRETS"
        }
      ]
    },
    {
      category: "Enquêtes Commerciales et Concurrentielles",
      items: [
        {
          icon: <ConcurrenceIcon />,
          title: "Concurrence déloyale",
          description: "Un concurrent qui copie vos méthodes, débauche vos clients ou vos employés clés ? Nous documentons les pratiques déloyales et constituons les preuves nécessaires pour défendre vos intérêts commerciaux devant les tribunaux.",
          cta: "DÉFENDRE VOS INTÉRÊTS"
        },
        {
          icon: <ContrefaconIcon />,
          title: "Enquête de contrefaçon",
          description: "Vos produits, votre marque ou vos créations sont copiés ? Nous localisons les contrefacteurs, documentons leurs activités et vous accompagnons dans la protection de votre propriété intellectuelle.",
          cta: "STOPPER LA CONTREFAÇON"
        }
      ]
    }
  ];

  const features = [
    {
      title: "Discrétion absolue",
      description: "Vos enquêtes restent strictement confidentielles pour protéger votre réputation"
    },
    {
      title: "Conformité légale",
      description: "Toutes nos actions respectent scrupuleusement le cadre juridique français"
    },
    {
      title: "Rapport détaillé",
      description: "Documentation complète et preuves recevables devant les tribunaux"
    },
    {
      title: "Réactivité 24/7",
      description: "Intervention rapide pour les situations urgentes nécessitant une action immédiate"
    }
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Services de détective privé pour entreprises',
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
    serviceType: 'Enquêtes privées pour entreprises',
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 43.6108,
        longitude: 3.8767
      },
      geoRadius: '500000'
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
              SERVICES AUX ENTREPRISES
            </h1>
            <p className="font-[family-name:var(--font-lato)] text-[var(--color-gris-doux)] text-xl max-w-2xl mx-auto font-light">
              Protégez vos actifs, votre réputation et votre avantage concurrentiel. 
              Des solutions d'investigation sur mesure pour les défis spécifiques aux entreprises.
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
                          aria-label={`${service.cta} - ${service.title}`}
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
        <section className="bg-[var(--color-bleu-nuit)] py-20 mt-20" aria-labelledby="partner-heading">
          <div className="container-custom">
            <h2 id="partner-heading" className="font-[family-name:var(--font-playfair)] text-[var(--color-beige)] text-4xl text-center mb-12 font-bold">
              L'Agence L, votre partenaire de confiance
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

        {/* Stats Section - À éviter si les chiffres sont inventés */}
        <section className="py-20 bg-white" aria-labelledby="stats-heading">
          <div className="container-custom">
            <h2 id="stats-heading" className="sr-only">Nos statistiques</h2>
            <div className="grid md:grid-cols-3 gap-10 text-center">
              <div>
                <p className="font-[family-name:var(--font-playfair)] text-[var(--color-bronze)] text-5xl font-bold mb-2">
                  Expertise
                </p>
                <p className="font-[family-name:var(--font-lato)] text-[var(--color-gris-doux)]">
                  reconnue
                </p>
              </div>
              <div>
                <p className="font-[family-name:var(--font-playfair)] text-[var(--color-bronze)] text-5xl font-bold mb-2">
                  Résultats
                </p>
                <p className="font-[family-name:var(--font-lato)] text-[var(--color-gris-doux)]">
                  prouvés
                </p>
              </div>
              <div>
                <p className="font-[family-name:var(--font-playfair)] text-[var(--color-bronze)] text-5xl font-bold mb-2">
                  Confiance
                </p>
                <p className="font-[family-name:var(--font-lato)] text-[var(--color-gris-doux)]">
                  absolue
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 text-center bg-[var(--color-beige)]">
          <div className="container-custom max-w-4xl">
            <h2 className="font-[family-name:var(--font-playfair)] text-[var(--color-bleu-nuit)] text-3xl mb-6">
              Protégez votre entreprise dès aujourd'hui
            </h2>
            <p className="font-[family-name:var(--font-lato)] text-[var(--color-gris-doux)] text-lg mb-8">
              Chaque minute compte lorsqu'il s'agit de protéger vos intérêts commerciaux. 
              Contactez-nous pour une consultation confidentielle et découvrez comment nous pouvons sécuriser votre activité.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="inline-block bg-[var(--color-bronze)] text-[var(--color-beige)] px-6 py-3 text-xs uppercase tracking-wider font-bold hover:bg-[var(--color-bronze-light)] transition-all duration-300 hover:-translate-y-0.5"
              >
                CONSULTATION URGENTE
              </a>
              <a 
                href="/tarifs" 
                className="inline-block bg-transparent border-2 border-[var(--color-bronze)] text-[var(--color-bronze)] px-6 py-3 text-xs uppercase tracking-wider font-bold hover:bg-[var(--color-bronze)] hover:text-[var(--color-beige)] transition-all duration-300"
              >
                VOIR NOS TARIFS
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}