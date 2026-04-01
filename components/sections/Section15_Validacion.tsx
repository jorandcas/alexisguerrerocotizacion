'use client'

import { FadeIn } from '../FadeIn'

const validations = [
  { item: 'Tipos de plan', status: 'confirmar' },
  { item: 'Accesos por plan', status: 'confirmar' },
  { item: 'Módulos', status: 'confirmar' },
  { item: 'Flujo', status: 'confirmar' },
  { item: 'Funcionalidades faltantes', status: 'verificar' },
]

export function Section15_Validacion() {
  return (
    <section id="section-15" className="min-h-screen flex items-center justify-center relative bg-ivory-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="text-center mb-16">
              <p className="text-caption tracking-[0.2em] uppercase text-rose-dust-200 mb-4">
                14
              </p>
              <h2 className="text-title font-sans mb-6">
                Validación del cliente
              </h2>
              <p className="text-body text-gray-warm-600 max-w-2xl mx-auto">
                Favor de confirmar que el alcance del proyecto está completo
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="card-elevated">
              <div className="space-y-6">
                {validations.map((item, index) => (
                  <FadeIn key={item.item} delay={0.5 + index * 0.1}>
                    <div className="flex items-center justify-between p-5 bg-ivory-50/30 rounded-xl border border-nude-100/30 hover:bg-ivory-50/50 transition-colors duration-300">
                      <div className="flex items-center gap-4">
                        <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
                          {item.status === 'confirmar' ? (
                            <span className="text-nude-300 text-sm">✓</span>
                          ) : (
                            <span className="text-champagne-200 text-sm">?</span>
                          )}
                        </span>
                        <span className="text-body text-gray-warm-700">{item.item}</span>
                      </div>
                      <span className="text-caption text-gray-warm-400 uppercase tracking-wider">
                        {item.status === 'confirmar' ? 'Correcto' : 'Sin omisiones'}
                      </span>
                    </div>
                  </FadeIn>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-nude-100/50">
                <div className="flex items-start gap-4">
                  <span className="text-2xl text-rose-dust-200">✉</span>
                  <div>
                    <p className="text-body text-gray-warm-700 leading-relaxed">
                      Por favor revisar cuidadosamente y confirmar que no existen funcionalidades adicionales por incluir en esta fase del proyecto.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
