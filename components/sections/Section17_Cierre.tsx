'use client'

import { FadeIn } from '../FadeIn'

export function Section17_Cierre() {
  return (
    <section id="section-17" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-cream-50 via-ivory-50 to-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-rose-dust-50/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-champagne-50/30 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn delay={0.3}>
            <p className="text-caption tracking-[0.2em] uppercase text-rose-dust-200 mb-8">
              16
            </p>
          </FadeIn>

          <FadeIn delay={0.5}>
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-sans text-gray-warm-800 mb-12">
              Muchas gracias
            </h1>
          </FadeIn>

          <FadeIn delay={0.7}>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-nude-300 to-transparent mx-auto mb-12" />
          </FadeIn>

          <FadeIn delay={0.9}>
            <p className="text-subtitle text-gray-warm-600 max-w-2xl mx-auto leading-relaxed mb-16">
              Quedo a disposición para cualquier duda, ajuste o comentario sobre esta propuesta.
            </p>
          </FadeIn>

          <FadeIn delay={1.1}>
            <div className="inline-flex flex-col items-center gap-6">
              <div className="flex items-center gap-8 text-caption text-gray-warm-500 tracking-wider">
                <span className="w-12 h-px bg-nude-200" />
                <span>alexisguerrero.com</span>
                <span className="w-12 h-px bg-nude-200" />
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={1.3}>
            <div className="mt-24 flex items-center justify-center gap-4">
              <span className="w-2 h-2 bg-nude-200 rounded-full" />
              <span className="text-caption text-gray-warm-400 uppercase tracking-widest">
                Fin de la presentación
              </span>
              <span className="w-2 h-2 bg-nude-200 rounded-full" />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
