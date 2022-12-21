
/**
 * Get days beetween dates
 * @param startDate 
 * @param endDate 
 * @returns number of days
 */
export default function getDaysBetweenDates(startDate: Date, endDate: Date): number {
    return (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24);
}