import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';

const pick = async (root, name) => (await import(pathToFileURL(resolve(root, `src/config/${name}.js`)).href))[name];

export async function ruleTopicMetricsRequested(files, root) {
  const problems = [];
  const [hourly, daily, labels] = await Promise.all([pick(root, 'hourlyVars'), pick(root, 'dailyVars'), import(pathToFileURL(resolve(root, 'src/i18n/ruVars.js')).href)]);
  const topics = await pick(root, 'topicMetrics');
  for (const [topic, spec] of Object.entries(topics)) {
    for (const name of spec.hourly) if (!hourly.includes(name) || !labels.ruVars[name]) problems.push(`topicMetrics.${topic}.hourly: "${name}" not requested or not labelled`);
    for (const name of spec.daily) if (!daily.includes(name) || !labels.ruVars[name]) problems.push(`topicMetrics.${topic}.daily: "${name}" not requested or not labelled`);
  }
  return problems;
}
