//Union of Two Arrays




arr1=[1,2,3,4,5]
arr2=[4,5,6,7,8] 
let arr3; 
function union(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])]; 
};
console.log(union(arr1,arr2)); 