import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';

const load = async (root, name) => Object.keys((await import(pathToFileURL(resolve(root, `src/i18n/${name}.js`)).href))[name]);
const pickIds = async (root, name) => (await import(pathToFileURL(resolve(root, `src/config/${name}.js`)).href))[name];
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
  const dynamic = [
    ...(await pickIds(root, 'themeIds')).map((id) => `theme.${id}`),
    ...(await pickIds(root, 'languageIds')).map((id) => `lang.${id}`),
    ...(await pickIds(root, 'pageIds')).map((id) => `tab.${id}`),
    ...Array.from({ length: 8 }, (_, i) => `compass${i}`),
    ...Array.from({ length: 6 }, (_, i) => `aqi.${i}`)
  ];
  for (const key of dynamic) if (!ui.includes(key)) problems.push(`ru: dynamic key "${key}" is missing`);
  return problems;
}
