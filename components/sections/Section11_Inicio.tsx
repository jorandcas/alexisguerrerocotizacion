'use client'

import { FadeIn } from '../FadeIn'

const feedItems = [
  { type: 'Publicación', description: 'Contenido del coach para las clientas' },
  { type: 'Tips', description: 'Consejos rápidos de bienestar y fitness' },
  { type: 'Promociones', description: 'Ofertas especiales y nuevos planes' },
  { type: 'Likes', description: 'Interacción sin comentarios' },
]

export function Section11_Inicio() {
  return (
    <section id="section-11" className="min-h-screen flex items-center justify-center relative bg-ivory-50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="text-center mb-16">
              <p className="text-caption tracking-[0.2em] uppercase text-rose-dust-200 mb-4">
                10
              </p>
              <h2 className="text-title font-sans">
                Módulo de Inicio
              </h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6">
            {feedItems.map((item, index) => (
              <FadeIn key={item.type} delay={0.3 + index * 0.12}>
                <div className="card-premium hover:shadow-lg hover:shadow-ivory-200/30 transition-all duration-500">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 bg-nude-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-nude-300">❤</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-gray-warm-800 mb-2">
                        {item.type}
                      </h3>
                      <div className="w-16 h-px bg-nude-200 mb-4" />
                      <p className="text-caption text-gray-warm-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.7}>
            <div className="mt-16 text-center">
              <p className="text-body text-gray-warm-600 italic">
                Feed refinado, discreto y elegante
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
