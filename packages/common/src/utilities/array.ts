export const getChunks = <TItem>(
  items: TItem[],
  chunkSize: number
): TItem[][] => {
  if (chunkSize <= 0) return [];
  const result: TItem[][] = [];
  for (let i = 0; i < items.length; i += chunkSize) {
    const chunk = items.slice(i, i + chunkSize);
    if (chunk) result.push(chunk);
  }
  return result;
};
