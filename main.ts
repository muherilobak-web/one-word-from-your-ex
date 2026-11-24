// One Word From Your Ex — writes exactly one word to /output/entry.txt.
// Output contract: UTF-8, 1–24 characters, a single word with no spaces,
// and no trailing newline. Deterministic: byte-identical on every run.
import { mkdirSync, writeFileSync } from "node:fs";

const word = "promisebreaker";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", word, "utf8");
