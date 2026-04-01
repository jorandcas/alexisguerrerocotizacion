'use client'

import { FadeIn } from '../FadeIn'

const concepts = [
  { word: 'Elegante', description: 'Líneas refinadas y composición cuidadosa' },
  { word: 'Femenino', description: 'Estética suave sin ser cursi' },
  { word: 'Profesional', description: 'Credibilidad y confianza visual' },
  { word: 'Minimalista', description: 'Espacio y respiración en cada elemento' },
]

export function Section14_Diseno() {
  return (
    <section id="section-14" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-ivory-50 via-white to-cream-50">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="text-center mb-20">
              <p className="text-caption tracking-[0.2em] uppercase text-rose-dust-200 mb-4">
                13
              </p>
              <h2 className="text-title font-sans">
                Diseño
              </h2>
              <p className="text-subtitle mt-6 text-gray-warm-600">
                Manifiesto visual del estilo
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {concepts.map((concept, index) => (
              <FadeIn key={concept.word} delay={0.3 + index * 0.12}>
                <div className="group">
                  <div className="card-premium text-center hover:shadow-lg hover:shadow-ivory-200/30 transition-all duration-500 h-full">
                    <div className="mb-6">
                      <span className="text-6xl font-sans text-gray-warm-200 group-hover:text-nude-200 transition-colors duration-500">
                        {concept.word[0]}
                      </span>
                    </div>
                    <h3 className="text-3xl font-sans text-gray-warm-800 mb-4">
                      {concept.word}
                    </h3>
                    <div className="w-16 h-px bg-gradient-to-r from-transparent via-nude-300 to-transparent mx-auto mb-6" />
                    <p className="text-body text-gray-warm-600 leading-relaxed">
                      {concept.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.8}>
            <div className="mt-20 text-center">
              <div className="inline-block">
                <div className="flex items-center gap-8 text-caption text-gray-warm-500">
                  <span className="w-16 h-px bg-nude-200" />
                  <span className="tracking-widest uppercase">
                    Lujo · Sofisticación · Claridad
                  </span>
                  <span className="w-16 h-px bg-nude-200" />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
