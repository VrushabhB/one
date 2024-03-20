// // Write a function that sorts the words of a sentence.
// let ip = "the dog slept in the house";
// //=> "dog house in slept the the"

// function sortString(str) {
//   return str.split(" ").sort();
// }
// let res = sortString(ip);
// console.log("res", res);

function counter() {
  let number = 0;
  return {
    add: (num) => {
      debugger;
      return number + num;
    },
    print: () => {
      console.log(number);
    },
    subtract: (num) => {
      return number - num;
    },
  };
}
var c = counter();
debugger;
c.add(5);
c.add(6);
c.print(); /// prints 11

c.subtract(4);
c.print(); /// prints 7
