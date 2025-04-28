let temp=1;
let win=0;
let loss=0;

function number(){
let num=Number(document.getElementById("num").value);
let guess=document.getElementById("guess");
let computer=document.getElementById("computer");
let result=document.getElementById("result");
let result1=document.getElementById("result1");
guess.innerHTML=num;
let computer_num=Math.random();
 computer_num=parseInt(computer_num*10+1);
  computer.innerHTML=computer_num;
  result1.innerHTML=`your try ${temp+1} / 5`;
if(num==computer_num){
    result.innerHTML=`you will win`;
    win++;
}
else{
    result.innerHTML=`you will loss`;
    loss++;  
}

console.log(temp);



if(temp==5){
    // result1.innerHTML=`your try  0 / 5`;
    alert(`your try is 5 and you win ${win} & you loss ${loss}. your try is over`);
    temp=1;
    location.reload();
    

}
temp++;


}



