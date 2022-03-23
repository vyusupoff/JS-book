function promptDirection(question) {
	let result = "rig"
	if (result.toLocaleLowerCase() == "left") return "L"
	if (result.toLocaleLowerCase() == "right") return "R"
	throw new Error("Wrong direction: " + result)
}
function look() {
	if (promptDirection("Witch way?") == "L") {
		return "Home"
	} else {
		return "two angry bears"
	}
}
try {
	console.log("Pered vami", look())
} catch (error) {
	console.log("Somthing wrong: " + error)
}
