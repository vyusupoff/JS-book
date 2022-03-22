function numberToString(n, base = 10) {
	let result = "",
		sign = ""
	if (n < 0) {
		sign = "-"
		n = -n
	}
	do {
		result = String(n % base) + result
		n = Math.floor(n / base)
	} while (n > 0)
	return result
}
console.log(numberToString(2, 3))
