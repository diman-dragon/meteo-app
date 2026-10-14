import { el } from '../el.js';
import { tile } from './tile.js';
import { windArrowIcon } from '../icons/windArrowIcon.js';
import { formatValue } from '../../domain/formatValue.js';
import { formatVisibility } from '../../domain/formatVisibility.js';
import { findHourStart } from '../../domain/findHourStart.js';
import { tVar } from '../../i18n/tVar.js';

export function currentTiles(forecast) {
  const { current: c, current_units: u, hourly, hourly_units: hu } = forecast;
  const i = findHourStart(hourly.time, c.time);
  const f = (name, value, unit) => formatValue(name, value, unit);
  const grid = el('div', 'tiles');
  grid.append(
    tile(tVar('wind_speed_10m'), f('wind_speed_10m', c.wind_speed_10m, u.wind_speed_10m), windArrowIcon(c.wind_direction_10m)),
    tile(tVar('relative_humidity_2m'), f('relative_humidity_2m', c.relative_humidity_2m, u.relative_humidity_2m)),
    tile(tVar('pressure_msl'), f('pressure_msl', c.pressure_msl, u.pressure_msl)),
    tile(tVar('uv_index'), f('uv_index', hourly.uv_index?.[i], '')),
    tile(tVar('visibility'), formatVisibility(hourly.visibility?.[i])),
    tile(tVar('dew_point_2m'), f('dew_point_2m', hourly.dew_point_2m?.[i], hu.dew_point_2m)),
    tile(tVar('cloud_cover'), f('cloud_cover', c.cloud_cover, u.cloud_cover)),
    tile(tVar('precipitation'), f('precipitation', c.precipitation, u.precipitation))
  );
  return grid;
}
