function convertMinutesToHours(minutes) {
    if (minutes < 0) {
        throw new Error("Minutes cannot be negative");
    }
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours} hour${hours !== 1 ? 's' : ''} ${remainingMinutes} minute${remainingMinutes !== 1 ? 's' : ''}`;
}

console.log(convertMinutesToHours(125));
