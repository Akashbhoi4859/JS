function swap(){
    let no1 = Number(document.getElementById("num1").value);
let no2 = Number(document.getElementById("num2").value);
let temp;

temp =no1;
no1 = no2;
no2 = temp;
no1.innerText=no1;
no2.innerText=no2;
console.log(no1, no2); 


}




