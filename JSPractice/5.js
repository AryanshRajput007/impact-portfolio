function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

// Example usage:
console.log(celsiusToFahrenheit(0));
console.log(fahrenheitToCelsius(32));
