//Find length of string without using length inbuilt method

// input from user
let word = prompt("Enter a word to calculate its lenght: ")

// varaible name count and assign value 0
let size = 0;
// for loop and used for (in) method 
for (let lenght in word) {
    size++;
}
// output using console log
console.log("The length of string is = " + size);