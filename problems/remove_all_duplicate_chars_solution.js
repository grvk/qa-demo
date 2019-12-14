/*
Given a string, remove all duplicate chars and return string without any
duplicates.
Example: "abasdfbsadfbsadfbsadbsdfabsdfa"
Return: "absdf"
*/
function removeAllDuplicateCharsFromString(originalString) {
  chars = originalString.split("")
  noDuplicatesSet = new Set()

  for (let i = 0; i < chars.length; i++) {
    noDuplicatesSet.add(chars[i])
  }

  noDuplicatesList = []

  let addCharToArray = function(char) {
    noDuplicatesList.push(char);
  }

  noDuplicatesSet.forEach(addCharToArray)
  noDupString = noDuplicatesList.join("")

  return noDupString
}


original = "abasdfbsadfbsadfbsadbsdfabsdfa"
noDups = removeAllDuplicateCharsFromString(original)
console.log(noDups)
