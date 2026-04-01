'use client'

import { FadeIn } from '../FadeIn'

export function Section13_Pagos() {
  return (
    <section id="section-13" className="min-h-screen flex items-center justify-center relative bg-sand-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn delay={0.2}>
            <p className="text-caption tracking-[0.2em] uppercase text-rose-dust-200 mb-4">
              12
            </p>
            <h2 className="text-title font-sans mb-12">
              Recordatorio de pago
            </h2>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="card-elevated max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-6 mb-8">
                <span className="w-3 h-3 bg-rose-dust-200 rounded-full animate-pulse" />
                <span className="text-caption tracking-widest uppercase text-gray-warm-500">
                  Visible permanentemente
                </span>
                <span className="w-3 h-3 bg-rose-dust-200 rounded-full animate-pulse" />
              </div>

              <div className="bg-gradient-to-br from-champagne-50 to-ivory-50 rounded-2xl p-8 border border-champagne-100/50">
                <p className="text-2xl font-sans text-gray-warm-800 mb-4">
                  Tu próxima fecha de pago
                </p>
                <div className="w-24 h-px bg-gradient-to-r from-transparent via-nude-300 to-transparent mx-auto my-6" />
                <p className="text-subtitle text-rose-dust-200">
                  30 de Abril, 2026
                </p>
              </div>

              <div className="mt-8">
                <p className="text-caption text-gray-warm-500">
                  El recordatorio siempre está visible para que nunca olvides tu fecha de pago
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
