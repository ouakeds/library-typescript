/**
 * Padding a string to a given lenght with 0
 * @param num 
 * @param length 
 * @returns padded string
 */
function padNumber(num: number, length: number) {
    let str = num.toString();
    while (str.length < length) {
        str = '0' + str;
    }
    return str;
}

/**
 * Format a date to a specific format
 * example: formatDate(new Date(), 'YYYY-MM-DD') => '2022-12-21'
 * @param date 
 * @param format You must respect few things, your format must contain 'MM', 'DD' and 'YY' or 'YYYY'
 * @returns 
*/
export default function formatDate(date: Date, format: string) {
    const day = padNumber(date.getDate(), 2);
    const month = padNumber(date.getMonth() + 1, 2);
    const year = date.getFullYear().toString();
    let formattedDate = format
        .replace('DD', day)
        .replace('MM', month);

    if (format.includes('YYYY')) {
        formattedDate = formattedDate.replace('YYYY', year);
    } else {
        formattedDate = formattedDate.replace('YY', year.substring(2));
    }

    return formattedDate;
}