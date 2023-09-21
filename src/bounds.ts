export function bounds(val: number, arr: number[]): [number, number]{
  const allLower = arr.filter(x => x < val);
  const allUpper = arr.filter(x => x > val);

  const lowerBound = Math.max(...allLower);
  const upperBound = Math.min(...allUpper);
  return [lowerBound, upperBound]
}
