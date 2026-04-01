'use client'

import { FadeIn } from '../FadeIn'

export function Section02_Objetivo() {
  return (
    <section id="section-2" className="min-h-screen flex items-center justify-center relative bg-ivory-50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <FadeIn className="lg:col-span-4" delay={0.2}>
              <p className="text-caption tracking-[0.2em] uppercase text-rose-dust-200 mb-4">
                01
              </p>
              <h2 className="text-title font-sans leading-tight">
                Objetivo<br />del sistema
              </h2>
            </FadeIn>

            <FadeIn className="lg:col-span-1" delay={0.3}>
              <div className="hidden lg:block w-px h-64 bg-gradient-to-b from-transparent via-nude-300 to-transparent" />
            </FadeIn>

            <FadeIn className="lg:col-span-7" delay={0.4} direction="right">
              <div className="card-elevated">
                <p className="text-body leading-relaxed text-gray-warm-700">
                  Crear una plataforma digital que permita al coach gestionar de forma profesional a sus clientas, ofreciendo{' '}
                  <span className="text-gray-warm-800 font-medium">rutinas</span>,{' '}
                  <span className="text-gray-warm-800 font-medium">dietas</span>,{' '}
                  <span className="text-gray-warm-800 font-medium">contenido nutricional</span> y{' '}
                  <span className="text-gray-warm-800 font-medium">seguimiento personalizado</span> en un solo lugar.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
