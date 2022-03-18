function loop(value, ifFunction, iterFunction, mainFunction) {
	for (let i = value; ifFunction(i); i = iterFunction(i)) {
		mainFunction(i)
	}
}

loop(
	3,
	(n) => n > 0,
	(n) => n - 1,
	console.log
)
