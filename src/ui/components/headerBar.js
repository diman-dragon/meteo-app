import { el } from '../el.js';

export function headerBar(title, leading, trailing) {
  const bar = el('header', 'bar');
  if (leading) bar.append(leading);
  bar.append(el('h1', 'bar-title', title));
  if (trailing) bar.append(trailing);
  return bar;
}
