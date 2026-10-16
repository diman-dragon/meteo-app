import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';

const pick = async (root, name) => (await import(pathToFileURL(resolve(root, `src/config/${name}.js`)).href))[name];

export async function ruleChartsUseRequestedVars(files, root) {
  const problems = [];
  const colors = await pick(root, 'chartColors');
  const check = (label, defs, allowed) => {
    for (const def of defs) for (const { name } of def.series) {
      if (!allowed.includes(name)) problems.push(`${label}: "${name}" is not requested from the API`);
      if (!colors[name]) problems.push(`${label}: "${name}" has no color in chartColors`);
    }
  };
  const [hourly, daily, hHour] = await Promise.all(['hourlyVars', 'dailyVars', 'historyHourlyVars'].map((n) => pick(root, n)));
  const topics = await pick(root, 'topicCharts');
  for (const [topic, spec] of Object.entries(topics)) { check(`topicCharts.${topic}.hourly`, spec.hourly, hourly); check(`topicCharts.${topic}.daily`, spec.daily, daily); }
  check('historyCharts', await pick(root, 'historyCharts'), hHour);
  check('airCharts', await pick(root, 'airCharts'), await pick(root, 'airHourlyVars'));
  return problems;
}
