const FORBIDDEN = [/\blocalStorage\b/, /\bsessionStorage\b/, /document\.cookie/, /\.innerHTML\b/, /\.outerHTML\b/, /insertAdjacentHTML/, /\beval\(/, /new Function\(/];

export function ruleSafeApis(files) {
  const problems = [];
  for (const file of files.filter((f) => f.path.endsWith('.js'))) {
    for (const pattern of FORBIDDEN) {
      if (pattern.test(file.text)) problems.push(`${file.path}: forbidden API ${pattern}`);
    }
  }
  return problems;
}
