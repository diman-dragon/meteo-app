import { el } from '../el.js';

export function statCard({ label, value, sub = '', spark = null, extra = null, color = '' }) {
  const node = el('section', 'stat');
  const row = el('div', 'stat-value');
  const number = el('span', '', value);
  if (color) number.style.color = color;
  row.append(number);
  if (extra) row.append(extra);
  node.append(el('div', 'stat-label', label), row);
  if (sub) node.append(el('div', 'stat-sub', sub));
  if (spark) node.append(spark);
  return node;
}
