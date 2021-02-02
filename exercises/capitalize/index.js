// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// function capitalize(str) {
//   let capitalizeStr = ''
//   for (let char of str.split(' ')) {
//     capitalizeStr += `${char[0].toUpperCase()}${char.slice(1)} `
//   }
//   return capitalizeStr.trim()
// }

function capitalize(str) {
  let capitalizeStr = []
  for (let char of str.split(' ')) {
    capitalizeStr.push(`${char[0].toUpperCase()}${char.slice(1)}`)
  }
  return capitalizeStr.join(' ')
}


module.exports = capitalize;
