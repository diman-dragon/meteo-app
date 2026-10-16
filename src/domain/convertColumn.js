import { convertValue } from './convertValue.js';

export function convertColumn(name, values, unit) {
  const probe = convertValue(name, 0, unit);
  return { values: values.map((value) => convertValue(name, value, unit).value), unit: probe.unit, decimals: probe.decimals };
}
