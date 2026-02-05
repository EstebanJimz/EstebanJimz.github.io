# 🚀 Deployment Instructions - GitHub Pages

## Opción 1: Deploy Automático con GitHub Actions (Recomendado)

### Prerequisitos
- Tener cuenta de GitHub
- Proyecto subido a GitHub

### Pasos:

1. **Crear repositorio en GitHub**
   ```bash
   # En la carpeta del proyecto
   git init
   git add .
   git commit -m "Initial commit - Web Majo Astro"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/web-majo-astro.git
   git push -u origin main
   ```

2. **Configurar GitHub Pages**
   - Ve a Settings > Pages
   - En "Source", selecciona: **GitHub Actions**
   - ¡Eso es todo! El workflow `.github/workflows/deploy.yml` se ejecutará automáticamente

3. **Verificar deployment**
   - Ve a la pestaña "Actions" en tu repo
   - Verás el workflow "Deploy Astro to GitHub Pages" ejecutándose
   - Una vez completado, tu sitio estará en: `https://TU-USUARIO.github.io/web-majo-astro/`

### ⚠️ IMPORTANTE: Actualizar URLs

Si tu repo NO se llama exactamente "web-majo-astro", actualiza el `astro.config.mjs`:

```javascript
export default defineConfig({
  site: 'https://TU-USUARIO.github.io',
  base: '/NOMBRE-DE-TU-REPO',  // ← Cambiar esto
});
```

---

## Opción 2: Deploy Manual a Netlify (Más Simple)

1. **Build local**
   ```bash
   npm run build
   ```

2. **Ir a [Netlify](https://app.netlify.com/drop)**

3. **Drag & drop** la carpeta `dist/`

4. **¡Listo!** Netlify te dará una URL como `https://random-name.netlify.app`

---

## Opción 3: Deploy a Vercel

1. **Instalar Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel --prod
   ```

3. Sigue las instrucciones en terminal

---

## Troubleshooting

### Error: "Invalid YAML front matter"
✅ **SOLUCIONADO** - Agregué archivo `.nojekyll` en `public/`

Este error ocurría porque GitHub Pages intentaba procesar los archivos `.astro` con Jekyll. El archivo `.nojekyll` le dice que NO use Jekyll.

### Error: "404 Not Found" después de deploy
Verifica que el `base` en `astro.config.mjs` coincida con el nombre de tu repositorio:

```javascript
base: '/NOMBRE-EXACTO-DEL-REPO',
```

### Las imágenes no cargan
Si tienes imágenes, asegúrate de que estén en `public/` y las referencias sean relativas:

```html
<!-- ✅ Correcto -->
<img src="/images/gift.png" alt="..." />

<!-- ❌ Incorrecto -->
<img src="./images/gift.png" alt="..." />
```

### El sitio se ve sin estilos
Esto puede pasar si el `base` está mal configurado. Verifica en la consola del navegador si hay errores 404.

---

## Archivos Importantes Creados

✅ `.github/workflows/deploy.yml` - Workflow de GitHub Actions  
✅ `public/.nojekyll` - Desactiva Jekyll en GitHub Pages  
✅ `astro.config.mjs` actualizado con `site` y `base`

---

## URLs de Tu Sitio

Dependiendo del método de deploy:

- **GitHub Pages**: `https://TU-USUARIO.github.io/REPO-NAME/`
- **Netlify**: `https://random-name.netlify.app`
- **Vercel**: `https://web-majo-astro.vercel.app`

---

## Siguiente Paso

Si vas a usar GitHub Pages:
1. Actualiza el `astro.config.mjs` con tu nombre de usuario y repo
2. Sube el código a GitHub
3. Configura GitHub Pages en Settings
4. ¡Espera 1-2 minutos y visita tu URL!

Si prefieres algo más rápido, usa **Netlify Drop** (opción 2) - literalmente 30 segundos.
