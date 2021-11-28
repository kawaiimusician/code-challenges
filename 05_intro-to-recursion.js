function factorial(num) {
    if (num < 0){
        console.log(num)
        return
    }
    if (num === 0) {
        return 1;
    }
    return num * factorial(num - 1)
}

console.log(factorial(4)); // 24
console.log(factorial(5)); // 120
console.log(factorial(3)); // 6
console.log(factorial(2)); // 2
