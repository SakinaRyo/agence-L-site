// components/ReassuranceSection.tsx
'use client'

import { motion } from 'framer-motion'
import { Shield, Lock, Scale } from 'lucide-react'

const reassuranceItems = [
  {
    icon: Shield,
    title: "Détective privé agréé",
    description: "Autorisation officielle\nGarantie de professionnalisme",
    ariaLabel: "Détective privé agréé et certifié"
  },
  {
    icon: Lock,
    title: "Confidentialité absolue",
    description: "Secret professionnel garanti\nProtection totale de vos données RGPD",
    ariaLabel: "Confidentialité et protection des données garanties"
  },
  {
    icon: Scale,
    title: "Preuves recevables",
    description: "Rapports conformes aux normes juridiques\nDocuments exploitables en justice",
    ariaLabel: "Preuves légales et recevables en justice"
  }
]

export default function ReassuranceSection() {
  return (
    <section className="py-20 bg-white" aria-labelledby="reassurance-heading">
      <div className="container-custom">
        <h2 id="reassurance-heading" className="sr-only">Nos garanties professionnelles</h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-lg text-[var(--color-gris-doux)] mb-12 max-w-4xl mx-auto leading-relaxed font-['Lato']"
        >
          L'Agence L met son expertise et sa discrétion au service de votre tranquillité d'esprit. 
          Depuis Montpellier, nous intervenons avec professionnalisme et intégrité pour apporter 
          des réponses concrètes à vos interrogations les plus sensibles.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {reassuranceItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="text-center group"
            >
              <div className="mb-6 inline-block p-5 bg-[var(--color-bronze)] 
                            rounded-full shadow-lg group-hover:shadow-xl 
                            group-hover:shadow-[var(--color-bronze)]/20 transition-all duration-300
                            group-hover:-translate-y-1"
                   aria-hidden="true">
                <item.icon className="w-10 h-10 text-[var(--color-beige)]" />
              </div>
              <h3 className="text-xl font-['Playfair_Display'] font-semibold text-[var(--color-bleu-nuit)] mb-3">
                {item.title}
              </h3>
              <p className="text-[var(--color-gris-doux)] font-['Lato'] whitespace-pre-line" 
                 aria-label={item.ariaLabel}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}