import { el } from '../el.js';
import { button } from '../components/button.js';
import { headerBar } from '../components/headerBar.js';
import { searchForm } from '../place/searchForm.js';
import { manualCoordsForm } from '../place/manualCoordsForm.js';
import { goBack } from '../../navigation/goBack.js';
import { t } from '../../i18n/t.js';

export function placeScreen() {
  const screen = el('main', 'screen');
  const back = button(t('back'), goBack, 'ghost');
  screen.append(headerBar(t('place'), back), searchForm(), manualCoordsForm());
  return screen;
}
