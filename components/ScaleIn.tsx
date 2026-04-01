'use client'

import { motion } from 'framer-motion'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { ReactNode } from 'react'

interface ScaleInProps {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
  threshold?: number
}

export function ScaleIn({
  children,
  delay = 0,
  duration = 0.6,
  className = '',
  threshold = 0.1,
}: ScaleInProps) {
  const { ref, isVisible } = useIntersectionObserver({ threshold })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      variants={{
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1 },
      }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
