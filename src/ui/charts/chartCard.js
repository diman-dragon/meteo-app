import { el } from '../el.js';
import { card } from '../components/card.js';
import { chartSvg } from './chartSvg.js';
import { chartLegend } from './chartLegend.js';
import { scrubChart } from './scrubChart.js';
import { tVar } from '../../i18n/tVar.js';
import { t } from '../../i18n/t.js';

export function chartCard(spec) {
  const { def, table, units, start, count, labels, pointLabel, uid, suffix = '' } = spec;
  const columns = def.series.map((s) => table[s.name].slice(start, start + count));
  const readout = el('div', 'readout', t('chart.tap'));
  const parts = chartSvg(def, columns, labels, uid);
  scrubChart(parts, { def, columns, units, readout, pointLabel });
  const names = def.series.map((s) => tVar(s.name)).join(' · ');
  return card(suffix ? `${names} · ${suffix}` : names, readout, parts.svg, chartLegend(def));
}
