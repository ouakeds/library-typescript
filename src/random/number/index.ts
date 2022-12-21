/**
 * Give a random number beetween a range specified
 * @param min minimum value possible
 * @param max maximum value possible
 * @returns random number
 */
export default function randomNumberBeetween(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}