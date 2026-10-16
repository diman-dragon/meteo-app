import { el } from '../el.js';
import { choiceGroup } from '../components/choiceGroup.js';
import { appState } from '../../state/appState.js';
import { unitOptions } from '../../config/unitOptions.js';
import { changeUnit } from '../../flows/changeUnit.js';
import { t } from '../../i18n/t.js';

export function unitGroup(settingKey) {
  const group = el('div', 'unit-group');
  const options = unitOptions[settingKey].map((id) => ({ id, label: t(`u.${id}`) }));
  group.append(el('div', 'unit-label', t(`units.${settingKey}`)), choiceGroup(options, appState.settings.units[settingKey], (id) => changeUnit(settingKey, id)));
  return group;
}
