function arrayToList(array) {
  let list = { value: null, rest: null };
  for (let i = array.length - 1; i >= 0; i--) {
    list = { value: array.pop(), rest: list };
  }
  return list;
}
function listToArray(list) {
  let array = [];
  for (let i = list; i; i = i.rest) {
    array.push(i.value);
  }
  array.pop();
  return array;
}
function prepend(elem, list) {
  let array = listToArray(list);
  array.unshift(elem);
  let newList = arrayToList(array);
  return newList;
}
function nth(list, numb) {
  let array = listToArray(list);
  return array[numb];
}
function rnth(list, numb) {
  let result = 0;
  for (let i = list; i; i = i.rest) {
    result = i.value;
    numb--;
    if (numb < 0) {
      break;
    }
  }
  return result;
}
let a = [1, 2, 3, 4];
b = arrayToList(a);
console.log(b);
c = listToArray(b);
console.log(c);
d = prepend(0, b);
console.log(d);
e = listToArray(d);
console.log(e);
f = nth(b, 2);
console.log(f);
g = rnth(b, 2);
console.log(g);
