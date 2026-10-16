import { card } from '../components/card.js';
import { presetGroup } from './presetGroup.js';
import { unitGroup } from './unitGroup.js';
import { unitOptions } from '../../config/unitOptions.js';
import { t } from '../../i18n/t.js';

export function unitsSetting() {
  return card(t('units.title'), presetGroup(), ...Object.keys(unitOptions).map(unitGroup));
}
