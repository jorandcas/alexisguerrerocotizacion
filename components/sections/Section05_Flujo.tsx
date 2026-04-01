'use client'

import { FadeIn } from '../FadeIn'

const steps = [
  { number: '01', title: 'Crear usuaria', description: 'Registrar nueva clienta en el sistema' },
  { number: '02', title: 'Seleccionar plan', description: 'Elegir tipo de servicio contratado' },
  { number: '03', title: 'Evaluación inicial', description: 'Completar formulario de ingreso' },
  { number: '04', title: 'Guardar ficha', description: 'Almacenar perfil de clienta' },
  { number: '05', title: 'Asignar rutina', description: 'Asignar programa de entrenamiento' },
  { number: '06', title: 'Asignar dieta', description: 'Solo si aplica al plan' },
  { number: '07', title: 'Activar calendario', description: 'Configurar fechas y recordatorios' },
  { number: '08', title: 'Seguimiento', description: 'Monitoreo continuo del progreso' },
]

export function Section05_Flujo() {
  return (
    <section id="section-5" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-ivory-50 via-white to-cream-50">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="text-center mb-20">
              <p className="text-caption tracking-[0.2em] uppercase text-rose-dust-200 mb-4">
                04
              </p>
              <h2 className="text-title font-sans">
                Flujo principal del sistema
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <FadeIn key={step.number} delay={0.3 + index * 0.1}>
                <div className="relative group">
                  {/* Connection line */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 right-0 w-full h-px bg-gradient-to-r from-nude-200 to-transparent transform translate-x-4" />
                  )}

                  <div className="card-premium text-center relative z-10 h-full">
                    <span className="text-5xl font-sans text-nude-200 block mb-4">
                      {step.number}
                    </span>
                    <h3 className="text-lg font-medium text-gray-warm-800 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-caption text-gray-warm-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Mobile connector */}
          <div className="lg:hidden flex justify-center mt-8">
            <div className="w-px h-12 bg-gradient-to-b from-nude-200 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
