export function resolveLanguage(setting) {
  if (setting === 'ru' || setting === 'en') return setting;
  return (navigator.language || 'en').toLowerCase().startsWith('ru') ? 'ru' : 'en';
}
