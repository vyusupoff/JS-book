// Run code here in the context of Chapter 11
import { bigOak } from "./crow-tech"

bigOak.readStorage("food caches", (caches) => {
	let firstCache = caches[0]
	bigOak.readStorage(firstCache, (info) => {
		console.log(info)
	})
})

// findInStorage(bigOak, "events on 2017-12-21").then(console.log)
