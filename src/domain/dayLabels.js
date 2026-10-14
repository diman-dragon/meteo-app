export function dayLabels(times) {
  return times
    .map((time, index) => ({ index, text: String(Number(time.slice(8, 10))) }))
    .filter((label) => label.index % 2 === 0);
}
