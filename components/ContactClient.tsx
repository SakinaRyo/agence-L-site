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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // ✅ Configuration Google Form
    const GOOGLE_FORM_ID = '1FAIpQLSed-0solCo_KkVepg-FJKEgQUV2nFd47IW1ZqxKMOH0doTiiQ';
    const ENTRY_NAME = 'entry.951871126';
    const ENTRY_EMAIL = 'entry.1132310014';
    const ENTRY_PHONE = 'entry.1814492819';
    const ENTRY_MESSAGE = 'entry.421732997';

    const formURL = `https://docs.google.com/forms/d/e/${GOOGLE_FORM_ID}/formResponse`;

    const formBody = new URLSearchParams({
      [ENTRY_NAME]: formData.nom,
      [ENTRY_EMAIL]: formData.email,
      [ENTRY_PHONE]: formData.telephone,
      [ENTRY_MESSAGE]: formData.message,
    });

    try {
      await fetch(formURL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody.toString(),
      });

      setSubmitStatus('success');
      console.log('✅ Formulaire envoyé avec succès - submitStatus défini à "success"');
      setFormData({ nom: '', email: '', telephone: '', message: '' });
      
      // Auto-dismiss après 8 secondes
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 8000);
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
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
      
      {/* Message de confirmation global - POSITION FIXED */}
      {submitStatus === 'success' && (
        <div 
          className="fixed top-0 left-0 right-0 bg-green-50 border-b-4 border-green-500 shadow-2xl"
          style={{
            zIndex: 9999,
            animation: 'slideDown 0.3s ease-out'
          }}
        >
          <style>{`
            @keyframes slideDown {
              from { opacity: 0; transform: translateY(-20px); }
              to { opacity: 1; transform: translateY(0); }
            }
          `}</style>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <button
              onClick={() => setSubmitStatus('idle')}
              className="absolute top-4 right-4 text-green-700 hover:text-green-900 transition-colors z-10"
              aria-label="Fermer le message"
              title="Fermer"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="flex items-center gap-3 text-green-800">
              <svg className="w-8 h-8 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <p className="font-[family-name:var(--font-playfair)] text-lg font-semibold">
                  Message envoyé avec succès !
                </p>
                <p className="font-[family-name:var(--font-lato)] text-sm">
                  Nous vous recontacterons dans les plus brefs délais.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {submitStatus === 'error' && (
        <div 
          className="fixed top-0 left-0 right-0 bg-red-50 border-b-4 border-red-500 shadow-2xl"
          style={{
            zIndex: 9999,
            animation: 'slideDown 0.3s ease-out'
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <button
              onClick={() => setSubmitStatus('idle')}
              className="absolute top-4 right-4 text-red-700 hover:text-red-900 transition-colors z-10"
              aria-label="Fermer le message"
              title="Fermer"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="flex items-center gap-3 text-red-800">
              <svg className="w-8 h-8 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <p className="font-[family-name:var(--font-playfair)] text-lg font-semibold">
                  Erreur lors de l'envoi
                </p>
                <p className="font-[family-name:var(--font-lato)] text-sm">
                  Veuillez réessayer ou nous appeler au 06 50 01 27 47
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      
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
                <form onSubmit={handleSubmit} className="space-y-6">
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
                      disabled={isSubmitting}
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
                      disabled={isSubmitting}
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
                      disabled={isSubmitting}
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
                      disabled={isSubmitting}
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[var(--color-bronze)] text-[var(--color-beige)] py-4 text-sm uppercase tracking-wider font-bold hover:bg-[var(--color-bronze-light)] transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Envoyer le message"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-3">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Envoi en cours...
                      </span>
                    ) : (
                      'Envoyer le message'
                    )}
                  </button>
                  
                  <p className="font-[family-name:var(--font-lato)] text-[var(--color-gris-doux)] text-xs text-center">
                    * Champs obligatoires. Vos données sont protégées conformément au RGPD.
                  </p>
                </form>
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