// Open-Meteo data is always requested in metric units; display units are converted on the client.
import { unitTarget as target } from '../domain/unitTarget.js';

// value_shown = value * factor + offset

export const unitTargets = Object.freeze({
  temperature: { c: target(1, 'u.c', 1), f: target(1.8, 'u.f', 1, 32) },
  wind: { kmh: target(1, 'u.kmh', 0), ms: target(1 / 3.6, 'u.ms', 1), mph: target(0.621371, 'u.mph', 0), kn: target(0.539957, 'u.kn', 0) },
  precipitation: { mm: target(1, 'u.mm', 1), in: target(1 / 25.4, 'u.in', 2) },
  snowfall: { mm: target(1, 'u.cm', 1), in: target(1 / 2.54, 'u.in', 2) },
  pressure: { hpa: target(1, 'u.hpa', 0), mmhg: target(0.750062, 'u.mmhg', 0), inhg: target(0.02953, 'u.inhg', 2), kpa: target(0.1, 'u.kpa', 1) },
  visibility: { metric: target(0.001, 'u.km', 1), imperial: target(0.000621371, 'u.mi', 1) },
  freezing: { metric: target(1, 'u.m', 0), imperial: target(3.28084, 'u.ft', 0) },
  snowDepth: { metric: target(100, 'u.cm', 1), imperial: target(39.3701, 'u.in', 1) }
});
