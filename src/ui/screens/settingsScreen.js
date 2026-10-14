import { el } from '../el.js';
import { iconButton } from '../components/iconButton.js';
import { headerBar } from '../components/headerBar.js';
import { backIcon } from '../icons/backIcon.js';
import { themeSetting } from '../settings/themeSetting.js';
import { languageSetting } from '../settings/languageSetting.js';
import { placeSetting } from '../settings/placeSetting.js';
import { versionInfo } from '../settings/versionInfo.js';
import { attributionFooter } from '../components/attributionFooter.js';
import { goBack } from '../../navigation/goBack.js';
import { t } from '../../i18n/t.js';

export function settingsScreen() {
  const screen = el('main', 'screen');
  const body = el('div', 'scroller');
  body.append(placeSetting(), themeSetting(), languageSetting(), versionInfo(), attributionFooter());
  screen.append(headerBar({ title: t('settings'), leading: iconButton(backIcon(), t('back'), goBack) }), body);
  return screen;
}
