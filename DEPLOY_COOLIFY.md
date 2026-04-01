# Despliegue en Coolify

## Información del Proyecto

- **Subdominio:** alexisguerrero.andlify.com
- **Tipo:** Next.js Static Site
- **Framework:** Next.js 15.1.4

## Pasos para Desplegar en Coolify

### Opción 1: Desde Repositorio Git (Recomendado)

1. **Subir el código a GitHub/GitLab**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Presentación Alexis Guerrero"
   git remote add origin <tu-repositorio-url>
   git push -u origin main
   ```

2. **En Coolify:**
   - Ve a tu panel de Coolify
   - Clic en "New Resource" → "Application"
   - Conecta tu cuenta de GitHub/GitLab si no está conectada
   - Selecciona el repositorio
   - Configura:

   **Basic Configuration:**
   - **Name:** alexisguerrero-presentacion
   - **Branch:** main
   - **Build Pack:** Dockerfile (se genera automáticamente)
   - **Port:** 3000

   **Environment Variables:**
   ```
   NODE_ENV=production
   ```

   **Build Configuration:**
   - **Build Command:** `npm run build`
   - **Start Command:** `npm start`

   **Domain:**
   - **Domain:** alexisguerrero.andlify.com
   - **SSL:** Enable (automático en Coolify)

3. **Clic en "Deploy"**

### Opción 2: Desde Dockerfile Personalizado

Si prefieres tener control total con un Dockerfile personalizado, he creado uno optimizado:

**Dockerfile:**
```dockerfile
FROM node:20-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

**Nota:** Para usar este Dockerfile, necesitas agregar `output: 'standalone'` en `next.config.js`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
}

module.exports = nextConfig
```

### Configuración Recomendada para Coolify

**Para este proyecto estático, la configuración óptima es:**

1. **Resource Type:** Application
2. **Build Pack:** Dockerfile (auto-generated)
3. **Port:** 3000
4. **Environment Variables:**
   - `NODE_ENV=production`
5. **Domains:**
   - Primary: alexisguerrero.andlify.com
   - SSL: Auto-generate (Let's Encrypt)

## Verificar Despliegue

Una vez desplegado, verifica:
- https://alexisguerrero.andlify.com
- Todas las secciones cargan correctamente
- Las animaciones funcionan
- La navegación inferior funciona
- El sitio es responsive en móvil

## Troubleshooting

### Error: Port already in use
- Asegúrate de que el puerto configurado en Coolify coincida con el expuesto (3000)

### Build falla
- Verifica que `npm install` funcione correctamente
- Revisa los logs de build en Coolify

### El sitio no carga
- Verifica que el servicio esté "Running" en Coolify
- Revisa los logs del contenedor
- Verifica la configuración del dominio

## Actualizaciones

Para actualizar el sitio:
```bash
git add .
git commit -m "Descripción del cambio"
git push
```

Coolify detectará el cambio y hará redeploy automáticamente.

## Monitoreo

En Coolify puedes:
- Ver logs en tiempo real
- Monitorizar uso de recursos
- Configurar notificaciones
- Ver historial de despliegues
