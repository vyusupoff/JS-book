function range(start, end, step = 1) {
  let result = [];
  if (start < end) {
    for (let i = start; i <= end; i = i + step) {
      result.push(i);
    }
  }
  if (start > end) {
    for (let i = start; i >= end; i = i - step) {
      result.push(i);
    }
  }
  return result;
}
function sum(rangeToSum) {
  let result = 0;
  for (let i = 0; i <= rangeToSum.length - 1; i++) {
    result = result + rangeToSum[i];
  }
  return result;
}
let range1 = range(1, 10, 1);
console.log(range1);
console.log(range1.length);
console.log(sum(range1));
