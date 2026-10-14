import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';

const pick = async (root, name) => (await import(pathToFileURL(resolve(root, `src/config/${name}.js`)).href))[name];

export async function ruleChartsUseRequestedVars(files, root) {
  const problems = [];
  for (const [charts, vars] of [['hourlyCharts', 'hourlyVars'], ['dailyCharts', 'dailyVars']]) {
    const requested = await pick(root, vars);
    const colors = await pick(root, 'chartColors');
    for (const def of await pick(root, charts)) {
      for (const { name } of def.series) {
        if (!requested.includes(name)) problems.push(`${charts}: "${name}" is not requested in ${vars}`);
        if (!colors[name]) problems.push(`${charts}: "${name}" has no color in chartColors`);
      }
    }
  }
  return problems;
}
