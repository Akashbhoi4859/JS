function check(){
    let cost=Number(document.getElementById("cost").value);
    let sell=Number(document.getElementById("sell").value);
    let text=document.getElementById("text")
    let profit=sell-cost;
    let loss=cost-sell;
    if(sell>cost){
    text.innerHTML=`profit= ${profit}$`;
    }
    else if(sell<cost){
        text.innerHTML=`loss= ${loss}$` ;  
    }
    else{
        text.innerHTML=`No loss & No profit`;
    }
    }