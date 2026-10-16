import { formatWeekday } from './formatWeekday.js';
import { formatClock } from './formatClock.js';

export function hourPointLabel(times) {
  return (index) => `${formatWeekday(times[index].slice(0, 10))} ${formatClock(times[index])}`;
}
