export const isString = (obj: unknown): boolean => {
  return typeof obj === 'string' || obj instanceof String
}
