import { svgEl } from '../svg/svgEl.js';
import { chartColors } from '../../config/chartColors.js';
import { chartGeometry } from '../../config/chartGeometry.js';

export function barSeries(series, values, xScale, yScale, step) {
  const base = chartGeometry.height - chartGeometry.bottom;
  const group = svgEl('g', {});
  values.forEach((value, i) => {
    if (!value) return;
    const top = yScale(value);
    const width = Math.max(2, step * 0.62);
    group.append(svgEl('rect', {
      x: xScale(i) - width / 2, y: top, width, height: Math.max(1.5, base - top), rx: Math.min(3, width / 2),
      style: `fill:${chartColors[series.name]}`
    }));
  });
  return group;
}
