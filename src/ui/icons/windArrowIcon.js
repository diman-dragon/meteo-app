import { svgEl } from '../svg/svgEl.js';
import { iconSvg } from './iconSvg.js';

export function windArrowIcon(degrees, size = 18) {
  const icon = iconSvg(size, svgEl('path', { d: 'M12 4v16M6 14l6 6 6-6' }));
  icon.style.transform = `rotate(${degrees}deg)`;
  return icon;
}
