// Write a JavaScript program that accepts a string as input and swaps the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.

function uppercase(Ds) {
    let swape= ''; 
  for (let i=0; i < Ds.length; i++) { 
    if (Ds[i] === Ds[i].toUpperCase()) {
        swape += Ds[i].toLowerCase();
    } else {
        swape += Ds[i].toUpperCase();
    }
  }
  return swape;

}
console.log(uppercase("The Quick Brown Fox"));