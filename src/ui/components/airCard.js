import { card } from './card.js';
import { metricList } from './metricList.js';
import { airQualityVars } from '../../config/airQualityVars.js';
import { t } from '../../i18n/t.js';

export function airCard(air) {
  return card(t('section.air'), metricList(air.current, air.current_units, airQualityVars));
}
