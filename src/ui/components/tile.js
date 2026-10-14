import { el } from '../el.js';

export function tile(label, value, extra = null) {
  const node = el('div', 'tile');
  const row = el('div', 'tile-value');
  row.append(el('span', '', value));
  if (extra) row.append(extra);
  node.append(el('div', 'tile-label', label), row);
  return node;
}
