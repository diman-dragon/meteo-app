import { el } from '../el.js';
import { openPage } from '../../flows/openPage.js';

export function statCard({ label, value, sub = '', spark = null, extra = null, color = '', page = '' }) {
  const node = el(page ? 'button' : 'section', page ? 'stat clickable' : 'stat');
  const row = el('div', 'stat-value');
  const number = el('span', '', value);
  if (color) number.style.color = color;
  row.append(number);
  if (extra) row.append(extra);
  const head = el('div', 'stat-label', label);
  if (page) { node.type = 'button'; head.append(el('span', 'chevron', '›')); node.addEventListener('click', () => openPage(page)); }
  node.append(head, row);
  if (sub) node.append(el('div', 'stat-sub', sub));
  if (spark) node.append(spark);
  return node;
}
