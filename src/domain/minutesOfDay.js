export function minutesOfDay(iso) {
  return Number(iso.slice(11, 13)) * 60 + Number(iso.slice(14, 16));
}
