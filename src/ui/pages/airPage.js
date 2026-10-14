import { el } from '../el.js';
import { aqiGauge } from '../components/aqiGauge.js';
import { airCard } from '../components/airCard.js';
import { pollenCard } from '../components/pollenCard.js';
import { hasPollenData } from '../components/hasPollenData.js';
import { emptyState } from '../components/emptyState.js';
import { attributionFooter } from '../components/attributionFooter.js';
import { t } from '../../i18n/t.js';

export function airPage(weather) {
  const page = el('section', 'page scroller');
  const air = weather.air;
  if (!air?.current) return (page.append(emptyState(t('air.unavailable')), attributionFooter()), page);
  page.append(aqiGauge(air), airCard(air));
  if (hasPollenData(air)) page.append(pollenCard(air));
  page.append(attributionFooter());
  return page;
}
