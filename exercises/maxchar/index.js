// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let charList = {}
  let maxVal = 0
  let maxChar = ''

  for (let char of str) {
    if (!charList[char]) {
      charList[char] = 1
    } else {
      charList[char]++
    }
  }

  for (let char in charList) {
    let val = charList[char]
    if (val > maxVal) {
      maxVal = val
      maxChar = char
    }
  }

  return maxChar
}

module.exports = maxChar;
