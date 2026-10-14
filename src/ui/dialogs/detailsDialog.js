import { el } from '../el.js';
import { button } from '../components/button.js';
import { t } from '../../i18n/t.js';

export function detailsDialog(title, content) {
  const dialog = el('dialog', 'dialog');
  const actions = el('div', 'dialog-actions');
  actions.append(button(t('close'), () => dialog.close(), 'primary'));
  dialog.append(el('h2', 'dialog-title', title), content, actions);
  dialog.addEventListener('close', () => dialog.remove());
  document.body.append(dialog);
  dialog.showModal();
}
