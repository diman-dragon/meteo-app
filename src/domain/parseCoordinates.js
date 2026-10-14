export function parseCoordinates(latText, lonText) {
  const lat = Number(String(latText).replace(',', '.'));
  const lon = Number(String(lonText).replace(',', '.'));
  const valid = String(latText).trim() !== '' && String(lonText).trim() !== ''
    && Number.isFinite(lat) && Number.isFinite(lon)
    && Math.abs(lat) <= 90 && Math.abs(lon) <= 180;
  return valid ? { lat, lon } : null;
}
