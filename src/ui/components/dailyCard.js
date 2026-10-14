import { card } from './card.js';
import { dayRow } from './dayRow.js';
import { dailyExtent } from '../../domain/dailyExtent.js';
import { t } from '../../i18n/t.js';

export function dailyCard(forecast) {
  const extent = dailyExtent(forecast.daily);
  const rows = forecast.daily.time.map((_, index) => dayRow(forecast, index, extent));
  return card(t('section.daily'), ...rows);
}
