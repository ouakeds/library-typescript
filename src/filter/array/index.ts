/**
 * Search in array if the value is included in a property
 * @param array the array to check
 * @param value Value to find inside each element of the array
 * @returns filteredArray
 */
export default function filterArrayByValue<T extends { [key: string]: string }>(array: T[], value: string): T[] {
  return array.filter((element: T) => {
    for (const key in element) {
      if (element[key].includes(value))
        return true;
    }
    return false
  })
}