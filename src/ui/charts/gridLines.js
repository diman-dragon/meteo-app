import { svgEl } from '../svg/svgEl.js';
import { chartGeometry } from '../../config/chartGeometry.js';

export function gridLines(ticks, yScale) {
  const { width, left, right } = chartGeometry;
  const group = svgEl('g', { class: 'chart-grid' });
  for (const tick of ticks) {
    const y = yScale(tick);
    group.append(
      svgEl('line', { x1: left, x2: width - right, y1: y, y2: y }),
      svgEl('text', { x: left - 6, y: y + 3.5, 'text-anchor': 'end' }, String(tick))
    );
  }
  return group;
}
