// src/bounds.ts
function bounds(val, arr) {
  const allLower = arr.filter((x) => x < val);
  const allUpper = arr.filter((x) => x > val);
  const lowerBound = Math.max(...allLower);
  const upperBound = Math.min(...allUpper);
  return [lowerBound, upperBound];
}

// src/type2_10k_conversion.ts
var conversionTable = {
  323839: { f: -39, c: -39.44 },
  300974: { f: -37, c: -38.33 },
  279880: { f: -35, c: -37.22 },
  260410: { f: -33, c: -36.11 },
  242427: { f: -31, c: -35 },
  225809: { f: -29, c: -33.89 },
  210443: { f: -27, c: -32.78 },
  196227: { f: -25, c: -31.67 },
  183068: { f: -23, c: -30.56 },
  170775: { f: -21, c: -29.44 },
  159488: { f: -19, c: -28.33 },
  149024: { f: -17, c: -27.22 },
  139316: { f: -15, c: -26.11 },
  130306: { f: -13, c: -25 },
  121939: { f: -11, c: -23.89 },
  114165: { f: -9, c: -22.78 },
  106939: { f: -7, c: -21.67 },
  100218: { f: -5, c: -20.56 },
  93909: { f: -3, c: -19.44 },
  88090: { f: -1, c: -18.33 },
  82670: { f: 1, c: -17.22 },
  77620: { f: 3, c: -16.11 },
  72911: { f: 5, c: -15 },
  68518: { f: 7, c: -13.89 },
  64419: { f: 9, c: -12.78 },
  60592: { f: 11, c: -11.67 },
  57017: { f: 13, c: -10.56 },
  53647: { f: 15, c: -9.44 },
  50526: { f: 17, c: -8.33 },
  47606: { f: 19, c: -7.22 },
  44874: { f: 21, c: -6.11 },
  42317: { f: 23, c: -5 },
  39921: { f: 25, c: -3.89 },
  37676: { f: 27, c: -2.78 },
  35573: { f: 29, c: -1.67 },
  33599: { f: 31, c: -0.56 },
  31732: { f: 33, c: 0.56 },
  29996: { f: 35, c: 1.67 },
  28365: { f: 37, c: 2.78 },
  26834: { f: 39, c: 3.89 },
  25395: { f: 41, c: 5 },
  24042: { f: 43, c: 6.11 },
  22770: { f: 45, c: 7.22 },
  21573: { f: 47, c: 8.33 },
  20446: { f: 49, c: 9.44 },
  19376: { f: 51, c: 10.56 },
  18378: { f: 53, c: 11.67 },
  17437: { f: 55, c: 12.78 },
  16550: { f: 57, c: 13.89 },
  15714: { f: 59, c: 15 },
  14925: { f: 61, c: 16.11 },
  14180: { f: 63, c: 17.22 },
  13478: { f: 65, c: 18.33 },
  12814: { f: 67, c: 19.44 },
  12182: { f: 69, c: 20.56 },
  11590: { f: 71, c: 21.67 },
  11030: { f: 73, c: 22.78 },
  10501: { f: 75, c: 23.89 },
  1e4: { f: 77, c: 25 },
  9526: { f: 79, c: 26.11 },
  9078: { f: 81, c: 27.22 },
  8653: { f: 83, c: 28.33 },
  8251: { f: 85, c: 29.44 },
  7866: { f: 87, c: 30.56 },
  7505: { f: 89, c: 31.67 },
  7163: { f: 91, c: 32.78 },
  6838: { f: 93, c: 33.89 },
  6530: { f: 95, c: 35 },
  6238: { f: 97, c: 36.11 },
  5960: { f: 99, c: 37.22 },
  5697: { f: 101, c: 38.33 },
  5447: { f: 103, c: 39.44 },
  5207: { f: 105, c: 40.56 },
  4981: { f: 107, c: 41.67 },
  4766: { f: 109, c: 42.78 },
  4561: { f: 111, c: 43.89 },
  4367: { f: 113, c: 45 },
  4182: { f: 115, c: 46.11 },
  4006: { f: 117, c: 47.22 },
  3838: { f: 119, c: 48.33 },
  3679: { f: 121, c: 49.44 },
  3525: { f: 123, c: 50.56 },
  3380: { f: 125, c: 51.67 },
  3242: { f: 127, c: 52.78 },
  3111: { f: 129, c: 53.89 },
  2985: { f: 131, c: 55 },
  2865: { f: 133, c: 56.11 },
  2751: { f: 135, c: 57.22 },
  2642: { f: 137, c: 58.33 },
  2538: { f: 139, c: 59.44 },
  2438: { f: 141, c: 60.56 },
  2343: { f: 143, c: 61.67 },
  2252: { f: 145, c: 62.78 },
  2165: { f: 147, c: 63.89 },
  2082: { f: 149, c: 65 },
  2003: { f: 151, c: 66.11 },
  1927: { f: 153, c: 67.22 },
  1855: { f: 155, c: 68.33 },
  1785: { f: 157, c: 69.44 },
  1718: { f: 159, c: 70.56 },
  1655: { f: 161, c: 71.67 },
  1594: { f: 163, c: 72.78 },
  1536: { f: 165, c: 73.89 },
  1480: { f: 167, c: 75 },
  1427: { f: 169, c: 76.11 },
  1375: { f: 171, c: 77.22 },
  1326: { f: 173, c: 78.33 },
  1279: { f: 175, c: 79.44 },
  1234: { f: 177, c: 80.56 },
  1190: { f: 179, c: 81.67 },
  1149: { f: 181, c: 82.78 },
  1109: { f: 183, c: 83.89 },
  1070: { f: 185, c: 85 },
  1034: { f: 187, c: 86.11 }
};
var resistances = Object.keys(conversionTable);

// src/map.ts
function map(x, inMin, inMax, outMin, outMax) {
  return (x - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

// index.ts
function resistanceToDegreesC(resistance) {
  const [lower, upper] = bounds(resistance, resistances);
  const lowerDegrees = conversionTable[lower];
  const upperDegrees = conversionTable[upper];
  const degreesC = map(resistance, lower, upper, lowerDegrees["c"], upperDegrees["c"]);
  return degreesC;
}
function resistanceToDegreesF(resistance) {
  const [lower, upper] = bounds(resistance, resistances);
  const lowerDegrees = conversionTable[lower];
  const upperDegrees = conversionTable[upper];
  const degreesC = map(resistance, lower, upper, lowerDegrees["f"], upperDegrees["f"]);
  return degreesC;
}
console.log(resistanceToDegreesF(15852));
console.log(resistanceToDegreesC(15852));
export {
  resistanceToDegreesF,
  resistanceToDegreesC
};
