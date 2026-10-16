import { lineDef as line } from '../domain/lineDef.js';
import { barDef as bar } from '../domain/barDef.js';

export const topicCharts = Object.freeze({
  temperature: {
    hourly: [line({ name: 'temperature_2m', area: true }, { name: 'apparent_temperature', dashed: true }),
      line({ name: 'dew_point_2m', area: true }), line({ name: 'temperature_80m', area: true })],
    daily: [line({ name: 'temperature_2m_max', area: true }, { name: 'temperature_2m_min', area: true }),
      line({ name: 'apparent_temperature_max' }, { name: 'apparent_temperature_min', dashed: true })]
  },
  precipitation: {
    hourly: [bar('precipitation'), { ...line({ name: 'precipitation_probability', area: true }), min: 0, max: 100 },
      bar('snowfall'), line({ name: 'snow_depth', area: true })],
    daily: [bar('precipitation_sum'), bar('precipitation_hours')]
  },
  wind: {
    hourly: [{ ...line({ name: 'wind_speed_10m', area: true }, { name: 'wind_gusts_10m', dashed: true }), min: 0 },
      { ...line({ name: 'wind_speed_10m' }, { name: 'wind_speed_80m' }, { name: 'wind_speed_120m' }, { name: 'wind_speed_180m' }), min: 0 }],
    daily: [{ ...line({ name: 'wind_speed_10m_max', area: true }, { name: 'wind_gusts_10m_max', dashed: true }), min: 0 }]
  },
  atmosphere: {
    hourly: [{ ...line({ name: 'relative_humidity_2m', area: true }, { name: 'cloud_cover', dashed: true }), min: 0, max: 100 },
      line({ name: 'pressure_msl', area: true }),
      { ...line({ name: 'cloud_cover_low' }, { name: 'cloud_cover_mid' }, { name: 'cloud_cover_high' }), min: 0, max: 100 },
      { ...line({ name: 'visibility', area: true }), min: 0 }, bar('cape')],
    daily: []
  },
  sun: {
    hourly: [bar('uv_index'),
      { ...line({ name: 'shortwave_radiation', area: true }, { name: 'direct_radiation' }, { name: 'diffuse_radiation' }), min: 0 }],
    daily: [bar('uv_index_max'), bar('shortwave_radiation_sum')]
  },
  daily: {
    hourly: [],
    daily: [line({ name: 'temperature_2m_max', area: true }, { name: 'temperature_2m_min', area: true }),
      bar('precipitation_sum'), { ...line({ name: 'wind_speed_10m_max', area: true }, { name: 'wind_gusts_10m_max', dashed: true }), min: 0 },
      bar('uv_index_max')]
  }
});
