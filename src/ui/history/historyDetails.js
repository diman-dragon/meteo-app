import { card } from '../components/card.js';
import { metricList } from '../components/metricList.js';
import { historyDailyVars } from '../../config/historyDailyVars.js';
import { valuesAt } from '../../domain/valuesAt.js';
import { t } from '../../i18n/t.js';

export function historyDetails(data) {
  return card(t('details.all'), metricList(valuesAt(data.daily, 0), data.daily_units, historyDailyVars));
}
