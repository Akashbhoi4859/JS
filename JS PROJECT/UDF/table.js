// multiplication table using map
let num = Number(prompt("ENTER ANY NUMBER FOR TABLE"))
let n = [1,2,3,4,5,6,7,8,9,10]
const table = n.map((value)=>{
    document.write(`${num} * ${value} = ${value*num} <br>`);
})