// Find factorial using recursion

// function name factorial
function factorial(no) {
    // num is 0 or 1 then return 1
    if (no == 0 || no == 1) {
        return 1;
    }
    // function call itself
    return no * factorial(no - 1);
}
// number from user 
let number = prompt("Enter a number");
// new variable and store the function call
let ans = factorial(number);
// print the result 
console.log(`Factorial of ${number} is ${ans}`)