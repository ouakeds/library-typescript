/**
 * Padding the start of a string with a given char
 * @param str String wich you want to add padding
 * @param length The lenght you wish the string + the padding is
 * @param paddingChar The char you want to use to padd
 * @param type Set if you want to pad ge start or the end of the string (default start)
 * @returns padded string
 */
export default function addPaddingToString(str: string, length: number, paddingChar: string = '0', type: 'start' | 'end' = 'start'): string {
    if (paddingChar.length !== 1) {
        throw new Error('You can only pad a string with a string of 1 character');
    }
    const padding = paddingChar.repeat(length - str.length);
    return type === 'start' ? padding  + str : str + padding;
}