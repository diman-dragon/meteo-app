import { el } from '../el.js';
import { button } from '../components/button.js';
import { headerBar } from '../components/headerBar.js';
import { emptyState } from '../components/emptyState.js';
import { updatedBar } from '../components/updatedBar.js';
import { weatherCards } from '../components/weatherCards.js';
import { appState } from '../../state/appState.js';
import { goTo } from '../../navigation/goTo.js';
import { t } from '../../i18n/t.js';

export function mainScreen() {
  const screen = el('main', 'screen');
  const gear = button(t('settings'), () => goTo('settings'), 'ghost');
  screen.append(headerBar(appState.place?.name ?? t('app.title'), null, gear));
  if (!appState.place) {
    screen.append(emptyState(t('noPlace'), t('choosePlace'), () => goTo('place')));
    return screen;
  }
  screen.append(updatedBar(appState.weather));
  screen.append(appState.weather ? weatherCards(appState.weather) : emptyState(t('neverUpdated')));
  return screen;
}
