'use client'

import { FadeIn } from '../FadeIn'
import { ScaleIn } from '../ScaleIn'

export function Section03_Usuarios() {
  const users = [
    {
      type: 'Administradora',
      role: 'Coach',
      description: 'Gestión completa de plataforma, clientas y contenido',
      icon: '◆',
    },
    {
      type: 'Usuaria',
      role: 'Clienta',
      description: 'Acceso personalizado según plan contratado',
      icon: '◇',
    },
  ]

  return (
    <section id="section-3" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-cream-50 to-ivory-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="text-center mb-16">
              <p className="text-caption tracking-[0.2em] uppercase text-rose-dust-200 mb-4">
                02
              </p>
              <h2 className="text-title font-sans">
                Tipos de usuario
              </h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
            {users.map((user, index) => (
              <ScaleIn key={user.type} delay={0.4 + index * 0.2}>
                <div className="card-elevated text-center h-full">
                  <div className="mb-8">
                    <span className="text-6xl text-nude-300">{user.icon}</span>
                  </div>
                  <h3 className="text-3xl font-sans text-gray-warm-800 mb-3">
                    {user.type}
                  </h3>
                  <p className="text-caption tracking-wide text-rose-dust-200 uppercase mb-6">
                    {user.role}
                  </p>
                  <div className="w-16 h-px bg-nude-200 mx-auto mb-6" />
                  <p className="text-body text-gray-warm-600">
                    {user.description}
                  </p>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
