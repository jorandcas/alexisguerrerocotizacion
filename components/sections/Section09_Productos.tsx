'use client'

import { FadeIn } from '../FadeIn'

const fields = [
  { name: 'Nombre', type: 'texto' },
  { name: 'Marca', type: 'texto' },
  { name: 'Categoría', type: 'selección' },
  { name: 'Imagen', type: 'archivo' },
  { name: 'Descripción', type: 'texto' },
]

export function Section09_Productos() {
  return (
    <section id="section-9" className="min-h-screen flex items-center justify-center relative bg-ivory-50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <FadeIn delay={0.2}>
              <p className="text-caption tracking-[0.2em] uppercase text-rose-dust-200 mb-4">
                08
              </p>
              <h2 className="text-title font-sans leading-tight mb-8">
                Módulo de<br />Productos Recomendados
              </h2>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-rose-dust-100 rounded-full flex items-center justify-center">
                    <span className="text-lg">＋</span>
                  </div>
                  <span className="text-body text-gray-warm-700">Agregar producto</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-nude-100 rounded-full flex items-center justify-center">
                    <span className="text-lg">≋</span>
                  </div>
                  <span className="text-body text-gray-warm-700">Visualización en lista</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-nude-100 rounded-full flex items-center justify-center">
                    <span className="text-lg">✎</span>
                  </div>
                  <span className="text-body text-gray-warm-700">Edición y eliminación</span>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.4} direction="right">
              <div className="card-elevated">
                <h3 className="text-xl font-sans text-gray-warm-800 mb-8">
                  Campos del producto
                </h3>
                <div className="space-y-4">
                  {fields.map((field, index) => (
                    <FadeIn key={field.name} delay={0.5 + index * 0.08}>
                      <div className="flex items-center justify-between p-4 bg-ivory-50/50 rounded-xl border border-nude-100/30">
                        <span className="text-body text-gray-warm-700">{field.name}</span>
                        <span className="text-caption text-gray-warm-400 uppercase tracking-wider">
                          {field.type}
                        </span>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
