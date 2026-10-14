import { SystemBars, SystemBarsStyle } from '@capacitor/core';

export function applySystemBars(themeId) {
  const style = themeId === 'amoled' ? SystemBarsStyle.Dark : SystemBarsStyle.Light;
  return SystemBars.setStyle({ style }).catch(() => {});
}
