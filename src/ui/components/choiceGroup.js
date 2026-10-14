import { el } from '../el.js';

export function choiceGroup(options, currentId, onPick) {
  const group = el('div', 'choice-group');
  group.setAttribute('role', 'radiogroup');
  for (const option of options) {
    const item = el('button', 'choice', option.label);
    item.type = 'button';
    item.setAttribute('role', 'radio');
    item.setAttribute('aria-checked', String(option.id === currentId));
    item.addEventListener('click', () => onPick(option.id));
    group.append(item);
  }
  return group;
}
