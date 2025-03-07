function emplo(){
let salary=Number(document.getElementById("salary").value);
let day=Number(document.getElementById("day").value);
let text=document.getElementById('text');
 let total=0;
 total=salary*day;
 text.innerHTML=`SALARY= ${total}$`;

}