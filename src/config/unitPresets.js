export const unitPresets = Object.freeze([
  { id: 'metric', units: { temperature: 'c', wind: 'kmh', precipitation: 'mm', pressure: 'hpa', distance: 'metric' } },
  { id: 'russia', units: { temperature: 'c', wind: 'ms', precipitation: 'mm', pressure: 'mmhg', distance: 'metric' } },
  { id: 'us', units: { temperature: 'f', wind: 'mph', precipitation: 'in', pressure: 'inhg', distance: 'imperial' } },
  { id: 'uk', units: { temperature: 'c', wind: 'mph', precipitation: 'mm', pressure: 'hpa', distance: 'imperial' } }
]);
