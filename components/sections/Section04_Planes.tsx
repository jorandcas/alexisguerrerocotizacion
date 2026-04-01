'use client'

import { FadeIn } from '../FadeIn'

export function Section04_Planes() {
  return (
    <section id="section-4" className="min-h-screen flex items-center justify-center relative bg-sand-50">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="text-center mb-16">
              <p className="text-caption tracking-[0.2em] uppercase text-rose-dust-200 mb-4">
                03
              </p>
              <h2 className="text-title font-sans">
                Tipos de servicio
              </h2>
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Plan 1 */}
            <FadeIn delay={0.4}>
              <div className="card-elevated h-full">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-4xl font-sans text-gray-warm-800">
                    Plan Rutina
                  </h3>
                  <span className="text-8xl font-sans text-nude-100">01</span>
                </div>

                <div className="space-y-6">
                  <div>
                    <p className="text-caption uppercase tracking-wider text-rose-dust-200 mb-4">
                      Incluye
                    </p>
                    <ul className="space-y-3">
                      {['Acceso a plataforma', 'Rutina personalizada', 'Calendario', 'Contenido de nutrición general'].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 bg-nude-300 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-body text-gray-warm-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="w-full h-px bg-nude-100" />

                  <div>
                    <p className="text-caption uppercase tracking-wider text-gray-warm-400 mb-4">
                      No incluye
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-gray-warm-300 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-body text-gray-warm-500">Dieta personalizada</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Plan 2 */}
            <FadeIn delay={0.6}>
              <div className="card-elevated h-full ring-1 ring-rose-dust-100/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-rose-dust-50/50 to-transparent rounded-bl-full" />

                <div className="flex items-center justify-between mb-8 relative z-10">
                  <h3 className="text-4xl font-sans text-gray-warm-800">
                    Plan Completo
                  </h3>
                  <span className="text-8xl font-sans text-rose-dust-100">02</span>
                </div>

                <div className="relative z-10 space-y-6">
                  <div>
                    <p className="text-caption uppercase tracking-wider text-rose-dust-200 mb-4">
                      Incluye
                    </p>
                    <ul className="space-y-3">
                      {['Todo lo del plan rutina', 'Acceso a módulo "Mi alimentación"', 'Dieta personalizada asignada por el coach'].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 bg-rose-dust-200 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-body text-gray-warm-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
