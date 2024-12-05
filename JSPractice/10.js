function calculateAge(birthYear) {
    if (typeof birthYear !== 'number' || birthYear < 0) {
        throw new Error("Birth year must be a positive number");
    }
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
}

console.log(calculateAge(1990));
console.log(calculateAge(2000));
