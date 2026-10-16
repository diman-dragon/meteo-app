import { el } from '../el.js';
import { choiceGroup } from '../components/choiceGroup.js';
import { appState } from '../../state/appState.js';
import { unitPresets } from '../../config/unitPresets.js';
import { matchingPreset } from '../../domain/matchingPreset.js';
import { applyUnitPreset } from '../../flows/applyUnitPreset.js';
import { t } from '../../i18n/t.js';

export function presetGroup() {
  const group = el('div', 'unit-group');
  const options = unitPresets.map((preset) => ({ id: preset.id, label: t(`preset.${preset.id}`) }));
  const active = matchingPreset(appState.settings.units);
  group.append(el('div', 'unit-label', `${t('units.preset')}${active ? '' : ` · ${t('preset.custom')}`}`), choiceGroup(options, active, applyUnitPreset));
  return group;
}
