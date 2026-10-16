import { topicPage } from './topicPage.js';
import { bigValueCard } from '../components/bigValueCard.js';
import { hourStripCard } from '../components/hourStripCard.js';
import { tVar } from '../../i18n/tVar.js';
import { t } from '../../i18n/t.js';

export function temperaturePage({ forecast }) {
  const c = forecast.current;
  const hero = bigValueCard(tVar('temperature_2m'), `${Math.round(c.temperature_2m)}°`, t('feelsLike', { value: `${Math.round(c.apparent_temperature)}°` }));
  return topicPage('temperature', forecast, hero, hourStripCard(forecast));
}
