'use client'

import { FadeIn } from '../FadeIn'

export function Section12_Calendario() {
  return (
    <section id="section-12" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-cream-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn delay={0.2}>
              <p className="text-caption tracking-[0.2em] uppercase text-rose-dust-200 mb-4">
                11
              </p>
              <h2 className="text-title font-sans leading-tight mb-8">
                Módulo de Calendario
              </h2>

              <div className="space-y-8">
                <FadeIn delay={0.3}>
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-nude-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl text-nude-300">◐</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-warm-800 mb-2">
                        Periodo de rutina
                      </h3>
                      <p className="text-body text-gray-warm-600">
                        Fecha de inicio y fin del programa de entrenamiento
                      </p>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={0.4}>
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-rose-dust-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl text-rose-dust-200">◑</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-warm-800 mb-2">
                        Fecha de pago
                      </h3>
                      <p className="text-body text-gray-warm-600">
                        Próximo vencimiento destacado permanentemente
                      </p>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </FadeIn>

            <FadeIn delay={0.5} direction="right">
              <div className="card-elevated">
                {/* Calendar visualization */}
                <div className="text-center mb-8">
                  <p className="text-caption tracking-wider text-gray-warm-500 uppercase mb-4">
                    Abril 2026
                  </p>
                  <div className="grid grid-cols-7 gap-2 text-sm">
                    {['L', 'M', 'X', 'J', 'V', 'S', 'D'].map((day, i) => (
                      <div key={i} className="w-10 h-10 flex items-center justify-center text-caption text-gray-warm-400">
                        {day}
                      </div>
                    ))}
                    {[...Array(30)].map((_, i) => {
                      const isToday = i === 15
                      const isPayment = i === 28
                      return (
                        <div
                          key={i}
                          className={`w-10 h-10 flex items-center justify-center rounded-full text-body transition-all duration-300 ${
                            isToday
                              ? 'bg-rose-dust-200 text-white shadow-lg'
                              : isPayment
                              ? 'bg-champagne-200 text-gray-warm-800 font-medium'
                              : 'text-gray-warm-600 hover:bg-nude-50'
                          }`}
                        >
                          {i + 1}
                        </div>
                      )
                    })}
                  </div>
                </div>

                <div className="flex items-center gap-6 justify-center text-caption">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-rose-dust-200 rounded-full" />
                    <span className="text-gray-warm-500">Hoy</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-champagne-200 rounded-full" />
                    <span className="text-gray-warm-500">Pago</span>
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
