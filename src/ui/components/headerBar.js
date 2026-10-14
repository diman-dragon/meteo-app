import { el } from '../el.js';

export function headerBar({ title, subtitle = '', leading = null, trailing = [] }) {
  const bar = el('header', 'bar');
  const text = el('div', 'bar-text');
  text.append(el('h1', 'bar-title', title));
  if (subtitle) text.append(el('div', 'bar-subtitle', subtitle));
  if (leading) bar.append(leading);
  bar.append(text, ...trailing);
  return bar;
}
