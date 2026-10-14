import { el } from '../el.js';
import { privacyPolicyUrl } from '../../config/privacyPolicyUrl.js';
import { t } from '../../i18n/t.js';

export function privacyLink() {
  const link = el('a', 'link', t('privacy'));
  link.href = privacyPolicyUrl;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  return link;
}
