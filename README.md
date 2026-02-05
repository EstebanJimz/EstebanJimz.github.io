# Web Majo 2.0 - Astro Edition 🕷️💖

> Una historia de amor contada al estilo cómic, con carreras, desafíos y mucho cariño

## 🚀 Características

- **Framework Moderno**: Construido con Astro 5.x para máximo rendimiento
- **Animación Spider-Man**: El hombre araña balanceándose across the screen 🕷️
- **4 Escenas Narrativas**: Bowling, Arcade, Juguetón, y Postres
- **Mini-juego de Carreras**: Juego canvas con controles WASD/flechas
- **Desafío CTF**: Challenge de encriptación con confetti reward
- **Diseño Comic Book**: Tema estilo cómic con efectos glitch y animaciones
- **TypeScript**: Type-safe code para mejor mantenibilidad
- **Responsive**: Optimizado para móvil, tablet y desktop
- **Performance**: Build optimizado < 500KB

## 📋 Requisitos

- Node.js 18+ (recomendado v20+)
- npm o pnpm

## 🛠️ Instalación

```bash
# Instalar dependencias
npm install

# O usar pnpm (más rápido)
pnpm install
```

## 💻 Comandos

```bash
# Desarrollo (http://localhost:4321)
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## 🌐 Deployment

**Ver instrucciones completas:** [DEPLOY.md](./DEPLOY.md)

### Quick Start

**Opción 1 - GitHub Pages:**
1. Sube el código a GitHub
2. Ve a Settings > Pages
3. Source: GitHub Actions
4. ¡Listo! Se despliega automáticamente

**Opción 2 - Netlify (más rápido):**
1. `npm run build`
2. Arrastra `dist/` a [netlify.com/drop](https://app.netlify.com/drop)
3. ¡Listo en 30 segundos!

> ⚠️ **Importante:** Si usas GitHub Pages, actualiza `astro.config.mjs` con el nombre de tu repositorio.

## 📁 Estructura del Proyecto

```
web-majo-astro/
├── src/
│   ├── components/
│   │   ├── sections/          # Secciones de la página
│   │   │   ├── BannerSection.astro
│   │   │   ├── BowlingScene.astro
│   │   │   ├── ArcadeScene.astro
│   │   │   ├── GiftScene.astro
│   │   │   ├── DessertScene.astro
│   │   │   └── FinalSection.astro
│   │   ├── SpiderManAnimation.astro  # Animación del hombre araña
│   │   ├── CTFChallenge.astro        # Desafío de encriptación
│   │   └── RaceGame.astro            # Minijuego de carreras
│   ├── layouts/
│   │   └── MainLayout.astro          # Layout principal
│   ├── pages/
│   │   └── index.astro               # Página principal
│   └── styles/
│       └── global.css                # Estilos globales + design system
├── public/
│   ├── images/                       # Imágenes del proyecto
│   └── fotos/                        # Fotos adicionales
├── astro.config.mjs                  # Configuración de Astro
├── tsconfig.json                     # Configuración de TypeScript
└── package.json
```

## 🎨 Sistema de Diseño

El proyecto usa un sistema de diseño basado en CSS Custom Properties:

```css
:root {
  /* Colors */
  --color-pink: #FF1493;
  --color-cyan: #00FFFF;
  --color-yellow: #FFD700;
  
  /* Typography */
  --font-display: 'Syncopate';
  --font-ui: 'Michroma';
  --font-body: 'Roboto Mono';
  
  /* Spacing */
  --space-sm: 1rem;
  --space-md: 1.5rem;
  --space-lg: 2rem;
}
```

## 🎮 Features Interactivas

### Spider-Man Animation
- Se activa al cargar la página
- Se vuelve a activar al hacer scroll
- Animación suave de 8 segundos

### CTF Challenge
- Respuesta correcta: "jugueton"
- Normaliza acentos automáticamente
- Confetti effect al ganar
- Audio feedback

### Racing Game
- Meta: 200 puntos
- Controles: WASD/Flechas (PC) o Touch (móvil)
- Dificultad progresiva
- Audio engine sounds

## 🚀 Mejoras vs Versión Original

| Feature | Original | Astro 2.0 |
|---------|----------|-----------|
| **Framework** | HTML/CSS/JS vanilla | Astro + TypeScript |
| **Componentes** | Monolítico (1 archivo) | Modular (12+ componentes) |
| **Performance** | ~1.5MB sin optimizar | <500KB optimizado |
| **Animación Spider-Man** | ❌ No | ✅ Sí (SVG animado) |
| **Type Safety** | ❌ No | ✅ TypeScript |
| **Build Optimization** | ❌ Manual | ✅ Automático (Astro) |
| **SEO** | Básico | Optimizado (meta tags, OG) |
| **Responsive** | Sí | Mejorado |

## 📱 Navegadores Soportados

- Chrome/Edge (últimas 2 versiones)
- Firefox (últimas 2 versiones)
- Safari (últimas 2 versiones)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Roadmap

- [x] Migración completa a Astro
- [x] Animación Spider-Man balanceándose
- [x] Componentes TypeScript
- [x] Minijuego de carreras
- [x] Desafío CTF
- [ ] Dark mode (futuro)
- [ ] Más Easter eggs (futuro)
- [ ] Galería de fotos interactiva (futuro)

## 💖 Créditos

Creado con mucho cariño por **Esteban Jiménez** (El Player 2 Eterno)  
Para **Majito** - La Player 1 Invencible ❤️🕷️

## 📝 Notas de Desarrollo

### Solución de Problemas

**Si no tienes Node.js instalado:**
1. Descarga desde [nodejs.org](https://nodejs.org/)
2. Instala la versión LTS
3. Verifica con: `node --version`

**Error al instalar dependencias:**
```bash
# Limpia cache y reinstala
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

**El sitio no carga en desarrollo:**
```bash
# Asegúrate de tener el puerto 4321 libre
# O especifica otro puerto:
npm run dev -- --port 3000
```

## 🔗 Links Útiles

- [Documentación Astro](https://docs.astro.build)
- [TypeScript Docs](https://www.typescriptlang.org/)
- [MDN Web Docs](https://developer.mozilla.org/)

---

Made with ❤️, 🏎️, and ☕ in 2026
