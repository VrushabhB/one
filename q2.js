/**
Question: Given a set of arrays of numbers, determine which number occurs the most frequently.

Example:

    const a = [1, 5, 2, 5, 3, 7, 3, 5, 9, 0];
    const b = [2, 4, 7, 5, 1, 5, 8];
    const c = [5, 5, 7, 6];
    const d = [5, 5, 5, 7, 7, 7, 7, 7];

    getMostFrequent([a,b,c,d]); // prints 5

*/

function getMostFrequent(arr) {
  // Your code here
  let map = new Map();
  for (const subArr of arr) {
    for (let num of subArr) {
      if (map.has(num)) {
        map.set(num, map.get(num) + 1);
      } else {
        map.set(num, 1);
      }
    }
  }
  let max = 0;
  let num;
  for (const entry of map.entries()) {
    const [key, value] = entry;
    if (max < value) {
      num = key;
      max = value;
    }
  }
  return num;

  //   console.log(map.entries());
}
const a = [1, 5, 2, 5, 3, 7, 3, 5, 9, 0];
const b = [2, 4, 7, 5, 1, 5, 8];
const c = [5, 5, 7, 6, 7, 7, 7];
const d = [5, 5, 5, 7, 7, 7, 7, 7];

const res = getMostFrequent([a, b, c, d]); // prints 5
console.log("res", res);
