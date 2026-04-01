'use client'

import { FadeIn } from '../FadeIn'

const formSections = [
  { title: 'Datos personales', icon: '01' },
  { title: 'Información de salud', icon: '02' },
  { title: 'Hábitos', icon: '03' },
  { title: 'Registro alimenticio', icon: '04' },
]

export function Section06_Evaluacion() {
  return (
    <section id="section-6" className="min-h-screen flex items-center justify-center relative bg-ivory-50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn delay={0.2}>
              <p className="text-caption tracking-[0.2em] uppercase text-rose-dust-200 mb-4">
                05
              </p>
              <h2 className="text-title font-sans leading-tight mb-8">
                Evaluación inicial
              </h2>

              <div className="space-y-6">
                {formSections.map((section, index) => (
                  <FadeIn key={section.icon} delay={0.4 + index * 0.1}>
                    <div className="flex items-center gap-6 group">
                      <span className="text-2xl font-sans text-nude-300 w-12">
                        {section.icon}
                      </span>
                      <div className="flex-1 h-px bg-nude-100 group-hover:bg-nude-200 transition-colors duration-500" />
                      <span className="text-body text-gray-warm-700">{section.title}</span>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.6} direction="right">
              <div className="card-elevated relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-champagne-100/30 to-transparent rounded-bl-full" />

                <div className="relative z-10">
                  <div className="w-16 h-px bg-gradient-to-r from-nude-300 to-transparent mb-8" />

                  <p className="text-body leading-relaxed text-gray-warm-700 mb-6">
                    Formulario estructurado en pasos que recopila toda la información necesaria para crear un perfil completo de la clienta.
                  </p>

                  <div className="bg-ivory-100/50 rounded-2xl p-6 border border-nude-100/50">
                    <p className="text-caption text-gray-warm-500 leading-relaxed">
                      Este registro se guarda como historial dentro del perfil de la clienta.
                    </p>
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
