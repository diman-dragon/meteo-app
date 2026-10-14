import { el } from '../el.js';

export function button(label, onClick, variant = '', type = 'button') {
  const node = el('button', `btn ${variant}`.trim(), label);
  node.type = type;
  if (onClick) node.addEventListener('click', () => onClick());
  return node;
}
