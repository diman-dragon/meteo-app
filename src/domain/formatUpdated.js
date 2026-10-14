import { currentLanguage } from '../i18n/currentLanguage.js';

export function formatUpdated(timestamp) {
  return new Intl.DateTimeFormat(currentLanguage(), {
    day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit'
  }).format(new Date(timestamp));
}
