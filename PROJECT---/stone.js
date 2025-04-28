
    function start(select1){


        
        let result=document.getElementById("result");
        let computer_num=Math.random();
        computer_num=parseInt(computer_num*10+1);
        let computer_chosse="";
        
        if(computer_num >0 && computer_num <4){
computer_chosse="stone";
        }
        
        if(computer_num >3 && computer_num <7){
computer_chosse="paper";
        }
        
        if(computer_num >6 && computer_num <11){
computer_chosse="scissors";
        }
      
        
       if(computer_chosse==select1){
        result.innerHTML=`you chosse ${select1} and computer chosse ${computer_chosse}. Game will be TIE `;}

    else if (select1=="stone" && computer_chosse=="scissors") {
        result.innerHTML=`you chosse ${select1} and computer chosse ${computer_chosse}. you will be win `;
}
 else if(select1=="paper" && computer_chosse=="stone") {
        result.innerHTML=`you chosse ${select1} and computer chosse ${computer_chosse}. you will be win `;
}
 else if(select1=="scissors" && computer_chosse=="paper") {
        result.innerHTML=`you chosse ${select1} and computer chosse ${computer_chosse}. you will be win `;
}
       else{
        result.innerHTML=`you chosse ${select1} and computer chosse ${computer_chosse}. you will be loss`;
       }
    }
