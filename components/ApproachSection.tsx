// components/ApproachSection.tsx
'use client'

import { motion } from 'framer-motion'

export default function ApproachSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Effet de fond */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-600 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-700 rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] mb-8">
            Une méthodologie rigoureuse au service de la vérité
          </h2>
          
          <p className="text-lg leading-relaxed text-stone-300 mb-6">
            Notre approche repose sur quatre piliers fondamentaux : 
            <span className="text-amber-500 font-semibold"> l'écoute attentive</span> de votre situation pour comprendre précisément vos besoins, 
            <span className="text-amber-500 font-semibold"> l'analyse stratégique</span> pour définir les moyens d'investigation les plus adaptés, 
            <span className="text-amber-500 font-semibold"> l'action terrain</span> menée avec discrétion et professionnalisme, 
            et enfin <span className="text-amber-500 font-semibold">le rapport détaillé</span> qui vous fournit des éléments tangibles et exploitables.
          </p>
          
          <p className="text-lg leading-relaxed text-stone-300">
            Chaque mission est conduite dans le strict respect de la légalité, avec la légitimité 
            que confère notre agrément officiel, et selon les plus hauts standards moraux de 
            notre profession.
          </p>
        </motion.div>
      </div>
    </section>
  )
}