export const hourlyCharts = Object.freeze([
  { kind: 'line', series: [{ name: 'temperature_2m', area: true }, { name: 'apparent_temperature', dashed: true }] },
  { kind: 'bar', min: 0, series: [{ name: 'precipitation' }] },
  { kind: 'line', min: 0, max: 100, series: [{ name: 'precipitation_probability', area: true }] },
  { kind: 'line', min: 0, series: [{ name: 'wind_speed_10m', area: true }, { name: 'wind_gusts_10m', dashed: true }] },
  { kind: 'line', min: 0, max: 100, series: [{ name: 'relative_humidity_2m', area: true }, { name: 'cloud_cover', dashed: true }] },
  { kind: 'line', series: [{ name: 'pressure_msl', area: true }] },
  { kind: 'bar', min: 0, series: [{ name: 'uv_index' }] }
]);
