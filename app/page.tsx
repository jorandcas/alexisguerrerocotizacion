'use client'

import { Navigation } from '@/components/Navigation'
import {
  Section01_Portada,
  Section02_Objetivo,
  Section03_Usuarios,
  Section04_Planes,
  Section05_Flujo,
  Section06_Evaluacion,
  Section07_Rutinas,
  Section08_Dietas,
  Section09_Productos,
  Section10_Nutricion,
  Section11_Inicio,
  Section12_Calendario,
  Section13_Pagos,
  Section14_Diseno,
  Section15_Validacion,
  Section16_Costo,
  Section17_Cierre,
} from '@/components/sections'

export default function Home() {
  return (
    <main className="relative">
      <Navigation />

      <Section01_Portada />
      <Section02_Objetivo />
      <Section03_Usuarios />
      <Section04_Planes />
      <Section05_Flujo />
      <Section06_Evaluacion />
      <Section07_Rutinas />
      <Section08_Dietas />
      <Section09_Productos />
      <Section10_Nutricion />
      <Section11_Inicio />
      <Section12_Calendario />
      <Section13_Pagos />
      <Section14_Diseno />
      <Section15_Validacion />
      <Section16_Costo />
      <Section17_Cierre />
    </main>
  )
}
