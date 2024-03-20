/**
Question: Given an object, write a function which takes the object as input parameter and returns all the keys with falsy values as an array.

Example: 

    For the object stated below, the result is an array of keys.

    const data = {
        title: "The Thing",
        authorId: 4488,
        publishDate: undefined,
        meta: {
            type: "script",
            refId: null
        },
        sigma: [{
            name: ["temporal"],
            value: 0
        }, {
            name: "variational",
            value: 1
        }]
   };

    console.log(findFalsy(data));  // prints ['publishDate', 'refId', 'value']
*/

const data = {
  title: "The Thing",
  authorId: 4488,
  publishDate: undefined,
  meta: {
    type: "script",
    refId: null,
  },
  sigma: [
    {
      name: ["temporal"],
      value: 0,
    },
    {
      name: "variational",
      value: 1,
    },
  ],
};

data._proto__ = metada;

data.circle = data;
function findFalsy(data, result = []) {
  // Write your code here
  for (const key in data) {
    if (Object.hasOwnProperty.call(data, key)) {
      const element = data[key];
      if (element && typeof element === "object") {
        if (element === data) {
          return result;
        }
        findFalsy(element, result);
      } else {
        if (!element) {
          result.push(key);
        }
      }
    }
  }
  return result;
}
let res = findFalsy(data);
console.log("res", res);
