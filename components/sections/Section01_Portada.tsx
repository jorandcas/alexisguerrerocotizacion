'use client'

import { FadeIn } from '../FadeIn'

export function Section01_Portada() {
  return (
    <section id="section-1" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-ivory-50 via-cream-50 to-sand-50">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-champagne-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-rose-dust-50/40 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-nude-50/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn delay={0.2}>
            <p className="text-caption tracking-[0.3em] uppercase mb-8 text-rose-dust-200">
              Propuesta funcional
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <h1 className="text-display font-sans mb-6 leading-tight">
              alexisguerrero<span className="text-nude-300">.com</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.6}>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-nude-300 to-transparent mx-auto my-12" />
          </FadeIn>

          <FadeIn delay={0.8}>
            <p className="text-subtitle max-w-2xl mx-auto leading-relaxed">
              Plataforma digital para gestión profesional de clientas
            </p>
          </FadeIn>

          <FadeIn delay={1}>
            <div className="mt-16 flex items-center justify-center gap-6">
              <span className="w-2 h-2 bg-nude-200 rounded-full" />
              <span className="text-caption tracking-wide text-gray-warm-500">
                Exclusivo · Profesional · Personalizado
              </span>
              <span className="w-2 h-2 bg-nude-200 rounded-full" />
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Bottom decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-nude-200 to-transparent" />
    </section>
  )
}
