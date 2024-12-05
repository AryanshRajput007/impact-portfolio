function calculateTotalBill(amount) {
    if (amount < 0) {
        throw new Error("Amount cannot be negative");
    }
    const tip = amount * 0.10;
    return amount + tip;
}

// Example usage:
console.log(calculateTotalBill(100));
