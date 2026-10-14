import { t } from '../i18n/t.js';
import { tWmo } from '../i18n/tWmo.js';
import { hiddenUnits } from '../config/hiddenUnits.js';
import { compassDirection } from './compassDirection.js';
import { formatClock } from './formatClock.js';
import { formatDuration } from './formatDuration.js';

export function formatValue(name, value, unit) {
  if (value === null || value === undefined) return '—';
  if (name === 'is_day') return t(value ? 'yes' : 'no');
  if (name === 'weather_code') return tWmo(value);
  if (unit === 'iso8601') return formatClock(value);
  if (unit === 's') return formatDuration(value);
  if (name.startsWith('wind_direction')) return `${Math.round(value)}° ${compassDirection(value)}`;
  const number = Number.isInteger(value) ? value : Math.round(value * 10) / 10;
  return unit && !hiddenUnits.includes(unit) ? `${number} ${unit}` : `${number}`;
}
