export const dailyCharts = Object.freeze([
  { kind: 'line', series: [{ name: 'temperature_2m_max', area: true }, { name: 'temperature_2m_min', area: true }] },
  { kind: 'bar', min: 0, series: [{ name: 'precipitation_sum' }] },
  { kind: 'line', min: 0, series: [{ name: 'wind_speed_10m_max', area: true }, { name: 'wind_gusts_10m_max', dashed: true }] },
  { kind: 'bar', min: 0, series: [{ name: 'uv_index_max' }] }
]);
