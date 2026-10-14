import { el } from '../el.js';

export function card(title, ...children) {
  const node = el('section', 'card');
  node.append(el('h2', 'card-title', title), ...children);
  return node;
}
