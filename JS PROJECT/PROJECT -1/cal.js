
let no1=document.getElementById("num1")
let no2=document.getElementById("num2")
let ans=document.getElementById("answer")

function add()
{
    
    let j=Number(no1.value)+Number(no2.value);
    console.log(j);
    ans.value=j
    
}
function sub()
{
    
    let j=Number(no1.value)-Number(no2.value);
    console.log(j);
    ans.value=j
    
}
function div()
{
    
    let j=Number(no1.value)/Number(no2.value);
    console.log(j);
    ans.value=j
    
}
function mod()
{
    
    let j=Number(no1.value)%Number(no2.value);
    console.log(j);
    ans.value=j
    
}
function mul()
{
    
    let j=Number(no1.value)*Number(no2.value);
    console.log(j);
    ans.value=j
    
}

