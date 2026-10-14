import { el } from '../el.js';
import { button } from './button.js';

export function emptyState(text, actionLabel, onAction) {
  const node = el('div', 'empty');
  node.append(el('p', '', text));
  if (actionLabel) node.append(button(actionLabel, onAction, 'primary'));
  return node;
}
