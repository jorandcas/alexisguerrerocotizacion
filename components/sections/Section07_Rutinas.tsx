'use client'

import { FadeIn } from '../FadeIn'

const features = [
  { title: 'Rutinas base', description: 'Plantillas predefinidas para diferentes objetivos', icon: '◐' },
  { title: 'Asignación a usuarias', description: 'Vinculación de rutina con perfil de clienta', icon: '◑' },
  { title: 'Copia editable', description: 'La clienta puede personalizar su rutina', icon: '◒' },
  { title: 'Original protegido', description: 'La plantilla base no se modifica', icon: '◓' },
]

export function Section07_Rutinas() {
  return (
    <section id="section-7" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-white to-sand-50">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="text-center mb-16">
              <p className="text-caption tracking-[0.2em] uppercase text-rose-dust-200 mb-4">
                06
              </p>
              <h2 className="text-title font-sans">
                Módulo de Rutinas
              </h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FadeIn key={feature.title} delay={0.3 + index * 0.1}>
                <div className="card-premium text-center h-full hover:shadow-lg hover:shadow-ivory-200/30 transition-all duration-500">
                  <span className="text-4xl text-nude-300 block mb-6">{feature.icon}</span>
                  <h3 className="text-lg font-medium text-gray-warm-800 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-caption text-gray-warm-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
