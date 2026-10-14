export function ruleOneExport(files) {
  const problems = [];
  for (const file of files.filter((f) => f.path.endsWith('.js'))) {
    const count = (file.text.match(/^export\s/gm) ?? []).length;
    const expected = file.path === 'src/main.js' ? 0 : 1;
    if (count !== expected) problems.push(`${file.path}: exports=${count}, expected ${expected} (one responsibility per file)`);
  }
  return problems;
}
