import { topicPage } from './topicPage.js';
import { bigValueCard } from '../components/bigValueCard.js';
import { formatValue } from '../../domain/formatValue.js';
import { tVar } from '../../i18n/tVar.js';
import { t } from '../../i18n/t.js';

export function atmospherePage({ forecast }) {
  const { current: c, current_units: u } = forecast;
  const value = formatValue('pressure_msl', Math.round(c.pressure_msl), u.pressure_msl);
  const sub = t('humidityLine', { value: formatValue('relative_humidity_2m', c.relative_humidity_2m, u.relative_humidity_2m) });
  return topicPage('atmosphere', forecast, bigValueCard(tVar('pressure_msl'), value, sub));
}
