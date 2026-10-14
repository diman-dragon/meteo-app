const LOGIC_LIMIT = 40;
const DATA_LIMIT = 120;

export function ruleMaxLines(files) {
  const problems = [];
  for (const file of files) {
    const isData = file.path.startsWith('src/config/') || file.path.startsWith('src/i18n/');
    const limit = isData ? DATA_LIMIT : LOGIC_LIMIT;
    const lines = file.text.trimEnd().split('\n').length;
    if (lines > limit) problems.push(`${file.path}: ${lines} lines, limit ${limit}`);
  }
  return problems;
}
