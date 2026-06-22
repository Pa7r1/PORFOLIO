/**
 * optimize-captures.mjs — utilidad one-time (no entra al bundle).
 *
 * Convierte capturas PNG a WebP optimizado y las escribe en
 * public/captures/<slug>/<nombre>.webp.
 *
 * ── Modo set completo (lee scripts/captures.config.mjs) ──
 *   npm run optimize:captures
 *
 * ── Modo imagen suelta (sin tocar la config) ──
 *   node scripts/optimize-captures.mjs <pngAbsoluto> <slug>/<nombre> <kind>
 *   ej:  node scripts/optimize-captures.mjs ~/Descargas/foo.png qretail/cuenta mobile
 *        (kind = card | desktop | mobile ; default: desktop)
 *
 * Requiere `sharp` (devDependency). Los .webp resultantes se commitean;
 * la carpeta de origen puede borrarse después. Ver docs/CAPTURAS.md.
 */
import sharp from "sharp";
import { mkdir, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { SRC_ROOT, WIDTHS, QUALITY, SELECTION } from "./captures.config.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_ROOT = path.resolve(__dirname, "../public/captures");

const kb = (bytes) => `${(bytes / 1024).toFixed(0)} KB`;

/** Convierte un PNG a WebP. Devuelve [inBytes, outBytes]. */
async function convert(srcAbs, destAbs, kind) {
  await mkdir(path.dirname(destAbs), { recursive: true });
  const width = WIDTHS[kind] ?? WIDTHS.desktop;
  await sharp(srcAbs)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toFile(destAbs);
  const [inSize, outSize] = await Promise.all([stat(srcAbs), stat(destAbs)]);
  return [inSize.size, outSize.size, width];
}

/** Modo imagen suelta: node optimize-captures.mjs <png> <slug/nombre> <kind> */
async function runSingle(srcArg, destArg, kindArg = "desktop") {
  const srcAbs = path.resolve(srcArg);
  if (!existsSync(srcAbs)) {
    console.error(`✗ No existe el origen: ${srcAbs}`);
    process.exit(1);
  }
  const destAbs = path.join(OUT_ROOT, `${destArg}.webp`);
  const [i, o, w] = await convert(srcAbs, destAbs, kindArg);
  console.log(`  ✓ ${destArg}.webp  ${kb(i)} → ${kb(o)}  (w${w})`);
  console.log(`\nReferencialo en src/data/projects.ts con asset("captures/${destArg}.webp")`);
}

/** Modo set completo: recorre SELECTION de captures.config.mjs */
async function runAll() {
  if (!existsSync(SRC_ROOT)) {
    console.error(`✗ No existe SRC_ROOT: ${SRC_ROOT} (revisá scripts/captures.config.mjs)`);
    process.exit(1);
  }

  let count = 0;
  let totalIn = 0;
  let totalOut = 0;

  for (const { slug, items } of SELECTION) {
    for (const { from, to, kind } of items) {
      const srcAbs = path.join(SRC_ROOT, from);
      if (!existsSync(srcAbs)) {
        console.warn(`  ⚠ falta origen: ${from}`);
        continue;
      }
      const destAbs = path.join(OUT_ROOT, slug, `${to}.webp`);
      const [i, o, w] = await convert(srcAbs, destAbs, kind);
      totalIn += i;
      totalOut += o;
      count++;
      console.log(`  ✓ ${slug}/${to}.webp  ${kb(i)} → ${kb(o)}  (w${w})`);
    }
  }

  console.log(
    `\n${count} capturas · ${kb(totalIn)} → ${kb(totalOut)} ` +
      `(${(100 - (totalOut / totalIn) * 100).toFixed(0)}% más liviano)`,
  );
}

const [, , ...args] = process.argv;
const task = args.length >= 2 ? runSingle(args[0], args[1], args[2]) : runAll();
task.catch((err) => {
  console.error(err);
  process.exit(1);
});
