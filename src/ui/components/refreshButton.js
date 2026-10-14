import { button } from './button.js';
import { iconButton } from './iconButton.js';
import { refreshIcon } from '../icons/refreshIcon.js';
import { appState } from '../../state/appState.js';
import { refreshWeather } from '../../flows/refreshWeather.js';
import { t } from '../../i18n/t.js';

export function refreshButton(variant = 'icon') {
  const node = variant === 'icon'
    ? iconButton(refreshIcon(), t('refresh'), refreshWeather, appState.busy ? 'spin' : '')
    : button(appState.busy ? t('refreshing') : t('refresh'), refreshWeather, 'primary');
  node.disabled = appState.busy;
  return node;
}
