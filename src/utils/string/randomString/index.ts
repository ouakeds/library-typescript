import randomNumberBeetween from "../../number/randomNumberBeetween";

// Based on ascii values
const startChar = 33;
const endChar = 126;

/**
 * Generate a string with random char at a given lenght
 * @param lenght Number of letters wished
 * @returns string
 */
export default function randomString(lenght: number): string {
    return Array.from({ length: lenght }, () =>
      String.fromCharCode(randomNumberBeetween(startChar, endChar))
    ).join('');
}
  