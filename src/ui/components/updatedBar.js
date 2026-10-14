import { el } from '../el.js';
import { refreshButton } from './refreshButton.js';
import { formatUpdated } from '../../domain/formatUpdated.js';
import { t } from '../../i18n/t.js';

export function updatedBar(weather) {
  const bar = el('div', 'updated-bar');
  const label = weather ? t('updated', { time: formatUpdated(weather.fetchedAt) }) : '';
  bar.append(el('span', 'hint', label), refreshButton());
  return bar;
}
