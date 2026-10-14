import { t } from '../i18n/t.js';

export function compassDirection(degrees) {
  const index = Math.round((((degrees % 360) + 360) % 360) / 45) % 8;
  return t(`compass${index}`);
}
