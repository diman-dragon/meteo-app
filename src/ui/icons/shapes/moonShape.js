import { svgEl } from '../../svg/svgEl.js';

export function moonShape(cx, cy, scale) {
  const offset = 12 * scale;
  return svgEl('path', {
    d: 'M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z', fill: '#EDE9FF',
    transform: `translate(${cx - offset} ${cy - offset}) scale(${scale})`
  });
}
