class Group {
	constructor() {
		this.group = []
	}
	add(value) {
		if (!this.has(value)) {
			this.group.push(value)
		}
	}
	delete(value) {
		this.group = this.group.filter((f) => f !== value)
	}
	has(value) {
		return this.group.includes(value)
	}
	static from(ob) {
		let group = new Group()
		for (let el of ob) {
			group.add(el)
		}
		return group
	}
}

let group = Group.from([10, 20])

console.log(group.has(10))
// → true
console.log(group.has(30))
// → false

group.add(10)
group.delete(10)
console.log(group.has(10))
// → false
console.log(group)
