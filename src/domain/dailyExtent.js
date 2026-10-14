export function dailyExtent(daily) {
  return {
    min: Math.min(...daily.temperature_2m_min),
    max: Math.max(...daily.temperature_2m_max)
  };
}
