import { headerBar } from '../components/headerBar.js';
import { iconButton } from '../components/iconButton.js';
import { refreshButton } from '../components/refreshButton.js';
import { gearIcon } from '../icons/gearIcon.js';
import { appState } from '../../state/appState.js';
import { goTo } from '../../navigation/goTo.js';
import { formatUpdated } from '../../domain/formatUpdated.js';
import { t } from '../../i18n/t.js';

export function mainHeader() {
  const { place, weather } = appState;
  const trailing = [];
  if (place) trailing.push(refreshButton('icon'));
  trailing.push(iconButton(gearIcon(), t('settings'), () => goTo('settings')));
  return headerBar({
    title: place?.name ?? t('app.title'),
    subtitle: weather ? t('updated', { time: formatUpdated(weather.fetchedAt) }) : '',
    trailing
  });
}
