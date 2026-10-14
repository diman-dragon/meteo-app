import { svgEl } from '../svg/svgEl.js';
import { smoothPath } from './smoothPath.js';
import { chartColors } from '../../config/chartColors.js';
import { chartGeometry } from '../../config/chartGeometry.js';

export function lineSeries(series, values, xScale, yScale, gradientId) {
  const color = chartColors[series.name];
  const points = values.map((v, i) => (v == null ? null : [xScale(i), yScale(v)])).filter(Boolean);
  const line = smoothPath(points);
  const group = svgEl('g', {});
  if (!line) return group;
  const base = chartGeometry.height - chartGeometry.bottom;
  const gradient = svgEl('linearGradient', { id: gradientId, x1: 0, y1: 0, x2: 0, y2: 1 },
    svgEl('stop', { offset: 0, style: `stop-color:${color};stop-opacity:0.38` }),
    svgEl('stop', { offset: 1, style: `stop-color:${color};stop-opacity:0` }));
  group.append(svgEl('defs', {}, gradient));
  if (series.area) group.append(svgEl('path', { d: `${line}L${points.at(-1)[0]} ${base}L${points[0][0]} ${base}Z`, fill: `url(#${gradientId})` }));
  group.append(svgEl('path', { d: line, class: 'chart-line', style: `stroke:${color}`, 'stroke-dasharray': series.dashed ? '5 4' : 'none' }));
  return group;
}
