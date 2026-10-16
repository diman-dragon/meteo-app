import { lengthQuantities } from '../config/lengthQuantities.js';

export function unitQuantity(name, unit) {
  if (unit === '°C') return 'temperature';
  if (unit === 'km/h') return 'wind';
  if (unit === 'mm') return 'precipitation';
  if (unit === 'cm') return 'snowfall';
  if (unit === 'hPa') return 'pressure';
  return unit === 'm' ? lengthQuantities[name] ?? null : null;
}
