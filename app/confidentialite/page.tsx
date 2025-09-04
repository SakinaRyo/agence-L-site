import { Metadata } from 'next'
import React from 'react';

export const metadata: Metadata = {
  title: 'Confidentialité & Éthique - Détective Privé Montpellier | Agence L',
  description: 'Secret professionnel absolu et protection RGPD. Découvrez nos engagements éthiques et notre code de déontologie. Article 226-61 du code pénal.',
  keywords: 'confidentialité détective privé, secret professionnel, RGPD, déontologie détective, article 226-61',
  openGraph: {
    title: 'Confidentialité & Éthique - Agence L',
    description: 'Notre engagement : protéger vos intérêts avec discrétion et déontologie',
    url: 'https://www.lrdetectives.com/confidentialite',
    siteName: 'Agence L Détective',
    locale: 'fr_FR',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.lrdetectives.com/confidentialite',
  },
}

// Icônes SVG comme composants
const ConfidentialiteIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full stroke-[var(--color-bronze)] fill-none stroke-[1.5]">
    <rect x="3" y="11" width="18" height="10" rx="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    <circle cx="12" cy="16" r="1" />
  </svg>
);

const FilatureIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full stroke-[var(--color-bronze)] fill-none stroke-[1.5]">
    <circle cx="12" cy="12" r="2" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="2" x2="12" y2="6" />
    <line x1="12" y1="18" x2="12" y2="22" />
    <line x1="2" y1="12" x2="6" y2="12" />
    <line x1="18" y1="12" x2="22" y2="12" />
  </svg>
);

const DiscretionIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full stroke-[var(--color-bronze)] fill-none stroke-[1.5]">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="8 12 11 15 16 10" />
  </svg>
);

const SecretProfessionnelIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full stroke-[var(--color-bronze)] fill-none stroke-[1.5]">
    <rect x="5" y="11" width="14" height="10" rx="2" />
    <path d="M9 11V7a3 3 0 0 1 6 0v4" />
    <line x1="12" y1="15" x2="12" y2="17" />
  </svg>
);

const RGPDIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full stroke-[var(--color-bronze)] fill-none stroke-[1.5]">
    <circle cx="12" cy="12" r="10" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
);

export default function ConfidentialiteEthique() {
  const engagements = [
    {
      icon: <ConfidentialiteIcon />,
      title: "Confidentialité",
      description: "Avec nos agents de recherches privées, vous êtes assuré(e) de la confidentialité totale de votre dossier. Les échanges de mails sont chiffrés ainsi que nos appareils informatiques."
    },
    {
      icon: <FilatureIcon />,
      title: "Filature",
      description: "Nos enquêteurs ont tous suivis une formation très complète en terme de technique de filatures et utilisent du matériel hightech de pointe."
    },
    {
      icon: <DiscretionIcon />,
      title: "Discrétion absolue",
      description: "Nos enquêteurs ont validé une certification obligatoire et sont formés à la discrétion."
    },
    {
      icon: <SecretProfessionnelIcon />,
      title: "Secret professionnel absolu",
      description: "En application d'agents de Recherches Privées est soumise à un code de déontologie et dans ce cadre nos agents de recherches privées sont tenus au secret professionnel absolu."
    }
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Confidentialité & Éthique - Agence L',
    description: 'Engagements éthiques et protection des données de l\'Agence L',
    url: 'https://www.lrdetectives.com/confidentialite',
    isPartOf: {
      '@type': 'WebSite',
      name: 'Agence L Détective Privé',
      url: 'https://www.lrdetectives.com'
    },
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
              CONFIDENTIALITÉ & ÉTHIQUE
            </h1>
            <p className="font-[family-name:var(--font-lato)] text-[var(--color-gris-doux)] text-xl max-w-2xl mx-auto font-light">
              Notre engagement : protéger vos intérêts avec la plus grande discrétion et dans le respect absolu de la déontologie professionnelle.
            </p>
          </div>
        </section>

        {/* Engagements Grid */}
        <section className="py-10" aria-labelledby="engagements-heading">
          <div className="container-custom">
            <h2 id="engagements-heading" className="sr-only">Nos engagements professionnels</h2>
            <div className="grid md:grid-cols-2 gap-10 mb-20">
              {engagements.map((engagement, idx) => (
                <article 
                  key={idx} 
                  className="bg-white p-10 rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1 flex gap-8 items-start"
                >
                  <div className="flex-shrink-0 w-16 h-16" aria-hidden="true">
                    {engagement.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-[family-name:var(--font-playfair)] text-[var(--color-bleu-nuit)] text-2xl mb-4">
                      {engagement.title}
                    </h3>
                    <p className="font-[family-name:var(--font-lato)] text-[var(--color-gris-doux)] leading-relaxed">
                      {engagement.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Article 226-61 Section */}
        <section className="bg-[var(--color-bleu-nuit)] py-16">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-[family-name:var(--font-playfair)] text-[var(--color-bronze)] text-3xl mb-6 font-bold">
                Article 226-61 du code pénal
              </h2>
              <p className="font-[family-name:var(--font-lato)] text-[var(--color-beige)] text-lg leading-relaxed">
                En application de l'article 226-61 du code pénal, nos agents de recherches privées sont soumis à un code de déontologie 
                et dans ce cadre sont tenus au secret professionnel absolu.
              </p>
            </div>
          </div>
        </section>

        {/* Protection des données Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col lg:flex-row gap-12 items-center">
                <div className="lg:w-1/3">
                  <div className="w-32 h-32 mx-auto lg:mx-0">
                    <RGPDIcon />
                  </div>
                </div>
                <div className="lg:w-2/3">
                  <h2 className="font-[family-name:var(--font-playfair)] text-[var(--color-bleu-nuit)] text-3xl mb-6">
                    Protection des données
                  </h2>
                  <p className="font-[family-name:var(--font-lato)] text-[var(--color-gris-doux)] mb-4 leading-relaxed">
                    La protection des données est LA valeur ajoutée de l'agence L détective. La direction a validé une certification 
                    "délégué à la protection des données" (CNIL) et en maîtrise parfaitement tous les codes et les enjeux pour protéger vos données.
                  </p>
                  <h3 className="font-[family-name:var(--font-lato)] text-[var(--color-bleu-nuit)] text-xl mb-3 font-bold">
                    RGPD - Conformément aux dispositions des articles 6-III et 19 de la loi n° 2004-575 du 21 juin 2004
                  </h3>
                  <p className="font-[family-name:var(--font-lato)] text-[var(--color-gris-doux)] leading-relaxed">
                    Pour la Confiance dans l'économie numérique, dite L.C.E.N., nous portons à la connaissance des utilisateurs et visiteurs 
                    du site https://lrdetectives.com les informations obligatoires.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Informations légales */}
        <section className="py-20 bg-[var(--color-beige)]">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-[family-name:var(--font-playfair)] text-[var(--color-bleu-nuit)] text-3xl mb-10 text-center">
                Informations Légales
              </h2>
              
              <div className="space-y-8">
                {/* Statut du propriétaire */}
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h3 className="font-[family-name:var(--font-lato)] text-[var(--color-bronze)] text-xl mb-4 font-bold">
                    1. Informations légales :
                  </h3>
                  <p className="font-[family-name:var(--font-lato)] text-[var(--color-gris-doux)] leading-relaxed">
                    Statut du propriétaire : particulier La Propriétaire est : Laetitia ROMERA Adresse postale de la propriétaire : 
                    48 rue Balbastre - 34070 - MONTPELLIER La Créatrice du site, webmaster et responsable de la publication est : 
                    Laetitia ROMERA Contacter la responsable des données : larp2@proton.me La responsable de la publication est une 
                    personne physique L'hébergeur du site est : NAMECHEAP CREDIT - Les mentions légales ont étés générées par générateur 
                    de mentions légales
                  </p>
                </div>

                {/* Présentation et principe */}
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h3 className="font-[family-name:var(--font-lato)] text-[var(--color-bronze)] text-xl mb-4 font-bold">
                    2. Présentation et principe :
                  </h3>
                  <p className="font-[family-name:var(--font-lato)] text-[var(--color-gris-doux)] leading-relaxed">
                    Est désigné ci-après : Utilisateur, tout internaute se connectant et utilisant le site susnommé : 
                    www.lrdetectives.com. Le site www.lrdetectives.com regroupe un ensemble de services, dans l'état, 
                    mis à la disposition des utilisateurs. Il est ici précisé que ces derniers doivent rester courtois et 
                    faire preuve de bonne foi tant envers les autres utilisateurs qu'envers le webmaster du site www.lrdetectives.com.
                  </p>
                </div>

                {/* Accessibilité */}
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h3 className="font-[family-name:var(--font-lato)] text-[var(--color-bronze)] text-xl mb-4 font-bold">
                    3. Accessibilité :
                  </h3>
                  <p className="font-[family-name:var(--font-lato)] text-[var(--color-gris-doux)] leading-relaxed">
                    Le site www.lrdetectives.com est par principe accessible aux utilisateurs 24/24h, 7/7j, sauf interruption, 
                    programmée ou non, pour les besoins de sa maintenance ou en cas de force majeure. En cas d'impossibilité 
                    d'accès au service, www.lrdetectives.com s'engage à faire son maximum afin de rétablir l'accès au service 
                    et s'efforcera alors de communiquer préalablement aux utilisateurs les dates et heures de l'intervention.
                  </p>
                </div>

                {/* Propriété intellectuelle */}
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h3 className="font-[family-name:var(--font-lato)] text-[var(--color-bronze)] text-xl mb-4 font-bold">
                    4. Propriété intellectuelle :
                  </h3>
                  <p className="font-[family-name:var(--font-lato)] text-[var(--color-gris-doux)] leading-relaxed">
                    Laetitia ROMERA est propriétaire exclusif de tous les droits de propriété intellectuelle ou détient les droits 
                    d'usage sur tous les éléments accessibles sur le site, tant sur la structure que sur les textes, images, graphismes, 
                    logo, icônes, sons, logiciels… Toute reproduction totale ou partielle du site www.lrdetectives.com, représentation, 
                    modification, publication, adaptation totale ou partielle de l'un quelconque de ces éléments, quel que soit le moyen 
                    ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de Laetitia ROMERA : larp2@proton.me
                  </p>
                </div>

                {/* Liens hypertextes et cookies */}
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h3 className="font-[family-name:var(--font-lato)] text-[var(--color-bronze)] text-xl mb-4 font-bold">
                    5. Liens hypertextes et cookies :
                  </h3>
                  <p className="font-[family-name:var(--font-lato)] text-[var(--color-gris-doux)] leading-relaxed">
                    Le site www.lrdetectives.com contient un certain nombre de liens hypertextes vers d'autres sites 
                    mis en place avec l'autorisation de Laetitia ROMERA. Cependant, Laetitia ROMERA n'a pas la possibilité 
                    de vérifier l'ensemble du contenu des sites ainsi visités et décline donc toute responsabilité de ce fait 
                    quant aux risques éventuels de contenus illicites.
                  </p>
                </div>

                {/* Protection des biens et des personnes */}
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h3 className="font-[family-name:var(--font-lato)] text-[var(--color-bronze)] text-xl mb-4 font-bold">
                    6. Protection des biens et des personnes - gestion des données personnelles :
                  </h3>
                  <p className="font-[family-name:var(--font-lato)] text-[var(--color-gris-doux)] leading-relaxed">
                    En France, les données personnelles sont notamment protégées par la loi n° 78-87 du 6 janvier 1978, 
                    la loi n° 2004-801 du 6 août 2004, l'article L. 226-13 du Code pénal et la Directive Européenne du 24 octobre 1995. 
                    Les bases de données sont protégées par les dispositions de la loi du 1er juillet 1998 transposant la directive 
                    96/9 du 11 mars 1996 relative à la protection juridique des bases de données.
                  </p>
                </div>

                {/* Litige */}
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h3 className="font-[family-name:var(--font-lato)] text-[var(--color-bronze)] text-xl mb-4 font-bold">
                    7. Litige :
                  </h3>
                  <p className="font-[family-name:var(--font-lato)] text-[var(--color-gris-doux)] leading-relaxed">
                    En cas de litige, la partie la plus diligente saisira le dispositif de médiation de la consommation « l'AME Conso » 
                    SIS 11 place Dauphine – 75001 PARIS. Son site internet est : www.mediationconso-ame.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 text-center bg-white">
          <div className="container-custom max-w-4xl">
            <h2 className="font-[family-name:var(--font-playfair)] text-[var(--color-bleu-nuit)] text-3xl mb-6">
              Une question sur notre déontologie ?
            </h2>
            <p className="font-[family-name:var(--font-lato)] text-[var(--color-gris-doux)] text-lg mb-8">
              Nous sommes à votre disposition pour répondre à toutes vos questions concernant 
              nos pratiques éthiques et la protection de vos données.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-[var(--color-bronze)] text-[var(--color-beige)] px-6 py-3 text-xs uppercase tracking-wider font-bold hover:bg-[var(--color-bronze-light)] transition-all duration-300 hover:-translate-y-0.5"
            >
              NOUS CONTACTER
            </a>
          </div>
        </section>
      </div>
    </>
  );
}