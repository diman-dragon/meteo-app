import { card } from '../components/card.js';
import { metricRow } from '../components/metricRow.js';
import { privacyLink } from './privacyLink.js';
import { appVersion } from '../../config/appVersion.js';
import { t } from '../../i18n/t.js';

export function versionInfo() {
  return card(t('version'), metricRow(t('version'), appVersion), privacyLink());
}
