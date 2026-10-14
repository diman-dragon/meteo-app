import { el } from '../el.js';
import { button } from '../components/button.js';
import { headerBar } from '../components/headerBar.js';
import { themeSetting } from '../settings/themeSetting.js';
import { languageSetting } from '../settings/languageSetting.js';
import { placeSetting } from '../settings/placeSetting.js';
import { versionInfo } from '../settings/versionInfo.js';
import { goBack } from '../../navigation/goBack.js';
import { t } from '../../i18n/t.js';

export function settingsScreen() {
  const screen = el('main', 'screen');
  const back = button(t('back'), goBack, 'ghost');
  screen.append(headerBar(t('settings'), back), placeSetting(), themeSetting(), languageSetting(), versionInfo());
  return screen;
}
