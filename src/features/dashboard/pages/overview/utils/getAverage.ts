export const getAverage = (values: number[] = []): number => {
  return values.reduce((acc, value) => acc + value, 0) / values.length;
};
