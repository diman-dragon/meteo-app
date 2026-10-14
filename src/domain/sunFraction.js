import { minutesOfDay } from './minutesOfDay.js';

export function sunFraction(sunrise, sunset, now) {
  const start = minutesOfDay(sunrise);
  const span = minutesOfDay(sunset) - start;
  return Math.min(1, Math.max(0, (minutesOfDay(now) - start) / (span || 1)));
}
