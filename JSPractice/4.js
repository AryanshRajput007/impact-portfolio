function checkDataType(value) {
    return typeof value;
}

console.log(checkDataType(42));
console.log(checkDataType("Hello"));
console.log(checkDataType(true)); 
console.log(checkDataType({}));
console.log(checkDataType(null));
console.log(checkDataType(undefined)); 
console.log(checkDataType([]));
console.log(checkDataType(() => {}));
