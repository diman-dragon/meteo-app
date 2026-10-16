import { appState } from '../state/appState.js';
import { fetchHistory } from '../api/fetchHistory.js';
import { fetchHistoryAir } from '../api/fetchHistoryAir.js';
import { getConnectionType } from '../network/getConnectionType.js';
import { ensureCellularConsent } from './ensureCellularConsent.js';
import { isRecentDate } from '../domain/isRecentDate.js';
import { showToast } from '../ui/toast/showToast.js';
import { renderApp } from '../ui/renderApp.js';
import { t } from '../i18n/t.js';

export async function loadHistory(date) {
  const place = appState.place;
  if (appState.historyBusy || !place) return;
  if ((await getConnectionType()) === 'none') return showToast(t('offline'));
  if (!(await ensureCellularConsent())) return;
  appState.historyBusy = true;
  appState.historyDate = date;
  renderApp(true);
  try {
    const air = isRecentDate(date) ? fetchHistoryAir(place, date).catch(() => null) : null;
    appState.historyData = { date, data: await fetchHistory(place, date), air: await air };
  } catch (error) {
    showToast(t('error', { message: error.message }));
  } finally {
    appState.historyBusy = false;
    renderApp(true);
  }
}
