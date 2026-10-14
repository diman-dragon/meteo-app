import { button } from './button.js';
import { appState } from '../../state/appState.js';
import { refreshWeather } from '../../flows/refreshWeather.js';
import { t } from '../../i18n/t.js';

export function refreshButton() {
  const node = button(appState.busy ? t('refreshing') : t('refresh'), refreshWeather, 'primary');
  node.disabled = appState.busy;
  return node;
}
