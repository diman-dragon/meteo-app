export const airCharts = Object.freeze([
  { kind: 'line', min: 0, series: [{ name: 'european_aqi', area: true }] },
  { kind: 'line', min: 0, series: [{ name: 'pm2_5', area: true }, { name: 'pm10', dashed: true }] }
]);
