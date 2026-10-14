import { el } from '../el.js';

export function metricRow(label, value) {
  const row = el('div', 'metric-row');
  row.append(el('span', 'metric-label', label), el('span', 'metric-value', value));
  return row;
}
