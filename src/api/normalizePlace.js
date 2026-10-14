export function normalizePlace(raw) {
  return {
    name: raw.name,
    region: [raw.admin1, raw.country].filter(Boolean).join(', '),
    lat: raw.latitude,
    lon: raw.longitude
  };
}
