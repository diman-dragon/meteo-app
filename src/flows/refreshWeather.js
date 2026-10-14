import { appState } from '../state/appState.js';
import { fetchForecast } from '../api/fetchForecast.js';
import { fetchAirQuality } from '../api/fetchAirQuality.js';
import { saveWeather } from '../storage/saveWeather.js';
import { getConnectionType } from '../network/getConnectionType.js';
import { ensureCellularConsent } from './ensureCellularConsent.js';
import { showToast } from '../ui/toast/showToast.js';
import { renderApp } from '../ui/renderApp.js';
import { t } from '../i18n/t.js';

export async function refreshWeather() {
  const place = appState.place;
  if (appState.busy || !place) return;
  if ((await getConnectionType()) === 'none') return showToast(t('offline'));
  if (!(await ensureCellularConsent())) return;
  appState.busy = true;
  renderApp(true);
  try {
    const [forecast, air] = await Promise.all([fetchForecast(place), fetchAirQuality(place).catch(() => null)]);
    appState.weather = { fetchedAt: Date.now(), forecast, air };
    await saveWeather(appState.weather);
  } catch (error) {
    showToast(t('error', { message: error.message }));
  } finally {
    appState.busy = false;
    renderApp(true);
  }
}
