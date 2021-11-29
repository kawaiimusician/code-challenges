// implement a function that returns the total number of legs of all the animals

function animals(chickens, cows, pigs) {
	let chickenLegs = chickens * 2;
    let cowLegs = cows * 4;
    let pigLegs = pigs * 4;
    return chickenLegs + cowLegs + pigLegs
}

animals(2, 3, 5) // 36
animals(1, 2, 3) // 22
animals(5, 2, 8) // 50