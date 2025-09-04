// components/CTASection.tsx
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-amber-600 to-amber-700 relative overflow-hidden">
      {/* Effet de fond animé */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-32 -left-32 w-64 h-64 bg-white/10 rounded-full"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [360, 180, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-32 -right-32 w-96 h-96 bg-white/10 rounded-full"
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] text-white mb-6">
            Prêt(e) à lever le doute ?
          </h2>
          
          <p className="text-xl text-white/95 mb-8 leading-relaxed">
            
Le premier pas est souvent le plus difficile. C'est pourquoi nous vous proposons un premier échange en toute confidentialité. Exposez-nous votre situation et découvrez comment nous pouvons vous accompagner vers la sérénité.
          </p>
          
          <Link href="/contact"
            className="inline-block px-10 py-4 bg-white text-amber-700 font-bold rounded-full 
                     text-lg tracking-wide hover:bg-stone-100 transform hover:-translate-y-1 
                     transition-all duration-300 shadow-xl hover:shadow-2xl"
          >
            DEMANDER UNE CONSULTATION CONFIDENTIELLE
          </Link>
        </motion.div>
      </div>
    </section>
  )
}