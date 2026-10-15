import { findHourStart } from './findHourStart.js';
import { presentValues as present } from './presentValues.js';

export function summarize12h(forecast, hours = 12) {
  const { hourly, current } = forecast;
  const start = findHourStart(hourly.time, current.time);
  const end = Math.min(start + hours + 1, hourly.time.length);
  const take = (name) => hourly[name].slice(start, end);
  const [temps, wind, gusts, rain] = ['temperature_2m', 'wind_speed_10m', 'wind_gusts_10m', 'precipitation'].map(take);
  const rainIndex = rain.findIndex((value) => value != null && value >= 0.1);
  return {
    start, end, temps, wind, gusts, rain, rainIndex,
    tempMin: Math.min(...present(temps)), tempMax: Math.max(...present(temps)),
    gustMax: Math.max(0, ...present(gusts)),
    rainSum: Math.round(present(rain).reduce((sum, value) => sum + value, 0) * 10) / 10,
    rainTime: rainIndex < 0 ? null : hourly.time[start + rainIndex]
  };
}
