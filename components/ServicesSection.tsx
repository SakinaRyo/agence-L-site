// components/ServicesSection.tsx
'use client'

import { motion } from 'framer-motion'
import { User, Building, Trees } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: User,
    title: "PARTICULIERS",
    subtitle: "Protéger votre sphère privée",
    description: "Enquêtes familiales, recherches de personnes disparues, vérifications de patrimoine, surveillance discrète... Nous vous accompagnons avec empathie et discrétion dans les moments délicats de votre vie personnelle.",
    link: "/services/particuliers",
    ariaLabel: "Services de détective privé pour particuliers"
  },
  {
    icon: Building,
    title: "ENTREPRISES",
    subtitle: "Sécuriser votre activité",
    description: "Intelligence économique, vérification de collaborateurs, enquêtes de solvabilité, lutte contre la fraude... Protégez votre entreprise grâce à des informations fiables et vérifiées.",
    link: "/services/entreprises",
    ariaLabel: "Services de détective privé pour entreprises"
  },
  {
    icon: Trees,
    title: "GÉNÉALOGIE",
    subtitle: "Retracer les liens du passé",
    description: "Recherches d'héritiers, successions complexes, reconstitution d'arbres généalogiques... Notre double expertise documentaire et terrain nous permet de retrouver les traces perdues.",
    link: "/services/genealogie",
    ariaLabel: "Services de généalogie et recherche d'héritiers"
  }
]

export default function ServicesSection() {
  return (
    <section className="py-20 bg-[var(--color-beige)]" aria-labelledby="services-heading">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 id="services-heading" className="text-4xl md:text-5xl font-['Playfair_Display'] text-[var(--color-bleu-nuit)] mb-4">
            Nos domaines d'intervention
          </h2>
          <div className="w-20 h-1 bg-[var(--color-bronze)] mx-auto" aria-hidden="true" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 
                       overflow-hidden group hover:-translate-y-2"
            >
              <div className="h-1 bg-[var(--color-bronze)] 
                            transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" 
                   aria-hidden="true" />
              
              <div className="p-8">
                <div aria-hidden="true">
                  <service.icon className="w-12 h-12 text-[var(--color-bronze)] mb-4" />
                </div>
                <h3 className="text-2xl font-['Playfair_Display'] font-bold text-[var(--color-bleu-nuit)] mb-2">
                  {service.title}
                </h3>
                <p className="text-[var(--color-bronze)] font-['Lato'] font-semibold mb-4">
                  {service.subtitle}
                </p>
                <p className="text-[var(--color-gris-doux)] font-['Lato'] mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Link 
                  href={service.link}
                  className="inline-flex items-center text-[var(--color-bronze)] font-['Lato'] font-semibold 
                           hover:text-[var(--color-bronze-light)] transition-colors group/link"
                  aria-label={service.ariaLabel}
                >
                  Découvrir nos solutions 
                  <span className="ml-2 transform group-hover/link:translate-x-2 transition-transform" aria-hidden="true">→</span>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}