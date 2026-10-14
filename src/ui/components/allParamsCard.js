import { el } from '../el.js';
import { metricList } from './metricList.js';
import { currentVars } from '../../config/currentVars.js';
import { t } from '../../i18n/t.js';

export function allParamsCard(forecast) {
  const details = el('details', 'card');
  details.append(
    el('summary', 'card-title summary', t('details.all')),
    metricList(forecast.current, forecast.current_units, currentVars)
  );
  return details;
}
