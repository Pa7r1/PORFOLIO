import type { Project } from "@/types";

/** Estado del enlace al código del proyecto. */
export type CodeState = "public" | "private" | "none";

/**
 * Decide qué mostrar para el código:
 *  - "public"  → hay githubUrl y el repo es público → link real.
 *  - "private" → repo privado (o githubUrl marcado privado) → chip candado, nunca link muerto (404).
 *  - "none"    → sin referencia al código.
 */
export function codeState(p: Project): CodeState {
  if (p.githubUrl && !p.repoPrivate) return "public";
  if (p.repoPrivate || p.githubUrl) return "private";
  return "none";
}

/** ¿El proyecto está desplegado en la red? */
export function isLive(p: Project): boolean {
  return Boolean(p.liveUrl);
}
