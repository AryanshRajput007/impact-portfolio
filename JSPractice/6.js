function checkEvenOrOdd(number) {
    if (typeof number !== 'number') {
        throw new Error("Input must be a number");
    }
    return number % 2 === 0 ? 'Even' : 'Odd';
}

console.log(checkEvenOrOdd(10));
console.log(checkEvenOrOdd(7)); 
