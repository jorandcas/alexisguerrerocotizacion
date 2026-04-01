'use client'

import { FadeIn } from '../FadeIn'

const categories = [
  { name: 'Recetarios', icon: '⟨ ⟩', count: '∞' },
  { name: 'Snacks', icon: '◌', count: '∞' },
  { name: 'Desayunos', icon: '○', count: '∞' },
  { name: 'Comidas', icon: '◍', count: '∞' },
  { name: 'Cenas', icon: '◎', count: '∞' },
  { name: 'Listas de súper', icon: '≡', count: '∞' },
]

export function Section10_Nutricion() {
  return (
    <section id="section-10" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-sand-50 to-cream-50">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="text-center mb-16">
              <p className="text-caption tracking-[0.2em] uppercase text-rose-dust-200 mb-4">
                09
              </p>
              <h2 className="text-title font-sans">
                Módulo de Nutrición
              </h2>
              <p className="text-subtitle mt-6 text-gray-warm-600">
                Contenido general
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <FadeIn key={category.name} delay={0.3 + index * 0.1}>
                <div className="card-premium text-center hover:shadow-lg hover:shadow-ivory-200/30 transition-all duration-500 cursor-default">
                  <span className="text-5xl text-nude-300 block mb-6">{category.icon}</span>
                  <h3 className="text-xl font-sans text-gray-warm-800 mb-2">
                    {category.name}
                  </h3>
                  <span className="text-caption text-gray-warm-400">
                    {category.count}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.8}>
            <div className="mt-16 text-center">
              <div className="inline-flex items-center gap-4 px-8 py-4 bg-white/60 backdrop-blur-sm rounded-full border border-nude-100/50">
                <span className="w-2 h-2 bg-rose-dust-200 rounded-full" />
                <span className="text-caption text-gray-warm-600">
                  Disponible para todos los planes
                </span>
                <span className="w-2 h-2 bg-rose-dust-200 rounded-full" />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
