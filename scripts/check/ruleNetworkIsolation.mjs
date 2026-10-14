export function ruleNetworkIsolation(files) {
  const problems = [];
  for (const file of files.filter((f) => f.path.endsWith('.js'))) {
    if (/\bfetch\(/.test(file.text) && file.path !== 'src/api/fetchJson.js') problems.push(`${file.path}: fetch() allowed only in src/api/fetchJson.js`);
    if (/XMLHttpRequest|WebSocket|sendBeacon/.test(file.text)) problems.push(`${file.path}: only fetchJson may touch the network`);
  }
  return problems;
}
