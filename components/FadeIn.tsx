'use client'

import { motion } from 'framer-motion'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { ReactNode } from 'react'

interface FadeInProps {
  children: ReactNode
  delay?: number
  duration?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  className?: string
  threshold?: number
}

const variants = {
  up: { hidden: { opacity: 0, y: 60 }, visible: { opacity: 1, y: 0 } },
  down: { hidden: { opacity: 0, y: -60 }, visible: { opacity: 1, y: 0 } },
  left: { hidden: { opacity: 0, x: 60 }, visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: -60 }, visible: { opacity: 1, x: 0 } },
  none: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
}

export function FadeIn({
  children,
  delay = 0,
  duration = 0.8,
  direction = 'up',
  className = '',
  threshold = 0.1,
}: FadeInProps) {
  const { ref, isVisible } = useIntersectionObserver({ threshold })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      variants={variants[direction]}
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
