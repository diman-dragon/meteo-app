export function scaleLinear(d0, d1, r0, r1) {
  const ratio = (r1 - r0) / (d1 - d0 || 1);
  return (value) => r0 + (value - d0) * ratio;
}
