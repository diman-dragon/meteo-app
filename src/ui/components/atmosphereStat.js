import { statCard } from './statCard.js';
import { sparkline } from './sparkline.js';
import { formatValue } from '../../domain/formatValue.js';
import { tVar } from '../../i18n/tVar.js';
import { t } from '../../i18n/t.js';

export function atmosphereStat(forecast, summary) {
  const { current: c, current_units: u } = forecast;
  return statCard({
    label: tVar('pressure_msl'), page: 'atmosphere',
    value: formatValue('pressure_msl', Math.round(c.pressure_msl), u.pressure_msl),
    sub: t('humidityLine', { value: formatValue('relative_humidity_2m', c.relative_humidity_2m, u.relative_humidity_2m) }),
    spark: sparkline(summary.pressure, 'var(--c-pressure)', 'sp-pres')
  });
}
