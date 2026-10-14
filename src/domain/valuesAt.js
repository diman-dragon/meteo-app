export function valuesAt(table, index) {
  const values = {};
  for (const [name, list] of Object.entries(table)) values[name] = list[index];
  return values;
}
