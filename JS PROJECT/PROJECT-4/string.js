
// Sort String Alphabetically

// Take word from user for sorting
let alphaBet = prompt("Enter a small word to sort in alphabetic way")
// sort the word alphabetically
let sortAlphabet = alphaBet.split('').sort().join('')
// printing original and sorted alphabet using console log

console.log(`Original string is ${alphaBet}`)
// printing sorted string
console.log(`Sorted string is ${sortAlphabet}`)
