
/**
 * Converts a number to millions.
 *
 * @param number - The number to convert to millions.
 * @returns The number converted to millions.
 */
function convertToMillions(number: number | string): number {
  return Number(number) / 1000000;
}

export default convertToMillions;

