# 🚀 Setup Final - Proyecto en flippermen.github.io

## ✅ Cambio importante realizado:

Actualicé `astro.config.mjs` para eliminar el `base: '/web-majo-astro'` porque como este es tu repositorio principal de GitHub Pages (`flippermen.github.io`), tu sitio estará en:

```
https://flippermen.github.io/
```

**NO en:**
```
https://flippermen.github.io/web-majo-astro/  ← Ya no
```

---

## 📝 Pasos para subir a GitHub:

### 1. Inicializar Git (si no lo has hecho)

```bash
cd C:\Users\Michael\Desktop\web-majo\flippermen.github.io
git init
git branch -M main
```

### 2. Agregar archivos

```bash
git add .
git commit -m "Initial commit - Web Majo Astro"
```

### 3. Conectar con GitHub

```bash
git remote add origin https://github.com/flippermen/flippermen.github.io.git
```

### 4. Push

```bash
git push -u origin main
```

Si te pide credenciales, usa un **Personal Access Token** en lugar de contraseña:
- Ve a: https://github.com/settings/tokens
- Generate new token (classic)
- Selecciona: `repo` (full control)
- Copia el token y úsalo como contraseña

---

## ⚙️ Configurar GitHub Pages

1. Ve a: https://github.com/flippermen/flippermen.github.io
2. Settings > Pages
3. **Source**: Selecciona "GitHub Actions" (NO "Deploy from a branch")
4. Espera 1-2 minutos

---

## 🎯 URL Final

Tu sitio estará en:
```
https://flippermen.github.io
```

Directamente en la raíz, sin subcarpetas.

---

## 🔍 Verificar Deployment

1. Ve a la pestaña **Actions**
2. Deberías ver: "Deploy Astro to GitHub Pages"
3. Pasos correctos:
   ```
   ✅ Checkout
   ✅ Setup Node.js
   ✅ Install dependencies
   ✅ Build Astro
   ✅ Deploy
   ```

---

## 🆘 Si ya existe el repo en GitHub

Si el repo `flippermen.github.io` YA existe en GitHub con contenido diferente:

### Opción A: Hacer backup y reemplazar

```bash
# 1. Clona el repo existente a otra carpeta
cd C:\Users\Michael\Desktop
git clone https://github.com/flippermen/flippermen.github.io.git backup-flippermen

# 2. Elimina contenido viejo (pero mantén .git)
cd flippermen.github.io
# Copia la carpeta .git del backup si no la tienes

# 3. Copia todo de tu proyecto Astro
# 4. Commit y push
git add .
git commit -m "Replace with Web Majo Astro"
git push
```

### Opción B: Forzar push (⚠️ DESTRUCTIVO)

```bash
git push -f origin main
```

Esto **BORRARÁ** todo el contenido anterior del repo.

---

## 🎨 Alternativa - Netlify (SIN GitHub necesario)

Si prefieres algo más simple:

```bash
cd C:\Users\Michael\Desktop\web-majo\flippermen.github.io
npm install
npm run build
```

Luego arrastra `dist/` a: https://app.netlify.com/drop

Tu sitio estará online en 10 segundos con una URL como:
```
https://web-majo.netlify.app
```

---

## ✨ Resumen

**Para GitHub Pages:**
1. ✅ `astro.config.mjs` corregido (sin base path)
2. ⏳ Git init + push
3. ⏳ Settings > Pages > GitHub Actions
4. ⏳ Esperar deployment

**Para Netlify:**
1. `npm run build`
2. Drag & drop `dist/`
3. ¡Listo!

Recomiendo **Netlify** si quieres algo rápido y sin configuraciones.
