import { el } from '../el.js';

export function iconButton(icon, label, onClick, extraClass = '') {
  const node = el('button', `icon-btn ${extraClass}`.trim());
  node.type = 'button';
  node.setAttribute('aria-label', label);
  node.title = label;
  node.append(icon);
  node.addEventListener('click', () => onClick());
  return node;
}
