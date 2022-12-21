
/**
 * Generate a random number of n digit
 * @param n Number of digit wished
 * @returns 
 */
export default function generateRandomNumber(n: number): number {
    return Math.floor(Math.random() * Math.pow(10, n)) + 1;
}