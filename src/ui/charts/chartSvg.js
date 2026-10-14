import { svgEl } from '../svg/svgEl.js';
import { gridLines } from './gridLines.js';
import { xAxisLabels } from './xAxisLabels.js';
import { lineSeries } from './lineSeries.js';
import { barSeries } from './barSeries.js';
import { scaleLinear } from './scaleLinear.js';
import { seriesExtent } from '../../domain/seriesExtent.js';
import { chartGeometry as g } from '../../config/chartGeometry.js';

export function chartSvg(def, columns, labels, uid) {
  const scale = seriesExtent(columns, def);
  const step = (g.width - g.left - g.right) / columns[0].length;
  const xScale = (index) => g.left + (index + 0.5) * step;
  const yScale = scaleLinear(scale.min, scale.max, g.height - g.bottom, g.top);
  const svg = svgEl('svg', { viewBox: `0 0 ${g.width} ${g.height}`, class: 'chart-svg', role: 'img' });
  svg.append(gridLines(scale.ticks, yScale), xAxisLabels(labels, xScale));
  def.series.forEach((series, k) => svg.append(def.kind === 'bar'
    ? barSeries(series, columns[k], xScale, yScale, step)
    : lineSeries(series, columns[k], xScale, yScale, `${uid}-${k}`)));
  return { svg, xScale, yScale, step };
}
