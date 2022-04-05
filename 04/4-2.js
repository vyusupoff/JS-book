function reverseArray(array) {
  let result = [];
  for (let i = 0; i <= array.length - 1; i++) {
    result.unshift(array[i]);
  }
  return result;
}
a = [1, 2, 3];
console.log(reverseArray(a));
//console.log(reverseArrayInPlace(a));
