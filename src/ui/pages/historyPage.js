import { el } from '../el.js';
import { historyForm } from '../history/historyForm.js';
import { historyView } from '../history/historyView.js';
import { attributionFooter } from '../components/attributionFooter.js';
import { appState } from '../../state/appState.js';
import { t } from '../../i18n/t.js';

export function historyPage() {
  const page = el('section', 'page scroller');
  page.append(historyForm());
  page.append(appState.historyData ? historyView(appState.historyData) : el('p', 'hint hist-hint', t('history.hint')));
  page.append(attributionFooter());
  return page;
}
