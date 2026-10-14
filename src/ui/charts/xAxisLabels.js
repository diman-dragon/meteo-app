import { svgEl } from '../svg/svgEl.js';
import { chartGeometry } from '../../config/chartGeometry.js';

export function xAxisLabels(labels, xScale) {
  const group = svgEl('g', { class: 'chart-x' });
  for (const label of labels) {
    group.append(svgEl('text', { x: xScale(label.index), y: chartGeometry.height - 7, 'text-anchor': 'middle' }, label.text));
  }
  return group;
}
