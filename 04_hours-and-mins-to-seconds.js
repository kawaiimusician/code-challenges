function convert(hours, minutes) {
	let hoursToMins = hours * 60;
    let totalMins = minutes + hoursToMins;
    return totalMins * 60;
}

convert(1, 3) // 3780
convert(2, 0) // 7200
convert(0, 0) // 0