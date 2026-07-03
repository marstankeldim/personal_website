/**
 * Generates raster assets (PNG icons + Open Graph image) from SVG sources.
 * Run with `npm run assets` after changing the favicon or OG design.
 * Outputs are committed, so this never needs to run in CI.
 */
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const pub = (...p) => path.join(root, "public", ...p);

const favicon = await readFile(pub("favicon.svg"));

await sharp(favicon).resize(192, 192).png().toFile(pub("icon-192.png"));
await sharp(favicon).resize(180, 180).png().toFile(pub("apple-icon.png"));

const og = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#0c0b0a"/>
  <!-- blueprint grid -->
  <g stroke="#ebe8e4" stroke-opacity="0.07">
    ${Array.from({ length: 21 }, (_, i) => `<line x1="${i * 60}" y1="0" x2="${i * 60}" y2="630"/>`).join("")}
    ${Array.from({ length: 11 }, (_, i) => `<line x1="0" y1="${i * 60}" x2="1200" y2="${i * 60}"/>`).join("")}
  </g>
  <!-- accent rule -->
  <rect x="96" y="150" width="56" height="6" fill="#dd9455"/>
  <text x="96" y="120" font-family="Menlo, monospace" font-size="22" letter-spacing="6" fill="#a09a91">AYAN OSPAN</text>
  <text x="90" y="300" font-family="Helvetica Neue, Arial, sans-serif" font-size="86" font-weight="600" fill="#ebe8e4" letter-spacing="-2">Building where hardware</text>
  <text x="90" y="400" font-family="Helvetica Neue, Arial, sans-serif" font-size="86" font-weight="600" fill="#ebe8e4" letter-spacing="-2">meets software.</text>
  <text x="96" y="500" font-family="Menlo, monospace" font-size="24" fill="#a09a91">Distributed systems · Robotics · Embedded · AI tooling</text>
  <text x="96" y="560" font-family="Menlo, monospace" font-size="22" fill="#6f6a62">Electrical Engineering @ Penn State</text>
</svg>`;

await sharp(Buffer.from(og)).png().toFile(pub("og.png"));

console.log("Generated: icon-192.png, apple-icon.png, og.png");
