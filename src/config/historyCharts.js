import { lineDef as line } from '../domain/lineDef.js';

export const historyCharts = Object.freeze([
  line({ name: 'temperature_2m', area: true }, { name: 'apparent_temperature', dashed: true }),
  { kind: 'bar', min: 0, series: [{ name: 'precipitation' }] },
  { ...line({ name: 'wind_speed_10m', area: true }, { name: 'wind_gusts_10m', dashed: true }), min: 0 },
  { ...line({ name: 'relative_humidity_2m', area: true }, { name: 'cloud_cover', dashed: true }), min: 0, max: 100 },
  line({ name: 'pressure_msl', area: true }),
  { ...line({ name: 'shortwave_radiation', area: true }, { name: 'direct_radiation' }, { name: 'diffuse_radiation' }), min: 0 }
]);
