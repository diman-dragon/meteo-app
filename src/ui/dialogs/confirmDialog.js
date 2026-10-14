import { el } from '../el.js';
import { button } from '../components/button.js';

export function confirmDialog(title, text, okLabel, cancelLabel) {
  return new Promise((resolve) => {
    const dialog = el('dialog', 'dialog');
    const finish = (answer) => { dialog.close(); dialog.remove(); resolve(answer); };
    const actions = el('div', 'dialog-actions');
    actions.append(button(cancelLabel, () => finish(false), 'ghost'), button(okLabel, () => finish(true), 'primary'));
    dialog.append(el('h2', 'dialog-title', title), el('p', '', text), actions);
    dialog.addEventListener('cancel', (event) => { event.preventDefault(); finish(false); });
    document.body.append(dialog);
    dialog.showModal();
  });
}
