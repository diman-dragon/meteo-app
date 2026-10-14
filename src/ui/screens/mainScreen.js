import { el } from '../el.js';
import { button } from '../components/button.js';
import { emptyState } from '../components/emptyState.js';
import { refreshButton } from '../components/refreshButton.js';
import { mainHeader } from './mainHeader.js';
import { weatherPager } from './weatherPager.js';
import { appState } from '../../state/appState.js';
import { goTo } from '../../navigation/goTo.js';
import { t } from '../../i18n/t.js';

export function mainScreen() {
  const screen = el('main', 'screen');
  screen.append(mainHeader());
  if (!appState.place) {
    screen.append(emptyState(t('noPlace'), button(t('choosePlace'), () => goTo('place'), 'primary')));
  } else if (!appState.weather) {
    screen.append(emptyState(t('neverUpdated'), refreshButton('primary')));
  } else {
    screen.append(weatherPager(appState.weather));
  }
  return screen;
}
