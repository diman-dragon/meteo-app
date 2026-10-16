import { el } from '../el.js';
import { button } from '../components/button.js';
import { card } from '../components/card.js';
import { quickDates } from './quickDates.js';
import { showToast } from '../toast/showToast.js';
import { loadHistory } from '../../flows/loadHistory.js';
import { appState } from '../../state/appState.js';
import { todayIso } from '../../domain/todayIso.js';
import { shiftDate } from '../../domain/shiftDate.js';
import { historyMinDate } from '../../config/historyMinDate.js';
import { t } from '../../i18n/t.js';

export function historyForm() {
  const form = el('form', 'form');
  const input = el('input', 'input');
  input.type = 'date';
  input.min = historyMinDate;
  input.max = shiftDate(todayIso(), -1);
  input.value = appState.historyDate ?? input.max;
  const submit = button(appState.historyBusy ? t('history.loading') : t('history.show'), null, 'primary', 'submit');
  submit.disabled = appState.historyBusy;
  form.append(input, submit, quickDates());
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const valid = input.value >= input.min && input.value <= input.max;
    if (valid) loadHistory(input.value); else showToast(t('history.invalid'));
  });
  return card(t('history.pick'), form);
}
