/**
 * Create a new date and add the daysToAdd,
 * Please note that a new date is returned, The current date isn't updated.
 * @param date Date to update
 * @param daysToAdd Numbers of day to add to a given date, negative numbers accepted
 * @returns new date
 */
export default function addDays(date: Date, daysToAdd: number) {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + daysToAdd);
    return newDate;
}
