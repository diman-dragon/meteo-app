import { resolve } from 'node:path';
import { loadSourceFiles } from './check/loadSourceFiles.mjs';
import { ruleOneExport } from './check/ruleOneExport.mjs';
import { ruleNameMatchesExport } from './check/ruleNameMatchesExport.mjs';
import { ruleOneFunction } from './check/ruleOneFunction.mjs';
import { ruleMaxLines } from './check/ruleMaxLines.mjs';
import { ruleSafeApis } from './check/ruleSafeApis.mjs';
import { ruleNetworkIsolation } from './check/ruleNetworkIsolation.mjs';
import { ruleUpdateOnClickOnly } from './check/ruleUpdateOnClickOnly.mjs';
import { ruleNoDeadFiles } from './check/ruleNoDeadFiles.mjs';
import { ruleI18nComplete } from './check/ruleI18nComplete.mjs';
import { ruleVarsLabelled } from './check/ruleVarsLabelled.mjs';
import { ruleChartsUseRequestedVars } from './check/ruleChartsUseRequestedVars.mjs';

const root = resolve(import.meta.dirname, '..');
const files = loadSourceFiles(root, 'src');
const rules = [ruleOneExport, ruleNameMatchesExport, ruleOneFunction, ruleMaxLines, ruleSafeApis,
  ruleNetworkIsolation, ruleUpdateOnClickOnly, ruleNoDeadFiles, ruleI18nComplete, ruleVarsLabelled,
  ruleChartsUseRequestedVars];

let failed = 0;
for (const rule of rules) {
  const problems = await rule(files, root);
  failed += problems.length;
  console.log(`${problems.length ? 'FAIL' : 'ok  '} ${rule.name}`);
  problems.forEach((problem) => console.log(`     - ${problem}`));
}
console.log(`\n${files.length} files checked, ${failed} violation(s).`);
process.exit(failed ? 1 : 0);
