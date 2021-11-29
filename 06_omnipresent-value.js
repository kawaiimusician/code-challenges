// Create a function that determines whether an input value is omnipresent for a given array.
// A value is omnipresent if it exists in every subarray inside the main array.

function isOmnipresent(arr, val) {
    let result = false;

    arr.every(el => {
        if (el.includes(val)) {
            result = true;
        } else {
            result = false;
        }
    })
    return result;
}


console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1)) // true

console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6)) // false

console.log(isOmnipresent([[5], [5], [5], [6, 5]], 5)) // true

console.log(isOmnipresent([[5], [5], [5], [6, 5]], 6)) // false