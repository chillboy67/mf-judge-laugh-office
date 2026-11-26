// Entry: one joke about office life, one line, under 200 characters.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const joke =
  "Our team renamed the Monday status meeting 'alignment' — same hour, same slides, same silence, but now the silence is aligned.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), joke + "\n", "utf8");
