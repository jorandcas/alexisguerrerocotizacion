'use client'

import { FadeIn } from '../FadeIn'

export function Section16_Costo() {
  return (
    <section id="section-16" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-white via-ivory-50 to-sand-50 py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="text-center mb-16">
              <p className="text-caption tracking-[0.2em] uppercase text-rose-dust-200 mb-4">
                15
              </p>
              <h2 className="text-title font-sans">
                Inversión del proyecto
              </h2>
            </div>
          </FadeIn>

          {/* Price Section - Protagonist */}
          <FadeIn delay={0.3}>
            <div className="text-center mb-20">
              <div className="inline-block">
                <div className="bg-gradient-to-br from-ivory-100 via-cream-100 to-sand-100 rounded-3xl p-16 md:p-20 border border-nude-100/50 shadow-xl shadow-ivory-200/30 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-champagne-100/20 to-transparent rounded-bl-full" />
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-rose-dust-100/20 to-transparent rounded-tr-full" />

                  <div className="relative z-10">
                    <p className="text-7xl md:text-8xl lg:text-9xl font-sans text-gray-warm-800 mb-6 tracking-tight">
                      $32,000
                    </p>
                    <p className="text-xl md:text-2xl text-gray-warm-600 font-light">
                      MXN
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-body text-gray-warm-600 mt-8 max-w-xl mx-auto">
                Incluye desarrollo completo de la plataforma, dominio y servidor.
              </p>
            </div>
          </FadeIn>

          {/* Formas de Pago */}
          <FadeIn delay={0.4}>
            <div className="mb-16">
              <h3 className="text-center font-sans text-2xl text-gray-warm-800 mb-10">Formas de pago</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="card-premium text-center">
                  <p className="text-lg font-sans text-gray-warm-800 mb-6">Pago en 2 exhibiciones</p>
                  <div className="w-16 h-px bg-nude-200 mx-auto mb-6" />
                  <div className="space-y-3 text-body text-gray-warm-700">
                    <p>50% al inicio</p>
                    <p>50% al finalizar</p>
                  </div>
                </div>
                <div className="card-premium text-center ring-1 ring-rose-dust-100/50">
                  <p className="text-lg font-sans text-gray-warm-800 mb-6">Pago en 3 meses</p>
                  <div className="w-16 h-px bg-nude-200 mx-auto mb-6" />
                  <div className="space-y-3">
                    <p className="text-body text-gray-warm-700">3 pagos mensuales de</p>
                    <p className="text-2xl font-sans text-gray-warm-800">$12,000 MXN</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Tiempo e Incluye */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <FadeIn delay={0.5}>
              <div className="card-premium">
                <h3 className="font-sans text-xl text-gray-warm-800 mb-6">Tiempo de desarrollo estimado:</h3>
                <p className="text-4xl font-sans text-rose-dust-200">10 a 14 semanas</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.55}>
              <div className="card-premium">
                <h3 className="font-sans text-xl text-gray-warm-800 mb-8">Incluye</h3>
                <div className="space-y-4">
                  {[
                    'Desarrollo completo del sistema',
                    'Panel administrativo',
                    'Módulos de rutinas y dieta',
                    'Evaluación inicial',
                    'Sistema de usuarios por plan',
                    'Dominio x 3 años',
                    'Servidor x 1 año',
                  ].map((item, i) => (
                    <FadeIn key={i} delay={0.6 + i * 0.05}>
                      <div className="flex items-center gap-4">
                        <span className="w-1.5 h-1.5 bg-nude-300 rounded-full flex-shrink-0" />
                        <span className="text-body text-gray-warm-700">{item}</span>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Mantenimiento */}
          <FadeIn delay={0.7}>
            <div className="card-elevated mb-8">
              <h3 className="font-sans text-xl text-gray-warm-800 mb-6">Mantenimiento y soporte</h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-4">
                  <span className="w-1.5 h-1.5 bg-rose-dust-200 rounded-full flex-shrink-0" />
                  <span className="text-body text-gray-warm-700">Primer mes sin costo</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-1.5 h-1.5 bg-rose-dust-200 rounded-full flex-shrink-0" />
                  <span className="text-body text-gray-warm-700">
                    A partir del segundo mes: <span className="font-medium text-gray-warm-800">$3,000 MXN mensuales</span>
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-1.5 h-1.5 bg-rose-dust-200 rounded-full flex-shrink-0" />
                  <span className="text-body text-gray-warm-700">Incluye soporte, ajustes menores y acompañamiento</span>
                </div>
              </div>
              <div className="bg-ivory-50/50 rounded-xl p-5 border border-nude-100/30">
                <p className="text-caption text-gray-warm-500">
                  Se sugiere un periodo mínimo de 3 meses de mantenimiento.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Soporte por evento */}
          <FadeIn delay={0.75}>
            <div className="card-premium mb-8">
              <p className="text-body text-gray-warm-700 leading-relaxed">
                En caso de requerir soporte puntual sin mantenimiento activo:{ ' ' }
                <span className="font-sans text-xl text-gray-warm-800">$350 MXN por hora</span>
              </p>
            </div>
          </FadeIn>

          {/* Notas finales */}
          <FadeIn delay={0.8}>
            <div className="space-y-3">
              <div className="flex items-start gap-4 text-caption text-gray-warm-500">
                <span className="text-nude-300 mt-0.5">✦</span>
                <p>Cambios o nuevas secciones fuera del alcance inicial se cotizan por separado</p>
              </div>
              <div className="flex items-start gap-4 text-caption text-gray-warm-500">
                <span className="text-nude-300 mt-0.5">✦</span>
                <p>El mantenimiento es opcional después del periodo mínimo sugerido</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
