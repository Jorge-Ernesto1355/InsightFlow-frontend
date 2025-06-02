export function top5Importance(
  data: Record<string, number>
): Array<{ name: string; value: number }> {
  return Object.entries(data)
    .sort((a, b) => (b[1] as number) - (a[1] as number)) // Orden descendente por valor
    .slice(0, 5) // Tomar los primeros 5
    .map(([key, value]) => ({
      name: key,
      value: Math.round(value * 100) / 100,
    }));
}
