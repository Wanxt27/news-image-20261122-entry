import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

const botDir = resolve(process.env.MAKEFUN_BOT_DIR ?? ".");
const outputDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? "/output");

const sourcePath = join(botDir, "entry.png");
const outputPath = join(outputDir, "entry.png");

if (!existsSync(sourcePath)) {
  throw new Error(`source image not found: ${sourcePath}`);
}

const bytes = readFileSync(sourcePath);
if (bytes.length === 0) {
  throw new Error(`source image is empty: ${sourcePath}`);
}

// The bundled artwork is a PNG: reject anything that is not one, so a
// truncated or wrong file can never be copied out silently.
const PNG_SIGNATURE = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (bytes.length < PNG_SIGNATURE.length || !bytes.subarray(0, 8).equals(PNG_SIGNATURE)) {
  throw new Error(`source image is not a PNG file: ${sourcePath}`);
}

mkdirSync(outputDir, { recursive: true });

writeFileSync(outputPath, bytes);

const written = readFileSync(outputPath);
if (written.length === 0) {
  throw new Error(`written output is empty: ${outputPath}`);
}
if (written.length !== bytes.length) {
  throw new Error(
    `output length mismatch: wrote ${written.length} bytes, expected ${bytes.length} bytes`,
  );
}
if (!written.equals(bytes)) {
  throw new Error(
    `output bytes differ from source (${sourcePath} -> ${outputPath}): ` +
      `source ${bytes.length} bytes, output ${written.length} bytes`,
  );
}

console.log(`Wrote ${outputPath} (${bytes.length} bytes)`);
