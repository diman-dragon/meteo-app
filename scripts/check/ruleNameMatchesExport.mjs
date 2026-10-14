export function ruleNameMatchesExport(files) {
  const problems = [];
  for (const file of files.filter((f) => f.path.endsWith('.js') && f.path !== 'src/main.js')) {
    const match = file.text.match(/^export\s+(?:async\s+)?(?:function|const)\s+([A-Za-z0-9_]+)/m);
    const base = file.path.split('/').pop().replace(/\.js$/, '');
    if (!match || match[1] !== base) problems.push(`${file.path}: export name "${match?.[1]}" must equal file name "${base}"`);
  }
  return problems;
}
