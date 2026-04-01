'use client'

import { useState, useEffect } from 'react'

interface ScrollProgress {
  activeSection: number
  progress: number
}

export function useScrollProgress(sectionCount: number): ScrollProgress {
  const [activeSection, setActiveSection] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight

      // Calculate which section is most visible
      const currentSection = Math.round(scrollPosition / windowHeight)
      setActiveSection(Math.min(currentSection, sectionCount - 1))

      // Calculate progress within current section (0-1)
      const sectionProgress = (scrollPosition % windowHeight) / windowHeight
      setProgress(sectionProgress)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial call

    return () => window.removeEventListener('scroll', handleScroll)
  }, [sectionCount])

  return { activeSection, progress }
}
