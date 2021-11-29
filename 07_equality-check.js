// In this challenge, you must verify the equality of two different values given the parameters a and b.

function checkEquality(a, b) {
    if (a === b) {
        return true
    } else {
        return false
    }
}

console.log(checkEquality(1, true)) // false
// A number and a boolean: the value and type are different.

console.log(checkEquality(0, "0")) // false
// A number and a string: the type is different.

console.log(checkEquality(1,  1)) // true
// A number and a number: the type and value are equal.