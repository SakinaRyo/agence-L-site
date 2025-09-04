'use client';

import React, { useState } from 'react';

// Icônes SVG comme composants
const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-[var(--color-bronze)] fill-none stroke-[1.5]">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-[var(--color-bronze)] fill-none stroke-[1.5]">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const LocationIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-[var(--color-bronze)] fill-none stroke-[1.5]">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-[var(--color-bronze)] fill-none stroke-[1.5]">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

export default function ContactClient() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    // TODO: Implémenter l'envoi avec EmailJS ou Formspree
    console.log('Formulaire soumis:', formData);
    alert('Formulaire prêt à être connecté à EmailJS ou Formspree');
  };

  const coordonnees = [
    {
      icon: <PhoneIcon />,
      title: "Téléphone",
      content: "06 50 01 27 47",
      link: "tel:+33650012747"
    },
    {
      icon: <EmailIcon />,
      title: "Email",
      content: "ldetective7@proton.me",
      link: "mailto:ldetective7@proton.me"
    },
    {
      icon: <LocationIcon />,
      title: "Adresse",
      content: "48 rue Claude Balbastre\n34070 Montpellier",
      link: null
    },
    {
      icon: <ClockIcon />,
      title: "Disponibilité",
      content: "24h/24, 7j/7\npartout en France",
      link: null
    }
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Agence L - Détective Privé',
    url: 'https://www.lrdetectives.com/contact',
    mainEntity: {
      '@type': 'PrivateInvestigator',
      name: 'Agence L',
      telephone: '+33650012747',
      email: 'ldetective7@proton.me',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '48 rue Claude Balbastre',
        addressLocality: 'Montpellier',
        postalCode: '34070',
        addressCountry: 'FR'
      },
      openingHours: 'Mo-Su 00:00-23:59',
      areaServed: {
        '@type': 'Country',
        name: 'France'
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
              CONTACTEZ NOS ENQUÊTEURS
            </h1>
            <p className="font-[family-name:var(--font-lato)] text-[var(--color-gris-doux)] text-xl max-w-2xl mx-auto font-light">
              Disponibles 24h/24 et 7j/7 pour répondre à vos besoins. 
              Première consultation gratuite et confidentielle.
            </p>
          </div>
        </section>

        {/* Contact Grid */}
        <section className="py-10">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Formulaire */}
              <div className="bg-white p-10 rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
                <h2 className="font-[family-name:var(--font-playfair)] text-[var(--color-bleu-nuit)] text-3xl mb-8">
                  Envoyez-nous un message
                </h2>
                <div className="space-y-6">
                  <div>
                    <label className="block font-[family-name:var(--font-lato)] text-[var(--color-gris-doux)] text-sm mb-2">
                      Votre nom *
                    </label>
                    <input
                      type="text"
                      name="nom"
                      value={formData.nom}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-[var(--color-bronze)] font-[family-name:var(--font-lato)]"
                      placeholder="Jean Dupont"
                      required
                      aria-label="Votre nom"
                    />
                  </div>
                  
                  <div>
                    <label className="block font-[family-name:var(--font-lato)] text-[var(--color-gris-doux)] text-sm mb-2">
                      Votre email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-[var(--color-bronze)] font-[family-name:var(--font-lato)]"
                      placeholder="jean.dupont@email.com"
                      required
                      aria-label="Votre email"
                    />
                  </div>
                  
                  <div>
                    <label className="block font-[family-name:var(--font-lato)] text-[var(--color-gris-doux)] text-sm mb-2">
                      Votre téléphone
                    </label>
                    <input
                      type="tel"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-[var(--color-bronze)] font-[family-name:var(--font-lato)]"
                      placeholder="06 00 00 00 00"
                      aria-label="Votre téléphone"
                    />
                  </div>
                  
                  <div>
                    <label className="block font-[family-name:var(--font-lato)] text-[var(--color-gris-doux)] text-sm mb-2">
                      Votre message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-[var(--color-bronze)] font-[family-name:var(--font-lato)] resize-none"
                      placeholder="Décrivez votre situation en toute confidentialité..."
                      required
                      aria-label="Votre message"
                    ></textarea>
                  </div>
                  
                  <button
                    onClick={handleSubmit}
                    className="w-full bg-[var(--color-bronze)] text-[var(--color-beige)] py-4 text-sm uppercase tracking-wider font-bold hover:bg-[var(--color-bronze-light)] transition-all duration-300 cursor-pointer"
                    aria-label="Envoyer le message"
                  >
                    Envoyer le message
                  </button>
                  
                  <p className="font-[family-name:var(--font-lato)] text-[var(--color-gris-doux)] text-xs text-center">
                    * Champs obligatoires. Vos données sont protégées conformément au RGPD.
                  </p>
                </div>
              </div>
              
              {/* Coordonnées */}
              <div>
                <h2 className="font-[family-name:var(--font-playfair)] text-[var(--color-bleu-nuit)] text-3xl mb-8">
                  Nos coordonnées
                </h2>
                <p className="font-[family-name:var(--font-lato)] text-[var(--color-gris-doux)] mb-8 leading-relaxed">
                  La vérité pour votre liberté... Nous pouvons vous aider ! 
                  Nos Agents de Recherches Privées sont disponibles 24h/24 7j/7 
                  partout en France mais aussi à l'étranger.
                </p>
                
                <div className="grid gap-6 mb-8">
                  {coordonnees.map((item, idx) => (
                    <div key={idx} className="flex gap-4 items-start">
                      <div className="flex-shrink-0" aria-hidden="true">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-[family-name:var(--font-lato)] text-[var(--color-bleu-nuit)] font-bold mb-1">
                          {item.title}
                        </h3>
                        {item.link ? (
                          <a 
                            href={item.link}
                            className="font-[family-name:var(--font-lato)] text-[var(--color-gris-doux)] hover:text-[var(--color-bronze)] transition-colors whitespace-pre-line"
                          >
                            {item.content}
                          </a>
                        ) : (
                          <p className="font-[family-name:var(--font-lato)] text-[var(--color-gris-doux)] whitespace-pre-line">
                            {item.content}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Sites web */}
                <div className="mb-8">
                  <h3 className="font-[family-name:var(--font-lato)] text-[var(--color-bleu-nuit)] font-bold mb-2">
                    Sites web
                  </h3>
                  <p className="font-[family-name:var(--font-lato)] text-[var(--color-gris-doux)]">
                    <a href="https://www.lrdetectives.com" className="hover:text-[var(--color-bronze)] transition-colors">
                      www.lrdetectives.com
                    </a>
                  </p>
                </div>
                
                {/* Infos supplémentaires */}
                <div className="bg-[var(--color-bleu-nuit)] p-6 rounded-lg">
                  <h3 className="font-[family-name:var(--font-playfair)] text-[var(--color-bronze)] text-xl mb-4">
                    Intervention rapide
                  </h3>
                  <ul className="space-y-2">
                    <li className="font-[family-name:var(--font-lato)] text-[var(--color-beige)] text-sm flex items-start">
                      <span className="text-[var(--color-bronze)] mr-2">✓</span>
                      Montpellier et sa région : intervention sous 2h
                    </li>
                    <li className="font-[family-name:var(--font-lato)] text-[var(--color-beige)] text-sm flex items-start">
                      <span className="text-[var(--color-bronze)] mr-2">✓</span>
                      Occitanie : intervention dans la journée
                    </li>
                    <li className="font-[family-name:var(--font-lato)] text-[var(--color-beige)] text-sm flex items-start">
                      <span className="text-[var(--color-bronze)] mr-2">✓</span>
                      France entière et international : nous consulter
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <h2 className="font-[family-name:var(--font-playfair)] text-[var(--color-bleu-nuit)] text-3xl mb-8 text-center">
              Nous localiser
            </h2>
            <div className="bg-gray-200 p-1 rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.05)] max-w-6xl mx-auto" style={{height: '600px'}}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.736!2d3.8745!3d43.6342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b6af07de9bde2b%3A0x2c9d5341f5a2f5!2s48%20Rue%20Claude%20Balbastre%2C%2034070%20Montpellier!5e0!3m2!1sfr!2sfr!4v1234567890"
                width="100%"
                height="100%"
                style={{border:0}}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded"
                title="Localisation Agence L Montpellier"
              />
            </div>
            <div className="max-w-4xl mx-auto mt-6 text-center">
              <p className="font-[family-name:var(--font-playfair)] text-[var(--color-bleu-nuit)] text-xl mb-2">
                48 Rue Claude Balbastre, 34070 Montpellier
              </p>
              <p className="font-[family-name:var(--font-lato)] text-[var(--color-gris-doux)] text-sm">
                Parking gratuit disponible • Accès PMR • Proximité tramway ligne 2
              </p>
            </div>
          </div>
        </section>

        {/* Urgence Section */}
        <section className="bg-[var(--color-bronze)] py-16">
          <div className="container-custom text-center">
            <h2 className="font-[family-name:var(--font-playfair)] text-[var(--color-beige)] text-3xl mb-4">
              Besoin urgent d'un détective privé ?
            </h2>
            <p className="font-[family-name:var(--font-lato)] text-[var(--color-beige)] text-lg mb-8 opacity-90">
              Nos enquêteurs sont disponibles immédiatement pour vous écouter et intervenir rapidement.
            </p>
            <a 
              href="tel:+33650012747" 
              className="inline-flex items-center bg-[var(--color-beige)] text-[var(--color-bronze)] px-8 py-4 text-sm uppercase tracking-wider font-bold hover:bg-white transition-all duration-300"
              aria-label="Appeler maintenant le 06 50 01 27 47"
            >
              <PhoneIcon />
              <span className="ml-2">APPELER MAINTENANT : 06 50 01 27 47</span>
            </a>
          </div>
        </section>
      </div>
    </>
  );
}