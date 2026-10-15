import { statCard } from './statCard.js';
import { aqiBar } from './aqiBar.js';
import { aqiBand } from '../../domain/aqiBand.js';
import { aqiColors } from '../../config/aqiColors.js';
import { formatValue } from '../../domain/formatValue.js';
import { tVar } from '../../i18n/tVar.js';
import { t } from '../../i18n/t.js';

export function airStat(air) {
  const value = air?.current?.european_aqi;
  if (value == null) return statCard({ label: tVar('european_aqi'), value: '—', sub: t('air.unavailable') });
  const band = aqiBand(value);
  const pm = formatValue('pm2_5', air.current.pm2_5, air.current_units.pm2_5);
  return statCard({
    label: tVar('european_aqi'), value: String(Math.round(value)), color: aqiColors[band],
    sub: `${t(`aqi.${band}`)} · PM2.5 ${pm}`, spark: aqiBar(value)
  });
}
