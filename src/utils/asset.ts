/**
 * Resuelve rutas de archivos en /public usando import.meta.env.BASE_URL.
 * Funciona tanto en dev (localhost:3000) como en producción (/portfolio/).
 *
 * Uso:  asset("foto-curriculum.jpeg")
 *   → dev:  /foto-curriculum.jpeg
 *   → prod: /portfolio/foto-curriculum.jpeg
 */
export function asset(filename: string): string {
  const base = import.meta.env.BASE_URL; // termina siempre en "/"
  return `${base}${filename}`;
}
