import { formatWeekday } from './formatWeekday.js';

export function hourLabels(times) {
  const labels = [];
  times.forEach((time, index) => {
    const hour = Number(time.slice(11, 13));
    if (hour % 6 !== 0) return;
    labels.push({ index, text: hour === 0 ? formatWeekday(time.slice(0, 10)) : `${hour}:00` });
  });
  return labels;
}
