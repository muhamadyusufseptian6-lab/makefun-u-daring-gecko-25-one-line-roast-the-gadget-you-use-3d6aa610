// One-Line Roast: The Gadget You Use Every Day
// Writes a single original roast line to /output/entry.txt.
// Node 22, stdlib-only, deterministic.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROAST =
  "My left AirPod dies at 34% every single time while the right one soldiers on, like it's contractually allergic to finishing anything.";

const repoDir = dirname(fileURLToPath(import.meta.url));
void repoDir;

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ROAST, "utf8");
