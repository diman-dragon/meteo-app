import { appState } from '../state/appState.js';
import { unitTargets } from '../config/unitTargets.js';
import { unitSettingKey } from '../config/unitSettingKey.js';
import { unitQuantity } from './unitQuantity.js';
import { t } from '../i18n/t.js';

export function convertValue(name, value, unit) {
  const quantity = unitQuantity(name, unit);
  if (!quantity) return { value, unit, decimals: 1 };
  const options = unitTargets[quantity];
  const target = options[appState.settings.units?.[unitSettingKey[quantity]]] ?? Object.values(options)[0];
  const shown = value == null ? null : value * target.factor + target.offset;
  return { value: shown, unit: t(target.label), decimals: target.decimals };
}
