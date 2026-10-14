import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';

const load = async (root, name) => Object.keys((await import(pathToFileURL(resolve(root, `src/i18n/${name}.js`)).href))[name]);
const diff = (a, b) => a.filter((key) => !b.includes(key));

export async function ruleI18nComplete(files, root) {
  const problems = [];
  for (const [a, b] of [['ru', 'en'], ['ruVars', 'enVars'], ['ruWmo', 'enWmo']]) {
    const [ka, kb] = [await load(root, a), await load(root, b)];
    for (const key of diff(ka, kb)) problems.push(`${b}: missing "${key}"`);
    for (const key of diff(kb, ka)) problems.push(`${a}: missing "${key}"`);
  }
  const ui = await load(root, 'ru');
  const used = files.flatMap((f) => [...f.text.matchAll(/\bt\('([^']+)'/g)].map((m) => m[1]));
  for (const key of new Set(used)) if (!ui.includes(key)) problems.push(`ru: key "${key}" is used but missing`);
  return problems;
}
