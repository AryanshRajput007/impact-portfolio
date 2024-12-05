function compareTwoNumbers(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        throw new Error("Both inputs must be numbers");
    }
    return num1 > num2 ? num1 : num2;
}

console.log(compareTwoNumbers(5, 10));
console.log(compareTwoNumbers(20, 15));
