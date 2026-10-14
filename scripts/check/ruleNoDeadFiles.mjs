import { dirname, posix } from 'node:path';

export function ruleNoDeadFiles(files) {
  const used = new Set(['src/main.js']);
  for (const file of files) {
    for (const match of file.text.matchAll(/(?:from|import)\s+['"](\.[^'"]+)['"]/g)) {
      used.add(posix.normalize(posix.join(dirname(file.path), match[1])));
    }
  }
  return files.filter((f) => !used.has(f.path)).map((f) => `${f.path}: not imported anywhere (dead file)`);
}
