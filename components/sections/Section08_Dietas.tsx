'use client'

import { FadeIn } from '../FadeIn'

const features = [
  { title: 'Dietas base', description: 'Paquetes de alimentación predefinidos', icon: '◈' },
  { title: 'Asignación a usuarias', description: 'Vinculación de dieta con perfil de clienta', icon: '◇' },
  { title: 'Edición personalizada', description: 'Ajustes según necesidades específicas', icon: '◆' },
  { title: 'Acceso restringido', description: 'Solo disponible para plan con dieta', icon: '◼' },
]

export function Section08_Dietas() {
  return (
    <section id="section-8" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-cream-50 to-ivory-50">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="text-center mb-16">
              <p className="text-caption tracking-[0.2em] uppercase text-rose-dust-200 mb-4">
                07
              </p>
              <h2 className="text-title font-sans">
                Módulo de Dietas
              </h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FadeIn key={feature.title} delay={0.3 + index * 0.1}>
                <div className="card-premium text-center h-full hover:shadow-lg hover:shadow-ivory-200/30 transition-all duration-500">
                  <span className="text-4xl text-rose-dust-200 block mb-6">{feature.icon}</span>
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
