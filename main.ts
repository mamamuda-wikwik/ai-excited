import * as fs from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "node:url";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const sourceImage = path.join(scriptDir, "sky-koi.png");
const outputImage = path.join(outputDir, "entry.png");

fs.mkdirSync(outputDir, { recursive: true });
const bytes = fs.readFileSync(sourceImage);
fs.writeFileSync(outputImage, bytes);
console.log(`Wrote ${outputImage} (${bytes.length} bytes)`);
