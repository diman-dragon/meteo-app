import { Preferences } from '@capacitor/preferences';

export async function kvGet(key) {
  const { value } = await Preferences.get({ key });
  return value;
}
