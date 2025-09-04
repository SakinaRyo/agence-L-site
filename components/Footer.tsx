// components/Footer.tsx
import Link from 'next/link'
import { MapPin, Phone, Mail, Shield } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-stone-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo et description */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-700 rounded-full 
                            flex items-center justify-center shadow-lg">
                <span className="text-2xl font-['Playfair_Display'] italic text-white font-bold">L</span>
              </div>
              <span className="text-stone-200 text-lg font-light tracking-wider">AGENCE L</span>
            </div>
            <p className="text-sm leading-relaxed">
              Détective Privé & Généalogie<br />
              Enquêtes privées et recherches généalogiques
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-stone-200 font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services/particuliers" className="hover:text-amber-500 transition-colors">Particuliers</Link></li>
              <li><Link href="/services/entreprises" className="hover:text-amber-500 transition-colors">Entreprises</Link></li>
              <li><Link href="/services/genealogie" className="hover:text-amber-500 transition-colors">Généalogie</Link></li>
            </ul>
          </div>

          {/* Informations */}
          <div>
            <h3 className="text-stone-200 font-semibold mb-4">Informations</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/confidentialite" className="hover:text-amber-500 transition-colors">Confidentialité</Link></li>
              <li><Link href="/tarifs" className="hover:text-amber-500 transition-colors">Nos tarifs</Link></li>
              <li><Link href="/mentions-legales" className="hover:text-amber-500 transition-colors">Mentions légales</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-stone-200 font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-600" />
                <span>Montpellier, Occitanie</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-600" />
                <a href="tel:0650012747" className="hover:text-amber-500 transition-colors">06 50 01 27 47</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-600" />
                <a href="mailto:ldetective7@proton.me" className="hover:text-amber-500 transition-colors">ldetective7@proton.me</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-stone-400">
            © 2025 Agence L. Tous droits réservés.
          </p>
          <div className="flex items-center gap-2 text-sm text-stone-400">
            <Shield className="w-4 h-4 text-amber-600" />
            <span>Détective privé agréé</span>
          </div>
        </div>
      </div>
    </footer>
  )
}