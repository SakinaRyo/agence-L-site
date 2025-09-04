// components/ZoneSection.tsx
'use client'

import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'

export default function ZoneSection() {
  return (
    <section className="py-20 bg-white" aria-labelledby="zone-heading">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 id="zone-heading" className="text-4xl md:text-5xl font-['Playfair_Display'] text-[var(--color-bleu-nuit)] mb-6 leading-tight">
              Une expertise locale,<br />
              une capacité d'action nationale
            </h2>
            
            <p className="text-[var(--color-gris-doux)] font-['Lato'] mb-4 leading-relaxed">
              Implantée au cœur de <strong className="text-[var(--color-bronze)] font-semibold">Montpellier</strong>, 
              l'Agence L bénéficie d'une connaissance approfondie du territoire héraultais et de la région 
              Occitanie. Cette ancrage local nous permet d'intervenir rapidement et efficacement, 
              avec la finesse que seule procure une parfaite maîtrise du terrain.
            </p>
            
            <p className="text-[var(--color-gris-doux)] font-['Lato'] leading-relaxed">
              Notre réseau de correspondants agréés et notre mobilité nous permettent d'étendre 
              nos investigations sur <strong className="text-[var(--color-bronze)] font-semibold">l'ensemble du territoire français</strong>, 
              garantissant ainsi la continuité et l'efficacité de nos enquêtes, où que vous soyez.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-[var(--color-beige)] to-white rounded-2xl p-20 
                          shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-bronze)]/5 to-[var(--color-bronze)]/5" />
              
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
                aria-label="Zone d'intervention de l'Agence L"
              >
                <MapPin className="w-20 h-20 text-[var(--color-bronze)] mx-auto mb-4" aria-hidden="true" />
                <p className="text-center text-[var(--color-bleu-nuit)] font-['Lato'] font-semibold tracking-wider">
                  MONTPELLIER • OCCITANIE • FRANCE
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}