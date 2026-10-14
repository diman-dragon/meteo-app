import { svgEl } from '../../svg/svgEl.js';

export function cloudShape(fill, transform = '') {
  return svgEl('path', {
    d: 'M18 50h27a11 11 0 0 0 2-21.8A15 15 0 0 0 19.4 33 8.8 8.8 0 0 0 18 50z',
    fill, stroke: 'rgba(0,0,0,0.12)', 'stroke-width': 1, transform
  });
}
