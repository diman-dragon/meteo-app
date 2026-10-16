import { appState } from '../state/appState.js';
import { saveSettings } from '../storage/saveSettings.js';
import { unitPresets } from '../config/unitPresets.js';
import { renderApp } from '../ui/renderApp.js';

export async function applyUnitPreset(presetId) {
  const preset = unitPresets.find((item) => item.id === presetId);
  if (!preset) return;
  appState.settings = { ...appState.settings, units: { ...preset.units } };
  renderApp(true);
  await saveSettings(appState.settings);
}
