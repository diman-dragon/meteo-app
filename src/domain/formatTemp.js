import { convertValue } from './convertValue.js';

export function formatTemp(value, unit = '°C') {
  const shown = convertValue('temperature_2m', value, unit).value;
  return shown == null ? '—' : `${Math.round(shown)}°`;
}
