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
 *   ej:  node scripts/optimize-captures.mjs ~/Descargas/foo.png venta-rapida/cuenta mobile
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
const REPO_ROOT = path.resolve(__dirname, "..");
const OUT_ROOT = path.join(REPO_ROOT, "public/captures");
const SOURCE_ROOTS = { external: SRC_ROOT, repo: REPO_ROOT };

const kb = (bytes) => `${(bytes / 1024).toFixed(0)} KB`;

/**
 * Convierte un PNG a WebP. Las operaciones opcionales son declarativas para
 * que cada encuadre se pueda regenerar sin volver a editar una imagen a mano.
 */
async function convert(srcAbs, destAbs, kind, options = {}) {
  await mkdir(path.dirname(destAbs), { recursive: true });
  const maxWidth = options.width ?? WIDTHS[kind] ?? WIDTHS.desktop;
  let image = sharp(srcAbs);

  if (options.crop) {
    const meta = await image.metadata();
    const left = options.crop.left ?? 0;
    const top = options.crop.top ?? 0;
    const right = options.crop.right ?? 0;
    const bottom = options.crop.bottom ?? 0;
    image = image.extract({
      left,
      top,
      width: meta.width - left - right,
      height: meta.height - top - bottom,
    });
  }

  if (options.trim) {
    const { threshold = 10, padding = 0, background = "#000000" } = options.trim;
    image = image.trim({ threshold });
    if (padding > 0) {
      image = image.extend({
        top: padding,
        right: padding,
        bottom: padding,
        left: padding,
        background,
      });
    }
  }

  if (options.frame) {
    const { data, info } = await image.png().toBuffer({ resolveWithObject: true });
    const [ratioWidth, ratioHeight] = options.frame.ratio;
    const ratio = ratioWidth / ratioHeight;
    const fit = options.frame.fit ?? "cover";
    // Cap the rendered source at 1:1 pixels. A contain frame may be wider
    // than a portrait source, but the source itself is still scaled down.
    const noUpscaleBound =
      fit === "contain"
        ? Math.max(info.width, info.height * ratio)
        : Math.min(info.width, info.height * ratio);
    const width = Math.max(1, Math.floor(Math.min(maxWidth, noUpscaleBound)));
    const height = Math.max(1, Math.round(width / ratio));

    image = sharp(data).resize({
      width,
      height,
      fit,
      position: options.frame.position ?? "center",
      background: options.frame.background ?? "#000000",
      withoutEnlargement: true,
    });
  } else {
    image = image.resize({ width: maxWidth, withoutEnlargement: true });
  }

  const output = await image.webp({ quality: QUALITY }).toFile(destAbs);
  const [inSize, outSize] = await Promise.all([stat(srcAbs), stat(destAbs)]);
  return [inSize.size, outSize.size, output.width, output.height];
}

/** Modo imagen suelta: node optimize-captures.mjs <png> <slug/nombre> <kind> */
async function runSingle(srcArg, destArg, kindArg = "desktop") {
  const srcAbs = path.resolve(srcArg);
  if (!existsSync(srcAbs)) {
    console.error(`✗ No existe el origen: ${srcAbs}`);
    process.exit(1);
  }
  const destAbs = path.join(OUT_ROOT, `${destArg}.webp`);
  const [i, o, w, h] = await convert(srcAbs, destAbs, kindArg);
  console.log(`  ✓ ${destArg}.webp  ${kb(i)} → ${kb(o)}  (${w}×${h})`);
  console.log(`\nReferencialo en src/data/projects.ts con asset("captures/${destArg}.webp")`);
}

/** Modo set completo: recorre SELECTION de captures.config.mjs */
async function runAll() {
  let count = 0;
  let totalIn = 0;
  let totalOut = 0;

  for (const { slug, items } of SELECTION) {
    for (const item of items) {
      const { from, to, kind, source = "external" } = item;
      const sourceRoot = SOURCE_ROOTS[source];
      if (!sourceRoot) {
        throw new Error(`Origen desconocido "${source}" en ${slug}/${to}`);
      }
      const srcAbs = path.resolve(sourceRoot, from);
      if (!existsSync(srcAbs)) {
        console.warn(`  ⚠ falta origen [${source}]: ${from}`);
        continue;
      }
      const destAbs = path.join(OUT_ROOT, slug, `${to}.webp`);
      const [i, o, w, h] = await convert(srcAbs, destAbs, kind, item);
      totalIn += i;
      totalOut += o;
      count++;
      console.log(`  ✓ ${slug}/${to}.webp  ${kb(i)} → ${kb(o)}  (${w}×${h})`);
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
