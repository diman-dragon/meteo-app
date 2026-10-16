import { el } from '../el.js';
import { weatherIcon } from '../icons/weatherIcon.js';
import { skyClass } from '../../domain/skyClass.js';
import { formatDateLong } from '../../domain/formatDateLong.js';
import { tWmo } from '../../i18n/tWmo.js';
import { t } from '../../i18n/t.js';

export function dayHero(history) {
  const { daily } = history.data;
  const code = daily.weather_code[0];
  const hero = el('section', `hero ${skyClass(code, 1)}`);
  const top = el('div', 'hero-top');
  const icon = el('div', 'hero-icon');
  icon.append(weatherIcon(code, 1, 104));
  top.append(icon, el('div', 'hero-temp', `${Math.round(daily.temperature_2m_mean[0])}°`));
  hero.append(
    el('div', 'hero-sub', formatDateLong(history.date)), top, el('div', 'hero-desc', tWmo(code)),
    el('div', 'hero-sub', t('hist.range', { min: Math.round(daily.temperature_2m_min[0]), max: Math.round(daily.temperature_2m_max[0]) }))
  );
  return hero;
}
