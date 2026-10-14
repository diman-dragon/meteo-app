import { niceScale } from './niceScale.js';

export function seriesExtent(columns, def) {
  const values = columns.flat().filter((value) => value != null);
  if (!values.length) return niceScale(def.min ?? 0, def.max ?? 1);
  let min = def.min ?? Math.min(...values);
  let max = def.max ?? Math.max(...values);
  if (min === max) { min -= 1; max += 1; }
  return niceScale(min, max);
}
