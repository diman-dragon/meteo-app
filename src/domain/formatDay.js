import { currentLanguage } from '../i18n/currentLanguage.js';

export function formatDay(isoDate) {
  return new Intl.DateTimeFormat(currentLanguage(), {
    weekday: 'short', day: 'numeric', month: 'short', timeZone: 'UTC'
  }).format(new Date(`${isoDate}T00:00:00Z`));
}
