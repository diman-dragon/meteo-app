import { t } from '../i18n/t.js';

export function formatVisibility(meters) {
  return meters == null ? '—' : `${(meters / 1000).toFixed(1)} ${t('unit.km')}`;
}
