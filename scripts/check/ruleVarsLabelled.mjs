import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';

const pick = async (root, path, name) => (await import(pathToFileURL(resolve(root, path)).href))[name];

export async function ruleVarsLabelled(files, root) {
  const labels = Object.keys(await pick(root, 'src/i18n/ruVars.js', 'ruVars'));
  const problems = [];
  for (const name of ['currentVars', 'hourlyVars', 'dailyVars', 'airQualityVars', 'pollenVars', 'historyHourlyVars', 'historyDailyVars', 'airHourlyVars']) {
    for (const variable of await pick(root, `src/config/${name}.js`, name)) {
      if (!labels.includes(variable)) problems.push(`${name}: "${variable}" has no translation in ruVars/enVars`);
    }
  }
  return problems;
}
