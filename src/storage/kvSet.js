import { Preferences } from '@capacitor/preferences';

export function kvSet(key, value) {
  return Preferences.set({ key, value });
}
