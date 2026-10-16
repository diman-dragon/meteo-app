import { el } from '../el.js';
import { aqiGauge } from '../components/aqiGauge.js';
import { airCard } from '../components/airCard.js';
import { pollenCard } from '../components/pollenCard.js';
import { hasPollenData } from '../components/hasPollenData.js';
import { emptyState } from '../components/emptyState.js';
import { attributionFooter } from '../components/attributionFooter.js';
import { airChartCards } from '../charts/airChartCards.js';
import { findHourStart } from '../../domain/findHourStart.js';
import { t } from '../../i18n/t.js';

export function airPage({ forecast, air }) {
  const page = el('section', 'page scroller');
  if (!air?.current) return (page.append(emptyState(t('air.unavailable')), attributionFooter()), page);
  const start = air.hourly ? findHourStart(air.hourly.time, forecast.current.time) : 0;
  page.append(aqiGauge(air), ...airChartCards(air, start, 48), airCard(air));
  if (hasPollenData(air)) page.append(pollenCard(air));
  page.append(attributionFooter());
  return page;
}
