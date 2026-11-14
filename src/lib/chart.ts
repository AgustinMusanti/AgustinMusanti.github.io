export const scale =
  ([d0, d1]: [number, number], [r0, r1]: [number, number]) =>
  (v: number) =>
    r0 + ((v - d0) / (d1 - d0)) * (r1 - r0);

export function ticks(min: number, max: number, step: number): number[] {
  const out: number[] = [];
  for (let v = Math.ceil(min / step) * step; v <= max + 1e-9; v += step) out.push(Number(v.toFixed(6)));
  return out;
}
