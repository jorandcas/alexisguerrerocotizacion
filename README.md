# Alexis Guerrero - Propuesta Funcional de Plataforma

Una experiencia visual premium para presentar la estructura funcional de una plataforma digital de gestión de clientas para coaches.

## Características

- **17 secciones premium** con animaciones suaves y elegantes
- **Navegación inferior fija** con 17 puntos interactivos
- **Diseño responsive** optimizado para desktop y mobile
- **Animaciones fluidas** usando Framer Motion
- **Estética editorial de lujo** con colores refinados y tipografías premium
- **100% estático** - sin backend, listo para desplegar

## Stack Tecnológico

- **Next.js 15.1.4** - Framework React
- **React 18** - Biblioteca UI
- **Tailwind CSS** - Estilos utility-first
- **Framer Motion** - Animaciones suaves
- **TypeScript** - Tipado estático

## Instalación

```bash
# Instalar dependencias
npm install
```

## Desarrollo

```bash
# Ejecutar servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

## Build de Producción

```bash
# Crear build optimizado
npm run build

# Iniciar servidor de producción
npm start
```

## Estructura del Proyecto

```
├── app/
│   ├── globals.css          # Estilos globales y clases personalizadas
│   ├── layout.tsx           # Layout principal con tipografías
│   └── page.tsx             # Página principal que integra todas las secciones
├── components/
│   ├── Navigation.tsx       # Navegación inferior con 17 puntos
│   ├── FadeIn.tsx           # Componente de animación de entrada
│   ├── ScaleIn.tsx          # Componente de animación de escala
│   └── sections/            # Las 17 secciones del proyecto
│       ├── Section01_Portada.tsx
│       ├── Section02_Objetivo.tsx
│       ├── Section03_Usuarios.tsx
│       ├── Section04_Planes.tsx
│       ├── Section05_Flujo.tsx
│       ├── Section06_Evaluacion.tsx
│       ├── Section07_Rutinas.tsx
│       ├── Section08_Dietas.tsx
│       ├── Section09_Productos.tsx
│       ├── Section10_Nutricion.tsx
│       ├── Section11_Inicio.tsx
│       ├── Section12_Calendario.tsx
│       ├── Section13_Pagos.tsx
│       ├── Section14_Diseno.tsx
│       ├── Section15_Validacion.tsx
│       ├── Section16_Costo.tsx
│       ├── Section17_Cierre.tsx
│       └── index.ts
├── hooks/
│   ├── useIntersectionObserver.ts  # Hook para detectar cuando un elemento entra en viewport
│   └── useScrollProgress.ts        # Hook para detectar sección activa durante scroll
└── tailwind.config.ts       # Configuración de colores y tipografías personalizadas
```

## Paleta de Colores

La aplicación utiliza una paleta premium y refinada:

- **Ivory** - Blanco roto elegante
- **Cream** - Tonos crema suaves
- **Sand** - Arena cálida
- **Nude** - Nude elegante
- **Champagne** - Acentos dorados tenues
- **Rose Dust** - Rosa empolvado muy sutil
- **Gray Warm** - Gris cálido para texto

## Tipografías

- **Playfair Display** - Para títulos (font serif elegante)
- **Inter** - Para cuerpo de texto (font sans moderna)

## Personalización

### Editar el costo del sistema

En `components/sections/Section16_Costo.tsx`, busca la línea:

```tsx
<p className="text-5xl md:text-6xl font-sans text-gray-warm-300">
  [Definir monto]
</p>
```

Reemplaza `[Definir monto]` con el monto real.

### Modificar colores

Edita `tailwind.config.ts` para ajustar la paleta de colores.

### Ajustar animaciones

Los componentes `FadeIn` y `ScaleIn` aceptan props para personalizar:

- `delay` - Retraso antes de la animación (segundos)
- `duration` - Duración de la animación (segundos)
- `direction` - Dirección de entrada (up, down, left, right, none)

## Deploy

Este proyecto es 100% estático y puede ser desplegado en:

- **Vercel** (recomendado para Next.js)
- **Netlify**
- **Cualquier hosting estático**

## Notas

- El scroll suave está habilitado por defecto
- La navegación inferior detecta automáticamente la sección visible
- Las animaciones solo se ejecutan una vez por sección para mejor performance
- El diseño es completamente responsive

---

**Creado con Next.js, React y Tailwind CSS**
