import { el } from '../el.js';
import { card } from '../components/card.js';
import { hourStrip } from '../components/hourStrip.js';
import { attributionFooter } from '../components/attributionFooter.js';
import { hourlyChartCards } from '../charts/hourlyChartCards.js';
import { findHourStart } from '../../domain/findHourStart.js';
import { hourlyStripCount } from '../../config/hourlyStripCount.js';
import { t } from '../../i18n/t.js';

export function hourlyPage(weather) {
  const { forecast } = weather;
  const { hourly, hourly_units: units, current } = forecast;
  const start = findHourStart(hourly.time, current.time);
  const page = el('section', 'page scroller');
  page.append(card(t('section.hourly'), hourStrip(hourly, units, start, hourlyStripCount)), ...hourlyChartCards(forecast), attributionFooter());
  return page;
}
