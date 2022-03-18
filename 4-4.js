function deepEqual(a, b) {
  let result = false;
  if (typeof a != "object" || typeof b != "object" || a == null || b == null) {
    result = a === b;
    return result;
  }
  let ak = Object.keys(a);
  let bk = Object.keys(b);
  if (ak.length != bk.length) {
    return result;
  }
  for (let i = 0; i <= ak.length - 1; i++) {
    if (!bk.includes(ak[i])) {
      return result;
    }
  }
  for (let i = 0; i <= bk.length - 1; i++) {
    if (!ak.includes(bk[i])) {
      return result;
    }
  }
  for (let i = 0; i <= ak.length - 1; i++) {
    let ia0 = Object.entries(a)[i][0];
    let ib0 = Object.entries(b)[i][0];
    let ia1 = Object.entries(a)[i][1];
    let ib1 = Object.entries(b)[i][1];
    console.log(ia0, ia1, ib0, ib1);
    if (ia0 !== ib0 || ia1 !== ib1) {
      return result;
    }
  }
  return true;
}
let a = { a1: 1, b1: 2, c1: 3 };
let b = { a1: 1, b1: 2, c1: 3 };
console.log(deepEqual(a, b));
