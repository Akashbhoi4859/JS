
// Write a JavaScript reverse a number.
// Example x = 12345;
// Expected Output : 54321

let num = 12345;

function reverseNumber(num) {
    let rev = 0;
    while (num > 0) {
        let rem = num % 10; // 5 4 3 2 1
        rev = rev * 10 + rem; // 5 54 543 5432 54321
        num= Math.floor(num / 10);
    }
    return rev;
}
console.log(reverseNumber(num));
