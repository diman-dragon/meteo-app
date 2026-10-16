import { convertValue } from './convertValue.js';
import { formatShown } from './formatShown.js';

export function formatValue(name, value, unit) {
  const shown = convertValue(name, value, unit);
  return formatShown(name, shown.value, shown.unit, shown.decimals);
}
