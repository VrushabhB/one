// Given an expression string exp, write a program to examine whether the pairs and the orders of “{“, “}”, “(“, “)”, “[“, “]” are correct in exp.

// Input:
let exp = "[()]{}{[()()]()}";
// Output: Balanced

// Input: exp = "[(])";
// Output: Not Balanced

let brackets = ["[", "{", "("];
function validateParan(array) {
  let result = [];
  for (let index = 0; index < array.length; index++) {
    if (brackets.includes(array[index])) {
      result.push(array[index]);
    } else {
      if (result.length) {
        let char = result.pop();
        if (
          (char === "(" && array[index] === ")") ||
          (char === "[" && array[index] === "]") ||
          (char === "{" && array[index] === "}")
        ) {
          return "Balanced";
        } else {
          return "Not Balanced";
        }
      }
    }
  }
  return result.length === 0 ? "Balanced" : "Not Balanced";
}
let res = validateParan(exp);
console.log("res", res);
