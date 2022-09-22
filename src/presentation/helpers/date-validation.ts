export const isValidDate = (date: Date) => {
    return new Date(date).toString() !== 'Invalid Date';
}