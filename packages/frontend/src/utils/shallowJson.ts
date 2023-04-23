export const shallowJson = (p: unknown, n: unknown) => {
  return JSON.stringify(p) === JSON.stringify(n)
}
