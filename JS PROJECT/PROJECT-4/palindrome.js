// Check Palindrome

function palinDrome() {
    let num = prompt("Enter a number: "); // Take a number from user

    let no = num.toString();// Convert number into string 

    let reverse = no.split("").reverse().join(""); // reverse the string
    
    if (no === reverse) {  //check if original and reversed are same or not
        console.log(`${num} a palindrome`)
    }
    else {
        console.log(`${num} not palindrome`)
    }
}
// call
palinDrome();