function demo(isPresent) {
  //   console.log(test);
  if (isPresent) {
    var test = "sdfdsfsd";
  } else {
  }
}
demo();

function removeDuplicateChar(str) {
  let map = new Map();
  for (let char of str) {
    if (map.has(char)) {
      //delete
      map.set(char, true);
    } else {
      map.set(char, false);
    }
  }
  let result = "";
  for (let entry of map.entries()) {
    const [key, value] = entry;
    if (!value) {
      result += key;
    }
  }
  return result;
}
// console.log(removeDuplicateChar("javascript react redux html java")); // "sipduxhml"

let person = {
  age: 29,
  name: "Vrushabh",
  hobbies: ["playing"],
  address: {
    pin: 411034,
    street: {
      area: "main street",
    },
  },
  demo: () => 1,
};

function deepClone(source, dest = {}) {
  for (const key in source) {
    if (Object.hasOwnProperty.call(source, key)) {
      const element = source[key];
      if (Array.isArray(element)) {
        let newArray = [];

        dest[key] = newArray;
      } else if (typeof element === "object") {
        dest[key] = deepClone(element);
      } else {
        dest[key] = element;
      }
    }
  }
  return dest;
}
// let res = deepClone(person, {});
// console.log("res", res);
// let map1 = {
//   a: [1],
//   g: [2, 3],
// };
// let map2 = {
//   a: [1],
//   d: [2, 3],
// };
// function getMapping(str) {
//   let map = new Map();
//   let index = 0;
//   for (let char of str) {
//     if (map.has(char)) {
//       index++;
//       map.get(char).push(index);
//     } else {
//       index++;
//       map.set(char, [index]);
//     }
//   }
//   return map;
// }
function checkArrayEntries(array1, array2) {
  for (let i = 0; i < array1.length; ++i) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
}
function isSimilar(str1, str2) {
  if (str1.length !== str2.length) return false;
  let map1 = getMapping(str1);
  let map2 = getMapping(str2);

  let values1 = [...map1.values()];
  let values2 = [...map2.values()];
  if (values1.length !== values2.length) return false;
  let isSame;
  for (let i = 0; i < values1.length; ++i) {
    isSame = checkArrayEntries(values1[i], values2[i]);
  }

  return isSame;
}
// let res = isSimilar("egg", "add"); // true
// console.log("res", res);
// let res2 = isSimilar("foo", "bar"); // false
// console.log("res2", res2);
// let res3 = isSimilar("paper", "title"); // true
// console.log("res3", res3);
// let res4 = isSimilar("badc", "baba"); // false
// console.log("res4", res4);

function* demo() {}
