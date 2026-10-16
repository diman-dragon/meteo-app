import { chartCard } from './chartCard.js';
import { airCharts } from '../../config/airCharts.js';
import { hourLabels } from '../../domain/hourLabels.js';
import { hourPointLabel } from '../../domain/hourPointLabel.js';
import { t } from '../../i18n/t.js';

export function airChartCards(air, start, count) {
  if (!air?.hourly) return [];
  const times = air.hourly.time.slice(start, start + count);
  const spec = {
    table: air.hourly, units: air.hourly_units ?? {}, start, count: times.length,
    labels: hourLabels(times), pointLabel: hourPointLabel(times), suffix: t('chart.hours', { n: times.length })
  };
  return airCharts.map((def, k) => chartCard({ ...spec, def, uid: `air${start}-${k}` }));
}
