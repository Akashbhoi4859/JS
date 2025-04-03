// Remove Duplicates


function remove(arr) {   
    const unique = new Set(arr); 
    return Array.from(unique); 
}
console.log(remove([1, 2, 3, 4, 5, 1, 2, 3])); 