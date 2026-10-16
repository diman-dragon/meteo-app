const ONLY_IMPORTERS = {
  refreshWeather: ['src/ui/components/refreshButton.js'],
  fetchForecast: ['src/flows/refreshWeather.js'],
  fetchAirQuality: ['src/flows/refreshWeather.js'],
  loadHistory: ['src/ui/history/historyForm.js', 'src/ui/history/quickDates.js'],
  fetchHistory: ['src/flows/loadHistory.js'],
  fetchHistoryAir: ['src/flows/loadHistory.js']
};
const FORBIDDEN_TRIGGERS = [/setInterval/, /visibilitychange/, /appStateChange/, /'resume'/, /'online'/, /networkStatusChange/];

export function ruleUpdateOnClickOnly(files) {
  const problems = [];
  for (const file of files.filter((f) => f.path.endsWith('.js'))) {
    for (const pattern of FORBIDDEN_TRIGGERS) if (pattern.test(file.text)) problems.push(`${file.path}: automatic trigger ${pattern} is forbidden`);
    for (const [name, allowed] of Object.entries(ONLY_IMPORTERS)) {
      const imports = new RegExp(`import\\s*\\{[^}]*\\b${name}\\b[^}]*\\}`).test(file.text);
      if (imports && !allowed.includes(file.path)) problems.push(`${file.path}: ${name} may be imported only by ${allowed.join(', ')}`);
    }
  }
  return problems;
}
