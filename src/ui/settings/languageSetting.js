import { choiceGroup } from '../components/choiceGroup.js';
import { card } from '../components/card.js';
import { appState } from '../../state/appState.js';
import { languageIds } from '../../config/languageIds.js';
import { changeLanguage } from '../../flows/changeLanguage.js';
import { t } from '../../i18n/t.js';

export function languageSetting() {
  const options = languageIds.map((id) => ({ id, label: t(`lang.${id}`) }));
  return card(t('language'), choiceGroup(options, appState.settings.language, changeLanguage));
}
