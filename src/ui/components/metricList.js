import { el } from '../el.js';
import { metricRow } from './metricRow.js';
import { tVar } from '../../i18n/tVar.js';
import { formatValue } from '../../domain/formatValue.js';

export function metricList(values, units, names) {
  const list = el('div', 'metric-list');
  for (const name of names) {
    if (!(name in values)) continue;
    list.append(metricRow(tVar(name), formatValue(name, values[name], units?.[name])));
  }
  return list;
}
