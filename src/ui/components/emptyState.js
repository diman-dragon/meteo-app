import { el } from '../el.js';

export function emptyState(text, ...actions) {
  const node = el('div', 'empty');
  node.append(el('p', '', text), ...actions);
  return node;
}
