/**
 * Check if the date correspond to a weekend
 * @param date 
 * @returns boolean
 */
export default function isWeekend(date: Date): boolean {
    return date.getDay() % 7 === 0 || date.getDay() % 7 === 6;
}