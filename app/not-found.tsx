import { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'

export const metadata: Metadata = {
  title: 'Page introuvable - Erreur 404 | Agence L',
  description: 'La page que vous recherchez semble avoir disparu. Nos enquêteurs sont sur l\'affaire.',
  robots: 'noindex, nofollow',
}

// Icône Loupe cassée
const BrokenSearchIcon = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <g>
      {/* Loupe principale */}
      <circle 
        cx="80" 
        cy="80" 
        r="45" 
        stroke="var(--color-bronze)" 
        strokeWidth="6" 
        fill="none"
        opacity="0.8"
      />
      
      {/* Manche de la loupe */}
      <rect
        x="110"
        y="110"
        width="50"
        height="12"
        rx="6"
        fill="var(--color-bronze)"
        transform="rotate(45 110 110)"
        opacity="0.8"
      />
      
      {/* Point d'interrogation dans la loupe */}
      <text 
        x="80" 
        y="95" 
        fontSize="50" 
        fill="var(--color-bronze)" 
        textAnchor="middle" 
        fontFamily="var(--font-playfair)"
        fontWeight="bold"
        opacity="0.7"
      >
        ?
      </text>
      
      {/* Petites étoiles/points pour suggérer que quelque chose manque */}
      <circle cx="120" cy="40" r="3" fill="var(--color-bronze)" opacity="0.4" />
      <circle cx="130" cy="55" r="2" fill="var(--color-bronze)" opacity="0.3" />
      <circle cx="35" cy="110" r="2.5" fill="var(--color-bronze)" opacity="0.4" />
    </g>
  </svg>
);

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[var(--color-beige)] flex items-center justify-center px-4 pt-20">
      <div className="max-w-2xl w-full text-center">
        {/* Animation de la loupe */}
        <div className="w-40 h-40 mx-auto mb-8 animate-pulse">
          <BrokenSearchIcon />
        </div>
        
        {/* Code 404 stylisé */}
        <h1 className="font-[family-name:var(--font-playfair)] text-[var(--color-bronze)] text-8xl md:text-9xl font-bold mb-4">
          404
        </h1>
        
        {/* Titre principal */}
        <h2 className="font-[family-name:var(--font-playfair)] text-[var(--color-bleu-nuit)] text-3xl md:text-4xl mb-6">
          Cette piste s'est évanouie...
        </h2>
        
        {/* Message humoristique */}
        <p className="font-[family-name:var(--font-lato)] text-[var(--color-gris-doux)] text-lg mb-4 max-w-lg mx-auto">
          La page que vous recherchez semble avoir disparu sans laisser de traces. 
          Même nos meilleurs détectives n'ont pas réussi à la retrouver.
        </p>
        
        <p className="font-[family-name:var(--font-lato)] text-[var(--color-gris-doux)] text-base mb-8 max-w-lg mx-auto">
          Elle a peut-être été déplacée, supprimée, ou n'a jamais existé. 
          L'enquête continue...
        </p>
        
        {/* Boutons d'action */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/" 
            className="inline-block bg-[var(--color-bronze)] text-[var(--color-beige)] px-6 py-3 text-sm uppercase tracking-wider font-bold hover:bg-[var(--color-bronze-light)] transition-all duration-300 hover:-translate-y-0.5"
          >
            Retour à l'accueil
          </Link>
          
          <Link 
            href="/contact" 
            className="inline-block bg-transparent border-2 border-[var(--color-bronze)] text-[var(--color-bronze)] px-6 py-3 text-sm uppercase tracking-wider font-bold hover:bg-[var(--color-bronze)] hover:text-[var(--color-beige)] transition-all duration-300"
          >
            Contactez-nous
          </Link>
        </div>
        
        {/* Suggestions */}
        <div className="mt-16 pt-8 border-t border-gray-300">
          <p className="font-[family-name:var(--font-lato)] text-[var(--color-gris-doux)] text-sm mb-4">
            Vous cherchez peut-être :
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link 
              href="/services/particuliers" 
              className="text-[var(--color-bronze)] hover:text-[var(--color-bronze-light)] font-[family-name:var(--font-lato)] text-sm underline"
            >
              Services aux particuliers
            </Link>
            <span className="text-[var(--color-gris-doux)]">•</span>
            <Link 
              href="/services/entreprises" 
              className="text-[var(--color-bronze)] hover:text-[var(--color-bronze-light)] font-[family-name:var(--font-lato)] text-sm underline"
            >
              Services aux entreprises
            </Link>
            <span className="text-[var(--color-gris-doux)]">•</span>
            <Link 
              href="/services/genealogie" 
              className="text-[var(--color-bronze)] hover:text-[var(--color-bronze-light)] font-[family-name:var(--font-lato)] text-sm underline"
            >
              Généalogie
            </Link>
            <span className="text-[var(--color-gris-doux)]">•</span>
            <Link 
              href="/tarifs" 
              className="text-[var(--color-bronze)] hover:text-[var(--color-bronze-light)] font-[family-name:var(--font-lato)] text-sm underline"
            >
              Nos tarifs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}