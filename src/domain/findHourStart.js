export function findHourStart(hourlyTimes, currentTime) {
  const index = hourlyTimes.findIndex((time) => time.slice(0, 13) === currentTime.slice(0, 13));
  return index < 0 ? 0 : index;
}
