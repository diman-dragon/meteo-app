import { el } from '../el.js';
import { statCard } from '../components/statCard.js';
import { sparkline } from '../components/sparkline.js';
import { sparkBars } from '../components/sparkBars.js';
import { aqiBar } from '../components/aqiBar.js';
import { windArrowIcon } from '../icons/windArrowIcon.js';
import { average } from '../../domain/average.js';
import { aqiBand } from '../../domain/aqiBand.js';
import { aqiColors } from '../../config/aqiColors.js';
import { formatTemp } from '../../domain/formatTemp.js';
import { formatValue } from '../../domain/formatValue.js';
import { formatClock } from '../../domain/formatClock.js';
import { formatDuration } from '../../domain/formatDuration.js';
import { tVar } from '../../i18n/tVar.js';
import { t } from '../../i18n/t.js';

export function historyStats({ data, air }) {
  const { daily: d, daily_units: du, hourly: h, hourly_units: hu } = data;
  const aqi = average(air?.hourly?.european_aqi ?? []);
  const band = aqi == null ? 0 : aqiBand(aqi);
  const grid = el('div', 'stats');
  grid.append(
    statCard({ label: tVar('temperature_2m_mean'), value: formatTemp(d.temperature_2m_mean[0]), sub: t('hist.range', { min: formatTemp(d.temperature_2m_min[0]), max: formatTemp(d.temperature_2m_max[0]) }), spark: sparkline(h.temperature_2m, 'var(--c-temp)', 'hs-t') }),
    statCard({ label: tVar('precipitation_sum'), value: formatValue('precipitation_sum', d.precipitation_sum[0], du.precipitation_sum), sub: t('hist.rainHours', { n: d.precipitation_hours[0] }), spark: sparkBars(h.precipitation, 'var(--c-rain)') }),
    statCard({ label: tVar('wind_speed_10m_max'), value: formatValue('wind_speed_10m_max', d.wind_speed_10m_max[0], du.wind_speed_10m_max), extra: windArrowIcon(d.wind_direction_10m_dominant[0], 22), sub: t('sum.gusts', { value: formatValue('wind_gusts_10m_max', d.wind_gusts_10m_max[0], du.wind_gusts_10m_max) }), spark: sparkline(h.wind_speed_10m, 'var(--c-wind)', 'hs-w') }),
    statCard({ label: tVar('european_aqi'), value: aqi == null ? '—' : String(Math.round(aqi)), color: aqiColors[band], sub: aqi == null ? t('history.noAir') : t(`aqi.${band}`), spark: aqi == null ? null : aqiBar(aqi) }),
    statCard({ label: tVar('pressure_msl'), value: formatValue('pressure_msl', average(h.pressure_msl), hu.pressure_msl), sub: t('humidityLine', { value: formatValue('relative_humidity_2m', average(h.relative_humidity_2m), hu.relative_humidity_2m) }), spark: sparkline(h.pressure_msl, 'var(--c-pressure)', 'hs-p') }),
    statCard({ label: tVar('daylight_duration'), value: formatDuration(d.daylight_duration[0]), sub: t('sun.times', { rise: formatClock(d.sunrise[0]), set: formatClock(d.sunset[0]) }) })
  );
  return grid;
}
