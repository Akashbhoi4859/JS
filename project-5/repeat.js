const arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]; 
// let count1=0;
let count2=0;
let count;
for(let i=0;i<arr1.length;i++){
    let count1=0;
    arr1[i];
    for(let j=1;j<arr1.length;j++){
        if(arr1[i]==arr1[j]){
            count1++;
        }  
       
    }
    if(count1>count2)  {
          count2=count1;
          count=arr1[i];

        }

}
console.log(`value is ${count} repeat is ${count2}`);