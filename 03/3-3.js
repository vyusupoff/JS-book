function countChar(a, b) {
  let counter = 0;
  for (let i = 0; i <= a.length - 1; i++) {
    if (a[i] == b) {
      counter++;
    }
  }
  return counter;
}
console.log(countChar("wwBBmmB", "w"));
