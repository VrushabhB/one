/*
Question: 
    function longestIncreasingSubsequence(arr) {
        let currentLength = 1;
        let maxLength = 1;
        let maxStartIndex = 0;

        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > arr[i - 1]) {
                currentLength++;
            } else {
                if (currentLength > maxLength) {
                    maxLength = currentLength;
                    maxStartIndex = i - maxLength;
                }
                currentLength = 1;
            }
        }

        if (currentLength > maxLength) {
            maxLength = currentLength;
            maxStartIndex = arr.length - maxLength;
        }

        console.log(arr.slice(maxStartIndex, maxStartIndex + maxLength));
    }

    // Test the function
    longestIncreasingSubsequence([1, 2, 3, 2, 3, 4, 5, 1, 2]);

Example:

    For the input array [-1, -3, 0, 1, 4, 2, 6, 3, 4, 8, 18, 9, 12, 15, 16, 20],
    the long occurring sub sequence would be - [9, 12, 15, 16, 20]
*/
function longestIncreasingSubsequence(arr) {
  let currentLength = 1;
  let maxLength = 1;
  let maxStartIndex = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      currentLength++;
    } else {
      if (currentLength > maxLength) {
        maxLength = currentLength;
        maxStartIndex = i - maxLength;
      }
      currentLength = 1;
    }
  }

  if (currentLength > maxLength) {
    maxLength = currentLength;
    maxStartIndex = arr.length - maxLength;
  }

  console.log(arr.slice(maxStartIndex, maxStartIndex + maxLength));
}

let res = longestIncreasingSubsequence([
  -1, -3, 0, 1, 4, 2, 6, 3, 4, 8, 18, 9, 12, 15, 16, 20,
]);
console.log("res", res);
