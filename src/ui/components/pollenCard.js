import { card } from './card.js';
import { metricList } from './metricList.js';
import { pollenVars } from '../../config/pollenVars.js';
import { t } from '../../i18n/t.js';

export function pollenCard(air) {
  return card(t('section.pollen'), metricList(air.current, air.current_units, pollenVars));
}
