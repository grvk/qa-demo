const reverseArray = require("./reverse_array_solution")






























/*
  Reverse a string using built-in functions for strings and arrays
  Exaample: if originalString = "Strings are easy"
  RETURN(!!!) "ysae era sgnirts"
*/
function reverseStringBuiltInFn(originalString) {
  chars = originalString.split("");
  reversedArray = chars.reverse()
  reversedString = reversedArray.join("");
  return reversedString;
}

//
// original = "Strings are easy"
// reversed = reverseStringBuiltInFn(original)
// console.log(reversed)


















/*
  Reverse a string using the reverseArray function we just wrote
  Exaample: if originalString = "Strings are easy"
  RETURN(!!!) "ysae era sgnirts"
*/
function reverseStringWithReverseArray(originalString) {
  chars = originalString.split("");
  reversedArray = reverseArray(chars);
  reversedString = reversedArray.join("");
  return reversedString;
}


//
//
// original = "Strings are easy"
// reversed = reverseStringBuiltInFn(original)
// console.log(reversed)
