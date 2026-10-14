import { svgEl } from '../svg/svgEl.js';
import { iconSvg } from './iconSvg.js';

export function refreshIcon(size = 22) {
  return iconSvg(size, svgEl('path', { d: 'M20 11a8 8 0 1 0-2.3 5.7' }), svgEl('path', { d: 'M20 4v7h-7' }));
}
