export const getRandomNumberWithVariance = (
  baseNumber: number,
  variance: number
): number => {
  const plusOrMinus = Math.random() < 0.5 ? -1 : 1;
  return baseNumber + plusOrMinus * (Math.random() * variance);
};
