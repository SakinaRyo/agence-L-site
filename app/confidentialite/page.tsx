// app/confidentialite/page.tsx
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Politique de Confidentialité | Agence L - Protection RGPD',
  description: 'Politique de confidentialité et protection des données personnelles (RGPD) de l\'Agence L. Vos données sont protégées et sécurisées.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.lrdetectives.com/confidentialite',
  },
}

// Icônes SVG
const LockIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full stroke-[var(--color-bronze)] fill-none stroke-[1.5]">
    <rect x="5" y="11" width="14" height="10" rx="2" />
    <path d="M12 17v-2M8 11V7a4 4 0 0 1 8 0v4" />
  </svg>
);

const ShieldCheckIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full stroke-[var(--color-bronze)] fill-none stroke-[1.5]">
    <path d="M12 2L4 6v5c0 5.5 3.8 10.7 8 12 4.2-1.3 8-6.5 8-12V6l-8-4z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const EyeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full stroke-[var(--color-bronze)] fill-none stroke-[1.5]">
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const FileTextIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full stroke-[var(--color-bronze)] fill-none stroke-[1.5]">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
    <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
  </svg>
);

export default function Confidentialite() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Politique de Confidentialité - Agence L',
    url: 'https://www.lrdetectives.com/confidentialite',
    publisher: {
      '@type': 'PrivateInvestigator',
      name: 'Agence L'
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
              POLITIQUE DE CONFIDENTIALITÉ
            </h1>
            <p className="font-[family-name:var(--font-lato)] text-[var(--color-gris-doux)] text-xl max-w-2xl mx-auto font-light mb-8">
              Protection des données personnelles et conformité RGPD
            </p>
            
            {/* Badge de confiance */}
            <div className="inline-flex items-center gap-3 bg-blue-100 border-2 border-blue-600 rounded-lg px-6 py-4">
              <div className="w-8 h-8">
                <ShieldCheckIcon />
              </div>
              <div className="text-left">
                <p className="font-[family-name:var(--font-lato)] font-semibold text-blue-900">
                  Certification DPO (CNIL)
                </p>
                <p className="font-[family-name:var(--font-lato)] text-sm text-blue-700">
                  Délégué à la Protection des Données
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Notre engagement */}
        <section className="py-16 bg-gradient-to-br from-blue-100 to-blue-50">
          <div className="container-custom max-w-4xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 flex-shrink-0">
                <ShieldCheckIcon />
              </div>
              <div>
                <h2 className="font-[family-name:var(--font-playfair)] text-[var(--color-bleu-nuit)] text-4xl mb-4">
                  Notre engagement pour vos données
                </h2>
                <p className="font-[family-name:var(--font-lato)] text-[var(--color-gris-doux)] text-lg leading-relaxed mb-6">
                  La <strong>protection de vos données personnelles</strong> n'est pas simplement une obligation légale pour nous, c'est une priorité absolue inscrite dans notre ADN professionnel.
                </p>
                <div className="bg-white rounded-lg p-6 border-l-4 border-blue-600 shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
                  <p className="font-[family-name:var(--font-lato)] font-semibold text-blue-900 mb-2 flex items-center gap-2">
                    <span className="text-2xl">✓</span>
                    Direction certifiée « Délégué à la Protection des Données » (DPO)
                  </p>
                  <p className="font-[family-name:var(--font-lato)] text-sm text-blue-800">
                    Notre direction est certifiée par la <strong>CNIL</strong> et maîtrise parfaitement tous les codes et enjeux de la protection des données personnelles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 1. Responsable du traitement */}
        <section className="py-20">
          <div className="container-custom max-w-4xl">
            <div className="bg-white p-10 rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.05)] mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12">
                  <FileTextIcon />
                </div>
                <h2 className="font-[family-name:var(--font-playfair)] text-[var(--color-bleu-nuit)] text-3xl">
                  1. Responsable du traitement
                </h2>
              </div>
              
              <p className="font-[family-name:var(--font-lato)] text-[var(--color-gris-doux)] mb-4">
                Le responsable du traitement des données à caractère personnel est :
              </p>
              
              <div className="bg-[var(--color-beige)] p-6 rounded-lg border-l-4 border-[var(--color-bronze)]">
                <p className="font-[family-name:var(--font-lato)] text-[var(--color-bleu-nuit)] font-semibold text-lg mb-2">
                  Laetitia ROMERA
                </p>
                <p className="font-[family-name:var(--font-lato)] text-[var(--color-gris-doux)] mb-1">
                  <strong>Agence L - Détective Privé & Généalogie</strong>
                </p>
                <p className="font-[family-name:var(--font-lato)] text-[var(--color-gris-doux)] selectable mb-3">
                  48 rue Balbastre, 34070 Montpellier
                </p>
                <p className="font-[family-name:var(--font-lato)] text-[var(--color-gris-doux)]">
                  <strong>Contact DPO :</strong>{' '}
                  <a href="mailto:ldetective7@proton.me" className="selectable text-[var(--color-bronze)] hover:text-[var(--color-bronze-light)] transition-colors">
                    ldetective7@proton.me
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Données collectées */}
        <section className="py-20 bg-white">
          <div className="container-custom max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12">
                <EyeIcon />
              </div>
              <h2 className="font-[family-name:var(--font-playfair)] text-[var(--color-bleu-nuit)] text-3xl">
                2. Quelles données collectons-nous ?
              </h2>
            </div>
            
            <p className="font-[family-name:var(--font-lato)] text-[var(--color-gris-doux)] mb-6">
              Dans le cadre de l'utilisation de notre site internet et de nos services professionnels, nous sommes susceptibles de collecter les catégories de données suivantes :
            </p>

            <div className="space-y-4">
              <div className="bg-[var(--color-beige)] p-6 rounded-lg border-l-4 border-[var(--color-bronze)]">
                <h3 className="font-[family-name:var(--font-lato)] font-semibold text-[var(--color-bleu-nuit)] mb-2 flex items-center gap-2">
                  <span className="text-[var(--color-bronze)]">📋</span>
                  Données d'identité et de contact
                </h3>
                <ul className="font-[family-name:var(--font-lato)] text-[var(--color-gris-doux)] text-sm space-y-1 ml-6 list-disc">
                  <li>Nom, prénom</li>
                  <li>Adresse email</li>
                  <li>Numéro de téléphone</li>
                  <li>Adresse postale (si nécessaire)</li>
                </ul>
              </div>

              <div className="bg-[var(--color-beige)] p-6 rounded-lg border-l-4 border-[var(--color-bronze)]">
                <h3 className="font-[family-name:var(--font-lato)] font-semibold text-[var(--color-bleu-nuit)] mb-2 flex items-center gap-2">
                  <span className="text-[var(--color-bronze)]">🌐</span>
                  Données de navigation
                </h3>
                <ul className="font-[family-name:var(--font-lato)] text-[var(--color-gris-doux)] text-sm space-y-1 ml-6 list-disc">
                  <li>Adresse IP</li>
                  <li>Type de navigateur</li>
                  <li>Pages visitées et temps passé</li>
                  <li>Données de cookies (avec votre consentement)</li>
                </ul>
              </div>

              <div className="bg-[var(--color-beige)] p-6 rounded-lg border-l-4 border-[var(--color-bronze)]">
                <h3 className="font-[family-name:var(--font-lato)] font-semibold text-[var(--color-bleu-nuit)] mb-2 flex items-center gap-2">
                  <span className="text-[var(--color-bronze)]">💼</span>
                  Informations relatives à votre demande
                </h3>
                <ul className="font-[family-name:var(--font-lato)] text-[var(--color-gris-doux)] text-sm space-y-1 ml-6 list-disc">
                  <li>Nature de la demande (enquête, généalogie)</li>
                  <li>Description de la situation</li>
                  <li>Documents fournis (avec votre accord explicite)</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-5 mt-6">
              <p className="font-[family-name:var(--font-lato)] text-sm text-yellow-900">
                <strong>⚠️ Principe de minimisation :</strong> Nous ne collectons <strong>que les données strictement nécessaires</strong> à la fourniture de nos services.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Finalités */}
        <section className="py-20">
          <div className="container-custom max-w-4xl">
            <div className="bg-white p-10 rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
              <h2 className="font-[family-name:var(--font-playfair)] text-[var(--color-bleu-nuit)] text-3xl mb-6">
                3. Pourquoi collectons-nous vos données ?
              </h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="font-[family-name:var(--font-lato)] font-semibold text-[var(--color-bleu-nuit)] mb-2">
                    ✓ Traitement de vos demandes
                  </h3>
                  <p className="font-[family-name:var(--font-lato)] text-sm text-[var(--color-gris-doux)]">
                    Répondre à vos questions et demandes de contact
                  </p>
                  <p className="font-[family-name:var(--font-lato)] text-xs text-blue-700 mt-2">
                    <strong>Base légale :</strong> Consentement (Art. 6.1.a RGPD)
                  </p>
                </div>

                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="font-[family-name:var(--font-lato)] font-semibold text-[var(--color-bleu-nuit)] mb-2">
                    ✓ Gestion des dossiers
                  </h3>
                  <p className="font-[family-name:var(--font-lato)] text-sm text-[var(--color-gris-doux)]">
                    Mener les enquêtes et recherches généalogiques
                  </p>
                  <p className="font-[family-name:var(--font-lato)] text-xs text-blue-700 mt-2">
                    <strong>Base légale :</strong> Exécution du contrat (Art. 6.1.b)
                  </p>
                </div>

                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="font-[family-name:var(--font-lato)] font-semibold text-[var(--color-bleu-nuit)] mb-2">
                    ✓ Obligations légales
                  </h3>
                  <p className="font-[family-name:var(--font-lato)] text-sm text-[var(--color-gris-doux)]">
                    Conservation des dossiers selon la réglementation
                  </p>
                  <p className="font-[family-name:var(--font-lato)] text-xs text-blue-700 mt-2">
                    <strong>Base légale :</strong> Obligation légale (Art. 6.1.c)
                  </p>
                </div>

                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="font-[family-name:var(--font-lato)] font-semibold text-[var(--color-bleu-nuit)] mb-2">
                    ✓ Amélioration des services
                  </h3>
                  <p className="font-[family-name:var(--font-lato)] text-sm text-[var(--color-gris-doux)]">
                    Optimiser l'expérience utilisateur du site
                  </p>
                  <p className="font-[family-name:var(--font-lato)] text-xs text-blue-700 mt-2">
                    <strong>Base légale :</strong> Intérêt légitime (Art. 6.1.f)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. VOS DROITS - Section principale */}
        <section className="py-16 bg-gradient-to-br from-green-100 to-green-50">
          <div className="container-custom max-w-4xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 flex-shrink-0">
                <ShieldCheckIcon />
              </div>
              <div>
                <h2 className="font-[family-name:var(--font-playfair)] text-[var(--color-bleu-nuit)] text-4xl mb-4">
                  4. Vos droits sur vos données
                </h2>
                <p className="font-[family-name:var(--font-lato)] text-[var(--color-gris-doux)] text-lg leading-relaxed">
                  Conformément au <strong>RGPD</strong> et à la <strong>loi Informatique et Libertés</strong>, vous disposez des droits suivants :
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] space-y-4">
              {[
                { title: "Droit d'accès", desc: "Obtenir la confirmation que des données vous concernant sont traitées et y accéder" },
                { title: "Droit de rectification", desc: "Faire corriger des données inexactes ou compléter des données incomplètes" },
                { title: "Droit à l'effacement", desc: "Obtenir l'effacement de vos données personnelles (« droit à l'oubli »)" },
                { title: "Droit à la limitation", desc: "Demander la limitation du traitement de vos données" },
                { title: "Droit à la portabilité", desc: "Recevoir vos données dans un format structuré et couramment utilisé" },
                { title: "Droit d'opposition", desc: "Vous opposer au traitement de vos données" },
                { title: "Droit de retirer le consentement", desc: "Retirer votre consentement à tout moment" },
                { title: "Directives post-mortem", desc: "Définir des directives concernant vos données après votre décès" }
              ].map((droit, idx) => (
                <div key={idx} className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-[family-name:var(--font-lato)] font-semibold text-[var(--color-bleu-nuit)] mb-1">
                    ✓ {droit.title}
                  </h3>
                  <p className="font-[family-name:var(--font-lato)] text-sm text-[var(--color-gris-doux)]">
                    {droit.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Comment exercer vos droits */}
            <div className="bg-white rounded-lg p-8 mt-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
              <h3 className="font-[family-name:var(--font-lato)] font-semibold text-[var(--color-bleu-nuit)] mb-4 text-lg">
                Comment exercer vos droits ?
              </h3>
              <p className="font-[family-name:var(--font-lato)] text-[var(--color-gris-doux)] mb-4">
                Pour exercer l'un de ces droits, contactez-nous :
              </p>
              <div className="space-y-2 font-[family-name:var(--font-lato)] text-[var(--color-gris-doux)] mb-4">
                <p>✉️ Par email : <a href="mailto:ldetective7@proton.me" className="selectable text-[var(--color-bronze)] hover:text-[var(--color-bronze-light)] font-semibold">ldetective7@proton.me</a></p>
                <p className="selectable">📮 Par courrier : 48 rue Balbastre, 34070 Montpellier</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <p className="font-[family-name:var(--font-lato)] text-sm text-blue-900">
                  <strong>Important :</strong> Joignez une copie d'un titre d'identité signé. Réponse sous <strong>1 mois maximum</strong>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Sécurité */}
        <section className="py-20">
          <div className="container-custom max-w-4xl">
            <div className="bg-white p-10 rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12">
                  <LockIcon />
                </div>
                <h2 className="font-[family-name:var(--font-playfair)] text-[var(--color-bleu-nuit)] text-3xl">
                  5. Sécurité et confidentialité
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-[var(--color-beige)] p-5 rounded-lg border-l-4 border-[var(--color-bronze)]">
                  <h3 className="font-[family-name:var(--font-lato)] font-semibold text-[var(--color-bleu-nuit)] mb-2">
                    🔒 Mesures techniques
                  </h3>
                  <ul className="font-[family-name:var(--font-lato)] text-sm text-[var(--color-gris-doux)] space-y-1 ml-2 list-disc">
                    <li>Chiffrement HTTPS</li>
                    <li>Messagerie cryptée (ProtonMail)</li>
                    <li>Pare-feu et protections</li>
                    <li>Sauvegardes sécurisées</li>
                  </ul>
                </div>

                <div className="bg-[var(--color-beige)] p-5 rounded-lg border-l-4 border-[var(--color-bronze)]">
                  <h3 className="font-[family-name:var(--font-lato)] font-semibold text-[var(--color-bleu-nuit)] mb-2">
                    👤 Mesures organisationnelles
                  </h3>
                  <ul className="font-[family-name:var(--font-lato)] text-sm text-[var(--color-gris-doux)] space-y-1 ml-2 list-disc">
                    <li>Accès limité aux données</li>
                    <li>Formation du personnel</li>
                    <li>Politiques de sécurité</li>
                    <li>Secret professionnel</li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-5">
                <p className="font-[family-name:var(--font-lato)] text-green-900">
                  <strong>💚 Notre engagement :</strong> En tant que détective privé, nous sommes soumis au <strong>secret professionnel</strong>. La confidentialité est au cœur de notre métier.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Cookies */}
        <section className="py-20 bg-white">
          <div className="container-custom max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12">
                <EyeIcon />
              </div>
              <h2 className="font-[family-name:var(--font-playfair)] text-[var(--color-bleu-nuit)] text-3xl">
                6. Cookies
              </h2>
            </div>
            
            <div className="bg-[var(--color-beige)] p-6 rounded-lg mb-4">
              <h3 className="font-[family-name:var(--font-lato)] font-semibold text-[var(--color-bleu-nuit)] mb-2">
                Types de cookies utilisés :
              </h3>
              <div className="space-y-3 font-[family-name:var(--font-lato)] text-[var(--color-gris-doux)]">
                <p><strong>✓ Cookies techniques :</strong> Nécessaires au fonctionnement (pas de consentement requis)</p>
                <p><strong>✓ Cookies analytiques :</strong> Pour améliorer le site (avec votre consentement)</p>
              </div>
              <p className="font-[family-name:var(--font-lato)] text-sm text-green-700 font-semibold mt-4">
                ✅ Aucun cookie publicitaire ou de tracking commercial
              </p>
            </div>

            <p className="font-[family-name:var(--font-lato)] text-[var(--color-gris-doux)] text-sm">
              Vous pouvez configurer votre navigateur pour gérer les cookies.
              Guide CNIL : <a href="https://www.cnil.fr/fr/cookies-les-outils-pour-les-maitriser" target="_blank" rel="noopener noreferrer" className="text-[var(--color-bronze)] hover:text-[var(--color-bronze-light)]">cnil.fr/cookies</a>
            </p>
          </div>
        </section>

        {/* 7. Réclamation CNIL */}
        <section className="py-20">
          <div className="container-custom max-w-4xl">
            <div className="bg-white p-10 rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
              <h2 className="font-[family-name:var(--font-playfair)] text-[var(--color-bleu-nuit)] text-3xl mb-6">
                7. Droit de réclamation
              </h2>
              
              <p className="font-[family-name:var(--font-lato)] text-[var(--color-gris-doux)] mb-4">
                Si vos droits ne sont pas respectés, vous pouvez saisir la <strong>CNIL</strong> :
              </p>

              <div className="bg-[var(--color-beige)] p-6 rounded-lg border-l-4 border-[var(--color-bronze)]">
                <p className="font-[family-name:var(--font-lato)] font-semibold text-[var(--color-bleu-nuit)] text-lg mb-2">
                  Commission Nationale de l'Informatique et des Libertés
                </p>
                <div className="font-[family-name:var(--font-lato)] text-[var(--color-gris-doux)] space-y-1 selectable">
                  <p>3 Place de Fontenoy - TSA 80715</p>
                  <p>75334 PARIS CEDEX 07</p>
                  <p className="mt-2"><strong>Tél :</strong> 01 53 73 22 22</p>
                  <p>
                    <strong>Web :</strong>{' '}
                    <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-[var(--color-bronze)] hover:text-[var(--color-bronze-light)]">
                      www.cnil.fr
                    </a>
                  </p>
                </div>
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
                  href="/mentions-legales"
                  className="inline-block bg-[var(--color-beige)] text-[var(--color-bronze)] px-6 py-3 text-xs uppercase tracking-wider font-bold hover:bg-white transition-all duration-300"
                >
                  📄 Mentions légales & Agréments
                </Link>
                <Link 
                  href="/contact"
                  className="inline-block bg-transparent border-2 border-[var(--color-beige)] text-[var(--color-beige)] px-6 py-3 text-xs uppercase tracking-wider font-bold hover:bg-[var(--color-beige)] hover:text-[var(--color-bronze)] transition-all duration-300"
                >
                  ✉️ Nous contacter
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <section className="py-12 text-center bg-white">
          <div className="container-custom">
            <p className="font-[family-name:var(--font-lato)] text-[var(--color-gris-doux)] text-sm mb-3">
              <strong>Dernière mise à jour :</strong> Novembre 2025
            </p>
            <p className="font-[family-name:var(--font-lato)] text-[var(--color-gris-doux)] text-sm mb-6">
              Pour toute question sur cette politique :
            </p>
            <a 
              href="mailto:ldetective7@proton.me" 
              className="inline-block bg-[var(--color-bronze)] text-[var(--color-beige)] px-8 py-4 text-sm uppercase tracking-wider font-bold hover:bg-[var(--color-bronze-light)] transition-all duration-300"
            >
              ✉️ Contacter notre DPO
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