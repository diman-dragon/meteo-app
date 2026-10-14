export function buildQuery(params) {
  const query = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    query.set(key, Array.isArray(value) ? value.join(',') : String(value));
  }
  return query.toString();
}
