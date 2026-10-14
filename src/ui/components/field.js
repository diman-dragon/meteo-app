import { el } from '../el.js';

export function field(labelText, inputMode = 'text') {
  const wrap = el('label', 'field', labelText);
  const input = el('input', 'input');
  input.inputMode = inputMode;
  input.autocomplete = 'off';
  wrap.append(input);
  return { wrap, input };
}
