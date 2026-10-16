import { chartCard } from './chartCard.js';
import { topicCharts } from '../../config/topicCharts.js';
import { hourlyChartCount } from '../../config/hourlyChartCount.js';
import { findHourStart } from '../../domain/findHourStart.js';
import { hourLabels } from '../../domain/hourLabels.js';
import { hourPointLabel } from '../../domain/hourPointLabel.js';
import { dayLabels } from '../../domain/dayLabels.js';
import { formatDay } from '../../domain/formatDay.js';
import { t } from '../../i18n/t.js';

export function topicChartCards(forecast, topic) {
  const { hourly, hourly_units: hu, current, daily, daily_units: du } = forecast;
  const start = findHourStart(hourly.time, current.time);
  const count = Math.min(hourlyChartCount, hourly.time.length - start);
  const times = hourly.time.slice(start, start + count);
  const hourSpec = { table: hourly, units: hu, start, count, labels: hourLabels(times), pointLabel: hourPointLabel(times), suffix: t('chart.hours', { n: count }) };
  const days = daily.time.length;
  const daySpec = { table: daily, units: du, start: 0, count: days, labels: dayLabels(daily.time), pointLabel: (i) => formatDay(daily.time[i]), suffix: t('chart.days', { n: days }) };
  const { hourly: hourlyDefs, daily: dailyDefs } = topicCharts[topic];
  return [
    ...hourlyDefs.map((def, k) => chartCard({ ...hourSpec, def, uid: `${topic}h${k}` })),
    ...dailyDefs.map((def, k) => chartCard({ ...daySpec, def, uid: `${topic}d${k}` }))
  ];
}
