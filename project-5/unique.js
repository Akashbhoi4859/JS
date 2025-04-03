// => find unique element from array\


let arr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]; 
let unique = []; 
arr.forEach((item) => { 
    a=0;
    unique.forEach((i)=>{
        if(item===i){
            a++;
        }
    });
    if(a===0){
        unique.push(item);
    }
});
console.log(unique); 