export function niceScale(min, max, count = 4) {
  const raw = (max - min || 1) / (count - 1);
  const power = 10 ** Math.floor(Math.log10(raw));
  const fraction = raw / power;
  const step = (fraction <= 1 ? 1 : fraction <= 2 ? 2 : fraction <= 5 ? 5 : 10) * power;
  const low = Math.floor(min / step) * step;
  const high = Math.ceil(max / step) * step;
  const ticks = [];
  for (let value = low; value <= high + step / 2; value += step) ticks.push(Math.round(value * 1000) / 1000);
  return { min: low, max: high, ticks };
}
