import { SystemBars, SystemBarsStyle } from '@capacitor/core';

export function applySystemBars(themeId) {
  const style = themeId === 'dark' ? SystemBarsStyle.Dark : SystemBarsStyle.Light;
  return SystemBars.setStyle({ style }).catch(() => {});
}
