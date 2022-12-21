type Value = string | number | symbol;

/**
 * Find occurences of each value in array
 * @param array
 * @returns occurences of each values in a Record
 */
export default function occurencesInArray(array: Value[]): Record<Value, number> {
    const counter: Record<string | number | symbol, number> = {};
    for (const element of array) {
      counter[element] = counter[element] || 0;
      counter[element]++;
    }
    return counter;
}