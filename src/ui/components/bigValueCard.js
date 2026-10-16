import { el } from '../el.js';
import { card } from './card.js';

export function bigValueCard(label, value, sub = '') {
  return card(label, el('div', 'big-value', value), ...(sub ? [el('div', 'stat-sub', sub)] : []));
}
