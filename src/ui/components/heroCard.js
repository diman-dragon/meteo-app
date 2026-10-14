import { el } from '../el.js';
import { weatherIcon } from '../icons/weatherIcon.js';
import { skyClass } from '../../domain/skyClass.js';
import { tWmo } from '../../i18n/tWmo.js';
import { t } from '../../i18n/t.js';

export function heroCard(forecast) {
  const { current: c, daily } = forecast;
  const hero = el('section', `hero ${skyClass(c.weather_code, c.is_day)}`);
  const top = el('div', 'hero-top');
  const icon = el('div', 'hero-icon');
  icon.append(weatherIcon(c.weather_code, c.is_day, 104));
  top.append(icon, el('div', 'hero-temp', `${Math.round(c.temperature_2m)}°`));
  hero.append(
    top,
    el('div', 'hero-desc', tWmo(c.weather_code)),
    el('div', 'hero-sub', t('feelsLike', { value: `${Math.round(c.apparent_temperature)}°` })),
    el('div', 'hero-sub', t('range', { max: Math.round(daily.temperature_2m_max[0]), min: Math.round(daily.temperature_2m_min[0]) }))
  );
  return hero;
}
