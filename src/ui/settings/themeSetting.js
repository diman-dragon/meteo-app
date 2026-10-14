import { choiceGroup } from '../components/choiceGroup.js';
import { card } from '../components/card.js';
import { appState } from '../../state/appState.js';
import { themeIds } from '../../config/themeIds.js';
import { changeTheme } from '../../flows/changeTheme.js';
import { t } from '../../i18n/t.js';

export function themeSetting() {
  const options = themeIds.map((id) => ({ id, label: t(`theme.${id}`) }));
  return card(t('theme'), choiceGroup(options, appState.settings.theme, changeTheme));
}
