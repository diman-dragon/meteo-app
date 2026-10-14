import { chartCard } from './chartCard.js';
import { dailyCharts } from '../../config/dailyCharts.js';
import { dayLabels } from '../../domain/dayLabels.js';
import { formatDay } from '../../domain/formatDay.js';

export function dailyChartCards(forecast) {
  const { daily, daily_units: units } = forecast;
  const labels = dayLabels(daily.time);
  const pointLabel = (i) => formatDay(daily.time[i]);
  return dailyCharts.map((def, k) => chartCard({
    def, table: daily, units, start: 0, count: daily.time.length, labels, pointLabel, uid: `d${k}`
  }));
}
