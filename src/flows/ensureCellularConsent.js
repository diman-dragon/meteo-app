import { getConnectionType } from '../network/getConnectionType.js';
import { confirmDialog } from '../ui/dialogs/confirmDialog.js';
import { t } from '../i18n/t.js';

export async function ensureCellularConsent() {
  if ((await getConnectionType()) !== 'cellular') return true;
  return confirmDialog(t('cellular.title'), t('cellular.text'), t('continue'), t('cancel'));
}
