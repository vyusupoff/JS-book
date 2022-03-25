new Promise((_, reject) => reject(new Error("Сбой")))
	.then((value) => console.log("Обработчик 1"))
	.catch((reason) => {
		console.log("Обнаружен сбой " + reason)
		return "ничего"
	})
	.then((value) => console.log("Обработчик 2", value))
