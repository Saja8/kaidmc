import { existsSync, readdirSync, rmSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const generatedDirs = [".next", "out", ".turbo", "coverage"];
const skipDirs = new Set(["node_modules", ".git"]);

for (const dir of generatedDirs) {
  const full = join(root, dir);
  if (existsSync(full)) {
    rmSync(full, { recursive: true, force: true });
    console.log(`removed dir ${dir}`);
  }
}

function removeDsStore(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      if (skipDirs.has(entry.name)) continue;
      removeDsStore(full);
      continue;
    }
    if (entry.isFile() && entry.name === ".DS_Store") {
      rmSync(full, { force: true });
      console.log(`removed file ${full.replace(`${root}/`, "")}`);
    }
  }
}

removeDsStore(root);
console.log("safe cleanup complete");
