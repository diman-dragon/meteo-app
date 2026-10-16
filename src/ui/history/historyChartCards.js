import { chartCard } from '../charts/chartCard.js';
import { airChartCards } from '../charts/airChartCards.js';
import { historyCharts } from '../../config/historyCharts.js';
import { hourLabels } from '../../domain/hourLabels.js';
import { hourPointLabel } from '../../domain/hourPointLabel.js';
import { t } from '../../i18n/t.js';

export function historyChartCards({ data, air }) {
  const { hourly, hourly_units: units } = data;
  const times = hourly.time;
  const spec = { table: hourly, units, start: 0, count: times.length, labels: hourLabels(times), pointLabel: hourPointLabel(times), suffix: t('chart.hours', { n: times.length }) };
  const ready = historyCharts.filter((def) => def.series.every((s) => hourly[s.name]));
  return [...ready.map((def, k) => chartCard({ ...spec, def, uid: `hist${k}` })), ...airChartCards(air, 0, times.length)];
}
