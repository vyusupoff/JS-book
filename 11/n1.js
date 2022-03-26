// Run code here in the context of Chapter 11
import { bigOak } from "./crow-tech.js"
import { defineRequestType } from "./crow-tech.js"

bigOak.readStorage("food caches", (caches) => {
	let firstCache = caches[0]
	bigOak.readStorage(firstCache, (info) => {
		console.log(info)
	})
})
defineRequestType("note", (nest, content, source, done) => {
	console.log(`${nest.name} получил записку: ${content}`)
	done()
})
bigOak.send("Cow Pasture", "note", "Давайте громко каркать в 7 вечера", () =>
	console.log("Записка получена.")
)
function storage(nest, name) {
	return new Promise((resolve) => {
		nest.readStorage(name, (result) => resolve(result))
	})
}
storage(bigOak, "enemies").then((value) => console.log("Получено", value))
// findInStorage(bigOak, "events on 2017-12-21").then(console.log)
requestAnimationFrame()
