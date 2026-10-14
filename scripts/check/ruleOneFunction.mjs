export function ruleOneFunction(files) {
  const problems = [];
  for (const file of files.filter((f) => f.path.endsWith('.js'))) {
    const functions = (file.text.match(/^(?:export\s+)?(?:async\s+)?function\s/gm) ?? []).length;
    const arrows = (file.text.match(/^(?:export\s+)?const\s+\w+\s*=\s*(?:async\s*)?(?:\([^)]*\)|\w+)\s*=>/gm) ?? []).length;
    if (functions + arrows > 1) problems.push(`${file.path}: ${functions + arrows} top-level functions, max 1`);
  }
  return problems;
}
