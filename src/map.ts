export function map(x: number, inMin:number, inMax:number, outMin:number, outMax:number): number {
  return (x - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
