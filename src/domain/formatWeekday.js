import { currentLanguage } from '../i18n/currentLanguage.js';

export function formatWeekday(isoDate) {
  return new Intl.DateTimeFormat(currentLanguage(), { weekday: 'short', timeZone: 'UTC' })
    .format(new Date(`${isoDate}T00:00:00Z`));
}
