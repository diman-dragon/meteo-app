import { svgEl } from '../svg/svgEl.js';

export function iconSvg(size, ...children) {
  return svgEl('svg', {
    viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: 'currentColor',
    'stroke-width': 2, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'aria-hidden': 'true'
  }, ...children);
}
