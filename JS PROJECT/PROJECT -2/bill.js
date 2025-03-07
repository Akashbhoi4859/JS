function bill(){
    let unit=Number(document.getElementById("unit").value);
    let text=document.getElementById('text');
    let amount=0;
    let subcharge=0;
    let total=0;
    if(unit<=50){
    amount=unit*1;
    }
    else if(unit<=150){
        amount=(50*1)+((unit-50)*2);
    }
    else if(unit<=250){
        amount=(50*1)+(100*2)+((unit-150)*3);
    }
    else
    {
        amount=(50*1)+(100*2)+(100*3)((unit-250)*4);
    }
    if(unit>150){
    subcharge=amount*0.20;
    }
       total= subcharge+amount;
       text.innerHTML=`Amount: Rs ${amount} <br>
             SUBCHARGE: Rs ${subcharge} <br>
             TOTAL: Rs ${total}`
    }