'use client'

import { motion } from 'framer-motion'
import { useScrollProgress } from '@/hooks/useScrollProgress'

const sections = [
  { id: 1, label: 'Portada' },
  { id: 2, label: 'Objetivo' },
  { id: 3, label: 'Usuarios' },
  { id: 4, label: 'Planes' },
  { id: 5, label: 'Flujo' },
  { id: 6, label: 'Evaluación' },
  { id: 7, label: 'Rutinas' },
  { id: 8, label: 'Dietas' },
  { id: 9, label: 'Productos' },
  { id: 10, label: 'Nutrición' },
  { id: 11, label: 'Inicio' },
  { id: 12, label: 'Calendario' },
  { id: 13, label: 'Pagos' },
  { id: 14, label: 'Diseño' },
  { id: 15, label: 'Validación' },
  { id: 16, label: 'Costo' },
  { id: 17, label: 'Cierre' },
]

export function Navigation() {
  const { activeSection } = useScrollProgress(sections.length)

  const scrollToSection = (index: number) => {
    const section = document.getElementById(`section-${index + 1}`)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1, ease: [0.25, 0.4, 0.25, 1] }}
        className="flex items-center gap-2 md:gap-3 px-6 py-4 bg-white/80 backdrop-blur-lg rounded-full border border-nude-100/80 shadow-xl shadow-ivory-200/50 max-w-[95vw] overflow-x-auto hide-scrollbar"
      >
        {sections.map((section, index) => (
          <motion.button
            key={section.id}
            onClick={() => scrollToSection(index)}
            className="relative group flex-shrink-0"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <span
              className={`block w-2 h-2 rounded-full transition-all duration-500 ${
                index === activeSection
                  ? 'bg-rose-dust-200 scale-150'
                  : 'bg-nude-200 group-hover:bg-nude-300'
              }`}
            />
            {index === activeSection && (
              <motion.span
                layoutId="activeSection"
                className="absolute inset-0 bg-rose-dust-200/20 rounded-full"
                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap px-3 py-1 bg-gray-warm-800 text-white text-xs rounded-full font-body tracking-wide">
              {section.label}
            </span>
          </motion.button>
        ))}
      </motion.div>
    </nav>
  )
}
