import { el } from '../el.js';
import { t } from '../../i18n/t.js';

export function attributionFooter() {
  const footer = el('footer', 'footer');
  const link = el('a', 'link', t('attribution'));
  link.href = 'https://open-meteo.com/';
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  footer.append(link);
  return footer;
}
