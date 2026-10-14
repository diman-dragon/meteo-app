import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

export function loadSourceFiles(root, dir) {
  const files = [];
  const walk = (current) => {
    for (const name of readdirSync(current)) {
      const full = join(current, name);
      if (statSync(full).isDirectory()) walk(full);
      else files.push({ path: relative(root, full).replaceAll('\\', '/'), text: readFileSync(full, 'utf8') });
    }
  };
  walk(join(root, dir));
  return files;
}
