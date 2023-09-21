import { bounds } from "./src/bounds";
import { conversionTable, resistances } from "./src/type2_10k_conversion";
import { map } from "./src/map";

export function resistanceToDegreesC(resistance: number): number {
	const [lower, upper] = bounds(resistance, resistances)
	const lowerDegrees = conversionTable[lower]
	const upperDegrees = conversionTable[upper]

	const degreesC = map(resistance, lower, upper, lowerDegrees['c'], upperDegrees['c'])
	return degreesC;
}

export function resistanceToDegreesF(resistance: number): number{
	const [lower, upper] = bounds(resistance, resistances)
	const lowerDegrees = conversionTable[lower]
	const upperDegrees = conversionTable[upper]

	const degreesC = map(resistance, lower, upper, lowerDegrees['f'], upperDegrees['f'])
	return degreesC;
}
console.log(resistanceToDegreesF(15852))
console.log(resistanceToDegreesC(15852))
