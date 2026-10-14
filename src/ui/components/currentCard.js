import { el } from '../el.js';
import { card } from './card.js';
import { metricList } from './metricList.js';
import { currentVars } from '../../config/currentVars.js';
import { weatherIcon } from '../../domain/weatherIcon.js';
import { tWmo } from '../../i18n/tWmo.js';
import { t } from '../../i18n/t.js';

export function currentCard(forecast) {
  const { current, current_units: units } = forecast;
  const hero = el('div', 'hero');
  const text = el('div', 'hero-text');
  text.append(
    el('div', '', tWmo(current.weather_code)),
    el('div', '', t('feelsLike', { value: `${Math.round(current.apparent_temperature)}°` }))
  );
  hero.append(
    el('span', 'hero-icon', weatherIcon(current.weather_code, current.is_day)),
    el('span', 'hero-temp', `${Math.round(current.temperature_2m)}°`),
    text
  );
  return card(t('section.current'), hero, metricList(current, units, currentVars));
}
