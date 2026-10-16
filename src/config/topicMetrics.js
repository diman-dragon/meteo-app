export const topicMetrics = Object.freeze({
  temperature: {
    hourly: ['temperature_2m', 'apparent_temperature', 'dew_point_2m', 'temperature_80m', 'soil_temperature_0cm', 'soil_temperature_6cm'],
    daily: ['temperature_2m_max', 'temperature_2m_min', 'apparent_temperature_max', 'apparent_temperature_min']
  },
  precipitation: {
    hourly: ['precipitation', 'rain', 'showers', 'snowfall', 'snow_depth', 'precipitation_probability'],
    daily: ['precipitation_sum', 'rain_sum', 'showers_sum', 'snowfall_sum', 'precipitation_hours', 'precipitation_probability_max']
  },
  wind: {
    hourly: ['wind_speed_10m', 'wind_speed_80m', 'wind_speed_120m', 'wind_speed_180m', 'wind_direction_10m', 'wind_gusts_10m'],
    daily: ['wind_speed_10m_max', 'wind_gusts_10m_max', 'wind_direction_10m_dominant']
  },
  atmosphere: {
    hourly: ['relative_humidity_2m', 'pressure_msl', 'surface_pressure', 'cloud_cover', 'cloud_cover_low', 'cloud_cover_mid',
      'cloud_cover_high', 'visibility', 'vapour_pressure_deficit', 'cape', 'freezing_level_height', 'soil_moisture_0_to_1cm',
      'evapotranspiration'],
    daily: ['et0_fao_evapotranspiration']
  },
  sun: {
    hourly: ['uv_index', 'uv_index_clear_sky', 'shortwave_radiation', 'direct_radiation', 'diffuse_radiation', 'sunshine_duration', 'is_day'],
    daily: ['sunrise', 'sunset', 'daylight_duration', 'sunshine_duration', 'uv_index_max', 'uv_index_clear_sky_max', 'shortwave_radiation_sum']
  }
});
