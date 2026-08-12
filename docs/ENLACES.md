# Guía: enlaces de proyectos (en vivo / código)

Cada proyecto tiene dos slots de enlace que se muestran en la **tarjeta** (chips) y en la
**página de detalle** (botones). Todo se controla desde `src/data/projects.ts` con dos campos:

| Campo | Tipo | Qué hace |
|---|---|---|
| `liveUrl` | `string?` | URL del sitio desplegado. Si existe → botón **"Ver en vivo"** + chip **"En vivo"**. |
| `githubUrl` | `string?` | URL del repo. |
| `repoPrivate` | `boolean?` | Si es `true`, el repo se trata como privado (no se linkea). |

## Qué se muestra según la combinación

**Código:**
- `githubUrl` + sin `repoPrivate` → botón **"Ver código"** (link real) + chip **"GitHub"**.
- `repoPrivate: true` (o repo 404) → chip **"Código privado"** con candado, **no clickeable** (nunca un 404).
- sin `githubUrl` y sin `repoPrivate` → no se muestra nada de código.

**En vivo:**
- con `liveUrl` → botón **"Ver en vivo"** (abre en pestaña nueva) + chip **"En vivo"**.
- sin `liveUrl` → botón muted **"Demo próximamente"** + chip **"Próximamente"** (placeholder, no clickeable).

> El slot "en vivo" **siempre** está presente, así vas sumando URLs a medida que desplegás.

## Cómo agregar / cambiar un enlace

En `src/data/projects.ts`, en el proyecto que corresponda:

```ts
// Marcar como desplegado
liveUrl: "https://mi-sitio.com",

// Hacer público el repo (quitar el candado): borrá la línea repoPrivate
// repoPrivate: true,   ← borrar o poner false

// Marcar repo como privado
repoPrivate: true,
```

Después: `npm run lint` y `npm run build` para validar (los textos están en
`src/i18n/dictionaries/{es,en}.ts`; no hace falta tocarlos para agregar URLs).

## Estado actual

*(Actualizado 2026-08-06. Verificado con `curl` — los repos privados dan 404 sin sesión.)*

- **En vivo** (los 7 verificados con HTTP 200 el 2026-08-07): `barberia` (vj-barber.com),
  `aula-virtual` (vj-barber.online), `circuitos-argentinos`
  (circuitos-argentinos.makkem.com), `makem` (turismo/constructora/abogados.makkem.com),
  `on-wheels` (GitHub Pages), `qretail` y `motobitacora` (Vercel).
- **Repo público**: `anistream-tv`, `on-wheels`, `taskflow`, `sistema-zapatillas`, `ytm-download`.
- **Repo privado** (chip candado, nunca enlace): `barberia`, `aula-virtual`,
  `circuitos-argentinos`, `modex-ecommerce`, `sistema-canchas`, `qretail`,
  `granja-de-videos`, `motobitacora`, `upward`.
- **Sin repo ni demo pública**: `makem` (solo `liveUrl`).

`modex-ecommerce` es un repositorio de equipo ajeno (`Codester6000/page`), no de Pa7r1: por eso
va sin `githubUrl` y con `repoPrivate: true`.

Si un repo figura como privado pero en realidad la URL estaba mal, corregí `githubUrl` y quitá
`repoPrivate`. Antes de dar por bueno un `githubUrl` nuevo, comprobalo:

```bash
curl -sL -o /dev/null -w "%{http_code}\n" https://github.com/Pa7r1/<repo>
```
