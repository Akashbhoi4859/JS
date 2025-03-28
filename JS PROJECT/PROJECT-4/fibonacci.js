//Fibonacci Series

// input from user
let no = Number(prompt("Enter a number: "));
// variable and assign value 
let a = 0;
let b = 1;
let c;
// get output
console.log(a);
console.log(b);
//loop we get a series
while (no > 2) {
    c = a + b; // + of a & b
    console.log(c); // printing a c
    a = b; // b is store in a
    b = c; // c is store in b
    no--; // decrement 
}