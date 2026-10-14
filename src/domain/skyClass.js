export function skyClass(code, isDay) {
  if (code >= 95) return 'sky-storm';
  if ((code >= 71 && code <= 77) || code === 85 || code === 86) return 'sky-snow';
  if ((code >= 51 && code <= 67) || (code >= 80 && code <= 82)) return 'sky-rain';
  if (code === 45 || code === 48) return 'sky-fog';
  if (code === 3) return 'sky-cloud';
  return isDay ? 'sky-clear-day' : 'sky-clear-night';
}
