class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
	if (Math.random() < 0.2) {
		return a * b
	} else {
		throw new MultiplicatorUnitFailure("Klunk")
	}
}

function reliableMultiply(a, b) {
	let i = 0
	for (;;) {
		console.log(i++)
		try {
			return primitiveMultiply(a, b)
		} catch (error) {
			if (!(error instanceof MultiplicatorUnitFailure)) {
				throw error
			}
		}
	}
}
console.log(reliableMultiply(8, 8))
// → 64