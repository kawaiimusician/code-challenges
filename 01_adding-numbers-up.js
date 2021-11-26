// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

function addUp(num) {
    let finalNum = 0;
	for (let i = 0; i <= num; i++) {
        finalNum = finalNum + i;
    }
    return finalNum;
}

addUp(4)
addUp(13)
addUp(600)