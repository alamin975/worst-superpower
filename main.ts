import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "The power to always know exactly when the Wi-Fi will drop — one second before it does.";

// Write the entry line to /output/entry.txt as explicit UTF-8 text.
function writeEntry(): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync(join("/output", "entry.txt"), ENTRY + "\n", "utf8");
}

writeEntry();
