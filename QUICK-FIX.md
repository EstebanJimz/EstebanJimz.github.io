# 🚨 SOLUCIÓN RÁPIDA - Error de Jekyll en GitHub Pages

## El Problema

GitHub Pages está usando **Jekyll** (el workflow viejo) en lugar de **GitHub Actions** (nuestro workflow nuevo de Astro).

## ✅ SOLUCIÓN (2 minutos)

### Paso 1: Ve a la configuración de tu repositorio

1. Abre tu repositorio en GitHub: `https://github.com/TU-USUARIO/NOMBRE-REPO`
2. Click en **Settings** (⚙️ arriba a la derecha)
3. En el menú lateral izquierdo, scroll down y click en **Pages**

### Paso 2: Cambia el "Source"

En la sección **"Build and deployment"**:

**Donde dice "Source:", DEBES cambiar de:**
```
❌ Deploy from a branch
```

**A:**
```
✅ GitHub Actions
```

**Instrucciones visuales:**
1. Busca el dropdown que dice **"Deploy from a branch"**
2. Haz click en él
3. Selecciona **"GitHub Actions"**
4. Se guardará automáticamente

### Paso 3: Verifica el deployment

1. Ve a la pestaña **Actions** en tu repo
2. Deberías ver el workflow "Deploy Astro to GitHub Pages" ejecutándose
3. Espera 1-2 minutos
4. ¡Tu sitio estará listo!

---

## 🎯 Diagrama Visual

```
GitHub Repo
    ↓
Settings
    ↓
Pages (menú lateral)
    ↓
Build and deployment
    ↓
Source: [Deploy from a branch ▼]  ← Click aquí
    ↓
    ✅ Seleccionar: GitHub Actions
```

---

## ⚠️ Si no ves la opción "GitHub Actions"

Puede que necesites:

1. **Dar permisos al workflow:**
   - Settings > Actions > General
   - Scroll a "Workflow permissions"
   - Selecciona: **"Read and write permissions"**
   - ✅ Check: "Allow GitHub Actions to create and approve pull requests"
   - Click **Save**

2. **Luego vuelve a Pages y selecciona "GitHub Actions"**

---

## 🔍 Verificar que funcionó

Cuando esté correcto, en la pestaña **Actions** verás:

```
✅ Deploy Astro to GitHub Pages
   ├── build (compilando Astro)
   └── deploy (desplegando a Pages)
```

**NO deberías ver:**
```
❌ pages build and deployment
   └── (Jekyll workflow)
```

---

## 🆘 Alternativa INSTANTÁNEA - Netlify

Si GitHub Pages te da problemas, usa Netlify (más simple):

```bash
# 1. Build local
npm run build

# 2. Ir a https://app.netlify.com/drop

# 3. Arrastrar carpeta dist/

# 4. ¡Listo! Te da URL instantánea
```

---

## 📝 Checklist

- [ ] Settings > Pages abierto
- [ ] Source cambiado a "GitHub Actions"
- [ ] Pestaña Actions muestra workflow "Deploy Astro to GitHub Pages"
- [ ] Workflow completado exitosamente (✅ verde)
- [ ] Sitio accesible en `https://TU-USUARIO.github.io/NOMBRE-REPO/`

---

## 💡 Nota

El archivo `.nojekyll` que creé SÍ funcionará, pero **solo si GitHub Pages está configurado para usar GitHub Actions**. Por eso es crítico cambiar esa configuración en Settings > Pages.
