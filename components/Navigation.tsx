// components/Navigation.tsx
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import Image from "next/image"

const navigation = [
  { name: 'ACCUEIL', href: '/' },
  { 
    name: 'NOS SERVICES', 
    href: '#',
    submenu: [
      { name: 'Particuliers', href: '/services/particuliers' },
      { name: 'Entreprises', href: '/services/entreprises' },
      { name: 'Généalogie', href: '/services/genealogie' },
    ]
  },
  { name: 'CONFIDENTIALITÉ & ÉTHIQUE', href: '/confidentialite' },
  { name: 'NOS TARIFS', href: '/tarifs' },
  { name: 'CONTACT', href: '/contact' },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)
  const pathname = usePathname()
  
  // Détecte si on est sur la page d'accueil
  const isHomePage = pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || !isHomePage
            ? 'bg-bleu-nuit/95 backdrop-blur-md shadow-lg' 
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="relative z-50">
              <motion.div
                className="flex items-center space-x-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src="/logo.png"
                  alt="Agence L"
                  width={48}
                  height={48}
                  className="w-12 h-12"
                  priority
                />
                <div className="hidden sm:block">
                  <span className="font-lato text-sm font-light tracking-wider text-beige uppercase">
                    Agence L
                  </span>
                  <span className="block text-xs font-light tracking-wide text-beige/70">
                    Détective Privé
                  </span>
                </div>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  {item.submenu ? (
                    <>
                      <button 
                        className="flex items-center gap-1 font-lato text-sm font-light tracking-wider text-beige uppercase transition-colors hover:text-bronze"
                        aria-expanded="false"
                        aria-haspopup="true"
                      >
                        {item.name}
                        <ChevronDown className="w-4 h-4" />
                      </button>
                      
                      {/* Dropdown */}
                      <div className="absolute top-full left-0 mt-2 w-48 bg-bleu-nuit rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.name}
                            href={subitem.href}
                            className="block px-4 py-3 text-beige hover:text-bronze hover:bg-white/5 transition-colors duration-300 first:rounded-t-lg last:rounded-b-lg font-lato"
                          >
                            {subitem.name}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={`relative group font-lato text-sm font-light tracking-wider text-beige uppercase transition-colors hover:text-bronze ${
                        pathname === item.href ? 'text-bronze' : ''
                      }`}
                    >
                      <span>{item.name}</span>
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-bronze transition-all duration-300 group-hover:w-full" />
                      {pathname === item.href && (
                        <motion.div
                          layoutId="navbar-indicator"
                          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-bronze"
                        />
                      )}
                    </Link>
                  )}
                </div>
              ))}
              
              {/* CTA Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="px-6 py-2.5 bg-bronze hover:bg-bronze-light text-beige text-sm font-semibold tracking-wider uppercase rounded transition-all duration-300 shadow-lg hover:shadow-bronze/25"
                >
                  Consultation
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative z-50 p-2 text-beige hover:text-bronze transition-colors"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[280px] bg-bleu-nuit shadow-2xl z-40 lg:hidden"
            >
              <div className="flex flex-col p-8 pt-24 space-y-6">
                {navigation.map((item, index) => (
                  <div key={item.name}>
                    {item.submenu ? (
                      <>
                        <button
                          onClick={() => setOpenSubmenu(openSubmenu === item.name ? null : item.name)}
                          className="w-full flex items-center justify-between py-3 font-lato text-lg text-beige hover:text-bronze transition-colors text-left"
                        >
                          {item.name}
                          <ChevronDown className={`w-4 h-4 transition-transform ${
                            openSubmenu === item.name ? 'rotate-180' : ''
                          }`} />
                        </button>
                        <AnimatePresence>
                          {openSubmenu === item.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-4 overflow-hidden"
                            >
                              {item.submenu.map((subitem) => (
                                <Link
                                  key={subitem.name}
                                  href={subitem.href}
                                  onClick={() => {
                                    setIsMobileMenuOpen(false)
                                    setOpenSubmenu(null)
                                  }}
                                  className="block py-2 text-beige hover:text-bronze transition-colors font-lato"
                                >
                                  {subitem.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block font-lato text-lg text-beige hover:text-bronze transition-colors"
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    )}
                  </div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="pt-6 border-t border-beige/20"
                >
                  <Link
                    href="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full px-6 py-3 bg-bronze hover:bg-bronze-light text-beige text-center font-semibold tracking-wider uppercase rounded transition-all duration-300"
                  >
                    Consultation Gratuite
                  </Link>
                </motion.div>

                {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="pt-6 space-y-3 text-beige/70 text-sm"
                >
                  <p>24h/7j</p>
                  <p>
                    <a href="tel:+33650012747" className="hover:text-bronze transition-colors">
                      06 50 01 27 47
                    </a>
                  </p>
                  <p>Montpellier & Occitanie</p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}