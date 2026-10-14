import { card } from './card.js';
import { dayRow } from './dayRow.js';
import { t } from '../../i18n/t.js';

export function dailyCard(forecast) {
  const rows = forecast.daily.time.map((_, index) => dayRow(forecast, index));
  return card(t('section.daily'), ...rows);
}
