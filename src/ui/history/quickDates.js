import { el } from '../el.js';
import { button } from '../components/button.js';
import { loadHistory } from '../../flows/loadHistory.js';
import { todayIso } from '../../domain/todayIso.js';
import { shiftDate } from '../../domain/shiftDate.js';
import { t } from '../../i18n/t.js';

export function quickDates() {
  const row = el('div', 'quick-dates');
  const today = todayIso();
  const options = [['history.yesterday', -1], ['history.week', -7], ['history.year', -365]];
  for (const [key, days] of options) row.append(button(t(key), () => loadHistory(shiftDate(today, days)), 'ghost'));
  return row;
}
