// The recursive function for this challenge should return the factorial of an inputted integer. If anyone needs a refresher, factorials in mathematics are represented by an exclamation point placed to the right of a number: 4! = 4 x 3 x 2 x 1 = 24

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
