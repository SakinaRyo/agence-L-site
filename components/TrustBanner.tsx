// components/TrustBanner.tsx
import { Shield, Award, Lock, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function TrustBanner() {
  return (
    <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 py-8 border-y border-amber-900/20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Version desktop */}
        <div className="hidden md:grid md:grid-cols-4 gap-8 items-center">
          <div className="flex items-center gap-3 text-stone-200">
            <Shield className="w-8 h-8 text-amber-500 flex-shrink-0" />
            <div>
              <p className="text-xs text-stone-400 uppercase tracking-wide">Agrément CNAPS</p>
              <p className="text-sm font-semibold">Ministère de l'Intérieur</p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-stone-200">
            <Award className="w-8 h-8 text-amber-500 flex-shrink-0" />
            <div>
              <p className="text-xs text-stone-400 uppercase tracking-wide">Certification</p>
              <p className="text-sm font-semibold">Délégué Protection Données</p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-stone-200">
            <Lock className="w-8 h-8 text-amber-500 flex-shrink-0" />
            <div>
              <p className="text-xs text-stone-400 uppercase tracking-wide">Conformité</p>
              <p className="text-sm font-semibold">RGPD & CNIL</p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-stone-200">
            <CheckCircle className="w-8 h-8 text-amber-500 flex-shrink-0" />
            <div>
              <p className="text-xs text-stone-400 uppercase tracking-wide">Diplôme d'État</p>
              <p className="text-sm font-semibold">Agent de Recherches Privées</p>
            </div>
          </div>
        </div>

        {/* Version mobile */}
        <div className="md:hidden space-y-4">
          <div className="flex items-center justify-center gap-3 text-stone-200">
            <Shield className="w-6 h-6 text-amber-500" />
            <span className="text-sm">Détective privé agréé CNAPS</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-stone-200">
            <Lock className="w-6 h-6 text-amber-500" />
            <span className="text-sm">Certifié Protection des Données (DPO)</span>
          </div>
        </div>

        {/* Lien vers les détails */}
        <div className="text-center mt-6">
          <Link 
            href="/mentions-legales#agrements" 
            className="text-xs text-amber-500 hover:text-amber-400 transition-colors uppercase tracking-wide"
          >
            Voir tous nos agréments →
          </Link>
        </div>
      </div>
    </section>
  )
}