
// Capitalize First letter

// Take a sentence from user
let stri = prompt("Enter a string");
// take a varaiable array and split the sentence taken from user
let array = stri.split(" ")
// empty string to store the answer
let ans = "";
// loop through the array and capitalize the first letter of each word
for (let i = 0; i < array.length; i++) {
    ans += array[i].charAt(0).toUpperCase() + array[i].slice(1) + " "
}
// print the answer
console.log(ans)
