import { el } from '../el.js';
import { card } from '../components/card.js';
import { chartSvg } from './chartSvg.js';
import { chartLegend } from './chartLegend.js';
import { scrubChart } from './scrubChart.js';
import { convertColumn } from '../../domain/convertColumn.js';
import { formatShown } from '../../domain/formatShown.js';
import { tVar } from '../../i18n/tVar.js';
import { t } from '../../i18n/t.js';

export function chartCard(spec) {
  const { def, table, units, start, count, labels, pointLabel, uid, suffix = '' } = spec;
  const shown = {};
  const columns = def.series.map((s) => {
    const converted = convertColumn(s.name, table[s.name].slice(start, start + count), units[s.name]);
    shown[s.name] = converted;
    return converted.values;
  });
  const format = (name, value) => formatShown(name, value, shown[name].unit, shown[name].decimals);
  const readout = el('div', 'readout', t('chart.tap'));
  const parts = chartSvg(def, columns, labels, uid);
  scrubChart(parts, { def, columns, format, readout, pointLabel });
  const names = def.series.map((s) => tVar(s.name)).join(' · ');
  return card(suffix ? `${names} · ${suffix}` : names, readout, parts.svg, chartLegend(def));
}
