/*
  Reverse an array using a for loop
  Example: [1,2,3,4,5,100,99,98]
  Return: [98, 99, 100, 5, 4, 3, 2, 1]
*/
function reverseArray(originalArray) {
  let reverseArray = [];
  const length = originalArray.length

  for (let i = 0; i < length; i++) {
    reverseArray[i] = originalArray[length - 1 - i];
  }

  return reverseArray;
}

arrayToReverse =  [1,2,3,4,5,100,99,98]
reversed = reverseArray(arrayToReverse)
console.log(reversed)





















module.exports = reverseArray;
