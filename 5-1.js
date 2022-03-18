let arrays = [[1, 2, 3], [4, 5], [6]]
let array = arrays.reduce((current, next) => current.concat(next))
console.log(array)
// → [1, 2, 3, 4, 5, 6]
