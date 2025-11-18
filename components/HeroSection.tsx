// components/HeroSection.tsx
'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [mounted, setMounted] = useState(false)
  
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const springConfig = { damping: 25, stiffness: 150 }
  const glowX = useSpring(mouseX, springConfig)
  const glowY = useSpring(mouseY, springConfig)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      
      const x = (clientX / innerWidth - 0.5) * 30
      const y = (clientY / innerHeight - 0.5) * 30
      
      mouseX.set(x)
      mouseY.set(y)
      setMousePosition({ x: clientX, y: clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mounted, mouseX, mouseY])

  // Génération des particules côté client uniquement
  const particles = mounted ? Array.from({ length: 25 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 10,
    duration: 10 + Math.random() * 10
  })) : []

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden pt-20">
      {/* Background avec gradient et pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-bleu-nuit via-bleu-nuit to-[#0B1929]">
        <div className="absolute inset-0 opacity-30">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M 100 0 L 0 0 0 100" fill="none" stroke="rgba(169,113,66,0.05)" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)"/>
          </svg>
        </div>
      </div>

      {/* Particules dorées flottantes */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute w-1 h-1 bg-bronze-light rounded-full"
              style={{ left: `${particle.left}%` }}
              initial={{ opacity: 0, y: '100vh', scale: 0 }}
              animate={{
                opacity: [0, 1, 1, 0],
                y: ['100vh', '90vh', '10vh', '0'],
                scale: [0, 1, 1, 0]
              }}
              transition={{
                duration: particle.duration,
                delay: particle.delay,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>
      )}

      {/* Contenu principal */}
      <motion.div 
        ref={containerRef}
        className="relative z-20 text-center px-8 max-w-4xl mt-8"
      >
        {/* Logo avec Halo Doré Animé */}
        <div className="relative inline-block mb-12">
          {/* Anneaux pulsants */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] pointer-events-none">
            {[0, 0.5, 1].map((delay, index) => (
              <motion.div
                key={index}
                className="absolute inset-0 rounded-full border-2 border-bronze"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: [0, 0.5, 0],
                  scale: [0.8, 1.3 + index * 0.1, 1.5 + index * 0.1],
                }}
                transition={{
                  duration: 3,
                  delay,
                  repeat: Infinity,
                  ease: "easeOut"
                }}
                style={{
                  boxShadow: '0 0 30px 10px rgba(212, 165, 116, 0.3), inset 0 0 20px 2px rgba(212, 165, 116, 0.2)',
                  filter: 'blur(1px)'
                }}
              />
            ))}
            
            {/* Lueur dorée avec effet de souris */}
            <motion.div
              className="absolute top-1/2 left-1/2 w-[150px] h-[150px] rounded-full"
              style={{
                x: glowX,
                y: glowY,
                translateX: '-50%',
                translateY: '-50%',
                background: 'radial-gradient(circle, rgba(212, 165, 116, 0.4) 0%, rgba(169, 113, 66, 0.2) 30%, transparent 70%)',
                filter: 'blur(20px)',
              }}
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>

          {/* Logo principal avec Image */}
          <motion.div
            className="relative z-[2] flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Logo PNG avec animation */}
            <motion.div
              className="relative"
              animate={{
                filter: ['brightness(1)', 'brightness(1.3)', 'brightness(1)'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Image
                src="/logo.png"
                alt="Agence L - Détective Privé & Généalogie"
                width={160}
                height={160}
                className="w-32 h-32 md:w-40 md:h-40 drop-shadow-[0_0_30px_rgba(255,215,0,0.6)]"
                priority
              />
            </motion.div>
            
            {/* Texte sous le logo (optionnel) */}
            <motion.div
              className="text-center mt-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="block font-lato text-sm md:text-base font-light tracking-[0.2em] text-bronze uppercase">
                Détective Privé
              </span>
              <span className="block font-lato text-sm md:text-base font-light tracking-[0.2em] text-bronze uppercase">
                Généalogie
              </span>
            </motion.div>
          </motion.div>
        </div>

        {/* Titre principal */}
        <motion.h2
          className="font-playfair text-3xl md:text-5xl lg:text-6xl text-beige mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
           La vérité pour votre liberté...
          <br />
        </motion.h2>

        {/* Sous-titre */}
        <motion.p
          className="text-lg text-beige/85 max-w-2xl mx-auto mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
        >
          Enquêtes privées et recherches généalogiques. Intervention confidentielle 
          à Montpellier, en Occitanie et dans toute la France.
        </motion.p>

        {/* Bouton CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
          className="mb-8"
        >
          <Link
            href="#contact"
            className="group relative inline-block px-8 py-4 bg-gradient-to-r from-bronze to-bronze-light text-beige font-semibold text-sm tracking-wider uppercase rounded overflow-hidden transition-all duration-300 hover:shadow-[0_10px_30px_rgba(169,113,66,0.3)] hover:-translate-y-0.5"
          >
            <span className="relative z-10">
              Demander une consultation confidentielle
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </Link>
        </motion.div>
      </motion.div>

      {/* Indicateur de scroll */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-bronze/30 flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-2 bg-bronze rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}