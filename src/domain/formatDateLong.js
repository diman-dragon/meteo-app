import { currentLanguage } from '../i18n/currentLanguage.js';

export function formatDateLong(isoDate) {
  return new Intl.DateTimeFormat(currentLanguage(), {
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC'
  }).format(new Date(`${isoDate}T00:00:00Z`));
}
