// This Triangular Number Sequence is generated from a pattern of dots that form a triangle. The first 5 numbers of the sequence, or dots, are:
// 1, 3, 6, 10, 15
// This means that the first triangle has just one dot, the second one has three dots, the third one has 6 dots and so on.
// Write a function that returns the number of dots when given its corresponding triangle number of the sequence.

// My answer
function triangle(n) {
	if (n < 0) return;
    return n*(n+1)/2;
}

// Other answer using recursion
// function triangle (num) {
//     // if num is less than or equal to 1 return 1
//     // if you have a number 2+ you are then using recursion by calling the function on itself
//     // so if num = 2 you have:
//     // (2 - 1) + 2
//     // if num = 3 you have:
//     // (2 - 1) + (3 - 1) + 3
//     // if num = 5 you have:
//     // (2 - 1) + (3 - 1) + (4 - 1) + (5 - 1) + 5
//     // the + num at the end will always be the same, it just adds onto it as you go along. So in (2 - 1) + (3 - 1) + 3 your (3 - 1) + 3 becomes num and then adds on 3-1 or 2 minus 1 becoming the final (2 - 1) + (3 - 1) + 3
//     num <= 1 ? 1 : triangle(num - 1) + num
// };


console.log(triangle(1)); // 1

console.log(triangle(6)); // 21

console.log(triangle(215)); // 23220

