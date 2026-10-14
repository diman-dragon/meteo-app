import { chartCard } from './chartCard.js';
import { hourlyCharts } from '../../config/hourlyCharts.js';
import { hourlyChartCount } from '../../config/hourlyChartCount.js';
import { findHourStart } from '../../domain/findHourStart.js';
import { hourLabels } from '../../domain/hourLabels.js';
import { formatWeekday } from '../../domain/formatWeekday.js';
import { formatClock } from '../../domain/formatClock.js';

export function hourlyChartCards(forecast) {
  const { hourly, hourly_units: units, current } = forecast;
  const start = findHourStart(hourly.time, current.time);
  const count = Math.min(hourlyChartCount, hourly.time.length - start);
  const times = hourly.time.slice(start, start + count);
  const labels = hourLabels(times);
  const pointLabel = (i) => `${formatWeekday(times[i].slice(0, 10))} ${formatClock(times[i])}`;
  return hourlyCharts.map((def, k) => chartCard({ def, table: hourly, units, start, count, labels, pointLabel, uid: `h${k}` }));
}
