# Portfolio — Patricio Valentín Carpio

Portfolio personal construido con React + Vite + TypeScript + Tailwind CSS.

## 🚀 Cómo subir a GitHub Pages (paso a paso)

### 1. Crear el repo en GitHub

1. Andá a [github.com/new](https://github.com/new)
2. Nombre del repo: **`portfolio`** (o el que quieras)
3. Dejalo en **Public**
4. **No** agregues README ni .gitignore (ya los tenés)
5. Clic en **Create repository**

### 2. Ajustar el `base` en vite.config.ts

En `vite.config.ts`, la línea `base` debe coincidir con el nombre de tu repo:

```ts
// Si tu repo se llama "portfolio":
base: "/portfolio/",

// Si tu repo se llama "mi-portfolio":
base: "/mi-portfolio/",

// Si usás un repo que se llama "tu-usuario.github.io":
base: "/",
```

### 3. Subir el código

Desde la carpeta del proyecto, ejecutá:

```bash
git init
git add .
git commit -m "feat: portfolio inicial"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/NOMBRE-REPO.git
git push -u origin main
```

### 4. Activar GitHub Pages

1. En tu repo, andá a **Settings → Pages**
2. En **Source**, seleccioná **GitHub Actions**
3. ¡Listo! GitHub va a buildear y publicar automáticamente

### 5. Ver tu portfolio online

Después de ~2 minutos:  
`https://TU-USUARIO.github.io/NOMBRE-REPO/`

---

### 🔄 Actualizar el portfolio

Cada vez que hagas push a `main`, GitHub Actions lo rebuildeará automáticamente:

```bash
git add .
git commit -m "update: descripción del cambio"
git push
```

---

## 🛠️ Desarrollo local

```bash
npm install
npm run dev        # Corre en http://localhost:3000
npm run build      # Build de producción
npm run preview    # Preview del build
```

## 📁 Estructura del proyecto

```
src/
├── components/
│   ├── common/     # Header, Footer, SectionTitle, etc.
│   └── sections/   # Hero, About, Projects, Skills, Timeline, Contact
├── data/           # ← Editá estos archivos para actualizar el contenido
│   ├── personalInfo.ts
│   ├── projects.ts
│   ├── experiences.ts
│   ├── skills.ts
│   └── tools.ts
└── types/
```

> **Para actualizar el contenido**, solo editá los archivos en `src/data/`. No necesitás tocar los componentes.
