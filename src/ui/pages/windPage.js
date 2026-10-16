import { el } from '../el.js';
import { topicPage } from './topicPage.js';
import { card } from '../components/card.js';
import { windCompass } from '../components/windCompass.js';
import { formatValue } from '../../domain/formatValue.js';
import { tVar } from '../../i18n/tVar.js';

export function windPage({ forecast }) {
  const { current: c, current_units: u } = forecast;
  const speed = formatValue('wind_speed_10m', c.wind_speed_10m, u.wind_speed_10m);
  const dial = card(tVar('wind_direction_10m'), windCompass(c.wind_direction_10m), el('div', 'compass-speed', speed));
  return topicPage('wind', forecast, dial);
}
