import { svgEl } from '../svg/svgEl.js';
import { iconSvg } from './iconSvg.js';

export function backIcon(size = 22) {
  return iconSvg(size, svgEl('path', { d: 'M15 5l-7 7 7 7' }));
}
