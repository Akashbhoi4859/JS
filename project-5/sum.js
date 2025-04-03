let num=Number(prompt("Enter a number"));
let sum=0;
let i=1;
while(num>0){
    sum+=num;
    i*=num;
    num--;
}


console.log(`Sum is ${sum}`);
console.log(`Product is ${i}`);