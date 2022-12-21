
/**
 * Is date in period
 * @param startDate starting period date
 * @param endDate ending period date
 * @param currentDate current date
 * @returns booleans
 */
export default function isInPeriod(startDate: Date, endDate: Date, currentDate: Date): boolean {
    return currentDate >= startDate && currentDate <= endDate;
}