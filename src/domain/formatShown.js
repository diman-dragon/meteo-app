import { t } from '../i18n/t.js';
import { tWmo } from '../i18n/tWmo.js';
import { hiddenUnits } from '../config/hiddenUnits.js';
import { compassDirection } from './compassDirection.js';
import { formatClock } from './formatClock.js';
import { formatDuration } from './formatDuration.js';

export function formatShown(name, value, unit, decimals = 1) {
  if (value === null || value === undefined) return '—';
  if (name === 'is_day') return t(value ? 'yes' : 'no');
  if (name === 'weather_code') return tWmo(value);
  if (unit === 'iso8601') return formatClock(value);
  if (unit === 's') return formatDuration(value);
  if (name.startsWith('wind_direction')) return `${Math.round(value)}° ${compassDirection(value)}`;
  const scale = 10 ** decimals;
  const number = Math.round(value * scale) / scale;
  return unit && !hiddenUnits.includes(unit) ? `${number} ${unit}` : `${number}`;
}
