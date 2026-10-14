import { el } from '../el.js';
import { iconButton } from '../components/iconButton.js';
import { headerBar } from '../components/headerBar.js';
import { backIcon } from '../icons/backIcon.js';
import { searchForm } from '../place/searchForm.js';
import { manualCoordsForm } from '../place/manualCoordsForm.js';
import { goBack } from '../../navigation/goBack.js';
import { t } from '../../i18n/t.js';

export function placeScreen() {
  const screen = el('main', 'screen');
  const body = el('div', 'scroller');
  body.append(searchForm(), manualCoordsForm());
  screen.append(headerBar({ title: t('place'), leading: iconButton(backIcon(), t('back'), goBack) }), body);
  return screen;
}
