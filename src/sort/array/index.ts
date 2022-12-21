/**
 * Sort a given array by the property given
 * A direction can be furnished to change the sort order
 * @param array Array to sort
 * @param key Focus the property to sort
 * @param direction Set a given direction
 * @returns 
 */
export default function sortArrayByKey<T extends { [key: string]: string }>(array: T[], key: keyof T, direction: 'asc' | 'desc' = 'asc'): void {
  const isAscending = direction === 'asc';
  array.sort((a: T, b: T) => {
      const { [key]: propertyValueA } = a;
      const { [key]: propertyValueB } = b;
      return propertyValueA.localeCompare(propertyValueB) * (isAscending ? 1 : -1);
  });
}